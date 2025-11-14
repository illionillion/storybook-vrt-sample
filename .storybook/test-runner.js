/* global expect */
// Storybook Test Runner 設定例
import { toMatchImageSnapshot } from "jest-image-snapshot";

const VIEWPORT = { width: 1280, height: 800 };

export default {
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },
  /**
   * VRTタグフィルタリング設定
   * @description
   * この設定により、`tags: ['vrt']` が付与されたStoryのみがVRT（Visual Regression Test）のテスト対象となります。
   * タグが付与されていないStoryは全てテスト対象外となるため、VRTテストを追加したい場合はStory側で`tags: ['vrt']`を明示してください。
   * 将来的なStory追加・メンテナンス時はこの仕様に注意してください。
   */
  tags: {
    include: ["vrt"],
  },
  async preVisit(page) {
    // 画面幅を明示的に指定
    await page.setViewportSize(VIEWPORT);
    // ライトモードを強制（ダークモードを無効化）
    await page.emulateMedia({ colorScheme: 'light' });
  },
  async postVisit(page, context) {
    // CSSとフォントの読み込みを待つ
    await page.waitForLoadState('networkidle');
    // 追加の待機時間（アニメーションやレンダリング完了のため）
    await page.waitForTimeout(500);
    
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot({
      customSnapshotsDir: "__image_snapshots__",
      customSnapshotIdentifier: context.id,
    });
  },
};

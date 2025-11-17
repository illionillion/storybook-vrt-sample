import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Accordion } from ".";

describe("Accordion", () => {
  it("propsで渡したtitleがボタンに表示される", () => {
    render(
      <Accordion title="テストタイトル">
        <p>テストコンテンツ</p>
      </Accordion>
    );

    const button = screen.getByRole("button", { name: /テストタイトル/ });
    expect(button).toBeInTheDocument();
  });

  describe("非制御コンポーネント", () => {
    it("ボタンをクリックするとコンテンツが開閉する", async () => {
      const user = userEvent.setup();
      
      render(
        <Accordion title="テストタイトル">
          <p>テストコンテンツ</p>
        </Accordion>
      );

      const button = screen.getByRole("button");
      // regionは aria-hidden="true" なので queryByRole を使用
      const region = screen.getByRole("region", { hidden: true });

      // 初期状態：閉じている
      expect(button).toHaveAttribute("aria-expanded", "false");
      expect(region).toHaveAttribute("aria-hidden", "true");

      // クリック後：開く
      await user.click(button);
      expect(button).toHaveAttribute("aria-expanded", "true");
      expect(region).toHaveAttribute("aria-hidden", "false");
    });
  });

  describe("制御されたコンポーネント", () => {
    it("isOpenとonToggleが渡された時は制御されたコンポーネントとして動作する", async () => {
      const user = userEvent.setup();
      const mockOnToggle = vi.fn();
      
      render(
        <Accordion
          title="テストタイトル"
          isOpen={false}
          onToggle={mockOnToggle}
        >
          <p>テストコンテンツ</p>
        </Accordion>
      );

      const button = screen.getByRole("button");

      // 初期状態：閉じている
      expect(button).toHaveAttribute("aria-expanded", "false");

      // クリック時にonToggleが呼ばれる
      await user.click(button);
      expect(mockOnToggle).toHaveBeenCalledTimes(1);
    });
  });

  it("isDisabledがtrueの時はクリックしても開閉しない", async () => {
    const user = userEvent.setup();
    
    render(
      <Accordion title="テストタイトル" isDisabled={true}>
        <p>テストコンテンツ</p>
      </Accordion>
    );

    const button = screen.getByRole("button");

    // 初期状態：閉じている
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(button).toHaveAttribute("aria-disabled", "true");

    // クリックしても状態が変わらない
    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});
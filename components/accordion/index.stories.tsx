import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect, userEvent, within } from '@storybook/test';
import { Accordion } from '.';
import './index.css';
import React, { useState } from 'react';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'アコーディオンコンポーネント。制御されたコンポーネントと非制御コンポーネントの両方で使用できます。',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'アコーディオンのタイトル',
    },
    children: {
      control: 'text',
      description: 'アコーディオンの内容',
    },
    isDisabled: {
      control: 'boolean',
      description: 'アコーディオンを無効にするかどうか',
    },
    defaultOpen: {
      control: 'boolean',
      description: '非制御コンポーネントでの初期開閉状態',
    },
    isOpen: {
      control: 'boolean',
      description: '制御されたコンポーネントでの開閉状態',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 基本的な使用例
export const Default: Story = {
  tags: ['vrt'],
  args: {
    title: 'アコーディオンのタイトル',
    children: 'ここにアコーディオンの内容が入ります。長いテキストでも適切に表示されます。',
  },
};

// 初期状態で開いている
export const DefaultOpen: Story = {
  tags: ['vrt'],
  args: {
    title: '最初から開いているアコーディオン',
    children: 'このアコーディオンは初期状態で開いています。',
    defaultOpen: true,
  },
};

// 無効状態
export const Disabled: Story = {
  tags: ['vrt'],
  args: {
    title: '無効なアコーディオン',
    children: 'このアコーディオンは無効化されており、クリックできません。',
    isDisabled: true,
  },
};

// 長いコンテンツ
export const LongContent: Story = {
  args: {
    title: '長いコンテンツのアコーディオン',
    children: (
      <div>
        <h3>セクション1</h3>
        <p>
          これは長いコンテンツの例です。アコーディオンは任意の長さのコンテンツを含むことができます。
          複数の段落、リスト、その他のHTML要素を含むことができます。
        </p>
        <h3>セクション2</h3>
        <ul>
          <li>リストアイテム1</li>
          <li>リストアイテム2</li>
          <li>リストアイテム3</li>
        </ul>
        <p>
          アニメーションは滑らかで、長いコンテンツでも適切に動作します。
          レスポンシブデザインにも対応しており、様々なデバイスで美しく表示されます。
        </p>
      </div>
    ),
  },
};

// 複数のアコーディオン
export const MultipleAccordions: Story = {
  tags: ['vrt'],
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Accordion title="アコーディオン1" defaultOpen>
        最初のアコーディオンの内容です。
      </Accordion>
      <Accordion title="アコーディオン2">
        二番目のアコーディオンの内容です。
      </Accordion>
      <Accordion title="アコーディオン3">
        三番目のアコーディオンの内容です。
      </Accordion>
      <Accordion title="無効なアコーディオン" isDisabled>
        このアコーディオンは無効化されています。
      </Accordion>
    </div>
  ),
};

// 複数の排他的アコーディオン
export const ExclusiveAccordions: Story = {
  tags: ['test'],
  render: () => {

    const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

    const handleAccordionToggle = (id: string) => {
      // 同じアコーディオンをクリックした場合は閉じる、違う場合は切り替える
      setActiveAccordion(activeAccordion === id ? null : id);
    };

    const faqData = [
      {
        id: "account",
        title: "アカウントについて",
        content:
          "アカウントの作成、ログイン、パスワードの変更方法について説明します。",
      },
      {
        id: "pricing",
        title: "料金について",
        content: "料金プラン、支払い方法、請求書の発行について説明します。",
      },
      {
        id: "support",
        title: "サポートについて",
        content: "お問い合わせ方法、サポート時間、対応範囲について説明します。",
      },
      {
        id: "security",
        title: "セキュリティについて",
        content:
          "データの暗号化、プライバシー保護、セキュリティ対策について説明します。",
      },
    ];

    return (
      <div className="faq-page">
        <header>
          <h1>よくある質問（FAQ）</h1>
          <p>お困りのことがございましたら、まずはこちらをご確認ください。</p>
        </header>

        <main className="faq-content">
          {faqData.map((faq) => (
            <Accordion
              key={faq.id}
              title={faq.title}
              isOpen={activeAccordion === faq.id}
              onToggle={() => handleAccordionToggle(faq.id)}
            >
              <p>{faq.content}</p>
            </Accordion>
          ))}
        </main>

        <footer>
          <p>
            解決しない場合は<a href="/contact">お問い合わせ</a>ください。
          </p>
        </footer>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // ページタイトルが表示されることを確認
    await expect(canvas.getByRole('heading', { name: 'よくある質問（FAQ）' })).toBeInTheDocument();

    // 4つのアコーディオンが表示されることを確認
    const accountButton = canvas.getByRole('button', { name: 'アカウントについて' });
    const pricingButton = canvas.getByRole('button', { name: '料金について' });
    const supportButton = canvas.getByRole('button', { name: 'サポートについて' });
    const securityButton = canvas.getByRole('button', { name: 'セキュリティについて' });

    await expect(accountButton).toBeInTheDocument();
    await expect(pricingButton).toBeInTheDocument();
    await expect(supportButton).toBeInTheDocument();
    await expect(securityButton).toBeInTheDocument();

    // 最初は全て閉じている状態
    await expect(accountButton).toHaveAttribute('aria-expanded', 'false');
    await expect(pricingButton).toHaveAttribute('aria-expanded', 'false');

    // アカウントのアコーディオンを開く
    await userEvent.click(accountButton);
    await expect(accountButton).toHaveAttribute('aria-expanded', 'true');
    await expect(canvas.getByText('アカウントの作成、ログイン、パスワードの変更方法について説明します。')).toBeInTheDocument();

    // 料金のアコーディオンを開く（アカウントは自動で閉じる）
    await userEvent.click(pricingButton);
    await expect(pricingButton).toHaveAttribute('aria-expanded', 'true');
    await expect(accountButton).toHaveAttribute('aria-expanded', 'false'); // 排他制御の確認
    await expect(canvas.getByText('料金プラン、支払い方法、請求書の発行について説明します。')).toBeInTheDocument();
    await expect(canvas.queryByText('アカウントの作成、ログイン、パスワードの変更方法について説明します。')).not.toBeInTheDocument();

    // サポートのアコーディオンを開く
    await userEvent.click(supportButton);
    await expect(supportButton).toHaveAttribute('aria-expanded', 'true');
    await expect(pricingButton).toHaveAttribute('aria-expanded', 'false');
    await expect(canvas.getByText('お問い合わせ方法、サポート時間、対応範囲について説明します。')).toBeInTheDocument();

    // 同じボタンをクリックして閉じる
    await userEvent.click(supportButton);
    await expect(supportButton).toHaveAttribute('aria-expanded', 'false');
    await expect(canvas.queryByText('お問い合わせ方法、サポート時間、対応範囲について説明します。')).not.toBeInTheDocument();

    // セキュリティのアコーディオンを開く
    await userEvent.click(securityButton);
    await expect(securityButton).toHaveAttribute('aria-expanded', 'true');
    await expect(canvas.getByText('データの暗号化、プライバシー保護、セキュリティ対策について説明します。')).toBeInTheDocument();
  }
}

// 制御されたコンポーネントの例
export const ControlledAccordion: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <div>
        <div style={{ marginBottom: '16px' }}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            外部ボタンで{isOpen ? '閉じる' : '開く'}
          </button>
        </div>
        <Accordion
          title="制御されたアコーディオン"
          isOpen={isOpen}
          onToggle={() => setIsOpen(!isOpen)}
        >
          このアコーディオンは外部のボタンからも制御できます。
        </Accordion>
      </div>
    );
  },
};


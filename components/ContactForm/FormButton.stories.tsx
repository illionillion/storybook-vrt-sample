import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect, userEvent, within } from '@storybook/test';
import { FormButton } from './FormButton';
import { fn } from '@storybook/test';

const meta: Meta<typeof FormButton> = {
  title: 'Components/ContactForm/FormButton',
  component: FormButton,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'フォーム送信ボタンコンポーネント。送信、リセット、一般的なボタンとして使用できます。',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'ボタンのテキスト',
    },
    type: {
      control: 'select',
      options: ['submit', 'button', 'reset'],
      description: 'ボタンのタイプ',
    },
    disabled: {
      control: 'boolean',
      description: 'ボタンを無効にするかどうか',
    },
    onClick: {
      description: 'クリック時のコールバック',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// デフォルト状態
export const Default: Story = {
  tags: ['vrt'],
  args: {
    children: '送信する',
    type: 'submit',
    disabled: false,
  },
};

// 無効状態
export const Disabled: Story = {
  tags: ['vrt'],
  args: {
    children: '送信する',
    type: 'submit',
    disabled: true,
  },
};

// 送信中状態
export const Submitting: Story = {
  tags: ['vrt'],
  args: {
    children: '送信中...',
    type: 'submit',
    disabled: true,
  },
};

// ボタンタイプ
export const ButtonType: Story = {
  tags: ['vrt'],
  args: {
    children: 'キャンセル',
    type: 'button',
    disabled: false,
  },
};

// リセットタイプ
export const ResetType: Story = {
  tags: ['vrt'],
  args: {
    children: 'リセット',
    type: 'reset',
    disabled: false,
  },
};

// 長いテキスト
export const LongText: Story = {
  tags: ['vrt'],
  args: {
    children: 'お問い合わせ内容を送信する',
    type: 'submit',
    disabled: false,
  },
};

// インタラクションテスト - クリック
export const ClickInteraction: Story = {
  args: {
    children: '送信する',
    type: 'button',
    disabled: false,
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

// インタラクションテスト - 無効状態でクリック
export const DisabledClickInteraction: Story = {
  args: {
    children: '送信する',
    type: 'button',
    disabled: true,
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    
    await userEvent.click(button);
    // 無効状態なのでonClickは呼ばれない
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

// ホバー状態（VRT用）
export const Hover: Story = {
  tags: ['vrt'],
  args: {
    children: '送信する',
    type: 'submit',
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    
    await userEvent.hover(button);
  },
};

// フォーカス状態（VRT用）
export const Focus: Story = {
  tags: ['vrt'],
  args: {
    children: '送信する',
    type: 'submit',
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    
    button.focus();
  },
};

import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect, userEvent, within } from '@storybook/test';
import { FormField } from './FormField';
import { useState } from 'react';

const meta: Meta<typeof FormField> = {
  title: 'Components/ContactForm/FormField',
  component: FormField,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'フォームフィールドコンポーネント。テキスト入力、メール入力、テキストエリアをサポートしています。',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'フィールドのラベル',
    },
    id: {
      control: 'text',
      description: 'フィールドのID',
    },
    name: {
      control: 'text',
      description: 'フィールドの名前',
    },
    value: {
      control: 'text',
      description: 'フィールドの値',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'textarea'],
      description: 'フィールドのタイプ',
    },
    placeholder: {
      control: 'text',
      description: 'プレースホルダーテキスト',
    },
    error: {
      control: 'text',
      description: 'エラーメッセージ',
    },
    required: {
      control: 'boolean',
      description: '必須フィールドかどうか',
    },
    rows: {
      control: 'number',
      description: 'テキストエリアの行数',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 制御されたコンポーネントのラッパー
const ControlledFormField = (args: any) => {
  const [value, setValue] = useState(args.value || '');
  
  return (
    <FormField
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

// テキストフィールド - デフォルト
export const TextFieldDefault: Story = {
  render: (args) => <ControlledFormField {...args} />,
  args: {
    label: 'お名前',
    id: 'name',
    name: 'name',
    type: 'text',
    placeholder: '山田太郎',
    required: true,
  },
};

// テキストフィールド - 値入力済み
export const TextFieldWithValue: Story = {
  render: (args) => <ControlledFormField {...args} />,
  args: {
    label: 'お名前',
    id: 'name',
    name: 'name',
    type: 'text',
    placeholder: '山田太郎',
    value: '山田太郎',
    required: true,
  },
};

// テキストフィールド - エラー状態
export const TextFieldWithError: Story = {
  render: (args) => <ControlledFormField {...args} />,
  args: {
    label: 'お名前',
    id: 'name',
    name: 'name',
    type: 'text',
    placeholder: '山田太郎',
    error: 'お名前は必須です',
    required: true,
  },
};

// メールフィールド - デフォルト
export const EmailFieldDefault: Story = {
  render: (args) => <ControlledFormField {...args} />,
  args: {
    label: 'メールアドレス',
    id: 'email',
    name: 'email',
    type: 'email',
    placeholder: 'example@example.com',
    required: true,
  },
};

// メールフィールド - エラー状態
export const EmailFieldWithError: Story = {
  render: (args) => <ControlledFormField {...args} />,
  args: {
    label: 'メールアドレス',
    id: 'email',
    name: 'email',
    type: 'email',
    placeholder: 'example@example.com',
    error: '有効なメールアドレスを入力してください',
    required: true,
  },
};

// テキストエリア - デフォルト
export const TextareaDefault: Story = {
  render: (args) => <ControlledFormField {...args} />,
  args: {
    label: 'メッセージ',
    id: 'message',
    name: 'message',
    type: 'textarea',
    placeholder: 'お問い合わせ内容をご記入ください',
    required: true,
    rows: 6,
  },
};

// テキストエリア - 値入力済み
export const TextareaWithValue: Story = {
  render: (args) => <ControlledFormField {...args} />,
  args: {
    label: 'メッセージ',
    id: 'message',
    name: 'message',
    type: 'textarea',
    placeholder: 'お問い合わせ内容をご記入ください',
    value: 'これはサンプルのメッセージです。\n複数行のテキストを入力できます。',
    required: true,
    rows: 6,
  },
};

// テキストエリア - エラー状態
export const TextareaWithError: Story = {
  render: (args) => <ControlledFormField {...args} />,
  args: {
    label: 'メッセージ',
    id: 'message',
    name: 'message',
    type: 'textarea',
    placeholder: 'お問い合わせ内容をご記入ください',
    error: 'メッセージは10文字以上入力してください',
    required: true,
    rows: 6,
  },
};

// 必須でないフィールド
export const NotRequired: Story = {
  render: (args) => <ControlledFormField {...args} />,
  args: {
    label: '会社名',
    id: 'company',
    name: 'company',
    type: 'text',
    placeholder: '株式会社サンプル',
    required: false,
  },
};

// インタラクションテスト - テキスト入力
export const TextInputInteraction: Story = {
  render: (args) => <ControlledFormField {...args} />,
  args: {
    label: 'お名前',
    id: 'name',
    name: 'name',
    type: 'text',
    placeholder: '山田太郎',
    required: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('山田太郎');
    
    await userEvent.type(input, '山田太郎');
    await expect(input).toHaveValue('山田太郎');
  },
};

// インタラクションテスト - テキストエリア入力
export const TextareaInputInteraction: Story = {
  render: (args) => <ControlledFormField {...args} />,
  args: {
    label: 'メッセージ',
    id: 'message',
    name: 'message',
    type: 'textarea',
    placeholder: 'お問い合わせ内容をご記入ください',
    required: true,
    rows: 6,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByPlaceholderText('お問い合わせ内容をご記入ください');
    
    await userEvent.type(textarea, 'これはテストメッセージです。');
    await expect(textarea).toHaveValue('これはテストメッセージです。');
  },
};

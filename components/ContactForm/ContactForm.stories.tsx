import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect, userEvent, within, waitFor } from '@storybook/test';
import { ContactForm } from './ContactForm';
import { fn } from '@storybook/test';

const meta: Meta<typeof ContactForm> = {
  title: 'Components/ContactForm',
  component: ContactForm,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'お問い合わせフォームコンポーネント。名前、メールアドレス、件名、メッセージを入力できます。',
      },
    },
  },
  argTypes: {
    onSubmit: {
      description: 'フォーム送信時のコールバック',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// デフォルト状態
export const Default: Story = {
  tags: ['vrt'],
  args: {},
};

// すべてのフィールドにエラーがある状態
export const WithAllErrors: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByRole('button', { name: /送信する/ });
    
    // フォームを送信してバリデーションエラーを表示
    await userEvent.click(submitButton);
  },
};

// 一部のフィールドが入力済み
export const PartiallyFilled: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    const nameInput = canvas.getByPlaceholderText('山田太郎');
    const emailInput = canvas.getByPlaceholderText('example@example.com');
    
    await userEvent.type(nameInput, '山田太郎');
    await userEvent.type(emailInput, 'yamada@example.com');
  },
};

// すべてのフィールドが入力済み
export const FullyFilled: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    const nameInput = canvas.getByPlaceholderText('山田太郎');
    const emailInput = canvas.getByPlaceholderText('example@example.com');
    const subjectInput = canvas.getByPlaceholderText('お問い合わせの件名');
    const messageInput = canvas.getByPlaceholderText('お問い合わせ内容をご記入ください');
    
    await userEvent.type(nameInput, '山田太郎');
    await userEvent.type(emailInput, 'yamada@example.com');
    await userEvent.type(subjectInput, '商品に関するお問い合わせ');
    await userEvent.type(messageInput, 'こんにちは。商品の在庫状況について教えていただけますでしょうか。よろしくお願いいたします。');
  },
};

// 名前フィールドのエラー
export const NameFieldError: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    const emailInput = canvas.getByPlaceholderText('example@example.com');
    const subjectInput = canvas.getByPlaceholderText('お問い合わせの件名');
    const messageInput = canvas.getByPlaceholderText('お問い合わせ内容をご記入ください');
    const submitButton = canvas.getByRole('button', { name: /送信する/ });
    
    // 名前以外を入力
    await userEvent.type(emailInput, 'yamada@example.com');
    await userEvent.type(subjectInput, '商品に関するお問い合わせ');
    await userEvent.type(messageInput, 'こんにちは。商品の在庫状況について教えていただけますでしょうか。');
    
    // 送信してエラーを表示
    await userEvent.click(submitButton);
  },
};

// メールアドレスフィールドのエラー（無効な形式）
export const EmailFieldError: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    const nameInput = canvas.getByPlaceholderText('山田太郎');
    const emailInput = canvas.getByPlaceholderText('example@example.com');
    const subjectInput = canvas.getByPlaceholderText('お問い合わせの件名');
    const messageInput = canvas.getByPlaceholderText('お問い合わせ内容をご記入ください');
    const submitButton = canvas.getByRole('button', { name: /送信する/ });
    
    // 無効なメールアドレスを入力
    await userEvent.type(nameInput, '山田太郎');
    await userEvent.type(emailInput, 'invalid-email');
    await userEvent.type(subjectInput, '商品に関するお問い合わせ');
    await userEvent.type(messageInput, 'こんにちは。商品の在庫状況について教えていただけますでしょうか。');
    
    // 送信してエラーを表示
    await userEvent.click(submitButton);
  },
};

// メッセージフィールドのエラー（10文字未満）
export const MessageFieldError: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    const nameInput = canvas.getByPlaceholderText('山田太郎');
    const emailInput = canvas.getByPlaceholderText('example@example.com');
    const subjectInput = canvas.getByPlaceholderText('お問い合わせの件名');
    const messageInput = canvas.getByPlaceholderText('お問い合わせ内容をご記入ください');
    const submitButton = canvas.getByRole('button', { name: /送信する/ });
    
    // 短いメッセージを入力
    await userEvent.type(nameInput, '山田太郎');
    await userEvent.type(emailInput, 'yamada@example.com');
    await userEvent.type(subjectInput, '商品に関するお問い合わせ');
    await userEvent.type(messageInput, '短い');
    
    // 送信してエラーを表示
    await userEvent.click(submitButton);
  },
};

// インタラクションテスト - 正常な送信
export const SuccessfulSubmit: Story = {
  args: {
    onSubmit: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    
    const nameInput = canvas.getByPlaceholderText('山田太郎');
    const emailInput = canvas.getByPlaceholderText('example@example.com');
    const subjectInput = canvas.getByPlaceholderText('お問い合わせの件名');
    const messageInput = canvas.getByPlaceholderText('お問い合わせ内容をご記入ください');
    const submitButton = canvas.getByRole('button', { name: /送信する/ });
    
    // すべてのフィールドに有効な値を入力
    await userEvent.type(nameInput, '山田太郎');
    await userEvent.type(emailInput, 'yamada@example.com');
    await userEvent.type(subjectInput, '商品に関するお問い合わせ');
    await userEvent.type(messageInput, 'こんにちは。商品の在庫状況について教えていただけますでしょうか。よろしくお願いいたします。');
    
    // 送信
    await userEvent.click(submitButton);
    
    // onSubmitが呼ばれることを確認
    await waitFor(() => {
      expect(args.onSubmit).toHaveBeenCalledWith({
        name: '山田太郎',
        email: 'yamada@example.com',
        subject: '商品に関するお問い合わせ',
        message: 'こんにちは。商品の在庫状況について教えていただけますでしょうか。よろしくお願いいたします。',
      });
    });
  },
};

// インタラクションテスト - バリデーションエラー
export const ValidationError: Story = {
  args: {
    onSubmit: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByRole('button', { name: /送信する/ });
    
    // 何も入力せずに送信
    await userEvent.click(submitButton);
    
    // onSubmitは呼ばれない
    await expect(args.onSubmit).not.toHaveBeenCalled();
    
    // エラーメッセージが表示される
    await expect(canvas.getByText('お名前は必須です')).toBeInTheDocument();
    await expect(canvas.getByText('メールアドレスは必須です')).toBeInTheDocument();
    await expect(canvas.getByText('件名は必須です')).toBeInTheDocument();
    await expect(canvas.getByText('メッセージは必須です')).toBeInTheDocument();
  },
};

// インタラクションテスト - エラーがクリアされる
export const ErrorClearing: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const nameInput = canvas.getByPlaceholderText('山田太郎');
    const submitButton = canvas.getByRole('button', { name: /送信する/ });
    
    // 送信してエラーを表示
    await userEvent.click(submitButton);
    
    // エラーメッセージが表示される
    await expect(canvas.getByText('お名前は必須です')).toBeInTheDocument();
    
    // 入力すると エラーがクリアされる
    await userEvent.type(nameInput, '山田太郎');
    
    await waitFor(() => {
      expect(canvas.queryByText('お名前は必須です')).not.toBeInTheDocument();
    });
  },
};

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { ContactForm } from "./ContactForm";

describe("ContactForm", () => {
  it("すべてのフィールドがレンダリングされる", () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/お名前/)).toBeInTheDocument();
    expect(screen.getByLabelText(/メールアドレス/)).toBeInTheDocument();
    expect(screen.getByLabelText(/件名/)).toBeInTheDocument();
    expect(screen.getByLabelText(/メッセージ/)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /送信する/ })).toBeInTheDocument();
  });

  describe("バリデーション", () => {
    it("すべてのフィールドが空の時、エラーメッセージが表示される", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      const submitButton = screen.getByRole("button", { name: /送信する/ });
      await user.click(submitButton);

      expect(screen.getByText("お名前は必須です")).toBeInTheDocument();
      expect(screen.getByText("メールアドレスは必須です")).toBeInTheDocument();
      expect(screen.getByText("件名は必須です")).toBeInTheDocument();
      expect(screen.getByText("メッセージは必須です")).toBeInTheDocument();
    });

    it("無効なメールアドレスの時、エラーメッセージが表示される", async () => {
      const user = userEvent.setup();
      const mockOnSubmit = vi.fn();
      
      render(<ContactForm onSubmit={mockOnSubmit} />);

      const nameInput = screen.getByLabelText(/お名前/);
      const emailInput = screen.getByLabelText(/メールアドレス/);
      const subjectInput = screen.getByLabelText(/件名/);
      const messageInput = screen.getByLabelText(/メッセージ/);
      const submitButton = screen.getByRole("button", { name: /送信する/ });

      // すべてのフィールドに値を入力（メールアドレスは@と.があるが無効な形式）
      await user.type(nameInput, "山田太郎");
      await user.type(emailInput, "invalid@email"); // .がないメールアドレス
      await user.type(subjectInput, "件名テスト");
      await user.type(messageInput, "これは10文字以上のメッセージです。");
      
      await user.click(submitButton);

      // バリデーションエラーが表示される
      expect(await screen.findByText("有効なメールアドレスを入力してください")).toBeInTheDocument();
      
      // onSubmitは呼ばれない
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    it("メッセージが10文字未満の時、エラーメッセージが表示される", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      const messageInput = screen.getByLabelText(/メッセージ/);
      const submitButton = screen.getByRole("button", { name: /送信する/ });

      await user.type(messageInput, "短い");
      await user.click(submitButton);

      expect(screen.getByText("メッセージは10文字以上入力してください")).toBeInTheDocument();
    });
  });

  describe("フォーム送信", () => {
    it("有効なデータを入力して送信すると、onSubmitが呼ばれる", async () => {
      const user = userEvent.setup();
      const mockOnSubmit = vi.fn();
      
      render(<ContactForm onSubmit={mockOnSubmit} />);

      const nameInput = screen.getByLabelText(/お名前/);
      const emailInput = screen.getByLabelText(/メールアドレス/);
      const subjectInput = screen.getByLabelText(/件名/);
      const messageInput = screen.getByLabelText(/メッセージ/);
      const submitButton = screen.getByRole("button", { name: /送信する/ });

      await user.type(nameInput, "山田太郎");
      await user.type(emailInput, "yamada@example.com");
      await user.type(subjectInput, "商品に関するお問い合わせ");
      await user.type(messageInput, "こんにちは。商品の在庫状況について教えていただけますでしょうか。");

      await user.click(submitButton);

      await waitFor(() => {
        expect(mockOnSubmit).toHaveBeenCalledWith({
          name: "山田太郎",
          email: "yamada@example.com",
          subject: "商品に関するお問い合わせ",
          message: "こんにちは。商品の在庫状況について教えていただけますでしょうか。",
        });
      });
    });

    it("送信中はボタンが無効になる", async () => {
      const user = userEvent.setup();
      
      render(<ContactForm />);

      const nameInput = screen.getByLabelText(/お名前/);
      const emailInput = screen.getByLabelText(/メールアドレス/);
      const subjectInput = screen.getByLabelText(/件名/);
      const messageInput = screen.getByLabelText(/メッセージ/);
      const submitButton = screen.getByRole("button", { name: /送信する/ });

      await user.type(nameInput, "山田太郎");
      await user.type(emailInput, "yamada@example.com");
      await user.type(subjectInput, "商品に関するお問い合わせ");
      await user.type(messageInput, "こんにちは。商品の在庫状況について教えていただけますでしょうか。");

      await user.click(submitButton);

      // 送信中はボタンが無効になり、テキストが変わる
      const submittingButton = screen.getByRole("button", { name: /送信中.../ });
      expect(submittingButton).toBeDisabled();
    });

    it("バリデーションエラーがある時はonSubmitが呼ばれない", async () => {
      const user = userEvent.setup();
      const mockOnSubmit = vi.fn();
      
      render(<ContactForm onSubmit={mockOnSubmit} />);

      const submitButton = screen.getByRole("button", { name: /送信する/ });
      await user.click(submitButton);

      expect(mockOnSubmit).not.toHaveBeenCalled();
    });
  });

  describe("エラークリア", () => {
    it("入力するとエラーがクリアされる", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      const nameInput = screen.getByLabelText(/お名前/);
      const submitButton = screen.getByRole("button", { name: /送信する/ });

      // エラーを表示
      await user.click(submitButton);
      expect(screen.getByText("お名前は必須です")).toBeInTheDocument();

      // 入力するとエラーがクリアされる
      await user.type(nameInput, "山田太郎");
      
      await waitFor(() => {
        expect(screen.queryByText("お名前は必須です")).not.toBeInTheDocument();
      });
    });
  });
});

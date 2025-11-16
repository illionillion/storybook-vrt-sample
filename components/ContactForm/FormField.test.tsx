import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, afterEach } from "vitest";
import { FormField } from "./FormField";

describe("FormField", () => {
  const mockOnChange = vi.fn();

  afterEach(() => {
    mockOnChange.mockClear();
  });

  describe("テキスト入力フィールド", () => {
    it("propsで渡した値が正しく表示される", () => {
      render(
        <FormField
          label="お名前"
          id="name"
          name="name"
          value=""
          onChange={mockOnChange}
          type="text"
        />
      );

      const label = screen.getByText("お名前");
      const input = screen.getByRole("textbox");

      expect(label).toBeInTheDocument();
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute("id", "name");
      expect(input).toHaveAttribute("name", "name");
    });

    it("入力すると onChange が呼ばれる", async () => {
      const user = userEvent.setup();
      
      render(
        <FormField
          label="お名前"
          id="name"
          name="name"
          value=""
          onChange={mockOnChange}
          type="text"
        />
      );

      const input = screen.getByRole("textbox");
      await user.type(input, "山田太郎");

      expect(mockOnChange).toHaveBeenCalled();
    });

    it("requiredがtrueの時、必須マークが表示される", () => {
      render(
        <FormField
          label="お名前"
          id="name"
          name="name"
          value=""
          onChange={mockOnChange}
          type="text"
          required={true}
        />
      );

      const requiredMark = screen.getByText("*");
      expect(requiredMark).toBeInTheDocument();
    });

    it("エラーメッセージが表示される", () => {
      render(
        <FormField
          label="お名前"
          id="name"
          name="name"
          value=""
          onChange={mockOnChange}
          type="text"
          error="お名前は必須です"
        />
      );

      const errorMessage = screen.getByText("お名前は必須です");
      expect(errorMessage).toBeInTheDocument();
    });
  });

  describe("メール入力フィールド", () => {
    it('type="email"で正しくレンダリングされる', () => {
      render(
        <FormField
          label="メールアドレス"
          id="email"
          name="email"
          value=""
          onChange={mockOnChange}
          type="email"
        />
      );

      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("type", "email");
    });
  });

  describe("テキストエリア", () => {
    it("type=\"textarea\"でテキストエリアがレンダリングされる", () => {
      render(
        <FormField
          label="メッセージ"
          id="message"
          name="message"
          value=""
          onChange={mockOnChange}
          type="textarea"
        />
      );

      const textarea = screen.getByRole("textbox");
      expect(textarea.tagName).toBe("TEXTAREA");
    });

    it("rows属性が正しく設定される", () => {
      render(
        <FormField
          label="メッセージ"
          id="message"
          name="message"
          value=""
          onChange={mockOnChange}
          type="textarea"
          rows={10}
        />
      );

      const textarea = screen.getByRole("textbox");
      expect(textarea).toHaveAttribute("rows", "10");
    });

    it("入力すると onChange が呼ばれる", async () => {
      const user = userEvent.setup();
      
      render(
        <FormField
          label="メッセージ"
          id="message"
          name="message"
          value=""
          onChange={mockOnChange}
          type="textarea"
        />
      );

      const textarea = screen.getByRole("textbox");
      await user.type(textarea, "テストメッセージ");

      expect(mockOnChange).toHaveBeenCalled();
    });
  });

  describe("プレースホルダー", () => {
    it("プレースホルダーが表示される", () => {
      render(
        <FormField
          label="お名前"
          id="name"
          name="name"
          value=""
          onChange={mockOnChange}
          type="text"
          placeholder="山田太郎"
        />
      );

      const input = screen.getByPlaceholderText("山田太郎");
      expect(input).toBeInTheDocument();
    });
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { FormButton } from "./FormButton";

describe("FormButton", () => {
  it("propsで渡したテキストが表示される", () => {
    render(<FormButton>送信する</FormButton>);

    const button = screen.getByRole("button", { name: "送信する" });
    expect(button).toBeInTheDocument();
  });

  it("デフォルトでtype='submit'が設定される", () => {
    render(<FormButton>送信する</FormButton>);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "submit");
  });

  it("type='button'が設定できる", () => {
    render(<FormButton type="button">キャンセル</FormButton>);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "button");
  });

  it("type='reset'が設定できる", () => {
    render(<FormButton type="reset">リセット</FormButton>);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "reset");
  });

  it("disabledがtrueの時、ボタンが無効になる", () => {
    render(<FormButton disabled={true}>送信する</FormButton>);

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("クリック時にonClickが呼ばれる", async () => {
    const user = userEvent.setup();
    const mockOnClick = vi.fn();
    
    render(<FormButton onClick={mockOnClick}>送信する</FormButton>);

    const button = screen.getByRole("button");
    await user.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("無効状態の時はクリックしてもonClickが呼ばれない", async () => {
    const user = userEvent.setup();
    const mockOnClick = vi.fn();
    
    render(
      <FormButton onClick={mockOnClick} disabled={true}>
        送信する
      </FormButton>
    );

    const button = screen.getByRole("button");
    await user.click(button);

    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it("送信中のテキストが表示できる", () => {
    render(<FormButton disabled={true}>送信中...</FormButton>);

    const button = screen.getByRole("button", { name: "送信中..." });
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});

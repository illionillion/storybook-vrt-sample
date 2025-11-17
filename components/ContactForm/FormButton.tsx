import React from "react";
import styles from "./ContactForm.module.css";

export interface FormButtonProps {
  children: React.ReactNode;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

export const FormButton = ({
  children,
  type = "submit",
  disabled = false,
  onClick,
}: FormButtonProps) => {
  return (
    <button
      type={type}
      className={styles.submitButton}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

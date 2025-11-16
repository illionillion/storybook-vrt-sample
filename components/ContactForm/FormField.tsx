import React from "react";
import styles from "./ContactForm.module.css";

export interface FormFieldProps {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: "text" | "email" | "textarea";
  placeholder?: string;
  error?: string;
  required?: boolean;
  rows?: number;
}

export const FormField = ({
  label,
  id,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  error,
  required = false,
  rows = 6,
}: FormFieldProps) => {
  const isTextarea = type === "textarea";
  const inputType = isTextarea ? undefined : type;

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      {isTextarea ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={`${styles.textarea} ${error ? styles.error : ""}`}
          placeholder={placeholder}
          rows={rows}
        />
      ) : (
        <input
          type={inputType}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={`${styles.input} ${error ? styles.error : ""}`}
          placeholder={placeholder}
        />
      )}
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

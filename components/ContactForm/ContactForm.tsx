"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";
import { FormField } from "./FormField";
import { FormButton } from "./FormButton";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
}

export const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "お名前は必須です";
    }

    if (!formData.email.trim()) {
      newErrors.email = "メールアドレスは必須です";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "有効なメールアドレスを入力してください";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "件名は必須です";
    }

    if (!formData.message.trim()) {
      newErrors.message = "メッセージは必須です";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "メッセージは10文字以上入力してください";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // 実際のアプリケーションでは、ここでAPIにデータを送信
      await new Promise(resolve => setTimeout(resolve, 1000)); // デモ用の遅延
      
      if (onSubmit) {
        onSubmit(formData);
      }
      
      // フォームをリセット
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      alert("お問い合わせを送信しました！");
    } catch (error) {
      alert("送信に失敗しました。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // エラーをクリア
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormField
        label="お名前"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        type="text"
        placeholder="山田太郎"
        error={errors.name}
        required
      />

      <FormField
        label="メールアドレス"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="email"
        placeholder="example@example.com"
        error={errors.email}
        required
      />

      <FormField
        label="件名"
        id="subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        type="text"
        placeholder="お問い合わせの件名"
        error={errors.subject}
        required
      />

      <FormField
        label="メッセージ"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        type="textarea"
        placeholder="お問い合わせ内容をご記入ください"
        error={errors.message}
        required
        rows={6}
      />

      <FormButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? "送信中..." : "送信する"}
      </FormButton>
    </form>
  );
};
"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { Accordion } from "../components/Accordion";
import { ContactForm } from "../components/ContactForm";
import { faqData, faqCategories, FAQ } from "../data/faq";

export default function ContactPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredFaqs = selectedCategory === "all" 
    ? faqData 
    : faqData.filter(faq => faq.category === selectedCategory);

  const handleFormSubmit = (data: any) => {
    console.log("お問い合わせデータ:", data);
    // 実際のアプリケーションでは、ここでAPIにデータを送信
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.title}>お問い合わせ</h1>
          <p className={styles.subtitle}>
            ご質問やご不明な点がございましたら、まずはよくある質問をご確認ください。
            解決しない場合は、お問い合わせフォームからお気軽にご連絡ください。
          </p>
        </header>

        {/* FAQ Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>よくある質問</h2>
          <p className={styles.sectionDescription}>
            お客様から寄せられることの多いご質問とその回答をまとめました。
          </p>

          <div className={styles.faqContainer}>
            {/* Category Filter */}
            <div className={styles.categoryFilter}>
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  className={`${styles.categoryButton} ${
                    selectedCategory === category.id ? styles.active : ""
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* FAQ List */}
            <div className={styles.faqList}>
              {filteredFaqs.map((faq) => (
                <Accordion
                  key={faq.id}
                  title={faq.question}
                  defaultOpen={false}
                >
                  <div style={{ whiteSpace: "pre-line" }}>
                    {faq.answer}
                  </div>
                </Accordion>
              ))}
            </div>

            {filteredFaqs.length === 0 && (
              <div style={{ textAlign: "center", padding: "40px", color: "#6b7280" }}>
                該当するFAQが見つかりませんでした。
              </div>
            )}
          </div>
        </section>

        {/* Contact Form Section */}
        <section className={styles.section}>
          <div className={styles.contactSection}>
            <h2 className={styles.sectionTitle}>お問い合わせフォーム</h2>
            <p className={styles.sectionDescription}>
              FAQで解決しない場合は、こちらのフォームからお問い合わせください。
              通常2〜3営業日以内にご返信いたします。
            </p>

            <ContactForm onSubmit={handleFormSubmit} />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <h3 className={styles.footerTitle}>その他のお問い合わせ方法</h3>
          <p className={styles.footerDescription}>
            お急ぎの場合は、お電話でのお問い合わせも受け付けております。
          </p>
          
          <div className={styles.footerLinks}>
            <a href="tel:03-1234-5678" className={styles.footerLink}>
              📞 03-1234-5678
            </a>
            <a href="mailto:support@example.com" className={styles.footerLink}>
              ✉️ support@example.com
            </a>
            <a href="#" className={styles.footerLink}>
              💬 チャットサポート
            </a>
          </div>

          <p className={styles.copyright}>
            © 2024 Your Company Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

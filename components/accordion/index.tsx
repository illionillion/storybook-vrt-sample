import { useState } from "react";
import styles from './index.module.css';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isDisabled?: boolean;
  // 制御されたコンポーネントとしても使用可能
  isOpen?: boolean;
  onToggle?: () => void;
  // 非制御コンポーネントの場合の初期値
  defaultOpen?: boolean;
}

export const Accordion = ({
  title,
  children,
  isDisabled = false,
  isOpen,
  onToggle,
  defaultOpen = false,
}: AccordionProps) => {
  // 制御されたコンポーネントか非制御コンポーネントかを判定
  const isControlled = isOpen !== undefined && onToggle !== undefined;
  const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen);

  // 実際の開閉状態
  const actualIsOpen = isControlled ? isOpen : internalIsOpen;

  const handleToggle = () => {
    if (!isDisabled) {
      if (isControlled) {
        onToggle();
      } else {
        setInternalIsOpen(!internalIsOpen);
      }
    }
  };

  return (
    <div className={styles.accordion}>
      <button
        type="button"
        aria-expanded={actualIsOpen}
        aria-disabled={isDisabled}
        onClick={handleToggle}
        className={`${styles.accordionHeader} ${isDisabled ? styles.disabled : ""}`}
      >
        {title}
        <span aria-hidden="true">{actualIsOpen ? "−" : "+"}</span>
      </button>

      <div
        role="region"
        aria-hidden={!actualIsOpen}
        className={`${styles.accordionContent} ${actualIsOpen ? styles.open : styles.closed}`}
      >
        {actualIsOpen && children}
      </div>
    </div>
  );
};
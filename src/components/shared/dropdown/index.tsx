import { ReactNode, useId, useState } from "react";

import "@/components/shared/Dropdown/Dropdown.scss";

interface DropdownProps {
  buttonText: string | ReactNode;
  children: ReactNode;
  className?: string;
  buttonClassName?: string;
  menuClassName?: string;
  disabled?: boolean;
  maxHeight?: number;
}

export default function Dropdown({
  buttonText,
  children,
  className,
  buttonClassName,
  menuClassName,
  disabled,
  maxHeight = 300,
}: DropdownProps) {
  const id = useId();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`dropdown ${isOpen ? "show" : ""} ${className}`}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          closeDropdown();
        }
      }}
    >
      <button
        id={`dropdown-${id}`}
        className={`btn dropdown-toggle ${buttonClassName}`}
        type="button"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        disabled={disabled}
        data-bs-toggle="dropdown"
      >
        {buttonText}
      </button>
      <ul
        className={`dropdown-menu ${menuClassName}`}
        style={{
          maxHeight: maxHeight ? `${maxHeight}px` : "auto",
          overflowY: maxHeight ? "auto" : "hidden",
        }}
      >
        {children}
      </ul>
    </div>
  );
}

export { default as DropdownItem } from "./DropdownItem";
export { default as DropdownHeader } from "./DropdownHeader";
export { default as DropdownDivider } from "./DropdownDivider";

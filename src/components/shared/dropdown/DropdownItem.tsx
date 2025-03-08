interface DropdownItemProps {
  value: string | undefined;
  label: string;
  isActive: boolean;
  onClick: (value: string | undefined) => void;
}

export default function DropdownItem({
  value,
  label,
  isActive,
  onClick,
}: DropdownItemProps) {
  return (
    <li>
      <button
        className={`dropdown-item ${isActive ? "active" : ""}`}
        onClick={() => onClick(value)}
      >
        {label}
      </button>
    </li>
  );
}

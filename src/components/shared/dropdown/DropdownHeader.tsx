interface DropdownHeaderProps {
  title: string;
}

export default function DropdownHeader({ title }: DropdownHeaderProps) {
  return (
    <li>
      <h6 className="dropdown-header">{title}</h6>
    </li>
  );
}

import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface NavigateBackProps {
  label?: string;
  icon?: React.ReactNode;
  link?: string;
  className?: string;
}

export const NavigateBack = ({
  label = "Back",
  icon = <ArrowLeft />,
  className = "btn btn-primary",
  link,
}: NavigateBackProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    } else {
      navigate(-1);
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      {icon}
      {label}
    </button>
  );
};

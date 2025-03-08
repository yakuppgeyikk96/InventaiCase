import { FileQuestion } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "@/components/shared/not-found/NotFound.scss";

interface NotFoundProps {
  title?: string;
  message?: string;
  showHomeButton?: boolean;
  showBackButton?: boolean;
  customAction?: {
    label: string;
    onClick: () => void;
  };
}

const NotFound = ({
  title = "Page Not Found",
  message = "The page you are looking for doesn't exist or has been moved.",
  showHomeButton = true,
  showBackButton = true,
  customAction,
}: NotFoundProps) => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <div className="not-found-content">
        <FileQuestion size={64} className="not-found-icon" />
        <h2 className="not-found-title">{title}</h2>
        <p className="not-found-message">{message}</p>

        <div className="not-found-actions">
          {showBackButton && (
            <button
              className="btn btn-outline-secondary me-2"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
          )}

          {showHomeButton && (
            <button
              className="btn btn-primary me-2"
              onClick={() => navigate("/")}
            >
              Go to Home
            </button>
          )}

          {customAction && (
            <button
              className="btn btn-outline-primary"
              onClick={customAction.onClick}
            >
              {customAction.label}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotFound;

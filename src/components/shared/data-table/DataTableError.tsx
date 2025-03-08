import { AlertCircle } from "lucide-react";
import "@/components/shared/data-table/DataTableError.scss";

export default function DataTableError({ message }: { message: string }) {
  return (
    <div className="table-error-wrapper">
      <div className="table-error-content">
        <AlertCircle className="table-error-icon" />
        <p className="table-error-message">{message}</p>
      </div>
    </div>
  );
}

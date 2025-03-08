import React from "react";
import DataTableHead from "@/components/shared/data-table/DataTableHead";
import DataTableBody from "@/components/shared/data-table/DataTableBody";
import "@/components/shared/data-table/DataTable.scss";
import DataTableNotFound from "@/components/shared/data-table/DataTableNotFound";

export interface Column<T> {
  header: string;
  field: keyof T;
  render?: (item: T, index: number) => React.ReactNode;
  width?: string;
  className?: string;
}

export interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  keyField: keyof T;
  loading?: boolean;
  hoverable?: boolean;
  responsive?: boolean | "sm" | "md" | "lg" | "xl" | "xxl";
  className?: string;
  emptyMessage?: string;
  onRowClick?: (item: T) => void;
}

export default function DataTable<T>({
  columns,
  data,
  keyField,
  loading,
  hoverable,
  responsive,
  className,
  emptyMessage,
  onRowClick,
}: DataTableProps<T>) {
  const tableClass = [
    "table",
    "table-borderless",
    hoverable ? "table-hover" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const getResponsiveClass = () => {
    if (responsive === true) return "table-responsive";
    if (responsive) return `table-responsive-${responsive}`;
    return "";
  };

  const renderTable = () => (
    <table className={tableClass}>
      <DataTableHead columns={columns} />
      <DataTableBody
        data={data}
        columns={columns}
        keyField={keyField}
        emptyMessage={emptyMessage}
        onRowClick={onRowClick}
      />
    </table>
  );

  const tableContent = (
    <div className="table-wrapper">
      {loading && (
        <div className="data-table-loading-overlay">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {data.length > 0 ? (
        renderTable()
      ) : (
        <DataTableNotFound message={emptyMessage || "No data found"} />
      )}
    </div>
  );

  return responsive ? (
    <div className={getResponsiveClass()}>{tableContent}</div>
  ) : (
    tableContent
  );
}

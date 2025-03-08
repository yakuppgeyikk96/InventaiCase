import { Column } from "@/components/shared/data-table";

export default function DataTableBody<T>({
  data,
  columns,
  keyField,
  onRowClick,
}: {
  data: T[];
  columns: Column<T>[];
  keyField: keyof T;
  onRowClick?: (item: T) => void;
  emptyMessage?: string;
}) {
  return (
    <tbody>
      {data.map((item, rowIndex) => (
        <tr
          key={String(item[keyField])}
          onClick={() => onRowClick?.(item)}
          style={{ cursor: onRowClick ? "pointer" : "default" }}
        >
          {columns.map((column, colIndex) => (
            <td key={colIndex} className={column.className}>
              {column.render
                ? column.render(item, rowIndex)
                : column.field
                ? String(item[column.field] || "")
                : ""}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

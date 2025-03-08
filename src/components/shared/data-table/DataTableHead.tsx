import { Column } from ".";

export default function DataTableHead<T>({
  columns,
}: {
  columns: Column<T>[];
}) {
  return (
    <thead>
      <tr>
        {columns.map((column, index) => (
          <th
            key={index}
            style={column.width ? { width: column.width } : undefined}
            className={column.className}
          >
            {column.header}
          </th>
        ))}
      </tr>
    </thead>
  );
}

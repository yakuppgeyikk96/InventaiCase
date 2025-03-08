import { Column } from "@/components/shared/data-table";

export const createTableColumns = <T>(
  baseColumns: Column<T>[],
  options?: {
    hideColumns?: Array<keyof T>;
    customRenderers?: Partial<
      Record<keyof T, (item: T, index: number) => React.ReactNode>
    >;
    columnOrder?: Array<keyof T>;
  }
) => {
  let columns = [...baseColumns];

  if (options?.hideColumns && options.hideColumns.length > 0) {
    columns = columns.filter(
      (col) => !options.hideColumns?.includes(col.field)
    );
  }

  if (options?.customRenderers) {
    columns = columns.map((col) => {
      const customRenderer = options.customRenderers?.[col.field];
      if (customRenderer) {
        return { ...col, render: customRenderer };
      }
      return col;
    });
  }

  if (options?.columnOrder && options.columnOrder.length > 0) {
    const orderMap = new Map(
      options.columnOrder.map((field, index) => [field, index])
    );

    columns.sort((a, b) => {
      const orderA = orderMap.get(a.field) ?? Number.MAX_SAFE_INTEGER;
      const orderB = orderMap.get(b.field) ?? Number.MAX_SAFE_INTEGER;
      return orderA - orderB;
    });
  }

  return columns;
};

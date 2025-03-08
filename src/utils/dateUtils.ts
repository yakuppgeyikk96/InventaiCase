export function generateYearsList(startYear: number = 1990): string[] {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: currentYear - startYear + 1 }, (_, i) =>
    (currentYear - i).toString()
  );
}

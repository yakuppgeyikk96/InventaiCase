export default function DataTableNotFound({ message }: { message: string }) {
  return (
    <div className="d-flex justify-content-center align-items-center w-100">
      <p className="text-muted">{message}</p>
    </div>
  );
}

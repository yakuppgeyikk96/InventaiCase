interface LoadingProps {
  text?: string;
}

const Loading = ({ text }: LoadingProps) => {
  return (
    <div className="d-flex align-items-center justify-content-center w-100 py-5">
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        {text && <p className="mt-3 text-muted">{text || ""}</p>}
      </div>
    </div>
  );
};

export default Loading;

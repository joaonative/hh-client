interface ErrorPopUpProps {
  message: string;
}

function ErrorPopUp({ message }: ErrorPopUpProps) {
  return (
    <div className="opacity-50 bg-darker border border-red-500 px-5 py-2 w-full text-center">
      {message}
    </div>
  );
}

export default ErrorPopUp;

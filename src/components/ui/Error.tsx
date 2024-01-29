import Button from "./Button";

interface ErrorPopUpProps {
  message: string;
}

function ErrorPopUp({ message }: ErrorPopUpProps) {
  return (
    <div className="opacity-50 bg-darker border border-red-500 px-5 py-2 w-full text-center flex flex-col gap-2">
      {message}
      <Button
        handleClick={() => {
          window.location.reload();
        }}
        full
        danger
        name="Reload page"
      />
    </div>
  );
}

export default ErrorPopUp;

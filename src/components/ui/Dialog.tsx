import { motion } from "framer-motion";

interface DialogProps {
  message: string;
  confirmMessage?: string;
  cancelMessage?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

function Dialog({
  message,
  confirmMessage,
  cancelMessage,
  onCancel,
  onConfirm,
}: DialogProps) {
  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: -50 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div className="flex flex-col items-center justify-center gap-5 bg-darker rounded-xl px-10 py-5">
        <h1 className="text-lg">{message}</h1>
        <div className="flex items-center justify-center gap-5">
          <button
            onClick={handleConfirm}
            className="bg-primary text-white border border-primary px-3 py-2 rounded-lg"
          >
            <h1 className="w-20  text-base">{confirmMessage}</h1>
          </button>
          <button
            onClick={handleCancel}
            className="bg-none text-red-600 border border-red-600 px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-red-600 hover:text-white"
          >
            <h1 className="w-20  text-base">{cancelMessage}</h1>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Dialog;

import { motion } from "framer-motion";
import Button from "./Button";

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
      <div className="flex flex-col items-center justify-center gap-5 bg-darker border border-background px-10 py-5 rounded-lg">
        <h1 className="text-xl">{message}</h1>
        <div className="flex items-center justify-center gap-5">
          <Button name={confirmMessage} handleClick={handleConfirm} primary />
          <Button name={cancelMessage} handleClick={handleCancel} danger />
        </div>
      </div>
    </motion.div>
  );
}

export default Dialog;

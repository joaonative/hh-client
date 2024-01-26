import { motion } from "framer-motion";
import Button from "./Button";
import { ReactNode } from "react";

interface ModalProps {
  message: string;
  confirmMessage?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  children: ReactNode;
}

function Modal({
  message,
  confirmMessage,
  onConfirm,
  onCancel,
  children,
}: ModalProps) {
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
      <div className="flex flex-col items-center justify-center gap-5 bg-darker border border-background w-max p-6 rounded-lg">
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="text-2xl text-primary">{message}</h1>
          <Button handleClick={handleCancel} close />
        </div>
        {children}
        <Button
          name={confirmMessage}
          handleClick={handleConfirm}
          primary
          full
        />
      </div>
    </motion.div>
  );
}

export default Modal;

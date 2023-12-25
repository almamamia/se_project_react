import { useEffect } from "react";

export default function useEsc({ handleCloseModal, closeModal }) {
  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [closeModal]);
}

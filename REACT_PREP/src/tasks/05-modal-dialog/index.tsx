import { createPortal } from 'react-dom';
import type { ReactNode } from 'react';
import './styles.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  // TODO: Escape key listener -> onClose
  // TODO: focus trap + restore focus to the previously focused element on close
  // TODO: lock body scroll while open (and restore on unmount)

  return createPortal(
    <div className="modal__overlay" onClick={onClose}>
      <div
        className="modal__content"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}

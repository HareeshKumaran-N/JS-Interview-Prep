import { useRef } from 'react';
import './styles.css';

interface OtpInputProps {
  length?: number;
  onComplete?: (code: string) => void;
}

export default function OtpInput({ length = 6 }: OtpInputProps) {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  // TODO: values state (array of single-character strings)
  // TODO: handleChange(index, value) -> update state, focus next box,
  // call props.onComplete when all boxes are filled
  // TODO: handleKeyDown(index, e) -> on Backspace with an empty box, focus previous box
  // TODO: handlePaste(e) -> distribute pasted characters across boxes

  return (
    <div className="otp">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          className="otp__box"
        />
      ))}
    </div>
  );
}

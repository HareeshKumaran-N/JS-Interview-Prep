import './styles.css';

interface StarRatingProps {
  totalStars?: number;
  value?: number;
  onChange?: (value: number) => void;
}

export default function StarRating({ totalStars = 5, value = 0, onChange }: StarRatingProps) {
  // TODO: hoveredValue state for the preview-on-hover effect
  // TODO: displayValue = hoveredValue ?? value

  return (
    <div className="star-rating" role="radiogroup" aria-label="Star rating" data-current={value}>
      {Array.from({ length: totalStars }, (_, i) => i + 1).map((star) => (
        <button
          key={star}
          type="button"
          className="star-rating__star"
          aria-label={`Rate ${star} out of ${totalStars}`}
          onClick={() => onChange?.(star)}
        >
          {/* TODO: swap glyph/class based on whether `star <= displayValue` */}
          ★
        </button>
      ))}
    </div>
  );
}

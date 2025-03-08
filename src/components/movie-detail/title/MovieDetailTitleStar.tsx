import { Star, StarHalf, StarOff } from "lucide-react";
import { calculateStars } from "@/utils/formatters";

interface MovieDetailTitleStarProps {
  rating: number;
  size?: number;
  className?: string;
}

export default function MovieDetailTitleStar({
  rating,
  size = 16,
  className = "text-warning",
}: MovieDetailTitleStarProps) {
  const validRating = !isNaN(rating) && rating >= 0 ? rating : 0;
  const { full, half, empty } = calculateStars(validRating);

  const safeFullStars = Math.max(0, full);
  const safeEmptyStars = Math.max(0, empty);

  return (
    <div className="rating-stars">
      {safeFullStars > 0 &&
        Array.from({ length: safeFullStars }).map((_, i) => (
          <Star
            key={`full-${i}`}
            size={size}
            className={className}
            fill="currentColor"
          />
        ))}
      {half > 0 && (
        <StarHalf
          key="half"
          size={size}
          className={className}
          fill="currentColor"
        />
      )}
      {safeEmptyStars > 0 &&
        Array.from({ length: safeEmptyStars }).map((_, i) => (
          <StarOff key={`empty-${i}`} size={size} className={className} />
        ))}
    </div>
  );
}

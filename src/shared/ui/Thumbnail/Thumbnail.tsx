import styles from "./Thumbnail.module.css";

interface ThumbnailProps {
  width?: number;
  height?: number;
  src?: string;
  alt?: string;
  color?: string;
  borderRadius?: string;
}

export const Thumbnail = ({
  src,
  alt,
  width = 48,
  height = 48,
  borderRadius = "8px",
  color = "var(--color-dark-gray)",
}: ThumbnailProps) => {
  return (
    <div
      className={styles.thumbnail}
      style={{ width, height, backgroundColor: color, borderRadius }}
    >
      {src ? <img src={src} alt={alt} /> : null}
    </div>
  );
};

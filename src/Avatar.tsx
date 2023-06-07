import "./Avatar.css";

type AvatarProps = {
  size: "small" | "medium" | "large";
  shape: "circle" | "rounded" | "square";
  src: string;
  title?: string;
};

const Avatar = ({
  src,
  title,
  size = "small",
  shape = "circle",
}: AvatarProps) => {
  return (
    <div
      className={`avatar ${size} ${shape}`}
      title={title}
    >
      <img src={src} alt={title} />
    </div>
  );
};

export default Avatar;

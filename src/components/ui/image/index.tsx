import { twMerge } from "tailwind-merge";
import { ImageProps } from "./image.interface";
import { gravatar } from "./image.utilities";

function Image(props: ImageProps) {
  return (
    <img
      {...props}
      loading="lazy"
      src={props.gravatar ? gravatar(props) : props.src}
      alt={props.gravatar ? props.gravatar : props.alt}
      style={
        props.size
          ? {
              width: `${props.size / 16}rem`,
              height: `${props.size / 16}rem`,
              ...props.style,
            }
          : props.style
      }
      className={twMerge(props.rounded && "rounded-full", props.className)}
    />
  );
}

export default Image;

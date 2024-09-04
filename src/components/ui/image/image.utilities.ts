import { ImageProps } from "./image.interface";

export function gravatar(props: ImageProps) {
  const url = new URL("https://ui-avatars.com/api/");
  if (props.gravatar) {
    url.searchParams.append("name", props.gravatar.split(" ").join("+"));
    url.searchParams.append("background", "random");
    url.searchParams.append(
      "rounded",
      props.rounded?.valueOf() ? "true" : "false"
    );

    if (props.size) {
      url.searchParams.append("size", props.size.toString());
    }
  }

  return url.toString();
}

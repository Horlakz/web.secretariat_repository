interface BaseProps {
  className?: string;
  src?: string;
  gravatar?: string;
  size?: number;
  rounded?: boolean;
}

export type ImageProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  keyof BaseProps
> &
  BaseProps;

import clsx from "clsx";
import { TextContainer } from "./styles";

/**
 * Component that displays text based on a typographic scale.
 *
 * @example
 * ```
 * <Typography htmlTag="h2" variant="heading">
 * ```
 */
export const Typography = (props: TypographyProps) => {
  const { variant = "paragraph", htmlTag = "span", className } = props;

  return (
    <TextContainer
      as={htmlTag}
      variant={variant}
      className={clsx(variant, className)}
      {...props}
    />
  );
};

export interface TypographyProps
  extends Pick<
    React.HTMLAttributes<HTMLElement>,
    "id" | "className" | "style"
  > {
  /**
   * HTML Component wich will be rendered on the DOM
   */
  htmlTag?: keyof JSX.IntrinsicElements;
  /**
   * Font type style to render
   */
  variant?: "paragraph" | "heading";
  /**
   * Text content of the component
   */
  children: React.ReactNode;
}

import { type ReactNode } from "react";
import { type CardProps } from "./Card";

/**
 * When the timeline card points to an external link,
 * this component is used
 */
export const ExternalCard = (props: ExternalCardProps) => {
  const { url, children } = props;

  return (
    <a data-testid="external-card" href={url} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

interface ExternalCardProps {
  /**
   * URL always existis on this card
   */
  url: NonNullable<CardProps["url"]>;
  /**
   * Card content
   */
  children: ReactNode;
}

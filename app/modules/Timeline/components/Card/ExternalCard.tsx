import { type ReactNode } from "react";
import { type CardProps } from "./Card";

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
  url: string;
  /**
   * Card content
   */
  children: ReactNode;
}

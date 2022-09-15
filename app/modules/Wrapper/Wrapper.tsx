import type { ReactNode } from "react";

import { MainWrapper } from "./styles";

export const Wrapper = (props: WrapperProps) => {
  const { children } = props;

  return <MainWrapper>{children}</MainWrapper>;
};
interface WrapperProps {
  /**
   * App to be rendered inside the main grid
   */
  children: ReactNode;
}

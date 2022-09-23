import { useTheme } from "@emotion/react";

import { getTabIndicator } from "./helpers";
import { IndicatorContainer } from "./styles";

/**
 * Dash that is drawn under the active tab.
 *
 * @example
 * ```
 * <TabIndicator />
 * ```
 */
export const TabIndicator = () => {
  const theme = useTheme();

  return (
    <IndicatorContainer
      viewBox="0 0 130 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="active-tab-indicator"
    >
      <path
        d={getTabIndicator()}
        stroke={theme.color.highlight}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </IndicatorContainer>
  );
};

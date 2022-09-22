import { useTheme } from "@emotion/react";

import { getTabIndicator } from "./helpers";
import { IndicatorContainer } from "./styles";

/**
 * Dash that is drawn under the active tab.
 *
 * @example
 * ```
 * <TabIndication />
 * ```
 */
export const TabIndication = () => {
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
        stroke-width="4"
        stroke-linecap="round"
      />
    </IndicatorContainer>
  );
};

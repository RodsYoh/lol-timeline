import { ThemeProvider as EmotionProvider } from "@emotion/react";
import { Global, css } from "@emotion/react";

const theme = {
  color: {
    backgroundPrimary: "#141529",
    backgroundSecondary: "#242537",
    fontPrimary: "#F2E9ED",
    highlight: "#F218B4",
    skins: "#F86BC2",
    changes: "#FEA8B1",
    champions: "#FDFD9B",
    pbe: "#3BDDF9",
    release: "#51FC90",
  },
};

/**
 * Project's theme configuration. But for now, only dark theme is available.
 *
 * @remarks
 * Emotion's theming documentation: {@link https://emotion.sh/docs/theming}
 *
 * @example
 * ```
 * <body>
 *   <ThemeProvider>
 *     <App />
 *   </ThemeProvider>
 * </body>
 * ```
 */
export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;

  return (
    <>
      <Global
        styles={css`
          html,
          body {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            background-color: ${theme.color.backgroundPrimary};
            font-family: "Quicksand", sans-serif;
            strong {
              font-weight: bold;
            }
          }
        `}
      />
      <EmotionProvider theme={theme}>{children}</EmotionProvider>
    </>
  );
};

interface ThemeProviderProps {
  /**
   * The entire App Component
   */
  children: React.ReactNode;
}

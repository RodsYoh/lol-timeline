import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      backgroundPrimary: string;
      backgroundSecondary: string;
      fontPrimary: string;
      highlight: string;
      skins: string;
      changes: string;
      champions: string;
      pbe: string;
      release: string;
      rumor: string;
    };
  }
}

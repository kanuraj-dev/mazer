/// <reference types="react-scripts" />

import theme from "constants/theme";

declare global {
  type Theme = typeof theme;
}

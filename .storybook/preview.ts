import theme from './theme';
import { CssBaselineProvider } from './CssBaselineProvider';

export const parameters = {
  docs: {
    theme,
  },
};

export const decorators = [CssBaselineProvider];

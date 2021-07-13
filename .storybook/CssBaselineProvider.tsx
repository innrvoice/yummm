import React from 'react';
import { CssBaseline } from '../src/components';
import { Story } from '@storybook/react';

export const CssBaselineProvider = (Story: Story, context) => {
  return (
    <>
      <CssBaseline />
      <Story {...context} />
    </>
  );
};
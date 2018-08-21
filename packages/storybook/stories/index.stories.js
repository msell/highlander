import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button } from '@highlander/common';
import { ThemeProvider } from 'styled-components'

storiesOf('Button', module)
  .add('with text', () => <ThemeProvider theme={{mode: 'dark'}}><Button onClick={action('clicked')}>Hello Button</Button></ThemeProvider>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));


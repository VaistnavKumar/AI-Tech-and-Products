// This file extends the global JSX namespace to support custom elements like 'iconify-icon'.
// We use a module augmentation pattern to ensure we merge with, rather than overwrite, standard React types.

import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        icon: string;
        width?: string | number;
        height?: string | number;
        class?: string;
      };
      // Allow any other element (standard HTML elements) to prevent 'Property does not exist' errors
      [elemName: string]: any;
    }
  }
}
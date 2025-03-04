import { PluginAPI } from 'tailwindcss/types/config';

type XtermStylesParams = {
  addComponents: PluginAPI['addComponents'];
};

/**
 * Copyright (c) 2014 The xterm.js authors. All rights reserved.
 * Copyright (c) 2012-2013, Christopher Jeffrey (MIT License)
 * https://github.com/chjj/term.js
 * @license MIT
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * Originally forked from (with the author's permission):
 *   Fabrice Bellard's javascript vt100 for jslinux:
 *   http://bellard.org/jslinux/
 *   Copyright (c) 2011 Fabrice Bellard
 *   The original design remains. The terminal itself
 *   has been extended to include xterm CSI codes, among
 *   other features.
 */

/**
 *  Default styles for xterm.js
 */

export const addXtermStyles = ({ addComponents }: XtermStylesParams) => {
  addComponents({
    '.xterm': {
      '-ms-user-select': 'none',
      '-webkit-user-select': 'none',
      'user-select': 'none',
      cursor: 'text',
      position: 'relative',

      '&.focus, &:focus': {
        outline: 'none',
      },

      '& .xterm-helpers': {
        'z-index': '5',
        position: 'absolute',
        top: '0',
      },

      '& .xterm-helper-textarea': {
        'white-space': 'nowrap',
        'z-index': '-5',
        border: '0',
        height: '0',
        left: '-9999em',
        margin: '0',
        opacity: '0',
        overflow: 'hidden',
        padding: '0',
        position: 'absolute',
        resize: 'none',
        top: '0',
        width: '0',
      },

      '& .composition-view': {
        'white-space': 'nowrap',
        'z-index': '1',
        background: '#000',
        color: '#FFF',
        display: 'none',
        position: 'absolute',
      },

      '& .composition-view.active': {
        display: 'block',
      },

      '& .xterm-viewport': {
        'background-color': '#000',
        'overflow-y': 'scroll',
        bottom: '0',
        cursor: 'default',
        left: '0',
        position: 'absolute',
        right: '0',
        top: '0',
      },

      '& .xterm-screen': {
        position: 'relative',
      },

      '& .xterm-screen canvas': {
        left: '0',
        position: 'absolute',
        top: '0',
      },

      '& .xterm-scroll-area': {
        visibility: 'hidden',
      },

      '& .xterm-char-measure-element': {
        display: 'inline-block',
        visibility: 'hidden',
        position: 'absolute',
        top: '0',
        left: '-9999em',
        width: '0',
        'line-height': 'normal',
      },

      '&.enable-mouse-events': {
        cursor: 'default',
      },

      '&.xterm-cursor-pointer, & .xterm-cursor-pointer': {
        cursor: 'pointer',
      },

      '&.column-select.focus': {
        cursor: 'crosshair',
      },

      '& .xterm-accessibility, & .xterm-message': {
        position: 'absolute',
        left: '0',
        top: '0',
        bottom: '0',
        right: '0',
        'z-index': '10',
        color: 'transparent',
        'pointer-events': 'non,e',
      },

      '& .live-region': {
        position: 'absolute',
        left: '-9999px',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
      },
    },

    '.xterm-dim': {
      opacity: '1 !important',
    },

    '.xterm-underline-1': {
      'text-decoration': 'underline',
    },

    '.xterm-underline-2': {
      'text-decoration': 'underline double',
    },

    '.xterm-underline-3': {
      'text-decoration': 'underline wavy',
    },

    '.xterm-underline-4': {
      'text-decoration': 'underline dotted',
    },

    '.xterm-underline-5': {
      'text-decoration': 'underline dashed',
    },

    '.xterm-overline': {
      'text-decoration': 'overline',
    },

    '.xterm-overline.xterm-underline-1': {
      'text-decoration': 'overline underline',
    },

    '.xterm-overline.xterm-underline-2': {
      'text-decoration': 'overline underline double',
    },

    '.xterm-overline.xterm-underline-3': {
      'text-decoration': 'overline underline wavy',
    },

    '.xterm-overline.xterm-underline-4': {
      'text-decoration': 'overline underline dotted',
    },

    '.xterm-overline.xterm-underline-5': {
      'text-decoration': 'overline underline dashed',
    },

    '.xterm-strikethrough': {
      'text-decoration': 'line-through',
    },

    '.xterm-screen': {
      '& .xterm-decoration-container .xterm-decoration': {
        'z-index': '6',
        position: 'absolute',
      },

      '& .xterm-decoration-container .xterm-decoration.xterm-decoration-top-layer':
        {
          'z-index': '7',
        },
    },

    '.xterm-decoration-overview-ruler': {
      'z-index': '8',
      position: 'absolute',
      top: '0',
      right: '0',
      'pointer-events': 'none',
    },

    '.xterm-decoration-top': {
      'z-index': '2',
      position: 'relative',
    },
  });
};

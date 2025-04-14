/// <reference types="vite-plugin-svgr/client" />

declare module '*.svg' {
  import type * as React from 'react';
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

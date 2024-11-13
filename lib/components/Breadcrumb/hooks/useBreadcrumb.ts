import { useContext } from 'react';
import { UNSAFE_RouteContext } from 'react-router-dom';

export const useBreadcrumb = () => {
  const routeContext = useContext(UNSAFE_RouteContext);

  return {
    isInsideRouter: routeContext.outlet !== null,
  };
};

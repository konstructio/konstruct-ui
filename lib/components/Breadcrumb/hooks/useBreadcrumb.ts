import { useLocation } from 'react-router-dom';

export const useBreadcrumb = () => {
  try {
    useLocation();

    return {
      isInsideRouter: true,
    };
  } catch {
    return {
      isInsideRouter: false,
    };
  }
};

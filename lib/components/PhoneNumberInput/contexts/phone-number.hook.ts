import { useContext } from 'react';

import { ContextType, PhoneNumberContext } from './phone-number.context';

export const usePhoneNumberContext = () => {
  const context = useContext(PhoneNumberContext);

  if (!context) {
    throw new Error(
      'usePhoneNumberContext must be used within a PhoneNumberProvider',
    );
  }

  return context as ContextType;
};

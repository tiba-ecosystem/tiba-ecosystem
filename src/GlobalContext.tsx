import React, { createContext, useState } from 'react';

export interface ContextProps {
  showSignInModal: boolean;
  setShowSignInModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentScreen: string;
  setCurrentScreen: React.Dispatch<React.SetStateAction<string>>;
}

export const globalContext = createContext<ContextProps>({} as ContextProps);

const GlobalContext = (props: any) => {
  const [showSignInModal, setShowSignInModal] = useState<boolean>(false);
  const [currentScreen, setCurrentScreen] = useState<string>('insumos');

  return (
    <globalContext.Provider
      value={{
        showSignInModal,
        setShowSignInModal,
        currentScreen,
        setCurrentScreen,
      }}
    >
      {props.children}
    </globalContext.Provider>
  );
};

export default GlobalContext;

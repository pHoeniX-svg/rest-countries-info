import React from "react";

export const GenericContext = <T extends unknown>() => {
  // Create a context with a generic parameter or undefined
  const genericContext = React.createContext<T | undefined>(undefined);

  // Check if the value provided to the context is defined or throw an error
  const useGenericContext = () => {
    const context = React.useContext(genericContext);
    if (!context) {
      throw new Error("This Context must be used within a Provider");
    }
    return context;
  };

  return [useGenericContext, genericContext.Provider] as const;
};

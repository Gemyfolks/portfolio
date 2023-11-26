"use client";

import { createContext, useContext as useContextReact } from "react";

export function createSafeContext<PropertyValue extends {} | null>() {
  const context = createContext<PropertyValue | undefined>(undefined);

  function useContext() {
    const value = useContextReact(context);
    if (value === undefined) {
      throw new Error("useContext must be inside a Provider with a value");
    }
    return value;
  }

  return [useContext, context.Provider] as const;
}

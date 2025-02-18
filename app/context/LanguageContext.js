"use client";
import { createContext, useContext, useState } from "react";

// Create Context
const LangContext = createContext();

// Provider Component
export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

// Custom Hook
export const useLanguage = () => useContext(LangContext);

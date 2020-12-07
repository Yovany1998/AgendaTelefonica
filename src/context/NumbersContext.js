import React, { useEffect, createContext, useState } from "react";
import { database } from "../components/db";

// Crear el contexto de las notas
export const NumbersContext = createContext({});

export const NumbersContextProvider = (props) => {
  // Obtener los valores iniciales para el contexto
  // se obtienen desde los props
  const { numbers: initialNumbers, children } = props; 
  // Almacenar los valores en el estado
  const [numbers, setNumbers] = useState(initialNumbers);

  // Cargar u obtener las notas
  useEffect(() => {
    refreshNumbers();
  }, []);

  const refreshNumbers = () => {
    return database.getNumbers(setNumbers);
  };

  const addNewNumbers = (number) => {
    return database.insertNumbers(number, refreshNumbers);
  };

  // Crear el objeto de contexto
  const numbersContext = {
    numbers,
    addNewNumbers,
  };

  // Pasar los valores al proveedor y retornarlo
  return (
    <NumbersContext.Provider value={numbersContext}>
      {children}
    </NumbersContext.Provider>
  );
};

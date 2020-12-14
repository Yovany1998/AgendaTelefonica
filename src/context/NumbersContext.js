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
  const [number, setNumber] = useState("");
  const [nombre, setNombre] = useState("");
  // Cargar u obtener las notas
  useEffect(() => {
    refreshNumbers();
  }, []);

  const refreshNumbers = () => {
    return database.getNumbers(setNumbers);
  };

  const addNewNumber = async (nombre,number) => {
    await database.insertNumbers(nombre,number, refreshNumbers);
    return refreshNumbers();
  };

  const getNumberById = (id) => {
    return database.getNumberById(id, setNumber,setNombre);

    console.log(response);

    // Obtener el valor de la primera posición del arreglo
    // const value = note[0];
    // setNote(value);

    // console.log(value);
    // console.log(note);
  };
  

  // Crear el objeto de contexto
  const numbersContext = {
    numbers,
    number,
    nombre,
    addNewNumber,
    getNumberById,
  };

  // Pasar los valores al proveedor y retornarlo
  return (
    <NumbersContext.Provider value={numbersContext}>
      {children}
    </NumbersContext.Provider>
  );
};

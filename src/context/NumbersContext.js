import React, { useEffect, createContext, useState } from "react";
import { database } from "../components/db";

// Crear el contexto de los contactos
export const NumbersContext = createContext({});

export const NumbersContextProvider = (props) => {
  // Obtener los valores iniciales para el contexto
  // se obtienen desde los props
  const { numbers: initialNumbers, children } = props;

  // Almacenar los valores en el estado
  const [numbers, setNumbers] = useState(initialNumbers);
  const [number, setNumber] = useState("");

  // Cargar u obtener los contactos
  useEffect(() => {
    refreshNumbers();
  }, []);

  // Funcion de refrescar la lista de contactos
  const refreshNumbers = () => {
    return database.getNumbers(setNumbers);
  };

  // Funcion de agregar contactos
  const addNewNumber = async (nombre,lastname,number,mail) => {
    await database.insertNumbers(nombre,lastname,number,mail, refreshNumbers);
    return refreshNumbers();
  };

  // Funcion para obtener contactos
  const getNumberById = (id) => {
    return database.getNumberById(id, setNumber);
  };
  
  // Funcion para actualizar 
  const updateNumber = async(nombre,lastname,number,mail,id) => {
    await database.updateNumbers(nombre,lastname,number,mail,id, refreshNumbers);
    console.log(mail);
    return refreshNumbers();
  }

  // Crear el objeto de contexto
  const numbersContext = {
    numbers,
    number,
    addNewNumber,
    getNumberById,
    updateNumber,
  };

  // Pasar los valores al proveedor y retornarlo
  return (
    <NumbersContext.Provider value={numbersContext}>
      {children}
    </NumbersContext.Provider>
  );
};

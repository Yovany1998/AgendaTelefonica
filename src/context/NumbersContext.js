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
  const [lastname, setLastname] = useState("");
  const [mail, setMail] = useState("");
  // Cargar u obtener las notas
  useEffect(() => {
    refreshNumbers();
  }, []);

  const refreshNumbers = () => {
    return database.getNumbers(setNumbers);
  };

  const addNewNumber = async (nombre,lastname,number,mail) => {
    await database.insertNumbers(nombre,lastname,number,mail, refreshNumbers);
    return refreshNumbers();
  };

  const getNumberById = (id) => {
    return database.getNumberById(id, setNumber,setNombre,setLastname,setMail);

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
    lastname,
    mail,
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

import React from "react";
import * as SQLite from "expo-sqlite";

// Crea y abre la base de datos
const db = SQLite.openDatabase("fastcontactos.db");

// Funcionalidades de la base de datos

// Obtener la lista de contactos
const getNumbers = (setNumbersFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from numbers",
      [],
      (_, { rows: { _array } }) => {
        setNumbersFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener los contactos");
        console.log(error);
      },
      (_t, _success) => {
        console.log("contactos obtenidos");
      }
    );
  });
};

// Obtener el contacto por el id
const getNumberById = (id, setNumberFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from numbers where id = ?",
      [id],
      (_, { rows: { _array } }) => {
        setNumberFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener los contactos");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Contactos Obtenidos");
      }
    );
  });
};

// Insertar contacto
const insertNumbers = async (nombre,
  lastname,number,mail, successFunc) => {
  db.transaction(
    (tx) => {
      tx.executeSql("insert into numbers (nombre, lastname, number,mail) values (?,?,?,?)", [
        nombre,
        lastname,
        number,
        mail,
      ]);
    },
    (_t, error) => {
      console.log("Error al insertar el contacto");
      console.log(error);
    },
    (_t, _success) => {
      successFunc;
    }
  );
};

// Actualizar contacto
const updateNumbers = async (nombre,
  lastname,number,mail,id, successFunc) => {
    console.log("Este es el id");
    console.log(id);
    console.log("Este es el numero");
    console.log(number);
  db.transaction(
    (tx) => {
      tx.executeSql("update numbers set nombre = ?, lastname = ?, number = ?, mail = ? where id = ?", [
        nombre,
        lastname,
        number,
        mail,
        id,
      ]);
    },
    (_t, error) => {
      console.log("Error al actualizar el contacto");
      console.log(error);
    },
    (_t, _success) => {
      successFunc;
    }
  );
};

// Borrar la base de datos
const dropDatabaseTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql("drop table numbers");
      },
      (_t, error) => {
        console.log("Error al eliminar la tabla de contactos");
        reject(error);
      },
      (_t, result) => {
        resolve(result);
      }
    );
  });
};

// Creación de la tabla de contactos
const setupDatabaseTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists numbers (id integer primary key autoincrement, nombre text not null, lastname text not null, number text not null, mail text not null);"
        );
      },
      (_t, error) => {
        console.log("Error al momento de crear la tabla");
        console.log(error);
        reject(error);
      },
      (_t, success) => {
        console.log("Tabla creada!");
        resolve(success);
      }
    );
  });
};

// Agrega un contacto por defecto
const setupNumbersAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql("insert into numbers (nombre, lastname, number,mail) values (?,?,?,?)", [
          "Yovany",
          "Hernandez",
          "33010663",
          "Geovanyher98@mail.com"
        ]);
      },
      (_t, error) => {
        console.log("Error al momento de insertar los valores por defecto");
        console.log(error);
        reject(error);
      },
      (_t, success) => {
        resolve(success);
      }
    );
  });
};

// Exportar las variables
export const database = {
  getNumbers,
  insertNumbers,
  dropDatabaseTableAsync,
  setupDatabaseTableAsync,
  setupNumbersAsync,
  getNumberById,
  updateNumbers,
};

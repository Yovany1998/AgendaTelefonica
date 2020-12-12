// import React from "react";
// import * as SQLite from "expo-sqlite";

// // https://docs.expo.io/versions/latest/sdk/sqlite/
// // Crea y abre la base de datos
// const db = SQLite.openDatabase("PhoneAgenda.db");

// // Funcionalidades de la base de datos

// // Obtener las notas del usuario
// const getNumbers = (setNumbersFunc) => {
//   db.transaction((tx) => {
//     tx.executeSql(
//       "select * from numbers",
//       [],
//       (_, { rows: { _array } }) => {
//         setNumbersFunc(_array);
//       },
//       (_t, error) => {
//         console.log("Error al momento de obtener los contactos");
//         console.log(error);
//       },
//       (_t, _success) => {
//         console.log("Contactos obtenidos");
//       }
//     );
//   });
// };

// // Insertar notas
// const insertNumbers = (number, successFunc) => {
//   db.transaction(
//     (tx) => {
//       tx.executeSql("insert into numbers (number, status) values (?,?)", [
//         number,
//         "NUEVA",
//       ]);
//     },
//     (_t, error) => {
//       console.log("Error al insertar el contacto");
//       console.log(error);
//     },
//     (_t, _success) => {
//       successFunc;
//     }
//   );
// };

// // Borrar la base de datos
// const dropDatabaseTableAsync = async () => {
//   return new Promise((resolve, reject) => {
//     db.transaction(
//       (tx) => {
//         tx.executeSql("drop table numbers");
//       },
//       (_t, error) => {
//         console.log("Error al eliminar la tabla de contactos");
//         reject(error);
//       },
//       (_t, result) => {
//         resolve(result);
//       }
//     );
//   });
// };

// // Creación de la tabla de numeros
// const setupDatabaseTableAsync = async () => {
//   return new Promise((resolve, reject) => {
//     db.transaction(
//       (tx) => {
//         tx.executeSql(
//           "create table if not exists numbers (id integer primary key autoincrement, number text not null, status text not null);"
//         );
//       },
//       (_t, error) => {
//         console.log("Error al momento de crear la tabla");
//         console.log(error);
//         reject(error);
//       },
//       (_t, success) => {
//         console.log("Tabla creada!");
//         resolve(success);
//       }
//     );
//   });
// };

// // Agrega un contacto por defecto
// const setupNumbersAsync = async () => {
//   return new Promise((resolve, reject) => {
//     db.transaction(
//       (tx) => {
//         tx.executeSql("insert into numbers (number, status) values (?,?)", [
//           "Bienvenido a PhoneAgenda",
//           "NUEVA",
//         ]);
//       },
//       (_t, error) => {
//         console.log("Error al momento de insertar los valores por defecto");
//         console.log(error);
//         reject(error);
//       },
//       (_t, success) => {
//         resolve(success);
//       }
//     );
//   });
// };

// export const database = {
//   getNumbers,
//   insertNumbers,
//   dropDatabaseTableAsync,
//   setupDatabaseTableAsync,
//   setupNumbersAsync,
// };
import React from "react";
import * as SQLite from "expo-sqlite";

// https://docs.expo.io/versions/latest/sdk/sqlite/
// Crea y abre la base de datos
const db = SQLite.openDatabase("Agenda.db");

// Funcionalidades de la base de datos

// Obtener las notas del usuario
const getNumbers = (setNumbersFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from numbers",
      [],
      (_, { rows: { _array } }) => {
        setNumbersFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener los datos");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Notas obtenidas");
      }
    );
  });
};

// Insertar notas
const insertNumbers = (number, successFunc) => {
  db.transaction(
    (tx) => {
      tx.executeSql("insert into numbers (number, status) values (?,?)", [
        number,
        "NUEVA",
      ]);
    },
    (_t, error) => {
      console.log("Error al insertar la nota");
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
        console.log("Error al eliminar la tabla de notas");
        reject(error);
      },
      (_t, result) => {
        resolve(result);
      }
    );
  });
};

// Creación de la tabla de notas
const setupDatabaseTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists numbers (id integer primary key autoincrement, number text not null, status text not null);"
     
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

// Agrega una nota por defecto
const setupNumbersAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql("insert into numbers (number, status) values (?,?)", [
          "Defecto",
          "NUEVA",
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

export const database = {
  getNumbers,
  insertNumbers,
  dropDatabaseTableAsync,
  setupDatabaseTableAsync,
  setupNumbersAsync,
};

// utils/indexedDB.js

const DB_NAME = "servicioTecnicoDB";
const DB_VERSION = 1;

export const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      // Crear tabla Clientes
      if (!db.objectStoreNames.contains("Clientes")) {
        const clienteStore = db.createObjectStore("Clientes", { keyPath: "id", autoIncrement: true });
        clienteStore.createIndex("nombre", "nombre", { unique: false });
        clienteStore.createIndex("cedula", "cedula", { unique: true });
      }

      // Crear tabla Órdenes
      if (!db.objectStoreNames.contains("Ordenes")) {
        const ordenStore = db.createObjectStore("Ordenes", { keyPath: "id", autoIncrement: true });
        ordenStore.createIndex("clienteID", "clienteID", { unique: false });
        ordenStore.createIndex("estado", "estado", { unique: false });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

export const addRecord = (storeName, record) => {
  return openDB().then((db) => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, "readwrite");
      const store = transaction.objectStore(storeName);
      const request = store.add(record);

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  });
};

// Ejemplo de cómo usar addRecord
// addRecord("Clientes", { nombre: "Juan Pérez", cedula: "123456789", telefono: "3216549870", direccion: "Calle Falsa 123" });


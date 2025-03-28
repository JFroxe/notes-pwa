import React, { useState, useEffect } from "react";
import { openDB } from "../utils/indexedDB";
import ClienteForm from "../components/ClienteForm";

function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchClientes = async () => {
      const db = await openDB();
      const transaction = db.transaction("Clientes", "readonly");
      const store = transaction.objectStore("Clientes");
      const request = store.getAll();

      request.onsuccess = () => {
        setClientes(request.result);
      };
    };

    fetchClientes();
  }, []);

  return (
    <div>
      <h1>Clientes</h1>
      <button onClick={() => setShowForm(true)}>Añadir Cliente</button>
      {showForm && <ClienteForm />}
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>{cliente.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Clientes;

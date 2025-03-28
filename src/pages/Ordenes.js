import React, { useState, useEffect } from "react";
import { openDB } from "../utils/indexedDB";
import OrdenForm from "../components/OrdenForm";

function Ordenes() {
  const [ordenes, setOrdenes] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const db = await openDB();

      const clienteTransaction = db.transaction("Clientes", "readonly");
      const clienteStore = clienteTransaction.objectStore("Clientes");
      const clienteRequest = clienteStore.getAll();

      clienteRequest.onsuccess = () => {
        setClientes(clienteRequest.result);
      };

      const ordenTransaction = db.transaction("Ordenes", "readonly");
      const ordenStore = ordenTransaction.objectStore("Ordenes");
      const ordenRequest = ordenStore.getAll();

      ordenRequest.onsuccess = () => {
        setOrdenes(ordenRequest.result);
      };
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Órdenes</h1>
      <button onClick={() => setShowForm(true)}>Añadir Orden</button>
      {showForm && <OrdenForm clientes={clientes} />}
      <ul>
        {ordenes.map((orden) => (
          <li key={orden.id}>
            {orden.dispositivo} - {orden.estado}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ordenes;

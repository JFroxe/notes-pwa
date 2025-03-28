import { addRecord } from "../utils/indexedDB";

function OrdenForm({ clientes }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const orden = {
      clienteID: e.target.cliente.value,
      dispositivo: e.target.dispositivo.value,
      descripcion: e.target.descripcion.value,
      presupuesto: e.target.presupuesto.value,
      total: e.target.total.value,
      anticipos: [],
      fechaIngreso: new Date().toISOString(),
      fechaCompromiso: e.target.fechaCompromiso.value,
      estado: e.target.estado.value,
    };
    
    addRecord("Ordenes", orden)
      .then(() => alert("Orden agregada con éxito"))
      .catch((error) => console.error("Error al agregar orden:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="cliente" required>
        {clientes.map((cliente) => (
          <option key={cliente.id} value={cliente.id}>
            {cliente.nombre}
          </option>
        ))}
      </select>
      <input name="dispositivo" type="text" placeholder="Dispositivo" required />
      <textarea name="descripcion" placeholder="Descripción del problema" required />
      <input name="presupuesto" type="number" placeholder="Presupuesto" required />
      <input name="total" type="number" placeholder="Total" required />
      <input name="fechaCompromiso" type="date" required />
      <select name="estado" required>
        <option value="sin_iniciar">Sin iniciar</option>
        <option value="en_proceso">En proceso</option>
        <option value="por_entregar">Por entregar</option>
        <option value="entregado">Entregado</option>
        <option value="rechazado">Rechazado</option>
        <option value="cancelado">Cancelado</option>
      </select>
      <button type="submit">Guardar Orden</button>
    </form>
  );
}

export default OrdenForm;

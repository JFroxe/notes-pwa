import { addRecord } from "../utils/indexedDB";

function ClienteForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const cliente = {
      nombre: e.target.nombre.value,
      cedula: e.target.cedula.value,
      telefono: e.target.telefono.value,
      direccion: e.target.direccion.value,
    };
    
    addRecord("Clientes", cliente)
      .then(() => alert("Cliente agregado con éxito"))
      .catch((error) => console.error("Error al agregar cliente:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nombre" type="text" placeholder="Nombre" required />
      <input name="cedula" type="text" placeholder="No. Cédula" required />
      <input name="telefono" type="text" placeholder="Teléfono" required />
      <input name="direccion" type="text" placeholder="Dirección" required />
      <input name="imagen" type="file" accept="image/*" />
      <button type="submit">Guardar Cliente</button>
    </form>
  );
}

export default ClienteForm;

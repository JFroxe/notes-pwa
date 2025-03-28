function AnticipoForm({ onSave }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const anticipo = {
      descripcion: e.target.descripcion.value,
      valor: parseFloat(e.target.valor.value),
      fecha: e.target.fecha.value,
    };
    onSave(anticipo);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="descripcion" type="text" placeholder="Descripción" required />
      <input name="valor" type="number" placeholder="Valor" required />
      <input name="fecha" type="date" required />
      <button type="submit">Agregar Anticipo</button>
    </form>
  );
}

export default AnticipoForm;

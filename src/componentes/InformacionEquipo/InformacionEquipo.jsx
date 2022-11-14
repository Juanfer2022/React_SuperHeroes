import "./InformacionEquipo.css";
const InformacionEquipo = ({
  ciudad, anioFormacion, baseSecreta
}) => {
  return (
    <section className="info-equipo">
      <ul>
        <li>Ciudad: {ciudad} </li>
        <li>Base Secreta: {baseSecreta}</li>
        <li>Año de Formacion: {anioFormacion} </li>
      </ul>
    </section>
  );
};
export default InformacionEquipo;

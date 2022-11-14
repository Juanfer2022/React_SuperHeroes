import ImagenSuperHeroe from "./ImagenSuperHeroe";
import InformacionSuperHeroe from "./InformacionSuperHeroes";

const TargetaSuperHeroe = ({ name, age, powers }) => {
  return (
    <article className="marco">
      <ImagenSuperHeroe />
      <InformacionSuperHeroe  name={name} age={age} powers={powers}/>
    </article>
  );
};
export const TarjetaSuperHeroeList = ({ miembros }) => {
  return (
    <section className="posi">
      {miembros.map((miembro, index) => (
        <TargetaSuperHeroe key={index} {...miembro} />
      ))}
    </section>
  );
};
export default TargetaSuperHeroe;

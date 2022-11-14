import { useEffect, useState } from "react";
import InformacionEquipo from "../componentes/InformacionEquipo/InformacionEquipo";
import { TarjetaSuperHeroeList } from "../componentes/InformacionSuperHeroes/TargetaSuperHeroe";

import Titulo from "../componentes/titulo/Titulo";
import { getSuperHeroes } from "../servicios/superHeroes";

import "./PaginaSuperHeroe.css";

const info = {
  squadName: "Super Hero Squad",
  homeTown: "Metro City",
  formed: 2016,
  secretBase: "Super tower",
  active: true,
  members: [
    {
      name: "Molecule Man",
      age: 29,
      secretIdentity: "Dan Jukes",
      powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
    },
    {
      name: "Madame Uppercut",
      age: 39,
      secretIdentity: "Jane Wilson",
      powers: [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes",
      ],
    },
    {
      name: "Eternal Flame",
      age: 1000000,
      secretIdentity: "Unknown",
      powers: [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel",
      ],
    },
  ],
};
const PaginaSuperHeroes = () => {
  const [informacion, setInformacion] = useState();
  const getSuperHeroesServicio = async () => {
    const res = await getSuperHeroes();
    setInformacion(res);
  };
  useEffect(() => {
    if(!informacion) {
       
        getSuperHeroesServicio();
    }
}, [informacion]);
  return (
    <main className="super-page-container">
      <Titulo tipo="h1" titulo={info.squadName} />
      <InformacionEquipo
        ciudad={info.squadName}
        anioFormacion={info.formed}
        baseSecreta={info.secretBase}
      />
      <Titulo tipo="h2" titulo="Miembros" />
      <TarjetaSuperHeroeList miembros={info.members} />
    </main>
  );
};
export default PaginaSuperHeroes;

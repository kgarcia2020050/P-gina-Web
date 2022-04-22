const chameleon = require("../img/Imagen1.png");
const counter = require("../img/Imagen2.png");
const pokedex = require("../img/Imagen3.png");

const infoProyectos = [
  {
    title: "Contador",
    image: counter,
    description:
      "Contador que cuenta con 3 funciones: Incrementar, Disminuir y Reiniciar.",
    repository: "https://github.com/kgarcia2020050/Contador.git",
  },
  {
    title: "Background Camaleón",
    image: chameleon,
    description:
      "Página que cambia el color de fondo con solo presionar un botón.",
    repository: "https://github.com/kgarcia2020050/Background-Chameleon.git",
  },
  {
    title: "Pokedex",
    image: pokedex,
    description: "Pokedex que muestra 6 pokemones al azar.",
    repository: "https://github.com/kgarcia2020050/Pokedex.git",
  },
];

function Proyectos() {
  return infoProyectos.map((datos) => (
    <main className="my-5 ">
      <div className="container px-4 px-lg-5 ">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7 ">
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4 ">
                  <img
                    src={datos.image}
                    className="card-img"
                    alt="Fondo"
                    height={180}
                  />
                </div>
                <div className="col-md-8 card text-dark">
                  <div className="card-body">
                    <h5 className="card-title">{datos.title}</h5>
                    <p className="card-text">{datos.description}</p>
                    <p className="card-text">
                      <a
                        href={datos.repository}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Repositorio del proyecto
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  ));
}

export default Proyectos;

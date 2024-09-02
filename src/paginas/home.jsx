import FilmesAclamados from "../components/FilmesAclamados/Aclamados";
import FilmesPopulares from "../components/FilmesPopulares/Populares";

function Home() {
  return (
    <>
      <FilmesPopulares />
      <FilmesAclamados />
    </>
  );
}

export default Home;
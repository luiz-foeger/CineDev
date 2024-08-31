import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa'; // import de bibliotecas de icones do react-icons

function PegandoDados() {
  const [dados, setDados] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjhkZThiYTA2NDVmMmM4NDM5N2M3N2QxMjMwNDc2MyIsIm5iZiI6MTcyNTA2NDM4My40NTE5NSwic3ViIjoiNjZjZmM2NWExYWI5MjUxNjVhMmJhNGMzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.li3MDy71cLj_4XpolWhbvtceOSSrqnHKSO9kYRjX-tI'
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f28de8ba0645f2c84397c77d12304763', options);
      const data = await response.json();
      setDados(data.results);
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  };

  const maisAvaliados = 'https://api.themoviedb.org/3/movie/top_rated?api_key=f28de8ba0645f2c84397c77d12304763';
  // console.log(maisAvaliados);

  fetchData(maisAvaliados);

  useEffect(() => { fetchData(); }, []);

  return (
    <div className='containerFilmes'>
      <h2 className='titulo'>Filmes Top Rated: </h2>
      <div className="infoFilme">
        {dados.length > 0 && dados.map((movie) =>
          <div key={movie.id} className="filme">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt
            />
            <h3>{movie.title}</h3>
            <p><FaStar />{movie.vote_average}</p>
          </div>
        )}
      </div>
    </div>)
}
export default PegandoDados;


// function Home() {
//     return (
//         <>
//         </>
//     );
//   }

// export default Home;


/* <h1>Lista de Filmes</h1>
<ul>
  {dados.results.map((filme, index) => (
    <li key={index}>
      <h2>{filme.title}</h2>
      <p>{filme.overview}</p>
    </li>
  ))}
</ul> */


// {dados && dados.map((movie) =>
//   <p>{movie.title}</p>
// )}
import { Link } from 'react-router-dom';
import { faStar } from 'react-icons/fa'; // import de bibliotecas de icones do react-icons

// https://image.tmdb.org/t/p/w500/


function CardFilme(movie) {

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
        } catch (error) {
            console.error('Erro ao buscar dados da API:', error);
        }
    };

    const imagemFilme = 'https://image.tmdb.org/t/p/w500/';
    // console.log(imagemFilme);

    fetchData(imagemFilme);


    return (
        // <div className='containerFilmes'>
        //     <h2 className='titulo'>Filmes mais bem avaliados: </h2>
        //     <div className="infoFilme">
        //             <img src={imagemFilme + movie.poster_path} alt="" />
        //             <h2>{movie.title}</h2>
        //             <p>{movie.vote_average}</p>
        //             <p><faStar /></p>
        //     </div>
        // </div>
        <div key={movie.id} className="filme">
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt
            />
            <h3>{movie.title}</h3>
          </div>
        )
}

export default CardFilme;
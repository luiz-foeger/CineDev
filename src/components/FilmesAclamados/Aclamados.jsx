import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa'; // import de bibliotecas de icones do react-icons
import { Link } from 'react-router-dom';
import estilos from './Aclamados.module.css'

function FilmesAclamados() {
    const [dados, setDados] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjhkZThiYTA2NDVmMmM4NDM5N2M3N2QxMjMwNDc2MyIsIm5iZiI6MTcyNTA2NDM4My40NTE5NSwic3ViIjoiNjZjZmM2NWExYWI5MjUxNjVhMmJhNGMzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.li3MDy71cLj_4XpolWhbvtceOSSrqnHKSO9kYRjX-tI'
        }
    };

    const buscarFilmes = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&?api_key=f28de8ba0645f2c84397c77d12304763', options);
            const dadosJson = await response.json();
            setDados(dadosJson.results);
        } catch (error) {
            alert('Erro ao buscar Dados da API');
            console.error('Erro ao buscar Dados da API:', error);
        }
    };


        // const maisAvaliados = 'https://api.themoviedb.org/3/movie/top_rated?api_key=f28de8ba0645f2c84397c77d12304763';
    // console.log(maisAvaliados);

    // buscarFilmes(maisAvaliados);

    useEffect(() => {
        buscarFilmes();
    }, []);

    return (
        <>
            <h2 className={estilos.titulo}>BEM AVALIADOS:</h2>
            <div className={estilos.containerFilmes}>
                <div className={estilos.filme}>
                    {dados.map((movie) =>
                        <div key={movie.id} className={estilos.cardFilme}>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`Cartaz do filme ${movie.title}`} />
                            <h3>{movie.title}</h3>
                            <p><FaStar />{movie.vote_average}</p>
                            <Link className={estilos.btnDetalhes} id='btnDetalhes'>Detalhes</Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default FilmesAclamados;
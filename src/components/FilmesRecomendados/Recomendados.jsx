import React, { useEffect, useState } from 'react'; // import dos hooks
import { useNavigate } from 'react-router-dom';
import { leituraAPI, URL_API, API_KEY } from '../../API/dadosAPI'; // import dos dados básicos da API
import { FaStar } from 'react-icons/fa'; // import de ícone da biblioteca 'react-icons'
import estilos from './Recomendados.module.css'

function FilmesRecomendados() {
    const [dados, setDados] = useState([]); // declara um estado para armazenar os dados dos filmes
    const navigate = useNavigate(); // navigate para navegação até a página de detalhes
    const consultaAPI = '/trending/movie/day?language=pt-BR&';

    const buscarFilmes = async () => {
        try {
            const response = await fetch(`${URL_API}${consultaAPI}${API_KEY}`, leituraAPI);
            const dadosJson = await response.json();  // converte a resposta para JSON
            setDados(dadosJson.results); // atualiza o estado com os resultados da API
        } catch (error) {
            alert('Erro ao buscar Dados da API');
            console.error('Erro ao buscar Dados da API:', error);
        }
    };

    useEffect(() => { buscarFilmes(); }, []); // chama e executa a função apenas uma vez quando o componente for montado

    return (
        <>
            <h2 className={estilos.tituloPagina}>EM ALTA HOJE:</h2>
            <div className={estilos.containerFilmes}>
                <div className={estilos.filmes}>
                    {dados.map((movie) => // recebe cada item do array de filmes como argumento e cria o elemento de cartaz
                        <div onClick={() => navigate(`/detalhes/${movie.id}`)} key={movie.id} className={estilos.cardFilme}>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`Cartaz do filme ${movie.title}`} />
                            <div className={estilos.infoFilme}>
                                <h3>{movie.title}</h3>
                                <section>
                                    <p><FaStar />{movie.vote_average.toFixed(1)}</p>
                                    <p>{movie.release_date.slice(0, 4)}</p>
                                </section>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default FilmesRecomendados;
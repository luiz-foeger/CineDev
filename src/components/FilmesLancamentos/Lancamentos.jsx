import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa'; // import de icones da biblioteca react-icons
import { useNavigate } from 'react-router-dom'; 
import estilos from './Lancamentos.module.css'
import { leituraAPI, URL_API } from '../../API/dadosAPI'

function FilmesLancamentos() {
    const [dados, setDados] = useState([]);
    const navigate = useNavigate();  // navigate para fazer a navegação para página de detalhes
    const consultaAPI = '/movie/popular?language=pt-BR&?api_key=f28de8ba0645f2c84397c77d12304763';

    const buscarFilmes = async () => {
        try {
            const response = await fetch(`${URL_API}${consultaAPI}`, leituraAPI);
            const dadosJson = await response.json();
            setDados(dadosJson.results);
        } catch (error) {
            alert('Erro ao buscar Dados da API');
            console.error('Erro ao buscar Dados da API:', error);
        }
    };

    useEffect(() => { buscarFilmes(); }, []);

    return ( 
        <>
            <h2 className={estilos.tituloPagina}>EM CARTAZ:</h2>
            <div className={estilos.containerFilmes}>
                <div className={estilos.filmes} >
                    {dados.map((movie) => 
                        <div onClick={() => navigate(`/detalhes/${movie.id}`)} key={movie.id} className={estilos.cardFilme}> 
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`Cartaz do filme ${movie.title}`} /> 
                            <div className={estilos.infoFilme}>
                                <h3>{movie.title}</h3>
                                <section>
                                    <p><FaStar />{movie.vote_average.toFixed(1)}</p>
                                    <p>{movie.release_date.slice(0, 4)}</p>
                                </section>
                                {/* <button className={estilos.btnDetalhes} onClick={() => navigate(`/detalhes/${movie.id}`)} id='btnDetalhes'>Detalhes</button> */}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default FilmesLancamentos;
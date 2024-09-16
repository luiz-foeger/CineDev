export const URL_API = 'https://api.themoviedb.org/3';
export const API_KEY = '?api_key=f28de8ba0645f2c84397c77d12304763';

export const leituraAPI  = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjhkZThiYTA2NDVmMmM4NDM5N2M3N2QxMjMwNDc2MyIsIm5iZiI6MTcyNTA2NDM4My40NTE5NSwic3ViIjoiNjZjZmM2NWExYWI5MjUxNjVhMmJhNGMzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.li3MDy71cLj_4XpolWhbvtceOSSrqnHKSO9kYRjX-tI'
    }
};

export const buscarFilmesId = async (id) => {
  const response = await fetch(`${URL_API}/movie/${id}${API_KEY}`);
  const dadosJson = await response.json();
  return dadosJson;
};

// export const buscarFilmes = async () => {
//   try {
//       const response = await fetch(`${URL_API}${consultaAPI}${API_KEY}`, leituraAPI);
//       const dadosJson = await response.json();
//       setDados(dadosJson.results);
//   } catch (error) {
//       alert('Erro ao buscar Dados da API');
//       console.error('Erro ao buscar Dados da API:', error);
//   }
// };
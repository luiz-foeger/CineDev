export const URL_API = 'https://api.themoviedb.org/3';
const API_KEY = 'f28de8ba0645f2c84397c77d12304763';

export const leituraAPI  = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjhkZThiYTA2NDVmMmM4NDM5N2M3N2QxMjMwNDc2MyIsIm5iZiI6MTcyNTA2NDM4My40NTE5NSwic3ViIjoiNjZjZmM2NWExYWI5MjUxNjVhMmJhNGMzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.li3MDy71cLj_4XpolWhbvtceOSSrqnHKSO9kYRjX-tI'
    }
};

export const buscarFilmesId = async (id) => {
  const response = await fetch(`${URL_API}/movie/${id}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};


  // export const fetchMovies = async () => {
  //   const response = await fetch(`${URL_API}/movie/popular?language=pt-BR&?api_key=${API_KEY}`);
  //   const data = await response.json();
  //   return data.results;
  // };
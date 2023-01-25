const key = '3cd3673a47156f37655071d22a3c4989';

const requests = {

    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrendind: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=release_date.desc&page=1&with_genres=27`,
    requestUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`

}

export default requests;
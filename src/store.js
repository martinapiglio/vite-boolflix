import {reactive} from 'vue';

export const store = reactive({
    APIkey: '8be37009c1a16067e167f3286f85e47b',

    APIcallTrending: 'https://api.themoviedb.org/3/trending',

    APIcallMovie: 'https://api.themoviedb.org/3/search/movie',
    APIcallSeries: 'https://api.themoviedb.org/3/search/tv',
    searchedText: '',
    foundMovies: [],
    foundSeries: [],
    maxVote: 10,
    maxStars: 5,

    imgURI: 'https://image.tmdb.org/t/p/',
    imgSize: 'w342/',

    isShown: false,
    cardIndex: 0,

    movieCast: [],
    movieGenres: [],

});
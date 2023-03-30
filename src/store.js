import {reactive} from 'vue';

export const store = reactive({
    APIkey: '8be37009c1a16067e167f3286f85e47b',

    APIcallTrending: 'https://api.themoviedb.org/3/trending',

    APIcallMovie: 'https://api.themoviedb.org/3/search/movie',
    APIcallMulti: 'https://api.themoviedb.org/3/search/multi',
    searchedText: '',
    foundResults: [],
    queryHasResults: true,

});
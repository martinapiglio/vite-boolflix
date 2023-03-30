<script>
import { store } from './store';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
    data() {
        return {
            store
        }
    },

    components: {
        AppHeader,
        AppMain
    },

    created() {

        let APIcallTrendingPROVA = store.APIcallTrending + '/movie/week?api_key=' + store.APIkey

        axios.get(APIcallTrendingPROVA).then((res) => {
            store.foundMovies = res.data.results;
            console.log(store.foundMovies);
            console.log(res.data);
        })
    },

    methods: {
        searchMovie() {
            axios.get(store.APIcallMovie, {
                params: {
                    api_key: store.APIkey,
                    query: store.searchedText
                }
            }).then((res) => {
                this.store.foundMovies = res.data.results;
                console.log(this.store.foundMovies);
                console.log(res.data);
            })
        }
    }
}
</script>

<template>

    <AppHeader @searchMovieFunction="searchMovie()"></AppHeader>
    <AppMain></AppMain>

</template>

<style scoped lang="scss">

</style>

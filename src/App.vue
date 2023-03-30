<script>
import { store } from './store';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppNoResults from './components/AppNoResults.vue';

export default {
    data() {
        return {
            store
        }
    },

    components: {
        AppHeader,
        AppMain,
        AppNoResults
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

                if (res.data.results.length == 0) {
                    store.queryHasResults = false;
                } else {
                    store.queryHasResults = true;
                    store.foundMovies = res.data.results;
                };

            });
        }
    }
}
</script>

<template>

    <AppHeader @searchMovieFunction="searchMovie()"></AppHeader>
    <AppMain v-if="store.queryHasResults"></AppMain>
    <AppNoResults v-else></AppNoResults>

</template>

<style scoped lang="scss">

</style>

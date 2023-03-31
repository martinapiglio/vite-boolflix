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

        let APIcallTrendingMovies = store.APIcallTrending + '/movie/week?api_key=' + store.APIkey;
        let APIcallTrendingSeries = store.APIcallTrending + '/tv/week?api_key=' + store.APIkey;

        axios.get(APIcallTrendingMovies).then((res) => {
            this.store.foundMovies = res.data.results;
        });

        axios.get(APIcallTrendingSeries).then((res) => {
            this.store.foundSeries = res.data.results;
        });

    },

    methods: {

        search() {
            axios.get(store.APIcallMovie, {
                params: {
                    api_key: store.APIkey,
                    query: store.searchedText
                }
            }).then((res) => {
                this.store.foundMovies = res.data.results;

                // if (res.data.results.length == 0) {
                //     store.queryHasResults = false;
                // } else {
                //     store.queryHasResults = true;
                //     store.foundMovies = res.data.results;
                // };
            });

            axios.get(store.APIcallSeries, {
                params: {
                    api_key: store.APIkey,
                    query: store.searchedText
                }
            }).then((res) => {
                this.store.foundSeries = res.data.results;

                // if (res.data.results.length == 0) {
                //     store.queryHasResults = false;
                // } else {
                //     store.queryHasResults = true;
                //     store.foundSeries = res.data.results;
                // };
            });
        },

    }
}
</script>

<template>

    <AppHeader @searchFunction="search()"></AppHeader>
    <AppMain v-if="store.queryHasResults"></AppMain>
    <AppNoResults v-else></AppNoResults>

</template>

<style scoped lang="scss">

</style>

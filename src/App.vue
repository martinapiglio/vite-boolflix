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

        this.trendingMedia();

    },

    methods: {

        trendingMedia() {
            let APIcallTrendingMovies = store.APIcallTrending + '/movie/week?api_key=' + store.APIkey;

            axios.get(APIcallTrendingMovies).then((res) => {
                this.store.foundMovies = res.data.results;
            });

            let APIcallTrendingSeries = store.APIcallTrending + '/tv/week?api_key=' + store.APIkey;

            axios.get(APIcallTrendingSeries).then((res) => {
                this.store.foundSeries = res.data.results;
            });
        },

        search() {
            if (store.searchedText == '') {
                this.trendingMedia();
            } else {
                axios.get(store.APIcallMovie, {
                    params: {
                        api_key: store.APIkey,
                        query: store.searchedText
                    }
                }).then((res) => {
                    this.store.foundMovies = res.data.results;
                });
    
                axios.get(store.APIcallSeries, {
                    params: {
                        api_key: store.APIkey,
                        query: store.searchedText
                    }
                }).then((res) => {
                    this.store.foundSeries = res.data.results;
                });
            }
        },

    }
}
</script>

<template>

    <AppHeader @searchFunction="search()"></AppHeader>
    <AppMain></AppMain>
    
</template>

<style scoped lang="scss">

</style>

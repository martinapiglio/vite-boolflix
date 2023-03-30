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

        let APIcallTrendingPROVA = store.APIcallTrending + '/all/week?api_key=' + store.APIkey

        axios.get(APIcallTrendingPROVA).then((res) => {
            store.foundResults = res.data.results;
            console.log(store.foundResults);
            console.log(res.data);
        })
    },

    methods: {

        search() {
            axios.get(store.APIcallMulti, {
                params: {
                    api_key: store.APIkey,
                    query: store.searchedText
                }
            }).then((res) => {

                if (res.data.results.length == 0) {
                    store.queryHasResults = false;
                } else {
                    store.queryHasResults = true;
                    store.foundResults = res.data.results;
                };

            });
        }
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

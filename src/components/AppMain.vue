<script>
import { store } from '../store';
import AppMediaItem from './AppMediaItem.vue';
import AppNoResults from './AppNoResults.vue';

export default {
    data() {
        return {
            store
        }
    },

    components: {
        AppMediaItem,
        AppNoResults
    }

}

</script>

<template>
    <main>

        <h2>Movies</h2> 

        <div v-if="store.foundMovies.length != 0" class="container">  
            <AppMediaItem v-for="movie in store.foundMovies" :mediaItem="movie"></AppMediaItem>
        </div>
        <AppNoResults v-else></AppNoResults>

        <h2>Tv Series</h2>

        <div v-if="store.foundSeries.length != 0" class="container">  
            <AppMediaItem v-for="serie in store.foundSeries" :mediaItem="serie"></AppMediaItem>
        </div>
        <AppNoResults v-else></AppNoResults>

    </main>
</template>

<style scoped lang="scss">

    @use './style/_variables.scss' as *;
    @use './style/_mixins.scss' as *;

    // test styling
    main {
        height: $main-height;
        padding: 0 3rem 3rem;
        color: white;
        background-color: $darkgrey-bg-col;
        overflow-y: auto;
        
        h2 {
            padding: 2rem 1rem;
            font-size: 1.8rem;
            text-shadow: 5px 5px 5px black;
        }
        .container {
            @include flex(row, wrap, flex-start, flex-start, stretch);  
            gap: 20px; 
        }
    }
    // test styling

</style>

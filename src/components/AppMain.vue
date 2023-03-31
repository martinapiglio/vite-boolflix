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
        padding: 1rem;
        color: white;
        background-color: $darkgrey-bg-col;
        overflow-y: auto;
        
        .container {
            @include flex(row, wrap, flex-start, flex-start, stretch);  
            gap: 20px; 
        }
    }
    // test styling

</style>

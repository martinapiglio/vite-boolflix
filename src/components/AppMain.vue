<script>
import { store } from '../store';
import AppMediaItem from './AppMediaItem.vue';

export default {
    data() {
        return {
            store
        }
    },

    components: {
        AppMediaItem
    }

}

</script>

<template>
    <main>

        <h2>Movies</h2> 

        <div class="container">  
            <AppMediaItem v-for="movie in store.foundMovies" :mediaItem="movie"></AppMediaItem>
        </div>

        <h2>Tv Series</h2>

        <div class="container">  
            <AppMediaItem v-for="serie in store.foundSeries" :mediaItem="serie"></AppMediaItem>
        </div>

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
            @include flex(row, wrap, center, center, stretch);  
            gap: 10px; 
        }
    }
    // test styling

</style>

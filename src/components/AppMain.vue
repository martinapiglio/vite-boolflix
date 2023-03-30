<script>
import { store } from '../store';
import AppMovie from './AppMovie.vue';

export default {
    data() {
        return {
            store
        }
    },

    components: {
        AppMovie
    }

}

</script>

<template>
  <main>

    <div class="container">
        
        <AppMovie v-for="movie in store.foundMovies" 
            :title="movie.title"
            :originalTitle="movie.original_title"
            :originalLanguage="movie.original_language"   
            :vote="movie.vote_average">
        </AppMovie>
    </div>

  </main>
</template>

<style scoped lang="scss">

    @use './style/_variables.scss' as *;

    main {
        height: $main-height;
        background-color: $darkgrey-bg-col;
        overflow-y: auto;
    }

</style>

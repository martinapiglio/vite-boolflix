<script>
import { store } from '../store';
import axios from 'axios';
import AppMediaItem from './AppMediaItem.vue';
import AppCard from './AppCard.vue';
import AppNoResults from './AppNoResults.vue';

export default {
    data() {
        return {
            store
        }
    },

    components: {
        AppMediaItem,
        AppNoResults,
        AppCard
    },

    methods: {
        showMovieCard(activeCardIndex) {
            this.store.isShown = true;
            this.store.cardIndex = activeCardIndex;
            this.createCastGenresArrays('movie', this.store.foundMovies);
            this.store.type='movie';
        },

        showSerieCard(activeCardIndex) {
            this.store.isShown = true;
            this.store.cardIndex = activeCardIndex;
            this.createCastGenresArrays('tv', this.store.foundSeries);
            this.store.type='tv';
        },

        hideCard() {
            this.store.isShown = false;
        },

        createCastGenresArrays(mediaType, mediaItemArray) {
            let APIcallCast = 'https://api.themoviedb.org/3/' + mediaType + '/' + mediaItemArray[store.cardIndex].id + '/credits?api_key=' + store.APIkey;
            this.store.cast = [];
            axios.get(APIcallCast).then((res) => {

                for (let i = 0 ; i < 5 ; i++) {
                    this.store.cast.push(res.data.cast[i].name);
                };

            });

            let APIcallGenres = 'https://api.themoviedb.org/3/genre/' + mediaType + '/list?api_key=' + store.APIkey; 
            this.store.genres = [];
            axios.get(APIcallGenres).then((res) => {

                for(let i = 0; i < res.data.genres.length ; i++) {

                    if (mediaItemArray[store.cardIndex].genre_ids.includes(res.data.genres[i].id)) {
                        this.store.genres.push(res.data.genres[i].name);
                    }
                }

            });
        }

    }

}

</script>

<template>

    <main>

        <h2>Movies</h2> 

        <div v-if="store.foundMovies.length != 0" class="container"> 
            <div class="inner-container">
                <AppMediaItem 
                    v-for="(movie, index) in store.foundMovies" 
                    :mediaItem="movie" 
                    @click="showMovieCard(index)">
                </AppMediaItem>
            </div> 
        </div>

        <AppNoResults v-else></AppNoResults>

        <AppCard id="app-card" :class="store.isShown == true ? 'active' : '' " @closeCard="hideCard()"></AppCard>

        <h2>Tv Series</h2>

        <div v-if="store.foundSeries.length != 0" class="container">
            <div class="inner-container">
                <AppMediaItem 
                    v-for="(serie,index) in store.foundSeries" 
                    :mediaItem="serie"
                    @click="showSerieCard(index)">
                </AppMediaItem>
            </div>  
        </div>

        <AppNoResults v-else></AppNoResults>

    </main>
</template>

<style scoped lang="scss">

    @use './style/_variables.scss' as *;
    @use './style/_mixins.scss' as *;

    main {
        min-height: $main-height;
        position:relative;
        padding: 0 3rem 3rem;
        color: white;
        background-color: $darkgrey-bg-col;
        overflow: hidden;
        
        h2 {
            padding: 2rem 1rem 1rem;
            font-size: 1.8rem;
            text-shadow: 5px 5px 5px black;
        }
        .container {
            overflow-x: scroll;

            .inner-container {
                @include flex(row, nowrap, flex-start, flex-start, baseline);  
                gap: 20px; 
                width: fit-content;
                padding: 2rem 1rem;
            }
        }

        #app-card {
                display: none;
            }

        #app-card.active {
            display: flex;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 3;
            transform: translateX(25%) translateY(25%);
        }
    }

</style>

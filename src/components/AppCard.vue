<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },

}
</script>

<template>

    <div class="card-container">
        <div class="card-poster-container">
            <img v-if="store.type == 'movie'" :src="store.imgURI + 'w780/' + store.foundMovies[store.cardIndex].poster_path" alt="">
            <img v-else :src="store.imgURI + 'w780/' + store.foundSeries[store.cardIndex].poster_path" alt="">
        </div>
        <div class="card-text-container">
            <ul>
                <li class="title">
                    <span v-if="store.type == 'movie'"> {{ store.foundMovies[store.cardIndex].title }}</span>
                    <span v-else> {{ store.foundSeries[store.cardIndex].name }}</span>
                </li>

                <li v-if="store.foundMovies[store.cardIndex].title != store.foundMovies[store.cardIndex].original_title || store.foundSeries[store.cardIndex].name != store.foundSeries[store.cardIndex].original_name">
                    <span class="label">Titolo Originale: </span>
                    <span v-if="store.type == 'movie'" class="text"> {{ store.foundMovies[store.cardIndex].original_title }} </span>
                    <span v-else class="text"> {{ store.foundSeries[store.cardIndex].original_name }} </span>
                </li>

                <li>
                    <span class="label">Trama: </span>
                    <span v-if="store.type == 'movie'" class="text"> {{ store.foundMovies[store.cardIndex].overview }}</span>
                    <span v-else class="text"> {{ store.foundSeries[store.cardIndex].overview }}</span>
                </li>

                <li>
                    <span class="label">Genere: </span>
                    <span class="text"> {{ store.genres.join(', ') }} </span>
                </li>

                <li>
                    <span class="label">Cast: </span>
                    <span class="text"> {{ store.cast.join(', ') }}</span>
                </li>
            </ul>
            <i @click="$emit('closeCard')" class="fa-solid fa-circle-xmark"></i>
        </div>
    </div>

</template>

<style scoped lang="scss">

    @use './style/_variables.scss' as *;
    @use './style/_mixins.scss' as *;

    .card-container {
        @include flex(row, nowrap, flex-start, flex-start, baseline);
        max-width: 850px;  
        height: 500px;
        border-radius: 40px;
        overflow: hidden;
        background-color: black;
        box-shadow: 10px 10px 20px 5px rgb(0, 0, 0, .5);

        .card-poster-container {
            position: relative;
            width: 55%;
            img {
                width: 100%;
                object-fit: cover;
                transform: translateY(-10%);
            }
        }

        .card-text-container {
            position: relative;

            height: 100%;
            width: 45%;
            padding: 0 4rem 1rem 0;
            box-shadow: -3rem 0 5rem 3rem rgb(0, 0, 0);    
            overflow: auto;  
            
            ul {
                @include flex(column, nowrap, center, flex-start, baseline);
                gap: 1rem;
                height: 100%;
                padding: 2rem .5rem 2rem 0;
                font-size: small;

                .text {
                    color: $lightgrey;
                }

                .title  {
                    color: white;
                    font-size: 23px;
                    font-weight: bold;
                }
            }

            i {
                position: absolute;
                top: 1rem;
                right: 1.5rem;
                font-size: 30px;
                color: $lightgrey;
                cursor: pointer;
            }

            i:hover {
                color: white;
            }
        }

    }

</style>

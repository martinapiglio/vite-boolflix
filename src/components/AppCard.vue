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
            <img :src="store.imgURI + 'w780/' + store.foundMovies[store.cardIndex].poster_path" alt="">
        </div>
        <div class="card-text-container">
            <ul>
                <li class="title">
                    <span> {{ store.foundMovies[store.cardIndex].title }} {{ index }}</span>
                </li>

                <li v-if="store.foundMovies[store.cardIndex].title != store.foundMovies[store.cardIndex].original_title">
                    <span class="label">Titolo Originale: </span>
                    <span class="text"> {{ store.foundMovies[store.cardIndex].original_title }} </span>
                </li>

                <li>
                    <span class="label">Trama: </span>
                    <span class="text"> {{ store.foundMovies[store.cardIndex].overview }}</span>
                </li>

                <li>
                    <span class="label">Genere: </span>
                    <span class="text"> {{ store.movieGenres.join(', ') }} </span>
                </li>

                <li>
                    <span class="label">Cast: </span>
                    <span class="text"> {{  store.movieCast.join(', ') }}</span>
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
        height: 450px;
        border-radius: 40px;
        overflow: hidden;
        background-color: black;
        box-shadow: 10px 10px 20px 5px rgb(0, 0, 0, .5);

        .card-poster-container {
            position: relative;
            width: 60%;
            img {
                width: 100%;
                object-fit: cover;
                transform: translateY(-10%);
            }
        }

        .card-text-container {
            position: relative;

            height: 100%;
            width: 40%;
            padding: 1rem 5rem 1rem 1rem;
            box-shadow: -3rem 0 5rem 3rem rgb(0, 0, 0);      
            
            ul {
                @include flex(column, wrap, center, flex-start, baseline);
                gap: 1rem;
                height: 100%;
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

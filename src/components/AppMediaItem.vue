<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
            htmlCode: '',
        }
    },

    props: {
        mediaItem: Object,
    },

    methods: {

        getFlag(string) {
            let languageCodeUpper = string.toUpperCase();
            let srcFlag;

            console.log(languageCodeUpper);

            if (languageCodeUpper == 'EN') {
                languageCodeUpper = 'GB';
            } else if (languageCodeUpper == 'JA'){
                languageCodeUpper = 'JP';
            } else if (languageCodeUpper == 'KO'){
                languageCodeUpper = 'KR';
            }; 

            srcFlag = 'http://purecatamphetamine.github.io/country-flag-icons/3x2/' + languageCodeUpper + '.svg';

            return srcFlag;
        },
        
        getStarVote(vote) {

            let starValue = (this.store.maxVote / this.store.maxStars);
            let finalStarVote = (vote / starValue);

            let n = Math.floor(finalStarVote);
            let nDecimal = finalStarVote - n;

            let starOutput = [];

            for (let i = n; i >= 1; i--) {
                starOutput.push('<i class="fa-solid fa-star"></i>');
            }

            if (nDecimal < 0.3) {
                nDecimal = 0;
            } else if (nDecimal > 0.7) {
                nDecimal = 1;
                starOutput.push('<i class="fa-solid fa-star"></i>');
            } else {
                nDecimal = 0.5;
                starOutput.push('<i class="fa-solid fa-star-half"></i>');
            };

            this.htmlCode = starOutput.join('');

            return this.htmlCode;

        },

    }
    
}
</script>

<template>

    <div v-if="mediaItem.poster_path!= null" class="media-item">

        <div class="poster-container">
            <img :src=" store.imgURI + store.imgSize + mediaItem.poster_path" alt="">
        </div>

        <div class="info-container">
            <ul>
                <li>
                    <span class="label">Titolo: </span>
                    <span v-if="mediaItem.title">{{ mediaItem.title }}</span>
                    <span v-else-if="mediaItem.name">{{ mediaItem.name }}</span>
                </li>
    
                <li v-if="mediaItem.title != mediaItem.original_title || mediaItem.name != mediaItem.original_name">
                    <span class="label">Titolo Originale: </span>
                    <span v-if="mediaItem.original_title">{{ mediaItem.original_title }}</span>
                    <span v-if="mediaItem.original_name">{{ mediaItem.original_name }}</span>
                </li>
    
                <li>
                    <span class="label">Lingua Originale: </span> 
                    <img class="flag" :src="getFlag(mediaItem.original_language)" alt="flag"> 
                </li>

                <li>
                    <span class="label">Trama: </span>
                    <span>{{ mediaItem.overview }}</span>
                </li>
    
                <li>
                    <span class="label">Voto: </span> 
                    <span v-html="htmlCode" class="star"></span>
                    <span style="display: none;" > {{ getStarVote(mediaItem.vote_average) }} </span> 
                </li>
            </ul>
        </div>

    </div>

</template>

<style scoped lang="scss">

    @use './style/_variables.scss' as *;
    // test styling
    .media-item {
        position: relative;
        width: calc(100% / 4 - 20px / 4 * 3);

        font-size: small;

        color: white;
        border: 2px solid $darkergrey;
        overflow-y: auto;
        cursor: pointer;

        .poster-container {
            width: 100%;
            
            img {
                display: block;
                width: 100%;
            }
        }

        .info-container {
            display: none;
        }

    }
    // test styling
    .media-item:hover .info-container{
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        
        width: 100%;
        height: 100%;

        padding: 1rem;

        background-color: rgba(0, 0, 0, 0.7);

        li {
            margin-bottom: .4rem;
        }

        .label {
            font-weight: bold;
        }
            
        .flag {
            width: 20px;
        }

        .star {
            color: rgb(255, 204, 0);
        }
    }

</style>

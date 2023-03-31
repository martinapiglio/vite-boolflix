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

    <div class="media-item">
        <ul>
            <li>
                <span class="label">Titolo: </span>
                <span v-if="mediaItem.title">{{ mediaItem.title }}</span>
                <span v-else-if="mediaItem.name">{{ mediaItem.name }}</span>
            </li>

            <li>
                <span class="label">Titolo Originale: </span>
                <span v-if="mediaItem.original_title">{{ mediaItem.original_title }}</span>
                <span v-if="mediaItem.original_name">{{ mediaItem.original_name }}</span>
            </li>

            <li>
                <span class="label">Lingua Originale: </span> 
                <img :src="getFlag(mediaItem.original_language)" alt="flag"> 
            </li>

            <li>
                <span class="label">Voto:</span> 
                <span v-html="htmlCode"></span>
                <span style="display: none;" > {{ getStarVote(mediaItem.vote_average) }} </span> 
                <!-- <i v-for="finalVote in getStarVote(mediaItem.vote_average)" class="fa-solid fa-star"></i> -->

            </li>
        </ul>
    </div>

</template>

<style scoped lang="scss">

    // test styling
    .media-item {
        color: white;
        border: 1px solid white;
        width: calc(100% / 3 - 10px / 3 * 2);
        padding: 1rem;


        .label {
            font-weight: bold;
        }
        
        img {
            width: 20px;
        }
        
    }
    // test styling

</style>

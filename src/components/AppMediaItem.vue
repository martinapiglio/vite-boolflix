<script>
import { store } from '../store';

export default {
    data() {
        return {
            store
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
                <span class="label">Voto: </span> {{ mediaItem.vote_average }}
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

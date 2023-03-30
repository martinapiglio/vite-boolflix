<script>
import { store } from '../store';

export default {
    data() {
        return {
            store
        }
    },

    props: {
        result: Object,
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

    <div class="movie">
        <ul>
            <li>
                <span class="label">Titolo: </span>
                <span v-if="result.media_type == 'movie'">{{ result.title }}</span>
                <span v-else>{{ result.name }}</span>
            </li>

            <li>
                <span class="label">Titolo Originale: </span>
                <span v-if="result.media_type == 'movie'">{{ result.original_title }}</span>
                <span v-else>{{ result.original_name }}</span>
            </li>

            <li>
                <span class="label">Lingua Originale: </span> 
                <img :src="getFlag(result.original_language)" alt="flag"> 
            </li>

            <li>
                <span class="label">Voto: </span> {{ result.vote_average }}
            </li>

            <li>
                <span class="label">Tipo: </span>
                <span v-if="result.media_type == 'movie'">Film</span> 
                <span v-else>Serie tv</span>
            </li> 
            
        </ul>
    </div>

</template>

<style scoped lang="scss">

    // test styling
    .movie {
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

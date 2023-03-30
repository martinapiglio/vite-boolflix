<script>
import { store } from '../store';

export default {
    data() {
        return {
            store
        }
    },

    props: {
        title: String,
        originalTitle: String,
        originalLanguage: String,
        vote: Number
    },

    methods: {

        getFlag(string) {
            let languageCodeUpper = string.toUpperCase();
            if (languageCodeUpper == 'EN') {
                languageCodeUpper = 'GB'
            }

            let srcFlag = 'http://purecatamphetamine.github.io/country-flag-icons/3x2/' + languageCodeUpper + '.svg';

            console.log(languageCodeUpper)
            console.log(srcFlag)
            return srcFlag;

            // return languageCodeUpper;
        },

    }
    
}
</script>

<template>

    <div class="movie">
        <ul>
            <li><span>Titolo:</span> {{ title }}</li>
            <li><span>Titolo Originale:</span> {{ originalTitle }}</li>
            <li><span>Lingua Originale:</span> 
                <img :src="getFlag(originalLanguage)" alt=""></li>
            <li><span>Voto:</span> {{ vote }}</li>
            
        </ul>
    </div>

</template>

<style scoped lang="scss">

    .movie {
        color: white;
        border: 1px solid white;

        span {
            font-weight: bold;
        }

        img {
            width: 20px;
        }
    }

</style>

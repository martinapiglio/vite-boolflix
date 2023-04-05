<script>
import { store } from '../store';
import AppCard from './AppCard.vue';

export default {
    data() {
        return {
            store,
            AppCard,
            starPercentage: 0,
        }
    },

    props: {
        mediaItem: Object,
    },

    computed: {

        flag() {
            let languageCodeUpper = (this.mediaItem.original_language).toUpperCase();
            let srcFlag;

            if (languageCodeUpper == 'EN') {
                languageCodeUpper = 'GB';
            } else if (languageCodeUpper == 'JA'){
                languageCodeUpper = 'JP';
            } else if (languageCodeUpper == 'KO'){
                languageCodeUpper = 'KR';
            } else if (languageCodeUpper == 'ZH'){
                languageCodeUpper = 'CN';
            };

            srcFlag = 'http://purecatamphetamine.github.io/country-flag-icons/3x2/' + languageCodeUpper + '.svg';

            return srcFlag;
        },

    },

    created() {
        this.getStarVote();
    },

    methods: {

        getStarVote() {
            let starValue = (this.store.maxVote / this.store.maxStars);
            let starVote = (this.mediaItem.vote_average / starValue);

            this.starPercentage = ((starVote / this.store.maxStars) * 100) + '%';

            return this.starPercentage;

        }

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
                    <img class="flag" :src="flag" alt="flag">
                </li>

                <li>
                    <span class="label">Trama: </span>
                    <span>{{ mediaItem.overview }}</span>
                </li>

                <li>
                    <span class="label">Voto: </span>

                    <span class="stars-outer">
                        <span :style="{width: starPercentage}" class="stars-inner"></span>
                    </span>

                </li>
            </ul>
        </div>

    </div>

</template>

<style scoped lang="scss">

    @use './style/_variables.scss' as *;

    .media-item {
        position: relative;
        width: 300px;
        height: 100%;   

        font-size: small;

        color: white;
        border: 1px solid $lightgrey;
        overflow: hidden;
        cursor: pointer;
        transition: all .7s ;

        .poster-container {
            width: 100%;
            transition: all .7s ;

            img {
                display: block;
                width: 100%;
                height: 450px;
                object-fit: cover;
                transition: all .7s ;
            }
        }

        .info-container {
            display: none;
        }

    }

    .media-item:hover {
        transform: scale(110%);
    }

    .media-item:hover .poster-container img{
        transform: scale(120%);
        opacity: 50%;
    }

    .media-item:hover .info-container{
        display: block;
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        padding: 1rem;

        background-color: rgba(0, 0, 0, 40%);
        overflow-y: auto;

        li {
            margin-bottom: .4rem;
        }

        .label {
            font-weight: bold;
        }

        .flag {
            width: 20px;
        }
        
        .stars-outer {
            position: relative;
            width: fit-content;
    
            .stars-inner {
                position: absolute;
                top: 0;
                left: 0;
                white-space: nowrap;
                overflow: hidden;
            }
        }
    
        .stars-outer::before {
            content: '\f005 \f005 \f005 \f005 \f005';
            font-family: 'Font Awesome 5 Free';
            font-weight: 900;
            color: $lightgrey;
        }
    
        .stars-inner::before {
            content: '\f005 \f005 \f005 \f005 \f005';
            font-family: 'Font Awesome 5 Free';
            font-weight: 900;
            color: rgb(255, 204, 0);
        }

    }

</style>

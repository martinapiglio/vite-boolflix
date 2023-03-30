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
    }
}
</script>

<template>

    <div class="movie">
        <ul>
            <li><span>Titolo:</span> {{ title }}</li>
            <li><span>Titolo Originale:</span> {{ originalTitle }}</li>
            <li><span>Lingua Originale:</span> {{ originalLanguage }}</li>
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
    }

</style>

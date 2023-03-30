<script>
import { store } from '../store';

export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template>

    <header>

        <div id="header-left">
            <h1>Boolflix</h1>
        </div>

        <div id="header-right">
            <input v-model="store.searchedText" @keyup.enter="$emit('searchFunction')" type="search" placeholder="Search for a movie or a tv series...">
            <button @click="$emit('searchFunction')">Search</button>
        </div>

    </header>

</template>

<style scoped lang="scss">

    @use './style/_variables.scss' as *;
    @use './style/_mixins.scss' as *;

    header {
        @include flex(row, nowrap, space-between, center, stretch);

        height: $header-height;
        padding: 0 1rem;
        background-color: black;

        #header-left {

            h1 {
                color: red;
            }

        }

        #header-right {

            input {
                min-width: 230px;
                margin-right: .3rem;
            }

        }

    }


</style>

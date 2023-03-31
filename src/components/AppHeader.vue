<script>
import { store } from '../store';

export default {
    data() {
        return {
            store
        }
    },
    emit: ['searchFunction']
}
</script>

<template>

    <header>

        <div id="header-left">
            <h1>Boolflix</h1>
        </div>

        <div id="header-right">

            <div id="header-right-search">
                <input v-model="store.searchedText" @keyup="$emit('searchFunction')" type="search" placeholder="Search for a movie or a tv series...">
                <button @click="$emit('searchFunction')">Search</button>
            </div>
    
            <div id="header-right-account">
                <img src="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg" alt="">
                <div>Martina</div>
                <i class="fa-solid fa-chevron-down"></i>
            </div>

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
            @include flex(row, nowrap, space-between, center, stretch);
            gap: 2rem;
            height: 100%;

            #header-right-search {
                input {
                    min-width: 280px;
                    margin-right: .3rem;
                    padding: .3rem;
                    border: none;
                    border-radius: 5px;
                }

                button {
                    padding: .3rem .8rem;
                    border: 1px solid $lightgrey;
                    border-radius: 5px;
                    color: white;
                    background-color: $darkgrey-bg-col;
                    cursor: pointer;
                    transition: .2s;
                }

                button:hover {
                    background-color: rgb(78, 78, 78);
                }
            }
    
            #header-right-account {
                @include flex(row, nowrap, space-between, center, stretch);
                gap: .4rem;
                height: 100%;
                color: white;

                img {
                    height: 40%;
                    cursor: pointer;
                }

                i {
                    font-size: small;
                    cursor: pointer;
                }
            }
        }

    }

</style>

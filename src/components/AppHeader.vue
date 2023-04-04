<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
            // options: [
            //     'Movies',
            //     'TV Series'
            // ]
        }
    },

    emit: ['searchFunction'],

    // methods : {
    //     selectOption(opt) {
    //         this.store.activeOption = opt;
    //     }
    // }
}
</script>

<template>

    <header>

        <div id="header-left">
            <h1>Boolflix</h1>
            <!-- <div 
                v-for="option in options" 
                @click="selectOption(option)" 
                :class="store.activeOption == option ? 'active' : ''"
                class="selection">
                {{ option }}
            </div> -->

        </div>

        <div id="header-right">

            <div id="header-right-search">
                <input v-model="store.searchedText" @keyup="$emit('searchFunction')" type="search" placeholder="Search for a movie or a tv series...">
                <button @click="$emit('searchFunction')">Search</button>
            </div>
    
            <div id="header-right-account">
                <img src="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg" alt="">
                <div>Martina</div>

                <div class="settings">
                    <i class="fa-solid fa-chevron-down"></i>
                    <div class="settings-info">
                        <div>
                            <i class="fa-solid fa-user"></i>
                            <span>Account</span> 
                        </div>
                        <div>
                            <i class="fa-solid fa-gear"></i>
                            <span>Settings</span> 
                        </div>
                    </div>
                </div>

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
        color: white;
        background-color: black;

        #header-left {
            // @include flex(row, nowrap, space-between, center, stretch);

            h1 {
                color: red;
                // padding-right: .7rem;
            }

            // .selection {
            //     padding: .3rem .5rem;
            //     color: red;
            //     cursor: pointer;
            // }

            // .active {
            //     color: white;
            //     background-color: rgba(255, 0, 0, 0.4);
            // }

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
                position: relative;
                @include flex(row, nowrap, space-between, center, stretch);
                gap: .4rem;
                height: 100%;

                img {
                    height: 40%;
                    cursor: pointer;
                }

                .settings {
                    .settings-info{
                        display: none;
                        font-size: small;
                        color: white;
                        border-radius: 8px;
                        background-color: $darkgrey-bg-col;
                        overflow: hidden;

                        i {
                            margin-right: .5rem;
                        }

                        div:first-child,
                        div:last-child
                         {
                            padding: .6rem 1rem;
                            transition: .2s;
                        }
                    }
                    
                    i {
                        font-size: small;
                        cursor: pointer;
                        transition: .5s;
                    }
    
                    i:hover {
                        transform: rotate(180deg);
                    }

                }

                .settings:hover .settings-info {
                    @include flex(column, nowrap, center, center, baseline);
                    position: absolute;
                    top: 3.6rem;
                    right: 0rem;
                    z-index: 4;

                    border: 1px solid $lightgrey;

                    div:hover {
                        background-color: rgb(125, 125, 125);
                        cursor: pointer;
                    }
                }

            }
        }

    }

</style>

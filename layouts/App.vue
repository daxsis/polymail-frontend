<template>
    <div id="app-layout" class="flex flex-col min-h-screen w-screen select-none">
        <div>
            <app-header v-show="showHeader"></app-header>
        </div>
        <main>
            <nuxt/>
        </main>

        <app-footer v-show="showFooter"></app-footer>
    </div>
</template>

<script>
import AppHeader from '@/components/Header/AppHeader.vue'
import AppFoooter from '@/components/Footer/AppFooter.vue'

export default {
    data() {
        return {

        }
    },
    components: {
        AppFoooter,
        AppHeader
    },

    computed: {

        showFooter() {
            let pages = []

            return pages.indexOf( this.$route.name ) == -1
        },

        showHeader() {
            let pages = []

            return pages.indexOf( this.$route.name ) == -1
        }
    }
}
</script>


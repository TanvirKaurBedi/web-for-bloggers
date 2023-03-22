<template>
    <v-card max-width="448" class="mx-auto">
        <v-layout>
            <v-app-bar color="info" density="prominent">

                <!-- <v-toolbar-title>Your Dashboard</v-toolbar-title> -->
                <template v-slot:prepend>
                    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

                    <v-btn icons id="tabs">
                        <router-link to="/">Back to Home</router-link> &nbsp;&nbsp;
                        <router-link to="/createPost"> Create Post</router-link>&nbsp;&nbsp;
                        <button type="button" @click="openForm">CreatePost</button>
                    </v-btn>
                    <div v-if="show">
                        <toggleForm></toggleForm>
                    </div>
                </template>
            </v-app-bar>
        </v-layout>
    </v-card>
</template>

<script>
import  {mapState} from 'vuex'
import toggleForm from "./toggleForm.vue"
export default {
    name: "navgationPage",
    data() {
        return {

        }
    },
    components: {
        toggleForm
    },
    mounted() {
        console.log("BeforeCall", this.$store.state.blogPost.blogPost);

    },
    methods: {
        openForm() {
            console.log("tkb");
            const show = this.$store.state.blogPost.Show
            this.$store.commit("toggleBlogPost", show)
            console.log("After", this.$store.state.blogPost.Show)

        },
    },
    computed: {
       ...mapState('blogPost', ['Show'])
    },
    watch : {
        Show(newValue){
            console.log('show', newValue)
        }
    }
}
</script> 
 
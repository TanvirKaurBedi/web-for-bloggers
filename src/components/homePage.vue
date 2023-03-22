<template>
    <v-card max-width="448" class="mx-auto" id="card">
        <v-layout>
            <v-main>
                <v-container fluid v-for="(item, index) in userPostsArray" :key="item.Name">
                    <span style="float: right;">
                        <v-icon @click="deletePost(index)">mdi-delete</v-icon>
                    </span>
                    <v-card class="mb-2" density="compact" :prepend-avatar="item.ImageUrl" :subtitle="item.Address"
                        :title="item.Name" variant="text">


                        <v-img :src="item.ImageUrl" id="postImage"></v-img>
                        <template v-slot:actions>
                            <!-- <v-btn color="primary" variant="text">View More</v-btn> -->
                            <Caption v-model="item.Caption" id="Caption">{{ item.Caption }}</Caption>
                        </template>
                    </v-card>
                </v-container>
            </v-main>
        </v-layout>
    </v-card>
</template>
<script>
export default {
    name: "homePage",
    data() {
        return {
            userPostsArray: JSON.parse(localStorage.getItem("userPostsArray")) || [],
            userDetails: {
                Name: "Tanvir",
                Address: "Raipur",
                ImageUrl: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
                Caption: "My-Caption",
            }
        }
    },
    methods: {
        deletePost(indexOfTheCurrentItem) {
            console.log("indexOfTheCurrentItem", indexOfTheCurrentItem);
            this.userPostsArray.splice(indexOfTheCurrentItem, 1);
            localStorage.setItem("userPostsArray", JSON.stringify(this.userPostsArray));
        }
    },
    mounted() {
        console.log(this.$store.state.name)

        // const self = this
        // this.emitter.on("myEvent", (msg) => {
        //     this.message = msg;
        //     console.log(msg);
        // })
        this.emitter.on("usersPost", (post) => {
            this.userDetails = post;
            this.userPostsArray.push(this.userDetails);
            localStorage.setItem("userPostsArray", JSON.stringify(this.userPostsArray));
            console.log("postDetails", this.userDetails);
            console.log("posts are", post);
            console.log("Array", this.userPostsArray)
        })
    },
}
</script>   
<style>
#Caption {
    white-space: nowrap;
}

#postImage {
    object-fit: contain;
    max-height: 300px;
}

#card {}
</style>
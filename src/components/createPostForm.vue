<!-- eslint-disable no-debugger -->
<template>
    <div>
        <h1 id="formHeading">Upload Your Blogs Here </h1>
        <form id="divForm">
            <div>
                <div id="container">

                    <div>
                        <label for="Name"><b>Name</b></label>&nbsp;
                        <input type="text" placeholder="Enter Name" id="Name" v-model="postDetails.Name" required>
                    </div>
                    <div>
                        <label for="Address"><b>Address</b></label>&nbsp;
                        <input type="address" placeholder="Enter Address" name="address" id="Address"
                            v-model="postDetails.Address" required />
                    </div>
                    <div>
                        <label for="UploadPic"><b>Upload Pic</b></label>&nbsp;
                        <input type="file" id="UploadPic" @change="OnImageChange" ref="fileInput"><br>
                    </div>
                    <div>
                        <label for="Caption" id="captionLabel"><b>Caption</b></label>&nbsp;
                        <textarea rows="2" type="text" id="textAreaCaption" placeholder="Write Something Here"
                            v-model="postDetails.Caption"></textarea><br>
                    </div>
                    <div><button type="submit" id="formSubmitBtn" @click="onFormSubmit">Save & Post </button></div>
                    <!-- <button @click="EventHandler">Event emit</button> -->
                    <p>{{ Name }}</p>
                </div>
            </div>
        </form>
    </div>
</template>
<script>

export default {
    name: "createPostForm",
    data() {
        return {
            postDetails: {
                Name: "",
                Address: "",
                ImageUrl: null,
                Caption: "",
            }
        }
    },
    methods: {
        OnImageChange(e) {
            console.log(e);

            const file = e.target.files[0]
            const reader = new FileReader()
            reader.onload = (e) => {
                this.postDetails.ImageUrl = e.target.result
            },
                reader.readAsDataURL(file)
            // let input = this.$refs.fileInput;
            // let file = input.files;
            // if (file && file[0]) {
            //     let reader = new FileReader();
            //     reader.onload = (e) => {
            //         this.postDetails.ImageUrl = e.target.result;
            //     };
            //     reader.readAsDataURL(file[0]);
            //     this.$emit("input", file[0]);
            // } else {
            //     this.this.postDetails.ImageUrl = null;
            // }
        },
        // EventHandler() {
        //     this.$router.push('/');
        //     setTimeout(() => {
        //         this.emitter.emit("myEvent", "Event-Sent")
        //     }, 1000)
        // },
        onFormSubmit(e) {
            // console.log("event is ", e);
            this.$router.push('/');
            e.preventDefault();

            setTimeout(() => {
                this.emitter.emit("usersPost", this.postDetails)
            }, 1000)
        }
    }
}
</script>
<style>
#divForm {
    max-width: 500px;
    border: inset 5px black;
    text-align: justify;
    margin: auto;
    width: 50%;
    display: grid;

}


#formHeading {
    /* justify-content: center; */
    text-align: center;
}


/* label textarea {
    vertical-align: middle !important;
} */
#container {
    display: flex;
    flex-direction: column;
}

#container div {
    flex: 1;
    flex-basis: 0;
}

label {}

input {}

#formSubmitBtn {
    border: inset 3px black;
    border-radius: 5px;
    display: flex;
    justify-content: center;

}
</style>
    
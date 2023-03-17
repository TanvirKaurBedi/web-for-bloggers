<template>
    <div>
        <form>
            <div>
                <h1>Upload Your Blogs Here</h1>
                <div id="container">
                    <label for="Name"><b>Name</b></label>&nbsp;
                    <input type="text" placeholder="Enter Name" name="email" id="Name" required><br>
                    <label for="UploadPic"><b>Upload Pic</b></label>&nbsp;
                    <input type="file" id="UploadPic"><br>
                    <label for="Caption"><b>Caption</b></label>&nbsp;
                    <textarea type="text" id="Caption" placeholder="Write Something Here"></textarea><br>
                    <button type="submit" class="submitBtn">Save</button>
                </div>
            </div>
        </form>
       
    </div>
</template>
<script>
export default {
    name: "formCom"
}
</script>

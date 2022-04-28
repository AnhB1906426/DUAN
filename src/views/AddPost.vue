<template>
    <v-container>
        <v-row no-gutter>
            <v-col sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title>New Post</v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="form" @submit.prevent="submitForm" class="pa-5" enctype="multipart/form-data">
                        <v-text-field label="Name" v-model="post.title" prepend-icon="mdi-note" :rules="rules"></v-text-field>
                        <v-text-field label="Caterogy" v-model="post.category" prepend-icon="mdi-view-list" :rules="rules"></v-text-field>
                        <v-textarea label="Content" v-model="post.content" prepend-icon="mdi-note-plus" :rules="rules"></v-textarea>
                        <v-file-input @change="selectFile" :rules="rules" show-size counter multiple label="Poster"></v-file-input>
                        <v-btn type="submit" class="mt3" color="primary">Add Post</v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import api from "../api";
    export default {
        data() {
            return {
                rules: [
                    v => !!v || "This field is required!!!",
                    v => (v && v.length <= 2000) || "Max 2000 characters"
                ],
                post:{
                    title: "",
                    category: "",
                    content: "",
                    image: "",
                },
                image:"",
            };
        },
        methods: {
            selectFile(files) {
                this.image = files[0];
            },
            async submitForm() {
                const formData = new FormData();
                formData.append("title", this.post.title);
                formData.append("category", this.post.category);
                formData.append("content", this.post.content);
                formData.append("image", this.image);
                if (this.$refs.form.validate()) {
                    const response = await api.addPost(formData);
                    this.$router.push({name: "home", params :{message: response.message}});
                }
            },
        }
    }
</script>

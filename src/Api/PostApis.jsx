import axios from "axios";
const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});

export const getPost = async () => {
    try {
        const resp = await api.get("/posts");
        return resp;
    } catch (error) {
        throw new Error("Failed to load posts");
    }
}

export const deletePost = (id) => {
    return api.delete(`posts/${id}`);
}

// Add Post 

export const addPost = (post) => {
    return api.post("posts", post);
}

// Update Post 

export const updatePost = (id, post) => {
    return api.put(`posts/${id}`, post);
}
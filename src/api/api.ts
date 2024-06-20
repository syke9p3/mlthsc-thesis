import axios from 'axios';
import { SavedPost, Result } from '../types/types';

export const URL_BASE = 'http://localhost:8080/labels' // TODO: rename endpoint to /output

export const fetchOutput = async (text: string) => {
    console.log('fetching classification results...');
    return axios.post(URL_BASE, { input: text });
}

export const fetchSavedPosts = () => {
    const posts = localStorage.getItem('savedPosts');
    if (posts) {
        return JSON.parse(posts);
    }
    return null;
}

export const addSavedPost = (result: Result) => {

    const id = Date.now().toString();
    const date = new Date().toString();

    const newPost = { ...result, id, date } as SavedPost;
    console.log('newPost:', newPost);

    let savedPosts = fetchSavedPosts() || [];
    savedPosts.unshift(newPost);
    localStorage.setItem('savedPosts', JSON.stringify(savedPosts));
    console.log('newPost is saved to localstorage');

    return savedPosts
}

export const deleteSavedPost = (id: string) => {
    const posts = localStorage.getItem('savedPosts');
    return posts ? JSON.parse(posts) : [];
}

export const deleteAllSavedPost = () => {
    localStorage.setItem('savedPosts', ([]).toString());
    console.log('All saved posts deleted');

    const posts = localStorage.getItem('savedPosts');
    return posts ? JSON.parse(posts) : [];
}
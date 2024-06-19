import axios from 'axios';

export const URL_BASE = 'http://localhost:8080/labels' // TODO: rename endpoint to /output

export const fetchOutput = async (text: string) => {
    console.log('fetching classification results...');
    return axios.post(URL_BASE, { input: text });
}
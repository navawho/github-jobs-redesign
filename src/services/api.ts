import axios from 'axios';

const api = axios.create({
	baseURL: 'https://cors-anywhere.herokuapp.com/https://jobs.github.com',
});

export default api;

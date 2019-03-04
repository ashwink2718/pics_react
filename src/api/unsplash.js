import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID e23045d005fe0358c6dc80044ff5bf131ff25fcfcb35dfd0f154d6085e51f303'
	}	
});
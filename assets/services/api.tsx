import axios from 'axios';
import { resolvePath } from 'react-router-dom';
export default {
	createLink(data: { link: URL | string }): Promise<any> {
		return axios.post(process.env.API_URL + '/links', { origin: data.link });
	},
	listLinks(): Promise<any> {
		return axios.get(process.env.API_URL + '/links');
	},
};

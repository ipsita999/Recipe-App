import Axios from 'axios'
const BASE_URL = `https://5dced63875f9360014c26491.mockapi.io/`

export const api = Axios.create({
	baseURL: BASE_URL,
	// headers: {
		// 'Access-Control-Allow-Origin': '*'
	// }
})

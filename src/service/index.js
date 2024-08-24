import axios from 'axios'
import { POSTS_LIST_URL } from './config'

class ApiService {
    fetchPosts = async ({ page, limit }) => {
        return await axios
            .get(POSTS_LIST_URL, {
                params: {
                    _page: page,
                    _limit: limit
                }
            })
            .then((res) => ({ data: res.data, totalItems: res.headers['x-total-count'] }))
    }
}

const apiService = new ApiService()

export default apiService

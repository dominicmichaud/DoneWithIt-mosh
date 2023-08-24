import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({
    baseURL: 'http://10.0.0.119:9000/api',
});
// Changes the implementation of the GET method
// Get a reference of the method
const get = apiClient.get;
// Redefine
apiClient.get = async (url, params, axiosConfig) => {
    const response = await get(url, params, axiosConfig);

    if (response.ok) {
        cache.store(url, response.data);
        return response;
    }

    // Offline or failed call to API
    // Look for data in Cache
    const data = await cache.get(url);
    // If data exist in Cache, we simulate a successfull response
    // otherwise we return the original response object
    return data ? { ok: true, data } : response;
}

export default apiClient;
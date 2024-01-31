import axios from 'axios';

const baseURL = "http://localhost:5000/";

axios.defaults.baseURL = baseURL;

// Important: If axios is used with multiple domains, the AUTH_TOKEN will be sent to all of them.
// See below for an example using Custom instance defaults instead.
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


export default class API {
    static async get(url: string, data: Object) {
        try {
            const response = await axios.get(url, data);
            return response.data;
        }
        catch (error) {
            console.log('Error in API.get', error);
            throw error;
        }
    }


    static async post(url: string, data: Object) {
        try {
            const response = await axios.post(url, data);
            return response.data;
        }
        catch (error) {
            console.log('Error in API.post', error);
            throw error;
        }
    }

    static async delete(url: string, data: Object) {
        try {
            const response = await axios.delete(url , data);
            return response.data;
        }
        catch (error) {
            console.log('Error in API.delete', error);
            throw error;
        }
    }

}
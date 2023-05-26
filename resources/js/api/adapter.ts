import axios from "axios";
const root_url = `http://netzwelt.local/api`;

axios.defaults.headers.common.Accept = "*/*";
axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export function useApi() {
    return {
        get: (url: string, data?) => {
            data = new URLSearchParams(data).toString();
            return new Promise((resolve, reject) => {
                axios
                    .get(`${root_url}${url}?${data}`)
                    .then((result) => {
                        resolve(result);
                    })
                    .catch((error) => {
                        reject(error.response);
                    });
            });
        },
        post: (url: string, data) => {
            return new Promise((resolve, reject) => {
                axios
                    .post(`${root_url}${url}`, data)
                    .then((result) => {
                        resolve(result);
                    })
                    .catch((error) => {
                        reject(error.response);
                    });
            });
        },
    };
}

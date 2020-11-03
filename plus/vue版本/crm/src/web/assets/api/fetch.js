import _ from 'lodash';
const fetchData = (url, params, method, callback) => {
    if (method == 'get') {
        return new Promise((resolve, reject) => {
            return fetch(url, {
                    method: 'GET'
                })
                .then(res => res.json())
                .then(res => {
                    resolve(res);
                })
                .catch(err => {

                })
        })
    } else if (method == 'post') {
        return new Promise((resolve, reject) => {
            return fetch(url, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(params)
                })
                .then(res => res.json())
                .then(res => {
                    resolve(res);
                })
                .catch(err => {

                })
        })
    }
}
function importLoash() {
    console.log(_);
}
export {fetchData, importLoash} ;
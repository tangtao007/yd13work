import {fetchData} from './fetch';
export function getInfo(params){
    return fetchData('/api/getInfo',params|| null, 'get');
}
export function saveData(params){
    return fetchData('/api/saveData',params|| null, 'post');
}
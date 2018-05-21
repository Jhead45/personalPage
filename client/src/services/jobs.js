
import * as baseService from './base';

function all() {
    return baseService.get('/api/blog');
}

function one(jobTitle) {
    return baseService.get(`/api/jobs/${jobTitle}`);
}

function findAuthor(id) {
    return baseService.get(`/api/blog/author/${id}`);
}

function insert(data) {
    return baseService.post('/api/blog', data);
}

function update(id, data) {
    return baseService.put(`/api/blog/${id}`, data);
}

function destroy(id) {
    return baseService.destroy(`/api/blog/${id}`);
}

export { all, one, findAuthor, insert, update, destroy };
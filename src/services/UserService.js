import axios from 'axios'

export class UserService {
    constructor(http) {
        this.http = http
    }
    getUsers(userCount = 9) {
        return axios
            .get(this.http + '/users?_limit=' + userCount)
            .then(response => response.data)
    }
}

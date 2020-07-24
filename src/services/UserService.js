import axios from 'axios'

export class UserService {
    constructor(http) {
        this.http = http
    }
    getUsers(userCount = 9) {
        return axios
            .get(this.http + '/users?_limit=' + userCount, { timeout: 10000 })
            .then(response => response.data)
            .catch(err => {
                throw new Error(err)
            })
    }
}

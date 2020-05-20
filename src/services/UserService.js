import axios from 'axios'


export class UserService {
    constructor(http) {
        this.http = http
    }
    getUsers() {
        return axios
            .get(this.http, { timeout: 30000 })
            .then(response => response.data)
            .catch(err => {
                throw new Error(err)
            });
    }
}

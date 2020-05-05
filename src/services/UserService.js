import axios from 'axios'


export class UserService {
    getUsers() {
        return axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => response.data)
    }
}

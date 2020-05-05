import axios from 'axios'


export class UserService {
    getUsers() {
        return axios
            .get('https://jsonplaceholder.typicode.com/users?_limit=9')
            .then(response => response.data)
    }
}

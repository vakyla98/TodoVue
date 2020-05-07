import axios from 'axios'


export class UserService {
    getUsers() {
        return axios
            // .get('https://jsonplaceholder.typicode.com/users?_limit=9')
            // .get('http://slowwly.robertomurray.co.uk/delay/3000/url/https://jsonplaceholder.typicode.com/users')
            .get('http://slowwly.robertomurray.co.uk/delay/1000/url/https://httpstat.us/404')
            // .then(response => response.data)
    }
}

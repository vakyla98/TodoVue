import {UserService} from './UserService'

export const userService = new UserService('https://jsonplaceholder.typicode.com/users?_limit=9')

            // .get('https://jsonplaceholder.typicode.com/users?_limit=9')
            // .get('http://slowwly.robertomurray.co.uk/delay/3000/url/https://jsonplaceholder.typicode.com/users')
            // .get('http://slowwly.robertomurray.co.uk/delay/1000/url/https://httpstat.us/404')
import {UserService} from './UserService'

export const userService = new UserService('https://jsonplaceholder.typicode.com/users?_limit=9')

            // .get('https://httpstat.us/404')
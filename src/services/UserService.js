import axios from 'axios'


export class UserService {
    constructor(http){
        this.http = http    
    }
    getUsers() {
        return axios
            .get(this.http)
            // .then(response => response.data)
    }
}

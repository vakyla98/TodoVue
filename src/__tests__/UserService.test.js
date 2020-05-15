import mockAxios from 'axios'
import { userService } from '../services'


it('User services return users', async () => {
    mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
            data: ['user1','user2']
        })
    )
    const userList = await userService.getUsers()
    
    expect(userList).toEqual(['user1','user2'])
    expect(mockAxios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users?_limit=9')
})



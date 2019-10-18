import axios from 'axios'

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token')

  return axios.create({
    baseURL: 'https://potluck-planner-bw.herokuapp.com/users',
    headers: {
      authorization: token
    }
  })
}

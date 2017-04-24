import axios from 'axios'
import {login} from 'APP/app/reducers/auth'
import { browserHistory } from 'react-router'

/* ------------       DISPATCHERS     ------------------ */

export const signUp = (name, email, password, address) => dispatch => {
  console.log(name, email, password, address)
  return axios.post('/api/users', { name, email, password, address: [address.split(',')] })
    .then(res => {
      console.log('res.data after axios', res)
      dispatch(login(email, password))
      browserHistory.push('/home')
    })
}

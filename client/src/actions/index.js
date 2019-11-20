import axios from 'axios';
import { FETCH_USER } from './types';

// const fetchUser = ()=>{


//    const request =  axios.get('/api/current_user');
// }

// return {
//     type:FETCH_USER,
//     payload:request
// }



//Redux thunk 

export const fetchUser = () =>

    async dispatch =>
    {
        const response = await axios.get('/api/current_user')
            
        dispatch({ type: FETCH_USER, payload: response.data })
    }

    export const handleStripeToken = (token)=>

    async dispatch =>
    {
        const response = await axios.post('/api/stripe',token)
        dispatch({type:FETCH_USER,payload:response.data})
    }


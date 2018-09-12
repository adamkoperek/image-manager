import {LOGIN, LOGOUT} from "./types";

// export const login = (email, password) => dispatch => {
//
//   console.log('login start:', email, password);
//
//   fetch('http://localhost:3000/login', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify({
//       auth: {
//         email,
//         password
//       }
//     })
//   }).then(response => response.json())
//     .then(response => {
//       const {jwt} = response;
//
//       dispatch({
//         type: LOGIN,
//         payload: {
//           email,
//           jwt
//         }
//       })
//
//     });
// };

export const login = (email, password) => ({
  type: LOGIN,
  payload: {
    email,
    password
  }
});

export const logout = () => ({
  type: LOGOUT
});

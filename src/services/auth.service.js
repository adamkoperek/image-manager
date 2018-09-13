import {post} from './index'

export const login = (email, password) => post(
  'login',
  JSON.stringify({auth: {email, password}})
);

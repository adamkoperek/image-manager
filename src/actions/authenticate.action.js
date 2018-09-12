export const authenticationActions = {
    authenticate
};

function authenticate(username, password) {

    return dispatch => {
        dispatch(request({username}));

        userService.authenticate(username, password).then(
            user => {
                dispatch(success(user));
            },
            error => {
                dispatch(error(error));
            }
        );

        function request(username) {
            return {type: 'LOGIN_REQUEST', username};
        }

        function success(user) {
            return {type: 'LOGIN_SUCCESS', user};
        }

        function error(error) {
            return {type: 'LOGIN_ERROR', error};
        }
    }

}
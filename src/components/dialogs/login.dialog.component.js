import React, { Component } from 'react'
import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PropTypes from 'prop-types';

export default class LoginDialogComponent extends Component {
    state = {
        open: false,

        credentials: {
            username: '',
            password: ''
        }
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false, credentials: { username: '', password: ''} });
    };

    handleChange = name => ({target: { value }}) => {
        this.setState( {credentials: {...this.state.credentials, [name]: value} });
    };

    handleLogin = () => {
        this.props.login(this.state.credentials.username, this.state.credentials.password);
    };

    render() {
        return (<div>
            <IconButton variant="fab" color="primary" onClick={this.handleClickOpen}>
                <AccountCircleIcon/>
            </IconButton>
            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Zaloguj się</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="username"
                        label="Nazwa użytkownika"
                        type="text"
                        value={this.state.credentials.username}
                        onChange={this.handleChange('username')}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="password"
                        label="Hasło"
                        type="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange('password')}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Anuluj
                    </Button>
                    <Button onClick={this.handleLogin} color="primary">
                        Zaloguj
                    </Button>
                </DialogActions>
            </Dialog>
        </div>)
    }
}

LoginDialogComponent.propTypes = {
    login: PropTypes.function
}
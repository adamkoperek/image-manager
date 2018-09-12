import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions} from '@material-ui/core'


import {login} from '../../actions/auth.actions'


class LoginDialog extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dialogIsOpen: false,
      credentials: {
        username: '',
        password: ''
      }
    };
  }

  handleClickOpen = () => {
    this.setState({dialogIsOpen: true});
  };

  handleClose = () => {
    this.setState({dialogIsOpen: false, credentials: {username: '', password: ''}});
  };

  handleChange = name => ({target: {value}}) => {
    this.setState({credentials: {...this.state.credentials, [name]: value}});
  };

  handleLogin = event => {
    event.preventDefault();

    const {username, password} = this.state.credentials;
    this.props.login(username, password);

    this.setState({dialogIsOpen: false, credentials: {username: '', password: ''}});
  };

  render() {

    if (this.props.userLoggedIn) {
      return (<div></div>);
    }

    return (

      <div>

        <Button onClick={this.handleClickOpen}>Zaloguj się</Button>

        <Dialog open={this.state.dialogIsOpen} onClose={this.handleClose} aria-labelledby="form-dialog-title">
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
      </div>

    );
  }
}

LoginDialog.propTypes = {
  login: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  userLoggedIn: state.auth.user
});


export default connect(mapStateToProps, {login})(LoginDialog);

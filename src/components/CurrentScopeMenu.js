import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getScopes} from '../actions/scopes.actions'

class CurrentScopeMenu extends Component {

  componentWillReceiveProps(nextProps, state) {
    if (nextProps.username && nextProps.username !== this.props.username) {
      this.props.getScopes();
    }
  }

  render() {
    return (
      <div>Scope selector</div>
    );
  }
}

const mapStateToProps = ({auth}) => ({
  username: auth.user ? auth.user.username : null
});

export default connect(mapStateToProps, {getScopes})(CurrentScopeMenu);

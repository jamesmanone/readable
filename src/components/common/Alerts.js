import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { popAlert } from '../../actions/alertActions';

class Alerts extends Component {
  static propTypes = {
    alerts: PropTypes.array.isRequired,
    popAlert: PropTypes.func.isRequired
  }

  render() {
    const { alerts, popAlert } = this.props;
    return (
      <div className="container">
        {alerts.map(alert => (
          <Alert key={alert.id}
                 onDismiss={() => popAlert(alert.id)}
                 bsStyle={alert.style}>
            {alert.text}
          </Alert>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    alerts: state.alerts
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  popAlert
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Alerts);

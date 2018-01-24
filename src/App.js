import React, { Fragment } from 'react';
import Reboot from 'material-ui/Reboot';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Snackbar from 'material-ui/Snackbar';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Home from './screens/Home';
import List from './screens/List';
import { connect } from 'react-redux';
import './App.css';

class App extends React.Component {
  state = {
    snackbarOpen: false
  };

  handleSnackbarOpen = () => {
    this.setState({ snackbarOpen: true });
  };

  handleSnackbarClose = () => {
    this.setState({ snackbarOpen: false });
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.error) {
      this.handleSnackbarOpen();
    }
  }

  render() {
    const { error } = this.props;
    const { snackbarOpen } = this.state;
    return (
      <Fragment>
        <div className="App">
          <Reboot />
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/results" component={List} />
            </Switch>
          </BrowserRouter>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          autoHideDuration={4000}
          open={snackbarOpen}
          onClose={this.handleSnackbarClose}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={error}
        />
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    error: state.error
  }
}

export default connect(mapStateToProps)(App);

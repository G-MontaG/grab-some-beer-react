import 'react-select/dist/react-select.css';
import React from 'react';
import { connect } from 'react-redux';
import Reboot from 'material-ui/Reboot';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Snackbar from 'material-ui/Snackbar';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import './App.css';
import Home from './screens/Home';
import List from './screens/List';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
      dark: '#fff',
      light: '#fff',
      contrastText: '#fff',
    },
    secondary: { main: '#fff' },
  },
});

class App extends React.Component {
  state = {
    snackbarOpen: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.handleSnackbarOpen();
    }
  }

  handleSnackbarOpen = () => {
    this.setState({ snackbarOpen: true });
  };

  handleSnackbarClose = () => {
    this.setState({ snackbarOpen: false });
  };

  render() {
    const { error } = this.props;
    const { snackbarOpen } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
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
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    error: state.error,
  };
}

export default connect(mapStateToProps)(App);

import React from 'react';
import ReactDOM from 'react-dom';

import QueueRequests from './components/QueueRequests';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Money from '@material-ui/icons/AttachMoney';

const style = {
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        overflow: 'auto',
        height: '-webkit-fill-available'
    },
    button: {
        position: 'fixed',
        display: 'block',
        right: 0,
        bottom: 0,
        marginRight: '30px',
        marginBottom: '30px',
        zIndex: 900
    }
};

class App extends React.Component {

    state = {
        openDialog: false
    };

    onClickOpenDialog = () => {
        this.setState({ openDialog: true });
    };

    handleCloseDialog = () => {
        this.setState({ openDialog: false });
    };

    render () {
        return (
            <div>
                <div className="container">
                    <Paper style={style.center}>
                        <QueueRequests 
                            data={data} 
                            open={this.state.openDialog}
                            handleClose={this.handleCloseDialog}
                        />
                    </Paper>
                </div>
                <div style={style.button}>
                    <Tooltip title="Make a donation">
                        <Button variant="fab" color="primary" aria-label="Make a donation"
                            onClick={ () => window.location.href = "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=9C235S9MWZUZE"}
                            style={{marginRight: '1em'}}
                        >
                            <Money/>
                        </Button>
                    </Tooltip>
                    <Tooltip title="Buy me a Coffee">
                        <Button variant="fab" color="primary" aria-label="Buy me a Coffee"
                            onClick={ () => window.location.href = "http://ko-fi.com/Z8Z1HJEF"}
                            style={{marginRight: '1em'}}
                        >
                            <img 
                                src="https://ko-fi.com/img/cuplogo.svg"
                                style={{height: '1.5em', width: "1.5em"}}
                            />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Info">
                        <Button aria-label="Info" variant="fab" color="primary" aria-label="Add" onClick={this.onClickOpenDialog}>
                            <span style={{fontSize: '1.6em'}}>?</span>
                        </Button>
                    </Tooltip>
                </div>
            </div>
        );
    };
};

ReactDOM.render(<App/>, document.getElementById('root'));
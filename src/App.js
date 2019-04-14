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

const socialNetworksList = [
    {
        "text": "@flavia.bertoni.art",
        "secondary": "instagram",
        "url": "https://www.instagram.com/flavia.bertoni.art/",
        "icon": <img 
            src="instagram-icon.svg"
            style={{height: '1.5em', width: "1.5em"}}
        />
    },
    {
        "text": "flavia-bertoni-art",
        "secondary": "behance",
        "url": "https://www.behance.net/flavia-bertoni-art",
        "icon": <img 
            src="behance-icon.svg"
            style={{height: '1.5em', width: "1.5em"}}
        />
    },
    {
        "text": "Flávia Bertoni | Illustrations",
        "secondary": "facebook",
        "url": "https://m.facebook.com/Fl%C3%A1via-Bertoni-Illustrations-276588806406550",
        "icon": <img 
            src="facebook-icon.svg"
            style={{height: '1.5em', width: "1.5em"}}
        />
    }
];

const contactsList = [
    {
        "id": 'email',
        "text": "flavia.bertoni.art@gmail.com",
        "secondary": "click to send me an email",
        "icon": <img 
            src="email-icon.svg"
            style={{height: '1.5em', width: "1.5em"}}
        />,
        "onClick": () => {
            window.open('mailto:flavia.bertoni.art@gmail.com');
        }
    },
];

const supportList = [
    {
        "text": "Paypal",
        "secondary": "make a donation with any value",
        "url": "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=9C235S9MWZUZE",
        "icon": <img 
            src="paypal-icon.svg"
            style={{height: '1.5em', width: "1.5em"}}
        />
    },
    {
        "text": "Ko-fi",
        "secondary": "buy me a coffee",
        "url": "http://ko-fi.com/Z8Z1HJEF",
        "icon": <img 
            src="ko-fi-icon.svg"
            style={{height: '1.5em', width: "1.5em"}}
        />
    }
];

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
                            contactsList={contactsList}
                            socialNetworksList={socialNetworksList}
                            supportList={supportList}
                            open={this.state.openDialog}
                            handleClose={this.handleCloseDialog}
                        />
                    </Paper>
                </div>
                <div style={style.button}>
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
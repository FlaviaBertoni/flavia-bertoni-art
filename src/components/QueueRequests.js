import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Tooltip from '@material-ui/core/Tooltip';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
  background: {
    backgroundColor: '#fff'
  },
});

const modalInfo = ({ fullScreen, open, handleClose }) => (
  <Dialog
    fullScreen={fullScreen}
    open={open}
    onClose={handleClose}
    aria-labelledby="responsive-dialog-title"
  >
    <DialogTitle id="responsive-dialog-title">Info</DialogTitle>
    <DialogContent>
      <div>
        <Typography variant="caption">
          <p>
            Hi! I am a freelancer artist who loves to make illustrations, design characters and drawings in digital
            and traditional media.
            I look to improve my drawing skills to get better every day!
          </p>
          <p>
            I accept paid commissions and commercial requests, if you are interested to make a commission or commercial request 
            you can contact me by e-mail <a href="mailto:flavia.bertoni.art@gmail.com" target="_top">flavia.bertoni.art@gmail.com</a> or 
            send me a direct message on my instagram <a href="https://www.instagram.com/flavia.bertoni.art/"> @flavia.bertoni.art </a>. 
          </p>
          <p>
            If you appreciate my work you can support me by 
            buying me a coffee or making a donation with Paypal clicking on the buttons below:
          </p>
        </Typography>
        <br/>

        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <Button variant="contained" size="small" color="primary" style={{marginRight: '1em'}}
            onClick={ () => window.location.href = "http://ko-fi.com/Z8Z1HJEF"}
          >
            <img src="https://ko-fi.com/img/cuplogo.svg" className="kofiimg"/>
            Support me on ko-fi.com
          </Button>

          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick"/>
            <input type="hidden" name="hosted_button_id" value="9C235S9MWZUZE"/>
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
            <img alt="" border="0" src="https://www.paypalobjects.com/pt_BR/i/scr/pixel.gif" width="1" height="1"/>
          </form>
        </div>

        <br/>
        <Typography variant="caption">
          <p>
            Thank you for your time! :)
          </p>
        </Typography>

      </div>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary" autoFocus>
        Close
      </Button>
    </DialogActions>
  </Dialog>
);

const QueueRequests = (props) => {
  const {
    classes,
    socialNetworksList = [],
    contactsList = [],
    supportList = [],
  } = props;

  const renderList = (data) => (
    data.map( (item, index) => {
      return(
          <ListItem key={index} button onClick={ typeof item.onClick == 'function' ? item.onClick : () => window.open(item.url, '_blank') }>
            <Tooltip title={item.text}>
              <ListItemIcon aria-label={item.text}>
                {item.icon}
              </ListItemIcon>
            </Tooltip>
            <ListItemText inset primary={item.text} secondary={item.secondary}/>
          </ListItem>
      );
    })
  );

  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem>
          <Avatar alt="flavia.bertoni.art" src="profile.jpg" style={{height: 60, width: 60}}/>
          <ListItemText primary="Flávia Bertoni" secondary="Freelancer Artist" />
        </ListItem>
        <ListSubheader className={classes.background} component="div">Social networks</ListSubheader>
        { renderList(socialNetworksList) }
        <ListSubheader className={classes.background} component="div">Contacts</ListSubheader>
        { renderList(contactsList) }
        <ListSubheader className={classes.background} component="div">Support me</ListSubheader>
        { renderList(supportList) }
      </List>
      { modalInfo(props) }
    </div>
  );
}

export default withMobileDialog()(withStyles(styles)(QueueRequests));
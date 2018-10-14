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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import StarIcon from '@material-ui/icons/Star';
import Done from '@material-ui/icons/Done';
import Schedule from '@material-ui/icons/Schedule';
import Cached from '@material-ui/icons/Cached';

const status = {
  //terminado
  1: {
    text: "Done",
    icon: <Done color="primary"/>
  },
  //em desenvolvimento
  2:{
    text: "Started",
    icon: 
    <StarIcon style={{color: "#4CAF50"}}/>
  },
  //pausado / em espera
  3:{
    text: "Paused",
    icon: <Cached/>
  },
  //não inciado
  4:{
    text: "Pending",
    icon: <Schedule color="error"/>
  },
};

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  background: {
    backgroundColor: '#fff'
  },
});

const QueueRequests = (props) => {
  const {
    classes,
    data: [],
    fullScreen,
    open,
    handleClose
  } = props;

  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button onClick={ () => window.location.href = "https://www.instagram.com/flavia.bertoni.art/"}>
          <Avatar alt="flavia.bertoni.art" src="profile.jpg" style={{height: 60, width: 60}}/>
          <ListItemText primary="@flavia.bertoni.art" secondary="my portfolio" />
        </ListItem>
        <ListSubheader className={classes.background} component="div">Free Requests Queue</ListSubheader>
        {
          data.map( (d, index) => {
            return(
                <ListItem key={index}>
                  <Tooltip title={status[d.status].text}>
                    <ListItemIcon aria-label={status[d.status].text}>
                      {status[d.status].icon}
                    </ListItemIcon>
                  </Tooltip>
                  <ListItemText inset primary={d.text} secondary={d.secondary}/>
                </ListItem>
            );
          })
        }
      </List>
      <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">Subtitle</DialogTitle>
          <DialogContent>
            <div>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Icon</TableCell>
                    <TableCell>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">{status[1].icon}</TableCell>
                    <TableCell>Done</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">{status[2].icon}</TableCell>
                    <TableCell>Started</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">{status[3].icon}</TableCell>
                    <TableCell>Paused or waiting validation</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">{status[4].icon}</TableCell>
                    <TableCell>Pending</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <br/><br/>

              <Typography variant="caption">
                If you liked my illustrations and you want to see more of my work 
                or if you support my iniciative to make drawings for free to people who can't pay for a commission, 
                you can help buying me a coffee or making a donation with Paypal clicking on the buttons bellow:
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

              <br/><br/>

              <Typography variant="caption">
                I accept paid commissions too and it have priority over free requests, If you are interested to make a commission  
                you can contact me by e-mail <a href="mailto:flavia.bertoni.art@gmail.com?Subject=Commission" target="_top">flavia.bertoni.art@gmail.com</a> or 
                send me a direct in my instagram <a href="https://www.instagram.com/flavia.b.bertoni/"> @flavia.b.bertoni </a>
              </Typography>

            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
    </div>
  );
}

export default withMobileDialog()(withStyles(styles)(QueueRequests));
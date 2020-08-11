import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import TextField from '@material-ui/core/TextField';
import '../../App.css';
import { Launcher } from 'react-chat-window';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { borders } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'red',
    // flexGrow: 1,
    overflow: 'hidden',
    // padding: theme.spacing(0, 3),
    
  },
  paper: {
    maxWidth: 'auto',
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  button: {
    '&:hover': {
      background: '#a476af'
    }
  }
}));

// const message = `Truncation should be conditionally applicable on this long line of text
//  as this is a much longer line than what the container can support. `;

const socket = io.connect('http://localhost:4000') 

export default function Messaging(props) {
  //setting default states and use useState
  const [state, setState] = useState({ message: '', name: '' }) 
  const [chat, setChat] = useState([])
  // const [showChat, setShowChat] = useState(false)
  const classes = useStyles();

  useEffect(() => {
    socket.on('message', ({ name, message }) => {
      setChat([...chat, { name, message }]);
    })
  })
  

  const onTextChange = e => {
    setState({...state, [e.target.name]: e.target.value})
  }

  const onMessageSubmit = (e) => {
    e.preventDefault()
    const {name, message} = state;
    socket.emit('message', { name, message })
    setState({ message: "", name })
  }

  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <Paper variant='outlined' >
        <Grid container wrap="nowrap" spacing={2}>
          {/* <Grid item> */}
            {/* <Avatar>W</Avatar> */}
          {/* </Grid> */}
          <Grid item xs>
            <Typography>{name}: {message}</Typography>
          </Grid>
        </Grid>
      </Paper>
      </div>
    ))
  }

  // className={classes.root}
  return (
    <div  id='chatbox' >
    {/* <div className={classes.root} > */}
      <form onSubmit={onMessageSubmit}>
        <h1>Messenger</h1>
        <div className="name-field">
          <TextField 
          name="name" 
          onChange={e => onTextChange(e)} 
          value={state.name} 
          label="name" />
        </div>
        <div>
          {renderChat()}
        </div>
        <div >
          <TextField 
          name="message" 
          onChange={e => onTextChange(e)} 
          value={state.message}
          id="outlined-multiline-static"
          variant="outlined"
          label="message"
          />
        </div>
          <button className={classes.button}>Send Message</button>
          <button className={classes.button} onClick={(e) => {props.setShowChat()}} >Close</button>
        </form>
    {/* </div> */}

    </div>
  )

}



import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function handleToken(token, addresses) {
  console.log({token, addresses})
}


export default function Review(props) {
  console.log("props from Review: ", props)
  const classes = useRowStyles();
  if (props.price) {
    const products = [
      { name: 'Transportation Fee', desc: '', price: props.price[1].toFixed(2) },
      { name: 'Service Fee', desc: '', price: ((props.price[1])*0.05).toFixed(2)  },
      { name: 'GST', desc: '', price: ((props.price[1])*0.05).toFixed(2) },
      { name: 'Total', desc: '', price: (props.price[1] + (props.price[1] * 0.05) + ((props.price[1] + (props.price[1] * 0.05)) * 0.05)).toFixed(2) }
    ];
  
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Order Summary
        </Typography>
        <List disablePadding>
          {products.map((product) => (
            <ListItem className={classes.listItem} key={product.name}>
              <ListItemText primary={product.name} secondary={product.desc} />
              <Typography variant="body2">$ {product.price}</Typography>
            </ListItem>
          ))}
        </List>
        <Typography variant="h6" gutterBottom>
          Please confirm by clicking Place Order: 
        </Typography>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Please enter shipment details for a quote.
        </Typography>
      </React.Fragment>
    );
  }
}





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

// const products = [
//   { name: 'Transportation Fee', desc: '', price: '$9.99' },
//   { name: 'Service Fee', desc: '', price: '$3.45' },
//   { name: 'GST', desc: 'Something else', price: '$6.51' },
//   { name: 'Total', desc: 'Best thing of all', price: '$14.11' },
//   { name: 'Shipping', desc: '', price: 'Free' },
// ];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

// pickupAddress={pickupAddress} pickupCity={pickupCity} dropoffAddress={dropoffAddress} dropoffCity={dropoffCity} lat={lat} setLat={setLat} lon={lon} setLon={setLon}
//         price={price} setPrice={setPrice} distance={distance} setDistance={setDistance}

export default function Review( props) {
  // const classes = useStyles();
  // const [pickupAddress, setPickupAddress] = useState('')
  // const { row } = props;
  console.log("props.pickupFirst from Review.js: >>>>> ",props.pickupFirst)
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  const products = [
    { name: 'Transportation Fee', desc: '', price: props.price[1].toFixed(2) },
    { name: 'Service Fee', desc: '', price: ((props.price[1])*0.05).toFixed(2)  },
    { name: 'GST', desc: '', price: ((props.price[1])*0.05).toFixed(2) },
    { name: 'Total', desc: '', price: (props.price[1] + (props.price[1] * 0.05) + ((props.price[1] + (props.price[1] * 0.05)) * 0.05)).toFixed(2) }
  ];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}




//here for posterity. Remove before merge to master

{/* <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Billing Address
          </Typography>
          <Typography gutterBottom>{props.pickupFirst} {props.pickupLast}</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{props.pickupFirst} {props.pickupLast}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid> */}
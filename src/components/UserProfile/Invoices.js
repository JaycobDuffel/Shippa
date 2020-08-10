import React, {useEffect, useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    margin: 100,
    maxWidth: 1000,
    marginLeft: 300
  },
});

const status = [<span class="badge badge-pill badge-secondary">Pending</span>, <span class="badge badge-pill badge-success">Paid</span>, <span class="badge badge-pill badge-danger">Overdue</span> ]
const selectStatus = status[Math.floor(Math.random()*status.length)]

export default function Invoices() {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [userShipments, setUserShipments] = useState([]);

  const id = JSON.parse(localStorage.getItem('authUser')).id;

  const getUserShipments =  async (id) => {
    return axios.get(`http://localhost:5000/usershipments/${id}`)
       .then( async (res) => {
         const shipments = res.data
         await setUserShipments(shipments)
         })
        .catch((err) => {
         console.log('err >>', err)
       })
   }
   
   useEffect(() => { 
     getUserShipments(id)
   }, [userShipments, id])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Invoice #</StyledTableCell>
            <StyledTableCell align="center">Distance (km)</StyledTableCell>
            <StyledTableCell align="center">Transportation Fee</StyledTableCell>
            <StyledTableCell align="center">Service Fee</StyledTableCell>
            <StyledTableCell align="center">GST</StyledTableCell>
            <StyledTableCell align="center">Total</StyledTableCell>
            <StyledTableCell align="center" style={{width:'20%'}}>Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userShipments.map((shipment) => (
            <StyledTableRow key={shipment.id}>
              <StyledTableCell component="th" scope="row">
                {shipment.id}
              </StyledTableCell>
              <StyledTableCell align="center">{shipment.distance/1000}</StyledTableCell>
              <StyledTableCell align="center">${shipment.price}</StyledTableCell>
              <StyledTableCell align="center">${(Number(shipment.price) * 0.05).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="center">${((Number(shipment.price) + (Number(shipment.price) * 0.05)) * 0.05).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="center">${(((Number(shipment.price) + (Number(shipment.price) * 0.05)) * 0.05) + (Number(shipment.price) * 0.05) + Number(shipment.price)).toFixed(2)}</StyledTableCell>
              <StyledTableCell align="center">
              {selectStatus}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
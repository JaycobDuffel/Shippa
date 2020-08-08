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
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'

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

export default function Shipments() {
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

   const deleteUserShipment = (id) => {
    axios.delete(`http://localhost:5000/shipments/${id}`)
   }

   const updateStatus = (id, shipment) => {

    const body = {
      user_id: shipment.user_id,
      start_point: shipment.start_point,
      end_point: shipment.end_point,
      latitude: shipment.latitude,
      longitude: shipment.longitude,
      distance: shipment.distance,
      price: shipment.price,
      status: false
    }

     axios.put(`http://localhost:5000/shipments/${id}`, body)
   }

   
   

   useEffect(() => { 
     getUserShipments(id)
   }, [userShipments, id])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Shipment id</StyledTableCell>
            <StyledTableCell align="center">Start Point</StyledTableCell>
            <StyledTableCell align="center">End Point</StyledTableCell>
            <StyledTableCell align="center">Distance (km)</StyledTableCell>
            <StyledTableCell align="center">Cost (CAD)</StyledTableCell>
            <StyledTableCell align="center">Edit</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
            <StyledTableCell align="center" style={{width:'20%'}}>Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userShipments.map((shipment) => (
            <StyledTableRow key={shipment.id}>
              <StyledTableCell component="th" scope="row">
                {shipment.id}
              </StyledTableCell>
              <StyledTableCell align="center">{shipment.start_point}</StyledTableCell>
              <StyledTableCell align="center">{shipment.end_point}</StyledTableCell>
              <StyledTableCell align="center">{shipment.distance/1000}</StyledTableCell>
              <StyledTableCell align="center">{shipment.price}</StyledTableCell>
              <StyledTableCell align="center"><Button variant="contained">Edit</Button></StyledTableCell>
              <StyledTableCell align="center"><Button variant="contained" color="secondary" onClick={() => {deleteUserShipment(shipment.id)}}>Delete</Button></StyledTableCell>
              <StyledTableCell align="center">
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel htmlFor="filled-age-native-simple">Status</InputLabel>
                <Select style={{width:'15vh', height:'45px'}} id="shipSelect" defaultValue={'Default'} >
                  <option aria-label="None" value='Default' disabled />
                  <option value={1}>Open</option>
                  <option value={2} onClick={() => {updateStatus(shipment.id, shipment)}}>Assigned</option>
                  <option value={3} >Delivered</option>
                </Select>
              </FormControl>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


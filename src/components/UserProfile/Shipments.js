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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    margin: 100,
    maxWidth: 800
  },
});

export default function Shipments() {
  const classes = useStyles();

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
   }, [])

//    [
//     {
//         "id": 23,
//         "user_id": 4,
//         "start_point": "860 Langford Pkwy",
//         "end_point": "3199 Cliffe Ave",
//         "latitude": "48.4438125",
//         "longitude": "-123.5055607",
//         "distance": "206402",
//         "price": "153.2",
//         "status": true
//     }
// ]

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Shipment id</StyledTableCell>
            <StyledTableCell align="right">Start Point</StyledTableCell>
            <StyledTableCell align="right">End Point</StyledTableCell>
            <StyledTableCell align="right">Distance</StyledTableCell>
            <StyledTableCell align="right">Cost</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userShipments.map((shipment) => (
            <StyledTableRow key={shipment.id}>
              <StyledTableCell component="th" scope="row">
                {shipment.id}
              </StyledTableCell>
              <StyledTableCell align="right">{shipment.start_point}</StyledTableCell>
              <StyledTableCell align="right">{shipment.end_point}</StyledTableCell>
              <StyledTableCell align="right">{shipment.distance}</StyledTableCell>
              <StyledTableCell align="right">{shipment.price}</StyledTableCell>
              <StyledTableCell align="right"><Button variant="contained">Edit</Button></StyledTableCell>
              <StyledTableCell align="right"><Button variant="contained" color="secondary" >Delete</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
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

   const updateStatus = (id) => {
  //   return axios.put(`/api/appointments/${id}`, { interview })
  //   .then(() => {
  //     numOfSpots(id, -1);
  //     setState({ ...state, appointments });
  //   });
  // }

  axios({
    method: 'put',
    url: `http://localhost:5000/shipments/${id}`,
    data: {
      status: false
    },
    config: {headers: {'Content-Type': 'application/json'}
  }
  })
  .then(function (response) {
    if (response.status === 200) {
      console.log("User Updated")
    }
  })
  

   }

   useEffect(() => { 
     getUserShipments(id)
   }, [userShipments, id])

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
                <Select style={{width:'120%', height:'45px'}}
                >
                  <option aria-label="None" value="" />
                  <option value={1} onClick={() => {updateStatus(shipment.id)}}  >Assigned</option>
                  <option  value={2}  >Open</option>
                  <option value={3}>Delivered</option>
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


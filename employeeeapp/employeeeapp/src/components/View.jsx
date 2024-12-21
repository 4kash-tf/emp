import  { useState } from 'react'
import axios from 'axios'
import React from 'react'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const View = () => {
  const [user, setuser] = useState([])
  const navigate=useNavigate()
  axios.get("http://localhost:3004/view")
    .then((response) => {
      console.log(response.data)
      setuser(response.data)
    })
  const delvalue = (id) => {
    axios.delete("http://localhost:3004/remove/" + id)
      .then((res) => {
        alert(res.data.message)
        window.location.reload()
      })
  }
  const updatvalue = (mon) => {
    navigate("/add", {state: {mon}
    
    })
  }
  return (
    <div><br /><br />
      <TableContainer>
        <Table border='8'>
          <TableHead>
            <TableRow>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Age</b></TableCell>
              <TableCell><b>Dept</b></TableCell>
              <TableCell><b>Sal</b></TableCell>
              <TableCell><b>Edit</b></TableCell>


            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((mon) => {
              return (
                <TableRow>
                  <TableCell>{mon.Name}</TableCell>
                  <TableCell>{mon.Age}</TableCell>
                  <TableCell>{mon.Dept}</TableCell>
                  <TableCell>{mon.Sal}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="error" onClick={() => delvalue(mon._id)}>Delete</Button><br /><br />
                    <Button variant="contained" color="success" onClick={() => updatvalue(mon)}>Update</Button>
                    </TableCell>

                </TableRow>
              )
            
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default View
  
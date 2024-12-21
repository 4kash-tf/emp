import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Add = () => {
  const [input, setInput] = useState({ Name: "", Age: "", Dept: "", Sal: "" });
  const navigate = useNavigate();
  const location = useLocation();

  // Input change handler
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  // Add or Update handler
  const addHandler = () => {
    const url = location.state ? `http://localhost:3004/change/${location.state.mon._id}` : "http://localhost:3004/add";
    const method = location.state ? 'put' : 'post';

    axios[method](url, input)
      .then((res) => {
        alert(res.data.message);
        navigate("/View");
      })
      .catch((error) => {
        console.error("Error in request:", error);
        alert("There was an error processing your request.");
      });
  };

  // If location.state is passed, set input values from location.state
  useEffect(() => {
    if (location.state && location.state.mon) {
      setInput({
        Name: location.state.mon.Name,
        Age: location.state.mon.Age,
        Dept: location.state.mon.Dept,
        Sal: location.state.mon.Sal,
      });
    }
  }, [location.state]);

  return (
    <div>
      <center>
        <h1>ADD/EDIT PERSON</h1><br /><br /><br />
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="Name"
          value={input.Name}
          onChange={inputHandler}
        /><br /><br />

        <TextField
          id="outlined-basic"
          label="Age"
          variant="outlined"
          name="Age"
          value={input.Age}
          onChange={inputHandler}
        /><br /><br />

        <TextField
          id="outlined-basic"
          label="Dept"
          variant="outlined"
          name="Dept"
          value={input.Dept}
          onChange={inputHandler}
        /><br /><br />

        <TextField
          id="outlined-basic"
          label="Sal"
          variant="outlined"
          name="Sal"
          value={input.Sal}
          onChange={inputHandler}
        /><br /><br />

        <Button variant="contained" color="success" onClick={addHandler}>
          Confirm
        </Button>
      </center>
    </div>
  );
};

export default Add;

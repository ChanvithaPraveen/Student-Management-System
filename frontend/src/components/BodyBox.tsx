import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Container, Paper } from "@mui/material";

export default function BodyBox() {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 300,
    margin: "20px auto",
    AlignHorizontalCenter: "center",
  };

    const handleClick = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const student = { name, address }
        console.log(student)
        fetch('http://localhost:8080/v1/student/add/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        }).then(res => {
            res.json()
            console.log("New User Added!")
        })
    };

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h2 style={{ color: "#1976d2" }}>Add Student</h2>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              mb: 2,
              direction: "row",
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <Button variant="contained" color="primary" onClick={handleClick}>
            Add
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

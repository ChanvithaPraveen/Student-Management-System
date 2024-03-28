import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Container, Paper } from "@mui/material";

export default function BodyBox() {
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 300,
    margin: "20px auto",
    AlignHorizontalCenter: "center",
  };

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [students, setStudents] = useState([]);
  const [updateId, setUpdateId] = useState("");
  const [updateName, setUpdateName] = useState("");
  const [updateAddress, setUpdateAddress] = useState("");

  const handleClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const student = { name, address };
    fetch("http://localhost:8080/v1/student/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
      alert("Student added successfully!");
  };

  const handleUpdate = (f: { preventDefault: () => void; }) => {
    f.preventDefault();
    const student = { name: updateName, address: updateAddress };
    fetch(`http://localhost:8080/v1/student/update/${updateId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
      alert("Student updated successfully!");
  };

  const handleDelete = (id: number) => {
    fetch(`http://localhost:8080/v1/student/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
      alert("Student deleted successfully!");
  };

  useEffect(() => {
    fetch("http://localhost:8080/v1/student/getAll")
      .then((res) => res.json())
      .then((result) => setStudents(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container
      maxWidth="lg"
      style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "40px" }}
    >
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

      <Paper elevation={3} style={paperStyle}>
        <h2 style={{ color: "#1976d2" }}>Update Student</h2>
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
            id="updateId"
            label="ID"
            variant="outlined"
            fullWidth
            value={updateId}
            onChange={(e) => setUpdateId(e.target.value)}
          />
          <TextField
            id="updateName"
            label="Full Name"
            variant="outlined"
            fullWidth
            value={updateName}
            onChange={(e) => setUpdateName(e.target.value)}
          />
          <TextField
            id="updateAddress"
            label="Address"
            variant="outlined"
            fullWidth
            value={updateAddress}
            onChange={(e) => setUpdateAddress(e.target.value)}
          />
          <Button variant="contained" color="success" onClick={handleUpdate}>
            Update
          </Button>
        </Box>
      </Paper>

      <Paper elevation={3} style={paperStyle}>
        <h2 style={{ color: "#1976d2" }}>All Students</h2>
        <div style={{ maxHeight: "100%", overflowY: "scroll" }}>
          {students.map((student: { id: number, name: string, address: string }) => (
            <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={student.id}>
              ID: {student.id}<br />
              Name: {student.name}<br />
              Address: {student.address}<br /><br />
              <Button variant="contained" color="error" onClick={() => handleDelete(student.id)}>
                Delete
              </Button>
            </Paper>
          ))}
        </div>
      </Paper>
    </Container>
  );
}

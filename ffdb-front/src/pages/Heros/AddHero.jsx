import React from 'react';
import { Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Button, 
  TextField, 
  Typography, 
  Select, 
  InputLabel,
  FormControl,
  MenuItem } from '@material-ui/core';
import { baseUrl } from '../../EndPoints';

function AddHero(props) {
  const [hero, setHero] = React.useState({
    name: '',
    email: '',
    description: '',
    occupation: '',
    age: '',
  });
  const fontSize = 20

  const handleChange = (event) => {
    setHero({
      ...hero,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    fetch(baseUrl + 'heros', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(hero),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // handle successful response
      console.log(data);
      props.closeModal();
    })
    .catch(error => {
      // handle error
      console.error('There was an error!', error);
    });
  };

  return (
    <Dialog open={props.isOpen} onClose={props.closeModal}>
      <DialogTitle>
        <Typography variant="h4">Add a new Hero</Typography>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField name="name" label="Name" value={hero.name} onChange={handleChange} variant="outlined" fullWidth  inputProps={{ style: { fontSize: fontSize } }} InputLabelProps={{ style: { fontSize: fontSize } }} margin="normal"/>
          <TextField name="email" label="Email" value={hero.email} onChange={handleChange} variant="outlined" fullWidth inputProps={{ style: { fontSize: fontSize } }} InputLabelProps={{ style: { fontSize: fontSize } }} margin="normal" />
          <TextField name="description" label="Description" value={hero.description} onChange={handleChange} variant="outlined" fullWidth inputProps={{ style: { fontSize: fontSize } }} InputLabelProps={{ style: { fontSize: fontSize } }} margin="normal"/>
          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel id="occupation-label" style={{ fontSize: fontSize }}>Occupation</InputLabel>
            <Select labelId="occupation-label" name="occupation" value={hero.occupation} onChange={handleChange}>
              <MenuItem style={{ fontSize: 20 }} value="Health Worker">Health Worker</MenuItem>
              <MenuItem style={{ fontSize: 20 }} value="Victim">Victim</MenuItem>
              <MenuItem style={{ fontSize: 20 }} value="Soldier">Soldier</MenuItem>
              <MenuItem style={{ fontSize: 20 }} value="Other">Other</MenuItem>
            </Select>
          </FormControl>
          <TextField name="age" label="Age" value={hero.age} onChange={handleChange} variant="outlined" fullWidth inputProps={{ style: { fontSize: fontSize } }} InputLabelProps={{ style: { fontSize: fontSize } }} margin="normal"/>
        </form>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={props.closeModal}>Cancel</Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>Add Hero</Button>
      </DialogActions>
    </Dialog>
  );
}
export default  AddHero;
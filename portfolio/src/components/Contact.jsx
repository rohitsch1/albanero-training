import React,{useRef,useState} from "react";
// import { makeStyles } from '@material-ui/styles';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  DialogActions
} from "@mui/material";

import emailjs from '@emailjs/browser'

// const useStyles = makeStyles((theme) => ({
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: theme.spacing(2)
//   }
// }));

function ContactPopup({ open, onClose }) {
  // const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);

  const handleContactClick = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(fals);
  };

  
  const form = useRef();
  const handleSubmit = (event) => {
    
    event.preventDefault();
    

    // Send email using EmailJS
    emailjs.sendForm('service_udkofd7', 'template_jk2g6tm', form.current, 'OR7IcAC4vr_ifMUCL')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    // Close the popup
    setOpenPopup(false);
       
  };

  return (
    <>
     <Button variant="outlined" onClick={handleContactClick}>
        Contact us
      </Button>
    <Dialog   open={open} >
      <DialogTitle>Contact Me</DialogTitle>
      <DialogContent>
        <form style={{ display: "flex", flexDirection: "column", gap: "20px" ,marginTop: "1em" }} ref={form} onSubmit={handleSubmit}>
          <TextField label="Name" name="user_name"required />
          <TextField label="Email" name="user_email"type="email" required />
          <TextField label="Message" name ="message"multiline rows={4} required />
          <Button type="submit" variant="contained" color="primary">
            Send
          </Button>
        </form>
      </DialogContent>
      <DialogActions>
          <Button onClick={handleClosePopup}>Close</Button>
        </DialogActions>
    </Dialog>
    </>
  );
}

export default ContactPopup;

import React from "react";
import emailjs from "emailjs-com";
import "./mailer.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const Mailer = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vkadp3h",
        "template_snrmp7k",
        e.target,
        "user_d1396UFiBux8hCJ45x5QF"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="container">
      <div className="support-title">
        <b>Contact us via e-mail!</b>{" "}
        <div className="help-button">
          <Button variant="contained" onClick={handleClickOpen}>
            HELP
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Help"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <p>
                  The functions will appear in the sidebar menu once you log in!
                </p>
                <p></p>
                <p></p>
                <p></p>
                <p align="center">
                  <br />
                  To register a user click <a href="/register">here</a>!
                </p>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary" autoFocus>
                GOT IT!
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
      <div className="mailer-container">
        <form onSubmit={sendEmail}>
          <table>
            <tr>
              <td className="label-name">Name</td>
              <input
                className="input"
                maxLength="30"
                size="30"
                type="text"
                name="name"
                required
                placeholder="e.g. Teszt Elek"
              />
            </tr>
            <tr>
              <td className="label-name">E-mail</td>
              <input
                className="input"
                maxLength="30"
                size="30"
                type="email"
                name="user_email"
                required
                placeholder="email@domain.com"
              />
            </tr>
            <tr>
              <td className="label-name">Message</td>
              <textarea
                className="textarea"
                name="message"
                rows="5"
                required
                placeholder="Type here"
                cols="31"
                maxLength="400"
              />
            </tr>
            <tr>
              <td></td>
              <td>
                <input className="submit-button" type="submit" value="Submit" />
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
};

export default Mailer;

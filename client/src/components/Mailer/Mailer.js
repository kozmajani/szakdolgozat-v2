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
        "service_g2bg014",
        "template_snrmp7k",
        e.target,
        "user_d1396UFiBux8hCJ45x5QF"
      )
      .then((res) => {
        console.log(res);
        alert("Thanks for your message! We'll hook you up soon!");
      })
      .catch((err) => console.log(err));
    document.querySelector("form").reset();
  }
  return (
    <div className="container">
      <div className="support-title">
        <b>Please check out our F.A.Q. below before contacting.</b>
      </div>
      <div>
        <div className="help-button">
          <Button variant="contained" onClick={handleClickOpen}>
            frequently asked questions
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">
              {"Frequently asked questions"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <li>Question #1 </li>
                <>
                  A: Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </>
                <li>Question #2</li>
                <>
                  A: Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </>
                <li>Question #3</li>
                <>
                  A: Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </>
                <li>Question #4</li>
                <>
                  A: Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </>
                <li>Question #5</li>
                <>
                  A: Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="inherit">
                GOT IT!
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
      <div className="mailer-container">
        <div className="support-title">Contact us via e-mail!</div>
        <form onSubmit={sendEmail}>
          <table>
            <tbody>
              <tr>
                <td className="label-name">Name</td>
                <td>
                  <input
                    className="input"
                    maxLength="30"
                    size="30"
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Teszt Elek"
                  />
                </td>
              </tr>
              <tr>
                <td className="label-name">E-mail</td>
                <td>
                  <input
                    className="input"
                    maxLength="30"
                    size="30"
                    type="email"
                    name="user_email"
                    required
                    placeholder="email@domain.com"
                  />
                </td>
              </tr>
              <tr>
                <td className="label-name">Message</td>
                <td>
                  <textarea
                    className="textarea"
                    name="message"
                    rows="5"
                    required
                    placeholder="Type here"
                    cols="31"
                    maxLength="400"
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input
                    className="submit-button"
                    type="submit"
                    value="Submit"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default Mailer;

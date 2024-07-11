import '../App.css';
import { Grid, Button, TextField, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import React, { useEffect } from 'react';

function Contact() {

  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup
      .string()
      .max(50, "Must Be 50 Characters Or Less")
      .required("Enter Valid Name")
      .matches(/^[A-Za-z ]+$/, "Enter valid Name"),
    
    email: yup
      .string()
      .max(50, "Must Be 50 Characters Or Less")
      .required("Enter Valid Email")
      .email(),
    id: yup
      .string()
      .matches(/^[0-9]+$/, "Must Be Valid ID")
      .max(5, "Must Be Exactly 5 Digits")
      .min(5, "Must Be Exactly 5 Digits")
      .required("Enter Valid ID"),
    message: yup
      .string()
      .max(1000, "Must Be 1000 Characters Or Less")
      .required("Enter Valid Message")
      .matches(
        /^(?!\s+$).+/,
        'Enter Valid Message'
      ),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      id: '',
      message: '',
    },
    validate: (value) => {
      const errors = {};
      if (!value.name)
        errors.name = 'Name Required'
      if (!value.email)
        errors.email = 'Email Required'
      if (!value.id)
        errors.id = 'HR ID Required'
      if (!value.message)
        errors.message = 'Message Required'
      return errors;
    },
    validationSchema: schema,
    onSubmit: (data, { resetForm }) => {
      resetForm();
      setIsFormSubmitted(true);
      toast.success("Message sent to the Management succesfully. You will be redirected to the home page shortly.");
      setTimeout(() => {
        navigate("/home");
      }, 5000);
    },
  });
  return (
    <div>
      <ToastContainer />
      <div className='fourth'>
        <Grid container>
          <Grid item xs={12}>
            <h1 style={{ fontFamily: 'timesnewroman', color: 'black', textAlign: 'center' }}><b>Contact the Management</b></h1>
          </Grid>
          <Grid item xs={12}>
            <br />
          </Grid>
          <Grid item xs={0.5}>
            <br />
          </Grid>
          <Grid item xs={11}>
            <p style={{ fontFamily: 'timesnewroman', fontSize: 20 }}>Here at Zoom, we prioritize clear communication and efficient interaction between employees and management. Whether you have inquiries, feedback, or require assistance, this page serves as a direct gateway to our leadership team. Feel free to reach out to us and ensure that your voice is heard and your concerns are addressed promptly. At Zoom, we value open communication and look forward to fostering a collaborative and supportive work environment. Your engagement is essential to our shared success, and we encourage you to connect with us for any management-related matters.</p>
          </Grid>
          <Grid item xs={0.5}>
            <br />
          </Grid>
          <Grid item xs={0.5}>
            <br />
          </Grid>
          <Grid item xs={11}>
            <br />
            <p style={{ fontFamily: 'timesnewroman', fontSize: 20 }}>Your feedback is invaluable to us at Zoom, and we appreciate your proactive engagement in shaping the dynamics of our workplace. Rest assured that every message is received with attention and care. Our commitment to open communication extends beyond this platform, and we actively seek to incorporate your insights into our continuous improvement efforts. Your partnership in maintaining a positive and collaborative work environment is instrumental, and we thank you for being an integral part of the Zoom community. Together, we are building a workplace where every voice matters, and every contribution makes a difference.</p>
            <br />
          </Grid>
          <Grid item xs={0.5}>
            <br />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={5.5} sx={{ marginTop: -3 }}>
            <div className='final1'>
              <br />
            </div>
          </Grid>
          <Grid item xs={1}>
            <br />
          </Grid>
          <Grid item xs={5.5}>
            <div className='final2'>
              <br />
            </div>
          </Grid>
          <Grid item xs={0.5}>
            <br />
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card sx={{ backgroundColor: 'rgb(245,247,249)', width: '50%', height: '40%', display: 'flex', justifyContent: 'center' }}>
            <CardContent>
              <Grid container>
                <Grid item xs={12}>
                  <h1 style={{ fontFamily: 'timesnewroman', color: 'black', textAlign: 'center' }}><b><MailOutlineIcon sx={{ fontSize: 30 }} /></b></h1>
                  <h2 style={{ fontFamily: 'timesnewroman', color: 'black', textAlign: 'center' }}><b>Send Message</b></h2>
                </Grid>
                <Grid item xs={12}>
                  <br />
                </Grid>
                <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex' }}>
                  <TextField
                    id="outlined-basic"
                    label="Your Name"
                    variant="outlined"
                    name='name'
                    multiline
                    rows={1}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    error={formik.errors.name && formik.touched.name}
                    helperText={formik.touched.name ? formik.errors.name : ""}
                    sx={{
                      width: 400,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <br />
                </Grid>
                <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex' }}>
                  <TextField
                    id="outlined-basic"
                    label="Your Email"
                    variant="outlined"
                    name='email'
                    multiline
                    rows={1}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={formik.errors.email && formik.touched.email}
                    helperText={formik.touched.email ? formik.errors.email : ""}
                    sx={{
                      width: 400,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <br />
                </Grid>
                <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex' }}>
                  <TextField
                    id="outlined-basic"
                    label="Your HR ID"
                    variant="outlined"
                    multiline
                    rows={1}
                    name='id'
                    onChange={formik.handleChange}
                    value={formik.values.id}
                    error={formik.errors.id && formik.touched.id}
                    helperText={formik.touched.id ? formik.errors.id : ""}
                    sx={{
                      width: 400,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <br />
                </Grid>
                <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex' }}>
                  <TextField
                    id="outlined-basic"
                    label="Your Message"
                    variant="outlined"
                    name='message'
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    error={formik.errors.message && formik.touched.message}
                    helperText={formik.touched.message ? formik.errors.message : ""}
                    multiline
                    rows={4}
                    sx={{
                      width: 400,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <br />
                </Grid>
                <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex' }}>
                  {isFormSubmitted ? '' : <Button variant='contained' sx={{ textTransform: 'none', fontFamily: 'timesnewroman', backgroundColor: 'rgb(220, 220, 220)', color: 'black', fontSize: 15 }} onClick={() => formik.handleSubmit()}><b>Send</b></Button>}
                </Grid>
                <Grid item xs={12}>
                  <br />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <br />
        <br />
        <br />
        <Grid container>
          <Grid item xs={1}>
            <br />
          </Grid>
          <Grid item xs={5} sx={{ marginTop: -3 }}>
            <div className='final3'>
              <br />
            </div>
          </Grid>
          <Grid item xs={0.5}>
            <br />
          </Grid>
          <Grid item xs={5} sx={{ marginTop: -3 }}>
            <div className='final4'>
              <br />
            </div>
          </Grid>
          <Grid item xs={0.5}>
            <br />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={0.5}>
            <br />
          </Grid>
          <Grid item xs={11}>
            <br />

            <p style={{ fontFamily: 'timesnewroman', fontSize: 20 }}>At Zoom, we have a zero-tolerance policy for harassment of any kind. We are committed to providing a workplace that is free from any form of harassment, be it verbal, physical, or visual. Harassment undermines our core values of respect and inclusivity. If you experience or witness any form of harassment, we urge you to report it immediately. Your well-being is of utmost importance, and we are dedicated to taking swift and appropriate action to address and prevent any such incidents. At Zoom, we strive to foster a safe and supportive environment where everyone can work and collaborate without fear of harassment.</p>
          </Grid>
          <Grid item xs={0.5}>
            <br />
          </Grid>
          <Grid item xs={12}>
            <br />
            <br />
          </Grid>
          <br />
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <br />
            <h3 style={{ fontFamily: 'timesnewroman', fontSize: 18, color: 'black' }}>Mail: Zoom.Management@gmail.com</h3>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <br />
            <h3 style={{ fontFamily: 'timesnewroman', fontSize: 18, color: 'black', marginTop: 5 }}>Phone: 0484-3292070</h3>
          </Grid>
          <Grid item xs={12}>
            <br />
          </Grid>
        </Grid>
      </div>
    </div >
  );
}
export default Contact;
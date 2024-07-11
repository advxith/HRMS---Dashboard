import { Grid } from "@mui/material";
import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h1 style={{ fontFamily: 'timesnewroman', textAlign: 'center' }}>Welcome to Zoom HRMS</h1>
      <br />
      <Grid container>
        <Grid item xs={0.25}>
          <br />
        </Grid>
        <Grid item xs={12}>
          <p style={{ fontSize: 18 }}>Welcome to Zoom, a pioneering force at the forefront of cutting-edge software solutions. At Zoom, we are committed to revolutionizing the way you experience technology, offering innovative software that transcends boundaries and enhances efficiency. Our journey is fueled by a passion for creating solutions that empower businesses and individuals alike, transforming challenges into opportunities through the power of intelligent software.</p>
        </Grid>
        <Grid item xs={12}>
          <br />
          <h3 style={{ fontSize: 20, textDecoration: 'underline' }}>What are some good HR practices?</h3>
        </Grid>
        <Grid item xs={12}>
          <br />
          <p style={{ fontSize: 18 }}>Implementing effective human resources (HR) practices is paramount for fostering a positive workplace culture and driving organizational success. Good HR practices encompass a range of strategies that prioritize the well-being and development of employees. From transparent communication and fair compensation to robust employee development programs, a commitment to these practices strengthens the employer-employee relationship.</p>
        </Grid>
        <Grid item xs={12}>
          <br />
          <p style={{ fontSize: 18 }}>A cornerstone of good HR practices is creating a supportive and inclusive environment where employees feel valued and respected. This involves implementing fair and transparent policies, including equitable compensation structures and opportunities for professional growth. Moreover, proactive employee engagement initiatives, such as regular feedback sessions and recognition programs, contribute to a positive workplace culture and boost overall job satisfaction.</p>
        </Grid>
        <Grid item xs={11} sx={{ display: 'flex', justifyContent: 'center' }}>
          <div className="home1">
            <br />
          </div>
        </Grid>
        <Grid item xs={1}>
          <br />
        </Grid>
        <Grid item xs={12} sx={{ backgroundColor: 'beige' }}>
          <br />
          <p style={{ fontSize: 18 }}>In addition to these employee-centric approaches, effective HR practices also involve staying abreast of evolving employment laws and compliance standards. This ensures that the organization operates ethically and legally, fostering a secure and compliant workplace. Overall, the implementation of good HR practices is not only a strategic business imperative but also a cornerstone of building a motivated, talented, and cohesive workforce.</p>
          <br />
        </Grid>
        <Grid item xs={12}>
          <br />
          <h3 style={{ fontSize: 20, textDecoration: 'underline' }}>How to manage employee expectations?</h3>
        </Grid>
        <Grid item xs={12}>
          <br />
          <p style={{ fontSize: 18 }}>Effectively managing employee expectations is a core responsibility of the HR department, crucial for maintaining a positive and productive work environment. Clear and transparent communication is key in this regard. HR should provide employees with comprehensive information about company policies, benefits, and any changes that may impact their roles. Setting realistic expectations from the outset, especially during the onboarding process, helps employees understand their roles, responsibilities, and the broader organizational culture.</p>
          <br />
        </Grid>
        <Grid item xs={12}>
          <br />
          <p style={{ fontSize: 18 }}>HR plays a crucial role in aligning employee expectations with the company's goals and objectives. This involves regular performance feedback, goal-setting discussions, and career development conversations. By fostering an open dialogue between employees and management, HR can address concerns, clarify expectations, and provide guidance on professional growth opportunities within the organization.</p>
          <br />
        </Grid>
        <Grid item xs={11} sx={{ display: 'flex', justifyContent: 'center' }}>
          <div className="home2">
            <br />
          </div>
        </Grid>
        <Grid item xs={1}>
          <br />
        </Grid>
        <Grid item xs={12} sx={{ backgroundColor: 'beige' }}>
          <br />
          <p style={{ fontSize: 18 }}>Overall, HR's role in managing employee expectations extends beyond administrative functions. It involves creating a culture of transparency, communication, and continuous improvement, where employees feel supported, valued, and clear about their roles and opportunities for growth within the company.</p>
          <br />
        </Grid>
      </Grid>
    </div>
  )
};
export default Home;
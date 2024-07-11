import { Grid } from "@mui/material";
import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Grid container>
      <Grid item xs={12}>
        <h1 style={{ fontFamily: 'timesnewroman', textAlign: 'center' }}>Abous Us</h1>
        <br />
      </Grid>
      <Grid item xs={0.5}>
        <br />
      </Grid>
      <Grid item xs={11}>
        <h2 style={{ fontFamily: 'timesnewroman', textAlign: 'left', textDecoration: 'underline' }}>Who Are We?</h2>
        <br />
      </Grid>
      <Grid item xs={0.5}>
        <br />
      </Grid>
      <Grid item xs={0.25}>
        <br />
      </Grid>
      <Grid item xs={11.5}>
        <p style={{ fontFamily: 'timesnewroman', fontSize: 20, textAlign: 'left' }}>Welcome to Zoom, where innovation meets excellence in the world of software solutions. Established with a passion for transforming ideas into cutting-edge technology, we are a dynamic software company committed to delivering unparalleled services. At Zoom, we believe in the power of technology to reshape industries and enhance user experiences. Our dedicated team of professionals, driven by creativity and technical expertise, collaborates to craft robust software solutions tailored to meet the unique needs of our clients. From scalable applications to advanced software development, we are at the forefront of driving digital transformations. Discover the possibilities with Zoom as we navigate the ever-evolving landscape of technology, creating solutions that redefine the way businesses operate and thrive in the digital era.</p>
      </Grid>
      <Grid item xs={0.25}>
        <br />
      </Grid>
      <Grid item xs={12}>
        <br />
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <div className="about2">
            <br />
          </div>
        </div>
      </Grid>
      <Grid item xs={0.5}>
        <br />
      </Grid>
      <Grid item xs={0.5}>
        <br />
      </Grid>
      <Grid item xs={12}>
        <br />
      </Grid>
      <Grid item xs={0.5}>
        <br />
      </Grid>
      <Grid item xs={5}>
        <h2 style={{ fontFamily: 'timesnewroman', textAlign: 'center', textDecoration: 'underline' }}>Our Mission</h2>
        <br />
        <p style={{ fontFamily: 'timesnewroman', fontSize: 20, textAlign: 'left', backgroundColor: 'lightblue' }}>At Zoom, our mission is to revolutionize the digital landscape by empowering businesses with innovative and tailored software solutions. Committed to excellence and driven by a passion for technology, we strive to redefine the way organizations operate in the digital era. Our mission encompasses delivering cutting-edge applications, fostering digital transformations, and providing unparalleled services that meet the unique needs of our clients. We aim to be at the forefront of technological advancements, guiding businesses towards success by enhancing efficiency, productivity, and user experiences. Through our unwavering commitment to quality and creativity, we aspire to be the catalyst for positive change in the ever-evolving world of software solutions.</p>
      </Grid>
      <Grid item xs={0.5}>
        <br />
      </Grid>
      <Grid item xs={6}>
        <div>
          <br />
          <div className="about3">
            <br />
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <br />
        <br />
      </Grid>
      <Grid item xs={6}>
        <div>
          <br />
          <div className="about4">
            <br />
          </div>
        </div>
      </Grid>
      <Grid item xs={0.5}>
        <br />
      </Grid>
      <Grid item xs={5}>
        <h2 style={{ fontFamily: 'timesnewroman', textAlign: 'center', textDecoration: 'underline' }}>Our Vision</h2>
        <br />
        <p style={{ fontFamily: 'timesnewroman', fontSize: 20, textAlign: 'left', backgroundColor: 'beige' }}>At Zoom, our vision is to pioneer transformative technological solutions, propelling businesses into a future where innovation is synonymous with success. We strive to be the driving force behind a digital revolution, offering agile and anticipatory software solutions that redefine industry standards. Our commitment lies in forging collaborative partnerships, delivering user-centric innovations, and contributing to a sustainable digital future. With a focus on adaptability and integrity, we aspire to set new benchmarks in the ever-evolving realm of technology, ensuring that every interaction with Zoom accelerates our clients' path to unparalleled success.</p>
      </Grid>
      <Grid item xs={0.5}>
        <br />
      </Grid>
      <Grid item xs={12}>
        <br />
      </Grid>
      <Grid item xs={0.5}>
        <br />
      </Grid>
      <Grid item xs={5}>
        <br />
        <br />
        <h2 style={{ fontFamily: 'timesnewroman', textAlign: 'center', textDecoration: 'underline' }}>Our Values</h2>
        <br />
        <p style={{ fontFamily: 'timesnewroman', fontSize: 20, textAlign: 'left', backgroundColor: 'pink' }}>At Zoom, our values are the bedrock of our identity, guiding every facet of our operations and interactions. We are dedicated to fostering a culture of innovation, where creativity thrives, and each team member is empowered to contribute unique perspectives. Integrity is at the core of our actions, ensuring transparency, trust, and ethical conduct in all endeavors. Collaboration is key, as we believe in the strength of unified efforts to achieve excellence. Our commitment to continuous improvement drives us to adapt, learn, and grow alongside the evolving landscape of technology. With a focus on customer satisfaction, social responsibility, and a passion for excellence, our values define us and inspire us to elevate the standard for impactful and ethical business practices.</p>
      </Grid>
      <Grid item xs={0.5}>
        <br />
      </Grid>
      <Grid item xs={6}>
        <div>
          <div className="about5">
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <br />
      </Grid>
      <Grid item xs={12}>
        <p style={{ fontFamily: 'timesnewroman', fontSize: 20, textAlign: 'left' }}>At Zoom, our journey is a testament to the relentless pursuit of excellence and innovation. Rooted in a passion for technology, our team is committed to transforming ideas into cutting-edge solutions that redefine industries. With a focus on collaboration, integrity, and a customer-centric approach, we navigate the dynamic landscape of the digital era. Our mission is to empower businesses with the tools they need to thrive, and our vision propels us toward a future where technology seamlessly integrates with success. As we embrace the challenges of tomorrow, we invite you to join us on this exciting adventure, where possibilities are limitless, and every interaction is an opportunity to make a lasting impact. Discover the Zoom difference – where innovation meets excellence.</p>
      </Grid>
      <Grid item xs={12}>
        <br />
      </Grid>
    </Grid>
  )
};
export default About;
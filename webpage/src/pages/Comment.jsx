import { Card, CardContent, Grid } from "@mui/material";
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import GaugeChart from 'react-gauge-chart';
import React, { useEffect } from 'react';


const Comment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontFamily: 'timesnewroman' }}>Leave Portal</h1>
      <div>
        <Grid container>
          <Grid item xs={12}>
            <br />
          </Grid>
          <Grid item xs={0.4}>
            <br />
          </Grid>
          <Grid item xs={2.5}>
            <Card sx={{ backgroundColor: 'rgb(245,247,249)' }}>
              <CardContent>
                <h3 style={{ textAlign: 'center', fontFamily: 'timesnewroman' }}>Total Paid Leaves</h3>
                <br />
                <h3 style={{ color: 'blue', textAlign: 'center' }}>30</h3>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={0.4}>
            <br />
          </Grid>
          <Grid item xs={2.5}>
            <Card sx={{ backgroundColor: 'rgb(245,247,249)' }}>
              <CardContent>
                <h3 style={{ textAlign: 'center', fontFamily: 'timesnewroman' }}>Leaves Applied</h3>
                <br />
                <h3 style={{ color: 'brown', textAlign: 'center' }}>5</h3>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={0.4}>
            <br />
          </Grid>
          <Grid item xs={2.5}>
            <Card sx={{ backgroundColor: 'rgb(245,247,249)' }}>
              <CardContent>
                <h3 style={{ textAlign: 'center', fontFamily: 'timesnewroman' }}>Leaves Approved</h3>
                <br />
                <h3 style={{ color: 'green', textAlign: 'center' }}>2</h3>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={0.4}>
            <br />
          </Grid>
          <Grid item xs={2.5}>
            <Card sx={{ backgroundColor: 'rgb(245,247,249)' }}>
              <CardContent>
                <h3 style={{ textAlign: 'center', fontFamily: 'timesnewroman' }}>Leaves Remaining</h3>
                <br />
                <h3 style={{ color: 'rgb(247,203,24)', textAlign: 'center' }}>5</h3>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={0.4}>
            <br />
          </Grid>
          <Grid item xs={12}>
            <br />
          </Grid>
          <Grid item xs={0.4}>
            <br />
          </Grid>
          <Grid item xs={5.5}>
            <Card sx={{ backgroundColor: 'rgb(245,247,249)' }}>
              <CardContent>
                <h3 style={{ textAlign: 'center', fontFamily: 'timesnewroman', marginLeft: -20 }}>Experience vs Leave-Index</h3>
                <BarChart
                  xAxis={[
                    {
                      id: 'barCategories',
                      data: ['0-1 Years', '1-3 Years', '3-5 Years', '5-7 Years', '7+ Years'],
                      scaleType: 'band',
                    },
                  ]}
                  series={[
                    {
                      data: [6, 2, 2, 2, 8],
                    },
                  ]}
                  width={450}
                  height={295}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={0.2}>
            <br />
          </Grid>
          <Grid item xs={5.5}>
            <Card sx={{ backgroundColor: 'rgb(245,247,249)' }}>
              <CardContent>
                <h3 style={{ textAlign: 'center', fontFamily: 'timesnewroman' }}>Current Day Status</h3>
                <br />
                <br />
                <PieChart
                  series={[
                    {
                      data: [
                        { id: 0, value: 2, label: 'Enroute' },
                        { id: 1, value: 7, label: 'In' },
                        { id: 2, value: 3, label: 'On Break' },
                        { id: 3, value: 2, label: 'Out' },
                      ],
                    },
                  ]}
                  width={400}
                  height={250}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={0.4}>
            <br />
          </Grid>
          <Grid item xs={12}>
            <br />
          </Grid>
          <Grid item xs={0.4}>
            <br />
          </Grid>
          <Grid item xs={5.5}>
            <Card sx={{ backgroundColor: 'rgb(245,247,249)' }}>
              <CardContent>
                <h3 style={{ textAlign: 'center', fontFamily: 'timesnewroman', marginLeft: -20 }}>Overall Attendance Percentage (Today)</h3>
                <br />
                <br />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <GaugeChart id="gauge-chart5"
                    nrOfLevels={30}
                    colors={["red", "green"]}
                    percent={.9187}
                    textColor="black"
                    style={{ width: '300px' }}
                  />
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={0.2}>
            <br />
          </Grid>
          <Grid item xs={5.5}>
            <Card sx={{ backgroundColor: 'rgb(245,247,249)' }}>
              <CardContent>
                <h3 style={{ textAlign: 'center', fontFamily: 'timesnewroman' }}>Overall Leave Percentage (Today)</h3>
                <br />
                <br />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <GaugeChart id="gauge-chart5"
                    nrOfLevels={30}
                    colors={["red", "green"]}
                    percent={.0813}
                    textColor="black"
                    style={{ width: '300px' }}
                  />
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={0.4}>
            <br />
          </Grid>
          <Grid item xs={12}>
            <br />
          </Grid>
          <Grid item xs={4}>
            <br />
          </Grid>
          <Grid item xs={4}>
            <h3 style={{ textAlign: 'center', fontFamily: 'timesnewroman' }}>All data is current as of the present date.</h3>
          </Grid>
          <Grid item xs={4}>
            <br />
          </Grid>
        </Grid>
      </div>
    </div >
  )
};
export default Comment;
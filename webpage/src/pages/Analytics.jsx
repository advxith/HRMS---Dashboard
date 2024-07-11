import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from "@mui/material";
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import React, { useEffect } from 'react';

const values = [
  { Name: 'Advaith', Age: 20, Place: 'Kochi', Salary: 20000 },
  { Name: 'Abhishek', Age: 20, Place: 'Pune', Salary: 30000 },
  { Name: 'Gopikrishna', Age: 20, Place: 'Trivandrum', Salary: 40000 },
  { Name: 'Aswanth', Age: 20, Place: 'Chennai', Salary: 50000 },
  { Name: 'Noel', Age: 21, Place: 'Bangalore', Salary: 60000 },
  { Name: 'Jacob', Age: 23, Place: 'Hyderabad', Salary: 70000 },
  { Name: 'Aju', Age: 24, Place: 'Delhi', Salary: 80000 },
  { Name: 'Vikrant', Age: 45, Place: 'Mumbai', Salary: 90000 },
  { Name: 'Robert', Age: 51, Place: 'Ahmedabad', Salary: 100000 }
]

const Analytics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h1 style={{ fontFamily: 'timesnewroman', textAlign: 'center' }}>Employee Salary Analysis</h1>
      <br />
      <p style={{ fontSize: 20, fontFamily: 'timesnewroman' }}>
        Welcome to our Salary Analysis page — a dedicated space designed to empower our valued employees with transparent insights into their compensation structures. At Zoom, we recognize the significance of fair and competitive compensation in fostering a thriving work environment. This comprehensive salary analysis platform has been crafted to provide you with a deeper understanding of your earnings, enabling informed discussions and ensuring that your contributions are not just recognized but also appropriately rewarded. Navigate through this page to gain valuable insights into salary distributions, trends, and benchmarking, as we remain committed to fostering a workplace where every team member feels valued, supported, and well-rewarded for their dedication and expertise. </p>
      <br />
      <div>
        <br />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Place</TableCell>
              <TableCell align="right">Salary (in INR)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {values.map((row) => (
              <TableRow
                key={row.Name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Name}
                </TableCell>
                <TableCell align="right">{row.Age}</TableCell>
                <TableCell align="right">{row.Place}</TableCell>
                <TableCell align="right">{row.Salary}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <br />
      </div>
      <Grid container>
        <Grid item xs={12}>
          <br />
        </Grid>
        <Grid item xs={0.5}>
          <br />
        </Grid>
        <Grid item xs={11}>
          <h2 style={{ fontFamily: 'TimesNewRoman', textDecoration: 'underline' }}>Salary Distribtuion Data:-</h2>
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
        <Grid item xs={11}>
          <p style={{ fontFamily: 'TimesNewRoman', fontSize: 20 }}><b>1. Relative Distribution: </b> The pie chart illustrates the relative distribution of values among different employees (represented by labels such as 'Advaith,' 'Abhishek,' etc.).</p>
          <br />
        </Grid>
        <Grid item xs={0.5}>
          <br />
        </Grid>
        <Grid item xs={0.5}>
          <br />
        </Grid>
        <Grid item xs={11}>
          <p style={{ fontFamily: 'TimesNewRoman', fontSize: 20 }}><b>2. Largest Share: </b>Among the presented employees, 'Robert' has the largest share of the total values, as he corresponds to the largest pie slice. </p>
          <br />
        </Grid>
        <Grid item xs={0.5}>
          <br />
        </Grid>
        <Grid item xs={0.5}>
          <br />
        </Grid>
        <Grid item xs={11}>
          <p style={{ fontFamily: 'TimesNewRoman', fontSize: 20 }}><b>3. Gradual Increase:  </b>The values seem to increase gradually from 'Advaith' to 'Robert,' suggesting a pattern of incremental values or contributions. </p>
          <br />
        </Grid>
        <Grid item xs={0.5}>
          <br />
        </Grid>
        <Grid item xs={0.5}>
          <br />
        </Grid>
        <Grid item xs={11} sx={{ backgroundColor: 'pink' }}>
          <p style={{ fontFamily: 'TimesNewRoman', fontSize: 20 }}><b>4. Balanced vs Varied Contributions:   </b>While some employees have relatively balanced values (e.g., 'Advaith,' 'Abhishek,' 'Gopi'), others have more significant variations (e.g., 'Robert' with a higher value). </p>
          <br />
        </Grid>
        <Grid item xs={0.5}>
          <br />
        </Grid>
        <Grid item xs={0.5}>
          <br />
        </Grid>
        <Grid item xs={11}>
          <p style={{ fontFamily: 'TimesNewRoman', fontSize: 20 }}><b>5. Comparison of Magnitudes:   </b>The sizes of the pie slices provide a visual comparison of the magnitudes of values associated with each employee. </p>
          <br />
        </Grid>
        <Grid item xs={0.5}>
          <br />
        </Grid>
        <Grid item xs={0.5}>
          <br />
        </Grid>
        <Grid item xs={11} sx={{ backgroundColor: 'lightblue' }}>
          <p style={{ fontFamily: 'TimesNewRoman', fontSize: 20 }}><b>6. Top Contributors:   </b>If the values represent, for example, financial contributions or quantities, 'Robert' appears to be the top contributor, followed by 'Vikrant' and 'Aju.' </p>
          <br />
        </Grid>
        <Grid item xs={0.5}>
          <br />
        </Grid>
        <Grid item xs={0.5}>
          <br />
        </Grid>
        <Grid item xs={11}>
          <BarChart
            xAxis={[
              {

                id: 'barCategories',
                data: ['Advaith', 'Abhishek', 'Gopi', 'Aswanth', 'Noel', 'Jacob', 'Aju', 'Vikrant', 'Robert'],
                scaleType: 'band',
              },
            ]}
            series={[
              {
                data: [20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000],
              },
            ]}
            width={1000}
            height={500}
          />
        </Grid>
        <Grid item xs={0.5}>
          <br />
        </Grid>
        <Grid item xs={0.5}>
          <br />
        </Grid>
        <Grid item xs={11}>
          <h2 style={{ fontFamily: 'TimesNewRoman', textDecoration: 'underline' }}>Salary Contribution Data:-</h2>
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
        <Grid item xs={11}>
          <p style={{ fontFamily: 'TimesNewRoman', fontSize: 20 }}><b>1. Dominant Contributor: </b>'Robert' stands out as the dominant contributor, with the largest slice in the pie chart. This indicates that 'Robert' has the highest contribution compared to other employees.</p>
          <br />
        </Grid>
        <Grid item xs={0.5}>
          <br />
        </Grid>
        <Grid item xs={0.5}>
          <br />
        </Grid>
        <Grid item xs={11}>
          <p style={{ fontFamily: 'TimesNewRoman', fontSize: 20 }}><b>2. Significant Contributions: </b>'Vikrant' and 'Aju' also make substantial contributions, with sizable portions in the pie chart. These employees are significant contributors to the overall distribution of values.</p>
          <br />
        </Grid>
        <Grid item xs={0.5}>
          <br />
        </Grid>
        <Grid item xs={0.5}>
          <br />
        </Grid>
        <Grid item xs={11}>
          <p style={{ fontFamily: 'TimesNewRoman', fontSize: 20 }}><b>3. Moderate Contributors: </b>Employees like 'Jacob,' 'Noel,' 'Aswanth,' and 'Gopi' make moderate contributions. Their slices are smaller than the top contributors but still represent meaningful contributions.</p>
          <br />
        </Grid>
        <Grid item xs={0.5}>
          <br />
        </Grid>
        <Grid item xs={0.5}>
          <br />
        </Grid>
        <Grid item xs={11} sx={{ backgroundColor: 'pink' }}>
          <p style={{ fontFamily: 'TimesNewRoman', fontSize: 20 }}><b>4. Minor Contributors: </b>'Advaith' and 'Abhishek' have smaller slices, indicating relatively minor contributions compared to other employees. While their contributions are present, they are not as prominent as the top contributors. </p>
          <br />
        </Grid>
        <Grid item xs={0.5}>
          <br />
        </Grid>
        <Grid item xs={0.5}>
          <br />
        </Grid>
        <Grid item xs={11}>
          <p style={{ fontFamily: 'TimesNewRoman', fontSize: 20 }}><b>5. Uneven Distribution:   </b>The distribution of contributions is uneven, with a few employees making more significant impacts than others. This suggests that certain contributors play a more pivotal role in the overall distribution of values.</p>
          <br />
        </Grid>
        <Grid item xs={0.5}>
          <br />
        </Grid>
        <Grid item xs={0.5}>
          <br />
        </Grid>
        <Grid item xs={11} sx={{ backgroundColor: 'lightblue' }}>
          <p style={{ fontFamily: 'TimesNewRoman', fontSize: 20 }}><b>6. Strategic Focus:  </b>From a strategic standpoint, attention may be directed towards optimizing and maximizing contributions from employees like 'Robert,' 'Vikrant,' and 'Aju'. Understanding the key contributors can help in formulating strategies to enhance overall performance. </p>
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
        <Grid item xs={11}>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 20000, label: 'Advaith' },
                  { id: 1, value: 30000, label: 'Abhishek' },
                  { id: 2, value: 40000, label: 'Gopi' },
                  { id: 3, value: 50000, label: 'Aswanth' },
                  { id: 4, value: 60000, label: 'Noel' },
                  { id: 5, value: 70000, label: 'Jacob' },
                  { id: 6, value: 80000, label: 'Aju' },
                  { id: 7, value: 90000, label: 'Vikrant' },
                  { id: 8, value: 100000, label: 'Robert' },
                ],
              },
            ]}
            width={1000}
            height={500}
          />
        </Grid>
        <Grid item xs={0.5}>
          <br />
        </Grid>
        <Grid item xs={12}>
          <br />
        </Grid>
        <p style={{ fontSize: 20, fontFamily: 'timesnewroman' }}>
          By leveraging these analytics, we can make informed decisions to ensure that our compensation strategies align with industry standards and support our goal of attracting and retaining top talent. As stewards of the company's resources, your thoughtful utilization of this data will contribute to a more efficient and strategically aligned workforce. We appreciate your dedication to fostering a workplace that values both its employees and the responsible management of resources.
        </p>
        <br />
      </Grid>
    </div>
  )
};
export default Analytics;
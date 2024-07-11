import { Grid } from '@mui/material'
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import React, { useEffect } from 'react';


function Dashboard() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <h1 style={{ fontFamily: 'timesnewroman', textAlign: 'center' }}>
        Human Resource Dashboard
      </h1>
      <div>
        <Grid container>
          <Grid item xs={12} >
            <br />
            <p style={{ color: "black" }}>Welcome to the Human Resource Dashboard, a dynamic hub designed to empower our HR professionals with real-time insights and streamlined management tools. At Zoom, we understand that our people are our greatest asset, and this intuitive dashboard is tailored to enhance the efficiency and effectiveness of our HR processes. From talent acquisition to performance metrics and workforce analytics, this centralized platform provides a comprehensive view of key HR indicators, fostering data-driven decision-making. Dive into a seamless experience that aligns with our commitment to cultivating a workplace where every employee thrives, and every HR initiative contributes to the success of our dynamic team. </p>
          </Grid>
          <Grid item xs={5.5}>
            <br />
            <h4 style={{ textAlign: 'center', textDecoration: 'underline', fontSize: 20 }}>Approved leaves over the last 10 days:- </h4>
            <LineChart
              sx={{ marginTop: -10 }}
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5, 2, 6, 1, 5],
                  area: true,
                  showMark: ({ index }) => index % 2 === 0,
                },
              ]}
              width={500}
              height={300}
            />
            <p style={{ marginTop: -15, color: "black" }}>The LineChart represents the number of employees on leave over the last 10 days, offering a clear insight into the temporal patterns of leave-taking within the organization. The x-axis, denoting the days, suggests a progression of time, while the y-axis, indicating the number of employees on leave, portrays the fluctuating nature of this metric. Notably, the filled area under the line graph enhances visibility and emphasizes the cumulative impact of leaves during the specified period. The presence of marked points at even indices may highlight specific days with notable leave occurrences, providing HR officials with a quick reference to potential trends or anomalies. This visualization aids in workforce management by enabling a proactive approach to resource planning.</p>
          </Grid>
          <Grid item xs={1}>
            <br />
          </Grid>
          <Grid item xs={5.5}>
            <br />
            <h4 style={{ textAlign: 'center', textDecoration: 'underline', fontSize: 20 }}>Employee count over the last 3 years:-</h4>
            <BarChart
              sx={{ marginTop: -10 }}
              xAxis={[
                {
                  id: 'barCategories',
                  data: ['2019', '2020', '2021'],
                  scaleType: 'band',
                },
              ]}
              series={[
                {
                  data: [6, 16, 10,],
                },
              ]}
              width={500}
              height={300}
            />
            <p style={{ marginTop: -15, color: "black" }}>The BarChart above depicts a three-year trend in a specific metric, presumably representing numerical values for the years 2019, 2020, and 2021. The chart reveals that the metric started at 6 in 2019, experienced a significant increase to 16 in 2020, and then saw a decrease to 10 in 2021. This pattern suggests a notable fluctuation in the metric over the observed period. The substantial rise in 2020 could indicate a peak or an exceptional event during that year, while the subsequent decrease in 2021 may signify a return to a more typical level. This visualization encourages further exploration into the factors influencing these fluctuations, providing valuable insights for decision-making and strategic planning within the relevant domain.</p>
          </Grid>
          <Grid item xs={12}>
            <br />
          </Grid>
          <Grid item xs={5.5}>
            <br />
            <h4 style={{ textAlign: 'center', textDecoration: 'underline', fontSize: 20 }}>Employee count comparison with our competitors:-</h4>
            <br />
            <PieChart
              sx={{ marginLeft: -5 }}
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: 'Zoom' },
                    { id: 1, value: 15, label: 'Google' },
                    { id: 2, value: 20, label: 'Microsoft' },
                    { id: 3, value: 30, label: 'Amazon' },
                  ],
                },
              ]}
              width={500}
              height={250}
            />
            <br />
            <p style={{ color: "black" }}>This visual representation provides a quick overview of the workforce distribution among the selected companies. Amazon commands the largest share, representing 30% of the total employee count. Microsoft follows with a significant 20%, while Google and Zoom contribute 15% and 10%, respectively. Amazon's substantial share indicates its sizeable employee base, possibly reflecting its status as a major employer. Conversely, Zoom's smaller slice suggests a relatively smaller workforce compared to the other three. HR professionals can leverage this information for strategic planning, talent acquisition, and benchmarking against industry standards. Overall, the PieChart facilitates a clear and concise understanding of the employee distribution landscape, aiding decision-makers in workforce management and resource allocation.</p>
          </Grid>
          <Grid item xs={1}>
            <br />
          </Grid>
          <Grid item xs={5.5}>
            <br />
            <h4 style={{ textAlign: 'center', textDecoration: 'underline', fontSize: 20 }}>Employee growth rate comparison with last year:-</h4>
            <br />
            <LineChart
              series={[
                { curve: "linear", data: [8, 10, 7, 16], label: '2020' },
                { curve: "linear", data: [16, 4, 8, 10], label: '2021' },
              ]}
              width={500}
              height={250}
            />
            <p style={{ color: "black" }}>The LineChart provides a concise overview of employee fluctuations over the last two years within the company. In 2020, the employee count followed a somewhat irregular trajectory, starting at 8, peaking at 10, experiencing a dip to 7, and finally surging to 16. Conversely, in 2021, the pattern changed, commencing at 16, dropping to 4, recovering to 8, and then rising again to 10. The use of linear curves in both series accentuates the observed changes in a straightforward manner. This visual representation indicates periods of growth and decline, suggesting potential factors influencing workforce dynamics, such as hiring initiatives or organizational restructuring. HR professionals can leverage this information to identify patterns, forecast trends, and strategize recruitment or retention efforts to ensure a stable and resilient workforce.
            </p>
          </Grid>
          <Grid item xs={0.5}>
            <br />
          </Grid>
          <Grid item xs={12}>
            <br />
          </Grid>
          <Grid item xs={12} sx={{ backgroundColor: 'lightblue' }}>
            <p><b>In conclusion, the Dashboard paints a comprehensive picture of our organizational dynamics, offering valuable insights for strategic decision-making. The analysis of approved leaves over the last 10 days reveals a workforce that experiences periodic fluctuations, emphasizing the importance of proactive resource planning for enhanced operational continuity. The examination of employee count trends over the past three years provides a nuanced understanding of our company's growth trajectory, with 2020 witnessing a significant surge followed by a slight decline in 2021. While this underscores our resilience, it also prompts us to explore the factors behind these variations for more informed future planning. Comparatively, the employee count comparison with industry giants showcases our position, with Amazon leading the way, and presents an opportunity for benchmarking and talent acquisition strategies. Lastly, the employee growth rate comparison highlights the company's adaptability, indicating periods of both growth and recalibration. These insights, drawn from the visual analytics, enable us to celebrate successes, address challenges, and steer our human resource initiatives towards fostering a workplace where every employee thrives.</b></p>
          </Grid>
          <Grid item xs={12}>
            <br />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default Dashboard;
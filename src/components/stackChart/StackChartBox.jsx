import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import "./stackChart.scss";

const StackChartBox = () => {
    const data = [
        {
          name: 'Sun',
          apartments: 4000,
          studioFlats: 2400,
          beachFront: 2400,
        },
        {
          name: 'Mon',
          apartments: 3000,
          studioFlats: 1398,
          beachFront: 2210,
        },
        {
          name: 'Tue',
          apartments: 2000,
          studioFlats: 9800,
          beachFront: 2290,
        },
        {
          name: 'Wed',
          apartments: 2780,
          studioFlats: 3908,
          beachFront: 2000,
        },
        {
          name: 'Thu',
          apartments: 1890,
          studioFlats: 4800,
          beachFront: 2181,
        },
        {
          name: 'Fri',
          apartments: 2390,
          studioFlats: 3800,
          beachFront: 2500,
        },
        {
          name: 'Sat',
          apartments: 3490,
          studioFlats: 4300,
          beachFront: 2100,
        },
      ];
  return (
    <div className="stackchart__container">
        <h1>Revenue Analytics</h1>
        <div className="chart__container">
        <ResponsiveContainer width="99%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="apartments" stackId="1" stroke="#fd1f4a" fill="#fd1f4a" />
          <Area type="monotone" dataKey="studioFlats" stackId="1" stroke="teal" fill="teal" />
          <Area type="monotone" dataKey="beachFront" stackId="1" stroke="gold" fill="gold" />
        </AreaChart>
      </ResponsiveContainer>
        </div>
      
    </div>
  )
}

export default StackChartBox

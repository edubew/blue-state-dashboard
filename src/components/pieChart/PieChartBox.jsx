import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChart.scss";

const PieChartBox = () => {
    const data = [
        { name: 'One-night stays', value: 400, color: "#fd1f4a" },
        { name: 'Weekend gataways', value: 600, color: "#1d5dec" },
        { name: 'One-week stays', value: 400, color: "gold" },
        { name: 'Long-term stays', value: 200, color: "teal" },
      ];
  return (
    <div className="piechart__container">
      <h1>Reservation Lengths</h1>
      <div className="chart__container">
        <ResponsiveContainer width="99%" height={300}>
        <PieChart>
        <Tooltip
            contentStyle={{ background: "white", borderRadius: "0.3rem" }}
          />
        <Pie
          data={data}
          innerRadius={"70%"}
          outerRadius={"90%"}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((item) => (
            <Cell key={item.name} fill={item.color} />
          ))}
        </Pie>
       </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options__container">
        {data.map((item)=> (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{backgroundColor: item.color}} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox

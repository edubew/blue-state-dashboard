import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import PropTypes from 'prop-types';
import "./barChartBox.scss";

const BarChartBox = (props) => {
  return (
    <div className="barchart__container">
      <h1>{props.title}</h1>
      <div className="chart__container">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart width={150} height={40} data={props.chartData}>
          <Tooltip
            contentStyle={{ background: "#2a3447", borderRadius: "0.3rem" }}
            labelStyle={{ display: "none" }}
            cursor={{fill: "none"}}
          />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

BarChartBox.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dataKey: PropTypes.string.isRequired,
  chartData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BarChartBox;

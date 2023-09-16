import "./ChartBox.scss";
import { FaWpforms } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import PropTypes from 'prop-types';

const ChartBox = (props) => {
  return (
    <div className="chartbox__container">
      <div className="box__info">
        <div className="title">
            <FaWpforms className="icon" />
            <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{ color: props.color }}>View all</Link>
      </div>
      <div className="chart__info">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 60 }}
              />
              <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts__container">
          <span className="percentage" style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}>{props.percentage}%</span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  )
}

ChartBox.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dataKey: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  percentage: PropTypes.number.isRequired,
  chartData: PropTypes.array.isRequired,
};

export default ChartBox;


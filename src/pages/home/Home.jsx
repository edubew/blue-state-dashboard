import "./home.scss";
import Transactions from "../../components/transactions/Transactions";
import ChartBox from "../../components/chartBox/ChartBox";
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../data";
import BarChartBox from "../../components/barChartBox/BarChartBox";

const Home = () => {
  return (
    <div className="home__container">
      <div className="box__container box1">
        <Transactions />
      </div>
      <div className="box__container box2"><ChartBox {...chartBoxUser} /></div>
      <div className="box__container box3"><ChartBox {...chartBoxProduct} /></div>
      <div className="box__container box4">Box4</div>
      <div className="box__container box5"><ChartBox {...chartBoxConversion} /></div>
      <div className="box__container box6"><ChartBox {...chartBoxRevenue} /></div>
      <div className="box__container box7">Box7</div>
      <div className="box__container box8"><BarChartBox {...barChartBoxVisit} /></div>
      <div className="box__container box9"><BarChartBox {...barChartBoxRevenue} /></div>
    </div>
  )
}

export default Home

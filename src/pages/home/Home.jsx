import "./home.scss";
import Transactions from "../../components/transactions/Transactions";
import ChartBox from "../../components/chartBox/ChartBox";
import { chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../data";

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
      <div className="box__container box8">Box8</div>
      <div className="box__container box9">Box9</div>
    </div>
  )
}

export default Home

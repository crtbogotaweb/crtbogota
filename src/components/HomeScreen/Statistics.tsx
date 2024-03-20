import { itemsStatistics } from "../../locales/statistics";
import "./../styles/statisticsStyles.css";

const Statistics = () => {
  return (
    <div className="statistics_container">
      <div className="container">
        {itemsStatistics.map((item) => (
          <div key={item.icon}>
            <section>
              <h4 className="">{item.number}</h4>
              <p>{item.text}</p>
            </section>
            <i className={`${item.icon} icon_medium`}></i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;

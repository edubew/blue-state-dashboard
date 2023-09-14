import "./menu.scss";
import { Link } from "react-router-dom";
import { menu } from "../../data";

const Menu = () => {
  return (
    <div className="side__menu">
      {menu.map((item) => (
        <div className="menu__item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className="list__item" key={listItem.id}>
              {listItem.icon()}
              <span className="list__title">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Menu;

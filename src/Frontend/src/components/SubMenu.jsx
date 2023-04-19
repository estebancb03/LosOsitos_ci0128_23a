import { useState } from "react";
import { Link } from "react-router-dom";

const SubMenu = ({ item }) => {
  const [subNav, setSubNav] = useState(false);

  const showIcon = () => setSubNav(!subNav);

  return (
    <div>
      {!subNav ? (
        <Link
          to={item.path}
          className="
            flex text-gray-300 justify-between items-center h-16 text-lg 
          hover:bg-sky-900 cursor-pointer hover:border-gray-300 border-transparent border-2"
          onClick={item.subnav && showIcon}
        >
          <span className="ml-4">{item.title}</span>
          <div className="mr-4">
            {item.subnav && subNav
              ? item.iconOpened
              : item.subnav
              ? item.iconClosed
              : null}
          </div>
        </Link>
      ) : (
        <Link
          to={item.path}
          className="
          bg-sky-900 flex text-gray-300 justify-between items-center h-16 text-lg 
          hover:bg-sky-900 cursor-pointer hover:border-gray-300 border-transparent border-2"
          onClick={item.subnav && showIcon}
        >
          <span className="ml-4">{item.title}</span>
          <div className="mr-4">
            {item.subnav && subNav
              ? item.iconOpened
              : item.subnav
              ? item.iconClosed
              : null}
          </div>
        </Link>
      )}

      {subNav &&
        item.subnav.map((item, index) => {
          return (
            <Link
              to={item.path}
              key={index}
              className="
        bg-sky-900 h-16 pl-10 flex items-center no-underline text-gray-200 text-lg
          hover:bg-sky-800 cursor-pointer hover:border-gray-300 border-transparent border-2"
            >
              <span className="ml-4">{item.title}</span>
            </Link>
          );
        })}
    </div>
  );
};

export default SubMenu;

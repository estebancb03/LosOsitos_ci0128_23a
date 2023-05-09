import { useState } from "react";
import { Link } from "react-router-dom";

const SubMenu = ({ item }) => {
  // State of the subNav
  const [subNav, setSubNav] = useState(false);
  // function that changes the subNav state
  const showIcon = () => setSubNav(!subNav);

  return (
    <div>
      {
        // If the item has child items
        !subNav ? (
          <Link
            to={item.path}
            className="
              flex text-gray-300 items-center h-16 text-lg
              hover:bg-[#6545e6] cursor-pointer hover:border-gray-300 border-transparent border-2"
            onClick={item.subnav && showIcon}
          >
            <span className="ml-4">{item.icon}</span>
            <span className="ml-4">{item.title}</span>
            <div className="ml-4 mr-4">
              {
                // Item properties are validated
                item.subnav && subNav
                  ? item.iconOpened
                  : item.subnav
                  ? item.iconClosed
                  : null
              }
            </div>
          </Link>
        ) : (
          <Link
            to={item.path}
            className="
              bg-[#6545e6] flex text-gray-300 items-center h-16 text-lg 
              hover:bg-[#6545e6] cursor-pointer hover:border-gray-300 border-transparent border-2"
            onClick={item.subnav && showIcon}
          >
            <span className="ml-4">{item.icon}</span>
            <span className="ml-4">{item.title}</span>
            <div className="ml-4 mr-4">
              {
                // Item properties are validated
                item.subnav && subNav
                  ? item.iconOpened
                  : item.subnav
                  ? item.iconClosed
                  : null
              }
            </div>
          </Link>
        )
      }

      {subNav &&
        // For each item of the data array, a Link is created
        item.subnav.map((item, index) => {
          return (
            <Link
              to={item.path}
              key={index}
              className="
                bg-[#6545e6] h-16 sm:pl-5 pl-10 flex items-center no-underline text-gray-200 text-lg
                hover:cursor-pointer hover:border-gray-300 border-transparent border-2"
            >
              <span className="ml-4">{item.icon}</span>
              <span className="ml-4">{item.title}</span>
            </Link>
          );
        })}
    </div>
  );
};

export default SubMenu;

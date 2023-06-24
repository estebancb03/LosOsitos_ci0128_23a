import { Link } from "react-router-dom";

const FooterItem = ({ item }) => {
  const { name, attributes } = item;
  return (
    <div>
      <ul>
        <h1 className="mb-2 font-semibold">{name}</h1>
        {attributes.map((attribute, index) => (
          <li key={index} className="text-black">
            {attribute.link && attribute.icon ? (
              <Link
                to={attribute.link}
                className="flex justify-center mt-1 hover:font-semibold transition-colors duration-300"
              >
                <span className="mt-0.5">{attribute.icon}</span>
                <span className="ml-3">{attribute.description}</span>
              </Link>
            ) : attribute.link && attribute.externalicon ? (
              <Link to={attribute.link}>
                <div
                  className="bg-[#219ebc] h-16 flex justify-center items-center rounded-md 
                      hover:font-semibold hover:bg-blue-600 transition-all duration-300"
                >
                  <span className="ml-3 mr-3 h-[50px] w-[50px]">
                    <img src={attribute.externalicon} />
                  </span>
                  <span>{attribute.description}</span>
                </div>
              </Link>
            ) : attribute.link ? (
              <Link
                to={attribute.link}
                className="flex justify-center mt-1 hover:font-semibold transition-colors duration-300"
              >
                <span>{attribute.description}</span>
              </Link>
            ) : attribute.icon ? (
              <div className="flex justify-center mt-1 hover:font-semibold transition-colors duration-300">
                <span>{attribute.icon}</span>
              </div>
            ) : (
              <div className="flex justify-center mt-1 hover:font-semibold transition-colors duration-300">
                <span>{attribute.description}</span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterItem;

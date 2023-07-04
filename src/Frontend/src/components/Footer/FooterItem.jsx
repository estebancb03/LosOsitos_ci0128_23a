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
            ) : attribute.externalicon ? (
              <Link to={attribute.link}>
                <div
                  className="h-16 lg:mx-24 flex items-center rounded-md 
                      hover:font-semibold hover:bg-gradient-to-l from-[#219ebc] to-[#4ecdc4] transition-all duration-300 hover:ring-2 hover:ring-white"
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
                {console.log(attribute)}
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

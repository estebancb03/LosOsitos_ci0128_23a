import FooterItem from "./FooterItem";
import FooterData from "../../data/FooterData";

const FooterItemsContainer = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-1 gap-6 sm:px-8 px-5 py-16 text-center">
      {FooterData.map((item, index) => (
        <FooterItem item={item} key={index} />
      ))}
    </div>
  );
};

export default FooterItemsContainer;

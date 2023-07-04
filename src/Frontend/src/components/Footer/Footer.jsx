import FooterItemContainer from "./FooterItemContainer";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-l from-[#219ebc] to-[#4ecdc4] text-gray-300">
      <div
        className="grid grid-cols-1 lg:grid-cols-1 gap-10
        pt-2 text-gray-800 text-sm pb-8 justify-center"
      >
        <FooterItemContainer />
        <span className="text-center">© 2023 all rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;

import Image from "next/image";
import fbSvg from "../data/fb-svg.svg";
import igSvg from "../data/insta-svg.svg";
import twSvg from "../data/twitter-svg.svg";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white p-6 mt-8">
      <div className="flex justify-between flex-wrap text-sm">
        <div>
          <h3 className="font-semibold text-xl">Filters</h3>
          <div className="flex gap-4 mt-2 text-lg">
            <p className="text-xs">All</p>
            <p className="text-xs">Electron</p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-xl">About Us</h3>
          <div className="mt-2 text-lg">
            <p className="text-xs">About Us</p>
            <p className="mt-2  text-xs">Contact</p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-xl">Follow Us</h3>
          <div className="flex space-x-2 mt-2">
            <span>
              <a href="#">
                <Image src={fbSvg} alt="facebook" width={44} height={44} />
              </a>
            </span>
            <span>
              <a href="#">
                <Image src={igSvg} alt="instagram" width={44} height={44} />
              </a>
            </span>
            <span>
              <a href="#">
                <Image src={twSvg} alt="twitter" width={44} height={44} />
              </a>
            </span>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg">&copy; 2024 American</p>
    </footer>
  );
};

export default Footer;

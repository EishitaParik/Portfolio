import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left */}

        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-semibold">
            Eishita Parik
          </h3>

          
        </div>

        {/* Center */}

        <div className="socials">
          {socialImgs.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
              title={item.name}
            >
              <img src={item.imgPath} alt={item.name} />
            </a>
          ))}
        </div>

        {/* Right */}

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Eishita Parik
          </p>

          <p className="text-sm text-white-50 text-center md:text-end mt-1">
            Open to Internships & Full-Time Opportunities
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
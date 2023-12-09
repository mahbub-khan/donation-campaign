import "./Footer.css";

const Footer = ({ hasEnoughContent }) => {
  return (
    <div>
      <footer
        className={`footer footer-center p-4 bg-base-300 text-base-content footer-min-height ${
          hasEnoughContent ? "" : "fixed left-0 bottom-0"
        }`}
      >
        <aside>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;

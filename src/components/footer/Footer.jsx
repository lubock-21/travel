import './Footer.css'

function Footer() {
  return (
    <div>
        <footer className="footer">
      <div className="footer-section about">
        <h2>Listee Travel</h2>
        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
      <div className="footer-section">
        <h3>About</h3>
        <ul>
          <li>Menu</li>
          <li>Features</li>
          <li>News & Blogs</li>
          <li>Help & Supports</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Company</h3>
        <ul>
          <li>How we work</li>
          <li>Terms of service</li>
          <li>Pricing</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="footer-section contact">
        <h3>Contact Us</h3>
        <p>Akshya Nagar 1st Block 1st Cross, Ramamurthy Nagar, Bangalore-560016</p>
        <p>+1 202-918-2132</p>
        <p>listeetravel@mail.com</p>
        <p>www.listeetravel.com</p>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
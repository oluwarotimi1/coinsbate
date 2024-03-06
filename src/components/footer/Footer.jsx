import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="footer__addr">
          <h1 class="footer__logo">&copy; coinsbate</h1>

          <h2>Contact</h2>

          <address>
            5534 6 Reybold Dr Delaware City, DE 19706
            <Link
              class="footer__btn"
              href="mailto:adebisioluwarotimi@gmail.com"
            >
              Email Us
            </Link>
          </address>
        </div>

        <ul class="footer__nav">
          <li class="nav__item">
            <h2 class="nav__title">Media</h2>

            <ul class="nav__ul">
              <li>
                <Link href="#">Online</Link>
              </li>

              <li>
                <Link href="#">Print</Link>
              </li>

              <li>
                <Link href="#">Alternative Ads</Link>
              </li>
            </ul>
          </li>

          <li class="nav__item nav__item--extra">
            <h2 class="nav__title">Technology</h2>

            <ul class="nav__ul nav__ul--extra">
              <li>
                <Link href="#">Hardware Design</Link>
              </li>

              <li>
                <Link href="#">Software Design</Link>
              </li>

              <li>
                <Link href="#">Digital Signage</Link>
              </li>

              <li>
                <Link href="#">Automation</Link>
              </li>

              <li>
                <Link href="#">Artificial Intelligence</Link>
              </li>

              <li>
                <Link href="#">IoT</Link>
              </li>
            </ul>
          </li>

          <li class="nav__item">
            <h2 class="nav__title">Legal</h2>

            <ul class="nav__ul">
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>

              <li>
                <Link href="#">Terms of Use</Link>
              </li>

              <li>
                <Link href="#">Sitemap</Link>
              </li>
            </ul>
          </li>
        </ul>

        <div class="legal">
          <p> RegXchange &copy; 2023. All rights reserved.</p>

          <div class="legal__links">
            <span>
              Oluwarotimi Tech <span class="heart">♥</span> remotely from
              Anywhere
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

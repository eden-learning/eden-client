import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="container-fluid p-3 mt-5">
      <div className="row">
        <div className="col col-lg-6 text-center text-lg-left">
          <ul className="p-3 list-unstyled">
            <li className="p-2">
              <a
                className="text-white"
                href="mailto:learnwitheden@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Contact Us: learnwitheden@gmail.com
              </a>
            </li>
            <li className="p-2">
              <Link className="text-white" to="/privacy-policy">
                Terms & Privacy
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-lg-6 text-center">
          <a
            href="https://twitter.com/PlaywithEden"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-twitter rounded-circle fa-2x bg-white m-4 p-3" />
          </a>
          <a
            href="https://m.facebook.com/PlayWithEden/?modal=admin_todo_tour"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-facebook-square rounded-circle fa-2x bg-white m-4 p-3" />
          </a>
          <a
            href="https://www.instagram.com/playwitheden/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-instagram rounded-circle fa-2x bg-white m-4 p-3" />
          </a>
          <a
            href="https://www.linkedin.com/company/projecteden/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-linkedin rounded-circle fa-2x bg-white m-4 p-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}

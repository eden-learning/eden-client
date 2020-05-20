import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <div>
      <footer className="container-fluid p-3 mt-5">
        <div className="row">
          <div className="row col-lg-6 text-center">
            <ul className="col col-lg-5 list-unstyled">
              <li className="p-2">
                <a className="text-white" href="#footer1">
                  Footer 1
                </a>
              </li>
              <li className="p-2">
                <a className="text-white" href="#footer2">
                  Footer 2
                </a>
              </li>
              <li className="p-2">
                <a className="text-white" href="#footer3">
                  Footer 3
                </a>
              </li>
            </ul>
            <ul className="col col-lg-4 list-unstyled">
              <li className="p-2">
                <a className="text-white" href="#footer4">
                  Footer 4
                </a>
              </li>
              <li className="p-2">
                <a className="text-white" href="#footer5">
                  Footer 5
                </a>
              </li>
              <li className="p-2">
                <a className="text-white" href="#footer6">
                  Footer 6
                </a>
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
              href="https://www.instagram.com/invites/contact/?i=1q6wz6xs4q4dc&utm_content=g2oxjvo"
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
    </div>
  );
}

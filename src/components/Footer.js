import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <div>
      <footer className="container-fluid p-5 mt-5">
        <div className="row justify-content-around">
          <ul className="col-sm-2 list-unstyled">
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
          <ul className="col-sm-2 list-unstyled">
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
          <div className="col-md-5 justify-content-end ml-auto">
            <a href="#twitter">
              <i className="fa fa-twitter rounded-circle fa-2x bg-white m-4 p-3" />
            </a>
            <a href="#facebook">
              <i className="fa fa-facebook-square rounded-circle fa-2x bg-white m-4 p-3" />
            </a>
            <a href="#instagram">
              <i className="fa fa-instagram rounded-circle fa-2x bg-white m-4 p-3" />
            </a>
            <a href="#linkedin">
              <i className="fa fa-linkedin rounded-circle fa-2x bg-white m-4 p-3" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

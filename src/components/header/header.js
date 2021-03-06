import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ({ onServiceChange }) => {
    return (
      <div className='header d-flex'>
          <h3>
              <Link to="/">
                  Star DB
              </Link>
          </h3>
          <ul className="d-flex">
              <li>
                  <Link to="/people/">Peoples</Link>
              </li>
              <li>
                  <Link to="/starships/">Star ships</Link>
              </li>
              <li>
                  <Link to="/planets/">Planets</Link>
              </li>
          </ul>
          <button
              className="btn btn-primary btn-sm"
              onClick={onServiceChange}
          >
              Change Service
          </button>
      </div>
    );
};

export default Header;
import React from "react";
import { withRouter } from "react-router-dom";

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div 
      className='background-image'
      style={{backgroundImage: `url(${imageUrl})`
    }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>   
);

// withRouther takes a component an optimizes it such that
// it has access to the location, match, and history props
// from out website 
export default withRouter(MenuItem);  
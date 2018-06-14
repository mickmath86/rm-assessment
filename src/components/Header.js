import React from 'react';
import PropTypes from 'prop-types';

const Header = props =>{

  const dataPoints = props.headerData;
  let points = dataPoints.map((item, index) =>
    <li key={index}>{item}</li>
  );

  return (
    <header className="border-bottom p-5">
      <ul className="d-flex justify-content-around flex-row">
        {points}
        <li onClick={props.toggleContent}>{props.contentIsShown ? <i className="fa fa-minus-square"></i> : <i className="fa fa-plus-square"></i>}</li>
      </ul>
    </header>
  )
}

Header.propTypes = {
  toggleContent: PropTypes.func.isRequired,
  contentIsShown: PropTypes.bool.isRequired
}
export default Header;

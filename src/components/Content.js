import React from 'react';
import PropTypes from 'prop-types';

const Content = props => {

  let active = "active panel rounded border p-3 text-left";
  let inactive= "inactive panel rounded border p-3 text-left";

  return (
    <content className="p-1">
      <div className="row p-3">
        <div className="col-md-6">
          <div onClick={()=>props.panelClick('a')} className = {props.panelAIsActive ? active : inactive}>
            {props.panelAIsActive ? props.contentA : ""}

          </div>
        </div>
        <div className="col-md-6">
          <div onClick={()=>props.panelClick('b')} className = {props.panelAIsActive ? inactive : active}>
            {props.panelAIsActive ? "" : props.contentB}
          </div>
        </div>
      </div>
    </content>
  );
}

Content.propTypes = {
  panelAIsActive: PropTypes.bool.isRequired,
  contentA: PropTypes.string.isRequired,
  contentB: PropTypes.string.isRequired
}
export default Content;

import React from "react";
import PropTypes from "prop-types";

function TitleComponent({ id, children }) {
  return (
    <div className="text-indigo-600 font-bold lg:text-xl text-md">
      <h1 key={id & id}>{children}</h1>
    </div>
  );
}

TitleComponent.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.string.isRequired,
};

export default TitleComponent;

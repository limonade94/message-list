import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Mainheader = ({ title }) => (
  <header>
    <h1>{title}</h1>
  </header>
);

Mainheader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default memo(Mainheader);

import React from 'react';

import PropTypes from 'prop-types';
import styles from '../Reader.module.css';

const Publication = ({ publication }) => (
  <article className={styles.publication}>
    <h2 className={styles.title}>{publication.title}</h2>
    <p className={styles.text}>{publication.text}</p>
  </article>
);

Publication.propTypes = {
  publication: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};

export default Publication;

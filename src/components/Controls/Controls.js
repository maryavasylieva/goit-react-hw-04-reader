import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Reader.module.css';

const Controls = ({
  handleChange,

  disabledNext,
  disabledBack,
}) => (
  <section className={styles.controls}>
    <button
      type="button"
      name="back"
      className={styles.button}
      onClick={e => handleChange(e)}
      disabled={disabledBack}
    >
      Назад
    </button>
    <button
      type="button"
      name="forward"
      className={styles.button}
      onClick={e => handleChange(e)}
      disabled={disabledNext}
    >
      Вперед
    </button>
  </section>
);

Controls.defaultProps = {
  disabledNext: false,
  disabledBack: false,
};

Controls.propTypes = {
  disabledNext: PropTypes.bool,
  disabledBack: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
};

export default Controls;

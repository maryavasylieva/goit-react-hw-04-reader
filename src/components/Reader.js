import React, { Component } from 'react';
import queryString from 'query-string';
import ReactRouterPropTypes from 'react-router-prop-types';
import styles from './Reader.module.css';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';
import publications from '../assets/publication.json';

const PAGE = 1;

const getLocation = location =>
  Math.floor(Number(queryString.parse(location.search).item));

class Reader extends Component {
  static propTypes = {
    location: ReactRouterPropTypes.location.isRequired,
    history: ReactRouterPropTypes.history.isRequired,
  };

  componentDidMount() {
    const { location, history } = this.props;
    const searchItem = getLocation(location);

    if (searchItem > publications.length || searchItem < 1 || !searchItem) {
      return history.replace({
        ...location,
        search: `item=${PAGE}`,
      });
    }

    return history.push({
      ...location,
      search: `item=${searchItem}`,
    });
  }

  componentDidUpdate() {
    const { location, history } = this.props;
    const searchItem = getLocation(location);

    if (searchItem > publications.length || searchItem < 1 || !searchItem) {
      history.replace({
        ...location,
        search: `item=${PAGE}`,
      });
    }
  }

  handleChange = ({ target: { name } }) => {
    const { location, history } = this.props;
    const searchItem = getLocation(location);

    if (name === 'forward') {
      history.push({ ...location, search: `item=${searchItem + 1}` });
    }

    if (name === 'back') {
      history.push({ ...location, search: `item=${searchItem - 1}` });
    }
  };

  render() {
    const { location } = this.props;
    const searchItem = getLocation(location);
    const index =
      searchItem > publications.length || searchItem < 1 || !searchItem
        ? PAGE
        : searchItem;
    const publication = publications[index - 1];

    return (
      <div className={styles.reader}>
        <Publication publication={publication} />
        <Counter items={publications} count={index} />
        <Controls
          disabledNext={index === publications.length}
          disabledBack={index === PAGE}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Reader;

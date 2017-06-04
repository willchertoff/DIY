import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';

class HomePage extends React.Component {

  static propTypes = {
  };

  render() {
    return (
      <Layout className={s.content}>
        Bess
      </Layout>
    );
  }

}

export default HomePage;

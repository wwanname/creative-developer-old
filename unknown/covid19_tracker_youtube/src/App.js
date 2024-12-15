import React from 'react'
import styles from './App.module.css'
import Cards from './Components/Cards/Cards';
import Charts from './Components/Charts/Charts';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import { fetchData } from './api';

class App extends React.Components {

  async componentDidMount() {
    const data = await fetchData();

    console.log(data);
  }

  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <Charts />
        <CountryPicker />
      </div>
    );
  }
}

export default App;

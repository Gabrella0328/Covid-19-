import React from 'react';
import { Cards, CountryPicker, Global } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';



class App extends React.Component {
  state = {
    data: {},
    dataCountry: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ dataCountry: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        
        <h1><font size = "7">Covid-19 Tracker</font><hr/></h1>
        <h2>Global</h2>
        <Global data={data} />
        <h3>Choose Country : </h3>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        {country && <h3>Country : {country}</h3>}
        {country && <Cards data={this.state.dataCountry} />}
        

      </div>
    );
  }
}
export default App;
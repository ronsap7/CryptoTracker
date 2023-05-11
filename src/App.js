

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import CoinList from './components/CoinList';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagnation';
import './App.css'

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [sortField, setSortField] = useState('market_cap');
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(10);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )
  .sort((a, b) => b[sortField] - a[sortField]);

  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = filteredCoins.slice(indexOfFirstCoin, indexOfLastCoin);  

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="app">
      <Navbar />
      <SearchBar onChange={(value) => setSearch(value)} />
      <div className="sort-container">
        <label htmlFor="sortField">Sort by  </label>
        <select id="sortField" onChange={(e) => setSortField(e.target.value)}>
          <option value="market_cap">Market Cap</option>
          <option value="current_price">Price</option>
          <option value="volume">Volume</option>
        </select>
      </div>
      <CoinList coins={currentCoins} />
      <Pagination
        coinsPerPage={coinsPerPage}
        totalCoins={filteredCoins.length}
        paginate={paginate}
      />
    </div>
  );
  
}

export default App;
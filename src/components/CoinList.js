import React from 'react';
import Coin from './Coin';

const CoinList = ({ coins }) => {
  return (
    <div>
      {coins.map(coin => (
        <Coin key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

export default CoinList;

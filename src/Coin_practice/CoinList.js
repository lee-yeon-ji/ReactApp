import {useState, useEffect} from "react";

function CoinList(){

    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
            .then((json)=> {
                setCoins(json);
                setLoading(false);
            });
    }, [])

    return(
        <div>
            <h1>The coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? <strong>Loading...</strong> :    <select>
                {/* coin은 coins array 안에 있는 각각의 coin을 의미함*/}
                {coins.map((coin, id)=> <option>{coin.name}({coin.symbol}) : ${coin.quotes.USD.price}</option> )}
            </select>}

        </div>

    );
}

export default CoinList;
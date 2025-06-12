import {useState, useEffect} from "react";

function Coin() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [usdAmount, setUsdAmount] = useState(0);

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, [])

    // BTC 가격 찾기
    const getBtcPrice = () => {
        const btcCoin = coins.find(coin => coin.symbol === "BTC");
        return btcCoin ? btcCoin.quotes.USD.price : 0;
    };

    // USD를 BTC로 변환
    const convertUsdToBtc = (usdAmount) => {
        const btcPrice = getBtcPrice();
        return btcPrice > 0 ? (usdAmount / btcPrice).toFixed(8) : 0;
    };

    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>

            {/* USD to BTC 변환기 */}
            <div>
                <h2>USD to BTC Converter</h2>
                <input
                    type="number"
                    value={usdAmount}
                    onChange={(event) => setUsdAmount(event.target.value)}
                    placeholder="Enter USD amount"
                />
                <p>
                    ${usdAmount} USD = {convertUsdToBtc(usdAmount)} BTC
                </p>
            </div>

            {loading ? <strong>Loading...</strong> :
                <select>
                    {coins.map((coin) =>
                        <option key={coin.id}>
                            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
                        </option>
                    )}
                </select>
            }
        </div>
    );
}

export default Coin;
import {useEffect, useState} from "react";


function CoinList() {

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`).then((response) => response.json())
            .then((json) =>
                setMovies(json.data.movies));
        setLoading(false);
    }, []);
    return (

        <div>{loading ? <h1>Loading...</h1> : null}


        </div>
    )

}


//
//
//     const [loading, setLoading] = useState(true);
//     const [coins, setCoins] = useState([]);
//     const [selCoins, setSelCoins] = useState("0");
//     const [result, setResult] = useState("0");
//
//
//     const onChange = (event) => {
//         setSelCoins(event.target.value);
//     }
//
//     const onSubmit = (event) => {
//         event.preventDefault();
//         const priceUSD = event.target[0].value;
//         calculate(priceUSD);
//     }
//
//     const calculate = (priceUSD) => {
//         setResult(priceUSD * selCoins);
//     }
//
//
//     useEffect(() => {
//         fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
//             .then((response) => response.json())
//             .then((json) => {
//                 setCoins(json);
//                 setLoading(false);
//             })
//     }, []); // 빈 배열이면 한번만 동작
//
//     return (
//         <div>
//             <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
//             {loading
//                 ? <strong>Loading....</strong>
//                 : <select onChange={onChange}>
//                     {coins.map((coin, index) =>
//                         <option
//                             key={index}
//                             value={coin.quotes.USD.price}
//                         >{coin.name} : {coin.quotes.USD.price}
//                         </option>
//                     )}
//                 </select>}
//             <form onSubmit={onSubmit}>
//                 <input type="number" placeholder="write us dollars" />
//                 <button>change coins</button>
//             </form>
//             <h2>you can change {result} coins!</h2>
//         </div>
//     );
// }
//


//     const [loading, setLoading] = useState(true);
//     const [coins, setCoins] = useState([]);
//     const [asset, setAsset] = useState(0);
//     const [price, setPrice] = useState(0);
//     const [name, setName] = useState("---");
//
//     const onChange = (event) => {
//         setName(event.target.selectedOptions[0].text.split(':')[0]);
//         setPrice(parseFloat(event.target.value));
//     }
//
//     const onSubmit = (event) => {
//         event.preventDefault();
//         if(asset === 0) {
//             return;
//         }
//         setAsset(0);
//         console.log("your asset has been reset!")
//     }
//
//     useEffect(()=>{
//         fetch("https://api.coinpaprika.com/v1/tickers")
//             .then(response => response.json())
//             .then((json) => {
//                 setCoins(json);
//                 setLoading(false);
//             });
//     },[]);
//
//     return (
//         <div>
//             <h1> Coins Listed: {loading? "" : coins.length + " Coins Found!"} </h1>
//             <p>database: <a href='https://api.coinpaprika.com/v1/tickers'>Coin Paprika</a></p>
//             <hr />
//             <h3>{
//                 loading ? "Loading...":
//                     <select onChange={onChange}>
//                         <option value={0.0}> --- Select Coin --- </option>
//                         {coins.map((coin) => {
//                             return(
//                                 <option
//                                     key={coin.id}
//                                     value={coin.quotes.USD.price}
//                                 >
//                                     {coin.name} ({coin.symbol}): ${coin.quotes.USD.price.toFixed(5)}
//                                 </option>
//                             );})}
//                     </select>
//             }</h3>
//
//             <h2> Chosen Coin: "{name}": ${price.toFixed(5)} </h2>
//
//             <div>
//                 <form onSubmit={onSubmit}>
//                     $ <input
//                     onChange={(event) => setAsset(event.target.value)}
//                     value={asset}
//                     type="number"
//                     placeholder='USD'
//                 />
//                     <button> Reset </button>
//                 </form>
//             </div>
//
//             <h2> With ${asset}, you can purchase: {name} --- "{asset > 0 && price !== 0 ? (asset / price).toFixed(5) : 0}" </h2>
//         </div>
//     );
// }


//
//     const [loading, setLoading] = useState(true);
//     const [coins, setCoins] = useState([]);
//     const [usd, setUsd] = useState(""); //입력한 usd 금액
//     const [btcAmount, setBtcAmount] = useState(null); //살 수 있는 비트코인 수
//
//
//     useEffect(() => {
//         fetch("https://api.coinpaprika.com/v1/tickers")
//         .then((response) => response.json())
//             .then((json)=> {
//                 setCoins(json);
//                 setLoading(false);
//             });
//     }, [])
//
//     // USD 입력값이 바뀔 때마다 비트코인 구매 가능 수량 계산
//     useEffect(() => {
//         if (!loading && usd !== "") {
//             // BTC 코인 정보 찾기
//             const btc = coins.find((coin) => coin.symbol === "BTC");
//             if (btc && btc.quotes && btc.quotes.USD && btc.quotes.USD.price) {
//                 const price = btc.quotes.USD.price;
//                 setBtcAmount((parseFloat(usd) / price).toFixed(6));
//             } else {
//                 setBtcAmount(null);
//             }
//         } else {
//             setBtcAmount(null);
//         }
//     }, [usd, coins, loading]);
//
//     return(
//         <div>
//             <h1>The coins! {loading ? "" : `(${coins.length})`}</h1>
//             <div>
//                 <input
//                     type="number"
//                     placeholder="Enter USD amount"
//                     value={usd}
//                     onChange={(e) => setUsd(e.target.value)}
//                 />
//             </div>
//             {btcAmount && (
//                 <div>
//                     <strong>
//                         {usd} USD로 살 수 있는 비트코인: {btcAmount} BTC
//                     </strong>
//                 </div>
//             )}
//
//             {loading ? <strong>Loading...</strong> :    <select>
//                 {/* coin은 coins array 안에 있는 각각의 coin을 의미함*/}
//                 {coins.map((coin, id)=> <option>{coin.name}({coin.symbol}) : ${coin.quotes.USD.price}</option> )}
//             </select>}
//
//         </div>
//
//     );
// }

export default CoinList;
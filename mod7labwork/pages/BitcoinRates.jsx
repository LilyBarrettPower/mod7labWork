
import useBitcoinPrice from "../hooks/useBitcoinPrice";
// import my custom hook
import { useEmojiContext } from "../context/EmojiContextProvider";
// import the useEmoji custom hook to access the mood and handleMood properties
import Emoji from "../components/Emoji";
// import the Emoji component to display the component from within this one 
import { useNavigate } from "react-router-dom";
//import useNavigate to be able to have a go back button


const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];


function BitcoinRates() {
    const navigate = useNavigate();
    // create a useNavigate
    const { currency, setCurrency, bitcoinPrice } = useBitcoinPrice(currencies[0]);
    // use my custom hook
    const { emoji, handleMood } = useEmojiContext();
    // use my emoji context


    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);

    return (
        <div className="BitcoinRates componentBox">
            <div>
                <button onClick={() => navigate(-1)}>Go back!</button>
                {/* create the go back button using the navigate */}
            </div>
            <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
            {bitcoinPrice !== null && ( //check that bitcoinPrice is a valid value and if it is, then render the below:
                <p>Current bitcoin price in {currency}: {bitcoinPrice} </p>
            )}
            <Emoji />
            {/* Add the Emoji component here to display the current emoji from the bitcoinRates component */}
        </div>
    );
}

export default BitcoinRates;
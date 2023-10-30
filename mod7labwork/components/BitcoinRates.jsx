
import useBitcoinPrice from "../hooks/useBitcoinPrice";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];


function BitcoinRates() {
    const { currency, setCurrency, bitcoinPrice } = useBitcoinPrice(currencies[0]);


    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);

    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
            {bitcoinPrice !== null && ( //check that bitcoinPrice is a valid value and if it is, then render the below:
                <p>Current bitcoin price in {currency}: {bitcoinPrice} </p>
            )}
        </div>
    )
}

export default BitcoinRates;
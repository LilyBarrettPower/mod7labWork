import { useState, useEffect } from "react";
// for question 2, moved all of this fetch logic into a custom hook!

function useBitcoinPrice(currencies) {
        const [currency, setCurrency] = useState(currencies[0]);
        // add a bitcoinPrice state variable to store the fetched bitcoin price
        const [bitcoinPrice, setBitcoinPrice] = useState(null);


        // using an asyncrnous function to fetch the data 
        // selectedCurrency is the parameter
        const fetchBitcoinPrice = async (selectedCurrency) => {
            try {
                // use back ticks because of the ${}
                // await = wait for the response to be resolved before moving on 
                // selectedCurrency variable used to define the currency chosen by the user 
                const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${selectedCurrency}`);
                if (response.ok) { //if the response was ok from the API fetch then:
                    const data = await response.json(); //store the response body as json in the data variable 
                    // check if the data object exists and has a property "bitcoin" and has a property selectedCurrency converted to lowercase
                    if (data && data.bitcoin && data.bitcoin[selectedCurrency.toLowerCase()]) {
                        // set the bitcoin price state with the value of the bitcoinprice for the selected currency from the fetch
                        setBitcoinPrice(data.bitcoin[selectedCurrency.toLowerCase()]);
                        // console.log for debugging (needed to convert the currency to lowercase to make the fetch work!)
                        console.log(data.bitcoin[selectedCurrency.toLowerCase()]);
                    }
                }
                // catch block to execute if any errors occur in the try block
            } catch (error) {
                console.error("Error fetching bitcoin price:", error);
            }
        };

        useEffect(() => {
            console.log("running fetch!"); //for cleanup purposes
            let ignore = false; //flag to allow the ignoring of the fetch result

            fetchBitcoinPrice(currency); // call the fetchBitcoinPrice function with the current currency state as the selected currency
            // calling the function starts the fetch

            // cleanup function:
            return () => {
                ignore = true;
                console.log("cleanup effect");
            };
            // the use effect is dependent on "currency", the fetch is executed everytime the currency state is changed by user 
        }, [currency]);
    return { currency, setCurrency, bitcoinPrice };
}

export default useBitcoinPrice;
import CurrencyInput from "./CurrencyInput";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";


function App() {
    const [amount_1, setAmount_1] = useState();
    const [amount_2, setAmount_2]= useState();
    const [currency_1, setCurrency_1] = useState('TRY');
    const [currency_2, setCurrency_2] = useState('RUB');
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_JymHehtTshpOdOuJg9zTJtPY7pw2z0WkaRm8dFA8")
        .then(response => {
            setData(response.data.data);
        })
    }, []);
    
    useEffect(() => {
        if (!data) {
            handleAmountChange_1(1);
        }
    }, [data]);

    function format(number) {
        return number.toFixed(2);
    }

    function handleAmountChange_1(amount_1) {
        setAmount_2(format(amount_1 * data[currency_2] / data[currency_1]));
        setAmount_1(amount_1);
    }

    function handleCurrencyChange_1(currency_1) {
        setAmount_2(format(amount_1 * data[currency_2] / data[currency_1]));
        setCurrency_1(currency_1);
    }

    function handleAmountChange_2(amount_2) {
        setAmount_1(format(amount_2 * data[currency_1] / data[currency_2]));
        setAmount_2(amount_2);
    }

    function handleCurrencyChange_2(currency_2) {
        setAmount_1(format(amount_2 * data[currency_1] / data[currency_2]));
        setCurrency_2(currency_2);
    }

    return (
    <>
        <CurrencyInput
        onAmountChange={handleAmountChange_1} 
        onCurrencyChange={handleCurrencyChange_1}
        currencies={Object.keys(data)} 
        amount={amount_1} 
        currency={currency_1} />

        <CurrencyInput 
        onAmountChange={handleAmountChange_2}
        onCurrencyChange={handleCurrencyChange_2}
        currencies={Object.keys(data)} 
        amount={amount_2} 
        currency={currency_2} />
    </>
    );
}

export default App;
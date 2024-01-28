import PropTypes from "prop-types";

function CurrencyInput(props) {
    return(
        <div className="col-md-6 mb-3">
            <div className="select">
                <select class="mb-2" value={props.currency} onChange={event => props.onCurrencyChange(event.target.value)}>
                    {props.currencies.map((currency => (
                        <option value={currency}>{currency}</option>
                    )))}   
                </select>
            </div>
            <input type="text" className="form-control" value={props.amount} onChange={event => props.onAmountChange(event.target.value)} placeholder="Введите значение..."/>
        </div>
    );
}

CurrencyInput.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func,
};

export default CurrencyInput;
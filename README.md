# A simple currency converter on ReactJS

## Overview

The Currency Converter is a web application built with ReactJS that allows users to convert between different currencies. It fetches real-time exchange rate data from the Free Currency API and provides a user-friendly interface for entering amounts and selecting currencies.

## Features

1. **Real-Time Exchange Rates:**
   - Utilizes the Free Currency API to fetch the latest exchange rate data.
   - Provides up-to-date exchange rates for a variety of currencies.

2. **Dual Conversion:**
   - Allows users to convert from one currency to another with two input fields for simultaneous dual conversion.

3. **User Input Handling:**
   - Users can input values in one currency, and the equivalent value in the other currency is updated in real-time.
   - Input fields support dynamic updates as users type.

4. **Currency Selection:**
   - Users can select currencies from a dropdown list for both input fields.
   - The application dynamically updates the converted amount based on the selected currencies.

## Dependencies

- ReactJS
- Axios for API requests

## Project Structure

The main components of the project include:

- **App.js:** The main component managing the application's logic and layout.
- **CurrencyInput.js:** A reusable component for rendering currency input fields.

## API Integration

The application uses the [Free Currency API](https://freecurrencyapi.com/) to fetch the latest exchange rate data. The API key is included in the request URL.

## Usage

1. **Input Fields:**
   - Enter the amount you want to convert in one of the input fields.

2. **Currency Selection:**
   - Use the dropdown menu to select the currencies for both input fields.

3. **Conversion Results:**
   - The equivalent amount in the second currency is dynamically updated as you type or change the selected currencies.

4. **Dual Conversion:**
   - The application supports dual conversion, allowing users to convert from one currency to another simultaneously.

## How do I start using it?
Git commad for downloading a project:
```bash
git clone "https://github.com/Fonerge/Value_Currency.git"
```
The command to start the project:
```
cd .\Value_Currency\
npm start
```
After this procedure, you should have a local server running on port 3000
(http://localhost:3000/)
## Warning!
1. Don't forget to install [NodeJS](https://nodejs.org/en) on your computer.
2. The API may not work due to the expiration of the access key.
   
The access key can be obtained by registering on [freecurrencyapi.com](https://freecurrencyapi.com/).
Then open the (App.js) file and paste the key into the link as shown below:
```javascript
useEffect(() => {
    axios.get("https://api.freecurrencyapi.com/v1/latest?apikey=YOUR_API_KEY")
    .then(response => {
        setData(response.data.data);
  })
}, []);
```

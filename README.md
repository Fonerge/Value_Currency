# A simple currency converter on ReactJS
Use this currency converter created on ReactJS for your own purposes. 

The currency converter uses the open API of the service [freecurrencyapi.com](https://freecurrencyapi.com/) 

The converter works flexibly, it is possible to enter values in different input fields. It's simple!

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

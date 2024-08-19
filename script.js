console.log("Welcome to Currency Converter!");
console.log("1 USD equals 1 USD");
console.log("1 USD equals 113.5 JPY");
console.log("1 USD equals 0.89 EUR");
console.log("1 USD equals 74.36 RUB");
console.log("1 USD equals 0.75 GBP");

const USD = 1;
const JPY = 113.5;
const EUR = 0.89;
const RUB = 74.36;
const GBP = 0.75;
const validCurrencies = ["USD", "JPY", "EUR", "RUB", "GBP"];

function convertCurrency(fromCurrency, toCurrency, amount) {
    let conversionRate = 1;
    
    if (fromCurrency === toCurrency) {
        return amount; // No conversion needed if currencies are the same
    }
    
    switch (fromCurrency) {
        case "USD":
            switch (toCurrency) {
                case "JPY":
                    conversionRate = JPY;
                    break;
                case "EUR":
                    conversionRate = EUR;
                    break;
                case "RUB":
                    conversionRate = RUB;
                    break;
                case "GBP":
                    conversionRate = GBP;
                    break;
                default:
                    return null;
            }
            break;
        case "JPY":
            switch (toCurrency) {
                case "USD":
                    conversionRate = 1 / JPY;
                    break;
                case "EUR":
                    conversionRate = 1 / JPY * EUR;
                    break;
                case "RUB":
                    conversionRate = 1 / JPY * RUB;
                    break;
                case "GBP":
                    conversionRate = 1 / JPY * GBP;
                    break;
                default:
                    return null;
            }
            break;
        case "EUR":
            switch (toCurrency) {
                case "USD":
                    conversionRate = 1 / EUR;
                    break;
                case "JPY":
                    conversionRate = 1 / EUR * JPY;
                    break;
                case "RUB":
                    conversionRate = 1 / EUR * RUB;
                    break;
                case "GBP":
                    conversionRate = 1 / EUR * GBP;
                    break;
                default:
                    return null;
            }
            break;
        case "RUB":
            switch (toCurrency) {
                case "USD":
                    conversionRate = 1 / RUB;
                    break;
                case "JPY":
                    conversionRate = 1 / RUB * JPY;
                    break;
                case "EUR":
                    conversionRate = 1 / RUB * EUR;
                    break;
                case "GBP":
                    conversionRate = 1 / RUB * GBP;
                    break;
                default:
                    return null;
            }
            break;
        case "GBP":
            switch (toCurrency) {
                case "USD":
                    conversionRate = 1 / GBP;
                    break;
                case "JPY":
                    conversionRate = 1 / GBP * JPY;
                    break;
                case "EUR":
                    conversionRate = 1 / GBP * EUR;
                    break;
                case "RUB":
                    conversionRate = 1 / GBP * RUB;
                    break;
                default:
                    return null;
            }
            break;
        default:
            return null;
    }
    
    return amount * conversionRate;
}

// Main program loop
while (true) {
    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program");

    let userChoice = prompt("> ");

    if (userChoice === "1") {
        console.log("What do you want to convert?");
        
        let fromCurrency = prompt("From: ").toUpperCase();
        if (!validCurrencies.includes(fromCurrency)) {
            console.log("Unknown currency");
            continue; // Go back to the beginning of the loop
        }
        
        let toCurrency = prompt("To: ").toUpperCase();
        if (!validCurrencies.includes(toCurrency)) {
            console.log("Unknown currency");
            continue; // Go back to the beginning of the loop
        }
        
        let amount = parseFloat(prompt("Amount: "));
        if (isNaN(amount) || amount < 1) {
            if (isNaN(amount)) {
                console.log("The amount has to be a number.");
            } else {
                console.log("The amount cannot be less than 1.");
            }
            continue; // Go back to the beginning of the loop
        }
        
        let convertedAmount = convertCurrency(fromCurrency, toCurrency, amount);
        if (convertedAmount === null) {
            console.log("Conversion failed. Please check the currencies.");
        } else {
            console.log("Result: " + amount + " " + fromCurrency + " equals " + convertedAmount.toFixed(4) + " " + toCurrency);
        }
        
    } else if (userChoice === "2") {
        console.log("Have a nice day!");
        break; // Exit the loop and end the program
    } else {
        console.log("Unknown input");
    }
}

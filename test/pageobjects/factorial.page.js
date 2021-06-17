const { BROWSER } = require('ua-parser-js');
const Page = require('./page');

class FactorialPage extends Page {
    /**
     * define selectors using getter methods
     */
    get factorialPageHeader () { return $('div>h1') }
    get numberInputField () { return $('input#number ') }
    get calculateButton () { return $('button[type="submit"]') }
    get result () { return $('p#resultDiv')}

    async calculateForFactorial (numberInput) {
        await (await this.numberInputField).setValue(numberInput);
        await (await this.calculateButton).click();
    }

    open () {
        return super.open();
    }
}

module.exports = new FactorialPage();
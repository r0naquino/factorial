const FactorialPage = require('../pageobjects/factorial.page');

describe('Factorial Calculator', () => {
    it('should open the factorial calculator page', async () => {
        await FactorialPage.open();
        await expect(FactorialPage.factorialPageHeader).toHaveText(
            'The greatest factorial calculator!');
    });

    it('should return an error for non-integer input', async () => {
        await FactorialPage.open();
        await FactorialPage.calculateForFactorial("abc");
        await expect(FactorialPage.result).toHaveText(
            'Please enter an integer');
    });

    it('should return correct factorial for valid integer', async () => {
        await FactorialPage.open();
        await FactorialPage.calculateForFactorial(2);
        await expect(FactorialPage.result).toHaveText(
            'The factorial of 2 is: 2');
    });

});
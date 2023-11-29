const { Builder, By, until } = require('selenium-webdriver');

// Create a new WebDriver instance for the Chrome browser
const driver = new Builder().forBrowser('chrome').build();

// Set implicit wait timeout to 10 seconds
driver.manage().setTimeouts({ implicit: 10000 });

class BasePage {
    constructor() {
        // Make the WebDriver instance global for accessibility
        global.driver = driver;
    }

    /**
     * Navigate to the specified URL.
     * @param {string} url - The URL to navigate to.
     */
    async goToUrl(url) {
        await driver.get(url);
    }

    /**
     * Wait until the specified element is present in the DOM.
     * @param {By} locator - The locator strategy for the element.
     */
    async waitUntilElementPresent(locator) {
        await driver.wait(until.elementLocated(locator), 5000);
    }

    /**
     * Close the browser.
     */
    async closeBrowser() {
        await driver.quit();
    }
}

// Export the BasePage class for reuse
module.exports = BasePage;

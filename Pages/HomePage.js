const { By } = require('selenium-webdriver');
const BasePage = require('./BasePage');

/**
 * Represents the HomePage class, extending the BasePage.
 * This class provides methods to interact with the eBay homepage.
 */
class HomePage extends BasePage {
    /**
     * Constructs a new instance of the HomePage class.
     */
    constructor() {
        super();
        this.driver = driver;
        this.homePageUrl = 'https://www.ebay.com';

        // Define locators
        this.categoryDropdownLocator = By.xpath("//button[contains(text(),'Shop by category')]");
    }

    /**
     * Navigate to the specified URL or the default homepage URL.
     * @param {string} [url=this.homePageUrl] - The URL to navigate to.
     */
    async goTo(url = this.homePageUrl) {
        await this.goToUrl(url);
    }

    /**
     * Navigate to a specific category using the category dropdown.
     * @param {string} category - The name of the category to navigate to.
     */
    async navigateToCategory(category) {
        // Click the category dropdown button
        await this.driver.findElement(this.categoryDropdownLocator).click();
        await this.driver.findElement(By.linkText(category));
    }
}

module.exports = HomePage;

const { By, until } = require('selenium-webdriver');
const BasePage = require('./BasePage');

class SearchFilterOverlay extends BasePage {

    constructor() {
        super();
        this.driver = driver;

        // Define locators
        this.overlayBodyLocator = By.className("x-overlay__body");
        this.filterLabelLocator = (filter) => By.xpath(`//span[@class='x-overlay-aspect__label'][text()='${filter}']`);
        this.minPriceInputLocator = By.className("x-textrange__input--from");
        this.maxPriceInputLocator = By.className("x-textrange__input--to");
        this.applyFilterButtonLocator = By.className("x-overlay-footer__apply-btn");
        this.checkboxLabelLocator = (field) => By.xpath(`//span[contains(@class, 'cbx')][text()='${field}']`);
        this.radioInputLocator = (field) => By.css(`input[value='${field}']`);
    }

    /**
     * Select a filter.
     * @param {string} filter - The filter to be selected.
     */
    async selectFilter(filter) {
        await this.driver.findElement(this.filterLabelLocator(filter)).click();
    }

    /**
     * Apply selected filters.
     */
    async applyFilters() {
        await this.driver.findElement(this.applyFilterButtonLocator).click();
    }

    /**
     * Select a checkbox.
     * @param {string} field - The checkbox to be selected.
     */
    async selectCheckbox(field) {
        await this.driver.wait(until.elementLocated(this.checkboxLabelLocator(field)), 5000);
        await this.driver.findElement(this.checkboxLabelLocator(field)).click();
    }

    /**
     * Select a radio button.
     * @param {string} field - The radio button to be selected.
     */
    async selectRadio(field) {
        await this.driver.wait(until.elementLocated(this.radioInputLocator(field)), 5000);
        await this.driver.findElement(this.radioInputLocator(field)).click();
    }

    /**
     * Set the price range.
     * @param {number} minPrice - The minimum price.
     * @param {number} maxPrice - The maximum price.
     */
    async setPriceRange(minPrice = 0, maxPrice = 100) {
        await this.driver.wait(until.elementLocated(this.minPriceInputLocator), 5000);
        await this.driver.findElement(this.minPriceInputLocator).sendKeys(minPrice);
        await this.driver.findElement(this.maxPriceInputLocator).sendKeys(maxPrice);
    }
}

module.exports = SearchFilterOverlay;

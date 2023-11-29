const { By } = require('selenium-webdriver');
const BasePage = require('./BasePage');

class CategoryPage extends BasePage {
    constructor() {
        super();
        this.driver = driver;

        // Locators for elements on the Category Page
        this.allFiltersButtonLocator = By.xpath("//button[contains(text(),'All Filters')]");
        this.filterDropdownLocator = By.className("brm__item--applied");
        this.appliedFilterTagsLocator = By.className("brm__aspect-item--applied");
    }

    /**
     * Selects a subcategory on the Category Page.
     * @param {string} subCategory - The subcategory to be selected.
     */
    async selectSubCategory(subCategory) {
        await this.driver.findElement(By.linkText(subCategory)).click();
    }

    /**
     * Opens the overlay with all filters.
     */
    async openAllFiltersOverlay() {
        await this.driver.findElement(this.allFiltersButtonLocator).click();
    }

    /**
     * Opens the list of applied filters.
     */
    async openAppliedFilterList() {
        await this.waitUntilElementPresent(this.filterDropdownLocator);
        await this.driver.findElement(this.filterDropdownLocator).click();
    }

    /**
     * Gets the text of applied filter tags.
     * @returns {Array} - An array containing the text of applied filter tags.
     */
    async getAppliedFilterTags() {
        const filterTags = await this.driver.findElements(this.appliedFilterTagsLocator);
        let actualFilterTextList = await Promise.all(filterTags.map(item => item.getText()));
        actualFilterTextList = await Promise.all(actualFilterTextList.map(item => item.replace('\nfilter applied', '')));
        return actualFilterTextList;
    }
}

module.exports = CategoryPage;

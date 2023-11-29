const { By } = require('selenium-webdriver');
const BasePage = require('./BasePage');

class SearchResultsPage extends BasePage {
  /**
   * Initializes the SearchResultsPage class.
   */
  constructor() {
    super();
    this.driver = driver;

    // Define locators
    this.searchButtonLocator = By.css('input[type="submit"]');
    this.searchBoxLocator = By.css('input[type="text"]');
    this.allFiltersButtonLocator = By.xpath("//button[contains(text(),'All Filters')]");
    this.categoryDropdownLocator = By.css('select[id="gh-cat"]');
    this.categoryItemLocator = (categoryValue) => By.xpath(`//option[contains(text(),'${categoryValue}')]`);
    this.resultItemsLocator = By.xpath('//ul//li[@class="s-item s-item__pl-on-bottom"]');
  }

  /**
   * Change the search category.
   * @param {string} categoryValue - The value of the category to select.
   */
  async changeSearchCategory(categoryValue) {
    await this.driver.findElement(this.categoryDropdownLocator).click();
    await this.driver.findElement(this.categoryItemLocator(categoryValue)).click();
  }

  /**
   * Type input into the search box.
   * @param {string} input - The input to type into the search box.
   */
  async typeInSearchBox(input) {
    await this.driver.findElement(this.searchBoxLocator).sendKeys(input);
  }

  /**
   * Click the search button.
   */
  async clickSearchButton() {
    await this.driver.findElement(this.searchButtonLocator).click();
  }

  /**
   * Wait for search results to be present on the page.
   */
  async waitForSearchResults() {
    await this.waitUntilElementPresent(this.resultItemsLocator);
  }

  /**
   * Get the text of the first result.
   * @returns {Promise<string>} - The text of the first search result.
   */
  async getFirstResultText() {
    const firstResultText = await this.driver.findElement(this.resultItemsLocator).getText();
    return firstResultText;
  }
}

module.exports = SearchResultsPage;

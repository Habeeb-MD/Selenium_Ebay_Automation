const { By } = require('selenium-webdriver');
const HomePage = require('../Pages/HomePage');
const CategoryPage = require('../Pages/CategoryPage');
const SearchPage = require('../Pages/SearchResultsPage');
const FilterOverlay = require('../Pages/Overlay');
const assert = require('assert');

describe('Ebay Test Suite', function () {
    this.timeout(50000);

    // Common locator for overlay body
    const overlayBodyLocator = By.className("x-overlay__body");

    // Instantiate page objects
    const homePage = new HomePage();
    const categoryPage = new CategoryPage();
    const searchPage = new SearchPage();
    const filterOverlay = new FilterOverlay();

    // Test data for Scenario 1
    const minPrice = 100;
    const maxPrice = 500;
    const conditionFilter = 'New';
    const itemLocationFilter = 'North America';
    const expectedFilterTags = [
        `Condition: ${conditionFilter}`,
        `Price: \$${minPrice.toFixed(2)} to \$${maxPrice.toFixed(2)}`,
        `Item Location: ${itemLocationFilter}`
    ];

    // Test data for Scenario 2
    const searchedItem = 'MacBook';

    // Setup for each test
    beforeEach(async function () {
        await homePage.goTo();
    });

    /**
     * Scenario 1: Access a Product via category after applying multiple filters
     */
    it('Scenario 1: Access a Product via category after applying multiple filters', async function () {
        await homePage.navigateToCategory('Electronics');
        await categoryPage.selectSubCategory('Cell phones & accessories');
        await categoryPage.selectSubCategory('Cell Phones & Smartphones');
        await categoryPage.openAllFiltersOverlay();

        // Wait for the overlay to be present in the DOM
        await homePage.waitUntilElementPresent(overlayBodyLocator);

        await filterOverlay.selectFilter('Price');
        await filterOverlay.setPriceRange(minPrice, maxPrice);

        await filterOverlay.selectFilter('Condition');
        await filterOverlay.selectCheckbox(conditionFilter);

        await filterOverlay.selectFilter('Item Location');
        await filterOverlay.selectRadio(itemLocationFilter);

        await filterOverlay.applyFilters();

        await categoryPage.openAppliedFilterList();

        const appliedFilterTags = await categoryPage.getAppliedFilterTags();

        // Assertion for Scenario 1
        assert.deepEqual(appliedFilterTags, expectedFilterTags);
    });

    /**
     * Scenario 2: Access a Product via Search
     */
    it('Scenario 2: Access a Product via Search', async function () {
        await searchPage.typeInSearchBox(searchedItem);
        await searchPage.changeSearchCategory('Computers/Tablets & Networking');
        await searchPage.clickSearchButton();
        await searchPage.waitForSearchResults();

        // Check if the first result matches the searched item
        const firstResultMatch = (await searchPage.getFirstResultText()).toLowerCase();
        firstResultMatch.includes(searchedItem.toLowerCase()) || assert.fail(`${firstResultMatch} does not contain ${searchedItem.toLowerCase()}`);
    });

    // Teardown after all tests
    after(async function () {
        await homePage.closeBrowser();
    });
});

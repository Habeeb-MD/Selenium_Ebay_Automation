# Selenium Testing Project for eBay.com

This repository contains a Selenium testing project using JavaScript and Mocha for automating scenarios on eBay.com. The project is structured using the Page Object Model (POM) design pattern to enhance code modularity and maintainability.

## Project Structure

- **`tests`**: Contains Mocha test files for each scenario.
- **`Pages`**: Includes Page Object classes for different pages on eBay.

## Setup Instructions

- **`npm install`**
- **`npm test`** 

# Test Scenarios

## Scenario 1: Access a Product via Category after Applying Multiple Filters

- Go to ebay.com
- Navigate to Search by category > Electronics > Cell Phones & accessories
- Click Cell Phones & Smartphones in the left-hand side navigation section.
- Click All Filters (appears at the end of the filter drop downs)
- Add 3 filters - Condition, Price, and Item location appearing in the pop-up and click apply.
- Verify that the filter tags are applied.

## Scenario 2: Access a Product via Search

- Go to ebay.com
- Type any search string in the search bar. For example: MacBook.
- Change the Search category. For example: Computers/Tablets & Networking and click Search.
- Verify that the page loads completely.
- Verify that the first result name matches with the search string.

# Implementation Details

- The project uses Selenium WebDriver for browser automation.
- Page Object Model (POM) is implemented for better code organization.
- Mocha is used as the test framework for executing test scripts.

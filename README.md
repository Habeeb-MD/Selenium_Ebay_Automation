# Selenium Testing Project for eBay.com

This repository contains a Selenium testing project using JavaScript and Mocha for automating scenarios on eBay.com. The project is structured using the Page Object Model (POM) design pattern to enhance code modularity and maintainability.

## Project Structure

- **`tests`**: Contains Mocha test files for each scenario.
- **`Pages`**: Includes Page Object classes for different pages on eBay.

## Setup Instructions

- To install all the dependencies
    - **`npm install`**
- To run the test cases
    - **`npm test`** 

# Test Scenarios

## Scenario 1: Access a Product via Category after Applying Multiple Filters

- Go to ebay.com
- Navigate to Search by category > Electronics > Cell Phones & accessories
- Click Cell Phones & Smartphones in the left-hand side navigation section.
- Click All Filters (appears at the end of the filter drop downs)
- Add 3 filters - Condition, Price, and Item location appearing in the pop-up and click apply.
    - set condition = 'New';
    - set itemLocation = 'North America';
    - set Price = [100,500]
- Afterward, I verified the presence of the above filter tags.

## Scenario 2: Access a Product via Search

- Go to ebay.com
- Type any search string in the search bar. For example: MacBook.
- Change the Search category. For example: Computers/Tablets & Networking and click Search.
- Verify that the page loads completely.
- Subsequently, I verified the search results by confirming that the first item in the search list contains the term 'MacBook.' I did not examine the entire list as this is a sample test case.

# Implementation Details

- The project uses Selenium WebDriver for browser automation.
- Page Object Model (POM) is implemented for better code organization.
- Mocha is used as the test framework for executing test scripts.

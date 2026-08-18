import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given("I am on the login page", async function () {
  // Add step action
await this.page.goto('https://dailyworkreport.com');
  console.log("I am on the login page");
});

When("I enter valid username", async function (dataTable) {
  // Add step action
  console.log("I am entering valid username page");
});

Then("the user logged in successfully and redirected to the home page", async function () {
  // Add step action
  console.log("User logged in successfully and redirected to the home page");
});
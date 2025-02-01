import {expect} from "@playwright/test";

class BasePage {
    constructor(page) {
        this.page = page;
    }
    async openUrl(url){
        return await this.page.goto(url)
    }
    async selectRandomValueFromArray(array) {
        // Ensure the array is not empty to avoid errors
        if (array.length === 0) {
            throw new Error("Array is empty");
        }

        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }
     async waitForPageLoad()
     {
         await this.page.waitForLoadState('load'); // Wait for the "load" state
         await this.page.waitForLoadState('networkidle'); // Ensure network activity is idle
         //await this.page.waitForSelector('body'); // Wait for the body element to be available
     }
     async waitAndClick(selector) {
         await this.page.locator(selector).waitFor();
         return await this.page.click(selector)

     }
     async getElementText(selector) {
         const locatorText = await this.page.locator(selector).textContent()
         return  locatorText
     }
    async getInnerText(selector) {
        const locatorText = await this.page.locator(selector).allInnerTexts()
        return  locatorText
    }
    async waitAndFill(selector, text) {
        return await this.page.fill(selector, text)
    }
    async getByRoleTypeAndClick(selector, text) {
          await this.page.getByRole(selector, text).click()
    }
}
export default BasePage
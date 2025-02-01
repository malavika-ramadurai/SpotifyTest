
import BasePage from "./basePage";
import {login, logInBtn, password, title, userName,webPlayerLoginTxt} from "../page_objects/LogIn";
//import {loginTitle} from "../config";
import {username_Login, password_Login } from "../data/users.json"
import {expect} from "@playwright/test";

export class LoginPage extends BasePage {
    constructor(page) {
        super(page); // Call BasePage constructor
        this.page=page;
        this.libraryText = "text=Your Library";
        //this.commonFunctions = new CommonFunctions(); // Create an instance of CommonFunctions
    }
    async openApp(url){
        await super.openUrl(url);
        await super.waitForPageLoad();
    }
async login(loginTitle){

    await this.waitAndClick(logInBtn)
    const loginTitleName = await super.getElementText(title)
    expect (loginTitleName).toBe(loginTitle);
    await super.waitAndFill (userName,username_Login)
    await super.waitAndFill (password,password_Login)
    await this.waitAndClick(logInBtn)
    await this.page.locator("text = Your Library").waitFor();
    }

}
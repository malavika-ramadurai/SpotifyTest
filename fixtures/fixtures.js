import { test as fixture } from '@playwright/test'
import {LoginPage} from '../pages/loginPage'
import {DashBoardPage} from "../pages/DashBoardPage";
import {playlistPage} from "../pages/playlistPage"


const test = fixture.extend({
    loginPage: async({page},use) =>{
        await use (new LoginPage(page))
    },
    dashboardPage: async({page},use)=>{
        await use (new DashBoardPage(page))
    },
    playlistPage: async({page},use) =>{
        await use (new playlistPage(page))
    }
})
export default test

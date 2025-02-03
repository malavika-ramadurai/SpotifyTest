/*Login and delete a song from playlist*/
import test from '../fixtures/fixtures'
import {baseurl, loginTitle} from "../config";

test.describe.parallel.only('launch spotify and create playlist', ()=>{
    test('launch and login', async({
                                       loginPage,
                                       playlistPage
                                   })=> {
        await test.step('launchapp and login', async () => {
            await loginPage.openApp(baseurl);
            await loginPage.login(loginTitle);
        })
        await test.step('choose a playlist and delete a song', async () => {
            await playlistPage.deleteSong();

        })
    })
    })

/*Login to spotify add playlists and add songs to the playlist
Play a randon song from the playlist
 */
import test from '../fixtures/fixtures'
import {baseurl, loginTitle} from "../config";

test.describe.parallel('launch spotify and create playlist', ()=>{
    test('launch and login', async({
                                       loginPage,
                                       dashboardPage,
                                       playlistPage
    })=>{
        await test.step('launchapp and login',async()=>{
            await loginPage.openApp(baseurl);
            await loginPage.login(loginTitle);
        })
        await test.step('create playlist', async()=>{
             await dashboardPage.createPlaylists()
           // await dashboardPage.renamePlaylist()
        })
        await test.step('search and add songs to the playlist', async()=>{

            await dashboardPage.searchASongAndAdd()
            //await dashboardPage.addSongToPlaylist()

        })
        await test.step('select the playlist and play the song', async()=>{
            await playlistPage.openPlayListAndPlayASong()

        });

    });
    test.afterEach(async ({ dashboardPage }) => {
        await test.step('logout from the application', async () => {
            await dashboardPage.logout(); // Assuming you have a logout method in `dashboardPage`
        });
    });
});

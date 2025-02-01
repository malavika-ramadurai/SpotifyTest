/* end to end flow. Add items in basket and checkout */
import test from '../fixtures/fixtures'
import { expect } from '@playwright/test'
import fs from 'fs'
import {baseurl, loginTitle,playlists} from "../config";

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
            await playlistPage.openPlayList("Remember the time")

        })

    }
)
})
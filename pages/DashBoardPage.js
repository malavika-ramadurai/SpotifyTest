import BasePage from "./basePage";
import {addToPlaylist, createPlaylist, libraryPlaylist, moreOptions, searchText} from "../page_objects/dashBoard";
import {playlists} from "../config";

export class DashBoardPage extends BasePage{
    uniqueNames;
    constructor(page) {
        super(page);
        this.page=page;
        this.uniqueNames = [...new Set(playlists.map(playlist => playlist.name))];
    }
    async createPlaylists(playlists) {
        console.log(playlists)
       // const uniqueNames = [...new Set(playlists.map(playlist => playlist.name))];

        for (const playlistName of this.uniqueNames)
        {console.log(playlistName)
       await super.waitAndClick(createPlaylist)
        await this.page.pause()
        await this.page.getByRole('menuitem', {name: 'Create a new playlist'}).click();
        await this.renamePlaylist(playlistName)
    }
    }
    async renamePlaylist(playlist) {
        await this.page.pause()
        await this.page.locator(libraryPlaylist).nth(0).dispatchEvent('contextmenu') //right-click using native code
       // await this.page.locator(libraryPlaylist).first().click({button: 'right'});
        await this.page.getByRole('menuitem', { name: 'Edit details' }).click();
        await this.page.getByTestId('playlist-edit-details-name-input').fill(playlist);
        await this.page.getByTestId('playlist-edit-details-save-button').click();

    }

    async searchASongAndAdd(playlists){
        console.log(playlists)
        // for each song in the list select the folder name and search and add song
        for(const song of playlists )
        {
            console.log(playlists.name)
            console.log(playlists.song)
            await this.page.locator(libraryPlaylist).filter({hasText: playlists.name}).click
            await this.page.getByPlaceholder("Search for songs or episodes").fill(playlists.song)
            await this.page.getByRole('row', { name: playlists.song}).getByTestId('add-to-playlist-button').first().click()

        }
        // await this.page.locator(libraryPlaylist).filter({hasText: "MJ"}).click
        // await this.page.getByPlaceholder("Search for songs or episodes").fill(nameOfSong)


    }

    async addSongToPlaylist(){

        await this.page.getByRole('button', { name: /MJ/ }).first().click();
        await this.page.getByRole('row', { name: /Remember the Time/}).getByTestId('add-to-playlist-button').first().click()


    }


//     const songs = playlists.filter(playlist => playlist.name === name).map(playlist => playlist.song);
//     for (const song of songs) {
//     await playlistManager.addSongToPlaylist(playlistId, song);
// }

}

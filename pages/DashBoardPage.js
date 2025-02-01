import BasePage from "./basePage";
import { createPlaylist, libraryPlaylist} from "../page_objects/dashBoard";
import {playlists} from "../config";

export class DashBoardPage extends BasePage {
    uniqueNames;

    constructor(page) {
        super(page);
        this.page = page;
        this.uniqueNames = [...new Set(playlists.map(playlist => playlist.name))];
    }

    async createPlaylists() {

        for (const playlistName of this.uniqueNames) {
            console.log(playlistName)
            await super.waitAndClick(createPlaylist)
            await this.page.getByRole('menuitem', {name: 'Create a new playlist'}).click();
            await this.renamePlaylist(playlistName)
        }
    }

    async renamePlaylist(playlist) {
        await this.page.locator(libraryPlaylist).nth(0).waitFor()
        await this.page.locator(libraryPlaylist).nth(0).dispatchEvent('contextmenu') //right-click using native code
        // await this.page.locator(libraryPlaylist).first().click({button: 'right'});
        await this.page.getByRole('menuitem', {name: 'Edit details'}).click();
        await this.page.getByTestId('playlist-edit-details-name-input').fill(playlist);
        await this.page.getByTestId('playlist-edit-details-save-button').click();

    }

    async searchASongAndAdd() {

        // for each song in the list select the folder name and search and add song
        for (const playlist of playlists) {
            console.log(playlist.name)
            await this.page.locator(libraryPlaylist).filter({hasText: playlist.name}).click({force: true});
            await this.page.getByPlaceholder("Search for songs or episodes").fill(playlist.song)
            await this.page.getByRole('row', {
                name: playlist.song,
                exact: true
            }).getByTestId('add-to-playlist-button').first().click()

        }


    }

}

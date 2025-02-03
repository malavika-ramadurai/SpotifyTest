import BasePage from "./basePage";
import {createPlaylist, libraryPlaylist} from "../page_objects/dashBoard";
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
            await super.waitAndClick(createPlaylist)
            await this.page.getByRole('menuitem', {name: 'Create a new playlist'}).click();
            await this.renamePlaylist(playlistName)
        }
    }

    async renamePlaylist(playlist) {
        await this.page.waitForTimeout(5000);
        await this.page.locator(libraryPlaylist).nth(0).dispatchEvent('contextmenu') ;

        // await this.page.locator(libraryPlaylist).first().click({button: 'right'});
        await this.page.getByRole('menuitem', {name: 'Edit details'}).click();
        await this.page.getByTestId('playlist-edit-details-name-input').waitFor({ state: 'visible' })
        await this.page.getByTestId('playlist-edit-details-name-input').fill(playlist);
        await this.page.getByTestId('playlist-edit-details-save-button').waitFor({ state: 'visible' })
        await this.page.getByTestId('playlist-edit-details-save-button').click();

    }

    async searchASongAndAdd() {

        // for each song in the list select the folder name and search and add song
        for (const playlist of playlists) {
            await this.page.waitForTimeout(3000);
            await this.page.locator(libraryPlaylist).filter({hasText: playlist.name}).first().click({force: true});
            await this.page.getByPlaceholder("Search for songs or episodes").fill(playlist.song)
            await this.page.waitForTimeout(3000);
            await this.page.getByRole('row', { name: playlist.song}).getByTestId('add-to-playlist-button').first().click({force: true});

        }


    }
    async logout(){
        await this.page.waitForTimeout(3000);
        await this.page.getByTestId('user-widget-link').click({force: true});
        await this.page.getByRole('menuitem', {name: 'Log out'}).click();
    }

}

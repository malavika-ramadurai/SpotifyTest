import basePage from "../pages/basePage";
import {libraryPlaylist} from "../page_objects/dashBoard";
import {playlists} from "../config"
import {trackList} from "../page_objects/playlist";

export class playlistPage extends basePage {
    constructor(page) {
        super(page);
        this.page = page
    }

    async openPlayListAndPlayASong() {
        const randomSong = await super.randomEntryFromArray(playlists)
        await this.page.locator(libraryPlaylist).filter({hasText: randomSong.name}).first().click({force: true});
        await this.page.waitForTimeout(3000);
        await this.page.getByTestId('playlist-tracklist').getByRole('button', {name: `Play ${randomSong.song}} by`}).isVisible();
    }

    async deleteSong() {
        const randomSong = await super.randomEntryFromArray(playlists)
        await this.page.locator(libraryPlaylist).filter({hasText: randomSong.name}).first().click({force: true});
        await this.page.waitForTimeout(3000);
        await this.page.locator(trackList).locator("[aria-colindex='2']").getByText(randomSong.song).first().click({
            button: 'right',
            force: true
        });
        await this.page.getByRole('menuitem', {name: 'Remove from this playlist'}).click();

    }

}
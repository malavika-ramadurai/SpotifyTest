import basePage from "../pages/basePage";
import {libraryPlaylist} from "../page_objects/dashBoard";
import {playlists} from "../config"
export class playlistPage extends basePage{
    constructor(page) {
        super(page);
        this.page=page
    }
    async openPlayListAndPlayASong(){
        const randomSong = playlists[Math.floor(Math.random() * playlists.length)];
        await this.page.locator(libraryPlaylist).filter({hasText: randomSong.name}).first().click({force: true});
        await this.page.waitForTimeout(3000);
        await this.page.getByTestId('playlist-tracklist').getByRole('button', { name: `Play ${randomSong.song}} by` }).isVisible();
    }

}
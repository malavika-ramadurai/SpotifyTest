import basePage from "../pages/basePage";
import {libraryPlaylist} from "../page_objects/dashBoard";
import {playlists} from "../config"
export class playlistPage extends basePage{
    constructor(page) {
        super(page);
        this.page=page
    }
    async openPlayListAndPlayASong(){
        //const randomSong = playlists[Math.floor(Math.random() * playlists.length)];
        const randomSong =await super.randomEntryFromArray(playlists)
        await this.page.locator(libraryPlaylist).filter({hasText: randomSong.name}).first().click({force: true});
        await this.page.waitForTimeout(3000);
        await this.page.getByTestId('playlist-tracklist').getByRole('button', { name: `Play ${randomSong.song}} by` }).isVisible();
    }
    async deleteSong()
    {
        const randomSong =await super.randomEntryFromArray(playlists)
        await this.page.locator(libraryPlaylist).filter({hasText: randomSong.name}).first().click({force: true});
        await this.page.waitForTimeout(3000);
        await this.page.pause();
        //await this.page.getByTestId('playlist-tracklist').getByRole('button', { name: `Play ${randomSong.song}} by` }).dispatchEvent('contextmenu') ;
        await this.page.getByTestId('playlist-tracklist').getByText({hasText: randomSong.song}).dispatchEvent('contextmenu');
        await this.page.pause();
        await this.page.getByRole('menuitem', { name: 'Remove from this playlist' }).click();

    }

}
import basePage from "../pages/basePage";
import {libraryPlaylist} from "../page_objects/dashBoard";

export class playlistPage extends basePage{
    constructor(page) {
        super(page);
        this.page=page
    }
    async openPlayList(songName){
       // await this.page.getByRole('button', { name: /MJ/ }).first().click();
        await this.page.pause()
        await this.page.getByTestId('playlist-tracklist').getByRole('button', { name: `Play ${songName}} by` }).isVisible()
        await this.page.pause()
    }

}
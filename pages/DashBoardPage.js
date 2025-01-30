import BasePage from "./basePage";
import {createPlaylist, libraryPlaylist} from "../page_objects/dashBoard";

export class DashBoardPage extends BasePage{
    constructor(page) {
        super(page);
        this.page=page;
    }
    async createPlaylists(){
     await super.waitAndClick(createPlaylist)
        await this.page.pause()

    await this.page.getByRole('menuitem', { name: 'Create a new playlist' }).click();


    }
    async renamePlaylist() {

        await this.page.pause()
        console.log(await this.page.locator(libraryPlaylist).nth(0).textContent())
        await this.page.locator(libraryPlaylist).nth(0).dispatchEvent('contextmenu')
       // await this.page.locator(libraryPlaylist).first().click({button: 'right'});
        await this.page.getByRole('menuitem', { name: 'Edit details' }).click();
        await this.page.getByTestId('playlist-edit-details-name-input').fill('MJ');
        await this.page.getByTestId('playlist-edit-details-save-button').click();

    }


}

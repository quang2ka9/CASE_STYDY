import {UserManager} from "../controller/UserManager";
import {AdminMenu} from "./AdminMenu";


const readlineSync = require("readline-sync");

export class MainMenu {
    private adminMenu: AdminMenu = new AdminMenu();
    private userManager = new UserManager();
    private menu: string = `
    1. Đăng nhập
    2. Đăng kí
    3. Thoát
    `

    public selection(): void {
        while (true) {
            let choice;
            do {
                console.log(this.menu);
                choice = +readlineSync.question("Nhap su lua chon cua ban: ");
                if (choice < 1 || choice > 3) {
                    console.log("Su lua chon sai lam! Chon lai.");
                }
            } while (choice < 1 || choice > 3);
            switch (choice) {
                case 1: {
                    let username = readlineSync.question("Ten tai khoan : ");
                    let password = readlineSync.question("Mat khau : ");
                    let status = this.userManager.login(username, password);
                    if (status == -1) {
                        console.log("Ten tai khoan hoac mat khau sai :");
                    } else if (status == 0) {
                        this.adminMenu.selection();
                    } else {
                        this.adminMenu.selection();
                    }
                    break;
                }
                case 2: {
                    let username = readlineSync.question("Ten tai khoan : ");
                    let password = readlineSync.question("Mat khau : ");
                    this.userManager.register(username, password);
                    break;
                }
                case 3:
                    return;
            }
        }
    }
}
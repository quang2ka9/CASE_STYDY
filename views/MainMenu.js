"use strict";
exports.__esModule = true;
exports.MainMenu = void 0;
var UserManager_1 = require("../controller/UserManager");
var AdminMenu_1 = require("./AdminMenu");
var readlineSync = require("readline-sync");
var MainMenu = /** @class */ (function () {
    function MainMenu() {
        this.adminMenu = new AdminMenu_1.AdminMenu();
        this.userManager = new UserManager_1.UserManager();
        this.menu = "\n    1. \u0110\u0103ng nh\u1EADp\n    2. \u0110\u0103ng k\u00ED\n    3. Tho\u00E1t\n    ";
    }
    MainMenu.prototype.selection = function () {
        while (true) {
            var choice = void 0;
            do {
                console.log(this.menu);
                choice = +readlineSync.question("Nhap su lua chon cua ban: ");
                if (choice < 1 || choice > 3) {
                    console.log("Su lua chon sai lam! Chon lai.");
                }
            } while (choice < 1 || choice > 3);
            switch (choice) {
                case 1: {
                    var username = readlineSync.question("Ten tai khoan : ");
                    var password = readlineSync.question("Mat khau : ");
                    var status_1 = this.userManager.login(username, password);
                    if (status_1 == -1) {
                        console.log("Ten tai khoan hoac mat khau sai :");
                    }
                    else if (status_1 == 0) {
                        this.adminMenu.selection();
                    }
                    else {
                        this.adminMenu.selection();
                    }
                    break;
                }
                case 2: {
                    var username = readlineSync.question("Ten tai khoan : ");
                    var password = readlineSync.question("Mat khau : ");
                    this.userManager.register(username, password);
                    break;
                }
                case 3:
                    return;
            }
        }
    };
    return MainMenu;
}());
exports.MainMenu = MainMenu;

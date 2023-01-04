"use strict";
exports.__esModule = true;
exports.AdminMenu = void 0;
var Book_1 = require("../model/Book");
var BookManager_1 = require("../controller/BookManager");
var readlineSync = require('readline-sync');
var AdminMenu = /** @class */ (function () {
    function AdminMenu() {
        this.BookManager = new BookManager_1.BookManager();
        this.menu = "\n    1. Th\u00EAm m\u1EDBi\n    2. X\u00F3a theo id\n    3. Hi\u1EC3n th\u1ECB th\u00F4ng tin\n    4. S\u1EEDa s\u00E1ch\n    5. T\u00ECm ki\u1EBFm theo t\u00EAn\n    6. S\u1EAFp x\u1EBFp\n    7. T\u1ED5ng s\u1ED1 l\u01B0\u1EE3ng s\u00E1ch\n    8. Tho\u00E1t\n    ";
    }
    AdminMenu.prototype.selection = function () {
        var isLoop = true;
        while (isLoop) {
            console.log(this.menu);
            var choice = void 0;
            do {
                choice = +readlineSync.question("Nhap su lua chon cua ban: ");
                if (choice < 1 || choice > 8) {
                    console.log("Su lua chon sai lam. Vui long thu lai: ");
                }
            } while (choice < 1 || choice > 8);
            switch (choice) {
                case 1: {
                    var book = this.inputBook(null);
                    this.BookManager.addBook(book);
                    break;
                }
                case 2: {
                    this.BookManager.deleteById();
                    break;
                }
                case 3: {
                    this.BookManager.displayAll();
                    break;
                }
                case 4: {
                    var id = +readlineSync.question("Nhap id sach ban muon sua: ");
                    var newBook = this.inputBook(id);
                    this.BookManager.updateBook(id, newBook);
                    break;
                }
                case 5: {
                    var nameBook = readlineSync.question("Nhap ten sach ban muon tim kiem: ");
                    console.table(this.BookManager.findByNameBook(nameBook));
                    break;
                }
                case 6: {
                    this.BookManager.sortBookByName();
                    break;
                }
                case 7: {
                    console.log("Tong so luong sach la : " + this.BookManager.totalNumberOfBooks());
                    break;
                }
                case 8: {
                    isLoop = false;
                    break;
                }
            }
        }
    };
    AdminMenu.prototype.inputBook = function (id) {
        if (id !== null) {
            var index = -1;
            do {
                index = this.BookManager.findById(id);
                if (index === -1) {
                    console.log("Id nay khong ton tai. Vui long thu lai! ");
                }
                else {
                    var id_1 = +readlineSync.question("Nhap Id: ");
                    var nameBook = readlineSync.question("Nhap Ten: ");
                    var category = readlineSync.question("Nhap The Loai: ");
                    var author = readlineSync.question("Nhap ten tac gia: ");
                    var pagesNumber = +readlineSync.question("Nhap so trang: ");
                    var quantity = +readlineSync.question("Nhap so luong sach: ");
                    return new Book_1.Book(id_1, nameBook, category, author, pagesNumber, quantity);
                }
            } while (index !== -1);
        }
        else {
            var id_2 = +readlineSync.question("Nhap Id: ");
            var nameBook = readlineSync.question("Nhap Ten: ");
            var category = readlineSync.question("Nhap The Loai: ");
            var author = readlineSync.question("Nhap ten tac gia: ");
            var pagesNumber = +readlineSync.question("Nhap so trang: ");
            var quantity = +readlineSync.question("Nhap so luong sach: ");
            return new Book_1.Book(id_2, nameBook, category, author, pagesNumber, quantity);
        }
    };
    return AdminMenu;
}());
exports.AdminMenu = AdminMenu;

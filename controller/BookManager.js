"use strict";
exports.__esModule = true;
exports.BookManager = void 0;
var readlineSync = require('readline-sync');
var BookManager = /** @class */ (function () {
    function BookManager() {
        this.bookList = [];
    }
    BookManager.prototype.addBook = function (book) {
        this.bookList.push(book);
        console.log("Them thanh cong! ");
    };
    BookManager.prototype.findById = function (id) {
        for (var i = 0; i < this.bookList.length; i++) {
            if (this.bookList[i].getId() === id) {
                return i;
            }
        }
        return -1;
    };
    BookManager.prototype.deleteById = function () {
        var id = +readlineSync.question("Nhap id can xoa: ");
        while (true) {
            for (var i = 0; i < this.bookList.length; i++) {
                if (this.bookList[i].getId() == id) {
                    this.bookList.splice(i, 1);
                    return;
                }
            }
            console.log("ID khong ton tai, nhap lai");
            id = +readlineSync.question("Nhap id can xoa: ");
        }
    };
    BookManager.prototype.displayAll = function () {
        console.table(this.bookList);
    };
    BookManager.prototype.updateBook = function (id, newBook) {
        var id1 = this.findById(id);
        if (id1 === -1) {
            return "Khong co sach nay! ";
        }
        console.log(id1);
        this.bookList[id1] = newBook;
        return "Sua thanh cong! ";
    };
    BookManager.prototype.findByNameBook = function (nameBook) {
        var result = [];
        this.bookList.forEach(function (item, index) {
            if (item.getNameBook().includes(nameBook)) {
                result.push(item);
            }
        });
        return result;
    };
    BookManager.prototype.sortBookByName = function () {
        var _this = this;
        this.bookList.sort(function (a, b) { return _this.compare(a, b); });
        console.table(this.bookList);
    };
    BookManager.prototype.compare = function (a, b) {
        var nameBookA = a.nameBook.toUpperCase();
        var nameBookB = b.nameBook.toUpperCase();
        var comparison = 0;
        if (nameBookA > nameBookB) {
            comparison = 1;
        }
        else if (nameBookA < nameBookB) {
            comparison = -1;
        }
        return comparison;
    };
    BookManager.prototype.totalNumberOfBooks = function () {
        var total = 0;
        for (var i = 0; i < this.bookList.length; i++) {
            total += this.bookList[i].getQuantity();
        }
        return total;
    };
    return BookManager;
}());
exports.BookManager = BookManager;

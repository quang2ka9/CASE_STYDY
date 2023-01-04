"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(id, nameBook, category, author, pagesNumber, quantity) {
        this.id = id;
        this.nameBook = nameBook;
        this.category = category;
        this.author = author;
        this.pagesNumber = pagesNumber;
        this.quantity = quantity;
    }
    Book.prototype.getId = function () {
        return this.id;
    };
    Book.prototype.setId = function (id) {
        this.id = id;
    };
    Book.prototype.getNameBook = function () {
        return this.nameBook;
    };
    Book.prototype.setNameBook = function (nameBook) {
        this.nameBook = nameBook;
    };
    Book.prototype.getCategory = function () {
        return this.category;
    };
    Book.prototype.setPublish = function (category) {
        this.category = category;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.setAuthor = function (value) {
        this.author = value;
    };
    Book.prototype.getPagesNumber = function () {
        return this.pagesNumber;
    };
    Book.prototype.setPagesNumber = function (value) {
        this.pagesNumber = value;
    };
    Book.prototype.getQuantity = function () {
        return this.quantity;
    };
    Book.prototype.setQuantity = function (value) {
        this.quantity = value;
    };
    return Book;
}());
exports.Book = Book;

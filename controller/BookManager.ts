import {Book} from "../model/Book";

let readlineSync = require('readline-sync');

export class BookManager {
    private readonly bookList: Book[];

    constructor() {
        this.bookList = []
    }

    addBook(book: Book): void {
        this.bookList.push(book);
        console.log("Them thanh cong! ");
    }

    findById(id: number) {
        for (let i = 0; i < this.bookList.length; i++) {
            if (this.bookList[i].getId() === id) {
                return i;
            }
        }
        return -1;
    }

    deleteById() {

        let id: number = +readlineSync.question("Nhap id can xoa: ")
        while (true) {
            for (let i = 0; i < this.bookList.length; i++) {
                if (this.bookList[i].getId() == id) {
                    this.bookList.splice(i, 1)
                    return;
                }
            }
            console.log("ID khong ton tai, nhap lai")
            id = +readlineSync.question("Nhap id can xoa: ")
        }


    }

    displayAll() {
        console.table(this.bookList);
    }

    updateBook(id: number, newBook: Book) {
        let id1 = this.findById(id);
        if (id1 === -1) {
            return "Khong co sach nay! ";
        }
        console.log(id1)
        this.bookList[id1] = newBook;
        return "Sua thanh cong! ";
    }

    findByNameBook(nameBook: string): Book[] {
        let result: Book[] = [];

        this.bookList.forEach((item, index) => {
            if (item.getNameBook().includes(nameBook)) {
                result.push(item);
            }
        })
        return result;
    }

    sortBookByName() {
        this.bookList.sort((a, b) => this.compare(a, b));
        console.table(this.bookList)
    }

    compare(a, b) {
        let nameBookA = a.nameBook.toUpperCase();
        let nameBookB = b.nameBook.toUpperCase();

        let comparison = 0;
        if (nameBookA > nameBookB) {
            comparison = 1;
        } else if (nameBookA < nameBookB) {
            comparison = -1;
        }
        return comparison;
    }

    totalNumberOfBooks() {
        let total = 0;
        for (let i = 0; i < this.bookList.length; i++) {
            total += this.bookList[i].getQuantity();
        }
        return total;

    }

}



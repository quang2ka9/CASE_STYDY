import {Book} from "../model/Book";
import {BookManager} from "../controller/BookManager";

const readlineSync = require('readline-sync');

export class AdminMenu {
    private BookManager: BookManager = new BookManager();
    private menu = `
    1. Thêm mới
    2. Xóa theo id
    3. Hiển thị thông tin
    4. Sửa sách
    5. Tìm kiếm theo tên
    6. Sắp xếp
    7. Tổng số lượng sách
    8. Thoát
    `;

    public selection(): void {
        let isLoop = true;
        while (isLoop) {
            console.log(this.menu);
            let choice;
            do {
                choice = +readlineSync.question("Nhap su lua chon cua ban: ");
                if (choice < 1 || choice > 8) {
                    console.log("Su lua chon sai lam. Vui long thu lai: ");
                }
            } while (choice < 1 || choice > 8);
            switch (choice) {
                case 1: {
                    let book = this.inputBook(null)
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
                    let id = +readlineSync.question("Nhap id sach ban muon sua: ");
                    let newBook = this.inputBook(id);
                    this.BookManager.updateBook(id, newBook)
                    break;
                }
                case 5: {
                    let nameBook = readlineSync.question("Nhap ten sach ban muon tim kiem: ");
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
    }

    private inputBook(id: number | null): Book {
        if (id !== null) {
            let index = -1;
            do {
                index = this.BookManager.findById(id);
                if (index === -1) {
                    console.log("Id nay khong ton tai. Vui long thu lai! ");
                } else {
                    let id = +readlineSync.question("Nhap Id: ");
                    let nameBook = readlineSync.question("Nhap Ten: ");
                    let category = readlineSync.question("Nhap The Loai: ");
                    let author = readlineSync.question("Nhap ten tac gia: ");
                    let pagesNumber = +readlineSync.question("Nhap so trang: ");
                    let quantity = +readlineSync.question("Nhap so luong sach: ");
                    return new Book(id, nameBook, category, author, pagesNumber, quantity);

                }
            } while (index !== -1);
        } else {
            let id = +readlineSync.question("Nhap Id: ");
            let nameBook = readlineSync.question("Nhap Ten: ");
            let category = readlineSync.question("Nhap The Loai: ");
            let author = readlineSync.question("Nhap ten tac gia: ");
            let pagesNumber = +readlineSync.question("Nhap so trang: ");
            let quantity = +readlineSync.question("Nhap so luong sach: ");
            return new Book(id, nameBook, category, author, pagesNumber, quantity);
        }

    }

}


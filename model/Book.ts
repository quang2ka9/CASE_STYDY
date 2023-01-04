export class Book {
    private id: number;
    private nameBook: string;
    private category: string;
    private author: string;
    private pagesNumber: number;
    private quantity: number;

    constructor(id: number, nameBook: string, category: string, author: string, pagesNumber: number, quantity: number) {
        this.id = id;
        this.nameBook = nameBook;
        this.category = category;
        this.author = author;
        this.pagesNumber = pagesNumber;
        this.quantity = quantity;

    }

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getNameBook(): string {
        return this.nameBook;
    }

    setNameBook(nameBook: string): void {
        this.nameBook = nameBook;
    }

    getCategory(): string {
        return this.category;
    }

    setPublish(category: string): void {
        this.category = category;
    }

    getAuthor(): string {
        return this.author;
    }

    setAuthor(value: string) {
        this.author = value;
    }

    getPagesNumber(): number {
        return this.pagesNumber;
    }

    setPagesNumber(value: number) {
        this.pagesNumber = value;
    }

    getQuantity(): number {
        return this.quantity;
    }

    setQuantity(value: number) {
        this.quantity = value;
    }

}
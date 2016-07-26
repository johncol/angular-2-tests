export class Book {
    
    private id: string;
    private name: string;
    private author: string;

    constructor(id: string, name: string, author: string) {
        this.id = id;
        this.name = name;
        this.author = author;
    }

    get Id(): string {
        return this.id;
    }

    get Name() : string {
        return this.name;
    }

    get Author() : string {
        return this.author;
    }

}
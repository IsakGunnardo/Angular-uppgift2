export class Blogg {

    title: string;
    thumbnailUrl: string
    body: string;
    creationDate: Date;
    likes: number;
    dislikes: number;
    comments: string[] = [];
    id: number;
    category: string;


    constructor(id: number, title: string, body: string, thumbnailUrl: string, category: string) {
        this.id = id;
        this.title = title
        this.body = body;
        this.thumbnailUrl = thumbnailUrl;
        this.category = category
        this.likes = 0;
        this.dislikes = 0;
        this.creationDate = new Date()
    }
}
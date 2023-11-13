import { Component } from '@angular/core';
import { BloggService } from 'src/app/services/blogg.service';
import { ViewService } from 'src/app/services/view.service';
import { Blogg } from 'src/app/models/blogg';
import { faImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent {

  title: string = "";
  body: string = "";
  thumbnailUrl: string = "";
  // category: string = ""; 

  img = faImage

  constructor(
    private bloggService: BloggService,
    public viewService: ViewService
  ) {
    this.bloggService.load()
  }

  get blogg(): Blogg[] {
    return this.bloggService.blogg
  }

  upperCase() {
    this.title = this.title.toUpperCase();
    this.body = this.body.toUpperCase();

  }

  // fixa så att man inte kan trycka på addNewBloggPost button utan att skriva först
  addNewBloggPost(title: string, body: string, thumbnailUrl: string): void {

    const newBloggPost: Blogg = {
      title,
      body,
      thumbnailUrl,
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      id: this.bloggService.blogg.length + 1,
      comments: [],
      // category

    }

    this.title = '';
    this.body = '';
    this.thumbnailUrl = '';
    // this.category = '';

    this.bloggService.addBloggPost(newBloggPost)
    this.bloggService.save()
  }
}

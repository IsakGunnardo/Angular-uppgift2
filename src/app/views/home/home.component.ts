import { Component } from '@angular/core';
import { ViewService } from 'src/app/services/view.service';
import { BloggService } from 'src/app/services/blogg.service';
import { Blogg } from 'src/app/models/blogg';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  bloggId: number = 0;


  faTrashCan = faTrashCan

  constructor(
    private bloggService: BloggService,
    public viewService: ViewService
  ) {
    this.bloggService.load()
    this.bloggService.resetFilteredBlogPosts();
  }

  get blogg(): Blogg[] {
    return this.bloggService.blogg
  }

  removePost(bloggId: number): void {
    this.bloggService.removeBloggPost(bloggId);
  }

  get filteredBlogPosts(): Blogg[] {
    return this.bloggService.filteredBlogPosts
  }


}

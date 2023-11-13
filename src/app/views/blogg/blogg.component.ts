import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BloggService } from 'src/app/services/blogg.service';
import { Blogg } from 'src/app/models/blogg';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ViewService } from 'src/app/services/view.service';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blogg',
  templateUrl: './blogg.component.html',
  styleUrls: ['./blogg.component.css']
})
export class BloggComponent {
  id: number = 0;
  newComment: string = '';
  bloggId: number = 0;

  up = faThumbsUp
  down = faThumbsDown
  faTrashCan = faTrashCan

  constructor(
    private activatedRoute: ActivatedRoute,
    private bloggService: BloggService,
    public viewService: ViewService,
  ) {
    activatedRoute.params.subscribe((params) => {
      this.id = parseInt(params['id'])
    });
    this.bloggService.load()
  }

  get blogg(): Blogg | undefined {
    return this.bloggService.blogg.find((blogg) => blogg.id === this.id)
  }

  upperCase() {
    this.newComment = this.newComment.toUpperCase()
  }

  addComment() {

    if (this.blogg && this.newComment.trim() !== '') {

      if (!this.blogg.comments) {
        this.blogg.comments = []
      }
      this.blogg.comments.push(this.newComment);
      this.newComment = '';
    }
    this.bloggService.save()
  }

  upvoteBloggPost(): void {
    if (this.blogg !== undefined) {
      this.blogg.likes++;
    }
    this.bloggService.save()
  }

  downvoteBloggPost(): void {
    if (this.blogg !== undefined) {
      this.blogg.dislikes++;
    }
    this.bloggService.save()
  }


  removePost(bloggId: number): void {
    this.bloggService.removeBloggPost(bloggId);
  }
}

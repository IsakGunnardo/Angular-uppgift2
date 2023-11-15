import { Component } from '@angular/core';
import { ViewService } from 'src/app/services/view.service';
import { BloggService } from 'src/app/services/blogg.service';
import { Blogg } from 'src/app/models/blogg';

// show the title of all bloggposts
@Component({
  selector: 'app-sidemodal',
  templateUrl: './sidemodal.component.html',
  styleUrls: ['./sidemodal.component.css']
})
export class SidemodalComponent {

  constructor(
    private bloggService: BloggService,
    public viewService: ViewService
  ) {
    this.bloggService.load()
  }

  get blogg(): Blogg[] {
    return this.bloggService.blogg
  }
}

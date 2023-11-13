import { Component, OnInit } from '@angular/core';
import { BloggService } from './services/blogg.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showCreatePostForm = false;

  constructor(private bloggService: BloggService,
    private themeService: ThemeService
  ) {


  }

  ngOnInit(): void {
    const selectedTheme = this.themeService.getTheme();
    document.body.classList.add(selectedTheme)
  }
  toggleCreateBloggForm() {
    this.showCreatePostForm = !this.showCreatePostForm

  }

}
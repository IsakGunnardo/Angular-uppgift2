import { Component } from '@angular/core';
import { ViewService } from 'src/app/services/view.service';
import { BloggService } from 'src/app/services/blogg.service';
import { ThemeService } from 'src/app/services/theme.service';

// component that lets user change background theme on page
@Component({
  selector: 'app-thememodal',
  templateUrl: './thememodal.component.html',
  styleUrls: ['./thememodal.component.css']
})
export class ThememodalComponent {
  isModalOpen: boolean = false
  theme: string = 'light-theme';
  activeButton: string = "";


  constructor(
    public viewService: ViewService,
    private bloggService: BloggService,
    private themeService: ThemeService) {
    this.bloggService.load()
  }

  toggleThemeModal() {
    this.isModalOpen = !this.isModalOpen;
    this.viewService.toggleThemeModal(this.isModalOpen)
  }

  public toggleTheme(theme: string): void {
    document.body.classList.remove('light-theme', 'dark-theme', 'ocean-theme', 'fire-theme')
    document.body.classList.add(theme)
    this.themeService.setTheme(theme)
  }

  activateButton(buttonId: string) {
    this.activeButton = buttonId
  }


}

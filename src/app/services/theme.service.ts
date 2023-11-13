import { Injectable } from '@angular/core';


// handels localstorage for theme on page so it remebers if you choose a theme
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'selected-theme'

  setTheme(theme: string): void {
    localStorage.setItem(this.THEME_KEY, theme)
  }

  getTheme(): string {
    return localStorage.getItem(this.THEME_KEY) || 'light-theme;'
  }
  constructor() { }
}

import { Injectable } from '@angular/core';

// handles all the views 
@Injectable({
  providedIn: 'root'
})
export class ViewService {
  showCreateBloggPost: boolean = false
  showThemeModal: boolean = false
  showSidebar: boolean = false
  showLoggIn: boolean = false
  showSearchBar: boolean = false
  toggleLoggIn: boolean = false

  toggleAdminView(isAdmingView: boolean) {
    this.showCreateBloggPost = isAdmingView
  }

  toggleThemeModal(isModalOpen: boolean) {
    this.showThemeModal = isModalOpen
  }

  toggleSideBar(isAsideOpen: boolean) {
    this.showSidebar = isAsideOpen
  }

  toggleLoggInWindow(isLoggInView: boolean) {
    this.showLoggIn = isLoggInView
  }

  toggleLoggInButton(isSignIn: boolean) {
    this.toggleLoggIn = isSignIn
  }

  toggleSearchBar(isSearchBarOpen: boolean) {
    this.showSearchBar = isSearchBarOpen
  }

}

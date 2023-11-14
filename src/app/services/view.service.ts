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


  toggleCreateBloggPost(isAdmingView: boolean) {
    this.showCreateBloggPost = isAdmingView
  }

  toggleThemeModal(isModalOpen: boolean) {
    this.showThemeModal = isModalOpen

  }

  toggleSideBar(isAsideOpen: boolean) {
    this.showSidebar = isAsideOpen
  }

  toggleLoggIn(isLoggInView: boolean){
this.showLoggIn = isLoggInView

  }



}

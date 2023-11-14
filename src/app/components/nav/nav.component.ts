import { Component, OnInit } from '@angular/core';
import { ViewService } from 'src/app/services/view.service';
import { BloggService } from 'src/app/services/blogg.service';

import {
  faHome,
  faUser,
  faToggleOn,
  faToggleOff,
  faRightToBracket,
  faRightFromBracket,
  faPalette,
  faCirclePlus,
  faCaretDown,
  faCaretUp,
  faBars,
  faSquareCaretDown,

} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';







@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  //fonts
  faHome = faHome
  user = faUser
  toggleOn = faToggleOn
  toggleOf = faToggleOff
  faRightToBracket = faRightToBracket
  faRightFromBracket = faRightFromBracket
  faPallete = faPalette
  newPost = faCirclePlus
  down = faCaretDown
  up = faCaretUp
  fabars = faBars
  arrowdown = faSquareCaretDown
  facebook = faFacebook
  linkedin = faLinkedin
  github = faGithub

  //boolen values
  isAdminView: boolean = false;
  isModalOpen: boolean = false;
  isAsideOpen: boolean = false;
  isLoggInView: boolean = false;
  isSignIn: boolean = false;

  constructor(
    public viewService: ViewService,
    private bloggService: BloggService,
  ) {
    this.bloggService.load()
  }



  toggleCreateBloggPost() { //toggle the createbloggpost button
    this.isAdminView = !this.isAdminView;
    this.viewService.toggleCreateBloggPost(this.isAdminView)
    this.bloggService.save()
  }

  toggleThemeModal() { // togglethememodal
    this.isModalOpen = !this.isModalOpen;
    this.viewService.toggleThemeModal(this.isModalOpen)
    this.bloggService.save()
  }

  toggleSideBar() { //togglesidebar
    this.isAsideOpen = !this.isAsideOpen;
    this.viewService.toggleSideBar(this.isAsideOpen)
    this.bloggService.save()
  }

  toggleLoggInWindow() { //togglelogginwindow
    this.isLoggInView = !this.isLoggInView
    this.viewService.toggleLoggIn(this.isLoggInView)
    this.bloggService.save()
  }

  loggOut() { //loggs user out and reloads the page
    window.location.reload()
    this.bloggService.save()
  }

  toggleLogginButton() { //toggles the logginbutton between loggin and loggout 
    this.isSignIn = !this.isSignIn
    this.bloggService.save()
  }

  loggIn() { //funciton that calls other functions
    this.toggleCreateBloggPost();
    this.toggleLoggInWindow();
    this.toggleLogginButton()
  }
}


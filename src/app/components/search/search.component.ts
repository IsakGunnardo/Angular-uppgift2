import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BloggService } from 'src/app/services/blogg.service';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { ViewService } from 'src/app/services/view.service';



//Component that lets you search for the category of the posts on the page
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search = faMagnifyingGlass
  categorySearch: string = ""
  isSearchBarOpen: boolean = false

  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor(
    private bloggService: BloggService,
    public viewService: ViewService) {

  }

  toggleSearchBar(): void {
    this.isSearchBarOpen = !this.isSearchBarOpen
    this.viewService.toggleSearchBar(this.isSearchBarOpen)
    this.bloggService.resetFilteredBlogPosts()
  }

  ngOnInit(): void {
    if (this.searchInput) {
      fromEvent(this.searchInput.nativeElement, 'input')
        .pipe(
          map((event: any) => event.target.value),
          debounceTime(300),
          distinctUntilChanged()
        )
        .subscribe(value => {
          this.searchCategory();
        })
    }
  }

  searchCategory(): void {
    if (this.categorySearch) {
      this.bloggService.filterBlogPostsByCategory(this.categorySearch);
    } else {
      this.bloggService.resetFilteredBlogPosts();
    }
  }
}

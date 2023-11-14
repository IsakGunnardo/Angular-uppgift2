import { Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
import { BloggService } from 'src/app/services/blogg.service';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  search = faMagnifyingGlass
  categorySearch: string = ""
  showSearchBar: boolean = false;
  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor(private bloggService:BloggService){

  }
  toggleSearchBar(): void {
    this.showSearchBar = !this.showSearchBar;
    if (!this.showSearchBar) {
      this.bloggService.resetFilteredBlogPosts()
    }
  }

  ngOnInit(): void { // filters the search input so it checks the letters in each category 
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(map
        ((event: any) => event.target.value),
        debounceTime(300),
        distinctUntilChanged())
      .subscribe(value => {
        this.searchCategory();
      })
  }
  searchCategory(): void {
    if (this.categorySearch) {
      this.bloggService.filterBlogPostsByCategory(this.categorySearch);
    } else {
      this.bloggService.resetFilteredBlogPosts();
    }
  }
}

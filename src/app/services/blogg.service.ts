import { Injectable } from '@angular/core';
import { Blogg } from '../models/blogg';


// handels how you create and remove blogg posts and comments
// also localstorage for bloggposts
@Injectable({
  providedIn: 'root'
})
export class BloggService {
  comments: string[] = [];
  user: string[] = [];

  private _blogg: Blogg[] = [];
  private _filteredBlogPosts: Blogg[] = [];

  public load(): void {
    const json = localStorage.getItem('blogg');
    if (json !== null) {
      const savedData = JSON.parse(json);
      this._blogg = savedData.blogg;
      this.comments = savedData.comments
      this.user = savedData.user
    }
  }

  public save(): void {
    const blogg = { blogg: this._blogg, comments: this.comments };
    localStorage.setItem('blogg', JSON.stringify(blogg))
  }

  removeBloggPost(bloggId: number): void {
    const index = this._blogg.findIndex((blogg) => blogg.id === bloggId);
    if (index !== -1) {
      this._blogg.splice(index, 1);
      this.save();
    }
  }

  public get blogg(): Blogg[] {
    return this._blogg;
  }

  public addBloggPost(newBloggPost: Blogg): void {
    this._blogg.push(newBloggPost)
    this.save()
  }

  addComment(newComment: string): void {
    this.comments.push(newComment);
    this.save()
  }

  filterBlogPostsByCategory(category: string): void {
    this._filteredBlogPosts = this._blogg.filter(blogPost =>
      blogPost.category.toUpperCase().includes(category.toUpperCase())
      );
  }

  resetFilteredBlogPosts(): void {
    this._filteredBlogPosts= this._blogg;
  }

  get filteredBlogPosts(): Blogg[] {
    return this._filteredBlogPosts
  }


  


}


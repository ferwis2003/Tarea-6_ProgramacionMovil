import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-word-press-news',
  templateUrl: './word-press-news.page.html',
  styleUrls: ['./word-press-news.page.scss'],
})
export class WordPressNewsPage implements OnInit {

  public logoUrl: string = '';
  public news: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getWordPressLogo();
    this.getLatestNews();
  }

  getWordPressLogo() {
    const url = 'https://www.rollingstone.com/wp-json/wp/v2/sites';

    this.http.get(url).subscribe((data: any) => {
      if (data && data[0] && data[0].site_logo && data[0].site_logo.url) {
        this.logoUrl = data[0].site_logo.url;
      }
    });
  }

  getLatestNews() {
    const url = 'https://www.rollingstone.com/wp-json/wp/v2/posts?per_page=3';

    this.http.get(url).subscribe((data: any) => {
      this.news = data;
    });
  }

}
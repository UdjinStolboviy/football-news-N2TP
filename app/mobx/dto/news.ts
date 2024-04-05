import {NewsRow} from './news-row';

export class News {
  private readonly author: string;
  private readonly title: string;
  private readonly description: string;
  private readonly url: string;
  private readonly urlToImage: string;
  private readonly publishedAt: string;
  private readonly content: string;

  constructor(row: NewsRow) {
    this.author = row.author;
    this.title = row.title;
    this.description = row.description;
    this.url = row.url;
    this.urlToImage = row.urlToImage;
    this.publishedAt = row.publishedAt;
    this.content = row.content;
  }

  public getAuthor(): string {
    return this.author;
  }

  public getTitle(): string {
    return this.title;
  }

  public getDescription(): string {
    return this.description;
  }

  public getUrl(): string {
    return this.url;
  }

  public getUrlToImage(): string {
    return this.urlToImage;
  }

  public getPublishedAt(): string {
    return this.publishedAt;
  }

  public getContent(): string {
    return this.content;
  }
}

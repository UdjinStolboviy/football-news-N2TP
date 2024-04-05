export class BestPlayers {
  private readonly firstname: string;
  private readonly lastname: string;
  private readonly nationality: string;
  private readonly photo: string;
  private readonly rating: string;
  private readonly position: string;

  constructor(row: any) {
    this.firstname = row.firstname;
    this.lastname = row.lastname;
    this.nationality = row.nationality;
    this.photo = row.photo;
    this.rating = row.rating;
    this.position = row.position;
  }

  public getFirstname(): string {
    return this.firstname;
  }

  public getLastname(): string {
    return this.lastname;
  }

  public getNationality(): string {
    return this.nationality;
  }

  public getPhoto(): string {
    return this.photo;
  }

  public getRating(): string {
    return this.rating;
  }

  public getPosition(): string {
    return this.position;
  }
}

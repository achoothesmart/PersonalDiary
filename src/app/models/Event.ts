export class Event {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public date: string,
    public time: string
  ) {}

  public isDeleted = false;

  isValidEvent() {
    if (this.title !== '' && this.description !== '') {
      return true;
    }
    else {
      return false;
    }
  }
}

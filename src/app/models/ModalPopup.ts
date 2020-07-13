// Modal popup class

export class ModalPopup {
  constructor(
    public titleText: string,
    public messageText: string,
    public okButtonText: string,
    public cancelButtonText: string
    ) {}

    public resultCommand: string;
}

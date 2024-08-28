import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title: string = '';
  @Input() price: number = 0;
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() creationAt: Date = new Date();
  @Input() updatedAt: string = '';
  @Input() category: string = '';
  @Input() id: number = 0;
  @Input() rating: string = '';

  @Output() doClick = new EventEmitter();

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor() {}

  click(id: number) {
    this.doClick.emit(id);
  }
}

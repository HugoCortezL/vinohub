import { Component, Input } from '@angular/core';

@Component({
  selector: 'vino-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({ required: true }) type!: "primary" | "secundary";
  @Input({ required: true }) text!: string;
}

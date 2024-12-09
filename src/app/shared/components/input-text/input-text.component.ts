import { Component, ContentChild, Input } from "@angular/core";
import { IconComponent } from "../icon/icon.component";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "vino-input-text",
  imports: [ReactiveFormsModule],
  templateUrl: "./input-text.component.html",
  styleUrl: "./input-text.component.scss",
})
export class InputTextComponent {
  @ContentChild(IconComponent) icon: IconComponent | undefined;

  @Input({ required: true }) placeholder!: string;
  @Input({required: true}) formControl!: FormControl;
  @Input() type?: string = "text";
}

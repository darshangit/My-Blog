import { Component, Input } from '@angular/core'

@Component({
selector: 'app-collapsible-well',
template: `
<div class="well" (click)="toggleContent()">
<h4>
<ng-content select="[well-title]"></ng-content>
</h4>
    <ng-content *ngIf="visible" select="[well-body]"></ng-content>
</div>
`,
styles: [
  `
   .well {cursor:pointer;}
`,
],
})
export class CollapsibleWellComponent {
    visible = false

    toggleContent() {
        this.visible = !this.visible
    }
}

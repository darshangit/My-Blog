import { Component, Input, Inject, ViewChild, ElementRef } from '@angular/core'
import { JQ_TOKEN } from './jQuery.services'
@Component({
    selector: 'app-collapsible-well',
    template: `
<div class="well" (click)="toggleContent()">
<h4>
<i *ngIf="!visible" class="indicator glyphicon glyphicon-chevron-down pull-right"></i>
<i *ngIf="visible" class="indicator glyphicon glyphicon-chevron-up pull-right"></i>
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
    @ViewChild('accord') containerEl: ElementRef

    constructor( @Inject(JQ_TOKEN) private $: any) { }

    toggleContent() {
        this.visible = !this.visible
    }

}


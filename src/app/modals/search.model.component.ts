import { Component, Input, Inject, ViewChild, ElementRef, OnChanges, Output} from '@angular/core'
import { JQ_TOKEN } from '../common/jQuery.services'
import { SubListingAllResponse } from 'app/data-models/sub-listing-all-response.model'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
    selector: 'app-search-modal',
    templateUrl: './search.model.component.html',
    styles: [`
    em { float: right; color: #E05C65}
    `]
})
export class SearchComponent {
    @Input() elementId: string
    @ViewChild('modalcontainer') containerEl: ElementRef
    constructor( @Inject(JQ_TOKEN) private $: any) {}

     closeModal() {
        this.$(this.containerEl.nativeElement).modal('hide')
    }
}

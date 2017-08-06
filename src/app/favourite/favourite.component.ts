import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
    selector: 'app-favourite-component',
    templateUrl: './favourite.component.html',
    styleUrls: ['./favourite.component.less']
})
export class FavouriteComponent implements OnChanges {

    iconColor: string
    @Output() vote = new EventEmitter()
    @Input() voted

    ngOnChanges(): void {
        this.iconColor = this.voted ? 'yellowgreen' : 'gray';
    }

    onClick() {
        this.iconColor = this.iconColor === 'yellowgreen' ? 'gray' : 'yellowgreen';
        this.vote.emit(this.iconColor);
    }

}

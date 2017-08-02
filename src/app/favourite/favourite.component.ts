import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-favourite-component',
    templateUrl: './favourite.component.html',
    styleUrls: ['./favourite.component.less']
})
export class FavouriteComponent {
    iconColor: string
    @Output() vote = new EventEmitter()

    @Input() set voted(val) {
        this.iconColor = val ? 'yellowgreen' : 'gray';
    }

    onClick() {
        this.iconColor = this.iconColor === 'yellowgreen' ? 'gray' : 'yellowgreen';
        this.vote.emit(this.iconColor);
    }
}

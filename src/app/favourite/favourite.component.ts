import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-favourite-component',
    templateUrl: './favourite.component.ts',
    styleUrls: ['./favourite.component.less']
})
export class FavouriteComponent {
    iconColor: string

    @Input() set voted(val) {
        this.iconColor = val ? 'green' : 'white';
    }

}

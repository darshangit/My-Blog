import { Component, Input } from '@angular/core'
import { MainTopicsModel } from 'app/data-models/main-topics.model'

@Component({
    selector: 'app-topics-thumbnail',
    templateUrl: './main-topics-thumbnail.component.html',
    styles: [`
    
    
    `]
})
export class MainTopicComponent {
    @Input() topic: MainTopicsModel
}

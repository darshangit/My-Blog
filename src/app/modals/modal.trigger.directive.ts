import { Directive, OnInit, Input, ElementRef, Inject } from '@angular/core'
import { JQ_TOKEN } from '../common/jQuery.services'

@Directive({
    selector: '[appModalTrigger]',
})
export class ModaltriggerDirective implements OnInit {

    @Input('appModalTrigger') modalId: string
    private el: HTMLElement
    constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
        this.el = ref.nativeElement
    }

    ngOnInit() {
        console.log('I am here')
        console.log(this.modalId)
        this.el.addEventListener('click', (e) => {
            this.$(`#${this.modalId}`).modal({})
        })
    }
}
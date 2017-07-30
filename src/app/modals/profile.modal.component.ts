import { Component, Input, ViewChild, ElementRef, Inject, OnInit, OnChanges } from '@angular/core'
import { JQ_TOKEN } from '../common/jQuery.services'
import { GoogleLoginService } from 'app/services/google-login.services'
import { UserProfileResponse } from 'app/data-models/user-profile-response.model'

@Component({
    selector: 'app-profile-modal',
    templateUrl: './profile.modal.component.html'
})
export class ProfileComponent implements OnChanges {

    userProfileResponse: UserProfileResponse
    @Input() elementId: string
    @Input() userId: string
    ariaLevel = 0
    @ViewChild('profilecontainer') containerEL: ElementRef
    imageSrc: string
    constructor( @Inject(JQ_TOKEN) private $: any, private googleLoginService: GoogleLoginService) { }

    ngOnChanges(): void {
        if (this.userId !== null && this.userId !== undefined && this.userId !== '') {

            this.googleLoginService.getUserProfile(this.userId).subscribe((resp) => {
                this.userProfileResponse = resp
                this.ariaLevel = resp.learningLevel
                this.$('.progress-bar').css('width', this.ariaLevel + '%').attr('aria-valuenow', this.ariaLevel);
                this.getImageSource(this.ariaLevel)
            });
        }
    }

    closeModal() {
        this.$(this.containerEL.nativeElement).modal('hide')
    }

    getImageSource(progressLevel: number) {

        if (progressLevel <= 20) {
            this.imageSrc = '../../assets/profile-level/level1.jpg';
        }else if (progressLevel >= 21 && progressLevel <= 40) {
            this.imageSrc = '../../assets/profile-level/level2.jpg';
        }else if (progressLevel >= 41 && progressLevel <= 60){
            this.imageSrc = '../../assets/profile-level/level3.jpg';
        }else if (progressLevel >= 61 && progressLevel <= 80){
            this.imageSrc = '../../assets/profile-level/level4.jpg';
        }else if (progressLevel >= 81 && progressLevel <= 100){
            this.imageSrc = '../../assets/profile-level/level5.jpg';
        }
    }
}

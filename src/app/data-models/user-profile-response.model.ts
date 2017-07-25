import { UserAction } from 'app/data-models/user-action.model'

export interface UserProfileResponse {

    totalSiteVisits: number
    totalTopicsPresent: number
    totalTopicsViewed: number
    learningLevel: number
    recentlyViewed: UserAction[]
    favourites: UserAction[]
}

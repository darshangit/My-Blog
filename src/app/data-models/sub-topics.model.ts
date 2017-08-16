import { SublistingPrevNextModel } from 'app/data-models/sub-listing-prev-next.model'

export interface SubTopicModel {
    subListingUUID: number
    subListingName: string
    subListingStatus: string
    listingLinks: string
    subListingPrevNextEntity: SublistingPrevNextModel
}

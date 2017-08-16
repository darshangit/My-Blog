import { SublistingPrevNextModel } from 'app/data-models/sub-listing-prev-next.model'

export interface SubListingEntityModel {
    subListingUUID: number,
    subListingName: string,
    subListingStatus: string,
    listingLinks: string,
    orderNumber: number,
    subListingPrevNextEntity: SublistingPrevNextModel
}
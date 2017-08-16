import { SublistingPrevNextModel } from 'app/data-models/sub-listing-prev-next.model'

export interface SubListingResponse {
    title: string,
    preDescription: string[],
    note: string[],
    mainDescription: string[],
    image: string,
    code: string[],
    postDescription: string[],
}

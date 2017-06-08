import { SubTopicModel } from 'app/data-models/sub-topics.model'

export interface SubTopicsResponseModel {
    subTopicName: string,
    subListings: SubTopicModel[]
}

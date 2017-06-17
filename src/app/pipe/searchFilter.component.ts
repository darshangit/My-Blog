import { Pipe, PipeTransform } from '@angular/core'
import { SubListingAllResponse } from 'app/data-models/sub-listing-all-response.model'

@Pipe({
  name: 'searchPipe',
  pure: false
})
export class SearchPipe implements PipeTransform {
  transform(data: SubListingAllResponse[], searchTerm: string): any[] {
    if (searchTerm !== undefined && data !== undefined) {
      searchTerm = searchTerm.toUpperCase();
      return data.filter(item => {
        return (item.subListingName.toUpperCase().indexOf(searchTerm) !== -1)
      });
    }
  }
}
import { browser, by, element } from 'protractor';

export class TripsPage {

    getAllTripsRows(){
        return element.all(by.className("trips"))
    }

}
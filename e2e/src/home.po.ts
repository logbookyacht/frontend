    
import { browser, by, element } from 'protractor';

export class HomePage {

    getAllTripRows(){
        return element.all(by.className("trips"))
    }
    getAllBoatRows(){
        return element.all(by.className("boat"))
    }
    getAllHarborRows(){
        return element.all(by.className("harbor"))
    }
    
}
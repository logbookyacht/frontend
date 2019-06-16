    
import { browser, by, element } from 'protractor';

export class AppPage {

  async navigateToHome() {
    element(by.className('home')).click();
  }

  navigateTo(page: string) {
    return browser.get(browser.baseUrl+page) as Promise<any>;
  }

  getAllNavbarButtons(){
    return element.all(by.className("routerlink"))
  }

  getTripsButton(){
    return element(by.className("trips"))
  }
  
  getLogButton(){
    return element(by.className("log"))
  }

  getBoatButton(){
    return element(by.className("boat"))
  }
  getHarborButton(){
    return element(by.className("harbor"))
  }
}
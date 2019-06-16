    
import { browser, by, element } from 'protractor';

export class LogPage {

    getFieldName(){
        return element(by.css("input[formControlName=title]"));
      }
    
      getFieldDate(){
        return element(by.css("input[formControlName=date]"));
      }
    
      getFieldDistance(){
        return element(by.css("input[formControlName=distance]"));
      }
      
      getFieldFrom(){
        return element(by.css("input[formControlName=from]"));
      }
      
      getFieldTo(){
        return element(by.className("to"));
      }
      
      getSubmitButton(){
        return element(by.className('create'));
      }
}
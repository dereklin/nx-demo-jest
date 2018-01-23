import { browser, by, element } from 'protractor';

export class AppPage {
  public navigateTo() {
    return browser.get('/');
  }

  public text() {
    return browser.findElement(by.css('body')).getText();
  }
}

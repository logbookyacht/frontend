import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { LoginPage } from './login.po';
import { TripsPage } from './trips.po';
import { User } from 'src/app/models/User/user';
import { LogPage } from './log.po';
import { Log } from 'src/app/models/Log/log';

var TripCount = 0; 

describe('workspace-project App', () => {
  let page: AppPage;
  let login: LoginPage;

  beforeEach(() => {
    login = new LoginPage();
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo('login');
    expect(login.getTitleText()).toEqual('Login');
  });

  it('should not login with wrong credentials', () => {
    page.navigateTo('login');
    login.getFieldEmail().sendKeys("a.a@a");
    login.getFieldPassword().sendKeys("h");
    login.getLoginButton().click();

    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+"home");
  })

  it('should login with correct credentials', () => {
    page.navigateTo('login');
    login.getFieldEmail().sendKeys("a.a@a");
    login.getFieldPassword().sendKeys("a");
    login.getLoginButton().click();

    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+"home");
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
    browser.refresh();
  });
});

describe('Navbar tests', () => {
  let page: AppPage
  let trips: TripsPage

  beforeEach(() => {
    page = new AppPage();
    trips = new TripsPage();
  });

  it('should check all navbar options', async () => {
    var buttons = await page.getAllNavbarButtons().count();
    var value = await browser.executeScript("return window.localStorage.getItem('currentUser');") as string;
    if((JSON.parse(value) as User)){
      expect(buttons).toEqual(0);
    } else {
      expect(buttons).toEqual(4)
    }
  })

  it('should go to Trips', async () => {
    page.navigateToHome();
    var button = await page.getTripsButton();
    button.click();

    browser.sleep(1000)

    TripCount = await trips.getAllTripsRows().count();

    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+"attendance");
  })
  
  it('should go to create log page', async () => {
    page.navigateToHome();
    var button = await page.getLogButton();
    button.click();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+"log");
  })
  
  it('should go to create boat page', async () => {
    page.navigateToHome();
    var button = await page.getBoatButton();
    button.click();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+"boat");
  })

  it('should go to create harbor page', async () => {
    page.navigateToHome();
    var button = await page.getHarborButton();
    button.click();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+"harbor");
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
    browser.refresh();
  });
});

describe('Create Log tests', () => {
  let page: AppPage
  let log: LogPage

  beforeEach(() => {
    page = new AppPage();
    log = new LogPage();
  });

  it('should create new project', async () => {
    page.navigateTo("project");

    log.getFieldName().sendKeys("Test")
    log.getFieldDate().sendKeys("Test")
    log.getFieldDistance().sendKeys(5)
    log.getFieldFrom().sendKeys("test")
    log.getFieldTo().sendKeys("test")

    log.getSubmitButton().click();

    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+"log");


    // var amount = await attendance.getAllAttendanceRows().count();
    // expect(amount).toEqual((attendanceCount+1))
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
    browser.refresh();
  });
}); 
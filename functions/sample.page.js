import Page from './page.js';

class samplePage extends Page {
  get signInButton() 
  {
    return browser.element('//a[@class="login"]');
  }  
  get emailBar()
  {
    return browser.element('//input[contains(@class,"account_input")]');
  }
  get submitMailButton()
  {
    return browser.element('//button[contains(@class,"button-medium")]');
  }
 
  get firstNameBar()
  {
    return browser.element('//input[@id="customer_firstname"]');
  }
  get lastNameBar()
  {
    return browser.element('//input[contains(@id,"customer_lastname")]');
  }
  get emailEnterBar()
  {
    return browser.element('//input[contains(@id,"email")]');
  }
  get passwordBar()
  {
    return browser.element('//input[contains(@id,"passwd")]');
  }
  get birthdayBar()
  {
    return browser.element('//select[@id="days"]');
  }
  get birthdayMonth()
  {
    return browser.element('//select[@id="months"]');
  }
  get birthdayYear()
  {
    return browser.element('//select[@id="years"]');
  }
  get malegenderbutton()
  {
    return browser.element('//input[contains(@id,"id_gender1")]');
  }
  get femalegenderbutton()
  {
    return browser.element('//input[contains(@id,"id_gender2")]');
  }
  get firstAddressName()
  {
    return browser.element('//input[@id="firstname"]');
  }
  get lastAddressName()
  {
    return browser.element('//input[@id="lastname"]');
  }
  get AddressBar()
  {
    return browser.element('//input[@id="address1"]');
  }
  get CityBar()
  {
    return browser.element('//input[@id="city"]');
  }
  get StateBar()
  {
    return browser.element('//select[@id="id_state"]');
  }
  get ZipCode()
  {
    return browser.element('//input[@id="postcode"]');
  }
  get CountryBar()
  {
    return browser.element('//select[@id="id_country"]');
  }
  get MobileBar()
  {
    return browser.element('//input[@id="phone_mobile"]');
  }
  get SubmitAccountButton()
  {
    return browser.element('//button[@id="submitAccount"]');
  }
  get SearchItemsTab()
  {
    return browser.element('//input[contains(@id,"search_query_top")]');
  }
  get SearchButton()
  {
    return browser.element('//button[contains(@class,"button-search")]');
  }
  get addToCartButton()
  {
    return browser.element('//a[contains(@class,"add_to_cart_button")]');
  }
  goToHome () {
    browser.url('http://automationpractice.com');
    browser.pause(500);
  }
  goToLogin () {
    this.signInButton.click();
    browser.pause(500);
  }
  goToEnterEmail(){
    this.emailBar.setValue("userautomation@mail.com");
    browser.pause(500);
  }
  goToCreateAccount(){
    this.submitMailButton.click();
    browser.pause(500);
  }
  goToFillDetails(){
    browser.pause(5000);
    this.femalegenderbutton.click();
    this.firstNameBar.setValue("ab");
    this.lastNameBar.setValue("cd");
    this.emailEnterBar.setValue("userautomation@mail.com");
    this.passwordBar.setValue("Password123");
    this.birthdayBar.selectByValue(1);
    this.birthdayMonth.selectByValue(1);
    this.birthdayYear.selectByValue(2001);
    this.firstAddressName.setValue("wx");
    this.lastAddressName.setValue("yz");
    this.AddressBar.setValue("Street 1");
    this.CityBar.setValue("City1");
    this.StateBar.selectByVisibleText("Indiana");
    this.ZipCode.setValue("69501");
    this.CountryBar.selectByVisibleText("United States");
    this.MobileBar.setValue("987654321");
    this.SubmitAccountButton.click();
    browser.pause(1000);
  }
  searchItems(){
    this.SearchItemsTab.setValue("shirts");
    this.SearchButton.click();
  }
  addToCart(){
    this.addToCartButton.click();
  }
};
export default new samplePage();

import samplePage from '../functions/sample.page.js';
import {Given, When, Then} from 'cucumber';

  Given(/^User goes to My Store Home page$/, () => {
    samplePage.goToHome();
  });

  When(/^User goes to sign In page$/, () => {
    samplePage.goToLogin();
  });
  Then(/^User enters Email address$/,()=>{
    samplePage.goToEnterEmail();
  });
  Then(/^User submits Create an account button$/,()=>{
    samplePage.goToCreateAccount();
  });
  Then(/^User enters form details$/,()=>{
    samplePage.goToFillDetails();
  });
  Then(/^User searches for an item$/,()=>{
    samplePage.searchItems();
  });
  Then(/^User clicks Add to Cart Button$/,()=>{
    samplePage.addToCart();
  })
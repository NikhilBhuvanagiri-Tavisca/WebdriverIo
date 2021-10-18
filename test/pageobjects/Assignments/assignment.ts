//  import Page from '../page';
// class assignment{
//import { getConstantValue } from "typescript"

class assignment {
    open():WebdriverIO.Element {
        return browser.url("https://www.google.com/")
    }

    get pageContent():WebdriverIO.Element{ return $("#SIvCob")}
    clickPageContent(){
        this.pageContent.waitForDisplayed()
        return this.pageContent.getText()
    }
    get hoteltab():WebdriverIO.Element { return $("#search-hotel-button") }
    clickonhoteltab() {
        this.hoteltab.waitForExist()
        this.hoteltab.moveTo()
        this.hoteltab.click()
    }
    get destination():WebdriverIO.Element { return $("#inputDestination") }
    //destinationvalue(index) {return $('#ui-id-1 .autoSuggest-icon:nth-child(${index})')}
    enterTextToDestination(text:string) {
        this.destination.waitForDisplayed()
        this.destination.setValue(text)
        this.dropdownvalue.keys("Enter")
    }
    get checkindate() { return $("#inputCheckInDate") }
    get checkoutdate() { return $("#inputCheckOutDate") }
    get dropdownvalue(){return $("ul#ui-id-1 li:nth-child(1)")}

    //Date in MM-DD-YY format
    selectCheckInDate(date:string){return $(`#jd-${date}`)}
    clickCheckIn(date:string){
        this.checkindate.waitForDisplayed()
        this.checkindate.click()
        this.selectCheckInDate(date).click()
    }
    selectCheckOutDate(date:string){return $(`#jd-${date}`)}
    clickCheckOut(date:string){
        this.checkoutdate.waitForDisplayed()
        this.checkoutdate.click()
        this.selectCheckOutDate(date).click()
    }
    get searchBtn(){return $("div.grid__col-xs-12.grid__col-lg-2.grid__col-auto.is-bottom-aligned.hide-mobile button")}
    // selectCheckInDate(date:String){
    //     this.
    //     jd-10-13-21
    // }
    clickSearchBtn(){
        this.searchBtn.waitForDisplayed();
        this.searchBtn.click()
    }
    get header(){return $("div.wayfinder-inner-container.js-wayfinder-inner-container.clearfix h1")}
    get wayFinder(){return $("div.wayfinder-info")}
    wayFinderText(){
        this.wayFinder.wairForDisplayed()
        return this.wayFinder.getText()
    }
    get hotelNameFilter(){return $("input#HotelNameFilter")}
    enterTextToHotelNameFilter(text:string){
        this.hotelNameFilter.waitForDisplayed()
        this.hotelNameFilter.setValue(text)
        this.hotelNameFilter.keys("Enter")
    }
    get hotelName(){return $("span.margin-right-1")}
    hotelNameText(){
        this.hotelName.waitForDisplayed()
        return this.hotelName.getText()
    }
    get parentStars():WebdriverIO.Element{return $("div.hotel-details-star-rating-container")}
    get childStars():WebdriverIO.Element{return this.parentStars.$$("svg")}
    childStarsCount(){
        this.childStars.waitForDisplayed()
        return this.childStars.length()
    }
    get roomAvail(){return $("h3#hotel-rooms-count strong")}
    roomAvailability(){
        this.roomAvail.waitForDisplayed()
        return this.roomAvail.getText()
    }
    get parentstar() { return $('ul') }
    //get childstars() { return this.parentstar.$$('li') }
    // specificchildrating(index:number) {
    //     return this.parentstar.$(`li:nth-child(${index})`)
    // }
}
module.exports = new assignment()

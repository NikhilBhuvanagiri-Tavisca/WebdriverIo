/** Go through concepts of WebDriverIo from this link https://webdriver.io/docs/gettingstarted.html and work on this assignment.
 * Problem Statement:Write test cases to test https://www.google.com/page. Test cases should include testing of 
 * a) Title of the page
 * b) Test case for content of the page ("Google offered in") */

import { isExportDeclaration } from "typescript"
const assign=require("../pageobjects/Assignments/assignment")
describe("Launching google and checck title", function (){
    it.skip("Google should launch", function (){
        //assignment.open("https://www.google.com/")
        // browser.url("https://www.google.com/")
        assign.open()
        browser.pause(2000)
        //assert.equal("Google", browser.getTitle())
        console.log("Title", browser.getTitle())
        expect(browser.getTitle()).toBe("Google")
    })
    it.skip("Content of the page", function(){
        //assign.open()
        browser.url("https://www.google.com/")
        expect(assign.clickPageContent()).toBe("Google offered in: हिन्दी বাংলা తెలుగు मराठी தமிழ் ગુજરાતી ಕನ್ನಡ മലയാളം ਪੰਜਾਬੀ")
    })
 /**3.2
 * 1> Search Hotel by filling mandatory details and verify following in result page.
 * Hotel count Wayfinder Info present in the top of page should matches with yours search criteria.
 * 2> Verify results present on the page have same search location.Site used for this: https://vacationsdirect.cxtrvl.com*/
    it.skip("lSearch Hotel by filling mandatory details", function (){
        browser.url("https://vacationsdirect.com/")
        assign.clickonhoteltab()
        browser.pause(10000)
        assign.enterTextToDestination("Las Vegas")
        assign.clickCheckIn("10-17-21")
        assign.clickCheckOut("10-20-21")
        assign.clickSearchBtn()
        expect(assign.header.getText()).toBe("Hotel search results")
        isExportDeclaration(assign.wayFinderText()).toBe("Las Vegas, NV (LAS) | Sun, Oct 17, 2021 - Wed, Oct 20, 2021Sun, Oct 17, 2021 - Wed, Oct 20, 2021")
    })
    /**1> Verify hotel results after applying star rating filter.
     * 2> Verify hotel results after applying hotel name filter */
    it("Verify hotel results after applying star rating filter", function(){
        
    })

    it("verify hotel results after applying hotel name filter",function (){
        assign.enterTextToHotelNameFilter("delano las vegas at mandalay bay")       
    })
    /**1> Verify hotel name and star rating of any random selected hotel on hotel details page.
     * 2> Verify room availability of selected hotel */
    it.skip("Verify hotel name and star rating of any random selected hotel on hotel details page", function(){
        expect(assign.hotelNameText()).toBe("Delano Las Vegas at Mandalay Bay")
        expect(assign.childStarsCount().toBe(5))
    })
    it.skip("Verify room availability of selected hotel", function(){
        expect(assign.roomAvailability()).toBe("7 Rooms")       
    })
})






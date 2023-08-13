module.exports = class Xpaths {
    static userId = '//input[@id="userid"]';
    static password = '//input[@id="password"]';
    static mobileAppCode = '//input[@label="Mobile App Code"]';
    static submit = '//button[@type="submit"]';
    static reportTab = '//a//span[@class="reports-id"]';
    static tradebook = '//a//span[text()="Tradebook"]';
    static segmentSelect = '//label[text()="Segment"]/following-sibling::select';
    static segmentSelectValue = '//label[text()="Segment"]/following-sibling::select//option[text()="VALUE"]';
    static dateBoxClick = '//input[@name="date"]';
    static fromCurrentYearClick = '//strong[text()="From"]//parent::div//parent::div//following-sibling::div[contains(@class, "mx-calendar-header")]//a[@class="mx-current-year"]';
    static fromYearClick = '//strong[text()="From"]//parent::div//parent::div//following-sibling::div[contains(@class, "mx-calendar-content")]//span[text()="FROM_YEAR"]';
    static fromMonthClick = '//strong[text()="From"]//parent::div//parent::div//following-sibling::div[contains(@class, "mx-calendar-content")]//span[text()="FROM_MONTH"]';
    static fromDateClick = '//strong[text()="From"]//parent::div//parent::div//following-sibling::div[contains(@class, "mx-calendar-content")]//td[@title="FROM_FULL_DATE" and text()="FROM_DATE"]';
    static toCurrentYearClick = '//strong[text()="To"]//parent::div//parent::div//following-sibling::div[contains(@class, "mx-calendar-header")]//a[@class="mx-current-year"]';
    static toYearClick = '//strong[text()="To"]//parent::div//parent::div//following-sibling::div[contains(@class, "mx-calendar-content")]//span[text()="TO_YEAR"]';
    static toMonthClick = '//strong[text()="To"]//parent::div//parent::div//following-sibling::div[contains(@class, "mx-calendar-content")]//span[text()="TO_MONTH"]';
    static toDateClick = '//strong[text()="To"]//parent::div//parent::div//following-sibling::div[contains(@class, "mx-calendar-content")]//td[@title="TO_FULL_DATE" and text()="TO_DATE"]';
}
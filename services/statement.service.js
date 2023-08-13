
const Xpaths = require('../xpaths/xpaths');
const docx = require('docx');
const fs = require('fs');
const chromedriver = require('chromedriver');
const {Builder, By, Key, until, ITimeouts, WebDriver} = require('selenium-webdriver');
const { AlignmentType, Document, Footer, Header, ImageRun, HeadingLevel,
    HorizontalPositionRelativeFrom, HorizontalPositionAlign,
    VerticalPositionRelativeFrom, VerticalPositionAlign,
    Packer, Paragraph, TextRun, UnderlineType, Table, TableCell, TableRow } = docx;
const segmentValues = ['Equity', 'Futures & Options', 'Currency', 'Commodity', 'Mutual funds', 'Equity (external trades)', 'MF (external trades)'];

async function example() {
    
}

let StatementService = {
    async getStatement(data) {
        let driver = await new Builder().forBrowser('chrome').build();
        try {
            let fromDate = new Date(data.dateFrom);
            let date = fromDate.getDate();;
            let year = fromDate.getFullYear();
            let month = fromDate.toLocaleString('en-US', { month: 'short' });
          
            let toDay = new Date(data.dateTo);
            let toDate = toDay.getDate();;
            let toYear = toDay.getFullYear();
            let toMonth = toDay.toLocaleString('en-US', { month: 'short' });

            await driver.manage().window().maximize();
            await driver.manage().setTimeouts({ implicit: 10000 });
            await driver.get('https://console.zerodha.com/dashboard');
            await driver.findElement(By.xpath(Xpaths.userId)).sendKeys(data.userId);
            await driver.findElement(By.xpath(Xpaths.password)).sendKeys(data.password);
            await driver.manage().setTimeouts({ implicit: 5000 });
            await driver.findElement(By.xpath(Xpaths.submit)).click();
            await driver.manage().setTimeouts({ implicit: 5000 });
            await driver.findElement(By.xpath(Xpaths.mobileAppCode)).sendKeys(data.mobileAppCode);
            await driver.manage().setTimeouts({ implicit: 5000 });
            await driver.findElement(By.xpath(Xpaths.reportTab)).click();
            await driver.manage().setTimeouts({ implicit: 5000 });
            await driver.findElement(By.xpath(Xpaths.tradebook)).click();

            fs.mkdir(data.userId, function(err) {});
            await driver.manage().setTimeouts({ implicit: 5000 });
            for(let i = 0; i < segmentValues.length; i++) {
                await driver.manage().setTimeouts({ implicit: 5000 });
                i !== 0 ? await driver.findElement(By.xpath(Xpaths.segmentSelect)).sendKeys(segmentValues[i]): '';
                await driver.wait(until.elementLocated(By.xpath(Xpaths.dateBoxClick)));
                await driver.findElement(By.xpath(Xpaths.dateBoxClick)).click();
                await driver.wait(until.elementLocated(By.xpath(Xpaths.fromCurrentYearClick)));
                await driver.findElement(By.xpath(Xpaths.fromCurrentYearClick)).click();
                await driver.wait(until.elementLocated(By.xpath(Xpaths.fromYearClick.replace("FROM_YEAR", year.toString()))));
                await driver.findElement(By.xpath(Xpaths.fromYearClick.replace("FROM_YEAR", year.toString()))).click();
                await driver.wait(until.elementLocated(By.xpath(Xpaths.fromMonthClick.replace("FROM_MONTH", month))));
                await driver.findElement(By.xpath(Xpaths.fromMonthClick.replace("FROM_MONTH", month))).click();
                await driver.wait(until.elementLocated(By.xpath(Xpaths.fromDateClick.replace("FROM_DATE", date.toString()).replace("FROM_FULL_DATE", data.dateFrom))));
                await driver.findElement(By.xpath(Xpaths.fromDateClick.replace("FROM_DATE", date.toString()).replace("FROM_FULL_DATE", data.dateFrom))).click();
            
                await driver.wait(until.elementLocated(By.xpath(Xpaths.toCurrentYearClick)));
                await driver.findElement(By.xpath(Xpaths.toCurrentYearClick)).click();
                await driver.wait(until.elementLocated(By.xpath(Xpaths.toYearClick.replace("TO_YEAR", toYear.toString()))));
                await driver.findElement(By.xpath(Xpaths.toYearClick.replace("TO_YEAR", toYear.toString()))).click();
                await driver.wait(until.elementLocated(By.xpath(Xpaths.toMonthClick.replace("TO_MONTH", toMonth))));
                await driver.findElement(By.xpath(Xpaths.toMonthClick.replace("TO_MONTH", toMonth))).click();
                await driver.wait(until.elementLocated(By.xpath(Xpaths.toDateClick.replace("TO_DATE", toDate.toString()).replace("TO_FULL_DATE", data.dateTo))));
                await driver.findElement(By.xpath(Xpaths.toDateClick.replace("TO_DATE", toDate.toString()).replace("TO_FULL_DATE", data.dateTo))).click();
                await driver.wait(until.elementLocated(By.xpath(Xpaths.submit)));
                await driver.findElement(By.xpath(Xpaths.submit)).click();
                await driver.wait(until.elementLocated(By.xpath(Xpaths.submit)));
                let image = await driver.takeScreenshot();
                fs.writeFile(data.userId + '/' + i + '.png', image, 'base64', function(err) {});
            }
        } finally {
            await driver.quit();
        }

        const doc = new Document({
            sections: [{
                children: [
                    new Paragraph({
                        children: [
                            new ImageRun({
                                data: fs.readFileSync(data.userId + "/0.png"),
                                transformation: {
                                    width: 600,
                                    height: 600,
                                }
                            }),
                        ],
                    }),
                    new Paragraph({
                        children: [
                            new ImageRun({
                                data: fs.readFileSync(data.userId + "/1.png"),
                                transformation: {
                                    width: 600,
                                    height: 600,
                                }
                            }),
                        ],
                    }),
                    new Paragraph({
                        children: [
                            new ImageRun({
                                data: fs.readFileSync(data.userId + "/2.png"),
                                transformation: {
                                    width: 600,
                                    height: 600,
                                }
                            }),
                        ],
                    }),
                    new Paragraph({
                        children: [
                            new ImageRun({
                                data: fs.readFileSync(data.userId + "/3.png"),
                                transformation: {
                                    width: 600,
                                    height: 600,
                                }
                            }),
                        ],
                    }),
                    new Paragraph({
                        children: [
                            new ImageRun({
                                data: fs.readFileSync(data.userId + "/4.png"),
                                transformation: {
                                    width: 600,
                                    height: 600,
                                }
                            }),
                        ],
                    }),
                    new Paragraph({
                        children: [
                            new ImageRun({
                                data: fs.readFileSync(data.userId + "/5.png"),
                                transformation: {
                                    width: 600,
                                    height: 600,
                                }
                            }),
                        ],
                    }),
                    new Paragraph({
                        children: [
                            new ImageRun({
                                data: fs.readFileSync(data.userId + "/6.png"),
                                transformation: {
                                    width: 600,
                                    height: 600,
                                }
                            }),
                        ],
                    }),
                ],
            }],
        });

        fs.rmSync(data.userId, { recursive: true, force: true });

        const b64string = await Packer.toBase64String(doc);
        return Buffer.from(b64string, 'base64');
    }
}

module.exports = StatementService;

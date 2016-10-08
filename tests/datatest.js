var webdriver = require('selenium-webdriver')
var By = webdriver.By;
var chai = require('chai');

var expect = chai.expect;

describe('The test case for data',function(){
  var driver;
  this.timeout(20000);

  it('tesst the data page for chrome',function(){
    driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    return driver.get('http://localhost:8090/widgets/dataTable.html').then(function(){
      var td = driver.findElement(By.css('table.u-table>tbody>tr:first-child>td:nth-child(2)'));
      return td.getText();
    }).then(function(text){
      expect(text).to.equal('用友2016电脑采购对账1');
    }).then(function(){
      driver.findElement(By.css('div.u-pagination li:nth-child(3)')).click();
      var td = driver.findElement(By.css('table.u-table>tbody>tr:first-child>td:nth-child(2)'));
      return td.getText();
    }).then(function(text){
      expect(text).to.equal('用友2016电脑采购对账11');
    });
  })
})

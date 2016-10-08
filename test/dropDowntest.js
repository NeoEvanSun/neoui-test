var webdriver = require('selenium-webdriver');
var chai = require('chai');
var By = webdriver.By;
var expect = chai.expect;

describe('测试DropDown页面',function(){
  var url = "http://localhost:8090/widgets/dropDown.html";
  var driver;
  this.timeout(50000);
  afterEach(function(){
    driver.quit();
  })
  it('测试普通dropDown功能选择"男"',function(){
    var widgetDiv;
    driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    return driver.get(url)
    .then(function(){
      widgetDiv = driver.findElement(By.css('div[id="combo1"]'));
    })
    .then(function(){
      widgetDiv.findElement(By.css('input.u-form-control')).click();
    })
    .then(function(){
      return widgetDiv.findElement(By.css('ul.u-combo-ul li:nth-child(1)'))
    })
    .then(function(selection){
      driver.actions().mouseMove(selection).perform();
      driver.actions().click(selection).perform();
    })
    .then(function(){
      return widgetDiv.findElement(By.css('input.u-form-control')).getAttribute('value');
    })
    .then(function(selectValue){
      expect(selectValue).to.equal("男");
    })
  });


  it('测试普通dropDown功能选择"女"',function(){
    var widgetDiv;
    driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    return driver.get(url).then(function(){
      widgetDiv = driver.findElement(By.css('div[id="combo1"]'));
    }).then(function(){
      widgetDiv.findElement(By.css('input.u-form-control')).click();
    })
    .then(function(){
      return widgetDiv.findElement(By.css('ul.u-combo-ul li:nth-child(2)'))
    })
    .then(function(selection){
      driver.actions().mouseMove(selection).perform();
      driver.actions().click(selection).perform();
    })
    .then(function(){
      return widgetDiv.findElement(By.css('input.u-form-control')).getAttribute('value');
    })
    .then(function(selectValue){
      expect(selectValue).to.equal("女");
    })
  })

  it('测试多选dropDown,对一个选项反复点击',function(){
    var widgetDiv;
    driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    return driver.get(url).then(function(){
      widgetDiv = driver.findElement(By.css('div[id="combo3"]'));
    })
    .then(function(){
      widgetDiv.findElement(By.css('input.u-form-control')).click();
    })
    .then(function(){
      return widgetDiv.findElement(By.css('ul.u-combo-ul>li:nth-child(1)'));
    })
    .then(function(selection){
      driver.actions().click(selection).perform();
    })
    .then(function(){
      return widgetDiv.findElement(By.css('div.u-input-group div[class="u-combo-name"][key="01"]')).isDisplayed();
    })
    .then(function(isDisplayed){
      expect(isDisplayed).to.equal(true);
    })
    .then(function(selection){
      driver.actions().click(selection).perform();
    })
    .then(function(){
      return widgetDiv.findElements(By.css('div.u-input-group div[class="u-combo-name"]'));
    })
    .then(function(eles){
      return eles.forEach(function(ele){
        ele.getAttribute("key").then(function(key){
          console.log(key);
          if(key == "01"){
            throw new Error('点击01选择项后,没有消失');
          }
        })
      })
    })
  })
})

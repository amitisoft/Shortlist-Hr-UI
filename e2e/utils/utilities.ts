import {ProtractorDriver} from './protractor-driver';
import {browser, protractor, element, by} from "protractor";
import {expect} from 'chai';

let path = require('path');

export class Utilities {
  private protractorDriver: ProtractorDriver = new ProtractorDriver();

  maximizeWindow() {
    return this.protractorDriver.maximizeWindow();
  }

  acceptAlert() {
    return browser.wait(protractor.ExpectedConditions.alertIsPresent(), 90000).then(function (ispresent) {
      return browser.switchTo().alert().accept();
    });
  }

  verifyAlertText(alertText: string) {
    return browser.wait(protractor.ExpectedConditions.alertIsPresent(), 90000).then(function (ispresent) {
      return browser.switchTo().alert().getText().then(function (text) {
        expect(alertText).to.equal(text);
      });
    });
  }

  getTableColumnIndex(tableXpath, columnName) : any {
    let col = element.all(by.xpath("" + tableXpath + "/thead/tr/th"));
    return col.count().then(function (cCount) {
      function loop(i){
        if( i >= cCount) {
          return null; //not found
          }else{
          return col.get(i).getText().then(function(colName) {
            if (colName == columnName) {
              return i;
            }else{
              return loop(i+1);
            }
          });
        }
      }
      return loop(0);
    });
  }

  verifyTableDataisPresent(tableXpath, columnIndex, rowData):any {
    let data;
    let row = element.all(by.xpath(""+tableXpath+"/tbody/tr"));
    return row.count().then(function (rCount) {
      function loop(k) {
        if (k > rCount) {
          return null; //not found
        } else {
          return element.all(by.xpath(""+tableXpath+"/tbody/tr["+k+"]/td["+columnIndex+"]")).getText().then(function (rData) {
            data = rData.toString();
              if (data == rowData) {
                return true;
                } else {
                return loop(k + 1);
              }
          });
        }
      }
      return loop(1);
    });
  }

  getTableRowIndex(tableXpath, columnIndex, rowData):any {
    let data;
    let row = element.all(by.xpath(""+tableXpath+"/tbody/tr"));
    return row.count().then(function (rCount) {
      function loop(j) {
        if (j > rCount) {
          return null; //not found
        } else {
          return element.all(by.xpath(""+tableXpath+"/tbody/tr["+j+"]/td["+columnIndex+"]")).getText().then(function (rData) {
            data = rData.toString();
            if (data == rowData) {
              return j;
            } else {
              return loop(j + 1);
            }
          });
        }
      }
      return loop(1);
    });
  }

  getTableData(tableXpath, columnIndex, rowIndex) {
    return element.all(by.xpath(""+tableXpath+"/tbody/tr["+rowIndex+"]/td["+columnIndex+"]")).getText().then(function (data) {
      return data;
    });
  }

  resolvePath(path) {
    return path.resolve(__dirname, path).then(function (resolvedPath) {
      return resolvedPath;
    });
  }

}

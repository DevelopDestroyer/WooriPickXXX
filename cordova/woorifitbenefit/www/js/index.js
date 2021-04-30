/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

function getPhoneNumber(testNum){
    document.getElementById("wooriFrame").contentWindow.receivePhoneNumberList(2);
}

var phoneInfo = "3";
window.addEventListener('message', function(e) {
  console.log("ok : " + e.data); // { hello: 'parent' }

  var tmpData = ".";
  tmpData = e.data.toString();
  if(tmpData.split(";;;")[0] == "parent"){
    console.log("detected parent send");
    return;
  }
  findContact();
  var item = "parent;;;" + phoneInfo;//localStorage.getItem('dummy');
  console.log(item); // zerocho
  //document.getElementById('wooriFrame').contentWindow.postMessage(item, '*');
});

document.getElementById("myButton").addEventListener("click", buttonEv);
function buttonEv(){
   findContact();
}

function findContact() {
   var options = new ContactFindOptions();
   options.filter = "";            // ""은 전체 출력
   options.multiple = true;
   var fields = ["displayName", "name", "nickname"];
   navigator.contacts.find(fields, contactfindSuccess, contactfindError, options);
   function contactfindSuccess(contacts) {
      var temp = "";
      for (var i = 0; i < contacts.length; i++) { 
        if(contacts[i].phoneNumbers != null && contacts[i].phoneNumbers.length > 0){
          temp += contacts[i].name.givenName + ":" + contacts[i].displayName + ":" + contacts[i].phoneNumbers[0].value + ";";
        }
      }
      phoneInfo = temp;
      //alert(phoneInfo);
      document.getElementById('wooriFrame').contentWindow.postMessage("parent;;;" + phoneInfo, '*');
      var testNumber = "이부형:이부형:011-0000-0000;";
      testNumber += "이성범:이성범:011-1111-1111;";
      testNumber += "구광민:구광민:011-2222-2222;";
      testNumber += "한재선:한재선:011-3333-3333;";
      testNumber += "이진영:이진영:010-2222-1234;";
      testNumber += "최서진:최서진:010-3333-1234;";
      testNumber += "성정민:성정민:010-4444-1234;";
      testNumber += "위사랑:위사랑:010-5555-1234;";
      testNumber += "안재홍:안재홍:017-1010-1010;";
      testNumber += "추대윤:추대윤:017-2020-2020;";
      testNumber += "양훈지:양훈지:017-3030-3030;";
      testNumber += "정윤철:정윤철:017-4040-4040;";
      testNumber += "김가은:김가은:017-5050-5050;";

      //document.getElementById('wooriFrame').contentWindow.postMessage("parent;;;" + testNumber, '*');

   }
   function contactfindError(message) { alert('주소록 가져오기 실패 : ' + message); }	
}
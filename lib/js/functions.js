returnSuccess = function (msg, data) {
    if (msg === undefined) {
        msg = "The call succeeded. Cheers!";
    }
    var returnValue = {status: true, message: msg, data: data};
    console.log(msg);
    return returnValue;
};

returnFaliure = function (msg, data) {
    if (msg === undefined) {
        msg = "The call succeeded. Cheers!";
    }
    var returnValue = {status: false, message: msg, data: data};
    console.log(msg);
    return returnValue;
};

validateJson = function (jsonData) {
   var returnType = '';
   if(jsonData== 'object'){
       jsonData.forEach(function (ex) {
               for (var de in ex) {
                   if(ex[de]==''){
                   returnType = 'Blank';
               }
               }
           })
   }else{
   for (var prop in jsonData) {
       if (typeof jsonData[prop] == 'object') {
           jsonData[prop].forEach(function (ex) {
               for (var de in ex) {
                   if(ex[de]==''){
                   returnType = 'Blank';
               }
               }
           })
       } else {
           if (jsonData[prop] === '') {
               returnType = 'Blank';
           }
       }
   }
   }
   if (returnType !== 'Blank') {
       return true;
   } else {
       return false;
   }

}

makeRandomChar=function()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

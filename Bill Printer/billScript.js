$(document).ready(function(){
    var url = window.location.href.toString();
    
    var data = decodeURI(url.substr(url.indexOf('?')+1, url.length));
    data = data.split(',');
    
    $('#billDate').append(" "+displayDate());
    
    $('#customerName').append(data[0]);
    $('#table1').append(data[1]);
    $('#subtotal').text(getFormattedNumber(data[2]));
    $('#amountInWords').html(data[3]);
    $('#vat').text(getFormattedNumber(data[4]));
    $('#frieght').text(getFormattedNumber(data[5]));
    $('#total').text(getFormattedNumber(parseInt(data[6])));
    $('#vatdisplay').text(data[7]);
    $('#customerTin').html(data[8]);
});

function displayDate(){
    var date = new Date();
    return date.getDate()+"-"+date.getMonth()+1+"-"+date.getFullYear();
}

function getFormattedNumber(number){
    var str,decimalPart;
    var fnum = "";
    
    if(isDecimal(number)){
        str = number.toString()
        decimalPart = str.substr(str.indexOf(".")+1, str.length);
        str = str.substr(0, str.indexOf("."));
        str = reverse(str);
        
        for(var i=str.length-1;i>=0;i--){
        
            if(i%2!=0 && i > 2){
                fnum += str[i];
                fnum += ",";
            }
            else
                fnum += str[i];
        }
        fnum += "."+decimalPart;
        
        return fnum;
    }
    else{
        str = reverse(number.toString());   
    
        for(var i=str.length-1;i>=0;i--){
        
            if(i%2!=0 && i > 2){
                fnum += str[i];
                fnum += ",";
            }
            else
                fnum += str[i];
        }
    
        return fnum;
    }
}

function reverse(str){
    var split = str.split("");
    
    var rever = split.reverse();
    
    var join = rever.join("");
    
    return join;
}

function isDecimal(number){
    var n = number.toString();
    
    for(var i=0;i<n;i++){
        if(n[i] === ".")
            return true;
    }
    
    return false;
}


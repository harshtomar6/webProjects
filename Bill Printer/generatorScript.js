var sno=1;
var tableContent="", item, customerTin="";

$(document).ready(function(){
    
    $('#billDate').append(" "+displayDate());
    
    $('#radioOne').on('click', function(){
        if($('input:radio[id="radioOne"]').is(':checked')){
            $('#list1').show();
            $('#list2').hide();
            item=$('#list1').val();
        }    
    });
    
    $('#radioTwo').on('click', function(){
        if($('input:radio[id="radioTwo"]').is(':checked')){
            $('#list2').show();
            $('#list1').hide();
            item=$('#list2').val();
        }    
    });
    
    console.log(convertToWords("1,00,00,000"));
    
    $('#ctin').on('change', function(){
        customerTin = '<h5 class="addr"><strong>Customer TIN : </strong> '+$('#ctin').val()+"</h5>";
    });
    
    $('#addItem').on('click', function(){
        
        $('#modal').modal('hide');
        
        if($('#list1').css('display') == 'block')
            item = $('#list1').val();
        
        if($('#list2').css('display') == 'inline-block')
            item = $('#list2').val();
            
        var quantity = $('#quantity').val();
        var rate = $('#rate').val();
        var amount = quantity*rate;
        var subtotal = getUnformattedNumber($('#subtotal').text());
        var distance = $('#distance').val();
        var vatRate;
        
        if(item != "" && quantity !="" && rate!=""){
            
            if(item == $('#list1').val()){
                vatRate = 0.05;
                $('#radioTwo').attr('disabled', 'disabled');
                $('#vatdisplay').append(" 5%");
            }    
            else{
                vatRate = 0.14;
                $('#radioOne').attr('disabled', 'disabled');
                $('#vatdisplay').append(" 14%");
            }
            
            $('#firstDiv').append('<button type="button" id="deleteButton" class="btn">X</button><br>');
            
            $('#table1').append('<tbody><tr><td class="text-center sno">'+sno+'</td><td class="text-center product">'+item+'</td><td class="text-center quantity">'+getFormattedNumber(quantity)+'</td><td class="text-center rate">'+getFormattedNumber(rate)+'</td><td class="text-center total">'+getFormattedNumber(amount)+'</td></tr></tbody>');
            
            $('#subtotal').text(getFormattedNumber(subtotal+amount));
            $('#vat').text(getFormattedNumber(calculateVAT(getUnformattedNumber($('#subtotal').text()), vatRate)));
            $('#frieght').text(getFormattedNumber(calculateFrieght(getUnformattedNumber($('#subtotal').text()), distance)));
            $('#total').text(getFormattedNumber(getUnformattedNumber($('#subtotal').text())+getUnformattedNumber($('#vat').text())+ getUnformattedNumber($('#frieght').text())));
            
            tableContent += '<tbody><tr><td class="text-center sno">'+sno+'</td><td class="text-center product">'+item+'</td><td class="text-center quantity">'+quantity+'</td><td class="text-center rate">'+rate+'</td><td class="text-center total">'+amount+'</td></tr></tbody>';
            
            $('#amountInWords').html('<strong>Amount In Words: </strong>' +" "+convertToWords($('#total').text()));
            sno++;
            
            var data = [encodeURI($('#cname').val()), encodeURI(tableContent), encodeURI(getUnformattedNumber($('#subtotal').text())), encodeURI($('#amountInWords').html()), encodeURI(getUnformattedNumber($('#vat').text())), encodeURI(getUnformattedNumber($('#frieght').text())), encodeURI(getUnformattedNumber($('#total').text())), encodeURI($('#vatdisplay').text()), encodeURI(customerTin)];
            
            
            $('#generateBill').attr('href','bill.html?'+data);
        }   
    });
});

function generateBillNo(date){
    
}

function calculateFrieght(subtotal, distance){
    var rate;
    if(distance == "less than 100KM"){
        rate = 15;
        
        return parseFloat(subtotal*0.15).toFixed(2);
    }
    else if(distance == "more than 100KM"){
        rate = 18;
        
        return parseFloat(subtotal*0.18).toFixed(2);
    }
}

function calculateVAT(subtotal, rate){
    return parseFloat(subtotal*rate).toFixed(2);
}

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

function isDecimal(number){
    var n = number.toString();
    
    for(var i=0;i<n;i++){
        if(n[i] === ".")
            return true;
    }
    
    return false;
}

function getUnformattedNumber(str){
    var arr = str.split(",");
    
    return parseFloat(arr.join(""));
}

function convertToWords(formattedNumber){
    formattedNumber = formattedNumber.split(',');
    var pl = formattedNumber.length;
    var words = "";
    
    for(var i=0;i<formattedNumber.length;i++){
        if(pl >= 2 && toWords(parseInt(formattedNumber[i])) != "")
            words += toWords(parseInt(formattedNumber[i]))+getPlace(pl--)+" ";
        else{
            words += toWords(parseInt(formattedNumber[i]))+" ";
            pl--;
        }
    }
    return words;
}

function toWords(number){
    var n = number;
    var str = number.toString();
    var firstDigit,lastTwoDigits;
    var digit=0;
    var unit;
    var words="", place=1;
    
    while(n!=0){
        digit++;
        n=parseInt(n/10);
        place = place*10;
    }
    
    if(digit==2){
        if(number<=20){
            words += getWord(number)+" ";
        }
        else{
            number = reverse(number.toString());
            for(var i=0;i<digit;i++){
                unit = number%10;
                number = parseInt(number/10);
                place = place/10;
                words += getWord(unit*place)+" ";
            }        
        }
    }
    else{
        firstDigit = parseInt(str[0]);
        lastTwoDigits = parseInt(str[1]+str[2]);
        
        if(lastTwoDigits<=20){
            words += getWord(firstDigit*100)+" "+getWord(lastTwoDigits)+" "; 
        }
        else{
            number = reverse(number.toString());
            for(var i=0;i<digit;i++){
                unit = number%10;
                number = parseInt(number/10);
                place = place/10;
                words += getWord(unit*place)+" ";
            }
        }
    }

    return words;
}

function reverse(str){
    var split = str.split("");
    
    var rever = split.reverse();
    
    var join = rever.join("");
    
    return join;
}

function getPlace(digit){
    switch(digit){
        case 2:
            return "thousand";
        case 3:
            return "lakh";
        case 4:
            return "crore";            
    }
}

function getWord(number){
    switch(number){
        case 0:
            return "";
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
        case 10:
            return "ten";
        case 11:
            return "eleven";
        case 12:
            return "twelve";
        case 13:
            return "thirteen";
        case 14:
            return "fourteen";
        case 15:
            return "fifteen";
        case 16:
            return "sixteen";
        case 17:
            return "seventeen";
        case 18:
            return "eighteen";
        case 19:
            return "ninteen";
        case 20:
            return "twenty";
        case 30:
            return "thirty";
        case 40:
            return "forty";
        case 50:
            return "fifty";
        case 60:
            return "sixty";
        case 70:
            return "seventy";
        case 80:
            return "eighty";
        case 90:
            return "ninty";
        case 100:
            return "one hundred";
        case 200:
            return "two hundred";
        case 300:
            return "three hundred";
        case 400:
            return "four hundred";
        case 500:
            return "five hundred";
        case 600:
            return "six hundred";
        case 700:
            return "seven hundred";
        case 800:
            return "eight hundred";
        case 900:
            return "nine hundred";
    }
}
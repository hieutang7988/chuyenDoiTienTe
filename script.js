function onBtnConvertCurrency() {
    var amount = document.getElementById("amount").value;
    console.log(amount);
    var fromCurrency = document.getElementById("fromCurrency").value; // truy xuất ID của thẻ select
    var toCurrency = document.getElementById("toCurrency").value; // truy xuất ID của thẻ select
    var result = null;

    if (fromCurrency===toCurrency) {
        if (fromCurrency==="VND") {
         result = amount
        } else {
            result = amount*24
        }
    } else {
        if(fromCurrency === "VND" && toCurrency === "USD") {
            result = amount/24;
        } else {
            result = amount*24;
        }
    }

    document.getElementById("result").innerHTML =result;
}
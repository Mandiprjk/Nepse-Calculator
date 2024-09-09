let mybutton = document.getElementById("top");
window.onscroll = function() {
    scrollFunction();
}
;
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function menuicon() {
    if (menu.style.display == "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
document.addEventListener("DOMContentLoaded", function(event) {
    let inputData2 = document.getElementById("sc-buyprice");
    inputData2.addEventListener("keyup", function(event) {
        if (event.key === 'Enter' ) {
            event.preventDefault();
            document.getElementById("calculateBtn1").click();
        }
    });
    let inputData1 = document.getElementById("shareQ");
    inputData1.addEventListener("keyup", function(event) {
        if (event.key === 'Enter' ) {
            event.preventDefault();
            document.getElementById("calculateBtn").click();
        }
    });
});
function buywith() {
    let buywithamount = document.getElementById("buywith").value;
    let buyprice = document.getElementById("sc-buyprice").value;
    let n1 = Math.floor((buywithamount / buyprice));
    let commission;
    let sebon;
    let displayfirst = document.getElementById("detailFirst");
    let a2 = buyprice * n1;
    sebon = (0.015 / 100) * a2;
    if (a2 <= 50000) {
        commission = ((0.36 / 100) * a2);
        if (commission < 10) {
            commission = 10;
        }
    } else if (a2 <= 500000 && a2 > 50000) {
        commission = (0.33 / 100) * a2;
    } else if (500000 < a2 && a2 <= 2000000) {
        commission = (0.31 / 100) * a2;
    } else if (2000000 < a2 && a2 <= 10000000) {
        commission = (0.27 / 100) * a2;
    } else {
        commission = (0.24 / 100) * a2;
    }
    let b2 = a2 + commission + sebon + 25;
    let r1 = buywithamount - b2;
    if (buywithamount >= b2) {
        document.getElementById("resultFirstValue").innerHTML = " " + n1;
        document.getElementById("numberofShare").innerHTML = " " + n1;
        document.getElementById("amountUsed").innerHTML = " " + "Rs." + " " + new Intl.NumberFormat().format(b2.toFixed(2));
        document.getElementById("remainingAmount").innerHTML = " " + "Rs." + " " + r1.toFixed(2);
    }
    if (buywithamount <= b2) {
        while (buywithamount <= b2) {
            n1--;
            if (n1 <= 0) {
                break;
            }
            let a2 = buyprice * n1;
            sebon = (0.015 / 100) * a2;
            if (a2 <= 50000) {
                commission = ((0.36 / 100) * a2);
                if (commission < 10) {
                    commission = 10;
                }
            } else if (a2 <= 500000 && a2 > 50000) {
                commission = (0.33 / 100) * a2;
            } else if (500000 < a2 && a2 <= 2000000) {
                commission = (0.31 / 100) * a2;
            } else if (2000000 < a2 && a2 <= 10000000) {
                commission = (0.27 / 100) * a2;
            } else {
                commission = (0.24 / 100) * a2;
            }
            let b2 = a2 + commission + sebon + 25;
            let r1 = buywithamount - b2;
            if (b2 <= buywithamount) {
                document.getElementById("resultFirstValue").innerHTML = " " + n1;
                document.getElementById("numberofShare").innerHTML = " " + n1;
                document.getElementById("amountUsed").innerHTML = " " + "Rs." + " " + new Intl.NumberFormat().format(b2.toFixed(2));
                document.getElementById("remainingAmount").innerHTML = " " + "Rs." + " " + r1.toFixed(2);
                break;
            }
        }
    }
    document.getElementById("resultFirst").style.display = "initial";
    displayfirst.style.display = "block";
    document.getElementById("second").scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
}
function transactionFunction() {
    let transac = document.getElementById("buyOpt").value;
    if (transac == "Buy") {
        document.getElementById("sprice").style.display = "none";
        document.getElementById("investorType").style.display = "none";
        document.getElementById("shdays").style.display = "none";
    } else if (transac == "Sell") {
        document.getElementById("sprice").style.display = '';
        document.getElementById("investorType").style.display = '';
        document.getElementById("shdays").style.display = "";
    }

 

}
function calculate() {
    let share_quantity = document.getElementById("shareQ").value;
    let purchase_price = document.getElementById("purchaseP").value;
    let sell_price = document.getElementById("sp").value;
    let total_amount_buy = (Number(share_quantity) * Number(purchase_price));
    let total_amount_sell = (Number(share_quantity) * Number(sell_price));
    const dp_charge = 25;
    let sebon_fee;
    let total_amount;
    let comission;
    let capitalgain_tax;
    let paid_amount;
    let sell_alert = document.getElementById("buyOpt").value;
    let displaysecond = document.getElementById("detailSecond");
    if (share_quantity === null || share_quantity === "") {
        alert("Please Enter Share Quantity.");
        return false;
    }
    if (purchase_price === null || purchase_price === "") {
        alert("Please Enter Buy Price.");
        return false;
    }
    if (sell_alert == "Sell") {
        if (sell_price === null || sell_price === "") {
            alert("Please Enter Sell Price. ");
            return false;
        }
    }
    let transac = document.getElementById("buyOpt").value;
    if (transac == "Buy") {
        total_amount = total_amount_buy;
        sebon_fee = ((0.015 / 100) * total_amount_buy);
        document.getElementById("tax").style.display = "none";
        document.getElementById("amountToReceived").style.display = "none";
        document.getElementById("profitAndLoss").style.display = "none";
        document.getElementById("ResInvType1").style.display = "none";
        document.getElementById("ResInvType").style.display = "none";
        document.getElementById("amountToPay").style.display = '';
        document.getElementById("returnOnInvestment").style.display = "none";
        document.getElementById("breakEven").style.display = '';
        document.getElementById("resultSecond1").style.display = "initial";
        document.getElementById("resultSecond2").style.display = "none";
    } else if (transac == "Sell") {
        total_amount = total_amount_sell;
        sebon_fee = ((0.015 / 100) * total_amount_sell);
        document.getElementById("amountToPay").style.display = "none";
        document.getElementById("tax").style.display = '';
        document.getElementById("amountToReceived").style.display = '';
        document.getElementById("profitAndLoss").style.display = '';
        document.getElementById("ResInvType1").style.display = '';
        document.getElementById("ResInvType").style.display = '';
        document.getElementById("returnOnInvestment").style.display = '';
        document.getElementById("breakEven").style.display = "none";
        document.getElementById("resultSecond2").style.display = "initial";
        document.getElementById("resultSecond1").style.display = "none";
    }
    if (total_amount <= 50000) {
        comission = ((0.36 / 100) * total_amount);
        if (comission < 10) {
            comission = 10;
        }
    } else if (total_amount <= 500000 && total_amount > 50000) {
        comission = (0.33 / 100) * total_amount;
    } else if (500000 < total_amount && total_amount <= 2000000) {
        comission = (0.31 / 100) * total_amount;
    } else if (2000000 < total_amount && total_amount <= 10000000) {
        comission = (0.27 / 100) * total_amount;
    } else {
        comission = (0.24 / 100) * total_amount;
    }
    let buy_amount = total_amount_buy + comission + sebon_fee + dp_charge;
    let sell_amount = total_amount_sell - comission - sebon_fee - dp_charge;
  
    paid_amount = buy_amount;

    let daysOpt = document.getElementById("shdaysopt").value;

    if (daysOpt === "mthd") {
            capitalgain_tax = 0.05 * (sell_amount - total_amount_buy);
    } else {
            capitalgain_tax = 0.075 * (sell_amount - total_amount_buy);
    }

    if (capitalgain_tax < 0) {
            capitalgain_tax = 0;
    }

    let transac1 = document.getElementById("investorTypeOpt").value;
    if (transac1 == "Individual" && transac == "Sell") {
            document.getElementById("test9").innerHTML = "Individual";
            document.getElementById("ResInvType1").style.display = "none";
    } else if (transac1 == "Institutional" && transac == "Sell") {
            capitalgain_tax =0.10 * (sell_amount - buy_amount);
            document.getElementById("ResInvType").style.display = "none";
            document.getElementById("test10").innerHTML = "Institutional";
    } else {
            capitalgain_tax = 0;
    }

    received_amount = sell_amount - capitalgain_tax;
    profit_loss = received_amount - paid_amount;
    let return_on_investment = (profit_loss / paid_amount) * 100;
    let break_even_price = (buy_amount / share_quantity);
    document.getElementById("resultSecondValue1").innerHTML = 'Rs.' + " " + new Intl.NumberFormat().format(buy_amount.toFixed(2));
    document.getElementById("resultSecondValue2").innerHTML = 'Rs.' + " " + new Intl.NumberFormat().format(received_amount.toFixed(2));
    document.getElementById("outputDataTable").style.display = "";
    document.getElementById("detailSecond").style.display = "";
    document.getElementById("test1").innerHTML = 'Rs.' + " " + new Intl.NumberFormat().format(total_amount);
    document.getElementById("test2").innerHTML = 'Rs.' + " " + dp_charge;
    document.getElementById("test3").innerHTML = 'Rs.' + " " + sebon_fee.toFixed(2);
    document.getElementById("test4").innerHTML = 'Rs.' + " " + comission.toFixed(2);
    document.getElementById("test6").innerHTML = 'Rs.' + " " + new Intl.NumberFormat().format(buy_amount.toFixed(2));
    document.getElementById("test5").innerHTML = 'Rs.' + " " + capitalgain_tax.toFixed(2);
    document.getElementById("test7").innerHTML = 'Rs.' + " " + new Intl.NumberFormat().format(received_amount.toFixed(2));


    let profitLossElement = document.getElementById("test8");
    profitLossElement.innerHTML = 'Rs.' + " " + " " + new Intl.NumberFormat().format(profit_loss.toFixed(2));
 
    if (profit_loss > 0) {
        profitLossElement.style.color = "green";
    } else if (profit_loss < 0) {
        profitLossElement.style.color = "red";
    } else {
        profitLossElement.style.color = "black"; 
    }
  
    let roiElement = document.getElementById("test11");
    roiElement.innerHTML =" " + return_on_investment.toFixed(2) + "" + '%';

    if (return_on_investment > 0) {
        roiElement.style.color = "green";
    } else if (return_on_investment < 0) {
        roiElement.style.color = "red";
    } else {
        roiElement.style.color = "black"; 
    }

    document.getElementById("test12").innerHTML = 'Rs' + " " + break_even_price.toFixed(2);
    displaysecond.style.display = "block";
    document.getElementById("calculateBtn").scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
    });



}

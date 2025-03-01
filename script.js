


function run() {
    let mprice = Number(document.getElementById("mprice").value)
    let int = Number(document.getElementById("int").value)
    let months = Number(document.getElementById("months").value)


    if (mprice == "" || int == "" || months == "") {
        alert("please fill out all values")
    }

    if (mprice >= 100000 || int >= 5000 || months >= 12) {
        alert("value out of range")
    }

    else {

        document.getElementById("d-mprice").innerHTML = mprice
        document.getElementById("d-int").innerHTML = int
        document.getElementById("d-months").innerHTML = months


        let totalcost = mprice + int
        document.getElementById("totalcost").innerHTML = totalcost

        let permonthpay = totalcost / months
        document.getElementById("permonthpay").innerHTML = permonthpay

    }

}
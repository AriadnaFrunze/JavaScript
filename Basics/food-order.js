foodName = "Salad"      //String
foodPriceValue = 15.00  //Number
foodPriceUnits = "MDL"  //String

// alert("we have" + foodName)
clientQuantity = prompt("MENU\n " + foodName + "\n\nhow many?")

delivery = 6

alert("delivery tax= " + delivery + foodPriceUnits)

totalCost = foodPriceValue * clientQuantity + delivery

alert("you've ordered " + clientQuantity + " \ntotal " + totalCost + foodPriceUnits)
// alert("total" + totalCost + foodPriceUnits)

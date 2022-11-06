let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];
function printReceipt(order){
  console.log('QTY\t\tITEM\t\t\t\tTOTAL')
    order.forEach(element => {
    let totalTabs = '\t\t\t'
    if(element.itemName.length > 10){
      totalTabs = '\t\t'
    }
    if(element.itemName.length > 12){
      totalTabs = '\t'
    }
    console.log(element.quantity + '\t\t' + element.itemName + totalTabs + (element.quantity * element.unitPrice))
  });
}
printReceipt(order)
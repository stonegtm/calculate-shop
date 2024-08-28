export const calculateShop = (items: { value: string; quantity: number }[], memberCard: boolean = false) => {
    const menu = [
        { name: "Red set", price: 50, value: "red_set", quantity: 0 },
        { name: "Green set", price: 40, value: "green_set", quantity: 0 },
        { name: "Blue set", price: 30, value: "blue_set", quantity: 0 },
        { name: "Yellow set", price: 50, value: "yellow_set", quantity: 0 },
        { name: "Pink set", price: 80, value: "pink_set", quantity: 0 },
        { name: "Purple set", price: 90, value: "purple_set", quantity: 0 },
        { name: "Orange set", price: 120, value: "orange_set", quantity: 0 },
    ]
    let total = 0
    items.forEach((item) => {
        const menuItem = menu.find((m) => m.value === item.value);

        if (menuItem) {
            total += menuItem.price * item.quantity;

            //Check discount 5%
            if ((menuItem.value === "orange_set" || menuItem.value === "pink_set" || menuItem.value === "green_set") && item.quantity >= 2) {
                total -= menuItem.price * item.quantity * 0.05;
            }

            //Check order orange for discount 5%
            if (menuItem.value === 'orange_set' && item.quantity > 2) {
                total -= menuItem.price * item.quantity * 0.05;
            }
        }
    })
    //Check member for discount 10%
    if (memberCard) {
        total *= 0.9
    }

    return total
}

const itemsOrder = [
    { value: "red_set", quantity: 2 },
    { value: "green_set", quantity: 3 },
];

const totalPrice = calculateShop(itemsOrder, false);
console.log(`Total price: ${totalPrice} THB`);
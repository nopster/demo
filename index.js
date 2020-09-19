const DEFAULT_QTY = 0;
const GOODS_LIST = [
        {"type": "socks", "color": "red", "quantity": 10, "priceForPair": "$3"},
        {"type": "socks", "color": "green", "quantity": 5, "priceForPair": "$10"},
        {"type": "socks", "color": "blue", "quantity": 8, "priceForPair": "$6"},
        {"type": "hat", "color": "red", "quantity": 7, "price": "$5"},
        {"type": "hat", "color": "green", "quantity": 0, "price": "$6"},
        {"type": "socks", "color": "blue", "priceForPair": "$6"},
        {"type": "socks", "color": "red", "quantity": 10, "priceForPair": "$3"},
        {"type": "socks", "color": "white", "quantity": 3, "priceForPair": "$4"},
        {"type": "socks", "color": "green", "priceForPair": "$10"},
        {"type": "socks", "color": "blue", "quantity": 2, "priceForPair": "$6"},
        {"type": "hat", "color": "green", "quantity": 3, "price": "$5"},
        {"type": "hat", "color": "red", "quantity": 1, "price": "$6"},
        {"type": "socks", "color": "blue", "priceForPair": "$6"}
    ];

/**
 * @param {Array} goodList
 * @return {int}
 */
function calcSum(goodList) {
    var sum = 0,
        socksQty = 0,
        redHatsQty = 0,
        redCost = 0,
        greenCost = 0,
        blueCost = 0;


    goodList.forEach(function (goodItem) {
        var price = goodItem.price || goodItem.priceForPair;
        price = price.replace('$','');
        var qty = goodItem.quantity || DEFAULT_QTY;

        sum += price * qty;

        if (goodItem.type === 'socks') {
            socksQty += qty;
        }

        if (goodItem.type === 'hat' && goodItem.color === 'red') {
            redHatsQty += qty;
        }

        switch (goodItem.color) {
            case "red": redCost += price * qty; break;
            case "green": greenCost += price * qty; break;
            case "blue": blueCost += price * qty; break;
        }
    });

    console.log('Socks - ' + socksQty);
    console.log('Red Hats - ' + redHatsQty);
    console.log('Red - $' + redCost);
    console.log('Green - $' + greenCost);
    console.log('Blue - $' + blueCost);


    return sum;
}

console.log('Sum  - $' + calcSum(GOODS_LIST));
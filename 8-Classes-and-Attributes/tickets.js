function tickets(tickets, sorting) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let ticketsArray = [];

    for (let ticket of tickets) {
        let [destination, price, status] = ticket.split('|');
        ticketsArray.push(new Ticket(destination, Number(price), status));
    }

    if (sorting === 'destination') {
        ticketsArray.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (sorting === 'price') {
        ticketsArray.sort((a, b) => a.price - b.price);
    } else if (sorting === 'status') {
        ticketsArray.sort((a, b) => a.status.localeCompare(b.status));
    }

    return ticketsArray;
}

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));
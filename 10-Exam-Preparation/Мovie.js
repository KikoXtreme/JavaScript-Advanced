class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];

        this._totalProfit = 0;
        this._totalTicketsSold = 0;
    }

    newScreening(date, hall, description) {
        if (this.screenings.some(s => s.date === date && s.hall === hall)) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
        }

        this.screenings.push({
            date,
            hall,
            description,
        });

        return `New screening of ${this.movieName} is added.`;
    }

    endScreening(date, hall, soldTickets) {
        let screening = this.screenings.find(s => s.date === date && s.hall === hall);
        if (screening === undefined) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        }

        let index = this.screenings.indexOf(screening);
        this.screenings.splice(index, 1);

        let profit = this.ticketPrice * soldTickets;

        this._totalProfit += profit;
        this._totalTicketsSold += soldTickets;

        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${profit}`;
    }

    toString() {
        let result = [
            `${this.movieName} full information:`,
            `Total profit: ${this._totalProfit.toFixed(0)}$`,
            `Sold Tickets: ${this._totalTicketsSold}`
        ];

        if (this.screenings.length === 0) {
            result.push('No more screenings!');
        } else {
            result.push('Remaining film screenings:');
            this.screenings
                .sort((a, b) => a.hall.localeCompare(b.hall))
                .forEach(el => result.push(`${el.hall} - ${el.date} - ${el.description}`));
        }

        return result.join('\n');
    }
}

let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());
class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !position || !department || !salary || salary < 0) {
            throw new Error('Invalid input!');
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        this.departments[department].push({ name, position, salary });

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let currentBest = {
            name: '',
            salary: 0,
        }

        for (let depKey in this.departments) {
            let averageSalarary = 0;

            for (let empKey in this.departments[depKey]) {
                averageSalarary += this.departments[depKey][empKey].salary;
            }

            averageSalarary = averageSalarary / this.departments[depKey].length;
            if (currentBest.salary < averageSalarary) {
                currentBest.name = depKey;
                currentBest.salary = averageSalarary;
            }
        }

        this.departments[currentBest.name].sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name);
        });

        let bestDepStr = '';
        bestDepStr += `Best Department is: ${currentBest.name}\n`;
        bestDepStr += `Average salary: ${currentBest.salary.toFixed(2)}\n`;
        this.departments[currentBest.name].forEach(element => {
            bestDepStr += `${element.name} ${element.salary} ${element.position}\n`;
        });

        return bestDepStr.trim();
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
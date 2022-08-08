function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let bestRestaurant = document.querySelector('#bestRestaurant p');
      let workersOutput = document.querySelector('#workers p');

      let obj = {};

      input.forEach(line => {
         let [restaurant, workersData] = line.split(' - ');
         let workerInput = workersData.split(', ').map(el => {
            let [name, salary] = el.split(' ');
            return { name, salary: Number(salary) };
         })

         if (!obj[restaurant]) {
            obj[restaurant] = {
               workers: [],
               getAverageSalary: function () {
                  return this.workers.reduce((a, b) => a + b.salary, 0) / this.workers.length;
               }
            };
         }

         obj[restaurant].workers = obj[restaurant].workers.concat(workerInput);
      })

      let bestAvgSalary = Object.entries(obj).sort((a, b) => b[1].getAverageSalary() - a[1].getAverageSalary());
      let bestSalary = Object.values(bestAvgSalary[0][1].workers).sort((a, b) => b.salary - a.salary);

      bestRestaurant.textContent = `Name: ${bestAvgSalary[0][0]} Average Salary: ${(bestAvgSalary[0][1].getAverageSalary().toFixed(2))} Best Salary: ${bestSalary[0].salary.toFixed(2)}`;
      workersOutput.textContent = Object.values(bestSalary).map(el => `Name: ${el.name} With Salary: ${el.salary}`).join(' ');
   }
}
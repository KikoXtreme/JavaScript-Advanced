function solve() {
    let fields = document.querySelectorAll('#container input');
    let addBtn = document.querySelector('#container button');
    let petList = document.querySelector('#adoption ul');
    let adoptedList = document.querySelector('#adopted ul');

    let input = {
        name: fields[0],
        age: fields[1],
        kind: fields[2],
        currentOwner: fields[3],
    }

    addBtn.addEventListener('click', addPet);

    function addPet(ev) {
        ev.preventDefault();

        let name = fields[0].value.trim();
        let age = fields[1].value.trim();
        let kind = fields[2].value.trim();
        let currentOwner = fields[3].value.trim();

        if (name === '' || age === '' || Number.isNaN(Number(age)) || kind === '' || currentOwner === '') {
            return;
        }

        let contactBtn = e('button', {}, 'Contact with owner');
        let pet = e('li', {},
            e('p', {},
                e('strong', {}, name),
                ' is a ',
                e('strong', {}, age),
                ' year old ',
                e('strong', {}, kind)
            ),
            e('span', {}, `Owner: ${currentOwner}`),
            contactBtn
        );
        petList.appendChild(pet);

        input.name.value = '';
        input.age.value = '';
        input.kind.value = '';
        input.currentOwner.value = '';

        contactBtn.addEventListener('click', contact);

        function contact(ev) {
            let confirmInput = e('input', { placeholder: 'Enter your names' });
            let confirmBtn = e('button', {}, 'Yes! I take it!');
            let confirmDiv = e('div', {},
                confirmInput,
                confirmBtn
            );

            pet.appendChild(confirmDiv);
            contactBtn.remove();

            confirmBtn.addEventListener('click', adopt.bind(null, confirmInput, pet));
        }
    }

    function adopt(confirmInput, pet) {
        let newOwner = confirmInput.value.trim();

        if (newOwner === '') {
            return;
        }

        let checkBtn = e('button', {}, 'Checked');
        checkBtn.addEventListener('click', onDelete.bind(null, pet));

        pet.querySelector('div').remove();
        pet.querySelector('span').textContent = `New Owner: ${newOwner}`;
        pet.appendChild(checkBtn);

        adoptedList.appendChild(pet);
    }

    function onDelete(pet) {
        pet.remove();
    }

    function e(type, attr, ...content) {
        let element = document.createElement(type);

        for (let prop in attr) {
            element[prop] = attr[prop];
        }
        for (let item of content) {
            if (typeof item === 'string' || typeof item === 'number') {
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        }

        return element;
    }
}
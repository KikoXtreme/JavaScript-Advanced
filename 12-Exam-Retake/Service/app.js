window.addEventListener('load', solve);

function solve() {
    const productType = document.getElementById('type-product');
    const description = document.getElementById('description');
    const clientName = document.getElementById('client-name');
    const phone = document.getElementById('client-phone');

    const sendBtn = document.querySelector('#right button');
    sendBtn.addEventListener('click', onSend);

    const receiveOrders = document.getElementById('received-orders');
    const completedOrders = document.getElementById('completed-orders');

    
    function onSend(ev) {
        ev.preventDefault();
        
        if (description.value != '' && clientName.value != '' && phone.value != ''){
            let div = document.createElement('div');
            div.classList.add('container');
            div.innerHTML = `<h2>Product type for repair: ${productType.value}</h2><h3>Client information: ${clientName.value}, ${phone.value}</h3><h4>Description of the problem: ${description.value}</h4><button class="start-btn">Start repair</button><button class="finish-btn" disabled>Finish repair</button>`
            
            let completeDiv = document.createElement('div');
            completeDiv.classList.add('container');
            completeDiv.innerHTML = `<h2>Product type for repair: ${productType.value}</h2><h3>Client information: ${clientName.value}, ${phone.value}</h3><h4>Description of the problem: ${description.value}</h4>`
            
            let startRepair = div.querySelectorAll('button')[0];
            let finishRepair = div.querySelectorAll('button')[1];
            
            startRepair.addEventListener('click', onStartRepair);
            finishRepair.addEventListener('click', onFinishRepair.bind(null, completeDiv));

            const clearBtn = document.querySelector('.clear-btn');
            clearBtn.addEventListener('click', onClear.bind(null, completeDiv));

            receiveOrders.appendChild(div);
        }

        description.value = '';
        clientName.value = '';
        phone.value = '';
    }

    function onStartRepair(ev){
        ev.target.disabled = true;
        ev.target.nextElementSibling.disabled = false;
    }

    function onFinishRepair(completeDiv, ev){
        ev.target.parentElement.remove();
        completedOrders.appendChild(completeDiv);
    }

    function onClear(completeDiv, ev){
        completeDiv.remove();
    }
}
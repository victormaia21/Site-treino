(function(){
    const labelmatematica = document.querySelector('.form_matematica');
    const n1 = Math.floor(Math.random() * 30);
    const n2 = Math.floor(Math.random() * 30);
    const soma = n1 + n2;
    labelmatematica === null || labelmatematica === void 0 ? void 0 : labelmatematica.textContent = `${n1} + ${n2} = ?`;
    const form = document.querySelector('.form');
    
    form === null || form === void 0 ? void 0 : form.addEventListener('submit',enviarformulario)

    function enviarformulario(e){
        
            const valordigitado = document.querySelector('#matematica');
            const valuevalordigitado = parseFloat(valordigitado.value);
            if (typeof valuevalordigitado == 'number') {
                if (valuevalordigitado == soma) {
                    const sub = document.querySelector('.form_enviar');
                    sub.click();
                }
                else {
                    alert('O VALOR DA SOMA ESTÁ ERRADO')
                    e.preventDefault();
                }
            }
            else {
                e.preventDefault();
            }
    
    }

window.addEventListener('keypress',(e) => {
    if(e.key === 'Enter'){
        enviarformulario();
    }
})
})();
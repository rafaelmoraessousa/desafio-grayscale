document.addEventListener('DOMContentLoaded', () => {
    alert('Carregado');

    const regularFunctionBtn = document.getElementById('regularFunctionBtn');
    const arrowFunctionBtn = document.getElementById('arrowFunctionBtn');

    console.log(regularFunctionBtn);
    console.log(arrowFunctionBtn);

    regularFunctionBtn.addEventListener('click', regularFunction);

    function regularFunction() {
        alert('regularFunction');
    }
    
    const arrowFunction = () => {
        alert('arrowFunction')
    }
})




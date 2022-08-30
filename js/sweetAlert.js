

let boton = document.querySelector('#stockBtn');
boton.addEventListener('click', () => {
    swal.fire({
        title: 'Stock',
        text:'Hay stock de todas las pizzas',
        icon: 'success',
        confirmButtonText:'Volver'
    })
}) 

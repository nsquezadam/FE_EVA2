

// caculo de los metros cuadrados largo x ancho  
// Valor  por metro cuadrado 
const valueMtr = 900;
$(function(){
  $('#btn_submit').click((e)=> { 
    e.preventDefault();
    let width = $('#idWidth').val();
    let heigth =$('#idHeigth').val();
    
    console.log(width);
    console.log(heigth);
    // calculo del area
    area  = width * heigth
    console.log(area);
    // calculo del  total
    total = area * valueMtr; 
    // asignar valores  
    $('#area').text(area);
    $('#total').text(total);
    // limpiar formulario
    $('#form')[0].reset();
    $('#btn_submit').attr('disabled', 'disabled').addClass('btn')
    $('#form').addClass('hide');
    $('#resultContainer').removeClass('hide');
  });
})

// boton de  volver a cotizar 
$(function(){
  $('#btn_cot').click(function (e) { 
    e.preventDefault();
    $('#form').removeClass('hide');
    $('#resultContainer').addClass('hide')
  });
})
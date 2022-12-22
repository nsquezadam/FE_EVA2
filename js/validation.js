//validaciones


//nombre 
$(function () {
  $('#idName').on('blur', function () {
    let name =  $('#idName').val();
    let pattern = new RegExp('^[ A-Z]+$', 'i');
    let message1 = "No puede quedar este campo vacio";
    let message2 = "Solo se permiten ingreso de letras";
    if(name == null || name.length == 0){
      $('#idName').addClass('warning');
      $('#warningName').addClass('show').text(message1);
      
    }else if(!pattern.test(name)){
      $('#warningName').addClass('show').text(message2);
      $('#idName').addClass('warning');
      
    }else{
      $('#warningName').removeClass('show').text(message2);
      $('#warningName').removeClass('show').text(message1);
      $('#idName').removeClass('warning');
    }
  });  
})

//apellidos  
$(function () {
  $('#idLastName').on('blur', function () {
        let lastName =  $('#idLastName').val();
    let pattern = new RegExp('^[ A-Z]+$', 'i');
    let message1 = "No puede quedar este campo vacio";
    let message2 = "Solo se permiten ingreso de letras";
    if(lastName == null || lastName.length == 0){
      $('#idLastName').addClass('warning');
      $('#warningLastName').addClass('show').text(message1);
      
    }else if(!pattern.test(lastName)){
      $('#warningLastName').addClass('show').text(message2);
      $('#idLastName').addClass('warning');
      
    }else{
      $('#warningLastName').removeClass('show').text(message2);
      $('#warningLastName').removeClass('show').text(message1);
      $('#idLastName').removeClass('warning');
    }
  });  
})
// direccion 
$(function () {
  $('#idAddress').on('blur', function () {
        let address =  $('#idAddress').val();
    let pattern = new RegExp('[a-zA-Z1-9À-ÖØ-öø-ÿ]+\.?(( |\-)[a-zA-Z1-9À-ÖØ-öø-ÿ]+\.?)*', 'i');
    let message1 = "No puede quedar este campo vacio";
    let message2 = "Ingresar  una direccion valida";
    if(address == null || address.length == 0){
      $('#idAddress').addClass('warning');
      $('#warningAddress').addClass('show').text(message1);
      
    }else if(!pattern.test(address)){
      $('#warningAddress').addClass('show').text(message2);
      $('#idAddress').addClass('warning');
      
    }else{
      $('#warningAddress').removeClass('show').text(message2);
      $('#warningAddress').removeClass('show').text(message1);
      $('#idAddress').removeClass('warning');
    }
  });  
})

// correo electronico
$(function () {
  $('#idMail').on('blur', function () {
        let mail =  $('#idMail').val();
    let pattern = new RegExp('^[^@]+@[^@]+\.[a-zA-Z]{2,}$', 'i');
    let message1 = "No puede quedar este campo vacio";
    let message2 = "Por favor ingresar correo electronico valido";
    if(mail == null || mail.length == 0){
      $('#idMail').addClass('warning');
      $('#warningEmail').addClass('show').text(message1);
      
    }else if(!pattern.test(mail)){
      $('#warningEmail').addClass('show').text(message2);
      $('#idMail').addClass('warning');
      
    }else{
      $('#warningEmail').removeClass('show').text(message2);
      $('#warningEmail').removeClass('show').text(message1);
      $('#idMail').removeClass('warning');
    }
  });  
})

// numeros solo  numeros
$(function () {
  $('#idWidth').on('blur', function () {
        let width =  $('#idWidth').val();
   
let pattern = new RegExp('^[0-9]+$', 'i');
let message1 = "No puede quedar este campo vacio";
let message2 = "Solo se permiten numeros";
let message3 = "se debe  ingresar valores mayores a 0";
   
    if(width == null || width.length == 0){
      $('#idWidth').addClass('warning');
      $('#warningWidth').addClass('show').text(message1);
      
    }else if(!pattern.test(width)){
      $('#warningWidth').addClass('show').text(message2);
      $('#idWidth').addClass('warning');
      
    }
    else if (width == 0 ) {
      $('#warningWidth').addClass('show').text(message3);
      $('#idWidth').addClass('warning');
    }
    else{
      $('#warningWidth').removeClass('show').text(message2);
      $('#warningWidth').removeClass('show').text(message1);
      $('#idWidth').removeClass('warning');
     
    }
  });  
})
//largo
$(function(){
$('#idHeigth').on('blur', function () {
  let height =$('#idHeigth').val();
  let pattern = new RegExp('^[0-9]+$', 'i');
  let message1 = "No puede quedar este campo vacio";
  let message2 = "Solo se permiten numeros";
  let message3 = "se debe  ingresar valores mayores a 0";
  if(height== null || height.length == 0 ){
  $('#idHeigth').addClass('warning');
  $('#warningHeigth').addClass('show').text(message1);
  
}else if(!pattern.test(height)){
  $('#warningHeigth').addClass('show').text(message2);
  $('#idHeigth').addClass('warning');
}
else if (height == 0 ) {
  $('#warningHeigth').addClass('show').text(message3);
  $('#idHeigth').addClass('warning');
}
else{
  $('#warningHeigth').removeClass('show').text(message2);
  $('#warningHeigth').removeClass('show').text(message1);
  $('#idHeigth').removeClass('warning');
}
});
})


// boton disable 
$(function () {
  $('#btn_submit').attr('disabled', 'disabled').addClass('btn')
  $('#idName, #idLastName,#idAddress,#idMail, #idWidth, #idHeigth ').on('blur', function () { 
    let name =  $('#idName').val();
    console.log(name, name.length);
  let lastName =  $('#idLastName').val();
  let width =  $('#idWidth').val();
  let height =$('#idHeigth').val();
  let address =  $('#idAddress').val();
  let mail =  $('#idMail').val();

    if (  name.length == 0   || name == null ,  lastName.length == 0  || lastName == null,  address.length == 0  || address == null, mail.length == 0  || mail == null,   width.length == 0  || width == null,  height.length == 0  || height == null ) {
      $('#btn_submit').attr('disabled', 'disabled').addClass('btn')
    }else{
      $('#btn_submit').removeAttr('disabled').addClass('btn_active');
    }
  });
 
})
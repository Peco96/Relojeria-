export function validarNombre(input) {
    if (input.value.trim().length >= 3 && input.value.trim().length <= 50) {
      input.className = "form-control is-valid";
      return true;
    } else {
      input.className = "form-control is-invalid";
      return false;
    }
  }
  export function validarDescripcion(input) {
    if (input.value.trim().length >= 5 && input.value.trim().length <= 300) {
      input.className = "form-control is-valid";
      return true;
    } else {
      input.className = "form-control is-invalid";
      return false;
    }
  }
  export function validarImagen(input) {
    let expReg = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
    if (expReg.test(input.value)) {
      input.className = "form-control is-valid";
      return true;
    } else {
      input.className = "form-control is-invalid";
      return false;
    }
  }
  export function validarGenero(input) {
    if (input.value == 0 || input.value == "") {
      input.className = "form-control is-invalid";
      return false;
    } else {
      input.className = "form-control is-valid";
      return true;
    }
  }
  //precio escrito de esta forma --> $40000 / $500
  export function validarPrecio(input) {
    let expRegPrecio = /\$([0-9])\d*/;
  
    if (expRegPrecio.test(input.value)) {
      input.className = "form-control is-valid";
      return true;
    } else {
      input.className = "form-control is-invalid";
      return false;
    }
  }
  
  export function validarStock(input) {
    let expRegStock = /^[0-9]+$/;
    if (expRegStock.test(input.value)) {
      input.className = "form-control is-valid";
      return true;
    } else {
      input.className = "form-control is-invalid";
      return false;
    }
  }
  export function validarEmail(input) {
    let expRegMail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (expRegMail.test(input.value)) {
      input.className = "form-control is-valid";
      return true;
    } else {
      input.className = "form-control is-invalid";
      return false;
    }
  }
  //La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Sin simbolos
  export function validarContraseña(input) {
      let expRegContra= /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
      if(expRegContra.test(input.value)){
          input.className = "form-control is-valid";
          return true;
        } else {
          input.className = "form-control is-invalid";
          return false;
        }
  }
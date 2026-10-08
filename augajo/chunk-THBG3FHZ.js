import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-SQPJPWK2.js";

// src/app/services/validate-reactive-form.service.ts
var ValidateReactiveFormService = class _ValidateReactiveFormService {
  constructor() {
  }
  //Validacion permite solo un espacio pero sin evaluar caracteres
  validacionUnEspacio(control) {
    if (control.value === null || control.value == "") {
      return;
    }
    if (control.value.charAt(0) === " ") {
      control.setValue("");
    }
    for (let i = 0; i < control.value.length; i++) {
      if (control.value.length > 0 && control.value.charAt(i) === " ") {
        if (control.value.charAt(i + 1) === " ") {
          control.setValue(control.value.slice(0, control.value.length - 1));
        }
      }
    }
    return null;
  }
  //Validacion de inputs sin caracteres ni numeros
  validacionUnEspacioSinCaracteresNumeros(control) {
    if (control.value === null || control.value == "") {
      return;
    }
    let caracteres = `!"#$%&'()*+,-./[]^_{|}~@123456789`;
    if (control.value.charAt(0) === " ") {
      control.setValue("");
    }
    for (let i = 0; i < control.value.length; i++) {
      if (caracteres.indexOf(control.value.charAt(i), 0) != -1) {
        control.setValue(control.value.slice(0, control.value.length - 1));
      }
      if (control.value.length > 0 && control.value.charAt(i) === " ") {
        if (control.value.charAt(i + 1) === " ") {
          control.setValue(control.value.slice(0, control.value.length - 1));
        }
      }
    }
    return null;
  }
  //Validacion del input sin caracteres especiales pero permitiendo numeros
  validacionUnEspacioSinCaracteres(control) {
    if (control.value === null || control.value == "") {
      return;
    }
    let caracteres = `!"#$%&'()*+/[]^_{|}~@;`;
    if (control.value.charAt(0) === " ") {
      control.setValue("");
    }
    for (let i = 0; i < control.value.length; i++) {
      if (caracteres.indexOf(control.value.charAt(i), 0) != -1) {
        control.setValue(control.value.slice(0, control.value.length - 1));
      }
      if (control.value.length > 0 && control.value.charAt(i) === " ") {
        if (control.value.charAt(i + 1) === " ") {
          control.setValue(control.value.slice(0, control.value.length - 1));
        }
      }
    }
    return null;
  }
  //Validacion para evitar caracteres que el programador especifique.
  validacionPersonalizada(control, caracteres) {
    if (control.value === null || control.value == "") {
      return;
    }
    if (control.value.charAt(0) === " ") {
      control.setValue("");
    }
    for (let i = 0; i < control.value.length; i++) {
      if (caracteres.indexOf(control.value.charAt(i), 0) != -1) {
        control.setValue(control.value.slice(0, control.value.length - 1));
      }
      if (control.value.length > 0 && control.value.charAt(i) === " ") {
        if (control.value.charAt(i + 1) === " ") {
          control.setValue(control.value.slice(0, control.value.length - 1));
        }
      }
    }
    return null;
  }
  //Validacion sin espacios
  validacionSinEspacios(control) {
    if (control.value.charAt(0) === " ") {
      control.setValue("");
    }
    for (let i = 0; i < control.value.length; i++) {
      if (control.value.length > 0 && control.value.charAt(i) === " ") {
        control.setValue(control.value.slice(0, control.value.length - 1));
      }
    }
    return null;
  }
  //Validacion sin espacios, sin caracteres especiales y sin numeros
  validacionSinEspaciosCaracteresNumeros(control) {
    if (control.value.charAt(0) === " ") {
      control.setValue("");
    }
    let caracteres = `!"#$%&'()*+,-./[]^_{|}~@123456789`;
    for (let i = 0; i < control.value.length; i++) {
      if (caracteres.indexOf(control.value.charAt(i), 0) != -1) {
        control.setValue(control.value.slice(0, control.value.length - 1));
      }
      if (control.value.length > 0 && control.value.charAt(i) === " ") {
        control.setValue(control.value.slice(0, control.value.length - 1));
      }
    }
    return null;
  }
  //Validacion sin espacios, sin caracteres especiales y sin numeros
  validacionSinEspaciosCaracteres(control) {
    if (control.value.charAt(0) === " ") {
      control.setValue("");
    }
    let caracteres = `!"#$%&'()*+,-./[]^_{|}~@=?\xA1\xB0:;`;
    for (let i = 0; i < control.value.length; i++) {
      if (caracteres.indexOf(control.value.charAt(i), 0) != -1) {
        control.setValue(control.value.slice(0, control.value.length - 1));
      }
      if (control.value.length > 0 && control.value.charAt(i) === " ") {
        control.setValue(control.value.slice(0, control.value.length - 1));
      }
    }
    return null;
  }
  validacionEspacios(control) {
    if (control.value == null) {
      return;
    }
    let caracteres = `!"#$%&'()*+,-./[]^_{|}~@`;
    if (control.value.charAt(0) === " ") {
      control.setValue("");
    }
    for (let i = 0; i < control.value.length; i++) {
      if (caracteres.indexOf(control.value.charAt(i), 0) != -1) {
        control.setValue(control.value.slice(0, control.value.length - 1));
      }
      if (control.value.length > 0 && control.value.charAt(i) === " ") {
        if (control.value.charAt(i + 1) === " ") {
          control.setValue(control.value.slice(0, control.value.length - 1));
        }
      }
    }
    return null;
  }
  //Validacion sin espacios, sin caracteres especiales y sin numeros
  validacionSinEspaciosCaracteresPersonalizados(control, caracteres) {
    if (control.value.charAt(0) === " ") {
      control.setValue("");
    }
    for (let i = 0; i < control.value.length; i++) {
      if (caracteres.indexOf(control.value.charAt(i), 0) != -1) {
        control.setValue(control.value.slice(0, control.value.length - 1));
      }
      if (control.value.length > 0 && control.value.charAt(i) === " ") {
        control.setValue(control.value.slice(0, control.value.length - 1));
      }
    }
    return null;
  }
  validacionNumeros(control) {
    if (control.value == null) {
      return;
    }
    if (control.value.charAt(0) === " ") {
      control.setValue("");
    }
    for (let i = 0; i < control.value.length; i++) {
      if (isNaN(control.value.charAt(i))) {
        control.setValue(control.value.slice(0, control.value.length - 1));
      }
      if (control.value.length > 0 && control.value.charAt(i) === " ") {
        control.setValue(control.value.slice(0, control.value.length - 1));
      }
    }
    return null;
  }
  validacionTelefono(control) {
    if (control.value == null && control.value != "") {
      return;
    }
    if (typeof control.value === "string") {
      if (control.value.charAt(0) === " ") {
        control.setValue("");
      }
    }
    const caracteres = `!"#%&'()*/[]^_{|}~@QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuiopasdfghjklzxcvbnm;<>?\xBF\xAA\xB7=\xD1:\xAC-+`;
    for (let i = 0; i < control.value.length; i++) {
      if (caracteres.indexOf(control.value.charAt(i), 0) != -1) {
        control.setValue(control.value.slice(0, control.value.length - 1));
      }
      if (control.value.length > 0 && control.value.charAt(i) === " ") {
        control.setValue(control.value.slice(0, control.value.length - 1));
      }
    }
    return null;
  }
  static {
    this.\u0275fac = function ValidateReactiveFormService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ValidateReactiveFormService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ValidateReactiveFormService, factory: _ValidateReactiveFormService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValidateReactiveFormService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  ValidateReactiveFormService
};
//# sourceMappingURL=chunk-THBG3FHZ.js.map

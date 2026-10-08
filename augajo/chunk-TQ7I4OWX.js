import {
  DataApiService
} from "./chunk-DQT5TO5T.js";
import {
  BehaviorSubject,
  EMPTY,
  Injectable,
  MensajesHttpService,
  catchError,
  inject,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable
} from "./chunk-3AU6XRXU.js";

// src/app/modules/inventario/lotes/lotes-facade.service.ts
var LotesFacadeService = class _LotesFacadeService {
  constructor() {
    this.dataApi = inject(DataApiService);
    this._mensajesHttp = inject(MensajesHttpService);
    this.Cargando$ = new BehaviorSubject(false);
    this.responseCargando$ = this.Cargando$.asObservable();
    this.Lotes$ = new BehaviorSubject([]);
    this.responseLotes$ = this.Lotes$.asObservable();
    this.LotesProducto$ = new BehaviorSubject([]);
    this.responseLotesProducto$ = this.LotesProducto$.asObservable();
  }
  MostrarLotes(params) {
    this.Cargando$.next(true);
    this.Lotes$.next([]);
    const request$ = this.dataApi.GetDataApi(`inventario/v1/Lotes/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      this.Lotes$.next(result.data.Table0);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.Lotes$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar las lotes", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  MostrarLotesProducto(params, callback) {
    this.Cargando$.next(true);
    this.Lotes$.next([]);
    const request$ = this.dataApi.GetDataApi(`inventario/v1/lotes/producto/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      callback(result.data.Table0);
    }), catchError((error) => {
      this.Cargando$.next(false);
      callback([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar los lotes del producto", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  InsertarLotes(params, respuesta) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.PostDataApi(`inventario/v1/lotes/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al insertar el lote", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  ActualizarLotes(params, respuesta) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.PutDataApi(`inventario/v1/lotes/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al actualizar el lote", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  static {
    this.\u0275fac = function LotesFacadeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LotesFacadeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LotesFacadeService, factory: _LotesFacadeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LotesFacadeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  LotesFacadeService
};
//# sourceMappingURL=chunk-TQ7I4OWX.js.map

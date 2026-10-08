import {
  LotesFacadeService
} from "./chunk-J7V2FSSM.js";
import {
  MatDatepickerModule
} from "./chunk-CLGUP75J.js";
import {
  AlmacenesFacadeService,
  MatSlideToggleModule,
  ProductosFacadeService
} from "./chunk-2CFYGV5J.js";
import "./chunk-CNRU4FGK.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  MatDialog,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule
} from "./chunk-HKAWFJL5.js";
import {
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  MatInput,
  MatInputModule,
  MatOption,
  MatPaginatorModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  PipeModule,
  ReactiveFormsModule,
  RequiredValidator,
  TextFieldModule,
  Validators
} from "./chunk-L4TLN626.js";
import {
  DataApiService
} from "./chunk-JFTIAHKM.js";
import {
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  Component,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  EMPTY,
  Injectable,
  LoadingComponent,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardModule,
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatLabel,
  MatMiniFabButton,
  MatPrefix,
  MatProgressSpinnerModule,
  MensajesHttpService,
  NgModule,
  RouterLink,
  RouterModule,
  SharedModule,
  ToastrServiceLocal,
  catchError,
  concatMap,
  debounceTime,
  distinctUntilChanged,
  from,
  inject,
  setClassMetadata,
  tap,
  toArray,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-NVT3INDU.js";

// src/app/modules/Consignacion/entregas/entregas-facade.service.ts
var EntregasFacadeService = class _EntregasFacadeService {
  constructor() {
    this.dataApi = inject(DataApiService);
    this._mensajesHttp = inject(MensajesHttpService);
    this.Cargando$ = new BehaviorSubject(false);
    this.responseCargando$ = this.Cargando$.asObservable();
    this.EntregasConsigna$ = new BehaviorSubject(null);
    this.responseEntregasConsignas$ = this.EntregasConsigna$.asObservable();
  }
  seg(valor, centinela = 0) {
    if (valor === null || valor === void 0 || valor === "") {
      return String(centinela);
    }
    return encodeURIComponent(String(valor));
  }
  MostrarEntregasConsigna(f) {
    this.Cargando$.next(true);
    this.EntregasConsigna$.next([]);
    const params = `${this.seg(f.idRevendedora)}/${this.seg(f.busqueda, "null")}/${this.seg(f.pagina, 1)}/${this.seg(f.tamanoPagina, 100)}`;
    const request$ = this.dataApi.GetDataApi(`inventario/v1/consignacion/entregas/`, params).pipe(tap((result) => {
      this.EntregasConsigna$.next(result?.data.Table0);
      this.Cargando$.next(false);
    }), catchError((error) => {
      this.EntregasConsigna$.next([]);
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostar las entregas en consigna", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  EntregasConsigna(params, respuesta) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.PostDataApi(`inventario/v1/entrada-consigna/`, params).pipe(tap((result) => {
      respuesta(result);
      this.Cargando$.next(false);
    }), catchError((error) => {
      respuesta(null);
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al realizar la entrega en consigna", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  static {
    this.\u0275fac = function EntregasFacadeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EntregasFacadeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EntregasFacadeService, factory: _EntregasFacadeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EntregasFacadeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/Consignacion/entregas/entregas.component.ts
var _c0 = () => ["/dashboard"];
var _forTrack0 = ($index, $item) => $item.id;
function EntregasComponent_For_27_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", a_r1 == null ? null : a_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r1 == null ? null : a_r1.nombre);
  }
}
function EntregasComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EntregasComponent_For_27_Conditional_0_Template, 2, 2, "mat-option", 20);
  }
  if (rf & 2) {
    const a_r1 = ctx.$implicit;
    \u0275\u0275conditional((a_r1 == null ? null : a_r1.tipo) === "CONSIGNACION" ? 0 : -1);
  }
}
function EntregasComponent_For_36_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", a_r2 == null ? null : a_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r2 == null ? null : a_r2.nombre);
  }
}
function EntregasComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EntregasComponent_For_36_Conditional_0_Template, 2, 2, "mat-option", 20);
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    \u0275\u0275conditional((a_r2 == null ? null : a_r2.tipo) !== "CONSIGNACION" ? 0 : -1);
  }
}
function EntregasComponent_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    \u0275\u0275property("value", p_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", p_r3 == null ? null : p_r3.sku, " - ", p_r3 == null ? null : p_r3.nombre);
  }
}
function EntregasComponent_Conditional_50_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r4 = ctx.$implicit;
    \u0275\u0275property("value", l_r4 == null ? null : l_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r4 == null ? null : l_r4.numero_lote);
  }
}
function EntregasComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 22)(1, "mat-label");
    \u0275\u0275text(2, "Lote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-select", 40);
    \u0275\u0275repeaterCreate(4, EntregasComponent_Conditional_50_For_5_Template, 2, 2, "mat-option", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r4.lotes);
  }
}
function EntregasComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "mat-icon");
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Sin lote");
    \u0275\u0275elementEnd()();
  }
}
function EntregasComponent_For_76_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20);
    \u0275\u0275text(1, "Seleccionar Revendedora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-option", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", "");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", a_r6 == null ? null : a_r6.id_revendedora);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r6 == null ? null : a_r6.nombre);
  }
}
function EntregasComponent_For_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EntregasComponent_For_76_Conditional_0_Template, 4, 3);
  }
  if (rf & 2) {
    const a_r6 = ctx.$implicit;
    \u0275\u0275conditional((a_r6 == null ? null : a_r6.tipo) === "CONSIGNACION" ? 0 : -1);
  }
}
function EntregasComponent_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "mat-icon");
    \u0275\u0275text(2, "inventory_2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No hay entregas registradas");
    \u0275\u0275elementEnd()();
  }
}
function EntregasComponent_Conditional_87_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 42)(1, "td", 47);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 48);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 50);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 51);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 52);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 6, item_r7.fecha_movimiento, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r7.producto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.almacen);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.numero_lote ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 9, item_r7.cantidad, "1.0-2"));
  }
}
function EntregasComponent_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 39)(1, "thead", 41)(2, "tr", 42)(3, "th", 43);
    \u0275\u0275text(4, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 44);
    \u0275\u0275text(6, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 44);
    \u0275\u0275text(8, "SKU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 44);
    \u0275\u0275text(10, "Revendedora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 44);
    \u0275\u0275text(12, "Lote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 45);
    \u0275\u0275text(14, "Cantidad");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody", 46);
    \u0275\u0275repeaterCreate(16, EntregasComponent_Conditional_87_For_17_Template, 15, 12, "tr", 42, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(18, 0, ctx_r4.entregasFacade.responseEntregasConsignas$));
  }
}
var EntregasComponent = class _EntregasComponent {
  constructor(fb) {
    this.fb = fb;
    this.almacenFacade = inject(AlmacenesFacadeService);
    this.productosFacade = inject(ProductosFacadeService);
    this.lotesFacade = inject(LotesFacadeService);
    this.entregasFacade = inject(EntregasFacadeService);
    this.toastFacade = inject(ToastrServiceLocal);
    this.productoNombre = "";
    this.requiereLote = false;
    this.lotes = [];
    this.guardando = false;
    this.formRevendedoras = new FormControl("");
    this.buscar = new FormControl("");
    this.almacenFacade.MostrarAlmacenes("0");
    this.almacenFacade.MostrarRevendedoras("0");
    this.formEntrega = this.fb.group({
      idAlmacenDestino: [null, Validators.required],
      idAlmacenOrigen: [null, Validators.required],
      idProducto: [null, Validators.required],
      idLote: [null],
      cantidad: [null, [Validators.required, Validators.min(1e-4)]]
    });
  }
  ngOnInit() {
    this.cargarEntregas();
    this.buscar.valueChanges.pipe(debounceTime(350), distinctUntilChanged()).subscribe(() => this.cargarEntregas());
    this.formRevendedoras.valueChanges.subscribe(() => this.filtrarRevendedoraBusqueda());
  }
  cargarEntregas() {
    const texto = this.buscar.value && this.buscar.value.trim() !== "" ? this.buscar.value : "null";
    this.entregasFacade.MostrarEntregasConsigna({
      idRevendedora: 0,
      busqueda: texto,
      pagina: 1,
      tamanoPagina: 100
    });
  }
  filtrarRevendedoraBusqueda() {
    this.entregasFacade.MostrarEntregasConsigna({
      idRevendedora: this.formRevendedoras.value,
      busqueda: "",
      pagina: 1,
      tamanoPagina: 100
    });
  }
  onRevendedora() {
  }
  buscarProducto(event) {
    const texto = event.target.value;
    this.productosFacade.MostrarProductos(this.filtroBusqueda(texto));
  }
  filtroBusqueda(texto) {
    return {
      busqueda: texto && texto.trim() !== "" ? texto : null,
      idMarca: null,
      idCategoria: null,
      idSubCategoria: null,
      activo: "1",
      perecedero: null,
      requiereLote: null,
      bajoStock: null,
      pagina: 1,
      tamanoPagina: 20
    };
  }
  selectProducto(producto) {
    this.productoNombre = `${producto.sku} - ${producto.nombre}`;
    this.requiereLote = producto.requiere_lote === 1 || producto.requiere_lote === true;
    this.formEntrega.patchValue({
      idProducto: producto.id,
      idLote: null
    });
    if (this.requiereLote) {
      this.lotesFacade.MostrarLotesProducto(producto.id, (lotes) => {
        this.lotes = lotes ?? [];
      });
    } else {
      this.lotes = [];
    }
  }
  limpiar() {
    this.formEntrega.reset();
    this.productoNombre = "";
    this.requiereLote = false;
    this.lotes = [];
  }
  Guardar() {
    if (this.formEntrega.invalid) {
      this.formEntrega.markAllAsTouched();
      if (this.requiereLote && !this.formEntrega.get("idLote")?.value) {
        this.toastFacade.mensajeError("Es requerido seleccionar el lote", "");
      }
      return;
    }
    if (this.formEntrega.get("idAlmacenOrigen")?.value === this.formEntrega.get("idAlmacenDestino")?.value) {
      this.toastFacade.mensajeError("El origen y el destino no pueden ser el mismo almac\xE9n", "");
      return;
    }
    this.guardando = true;
    const payload = {
      idProducto: this.formEntrega.get("idProducto")?.value,
      idAlmacenOrigen: this.formEntrega.get("idAlmacenOrigen")?.value,
      idAlmacenDestino: this.formEntrega.get("idAlmacenDestino")?.value,
      idLote: this.formEntrega.get("idLote")?.value ?? null,
      cantidad: +this.formEntrega.get("cantidad")?.value,
      usuario: this.usuarioActual
    };
    this.entregasFacade.EntregasConsigna(payload, (ok) => {
      this.guardando = false;
      if (ok) {
        this.toastFacade.mensajeSuccess("Entrega en consigna registrada con \xE9xito", "");
        this.limpiar();
        this.cargarEntregas();
      }
    });
  }
  static {
    this.\u0275fac = function EntregasComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EntregasComponent)(\u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EntregasComponent, selectors: [["app-entregas"]], standalone: false, decls: 88, vars: 20, consts: [["autoProd", "matAutocomplete"], [1, "navigation"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "activo"], [1, "content"], [1, "titleNav"], [1, "subtitulo"], [1, "entregas-wrap"], [1, "card-entrega", 3, "formGroup"], [1, "card-head"], [1, "card-head-txt"], [1, "card-body"], ["appearance", "fill", 1, "campo-full"], ["formControlName", "idAlmacenDestino", "required", "", 3, "selectionChange"], ["formControlName", "idAlmacenOrigen", "required", ""], ["type", "text", "matInput", "", "placeholder", "Buscar producto", "required", "", 3, "input", "matAutocomplete", "value"], [3, "optionSelected"], [3, "value"], [1, "grid-2"], ["appearance", "fill"], [1, "lote-placeholder"], ["matInput", "", "type", "number", "min", "0.0001", "step", "0.0001", "formControlName", "cantidad", "placeholder", "0", "required", ""], [1, "acciones-form"], ["type", "button", "mat-stroked-button", "", 3, "click"], ["type", "button", "mat-flat-button", "", 1, "button-principal", 3, "click", "disabled"], [1, "card-historial"], [1, "historial-header"], [1, "historial-titulo"], [1, "historial-titulo-txt"], [1, "row"], ["appearance", "fill", 1, "col-md-6", "col-ms-12", "col-xs-12"], ["required", "", 3, "formControl"], ["matPrefix", ""], ["matInput", "", "type", "text", "placeholder", "Buscar producto o SKU...", "autocomplete", "off", 3, "formControl"], [1, "tabla-scroll"], [1, "sin-datos"], ["role", "table", 1, "tablep"], ["formControlName", "idLote", "required", ""], [1, "theadp"], [1, "trp"], [1, "thp", "col-fecha"], [1, "thp"], [1, "thp", "col-numero"], [1, "tbodyp"], ["data-title", "Fecha", 1, "tdp", "col-fecha"], ["data-title", "Producto", 1, "tdp", "td-fuerte"], ["data-title", "SKU", 1, "tdp", "td-secundario"], ["data-title", "Revendedora", 1, "tdp"], ["data-title", "Lote", 1, "tdp"], ["data-title", "Cantidad", 1, "tdp", "col-numero"]], template: function EntregasComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "nav", 2)(2, "ol", 3)(3, "li", 4)(4, "a", 5);
        \u0275\u0275text(5, "Inicio");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "li", 6);
        \u0275\u0275text(7, "Entregas en consignaci\xF3n");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "h2");
        \u0275\u0275text(11, "Entregas en consignaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 9);
        \u0275\u0275text(13, "Entrega de producto a revendedoras");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(14, "div", 10)(15, "mat-card", 11)(16, "div", 12)(17, "mat-icon");
        \u0275\u0275text(18, "local_shipping");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 13);
        \u0275\u0275text(20, "Nueva entrega");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 14)(22, "mat-form-field", 15)(23, "mat-label");
        \u0275\u0275text(24, "Revendedora");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "mat-select", 16);
        \u0275\u0275listener("selectionChange", function EntregasComponent_Template_mat_select_selectionChange_25_listener() {
          return ctx.onRevendedora();
        });
        \u0275\u0275repeaterCreate(26, EntregasComponent_For_27_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275pipe(28, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "mat-hint");
        \u0275\u0275text(30, "Almac\xE9n de consignaci\xF3n de la revendedora");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "mat-form-field", 15)(32, "mat-label");
        \u0275\u0275text(33, "Almac\xE9n origen");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "mat-select", 17);
        \u0275\u0275repeaterCreate(35, EntregasComponent_For_36_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275pipe(37, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "mat-hint");
        \u0275\u0275text(39, "De d\xF3nde sale el producto");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "mat-form-field", 15)(41, "mat-label");
        \u0275\u0275text(42, "Producto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "input", 18);
        \u0275\u0275listener("input", function EntregasComponent_Template_input_input_43_listener($event) {
          return ctx.buscarProducto($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "mat-autocomplete", 19, 0);
        \u0275\u0275listener("optionSelected", function EntregasComponent_Template_mat_autocomplete_optionSelected_44_listener($event) {
          return ctx.selectProducto($event.option.value);
        });
        \u0275\u0275repeaterCreate(46, EntregasComponent_For_47_Template, 2, 3, "mat-option", 20, _forTrack0);
        \u0275\u0275pipe(48, "async");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "div", 21);
        \u0275\u0275conditionalCreate(50, EntregasComponent_Conditional_50_Template, 6, 0, "mat-form-field", 22)(51, EntregasComponent_Conditional_51_Template, 5, 0, "div", 23);
        \u0275\u0275elementStart(52, "mat-form-field", 22)(53, "mat-label");
        \u0275\u0275text(54, "Cantidad");
        \u0275\u0275elementEnd();
        \u0275\u0275element(55, "input", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "div", 25)(57, "button", 26);
        \u0275\u0275listener("click", function EntregasComponent_Template_button_click_57_listener() {
          return ctx.limpiar();
        });
        \u0275\u0275text(58, "Limpiar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "button", 27);
        \u0275\u0275listener("click", function EntregasComponent_Template_button_click_59_listener() {
          return ctx.Guardar();
        });
        \u0275\u0275elementStart(60, "mat-icon");
        \u0275\u0275text(61, "send");
        \u0275\u0275elementEnd();
        \u0275\u0275text(62, " Registrar entrega ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(63, "mat-card", 28)(64, "div", 29)(65, "div", 30)(66, "mat-icon");
        \u0275\u0275text(67, "history");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "span", 31);
        \u0275\u0275text(69, "Entregas registradas");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(70, "div", 32)(71, "mat-form-field", 33)(72, "mat-label");
        \u0275\u0275text(73, "Revendedora");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "mat-select", 34);
        \u0275\u0275repeaterCreate(75, EntregasComponent_For_76_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275pipe(77, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "mat-hint");
        \u0275\u0275text(79, "Revendedoras");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(80, "mat-form-field", 33)(81, "mat-icon", 35);
        \u0275\u0275text(82, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275element(83, "input", 36);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(84, "div", 37);
        \u0275\u0275conditionalCreate(85, EntregasComponent_Conditional_85_Template, 5, 0, "div", 38);
        \u0275\u0275pipe(86, "async");
        \u0275\u0275conditionalBranchCreate(87, EntregasComponent_Conditional_87_Template, 19, 2, "table", 39);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_7_0;
        let tmp_13_0;
        const autoProd_r8 = \u0275\u0275reference(45);
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(19, _c0));
        \u0275\u0275advance(11);
        \u0275\u0275property("formGroup", ctx.formEntrega);
        \u0275\u0275advance(11);
        \u0275\u0275repeater(\u0275\u0275pipeBind1(28, 9, ctx.almacenFacade.responseAlmacenes$));
        \u0275\u0275advance(9);
        \u0275\u0275repeater(\u0275\u0275pipeBind1(37, 11, ctx.almacenFacade.responseAlmacenes$));
        \u0275\u0275advance(8);
        \u0275\u0275property("matAutocomplete", autoProd_r8)("value", ctx.productoNombre);
        \u0275\u0275advance(3);
        \u0275\u0275repeater((tmp_7_0 = \u0275\u0275pipeBind1(48, 13, ctx.productosFacade.responseProductos$)) == null ? null : tmp_7_0.data);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.requiereLote ? 50 : 51);
        \u0275\u0275advance(9);
        \u0275\u0275property("disabled", ctx.formEntrega.invalid || ctx.guardando);
        \u0275\u0275advance(15);
        \u0275\u0275property("formControl", ctx.formRevendedoras);
        \u0275\u0275advance();
        \u0275\u0275repeater(\u0275\u0275pipeBind1(77, 15, ctx.almacenFacade.responseAlmacenes$));
        \u0275\u0275advance(8);
        \u0275\u0275property("formControl", ctx.buscar);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_13_0 = \u0275\u0275pipeBind1(86, 17, ctx.entregasFacade.responseEntregasConsignas$)) == null ? null : tmp_13_0.length) === 0 ? 85 : 87);
      }
    }, dependencies: [MatFormField, MatLabel, MatHint, MatPrefix, MatInput, MatIcon, MatButton, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, FormControlDirective, FormGroupDirective, FormControlName, MatCard, MatSelect, MatOption, MatAutocomplete, MatAutocompleteTrigger, RouterLink, AsyncPipe, DecimalPipe, DatePipe], styles: ['@charset "UTF-8";\n\n\n.entregas-wrap[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 8px 24px 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.card-entrega[_ngcontent-%COMP%], \n.card-historial[_ngcontent-%COMP%] {\n  border-radius: var(--radius-card);\n  overflow: hidden;\n  box-shadow: var(--shadow-soft);\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n}\n.card-head[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: #fff;\n  padding: 15px 22px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.card-head[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  opacity: 0.85;\n}\n.card-head[_ngcontent-%COMP%]   .card-head-txt[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-weight: 600;\n  font-size: 16px;\n}\n.card-entrega[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.campo-full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.grid-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.grid-2[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.lote-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 4px;\n  color: var(--color-text-muted);\n  font-size: 13px;\n}\n.lote-placeholder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n.acciones-form[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 10px;\n}\n.historial-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--color-border);\n  flex-wrap: wrap;\n  margin-bottom: 8px;\n}\n.historial-titulo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.historial-titulo[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n.historial-titulo[_ngcontent-%COMP%]   .historial-titulo-txt[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-weight: 600;\n  font-size: 16px;\n  color: var(--color-text);\n}\n.buscador-historial[_ngcontent-%COMP%] {\n  width: 280px;\n}\n.buscador-historial[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.tabla-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n@media (max-width: 700px) {\n  .entregas-wrap[_ngcontent-%COMP%] {\n    padding: 8px 14px 24px;\n  }\n  .grid-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .buscador-historial[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .acciones-form[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .acciones-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .historial-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n/*# sourceMappingURL=entregas.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EntregasComponent, [{
    type: Component,
    args: [{ selector: "app-entregas", standalone: false, template: `<div class="navigation">\r
    <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb">\r
            <li class="breadcrumb-item"><a [routerLink]="['/dashboard']">Inicio</a></li>\r
            <li class="breadcrumb-item activo">Entregas en consignaci\xF3n</li>\r
        </ol>\r
    </nav>\r
\r
    <div class="content">\r
        <div class="titleNav">\r
            <h2>Entregas en consignaci\xF3n</h2>\r
            <div class="subtitulo">Entrega de producto a revendedoras</div>\r
        </div>\r
    </div>\r
</div>\r
\r
<div class="entregas-wrap">\r
\r
    <mat-card class="card-entrega" [formGroup]="formEntrega">\r
        <div class="card-head">\r
            <mat-icon>local_shipping</mat-icon>\r
            <span class="card-head-txt">Nueva entrega</span>\r
        </div>\r
\r
        <div class="card-body">\r
\r
            <mat-form-field appearance="fill" class="campo-full">\r
                <mat-label>Revendedora</mat-label>\r
                <mat-select formControlName="idAlmacenDestino" required (selectionChange)="onRevendedora()">\r
                    @for (a of (almacenFacade.responseAlmacenes$ | async); track a) {\r
                    @if (a?.tipo === 'CONSIGNACION') {\r
                    <mat-option [value]="a?.id">{{ a?.nombre }}</mat-option>\r
                    }\r
                    }\r
                </mat-select>\r
                <mat-hint>Almac\xE9n de consignaci\xF3n de la revendedora</mat-hint>\r
            </mat-form-field>\r
\r
            <mat-form-field appearance="fill" class="campo-full">\r
                <mat-label>Almac\xE9n origen</mat-label>\r
                <mat-select formControlName="idAlmacenOrigen" required>\r
                    @for (a of (almacenFacade.responseAlmacenes$ | async); track a) {\r
                    @if (a?.tipo !== 'CONSIGNACION') {\r
                    <mat-option [value]="a?.id">{{ a?.nombre }}</mat-option>\r
                    }\r
                    }\r
                </mat-select>\r
                <mat-hint>De d\xF3nde sale el producto</mat-hint>\r
            </mat-form-field>\r
\r
            <mat-form-field appearance="fill" class="campo-full">\r
                <mat-label>Producto</mat-label>\r
                <input type="text" matInput placeholder="Buscar producto" [matAutocomplete]="autoProd"\r
                    [value]="productoNombre" (input)="buscarProducto($event)" required>\r
                <mat-autocomplete #autoProd="matAutocomplete" (optionSelected)="selectProducto($event.option.value)">\r
                    @for (p of (productosFacade.responseProductos$ | async)?.data; track p.id) {\r
                    <mat-option [value]="p">{{ p?.sku }} - {{ p?.nombre }}</mat-option>\r
                    }\r
                </mat-autocomplete>\r
            </mat-form-field>\r
\r
            <div class="grid-2">\r
                <!-- Lote (condicional) -->\r
                @if (requiereLote) {\r
                <mat-form-field appearance="fill">\r
                    <mat-label>Lote</mat-label>\r
                    <mat-select formControlName="idLote" required>\r
                        @for (l of lotes; track l) {\r
                        <mat-option [value]="l?.id">{{ l?.numero_lote }}</mat-option>\r
                        }\r
                    </mat-select>\r
                </mat-form-field>\r
                } @else {\r
                <div class="lote-placeholder">\r
                    <mat-icon>info</mat-icon>\r
                    <span>Sin lote</span>\r
                </div>\r
                }\r
\r
                <!-- Cantidad -->\r
                <mat-form-field appearance="fill">\r
                    <mat-label>Cantidad</mat-label>\r
                    <input matInput type="number" min="0.0001" step="0.0001" formControlName="cantidad" placeholder="0"\r
                        required>\r
                </mat-form-field>\r
            </div>\r
\r
            <div class="acciones-form">\r
                <button type="button" mat-stroked-button (click)="limpiar()">Limpiar</button>\r
                <button type="button" class="button-principal" mat-flat-button\r
                    [disabled]="formEntrega.invalid || guardando" (click)="Guardar()">\r
                    <mat-icon>send</mat-icon>\r
                    Registrar entrega\r
                </button>\r
            </div>\r
\r
        </div>\r
    </mat-card>\r
\r
    <mat-card class="card-historial">\r
        <div class="historial-header">\r
            <div class="historial-titulo">\r
                <mat-icon>history</mat-icon>\r
                <span class="historial-titulo-txt">Entregas registradas</span>\r
            </div>\r
\r
        </div>\r
        <div class="row">\r
            <mat-form-field appearance="fill" class="col-md-6 col-ms-12 col-xs-12" >\r
                <mat-label>Revendedora</mat-label>\r
                <mat-select [formControl]="formRevendedoras" required>\r
                    @for (a of (almacenFacade.responseAlmacenes$ | async); track a) {\r
                    @if (a?.tipo === 'CONSIGNACION') {\r
                    <mat-option [value]="''">Seleccionar Revendedora</mat-option>\r
                    <mat-option [value]="a?.id_revendedora">{{ a?.nombre }}</mat-option>\r
                    }\r
                    }\r
                </mat-select>\r
                <mat-hint>Revendedoras</mat-hint>\r
            </mat-form-field>\r
\r
            <mat-form-field appearance="fill" class="col-md-6 col-ms-12 col-xs-12" >\r
                <mat-icon matPrefix>search</mat-icon>\r
                <input matInput type="text" placeholder="Buscar producto o SKU..." [formControl]="buscar"\r
                    autocomplete="off">\r
            </mat-form-field>\r
        </div>\r
\r
        <div class="tabla-scroll">\r
            @if ((entregasFacade.responseEntregasConsignas$ | async)?.length === 0) {\r
            <div class="sin-datos">\r
                <mat-icon>inventory_2</mat-icon>\r
                <p>No hay entregas registradas</p>\r
            </div>\r
            } @else {\r
            <table class="tablep" role="table">\r
                <thead class="theadp">\r
                    <tr class="trp">\r
                        <th class="thp col-fecha">Fecha</th>\r
                        <th class="thp">Producto</th>\r
                        <th class="thp">SKU</th>\r
                        <th class="thp">Revendedora</th>\r
                        <th class="thp">Lote</th>\r
                        <th class="thp col-numero">Cantidad</th>\r
                    </tr>\r
                </thead>\r
                <tbody class="tbodyp">\r
                    @for (item of (entregasFacade.responseEntregasConsignas$ | async); track item) {\r
                    <tr class="trp">\r
                        <td data-title="Fecha" class="tdp col-fecha">{{ item.fecha_movimiento | date:'dd/MM/yyyy HH:mm'\r
                            }}</td>\r
                        <td data-title="Producto" class="tdp td-fuerte">{{ item.producto }}</td>\r
                        <td data-title="SKU" class="tdp td-secundario">{{ item.sku }}</td>\r
                        <td data-title="Revendedora" class="tdp">{{ item.almacen }}</td>\r
                        <td data-title="Lote" class="tdp">{{ item.numero_lote ?? '\u2014' }}</td>\r
                        <td data-title="Cantidad" class="tdp col-numero">{{ item.cantidad | number:'1.0-2' }}</td>\r
                    </tr>\r
                    }\r
                </tbody>\r
            </table>\r
            }\r
        </div>\r
    </mat-card>\r
\r
</div>`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/Consignacion/entregas/entregas.component.scss */\n.entregas-wrap {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 8px 24px 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.card-entrega,\n.card-historial {\n  border-radius: var(--radius-card);\n  overflow: hidden;\n  box-shadow: var(--shadow-soft);\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n}\n.card-head {\n  background: var(--color-primary);\n  color: #fff;\n  padding: 15px 22px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.card-head mat-icon {\n  color: #fff;\n  opacity: 0.85;\n}\n.card-head .card-head-txt {\n  font-family: var(--font-serif);\n  font-weight: 600;\n  font-size: 16px;\n}\n.card-entrega .card-body {\n  padding: 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.campo-full {\n  width: 100%;\n}\n.grid-2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.grid-2 mat-form-field {\n  width: 100%;\n}\n.lote-placeholder {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 4px;\n  color: var(--color-text-muted);\n  font-size: 13px;\n}\n.lote-placeholder mat-icon {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n.acciones-form {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 10px;\n}\n.historial-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--color-border);\n  flex-wrap: wrap;\n  margin-bottom: 8px;\n}\n.historial-titulo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.historial-titulo mat-icon {\n  color: var(--color-accent);\n}\n.historial-titulo .historial-titulo-txt {\n  font-family: var(--font-serif);\n  font-weight: 600;\n  font-size: 16px;\n  color: var(--color-text);\n}\n.buscador-historial {\n  width: 280px;\n}\n.buscador-historial ::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.tabla-scroll {\n  overflow-x: auto;\n}\n@media (max-width: 700px) {\n  .entregas-wrap {\n    padding: 8px 14px 24px;\n  }\n  .grid-2 {\n    grid-template-columns: 1fr;\n  }\n  .buscador-historial {\n    width: 100%;\n  }\n  .acciones-form {\n    flex-direction: column-reverse;\n  }\n  .acciones-form button {\n    width: 100%;\n  }\n  .historial-header {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n/*# sourceMappingURL=entregas.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EntregasComponent, { className: "EntregasComponent", filePath: "src/app/modules/consignacion/entregas/entregas.component.ts", lineNumber: 29 });
})();

// src/app/modules/Consignacion/liquidaciones/liquidaciones-facade.service.ts
var LiquidacionesFacadeService = class _LiquidacionesFacadeService {
  constructor() {
    this.dataApi = inject(DataApiService);
    this._mensajesHttp = inject(MensajesHttpService);
    this.Cargando$ = new BehaviorSubject(false);
    this.responseCargando$ = this.Cargando$.asObservable();
    this.Liquidaciones$ = new BehaviorSubject(null);
    this.responseLiquidaciones$ = this.Liquidaciones$.asObservable();
    this.Detalle$ = new BehaviorSubject(null);
    this.responseDetalle$ = this.Detalle$.asObservable();
    this.ProductosConsigna$ = new BehaviorSubject(null);
    this.responseProductosConsigna$ = this.ProductosConsigna$.asObservable();
  }
  seg(valor, centinela = 0) {
    if (valor === null || valor === void 0 || valor === "") {
      return String(centinela);
    }
    return encodeURIComponent(String(valor));
  }
  MostrarLiquidaciones(f) {
    const url = `inventario/v1/liquidaciones/${this.seg(f.idRevendedora)}/${this.seg(f.estado, "null")}/${this.seg(f.pagina, 1)}/${this.seg(f.tamanoPagina, 100)}`;
    this.Cargando$.next(true);
    this.Liquidaciones$.next([]);
    const request$ = this.dataApi.GetDataApi(url, "").pipe(tap((result) => {
      this.Cargando$.next(false);
      this.Liquidaciones$.next(result.data.Table0);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.Liquidaciones$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar las liquidaciones", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  MostrarDetalle(idLiquidacion) {
    const url = `inventario/v1/liquidaciones/${this.seg(idLiquidacion)}`;
    const request$ = this.dataApi.GetDataApi(url, "").pipe(tap((result) => {
      this.Detalle$.next(result.data.Table0);
    }), catchError((error) => {
      this.Detalle$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar el detalle", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  RegistrarLiquidacion(datos, lineas, respuesta) {
    this.Cargando$.next(true);
    let idLiquidacion = null;
    const request$ = from(lineas).pipe(concatMap((linea) => {
      const params = {
        idRevendedora: datos.idRevendedora,
        idAlmacenRevendedora: datos.idAlmacenRevendedora,
        idProducto: linea.idProducto,
        cantidadVendida: linea.cantidadVendida,
        precioConsigna: linea.precioConsigna,
        precioVentaPublico: linea.precioVentaPublico ?? null,
        idLiquidacion,
        // null en la 1ra; el id en las siguientes
        usuario: datos.usuario
      };
      return this.dataApi.PostDataApi(`inventario/v1/liquidacion-consigna/`, params).pipe(tap((result) => {
        const fila = result?.data?.Table0?.[0];
        if (fila && fila.id_liquidacion) {
          idLiquidacion = fila.id_liquidacion;
        }
      }));
    }), toArray(), tap(() => {
      this.Cargando$.next(false);
      respuesta(true);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al registrar la liquidacion", "");
      respuesta(false);
      return EMPTY;
    }));
    return request$.subscribe();
  }
  MostrarProductosConsigna(idAlmacen, busqueda) {
    const url = `inventario/v1/productos/consigna/${this.seg(idAlmacen)}/${this.seg(busqueda, "null")}`;
    const request$ = this.dataApi.GetDataApi(url, "").pipe(tap((result) => {
      this.ProductosConsigna$.next(result.data.Table0);
    }), catchError((error) => {
      this.ProductosConsigna$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar los productos en consigna", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  static {
    this.\u0275fac = function LiquidacionesFacadeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LiquidacionesFacadeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LiquidacionesFacadeService, factory: _LiquidacionesFacadeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LiquidacionesFacadeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/Consignacion/liquidaciones/liquidaciones.component.ts
var _c02 = () => ["/dashboard"];
var _forTrack02 = ($index, $item) => $item.id;
function LiquidacionesComponent_For_27_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", a_r1 == null ? null : a_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r1 == null ? null : a_r1.nombre);
  }
}
function LiquidacionesComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LiquidacionesComponent_For_27_Conditional_0_Template, 2, 2, "mat-option", 34);
  }
  if (rf & 2) {
    const a_r1 = ctx.$implicit;
    \u0275\u0275conditional((a_r1 == null ? null : a_r1.tipo) === "CONSIGNACION" ? 0 : -1);
  }
}
function LiquidacionesComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.lineas.length, " ", ctx_r1.lineas.length === 1 ? "\xEDtem" : "\xEDtems");
  }
}
function LiquidacionesComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "mat-icon");
    \u0275\u0275text(2, "point_of_sale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Agrega los productos que la revendedora vendi\xF3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 23);
    \u0275\u0275listener("click", function LiquidacionesComponent_Conditional_44_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.agregarLinea());
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Agregar el primero ");
    \u0275\u0275elementEnd()();
  }
}
function LiquidacionesComponent_Conditional_45_For_17_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    \u0275\u0275property("value", p_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", p_r6 == null ? null : p_r6.sku, " - ", p_r6 == null ? null : p_r6.nombre, " (disp: ", p_r6 == null ? null : p_r6.stock_disponible, ")");
  }
}
function LiquidacionesComponent_Conditional_45_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 43)(1, "td", 38)(2, "div", 49)(3, "span", 50);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 51)(6, "input", 52);
    \u0275\u0275listener("input", function LiquidacionesComponent_Conditional_45_For_17_Template_input_input_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.buscarProducto($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-autocomplete", 53, 1);
    \u0275\u0275listener("optionSelected", function LiquidacionesComponent_Conditional_45_For_17_Template_mat_autocomplete_optionSelected_7_listener($event) {
      const \u0275$index_122_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectProducto($event.option.value, \u0275$index_122_r5));
    });
    \u0275\u0275repeaterCreate(9, LiquidacionesComponent_Conditional_45_For_17_For_10_Template, 2, 4, "mat-option", 34, _forTrack02);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "td", 39)(13, "mat-form-field", 51);
    \u0275\u0275element(14, "input", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 39)(16, "mat-form-field", 51)(17, "span", 55);
    \u0275\u0275text(18, "L.\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td", 39)(21, "mat-form-field", 51)(22, "span", 55);
    \u0275\u0275text(23, "L.\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td", 40)(26, "span", 58);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td", 41)(30, "button", 59);
    \u0275\u0275listener("click", function LiquidacionesComponent_Conditional_45_For_17_Template_button_click_30_listener() {
      const \u0275$index_122_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.eliminarLinea(\u0275$index_122_r5));
    });
    \u0275\u0275elementStart(31, "mat-icon");
    \u0275\u0275text(32, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_17_0;
    const linea_r7 = ctx.$implicit;
    const \u0275$index_122_r5 = ctx.$index;
    const autoProd_r8 = \u0275\u0275reference(8);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroupName", \u0275$index_122_r5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275$index_122_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("matAutocomplete", autoProd_r8)("value", (tmp_17_0 = linea_r7.get("productoNombre")) == null ? null : tmp_17_0.value);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(11, 5, ctx_r1.liquidacionesFacade.responseProductosConsigna$));
    \u0275\u0275advance(18);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(28, 7, ctx_r1.subtotalLinea(\u0275$index_122_r5), "HNL", "L. ", "1.2-2"));
  }
}
function LiquidacionesComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "table", 37)(2, "thead")(3, "tr")(4, "th", 38);
    \u0275\u0275text(5, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 39);
    \u0275\u0275text(7, "Cantidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 39);
    \u0275\u0275text(9, "Precio consigna");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 39);
    \u0275\u0275text(11, "Precio p\xFAblico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 40);
    \u0275\u0275text(13, "Le debe");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "th", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "tbody", 42);
    \u0275\u0275repeaterCreate(16, LiquidacionesComponent_Conditional_45_For_17_Template, 33, 12, "tr", 43, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 44)(19, "div", 45)(20, "strong");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 46)(24, "span", 47);
    \u0275\u0275text(25, "Total a pagar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 48);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "currency");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.formLiq);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.lineas.controls);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.lineas.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.lineas.length === 1 ? "producto" : "productos", " liquidados ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(28, 4, ctx_r1.totalLiquidacion(), "HNL", "L. ", "1.2-2"));
  }
}
function LiquidacionesComponent_For_68_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", a_r9 == null ? null : a_r9.id_revendedora);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r9 == null ? null : a_r9.nombre);
  }
}
function LiquidacionesComponent_For_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LiquidacionesComponent_For_68_Conditional_0_Template, 2, 2, "mat-option", 34);
  }
  if (rf & 2) {
    const a_r9 = ctx.$implicit;
    \u0275\u0275conditional((a_r9 == null ? null : a_r9.tipo) === "CONSIGNACION" ? 0 : -1);
  }
}
function LiquidacionesComponent_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "mat-icon");
    \u0275\u0275text(2, "receipt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No hay liquidaciones registradas");
    \u0275\u0275elementEnd()();
  }
}
function LiquidacionesComponent_Conditional_75_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 61)(1, "td", 67)(2, "div", 68)(3, "button", 69);
    \u0275\u0275listener("click", function LiquidacionesComponent_Conditional_75_For_17_Template_button_click_3_listener() {
      const item_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      const modalDetalle_r12 = \u0275\u0275reference(77);
      return \u0275\u0275resetView(ctx_r1.verDetalle(item_r11, modalDetalle_r12));
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "visibility");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(6, "td", 70);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 71);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 72);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 73);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 74);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(item_r11.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 5, item_r11.fecha_liquidacion, "dd/MM/yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r11.revendedora);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(15, 8, item_r11.total_vendido, "HNL", "L. ", "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(18, 13, item_r11.total_a_pagar, "HNL", "L. ", "1.2-2"));
  }
}
function LiquidacionesComponent_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 36)(1, "thead", 60)(2, "tr", 61)(3, "th", 62);
    \u0275\u0275text(4, "Acciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 63);
    \u0275\u0275text(6, "C\xF3digo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 64);
    \u0275\u0275text(8, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 65);
    \u0275\u0275text(10, "Revendedora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 63);
    \u0275\u0275text(12, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 63);
    \u0275\u0275text(14, "Le debe");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody", 66);
    \u0275\u0275repeaterCreate(16, LiquidacionesComponent_Conditional_75_For_17_Template, 19, 18, "tr", 61, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(18, 0, ctx_r1.liquidacionesFacade.responseLiquidaciones$));
  }
}
function LiquidacionesComponent_ng_template_76_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "mat-icon");
    \u0275\u0275text(2, "inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Sin detalle");
    \u0275\u0275elementEnd()();
  }
}
function LiquidacionesComponent_ng_template_76_Conditional_23_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 61)(1, "td", 87);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 88);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 89);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 90);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 91);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 92);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r13.producto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 6, d_r13.cantidad_vendida, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(8, 9, d_r13.precio_consigna, "HNL", "L. ", "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r13.precio_venta_publico ? \u0275\u0275pipeBind4(11, 14, d_r13.precio_venta_publico, "HNL", "L. ", "1.2-2") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(14, 19, d_r13.subtotal, "HNL", "L. ", "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(17, 24, d_r13.ganancia_revendedora, "HNL", "L. ", "1.2-2"));
  }
}
function LiquidacionesComponent_ng_template_76_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 36)(1, "thead", 60)(2, "tr", 61)(3, "th", 65);
    \u0275\u0275text(4, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 63);
    \u0275\u0275text(6, "Cant.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 63);
    \u0275\u0275text(8, "P. consigna");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 63);
    \u0275\u0275text(10, "P. p\xFAblico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 63);
    \u0275\u0275text(12, "Le debe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 63);
    \u0275\u0275text(14, "Ganancia rev.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody", 66);
    \u0275\u0275repeaterCreate(16, LiquidacionesComponent_ng_template_76_Conditional_23_For_17_Template, 18, 29, "tr", 61, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(18, 0, ctx_r1.liquidacionesFacade.responseDetalle$));
  }
}
function LiquidacionesComponent_ng_template_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 76)(2, "span", 77);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 78)(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "mat-dialog-content", 79)(8, "div", 80)(9, "div", 81)(10, "span", 82);
    \u0275\u0275text(11, "Revendedora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 83);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 81)(15, "span", 82);
    \u0275\u0275text(16, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 83);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 35);
    \u0275\u0275conditionalCreate(21, LiquidacionesComponent_ng_template_76_Conditional_21_Template, 5, 0, "div", 24);
    \u0275\u0275pipe(22, "async");
    \u0275\u0275conditionalBranchCreate(23, LiquidacionesComponent_ng_template_76_Conditional_23_Template, 19, 2, "table", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 84)(25, "span", 47);
    \u0275\u0275text(26, "Total a pagar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 48);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 85)(31, "button", 86);
    \u0275\u0275text(32, "Cerrar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Detalle de liquidaci\xF3n #", ctx_r1.liquidacionSeleccionada == null ? null : ctx_r1.liquidacionSeleccionada.id);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.liquidacionSeleccionada == null ? null : ctx_r1.liquidacionSeleccionada.revendedora);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 5, ctx_r1.liquidacionSeleccionada == null ? null : ctx_r1.liquidacionSeleccionada.fecha_liquidacion, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_5_0 = \u0275\u0275pipeBind1(22, 8, ctx_r1.liquidacionesFacade.responseDetalle$)) == null ? null : tmp_5_0.length) === 0 ? 21 : 23);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(29, 10, ctx_r1.liquidacionSeleccionada == null ? null : ctx_r1.liquidacionSeleccionada.total_a_pagar, "HNL", "L. ", "1.2-2"));
  }
}
var LiquidacionesComponent = class _LiquidacionesComponent {
  constructor(fb) {
    this.fb = fb;
    this.almacenFacade = inject(AlmacenesFacadeService);
    this.productosFacade = inject(ProductosFacadeService);
    this.liquidacionesFacade = inject(LiquidacionesFacadeService);
    this.toastFacade = inject(ToastrServiceLocal);
    this.dialog = inject(MatDialog);
    this.guardando = false;
    this.liquidacionSeleccionada = null;
    this.almacenes = [];
    this.idRevendedora = null;
    this.idAlmacenRevendedora = null;
    this.formIdRevendedorasBusqueda = new FormControl("");
    this.formLiq = this.fb.group({
      idAlmacenRevendedora: [null, Validators.required],
      lineas: this.fb.array([])
    });
  }
  ngOnInit() {
    this.almacenFacade.MostrarAlmacenes("0");
    this.almacenFacade.responseAlmacenes$.subscribe((a) => this.almacenes = a ?? []);
    this.cargarHistorial();
    this.formIdRevendedorasBusqueda.valueChanges.subscribe(() => this.filtrarBusquedaLiquidaciones());
  }
  get lineas() {
    return this.formLiq.get("lineas");
  }
  cargarHistorial() {
    this.liquidacionesFacade.MostrarLiquidaciones({
      idRevendedora: 0,
      estado: "null",
      pagina: 1,
      tamanoPagina: 100
    });
  }
  filtrarBusquedaLiquidaciones() {
    this.liquidacionesFacade.MostrarLiquidaciones({
      idRevendedora: this.formIdRevendedorasBusqueda.value,
      estado: "null",
      pagina: 1,
      tamanoPagina: 100
    });
  }
  onRevendedora(idAlmacen) {
    const alm = this.almacenes.find((a) => a.id === idAlmacen);
    this.idRevendedora = alm?.id_revendedora ?? null;
    this.idAlmacenRevendedora = idAlmacen;
    this.liquidacionesFacade.MostrarProductosConsigna(this.idAlmacenRevendedora, "");
    this.lineas.clear();
  }
  agregarLinea() {
    if (this.idAlmacenRevendedora === null) {
      this.toastFacade.mensajeError("Primero selecciona la revendedora", "");
      return;
    }
    this.lineas.push(this.fb.group({
      idProducto: [null, Validators.required],
      productoNombre: [""],
      stockDisponible: [0],
      cantidadVendida: [null, [Validators.required, Validators.min(1e-4)]],
      precioConsigna: [null, [Validators.required, Validators.min(0)]],
      precioVentaPublico: [null, [Validators.min(0)]]
    }));
  }
  eliminarLinea(i) {
    this.lineas.removeAt(i);
  }
  buscarProducto(event) {
    if (this.idAlmacenRevendedora === null) {
      this.toastFacade.mensajeError("Primero selecciona la revendedora", "");
      return;
    }
    const texto = event.target.value;
    const busqueda = texto && texto.trim() !== "" ? texto : "null";
    this.liquidacionesFacade.MostrarProductosConsigna(this.idAlmacenRevendedora, busqueda);
  }
  selectProducto(producto, i) {
    const linea = this.lineas.at(i);
    linea.patchValue({
      idProducto: producto.id,
      productoNombre: `${producto.sku} - ${producto.nombre}`,
      precioConsigna: producto.precio_venta ?? null,
      stockDisponible: producto.stock_disponible ?? 0
    });
  }
  subtotalLinea(i) {
    const l = this.lineas.at(i);
    const cant = +l.get("cantidadVendida")?.value || 0;
    const precio = +l.get("precioConsigna")?.value || 0;
    return cant * precio;
  }
  totalLiquidacion() {
    return this.lineas.controls.reduce((acc, l) => {
      const cant = +l.get("cantidadVendida")?.value || 0;
      const precio = +l.get("precioConsigna")?.value || 0;
      return acc + cant * precio;
    }, 0);
  }
  limpiar() {
    this.lineas.clear();
    this.formLiq.reset();
    this.idRevendedora = null;
  }
  Guardar() {
    if (this.formLiq.invalid || this.lineas.length === 0) {
      this.formLiq.markAllAsTouched();
      return;
    }
    if (this.idRevendedora === null) {
      this.toastFacade.mensajeError("No se pudo determinar la revendedora del almac\xE9n seleccionado", "");
      return;
    }
    for (let i = 0; i < this.lineas.length; i++) {
      const l = this.lineas.at(i);
      const vendida = +l.get("cantidadVendida")?.value || 0;
      const disponible = +l.get("stockDisponible")?.value || 0;
      if (vendida > disponible) {
        this.toastFacade.mensajeError(`La l\xEDnea ${i + 1} vende ${vendida} pero solo hay ${disponible} en consigna`, "");
        return;
      }
    }
    this.guardando = true;
    const datos = {
      idRevendedora: this.idRevendedora,
      idAlmacenRevendedora: this.formLiq.get("idAlmacenRevendedora")?.value,
      usuario: this.usuarioActual
    };
    const lineas = this.lineas.controls.map((l) => ({
      idProducto: l.get("idProducto")?.value,
      cantidadVendida: +l.get("cantidadVendida")?.value,
      precioConsigna: +l.get("precioConsigna")?.value,
      precioVentaPublico: l.get("precioVentaPublico")?.value != null ? +l.get("precioVentaPublico")?.value : null
    }));
    this.liquidacionesFacade.RegistrarLiquidacion(datos, lineas, (ok) => {
      this.guardando = false;
      if (ok) {
        this.toastFacade.mensajeSuccess("Liquidaci\xF3n registrada con \xE9xito", "");
        this.limpiar();
        this.cargarHistorial();
      }
    });
  }
  verDetalle(item, modal) {
    this.liquidacionSeleccionada = item;
    this.liquidacionesFacade.MostrarDetalle(item.id);
    this.dialog.open(modal, { panelClass: "app-full-bleed-dialog" });
  }
  static {
    this.\u0275fac = function LiquidacionesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LiquidacionesComponent)(\u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LiquidacionesComponent, selectors: [["app-liquidaciones"]], standalone: false, decls: 78, vars: 16, consts: [["modalDetalle", ""], ["autoProd", "matAutocomplete"], [1, "navigation"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "activo"], [1, "content"], [1, "titleNav"], [1, "subtitulo"], [1, "liq-wrap"], [1, "card-cabecera", 3, "formGroup"], [1, "card-head"], [1, "card-head-txt"], [1, "card-body"], ["appearance", "fill", 1, "campo-full"], ["formControlName", "idAlmacenRevendedora", "required", "", 3, "selectionChange"], [1, "card-detalle"], [1, "detalle-header"], [1, "detalle-titulo"], [1, "detalle-titulo-txt"], [1, "contador-lineas"], ["type", "button", "mat-flat-button", "", 1, "button-principal", 3, "click"], [1, "sin-datos"], [1, "acciones-pie"], ["type", "button", "mat-stroked-button", "", 3, "click"], ["type", "button", "mat-flat-button", "", 1, "button-principal", 3, "click", "disabled"], [1, "card-historial"], [1, "historial-header"], [1, "historial-titulo"], [1, "historial-titulo-txt"], [1, "row"], [3, "formControl"], [3, "value"], [1, "tabla-scroll"], ["role", "table", 1, "tablep"], [1, "tabla-lineas", 3, "formGroup"], [1, "col-prod"], [1, "col-num"], [1, "col-sub"], [1, "col-quitar"], ["formArrayName", "lineas"], [3, "formGroupName"], [1, "detalle-pie"], [1, "resumen-items"], [1, "resumen-total"], [1, "total-label"], [1, "total-valor"], [1, "celda-prod"], [1, "fila-num"], ["appearance", "fill", 1, "campo-linea"], ["type", "text", "matInput", "", "placeholder", "Buscar producto", "required", "", 3, "input", "matAutocomplete", "value"], [3, "optionSelected"], ["matInput", "", "type", "number", "min", "1", "formControlName", "cantidadVendida", "placeholder", "0"], ["matTextPrefix", ""], ["matInput", "", "type", "number", "min", "0", "step", "0.01", "formControlName", "precioConsigna", "placeholder", "0.00"], ["matInput", "", "type", "number", "min", "0", "step", "0.01", "formControlName", "precioVentaPublico", "placeholder", "0.00"], [1, "subtotal-val"], ["type", "button", "mat-mini-fab", "", "matTooltip", "Quitar l\xEDnea", 1, "btn-quitar", 3, "click"], [1, "theadp"], [1, "trp"], [1, "thp", "col-acciones"], [1, "thp", "col-numero"], [1, "thp", "col-fecha"], [1, "thp"], [1, "tbodyp"], ["data-title", "Acciones", 1, "tdp", "col-acciones"], [1, "acciones"], ["mat-mini-fab", "", "matTooltip", "Ver detalle", 1, "buttonSecundary", 3, "click"], ["data-title", "C\xF3digo", 1, "tdp", "col-numero"], ["data-title", "Fecha", 1, "tdp", "col-fecha"], ["data-title", "Revendedora", 1, "tdp", "td-fuerte"], ["data-title", "Total", 1, "tdp", "col-numero"], ["data-title", "Le debe", 1, "tdp", "col-numero"], [1, "modal-augajo", "modal-lg"], [1, "modal-header"], [1, "modal-titulo"], ["mat-icon-button", "", "mat-dialog-close", "", "aria-label", "Cerrar", 1, "modal-cerrar"], [1, "mat-typography", "modal-body"], [1, "detalle-resumen"], [1, "resumen-item"], [1, "resumen-lbl"], [1, "resumen-val"], [1, "detalle-total"], [1, "acciones-modal"], ["mat-stroked-button", "", "mat-dialog-close", ""], ["data-title", "Producto", 1, "tdp", "td-fuerte"], ["data-title", "Cant.", 1, "tdp", "col-numero"], ["data-title", "P. consigna", 1, "tdp", "col-numero"], ["data-title", "P. p\xFAblico", 1, "tdp", "col-numero"], ["data-title", "Le debe", 1, "tdp", "col-numero", "td-fuerte"], ["data-title", "Ganancia rev.", 1, "tdp", "col-numero"]], template: function LiquidacionesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "nav", 3)(2, "ol", 4)(3, "li", 5)(4, "a", 6);
        \u0275\u0275text(5, "Inicio");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "li", 7);
        \u0275\u0275text(7, "Liquidaciones");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 8)(9, "div", 9)(10, "h2");
        \u0275\u0275text(11, "Liquidaciones");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 10);
        \u0275\u0275text(13, "Registro de lo vendido por revendedoras");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(14, "div", 11)(15, "mat-card", 12)(16, "div", 13)(17, "mat-icon");
        \u0275\u0275text(18, "receipt_long");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 14);
        \u0275\u0275text(20, "Nueva liquidaci\xF3n");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 15)(22, "mat-form-field", 16)(23, "mat-label");
        \u0275\u0275text(24, "Revendedora");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "mat-select", 17);
        \u0275\u0275listener("selectionChange", function LiquidacionesComponent_Template_mat_select_selectionChange_25_listener($event) {
          return ctx.onRevendedora($event.value);
        });
        \u0275\u0275repeaterCreate(26, LiquidacionesComponent_For_27_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275pipe(28, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "mat-hint");
        \u0275\u0275text(30, "Almac\xE9n de consignaci\xF3n de la revendedora");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(31, "mat-card", 18)(32, "div", 15)(33, "div", 19)(34, "div", 20)(35, "mat-icon");
        \u0275\u0275text(36, "sell");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "span", 21);
        \u0275\u0275text(38, "Productos vendidos");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(39, LiquidacionesComponent_Conditional_39_Template, 2, 2, "span", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "button", 23);
        \u0275\u0275listener("click", function LiquidacionesComponent_Template_button_click_40_listener() {
          return ctx.agregarLinea();
        });
        \u0275\u0275elementStart(41, "mat-icon");
        \u0275\u0275text(42, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(43, " Agregar l\xEDnea ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(44, LiquidacionesComponent_Conditional_44_Template, 9, 0, "div", 24);
        \u0275\u0275conditionalCreate(45, LiquidacionesComponent_Conditional_45_Template, 29, 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 25)(47, "button", 26);
        \u0275\u0275listener("click", function LiquidacionesComponent_Template_button_click_47_listener() {
          return ctx.limpiar();
        });
        \u0275\u0275text(48, "Cancelar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "button", 27);
        \u0275\u0275listener("click", function LiquidacionesComponent_Template_button_click_49_listener() {
          return ctx.Guardar();
        });
        \u0275\u0275elementStart(50, "mat-icon");
        \u0275\u0275text(51, "save");
        \u0275\u0275elementEnd();
        \u0275\u0275text(52, " Registrar liquidaci\xF3n ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "mat-card", 28)(54, "div", 29)(55, "div", 30)(56, "mat-icon");
        \u0275\u0275text(57, "history");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "span", 31);
        \u0275\u0275text(59, "Liquidaciones registradas");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(60, "div", 32)(61, "mat-form-field", 16)(62, "mat-label");
        \u0275\u0275text(63, "Revendedora");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "mat-select", 33)(65, "mat-option", 34);
        \u0275\u0275text(66, "Seleccionar una revendedora");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(67, LiquidacionesComponent_For_68_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275pipe(69, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "mat-hint");
        \u0275\u0275text(71, "Almac\xE9n de consignaci\xF3n de la revendedora");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(72, "div", 35);
        \u0275\u0275conditionalCreate(73, LiquidacionesComponent_Conditional_73_Template, 5, 0, "div", 24);
        \u0275\u0275pipe(74, "async");
        \u0275\u0275conditionalBranchCreate(75, LiquidacionesComponent_Conditional_75_Template, 19, 2, "table", 36);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(76, LiquidacionesComponent_ng_template_76_Template, 33, 15, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        let tmp_11_0;
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(15, _c02));
        \u0275\u0275advance(11);
        \u0275\u0275property("formGroup", ctx.formLiq);
        \u0275\u0275advance(11);
        \u0275\u0275repeater(\u0275\u0275pipeBind1(28, 9, ctx.almacenFacade.responseAlmacenes$));
        \u0275\u0275advance(13);
        \u0275\u0275conditional(ctx.lineas.length > 0 ? 39 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.lineas.length === 0 ? 44 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.lineas.length > 0 ? 45 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.formLiq.invalid || ctx.lineas.length === 0 || ctx.guardando);
        \u0275\u0275advance(15);
        \u0275\u0275property("formControl", ctx.formIdRevendedorasBusqueda);
        \u0275\u0275advance();
        \u0275\u0275property("value", "");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(\u0275\u0275pipeBind1(69, 11, ctx.almacenFacade.responseAlmacenes$));
        \u0275\u0275advance(6);
        \u0275\u0275conditional(((tmp_11_0 = \u0275\u0275pipeBind1(74, 13, ctx.liquidacionesFacade.responseLiquidaciones$)) == null ? null : tmp_11_0.length) === 0 ? 73 : 75);
      }
    }, dependencies: [MatFormField, MatLabel, MatHint, MatPrefix, MatInput, MatIcon, MatButton, MatMiniFabButton, MatIconButton, MatDialogClose, MatDialogContent, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, MatCard, MatSelect, MatOption, MatTooltip, MatAutocomplete, MatAutocompleteTrigger, RouterLink, AsyncPipe, DecimalPipe, CurrencyPipe, DatePipe], styles: ["\n.liq-wrap[_ngcontent-%COMP%] {\n  max-width: 1080px;\n  margin: 0 auto;\n  padding: 8px 24px 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.card-cabecera[_ngcontent-%COMP%], \n.card-detalle[_ngcontent-%COMP%], \n.card-historial[_ngcontent-%COMP%] {\n  border-radius: var(--radius-card);\n  overflow: hidden;\n  box-shadow: var(--shadow-soft);\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n}\n.card-head[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: #fff;\n  padding: 15px 22px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.card-head[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  opacity: 0.85;\n}\n.card-head[_ngcontent-%COMP%]   .card-head-txt[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-weight: 600;\n  font-size: 16px;\n}\n.card-cabecera[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 22px;\n}\n.campo-full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.card-detalle[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.detalle-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 22px;\n}\n.detalle-titulo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.detalle-titulo[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n.detalle-titulo[_ngcontent-%COMP%]   .detalle-titulo-txt[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-weight: 600;\n  font-size: 17px;\n  color: var(--color-text);\n}\n.detalle-titulo[_ngcontent-%COMP%]   .contador-lineas[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n  background: #F4F2EF;\n  padding: 3px 11px;\n  border-radius: 20px;\n}\n.tabla-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  padding: 0 10px;\n}\n.tabla-lineas[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n}\n.tabla-lineas[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--color-text-secondary);\n  font-weight: 600;\n  font-size: 11px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  padding: 10px 12px;\n  text-align: left;\n  white-space: nowrap;\n  border-bottom: 1.5px solid var(--color-border);\n}\n.tabla-lineas[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border-bottom: 1px solid var(--color-border);\n  vertical-align: middle;\n}\n.tabla-lineas[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.tabla-lineas[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #FAF9F7;\n}\n.tabla-lineas[_ngcontent-%COMP%]   .col-prod[_ngcontent-%COMP%] {\n  width: 34%;\n  min-width: 220px;\n}\n.tabla-lineas[_ngcontent-%COMP%]   .col-num[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n.tabla-lineas[_ngcontent-%COMP%]   .col-sub[_ngcontent-%COMP%] {\n  min-width: 110px;\n  text-align: right;\n}\n.tabla-lineas[_ngcontent-%COMP%]   .col-quitar[_ngcontent-%COMP%] {\n  width: 52px;\n  text-align: center;\n}\n.tabla-lineas[_ngcontent-%COMP%]   th.col-num[_ngcontent-%COMP%], \n.tabla-lineas[_ngcontent-%COMP%]   th.col-sub[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.campo-linea[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.campo-linea[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.campo-linea[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper {\n  margin: 0;\n}\n.fila-num[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: var(--color-primary);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  margin-right: 10px;\n  flex-shrink: 0;\n}\n.celda-prod[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.celda-prod[_ngcontent-%COMP%]   .campo-linea[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.subtotal-val[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--color-text);\n  font-variant-numeric: tabular-nums;\n}\n.btn-quitar[_ngcontent-%COMP%] {\n  background: transparent !important;\n  color: var(--color-accent) !important;\n  box-shadow: none !important;\n}\n.btn-quitar[_ngcontent-%COMP%]:hover {\n  background: rgba(224, 26, 26, 0.08) !important;\n}\n.detalle-pie[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 20px 22px;\n  background: #FAF9F7;\n  border-top: 1.5px solid var(--color-border);\n  flex-wrap: wrap;\n}\n.resumen-items[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--color-text-secondary);\n}\n.resumen-items[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-text);\n  font-weight: 700;\n}\n.resumen-total[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 14px;\n}\n.resumen-total[_ngcontent-%COMP%]   .total-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.resumen-total[_ngcontent-%COMP%]   .total-valor[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-size: 30px;\n  font-weight: 700;\n  color: var(--color-accent);\n  font-variant-numeric: tabular-nums;\n  line-height: 1;\n}\n.acciones-pie[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.historial-header[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--color-border);\n}\n.historial-titulo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.historial-titulo[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n.historial-titulo[_ngcontent-%COMP%]   .historial-titulo-txt[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-weight: 600;\n  font-size: 16px;\n  color: var(--color-text);\n}\n.pill-pendiente[_ngcontent-%COMP%] {\n  background: rgba(224, 168, 46, 0.14);\n  color: #B8860B;\n}\n.pill-pendiente[_ngcontent-%COMP%]::before {\n  background: var(--color-warning);\n}\n.pill-parcial[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.12);\n  color: #2563EB;\n}\n.pill-parcial[_ngcontent-%COMP%]::before {\n  background: #2563EB;\n}\n.pill-pagada[_ngcontent-%COMP%] {\n  background: rgba(46, 125, 91, 0.1);\n  color: var(--color-success);\n}\n.pill-pagada[_ngcontent-%COMP%]::before {\n  background: var(--color-success);\n}\n.detalle-resumen[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 28px;\n  flex-wrap: wrap;\n  padding: 4px 2px 18px;\n  margin-bottom: 8px;\n  border-bottom: 1px solid var(--color-border);\n}\n.resumen-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.resumen-item[_ngcontent-%COMP%]   .resumen-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--color-text-secondary);\n}\n.resumen-item[_ngcontent-%COMP%]   .resumen-val[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.detalle-total[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: flex-end;\n  gap: 14px;\n  margin-top: 16px;\n  padding: 14px 4px 4px;\n  border-top: 1.5px solid var(--color-border);\n}\n.detalle-total[_ngcontent-%COMP%]   .total-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.detalle-total[_ngcontent-%COMP%]   .total-valor[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-size: 26px;\n  font-weight: 700;\n  color: var(--color-accent);\n  font-variant-numeric: tabular-nums;\n}\n@media (max-width: 700px) {\n  .liq-wrap[_ngcontent-%COMP%] {\n    padding: 8px 14px 24px;\n  }\n  .detalle-pie[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 14px;\n  }\n  .resumen-total[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n  .acciones-pie[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .acciones-pie[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=liquidaciones.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LiquidacionesComponent, [{
    type: Component,
    args: [{ selector: "app-liquidaciones", standalone: false, template: `<div class="navigation">\r
    <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb">\r
            <li class="breadcrumb-item"><a [routerLink]="['/dashboard']">Inicio</a></li>\r
            <li class="breadcrumb-item activo">Liquidaciones</li>\r
        </ol>\r
    </nav>\r
\r
    <div class="content">\r
        <div class="titleNav">\r
            <h2>Liquidaciones</h2>\r
            <div class="subtitulo">Registro de lo vendido por revendedoras</div>\r
        </div>\r
    </div>\r
</div>\r
\r
<div class="liq-wrap">\r
\r
    <mat-card class="card-cabecera" [formGroup]="formLiq">\r
        <div class="card-head">\r
            <mat-icon>receipt_long</mat-icon>\r
            <span class="card-head-txt">Nueva liquidaci\xF3n</span>\r
        </div>\r
        <div class="card-body">\r
            <mat-form-field appearance="fill" class="campo-full">\r
                <mat-label>Revendedora</mat-label>\r
                <mat-select formControlName="idAlmacenRevendedora" required\r
                    (selectionChange)="onRevendedora($event.value)">\r
                    @for (a of (almacenFacade.responseAlmacenes$ | async); track a) {\r
                    @if (a?.tipo === 'CONSIGNACION') {\r
                    <mat-option [value]="a?.id">{{ a?.nombre }}</mat-option>\r
                    }\r
                    }\r
                </mat-select>\r
                <mat-hint>Almac\xE9n de consignaci\xF3n de la revendedora</mat-hint>\r
            </mat-form-field>\r
        </div>\r
    </mat-card>\r
\r
    <mat-card class="card-detalle">\r
        <div class="card-body">\r
            <div class="detalle-header">\r
                <div class="detalle-titulo">\r
                    <mat-icon>sell</mat-icon>\r
                    <span class="detalle-titulo-txt">Productos vendidos</span>\r
                    @if (lineas.length > 0) {\r
                    <span class="contador-lineas">{{ lineas.length }} {{ lineas.length === 1 ? '\xEDtem' : '\xEDtems'\r
                        }}</span>\r
                    }\r
                </div>\r
                <button type="button" class="button-principal" mat-flat-button (click)="agregarLinea()">\r
                    <mat-icon>add</mat-icon>\r
                    Agregar l\xEDnea\r
                </button>\r
            </div>\r
\r
            @if (lineas.length === 0) {\r
            <div class="sin-datos">\r
                <mat-icon>point_of_sale</mat-icon>\r
                <p>Agrega los productos que la revendedora vendi\xF3</p>\r
                <button type="button" class="button-principal" mat-flat-button (click)="agregarLinea()">\r
                    <mat-icon>add</mat-icon>\r
                    Agregar el primero\r
                </button>\r
            </div>\r
            }\r
\r
            @if (lineas.length > 0) {\r
            <div class="tabla-scroll">\r
                <table class="tabla-lineas" [formGroup]="formLiq">\r
                    <thead>\r
                        <tr>\r
                            <th class="col-prod">Producto</th>\r
                            <th class="col-num">Cantidad</th>\r
                            <th class="col-num">Precio consigna</th>\r
                            <th class="col-num">Precio p\xFAblico</th>\r
                            <th class="col-sub">Le debe</th>\r
                            <th class="col-quitar"></th>\r
                        </tr>\r
                    </thead>\r
                    <tbody formArrayName="lineas">\r
                        @for (linea of lineas.controls; track linea; let i = $index) {\r
                        <tr [formGroupName]="i">\r
                            <td class="col-prod">\r
                                <div class="celda-prod">\r
                                    <span class="fila-num">{{ i + 1 }}</span>\r
                                    <mat-form-field appearance="fill" class="campo-linea">\r
                                        <input type="text" matInput placeholder="Buscar producto"\r
                                            [matAutocomplete]="autoProd" [value]="linea.get('productoNombre')?.value"\r
                                            (input)="buscarProducto($event)" required>\r
                                        <mat-autocomplete #autoProd="matAutocomplete"\r
                                            (optionSelected)="selectProducto($event.option.value, i)">\r
                                            @for (p of (liquidacionesFacade.responseProductosConsigna$ | async); track\r
                                            p.id) {\r
                                            <mat-option [value]="p">{{ p?.sku }} - {{ p?.nombre }} (disp: {{\r
                                                p?.stock_disponible }})</mat-option>\r
                                            }\r
                                        </mat-autocomplete>\r
                                    </mat-form-field>\r
                                </div>\r
                            </td>\r
                            <td class="col-num">\r
                                <mat-form-field appearance="fill" class="campo-linea">\r
                                    <input matInput type="number" min="1" formControlName="cantidadVendida"\r
                                        placeholder="0">\r
                                </mat-form-field>\r
                            </td>\r
                            <td class="col-num">\r
                                <mat-form-field appearance="fill" class="campo-linea">\r
                                    <span matTextPrefix>L.&nbsp;</span>\r
                                    <input matInput type="number" min="0" step="0.01" formControlName="precioConsigna"\r
                                        placeholder="0.00">\r
                                </mat-form-field>\r
                            </td>\r
                            <td class="col-num">\r
                                <mat-form-field appearance="fill" class="campo-linea">\r
                                    <span matTextPrefix>L.&nbsp;</span>\r
                                    <input matInput type="number" min="0" step="0.01"\r
                                        formControlName="precioVentaPublico" placeholder="0.00">\r
                                </mat-form-field>\r
                            </td>\r
                            <td class="col-sub">\r
                                <span class="subtotal-val">{{ subtotalLinea(i) | currency:'HNL':'L. ':'1.2-2' }}</span>\r
                            </td>\r
                            <td class="col-quitar">\r
                                <button type="button" class="btn-quitar" mat-mini-fab (click)="eliminarLinea(i)"\r
                                    matTooltip="Quitar l\xEDnea">\r
                                    <mat-icon>delete</mat-icon>\r
                                </button>\r
                            </td>\r
                        </tr>\r
                        }\r
                    </tbody>\r
                </table>\r
            </div>\r
\r
            <div class="detalle-pie">\r
                <div class="resumen-items">\r
                    <strong>{{ lineas.length }}</strong> {{ lineas.length === 1 ? 'producto' : 'productos' }} liquidados\r
                </div>\r
                <div class="resumen-total">\r
                    <span class="total-label">Total a pagar</span>\r
                    <span class="total-valor">{{ totalLiquidacion() | currency:'HNL':'L. ':'1.2-2' }}</span>\r
                </div>\r
            </div>\r
            }\r
        </div>\r
    </mat-card>\r
\r
\r
    <div class="acciones-pie">\r
        <button type="button" mat-stroked-button (click)="limpiar()">Cancelar</button>\r
        <button type="button" class="button-principal" mat-flat-button\r
            [disabled]="formLiq.invalid || lineas.length === 0 || guardando" (click)="Guardar()">\r
            <mat-icon>save</mat-icon>\r
            Registrar liquidaci\xF3n\r
        </button>\r
    </div>\r
\r
\r
    <mat-card class="card-historial">\r
        <div class="historial-header">\r
            <div class="historial-titulo">\r
                <mat-icon>history</mat-icon>\r
                <span class="historial-titulo-txt">Liquidaciones registradas</span>\r
            </div>\r
        </div>\r
\r
        <div class="row">\r
            <mat-form-field appearance="fill" class="campo-full">\r
                <mat-label>Revendedora</mat-label>\r
                <mat-select [formControl]="formIdRevendedorasBusqueda">\r
                    <mat-option [value]="''">Seleccionar una revendedora</mat-option>\r
\r
                    @for (a of (almacenFacade.responseAlmacenes$ | async); track a) {\r
                    @if (a?.tipo === 'CONSIGNACION') {\r
                    <mat-option [value]="a?.id_revendedora">{{ a?.nombre }}</mat-option>\r
                    }\r
                    }\r
                </mat-select>\r
                <mat-hint>Almac\xE9n de consignaci\xF3n de la revendedora</mat-hint>\r
            </mat-form-field>\r
        </div>\r
\r
        <div class="tabla-scroll">\r
            @if ((liquidacionesFacade.responseLiquidaciones$ | async)?.length === 0) {\r
            <div class="sin-datos">\r
                <mat-icon>receipt</mat-icon>\r
                <p>No hay liquidaciones registradas</p>\r
            </div>\r
            } @else {\r
            <table class="tablep" role="table">\r
                <thead class="theadp">\r
                    <tr class="trp">\r
                        <th class="thp col-acciones">Acciones</th>\r
                        <th class="thp col-numero">C\xF3digo</th>\r
                        <th class="thp col-fecha">Fecha</th>\r
                        <th class="thp">Revendedora</th>\r
                        <th class="thp col-numero">Total</th>\r
                        <th class="thp col-numero">Le debe</th>\r
                        <!-- <th class="thp col-estado">Estado</th> -->\r
                    </tr>\r
                </thead>\r
                <tbody class="tbodyp">\r
                    @for (item of (liquidacionesFacade.responseLiquidaciones$ | async); track item) {\r
                    <tr class="trp">\r
                        <td data-title="Acciones" class="tdp col-acciones">\r
                            <div class="acciones">\r
                                <button class="buttonSecundary" mat-mini-fab (click)="verDetalle(item, modalDetalle)"\r
                                    matTooltip="Ver detalle">\r
                                    <mat-icon>visibility</mat-icon>\r
                                </button>\r
                            </div>\r
                        </td>\r
                        <td data-title="C\xF3digo" class="tdp col-numero">{{ item.id }}</td>\r
                        <td data-title="Fecha" class="tdp col-fecha">{{ item.fecha_liquidacion | date:'dd/MM/yyyy' }}\r
                        </td>\r
                        <td data-title="Revendedora" class="tdp td-fuerte">{{ item.revendedora }}</td>\r
                        <td data-title="Total" class="tdp col-numero">{{ item.total_vendido | currency:'HNL':'L.\r
                            ':'1.2-2' }}</td>\r
                        <td data-title="Le debe" class="tdp col-numero">{{ item.total_a_pagar | currency:'HNL':'L.\r
                            ':'1.2-2' }}</td>\r
                        <!-- <td data-title="Estado" class="tdp col-estado">\r
                            <span class="pill"\r
                                [class.pill-pendiente]="item.estado === 'PENDIENTE'"\r
                                [class.pill-parcial]="item.estado === 'PARCIAL'"\r
                                [class.pill-pagada]="item.estado === 'PAGADA'">\r
                                {{ item.estado }}\r
                            </span>\r
                        </td> -->\r
                    </tr>\r
                    }\r
                </tbody>\r
            </table>\r
            }\r
        </div>\r
    </mat-card>\r
\r
</div>\r
\r
<ng-template #modalDetalle>\r
    <div class="modal-augajo modal-lg">\r
        <div class="modal-header">\r
            <span class="modal-titulo">Detalle de liquidaci\xF3n #{{ liquidacionSeleccionada?.id }}</span>\r
            <button mat-icon-button mat-dialog-close class="modal-cerrar" aria-label="Cerrar">\r
                <mat-icon>close</mat-icon>\r
            </button>\r
        </div>\r
\r
        <mat-dialog-content class="mat-typography modal-body">\r
\r
            <div class="detalle-resumen">\r
                <div class="resumen-item">\r
                    <span class="resumen-lbl">Revendedora</span>\r
                    <span class="resumen-val">{{ liquidacionSeleccionada?.revendedora }}</span>\r
                </div>\r
                <div class="resumen-item">\r
                    <span class="resumen-lbl">Fecha</span>\r
                    <span class="resumen-val">{{ liquidacionSeleccionada?.fecha_liquidacion | date:'dd/MM/yyyy'\r
                        }}</span>\r
                </div>\r
                <!-- <div class="resumen-item">\r
                    <span class="resumen-lbl">Estado</span>\r
                    <span class="pill"\r
                        [class.pill-pendiente]="liquidacionSeleccionada?.estado === 'PENDIENTE'"\r
                        [class.pill-parcial]="liquidacionSeleccionada?.estado === 'PARCIAL'"\r
                        [class.pill-pagada]="liquidacionSeleccionada?.estado === 'PAGADA'">\r
                        {{ liquidacionSeleccionada?.estado }}\r
                    </span>\r
                </div> -->\r
            </div>\r
\r
            <div class="tabla-scroll">\r
                @if ((liquidacionesFacade.responseDetalle$ | async)?.length === 0) {\r
                <div class="sin-datos">\r
                    <mat-icon>inbox</mat-icon>\r
                    <p>Sin detalle</p>\r
                </div>\r
                } @else {\r
                <table class="tablep" role="table">\r
                    <thead class="theadp">\r
                        <tr class="trp">\r
                            <th class="thp">Producto</th>\r
                            <th class="thp col-numero">Cant.</th>\r
                            <th class="thp col-numero">P. consigna</th>\r
                            <th class="thp col-numero">P. p\xFAblico</th>\r
                            <th class="thp col-numero">Le debe</th>\r
                            <th class="thp col-numero">Ganancia rev.</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody class="tbodyp">\r
                        @for (d of (liquidacionesFacade.responseDetalle$ | async); track d) {\r
                        <tr class="trp">\r
                            <td data-title="Producto" class="tdp td-fuerte">{{ d.producto }}</td>\r
                            <td data-title="Cant." class="tdp col-numero">{{ d.cantidad_vendida | number:'1.0-2' }}</td>\r
                            <td data-title="P. consigna" class="tdp col-numero">{{ d.precio_consigna |\r
                                currency:'HNL':'L. ':'1.2-2' }}</td>\r
                            <td data-title="P. p\xFAblico" class="tdp col-numero">{{ d.precio_venta_publico ?\r
                                (d.precio_venta_publico | currency:'HNL':'L. ':'1.2-2') : '\u2014' }}</td>\r
                            <td data-title="Le debe" class="tdp col-numero td-fuerte">{{ d.subtotal | currency:'HNL':'L.\r
                                ':'1.2-2' }}</td>\r
                            <td data-title="Ganancia rev." class="tdp col-numero">{{ d.ganancia_revendedora |\r
                                currency:'HNL':'L. ':'1.2-2' }}</td>\r
                        </tr>\r
                        }\r
                    </tbody>\r
                </table>\r
                }\r
            </div>\r
\r
            <div class="detalle-total">\r
                <span class="total-label">Total a pagar</span>\r
                <span class="total-valor">{{ liquidacionSeleccionada?.total_a_pagar | currency:'HNL':'L. ':'1.2-2'\r
                    }}</span>\r
            </div>\r
\r
        </mat-dialog-content>\r
\r
        <div class="acciones-modal">\r
            <button mat-stroked-button mat-dialog-close>Cerrar</button>\r
        </div>\r
    </div>\r
</ng-template>`, styles: ["/* src/app/modules/Consignacion/liquidaciones/liquidaciones.component.scss */\n.liq-wrap {\n  max-width: 1080px;\n  margin: 0 auto;\n  padding: 8px 24px 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.card-cabecera,\n.card-detalle,\n.card-historial {\n  border-radius: var(--radius-card);\n  overflow: hidden;\n  box-shadow: var(--shadow-soft);\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n}\n.card-head {\n  background: var(--color-primary);\n  color: #fff;\n  padding: 15px 22px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.card-head mat-icon {\n  color: #fff;\n  opacity: 0.85;\n}\n.card-head .card-head-txt {\n  font-family: var(--font-serif);\n  font-weight: 600;\n  font-size: 16px;\n}\n.card-cabecera .card-body {\n  padding: 22px;\n}\n.campo-full {\n  width: 100%;\n}\n.card-detalle .card-body {\n  padding: 0;\n}\n.detalle-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 22px;\n}\n.detalle-titulo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.detalle-titulo mat-icon {\n  color: var(--color-accent);\n}\n.detalle-titulo .detalle-titulo-txt {\n  font-family: var(--font-serif);\n  font-weight: 600;\n  font-size: 17px;\n  color: var(--color-text);\n}\n.detalle-titulo .contador-lineas {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n  background: #F4F2EF;\n  padding: 3px 11px;\n  border-radius: 20px;\n}\n.tabla-scroll {\n  overflow-x: auto;\n  padding: 0 10px;\n}\n.tabla-lineas {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n}\n.tabla-lineas thead th {\n  color: var(--color-text-secondary);\n  font-weight: 600;\n  font-size: 11px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  padding: 10px 12px;\n  text-align: left;\n  white-space: nowrap;\n  border-bottom: 1.5px solid var(--color-border);\n}\n.tabla-lineas tbody td {\n  padding: 10px 12px;\n  border-bottom: 1px solid var(--color-border);\n  vertical-align: middle;\n}\n.tabla-lineas tbody tr:last-child td {\n  border-bottom: none;\n}\n.tabla-lineas tbody tr:hover {\n  background: #FAF9F7;\n}\n.tabla-lineas .col-prod {\n  width: 34%;\n  min-width: 220px;\n}\n.tabla-lineas .col-num {\n  min-width: 120px;\n}\n.tabla-lineas .col-sub {\n  min-width: 110px;\n  text-align: right;\n}\n.tabla-lineas .col-quitar {\n  width: 52px;\n  text-align: center;\n}\n.tabla-lineas th.col-num,\n.tabla-lineas th.col-sub {\n  text-align: right;\n}\n.campo-linea {\n  width: 100%;\n}\n.campo-linea ::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.campo-linea ::ng-deep .mat-mdc-text-field-wrapper {\n  margin: 0;\n}\n.fila-num {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: var(--color-primary);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  margin-right: 10px;\n  flex-shrink: 0;\n}\n.celda-prod {\n  display: flex;\n  align-items: center;\n}\n.celda-prod .campo-linea {\n  flex: 1;\n}\n.subtotal-val {\n  font-weight: 700;\n  color: var(--color-text);\n  font-variant-numeric: tabular-nums;\n}\n.btn-quitar {\n  background: transparent !important;\n  color: var(--color-accent) !important;\n  box-shadow: none !important;\n}\n.btn-quitar:hover {\n  background: rgba(224, 26, 26, 0.08) !important;\n}\n.detalle-pie {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 20px 22px;\n  background: #FAF9F7;\n  border-top: 1.5px solid var(--color-border);\n  flex-wrap: wrap;\n}\n.resumen-items {\n  font-size: 13px;\n  color: var(--color-text-secondary);\n}\n.resumen-items strong {\n  color: var(--color-text);\n  font-weight: 700;\n}\n.resumen-total {\n  display: flex;\n  align-items: baseline;\n  gap: 14px;\n}\n.resumen-total .total-label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.resumen-total .total-valor {\n  font-family: var(--font-serif);\n  font-size: 30px;\n  font-weight: 700;\n  color: var(--color-accent);\n  font-variant-numeric: tabular-nums;\n  line-height: 1;\n}\n.acciones-pie {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.historial-header {\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--color-border);\n}\n.historial-titulo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.historial-titulo mat-icon {\n  color: var(--color-accent);\n}\n.historial-titulo .historial-titulo-txt {\n  font-family: var(--font-serif);\n  font-weight: 600;\n  font-size: 16px;\n  color: var(--color-text);\n}\n.pill-pendiente {\n  background: rgba(224, 168, 46, 0.14);\n  color: #B8860B;\n}\n.pill-pendiente::before {\n  background: var(--color-warning);\n}\n.pill-parcial {\n  background: rgba(37, 99, 235, 0.12);\n  color: #2563EB;\n}\n.pill-parcial::before {\n  background: #2563EB;\n}\n.pill-pagada {\n  background: rgba(46, 125, 91, 0.1);\n  color: var(--color-success);\n}\n.pill-pagada::before {\n  background: var(--color-success);\n}\n.detalle-resumen {\n  display: flex;\n  gap: 28px;\n  flex-wrap: wrap;\n  padding: 4px 2px 18px;\n  margin-bottom: 8px;\n  border-bottom: 1px solid var(--color-border);\n}\n.resumen-item {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.resumen-item .resumen-lbl {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--color-text-secondary);\n}\n.resumen-item .resumen-val {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.detalle-total {\n  display: flex;\n  align-items: baseline;\n  justify-content: flex-end;\n  gap: 14px;\n  margin-top: 16px;\n  padding: 14px 4px 4px;\n  border-top: 1.5px solid var(--color-border);\n}\n.detalle-total .total-label {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.detalle-total .total-valor {\n  font-family: var(--font-serif);\n  font-size: 26px;\n  font-weight: 700;\n  color: var(--color-accent);\n  font-variant-numeric: tabular-nums;\n}\n@media (max-width: 700px) {\n  .liq-wrap {\n    padding: 8px 14px 24px;\n  }\n  .detalle-pie {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 14px;\n  }\n  .resumen-total {\n    justify-content: space-between;\n  }\n  .acciones-pie {\n    flex-direction: column-reverse;\n  }\n  .acciones-pie button {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=liquidaciones.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LiquidacionesComponent, { className: "LiquidacionesComponent", filePath: "src/app/modules/consignacion/liquidaciones/liquidaciones.component.ts", lineNumber: 28 });
})();

// src/app/modules/Consignacion/devoluciones/devoluciones-facade.service.ts
var DevolucionesFacadeService = class _DevolucionesFacadeService {
  constructor() {
    this.dataApi = inject(DataApiService);
    this._mensajesHttp = inject(MensajesHttpService);
    this.Cargando$ = new BehaviorSubject(false);
    this.responseCargando$ = this.Cargando$.asObservable();
    this.Devoluciones$ = new BehaviorSubject([]);
    this.responseDevoluciones$ = this.Devoluciones$.asObservable();
    this.ProductosConsigna$ = new BehaviorSubject([]);
    this.responseProductosConsigna$ = this.ProductosConsigna$.asObservable();
  }
  seg(valor, centinela = 0) {
    if (valor === null || valor === void 0 || valor === "") {
      return String(centinela);
    }
    return encodeURIComponent(String(valor));
  }
  RegistrarDevolucion(datos, lineas, respuesta) {
    this.Cargando$.next(true);
    const request$ = from(lineas).pipe(concatMap((linea) => {
      const params = {
        idProducto: linea.idProducto,
        idAlmacenRevendedora: datos.idAlmacenRevendedora,
        idAlmacenPrincipal: datos.idAlmacenPrincipal,
        idLote: linea.idLote ?? null,
        cantidad: linea.cantidad,
        usuario: datos.usuario
      };
      return this.dataApi.PostDataApi(`inventario/v1/devolucion-consigna/`, params);
    }), toArray(), tap(() => {
      this.Cargando$.next(false);
      respuesta(true);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al registrar la devolucion", "");
      respuesta(false);
      return EMPTY;
    }));
    return request$.subscribe();
  }
  MostrarProductosConsigna(idAlmacen, busqueda) {
    const url = `inventario/v1/productos/consigna/${this.seg(idAlmacen)}/${this.seg(busqueda, "null")}`;
    const request$ = this.dataApi.GetDataApi(url, "").pipe(tap((result) => {
      this.ProductosConsigna$.next(result.data.Table0);
    }), catchError((error) => {
      this.ProductosConsigna$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar los productos en consigna", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  MostrarDevoluciones(f) {
    const url = `inventario/v1/devoluciones/${this.seg(f.idAlmacen)}/${this.seg(f.busqueda, "null")}/${this.seg(f.pagina, 1)}/${this.seg(f.tamanoPagina, 100)}`;
    this.Cargando$.next(true);
    this.Devoluciones$.next([]);
    const request$ = this.dataApi.GetDataApi(url, "").pipe(tap((result) => {
      this.Cargando$.next(false);
      this.Devoluciones$.next(result.data.Table0);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.Devoluciones$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar las devoluciones", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  static {
    this.\u0275fac = function DevolucionesFacadeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DevolucionesFacadeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DevolucionesFacadeService, factory: _DevolucionesFacadeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DevolucionesFacadeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/Consignacion/devoluciones/devoluciones.component.ts
var _c03 = () => ["/dashboard"];
var _forTrack03 = ($index, $item) => $item.id;
function DevolucionesComponent_For_28_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", a_r1 == null ? null : a_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r1 == null ? null : a_r1.nombre);
  }
}
function DevolucionesComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DevolucionesComponent_For_28_Conditional_0_Template, 2, 2, "mat-option", 35);
  }
  if (rf & 2) {
    const a_r1 = ctx.$implicit;
    \u0275\u0275conditional((a_r1 == null ? null : a_r1.tipo) === "CONSIGNACION" ? 0 : -1);
  }
}
function DevolucionesComponent_For_37_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", a_r2 == null ? null : a_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r2 == null ? null : a_r2.nombre);
  }
}
function DevolucionesComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DevolucionesComponent_For_37_Conditional_0_Template, 2, 2, "mat-option", 35);
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    \u0275\u0275conditional((a_r2 == null ? null : a_r2.tipo) !== "CONSIGNACION" ? 0 : -1);
  }
}
function DevolucionesComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r2.lineas.length, " ", ctx_r2.lineas.length === 1 ? "\xEDtem" : "\xEDtems");
  }
}
function DevolucionesComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "mat-icon");
    \u0275\u0275text(2, "assignment_return");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Agrega los productos que la revendedora devuelve");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 24);
    \u0275\u0275listener("click", function DevolucionesComponent_Conditional_54_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.agregarLinea());
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Agregar el primero ");
    \u0275\u0275elementEnd()();
  }
}
function DevolucionesComponent_Conditional_55_For_15_For_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \xB7 ", p_r7 == null ? null : p_r7.numero_lote, " ");
  }
}
function DevolucionesComponent_Conditional_55_For_15_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 35);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, DevolucionesComponent_Conditional_55_For_15_For_10_Conditional_2_Template, 1, 1);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    \u0275\u0275property("value", p_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", p_r7 == null ? null : p_r7.sku, " - ", p_r7 == null ? null : p_r7.nombre, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((p_r7 == null ? null : p_r7.numero_lote) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (disp: ", p_r7 == null ? null : p_r7.stock_disponible, ")");
  }
}
function DevolucionesComponent_Conditional_55_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 45)(1, "td", 40)(2, "div", 48)(3, "span", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 50)(6, "input", 51);
    \u0275\u0275listener("input", function DevolucionesComponent_Conditional_55_For_15_Template_input_input_6_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.buscarProducto($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-autocomplete", 52, 0);
    \u0275\u0275listener("optionSelected", function DevolucionesComponent_Conditional_55_For_15_Template_mat_autocomplete_optionSelected_7_listener($event) {
      const \u0275$index_137_r6 = \u0275\u0275restoreView(_r5).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectProducto($event.option.value, \u0275$index_137_r6));
    });
    \u0275\u0275repeaterCreate(9, DevolucionesComponent_Conditional_55_For_15_For_10_Template, 4, 5, "mat-option", 35, _forTrack03);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "td", 41)(13, "span", 53);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 42)(16, "span", 54);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 42)(20, "mat-form-field", 50);
    \u0275\u0275element(21, "input", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td", 43)(23, "button", 56);
    \u0275\u0275listener("click", function DevolucionesComponent_Conditional_55_For_15_Template_button_click_23_listener() {
      const \u0275$index_137_r6 = \u0275\u0275restoreView(_r5).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.eliminarLinea(\u0275$index_137_r6));
    });
    \u0275\u0275elementStart(24, "mat-icon");
    \u0275\u0275text(25, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_16_0;
    let tmp_18_0;
    let tmp_19_0;
    const linea_r8 = ctx.$implicit;
    const \u0275$index_137_r6 = ctx.$index;
    const autoProd_r9 = \u0275\u0275reference(8);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroupName", \u0275$index_137_r6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275$index_137_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("matAutocomplete", autoProd_r9)("value", (tmp_16_0 = linea_r8.get("productoNombre")) == null ? null : tmp_16_0.value);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(11, 6, ctx_r2.devolucionesFacade.responseProductosConsigna$));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((tmp_18_0 = linea_r8.get("idLote")) == null ? null : tmp_18_0.value) ? "#" + ((tmp_18_0 = linea_r8.get("idLote")) == null ? null : tmp_18_0.value) : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 8, (tmp_19_0 = linea_r8.get("stockDisponible")) == null ? null : tmp_19_0.value, "1.0-2"));
  }
}
function DevolucionesComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "table", 39)(2, "thead")(3, "tr")(4, "th", 40);
    \u0275\u0275text(5, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 41);
    \u0275\u0275text(7, "Lote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 42);
    \u0275\u0275text(9, "En consigna");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 42);
    \u0275\u0275text(11, "Cantidad a devolver");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "th", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "tbody", 44);
    \u0275\u0275repeaterCreate(14, DevolucionesComponent_Conditional_55_For_15_Template, 26, 11, "tr", 45, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 46)(17, "div", 47)(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.formDev);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r2.lineas.controls);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.lineas.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.lineas.length === 1 ? "producto" : "productos", " a devolver ");
  }
}
function DevolucionesComponent_For_77_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", a_r10 == null ? null : a_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r10 == null ? null : a_r10.nombre);
  }
}
function DevolucionesComponent_For_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DevolucionesComponent_For_77_Conditional_0_Template, 2, 2, "mat-option", 35);
  }
  if (rf & 2) {
    const a_r10 = ctx.$implicit;
    \u0275\u0275conditional((a_r10 == null ? null : a_r10.tipo) === "CONSIGNACION" ? 0 : -1);
  }
}
function DevolucionesComponent_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "mat-icon");
    \u0275\u0275text(2, "inventory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No hay devoluciones registradas");
    \u0275\u0275elementEnd()();
  }
}
function DevolucionesComponent_Conditional_84_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 58)(1, "td", 63);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 64);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 65);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 66);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 67);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 68);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 6, item_r11.fecha_movimiento, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r11.producto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r11.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r11.almacen);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r11.numero_lote ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 9, item_r11.cantidad, "1.0-2"));
  }
}
function DevolucionesComponent_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 37)(1, "thead", 57)(2, "tr", 58)(3, "th", 59);
    \u0275\u0275text(4, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 60);
    \u0275\u0275text(6, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 60);
    \u0275\u0275text(8, "SKU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 60);
    \u0275\u0275text(10, "Revendedora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 60);
    \u0275\u0275text(12, "Lote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 61);
    \u0275\u0275text(14, "Cantidad");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody", 62);
    \u0275\u0275repeaterCreate(16, DevolucionesComponent_Conditional_84_For_17_Template, 15, 12, "tr", 58, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(18, 0, ctx_r2.devolucionesFacade.responseDevoluciones$));
  }
}
var DevolucionesComponent = class _DevolucionesComponent {
  constructor(fb) {
    this.fb = fb;
    this.almacenFacade = inject(AlmacenesFacadeService);
    this.devolucionesFacade = inject(DevolucionesFacadeService);
    this.toastFacade = inject(ToastrServiceLocal);
    this.guardando = false;
    this.almacenes = [];
    this.idAlmacenRevendedora = null;
    this.formIdRevendedorasBusqueda = new FormControl("");
    this.formDev = this.fb.group({
      idAlmacenRevendedora: [null, Validators.required],
      idAlmacenPrincipal: [null, Validators.required],
      lineas: this.fb.array([])
    });
  }
  ngOnInit() {
    this.almacenFacade.MostrarAlmacenes("0");
    this.almacenFacade.responseAlmacenes$.subscribe((a) => this.almacenes = a ?? []);
    this.cargarHistorial();
    this.formIdRevendedorasBusqueda.valueChanges.subscribe(() => this.filtrarBusquedaDevoluciones());
  }
  get lineas() {
    return this.formDev.get("lineas");
  }
  cargarHistorial() {
    this.devolucionesFacade.MostrarDevoluciones({
      idAlmacen: 0,
      busqueda: "null",
      pagina: 1,
      tamanoPagina: 100
    });
  }
  filtrarBusquedaDevoluciones() {
    this.devolucionesFacade.MostrarDevoluciones({
      idAlmacen: this.formIdRevendedorasBusqueda.value,
      busqueda: "null",
      pagina: 1,
      tamanoPagina: 100
    });
  }
  onRevendedora(idAlmacen) {
    this.idAlmacenRevendedora = idAlmacen;
    this.devolucionesFacade.MostrarProductosConsigna(this.idAlmacenRevendedora, "");
    this.lineas.clear();
  }
  agregarLinea() {
    if (this.idAlmacenRevendedora === null) {
      this.toastFacade.mensajeError("Primero selecciona la revendedora", "");
      return;
    }
    this.lineas.push(this.fb.group({
      idProducto: [null, Validators.required],
      productoNombre: [""],
      idLote: [null],
      stockDisponible: [0],
      cantidad: [null, [Validators.required, Validators.min(1e-4)]]
    }));
  }
  eliminarLinea(i) {
    this.lineas.removeAt(i);
  }
  buscarProducto(event) {
    if (this.idAlmacenRevendedora === null) {
      this.toastFacade.mensajeError("Primero selecciona la revendedora", "");
      return;
    }
    const texto = event.target.value;
    const busqueda = texto && texto.trim() !== "" ? texto : "null";
    this.devolucionesFacade.MostrarProductosConsigna(this.idAlmacenRevendedora, busqueda);
  }
  selectProducto(producto, i) {
    const linea = this.lineas.at(i);
    linea.patchValue({
      idProducto: producto.id,
      productoNombre: `${producto.sku} - ${producto.nombre}`,
      idLote: producto.id_lote ?? null,
      stockDisponible: producto.stock_disponible ?? 0
    });
  }
  limpiar() {
    this.lineas.clear();
    this.formDev.reset();
    this.idAlmacenRevendedora = null;
  }
  Guardar() {
    if (this.formDev.invalid || this.lineas.length === 0) {
      this.formDev.markAllAsTouched();
      return;
    }
    if (this.formDev.get("idAlmacenRevendedora")?.value === this.formDev.get("idAlmacenPrincipal")?.value) {
      this.toastFacade.mensajeError("El almac\xE9n de origen y destino no pueden ser el mismo", "");
      return;
    }
    for (let i = 0; i < this.lineas.length; i++) {
      const l = this.lineas.at(i);
      const cant = +l.get("cantidad")?.value || 0;
      const disp = +l.get("stockDisponible")?.value || 0;
      if (cant > disp) {
        this.toastFacade.mensajeError(`La l\xEDnea ${i + 1} devuelve ${cant} pero solo hay ${disp} en consigna`, "");
        return;
      }
    }
    this.guardando = true;
    const datos = {
      idAlmacenRevendedora: this.formDev.get("idAlmacenRevendedora")?.value,
      idAlmacenPrincipal: this.formDev.get("idAlmacenPrincipal")?.value,
      usuario: this.usuarioActual
    };
    const lineas = this.lineas.controls.map((l) => ({
      idProducto: l.get("idProducto")?.value,
      idLote: l.get("idLote")?.value ?? null,
      cantidad: +l.get("cantidad")?.value
    }));
    this.devolucionesFacade.RegistrarDevolucion(datos, lineas, (ok) => {
      this.guardando = false;
      if (ok) {
        this.toastFacade.mensajeSuccess("Devoluci\xF3n registrada con \xE9xito", "");
        this.limpiar();
        this.cargarHistorial();
      }
    });
  }
  static {
    this.\u0275fac = function DevolucionesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DevolucionesComponent)(\u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DevolucionesComponent, selectors: [["app-devoluciones"]], standalone: false, decls: 85, vars: 18, consts: [["autoProd", "matAutocomplete"], [1, "navigation"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "activo"], [1, "content"], [1, "titleNav"], [1, "subtitulo"], [1, "dev-wrap"], [1, "card-cabecera", 3, "formGroup"], [1, "card-head"], [1, "card-head-txt"], [1, "card-body"], [1, "grid-2"], ["appearance", "fill"], ["formControlName", "idAlmacenRevendedora", "required", "", 3, "selectionChange"], ["formControlName", "idAlmacenPrincipal", "required", ""], [1, "card-detalle"], [1, "detalle-header"], [1, "detalle-titulo"], [1, "detalle-titulo-txt"], [1, "contador-lineas"], ["type", "button", "mat-flat-button", "", 1, "button-principal", 3, "click"], [1, "sin-datos"], [1, "acciones-pie"], ["type", "button", "mat-stroked-button", "", 3, "click"], ["type", "button", "mat-flat-button", "", 1, "button-principal", 3, "click", "disabled"], [1, "card-historial"], [1, "historial-header"], [1, "historial-titulo"], [1, "historial-titulo-txt"], ["appearance", "fill", 1, "campo-full"], [3, "formControl"], [3, "value"], [1, "tabla-scroll", "mt-4"], ["role", "table", 1, "tablep"], [1, "tabla-scroll"], [1, "tabla-lineas", 3, "formGroup"], [1, "col-prod"], [1, "col-lote"], [1, "col-num"], [1, "col-quitar"], ["formArrayName", "lineas"], [3, "formGroupName"], [1, "detalle-pie"], [1, "resumen-items"], [1, "celda-prod"], [1, "fila-num"], ["appearance", "fill", 1, "campo-linea"], ["type", "text", "matInput", "", "placeholder", "Buscar producto", "required", "", 3, "input", "matAutocomplete", "value"], [3, "optionSelected"], [1, "lote-txt"], [1, "disp-val"], ["matInput", "", "type", "number", "min", "1", "formControlName", "cantidad", "placeholder", "0"], ["type", "button", "mat-mini-fab", "", "matTooltip", "Quitar l\xEDnea", 1, "btn-quitar", 3, "click"], [1, "theadp"], [1, "trp"], [1, "thp", "col-fecha"], [1, "thp"], [1, "thp", "col-numero"], [1, "tbodyp"], ["data-title", "Fecha", 1, "tdp", "col-fecha"], ["data-title", "Producto", 1, "tdp", "td-fuerte"], ["data-title", "SKU", 1, "tdp", "td-secundario"], ["data-title", "Revendedora", 1, "tdp"], ["data-title", "Lote", 1, "tdp"], ["data-title", "Cantidad", 1, "tdp", "col-numero"]], template: function DevolucionesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "nav", 2)(2, "ol", 3)(3, "li", 4)(4, "a", 5);
        \u0275\u0275text(5, "Inicio");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "li", 6);
        \u0275\u0275text(7, "Devoluciones en consignaci\xF3n");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "h2");
        \u0275\u0275text(11, "Devoluciones en consignaci\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 9);
        \u0275\u0275text(13, "Producto no vendido que regresa de la revendedora");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(14, "div", 10)(15, "mat-card", 11)(16, "div", 12)(17, "mat-icon");
        \u0275\u0275text(18, "assignment_return");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 13);
        \u0275\u0275text(20, "Nueva devoluci\xF3n");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 14)(22, "div", 15)(23, "mat-form-field", 16)(24, "mat-label");
        \u0275\u0275text(25, "Revendedora");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "mat-select", 17);
        \u0275\u0275listener("selectionChange", function DevolucionesComponent_Template_mat_select_selectionChange_26_listener($event) {
          return ctx.onRevendedora($event.value);
        });
        \u0275\u0275repeaterCreate(27, DevolucionesComponent_For_28_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275pipe(29, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "mat-hint");
        \u0275\u0275text(31, "De d\xF3nde regresa el producto");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "mat-form-field", 16)(33, "mat-label");
        \u0275\u0275text(34, "Almac\xE9n destino");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "mat-select", 18);
        \u0275\u0275repeaterCreate(36, DevolucionesComponent_For_37_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275pipe(38, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "mat-hint");
        \u0275\u0275text(40, "A d\xF3nde vuelve el producto");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(41, "mat-card", 19)(42, "div", 14)(43, "div", 20)(44, "div", 21)(45, "mat-icon");
        \u0275\u0275text(46, "inventory_2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "span", 22);
        \u0275\u0275text(48, "Productos a devolver");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(49, DevolucionesComponent_Conditional_49_Template, 2, 2, "span", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "button", 24);
        \u0275\u0275listener("click", function DevolucionesComponent_Template_button_click_50_listener() {
          return ctx.agregarLinea();
        });
        \u0275\u0275elementStart(51, "mat-icon");
        \u0275\u0275text(52, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(53, " Agregar l\xEDnea ");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(54, DevolucionesComponent_Conditional_54_Template, 9, 0, "div", 25);
        \u0275\u0275conditionalCreate(55, DevolucionesComponent_Conditional_55_Template, 21, 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "div", 26)(57, "button", 27);
        \u0275\u0275listener("click", function DevolucionesComponent_Template_button_click_57_listener() {
          return ctx.limpiar();
        });
        \u0275\u0275text(58, "Cancelar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "button", 28);
        \u0275\u0275listener("click", function DevolucionesComponent_Template_button_click_59_listener() {
          return ctx.Guardar();
        });
        \u0275\u0275elementStart(60, "mat-icon");
        \u0275\u0275text(61, "save");
        \u0275\u0275elementEnd();
        \u0275\u0275text(62, " Registrar devoluci\xF3n ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "mat-card", 29)(64, "div", 30)(65, "div", 31)(66, "mat-icon");
        \u0275\u0275text(67, "history");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "span", 32);
        \u0275\u0275text(69, "Devoluciones registradas");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(70, "mat-form-field", 33)(71, "mat-label");
        \u0275\u0275text(72, "Revendedora");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "mat-select", 34)(74, "mat-option", 35);
        \u0275\u0275text(75, "Seleccionar una revendedora");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(76, DevolucionesComponent_For_77_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275pipe(78, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "mat-hint");
        \u0275\u0275text(80, "Almac\xE9n de consignaci\xF3n de la revendedora");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "div", 36);
        \u0275\u0275conditionalCreate(82, DevolucionesComponent_Conditional_82_Template, 5, 0, "div", 25);
        \u0275\u0275pipe(83, "async");
        \u0275\u0275conditionalBranchCreate(84, DevolucionesComponent_Conditional_84_Template, 19, 2, "table", 37);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_11_0;
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(17, _c03));
        \u0275\u0275advance(11);
        \u0275\u0275property("formGroup", ctx.formDev);
        \u0275\u0275advance(12);
        \u0275\u0275repeater(\u0275\u0275pipeBind1(29, 9, ctx.almacenFacade.responseAlmacenes$));
        \u0275\u0275advance(9);
        \u0275\u0275repeater(\u0275\u0275pipeBind1(38, 11, ctx.almacenFacade.responseAlmacenes$));
        \u0275\u0275advance(13);
        \u0275\u0275conditional(ctx.lineas.length > 0 ? 49 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.lineas.length === 0 ? 54 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.lineas.length > 0 ? 55 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.formDev.invalid || ctx.lineas.length === 0 || ctx.guardando);
        \u0275\u0275advance(14);
        \u0275\u0275property("formControl", ctx.formIdRevendedorasBusqueda);
        \u0275\u0275advance();
        \u0275\u0275property("value", "");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(\u0275\u0275pipeBind1(78, 13, ctx.almacenFacade.responseAlmacenes$));
        \u0275\u0275advance(6);
        \u0275\u0275conditional(((tmp_11_0 = \u0275\u0275pipeBind1(83, 15, ctx.devolucionesFacade.responseDevoluciones$)) == null ? null : tmp_11_0.length) === 0 ? 82 : 84);
      }
    }, dependencies: [MatFormField, MatLabel, MatHint, MatInput, MatIcon, MatButton, MatMiniFabButton, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, MatCard, MatSelect, MatOption, MatTooltip, MatAutocomplete, MatAutocompleteTrigger, RouterLink, AsyncPipe, DecimalPipe, DatePipe], styles: ['@charset "UTF-8";\n\n\n.dev-wrap[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 8px 24px 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.card-cabecera[_ngcontent-%COMP%], \n.card-detalle[_ngcontent-%COMP%], \n.card-historial[_ngcontent-%COMP%] {\n  border-radius: var(--radius-card);\n  overflow: hidden;\n  box-shadow: var(--shadow-soft);\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n}\n.card-head[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: #fff;\n  padding: 15px 22px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.card-head[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  opacity: 0.85;\n}\n.card-head[_ngcontent-%COMP%]   .card-head-txt[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-weight: 600;\n  font-size: 16px;\n}\n.card-cabecera[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 22px;\n}\n.grid-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.grid-2[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.card-detalle[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.detalle-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 22px;\n}\n.detalle-titulo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.detalle-titulo[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n.detalle-titulo[_ngcontent-%COMP%]   .detalle-titulo-txt[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-weight: 600;\n  font-size: 17px;\n  color: var(--color-text);\n}\n.detalle-titulo[_ngcontent-%COMP%]   .contador-lineas[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n  background: #F4F2EF;\n  padding: 3px 11px;\n  border-radius: 20px;\n}\n.tabla-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  padding: 0 10px;\n}\n.tabla-lineas[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n}\n.tabla-lineas[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--color-text-secondary);\n  font-weight: 600;\n  font-size: 11px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  padding: 10px 12px;\n  text-align: left;\n  white-space: nowrap;\n  border-bottom: 1.5px solid var(--color-border);\n}\n.tabla-lineas[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border-bottom: 1px solid var(--color-border);\n  vertical-align: middle;\n}\n.tabla-lineas[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.tabla-lineas[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #FAF9F7;\n}\n.tabla-lineas[_ngcontent-%COMP%]   .col-prod[_ngcontent-%COMP%] {\n  width: 44%;\n  min-width: 240px;\n}\n.tabla-lineas[_ngcontent-%COMP%]   .col-lote[_ngcontent-%COMP%] {\n  min-width: 90px;\n}\n.tabla-lineas[_ngcontent-%COMP%]   .col-num[_ngcontent-%COMP%] {\n  min-width: 120px;\n  text-align: right;\n}\n.tabla-lineas[_ngcontent-%COMP%]   .col-quitar[_ngcontent-%COMP%] {\n  width: 52px;\n  text-align: center;\n}\n.tabla-lineas[_ngcontent-%COMP%]   th.col-num[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.campo-linea[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.campo-linea[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.campo-linea[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper {\n  margin: 0;\n}\n.fila-num[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: var(--color-primary);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  margin-right: 10px;\n  flex-shrink: 0;\n}\n.celda-prod[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.celda-prod[_ngcontent-%COMP%]   .campo-linea[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.lote-txt[_ngcontent-%COMP%], \n.disp-val[_ngcontent-%COMP%] {\n  font-variant-numeric: tabular-nums;\n  color: var(--color-text-secondary);\n}\n.disp-val[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text);\n}\n.btn-quitar[_ngcontent-%COMP%] {\n  background: transparent !important;\n  color: var(--color-accent) !important;\n  box-shadow: none !important;\n}\n.btn-quitar[_ngcontent-%COMP%]:hover {\n  background: rgba(224, 26, 26, 0.08) !important;\n}\n.detalle-pie[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 18px 22px;\n  background: #FAF9F7;\n  border-top: 1.5px solid var(--color-border);\n}\n.resumen-items[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--color-text-secondary);\n}\n.resumen-items[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-text);\n  font-weight: 700;\n}\n.acciones-pie[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.historial-header[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--color-border);\n}\n.historial-titulo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.historial-titulo[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n.historial-titulo[_ngcontent-%COMP%]   .historial-titulo-txt[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-weight: 600;\n  font-size: 16px;\n  color: var(--color-text);\n}\n@media (max-width: 700px) {\n  .dev-wrap[_ngcontent-%COMP%] {\n    padding: 8px 14px 24px;\n  }\n  .grid-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .acciones-pie[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .acciones-pie[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=devoluciones.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DevolucionesComponent, [{
    type: Component,
    args: [{ selector: "app-devoluciones", standalone: false, template: `<div class="navigation">\r
    <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb">\r
            <li class="breadcrumb-item"><a [routerLink]="['/dashboard']">Inicio</a></li>\r
            <li class="breadcrumb-item activo">Devoluciones en consignaci\xF3n</li>\r
        </ol>\r
    </nav>\r
\r
    <div class="content">\r
        <div class="titleNav">\r
            <h2>Devoluciones en consignaci\xF3n</h2>\r
            <div class="subtitulo">Producto no vendido que regresa de la revendedora</div>\r
        </div>\r
    </div>\r
</div>\r
\r
<div class="dev-wrap">\r
\r
    <mat-card class="card-cabecera" [formGroup]="formDev">\r
        <div class="card-head">\r
            <mat-icon>assignment_return</mat-icon>\r
            <span class="card-head-txt">Nueva devoluci\xF3n</span>\r
        </div>\r
        <div class="card-body">\r
            <div class="grid-2">\r
                <mat-form-field appearance="fill">\r
                    <mat-label>Revendedora</mat-label>\r
                    <mat-select formControlName="idAlmacenRevendedora" required\r
                        (selectionChange)="onRevendedora($event.value)">\r
                        @for (a of (almacenFacade.responseAlmacenes$ | async); track a) {\r
                        @if (a?.tipo === 'CONSIGNACION') {\r
                        <mat-option [value]="a?.id">{{ a?.nombre }}</mat-option>\r
                        }\r
                        }\r
                    </mat-select>\r
                    <mat-hint>De d\xF3nde regresa el producto</mat-hint>\r
                </mat-form-field>\r
\r
                <mat-form-field appearance="fill">\r
                    <mat-label>Almac\xE9n destino</mat-label>\r
                    <mat-select formControlName="idAlmacenPrincipal" required>\r
                        @for (a of (almacenFacade.responseAlmacenes$ | async); track a) {\r
                        @if (a?.tipo !== 'CONSIGNACION') {\r
                        <mat-option [value]="a?.id">{{ a?.nombre }}</mat-option>\r
                        }\r
                        }\r
                    </mat-select>\r
                    <mat-hint>A d\xF3nde vuelve el producto</mat-hint>\r
                </mat-form-field>\r
            </div>\r
        </div>\r
    </mat-card>\r
\r
    <mat-card class="card-detalle">\r
        <div class="card-body">\r
            <div class="detalle-header">\r
                <div class="detalle-titulo">\r
                    <mat-icon>inventory_2</mat-icon>\r
                    <span class="detalle-titulo-txt">Productos a devolver</span>\r
                    @if (lineas.length > 0) {\r
                    <span class="contador-lineas">{{ lineas.length }} {{ lineas.length === 1 ? '\xEDtem' : '\xEDtems'\r
                        }}</span>\r
                    }\r
                </div>\r
                <button type="button" class="button-principal" mat-flat-button (click)="agregarLinea()">\r
                    <mat-icon>add</mat-icon>\r
                    Agregar l\xEDnea\r
                </button>\r
            </div>\r
\r
            @if (lineas.length === 0) {\r
            <div class="sin-datos">\r
                <mat-icon>assignment_return</mat-icon>\r
                <p>Agrega los productos que la revendedora devuelve</p>\r
                <button type="button" class="button-principal" mat-flat-button (click)="agregarLinea()">\r
                    <mat-icon>add</mat-icon>\r
                    Agregar el primero\r
                </button>\r
            </div>\r
            }\r
\r
            @if (lineas.length > 0) {\r
            <div class="tabla-scroll">\r
                <table class="tabla-lineas" [formGroup]="formDev">\r
                    <thead>\r
                        <tr>\r
                            <th class="col-prod">Producto</th>\r
                            <th class="col-lote">Lote</th>\r
                            <th class="col-num">En consigna</th>\r
                            <th class="col-num">Cantidad a devolver</th>\r
                            <th class="col-quitar"></th>\r
                        </tr>\r
                    </thead>\r
                    <tbody formArrayName="lineas">\r
                        @for (linea of lineas.controls; track linea; let i = $index) {\r
                        <tr [formGroupName]="i">\r
                            <td class="col-prod">\r
                                <div class="celda-prod">\r
                                    <span class="fila-num">{{ i + 1 }}</span>\r
                                    <mat-form-field appearance="fill" class="campo-linea">\r
                                        <input type="text" matInput placeholder="Buscar producto"\r
                                            [matAutocomplete]="autoProd" [value]="linea.get('productoNombre')?.value"\r
                                            (input)="buscarProducto($event)" required>\r
                                        <mat-autocomplete #autoProd="matAutocomplete"\r
                                            (optionSelected)="selectProducto($event.option.value, i)">\r
                                            @for (p of (devolucionesFacade.responseProductosConsigna$ | async); track\r
                                            p.id) {\r
                                            <mat-option [value]="p">{{ p?.sku }} - {{ p?.nombre }} @if (p?.numero_lote)\r
                                                { \xB7 {{ p?.numero_lote }} } (disp: {{ p?.stock_disponible\r
                                                }})</mat-option>\r
                                            }\r
                                        </mat-autocomplete>\r
                                    </mat-form-field>\r
                                </div>\r
                            </td>\r
                            <td class="col-lote">\r
                                <span class="lote-txt">{{ linea.get('idLote')?.value ? '#' + linea.get('idLote')?.value\r
                                    : '\u2014' }}</span>\r
                            </td>\r
                            <td class="col-num">\r
                                <span class="disp-val">{{ linea.get('stockDisponible')?.value | number:'1.0-2' }}</span>\r
                            </td>\r
                            <td class="col-num">\r
                                <mat-form-field appearance="fill" class="campo-linea">\r
                                    <input matInput type="number" min="1" formControlName="cantidad" placeholder="0">\r
                                </mat-form-field>\r
                            </td>\r
                            <td class="col-quitar">\r
                                <button type="button" class="btn-quitar" mat-mini-fab (click)="eliminarLinea(i)"\r
                                    matTooltip="Quitar l\xEDnea">\r
                                    <mat-icon>delete</mat-icon>\r
                                </button>\r
                            </td>\r
                        </tr>\r
                        }\r
                    </tbody>\r
                </table>\r
            </div>\r
\r
            <div class="detalle-pie">\r
                <div class="resumen-items">\r
                    <strong>{{ lineas.length }}</strong> {{ lineas.length === 1 ? 'producto' : 'productos' }} a devolver\r
                </div>\r
            </div>\r
            }\r
        </div>\r
    </mat-card>\r
\r
    <div class="acciones-pie">\r
        <button type="button" mat-stroked-button (click)="limpiar()">Cancelar</button>\r
        <button type="button" class="button-principal" mat-flat-button\r
            [disabled]="formDev.invalid || lineas.length === 0 || guardando" (click)="Guardar()">\r
            <mat-icon>save</mat-icon>\r
            Registrar devoluci\xF3n\r
        </button>\r
    </div>\r
\r
    <mat-card class="card-historial">\r
        <div class="historial-header">\r
            <div class="historial-titulo">\r
                <mat-icon>history</mat-icon>\r
                <span class="historial-titulo-txt">Devoluciones registradas</span>\r
            </div>\r
        </div>\r
        <mat-form-field appearance="fill" class="campo-full">\r
            <mat-label>Revendedora</mat-label>\r
            <mat-select [formControl]="formIdRevendedorasBusqueda">\r
                <mat-option [value]="''">Seleccionar una revendedora</mat-option>\r
\r
                @for (a of (almacenFacade.responseAlmacenes$ | async); track a) {\r
                @if (a?.tipo === 'CONSIGNACION') {\r
                <mat-option [value]="a?.id">{{ a?.nombre }}</mat-option>\r
                }\r
                }\r
            </mat-select>\r
            <mat-hint>Almac\xE9n de consignaci\xF3n de la revendedora</mat-hint>\r
        </mat-form-field>\r
        <div class="tabla-scroll mt-4">\r
            @if ((devolucionesFacade.responseDevoluciones$ | async)?.length === 0) {\r
            <div class="sin-datos">\r
                <mat-icon>inventory</mat-icon>\r
                <p>No hay devoluciones registradas</p>\r
            </div>\r
            } @else {\r
            <table class="tablep" role="table">\r
                <thead class="theadp">\r
                    <tr class="trp">\r
                        <th class="thp col-fecha">Fecha</th>\r
                        <th class="thp">Producto</th>\r
                        <th class="thp">SKU</th>\r
                        <th class="thp">Revendedora</th>\r
                        <th class="thp">Lote</th>\r
                        <th class="thp col-numero">Cantidad</th>\r
                    </tr>\r
                </thead>\r
                <tbody class="tbodyp">\r
                    @for (item of (devolucionesFacade.responseDevoluciones$ | async); track item) {\r
                    <tr class="trp">\r
                        <td data-title="Fecha" class="tdp col-fecha">{{ item.fecha_movimiento | date:'dd/MM/yyyy HH:mm'\r
                            }}</td>\r
                        <td data-title="Producto" class="tdp td-fuerte">{{ item.producto }}</td>\r
                        <td data-title="SKU" class="tdp td-secundario">{{ item.sku }}</td>\r
                        <td data-title="Revendedora" class="tdp">{{ item.almacen }}</td>\r
                        <td data-title="Lote" class="tdp">{{ item.numero_lote ?? '\u2014' }}</td>\r
                        <td data-title="Cantidad" class="tdp col-numero">{{ item.cantidad | number:'1.0-2' }}</td>\r
                    </tr>\r
                    }\r
                </tbody>\r
            </table>\r
            }\r
        </div>\r
    </mat-card>\r
\r
</div>`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/Consignacion/devoluciones/devoluciones.component.scss */\n.dev-wrap {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 8px 24px 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.card-cabecera,\n.card-detalle,\n.card-historial {\n  border-radius: var(--radius-card);\n  overflow: hidden;\n  box-shadow: var(--shadow-soft);\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n}\n.card-head {\n  background: var(--color-primary);\n  color: #fff;\n  padding: 15px 22px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.card-head mat-icon {\n  color: #fff;\n  opacity: 0.85;\n}\n.card-head .card-head-txt {\n  font-family: var(--font-serif);\n  font-weight: 600;\n  font-size: 16px;\n}\n.card-cabecera .card-body {\n  padding: 22px;\n}\n.grid-2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.grid-2 mat-form-field {\n  width: 100%;\n}\n.card-detalle .card-body {\n  padding: 0;\n}\n.detalle-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 22px;\n}\n.detalle-titulo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.detalle-titulo mat-icon {\n  color: var(--color-accent);\n}\n.detalle-titulo .detalle-titulo-txt {\n  font-family: var(--font-serif);\n  font-weight: 600;\n  font-size: 17px;\n  color: var(--color-text);\n}\n.detalle-titulo .contador-lineas {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n  background: #F4F2EF;\n  padding: 3px 11px;\n  border-radius: 20px;\n}\n.tabla-scroll {\n  overflow-x: auto;\n  padding: 0 10px;\n}\n.tabla-lineas {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n}\n.tabla-lineas thead th {\n  color: var(--color-text-secondary);\n  font-weight: 600;\n  font-size: 11px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  padding: 10px 12px;\n  text-align: left;\n  white-space: nowrap;\n  border-bottom: 1.5px solid var(--color-border);\n}\n.tabla-lineas tbody td {\n  padding: 10px 12px;\n  border-bottom: 1px solid var(--color-border);\n  vertical-align: middle;\n}\n.tabla-lineas tbody tr:last-child td {\n  border-bottom: none;\n}\n.tabla-lineas tbody tr:hover {\n  background: #FAF9F7;\n}\n.tabla-lineas .col-prod {\n  width: 44%;\n  min-width: 240px;\n}\n.tabla-lineas .col-lote {\n  min-width: 90px;\n}\n.tabla-lineas .col-num {\n  min-width: 120px;\n  text-align: right;\n}\n.tabla-lineas .col-quitar {\n  width: 52px;\n  text-align: center;\n}\n.tabla-lineas th.col-num {\n  text-align: right;\n}\n.campo-linea {\n  width: 100%;\n}\n.campo-linea ::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.campo-linea ::ng-deep .mat-mdc-text-field-wrapper {\n  margin: 0;\n}\n.fila-num {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: var(--color-primary);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  margin-right: 10px;\n  flex-shrink: 0;\n}\n.celda-prod {\n  display: flex;\n  align-items: center;\n}\n.celda-prod .campo-linea {\n  flex: 1;\n}\n.lote-txt,\n.disp-val {\n  font-variant-numeric: tabular-nums;\n  color: var(--color-text-secondary);\n}\n.disp-val {\n  font-weight: 600;\n  color: var(--color-text);\n}\n.btn-quitar {\n  background: transparent !important;\n  color: var(--color-accent) !important;\n  box-shadow: none !important;\n}\n.btn-quitar:hover {\n  background: rgba(224, 26, 26, 0.08) !important;\n}\n.detalle-pie {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 18px 22px;\n  background: #FAF9F7;\n  border-top: 1.5px solid var(--color-border);\n}\n.resumen-items {\n  font-size: 13px;\n  color: var(--color-text-secondary);\n}\n.resumen-items strong {\n  color: var(--color-text);\n  font-weight: 700;\n}\n.acciones-pie {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.historial-header {\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--color-border);\n}\n.historial-titulo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.historial-titulo mat-icon {\n  color: var(--color-accent);\n}\n.historial-titulo .historial-titulo-txt {\n  font-family: var(--font-serif);\n  font-weight: 600;\n  font-size: 16px;\n  color: var(--color-text);\n}\n@media (max-width: 700px) {\n  .dev-wrap {\n    padding: 8px 14px 24px;\n  }\n  .grid-2 {\n    grid-template-columns: 1fr;\n  }\n  .acciones-pie {\n    flex-direction: column-reverse;\n  }\n  .acciones-pie button {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=devoluciones.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DevolucionesComponent, { className: "DevolucionesComponent", filePath: "src/app/modules/consignacion/devoluciones/devoluciones.component.ts", lineNumber: 13 });
})();

// src/app/modules/Consignacion/estado-revendedoras/estado-revendedoras-facade.service.ts
var EstadoRevendedorasFacadeService = class _EstadoRevendedorasFacadeService {
  constructor() {
    this.dataApi = inject(DataApiService);
    this._mensajesHttp = inject(MensajesHttpService);
    this.Cargando$ = new BehaviorSubject(false);
    this.responseCargando$ = this.Cargando$.asObservable();
    this.Estado$ = new BehaviorSubject([]);
    this.responseEstado$ = this.Estado$.asObservable();
    this.Detalle$ = new BehaviorSubject([]);
    this.responseDetalle$ = this.Detalle$.asObservable();
  }
  seg(valor, centinela = 0) {
    if (valor === null || valor === void 0 || valor === "") {
      return String(centinela);
    }
    return encodeURIComponent(String(valor));
  }
  MostrarEstado(busqueda) {
    const url = `inventario/v1/estado-revendedoras/${this.seg(busqueda, "null")}`;
    this.Cargando$.next(true);
    this.Estado$.next([]);
    const request$ = this.dataApi.GetDataApi(url, "").pipe(tap((result) => {
      this.Cargando$.next(false);
      this.Estado$.next(result.data.Table0);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.Estado$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar el estado por revendedora", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  MostrarDetalle(idAlmacen) {
    const url = `inventario/v1/estado-revendedora/detalle/${this.seg(idAlmacen)}`;
    const request$ = this.dataApi.GetDataApi(url, "").pipe(tap((result) => {
      this.Detalle$.next(result.data.Table0);
    }), catchError((error) => {
      this.Detalle$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar el detalle", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  static {
    this.\u0275fac = function EstadoRevendedorasFacadeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EstadoRevendedorasFacadeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EstadoRevendedorasFacadeService, factory: _EstadoRevendedorasFacadeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EstadoRevendedorasFacadeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/Consignacion/estado-revendedoras/estado-revendedoras.component.ts
var _c04 = () => ["/dashboard"];
function EstadoRevendedorasComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading", 15);
  }
  if (rf & 2) {
    \u0275\u0275property("data", 4);
  }
}
function EstadoRevendedorasComponent_Conditional_24_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "mat-icon");
    \u0275\u0275text(2, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No hay revendedoras con producto en consigna");
    \u0275\u0275elementEnd()();
  }
}
function EstadoRevendedorasComponent_Conditional_24_Conditional_2_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 21)(1, "td", 26)(2, "div", 27)(3, "button", 28);
    \u0275\u0275listener("click", function EstadoRevendedorasComponent_Conditional_24_Conditional_2_For_20_Template_button_click_3_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      const modalDetalle_r4 = \u0275\u0275reference(27);
      return \u0275\u0275resetView(ctx_r2.verDetalle(item_r2, modalDetalle_r4));
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "visibility");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(6, "td", 29);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 30);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 31);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 32);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 33);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(item_r2.revendedora);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.productos_distintos);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 5, item_r2.unidades_en_consigna, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(15, 8, item_r2.valor_en_consigna, "HNL", "L. ", "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2.limite_credito ? \u0275\u0275pipeBind4(18, 13, item_r2.limite_credito, "HNL", "L. ", "1.2-2") : "\u2014");
  }
}
function EstadoRevendedorasComponent_Conditional_24_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 17)(1, "mat-card-content")(2, "div", 18)(3, "table", 19)(4, "thead", 20)(5, "tr", 21)(6, "th", 22);
    \u0275\u0275text(7, "Acciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 23);
    \u0275\u0275text(9, "Revendedora");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 24);
    \u0275\u0275text(11, "Productos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 24);
    \u0275\u0275text(13, "Unidades");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 24);
    \u0275\u0275text(15, "Valor en consigna");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 24);
    \u0275\u0275text(17, "L\xEDmite cr\xE9dito");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody", 25);
    \u0275\u0275repeaterCreate(19, EstadoRevendedorasComponent_Conditional_24_Conditional_2_For_20_Template, 19, 18, "tr", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(21, 0, ctx_r2.estadoFacade.responseEstado$));
  }
}
function EstadoRevendedorasComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EstadoRevendedorasComponent_Conditional_24_Conditional_0_Template, 5, 0, "div", 16);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalBranchCreate(2, EstadoRevendedorasComponent_Conditional_24_Conditional_2_Template, 22, 2, "mat-card", 17);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((tmp_2_0 = \u0275\u0275pipeBind1(1, 1, ctx_r2.estadoFacade.responseEstado$)) == null ? null : tmp_2_0.length) === 0 ? 0 : 2);
  }
}
function EstadoRevendedorasComponent_ng_template_26_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "mat-icon");
    \u0275\u0275text(2, "inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Sin producto en consigna");
    \u0275\u0275elementEnd()();
  }
}
function EstadoRevendedorasComponent_ng_template_26_Conditional_24_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 21)(1, "td", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 48);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 49);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 50);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 51);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r5.producto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r5.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r5.numero_lote ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r5.fecha_vencimiento ? \u0275\u0275pipeBind2(9, 6, d_r5.fecha_vencimiento, "dd/MM/yyyy") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 9, d_r5.cantidad, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(15, 12, d_r5.valor_total, "HNL", "L. ", "1.2-2"));
  }
}
function EstadoRevendedorasComponent_ng_template_26_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 19)(1, "thead", 20)(2, "tr", 21)(3, "th", 23);
    \u0275\u0275text(4, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 23);
    \u0275\u0275text(6, "SKU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 23);
    \u0275\u0275text(8, "Lote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 45);
    \u0275\u0275text(10, "Vence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 24);
    \u0275\u0275text(12, "Cantidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 24);
    \u0275\u0275text(14, "Valor");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody", 25);
    \u0275\u0275repeaterCreate(16, EstadoRevendedorasComponent_ng_template_26_Conditional_24_For_17_Template, 16, 17, "tr", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(18, 0, ctx_r2.estadoFacade.responseDetalle$));
  }
}
function EstadoRevendedorasComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "span", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 37)(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "mat-dialog-content", 38)(8, "div", 39)(9, "div", 40)(10, "span", 41);
    \u0275\u0275text(11, "Unidades en consigna");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 42);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 40)(16, "span", 41);
    \u0275\u0275text(17, "Valor total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 42);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 18);
    \u0275\u0275conditionalCreate(22, EstadoRevendedorasComponent_ng_template_26_Conditional_22_Template, 5, 0, "div", 16);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275conditionalBranchCreate(24, EstadoRevendedorasComponent_ng_template_26_Conditional_24_Template, 19, 2, "table", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 43)(26, "button", 44);
    \u0275\u0275text(27, "Cerrar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.revendedoraSeleccionada == null ? null : ctx_r2.revendedoraSeleccionada.revendedora);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 4, ctx_r2.revendedoraSeleccionada == null ? null : ctx_r2.revendedoraSeleccionada.unidades_en_consigna, "1.0-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(20, 7, ctx_r2.revendedoraSeleccionada == null ? null : ctx_r2.revendedoraSeleccionada.valor_en_consigna, "HNL", "L. ", "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_5_0 = \u0275\u0275pipeBind1(23, 12, ctx_r2.estadoFacade.responseDetalle$)) == null ? null : tmp_5_0.length) === 0 ? 22 : 24);
  }
}
var EstadoRevendedorasComponent = class _EstadoRevendedorasComponent {
  constructor() {
    this.estadoFacade = inject(EstadoRevendedorasFacadeService);
    this.dialog = inject(MatDialog);
    this.buscar = new FormControl("");
    this.revendedoraSeleccionada = null;
  }
  ngOnInit() {
    this.cargar();
    this.buscar.valueChanges.pipe(debounceTime(350), distinctUntilChanged()).subscribe(() => this.cargar());
  }
  cargar() {
    const texto = this.buscar.value && this.buscar.value.trim() !== "" ? this.buscar.value : "null";
    this.estadoFacade.MostrarEstado(texto);
  }
  verDetalle(item, modal) {
    this.revendedoraSeleccionada = item;
    this.estadoFacade.MostrarDetalle(item.id_almacen);
    this.dialog.open(modal, { panelClass: "app-full-bleed-dialog" });
  }
  static {
    this.\u0275fac = function EstadoRevendedorasComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EstadoRevendedorasComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EstadoRevendedorasComponent, selectors: [["app-estado-revendedoras"]], standalone: false, decls: 28, vars: 9, consts: [["modalDetalle", ""], [1, "navigation"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "activo"], [1, "content"], [1, "titleNav"], [1, "subtitulo"], [1, "action"], ["appearance", "outline", 1, "buscador"], ["matInput", "", "type", "text", "placeholder", "Buscar revendedora...", "autocomplete", "off", 3, "formControl"], ["matPrefix", ""], [1, "contenedor-tabla"], [3, "data"], [1, "sin-datos"], [1, "matCardPersonalizada"], [1, "tabla-scroll"], ["role", "table", 1, "tablep"], [1, "theadp"], [1, "trp"], [1, "thp", "col-acciones"], [1, "thp"], [1, "thp", "col-numero"], [1, "tbodyp"], ["data-title", "Acciones", 1, "tdp", "col-acciones"], [1, "acciones"], ["mat-mini-fab", "", "matTooltip", "Ver detalle", 1, "buttonSecundary", 3, "click"], ["data-title", "Revendedora", 1, "tdp", "td-fuerte"], ["data-title", "Productos", 1, "tdp", "col-numero"], ["data-title", "Unidades", 1, "tdp", "col-numero"], ["data-title", "Valor en consigna", 1, "tdp", "col-numero", "td-fuerte"], ["data-title", "L\xEDmite cr\xE9dito", 1, "tdp", "col-numero"], [1, "modal-augajo", "modal-lg"], [1, "modal-header"], [1, "modal-titulo"], ["mat-icon-button", "", "mat-dialog-close", "", "aria-label", "Cerrar", 1, "modal-cerrar"], [1, "mat-typography", "modal-body"], [1, "detalle-resumen"], [1, "resumen-item"], [1, "resumen-lbl"], [1, "resumen-val"], [1, "acciones-modal"], ["mat-stroked-button", "", "mat-dialog-close", ""], [1, "thp", "col-fecha"], ["data-title", "Producto", 1, "tdp", "td-fuerte"], ["data-title", "SKU", 1, "tdp", "td-secundario"], ["data-title", "Lote", 1, "tdp"], ["data-title", "Vence", 1, "tdp", "col-fecha"], ["data-title", "Cantidad", 1, "tdp", "col-numero"], ["data-title", "Valor", 1, "tdp", "col-numero"]], template: function EstadoRevendedorasComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "nav", 2)(2, "ol", 3)(3, "li", 4)(4, "a", 5);
        \u0275\u0275text(5, "Inicio");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "li", 6);
        \u0275\u0275text(7, "Estado por revendedora");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "h2");
        \u0275\u0275text(11, "Estado por revendedora");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 9);
        \u0275\u0275text(13, "Producto en consigna por cada revendedora");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 10)(15, "mat-form-field", 11)(16, "mat-label");
        \u0275\u0275text(17, "Buscar");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 12);
        \u0275\u0275elementStart(19, "mat-icon", 13);
        \u0275\u0275text(20, "search");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(21, "div", 14);
        \u0275\u0275conditionalCreate(22, EstadoRevendedorasComponent_Conditional_22_Template, 1, 1, "app-loading", 15);
        \u0275\u0275pipe(23, "async");
        \u0275\u0275conditionalCreate(24, EstadoRevendedorasComponent_Conditional_24_Template, 3, 3);
        \u0275\u0275pipe(25, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, EstadoRevendedorasComponent_ng_template_26_Template, 28, 14, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c04));
        \u0275\u0275advance(14);
        \u0275\u0275property("formControl", ctx.buscar);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(\u0275\u0275pipeBind1(23, 4, ctx.estadoFacade.responseCargando$) ? 22 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!\u0275\u0275pipeBind1(25, 6, ctx.estadoFacade.responseCargando$) ? 24 : -1);
      }
    }, dependencies: [MatFormField, MatLabel, MatPrefix, MatInput, MatIcon, MatButton, MatMiniFabButton, MatIconButton, MatDialogClose, MatDialogContent, DefaultValueAccessor, NgControlStatus, FormControlDirective, LoadingComponent, MatCard, MatCardContent, MatTooltip, RouterLink, AsyncPipe, DecimalPipe, CurrencyPipe, DatePipe], styles: ["\n.detalle-resumen[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  flex-wrap: wrap;\n  padding: 4px 2px 18px;\n  margin-bottom: 8px;\n  border-bottom: 1px solid var(--color-border);\n}\n.resumen-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.resumen-item[_ngcontent-%COMP%]   .resumen-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--color-text-secondary);\n}\n.resumen-item[_ngcontent-%COMP%]   .resumen-val[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n/*# sourceMappingURL=estado-revendedoras.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EstadoRevendedorasComponent, [{
    type: Component,
    args: [{ selector: "app-estado-revendedoras", standalone: false, template: `<div class="navigation">\r
    <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb">\r
            <li class="breadcrumb-item"><a [routerLink]="['/dashboard']">Inicio</a></li>\r
            <li class="breadcrumb-item activo">Estado por revendedora</li>\r
        </ol>\r
    </nav>\r
\r
    <div class="content">\r
        <div class="titleNav">\r
            <h2>Estado por revendedora</h2>\r
            <div class="subtitulo">Producto en consigna por cada revendedora</div>\r
        </div>\r
\r
        <div class="action">\r
            <mat-form-field appearance="outline" class="buscador">\r
                <mat-label>Buscar</mat-label>\r
                <input matInput type="text" [formControl]="buscar" placeholder="Buscar revendedora..." autocomplete="off">\r
                <mat-icon matPrefix>search</mat-icon>\r
            </mat-form-field>\r
        </div>\r
    </div>\r
</div>\r
\r
<div class="contenedor-tabla">\r
\r
    @if ((estadoFacade.responseCargando$ | async)) {\r
    <app-loading [data]="4"></app-loading>\r
    }\r
\r
    @if (!(estadoFacade.responseCargando$ | async)) {\r
\r
    @if ((estadoFacade.responseEstado$ | async)?.length === 0) {\r
    <div class="sin-datos">\r
        <mat-icon>groups</mat-icon>\r
        <p>No hay revendedoras con producto en consigna</p>\r
    </div>\r
    } @else {\r
    <mat-card class="matCardPersonalizada">\r
        <mat-card-content>\r
            <div class="tabla-scroll">\r
                <table class="tablep" role="table">\r
                    <thead class="theadp">\r
                        <tr class="trp">\r
                            <th class="thp col-acciones">Acciones</th>\r
                            <th class="thp">Revendedora</th>\r
                            <th class="thp col-numero">Productos</th>\r
                            <th class="thp col-numero">Unidades</th>\r
                            <th class="thp col-numero">Valor en consigna</th>\r
                            <th class="thp col-numero">L\xEDmite cr\xE9dito</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody class="tbodyp">\r
                        @for (item of (estadoFacade.responseEstado$ | async); track item) {\r
                        <tr class="trp">\r
                            <td data-title="Acciones" class="tdp col-acciones">\r
                                <div class="acciones">\r
                                    <button class="buttonSecundary" mat-mini-fab\r
                                        (click)="verDetalle(item, modalDetalle)" matTooltip="Ver detalle">\r
                                        <mat-icon>visibility</mat-icon>\r
                                    </button>\r
                                </div>\r
                            </td>\r
                            <td data-title="Revendedora" class="tdp td-fuerte">{{ item.revendedora }}</td>\r
                            <td data-title="Productos" class="tdp col-numero">{{ item.productos_distintos }}</td>\r
                            <td data-title="Unidades" class="tdp col-numero">{{ item.unidades_en_consigna | number:'1.0-2' }}</td>\r
                            <td data-title="Valor en consigna" class="tdp col-numero td-fuerte">{{ item.valor_en_consigna | currency:'HNL':'L. ':'1.2-2' }}</td>\r
                            <td data-title="L\xEDmite cr\xE9dito" class="tdp col-numero">{{ item.limite_credito ? (item.limite_credito | currency:'HNL':'L. ':'1.2-2') : '\u2014' }}</td>\r
                        </tr>\r
                        }\r
                    </tbody>\r
                </table>\r
            </div>\r
        </mat-card-content>\r
    </mat-card>\r
    }\r
    }\r
</div>\r
\r
<ng-template #modalDetalle>\r
    <div class="modal-augajo modal-lg">\r
        <div class="modal-header">\r
            <span class="modal-titulo">{{ revendedoraSeleccionada?.revendedora }}</span>\r
            <button mat-icon-button mat-dialog-close class="modal-cerrar" aria-label="Cerrar">\r
                <mat-icon>close</mat-icon>\r
            </button>\r
        </div>\r
\r
        <mat-dialog-content class="mat-typography modal-body">\r
\r
            <div class="detalle-resumen">\r
                <div class="resumen-item">\r
                    <span class="resumen-lbl">Unidades en consigna</span>\r
                    <span class="resumen-val">{{ revendedoraSeleccionada?.unidades_en_consigna | number:'1.0-2' }}</span>\r
                </div>\r
                <div class="resumen-item">\r
                    <span class="resumen-lbl">Valor total</span>\r
                    <span class="resumen-val">{{ revendedoraSeleccionada?.valor_en_consigna | currency:'HNL':'L. ':'1.2-2' }}</span>\r
                </div>\r
            </div>\r
\r
            <div class="tabla-scroll">\r
                @if ((estadoFacade.responseDetalle$ | async)?.length === 0) {\r
                <div class="sin-datos">\r
                    <mat-icon>inbox</mat-icon>\r
                    <p>Sin producto en consigna</p>\r
                </div>\r
                } @else {\r
                <table class="tablep" role="table">\r
                    <thead class="theadp">\r
                        <tr class="trp">\r
                            <th class="thp">Producto</th>\r
                            <th class="thp">SKU</th>\r
                            <th class="thp">Lote</th>\r
                            <th class="thp col-fecha">Vence</th>\r
                            <th class="thp col-numero">Cantidad</th>\r
                            <th class="thp col-numero">Valor</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody class="tbodyp">\r
                        @for (d of (estadoFacade.responseDetalle$ | async); track d) {\r
                        <tr class="trp">\r
                            <td data-title="Producto" class="tdp td-fuerte">{{ d.producto }}</td>\r
                            <td data-title="SKU" class="tdp td-secundario">{{ d.sku }}</td>\r
                            <td data-title="Lote" class="tdp">{{ d.numero_lote ?? '\u2014' }}</td>\r
                            <td data-title="Vence" class="tdp col-fecha">{{ d.fecha_vencimiento ? (d.fecha_vencimiento | date:'dd/MM/yyyy') : '\u2014' }}</td>\r
                            <td data-title="Cantidad" class="tdp col-numero">{{ d.cantidad | number:'1.0-2' }}</td>\r
                            <td data-title="Valor" class="tdp col-numero">{{ d.valor_total | currency:'HNL':'L. ':'1.2-2' }}</td>\r
                        </tr>\r
                        }\r
                    </tbody>\r
                </table>\r
                }\r
            </div>\r
\r
        </mat-dialog-content>\r
\r
        <div class="acciones-modal">\r
            <button mat-stroked-button mat-dialog-close>Cerrar</button>\r
        </div>\r
    </div>\r
</ng-template>`, styles: ["/* src/app/modules/Consignacion/estado-revendedoras/estado-revendedoras.component.scss */\n.detalle-resumen {\n  display: flex;\n  gap: 32px;\n  flex-wrap: wrap;\n  padding: 4px 2px 18px;\n  margin-bottom: 8px;\n  border-bottom: 1px solid var(--color-border);\n}\n.resumen-item {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.resumen-item .resumen-lbl {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--color-text-secondary);\n}\n.resumen-item .resumen-val {\n  font-family: var(--font-serif);\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n/*# sourceMappingURL=estado-revendedoras.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EstadoRevendedorasComponent, { className: "EstadoRevendedorasComponent", filePath: "src/app/modules/consignacion/estado-revendedoras/estado-revendedoras.component.ts", lineNumber: 13 });
})();

// src/app/modules/Consignacion/consignacion-routing.module.ts
var routes = [
  {
    path: "entregas",
    component: EntregasComponent
  },
  {
    path: "liquidacion",
    component: LiquidacionesComponent
  },
  {
    path: "devoluciones",
    component: DevolucionesComponent
  },
  {
    path: "revendedoras/estado",
    component: EstadoRevendedorasComponent
  }
];
var ConsignacionoutingModule = class _ConsignacionoutingModule {
  static {
    this.\u0275fac = function ConsignacionoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConsignacionoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ConsignacionoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsignacionoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/Consignacion/compensacion.module.ts
var ConsignacionModule = class _ConsignacionModule {
  static {
    this.\u0275fac = function ConsignacionModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConsignacionModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ConsignacionModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatButtonModule,
      MatDialogModule,
      ReactiveFormsModule,
      PipeModule,
      SharedModule,
      MatCardModule,
      MatPaginatorModule,
      MatSelectModule,
      MatSlideToggleModule,
      MatDatepickerModule,
      MatTooltipModule,
      MatAutocompleteModule,
      TextFieldModule,
      MatProgressSpinnerModule,
      MatTooltipModule,
      ConsignacionoutingModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsignacionModule, [{
    type: NgModule,
    args: [{
      declarations: [EntregasComponent, LiquidacionesComponent, DevolucionesComponent, EstadoRevendedorasComponent],
      imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        ReactiveFormsModule,
        PipeModule,
        SharedModule,
        MatCardModule,
        MatPaginatorModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatTooltipModule,
        MatAutocompleteModule,
        TextFieldModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        ConsignacionoutingModule
      ]
    }]
  }], null, null);
})();
export {
  ConsignacionModule
};
//# sourceMappingURL=compensacion.module-3TA6SENI.js.map

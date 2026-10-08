import {
  WrappedSocket
} from "./chunk-7VL5MU4M.js";
import {
  MatListModule
} from "./chunk-FZUCBGWJ.js";
import {
  require_sweetalert2_all
} from "./chunk-BKYFVDZ7.js";
import {
  AlmacenesFacadeService,
  MatSlideToggle,
  MatSlideToggleModule,
  ProductosFacadeService
} from "./chunk-2BG2RROW.js";
import "./chunk-APCV33ZV.js";
import {
  CdkDialogContainer,
  Dialog,
  DialogModule,
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  MatDialog,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule
} from "./chunk-HWEAJQPC.js";
import {
  CdkTextareaAutosize,
  DefaultValueAccessor,
  FormArray,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  MatInput,
  MatInputModule,
  MatOption,
  MatPaginator,
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
  SearchPipe,
  TruncatePipePipe,
  UntypedFormControl,
  Validators,
  createBlockScrollStrategy,
  createGlobalPositionStrategy,
  ɵNgNoValidate
} from "./chunk-3IZWHZ62.js";
import {
  DataApiService
} from "./chunk-DQT5TO5T.js";
import {
  AsyncPipe,
  BehaviorSubject,
  BidiModule,
  BreakpointObserver,
  Breakpoints,
  CdkPortalOutlet,
  CdkScrollableModule,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  CurrencyPipe,
  DOCUMENT,
  DatePipe,
  Directionality,
  Directive,
  EMPTY,
  ESCAPE,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  LOCALE_ID,
  LoadingComponent,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle,
  MatFormField,
  MatFormFieldModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatLabel,
  MatMiniFabButton,
  MatPrefix,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MensajesHttpService,
  NgClass,
  NgModule,
  NgZone,
  Observable,
  Output,
  PortalModule,
  Renderer2,
  RendererFactory2,
  Router,
  RouterLink,
  RouterModule,
  ScrollDispatcher,
  SharedModule,
  SlicePipe,
  Subject,
  Subscription,
  TemplateRef,
  ToastrServiceLocal,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  ViewportRuler,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  __spreadProps,
  __spreadValues,
  __toESM,
  _animationsDisabled,
  _getEventTarget,
  _getShadowRoot,
  afterNextRender,
  animationFrameScheduler,
  booleanAttribute,
  catchError,
  coerceArray,
  coerceElement,
  coerceNumberProperty,
  filter,
  hasModifierKey,
  inject,
  interval,
  isFakeMousedownFromScreenReader,
  isFakeTouchstartFromScreenReader,
  map,
  merge,
  numberAttribute,
  registerLocaleData,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-3AU6XRXU.js";

// node_modules/@angular/common/locales/es-HN.js
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
var u = void 0;
function plural(val) {
  const n = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, "").length, e = parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/, "$2")) || 0;
  if (n === 1)
    return 1;
  if (e === 0 && (!(i === 0) && (i % 1e6 === 0 && v === 0)) || !(e >= 0 && e <= 5))
    return 4;
  return 5;
}
var es_HN_default = ["es-HN", [["a.\u202Fm.", "p.\u202Fm."], u, ["a.\xA0m.", "p.\xA0m."]], u, [["D", "L", "M", "M", "J", "V", "S"], ["dom", "lun", "mar", "mi\xE9", "jue", "vie", "s\xE1b"], ["domingo", "lunes", "martes", "mi\xE9rcoles", "jueves", "viernes", "s\xE1bado"], ["DO", "LU", "MA", "MI", "JU", "VI", "SA"]], u, [["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sept", "oct", "nov", "dic"], ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]], u, [["a.C.", "d.C."], u, ["antes de Cristo", "despu\xE9s de Cristo"]], 0, [6, 0], ["d/M/yy", "d MMM y", "dd 'de' MMMM 'de' y", "EEEE dd 'de' MMMM 'de' y"], ["h:mm\u202Fa", "h:mm:ss\u202Fa", "h:mm:ss\u202Fa z", "h:mm:ss\u202Fa zzzz"], ["{1}, {0}", u, u, u], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "HNL", "L", "lempira hondure\xF1o", { "AUD": [u, "$"], "BRL": [u, "R$"], "BYN": [u, "\u0440."], "CAD": [u, "$"], "CNY": [u, "\xA5"], "ESP": ["\u20A7"], "EUR": [u, "\u20AC"], "FKP": [u, "FK\xA3"], "GBP": [u, "\xA3"], "HKD": [u, "$"], "HNL": ["L"], "ILS": [u, "\u20AA"], "INR": [u, "\u20B9"], "JPY": [u, "\xA5"], "KRW": [u, "\u20A9"], "MXN": [u, "$"], "NZD": [u, "$"], "PHP": [u, "\u20B1"], "RON": [u, "L"], "SSP": [u, "SD\xA3"], "SYP": [u, "S\xA3"], "TWD": [u, "NT$"], "USD": [u, "$"], "VEF": [u, "BsF"], "VND": [u, "\u20AB"], "XAF": [], "XCD": [u, "$"], "XOF": [] }, "ltr", plural];

// src/app/modules/clientes/generar-pedido/generar-pedido-facade.service.ts
var GenerarPedidoFacadeService = class _GenerarPedidoFacadeService {
  constructor() {
    this.dataApi = inject(DataApiService);
    this._mensajesHttp = inject(MensajesHttpService);
    this.Cargando$ = new BehaviorSubject(false);
    this.responseCargando$ = this.Cargando$.asObservable();
    this.TipoPedidos$ = new BehaviorSubject([]);
    this.responseTipoPedidos$ = this.TipoPedidos$.asObservable();
    this.MetodosPago$ = new BehaviorSubject([]);
    this.responseMetodosPago$ = this.MetodosPago$.asObservable();
  }
  MostrarTipoPedidos(params) {
    this.Cargando$.next(true);
    this.TipoPedidos$.next([]);
    const request$ = this.dataApi.GetDataApi(`mantenimiento/tipoPedido/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      this.TipoPedidos$.next(result.data.Table0);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.TipoPedidos$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar los tipos de pedidos", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  MostrarMetodosPago(params) {
    this.Cargando$.next(true);
    this.MetodosPago$.next([]);
    const request$ = this.dataApi.GetDataApi(`mantenimiento/metodoPago/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      this.MetodosPago$.next(result.data.Table0);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.MetodosPago$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar los metodos de pago", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  InsertarPedido(params, respuesta) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.PostDataApi(`pedido/pedido/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al ingresar el pedido", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  InsertarArchivoAdjunto(params, respuesta) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.PostDataApi(`mantenimiento/adjunto/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al insertar el adjunto", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  cargarArchivo(params, respuesta) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.PostDataApi(`adjuntos/cargarArchivos/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al cargar el archivo", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  static {
    this.\u0275fac = function GenerarPedidoFacadeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GenerarPedidoFacadeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GenerarPedidoFacadeService, factory: _GenerarPedidoFacadeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GenerarPedidoFacadeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/modules/clientes/generar-pedido/generar-pedido.component.ts
var _c0 = () => ["/dashboard"];
var _forTrack0 = ($index, $item) => $item.id;
function GenerarPedidoComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    \u0275\u0275property("value", t_r1.Id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1.TipoPedido);
  }
}
function GenerarPedidoComponent_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r2 = ctx.$implicit;
    \u0275\u0275property("value", m_r2.Id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r2.MetodoPago);
  }
}
function GenerarPedidoComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.productos.length);
  }
}
function GenerarPedidoComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function GenerarPedidoComponent_Conditional_58_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.agregarProductoConsigna());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Mi consigna ");
    \u0275\u0275elementEnd();
  }
}
function GenerarPedidoComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "mat-icon");
    \u0275\u0275text(2, "storefront");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Tu almac\xE9n de consigna: ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.nombreAlmacenConsigna);
  }
}
function GenerarPedidoComponent_Conditional_60_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Agrega productos de bodega o de tu consigna ");
  }
}
function GenerarPedidoComponent_Conditional_60_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Agrega productos de bodega ");
  }
}
function GenerarPedidoComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "mat-icon");
    \u0275\u0275text(2, "shopping_cart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275conditionalCreate(4, GenerarPedidoComponent_Conditional_60_Conditional_4_Template, 1, 0)(5, GenerarPedidoComponent_Conditional_60_Conditional_5_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.esRevendedoraConsigna ? 4 : 5);
  }
}
function GenerarPedidoComponent_Conditional_61_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "mat-icon");
    \u0275\u0275text(2, "storefront");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.nombreAlmacenConsigna, " ");
  }
}
function GenerarPedidoComponent_Conditional_61_For_2_Conditional_17_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", a_r7 == null ? null : a_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r7 == null ? null : a_r7.nombre);
  }
}
function GenerarPedidoComponent_Conditional_61_For_2_Conditional_17_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, GenerarPedidoComponent_Conditional_61_For_2_Conditional_17_For_3_Conditional_0_Template, 2, 2, "mat-option", 18);
  }
  if (rf & 2) {
    const a_r7 = ctx.$implicit;
    \u0275\u0275conditional((a_r7 == null ? null : a_r7.tipo) !== "CONSIGNACION" ? 0 : -1);
  }
}
function GenerarPedidoComponent_Conditional_61_For_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 54)(1, "mat-select", 67);
    \u0275\u0275repeaterCreate(2, GenerarPedidoComponent_Conditional_61_For_2_Conditional_17_For_3_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(4, 0, ctx_r2.almacenFacade.responseAlmacenes$));
  }
}
function GenerarPedidoComponent_Conditional_61_For_2_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18)(1, "span", 68)(2, "span", 69);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 70);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    \u0275\u0275property("value", p_r8);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", p_r8 == null ? null : p_r8.sku, " \xB7 ", p_r8 == null ? null : p_r8.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("disp: ", p_r8 == null ? null : p_r8.stock_disponible);
  }
}
function GenerarPedidoComponent_Conditional_61_For_2_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_14_0;
    const linea_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Lote: ", ((tmp_14_0 = linea_r9.get("idLote")) == null ? null : tmp_14_0.value) ? "#" + ((tmp_14_0 = linea_r9.get("idLote")) == null ? null : tmp_14_0.value) : "FEFO", " ");
  }
}
function GenerarPedidoComponent_Conditional_61_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46)(2, "span", 47)(3, "mat-icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 48)(7, "span", 49);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 50);
    \u0275\u0275listener("click", function GenerarPedidoComponent_Conditional_61_For_2_Template_button_click_9_listener() {
      const \u0275$index_136_r6 = \u0275\u0275restoreView(_r5).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.eliminarProducto(\u0275$index_136_r6));
    });
    \u0275\u0275elementStart(10, "mat-icon");
    \u0275\u0275text(11, "close");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 51)(13, "div", 52)(14, "label");
    \u0275\u0275text(15, "Almac\xE9n");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, GenerarPedidoComponent_Conditional_61_For_2_Conditional_16_Template, 4, 1, "div", 53)(17, GenerarPedidoComponent_Conditional_61_For_2_Conditional_17_Template, 5, 2, "mat-form-field", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 55)(19, "label");
    \u0275\u0275text(20, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-form-field", 54)(22, "mat-icon", 56);
    \u0275\u0275text(23, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 57);
    \u0275\u0275listener("input", function GenerarPedidoComponent_Conditional_61_For_2_Template_input_input_24_listener($event) {
      const \u0275$index_136_r6 = \u0275\u0275restoreView(_r5).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.buscarProducto($event, \u0275$index_136_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-autocomplete", 58, 0);
    \u0275\u0275listener("optionSelected", function GenerarPedidoComponent_Conditional_61_For_2_Template_mat_autocomplete_optionSelected_25_listener($event) {
      const \u0275$index_136_r6 = \u0275\u0275restoreView(_r5).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectProducto($event.option.value, \u0275$index_136_r6));
    });
    \u0275\u0275repeaterCreate(27, GenerarPedidoComponent_Conditional_61_For_2_For_28_Template, 6, 4, "mat-option", 18, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(29, GenerarPedidoComponent_Conditional_61_For_2_Conditional_29_Template, 2, 1, "span", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 60)(31, "label");
    \u0275\u0275text(32, "Cantidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "mat-form-field", 54);
    \u0275\u0275element(34, "input", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 62)(36, "label");
    \u0275\u0275text(37, "Precio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "mat-form-field", 54)(39, "span", 63);
    \u0275\u0275text(40, "L.\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "input", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 65)(43, "label");
    \u0275\u0275text(44, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 66);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "currency");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_14_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_19_0;
    let tmp_21_0;
    let tmp_23_0;
    let tmp_25_0;
    const linea_r9 = ctx.$implicit;
    const \u0275$index_136_r6 = ctx.$index;
    const autoProd_r10 = \u0275\u0275reference(26);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("borde-bodega", !((tmp_13_0 = linea_r9.get("esConsigna")) == null ? null : tmp_13_0.value))("borde-consigna", (tmp_14_0 = linea_r9.get("esConsigna")) == null ? null : tmp_14_0.value);
    \u0275\u0275property("formGroup", linea_r9);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("origen-bodega", !((tmp_16_0 = linea_r9.get("esConsigna")) == null ? null : tmp_16_0.value))("origen-consigna", (tmp_17_0 = linea_r9.get("esConsigna")) == null ? null : tmp_17_0.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(((tmp_18_0 = linea_r9.get("esConsigna")) == null ? null : tmp_18_0.value) ? "local_shipping" : "warehouse");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_19_0 = linea_r9.get("esConsigna")) == null ? null : tmp_19_0.value) ? "Consigna" : "Bodega", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", \u0275$index_136_r6 + 1);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(((tmp_21_0 = linea_r9.get("esConsigna")) == null ? null : tmp_21_0.value) ? 16 : 17);
    \u0275\u0275advance(8);
    \u0275\u0275property("matAutocomplete", autoProd_r10)("value", (tmp_23_0 = linea_r9.get("productoNombre")) == null ? null : tmp_23_0.value);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.productosPorLinea[\u0275$index_136_r6]);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_25_0 = linea_r9.get("requiereLote")) == null ? null : tmp_25_0.value) ? 29 : -1);
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(47, 17, ctx_r2.subtotalProducto(\u0275$index_136_r6), "HNL", "L. ", "1.2-2"));
  }
}
function GenerarPedidoComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275repeaterCreate(1, GenerarPedidoComponent_Conditional_61_For_2_Template, 48, 22, "div", 41, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 42)(4, "span", 43);
    \u0275\u0275text(5, "Total del pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 44);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.productos.controls);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(8, 1, ctx_r2.totalPedido(), "HNL", "L. ", "1.2-2"));
  }
}
function GenerarPedidoComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275listener("click", function GenerarPedidoComponent_Conditional_65_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const fileInput_r12 = \u0275\u0275reference(6);
      return \u0275\u0275resetView(fileInput_r12.click());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 72, 1);
    \u0275\u0275listener("change", function GenerarPedidoComponent_Conditional_65_Template_input_change_5_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFileSelect($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.nombreArchivo || "Haz clic para seleccionar el comprobante");
  }
}
function GenerarPedidoComponent_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 73);
    \u0275\u0275elementStart(1, "p", 74);
    \u0275\u0275text(2, "Completa los datos y env\xEDa el pedido para procesarlo.");
    \u0275\u0275elementEnd();
  }
}
function GenerarPedidoComponent_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275text(1, "Comprobante seleccionado");
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "img", 76);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.cardImageBase64, \u0275\u0275sanitizeUrl);
  }
}
function GenerarPedidoComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function GenerarPedidoComponent_Conditional_70_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.enviarPedido());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Enviar Pedido ");
    \u0275\u0275elementEnd();
  }
}
function GenerarPedidoComponent_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 38);
  }
}
var GenerarPedidoComponent = class _GenerarPedidoComponent {
  constructor() {
    this.toast = inject(ToastrServiceLocal);
    this.generarPedidoFacade = inject(GenerarPedidoFacadeService);
    this.productosFacade = inject(ProductosFacadeService);
    this.almacenFacade = inject(AlmacenesFacadeService);
    this.router = inject(Router);
    this.fb = inject(FormBuilder);
    this.pagoRealizado = new FormControl(false);
    this.fileForm = new FormControl("", [Validators.required]);
    this.url = "";
    this.productos = new FormArray([]);
    this.productosPorLinea = [];
    this.sesion = null;
    this.esRevendedoraConsigna = false;
    this.idAlmacenConsigna = null;
    this.nombreAlmacenConsigna = null;
    this.selectFile = null;
    this.cargarSesion();
    this.generarPedidoFacade.MostrarTipoPedidos("0");
    this.generarPedidoFacade.MostrarMetodosPago("0");
    this.almacenFacade.MostrarAlmacenes("0");
    this.pedidosForm = new FormGroup({
      IdPedido: new FormControl("0"),
      IdTipoPedido: new FormControl("", [Validators.required]),
      IdMetodoPago: new FormControl("", [Validators.required]),
      IdReparto: new FormControl(null),
      IdUsuario: new FormControl(this.sesion?.IdUsuario ?? null),
      DetallePedido: new FormControl("", [Validators.required]),
      Observacion: new FormControl(""),
      ObservacionCliente: new FormControl(""),
      DetalleProducto: new FormControl(""),
      usuario: new FormControl(this.sesion?.Usuario ?? ""),
      idEstado: new FormControl(1)
    });
  }
  ngOnInit() {
  }
  // ========================================================
  // Sesión
  // ========================================================
  cargarSesion() {
    try {
      this.sesion = JSON.parse(localStorage.getItem("usuario") || "null");
    } catch (e) {
      this.sesion = null;
    }
    this.esRevendedoraConsigna = Number(this.sesion?.es_revendedora) === 1;
    this.idAlmacenConsigna = this.sesion?.id_almacen ?? null;
    this.nombreAlmacenConsigna = this.sesion?.nombre_almacen ?? null;
  }
  // ========================================================
  // Productos del pedido
  // ========================================================
  agregarProductoBodega() {
    this.productos.push(this.fb.group({
      idProducto: [null, Validators.required],
      productoNombre: [""],
      requiereLote: [false],
      idLote: [null],
      idAlmacen: [null, Validators.required],
      // bodega: el vendedor elige la bodega
      esConsigna: [false],
      cantidad: [null, [Validators.required, Validators.min(1)]],
      precioVenta: [null, [Validators.required, Validators.min(0)]]
    }));
    this.productosPorLinea.push([]);
  }
  agregarProductoConsigna() {
    if (!this.esRevendedoraConsigna || !this.idAlmacenConsigna) {
      this.toast.mensajeWarning("", "No tienes un almac\xE9n de consigna asignado");
      return;
    }
    this.productos.push(this.fb.group({
      idProducto: [null, Validators.required],
      productoNombre: [""],
      requiereLote: [false],
      idLote: [null],
      idAlmacen: [this.idAlmacenConsigna, Validators.required],
      // FIJO al almacén de la revendedora
      esConsigna: [true],
      cantidad: [null, [Validators.required, Validators.min(1)]],
      precioVenta: [null, [Validators.required, Validators.min(0)]]
    }));
    this.productosPorLinea.push([]);
  }
  eliminarProducto(i) {
    this.productos.removeAt(i);
    this.productosPorLinea.splice(i, 1);
  }
  buscarProducto(event, i) {
    const linea = this.productos.at(i);
    const idAlmacen = linea.get("idAlmacen")?.value;
    if (!idAlmacen) {
      this.toast.mensajeWarning("", "Primero selecciona el almac\xE9n de este producto");
      return;
    }
    const texto = event.target.value;
    const busqueda = texto && texto.trim() !== "" ? texto : "null";
    this.productosFacade.MostrarProductosPorAlmacen(idAlmacen, busqueda, (data) => {
      this.productosPorLinea[i] = data ?? [];
    });
  }
  selectProducto(producto, i) {
    const linea = this.productos.at(i);
    linea.patchValue({
      idProducto: producto.id,
      productoNombre: `${producto.sku} - ${producto.nombre}`,
      requiereLote: producto.requiere_lote === 1 || producto.requiere_lote === true,
      idLote: producto.id_lote ?? null,
      precioVenta: producto.precio_venta ?? null
    });
  }
  tipoMovimiento(esConsigna) {
    return esConsigna === true || esConsigna === "true" || esConsigna === 1 ? 5 : 2;
  }
  subtotalProducto(i) {
    const l = this.productos.at(i);
    const cant = +l.get("cantidad")?.value || 0;
    const precio = +l.get("precioVenta")?.value || 0;
    return cant * precio;
  }
  totalPedido() {
    return this.productos.controls.reduce((acc, l) => {
      const cant = +l.get("cantidad")?.value || 0;
      const precio = +l.get("precioVenta")?.value || 0;
      return acc + cant * precio;
    }, 0);
  }
  construirDetalleProductos() {
    return this.productos.controls.map((l) => [
      l.get("idProducto")?.value,
      this.tipoMovimiento(l.get("esConsigna")?.value),
      l.get("idAlmacen")?.value,
      l.get("idLote")?.value ?? "",
      l.get("cantidad")?.value,
      l.get("precioVenta")?.value
    ].join(",")).join("|");
  }
  validarProductos() {
    if (this.productos.length === 0) {
      this.toast.mensajeWarning("", "Es requerido ingresar al menos un producto para generar el pedido");
      return false;
    }
    for (let i = 0; i < this.productos.length; i++) {
      if (this.productos.at(i).invalid) {
        this.toast.mensajeWarning("", `La l\xEDnea ${i + 1} de productos est\xE1 incompleta`);
        this.productos.at(i).markAllAsTouched();
        return false;
      }
    }
    return true;
  }
  // ========================================================
  // Enviar pedido
  // ========================================================
  enviarPedido() {
    if (this.pedidosForm.invalid) {
      this.pedidosForm.markAllAsTouched();
      this.toast.mensajeWarning("", "Debe de ingresar los campos marcados como requeridos");
      return;
    }
    if (!this.validarProductos()) {
      return;
    }
    this.pedidosForm.get("DetalleProducto").setValue(this.construirDetalleProductos());
    this.formData = new FormData();
    this.generarPedidoFacade.InsertarPedido(this.pedidosForm.value, (respuestaPedido) => {
      if (respuestaPedido.hasError === false) {
        this.procesarComprobante(respuestaPedido);
      }
    });
  }
  procesarComprobante(respuestaPedido) {
    if (this.pagoRealizado.value == true) {
      if (!this.fileForm.value) {
        this.toast.mensajeWarning("", "Es requerido cargar el voucher de pago");
        return;
      }
      this.formData.append("archivo", this.fileForm.value);
      this.generarPedidoFacade.cargarArchivo(this.formData, (respuestaArchivo) => {
        if (respuestaArchivo.hasError === false) {
          this.formAdjunto = new FormGroup({
            id: new FormControl(0),
            idPedido: new FormControl(respuestaPedido.data.Table0[0].IdPedido),
            nombreAdjunto: new FormControl(this.nombreArchivo || ""),
            url: new FormControl(respuestaArchivo.data.url),
            extension: new FormControl(this.nombreArchivo.substring(this.nombreArchivo.indexOf("."), this.nombreArchivo.length)),
            idEstado: new FormControl(null)
          });
          this.generarPedidoFacade.InsertarArchivoAdjunto(this.formAdjunto.value, (respuestAdjunto) => {
            if (respuestAdjunto.hasError === false) {
              this.exito();
            }
          });
        }
      });
    } else {
      this.exito();
    }
  }
  exito() {
    this.toast.mensajeSuccess("", "Su pedido fue generado con exito");
    this.router.navigateByUrl("cliente/listadoPedido");
  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.fileForm.setValue(file);
    }
    this.imageError = null;
    if (event.target.files && event.target.files[0]) {
      this.nombreArchivo = event.target.files[0].name;
      const max_size = 20971520;
      const max_height = 15200;
      const max_width = 25600;
      if (event.target.files[0].size > max_size) {
        this.imageError = "Maximum size allowed is " + max_size / 1e3 + "Mb";
        return false;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        const image = new Image();
        image.src = e.target.result;
        this.foto = image.src;
        image.onload = (rs) => {
          const img_height = rs.currentTarget["height"];
          const img_width = rs.currentTarget["width"];
          if (img_height > max_height && img_width > max_width) {
            this.imageError = "Maximum dimentions allowed " + max_height + "*" + max_width + "px";
            return false;
          } else {
            const imgBase64Path = e.target.result;
            this.cardImageBase64 = imgBase64Path;
            this.isImageSaved = true;
            this.selectFile = imgBase64Path;
          }
          return this.selectFile;
        };
      };
      reader.readAsDataURL(event.target.files[0]);
    }
    return true;
  }
  static {
    this.\u0275fac = function GenerarPedidoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GenerarPedidoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GenerarPedidoComponent, selectors: [["app-generar-pedido"]], standalone: false, decls: 74, vars: 22, consts: [["autoProd", "matAutocomplete"], ["fileInput", ""], [1, "navigation"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "activo"], [1, "content"], [1, "titleNav"], [1, "subtitulo"], [1, "contenedor-tabla"], [1, "pedido-layout"], [1, "matCardPersonalizada", "pedido-form-card"], [1, "pedido-form", 3, "formGroup"], [1, "form-grid"], ["appearance", "fill", 1, "campo-6"], ["formControlName", "IdTipoPedido", "required", ""], [3, "value"], ["formControlName", "IdMetodoPago", "required", ""], ["appearance", "fill", 1, "campo-12"], ["matInput", "", "placeholder", "Describe el pedido del cliente", "formControlName", "DetallePedido", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "3", "cdkAutosizeMaxRows", "6", "required", ""], ["matInput", "", "placeholder", "Observaci\xF3n del cliente (opcional)", "formControlName", "ObservacionCliente", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "2", "cdkAutosizeMaxRows", "4"], [1, "bloque-productos"], [1, "bloque-head"], [1, "bloque-titulo"], [1, "contador"], [1, "botones-add"], ["type", "button", "mat-flat-button", "", 1, "btn-add", "bodega", 3, "click"], ["type", "button", "mat-flat-button", "", 1, "btn-add", "consigna"], [1, "info-consigna"], [1, "sin-productos"], [1, "pedido-pago"], ["color", "warn", 3, "formControl"], [1, "uploadfilecontainer"], [1, "pedido-visual"], [1, "pedido-acciones"], ["mat-flat-button", "", 1, "button-principal"], ["diameter", "36"], ["type", "button", "mat-flat-button", "", 1, "btn-add", "consigna", 3, "click"], [1, "lista-productos"], [1, "card-producto", 3, "formGroup", "borde-bodega", "borde-consigna"], [1, "total-productos"], [1, "total-prod-lbl"], [1, "total-prod-val"], [1, "card-producto", 3, "formGroup"], [1, "card-head"], [1, "origen-pill"], [1, "card-head-right"], [1, "idx"], ["type", "button", "mat-icon-button", "", "matTooltip", "Quitar producto", 1, "btn-quitar-prod", 3, "click"], [1, "card-body"], [1, "campo", "campo-almacen"], [1, "valor-fijo"], ["appearance", "outline", 1, "campo-prod"], [1, "campo", "campo-producto"], ["matPrefix", ""], ["type", "text", "matInput", "", "placeholder", "Buscar producto", "required", "", 3, "input", "matAutocomplete", "value"], [3, "optionSelected"], [1, "chip-lote"], [1, "campo", "campo-cant"], ["matInput", "", "type", "number", "min", "1", "formControlName", "cantidad", "placeholder", "0"], [1, "campo", "campo-precio"], ["matPrefix", "", 1, "pref-moneda"], ["matInput", "", "type", "number", "min", "0", "step", "0.01", "formControlName", "precioVenta", "placeholder", "0.00"], [1, "campo", "campo-subtotal"], [1, "valor-subtotal"], ["formControlName", "idAlmacen", "placeholder", "Selecciona", "required", ""], [1, "opt-prod"], [1, "opt-nombre"], [1, "opt-disp"], [1, "uploadfilecontainer", 3, "click"], ["type", "file", "hidden", "", "required", "", 3, "change"], ["src", "./assets/images/Pedidos/undraw_order_delivered_re_v4ab.svg", "alt", "", 1, "pedido-ilustracion"], [1, "pedido-visual-texto"], [1, "pedido-preview-label"], ["alt", "Comprobante", 1, "pedido-preview", 3, "src"], ["mat-flat-button", "", 1, "button-principal", 3, "click"]], template: function GenerarPedidoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "nav", 3)(2, "ol", 4)(3, "li", 5)(4, "a", 6);
        \u0275\u0275text(5, "Inicio");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "li", 7);
        \u0275\u0275text(7, "Generar Pedido");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 8)(9, "div", 9)(10, "h2");
        \u0275\u0275text(11, "Generar Pedido");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 10);
        \u0275\u0275text(13, "Registra un nuevo pedido de cliente");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(14, "div", 11)(15, "div", 12)(16, "mat-card", 13)(17, "mat-card-header")(18, "mat-card-title");
        \u0275\u0275text(19, "Detalle del pedido");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "mat-card-content")(21, "form", 14)(22, "div", 15)(23, "mat-form-field", 16)(24, "mat-label");
        \u0275\u0275text(25, "Tipo Pedido");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "mat-select", 17);
        \u0275\u0275repeaterCreate(27, GenerarPedidoComponent_For_28_Template, 2, 2, "mat-option", 18, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275pipe(29, "async");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "mat-form-field", 16)(31, "mat-label");
        \u0275\u0275text(32, "M\xE9todo Pago");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "mat-select", 19);
        \u0275\u0275repeaterCreate(34, GenerarPedidoComponent_For_35_Template, 2, 2, "mat-option", 18, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275pipe(36, "async");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "mat-form-field", 20)(38, "mat-label");
        \u0275\u0275text(39, "Detalle Pedido");
        \u0275\u0275elementEnd();
        \u0275\u0275element(40, "textarea", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "mat-form-field", 20)(42, "mat-label");
        \u0275\u0275text(43, "Observaci\xF3n Cliente");
        \u0275\u0275elementEnd();
        \u0275\u0275element(44, "textarea", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 23)(46, "div", 24)(47, "div", 25)(48, "mat-icon");
        \u0275\u0275text(49, "inventory_2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "span");
        \u0275\u0275text(51, "Productos");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(52, GenerarPedidoComponent_Conditional_52_Template, 2, 1, "span", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 27)(54, "button", 28);
        \u0275\u0275listener("click", function GenerarPedidoComponent_Template_button_click_54_listener() {
          return ctx.agregarProductoBodega();
        });
        \u0275\u0275elementStart(55, "mat-icon");
        \u0275\u0275text(56, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(57, " Bodega ");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(58, GenerarPedidoComponent_Conditional_58_Template, 4, 0, "button", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(59, GenerarPedidoComponent_Conditional_59_Template, 6, 1, "div", 30);
        \u0275\u0275conditionalCreate(60, GenerarPedidoComponent_Conditional_60_Template, 6, 1, "div", 31);
        \u0275\u0275conditionalCreate(61, GenerarPedidoComponent_Conditional_61_Template, 9, 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "div", 32)(63, "mat-slide-toggle", 33);
        \u0275\u0275text(64, "\xBFPago realizado?");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(65, GenerarPedidoComponent_Conditional_65_Template, 7, 1, "div", 34);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(66, "div", 35);
        \u0275\u0275conditionalCreate(67, GenerarPedidoComponent_Conditional_67_Template, 3, 0);
        \u0275\u0275conditionalCreate(68, GenerarPedidoComponent_Conditional_68_Template, 3, 1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "div", 36);
        \u0275\u0275conditionalCreate(70, GenerarPedidoComponent_Conditional_70_Template, 4, 0, "button", 37);
        \u0275\u0275pipe(71, "async");
        \u0275\u0275conditionalCreate(72, GenerarPedidoComponent_Conditional_72_Template, 1, 0, "mat-spinner", 38);
        \u0275\u0275pipe(73, "async");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(21, _c0));
        \u0275\u0275advance(17);
        \u0275\u0275property("formGroup", ctx.pedidosForm);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(\u0275\u0275pipeBind1(29, 13, ctx.generarPedidoFacade.responseTipoPedidos$));
        \u0275\u0275advance(7);
        \u0275\u0275repeater(\u0275\u0275pipeBind1(36, 15, ctx.generarPedidoFacade.responseMetodosPago$));
        \u0275\u0275advance(18);
        \u0275\u0275conditional(ctx.productos.length > 0 ? 52 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.esRevendedoraConsigna ? 58 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.esRevendedoraConsigna && ctx.nombreAlmacenConsigna ? 59 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.productos.length === 0 ? 60 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.productos.length > 0 ? 61 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("formControl", ctx.pagoRealizado);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.pagoRealizado.value ? 65 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.isImageSaved ? 67 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isImageSaved ? 68 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!\u0275\u0275pipeBind1(71, 17, ctx.generarPedidoFacade.responseCargando$) ? 70 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(\u0275\u0275pipeBind1(73, 19, ctx.generarPedidoFacade.responseCargando$) ? 72 : -1);
      }
    }, dependencies: [RouterLink, MatFormField, MatLabel, MatPrefix, MatIcon, MatInput, CdkTextareaAutosize, MatButton, MatIconButton, MatCard, MatCardContent, MatCardHeader, MatCardTitle, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, FormControlDirective, FormGroupDirective, FormControlName, MatSelect, MatOption, MatProgressSpinner, MatSlideToggle, MatTooltip, MatAutocomplete, MatAutocompleteTrigger, AsyncPipe, CurrencyPipe], styles: ['@charset "UTF-8";\n\n\n.pedido-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.3fr 1fr;\n  gap: 24px;\n  align-items: start;\n}\n.pedido-form-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 24px !important;\n}\n.pedido-form[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 4px 16px;\n}\n.pedido-form[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .campo-6[_ngcontent-%COMP%] {\n  grid-column: span 1;\n}\n.pedido-form[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%]   .campo-12[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.pedido-pago[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.uploadfilecontainer[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  border: 2px dashed var(--color-border);\n  border-radius: 12px;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  color: var(--color-text-secondary);\n  transition: border-color 0.16s, background 0.16s;\n}\n.uploadfilecontainer[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-accent);\n  background: #FBF5F5;\n}\n.uploadfilecontainer[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  color: var(--color-text-muted, #9A9A9A);\n}\n.uploadfilecontainer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: center;\n}\n.pedido-visual[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 40px 24px;\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-card);\n}\n.pedido-ilustracion[_ngcontent-%COMP%] {\n  max-width: 280px;\n  width: 100%;\n  height: auto;\n}\n.pedido-visual-texto[_ngcontent-%COMP%] {\n  color: var(--color-text-secondary);\n  font-size: 14px;\n  margin-top: 20px;\n  max-width: 260px;\n  line-height: 1.5;\n}\n.pedido-preview-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--color-text-muted, #9A9A9A);\n  margin-bottom: 14px;\n}\n.pedido-preview[_ngcontent-%COMP%] {\n  max-width: 300px;\n  max-height: 360px;\n  width: auto;\n  height: auto;\n  object-fit: contain;\n  border-radius: 12px;\n  border: 1px solid var(--color-border);\n}\n.pedido-acciones[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin-top: 20px;\n}\n.pedido-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.3fr 1fr;\n  gap: 24px;\n  align-items: stretch;\n}\n@media (max-width: 900px) {\n  .pedido-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pedido-visual[_ngcontent-%COMP%] {\n    min-height: auto;\n    order: -1;\n  }\n  .pedido-form[_ngcontent-%COMP%]   .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 600px) {\n  .pedido-visual[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.seccion-titulo[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--color-text-secondary);\n  margin: 18px 0 10px;\n}\n.seccion-productos[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.botones-add[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-add[_ngcontent-%COMP%] {\n  height: 34px !important;\n  font-size: 12px !important;\n  border-radius: var(--radius-btn) !important;\n}\n.btn-add[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  height: 17px;\n  width: 17px;\n  margin-right: 4px;\n}\n.btn-add.bodega[_ngcontent-%COMP%] {\n  border-color: var(--color-primary) !important;\n  color: var(--color-primary) !important;\n}\n.btn-add.consigna[_ngcontent-%COMP%] {\n  border-color: var(--color-accent) !important;\n  color: var(--color-accent) !important;\n}\n.info-consigna[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n  background: rgba(224, 26, 26, 0.06);\n  border: 1px solid rgba(224, 26, 26, 0.18);\n  border-radius: var(--radius-btn);\n  padding: 8px 12px;\n  margin-bottom: 10px;\n}\n.info-consigna[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n.info-consigna[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.sin-productos[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  justify-content: center;\n  padding: 24px;\n  color: var(--color-text-secondary);\n  background: #FAF9F7;\n  border: 1px dashed var(--color-border);\n  border-radius: var(--radius-card);\n  font-size: 13.5px;\n}\n.sin-productos[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n}\n.tabla-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.tabla-prod[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n}\n.tabla-prod[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--color-text-secondary);\n  text-align: left;\n  padding: 8px 8px;\n  white-space: nowrap;\n  border-bottom: 1.5px solid var(--color-border);\n}\n.tabla-prod[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  vertical-align: middle;\n}\n.tabla-prod[_ngcontent-%COMP%]   .col-origen[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.tabla-prod[_ngcontent-%COMP%]   .col-alm[_ngcontent-%COMP%] {\n  min-width: 140px;\n}\n.tabla-prod[_ngcontent-%COMP%]   .col-prod[_ngcontent-%COMP%] {\n  min-width: 200px;\n  width: 30%;\n}\n.tabla-prod[_ngcontent-%COMP%]   .col-lote[_ngcontent-%COMP%] {\n  width: 70px;\n  text-align: center;\n}\n.tabla-prod[_ngcontent-%COMP%]   .col-num[_ngcontent-%COMP%] {\n  width: 85px;\n}\n.tabla-prod[_ngcontent-%COMP%]   .col-sub[_ngcontent-%COMP%] {\n  width: 110px;\n  text-align: right;\n}\n.tabla-prod[_ngcontent-%COMP%]   .col-quitar[_ngcontent-%COMP%] {\n  width: 46px;\n  text-align: center;\n}\n.tabla-prod[_ngcontent-%COMP%]   th.col-num[_ngcontent-%COMP%], \n.tabla-prod[_ngcontent-%COMP%]   th.col-sub[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.campo-prod[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.campo-prod[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.campo-prod[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper {\n  margin: 0;\n}\n.almacen-fijo[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--color-primary);\n}\n.origen-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 12px;\n  white-space: nowrap;\n}\n.origen-bodega[_ngcontent-%COMP%] {\n  background: rgba(26, 26, 26, 0.08);\n  color: var(--color-primary);\n}\n.origen-consigna[_ngcontent-%COMP%] {\n  background: rgba(224, 26, 26, 0.09);\n  color: var(--color-accent);\n}\n.lote-txt[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  font-size: 12px;\n  color: var(--color-text-secondary);\n  font-variant-numeric: tabular-nums;\n}\n.lote-na[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  color: var(--color-text-muted);\n}\n.subtotal-prod[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n.btn-quitar-prod[_ngcontent-%COMP%] {\n  background: transparent !important;\n  color: var(--color-accent) !important;\n  box-shadow: none !important;\n  width: 32px !important;\n  height: 32px !important;\n}\n.btn-quitar-prod[_ngcontent-%COMP%]:hover {\n  background: rgba(224, 26, 26, 0.08) !important;\n}\n.total-productos[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: flex-end;\n  gap: 14px;\n  padding: 12px 8px 4px;\n  margin-top: 6px;\n  border-top: 1.5px solid var(--color-border);\n}\n.total-productos[_ngcontent-%COMP%]   .total-prod-lbl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--color-text-secondary);\n}\n.total-productos[_ngcontent-%COMP%]   .total-prod-val[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--color-accent);\n  font-variant-numeric: tabular-nums;\n}\nbloque-productos[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding-top: 18px;\n  border-top: 1px solid var(--color-border);\n}\n.bloque-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.bloque-titulo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family: var(--font-serif);\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--color-primary);\n}\n.bloque-titulo[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  font-size: 22px;\n  height: 22px;\n  width: 22px;\n}\n.bloque-titulo[_ngcontent-%COMP%]   .contador[_ngcontent-%COMP%] {\n  font-family: var(--font-sans);\n  font-size: 12px;\n  font-weight: 700;\n  color: #fff;\n  background: var(--color-accent);\n  border-radius: 999px;\n  min-width: 22px;\n  height: 22px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 6px;\n}\n.botones-add[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.btn-add[_ngcontent-%COMP%] {\n  height: 38px !important;\n  font-size: 13px !important;\n  font-weight: 600 !important;\n  border-radius: var(--radius-btn) !important;\n  padding: 0 16px !important;\n}\n.btn-add[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n  margin-right: 4px;\n}\n.btn-add.bodega[_ngcontent-%COMP%] {\n  background: var(--color-primary) !important;\n  color: #fff !important;\n}\n.btn-add.consigna[_ngcontent-%COMP%] {\n  background: var(--color-accent) !important;\n  color: #fff !important;\n}\n.info-consigna[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--color-text-secondary);\n  background: rgba(224, 26, 26, 0.06);\n  border: 1px solid rgba(224, 26, 26, 0.18);\n  border-radius: var(--radius-btn);\n  padding: 9px 13px;\n  margin-bottom: 14px;\n}\n.info-consigna[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  font-size: 19px;\n  height: 19px;\n  width: 19px;\n}\n.info-consigna[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.sin-productos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  justify-content: center;\n  padding: 36px 24px;\n  color: var(--color-text-secondary);\n  background: #FAF9F7;\n  border: 1.5px dashed var(--color-border);\n  border-radius: var(--radius-card);\n  font-size: 14px;\n  text-align: center;\n}\n.sin-productos[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 34px;\n  height: 34px;\n  width: 34px;\n}\n.lista-productos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.card-producto[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--color-border);\n  border-left-width: 4px;\n  border-radius: var(--radius-card);\n  padding: 12px 14px 14px;\n  transition: box-shadow 0.15s ease;\n}\n.card-producto[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);\n}\n.card-producto.borde-bodega[_ngcontent-%COMP%] {\n  border-left-color: var(--color-primary);\n}\n.card-producto.borde-consigna[_ngcontent-%COMP%] {\n  border-left-color: var(--color-accent);\n}\n.card-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.origen-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  padding: 4px 11px;\n  border-radius: 999px;\n}\n.origen-pill[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  height: 15px;\n  width: 15px;\n}\n.origen-pill.origen-bodega[_ngcontent-%COMP%] {\n  background: rgba(26, 26, 26, 0.08);\n  color: var(--color-primary);\n}\n.origen-pill.origen-consigna[_ngcontent-%COMP%] {\n  background: rgba(224, 26, 26, 0.1);\n  color: var(--color-accent);\n}\n.card-head-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.card-head-right[_ngcontent-%COMP%]   .idx[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-text-muted);\n  font-variant-numeric: tabular-nums;\n}\n.btn-quitar-prod[_ngcontent-%COMP%] {\n  color: var(--color-text-muted) !important;\n  width: 32px !important;\n  height: 32px !important;\n  line-height: 32px !important;\n}\n.btn-quitar-prod[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 19px;\n  height: 19px;\n  width: 19px;\n}\n.btn-quitar-prod[_ngcontent-%COMP%]:hover {\n  color: var(--color-accent) !important;\n  background: rgba(224, 26, 26, 0.08) !important;\n}\n.card-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px 12px;\n}\n.campo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.campo[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--color-text-secondary);\n  margin-bottom: 3px;\n}\n.campo-producto[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.campo-cant[_ngcontent-%COMP%], \n.campo-precio[_ngcontent-%COMP%] {\n  grid-column: span 1;\n}\n.campo-subtotal[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.campo-prod[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.campo-prod[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.campo-prod[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper {\n  margin: 0;\n  background: #fff;\n}\n.campo-prod[_ngcontent-%COMP%]     .mat-mdc-form-field-infix {\n  min-height: 42px;\n  padding: 8px 0;\n}\n.campo-prod[_ngcontent-%COMP%]   mat-icon[matPrefix][_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n  margin: 0 6px 0 4px;\n  color: var(--color-text-muted);\n}\n.campo-prod[_ngcontent-%COMP%]   .pref-moneda[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--color-text-secondary);\n  margin-left: 4px;\n}\n.valor-fijo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  height: 42px;\n  padding: 0 12px;\n  font-size: 13.5px;\n  font-weight: 500;\n  color: var(--color-primary);\n  background: #FAF9F7;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-btn);\n}\n.valor-fijo[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  height: 17px;\n  width: 17px;\n  color: var(--color-accent);\n}\n.chip-lote[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n  background: rgba(26, 26, 26, 0.05);\n  border-radius: 6px;\n  padding: 2px 8px;\n  width: fit-content;\n}\n.valor-subtotal[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  height: 40px;\n  padding: 0 12px;\n  font-weight: 700;\n  font-size: 15px;\n  color: var(--color-primary);\n  background: #FAF9F7;\n  border-radius: var(--radius-btn);\n  font-variant-numeric: tabular-nums;\n}\n.opt-prod[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  width: 100%;\n}\n.opt-prod[_ngcontent-%COMP%]   .opt-nombre[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.opt-prod[_ngcontent-%COMP%]   .opt-disp[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--color-success);\n}\n.total-productos[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 14px 16px;\n  margin-top: 14px;\n  background: var(--color-primary);\n  border-radius: var(--radius-card);\n}\n.total-productos[_ngcontent-%COMP%]   .total-prod-lbl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: rgba(255, 255, 255, 0.7);\n}\n.total-productos[_ngcontent-%COMP%]   .total-prod-val[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-size: 24px;\n  font-weight: 700;\n  color: #fff;\n  font-variant-numeric: tabular-nums;\n}\n@media (max-width: 560px) {\n  .card-body[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .campo-cant[_ngcontent-%COMP%], \n   .campo-precio[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n}\n/*# sourceMappingURL=generar-pedido.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GenerarPedidoComponent, [{
    type: Component,
    args: [{ selector: "app-generar-pedido", standalone: false, template: `<div class="navigation">\r
  <nav aria-label="breadcrumb">\r
    <ol class="breadcrumb">\r
      <li class="breadcrumb-item"><a [routerLink]="['/dashboard']">Inicio</a></li>\r
      <li class="breadcrumb-item activo">Generar Pedido</li>\r
    </ol>\r
  </nav>\r
\r
  <div class="content">\r
    <div class="titleNav">\r
      <h2>Generar Pedido</h2>\r
      <div class="subtitulo">Registra un nuevo pedido de cliente</div>\r
    </div>\r
  </div>\r
</div>\r
\r
<div class="contenedor-tabla">\r
  <div class="pedido-layout">\r
\r
    <!-- IZQUIERDA: formulario -->\r
    <mat-card class="matCardPersonalizada pedido-form-card">\r
      <mat-card-header>\r
        <mat-card-title>Detalle del pedido</mat-card-title>\r
      </mat-card-header>\r
\r
      <mat-card-content>\r
        <form [formGroup]="pedidosForm" class="pedido-form">\r
\r
          <div class="form-grid">\r
            <mat-form-field appearance="fill" class="campo-6">\r
              <mat-label>Tipo Pedido</mat-label>\r
              <mat-select formControlName="IdTipoPedido" required>\r
                @for (t of (generarPedidoFacade.responseTipoPedidos$ | async); track t) {\r
                  <mat-option [value]="t.Id">{{ t.TipoPedido }}</mat-option>\r
                }\r
              </mat-select>\r
            </mat-form-field>\r
\r
            <mat-form-field appearance="fill" class="campo-6">\r
              <mat-label>M\xE9todo Pago</mat-label>\r
              <mat-select formControlName="IdMetodoPago" required>\r
                @for (m of (generarPedidoFacade.responseMetodosPago$ | async); track m) {\r
                  <mat-option [value]="m.Id">{{ m.MetodoPago }}</mat-option>\r
                }\r
              </mat-select>\r
            </mat-form-field>\r
\r
            <mat-form-field appearance="fill" class="campo-12">\r
              <mat-label>Detalle Pedido</mat-label>\r
              <textarea matInput placeholder="Describe el pedido del cliente" formControlName="DetallePedido"\r
                        cdkTextareaAutosize cdkAutosizeMinRows="3" cdkAutosizeMaxRows="6" required></textarea>\r
            </mat-form-field>\r
\r
            <mat-form-field appearance="fill" class="campo-12">\r
              <mat-label>Observaci\xF3n Cliente</mat-label>\r
              <textarea matInput placeholder="Observaci\xF3n del cliente (opcional)" formControlName="ObservacionCliente"\r
                        cdkTextareaAutosize cdkAutosizeMinRows="2" cdkAutosizeMaxRows="4"></textarea>\r
            </mat-form-field>\r
          </div>\r
\r
          <!-- ===================== Productos del pedido ===================== -->\r
          <div class="bloque-productos">\r
\r
            <div class="bloque-head">\r
              <div class="bloque-titulo">\r
                <mat-icon>inventory_2</mat-icon>\r
                <span>Productos</span>\r
                @if (productos.length > 0) {\r
                  <span class="contador">{{ productos.length }}</span>\r
                }\r
              </div>\r
              <div class="botones-add">\r
                <button type="button" class="btn-add bodega" mat-flat-button (click)="agregarProductoBodega()">\r
                  <mat-icon>add</mat-icon> Bodega\r
                </button>\r
                @if (esRevendedoraConsigna) {\r
                  <button type="button" class="btn-add consigna" mat-flat-button (click)="agregarProductoConsigna()">\r
                    <mat-icon>add</mat-icon> Mi consigna\r
                  </button>\r
                }\r
              </div>\r
            </div>\r
\r
            @if (esRevendedoraConsigna && nombreAlmacenConsigna) {\r
              <div class="info-consigna">\r
                <mat-icon>storefront</mat-icon>\r
                Tu almac\xE9n de consigna: <strong>{{ nombreAlmacenConsigna }}</strong>\r
              </div>\r
            }\r
\r
            <!-- Vac\xEDo -->\r
            @if (productos.length === 0) {\r
              <div class="sin-productos">\r
                <mat-icon>shopping_cart</mat-icon>\r
                <span>\r
                  @if (esRevendedoraConsigna) {\r
                    Agrega productos de bodega o de tu consigna\r
                  } @else {\r
                    Agrega productos de bodega\r
                  }\r
                </span>\r
              </div>\r
            }\r
\r
            <!-- Tarjetas de producto -->\r
            @if (productos.length > 0) {\r
              <div class="lista-productos">\r
                @for (linea of productos.controls; track linea; let i = $index) {\r
                  <div class="card-producto" [formGroup]="linea"\r
                       [class.borde-bodega]="!linea.get('esConsigna')?.value"\r
                       [class.borde-consigna]="linea.get('esConsigna')?.value">\r
\r
                    <!-- Cabecera de la tarjeta -->\r
                    <div class="card-head">\r
                      <span class="origen-pill"\r
                        [class.origen-bodega]="!linea.get('esConsigna')?.value"\r
                        [class.origen-consigna]="linea.get('esConsigna')?.value">\r
                        <mat-icon>{{ linea.get('esConsigna')?.value ? 'local_shipping' : 'warehouse' }}</mat-icon>\r
                        {{ linea.get('esConsigna')?.value ? 'Consigna' : 'Bodega' }}\r
                      </span>\r
\r
                      <div class="card-head-right">\r
                        <span class="idx">#{{ i + 1 }}</span>\r
                        <button type="button" class="btn-quitar-prod" mat-icon-button (click)="eliminarProducto(i)"\r
                                matTooltip="Quitar producto">\r
                          <mat-icon>close</mat-icon>\r
                        </button>\r
                      </div>\r
                    </div>\r
\r
                    <!-- Cuerpo de la tarjeta -->\r
                    <div class="card-body">\r
\r
                      <!-- Almac\xE9n -->\r
                      <div class="campo campo-almacen">\r
                        <label>Almac\xE9n</label>\r
                        @if (linea.get('esConsigna')?.value) {\r
                          <div class="valor-fijo">\r
                            <mat-icon>storefront</mat-icon>\r
                            {{ nombreAlmacenConsigna }}\r
                          </div>\r
                        } @else {\r
                          <mat-form-field appearance="outline" class="campo-prod">\r
                            <mat-select formControlName="idAlmacen" placeholder="Selecciona" required>\r
                              @for (a of (almacenFacade.responseAlmacenes$ | async); track a) {\r
                                @if (a?.tipo !== 'CONSIGNACION') {\r
                                  <mat-option [value]="a?.id">{{ a?.nombre }}</mat-option>\r
                                }\r
                              }\r
                            </mat-select>\r
                          </mat-form-field>\r
                        }\r
                      </div>\r
\r
                      <!-- Producto -->\r
                      <div class="campo campo-producto">\r
                        <label>Producto</label>\r
                        <mat-form-field appearance="outline" class="campo-prod">\r
                          <mat-icon matPrefix>search</mat-icon>\r
                          <input type="text" matInput placeholder="Buscar producto"\r
                            [matAutocomplete]="autoProd"\r
                            [value]="linea.get('productoNombre')?.value"\r
                            (input)="buscarProducto($event, i)" required>\r
                          <mat-autocomplete #autoProd="matAutocomplete"\r
                            (optionSelected)="selectProducto($event.option.value, i)">\r
                            @for (p of productosPorLinea[i]; track p.id) {\r
                              <mat-option [value]="p">\r
                                <span class="opt-prod">\r
                                  <span class="opt-nombre">{{ p?.sku }} \xB7 {{ p?.nombre }}</span>\r
                                  <span class="opt-disp">disp: {{ p?.stock_disponible }}</span>\r
                                </span>\r
                              </mat-option>\r
                            }\r
                          </mat-autocomplete>\r
                        </mat-form-field>\r
                        @if (linea.get('requiereLote')?.value) {\r
                          <span class="chip-lote">\r
                            Lote: {{ linea.get('idLote')?.value ? '#' + linea.get('idLote')?.value : 'FEFO' }}\r
                          </span>\r
                        }\r
                      </div>\r
\r
                      <!-- Cantidad -->\r
                      <div class="campo campo-cant">\r
                        <label>Cantidad</label>\r
                        <mat-form-field appearance="outline" class="campo-prod">\r
                          <input matInput type="number" min="1" formControlName="cantidad" placeholder="0">\r
                        </mat-form-field>\r
                      </div>\r
\r
                      <!-- Precio -->\r
                      <div class="campo campo-precio">\r
                        <label>Precio</label>\r
                        <mat-form-field appearance="outline" class="campo-prod">\r
                          <span matPrefix class="pref-moneda">L.&nbsp;</span>\r
                          <input matInput type="number" min="0" step="0.01" formControlName="precioVenta" placeholder="0.00">\r
                        </mat-form-field>\r
                      </div>\r
\r
                      <!-- Subtotal -->\r
                      <div class="campo campo-subtotal">\r
                        <label>Subtotal</label>\r
                        <div class="valor-subtotal">{{ subtotalProducto(i) | currency:'HNL':'L. ':'1.2-2' }}</div>\r
                      </div>\r
\r
                    </div>\r
                  </div>\r
                }\r
              </div>\r
\r
              <div class="total-productos">\r
                <span class="total-prod-lbl">Total del pedido</span>\r
                <span class="total-prod-val">{{ totalPedido() | currency:'HNL':'L. ':'1.2-2' }}</span>\r
              </div>\r
            }\r
          </div>\r
          <!-- =================== fin Productos del pedido =================== -->\r
\r
          <!-- Comprobante de pago -->\r
          <div class="pedido-pago">\r
            <mat-slide-toggle [formControl]="pagoRealizado" color="warn">\xBFPago realizado?</mat-slide-toggle>\r
\r
            @if (pagoRealizado.value) {\r
              <div class="uploadfilecontainer" (click)="fileInput.click()">\r
                <mat-icon>cloud_upload</mat-icon>\r
                <span>{{ nombreArchivo || 'Haz clic para seleccionar el comprobante' }}</span>\r
                <input type="file" #fileInput hidden (change)="onFileSelect($event)" required>\r
              </div>\r
            }\r
          </div>\r
\r
        </form>\r
      </mat-card-content>\r
    </mat-card>\r
\r
    <!-- DERECHA: ilustraci\xF3n o preview del comprobante -->\r
    <div class="pedido-visual">\r
      @if (!isImageSaved) {\r
        <img src="./assets/images/Pedidos/undraw_order_delivered_re_v4ab.svg" class="pedido-ilustracion" alt="">\r
        <p class="pedido-visual-texto">Completa los datos y env\xEDa el pedido para procesarlo.</p>\r
      }\r
      @if (isImageSaved) {\r
        <div class="pedido-preview-label">Comprobante seleccionado</div>\r
        <img [src]="cardImageBase64" class="pedido-preview" alt="Comprobante">\r
      }\r
    </div>\r
\r
  </div>\r
\r
  <!-- Acci\xF3n principal -->\r
  <div class="pedido-acciones">\r
    @if (!(generarPedidoFacade.responseCargando$ | async)) {\r
      <button mat-flat-button class="button-principal" (click)="enviarPedido()">\r
        <mat-icon>send</mat-icon>\r
        Enviar Pedido\r
      </button>\r
    }\r
    @if ((generarPedidoFacade.responseCargando$ | async)) {\r
      <mat-spinner diameter="36"></mat-spinner>\r
    }\r
  </div>\r
</div>`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/clientes/generar-pedido/generar-pedido.component.scss */\n.pedido-layout {\n  display: grid;\n  grid-template-columns: 1.3fr 1fr;\n  gap: 24px;\n  align-items: start;\n}\n.pedido-form-card mat-card-content {\n  padding: 24px !important;\n}\n.pedido-form .form-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 4px 16px;\n}\n.pedido-form .form-grid .campo-6 {\n  grid-column: span 1;\n}\n.pedido-form .form-grid .campo-12 {\n  grid-column: 1/-1;\n}\n.pedido-pago {\n  margin-top: 12px;\n}\n.uploadfilecontainer {\n  margin-top: 14px;\n  border: 2px dashed var(--color-border);\n  border-radius: 12px;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  color: var(--color-text-secondary);\n  transition: border-color 0.16s, background 0.16s;\n}\n.uploadfilecontainer:hover {\n  border-color: var(--color-accent);\n  background: #FBF5F5;\n}\n.uploadfilecontainer mat-icon {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  color: var(--color-text-muted, #9A9A9A);\n}\n.uploadfilecontainer span {\n  font-size: 14px;\n  text-align: center;\n}\n.pedido-visual {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 40px 24px;\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-card);\n}\n.pedido-ilustracion {\n  max-width: 280px;\n  width: 100%;\n  height: auto;\n}\n.pedido-visual-texto {\n  color: var(--color-text-secondary);\n  font-size: 14px;\n  margin-top: 20px;\n  max-width: 260px;\n  line-height: 1.5;\n}\n.pedido-preview-label {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--color-text-muted, #9A9A9A);\n  margin-bottom: 14px;\n}\n.pedido-preview {\n  max-width: 300px;\n  max-height: 360px;\n  width: auto;\n  height: auto;\n  object-fit: contain;\n  border-radius: 12px;\n  border: 1px solid var(--color-border);\n}\n.pedido-acciones {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin-top: 20px;\n}\n.pedido-layout {\n  display: grid;\n  grid-template-columns: 1.3fr 1fr;\n  gap: 24px;\n  align-items: stretch;\n}\n@media (max-width: 900px) {\n  .pedido-layout {\n    grid-template-columns: 1fr;\n  }\n  .pedido-visual {\n    min-height: auto;\n    order: -1;\n  }\n  .pedido-form .form-grid {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 600px) {\n  .pedido-visual {\n    display: none !important;\n  }\n}\n.seccion-titulo {\n  font-size: 13px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--color-text-secondary);\n  margin: 18px 0 10px;\n}\n.seccion-productos {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.botones-add {\n  display: flex;\n  gap: 8px;\n}\n.btn-add {\n  height: 34px !important;\n  font-size: 12px !important;\n  border-radius: var(--radius-btn) !important;\n}\n.btn-add mat-icon {\n  font-size: 17px;\n  height: 17px;\n  width: 17px;\n  margin-right: 4px;\n}\n.btn-add.bodega {\n  border-color: var(--color-primary) !important;\n  color: var(--color-primary) !important;\n}\n.btn-add.consigna {\n  border-color: var(--color-accent) !important;\n  color: var(--color-accent) !important;\n}\n.info-consigna {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n  background: rgba(224, 26, 26, 0.06);\n  border: 1px solid rgba(224, 26, 26, 0.18);\n  border-radius: var(--radius-btn);\n  padding: 8px 12px;\n  margin-bottom: 10px;\n}\n.info-consigna mat-icon {\n  color: var(--color-accent);\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n.info-consigna strong {\n  color: var(--color-primary);\n}\n.sin-productos {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  justify-content: center;\n  padding: 24px;\n  color: var(--color-text-secondary);\n  background: #FAF9F7;\n  border: 1px dashed var(--color-border);\n  border-radius: var(--radius-card);\n  font-size: 13.5px;\n}\n.sin-productos mat-icon {\n  color: var(--color-text-muted);\n}\n.tabla-scroll {\n  overflow-x: auto;\n}\n.tabla-prod {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n}\n.tabla-prod thead th {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--color-text-secondary);\n  text-align: left;\n  padding: 8px 8px;\n  white-space: nowrap;\n  border-bottom: 1.5px solid var(--color-border);\n}\n.tabla-prod tbody td {\n  padding: 4px 8px;\n  vertical-align: middle;\n}\n.tabla-prod .col-origen {\n  width: 90px;\n}\n.tabla-prod .col-alm {\n  min-width: 140px;\n}\n.tabla-prod .col-prod {\n  min-width: 200px;\n  width: 30%;\n}\n.tabla-prod .col-lote {\n  width: 70px;\n  text-align: center;\n}\n.tabla-prod .col-num {\n  width: 85px;\n}\n.tabla-prod .col-sub {\n  width: 110px;\n  text-align: right;\n}\n.tabla-prod .col-quitar {\n  width: 46px;\n  text-align: center;\n}\n.tabla-prod th.col-num,\n.tabla-prod th.col-sub {\n  text-align: right;\n}\n.campo-prod {\n  width: 100%;\n}\n.campo-prod ::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.campo-prod ::ng-deep .mat-mdc-text-field-wrapper {\n  margin: 0;\n}\n.almacen-fijo {\n  display: inline-block;\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--color-primary);\n}\n.origen-pill {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 12px;\n  white-space: nowrap;\n}\n.origen-bodega {\n  background: rgba(26, 26, 26, 0.08);\n  color: var(--color-primary);\n}\n.origen-consigna {\n  background: rgba(224, 26, 26, 0.09);\n  color: var(--color-accent);\n}\n.lote-txt {\n  display: block;\n  text-align: center;\n  font-size: 12px;\n  color: var(--color-text-secondary);\n  font-variant-numeric: tabular-nums;\n}\n.lote-na {\n  display: block;\n  text-align: center;\n  color: var(--color-text-muted);\n}\n.subtotal-prod {\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n.btn-quitar-prod {\n  background: transparent !important;\n  color: var(--color-accent) !important;\n  box-shadow: none !important;\n  width: 32px !important;\n  height: 32px !important;\n}\n.btn-quitar-prod:hover {\n  background: rgba(224, 26, 26, 0.08) !important;\n}\n.total-productos {\n  display: flex;\n  align-items: baseline;\n  justify-content: flex-end;\n  gap: 14px;\n  padding: 12px 8px 4px;\n  margin-top: 6px;\n  border-top: 1.5px solid var(--color-border);\n}\n.total-productos .total-prod-lbl {\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--color-text-secondary);\n}\n.total-productos .total-prod-val {\n  font-family: var(--font-serif);\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--color-accent);\n  font-variant-numeric: tabular-nums;\n}\nbloque-productos {\n  margin-top: 20px;\n  padding-top: 18px;\n  border-top: 1px solid var(--color-border);\n}\n.bloque-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.bloque-titulo {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family: var(--font-serif);\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--color-primary);\n}\n.bloque-titulo mat-icon {\n  color: var(--color-accent);\n  font-size: 22px;\n  height: 22px;\n  width: 22px;\n}\n.bloque-titulo .contador {\n  font-family: var(--font-sans);\n  font-size: 12px;\n  font-weight: 700;\n  color: #fff;\n  background: var(--color-accent);\n  border-radius: 999px;\n  min-width: 22px;\n  height: 22px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 6px;\n}\n.botones-add {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.btn-add {\n  height: 38px !important;\n  font-size: 13px !important;\n  font-weight: 600 !important;\n  border-radius: var(--radius-btn) !important;\n  padding: 0 16px !important;\n}\n.btn-add mat-icon {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n  margin-right: 4px;\n}\n.btn-add.bodega {\n  background: var(--color-primary) !important;\n  color: #fff !important;\n}\n.btn-add.consigna {\n  background: var(--color-accent) !important;\n  color: #fff !important;\n}\n.info-consigna {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--color-text-secondary);\n  background: rgba(224, 26, 26, 0.06);\n  border: 1px solid rgba(224, 26, 26, 0.18);\n  border-radius: var(--radius-btn);\n  padding: 9px 13px;\n  margin-bottom: 14px;\n}\n.info-consigna mat-icon {\n  color: var(--color-accent);\n  font-size: 19px;\n  height: 19px;\n  width: 19px;\n}\n.info-consigna strong {\n  color: var(--color-primary);\n}\n.sin-productos {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  justify-content: center;\n  padding: 36px 24px;\n  color: var(--color-text-secondary);\n  background: #FAF9F7;\n  border: 1.5px dashed var(--color-border);\n  border-radius: var(--radius-card);\n  font-size: 14px;\n  text-align: center;\n}\n.sin-productos mat-icon {\n  color: var(--color-text-muted);\n  font-size: 34px;\n  height: 34px;\n  width: 34px;\n}\n.lista-productos {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.card-producto {\n  background: #fff;\n  border: 1px solid var(--color-border);\n  border-left-width: 4px;\n  border-radius: var(--radius-card);\n  padding: 12px 14px 14px;\n  transition: box-shadow 0.15s ease;\n}\n.card-producto:hover {\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);\n}\n.card-producto.borde-bodega {\n  border-left-color: var(--color-primary);\n}\n.card-producto.borde-consigna {\n  border-left-color: var(--color-accent);\n}\n.card-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.origen-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  padding: 4px 11px;\n  border-radius: 999px;\n}\n.origen-pill mat-icon {\n  font-size: 15px;\n  height: 15px;\n  width: 15px;\n}\n.origen-pill.origen-bodega {\n  background: rgba(26, 26, 26, 0.08);\n  color: var(--color-primary);\n}\n.origen-pill.origen-consigna {\n  background: rgba(224, 26, 26, 0.1);\n  color: var(--color-accent);\n}\n.card-head-right {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.card-head-right .idx {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-text-muted);\n  font-variant-numeric: tabular-nums;\n}\n.btn-quitar-prod {\n  color: var(--color-text-muted) !important;\n  width: 32px !important;\n  height: 32px !important;\n  line-height: 32px !important;\n}\n.btn-quitar-prod mat-icon {\n  font-size: 19px;\n  height: 19px;\n  width: 19px;\n}\n.btn-quitar-prod:hover {\n  color: var(--color-accent) !important;\n  background: rgba(224, 26, 26, 0.08) !important;\n}\n.card-body {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px 12px;\n}\n.campo {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.campo label {\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--color-text-secondary);\n  margin-bottom: 3px;\n}\n.campo-producto {\n  grid-column: 1/-1;\n}\n.campo-cant,\n.campo-precio {\n  grid-column: span 1;\n}\n.campo-subtotal {\n  grid-column: 1/-1;\n}\n.campo-prod {\n  width: 100%;\n}\n.campo-prod ::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.campo-prod ::ng-deep .mat-mdc-text-field-wrapper {\n  margin: 0;\n  background: #fff;\n}\n.campo-prod ::ng-deep .mat-mdc-form-field-infix {\n  min-height: 42px;\n  padding: 8px 0;\n}\n.campo-prod mat-icon[matPrefix] {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n  margin: 0 6px 0 4px;\n  color: var(--color-text-muted);\n}\n.campo-prod .pref-moneda {\n  font-size: 13px;\n  color: var(--color-text-secondary);\n  margin-left: 4px;\n}\n.valor-fijo {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  height: 42px;\n  padding: 0 12px;\n  font-size: 13.5px;\n  font-weight: 500;\n  color: var(--color-primary);\n  background: #FAF9F7;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-btn);\n}\n.valor-fijo mat-icon {\n  font-size: 17px;\n  height: 17px;\n  width: 17px;\n  color: var(--color-accent);\n}\n.chip-lote {\n  display: inline-block;\n  margin-top: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n  background: rgba(26, 26, 26, 0.05);\n  border-radius: 6px;\n  padding: 2px 8px;\n  width: fit-content;\n}\n.valor-subtotal {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  height: 40px;\n  padding: 0 12px;\n  font-weight: 700;\n  font-size: 15px;\n  color: var(--color-primary);\n  background: #FAF9F7;\n  border-radius: var(--radius-btn);\n  font-variant-numeric: tabular-nums;\n}\n.opt-prod {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  width: 100%;\n}\n.opt-prod .opt-nombre {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.opt-prod .opt-disp {\n  flex-shrink: 0;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--color-success);\n}\n.total-productos {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 14px 16px;\n  margin-top: 14px;\n  background: var(--color-primary);\n  border-radius: var(--radius-card);\n}\n.total-productos .total-prod-lbl {\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: rgba(255, 255, 255, 0.7);\n}\n.total-productos .total-prod-val {\n  font-family: var(--font-serif);\n  font-size: 24px;\n  font-weight: 700;\n  color: #fff;\n  font-variant-numeric: tabular-nums;\n}\n@media (max-width: 560px) {\n  .card-body {\n    grid-template-columns: 1fr;\n  }\n  .campo-cant,\n  .campo-precio {\n    grid-column: 1/-1;\n  }\n}\n/*# sourceMappingURL=generar-pedido.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GenerarPedidoComponent, { className: "GenerarPedidoComponent", filePath: "src/app/modules/clientes/generar-pedido/generar-pedido.component.ts", lineNumber: 15 });
})();

// src/app/modules/clientes/listar-pedidos/listar-pedidos.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());

// src/app/modules/clientes/listar-pedidos/listar-pedidos-facade.service.ts
var ListarPedidosFacadeService = class _ListarPedidosFacadeService {
  constructor() {
    this.dataApi = inject(DataApiService);
    this.toast = inject(ToastrServiceLocal);
    this._mensajesHttp = inject(MensajesHttpService);
    this.Cargando$ = new BehaviorSubject(false);
    this.responseCargando$ = this.Cargando$.asObservable();
    this.Pedidos$ = new BehaviorSubject([]);
    this.responsePedidos$ = this.Pedidos$.asObservable();
  }
  MostrarPedidos(params) {
    this.Cargando$.next(true);
    this.Pedidos$.next([]);
    const request$ = this.dataApi.GetDataApi(`pedido/pedido/usuario/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      this.Pedidos$.next(result.data.Table0);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.Pedidos$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar los pedidos", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  ActualizarEstadoPedido(params, respuesta) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.PutDataApi(`pedido/pedido/estado`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al actualizar el pedido", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  MostrarDetallePedido(params, callback) {
    const request$ = this.dataApi.GetDataApi(`pedido/detalle/`, params).pipe(tap((result) => {
      callback(result.data.Table0);
    }), catchError((error) => {
      callback([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar el detalle del pedido", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  static {
    this.\u0275fac = function ListarPedidosFacadeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListarPedidosFacadeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ListarPedidosFacadeService, factory: _ListarPedidosFacadeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListarPedidosFacadeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/shared/paginator/paginator-facade.service.ts
var PaginatorFacadeService = class _PaginatorFacadeService {
  constructor() {
    this.DataPaginator = new BehaviorSubject({ desde: 0, hasta: 0, itemPagina: 0, pageIndex: 0, totalItem: 0 });
    this.responseDataPaginator = this.DataPaginator.asObservable();
  }
  cambiarValor() {
  }
  static {
    this.\u0275fac = function PaginatorFacadeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaginatorFacadeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaginatorFacadeService, factory: _PaginatorFacadeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginatorFacadeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/modules/clientes/listar-pedidos/listar-pedidos.component.ts
var _c02 = () => ["/dashboard"];
var _c1 = () => ["IdPedido", "DetallePedido"];
var _forTrack02 = ($index, $item) => $item.id_detalle;
function ListarPedidosComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "app-loading", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("data", 4);
  }
}
function ListarPedidosComponent_Conditional_23_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "mat-icon");
    \u0275\u0275text(2, "credit_card_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No hay peidos para listar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 18);
    \u0275\u0275listener("click", function ListarPedidosComponent_Conditional_23_Conditional_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDialog(ctx_r1.modal));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Agregar el primero ");
    \u0275\u0275elementEnd()();
  }
}
function ListarPedidosComponent_Conditional_23_Conditional_3_For_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 28)(1, "td", 30)(2, "div", 31)(3, "button", 32);
    \u0275\u0275listener("click", function ListarPedidosComponent_Conditional_23_Conditional_3_For_26_Template_button_click_3_listener() {
      const pedido_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      const DetallePedido_r6 = \u0275\u0275reference(26);
      return \u0275\u0275resetView(ctx_r1.openDialog(DetallePedido_r6, pedido_r5));
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 33);
    \u0275\u0275listener("click", function ListarPedidosComponent_Conditional_23_Conditional_3_For_26_Template_button_click_6_listener() {
      const pedido_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelarPedido(pedido_r5));
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "remove_shopping_cart");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "td", 34);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 35);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 36);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 37);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "truncatePipe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 38);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 39);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 40);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 41)(26, "span", 42);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pedido_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(pedido_r5.IdPedido);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pedido_r5.TipoPedido);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pedido_r5.MetodoPago);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 9, pedido_r5.DetallePedido, 100));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(pedido_r5.Observacion);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pedido_r5.NombreReparto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 12, pedido_r5.FechaInsercion, "yyyy-MM-dd"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.colorEstado(pedido_r5.IdEstado));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pedido_r5.EstadoProceso, " ");
  }
}
function ListarPedidosComponent_Conditional_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 17)(1, "mat-card-content")(2, "div", 19)(3, "table", 20)(4, "thead", 21)(5, "tr", 22)(6, "th", 23);
    \u0275\u0275text(7, "Acciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 24);
    \u0275\u0275text(9, "Codigo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 25);
    \u0275\u0275text(11, "Tipo Pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 25);
    \u0275\u0275text(13, "Metodo Pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 25);
    \u0275\u0275text(15, "Detalle Pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 25);
    \u0275\u0275text(17, "Observaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 25);
    \u0275\u0275text(19, "Nombre Reparto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 25);
    \u0275\u0275text(21, "Fecha Ingreso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 26);
    \u0275\u0275text(23, "Estado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody", 27);
    \u0275\u0275repeaterCreate(25, ListarPedidosComponent_Conditional_23_Conditional_3_For_26_Template, 28, 15, "tr", 28, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(27, "async");
    \u0275\u0275pipe(28, "search");
    \u0275\u0275pipe(29, "slice");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "mat-paginator", 29);
    \u0275\u0275pipe(31, "async");
    \u0275\u0275listener("page", function ListarPedidosComponent_Conditional_23_Conditional_3_Template_mat_paginator_page_30_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.next($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(25);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(29, 8, \u0275\u0275pipeBind3(28, 4, \u0275\u0275pipeBind1(27, 2, ctx_r1.listarPedidosFacade.responsePedidos$), ctx_r1.buscar == null ? null : ctx_r1.buscar.value, \u0275\u0275pureFunction0(14, _c1)), ctx_r1.desde, ctx_r1.hasta));
    \u0275\u0275advance(5);
    \u0275\u0275property("length", \u0275\u0275pipeBind1(31, 12, ctx_r1.listarPedidosFacade.responsePedidos$).length)("pageSize", ctx_r1.pageSize);
  }
}
function ListarPedidosComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275conditionalCreate(1, ListarPedidosComponent_Conditional_23_Conditional_1_Template, 9, 0, "div", 16);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275conditionalCreate(3, ListarPedidosComponent_Conditional_23_Conditional_3_Template, 32, 15, "mat-card", 17);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275\u0275pipeBind1(2, 2, ctx_r1.listarPedidosFacade.responsePedidos$).length === 0 ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(4, 4, ctx_r1.listarPedidosFacade.responsePedidos$).length > 0 ? 3 : -1);
  }
}
function ListarPedidosComponent_ng_template_25_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275element(1, "mat-spinner", 59);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Cargando productos\u2026");
    \u0275\u0275elementEnd()();
  }
}
function ListarPedidosComponent_ng_template_25_Conditional_49_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 56);
    \u0275\u0275text(1, "Este pedido no tiene productos registrados.");
    \u0275\u0275elementEnd();
  }
}
function ListarPedidosComponent_ng_template_25_Conditional_49_Conditional_1_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 65);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 66);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 61);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 62);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 62);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 67);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classProp("origen-bodega", !p_r7.es_consigna)("origen-consigna", p_r7.es_consigna);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r7.es_consigna ? "Consigna" : "Bodega", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r7.sku, " \xB7 ", p_r7.producto || p_r7.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r7.almacen);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r7.numero_lote || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r7.cantidad);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(14, 12, p_r7.precio_venta, "HNL", "L. ", "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(17, 17, p_r7.subtotal, "HNL", "L. ", "1.2-2"));
  }
}
function ListarPedidosComponent_ng_template_25_Conditional_49_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "table", 60)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Origen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Almac\xE9n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 61);
    \u0275\u0275text(11, "Lote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 62);
    \u0275\u0275text(13, "Cant.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 62);
    \u0275\u0275text(15, "Precio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 62);
    \u0275\u0275text(17, "Subtotal");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, ListarPedidosComponent_ng_template_25_Conditional_49_Conditional_1_For_20_Template, 18, 22, "tr", null, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "tfoot")(22, "tr")(23, "td", 63);
    \u0275\u0275text(24, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 64);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "currency");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r1.productosPedido);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(27, 1, ctx_r1.totalPedido(), "HNL", "L. ", "1.2-2"));
  }
}
function ListarPedidosComponent_ng_template_25_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ListarPedidosComponent_ng_template_25_Conditional_49_Conditional_0_Template, 2, 0, "p", 56)(1, ListarPedidosComponent_ng_template_25_Conditional_49_Conditional_1_Template, 28, 6, "div", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.productosPedido.length === 0 ? 0 : 1);
  }
}
function ListarPedidosComponent_ng_template_25_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "span", 54);
    \u0275\u0275text(2, "Comprobante");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 68);
    \u0275\u0275element(4, "img", 69);
    \u0275\u0275elementStart(5, "button", 18);
    \u0275\u0275listener("click", function ListarPedidosComponent_ng_template_25_Conditional_65_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.descargarImagen());
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "file_download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Descargar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r1.pedido.Url, \u0275\u0275sanitizeUrl);
  }
}
function ListarPedidosComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "span", 45);
    \u0275\u0275text(3, "Detalle del Pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 46)(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "mat-dialog-content", 47)(8, "div", 48)(9, "div", 49)(10, "span", 50)(11, "mat-icon");
    \u0275\u0275text(12, "local_shipping");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div")(14, "span", 51);
    \u0275\u0275text(15, "Tipo Pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 52);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 49)(19, "span", 50)(20, "mat-icon");
    \u0275\u0275text(21, "paid");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "span", 51);
    \u0275\u0275text(24, "M\xE9todo Pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 52);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 49)(28, "span", 50)(29, "mat-icon");
    \u0275\u0275text(30, "two_wheeler");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div")(32, "span", 51);
    \u0275\u0275text(33, "Nombre Reparto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 52);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 49)(37, "span", 50)(38, "mat-icon");
    \u0275\u0275text(39, "filter_list");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div")(41, "span", 51);
    \u0275\u0275text(42, "Estado Proceso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 52);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(45, "div", 53)(46, "span", 54);
    \u0275\u0275text(47, "Productos del pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(48, ListarPedidosComponent_ng_template_25_Conditional_48_Template, 4, 0, "div", 55)(49, ListarPedidosComponent_ng_template_25_Conditional_49_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 53)(51, "span", 54);
    \u0275\u0275text(52, "Detalle del pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "p", 56);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 53)(56, "span", 54);
    \u0275\u0275text(57, "Observaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "p", 56);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 53)(61, "span", 54);
    \u0275\u0275text(62, "Observaci\xF3n Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "p", 56);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(65, ListarPedidosComponent_ng_template_25_Conditional_65_Template, 9, 1, "div", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 57)(67, "button", 58);
    \u0275\u0275text(68, "Salir");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate(ctx_r1.pedido.TipoPedido);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.pedido.MetodoPago);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.pedido.NombreReparto || "N/A");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.pedido.EstadoProceso);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.cargandoDetalle ? 48 : 49);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.detallePedido.value || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.observacion.value || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.observacionCliente.value || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.pedido.Url != null ? 65 : -1);
  }
}
var ListarPedidosComponent = class _ListarPedidosComponent {
  constructor() {
    this.listarPedidosFacade = inject(ListarPedidosFacadeService);
    this.paginatorService = inject(PaginatorFacadeService);
    this.dialog = inject(MatDialog);
    this.toast = inject(ToastrServiceLocal);
    this.buscar = new FormControl("");
    this.pageSize = 10;
    this.page = 0;
    this.pageIndex = 0;
    this.desde = 0;
    this.hasta = 10;
    this.detallePedido = new FormControl({ value: "", disabled: true });
    this.observacion = new FormControl({ value: "", disabled: true });
    this.observacionCliente = new FormControl({ value: "", disabled: true });
    this.productosPedido = [];
    this.cargandoDetalle = false;
    this.listarPedidosFacade.MostrarPedidos("0");
    this.informacionLocal = JSON.parse(localStorage.getItem("usuario_data") || "{}");
  }
  ngOnInit() {
  }
  next(event) {
    if (event.pageIndex === this.pageIndex + 1) {
      this.desde = this.desde + this.pageSize;
      this.hasta = this.hasta + this.pageSize;
    } else if (event.pageIndex === this.pageIndex - 1) {
      this.desde = this.desde - this.pageSize;
      this.hasta = this.hasta - this.pageSize;
    }
    this.pageIndex = event.pageIndex;
  }
  openDialog(template, pedido) {
    this.pedido = pedido;
    this.detallePedido.setValue(this.pedido.DetallePedido || "");
    this.observacion.setValue(this.pedido.Observacion || "");
    this.observacionCliente.setValue(this.pedido.observacionCliente || "");
    this.productosPedido = [];
    if (this.pedido?.IdPedido) {
      this.cargandoDetalle = true;
      this.listarPedidosFacade.MostrarDetallePedido(this.pedido.IdPedido, (data) => {
        this.productosPedido = data ?? [];
        this.cargandoDetalle = false;
      });
    }
    this.dialog.open(template, {
      panelClass: "app-full-bleed-dialog",
      disableClose: true
    });
  }
  // total del pedido calculado desde el detalle
  totalPedido() {
    return (this.productosPedido || []).reduce((acc, p) => acc + (+p.subtotal || 0), 0);
  }
  descargarImagen() {
    window.open(this.pedido.Url);
  }
  cancelarPedido(params) {
    import_sweetalert2.default.fire({
      title: "Confirmaci\xF3n",
      html: ` <p> \xBFEsta seguro que quiere cancelar el pedido ? </p>`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#003399",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        let body = {
          idPedido: params.IdPedido,
          idEstado: 8,
          idUsuario: this.informacionLocal?.IdUsuario
        };
        this.listarPedidosFacade.ActualizarEstadoPedido(body, (result2) => {
          if (result2.hasError === false) {
            this.toast.mensajeSuccess("Se cancelo el pedido correctamente", "");
            this.listarPedidosFacade.MostrarPedidos("0");
          }
        });
      }
    });
  }
  colorEstado(id) {
    const mapa = {
      1: "pill-apertura",
      3: "pill-preparacion",
      4: "pill-empacando",
      5: "pill-despachado",
      6: "pill-entregado",
      7: "pill-rechazado",
      8: "pill-cancelado"
    };
    return mapa[id] || "";
  }
  static {
    this.\u0275fac = function ListarPedidosComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListarPedidosComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListarPedidosComponent, selectors: [["app-listar-pedidos"]], standalone: false, decls: 27, vars: 9, consts: [["DetallePedido", ""], [1, "navigation"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "activo"], [1, "content"], [1, "titleNav"], [1, "subtitulo"], [1, "action"], ["appearance", "outline", 1, "buscador"], ["matInput", "", "type", "text", "placeholder", "Buscar pedido\u2026", "autocomplete", "off", 3, "formControl"], ["matPrefix", ""], [1, "contenedor-tabla"], [3, "data"], [1, "sin-datos"], [1, "matCardPersonalizada"], ["mat-flat-button", "", 1, "button-principal", 3, "click"], [1, "tabla-scroll"], ["role", "table", 1, "tablep"], [1, "theadp"], [1, "trp"], [1, "thp", "col-acciones"], [1, "thp", "col-numero"], [1, "thp"], [1, "thp", "col-estado"], ["role", "rowgroup", 1, "tbodyp"], ["role", "row", 1, "trp"], [3, "page", "length", "pageSize"], ["data-title", "Acciones", 1, "tdp", "col-acciones"], [1, "acciones"], ["mat-mini-fab", "", "matTooltip", "Visualizar Detalle", 1, "buttonView", 3, "click"], ["mat-mini-fab", "", "matTooltip", "Cancelar Pedido", 1, "btnDelete", 3, "click"], ["data-title", "C\xF3digo", 1, "tdp", "col-numero"], ["data-title", "Tipo Pedido", 1, "tdp", "td-fuerte"], ["data-title", "Metodo Pago", 1, "tdp"], ["data-title", "Detalle Pedido", 1, "tdp"], ["data-title", "Observaci\xF3n", 1, "tdp"], ["data-title", "Nombre Reparto", 1, "tdp"], ["data-title", "Fecha Ingreso", 1, "tdp"], ["data-title", "Estado", 1, "tdp", "col-estado"], [1, "pill", 3, "ngClass"], [1, "modal-augajo", "modal-lg"], [1, "modal-header"], [1, "modal-titulo"], ["mat-icon-button", "", "mat-dialog-close", "", "aria-label", "Cerrar", 1, "modal-cerrar"], [1, "mat-typography", "modal-body"], [1, "detalle-info"], [1, "detalle-item"], [1, "detalle-ico"], [1, "detalle-label"], [1, "detalle-valor"], [1, "detalle-bloque"], [1, "detalle-bloque-label"], [1, "prod-cargando"], [1, "detalle-bloque-texto"], [1, "acciones-modal"], ["mat-stroked-button", "", "mat-dialog-close", ""], ["diameter", "26"], [1, "tabla-detalle-prod"], [1, "t-center"], [1, "t-right"], ["colspan", "6", 1, "t-right", "total-lbl"], [1, "t-right", "total-val"], [1, "origen-pill"], [1, "td-fuerte"], [1, "t-right", "td-fuerte"], [1, "detalle-comprobante"], ["alt", "Comprobante del pedido", 1, "preview-imagen-grande", 3, "src"]], template: function ListarPedidosComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "nav", 2)(2, "ol", 3)(3, "li", 4)(4, "a", 5);
        \u0275\u0275text(5, "Inicio");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "li", 6);
        \u0275\u0275text(7, "Listado de Pedidos");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "h2");
        \u0275\u0275text(11, "Listado de Pedidos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 9);
        \u0275\u0275text(13, "Gesti\xF3n de los pedidos realizados");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 10)(15, "mat-form-field", 11)(16, "mat-label");
        \u0275\u0275text(17, "Buscar");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 12);
        \u0275\u0275elementStart(19, "mat-icon", 13);
        \u0275\u0275text(20, "search");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275conditionalCreate(21, ListarPedidosComponent_Conditional_21_Template, 2, 1, "div", 14);
        \u0275\u0275pipe(22, "async");
        \u0275\u0275conditionalCreate(23, ListarPedidosComponent_Conditional_23_Template, 5, 6, "div", 14);
        \u0275\u0275pipe(24, "async");
        \u0275\u0275template(25, ListarPedidosComponent_ng_template_25_Template, 69, 9, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c02));
        \u0275\u0275advance(14);
        \u0275\u0275property("formControl", ctx.buscar);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(\u0275\u0275pipeBind1(22, 4, ctx.listarPedidosFacade.responseCargando$) ? 21 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!\u0275\u0275pipeBind1(24, 6, ctx.listarPedidosFacade.responseCargando$) ? 23 : -1);
      }
    }, dependencies: [NgClass, RouterLink, MatFormField, MatLabel, MatPrefix, MatIcon, MatInput, MatButton, MatMiniFabButton, MatIconButton, MatCard, MatCardContent, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatPaginator, MatProgressSpinner, LoadingComponent, MatDialogClose, MatDialogContent, MatTooltip, AsyncPipe, SlicePipe, CurrencyPipe, DatePipe, SearchPipe, TruncatePipePipe], styles: ['@charset "UTF-8";\n\n\n.imagePedido[_ngcontent-%COMP%] {\n  max-width: 240px;\n  max-height: 240px;\n  width: auto;\n  height: auto;\n  object-fit: contain;\n  border-radius: 12px;\n  border: 1px solid var(--color-border);\n}\n.pill-apertura[_ngcontent-%COMP%] {\n  background-color: var(--est-apertura);\n  color: white;\n}\n.pill-preparacion[_ngcontent-%COMP%] {\n  background-color: var(--est-preparacion);\n  color: white;\n}\n.pill-empacando[_ngcontent-%COMP%] {\n  background-color: var(--est-empacando);\n  color: white;\n}\n.pill-despachado[_ngcontent-%COMP%] {\n  background-color: var(--est-despachado);\n  color: white;\n}\n.pill-entregado[_ngcontent-%COMP%] {\n  background-color: var(--est-entregado);\n  color: white;\n}\n.pill-rechazado[_ngcontent-%COMP%] {\n  background-color: var(--est-rechazado);\n  color: white;\n}\n.pill-cancelado[_ngcontent-%COMP%] {\n  background-color: var(--est-cancelado);\n  color: white;\n}\n.detalle-info[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.detalle-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px;\n  background: #FAFAF8;\n  border: 1px solid var(--color-border);\n  border-radius: 12px;\n}\n.detalle-item[_ngcontent-%COMP%]   .detalle-ico[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: var(--color-primary);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.detalle-item[_ngcontent-%COMP%]   .detalle-ico[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.detalle-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: var(--color-text-secondary);\n  margin-bottom: 3px;\n  line-height: 1.2;\n}\n.detalle-valor[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--color-text);\n  line-height: 1.3;\n}\n.detalle-comprobante[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.detalle-comprobante[_ngcontent-%COMP%]   .preview-imagen-grande[_ngcontent-%COMP%] {\n  max-width: 240px;\n  max-height: 240px;\n  width: auto;\n  height: auto;\n  object-fit: contain;\n  border-radius: 12px;\n  border: 1px solid var(--color-border);\n  cursor: pointer;\n  transition: transform 0.16s;\n}\n.detalle-comprobante[_ngcontent-%COMP%]   .preview-imagen-grande[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n}\n.detalle-bloque[_ngcontent-%COMP%] {\n  margin-top: 18px;\n}\n.detalle-bloque-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--color-text-muted, #9A9A9A);\n  margin-bottom: 8px;\n}\n.detalle-bloque-texto[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.6;\n  color: var(--color-text);\n  background: #FAFAF8;\n  border: 1px solid var(--color-border);\n  border-left: 3px solid var(--color-accent);\n  border-radius: 8px;\n  padding: 12px 16px;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n@media (max-width: 600px) {\n  .detalle-info[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.prod-cargando[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 4px;\n  color: var(--color-text-secondary);\n  font-size: 13px;\n}\n.tabla-detalle-prod[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  margin-top: 6px;\n}\n.tabla-detalle-prod[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--color-text-secondary);\n  text-align: left;\n  padding: 8px 10px;\n  white-space: nowrap;\n  border-bottom: 1.5px solid var(--color-border);\n}\n.tabla-detalle-prod[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 10px;\n  font-size: 13px;\n  color: var(--color-text-primary);\n  border-bottom: 1px solid var(--color-border);\n  vertical-align: middle;\n}\n.tabla-detalle-prod[_ngcontent-%COMP%]   .td-fuerte[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-primary);\n}\n.tabla-detalle-prod[_ngcontent-%COMP%]   .t-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.tabla-detalle-prod[_ngcontent-%COMP%]   .t-right[_ngcontent-%COMP%] {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.tabla-detalle-prod[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 10px;\n  font-size: 13px;\n}\n.tabla-detalle-prod[_ngcontent-%COMP%]   .total-lbl[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-secondary);\n}\n.tabla-detalle-prod[_ngcontent-%COMP%]   .total-val[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--color-accent);\n  font-variant-numeric: tabular-nums;\n}\n.origen-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 999px;\n  white-space: nowrap;\n}\n.origen-pill.origen-bodega[_ngcontent-%COMP%] {\n  background: rgba(26, 26, 26, 0.08);\n  color: var(--color-primary);\n}\n.origen-pill.origen-consigna[_ngcontent-%COMP%] {\n  background: rgba(224, 26, 26, 0.1);\n  color: var(--color-accent);\n}\n/*# sourceMappingURL=listar-pedidos.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListarPedidosComponent, [{
    type: Component,
    args: [{ selector: "app-listar-pedidos", standalone: false, template: `<div class="navigation">\r
  <nav aria-label="breadcrumb">\r
    <ol class="breadcrumb">\r
      <li class="breadcrumb-item"><a [routerLink]="['/dashboard']">Inicio</a></li>\r
      <li class="breadcrumb-item activo">Listado de Pedidos</li>\r
    </ol>\r
  </nav>\r
\r
  <div class="content">\r
    <div class="titleNav">\r
      <h2>Listado de Pedidos</h2>\r
      <div class="subtitulo">Gesti\xF3n de los pedidos realizados</div>\r
    </div>\r
\r
    <div class="action">\r
      <mat-form-field appearance="outline" class="buscador">\r
        <mat-label>Buscar</mat-label>\r
        <input matInput type="text" [formControl]="buscar" placeholder="Buscar pedido\u2026" autocomplete="off">\r
        <mat-icon matPrefix>search</mat-icon>\r
      </mat-form-field>\r
    </div>\r
  </div>\r
</div>\r
\r
@if ((listarPedidosFacade.responseCargando$ | async)) {\r
<div class="contenedor-tabla">\r
  <app-loading [data]="4"></app-loading>\r
</div>\r
}\r
\r
@if (!(listarPedidosFacade.responseCargando$ | async)) {\r
<div class="contenedor-tabla">\r
\r
  @if ((listarPedidosFacade.responsePedidos$ | async).length === 0) {\r
  <div class="sin-datos">\r
    <mat-icon>credit_card_off</mat-icon>\r
    <p>No hay peidos para listar</p>\r
    <button class="button-principal" mat-flat-button (click)="openDialog(modal)">\r
      <mat-icon>add</mat-icon>\r
      Agregar el primero\r
    </button>\r
  </div>\r
  }\r
\r
  @if ((listarPedidosFacade.responsePedidos$ | async).length > 0) {\r
  <mat-card class="matCardPersonalizada">\r
    <mat-card-content>\r
      <div class="tabla-scroll">\r
        <table class="tablep" role="table">\r
          <thead class="theadp">\r
            <tr class="trp">\r
              <th class="thp col-acciones">Acciones</th>\r
              <th class="thp col-numero">Codigo</th>\r
              <th class="thp">Tipo Pedido</th>\r
              <th class="thp">Metodo Pago</th>\r
              <th class="thp">Detalle Pedido</th>\r
              <th class="thp">Observaci\xF3n</th>\r
              <th class="thp">Nombre Reparto</th>\r
              <th class="thp">Fecha Ingreso</th>\r
              <th class="thp col-estado">Estado</th>\r
            </tr>\r
          </thead>\r
          <tbody role="rowgroup" class="tbodyp">\r
            @for (pedido of (listarPedidosFacade.responsePedidos$ | async) | search: this.buscar?.value:\r
            ['IdPedido','DetallePedido'] | slice: desde : hasta; track pedido) {\r
            <tr class="trp" role="row">\r
              <td data-title="Acciones" class="tdp col-acciones">\r
                <div class="acciones">\r
                   <button class="buttonView" mat-mini-fab (click)="openDialog(DetallePedido, pedido)" matTooltip="Visualizar Detalle">\r
                      <mat-icon>visibility</mat-icon>\r
                    </button>\r
                    <button mat-mini-fab class="btnDelete" (click)="cancelarPedido(pedido)" matTooltip="Cancelar Pedido">\r
                      <mat-icon>remove_shopping_cart</mat-icon>\r
                    </button>\r
                </div>\r
              </td>\r
              <td data-title="C\xF3digo" class="tdp col-numero">{{ pedido.IdPedido }}</td>\r
              <td data-title="Tipo Pedido" class="tdp td-fuerte">{{ pedido.TipoPedido }}</td>\r
              <td data-title="Metodo Pago" class="tdp ">{{ pedido.MetodoPago }}</td>\r
              <td data-title="Detalle Pedido" class="tdp ">{{pedido.DetallePedido | truncatePipe:100}}</td>\r
              <td data-title="Observaci\xF3n" class="tdp ">{{ pedido.Observacion }}</td>\r
              <td data-title="Nombre Reparto" class="tdp ">{{ pedido.NombreReparto }}</td>\r
              <td data-title="Fecha Ingreso" class="tdp ">{{pedido.FechaInsercion | date:'yyyy-MM-dd'}}</td>\r
              <td data-title="Estado" class="tdp col-estado">\r
                <span class="pill" [ngClass]="colorEstado(pedido.IdEstado)">\r
                  {{ pedido.EstadoProceso }}\r
                </span>\r
              </td>\r
            </tr>\r
            }\r
          </tbody>\r
        </table>\r
      </div>\r
\r
      <mat-paginator [length]="(listarPedidosFacade.responsePedidos$ | async).length" [pageSize]="pageSize"\r
        (page)="next($event)">\r
      </mat-paginator>\r
    </mat-card-content>\r
  </mat-card>\r
  }\r
\r
</div>\r
}\r
\r
<ng-template #DetallePedido>\r
  <div class="modal-augajo modal-lg">\r
    <div class="modal-header">\r
      <span class="modal-titulo">Detalle del Pedido</span>\r
      <button mat-icon-button mat-dialog-close class="modal-cerrar" aria-label="Cerrar">\r
        <mat-icon>close</mat-icon>\r
      </button>\r
    </div>\r
\r
    <mat-dialog-content class="mat-typography modal-body">\r
\r
      <!-- ===== Resumen: tarjetas de info ===== -->\r
      <div class="detalle-info">\r
        <div class="detalle-item">\r
          <span class="detalle-ico"><mat-icon>local_shipping</mat-icon></span>\r
          <div>\r
            <span class="detalle-label">Tipo Pedido</span>\r
            <span class="detalle-valor">{{ pedido.TipoPedido }}</span>\r
          </div>\r
        </div>\r
\r
        <div class="detalle-item">\r
          <span class="detalle-ico"><mat-icon>paid</mat-icon></span>\r
          <div>\r
            <span class="detalle-label">M\xE9todo Pago</span>\r
            <span class="detalle-valor">{{ pedido.MetodoPago }}</span>\r
          </div>\r
        </div>\r
\r
        <div class="detalle-item">\r
          <span class="detalle-ico"><mat-icon>two_wheeler</mat-icon></span>\r
          <div>\r
            <span class="detalle-label">Nombre Reparto</span>\r
            <span class="detalle-valor">{{ pedido.NombreReparto || 'N/A' }}</span>\r
          </div>\r
        </div>\r
\r
        <div class="detalle-item">\r
          <span class="detalle-ico"><mat-icon>filter_list</mat-icon></span>\r
          <div>\r
            <span class="detalle-label">Estado Proceso</span>\r
            <span class="detalle-valor">{{ pedido.EstadoProceso }}</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- ===== Productos del pedido (solo lectura) ===== -->\r
      <div class="detalle-bloque">\r
        <span class="detalle-bloque-label">Productos del pedido</span>\r
\r
        @if (cargandoDetalle) {\r
          <div class="prod-cargando">\r
            <mat-spinner diameter="26"></mat-spinner>\r
            <span>Cargando productos\u2026</span>\r
          </div>\r
        } @else {\r
          @if (productosPedido.length === 0) {\r
            <p class="detalle-bloque-texto">Este pedido no tiene productos registrados.</p>\r
          } @else {\r
            <div class="tabla-scroll">\r
              <table class="tabla-detalle-prod">\r
                <thead>\r
                  <tr>\r
                    <th>Origen</th>\r
                    <th>Producto</th>\r
                    <th>Almac\xE9n</th>\r
                    <th class="t-center">Lote</th>\r
                    <th class="t-right">Cant.</th>\r
                    <th class="t-right">Precio</th>\r
                    <th class="t-right">Subtotal</th>\r
                  </tr>\r
                </thead>\r
                <tbody>\r
                  @for (p of productosPedido; track p.id_detalle) {\r
                  <tr>\r
                    <td>\r
                      <span class="origen-pill"\r
                        [class.origen-bodega]="!p.es_consigna"\r
                        [class.origen-consigna]="p.es_consigna">\r
                        {{ p.es_consigna ? 'Consigna' : 'Bodega' }}\r
                      </span>\r
                    </td>\r
                    <td class="td-fuerte">{{ p.sku }} \xB7 {{ p.producto || p.nombre }}</td>\r
                    <td>{{ p.almacen }}</td>\r
                    <td class="t-center">{{ p.numero_lote || '\u2014' }}</td>\r
                    <td class="t-right">{{ p.cantidad }}</td>\r
                    <td class="t-right">{{ p.precio_venta | currency:'HNL':'L. ':'1.2-2' }}</td>\r
                    <td class="t-right td-fuerte">{{ p.subtotal | currency:'HNL':'L. ':'1.2-2' }}</td>\r
                  </tr>\r
                  }\r
                </tbody>\r
                <tfoot>\r
                  <tr>\r
                    <td colspan="6" class="t-right total-lbl">Total</td>\r
                    <td class="t-right total-val">{{ totalPedido() | currency:'HNL':'L. ':'1.2-2' }}</td>\r
                  </tr>\r
                </tfoot>\r
              </table>\r
            </div>\r
          }\r
        }\r
      </div>\r
\r
      <!-- ===== Contenido de solo lectura ===== -->\r
      <div class="detalle-bloque">\r
        <span class="detalle-bloque-label">Detalle del pedido</span>\r
        <p class="detalle-bloque-texto">{{ detallePedido.value || '\u2014' }}</p>\r
      </div>\r
\r
      <div class="detalle-bloque">\r
        <span class="detalle-bloque-label">Observaci\xF3n</span>\r
        <p class="detalle-bloque-texto">{{ observacion.value || '\u2014' }}</p>\r
      </div>\r
\r
      <div class="detalle-bloque">\r
        <span class="detalle-bloque-label">Observaci\xF3n Cliente</span>\r
        <p class="detalle-bloque-texto">{{ observacionCliente.value || '\u2014' }}</p>\r
      </div>\r
\r
      <!-- ===== Comprobante ===== -->\r
      @if (pedido.Url != null) {\r
        <div class="detalle-bloque">\r
          <span class="detalle-bloque-label">Comprobante</span>\r
          <div class="detalle-comprobante">\r
            <img [src]="pedido.Url" class="preview-imagen-grande" alt="Comprobante del pedido">\r
            <button mat-flat-button class="button-principal" (click)="descargarImagen()">\r
              <mat-icon>file_download</mat-icon> Descargar\r
            </button>\r
          </div>\r
        </div>\r
      }\r
\r
    </mat-dialog-content>\r
\r
    <div class="acciones-modal">\r
      <button mat-stroked-button mat-dialog-close>Salir</button>\r
    </div>\r
  </div>\r
</ng-template>`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/clientes/listar-pedidos/listar-pedidos.component.scss */\n.imagePedido {\n  max-width: 240px;\n  max-height: 240px;\n  width: auto;\n  height: auto;\n  object-fit: contain;\n  border-radius: 12px;\n  border: 1px solid var(--color-border);\n}\n.pill-apertura {\n  background-color: var(--est-apertura);\n  color: white;\n}\n.pill-preparacion {\n  background-color: var(--est-preparacion);\n  color: white;\n}\n.pill-empacando {\n  background-color: var(--est-empacando);\n  color: white;\n}\n.pill-despachado {\n  background-color: var(--est-despachado);\n  color: white;\n}\n.pill-entregado {\n  background-color: var(--est-entregado);\n  color: white;\n}\n.pill-rechazado {\n  background-color: var(--est-rechazado);\n  color: white;\n}\n.pill-cancelado {\n  background-color: var(--est-cancelado);\n  color: white;\n}\n.detalle-info {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n  margin-bottom: 8px;\n}\n.detalle-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px;\n  background: #FAFAF8;\n  border: 1px solid var(--color-border);\n  border-radius: 12px;\n}\n.detalle-item .detalle-ico {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: var(--color-primary);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.detalle-item .detalle-ico mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.detalle-label {\n  display: block;\n  font-size: 12px;\n  color: var(--color-text-secondary);\n  margin-bottom: 3px;\n  line-height: 1.2;\n}\n.detalle-valor {\n  display: block;\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--color-text);\n  line-height: 1.3;\n}\n.detalle-comprobante {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.detalle-comprobante .preview-imagen-grande {\n  max-width: 240px;\n  max-height: 240px;\n  width: auto;\n  height: auto;\n  object-fit: contain;\n  border-radius: 12px;\n  border: 1px solid var(--color-border);\n  cursor: pointer;\n  transition: transform 0.16s;\n}\n.detalle-comprobante .preview-imagen-grande:hover {\n  transform: scale(1.02);\n}\n.detalle-bloque {\n  margin-top: 18px;\n}\n.detalle-bloque-label {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--color-text-muted, #9A9A9A);\n  margin-bottom: 8px;\n}\n.detalle-bloque-texto {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.6;\n  color: var(--color-text);\n  background: #FAFAF8;\n  border: 1px solid var(--color-border);\n  border-left: 3px solid var(--color-accent);\n  border-radius: 8px;\n  padding: 12px 16px;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n@media (max-width: 600px) {\n  .detalle-info {\n    grid-template-columns: 1fr;\n  }\n}\n.prod-cargando {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 4px;\n  color: var(--color-text-secondary);\n  font-size: 13px;\n}\n.tabla-detalle-prod {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  margin-top: 6px;\n}\n.tabla-detalle-prod thead th {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--color-text-secondary);\n  text-align: left;\n  padding: 8px 10px;\n  white-space: nowrap;\n  border-bottom: 1.5px solid var(--color-border);\n}\n.tabla-detalle-prod tbody td {\n  padding: 9px 10px;\n  font-size: 13px;\n  color: var(--color-text-primary);\n  border-bottom: 1px solid var(--color-border);\n  vertical-align: middle;\n}\n.tabla-detalle-prod .td-fuerte {\n  font-weight: 600;\n  color: var(--color-primary);\n}\n.tabla-detalle-prod .t-center {\n  text-align: center;\n}\n.tabla-detalle-prod .t-right {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.tabla-detalle-prod tfoot td {\n  padding: 11px 10px;\n  font-size: 13px;\n}\n.tabla-detalle-prod .total-lbl {\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-secondary);\n}\n.tabla-detalle-prod .total-val {\n  font-family: var(--font-serif);\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--color-accent);\n  font-variant-numeric: tabular-nums;\n}\n.origen-pill {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 999px;\n  white-space: nowrap;\n}\n.origen-pill.origen-bodega {\n  background: rgba(26, 26, 26, 0.08);\n  color: var(--color-primary);\n}\n.origen-pill.origen-consigna {\n  background: rgba(224, 26, 26, 0.1);\n  color: var(--color-accent);\n}\n/*# sourceMappingURL=listar-pedidos.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListarPedidosComponent, { className: "ListarPedidosComponent", filePath: "src/app/modules/clientes/listar-pedidos/listar-pedidos.component.ts", lineNumber: 16 });
})();

// node_modules/@angular/cdk/fesm2022/drag-drop.mjs
function deepCloneNode(node) {
  const clone = node.cloneNode(true);
  const descendantsWithId = clone.querySelectorAll("[id]");
  const nodeName = node.nodeName.toLowerCase();
  clone.removeAttribute("id");
  for (let i = 0; i < descendantsWithId.length; i++) {
    descendantsWithId[i].removeAttribute("id");
  }
  if (nodeName === "canvas") {
    transferCanvasData(node, clone);
  } else if (nodeName === "input" || nodeName === "select" || nodeName === "textarea") {
    transferInputData(node, clone);
  }
  transferData("canvas", node, clone, transferCanvasData);
  transferData("input, textarea, select", node, clone, transferInputData);
  return clone;
}
function transferData(selector, node, clone, callback) {
  const descendantElements = node.querySelectorAll(selector);
  if (descendantElements.length) {
    const cloneElements = clone.querySelectorAll(selector);
    for (let i = 0; i < descendantElements.length; i++) {
      callback(descendantElements[i], cloneElements[i]);
    }
  }
}
var cloneUniqueId = 0;
function transferInputData(source, clone) {
  if (clone.type !== "file") {
    clone.value = source.value;
  }
  if (clone.type === "radio" && clone.name) {
    clone.name = `mat-clone-${clone.name}-${cloneUniqueId++}`;
  }
}
function transferCanvasData(source, clone) {
  const context = clone.getContext("2d");
  if (context) {
    try {
      context.drawImage(source, 0, 0);
    } catch (e) {
    }
  }
}
function getMutableClientRect(element) {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    width: rect.width,
    height: rect.height,
    x: rect.x,
    y: rect.y
  };
}
function isInsideClientRect(clientRect, x, y) {
  const {
    top,
    bottom,
    left,
    right
  } = clientRect;
  return y >= top && y <= bottom && x >= left && x <= right;
}
function isOverflowingParent(parentRect, childRect) {
  const isLeftOverflowing = childRect.left < parentRect.left;
  const isRightOverflowing = childRect.left + childRect.width > parentRect.right;
  const isTopOverflowing = childRect.top < parentRect.top;
  const isBottomOverflowing = childRect.top + childRect.height > parentRect.bottom;
  return isLeftOverflowing || isRightOverflowing || isTopOverflowing || isBottomOverflowing;
}
function adjustDomRect(domRect, top, left) {
  domRect.top += top;
  domRect.bottom = domRect.top + domRect.height;
  domRect.left += left;
  domRect.right = domRect.left + domRect.width;
}
function isPointerNearDomRect(rect, threshold, pointerX, pointerY) {
  const {
    top,
    right,
    bottom,
    left,
    width,
    height
  } = rect;
  const xThreshold = width * threshold;
  const yThreshold = height * threshold;
  return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
}
var ParentPositionTracker = class {
  _document;
  positions = /* @__PURE__ */ new Map();
  constructor(_document) {
    this._document = _document;
  }
  clear() {
    this.positions.clear();
  }
  cache(elements) {
    this.clear();
    this.positions.set(this._document, {
      scrollPosition: this.getViewportScrollPosition()
    });
    elements.forEach((element) => {
      this.positions.set(element, {
        scrollPosition: {
          top: element.scrollTop,
          left: element.scrollLeft
        },
        clientRect: getMutableClientRect(element)
      });
    });
  }
  handleScroll(event) {
    const target = _getEventTarget(event);
    const cachedPosition = this.positions.get(target);
    if (!cachedPosition) {
      return null;
    }
    const scrollPosition = cachedPosition.scrollPosition;
    let newTop;
    let newLeft;
    if (target === this._document) {
      const viewportScrollPosition = this.getViewportScrollPosition();
      newTop = viewportScrollPosition.top;
      newLeft = viewportScrollPosition.left;
    } else {
      newTop = target.scrollTop;
      newLeft = target.scrollLeft;
    }
    const topDifference = scrollPosition.top - newTop;
    const leftDifference = scrollPosition.left - newLeft;
    this.positions.forEach((position, node) => {
      if (position.clientRect && target !== node && target.contains(node)) {
        adjustDomRect(position.clientRect, topDifference, leftDifference);
      }
    });
    scrollPosition.top = newTop;
    scrollPosition.left = newLeft;
    return {
      top: topDifference,
      left: leftDifference
    };
  }
  getViewportScrollPosition() {
    return {
      top: window.scrollY,
      left: window.scrollX
    };
  }
};
function getRootNode(viewRef, _document) {
  const rootNodes = viewRef.rootNodes;
  if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
    return rootNodes[0];
  }
  const wrapper = _document.createElement("div");
  rootNodes.forEach((node) => wrapper.appendChild(node));
  return wrapper;
}
function extendStyles(dest, source, importantProperties2) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      const value = source[key];
      if (value) {
        dest.setProperty(key, value, importantProperties2?.has(key) ? "important" : "");
      } else {
        dest.removeProperty(key);
      }
    }
  }
  return dest;
}
function toggleNativeDragInteractions(element, enable) {
  const userSelect = enable ? "" : "none";
  extendStyles(element.style, {
    "touch-action": enable ? "" : "none",
    "-webkit-user-drag": enable ? "" : "none",
    "-webkit-tap-highlight-color": enable ? "" : "transparent",
    "user-select": userSelect,
    "-ms-user-select": userSelect,
    "-webkit-user-select": userSelect,
    "-moz-user-select": userSelect
  });
}
function toggleVisibility(element, enable, importantProperties2) {
  extendStyles(element.style, {
    position: enable ? "" : "fixed",
    top: enable ? "" : "0",
    opacity: enable ? "" : "0",
    left: enable ? "" : "-999em"
  }, importantProperties2);
}
function combineTransforms(transform, initialTransform) {
  return initialTransform && initialTransform != "none" ? transform + " " + initialTransform : transform;
}
function matchElementSize(target, sourceRect) {
  target.style.width = `${sourceRect.width}px`;
  target.style.height = `${sourceRect.height}px`;
  target.style.transform = getTransform(sourceRect.left, sourceRect.top);
}
function getTransform(x, y) {
  return `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
}
var capturingEventOptions = {
  capture: true
};
var activeCapturingEventOptions$1 = {
  passive: false,
  capture: true
};
var _ResetsLoader = class __ResetsLoader {
  static \u0275fac = function _ResetsLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __ResetsLoader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: __ResetsLoader,
    selectors: [["ng-component"]],
    hostAttrs: ["cdk-drag-resets-container", ""],
    decls: 0,
    vars: 0,
    template: function _ResetsLoader_Template(rf, ctx) {
    },
    styles: ["@layer cdk-resets {\n  .cdk-drag-preview {\n    background: none;\n    border: none;\n    padding: 0;\n    color: inherit;\n    inset: auto;\n  }\n}\n.cdk-drag-placeholder *,\n.cdk-drag-preview * {\n  pointer-events: none !important;\n}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_ResetsLoader, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "cdk-drag-resets-container": ""
      },
      styles: ["@layer cdk-resets {\n  .cdk-drag-preview {\n    background: none;\n    border: none;\n    padding: 0;\n    color: inherit;\n    inset: auto;\n  }\n}\n.cdk-drag-placeholder *,\n.cdk-drag-preview * {\n  pointer-events: none !important;\n}\n"]
    }]
  }], null, null);
})();
var DragDropRegistry = class _DragDropRegistry {
  _ngZone = inject(NgZone);
  _document = inject(DOCUMENT);
  _styleLoader = inject(_CdkPrivateStyleLoader);
  _renderer = inject(RendererFactory2).createRenderer(null, null);
  _cleanupDocumentTouchmove;
  _scroll = new Subject();
  _dropInstances = /* @__PURE__ */ new Set();
  _dragInstances = /* @__PURE__ */ new Set();
  _activeDragInstances = signal([], ...ngDevMode ? [{
    debugName: "_activeDragInstances"
  }] : []);
  _globalListeners;
  _draggingPredicate = (item) => item.isDragging();
  _domNodesToDirectives = null;
  pointerMove = new Subject();
  pointerUp = new Subject();
  constructor() {
  }
  registerDropContainer(drop) {
    if (!this._dropInstances.has(drop)) {
      this._dropInstances.add(drop);
    }
  }
  registerDragItem(drag) {
    this._dragInstances.add(drag);
    if (this._dragInstances.size === 1) {
      this._ngZone.runOutsideAngular(() => {
        this._cleanupDocumentTouchmove?.();
        this._cleanupDocumentTouchmove = this._renderer.listen(this._document, "touchmove", this._persistentTouchmoveListener, activeCapturingEventOptions$1);
      });
    }
  }
  removeDropContainer(drop) {
    this._dropInstances.delete(drop);
  }
  removeDragItem(drag) {
    this._dragInstances.delete(drag);
    this.stopDragging(drag);
    if (this._dragInstances.size === 0) {
      this._cleanupDocumentTouchmove?.();
    }
  }
  startDragging(drag, event) {
    if (this._activeDragInstances().indexOf(drag) > -1) {
      return;
    }
    this._styleLoader.load(_ResetsLoader);
    this._activeDragInstances.update((instances) => [...instances, drag]);
    if (this._activeDragInstances().length === 1) {
      const isTouchEvent2 = event.type.startsWith("touch");
      const endEventHandler = (e) => this.pointerUp.next(e);
      const toBind = [["scroll", (e) => this._scroll.next(e), capturingEventOptions], ["selectstart", this._preventDefaultWhileDragging, activeCapturingEventOptions$1]];
      if (isTouchEvent2) {
        toBind.push(["touchend", endEventHandler, capturingEventOptions], ["touchcancel", endEventHandler, capturingEventOptions]);
      } else {
        toBind.push(["mouseup", endEventHandler, capturingEventOptions]);
      }
      if (!isTouchEvent2) {
        toBind.push(["mousemove", (e) => this.pointerMove.next(e), activeCapturingEventOptions$1]);
      }
      this._ngZone.runOutsideAngular(() => {
        this._globalListeners = toBind.map(([name, handler, options]) => this._renderer.listen(this._document, name, handler, options));
      });
    }
  }
  stopDragging(drag) {
    this._activeDragInstances.update((instances) => {
      const index = instances.indexOf(drag);
      if (index > -1) {
        instances.splice(index, 1);
        return [...instances];
      }
      return instances;
    });
    if (this._activeDragInstances().length === 0) {
      this._clearGlobalListeners();
    }
  }
  isDragging(drag) {
    return this._activeDragInstances().indexOf(drag) > -1;
  }
  scrolled(shadowRoot) {
    const streams = [this._scroll];
    if (shadowRoot && shadowRoot !== this._document) {
      streams.push(new Observable((observer) => {
        return this._ngZone.runOutsideAngular(() => {
          const cleanup = this._renderer.listen(shadowRoot, "scroll", (event) => {
            if (this._activeDragInstances().length) {
              observer.next(event);
            }
          }, capturingEventOptions);
          return () => {
            cleanup();
          };
        });
      }));
    }
    return merge(...streams);
  }
  registerDirectiveNode(node, dragRef) {
    this._domNodesToDirectives ??= /* @__PURE__ */ new WeakMap();
    this._domNodesToDirectives.set(node, dragRef);
  }
  removeDirectiveNode(node) {
    this._domNodesToDirectives?.delete(node);
  }
  getDragDirectiveForNode(node) {
    return this._domNodesToDirectives?.get(node) || null;
  }
  ngOnDestroy() {
    this._dragInstances.forEach((instance) => this.removeDragItem(instance));
    this._dropInstances.forEach((instance) => this.removeDropContainer(instance));
    this._domNodesToDirectives = null;
    this._clearGlobalListeners();
    this.pointerMove.complete();
    this.pointerUp.complete();
  }
  _preventDefaultWhileDragging = (event) => {
    if (this._activeDragInstances().length > 0) {
      event.preventDefault();
    }
  };
  _persistentTouchmoveListener = (event) => {
    if (this._activeDragInstances().length > 0) {
      if (this._activeDragInstances().some(this._draggingPredicate)) {
        event.preventDefault();
      }
      this.pointerMove.next(event);
    }
  };
  _clearGlobalListeners() {
    this._globalListeners?.forEach((cleanup) => cleanup());
    this._globalListeners = void 0;
  }
  static \u0275fac = function DragDropRegistry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragDropRegistry)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DragDropRegistry,
    factory: _DragDropRegistry.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDropRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function parseCssTimeUnitsToMs(value) {
  const multiplier = value.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3;
  return parseFloat(value) * multiplier;
}
function getTransformTransitionDurationInMs(element) {
  const computedStyle = getComputedStyle(element);
  const transitionedProperties = parseCssPropertyValue(computedStyle, "transition-property");
  const property = transitionedProperties.find((prop) => prop === "transform" || prop === "all");
  if (!property) {
    return 0;
  }
  const propertyIndex = transitionedProperties.indexOf(property);
  const rawDurations = parseCssPropertyValue(computedStyle, "transition-duration");
  const rawDelays = parseCssPropertyValue(computedStyle, "transition-delay");
  return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
function parseCssPropertyValue(computedStyle, name) {
  const value = computedStyle.getPropertyValue(name);
  return value.split(",").map((part) => part.trim());
}
var importantProperties = /* @__PURE__ */ new Set(["position"]);
var PreviewRef = class {
  _document;
  _rootElement;
  _direction;
  _initialDomRect;
  _previewTemplate;
  _previewClass;
  _pickupPositionOnPage;
  _initialTransform;
  _zIndex;
  _renderer;
  _previewEmbeddedView = null;
  _preview;
  get element() {
    return this._preview;
  }
  constructor(_document, _rootElement, _direction, _initialDomRect, _previewTemplate, _previewClass, _pickupPositionOnPage, _initialTransform, _zIndex, _renderer) {
    this._document = _document;
    this._rootElement = _rootElement;
    this._direction = _direction;
    this._initialDomRect = _initialDomRect;
    this._previewTemplate = _previewTemplate;
    this._previewClass = _previewClass;
    this._pickupPositionOnPage = _pickupPositionOnPage;
    this._initialTransform = _initialTransform;
    this._zIndex = _zIndex;
    this._renderer = _renderer;
  }
  attach(parent) {
    this._preview = this._createPreview();
    parent.appendChild(this._preview);
    if (supportsPopover(this._preview)) {
      this._preview["showPopover"]();
    }
  }
  destroy() {
    this._preview.remove();
    this._previewEmbeddedView?.destroy();
    this._preview = this._previewEmbeddedView = null;
  }
  setTransform(value) {
    this._preview.style.transform = value;
  }
  getBoundingClientRect() {
    return this._preview.getBoundingClientRect();
  }
  addClass(className) {
    this._preview.classList.add(className);
  }
  getTransitionDuration() {
    return getTransformTransitionDurationInMs(this._preview);
  }
  addEventListener(name, handler) {
    return this._renderer.listen(this._preview, name, handler);
  }
  _createPreview() {
    const previewConfig = this._previewTemplate;
    const previewClass = this._previewClass;
    const previewTemplate = previewConfig ? previewConfig.template : null;
    let preview;
    if (previewTemplate && previewConfig) {
      const rootRect = previewConfig.matchSize ? this._initialDomRect : null;
      const viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
      viewRef.detectChanges();
      preview = getRootNode(viewRef, this._document);
      this._previewEmbeddedView = viewRef;
      if (previewConfig.matchSize) {
        matchElementSize(preview, rootRect);
      } else {
        preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
      }
    } else {
      preview = deepCloneNode(this._rootElement);
      matchElementSize(preview, this._initialDomRect);
      if (this._initialTransform) {
        preview.style.transform = this._initialTransform;
      }
    }
    extendStyles(preview.style, {
      "pointer-events": "none",
      "margin": supportsPopover(preview) ? "0 auto 0 0" : "0",
      "position": "fixed",
      "top": "0",
      "left": "0",
      "z-index": this._zIndex + ""
    }, importantProperties);
    toggleNativeDragInteractions(preview, false);
    preview.classList.add("cdk-drag-preview");
    preview.setAttribute("popover", "manual");
    preview.setAttribute("dir", this._direction);
    if (previewClass) {
      if (Array.isArray(previewClass)) {
        previewClass.forEach((className) => preview.classList.add(className));
      } else {
        preview.classList.add(previewClass);
      }
    }
    return preview;
  }
};
function supportsPopover(element) {
  return "showPopover" in element;
}
var passiveEventListenerOptions = {
  passive: true
};
var activeEventListenerOptions = {
  passive: false
};
var activeCapturingEventOptions = {
  passive: false,
  capture: true
};
var MOUSE_EVENT_IGNORE_TIME = 800;
var PLACEHOLDER_CLASS = "cdk-drag-placeholder";
var dragImportantProperties = /* @__PURE__ */ new Set(["position"]);
function createDragRef(injector, element, config = {
  dragStartThreshold: 5,
  pointerDirectionChangeThreshold: 5
}) {
  const renderer = injector.get(Renderer2, null, {
    optional: true
  }) || injector.get(RendererFactory2).createRenderer(null, null);
  return new DragRef(element, config, injector.get(DOCUMENT), injector.get(NgZone), injector.get(ViewportRuler), injector.get(DragDropRegistry), renderer);
}
var DragRef = class {
  _config;
  _document;
  _ngZone;
  _viewportRuler;
  _dragDropRegistry;
  _renderer;
  _rootElementCleanups;
  _cleanupShadowRootSelectStart;
  _preview = null;
  _previewContainer;
  _placeholderRef = null;
  _placeholder;
  _pickupPositionInElement;
  _pickupPositionOnPage;
  _marker;
  _anchor = null;
  _passiveTransform = {
    x: 0,
    y: 0
  };
  _activeTransform = {
    x: 0,
    y: 0
  };
  _initialTransform;
  _hasStartedDragging = signal(false, ...ngDevMode ? [{
    debugName: "_hasStartedDragging"
  }] : []);
  _hasMoved = false;
  _initialContainer;
  _initialIndex;
  _parentPositions;
  _moveEvents = new Subject();
  _pointerDirectionDelta;
  _pointerPositionAtLastDirectionChange;
  _lastKnownPointerPosition;
  _rootElement;
  _ownerSVGElement = null;
  _rootElementTapHighlight;
  _pointerMoveSubscription = Subscription.EMPTY;
  _pointerUpSubscription = Subscription.EMPTY;
  _scrollSubscription = Subscription.EMPTY;
  _resizeSubscription = Subscription.EMPTY;
  _lastTouchEventTime;
  _dragStartTime;
  _boundaryElement = null;
  _nativeInteractionsEnabled = true;
  _initialDomRect;
  _previewRect;
  _boundaryRect;
  _previewTemplate;
  _placeholderTemplate;
  _handles = [];
  _disabledHandles = /* @__PURE__ */ new Set();
  _dropContainer;
  _direction = "ltr";
  _parentDragRef = null;
  _cachedShadowRoot;
  lockAxis = null;
  dragStartDelay = 0;
  previewClass;
  scale = 1;
  get disabled() {
    return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
  }
  set disabled(value) {
    if (value !== this._disabled) {
      this._disabled = value;
      this._toggleNativeDragInteractions();
      this._handles.forEach((handle) => toggleNativeDragInteractions(handle, value));
    }
  }
  _disabled = false;
  beforeStarted = new Subject();
  started = new Subject();
  released = new Subject();
  ended = new Subject();
  entered = new Subject();
  exited = new Subject();
  dropped = new Subject();
  moved = this._moveEvents;
  data;
  constrainPosition;
  constructor(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry, _renderer) {
    this._config = _config;
    this._document = _document;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._dragDropRegistry = _dragDropRegistry;
    this._renderer = _renderer;
    this.withRootElement(element).withParent(_config.parentDragRef || null);
    this._parentPositions = new ParentPositionTracker(_document);
    _dragDropRegistry.registerDragItem(this);
  }
  getPlaceholderElement() {
    return this._placeholder;
  }
  getRootElement() {
    return this._rootElement;
  }
  getVisibleElement() {
    return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
  }
  withHandles(handles) {
    this._handles = handles.map((handle) => coerceElement(handle));
    this._handles.forEach((handle) => toggleNativeDragInteractions(handle, this.disabled));
    this._toggleNativeDragInteractions();
    const disabledHandles = /* @__PURE__ */ new Set();
    this._disabledHandles.forEach((handle) => {
      if (this._handles.indexOf(handle) > -1) {
        disabledHandles.add(handle);
      }
    });
    this._disabledHandles = disabledHandles;
    return this;
  }
  withPreviewTemplate(template) {
    this._previewTemplate = template;
    return this;
  }
  withPlaceholderTemplate(template) {
    this._placeholderTemplate = template;
    return this;
  }
  withRootElement(rootElement) {
    const element = coerceElement(rootElement);
    if (element !== this._rootElement) {
      this._removeRootElementListeners();
      const renderer = this._renderer;
      this._rootElementCleanups = this._ngZone.runOutsideAngular(() => [renderer.listen(element, "mousedown", this._pointerDown, activeEventListenerOptions), renderer.listen(element, "touchstart", this._pointerDown, passiveEventListenerOptions), renderer.listen(element, "dragstart", this._nativeDragStart, activeEventListenerOptions)]);
      this._initialTransform = void 0;
      this._rootElement = element;
    }
    if (typeof SVGElement !== "undefined" && this._rootElement instanceof SVGElement) {
      this._ownerSVGElement = this._rootElement.ownerSVGElement;
    }
    return this;
  }
  withBoundaryElement(boundaryElement) {
    this._boundaryElement = boundaryElement ? coerceElement(boundaryElement) : null;
    this._resizeSubscription.unsubscribe();
    if (boundaryElement) {
      this._resizeSubscription = this._viewportRuler.change(10).subscribe(() => this._containInsideBoundaryOnResize());
    }
    return this;
  }
  withParent(parent) {
    this._parentDragRef = parent;
    return this;
  }
  dispose() {
    this._removeRootElementListeners();
    if (this.isDragging()) {
      this._rootElement?.remove();
    }
    this._marker?.remove();
    this._destroyPreview();
    this._destroyPlaceholder();
    this._dragDropRegistry.removeDragItem(this);
    this._removeListeners();
    this.beforeStarted.complete();
    this.started.complete();
    this.released.complete();
    this.ended.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this._moveEvents.complete();
    this._handles = [];
    this._disabledHandles.clear();
    this._dropContainer = void 0;
    this._resizeSubscription.unsubscribe();
    this._parentPositions.clear();
    this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate = this._previewTemplate = this._marker = this._parentDragRef = null;
  }
  isDragging() {
    return this._hasStartedDragging() && this._dragDropRegistry.isDragging(this);
  }
  reset() {
    this._rootElement.style.transform = this._initialTransform || "";
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform = {
      x: 0,
      y: 0
    };
  }
  resetToBoundary() {
    if (this._boundaryElement && this._rootElement && isOverflowingParent(this._boundaryElement.getBoundingClientRect(), this._rootElement.getBoundingClientRect())) {
      const parentRect = this._boundaryElement.getBoundingClientRect();
      const childRect = this._rootElement.getBoundingClientRect();
      let offsetX = 0;
      let offsetY = 0;
      if (childRect.left < parentRect.left) {
        offsetX = parentRect.left - childRect.left;
      } else if (childRect.right > parentRect.right) {
        offsetX = parentRect.right - childRect.right;
      }
      if (childRect.top < parentRect.top) {
        offsetY = parentRect.top - childRect.top;
      } else if (childRect.bottom > parentRect.bottom) {
        offsetY = parentRect.bottom - childRect.bottom;
      }
      const currentLeft = this._activeTransform.x;
      const currentTop = this._activeTransform.y;
      let x = currentLeft + offsetX, y = currentTop + offsetY;
      this._rootElement.style.transform = getTransform(x, y);
      this._activeTransform = {
        x,
        y
      };
      this._passiveTransform = {
        x,
        y
      };
    }
  }
  disableHandle(handle) {
    if (!this._disabledHandles.has(handle) && this._handles.indexOf(handle) > -1) {
      this._disabledHandles.add(handle);
      toggleNativeDragInteractions(handle, true);
    }
  }
  enableHandle(handle) {
    if (this._disabledHandles.has(handle)) {
      this._disabledHandles.delete(handle);
      toggleNativeDragInteractions(handle, this.disabled);
    }
  }
  withDirection(direction) {
    this._direction = direction;
    return this;
  }
  _withDropContainer(container) {
    this._dropContainer = container;
  }
  getFreeDragPosition() {
    const position = this.isDragging() ? this._activeTransform : this._passiveTransform;
    return {
      x: position.x,
      y: position.y
    };
  }
  setFreeDragPosition(value) {
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform.x = value.x;
    this._passiveTransform.y = value.y;
    if (!this._dropContainer) {
      this._applyRootElementTransform(value.x, value.y);
    }
    return this;
  }
  withPreviewContainer(value) {
    this._previewContainer = value;
    return this;
  }
  _sortFromLastPointerPosition() {
    const position = this._lastKnownPointerPosition;
    if (position && this._dropContainer) {
      this._updateActiveDropContainer(this._getConstrainedPointerPosition(position), position);
    }
  }
  _removeListeners() {
    this._pointerMoveSubscription.unsubscribe();
    this._pointerUpSubscription.unsubscribe();
    this._scrollSubscription.unsubscribe();
    this._cleanupShadowRootSelectStart?.();
    this._cleanupShadowRootSelectStart = void 0;
  }
  _destroyPreview() {
    this._preview?.destroy();
    this._preview = null;
  }
  _destroyPlaceholder() {
    this._anchor?.remove();
    this._placeholder?.remove();
    this._placeholderRef?.destroy();
    this._placeholder = this._anchor = this._placeholderRef = null;
  }
  _pointerDown = (event) => {
    this.beforeStarted.next();
    if (this._handles.length) {
      const targetHandle = this._getTargetHandle(event);
      if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
        this._initializeDragSequence(targetHandle, event);
      }
    } else if (!this.disabled) {
      this._initializeDragSequence(this._rootElement, event);
    }
  };
  _pointerMove = (event) => {
    const pointerPosition = this._getPointerPositionOnPage(event);
    if (!this._hasStartedDragging()) {
      const distanceX = Math.abs(pointerPosition.x - this._pickupPositionOnPage.x);
      const distanceY = Math.abs(pointerPosition.y - this._pickupPositionOnPage.y);
      const isOverThreshold = distanceX + distanceY >= this._config.dragStartThreshold;
      if (isOverThreshold) {
        const isDelayElapsed = Date.now() >= this._dragStartTime + this._getDragStartDelay(event);
        const container = this._dropContainer;
        if (!isDelayElapsed) {
          this._endDragSequence(event);
          return;
        }
        if (!container || !container.isDragging() && !container.isReceiving()) {
          if (event.cancelable) {
            event.preventDefault();
          }
          this._hasStartedDragging.set(true);
          this._ngZone.run(() => this._startDragSequence(event));
        }
      }
      return;
    }
    if (event.cancelable) {
      event.preventDefault();
    }
    const constrainedPointerPosition = this._getConstrainedPointerPosition(pointerPosition);
    this._hasMoved = true;
    this._lastKnownPointerPosition = pointerPosition;
    this._updatePointerDirectionDelta(constrainedPointerPosition);
    if (this._dropContainer) {
      this._updateActiveDropContainer(constrainedPointerPosition, pointerPosition);
    } else {
      const offset = this.constrainPosition ? this._initialDomRect : this._pickupPositionOnPage;
      const activeTransform = this._activeTransform;
      activeTransform.x = constrainedPointerPosition.x - offset.x + this._passiveTransform.x;
      activeTransform.y = constrainedPointerPosition.y - offset.y + this._passiveTransform.y;
      this._applyRootElementTransform(activeTransform.x, activeTransform.y);
    }
    if (this._moveEvents.observers.length) {
      this._ngZone.run(() => {
        this._moveEvents.next({
          source: this,
          pointerPosition: constrainedPointerPosition,
          event,
          distance: this._getDragDistance(constrainedPointerPosition),
          delta: this._pointerDirectionDelta
        });
      });
    }
  };
  _pointerUp = (event) => {
    this._endDragSequence(event);
  };
  _endDragSequence(event) {
    if (!this._dragDropRegistry.isDragging(this)) {
      return;
    }
    this._removeListeners();
    this._dragDropRegistry.stopDragging(this);
    this._toggleNativeDragInteractions();
    if (this._handles) {
      this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
    }
    if (!this._hasStartedDragging()) {
      return;
    }
    this.released.next({
      source: this,
      event
    });
    if (this._dropContainer) {
      this._dropContainer._stopScrolling();
      this._animatePreviewToPlaceholder().then(() => {
        this._cleanupDragArtifacts(event);
        this._cleanupCachedDimensions();
        this._dragDropRegistry.stopDragging(this);
      });
    } else {
      this._passiveTransform.x = this._activeTransform.x;
      const pointerPosition = this._getPointerPositionOnPage(event);
      this._passiveTransform.y = this._activeTransform.y;
      this._ngZone.run(() => {
        this.ended.next({
          source: this,
          distance: this._getDragDistance(pointerPosition),
          dropPoint: pointerPosition,
          event
        });
      });
      this._cleanupCachedDimensions();
      this._dragDropRegistry.stopDragging(this);
    }
  }
  _startDragSequence(event) {
    if (isTouchEvent(event)) {
      this._lastTouchEventTime = Date.now();
    }
    this._toggleNativeDragInteractions();
    const shadowRoot = this._getShadowRoot();
    const dropContainer = this._dropContainer;
    if (shadowRoot) {
      this._ngZone.runOutsideAngular(() => {
        this._cleanupShadowRootSelectStart = this._renderer.listen(shadowRoot, "selectstart", shadowDomSelectStart, activeCapturingEventOptions);
      });
    }
    if (dropContainer) {
      const element = this._rootElement;
      const parent = element.parentNode;
      const placeholder = this._placeholder = this._createPlaceholderElement();
      const marker = this._marker = this._marker || this._document.createComment(typeof ngDevMode === "undefined" || ngDevMode ? "cdk-drag-marker" : "");
      parent.insertBefore(marker, element);
      this._initialTransform = element.style.transform || "";
      this._preview = new PreviewRef(this._document, this._rootElement, this._direction, this._initialDomRect, this._previewTemplate || null, this.previewClass || null, this._pickupPositionOnPage, this._initialTransform, this._config.zIndex || 1e3, this._renderer);
      this._preview.attach(this._getPreviewInsertionPoint(parent, shadowRoot));
      toggleVisibility(element, false, dragImportantProperties);
      this._document.body.appendChild(parent.replaceChild(placeholder, element));
      this.started.next({
        source: this,
        event
      });
      dropContainer.start();
      this._initialContainer = dropContainer;
      this._initialIndex = dropContainer.getItemIndex(this);
    } else {
      this.started.next({
        source: this,
        event
      });
      this._initialContainer = this._initialIndex = void 0;
    }
    this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
  }
  _initializeDragSequence(referenceElement, event) {
    if (this._parentDragRef) {
      event.stopPropagation();
    }
    const isDragging = this.isDragging();
    const isTouchSequence = isTouchEvent(event);
    const isAuxiliaryMouseButton = !isTouchSequence && event.button !== 0;
    const rootElement = this._rootElement;
    const target = _getEventTarget(event);
    const isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
    const isFakeEvent = isTouchSequence ? isFakeTouchstartFromScreenReader(event) : isFakeMousedownFromScreenReader(event);
    if (target && target.draggable && event.type === "mousedown") {
      event.preventDefault();
    }
    if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent || isFakeEvent) {
      return;
    }
    if (this._handles.length) {
      const rootStyles = rootElement.style;
      this._rootElementTapHighlight = rootStyles.webkitTapHighlightColor || "";
      rootStyles.webkitTapHighlightColor = "transparent";
    }
    this._hasMoved = false;
    this._hasStartedDragging.set(this._hasMoved);
    this._removeListeners();
    this._initialDomRect = this._rootElement.getBoundingClientRect();
    this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
    this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
    this._scrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe((scrollEvent) => this._updateOnScroll(scrollEvent));
    if (this._boundaryElement) {
      this._boundaryRect = getMutableClientRect(this._boundaryElement);
    }
    const previewTemplate = this._previewTemplate;
    this._pickupPositionInElement = previewTemplate && previewTemplate.template && !previewTemplate.matchSize ? {
      x: 0,
      y: 0
    } : this._getPointerPositionInElement(this._initialDomRect, referenceElement, event);
    const pointerPosition = this._pickupPositionOnPage = this._lastKnownPointerPosition = this._getPointerPositionOnPage(event);
    this._pointerDirectionDelta = {
      x: 0,
      y: 0
    };
    this._pointerPositionAtLastDirectionChange = {
      x: pointerPosition.x,
      y: pointerPosition.y
    };
    this._dragStartTime = Date.now();
    this._dragDropRegistry.startDragging(this, event);
  }
  _cleanupDragArtifacts(event) {
    toggleVisibility(this._rootElement, true, dragImportantProperties);
    this._marker.parentNode.replaceChild(this._rootElement, this._marker);
    this._destroyPreview();
    this._destroyPlaceholder();
    this._initialDomRect = this._boundaryRect = this._previewRect = this._initialTransform = void 0;
    this._ngZone.run(() => {
      const container = this._dropContainer;
      const currentIndex = container.getItemIndex(this);
      const pointerPosition = this._getPointerPositionOnPage(event);
      const distance = this._getDragDistance(pointerPosition);
      const isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
      this.ended.next({
        source: this,
        distance,
        dropPoint: pointerPosition,
        event
      });
      this.dropped.next({
        item: this,
        currentIndex,
        previousIndex: this._initialIndex,
        container,
        previousContainer: this._initialContainer,
        isPointerOverContainer,
        distance,
        dropPoint: pointerPosition,
        event
      });
      container.drop(this, currentIndex, this._initialIndex, this._initialContainer, isPointerOverContainer, distance, pointerPosition, event);
      this._dropContainer = this._initialContainer;
    });
  }
  _updateActiveDropContainer({
    x,
    y
  }, {
    x: rawX,
    y: rawY
  }) {
    let newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
    if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
      newContainer = this._initialContainer;
    }
    if (newContainer && newContainer !== this._dropContainer) {
      this._ngZone.run(() => {
        const exitIndex = this._dropContainer.getItemIndex(this);
        const nextItemElement = this._dropContainer.getItemAtIndex(exitIndex + 1)?.getVisibleElement() || null;
        this.exited.next({
          item: this,
          container: this._dropContainer
        });
        this._dropContainer.exit(this);
        this._conditionallyInsertAnchor(newContainer, this._dropContainer, nextItemElement);
        this._dropContainer = newContainer;
        this._dropContainer.enter(this, x, y, newContainer === this._initialContainer && newContainer.sortingDisabled ? this._initialIndex : void 0);
        this.entered.next({
          item: this,
          container: newContainer,
          currentIndex: newContainer.getItemIndex(this)
        });
      });
    }
    if (this.isDragging()) {
      this._dropContainer._startScrollingIfNecessary(rawX, rawY);
      this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);
      if (this.constrainPosition) {
        this._applyPreviewTransform(x, y);
      } else {
        this._applyPreviewTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
      }
    }
  }
  _animatePreviewToPlaceholder() {
    if (!this._hasMoved) {
      return Promise.resolve();
    }
    const placeholderRect = this._placeholder.getBoundingClientRect();
    this._preview.addClass("cdk-drag-animating");
    this._applyPreviewTransform(placeholderRect.left, placeholderRect.top);
    const duration = this._preview.getTransitionDuration();
    if (duration === 0) {
      return Promise.resolve();
    }
    return this._ngZone.runOutsideAngular(() => {
      return new Promise((resolve) => {
        const handler = (event) => {
          if (!event || this._preview && _getEventTarget(event) === this._preview.element && event.propertyName === "transform") {
            cleanupListener();
            resolve();
            clearTimeout(timeout);
          }
        };
        const timeout = setTimeout(handler, duration * 1.5);
        const cleanupListener = this._preview.addEventListener("transitionend", handler);
      });
    });
  }
  _createPlaceholderElement() {
    const placeholderConfig = this._placeholderTemplate;
    const placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
    let placeholder;
    if (placeholderTemplate) {
      this._placeholderRef = placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate, placeholderConfig.context);
      this._placeholderRef.detectChanges();
      placeholder = getRootNode(this._placeholderRef, this._document);
    } else {
      placeholder = deepCloneNode(this._rootElement);
    }
    placeholder.style.pointerEvents = "none";
    placeholder.classList.add(PLACEHOLDER_CLASS);
    return placeholder;
  }
  _getPointerPositionInElement(elementRect, referenceElement, event) {
    const handleElement = referenceElement === this._rootElement ? null : referenceElement;
    const referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
    const point = isTouchEvent(event) ? event.targetTouches[0] : event;
    const scrollPosition = this._getViewportScrollPosition();
    const x = point.pageX - referenceRect.left - scrollPosition.left;
    const y = point.pageY - referenceRect.top - scrollPosition.top;
    return {
      x: referenceRect.left - elementRect.left + x,
      y: referenceRect.top - elementRect.top + y
    };
  }
  _getPointerPositionOnPage(event) {
    const scrollPosition = this._getViewportScrollPosition();
    const point = isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] || {
      pageX: 0,
      pageY: 0
    } : event;
    const x = point.pageX - scrollPosition.left;
    const y = point.pageY - scrollPosition.top;
    if (this._ownerSVGElement) {
      const svgMatrix = this._ownerSVGElement.getScreenCTM();
      if (svgMatrix) {
        const svgPoint = this._ownerSVGElement.createSVGPoint();
        svgPoint.x = x;
        svgPoint.y = y;
        return svgPoint.matrixTransform(svgMatrix.inverse());
      }
    }
    return {
      x,
      y
    };
  }
  _getConstrainedPointerPosition(point) {
    const dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
    let {
      x,
      y
    } = this.constrainPosition ? this.constrainPosition(point, this, this._initialDomRect, this._pickupPositionInElement) : point;
    if (this.lockAxis === "x" || dropContainerLock === "x") {
      y = this._pickupPositionOnPage.y - (this.constrainPosition ? this._pickupPositionInElement.y : 0);
    } else if (this.lockAxis === "y" || dropContainerLock === "y") {
      x = this._pickupPositionOnPage.x - (this.constrainPosition ? this._pickupPositionInElement.x : 0);
    }
    if (this._boundaryRect) {
      const {
        x: pickupX,
        y: pickupY
      } = !this.constrainPosition ? this._pickupPositionInElement : {
        x: 0,
        y: 0
      };
      const boundaryRect = this._boundaryRect;
      const {
        width: previewWidth,
        height: previewHeight
      } = this._getPreviewRect();
      const minY = boundaryRect.top + pickupY;
      const maxY = boundaryRect.bottom - (previewHeight - pickupY);
      const minX = boundaryRect.left + pickupX;
      const maxX = boundaryRect.right - (previewWidth - pickupX);
      x = clamp$1(x, minX, maxX);
      y = clamp$1(y, minY, maxY);
    }
    return {
      x,
      y
    };
  }
  _updatePointerDirectionDelta(pointerPositionOnPage) {
    const {
      x,
      y
    } = pointerPositionOnPage;
    const delta = this._pointerDirectionDelta;
    const positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
    const changeX = Math.abs(x - positionSinceLastChange.x);
    const changeY = Math.abs(y - positionSinceLastChange.y);
    if (changeX > this._config.pointerDirectionChangeThreshold) {
      delta.x = x > positionSinceLastChange.x ? 1 : -1;
      positionSinceLastChange.x = x;
    }
    if (changeY > this._config.pointerDirectionChangeThreshold) {
      delta.y = y > positionSinceLastChange.y ? 1 : -1;
      positionSinceLastChange.y = y;
    }
    return delta;
  }
  _toggleNativeDragInteractions() {
    if (!this._rootElement || !this._handles) {
      return;
    }
    const shouldEnable = this._handles.length > 0 || !this.isDragging();
    if (shouldEnable !== this._nativeInteractionsEnabled) {
      this._nativeInteractionsEnabled = shouldEnable;
      toggleNativeDragInteractions(this._rootElement, shouldEnable);
    }
  }
  _removeRootElementListeners() {
    this._rootElementCleanups?.forEach((cleanup) => cleanup());
    this._rootElementCleanups = void 0;
  }
  _applyRootElementTransform(x, y) {
    const scale = 1 / this.scale;
    const transform = getTransform(x * scale, y * scale);
    const styles = this._rootElement.style;
    if (this._initialTransform == null) {
      this._initialTransform = styles.transform && styles.transform != "none" ? styles.transform : "";
    }
    styles.transform = combineTransforms(transform, this._initialTransform);
  }
  _applyPreviewTransform(x, y) {
    const initialTransform = this._previewTemplate?.template ? void 0 : this._initialTransform;
    const transform = getTransform(x, y);
    this._preview.setTransform(combineTransforms(transform, initialTransform));
  }
  _getDragDistance(currentPosition) {
    const pickupPosition = this._pickupPositionOnPage;
    if (pickupPosition) {
      return {
        x: currentPosition.x - pickupPosition.x,
        y: currentPosition.y - pickupPosition.y
      };
    }
    return {
      x: 0,
      y: 0
    };
  }
  _cleanupCachedDimensions() {
    this._boundaryRect = this._previewRect = void 0;
    this._parentPositions.clear();
  }
  _containInsideBoundaryOnResize() {
    let {
      x,
      y
    } = this._passiveTransform;
    if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
      return;
    }
    const elementRect = this._rootElement.getBoundingClientRect();
    const boundaryRect = this._boundaryElement.getBoundingClientRect();
    if (boundaryRect.width === 0 && boundaryRect.height === 0 || elementRect.width === 0 && elementRect.height === 0) {
      return;
    }
    const leftOverflow = boundaryRect.left - elementRect.left;
    const rightOverflow = elementRect.right - boundaryRect.right;
    const topOverflow = boundaryRect.top - elementRect.top;
    const bottomOverflow = elementRect.bottom - boundaryRect.bottom;
    if (boundaryRect.width > elementRect.width) {
      if (leftOverflow > 0) {
        x += leftOverflow;
      }
      if (rightOverflow > 0) {
        x -= rightOverflow;
      }
    } else {
      x = 0;
    }
    if (boundaryRect.height > elementRect.height) {
      if (topOverflow > 0) {
        y += topOverflow;
      }
      if (bottomOverflow > 0) {
        y -= bottomOverflow;
      }
    } else {
      y = 0;
    }
    if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
      this.setFreeDragPosition({
        y,
        x
      });
    }
  }
  _getDragStartDelay(event) {
    const value = this.dragStartDelay;
    if (typeof value === "number") {
      return value;
    } else if (isTouchEvent(event)) {
      return value.touch;
    }
    return value ? value.mouse : 0;
  }
  _updateOnScroll(event) {
    const scrollDifference = this._parentPositions.handleScroll(event);
    if (scrollDifference) {
      const target = _getEventTarget(event);
      if (this._boundaryRect && target !== this._boundaryElement && target.contains(this._boundaryElement)) {
        adjustDomRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
      }
      this._pickupPositionOnPage.x += scrollDifference.left;
      this._pickupPositionOnPage.y += scrollDifference.top;
      if (!this._dropContainer) {
        this._activeTransform.x -= scrollDifference.left;
        this._activeTransform.y -= scrollDifference.top;
        this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y);
      }
    }
  }
  _getViewportScrollPosition() {
    return this._parentPositions.positions.get(this._document)?.scrollPosition || this._parentPositions.getViewportScrollPosition();
  }
  _getShadowRoot() {
    if (this._cachedShadowRoot === void 0) {
      this._cachedShadowRoot = _getShadowRoot(this._rootElement);
    }
    return this._cachedShadowRoot;
  }
  _getPreviewInsertionPoint(initialParent, shadowRoot) {
    const previewContainer = this._previewContainer || "global";
    if (previewContainer === "parent") {
      return initialParent;
    }
    if (previewContainer === "global") {
      const documentRef = this._document;
      return shadowRoot || documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
    }
    return coerceElement(previewContainer);
  }
  _getPreviewRect() {
    if (!this._previewRect || !this._previewRect.width && !this._previewRect.height) {
      this._previewRect = this._preview ? this._preview.getBoundingClientRect() : this._initialDomRect;
    }
    return this._previewRect;
  }
  _nativeDragStart = (event) => {
    if (this._handles.length) {
      const targetHandle = this._getTargetHandle(event);
      if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
        event.preventDefault();
      }
    } else if (!this.disabled) {
      event.preventDefault();
    }
  };
  _getTargetHandle(event) {
    return this._handles.find((handle) => {
      return event.target && (event.target === handle || handle.contains(event.target));
    });
  }
  _conditionallyInsertAnchor(newContainer, exitContainer, nextItemElement) {
    if (newContainer === this._initialContainer) {
      this._anchor?.remove();
      this._anchor = null;
    } else if (exitContainer === this._initialContainer && exitContainer.hasAnchor) {
      const anchor = this._anchor ??= deepCloneNode(this._placeholder);
      anchor.classList.remove(PLACEHOLDER_CLASS);
      anchor.classList.add("cdk-drag-anchor");
      anchor.style.transform = "";
      if (nextItemElement) {
        nextItemElement.before(anchor);
      } else {
        coerceElement(exitContainer.element).appendChild(anchor);
      }
    }
  }
};
function clamp$1(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function isTouchEvent(event) {
  return event.type[0] === "t";
}
function shadowDomSelectStart(event) {
  event.preventDefault();
}
function moveItemInArray(array, fromIndex, toIndex) {
  const from = clamp(fromIndex, array.length - 1);
  const to = clamp(toIndex, array.length - 1);
  if (from === to) {
    return;
  }
  const target = array[from];
  const delta = to < from ? -1 : 1;
  for (let i = from; i !== to; i += delta) {
    array[i] = array[i + delta];
  }
  array[to] = target;
}
function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
  const from = clamp(currentIndex, currentArray.length - 1);
  const to = clamp(targetIndex, targetArray.length);
  if (currentArray.length) {
    targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
  }
}
function clamp(value, max) {
  return Math.max(0, Math.min(max, value));
}
var SingleAxisSortStrategy = class {
  _dragDropRegistry;
  _element;
  _sortPredicate;
  _itemPositions = [];
  _activeDraggables;
  orientation = "vertical";
  direction = "ltr";
  constructor(_dragDropRegistry) {
    this._dragDropRegistry = _dragDropRegistry;
  }
  _previousSwap = {
    drag: null,
    delta: 0,
    overlaps: false
  };
  start(items) {
    this.withItems(items);
  }
  sort(item, pointerX, pointerY, pointerDelta) {
    const siblings = this._itemPositions;
    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
    if (newIndex === -1 && siblings.length > 0) {
      return null;
    }
    const isHorizontal = this.orientation === "horizontal";
    const currentIndex = siblings.findIndex((currentItem) => currentItem.drag === item);
    const siblingAtNewPosition = siblings[newIndex];
    const currentPosition = siblings[currentIndex].clientRect;
    const newPosition = siblingAtNewPosition.clientRect;
    const delta = currentIndex > newIndex ? 1 : -1;
    const itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
    const siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
    const oldOrder = siblings.slice();
    moveItemInArray(siblings, currentIndex, newIndex);
    siblings.forEach((sibling, index) => {
      if (oldOrder[index] === sibling) {
        return;
      }
      const isDraggedItem = sibling.drag === item;
      const offset = isDraggedItem ? itemOffset : siblingOffset;
      const elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement();
      sibling.offset += offset;
      const transformAmount = Math.round(sibling.offset * (1 / sibling.drag.scale));
      if (isHorizontal) {
        elementToOffset.style.transform = combineTransforms(`translate3d(${transformAmount}px, 0, 0)`, sibling.initialTransform);
        adjustDomRect(sibling.clientRect, 0, offset);
      } else {
        elementToOffset.style.transform = combineTransforms(`translate3d(0, ${transformAmount}px, 0)`, sibling.initialTransform);
        adjustDomRect(sibling.clientRect, offset, 0);
      }
    });
    this._previousSwap.overlaps = isInsideClientRect(newPosition, pointerX, pointerY);
    this._previousSwap.drag = siblingAtNewPosition.drag;
    this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
    return {
      previousIndex: currentIndex,
      currentIndex: newIndex
    };
  }
  enter(item, pointerX, pointerY, index) {
    const activeDraggables = this._activeDraggables;
    const currentIndex = activeDraggables.indexOf(item);
    const placeholder = item.getPlaceholderElement();
    if (currentIndex > -1) {
      activeDraggables.splice(currentIndex, 1);
    }
    const newIndex = index == null || index < 0 ? this._getItemIndexFromPointerPosition(item, pointerX, pointerY) : index;
    let newPositionReference = activeDraggables[newIndex];
    if (newPositionReference === item) {
      newPositionReference = activeDraggables[newIndex + 1];
    }
    if (!newPositionReference && (newIndex == null || newIndex === -1 || newIndex < activeDraggables.length - 1) && this._shouldEnterAsFirstChild(pointerX, pointerY)) {
      newPositionReference = activeDraggables[0];
    }
    if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
      const element = newPositionReference.getRootElement();
      element.parentElement.insertBefore(placeholder, element);
      activeDraggables.splice(newIndex, 0, item);
    } else {
      this._element.appendChild(placeholder);
      activeDraggables.push(item);
    }
    placeholder.style.transform = "";
    this._cacheItemPositions();
  }
  withItems(items) {
    this._activeDraggables = items.slice();
    this._cacheItemPositions();
  }
  withSortPredicate(predicate) {
    this._sortPredicate = predicate;
  }
  reset() {
    this._activeDraggables?.forEach((item) => {
      const rootElement = item.getRootElement();
      if (rootElement) {
        const initialTransform = this._itemPositions.find((p) => p.drag === item)?.initialTransform;
        rootElement.style.transform = initialTransform || "";
      }
    });
    this._itemPositions = [];
    this._activeDraggables = [];
    this._previousSwap.drag = null;
    this._previousSwap.delta = 0;
    this._previousSwap.overlaps = false;
  }
  getActiveItemsSnapshot() {
    return this._activeDraggables;
  }
  getItemIndex(item) {
    return this._getVisualItemPositions().findIndex((currentItem) => currentItem.drag === item);
  }
  getItemAtIndex(index) {
    return this._getVisualItemPositions()[index]?.drag || null;
  }
  updateOnScroll(topDifference, leftDifference) {
    this._itemPositions.forEach(({
      clientRect
    }) => {
      adjustDomRect(clientRect, topDifference, leftDifference);
    });
    this._itemPositions.forEach(({
      drag
    }) => {
      if (this._dragDropRegistry.isDragging(drag)) {
        drag._sortFromLastPointerPosition();
      }
    });
  }
  withElementContainer(container) {
    this._element = container;
  }
  _cacheItemPositions() {
    const isHorizontal = this.orientation === "horizontal";
    this._itemPositions = this._activeDraggables.map((drag) => {
      const elementToMeasure = drag.getVisibleElement();
      return {
        drag,
        offset: 0,
        initialTransform: elementToMeasure.style.transform || "",
        clientRect: getMutableClientRect(elementToMeasure)
      };
    }).sort((a, b) => {
      return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
    });
  }
  _getVisualItemPositions() {
    return this.orientation === "horizontal" && this.direction === "rtl" ? this._itemPositions.slice().reverse() : this._itemPositions;
  }
  _getItemOffsetPx(currentPosition, newPosition, delta) {
    const isHorizontal = this.orientation === "horizontal";
    let itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top;
    if (delta === -1) {
      itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
    }
    return itemOffset;
  }
  _getSiblingOffsetPx(currentIndex, siblings, delta) {
    const isHorizontal = this.orientation === "horizontal";
    const currentPosition = siblings[currentIndex].clientRect;
    const immediateSibling = siblings[currentIndex + delta * -1];
    let siblingOffset = currentPosition[isHorizontal ? "width" : "height"] * delta;
    if (immediateSibling) {
      const start = isHorizontal ? "left" : "top";
      const end = isHorizontal ? "right" : "bottom";
      if (delta === -1) {
        siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
      } else {
        siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
      }
    }
    return siblingOffset;
  }
  _shouldEnterAsFirstChild(pointerX, pointerY) {
    if (!this._activeDraggables.length) {
      return false;
    }
    const itemPositions = this._itemPositions;
    const isHorizontal = this.orientation === "horizontal";
    const reversed = itemPositions[0].drag !== this._activeDraggables[0];
    if (reversed) {
      const lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
      return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
    } else {
      const firstItemRect = itemPositions[0].clientRect;
      return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
    }
  }
  _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
    const isHorizontal = this.orientation === "horizontal";
    const index = this._itemPositions.findIndex(({
      drag,
      clientRect
    }) => {
      if (drag === item) {
        return false;
      }
      if (delta) {
        const direction = isHorizontal ? delta.x : delta.y;
        if (drag === this._previousSwap.drag && this._previousSwap.overlaps && direction === this._previousSwap.delta) {
          return false;
        }
      }
      return isHorizontal ? pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right) : pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
    });
    return index === -1 || !this._sortPredicate(index, item) ? -1 : index;
  }
};
var MixedSortStrategy = class {
  _document;
  _dragDropRegistry;
  _element;
  _sortPredicate;
  _rootNode;
  _activeItems;
  _previousSwap = {
    drag: null,
    deltaX: 0,
    deltaY: 0,
    overlaps: false
  };
  _relatedNodes = [];
  constructor(_document, _dragDropRegistry) {
    this._document = _document;
    this._dragDropRegistry = _dragDropRegistry;
  }
  start(items) {
    const childNodes = this._element.childNodes;
    this._relatedNodes = [];
    for (let i = 0; i < childNodes.length; i++) {
      const node = childNodes[i];
      this._relatedNodes.push([node, node.nextSibling]);
    }
    this.withItems(items);
  }
  sort(item, pointerX, pointerY, pointerDelta) {
    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
    const previousSwap = this._previousSwap;
    if (newIndex === -1 || this._activeItems[newIndex] === item) {
      return null;
    }
    const toSwapWith = this._activeItems[newIndex];
    if (previousSwap.drag === toSwapWith && previousSwap.overlaps && previousSwap.deltaX === pointerDelta.x && previousSwap.deltaY === pointerDelta.y) {
      return null;
    }
    const previousIndex = this.getItemIndex(item);
    const current = item.getPlaceholderElement();
    const overlapElement = toSwapWith.getRootElement();
    if (newIndex > previousIndex) {
      overlapElement.after(current);
    } else {
      overlapElement.before(current);
    }
    moveItemInArray(this._activeItems, previousIndex, newIndex);
    const newOverlapElement = this._getRootNode().elementFromPoint(pointerX, pointerY);
    previousSwap.deltaX = pointerDelta.x;
    previousSwap.deltaY = pointerDelta.y;
    previousSwap.drag = toSwapWith;
    previousSwap.overlaps = overlapElement === newOverlapElement || overlapElement.contains(newOverlapElement);
    return {
      previousIndex,
      currentIndex: newIndex
    };
  }
  enter(item, pointerX, pointerY, index) {
    const currentIndex = this._activeItems.indexOf(item);
    if (currentIndex > -1) {
      this._activeItems.splice(currentIndex, 1);
    }
    let enterIndex = index == null || index < 0 ? this._getItemIndexFromPointerPosition(item, pointerX, pointerY) : index;
    if (enterIndex === -1) {
      enterIndex = this._getClosestItemIndexToPointer(item, pointerX, pointerY);
    }
    const targetItem = this._activeItems[enterIndex];
    if (targetItem && !this._dragDropRegistry.isDragging(targetItem)) {
      this._activeItems.splice(enterIndex, 0, item);
      targetItem.getRootElement().before(item.getPlaceholderElement());
    } else {
      this._activeItems.push(item);
      this._element.appendChild(item.getPlaceholderElement());
    }
  }
  withItems(items) {
    this._activeItems = items.slice();
  }
  withSortPredicate(predicate) {
    this._sortPredicate = predicate;
  }
  reset() {
    const root = this._element;
    const previousSwap = this._previousSwap;
    for (let i = this._relatedNodes.length - 1; i > -1; i--) {
      const [node, nextSibling] = this._relatedNodes[i];
      if (node.parentNode === root && node.nextSibling !== nextSibling) {
        if (nextSibling === null) {
          root.appendChild(node);
        } else if (nextSibling.parentNode === root) {
          root.insertBefore(node, nextSibling);
        }
      }
    }
    this._relatedNodes = [];
    this._activeItems = [];
    previousSwap.drag = null;
    previousSwap.deltaX = previousSwap.deltaY = 0;
    previousSwap.overlaps = false;
  }
  getActiveItemsSnapshot() {
    return this._activeItems;
  }
  getItemIndex(item) {
    return this._activeItems.indexOf(item);
  }
  getItemAtIndex(index) {
    return this._activeItems[index] || null;
  }
  updateOnScroll() {
    this._activeItems.forEach((item) => {
      if (this._dragDropRegistry.isDragging(item)) {
        item._sortFromLastPointerPosition();
      }
    });
  }
  withElementContainer(container) {
    if (container !== this._element) {
      this._element = container;
      this._rootNode = void 0;
    }
  }
  _getItemIndexFromPointerPosition(item, pointerX, pointerY) {
    const elementAtPoint = this._getRootNode().elementFromPoint(Math.floor(pointerX), Math.floor(pointerY));
    const index = elementAtPoint ? this._activeItems.findIndex((item2) => {
      const root = item2.getRootElement();
      return elementAtPoint === root || root.contains(elementAtPoint);
    }) : -1;
    return index === -1 || !this._sortPredicate(index, item) ? -1 : index;
  }
  _getRootNode() {
    if (!this._rootNode) {
      this._rootNode = _getShadowRoot(this._element) || this._document;
    }
    return this._rootNode;
  }
  _getClosestItemIndexToPointer(item, pointerX, pointerY) {
    if (this._activeItems.length === 0) {
      return -1;
    }
    if (this._activeItems.length === 1) {
      return 0;
    }
    let minDistance = Infinity;
    let minIndex = -1;
    for (let i = 0; i < this._activeItems.length; i++) {
      const current = this._activeItems[i];
      if (current !== item) {
        const {
          x,
          y
        } = current.getRootElement().getBoundingClientRect();
        const distance = Math.hypot(pointerX - x, pointerY - y);
        if (distance < minDistance) {
          minDistance = distance;
          minIndex = i;
        }
      }
    }
    return minIndex;
  }
};
var DROP_PROXIMITY_THRESHOLD = 0.05;
var SCROLL_PROXIMITY_THRESHOLD = 0.05;
var AutoScrollVerticalDirection;
(function(AutoScrollVerticalDirection2) {
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["NONE"] = 0] = "NONE";
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["UP"] = 1] = "UP";
  AutoScrollVerticalDirection2[AutoScrollVerticalDirection2["DOWN"] = 2] = "DOWN";
})(AutoScrollVerticalDirection || (AutoScrollVerticalDirection = {}));
var AutoScrollHorizontalDirection;
(function(AutoScrollHorizontalDirection2) {
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["NONE"] = 0] = "NONE";
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["LEFT"] = 1] = "LEFT";
  AutoScrollHorizontalDirection2[AutoScrollHorizontalDirection2["RIGHT"] = 2] = "RIGHT";
})(AutoScrollHorizontalDirection || (AutoScrollHorizontalDirection = {}));
function createDropListRef(injector, element) {
  return new DropListRef(element, injector.get(DragDropRegistry), injector.get(DOCUMENT), injector.get(NgZone), injector.get(ViewportRuler));
}
var DropListRef = class {
  _dragDropRegistry;
  _ngZone;
  _viewportRuler;
  element;
  disabled = false;
  sortingDisabled = false;
  lockAxis = null;
  autoScrollDisabled = false;
  autoScrollStep = 2;
  hasAnchor = false;
  enterPredicate = () => true;
  sortPredicate = () => true;
  beforeStarted = new Subject();
  entered = new Subject();
  exited = new Subject();
  dropped = new Subject();
  sorted = new Subject();
  receivingStarted = new Subject();
  receivingStopped = new Subject();
  data;
  _container;
  _isDragging = false;
  _parentPositions;
  _sortStrategy;
  _domRect;
  _draggables = [];
  _siblings = [];
  _activeSiblings = /* @__PURE__ */ new Set();
  _viewportScrollSubscription = Subscription.EMPTY;
  _verticalScrollDirection = AutoScrollVerticalDirection.NONE;
  _horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
  _scrollNode;
  _stopScrollTimers = new Subject();
  _cachedShadowRoot = null;
  _document;
  _scrollableElements = [];
  _initialScrollSnap;
  _direction = "ltr";
  constructor(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
    this._dragDropRegistry = _dragDropRegistry;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    const coercedElement = this.element = coerceElement(element);
    this._document = _document;
    this.withOrientation("vertical").withElementContainer(coercedElement);
    _dragDropRegistry.registerDropContainer(this);
    this._parentPositions = new ParentPositionTracker(_document);
  }
  dispose() {
    this._stopScrolling();
    this._stopScrollTimers.complete();
    this._viewportScrollSubscription.unsubscribe();
    this.beforeStarted.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this.sorted.complete();
    this.receivingStarted.complete();
    this.receivingStopped.complete();
    this._activeSiblings.clear();
    this._scrollNode = null;
    this._parentPositions.clear();
    this._dragDropRegistry.removeDropContainer(this);
  }
  isDragging() {
    return this._isDragging;
  }
  start() {
    this._draggingStarted();
    this._notifyReceivingSiblings();
  }
  enter(item, pointerX, pointerY, index) {
    this._draggingStarted();
    if (index == null && this.sortingDisabled) {
      index = this._draggables.indexOf(item);
    }
    this._sortStrategy.enter(item, pointerX, pointerY, index);
    this._cacheParentPositions();
    this._notifyReceivingSiblings();
    this.entered.next({
      item,
      container: this,
      currentIndex: this.getItemIndex(item)
    });
  }
  exit(item) {
    this._reset();
    this.exited.next({
      item,
      container: this
    });
  }
  drop(item, currentIndex, previousIndex, previousContainer, isPointerOverContainer, distance, dropPoint, event = {}) {
    this._reset();
    this.dropped.next({
      item,
      currentIndex,
      previousIndex,
      container: this,
      previousContainer,
      isPointerOverContainer,
      distance,
      dropPoint,
      event
    });
  }
  withItems(items) {
    const previousItems = this._draggables;
    this._draggables = items;
    items.forEach((item) => item._withDropContainer(this));
    if (this.isDragging()) {
      const draggedItems = previousItems.filter((item) => item.isDragging());
      if (draggedItems.every((item) => items.indexOf(item) === -1)) {
        this._reset();
      } else {
        this._sortStrategy.withItems(this._draggables);
      }
    }
    return this;
  }
  withDirection(direction) {
    this._direction = direction;
    if (this._sortStrategy instanceof SingleAxisSortStrategy) {
      this._sortStrategy.direction = direction;
    }
    return this;
  }
  connectedTo(connectedTo) {
    this._siblings = connectedTo.slice();
    return this;
  }
  withOrientation(orientation) {
    if (orientation === "mixed") {
      this._sortStrategy = new MixedSortStrategy(this._document, this._dragDropRegistry);
    } else {
      const strategy = new SingleAxisSortStrategy(this._dragDropRegistry);
      strategy.direction = this._direction;
      strategy.orientation = orientation;
      this._sortStrategy = strategy;
    }
    this._sortStrategy.withElementContainer(this._container);
    this._sortStrategy.withSortPredicate((index, item) => this.sortPredicate(index, item, this));
    return this;
  }
  withScrollableParents(elements) {
    const element = this._container;
    this._scrollableElements = elements.indexOf(element) === -1 ? [element, ...elements] : elements.slice();
    return this;
  }
  withElementContainer(container) {
    if (container === this._container) {
      return this;
    }
    const element = coerceElement(this.element);
    if ((typeof ngDevMode === "undefined" || ngDevMode) && container !== element && !element.contains(container)) {
      throw new Error("Invalid DOM structure for drop list. Alternate container element must be a descendant of the drop list.");
    }
    const oldContainerIndex = this._scrollableElements.indexOf(this._container);
    const newContainerIndex = this._scrollableElements.indexOf(container);
    if (oldContainerIndex > -1) {
      this._scrollableElements.splice(oldContainerIndex, 1);
    }
    if (newContainerIndex > -1) {
      this._scrollableElements.splice(newContainerIndex, 1);
    }
    if (this._sortStrategy) {
      this._sortStrategy.withElementContainer(container);
    }
    this._cachedShadowRoot = null;
    this._scrollableElements.unshift(container);
    this._container = container;
    return this;
  }
  getScrollableParents() {
    return this._scrollableElements;
  }
  getItemIndex(item) {
    return this._isDragging ? this._sortStrategy.getItemIndex(item) : this._draggables.indexOf(item);
  }
  getItemAtIndex(index) {
    return this._isDragging ? this._sortStrategy.getItemAtIndex(index) : this._draggables[index] || null;
  }
  isReceiving() {
    return this._activeSiblings.size > 0;
  }
  _sortItem(item, pointerX, pointerY, pointerDelta) {
    if (this.sortingDisabled || !this._domRect || !isPointerNearDomRect(this._domRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
      return;
    }
    const result = this._sortStrategy.sort(item, pointerX, pointerY, pointerDelta);
    if (result) {
      this.sorted.next({
        previousIndex: result.previousIndex,
        currentIndex: result.currentIndex,
        container: this,
        item
      });
    }
  }
  _startScrollingIfNecessary(pointerX, pointerY) {
    if (this.autoScrollDisabled) {
      return;
    }
    let scrollNode;
    let verticalScrollDirection = AutoScrollVerticalDirection.NONE;
    let horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
    this._parentPositions.positions.forEach((position, element) => {
      if (element === this._document || !position.clientRect || scrollNode) {
        return;
      }
      if (isPointerNearDomRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
        [verticalScrollDirection, horizontalScrollDirection] = getElementScrollDirections(element, position.clientRect, this._direction, pointerX, pointerY);
        if (verticalScrollDirection || horizontalScrollDirection) {
          scrollNode = element;
        }
      }
    });
    if (!verticalScrollDirection && !horizontalScrollDirection) {
      const {
        width,
        height
      } = this._viewportRuler.getViewportSize();
      const domRect = {
        width,
        height,
        top: 0,
        right: width,
        bottom: height,
        left: 0
      };
      verticalScrollDirection = getVerticalScrollDirection(domRect, pointerY);
      horizontalScrollDirection = getHorizontalScrollDirection(domRect, pointerX);
      scrollNode = window;
    }
    if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
      this._verticalScrollDirection = verticalScrollDirection;
      this._horizontalScrollDirection = horizontalScrollDirection;
      this._scrollNode = scrollNode;
      if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
        this._ngZone.runOutsideAngular(this._startScrollInterval);
      } else {
        this._stopScrolling();
      }
    }
  }
  _stopScrolling() {
    this._stopScrollTimers.next();
  }
  _draggingStarted() {
    const styles = this._container.style;
    this.beforeStarted.next();
    this._isDragging = true;
    if ((typeof ngDevMode === "undefined" || ngDevMode) && this._container !== coerceElement(this.element)) {
      for (const drag of this._draggables) {
        if (!drag.isDragging() && drag.getVisibleElement().parentNode !== this._container) {
          throw new Error("Invalid DOM structure for drop list. All items must be placed directly inside of the element container.");
        }
      }
    }
    this._initialScrollSnap = styles.msScrollSnapType || styles.scrollSnapType || "";
    styles.scrollSnapType = styles.msScrollSnapType = "none";
    this._sortStrategy.start(this._draggables);
    this._cacheParentPositions();
    this._viewportScrollSubscription.unsubscribe();
    this._listenToScrollEvents();
  }
  _cacheParentPositions() {
    this._parentPositions.cache(this._scrollableElements);
    this._domRect = this._parentPositions.positions.get(this._container).clientRect;
  }
  _reset() {
    this._isDragging = false;
    const styles = this._container.style;
    styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap;
    this._siblings.forEach((sibling) => sibling._stopReceiving(this));
    this._sortStrategy.reset();
    this._stopScrolling();
    this._viewportScrollSubscription.unsubscribe();
    this._parentPositions.clear();
  }
  _startScrollInterval = () => {
    this._stopScrolling();
    interval(0, animationFrameScheduler).pipe(takeUntil(this._stopScrollTimers)).subscribe(() => {
      const node = this._scrollNode;
      const scrollStep = this.autoScrollStep;
      if (this._verticalScrollDirection === AutoScrollVerticalDirection.UP) {
        node.scrollBy(0, -scrollStep);
      } else if (this._verticalScrollDirection === AutoScrollVerticalDirection.DOWN) {
        node.scrollBy(0, scrollStep);
      }
      if (this._horizontalScrollDirection === AutoScrollHorizontalDirection.LEFT) {
        node.scrollBy(-scrollStep, 0);
      } else if (this._horizontalScrollDirection === AutoScrollHorizontalDirection.RIGHT) {
        node.scrollBy(scrollStep, 0);
      }
    });
  };
  _isOverContainer(x, y) {
    return this._domRect != null && isInsideClientRect(this._domRect, x, y);
  }
  _getSiblingContainerFromPosition(item, x, y) {
    return this._siblings.find((sibling) => sibling._canReceive(item, x, y));
  }
  _canReceive(item, x, y) {
    if (!this._domRect || !isInsideClientRect(this._domRect, x, y) || !this.enterPredicate(item, this)) {
      return false;
    }
    const elementFromPoint = this._getShadowRoot().elementFromPoint(x, y);
    if (!elementFromPoint) {
      return false;
    }
    return elementFromPoint === this._container || this._container.contains(elementFromPoint);
  }
  _startReceiving(sibling, items) {
    const activeSiblings = this._activeSiblings;
    if (!activeSiblings.has(sibling) && items.every((item) => {
      return this.enterPredicate(item, this) || this._draggables.indexOf(item) > -1;
    })) {
      activeSiblings.add(sibling);
      this._cacheParentPositions();
      this._listenToScrollEvents();
      this.receivingStarted.next({
        initiator: sibling,
        receiver: this,
        items
      });
    }
  }
  _stopReceiving(sibling) {
    this._activeSiblings.delete(sibling);
    this._viewportScrollSubscription.unsubscribe();
    this.receivingStopped.next({
      initiator: sibling,
      receiver: this
    });
  }
  _listenToScrollEvents() {
    this._viewportScrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe((event) => {
      if (this.isDragging()) {
        const scrollDifference = this._parentPositions.handleScroll(event);
        if (scrollDifference) {
          this._sortStrategy.updateOnScroll(scrollDifference.top, scrollDifference.left);
        }
      } else if (this.isReceiving()) {
        this._cacheParentPositions();
      }
    });
  }
  _getShadowRoot() {
    if (!this._cachedShadowRoot) {
      const shadowRoot = _getShadowRoot(this._container);
      this._cachedShadowRoot = shadowRoot || this._document;
    }
    return this._cachedShadowRoot;
  }
  _notifyReceivingSiblings() {
    const draggedItems = this._sortStrategy.getActiveItemsSnapshot().filter((item) => item.isDragging());
    this._siblings.forEach((sibling) => sibling._startReceiving(this, draggedItems));
  }
};
function getVerticalScrollDirection(clientRect, pointerY) {
  const {
    top,
    bottom,
    height
  } = clientRect;
  const yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
    return AutoScrollVerticalDirection.UP;
  } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
    return AutoScrollVerticalDirection.DOWN;
  }
  return AutoScrollVerticalDirection.NONE;
}
function getHorizontalScrollDirection(clientRect, pointerX) {
  const {
    left,
    right,
    width
  } = clientRect;
  const xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
    return AutoScrollHorizontalDirection.LEFT;
  } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
    return AutoScrollHorizontalDirection.RIGHT;
  }
  return AutoScrollHorizontalDirection.NONE;
}
function getElementScrollDirections(element, clientRect, direction, pointerX, pointerY) {
  const computedVertical = getVerticalScrollDirection(clientRect, pointerY);
  const computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
  let verticalScrollDirection = AutoScrollVerticalDirection.NONE;
  let horizontalScrollDirection = AutoScrollHorizontalDirection.NONE;
  if (computedVertical) {
    const scrollTop = element.scrollTop;
    if (computedVertical === AutoScrollVerticalDirection.UP) {
      if (scrollTop > 0) {
        verticalScrollDirection = AutoScrollVerticalDirection.UP;
      }
    } else if (element.scrollHeight - scrollTop > element.clientHeight) {
      verticalScrollDirection = AutoScrollVerticalDirection.DOWN;
    }
  }
  if (computedHorizontal) {
    const scrollLeft = element.scrollLeft;
    if (direction === "rtl") {
      if (computedHorizontal === AutoScrollHorizontalDirection.RIGHT) {
        if (scrollLeft < 0) {
          horizontalScrollDirection = AutoScrollHorizontalDirection.RIGHT;
        }
      } else if (element.scrollWidth + scrollLeft > element.clientWidth) {
        horizontalScrollDirection = AutoScrollHorizontalDirection.LEFT;
      }
    } else {
      if (computedHorizontal === AutoScrollHorizontalDirection.LEFT) {
        if (scrollLeft > 0) {
          horizontalScrollDirection = AutoScrollHorizontalDirection.LEFT;
        }
      } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
        horizontalScrollDirection = AutoScrollHorizontalDirection.RIGHT;
      }
    }
  }
  return [verticalScrollDirection, horizontalScrollDirection];
}
var DragDrop = class _DragDrop {
  _injector = inject(Injector);
  constructor() {
  }
  createDrag(element, config) {
    return createDragRef(this._injector, element, config);
  }
  createDropList(element) {
    return createDropListRef(this._injector, element);
  }
  static \u0275fac = function DragDrop_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragDrop)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DragDrop,
    factory: _DragDrop.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDrop, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CDK_DRAG_PARENT = new InjectionToken("CDK_DRAG_PARENT");
function assertElementNode(node, name) {
  if (node.nodeType !== 1) {
    throw Error(`${name} must be attached to an element node. Currently attached to "${node.nodeName}".`);
  }
}
var CDK_DRAG_HANDLE = new InjectionToken("CdkDragHandle");
var CdkDragHandle = class _CdkDragHandle {
  element = inject(ElementRef);
  _parentDrag = inject(CDK_DRAG_PARENT, {
    optional: true,
    skipSelf: true
  });
  _dragDropRegistry = inject(DragDropRegistry);
  _stateChanges = new Subject();
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._stateChanges.next(this);
  }
  _disabled = false;
  constructor() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      assertElementNode(this.element.nativeElement, "cdkDragHandle");
    }
    this._parentDrag?._addHandle(this);
  }
  ngAfterViewInit() {
    if (!this._parentDrag) {
      let parent = this.element.nativeElement.parentElement;
      while (parent) {
        const ref = this._dragDropRegistry.getDragDirectiveForNode(parent);
        if (ref) {
          this._parentDrag = ref;
          ref._addHandle(this);
          break;
        }
        parent = parent.parentElement;
      }
    }
  }
  ngOnDestroy() {
    this._parentDrag?._removeHandle(this);
    this._stateChanges.complete();
  }
  static \u0275fac = function CdkDragHandle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDragHandle)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDragHandle,
    selectors: [["", "cdkDragHandle", ""]],
    hostAttrs: [1, "cdk-drag-handle"],
    inputs: {
      disabled: [2, "cdkDragHandleDisabled", "disabled", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_HANDLE,
      useExisting: _CdkDragHandle
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragHandle, [{
    type: Directive,
    args: [{
      selector: "[cdkDragHandle]",
      host: {
        "class": "cdk-drag-handle"
      },
      providers: [{
        provide: CDK_DRAG_HANDLE,
        useExisting: CdkDragHandle
      }]
    }]
  }], () => [], {
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDragHandleDisabled",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CDK_DRAG_CONFIG = new InjectionToken("CDK_DRAG_CONFIG");
var CDK_DROP_LIST = new InjectionToken("CdkDropList");
var CdkDrag = class _CdkDrag {
  element = inject(ElementRef);
  dropContainer = inject(CDK_DROP_LIST, {
    optional: true,
    skipSelf: true
  });
  _ngZone = inject(NgZone);
  _viewContainerRef = inject(ViewContainerRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  _selfHandle = inject(CDK_DRAG_HANDLE, {
    optional: true,
    self: true
  });
  _parentDrag = inject(CDK_DRAG_PARENT, {
    optional: true,
    skipSelf: true
  });
  _dragDropRegistry = inject(DragDropRegistry);
  _destroyed = new Subject();
  _handles = new BehaviorSubject([]);
  _previewTemplate = null;
  _placeholderTemplate = null;
  _dragRef;
  data;
  lockAxis = null;
  rootElementSelector;
  boundaryElement;
  dragStartDelay;
  freeDragPosition;
  get disabled() {
    return this._disabled || !!(this.dropContainer && this.dropContainer.disabled);
  }
  set disabled(value) {
    this._disabled = value;
    this._dragRef.disabled = this._disabled;
  }
  _disabled = false;
  constrainPosition;
  previewClass;
  previewContainer;
  scale = 1;
  started = new EventEmitter();
  released = new EventEmitter();
  ended = new EventEmitter();
  entered = new EventEmitter();
  exited = new EventEmitter();
  dropped = new EventEmitter();
  moved = new Observable((observer) => {
    const subscription = this._dragRef.moved.pipe(map((movedEvent) => ({
      source: this,
      pointerPosition: movedEvent.pointerPosition,
      event: movedEvent.event,
      delta: movedEvent.delta,
      distance: movedEvent.distance
    }))).subscribe(observer);
    return () => {
      subscription.unsubscribe();
    };
  });
  _injector = inject(Injector);
  constructor() {
    const dropContainer = this.dropContainer;
    const config = inject(CDK_DRAG_CONFIG, {
      optional: true
    });
    this._dragRef = createDragRef(this._injector, this.element, {
      dragStartThreshold: config && config.dragStartThreshold != null ? config.dragStartThreshold : 5,
      pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ? config.pointerDirectionChangeThreshold : 5,
      zIndex: config?.zIndex
    });
    this._dragRef.data = this;
    this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement, this);
    if (config) {
      this._assignDefaults(config);
    }
    if (dropContainer) {
      dropContainer.addItem(this);
      dropContainer._dropListRef.beforeStarted.pipe(takeUntil(this._destroyed)).subscribe(() => {
        this._dragRef.scale = this.scale;
      });
    }
    this._syncInputs(this._dragRef);
    this._handleEvents(this._dragRef);
  }
  getPlaceholderElement() {
    return this._dragRef.getPlaceholderElement();
  }
  getRootElement() {
    return this._dragRef.getRootElement();
  }
  reset() {
    this._dragRef.reset();
  }
  resetToBoundary() {
    this._dragRef.resetToBoundary();
  }
  getFreeDragPosition() {
    return this._dragRef.getFreeDragPosition();
  }
  setFreeDragPosition(value) {
    this._dragRef.setFreeDragPosition(value);
  }
  ngAfterViewInit() {
    afterNextRender(() => {
      this._updateRootElement();
      this._setupHandlesListener();
      this._dragRef.scale = this.scale;
      if (this.freeDragPosition) {
        this._dragRef.setFreeDragPosition(this.freeDragPosition);
      }
    }, {
      injector: this._injector
    });
  }
  ngOnChanges(changes) {
    const rootSelectorChange = changes["rootElementSelector"];
    const positionChange = changes["freeDragPosition"];
    if (rootSelectorChange && !rootSelectorChange.firstChange) {
      this._updateRootElement();
    }
    this._dragRef.scale = this.scale;
    if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
      this._dragRef.setFreeDragPosition(this.freeDragPosition);
    }
  }
  ngOnDestroy() {
    if (this.dropContainer) {
      this.dropContainer.removeItem(this);
    }
    this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement);
    this._ngZone.runOutsideAngular(() => {
      this._handles.complete();
      this._destroyed.next();
      this._destroyed.complete();
      this._dragRef.dispose();
    });
  }
  _addHandle(handle) {
    const handles = this._handles.getValue();
    handles.push(handle);
    this._handles.next(handles);
  }
  _removeHandle(handle) {
    const handles = this._handles.getValue();
    const index = handles.indexOf(handle);
    if (index > -1) {
      handles.splice(index, 1);
      this._handles.next(handles);
    }
  }
  _setPreviewTemplate(preview) {
    this._previewTemplate = preview;
  }
  _resetPreviewTemplate(preview) {
    if (preview === this._previewTemplate) {
      this._previewTemplate = null;
    }
  }
  _setPlaceholderTemplate(placeholder) {
    this._placeholderTemplate = placeholder;
  }
  _resetPlaceholderTemplate(placeholder) {
    if (placeholder === this._placeholderTemplate) {
      this._placeholderTemplate = null;
    }
  }
  _updateRootElement() {
    const element = this.element.nativeElement;
    let rootElement = element;
    if (this.rootElementSelector) {
      rootElement = element.closest !== void 0 ? element.closest(this.rootElementSelector) : element.parentElement?.closest(this.rootElementSelector);
    }
    if (rootElement && (typeof ngDevMode === "undefined" || ngDevMode)) {
      assertElementNode(rootElement, "cdkDrag");
    }
    this._dragRef.withRootElement(rootElement || element);
  }
  _getBoundaryElement() {
    const boundary = this.boundaryElement;
    if (!boundary) {
      return null;
    }
    if (typeof boundary === "string") {
      return this.element.nativeElement.closest(boundary);
    }
    return coerceElement(boundary);
  }
  _syncInputs(ref) {
    ref.beforeStarted.subscribe(() => {
      if (!ref.isDragging()) {
        const dir = this._dir;
        const dragStartDelay = this.dragStartDelay;
        const placeholder = this._placeholderTemplate ? {
          template: this._placeholderTemplate.templateRef,
          context: this._placeholderTemplate.data,
          viewContainer: this._viewContainerRef
        } : null;
        const preview = this._previewTemplate ? {
          template: this._previewTemplate.templateRef,
          context: this._previewTemplate.data,
          matchSize: this._previewTemplate.matchSize,
          viewContainer: this._viewContainerRef
        } : null;
        ref.disabled = this.disabled;
        ref.lockAxis = this.lockAxis;
        ref.scale = this.scale;
        ref.dragStartDelay = typeof dragStartDelay === "object" && dragStartDelay ? dragStartDelay : coerceNumberProperty(dragStartDelay);
        ref.constrainPosition = this.constrainPosition;
        ref.previewClass = this.previewClass;
        ref.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview).withPreviewContainer(this.previewContainer || "global");
        if (dir) {
          ref.withDirection(dir.value);
        }
      }
    });
    ref.beforeStarted.pipe(take(1)).subscribe(() => {
      if (this._parentDrag) {
        ref.withParent(this._parentDrag._dragRef);
        return;
      }
      let parent = this.element.nativeElement.parentElement;
      while (parent) {
        const parentDrag = this._dragDropRegistry.getDragDirectiveForNode(parent);
        if (parentDrag) {
          ref.withParent(parentDrag._dragRef);
          break;
        }
        parent = parent.parentElement;
      }
    });
  }
  _handleEvents(ref) {
    ref.started.subscribe((startEvent) => {
      this.started.emit({
        source: this,
        event: startEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.released.subscribe((releaseEvent) => {
      this.released.emit({
        source: this,
        event: releaseEvent.event
      });
    });
    ref.ended.subscribe((endEvent) => {
      this.ended.emit({
        source: this,
        distance: endEvent.distance,
        dropPoint: endEvent.dropPoint,
        event: endEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe((enterEvent) => {
      this.entered.emit({
        container: enterEvent.container.data,
        item: this,
        currentIndex: enterEvent.currentIndex
      });
    });
    ref.exited.subscribe((exitEvent) => {
      this.exited.emit({
        container: exitEvent.container.data,
        item: this
      });
    });
    ref.dropped.subscribe((dropEvent) => {
      this.dropped.emit({
        previousIndex: dropEvent.previousIndex,
        currentIndex: dropEvent.currentIndex,
        previousContainer: dropEvent.previousContainer.data,
        container: dropEvent.container.data,
        isPointerOverContainer: dropEvent.isPointerOverContainer,
        item: this,
        distance: dropEvent.distance,
        dropPoint: dropEvent.dropPoint,
        event: dropEvent.event
      });
    });
  }
  _assignDefaults(config) {
    const {
      lockAxis,
      dragStartDelay,
      constrainPosition,
      previewClass,
      boundaryElement,
      draggingDisabled,
      rootElementSelector,
      previewContainer
    } = config;
    this.disabled = draggingDisabled == null ? false : draggingDisabled;
    this.dragStartDelay = dragStartDelay || 0;
    this.lockAxis = lockAxis || null;
    if (constrainPosition) {
      this.constrainPosition = constrainPosition;
    }
    if (previewClass) {
      this.previewClass = previewClass;
    }
    if (boundaryElement) {
      this.boundaryElement = boundaryElement;
    }
    if (rootElementSelector) {
      this.rootElementSelector = rootElementSelector;
    }
    if (previewContainer) {
      this.previewContainer = previewContainer;
    }
  }
  _setupHandlesListener() {
    this._handles.pipe(tap((handles) => {
      const handleElements = handles.map((handle) => handle.element);
      if (this._selfHandle && this.rootElementSelector) {
        handleElements.push(this.element);
      }
      this._dragRef.withHandles(handleElements);
    }), switchMap((handles) => {
      return merge(...handles.map((item) => item._stateChanges.pipe(startWith(item))));
    }), takeUntil(this._destroyed)).subscribe((handleInstance) => {
      const dragRef = this._dragRef;
      const handle = handleInstance.element.nativeElement;
      handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
    });
  }
  static \u0275fac = function CdkDrag_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDrag)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDrag,
    selectors: [["", "cdkDrag", ""]],
    hostAttrs: [1, "cdk-drag"],
    hostVars: 4,
    hostBindings: function CdkDrag_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
      }
    },
    inputs: {
      data: [0, "cdkDragData", "data"],
      lockAxis: [0, "cdkDragLockAxis", "lockAxis"],
      rootElementSelector: [0, "cdkDragRootElement", "rootElementSelector"],
      boundaryElement: [0, "cdkDragBoundary", "boundaryElement"],
      dragStartDelay: [0, "cdkDragStartDelay", "dragStartDelay"],
      freeDragPosition: [0, "cdkDragFreeDragPosition", "freeDragPosition"],
      disabled: [2, "cdkDragDisabled", "disabled", booleanAttribute],
      constrainPosition: [0, "cdkDragConstrainPosition", "constrainPosition"],
      previewClass: [0, "cdkDragPreviewClass", "previewClass"],
      previewContainer: [0, "cdkDragPreviewContainer", "previewContainer"],
      scale: [2, "cdkDragScale", "scale", numberAttribute]
    },
    outputs: {
      started: "cdkDragStarted",
      released: "cdkDragReleased",
      ended: "cdkDragEnded",
      entered: "cdkDragEntered",
      exited: "cdkDragExited",
      dropped: "cdkDragDropped",
      moved: "cdkDragMoved"
    },
    exportAs: ["cdkDrag"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_PARENT,
      useExisting: _CdkDrag
    }]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDrag, [{
    type: Directive,
    args: [{
      selector: "[cdkDrag]",
      exportAs: "cdkDrag",
      host: {
        "class": "cdk-drag",
        "[class.cdk-drag-disabled]": "disabled",
        "[class.cdk-drag-dragging]": "_dragRef.isDragging()"
      },
      providers: [{
        provide: CDK_DRAG_PARENT,
        useExisting: CdkDrag
      }]
    }]
  }], () => [], {
    data: [{
      type: Input,
      args: ["cdkDragData"]
    }],
    lockAxis: [{
      type: Input,
      args: ["cdkDragLockAxis"]
    }],
    rootElementSelector: [{
      type: Input,
      args: ["cdkDragRootElement"]
    }],
    boundaryElement: [{
      type: Input,
      args: ["cdkDragBoundary"]
    }],
    dragStartDelay: [{
      type: Input,
      args: ["cdkDragStartDelay"]
    }],
    freeDragPosition: [{
      type: Input,
      args: ["cdkDragFreeDragPosition"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDragDisabled",
        transform: booleanAttribute
      }]
    }],
    constrainPosition: [{
      type: Input,
      args: ["cdkDragConstrainPosition"]
    }],
    previewClass: [{
      type: Input,
      args: ["cdkDragPreviewClass"]
    }],
    previewContainer: [{
      type: Input,
      args: ["cdkDragPreviewContainer"]
    }],
    scale: [{
      type: Input,
      args: [{
        alias: "cdkDragScale",
        transform: numberAttribute
      }]
    }],
    started: [{
      type: Output,
      args: ["cdkDragStarted"]
    }],
    released: [{
      type: Output,
      args: ["cdkDragReleased"]
    }],
    ended: [{
      type: Output,
      args: ["cdkDragEnded"]
    }],
    entered: [{
      type: Output,
      args: ["cdkDragEntered"]
    }],
    exited: [{
      type: Output,
      args: ["cdkDragExited"]
    }],
    dropped: [{
      type: Output,
      args: ["cdkDragDropped"]
    }],
    moved: [{
      type: Output,
      args: ["cdkDragMoved"]
    }]
  });
})();
var CDK_DROP_LIST_GROUP = new InjectionToken("CdkDropListGroup");
var CdkDropListGroup = class _CdkDropListGroup {
  _items = /* @__PURE__ */ new Set();
  disabled = false;
  ngOnDestroy() {
    this._items.clear();
  }
  static \u0275fac = function CdkDropListGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDropListGroup)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDropListGroup,
    selectors: [["", "cdkDropListGroup", ""]],
    inputs: {
      disabled: [2, "cdkDropListGroupDisabled", "disabled", booleanAttribute]
    },
    exportAs: ["cdkDropListGroup"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DROP_LIST_GROUP,
      useExisting: _CdkDropListGroup
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDropListGroup, [{
    type: Directive,
    args: [{
      selector: "[cdkDropListGroup]",
      exportAs: "cdkDropListGroup",
      providers: [{
        provide: CDK_DROP_LIST_GROUP,
        useExisting: CdkDropListGroup
      }]
    }]
  }], null, {
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListGroupDisabled",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkDropList = class _CdkDropList {
  element = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _scrollDispatcher = inject(ScrollDispatcher);
  _dir = inject(Directionality, {
    optional: true
  });
  _group = inject(CDK_DROP_LIST_GROUP, {
    optional: true,
    skipSelf: true
  });
  _latestSortedRefs;
  _destroyed = new Subject();
  _scrollableParentsResolved = false;
  static _dropLists = [];
  _dropListRef;
  connectedTo = [];
  data;
  orientation = "vertical";
  id = inject(_IdGenerator).getId("cdk-drop-list-");
  lockAxis = null;
  get disabled() {
    return this._disabled || !!this._group && this._group.disabled;
  }
  set disabled(value) {
    this._dropListRef.disabled = this._disabled = value;
  }
  _disabled = false;
  sortingDisabled = false;
  enterPredicate = () => true;
  sortPredicate = () => true;
  autoScrollDisabled = false;
  autoScrollStep;
  elementContainerSelector = null;
  hasAnchor = false;
  dropped = new EventEmitter();
  entered = new EventEmitter();
  exited = new EventEmitter();
  sorted = new EventEmitter();
  _unsortedItems = /* @__PURE__ */ new Set();
  constructor() {
    const config = inject(CDK_DRAG_CONFIG, {
      optional: true
    });
    const injector = inject(Injector);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      assertElementNode(this.element.nativeElement, "cdkDropList");
    }
    this._dropListRef = createDropListRef(injector, this.element);
    this._dropListRef.data = this;
    if (config) {
      this._assignDefaults(config);
    }
    this._dropListRef.enterPredicate = (drag, drop) => {
      return this.enterPredicate(drag.data, drop.data);
    };
    this._dropListRef.sortPredicate = (index, drag, drop) => {
      return this.sortPredicate(index, drag.data, drop.data);
    };
    this._setupInputSyncSubscription(this._dropListRef);
    this._handleEvents(this._dropListRef);
    _CdkDropList._dropLists.push(this);
    if (this._group) {
      this._group._items.add(this);
    }
  }
  addItem(item) {
    this._unsortedItems.add(item);
    item._dragRef._withDropContainer(this._dropListRef);
    if (this._dropListRef.isDragging()) {
      this._syncItemsWithRef(this.getSortedItems().map((item2) => item2._dragRef));
    }
  }
  removeItem(item) {
    this._unsortedItems.delete(item);
    if (this._latestSortedRefs) {
      const index = this._latestSortedRefs.indexOf(item._dragRef);
      if (index > -1) {
        this._latestSortedRefs.splice(index, 1);
        this._syncItemsWithRef(this._latestSortedRefs);
      }
    }
  }
  getSortedItems() {
    return Array.from(this._unsortedItems).sort((a, b) => {
      const documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement());
      return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    });
  }
  ngOnDestroy() {
    const index = _CdkDropList._dropLists.indexOf(this);
    if (index > -1) {
      _CdkDropList._dropLists.splice(index, 1);
    }
    if (this._group) {
      this._group._items.delete(this);
    }
    this._latestSortedRefs = void 0;
    this._unsortedItems.clear();
    this._dropListRef.dispose();
    this._destroyed.next();
    this._destroyed.complete();
  }
  _setupInputSyncSubscription(ref) {
    if (this._dir) {
      this._dir.change.pipe(startWith(this._dir.value), takeUntil(this._destroyed)).subscribe((value) => ref.withDirection(value));
    }
    ref.beforeStarted.subscribe(() => {
      const siblings = coerceArray(this.connectedTo).map((drop) => {
        if (typeof drop === "string") {
          const correspondingDropList = _CdkDropList._dropLists.find((list) => list.id === drop);
          if (!correspondingDropList && (typeof ngDevMode === "undefined" || ngDevMode)) {
            console.warn(`CdkDropList could not find connected drop list with id "${drop}"`);
          }
          return correspondingDropList;
        }
        return drop;
      });
      if (this._group) {
        this._group._items.forEach((drop) => {
          if (siblings.indexOf(drop) === -1) {
            siblings.push(drop);
          }
        });
      }
      if (!this._scrollableParentsResolved) {
        const scrollableParents = this._scrollDispatcher.getAncestorScrollContainers(this.element).map((scrollable) => scrollable.getElementRef().nativeElement);
        this._dropListRef.withScrollableParents(scrollableParents);
        this._scrollableParentsResolved = true;
      }
      if (this.elementContainerSelector) {
        const container = this.element.nativeElement.querySelector(this.elementContainerSelector);
        if (!container && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw new Error(`CdkDropList could not find an element container matching the selector "${this.elementContainerSelector}"`);
        }
        ref.withElementContainer(container);
      }
      ref.disabled = this.disabled;
      ref.lockAxis = this.lockAxis;
      ref.sortingDisabled = this.sortingDisabled;
      ref.autoScrollDisabled = this.autoScrollDisabled;
      ref.autoScrollStep = coerceNumberProperty(this.autoScrollStep, 2);
      ref.hasAnchor = this.hasAnchor;
      ref.connectedTo(siblings.filter((drop) => drop && drop !== this).map((list) => list._dropListRef)).withOrientation(this.orientation);
    });
  }
  _handleEvents(ref) {
    ref.beforeStarted.subscribe(() => {
      this._syncItemsWithRef(this.getSortedItems().map((item) => item._dragRef));
      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe((event) => {
      this.entered.emit({
        container: this,
        item: event.item.data,
        currentIndex: event.currentIndex
      });
    });
    ref.exited.subscribe((event) => {
      this.exited.emit({
        container: this,
        item: event.item.data
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.sorted.subscribe((event) => {
      this.sorted.emit({
        previousIndex: event.previousIndex,
        currentIndex: event.currentIndex,
        container: this,
        item: event.item.data
      });
    });
    ref.dropped.subscribe((dropEvent) => {
      this.dropped.emit({
        previousIndex: dropEvent.previousIndex,
        currentIndex: dropEvent.currentIndex,
        previousContainer: dropEvent.previousContainer.data,
        container: dropEvent.container.data,
        item: dropEvent.item.data,
        isPointerOverContainer: dropEvent.isPointerOverContainer,
        distance: dropEvent.distance,
        dropPoint: dropEvent.dropPoint,
        event: dropEvent.event
      });
      this._changeDetectorRef.markForCheck();
    });
    merge(ref.receivingStarted, ref.receivingStopped).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  _assignDefaults(config) {
    const {
      lockAxis,
      draggingDisabled,
      sortingDisabled,
      listAutoScrollDisabled,
      listOrientation
    } = config;
    this.disabled = draggingDisabled == null ? false : draggingDisabled;
    this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
    this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
    this.orientation = listOrientation || "vertical";
    this.lockAxis = lockAxis || null;
  }
  _syncItemsWithRef(items) {
    this._latestSortedRefs = items;
    this._dropListRef.withItems(items);
  }
  static \u0275fac = function CdkDropList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDropList)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDropList,
    selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
    hostAttrs: [1, "cdk-drop-list"],
    hostVars: 7,
    hostBindings: function CdkDropList_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.id);
        \u0275\u0275classProp("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
      }
    },
    inputs: {
      connectedTo: [0, "cdkDropListConnectedTo", "connectedTo"],
      data: [0, "cdkDropListData", "data"],
      orientation: [0, "cdkDropListOrientation", "orientation"],
      id: "id",
      lockAxis: [0, "cdkDropListLockAxis", "lockAxis"],
      disabled: [2, "cdkDropListDisabled", "disabled", booleanAttribute],
      sortingDisabled: [2, "cdkDropListSortingDisabled", "sortingDisabled", booleanAttribute],
      enterPredicate: [0, "cdkDropListEnterPredicate", "enterPredicate"],
      sortPredicate: [0, "cdkDropListSortPredicate", "sortPredicate"],
      autoScrollDisabled: [2, "cdkDropListAutoScrollDisabled", "autoScrollDisabled", booleanAttribute],
      autoScrollStep: [0, "cdkDropListAutoScrollStep", "autoScrollStep"],
      elementContainerSelector: [0, "cdkDropListElementContainer", "elementContainerSelector"],
      hasAnchor: [2, "cdkDropListHasAnchor", "hasAnchor", booleanAttribute]
    },
    outputs: {
      dropped: "cdkDropListDropped",
      entered: "cdkDropListEntered",
      exited: "cdkDropListExited",
      sorted: "cdkDropListSorted"
    },
    exportAs: ["cdkDropList"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DROP_LIST_GROUP,
      useValue: void 0
    }, {
      provide: CDK_DROP_LIST,
      useExisting: _CdkDropList
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDropList, [{
    type: Directive,
    args: [{
      selector: "[cdkDropList], cdk-drop-list",
      exportAs: "cdkDropList",
      providers: [{
        provide: CDK_DROP_LIST_GROUP,
        useValue: void 0
      }, {
        provide: CDK_DROP_LIST,
        useExisting: CdkDropList
      }],
      host: {
        "class": "cdk-drop-list",
        "[attr.id]": "id",
        "[class.cdk-drop-list-disabled]": "disabled",
        "[class.cdk-drop-list-dragging]": "_dropListRef.isDragging()",
        "[class.cdk-drop-list-receiving]": "_dropListRef.isReceiving()"
      }
    }]
  }], () => [], {
    connectedTo: [{
      type: Input,
      args: ["cdkDropListConnectedTo"]
    }],
    data: [{
      type: Input,
      args: ["cdkDropListData"]
    }],
    orientation: [{
      type: Input,
      args: ["cdkDropListOrientation"]
    }],
    id: [{
      type: Input
    }],
    lockAxis: [{
      type: Input,
      args: ["cdkDropListLockAxis"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListDisabled",
        transform: booleanAttribute
      }]
    }],
    sortingDisabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListSortingDisabled",
        transform: booleanAttribute
      }]
    }],
    enterPredicate: [{
      type: Input,
      args: ["cdkDropListEnterPredicate"]
    }],
    sortPredicate: [{
      type: Input,
      args: ["cdkDropListSortPredicate"]
    }],
    autoScrollDisabled: [{
      type: Input,
      args: [{
        alias: "cdkDropListAutoScrollDisabled",
        transform: booleanAttribute
      }]
    }],
    autoScrollStep: [{
      type: Input,
      args: ["cdkDropListAutoScrollStep"]
    }],
    elementContainerSelector: [{
      type: Input,
      args: ["cdkDropListElementContainer"]
    }],
    hasAnchor: [{
      type: Input,
      args: [{
        alias: "cdkDropListHasAnchor",
        transform: booleanAttribute
      }]
    }],
    dropped: [{
      type: Output,
      args: ["cdkDropListDropped"]
    }],
    entered: [{
      type: Output,
      args: ["cdkDropListEntered"]
    }],
    exited: [{
      type: Output,
      args: ["cdkDropListExited"]
    }],
    sorted: [{
      type: Output,
      args: ["cdkDropListSorted"]
    }]
  });
})();
var CDK_DRAG_PREVIEW = new InjectionToken("CdkDragPreview");
var CdkDragPreview = class _CdkDragPreview {
  templateRef = inject(TemplateRef);
  _drag = inject(CDK_DRAG_PARENT, {
    optional: true
  });
  data;
  matchSize = false;
  constructor() {
    this._drag?._setPreviewTemplate(this);
  }
  ngOnDestroy() {
    this._drag?._resetPreviewTemplate(this);
  }
  static \u0275fac = function CdkDragPreview_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDragPreview)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDragPreview,
    selectors: [["ng-template", "cdkDragPreview", ""]],
    inputs: {
      data: "data",
      matchSize: [2, "matchSize", "matchSize", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_PREVIEW,
      useExisting: _CdkDragPreview
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragPreview, [{
    type: Directive,
    args: [{
      selector: "ng-template[cdkDragPreview]",
      providers: [{
        provide: CDK_DRAG_PREVIEW,
        useExisting: CdkDragPreview
      }]
    }]
  }], () => [], {
    data: [{
      type: Input
    }],
    matchSize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var CDK_DRAG_PLACEHOLDER = new InjectionToken("CdkDragPlaceholder");
var CdkDragPlaceholder = class _CdkDragPlaceholder {
  templateRef = inject(TemplateRef);
  _drag = inject(CDK_DRAG_PARENT, {
    optional: true
  });
  data;
  constructor() {
    this._drag?._setPlaceholderTemplate(this);
  }
  ngOnDestroy() {
    this._drag?._resetPlaceholderTemplate(this);
  }
  static \u0275fac = function CdkDragPlaceholder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkDragPlaceholder)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkDragPlaceholder,
    selectors: [["ng-template", "cdkDragPlaceholder", ""]],
    inputs: {
      data: "data"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_DRAG_PLACEHOLDER,
      useExisting: _CdkDragPlaceholder
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDragPlaceholder, [{
    type: Directive,
    args: [{
      selector: "ng-template[cdkDragPlaceholder]",
      providers: [{
        provide: CDK_DRAG_PLACEHOLDER,
        useExisting: CdkDragPlaceholder
      }]
    }]
  }], () => [], {
    data: [{
      type: Input
    }]
  });
})();
var DRAG_DROP_DIRECTIVES = [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder];
var DragDropModule = class _DragDropModule {
  static \u0275fac = function DragDropModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DragDropModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _DragDropModule,
    imports: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
    exports: [CdkScrollableModule, CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [DragDrop],
    imports: [CdkScrollableModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragDropModule, [{
    type: NgModule,
    args: [{
      imports: DRAG_DROP_DIRECTIVES,
      exports: [CdkScrollableModule, ...DRAG_DROP_DIRECTIVES],
      providers: [DragDrop]
    }]
  }], null, null);
})();

// src/app/modules/clientes/seguimiento-pedidos/seguimiento-pedido-facade.service.ts
var SeguimientoPedidoFacadeService = class _SeguimientoPedidoFacadeService {
  constructor() {
    this.dataApi = inject(DataApiService);
    this.toast = inject(ToastrServiceLocal);
    this._mensajesHttp = inject(MensajesHttpService);
    this.Cargando$ = new BehaviorSubject(false);
    this.responseCargando$ = this.Cargando$.asObservable();
    this.Pedidos$ = new BehaviorSubject([]);
    this.responsePedidos$ = this.Pedidos$.asObservable();
    this.Reparto$ = new BehaviorSubject([]);
    this.responseReparto$ = this.Reparto$.asObservable();
    this.EstadoProceso$ = new BehaviorSubject([]);
    this.responseEstadoProceso$ = this.EstadoProceso$.asObservable();
  }
  MostrarSeguimientoPedidos(params) {
    this.Cargando$.next(true);
    this.Pedidos$.next([]);
    const request$ = this.dataApi.GetDataApi(`pedido/pedidoSeguimiento`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      this.Pedidos$.next(result.data);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.Pedidos$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar los pedidos", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  MostrarEstadosProceso(params) {
    this.Cargando$.next(true);
    this.Pedidos$.next([]);
    const request$ = this.dataApi.GetDataApi(`mantenimiento/mostrarEstadoProceso`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      this.EstadoProceso$.next(result.data.Table0);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.Pedidos$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar los pedidos", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  ActualizarPedido(params, respuesta) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.PutDataApi(`pedido/pedido/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al actualizar el pedido", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  ActualizarEstadoPedidos(params, callback) {
    this.Cargando$.next(true);
    this.Pedidos$.next([]);
    const request$ = this.dataApi.PutDataApi(`pedido/pedido/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      callback(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.Pedidos$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al actualizar los pedidos", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  MostrarReparto(params) {
    this.Cargando$.next(true);
    this.Reparto$.next([]);
    const request$ = this.dataApi.GetDataApi(`mantenimiento/reparto/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      this.Reparto$.next(result.data.Table0);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.Reparto$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar el reparto", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  agregarPedido(pedido) {
    let data = this.Pedidos$.value;
    data.forEach((d) => {
      if (d.Id === pedido.IdEstado) {
        let newPedidos = d.pedidos.filter((p) => p.IdPedido != pedido.IdPedido);
        newPedidos.push(pedido);
        d.pedidos = newPedidos;
      }
    });
    this.Pedidos$.next([]);
    this.Pedidos$.next(data);
  }
  ActualizarEstado(params, respuesta) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.PutDataApi(`pedido/pedido/estado`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al actualizar el pedido", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  MostrarDetallePedido(params, callback) {
    const request$ = this.dataApi.GetDataApi(`pedido/detalle/`, params).pipe(tap((result) => {
      callback(result.data.Table0);
    }), catchError((error) => {
      callback([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar el detalle del pedido", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  static {
    this.\u0275fac = function SeguimientoPedidoFacadeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SeguimientoPedidoFacadeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SeguimientoPedidoFacadeService, factory: _SeguimientoPedidoFacadeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeguimientoPedidoFacadeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@angular/material/fesm2022/bottom-sheet.mjs
function MatBottomSheetContainer_ng_template_0_Template(rf, ctx) {
}
var ENTER_ANIMATION = "_mat-bottom-sheet-enter";
var EXIT_ANIMATION = "_mat-bottom-sheet-exit";
var MatBottomSheetContainer = class _MatBottomSheetContainer extends CdkDialogContainer {
  _breakpointSubscription;
  _animationsDisabled = _animationsDisabled();
  _animationState = "void";
  _animationStateChanged = new EventEmitter();
  _destroyed = false;
  constructor() {
    super();
    const breakpointObserver = inject(BreakpointObserver);
    this._breakpointSubscription = breakpointObserver.observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge]).subscribe(() => {
      const classList = this._elementRef.nativeElement.classList;
      classList.toggle("mat-bottom-sheet-container-medium", breakpointObserver.isMatched(Breakpoints.Medium));
      classList.toggle("mat-bottom-sheet-container-large", breakpointObserver.isMatched(Breakpoints.Large));
      classList.toggle("mat-bottom-sheet-container-xlarge", breakpointObserver.isMatched(Breakpoints.XLarge));
    });
  }
  enter() {
    if (!this._destroyed) {
      this._animationState = "visible";
      this._changeDetectorRef.markForCheck();
      this._changeDetectorRef.detectChanges();
      if (this._animationsDisabled) {
        this._simulateAnimation(ENTER_ANIMATION);
      }
    }
  }
  exit() {
    if (!this._destroyed) {
      this._elementRef.nativeElement.setAttribute("mat-exit", "");
      this._animationState = "hidden";
      this._changeDetectorRef.markForCheck();
      if (this._animationsDisabled) {
        this._simulateAnimation(EXIT_ANIMATION);
      }
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._breakpointSubscription.unsubscribe();
    this._destroyed = true;
  }
  _simulateAnimation(name) {
    this._ngZone.run(() => {
      this._handleAnimationEvent(true, name);
      setTimeout(() => this._handleAnimationEvent(false, name));
    });
  }
  _trapFocus() {
    super._trapFocus({
      preventScroll: true
    });
  }
  _handleAnimationEvent(isStart, animationName) {
    const isEnter = animationName === ENTER_ANIMATION;
    const isExit = animationName === EXIT_ANIMATION;
    if (isEnter || isExit) {
      this._animationStateChanged.emit({
        toState: isEnter ? "visible" : "hidden",
        phase: isStart ? "start" : "done"
      });
    }
  }
  static \u0275fac = function MatBottomSheetContainer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatBottomSheetContainer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatBottomSheetContainer,
    selectors: [["mat-bottom-sheet-container"]],
    hostAttrs: ["tabindex", "-1", 1, "mat-bottom-sheet-container"],
    hostVars: 9,
    hostBindings: function MatBottomSheetContainer_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("animationstart", function MatBottomSheetContainer_animationstart_HostBindingHandler($event) {
          return ctx._handleAnimationEvent(true, $event.animationName);
        })("animationend", function MatBottomSheetContainer_animationend_HostBindingHandler($event) {
          return ctx._handleAnimationEvent(false, $event.animationName);
        })("animationcancel", function MatBottomSheetContainer_animationcancel_HostBindingHandler($event) {
          return ctx._handleAnimationEvent(false, $event.animationName);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx._config.role)("aria-modal", ctx._config.ariaModal)("aria-label", ctx._config.ariaLabel);
        \u0275\u0275classProp("mat-bottom-sheet-container-animations-enabled", !ctx._animationsDisabled)("mat-bottom-sheet-container-enter", ctx._animationState === "visible")("mat-bottom-sheet-container-exit", ctx._animationState === "hidden");
      }
    },
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 0,
    consts: [["cdkPortalOutlet", ""]],
    template: function MatBottomSheetContainer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MatBottomSheetContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
      }
    },
    dependencies: [CdkPortalOutlet],
    styles: ["@keyframes _mat-bottom-sheet-enter {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: none;\n  }\n}\n@keyframes _mat-bottom-sheet-exit {\n  from {\n    transform: none;\n  }\n  to {\n    transform: translateY(100%);\n  }\n}\n.mat-bottom-sheet-container {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n  padding: 8px 16px;\n  min-width: 100vw;\n  box-sizing: border-box;\n  display: block;\n  outline: 0;\n  max-height: 80vh;\n  overflow: auto;\n  position: relative;\n  background: var(--mat-bottom-sheet-container-background-color, var(--mat-sys-surface-container-low));\n  color: var(--mat-bottom-sheet-container-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-bottom-sheet-container-text-font, var(--mat-sys-body-large-font));\n  font-size: var(--mat-bottom-sheet-container-text-size, var(--mat-sys-body-large-size));\n  line-height: var(--mat-bottom-sheet-container-text-line-height, var(--mat-sys-body-large-line-height));\n  font-weight: var(--mat-bottom-sheet-container-text-weight, var(--mat-sys-body-large-weight));\n  letter-spacing: var(--mat-bottom-sheet-container-text-tracking, var(--mat-sys-body-large-tracking));\n}\n@media (forced-colors: active) {\n  .mat-bottom-sheet-container {\n    outline: 1px solid;\n  }\n}\n\n.mat-bottom-sheet-container-animations-enabled {\n  transform: translateY(100%);\n}\n.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-enter {\n  animation: _mat-bottom-sheet-enter 195ms cubic-bezier(0, 0, 0.2, 1) forwards;\n}\n.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-exit {\n  animation: _mat-bottom-sheet-exit 375ms cubic-bezier(0.4, 0, 1, 1) backwards;\n}\n\n.mat-bottom-sheet-container-xlarge, .mat-bottom-sheet-container-large, .mat-bottom-sheet-container-medium {\n  border-top-left-radius: var(--mat-bottom-sheet-container-shape, 28px);\n  border-top-right-radius: var(--mat-bottom-sheet-container-shape, 28px);\n}\n\n.mat-bottom-sheet-container-medium {\n  min-width: 384px;\n  max-width: calc(100vw - 128px);\n}\n\n.mat-bottom-sheet-container-large {\n  min-width: 512px;\n  max-width: calc(100vw - 256px);\n}\n\n.mat-bottom-sheet-container-xlarge {\n  min-width: 576px;\n  max-width: calc(100vw - 384px);\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatBottomSheetContainer, [{
    type: Component,
    args: [{
      selector: "mat-bottom-sheet-container",
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      host: {
        "class": "mat-bottom-sheet-container",
        "[class.mat-bottom-sheet-container-animations-enabled]": "!_animationsDisabled",
        "[class.mat-bottom-sheet-container-enter]": '_animationState === "visible"',
        "[class.mat-bottom-sheet-container-exit]": '_animationState === "hidden"',
        "tabindex": "-1",
        "[attr.role]": "_config.role",
        "[attr.aria-modal]": "_config.ariaModal",
        "[attr.aria-label]": "_config.ariaLabel",
        "(animationstart)": "_handleAnimationEvent(true, $event.animationName)",
        "(animationend)": "_handleAnimationEvent(false, $event.animationName)",
        "(animationcancel)": "_handleAnimationEvent(false, $event.animationName)"
      },
      imports: [CdkPortalOutlet],
      template: "<ng-template cdkPortalOutlet></ng-template>\r\n",
      styles: ["@keyframes _mat-bottom-sheet-enter {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: none;\n  }\n}\n@keyframes _mat-bottom-sheet-exit {\n  from {\n    transform: none;\n  }\n  to {\n    transform: translateY(100%);\n  }\n}\n.mat-bottom-sheet-container {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n  padding: 8px 16px;\n  min-width: 100vw;\n  box-sizing: border-box;\n  display: block;\n  outline: 0;\n  max-height: 80vh;\n  overflow: auto;\n  position: relative;\n  background: var(--mat-bottom-sheet-container-background-color, var(--mat-sys-surface-container-low));\n  color: var(--mat-bottom-sheet-container-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-bottom-sheet-container-text-font, var(--mat-sys-body-large-font));\n  font-size: var(--mat-bottom-sheet-container-text-size, var(--mat-sys-body-large-size));\n  line-height: var(--mat-bottom-sheet-container-text-line-height, var(--mat-sys-body-large-line-height));\n  font-weight: var(--mat-bottom-sheet-container-text-weight, var(--mat-sys-body-large-weight));\n  letter-spacing: var(--mat-bottom-sheet-container-text-tracking, var(--mat-sys-body-large-tracking));\n}\n@media (forced-colors: active) {\n  .mat-bottom-sheet-container {\n    outline: 1px solid;\n  }\n}\n\n.mat-bottom-sheet-container-animations-enabled {\n  transform: translateY(100%);\n}\n.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-enter {\n  animation: _mat-bottom-sheet-enter 195ms cubic-bezier(0, 0, 0.2, 1) forwards;\n}\n.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-exit {\n  animation: _mat-bottom-sheet-exit 375ms cubic-bezier(0.4, 0, 1, 1) backwards;\n}\n\n.mat-bottom-sheet-container-xlarge, .mat-bottom-sheet-container-large, .mat-bottom-sheet-container-medium {\n  border-top-left-radius: var(--mat-bottom-sheet-container-shape, 28px);\n  border-top-right-radius: var(--mat-bottom-sheet-container-shape, 28px);\n}\n\n.mat-bottom-sheet-container-medium {\n  min-width: 384px;\n  max-width: calc(100vw - 128px);\n}\n\n.mat-bottom-sheet-container-large {\n  min-width: 512px;\n  max-width: calc(100vw - 256px);\n}\n\n.mat-bottom-sheet-container-xlarge {\n  min-width: 576px;\n  max-width: calc(100vw - 384px);\n}\n"]
    }]
  }], () => [], null);
})();
var MAT_BOTTOM_SHEET_DATA = new InjectionToken("MatBottomSheetData");
var MatBottomSheetConfig = class {
  viewContainerRef;
  injector;
  panelClass;
  direction;
  data = null;
  hasBackdrop = true;
  backdropClass;
  disableClose = false;
  ariaLabel = null;
  ariaModal = false;
  closeOnNavigation = true;
  autoFocus = "first-tabbable";
  restoreFocus = true;
  scrollStrategy;
  height = "";
  minHeight;
  maxHeight;
};
var MatBottomSheetRef = class {
  _ref;
  get instance() {
    return this._ref.componentInstance;
  }
  get componentRef() {
    return this._ref.componentRef;
  }
  containerInstance;
  disableClose;
  _afterOpened = new Subject();
  _result;
  _closeFallbackTimeout;
  constructor(_ref, config, containerInstance) {
    this._ref = _ref;
    this.containerInstance = containerInstance;
    this.disableClose = config.disableClose;
    containerInstance._animationStateChanged.pipe(filter((event) => event.phase === "done" && event.toState === "visible"), take(1)).subscribe(() => {
      this._afterOpened.next();
      this._afterOpened.complete();
    });
    containerInstance._animationStateChanged.pipe(filter((event) => event.phase === "done" && event.toState === "hidden"), take(1)).subscribe(() => {
      clearTimeout(this._closeFallbackTimeout);
      this._ref.close(this._result);
    });
    _ref.overlayRef.detachments().subscribe(() => {
      this._ref.close(this._result);
    });
    merge(this.backdropClick(), this.keydownEvents().pipe(filter((event) => event.keyCode === ESCAPE))).subscribe((event) => {
      if (!this.disableClose && (event.type !== "keydown" || !hasModifierKey(event))) {
        event.preventDefault();
        this.dismiss();
      }
    });
  }
  dismiss(result) {
    if (!this.containerInstance) {
      return;
    }
    this.containerInstance._animationStateChanged.pipe(filter((event) => event.phase === "start"), take(1)).subscribe(() => {
      this._closeFallbackTimeout = setTimeout(() => this._ref.close(this._result), 500);
      this._ref.overlayRef.detachBackdrop();
    });
    this._result = result;
    this.containerInstance.exit();
    this.containerInstance = null;
  }
  afterDismissed() {
    return this._ref.closed;
  }
  afterOpened() {
    return this._afterOpened;
  }
  backdropClick() {
    return this._ref.backdropClick;
  }
  keydownEvents() {
    return this._ref.keydownEvents;
  }
};
var MAT_BOTTOM_SHEET_DEFAULT_OPTIONS = new InjectionToken("mat-bottom-sheet-default-options");
var MatBottomSheet = class _MatBottomSheet {
  _injector = inject(Injector);
  _parentBottomSheet = inject(_MatBottomSheet, {
    optional: true,
    skipSelf: true
  });
  _animationsDisabled = _animationsDisabled();
  _defaultOptions = inject(MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, {
    optional: true
  });
  _bottomSheetRefAtThisLevel = null;
  _dialog = inject(Dialog);
  get _openedBottomSheetRef() {
    const parent = this._parentBottomSheet;
    return parent ? parent._openedBottomSheetRef : this._bottomSheetRefAtThisLevel;
  }
  set _openedBottomSheetRef(value) {
    if (this._parentBottomSheet) {
      this._parentBottomSheet._openedBottomSheetRef = value;
    } else {
      this._bottomSheetRefAtThisLevel = value;
    }
  }
  constructor() {
  }
  open(componentOrTemplateRef, config) {
    const _config = __spreadValues(__spreadValues({}, this._defaultOptions || new MatBottomSheetConfig()), config);
    let ref;
    this._dialog.open(componentOrTemplateRef, __spreadProps(__spreadValues({}, _config), {
      disableClose: true,
      closeOnOverlayDetachments: false,
      maxWidth: "100%",
      container: MatBottomSheetContainer,
      scrollStrategy: _config.scrollStrategy || createBlockScrollStrategy(this._injector),
      positionStrategy: createGlobalPositionStrategy(this._injector).centerHorizontally().bottom("0"),
      disableAnimations: this._animationsDisabled,
      templateContext: () => ({
        bottomSheetRef: ref
      }),
      providers: (cdkRef, _cdkConfig, container) => {
        ref = new MatBottomSheetRef(cdkRef, _config, container);
        return [{
          provide: MatBottomSheetRef,
          useValue: ref
        }, {
          provide: MAT_BOTTOM_SHEET_DATA,
          useValue: _config.data
        }];
      }
    }));
    ref.afterDismissed().subscribe(() => {
      if (this._openedBottomSheetRef === ref) {
        this._openedBottomSheetRef = null;
      }
    });
    if (this._openedBottomSheetRef) {
      this._openedBottomSheetRef.afterDismissed().subscribe(() => ref.containerInstance?.enter());
      this._openedBottomSheetRef.dismiss();
    } else {
      ref.containerInstance.enter();
    }
    this._openedBottomSheetRef = ref;
    return ref;
  }
  dismiss(result) {
    if (this._openedBottomSheetRef) {
      this._openedBottomSheetRef.dismiss(result);
    }
  }
  ngOnDestroy() {
    if (this._bottomSheetRefAtThisLevel) {
      this._bottomSheetRefAtThisLevel.dismiss();
    }
  }
  static \u0275fac = function MatBottomSheet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatBottomSheet)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MatBottomSheet,
    factory: _MatBottomSheet.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatBottomSheet, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var MatBottomSheetModule = class _MatBottomSheetModule {
  static \u0275fac = function MatBottomSheetModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatBottomSheetModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatBottomSheetModule,
    imports: [DialogModule, PortalModule, MatBottomSheetContainer],
    exports: [MatBottomSheetContainer, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [MatBottomSheet],
    imports: [DialogModule, PortalModule, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatBottomSheetModule, [{
    type: NgModule,
    args: [{
      imports: [DialogModule, PortalModule, MatBottomSheetContainer],
      exports: [MatBottomSheetContainer, BidiModule],
      providers: [MatBottomSheet]
    }]
  }], null, null);
})();

// src/app/services/client-socket.service.ts
var ClientSocketService = class _ClientSocketService {
  constructor(socket) {
    this.socket = socket;
    this.socketStatus = false;
    this.checkStatus();
  }
  checkStatus() {
    this.socket.on("connect", () => {
      this.socketStatus = true;
    });
    this.socket.on("disconnect", () => {
      this.socketStatus = false;
    });
  }
  emit(evento, payload, callback) {
    this.socket.emit(evento, payload, callback);
  }
  listen(evento) {
    return this.socket.fromEvent(evento);
  }
  static {
    this.\u0275fac = function ClientSocketService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClientSocketService)(\u0275\u0275inject(WrappedSocket));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ClientSocketService, factory: _ClientSocketService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientSocketService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: WrappedSocket }], null);
})();

// src/app/modules/clientes/seguimiento-pedidos/seguimiento-pedidos.component.ts
var _c03 = ["modalActualizarPedido"];
var _c12 = ["modalReparto"];
var _c2 = () => ["DetallePedido", "IdPedido"];
var _forTrack03 = ($index, $item) => $item.id_detalle;
function SeguimientoPedidosComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function SeguimientoPedidosComponent_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openFullscreen());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "fullscreen");
    \u0275\u0275elementEnd()();
  }
}
function SeguimientoPedidosComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function SeguimientoPedidosComponent_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFullscreen());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "fullscreen_exit");
    \u0275\u0275elementEnd()();
  }
}
function SeguimientoPedidosComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loading", 14);
  }
  if (rf & 2) {
    \u0275\u0275property("data", 4);
  }
}
function SeguimientoPedidosComponent_Conditional_17_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1, "Sin pedidos");
    \u0275\u0275elementEnd();
  }
}
function SeguimientoPedidosComponent_Conditional_17_For_2_For_12_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32)(1, "mat-icon");
    \u0275\u0275text(2, "warehouse");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pedido_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", pedido_r5.almacen_salida, " ");
  }
}
function SeguimientoPedidosComponent_Conditional_17_For_2_For_12_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33)(1, "mat-icon");
    \u0275\u0275text(2, "local_shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Revendedora ");
    \u0275\u0275elementEnd();
  }
}
function SeguimientoPedidosComponent_Conditional_17_For_2_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "span", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 28);
    \u0275\u0275listener("click", function SeguimientoPedidosComponent_Conditional_17_For_2_For_12_Template_button_click_4_listener() {
      const pedido_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      const Estados_r6 = \u0275\u0275reference(20);
      return \u0275\u0275resetView(ctx_r1.openBottomSheet(Estados_r6, pedido_r5));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "more_vert");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 29);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 30);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "truncatePipe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 31)(13, "span", 32)(14, "mat-icon");
    \u0275\u0275text(15, "inventory_2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, SeguimientoPedidosComponent_Conditional_17_For_2_For_12_Conditional_17_Template, 4, 1, "span", 32);
    \u0275\u0275conditionalCreate(18, SeguimientoPedidosComponent_Conditional_17_For_2_For_12_Conditional_18_Template, 4, 0, "span", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 34)(20, "mat-icon");
    \u0275\u0275text(21, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pedido_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("# ", pedido_r5.IdPedido);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", pedido_r5.PrimerNombre, " ", pedido_r5.PrimerApellido);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 9, pedido_r5.DetallePedido, 90));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", pedido_r5.cantidad_productos || 0, " prod \xB7 ", pedido_r5.total_unidades || 0, " und ");
    \u0275\u0275advance();
    \u0275\u0275conditional(pedido_r5.almacen_salida ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(pedido_r5.es_revendedora ? 18 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 12, pedido_r5.FechaInsercion, "d MMM y, hh:mm a"));
  }
}
function SeguimientoPedidosComponent_Conditional_17_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "div", 20);
    \u0275\u0275element(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 22);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "search");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 23);
    \u0275\u0275conditionalCreate(9, SeguimientoPedidosComponent_Conditional_17_For_2_Conditional_9_Template, 2, 0, "div", 24);
    \u0275\u0275pipe(10, "search");
    \u0275\u0275repeaterCreate(11, SeguimientoPedidosComponent_Conditional_17_For_2_For_12_Template, 25, 15, "div", 25, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(13, "search");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const columna_r7 = ctx.$implicit;
    const \u0275$index_43_r8 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.colorColumna(\u0275$index_43_r8));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(columna_r7.EstadoProceso);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(7, 4, columna_r7.pedidos, ctx_r1.buscar == null ? null : ctx_r1.buscar.value, \u0275\u0275pureFunction0(16, _c2)).length);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(\u0275\u0275pipeBind3(10, 8, columna_r7.pedidos, ctx_r1.buscar == null ? null : ctx_r1.buscar.value, \u0275\u0275pureFunction0(17, _c2)).length === 0 ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(13, 12, columna_r7.pedidos, ctx_r1.buscar == null ? null : ctx_r1.buscar.value, \u0275\u0275pureFunction0(18, _c2)));
  }
}
function SeguimientoPedidosComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, SeguimientoPedidosComponent_Conditional_17_For_2_Template, 14, 19, "div", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r1.seguiminetoPedidos.responsePedidos$));
  }
}
function SeguimientoPedidosComponent_ng_template_19_For_20_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function SeguimientoPedidosComponent_ng_template_19_For_20_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const estado_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cambiarEstado(estado_r12));
    });
    \u0275\u0275element(1, "span", 48);
    \u0275\u0275elementStart(2, "span", 41)(3, "span", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 43);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-icon", 44);
    \u0275\u0275text(8, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const estado_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r1.colorEstado(estado_r12.id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(estado_r12.EstadoProceso);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(estado_r12.Descripcion);
  }
}
function SeguimientoPedidosComponent_ng_template_19_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SeguimientoPedidosComponent_ng_template_19_For_20_Conditional_0_Template, 9, 3, "button", 46);
  }
  if (rf & 2) {
    const estado_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(estado_r12.id != ctx_r1.pedido.IdEstado && estado_r12.id != 8 ? 0 : -1);
  }
}
function SeguimientoPedidosComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "span", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 38);
    \u0275\u0275text(5, "\xBFQu\xE9 deseas hacer?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 39);
    \u0275\u0275listener("click", function SeguimientoPedidosComponent_ng_template_19_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      const DetallePedido_r10 = \u0275\u0275reference(22);
      return \u0275\u0275resetView(ctx_r1.openModalDetallePedido(DetallePedido_r10));
    });
    \u0275\u0275elementStart(7, "span", 40)(8, "mat-icon");
    \u0275\u0275text(9, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 41)(11, "span", 42);
    \u0275\u0275text(12, "Ver detalle del pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 43);
    \u0275\u0275text(14, "Consulta la informaci\xF3n completa");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-icon", 44);
    \u0275\u0275text(16, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 45);
    \u0275\u0275text(18, "Cambiar estado");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(19, SeguimientoPedidosComponent_ng_template_19_For_20_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Pedido # ", ctx_r1.pedido.IdPedido);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(21, 1, ctx_r1.seguiminetoPedidos.responseEstadoProceso$));
  }
}
function SeguimientoPedidosComponent_ng_template_21_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275element(1, "mat-spinner", 69);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Cargando productos\u2026");
    \u0275\u0275elementEnd()();
  }
}
function SeguimientoPedidosComponent_ng_template_21_Conditional_45_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 70);
    \u0275\u0275text(1, "Este pedido no tiene productos registrados.");
    \u0275\u0275elementEnd();
  }
}
function SeguimientoPedidosComponent_ng_template_21_Conditional_45_Conditional_1_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 77);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 78);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 73);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 74);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 74);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 79);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r14 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classProp("origen-bodega", !p_r14.es_consigna)("origen-consigna", p_r14.es_consigna);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r14.es_consigna ? "Consigna" : "Bodega", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r14.sku, " \xB7 ", p_r14.producto || p_r14.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r14.almacen);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r14.numero_lote || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r14.cantidad);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(14, 12, p_r14.precio_venta, "HNL", "L. ", "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(17, 17, p_r14.subtotal, "HNL", "L. ", "1.2-2"));
  }
}
function SeguimientoPedidosComponent_ng_template_21_Conditional_45_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "table", 72)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Origen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Almac\xE9n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 73);
    \u0275\u0275text(11, "Lote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 74);
    \u0275\u0275text(13, "Cant.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 74);
    \u0275\u0275text(15, "Precio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 74);
    \u0275\u0275text(17, "Subtotal");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, SeguimientoPedidosComponent_ng_template_21_Conditional_45_Conditional_1_For_20_Template, 18, 22, "tr", null, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "tfoot")(22, "tr")(23, "td", 75);
    \u0275\u0275text(24, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 76);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "currency");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r1.productosPedido);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(27, 1, ctx_r1.totalPedido(), "HNL", "L. ", "1.2-2"));
  }
}
function SeguimientoPedidosComponent_ng_template_21_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SeguimientoPedidosComponent_ng_template_21_Conditional_45_Conditional_0_Template, 2, 0, "p", 70)(1, SeguimientoPedidosComponent_ng_template_21_Conditional_45_Conditional_1_Template, 28, 6, "div", 71);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.productosPedido.length === 0 ? 0 : 1);
  }
}
function SeguimientoPedidosComponent_ng_template_21_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275element(1, "img", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.pedido.Url, \u0275\u0275sanitizeUrl);
  }
}
function SeguimientoPedidosComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "span", 51);
    \u0275\u0275text(3, "Detalle del Pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 52)(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "mat-dialog-content", 53)(8, "div", 54)(9, "div", 55)(10, "mat-icon");
    \u0275\u0275text(11, "local_shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div")(13, "span", 56);
    \u0275\u0275text(14, "Tipo Pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 57);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 55)(18, "mat-icon");
    \u0275\u0275text(19, "paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div")(21, "span", 56);
    \u0275\u0275text(22, "M\xE9todo Pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 57);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 55)(26, "mat-icon");
    \u0275\u0275text(27, "local_shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div")(29, "span", 56);
    \u0275\u0275text(30, "Nombre Reparto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 57);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 55)(34, "mat-icon");
    \u0275\u0275text(35, "filter_list");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div")(37, "span", 56);
    \u0275\u0275text(38, "Estado Proceso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 57);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "div", 58)(42, "span", 59);
    \u0275\u0275text(43, "Productos del pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(44, SeguimientoPedidosComponent_ng_template_21_Conditional_44_Template, 4, 0, "div", 60)(45, SeguimientoPedidosComponent_ng_template_21_Conditional_45_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "mat-form-field", 61)(47, "mat-label");
    \u0275\u0275text(48, "Detalle Pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "textarea", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "mat-form-field", 61)(51, "mat-label");
    \u0275\u0275text(52, "Observaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "textarea", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "mat-form-field", 61)(55, "mat-label");
    \u0275\u0275text(56, "Observaci\xF3n Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275element(57, "textarea", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "button", 65);
    \u0275\u0275listener("click", function SeguimientoPedidosComponent_ng_template_21_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.descargarImagen());
    });
    \u0275\u0275elementStart(59, "mat-icon");
    \u0275\u0275text(60, "file_download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(61, " Descargar ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(62, SeguimientoPedidosComponent_ng_template_21_Conditional_62_Template, 2, 1, "div", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 67)(64, "button", 68);
    \u0275\u0275text(65, "Salir");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate(ctx_r1.pedido.TipoPedido);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.pedido.MetodoPago);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.pedido.NombreReparto || "N/A");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.pedido.EstadoProceso);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.cargandoDetalle ? 44 : 45);
    \u0275\u0275advance(5);
    \u0275\u0275property("formControl", ctx_r1.detallePedido);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControl", ctx_r1.observacion);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControl", ctx_r1.observacionCliente);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.pedido.Url != null ? 62 : -1);
  }
}
function SeguimientoPedidosComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "span", 51);
    \u0275\u0275text(3, "Actualizar Pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 52)(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "mat-dialog-content", 53)(8, "mat-form-field", 61)(9, "mat-label");
    \u0275\u0275text(10, "Detalle Pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "textarea", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-form-field", 61)(13, "mat-label");
    \u0275\u0275text(14, "Observaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "textarea", 82);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 67)(17, "button", 68);
    \u0275\u0275text(18, "Salir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 83);
    \u0275\u0275listener("click", function SeguimientoPedidosComponent_ng_template_23_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.actualizarPedido());
    });
    \u0275\u0275text(20, "Guardar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("formControl", ctx_r1.detallePedido);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControl", ctx_r1.observacion);
  }
}
function SeguimientoPedidosComponent_ng_template_25_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reparto_r17 = ctx.$implicit;
    \u0275\u0275property("value", reparto_r17.Id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(reparto_r17.NombreReparto);
  }
}
function SeguimientoPedidosComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 50)(2, "span", 51);
    \u0275\u0275text(3, "Seleccionar Repartidor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 52)(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "mat-dialog-content", 53)(8, "mat-form-field", 61)(9, "mat-label");
    \u0275\u0275text(10, "Reparto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-select", 85);
    \u0275\u0275repeaterCreate(12, SeguimientoPedidosComponent_ng_template_25_For_13_Template, 2, 2, "mat-option", 86, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 67)(16, "button", 68);
    \u0275\u0275text(17, "Salir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 83);
    \u0275\u0275listener("click", function SeguimientoPedidosComponent_ng_template_25_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.actualizarRepartidor());
    });
    \u0275\u0275text(19, "Guardar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("formControl", ctx_r1.idReparto);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(14, 1, ctx_r1.seguiminetoPedidos.responseReparto$));
  }
}
var SeguimientoPedidosComponent = class _SeguimientoPedidosComponent {
  constructor(document2) {
    this.document = document2;
    this.ahora = /* @__PURE__ */ new Date();
    this.clienteSocket = inject(ClientSocketService);
    this.toast = inject(ToastrServiceLocal);
    this.dialog = inject(MatDialog);
    this.seguiminetoPedidos = inject(SeguimientoPedidoFacadeService);
    this._bottomSheet = inject(MatBottomSheet);
    this.fullscreen = false;
    this.prueba1 = ["1", "2", "3", "4"];
    this.prueba2 = ["5", "6", "7", "8", "9"];
    this.prueba3 = ["10", "11", "12", "13", "14"];
    this.prueba4 = ["15", "16", "17", "18", "19"];
    this.encabezados = [
      "Aperturado",
      "Preparaci\xF3n",
      "Empacando",
      "Despachado",
      "Entregado",
      "Rechazado"
    ];
    this.buscar = new UntypedFormControl("");
    this.productosPedido = [];
    this.cargandoDetalle = false;
    this.detallePedido = new UntypedFormControl("", [Validators.required]);
    this.observacion = new UntypedFormControl("", [Validators.required]);
    this.observacionCliente = new UntypedFormControl({ value: "", disabled: true });
    this.idReparto = new UntypedFormControl("", [Validators.required]);
    this.seguiminetoPedidos.MostrarSeguimientoPedidos("");
    this.seguiminetoPedidos.MostrarEstadosProceso("");
    this.informacionLocal = JSON.parse(localStorage.getItem("usuario_data") || "{}");
    this.clienteSocket.listen("pedido").subscribe((result) => {
      this.notificarPedido(result);
    });
  }
  ngOnInit() {
    this.elem = document.documentElement;
    setInterval(() => this.ahora = /* @__PURE__ */ new Date(), 6e4);
  }
  drop(event) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
  openBottomSheet(template, pedido) {
    this.pedido = pedido;
    this._bottomSheet.open(template);
  }
  cambiarEstado(params) {
    if (this.pedido.IdEstado === params.id) {
      this.toast.mensajeWarning("", `El pedido ya se encuenta en estado${this.pedido.EstadoProceso}`);
    } else {
      this.idEstadoPedido = params?.id;
      if (params.requiereObservacion) {
        this.modalPedido();
      } else if (this.idEstadoPedido === 5) {
        this.openModalRepartidor();
      } else {
        let body = {
          idPedido: this.pedido?.IdPedido,
          idEstado: this.idEstadoPedido,
          idUsuario: this.informacionLocal?.IdUsuario
        };
        this.seguiminetoPedidos.ActualizarEstado(body, (result) => {
          if (result) {
            this.seguiminetoPedidos.MostrarSeguimientoPedidos("");
            this._bottomSheet.dismiss();
          }
        });
      }
    }
  }
  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      this.elem.msRequestFullscreen();
    }
    this.fullscreen = true;
  }
  /* Close fullscreen */
  closeFullscreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      this.document.msExitFullscreen();
    }
    this.fullscreen = false;
  }
  notificarPedido(pedido) {
    this.toast.clearToasts();
    this.seguiminetoPedidos.agregarPedido(pedido);
    let audio = new Audio("./assets/audio/timbretimbrecasa.mp3");
    audio.play();
    this.toast.mensajeInfo("Nuevo Pedido", `#${pedido.IdPedido}`);
  }
  // openModalDetallePedido(template) {
  //   this.detallePedido.setValue(this.pedido.DetallePedido || '');
  //   this.observacion.setValue(this.pedido.Observacion || '');
  //   this.observacionCliente.setValue(this.pedido.observacionCliente);
  //   this._bottomSheet.dismiss();
  //   this.dialog.open(template, {
  //     panelClass: "app-full-bleed-dialog",
  //   });
  // }
  modalPedido() {
    this.detallePedido.setValue(this.pedido.DetallePedido || "");
    this.observacion.setValue(this.pedido.Observacion || "");
    let dialog = this.dialog.open(this.modalActualizarPedido, {
      width: "80%",
      panelClass: "app-full-bleed-dialog"
    });
    this._bottomSheet.dismiss();
  }
  actualizarPedido() {
    if (this.observacion.invalid) {
      this.toast.mensajeWarning("", "Es requerido ingresar la observaci\xF3n");
      return;
    }
    this.pedido.DetallePedido = this.detallePedido.value;
    this.pedido.Observacion = this.observacion.value;
    this.seguiminetoPedidos.ActualizarEstadoPedidos(this.pedido, (result) => {
      if (result) {
        let body = {
          idPedido: this?.pedido.IdPedido,
          idEstado: this.idEstadoPedido,
          idUsuario: this.informacionLocal?.IdUsuario
        };
        this.seguiminetoPedidos.ActualizarEstado(body, (result2) => {
          if (result2) {
            this.seguiminetoPedidos.MostrarSeguimientoPedidos("");
            this._bottomSheet.dismiss();
            this.dialog.closeAll();
          }
        });
      }
    });
  }
  openModalRepartidor() {
    this.idReparto.setValue("");
    this.seguiminetoPedidos.MostrarReparto("0");
    let dialog = this.dialog.open(this.modalRepartidor, {
      width: "40vw",
      panelClass: "app-full-bleed-dialog"
    });
    this._bottomSheet.dismiss();
  }
  actualizarRepartidor() {
    if (this.idReparto.invalid) {
      this.toast.mensajeWarning("", "Es requerido seleccionar un repartidor");
      this.idReparto.markAllAsTouched();
      return;
    }
    this.pedido.IdReparto = this.idReparto.value;
    this.seguiminetoPedidos.ActualizarEstadoPedidos(this.pedido, (result) => {
      if (result.hasError === false) {
        let body = {
          idPedido: this?.pedido.IdPedido,
          idEstado: this.idEstadoPedido,
          idUsuario: this.informacionLocal?.IdUsuario
        };
        this.seguiminetoPedidos.ActualizarEstado(body, (result2) => {
          if (result2) {
            this.seguiminetoPedidos.MostrarSeguimientoPedidos("");
            this._bottomSheet.dismiss();
            this.dialog.closeAll();
          }
        });
      }
    });
  }
  descargarImagen() {
    window.open(this.pedido.Url);
  }
  colorColumna(i) {
    const clases = ["col-apertura", "col-preparacion", "col-empacando", "col-despachado", "col-entregado"];
    return clases[i] || "col-apertura";
  }
  colorEstado(id) {
    const mapa = {
      1: "est-apertura",
      3: "est-preparacion",
      4: "est-empacando",
      5: "est-despachado",
      6: "est-entregado",
      7: "est-rechazado"
    };
    return mapa[id] || "";
  }
  openModalDetallePedido(template) {
    this.detallePedido.setValue(this.pedido.DetallePedido || "");
    this.observacion.setValue(this.pedido.Observacion || "");
    this.observacionCliente.setValue(this.pedido.observacionCliente);
    this._bottomSheet.dismiss();
    this.productosPedido = [];
    if (this.pedido?.IdPedido) {
      this.cargandoDetalle = true;
      this.seguiminetoPedidos.MostrarDetallePedido(this.pedido.IdPedido, (data) => {
        this.productosPedido = data ?? [];
        this.cargandoDetalle = false;
      });
    }
    this.dialog.open(template, {
      panelClass: "app-full-bleed-dialog"
    });
  }
  // 3) Agregar este método (total del pedido calculado desde el detalle):
  totalPedido() {
    return (this.productosPedido || []).reduce((acc, p) => acc + (+p.subtotal || 0), 0);
  }
  static {
    this.\u0275fac = function SeguimientoPedidosComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SeguimientoPedidosComponent)(\u0275\u0275directiveInject(DOCUMENT));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SeguimientoPedidosComponent, selectors: [["app-seguimiento-pedidos"]], viewQuery: function SeguimientoPedidosComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c03, 7)(_c12, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.modalActualizarPedido = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.modalRepartidor = _t.first);
      }
    }, standalone: false, decls: 27, vars: 13, consts: [["Estados", ""], ["DetallePedido", ""], ["modalActualizarPedido", ""], ["modalReparto", ""], [1, "tv-wrap"], [1, "tv-header"], [1, "tv-title"], [1, "tv-reloj"], [1, "tv-header-actions"], ["appearance", "fill", 1, "tv-buscador"], ["matInput", "", "type", "text", "placeholder", "Buscar\u2026", "autocomplete", "off", 3, "formControl"], ["matPrefix", ""], ["mat-mini-fab", "", "matTooltip", "Pantalla completa", 1, "tv-fs"], ["mat-mini-fab", "", "matTooltip", "Salir", 1, "tv-fs"], [3, "data"], [1, "tv-board"], ["mat-mini-fab", "", "matTooltip", "Pantalla completa", 1, "tv-fs", 3, "click"], ["mat-mini-fab", "", "matTooltip", "Salir", 1, "tv-fs", 3, "click"], [1, "tv-col", 3, "ngClass"], [1, "tv-col-head"], [1, "titulo"], [1, "dot"], [1, "count"], [1, "tv-col-body"], [1, "tv-vacio"], [1, "tv-card"], [1, "tv-card-top"], [1, "num"], ["mat-icon-button", "", 1, "opts", 3, "click"], [1, "cliente"], [1, "detalle"], [1, "tv-chips"], [1, "tv-chip"], [1, "tv-chip", "tv-chip-consigna"], [1, "fecha"], [1, "bottom-estados"], [1, "be-header"], [1, "be-titulo"], [1, "be-sub"], [1, "be-item", "be-detalle", 3, "click"], [1, "be-ico"], [1, "be-texto"], [1, "be-item-titulo"], [1, "be-item-desc"], [1, "be-flecha"], [1, "be-separador"], [1, "be-item", 3, "ngClass"], [1, "be-item", 3, "click", "ngClass"], [1, "be-dot"], [1, "modal-augajo", "modal-lg"], [1, "modal-header"], [1, "modal-titulo"], ["mat-icon-button", "", "mat-dialog-close", "", "aria-label", "Cerrar", 1, "modal-cerrar"], [1, "mat-typography", "modal-body"], [1, "detalle-info"], [1, "detalle-item"], [1, "detalle-label"], [1, "detalle-valor"], [1, "detalle-bloque", "mt-2"], [1, "detalle-bloque-label"], [1, "prod-cargando"], ["appearance", "outline", 1, "campo-full", "mt-2"], ["matInput", "", "placeholder", "Detalle Pedido", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "4", "autocomplete", "off", "readonly", "", 3, "formControl"], ["matInput", "", "placeholder", "Observaci\xF3n", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "3", "autocomplete", "off", "readonly", "", 3, "formControl"], ["matInput", "", "placeholder", "Observaci\xF3n Cliente", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "3", "autocomplete", "off", 3, "formControl"], ["mat-flat-button", "", 1, "button-principal", "mt-2", 3, "click"], [1, "detalle-imagen"], [1, "acciones-modal"], ["mat-stroked-button", "", "mat-dialog-close", ""], ["diameter", "26"], [1, "detalle-bloque-texto"], [1, "tabla-scroll"], [1, "tabla-detalle-prod"], [1, "t-center"], [1, "t-right"], ["colspan", "6", 1, "t-right", "total-lbl"], [1, "t-right", "total-val"], [1, "origen-pill"], [1, "td-fuerte"], [1, "t-right", "td-fuerte"], ["alt", "Imagen del pedido", 1, "imagePedido", 3, "src"], ["matInput", "", "placeholder", "Detalle Pedido", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "4", "autocomplete", "off", 3, "formControl"], ["matInput", "", "placeholder", "Observaci\xF3n", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "3", "autocomplete", "off", 3, "formControl"], ["mat-flat-button", "", 1, "button-principal", 3, "click"], [1, "modal-augajo"], [3, "formControl"], [3, "value"]], template: function SeguimientoPedidosComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "h1");
        \u0275\u0275text(4, "Seguimiento de Pedidos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 7);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 8)(9, "mat-form-field", 9);
        \u0275\u0275element(10, "input", 10);
        \u0275\u0275elementStart(11, "mat-icon", 11);
        \u0275\u0275text(12, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(13, SeguimientoPedidosComponent_Conditional_13_Template, 3, 0, "button", 12);
        \u0275\u0275conditionalCreate(14, SeguimientoPedidosComponent_Conditional_14_Template, 3, 0, "button", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(15, SeguimientoPedidosComponent_Conditional_15_Template, 1, 1, "app-loading", 14);
        \u0275\u0275pipe(16, "async");
        \u0275\u0275conditionalCreate(17, SeguimientoPedidosComponent_Conditional_17_Template, 4, 2, "div", 15);
        \u0275\u0275pipe(18, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, SeguimientoPedidosComponent_ng_template_19_Template, 22, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(21, SeguimientoPedidosComponent_ng_template_21_Template, 66, 9, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(23, SeguimientoPedidosComponent_ng_template_23_Template, 21, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(25, SeguimientoPedidosComponent_ng_template_25_Template, 20, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 6, ctx.ahora, "EEEE d MMM \xB7 hh:mm aa"));
        \u0275\u0275advance(4);
        \u0275\u0275property("formControl", ctx.buscar);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.fullscreen ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.fullscreen ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(\u0275\u0275pipeBind1(16, 9, ctx.seguiminetoPedidos.responseCargando$) ? 15 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!\u0275\u0275pipeBind1(18, 11, ctx.seguiminetoPedidos.responseCargando$) ? 17 : -1);
      }
    }, dependencies: [NgClass, MatFormField, MatLabel, MatPrefix, MatIcon, MatInput, CdkTextareaAutosize, MatButton, MatMiniFabButton, MatIconButton, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatSelect, MatOption, MatProgressSpinner, LoadingComponent, MatDialogClose, MatDialogContent, MatTooltip, AsyncPipe, CurrencyPipe, DatePipe, SearchPipe, TruncatePipePipe], styles: ['@charset "UTF-8";\n\n\n.tv-wrap[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  padding: 24px 28px;\n  background: var(--color-bg);\n  --est-apertura: #8A8A8A;\n  --est-preparacion: #D99A1C;\n  --est-empacando: #2563EB;\n  --est-despachado: #7C3AED;\n  --est-entregado: #2E9E6B;\n}\n.tv-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.tv-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-weight: 600;\n  font-size: 28px;\n  letter-spacing: -0.02em;\n  color: var(--color-text);\n}\n.tv-title[_ngcontent-%COMP%]   .reloj[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--color-text-secondary);\n  text-transform: capitalize;\n  margin-top: 2px;\n}\n.tv-header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.tv-board[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 14px;\n  flex: 1;\n  min-height: 0;\n}\n.tv-col[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: 14px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);\n}\n.tv-col-head[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 3px solid var(--col-color, #666);\n  background: var(--col-tint, #f5f5f5);\n}\n.tv-col-head[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.tv-col-head[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--col-color, #666);\n}\n.tv-col-head[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  background: var(--col-color, #666);\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n  min-width: 24px;\n  height: 24px;\n  padding: 0 7px;\n  border-radius: 12px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.tv-col-body[_ngcontent-%COMP%] {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 11px;\n  overflow-y: auto;\n  flex: 1;\n  background: #FBFAF9;\n}\n.tv-card[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-left: 4px solid var(--col-color, #666);\n  border-radius: 11px;\n  padding: 13px 15px;\n  transition: box-shadow 0.16s, transform 0.16s;\n}\n.tv-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.09);\n  transform: translateY(-2px);\n}\n.tv-card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 5px;\n}\n.tv-card[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 13px;\n  color: var(--col-color, #666);\n}\n.tv-card[_ngcontent-%COMP%]   .opts[_ngcontent-%COMP%] {\n  color: #B0B0B0;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n.tv-card[_ngcontent-%COMP%]   .cliente[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 15px;\n  margin-bottom: 5px;\n  color: var(--color-text);\n}\n.tv-card[_ngcontent-%COMP%]   .detalle[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n  line-height: 1.45;\n  margin-bottom: 9px;\n}\n.tv-card[_ngcontent-%COMP%]   .fecha[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11.5px;\n  color: #9A9A9A;\n}\n.tv-card[_ngcontent-%COMP%]   .fecha[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.tv-vacio[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #B0B0B0;\n  font-size: 13px;\n  padding: 36px 8px;\n  font-style: italic;\n}\n.col-apertura[_ngcontent-%COMP%] {\n  --col-color: var(--est-apertura);\n  --col-tint: #F4F4F4;\n}\n.col-preparacion[_ngcontent-%COMP%] {\n  --col-color: var(--est-preparacion);\n  --col-tint: #FBF4E4;\n}\n.col-empacando[_ngcontent-%COMP%] {\n  --col-color: var(--est-empacando);\n  --col-tint: #EAF1FE;\n}\n.col-despachado[_ngcontent-%COMP%] {\n  --col-color: var(--est-despachado);\n  --col-tint: #F1EBFC;\n}\n.col-entregado[_ngcontent-%COMP%] {\n  --col-color: var(--est-entregado);\n  --col-tint: #E7F4EE;\n}\n.tv-buscador[_ngcontent-%COMP%] {\n  width: 220px;\n}\n.tv-fs[_ngcontent-%COMP%] {\n  background: var(--color-surface) !important;\n  color: var(--color-text) !important;\n  border: 1px solid var(--color-border);\n  box-shadow: none !important;\n}\n.prod-cargando[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 4px;\n  color: var(--color-text-secondary);\n  font-size: 13px;\n}\n.tabla-detalle-prod[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  margin-top: 6px;\n}\n.tabla-detalle-prod[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--color-text-secondary);\n  text-align: left;\n  padding: 8px 10px;\n  white-space: nowrap;\n  border-bottom: 1.5px solid var(--color-border);\n}\n.tabla-detalle-prod[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 10px;\n  font-size: 13px;\n  color: var(--color-text-primary);\n  border-bottom: 1px solid var(--color-border);\n  vertical-align: middle;\n}\n.tabla-detalle-prod[_ngcontent-%COMP%]   .td-fuerte[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-primary);\n}\n.tabla-detalle-prod[_ngcontent-%COMP%]   .t-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.tabla-detalle-prod[_ngcontent-%COMP%]   .t-right[_ngcontent-%COMP%] {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.tabla-detalle-prod[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 10px;\n  font-size: 13px;\n}\n.tabla-detalle-prod[_ngcontent-%COMP%]   .total-lbl[_ngcontent-%COMP%] {\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-secondary);\n}\n.tabla-detalle-prod[_ngcontent-%COMP%]   .total-val[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--color-accent);\n  font-variant-numeric: tabular-nums;\n}\n.origen-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 999px;\n  white-space: nowrap;\n}\n.origen-pill.origen-bodega[_ngcontent-%COMP%] {\n  background: rgba(26, 26, 26, 0.08);\n  color: var(--color-primary);\n}\n.origen-pill.origen-consigna[_ngcontent-%COMP%] {\n  background: rgba(224, 26, 26, 0.1);\n  color: var(--color-accent);\n}\n.detalle-info[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n  margin-bottom: 18px;\n}\n.detalle-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  background: #FAF9F7;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-card);\n}\n.detalle-item[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%], \n.detalle-item[_ngcontent-%COMP%]   .detalle-ico[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 38px;\n  height: 38px;\n  line-height: 38px;\n  font-size: 20px;\n  text-align: center;\n  border-radius: 50%;\n  background: var(--color-primary);\n  color: #fff;\n}\n.detalle-item[_ngcontent-%COMP%]   .detalle-ico[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n}\n.detalle-item[_ngcontent-%COMP%] {\n}\n.detalle-item[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  line-height: 1.3;\n}\n.detalle-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-secondary);\n  margin-bottom: 2px;\n}\n.detalle-valor[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--color-primary);\n  word-break: break-word;\n}\n@media (max-width: 560px) {\n  .detalle-info[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.tv-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin: 8px 0 6px;\n}\n.tv-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n  background: rgba(26, 26, 26, 0.06);\n  border-radius: 999px;\n  padding: 3px 9px;\n  white-space: nowrap;\n}\n.tv-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  height: 14px;\n  width: 14px;\n}\n.tv-chip.tv-chip-consigna[_ngcontent-%COMP%] {\n  background: rgba(224, 26, 26, 0.1);\n  color: var(--color-accent);\n}\n.tv-productos[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n  line-height: 1.35;\n  margin-bottom: 8px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n/*# sourceMappingURL=seguimiento-pedidos.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeguimientoPedidosComponent, [{
    type: Component,
    args: [{ selector: "app-seguimiento-pedidos", standalone: false, template: `<div class="tv-wrap">

  <div class="tv-header">
    <div class="tv-title">
      <h1>Seguimiento de Pedidos</h1>
      <span class="tv-reloj">{{ ahora | date: 'EEEE d MMM \xB7 hh:mm aa' }}</span>
    </div>
    <div class="tv-header-actions">
      <mat-form-field appearance="fill" class="tv-buscador">
        <input matInput type="text" [formControl]="buscar" placeholder="Buscar\u2026" autocomplete="off">
        <mat-icon matPrefix>search</mat-icon>
      </mat-form-field>
      @if (!fullscreen) {
      <button mat-mini-fab (click)="openFullscreen()" class="tv-fs" matTooltip="Pantalla completa">
        <mat-icon>fullscreen</mat-icon>
      </button>
      }
      @if (fullscreen) {
      <button mat-mini-fab (click)="closeFullscreen()" class="tv-fs" matTooltip="Salir">
        <mat-icon>fullscreen_exit</mat-icon>
      </button>
      }
    </div>
  </div>

  @if ((seguiminetoPedidos.responseCargando$ | async)) {
  <app-loading [data]="4"></app-loading>
  }

  @if (!(seguiminetoPedidos.responseCargando$ | async)) {
  <div class="tv-board">
    @for (columna of (seguiminetoPedidos.responsePedidos$ | async); track columna; let i = $index) {
    <div class="tv-col" [ngClass]="colorColumna(i)">
      <div class="tv-col-head">
        <div class="titulo"><span class="dot"></span>{{ columna.EstadoProceso }}</div>
        <span class="count">{{ (columna.pedidos | search: this.buscar?.value: ['DetallePedido','IdPedido']).length
          }}</span>
      </div>

      <div class="tv-col-body">
        @if ((columna.pedidos | search: this.buscar?.value: ['DetallePedido','IdPedido']).length === 0) {
        <div class="tv-vacio">Sin pedidos</div>
        }

        @for (pedido of columna.pedidos | search: this.buscar?.value: ['DetallePedido','IdPedido']; track pedido) {
        <div class="tv-card">
          <div class="tv-card-top">
            <span class="num"># {{ pedido.IdPedido }}</span>
            <button class="opts" mat-icon-button (click)="openBottomSheet(Estados, pedido)">
              <mat-icon>more_vert</mat-icon>
            </button>
          </div>
          <div class="cliente">{{ pedido.PrimerNombre }} {{ pedido.PrimerApellido }}</div>
          <div class="detalle">{{ pedido.DetallePedido | truncatePipe:90 }}</div>
          <div class="tv-chips">
            <span class="tv-chip">
              <mat-icon>inventory_2</mat-icon>
              {{ pedido.cantidad_productos || 0 }} prod \xB7 {{ pedido.total_unidades || 0 }} und
            </span>

            @if (pedido.almacen_salida) {
            <span class="tv-chip">
              <mat-icon>warehouse</mat-icon>
              {{ pedido.almacen_salida }}
            </span>
            }

            @if (pedido.es_revendedora) {
            <span class="tv-chip tv-chip-consigna">
              <mat-icon>local_shipping</mat-icon>
              Revendedora
            </span>
            }
          </div>
          <div class="fecha">
            <mat-icon>event</mat-icon>
            <span>{{ pedido.FechaInsercion | date: 'd MMM y, hh:mm a' }}</span>
          </div>
        </div>
        }
      </div>
    </div>
    }
  </div>
  }
</div>

<ng-template #Estados>
  <div class="bottom-estados">
    <div class="be-header">
      <span class="be-titulo">Pedido # {{ pedido.IdPedido }}</span>
      <span class="be-sub">\xBFQu\xE9 deseas hacer?</span>
    </div>

    <button class="be-item be-detalle" (click)="openModalDetallePedido(DetallePedido)">
      <span class="be-ico"><mat-icon>visibility</mat-icon></span>
      <span class="be-texto">
        <span class="be-item-titulo">Ver detalle del pedido</span>
        <span class="be-item-desc">Consulta la informaci\xF3n completa</span>
      </span>
      <mat-icon class="be-flecha">chevron_right</mat-icon>
    </button>

    <div class="be-separador">Cambiar estado</div>

    <!-- Estados -->
    @for (estado of (seguiminetoPedidos.responseEstadoProceso$ | async); track estado) {
    @if (estado.id != pedido.IdEstado && estado.id != 8) {
    <button class="be-item" [ngClass]="colorEstado(estado.id)" (click)="cambiarEstado(estado)">
      <span class="be-dot"></span>
      <span class="be-texto">
        <span class="be-item-titulo">{{ estado.EstadoProceso }}</span>
        <span class="be-item-desc">{{ estado.Descripcion }}</span>
      </span>
      <mat-icon class="be-flecha">chevron_right</mat-icon>
    </button>
    }
    }
  </div>
</ng-template>

<!-- ===== Modal: detalle del pedido ===== -->
<ng-template #DetallePedido>
  <div class="modal-augajo modal-lg">
    <div class="modal-header">
      <span class="modal-titulo">Detalle del Pedido</span>
      <button mat-icon-button mat-dialog-close class="modal-cerrar" aria-label="Cerrar">
        <mat-icon>close</mat-icon>
      </button>
    </div>

    <mat-dialog-content class="mat-typography modal-body">
      <div class="detalle-info">
        <div class="detalle-item">
          <mat-icon>local_shipping</mat-icon>
          <div>
            <span class="detalle-label">Tipo Pedido</span>
            <span class="detalle-valor">{{ pedido.TipoPedido }}</span>
          </div>
        </div>
        <div class="detalle-item">
          <mat-icon>paid</mat-icon>
          <div>
            <span class="detalle-label">M\xE9todo Pago</span>
            <span class="detalle-valor">{{ pedido.MetodoPago }}</span>
          </div>
        </div>
        <div class="detalle-item">
          <mat-icon>local_shipping</mat-icon>
          <div>
            <span class="detalle-label">Nombre Reparto</span>
            <span class="detalle-valor">{{ pedido.NombreReparto || 'N/A' }}</span>
          </div>
        </div>
        <div class="detalle-item">
          <mat-icon>filter_list</mat-icon>
          <div>
            <span class="detalle-label">Estado Proceso</span>
            <span class="detalle-valor">{{ pedido.EstadoProceso }}</span>
          </div>
        </div>
      </div>

      <div class="detalle-bloque mt-2">
        <span class="detalle-bloque-label">Productos del pedido</span>

        @if (cargandoDetalle) {
        <div class="prod-cargando">
          <mat-spinner diameter="26"></mat-spinner>
          <span>Cargando productos\u2026</span>
        </div>
        } @else {
        @if (productosPedido.length === 0) {
        <p class="detalle-bloque-texto">Este pedido no tiene productos registrados.</p>
        } @else {
        <div class="tabla-scroll">
          <table class="tabla-detalle-prod">
            <thead>
              <tr>
                <th>Origen</th>
                <th>Producto</th>
                <th>Almac\xE9n</th>
                <th class="t-center">Lote</th>
                <th class="t-right">Cant.</th>
                <th class="t-right">Precio</th>
                <th class="t-right">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              @for (p of productosPedido; track p.id_detalle) {
              <tr>
                <td>
                  <span class="origen-pill" [class.origen-bodega]="!p.es_consigna"
                    [class.origen-consigna]="p.es_consigna">
                    {{ p.es_consigna ? 'Consigna' : 'Bodega' }}
                  </span>
                </td>
                <td class="td-fuerte">{{ p.sku }} \xB7 {{ p.producto || p.nombre }}</td>
                <td>{{ p.almacen }}</td>
                <td class="t-center">{{ p.numero_lote || '\u2014' }}</td>
                <td class="t-right">{{ p.cantidad }}</td>
                <td class="t-right">{{ p.precio_venta | currency:'HNL':'L. ':'1.2-2' }}</td>
                <td class="t-right td-fuerte">{{ p.subtotal | currency:'HNL':'L. ':'1.2-2' }}</td>
              </tr>
              }
            </tbody>
            <tfoot>
              <tr>
                <td colspan="6" class="t-right total-lbl">Total</td>
                <td class="t-right total-val">{{ totalPedido() | currency:'HNL':'L. ':'1.2-2' }}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        }
        }
      </div>

      <mat-form-field appearance="outline" class="campo-full mt-2">
        <mat-label>Detalle Pedido</mat-label>
        <textarea matInput placeholder="Detalle Pedido" [formControl]="detallePedido" cdkTextareaAutosize
          cdkAutosizeMinRows="4" autocomplete="off" readonly></textarea>
      </mat-form-field>

      <mat-form-field appearance="outline" class="campo-full mt-2">
        <mat-label>Observaci\xF3n</mat-label>
        <textarea matInput placeholder="Observaci\xF3n" [formControl]="observacion" cdkTextareaAutosize
          cdkAutosizeMinRows="3" autocomplete="off" readonly></textarea>
      </mat-form-field>

      <mat-form-field appearance="outline" class="campo-full mt-2">
        <mat-label>Observaci\xF3n Cliente</mat-label>
        <textarea matInput placeholder="Observaci\xF3n Cliente" [formControl]="observacionCliente" cdkTextareaAutosize
          cdkAutosizeMinRows="3" autocomplete="off"></textarea>
      </mat-form-field>

      <button mat-flat-button class="button-principal mt-2" (click)="descargarImagen()">
        <mat-icon>file_download</mat-icon> Descargar
      </button>

      @if (pedido.Url != null) {
      <div class="detalle-imagen">
        <img [src]="pedido.Url" class="imagePedido" alt="Imagen del pedido">
      </div>
      }
    </mat-dialog-content>

    <div class="acciones-modal">
      <button mat-stroked-button mat-dialog-close>Salir</button>
    </div>
  </div>
</ng-template>

<!-- ===== Modal: actualizar pedido ===== -->
<ng-template #modalActualizarPedido>
  <div class="modal-augajo modal-lg">
    <div class="modal-header">
      <span class="modal-titulo">Actualizar Pedido</span>
      <button mat-icon-button mat-dialog-close class="modal-cerrar" aria-label="Cerrar">
        <mat-icon>close</mat-icon>
      </button>
    </div>

    <mat-dialog-content class="mat-typography modal-body">
      <mat-form-field appearance="outline" class="campo-full mt-2">
        <mat-label>Detalle Pedido</mat-label>
        <textarea matInput placeholder="Detalle Pedido" [formControl]="detallePedido" cdkTextareaAutosize
          cdkAutosizeMinRows="4" autocomplete="off"></textarea>
      </mat-form-field>

      <mat-form-field appearance="outline" class="campo-full mt-2">
        <mat-label>Observaci\xF3n</mat-label>
        <textarea matInput placeholder="Observaci\xF3n" [formControl]="observacion" cdkTextareaAutosize
          cdkAutosizeMinRows="3" autocomplete="off"></textarea>
      </mat-form-field>
    </mat-dialog-content>

    <div class="acciones-modal">
      <button mat-stroked-button mat-dialog-close>Salir</button>
      <button mat-flat-button class="button-principal" (click)="actualizarPedido()">Guardar</button>
    </div>
  </div>
</ng-template>

<!-- ===== Modal: seleccionar repartidor ===== -->
<ng-template #modalReparto>
  <div class="modal-augajo">
    <div class="modal-header">
      <span class="modal-titulo">Seleccionar Repartidor</span>
      <button mat-icon-button mat-dialog-close class="modal-cerrar" aria-label="Cerrar">
        <mat-icon>close</mat-icon>
      </button>
    </div>

    <mat-dialog-content class="mat-typography modal-body">
      <mat-form-field appearance="outline" class="campo-full mt-2">
        <mat-label>Reparto</mat-label>
        <mat-select [formControl]="idReparto">
          @for (reparto of (seguiminetoPedidos.responseReparto$ | async); track reparto) {
          <mat-option [value]="reparto.Id">{{ reparto.NombreReparto }}</mat-option>
          }
        </mat-select>
      </mat-form-field>
    </mat-dialog-content>

    <div class="acciones-modal">
      <button mat-stroked-button mat-dialog-close>Salir</button>
      <button mat-flat-button class="button-principal" (click)="actualizarRepartidor()">Guardar</button>
    </div>
  </div>
</ng-template>`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/clientes/seguimiento-pedidos/seguimiento-pedidos.component.scss */\n.tv-wrap {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  padding: 24px 28px;\n  background: var(--color-bg);\n  --est-apertura: #8A8A8A;\n  --est-preparacion: #D99A1C;\n  --est-empacando: #2563EB;\n  --est-despachado: #7C3AED;\n  --est-entregado: #2E9E6B;\n}\n.tv-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.tv-title h1 {\n  font-family: var(--font-serif);\n  font-weight: 600;\n  font-size: 28px;\n  letter-spacing: -0.02em;\n  color: var(--color-text);\n}\n.tv-title .reloj {\n  font-size: 14px;\n  color: var(--color-text-secondary);\n  text-transform: capitalize;\n  margin-top: 2px;\n}\n.tv-header-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.tv-board {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 14px;\n  flex: 1;\n  min-height: 0;\n}\n.tv-col {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: 14px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);\n}\n.tv-col-head {\n  padding: 14px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 3px solid var(--col-color, #666);\n  background: var(--col-tint, #f5f5f5);\n}\n.tv-col-head .titulo {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.tv-col-head .dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--col-color, #666);\n}\n.tv-col-head .count {\n  background: var(--col-color, #666);\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n  min-width: 24px;\n  height: 24px;\n  padding: 0 7px;\n  border-radius: 12px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.tv-col-body {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 11px;\n  overflow-y: auto;\n  flex: 1;\n  background: #FBFAF9;\n}\n.tv-card {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-left: 4px solid var(--col-color, #666);\n  border-radius: 11px;\n  padding: 13px 15px;\n  transition: box-shadow 0.16s, transform 0.16s;\n}\n.tv-card:hover {\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.09);\n  transform: translateY(-2px);\n}\n.tv-card-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 5px;\n}\n.tv-card .num {\n  font-weight: 700;\n  font-size: 13px;\n  color: var(--col-color, #666);\n}\n.tv-card .opts {\n  color: #B0B0B0;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n.tv-card .cliente {\n  font-weight: 700;\n  font-size: 15px;\n  margin-bottom: 5px;\n  color: var(--color-text);\n}\n.tv-card .detalle {\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n  line-height: 1.45;\n  margin-bottom: 9px;\n}\n.tv-card .fecha {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11.5px;\n  color: #9A9A9A;\n}\n.tv-card .fecha mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.tv-vacio {\n  text-align: center;\n  color: #B0B0B0;\n  font-size: 13px;\n  padding: 36px 8px;\n  font-style: italic;\n}\n.col-apertura {\n  --col-color: var(--est-apertura);\n  --col-tint: #F4F4F4;\n}\n.col-preparacion {\n  --col-color: var(--est-preparacion);\n  --col-tint: #FBF4E4;\n}\n.col-empacando {\n  --col-color: var(--est-empacando);\n  --col-tint: #EAF1FE;\n}\n.col-despachado {\n  --col-color: var(--est-despachado);\n  --col-tint: #F1EBFC;\n}\n.col-entregado {\n  --col-color: var(--est-entregado);\n  --col-tint: #E7F4EE;\n}\n.tv-buscador {\n  width: 220px;\n}\n.tv-fs {\n  background: var(--color-surface) !important;\n  color: var(--color-text) !important;\n  border: 1px solid var(--color-border);\n  box-shadow: none !important;\n}\n.prod-cargando {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 4px;\n  color: var(--color-text-secondary);\n  font-size: 13px;\n}\n.tabla-detalle-prod {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  margin-top: 6px;\n}\n.tabla-detalle-prod thead th {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--color-text-secondary);\n  text-align: left;\n  padding: 8px 10px;\n  white-space: nowrap;\n  border-bottom: 1.5px solid var(--color-border);\n}\n.tabla-detalle-prod tbody td {\n  padding: 9px 10px;\n  font-size: 13px;\n  color: var(--color-text-primary);\n  border-bottom: 1px solid var(--color-border);\n  vertical-align: middle;\n}\n.tabla-detalle-prod .td-fuerte {\n  font-weight: 600;\n  color: var(--color-primary);\n}\n.tabla-detalle-prod .t-center {\n  text-align: center;\n}\n.tabla-detalle-prod .t-right {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.tabla-detalle-prod tfoot td {\n  padding: 11px 10px;\n  font-size: 13px;\n}\n.tabla-detalle-prod .total-lbl {\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-secondary);\n}\n.tabla-detalle-prod .total-val {\n  font-family: var(--font-serif);\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--color-accent);\n  font-variant-numeric: tabular-nums;\n}\n.origen-pill {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 999px;\n  white-space: nowrap;\n}\n.origen-pill.origen-bodega {\n  background: rgba(26, 26, 26, 0.08);\n  color: var(--color-primary);\n}\n.origen-pill.origen-consigna {\n  background: rgba(224, 26, 26, 0.1);\n  color: var(--color-accent);\n}\n.detalle-info {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n  margin-bottom: 18px;\n}\n.detalle-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  background: #FAF9F7;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-card);\n}\n.detalle-item > mat-icon,\n.detalle-item .detalle-ico mat-icon {\n  flex-shrink: 0;\n  width: 38px;\n  height: 38px;\n  line-height: 38px;\n  font-size: 20px;\n  text-align: center;\n  border-radius: 50%;\n  background: var(--color-primary);\n  color: #fff;\n}\n.detalle-item .detalle-ico {\n  flex-shrink: 0;\n  display: flex;\n}\n.detalle-item {\n}\n.detalle-item > div:last-child {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  line-height: 1.3;\n}\n.detalle-label {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-secondary);\n  margin-bottom: 2px;\n}\n.detalle-valor {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--color-primary);\n  word-break: break-word;\n}\n@media (max-width: 560px) {\n  .detalle-info {\n    grid-template-columns: 1fr;\n  }\n}\n.tv-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin: 8px 0 6px;\n}\n.tv-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n  background: rgba(26, 26, 26, 0.06);\n  border-radius: 999px;\n  padding: 3px 9px;\n  white-space: nowrap;\n}\n.tv-chip mat-icon {\n  font-size: 14px;\n  height: 14px;\n  width: 14px;\n}\n.tv-chip.tv-chip-consigna {\n  background: rgba(224, 26, 26, 0.1);\n  color: var(--color-accent);\n}\n.tv-productos {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n  line-height: 1.35;\n  margin-bottom: 8px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n/*# sourceMappingURL=seguimiento-pedidos.component.css.map */\n'] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], { modalActualizarPedido: [{
    type: ViewChild,
    args: ["modalActualizarPedido", { static: true }]
  }], modalRepartidor: [{
    type: ViewChild,
    args: ["modalReparto", { static: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SeguimientoPedidosComponent, { className: "SeguimientoPedidosComponent", filePath: "src/app/modules/clientes/seguimiento-pedidos/seguimiento-pedidos.component.ts", lineNumber: 19 });
})();

// src/app/modules/clientes/clientes-routing.module.ts
var routes = [
  {
    path: "generarPedido",
    component: GenerarPedidoComponent
  },
  {
    path: "listadoPedido",
    component: ListarPedidosComponent
  },
  {
    path: "seguimientoPedido",
    component: SeguimientoPedidosComponent
  }
];
var PedidosRoutingModule = class _PedidosRoutingModule {
  static {
    this.\u0275fac = function PedidosRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PedidosRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PedidosRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PedidosRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/clientes/clientes.module.ts
registerLocaleData(es_HN_default);
var PedidosModule = class _PedidosModule {
  static {
    this.\u0275fac = function PedidosModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PedidosModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PedidosModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
      { provide: LOCALE_ID, useValue: "es-HN" }
    ], imports: [
      CommonModule,
      PedidosRoutingModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatButtonModule,
      MatCardModule,
      ReactiveFormsModule,
      MatSelectModule,
      PipeModule,
      MatPaginatorModule,
      MatProgressSpinnerModule,
      DragDropModule,
      MatListModule,
      SharedModule,
      MatBottomSheetModule,
      MatDialogModule,
      MatSlideToggleModule,
      MatTooltipModule,
      MatAutocompleteModule,
      MatListModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PedidosModule, [{
    type: NgModule,
    args: [{
      declarations: [GenerarPedidoComponent, ListarPedidosComponent, SeguimientoPedidosComponent],
      imports: [
        CommonModule,
        PedidosRoutingModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        ReactiveFormsModule,
        MatSelectModule,
        PipeModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        DragDropModule,
        MatListModule,
        SharedModule,
        MatBottomSheetModule,
        MatDialogModule,
        MatSlideToggleModule,
        MatTooltipModule,
        MatAutocompleteModule,
        MatListModule
      ],
      providers: [
        { provide: LOCALE_ID, useValue: "es-HN" }
      ]
    }]
  }], null, null);
})();
export {
  PedidosModule
};
//# sourceMappingURL=clientes.module-5YX3IC7A.js.map

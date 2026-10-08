import {
  require_sweetalert2_all
} from "./chunk-EGNCYBTK.js";
import {
  ValidateReactiveFormService
} from "./chunk-THBG3FHZ.js";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "./chunk-F7KNSRT7.js";
import {
  AlmacenesFacadeService,
  MatSlideToggle,
  MatSlideToggleModule,
  ProductosFacadeService
} from "./chunk-W4RPNRDW.js";
import "./chunk-JCK2223L.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  MatDialog,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule
} from "./chunk-NCXRX5VN.js";
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
  Validators,
  ɵNgNoValidate
} from "./chunk-7MJ2GRQY.js";
import {
  DataApiService
} from "./chunk-6BZDU6I5.js";
import {
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  Component,
  CurrencyPipe,
  DatePipe,
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
  MatSuffix,
  MensajesHttpService,
  NgClass,
  NgModule,
  RouterLink,
  RouterModule,
  SharedModule,
  SlicePipe,
  ToastrServiceLocal,
  __toESM,
  catchError,
  debounceTime,
  distinctUntilChanged,
  inject,
  setClassMetadata,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
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
  ɵɵpipeBind3,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
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
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-SQPJPWK2.js";

// src/app/modules/administracion/genero/genero.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());

// src/app/modules/administracion/genero/genero-facade.service.ts
var GeneroFacadeService = class _GeneroFacadeService {
  constructor() {
    this.dataApi = inject(DataApiService);
    this._mensajesHttp = inject(MensajesHttpService);
    this.Cargando$ = new BehaviorSubject(false);
    this.responseCargando$ = this.Cargando$.asObservable();
    this.Genero$ = new BehaviorSubject([]);
    this.responseGenero$ = this.Genero$.asObservable();
  }
  MostrarGenero(params) {
    this.Cargando$.next(true);
    this.Genero$.next([]);
    const request$ = this.dataApi.GetDataApi(`personas/genero/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      this.Genero$.next(result.data.Table0);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.Genero$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar los generos", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  InsertarGenero(params, respuesta) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.PostDataApi(`personas/genero/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al insertar el genero", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  ActualizarGenero(params, respuesta) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.PutDataApi(`personas/genero/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al actualizar el genero", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  EliminarGenero(params, respuesta) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.DeleteDataApiUrl(`personas/genero/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al eliminar el genero", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  static {
    this.\u0275fac = function GeneroFacadeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GeneroFacadeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GeneroFacadeService, factory: _GeneroFacadeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GeneroFacadeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/modules/administracion/genero/genero.component.ts
var _c0 = () => ["/dashboard"];
var _c1 = () => ["MetodoPago"];
function GeneroComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "app-loading", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("data", 4);
  }
}
function GeneroComponent_Conditional_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "mat-icon");
    \u0275\u0275text(2, "credit_card_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No hay generos para listar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 14);
    \u0275\u0275listener("click", function GeneroComponent_Conditional_27_Conditional_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      const modal_r2 = \u0275\u0275reference(30);
      return \u0275\u0275resetView(ctx_r3.openDialog(modal_r2));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Agregar el primero ");
    \u0275\u0275elementEnd()();
  }
}
function GeneroComponent_Conditional_27_Conditional_3_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 28)(1, "td", 30)(2, "div", 31)(3, "button", 32);
    \u0275\u0275listener("click", function GeneroComponent_Conditional_27_Conditional_3_For_16_Template_button_click_3_listener() {
      const pago_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      const modal_r2 = \u0275\u0275reference(30);
      return \u0275\u0275resetView(ctx_r3.openDialog(modal_r2, pago_r7));
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 33);
    \u0275\u0275listener("click", function GeneroComponent_Conditional_27_Conditional_3_For_16_Template_button_click_6_listener() {
      const pago_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.Eliminar(pago_r7));
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "td", 34);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 35);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 36)(14, "span", 37);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pago_r7 = ctx.$implicit;
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(pago_r7.Id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pago_r7.Genero);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pill-activo", pago_r7.Estado === "Activo")("pill-inactivo", pago_r7.Estado !== "Activo");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pago_r7.Estado, " ");
  }
}
function GeneroComponent_Conditional_27_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 18)(1, "mat-card-content")(2, "div", 19)(3, "table", 20)(4, "thead", 21)(5, "tr", 22)(6, "th", 23);
    \u0275\u0275text(7, "Acciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 24);
    \u0275\u0275text(9, "Codigo Genero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 25);
    \u0275\u0275text(11, "Genero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 26);
    \u0275\u0275text(13, "Estado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody", 27);
    \u0275\u0275repeaterCreate(15, GeneroComponent_Conditional_27_Conditional_3_For_16_Template, 16, 7, "tr", 28, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275pipe(18, "search");
    \u0275\u0275pipe(19, "slice");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "mat-paginator", 29);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275listener("page", function GeneroComponent_Conditional_27_Conditional_3_Template_mat_paginator_page_20_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.next($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(19, 8, \u0275\u0275pipeBind3(18, 4, \u0275\u0275pipeBind1(17, 2, ctx_r3.generoFacade.responseGenero$), ctx_r3.buscar == null ? null : ctx_r3.buscar.value, \u0275\u0275pureFunction0(14, _c1)), ctx_r3.desde, ctx_r3.hasta));
    \u0275\u0275advance(5);
    \u0275\u0275property("length", \u0275\u0275pipeBind1(21, 12, ctx_r3.generoFacade.responseGenero$).length)("pageSize", ctx_r3.pageSize);
  }
}
function GeneroComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275conditionalCreate(1, GeneroComponent_Conditional_27_Conditional_1_Template, 9, 0, "div", 17);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275conditionalCreate(3, GeneroComponent_Conditional_27_Conditional_3_Template, 22, 15, "mat-card", 18);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275\u0275pipeBind1(2, 2, ctx_r3.generoFacade.responseGenero$).length === 0 ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(4, 4, ctx_r3.generoFacade.responseGenero$).length > 0 ? 3 : -1);
  }
}
function GeneroComponent_ng_template_29_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "Agregar Genero");
  }
}
function GeneroComponent_ng_template_29_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "Actualizar Genero");
  }
}
function GeneroComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "span", 40);
    \u0275\u0275conditionalCreate(3, GeneroComponent_ng_template_29_Conditional_3_Template, 1, 0)(4, GeneroComponent_ng_template_29_Conditional_4_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 41)(6, "mat-icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "mat-dialog-content", 42)(9, "form", 43)(10, "mat-form-field", 44)(11, "mat-label");
    \u0275\u0275text(12, "Genero ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 46)(15, "button", 47);
    \u0275\u0275text(16, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 14);
    \u0275\u0275listener("click", function GeneroComponent_ng_template_29_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.Guardar());
    });
    \u0275\u0275text(18, "Guardar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.formGenero.get("id").value == 0 ? 3 : 4);
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r3.formGenero);
  }
}
var GeneroComponent = class _GeneroComponent {
  constructor() {
    this.generoFacade = inject(GeneroFacadeService);
    this.dialog = inject(MatDialog);
    this.toast = inject(ToastrServiceLocal);
    this.buscar = new FormControl("");
    this.pageSize = 10;
    this.page = 0;
    this.pageIndex = 0;
    this.desde = 0;
    this.hasta = 10;
    this.generoFacade.MostrarGenero("0");
  }
  ngOnInit() {
  }
  openDialog(template, item) {
    this.formGenero = new FormGroup({
      id: new FormControl(item?.Id || 0),
      genero: new FormControl(item?.Genero || "", [Validators.required]),
      idEstado: new FormControl(item?.IdEstado || "")
    });
    const dialogRef = this.dialog.open(template, {
      panelClass: "app-full-bleed-dialog",
      //Agregar una clase ccs al dialogo,
      disableClose: true
    });
  }
  Guardar() {
    if (this.formGenero.invalid) {
      this.toast.mensajeWarning("Es requerido ingresar los campos marcados como obligatorios", "");
      this.formGenero.markAllAsTouched();
      return;
    }
    if (this.formGenero.get("id").value === 0) {
      this.generoFacade.InsertarGenero(this.formGenero.value, (respuesta) => {
        if (respuesta.hasError === false) {
          this.generoFacade.MostrarGenero("0");
          this.dialog.closeAll();
        }
      });
    } else {
      this.generoFacade.ActualizarGenero(this.formGenero.value, (respuesta) => {
        if (respuesta.hasError === false) {
          this.generoFacade.MostrarGenero("0");
          this.dialog.closeAll();
        }
      });
    }
  }
  Eliminar(params) {
    import_sweetalert2.default.fire({
      title: "Confirmaci\xF3n",
      html: ` <p> \xBFEsta seguro quiere inhabilitar el genero <b>${params.Genero}</b>? </p>`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#003399",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.generoFacade.EliminarGenero(params.Id, (respuesta) => {
          this.generoFacade.MostrarGenero("0");
        });
      }
    });
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
  static {
    this.\u0275fac = function GeneroComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GeneroComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GeneroComponent, selectors: [["app-genero"]], standalone: false, decls: 31, vars: 9, consts: [["modal", ""], [1, "navigation"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "activo"], [1, "content"], [1, "titleNav"], [1, "subtitulo"], [1, "action"], ["appearance", "outline", 1, "buscador"], ["matInput", "", "type", "text", "placeholder", "Buscar genero\u2026", "autocomplete", "off", 3, "formControl"], ["matPrefix", ""], ["mat-flat-button", "", 1, "button-principal", 3, "click"], [1, "contenedor-tabla"], [3, "data"], [1, "sin-datos"], [1, "matCardPersonalizada"], [1, "tabla-scroll"], ["role", "table", 1, "tablep"], [1, "theadp"], [1, "trp"], [1, "thp", "col-acciones"], [1, "thp", "col-numero"], [1, "thp"], [1, "thp", "col-estado"], ["role", "rowgroup", 1, "tbodyp"], ["role", "row", 1, "trp"], [3, "page", "length", "pageSize"], ["data-title", "Acciones", 1, "tdp", "col-acciones"], [1, "acciones"], ["mat-mini-fab", "", "matTooltip", "Editar", 1, "buttonSecundary", 3, "click"], ["mat-mini-fab", "", "matTooltip", "Eliminar", 1, "btnDelete", 3, "click"], ["data-title", "C\xF3digo", 1, "tdp", "col-numero"], ["data-title", "Genero", 1, "tdp", "td-fuerte"], ["data-title", "Estado", 1, "tdp", "col-estado"], [1, "pill"], [1, "modal-augajo"], [1, "modal-header"], [1, "modal-titulo"], ["mat-icon-button", "", "mat-dialog-close", "", "aria-label", "Cerrar", 1, "modal-cerrar"], [1, "mat-typography", "modal-body"], [1, "form-modal", 3, "formGroup"], ["appearance", "outline", 1, "campo-full"], ["matInput", "", "placeholder", "Genero", "formControlName", "genero", "required", ""], [1, "acciones-modal"], ["mat-stroked-button", "", "mat-dialog-close", ""]], template: function GeneroComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "nav", 2)(2, "ol", 3)(3, "li", 4)(4, "a", 5);
        \u0275\u0275text(5, "Inicio");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "li", 6);
        \u0275\u0275text(7, "Genero");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "h2");
        \u0275\u0275text(11, "Genero");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 9);
        \u0275\u0275text(13, "Gesti\xF3n de los generos disponibles");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 10)(15, "mat-form-field", 11)(16, "mat-label");
        \u0275\u0275text(17, "Buscar");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 12);
        \u0275\u0275elementStart(19, "mat-icon", 13);
        \u0275\u0275text(20, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "button", 14);
        \u0275\u0275listener("click", function GeneroComponent_Template_button_click_21_listener() {
          \u0275\u0275restoreView(_r1);
          const modal_r2 = \u0275\u0275reference(30);
          return \u0275\u0275resetView(ctx.openDialog(modal_r2));
        });
        \u0275\u0275elementStart(22, "mat-icon");
        \u0275\u0275text(23, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " Nuevo ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(25, GeneroComponent_Conditional_25_Template, 2, 1, "div", 15);
        \u0275\u0275pipe(26, "async");
        \u0275\u0275conditionalCreate(27, GeneroComponent_Conditional_27_Template, 5, 6, "div", 15);
        \u0275\u0275pipe(28, "async");
        \u0275\u0275template(29, GeneroComponent_ng_template_29_Template, 19, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c0));
        \u0275\u0275advance(14);
        \u0275\u0275property("formControl", ctx.buscar);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(\u0275\u0275pipeBind1(26, 4, ctx.generoFacade.responseCargando$) ? 25 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!\u0275\u0275pipeBind1(28, 6, ctx.generoFacade.responseCargando$) ? 27 : -1);
      }
    }, dependencies: [RouterLink, MatFormField, MatLabel, MatPrefix, MatInput, MatIcon, MatButton, MatMiniFabButton, MatIconButton, MatDialogClose, MatDialogContent, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormControlDirective, FormGroupDirective, FormControlName, LoadingComponent, MatCard, MatCardContent, MatPaginator, MatTooltip, AsyncPipe, SlicePipe, SearchPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GeneroComponent, [{
    type: Component,
    args: [{ selector: "app-genero", standalone: false, template: `
<div class="navigation">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a [routerLink]="['/dashboard']">Inicio</a></li>
      <li class="breadcrumb-item activo">Genero</li>
    </ol>
  </nav>

  <div class="content">
    <div class="titleNav">
      <h2>Genero</h2>
      <div class="subtitulo">Gesti\xF3n de los generos disponibles</div>
    </div>

    <div class="action">
      <mat-form-field appearance="outline" class="buscador">
        <mat-label>Buscar</mat-label>
        <input matInput type="text" [formControl]="buscar" placeholder="Buscar genero\u2026" autocomplete="off">
        <mat-icon matPrefix>search</mat-icon>
      </mat-form-field>
      <button class="button-principal" mat-flat-button (click)="openDialog(modal)">
        <mat-icon>add</mat-icon>
        Nuevo
      </button>
    </div>
  </div>
</div>

@if ((generoFacade.responseCargando$ | async)) {
  <div class="contenedor-tabla">
    <app-loading [data]="4"></app-loading>
  </div>
}

@if (!(generoFacade.responseCargando$ | async)) {
  <div class="contenedor-tabla">

    @if ((generoFacade.responseGenero$ | async).length === 0) {
      <div class="sin-datos">
        <mat-icon>credit_card_off</mat-icon>
        <p>No hay generos para listar</p>
        <button class="button-principal" mat-flat-button (click)="openDialog(modal)">
          <mat-icon>add</mat-icon>
          Agregar el primero
        </button>
      </div>
    }

    @if ((generoFacade.responseGenero$ | async).length > 0) {
      <mat-card class="matCardPersonalizada">
        <mat-card-content>
          <div class="tabla-scroll">
            <table class="tablep" role="table">
              <thead class="theadp">
                <tr class="trp">
                  <th class="thp col-acciones">Acciones</th>
                  <th class="thp col-numero">Codigo Genero</th>
                  <th class="thp">Genero</th>
                  <th class="thp col-estado">Estado</th>
                </tr>
              </thead>
              <tbody role="rowgroup" class="tbodyp">
                @for (pago of (generoFacade.responseGenero$ | async) | search: this.buscar?.value: ['MetodoPago'] | slice: desde : hasta; track pago) {
                  <tr class="trp" role="row">
                    <td data-title="Acciones" class="tdp col-acciones">
                      <div class="acciones">
                        <button class="buttonSecundary" mat-mini-fab (click)="openDialog(modal, pago)" matTooltip="Editar">
                          <mat-icon>edit</mat-icon>
                        </button>
                        <button class="btnDelete" mat-mini-fab (click)="Eliminar(pago)" matTooltip="Eliminar">
                          <mat-icon>delete</mat-icon>
                        </button>
                      </div>
                    </td>
                    <td data-title="C\xF3digo" class="tdp col-numero">{{ pago.Id }}</td>
                    <td data-title="Genero" class="tdp td-fuerte">{{ pago.Genero }}</td>
                    <td data-title="Estado" class="tdp col-estado">
                      <span class="pill" [class.pill-activo]="pago.Estado === 'Activo'" [class.pill-inactivo]="pago.Estado !== 'Activo'">
                        {{ pago.Estado }}
                      </span>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>

          <mat-paginator
            [length]="(generoFacade.responseGenero$ | async).length"
            [pageSize]="pageSize"
            (page)="next($event)">
          </mat-paginator>
        </mat-card-content>
      </mat-card>
    }

  </div>
}
<ng-template #modal>
  <div class="modal-augajo">
    <div class="modal-header">
      <span class="modal-titulo">@if(formGenero.get('id').value == 0){Agregar Genero} @else{Actualizar Genero}</span>
      <button mat-icon-button mat-dialog-close class="modal-cerrar" aria-label="Cerrar">
        <mat-icon>close</mat-icon>
      </button>
    </div>

    <mat-dialog-content class="mat-typography modal-body">
      <form [formGroup]="formGenero" class="form-modal">
        <mat-form-field appearance="outline" class="campo-full">
            <mat-label>Genero </mat-label>
          <input matInput placeholder="Genero" formControlName="genero" required>
        </mat-form-field>

      </form>
    </mat-dialog-content>

    <div class="acciones-modal">
      <button mat-stroked-button mat-dialog-close>Cancelar</button>
      <button class="button-principal" mat-flat-button (click)="Guardar()">Guardar</button>
    </div>
  </div>
</ng-template>` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GeneroComponent, { className: "GeneroComponent", filePath: "src/app/modules/administracion/genero/genero.component.ts", lineNumber: 15 });
})();

// src/app/modules/administracion/metodo-pago/metodo-pago.component.ts
var import_sweetalert22 = __toESM(require_sweetalert2_all());

// src/app/modules/administracion/metodo-pago/metodo-pago-facade.service.ts
var MetodoPagoFacadeService = class _MetodoPagoFacadeService {
  constructor() {
    this.dataApi = inject(DataApiService);
    this._mensajesHttp = inject(MensajesHttpService);
    this.Cargando$ = new BehaviorSubject(false);
    this.responseCargando$ = this.Cargando$.asObservable();
    this.MetodoPago$ = new BehaviorSubject([]);
    this.responseMetodoPago$ = this.MetodoPago$.asObservable();
  }
  MostrarMetodoPago(params) {
    this.Cargando$.next(true);
    this.MetodoPago$.next([]);
    const request$ = this.dataApi.GetDataApi(`mantenimiento/metodoPago/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      this.MetodoPago$.next(result.data.Table0);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.MetodoPago$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar el metodo de pago", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  InsertarMetodoPago(params, respuesta) {
    this.Cargando$.next(true);
    this.MetodoPago$.next([]);
    const request$ = this.dataApi.PostDataApi(`mantenimiento/metodoPago/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.MetodoPago$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al insertar el metodo de pago", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  ActualizarMetodoPago(params, respuesta) {
    this.Cargando$.next(true);
    this.MetodoPago$.next([]);
    const request$ = this.dataApi.PutDataApi(`mantenimiento/metodoPago/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.MetodoPago$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al actualizar el metodo de pago", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  EliminarMetodoPago(params, respuesta) {
    this.Cargando$.next(true);
    this.MetodoPago$.next([]);
    const request$ = this.dataApi.DeleteDataApiUrl(`mantenimiento/metodoPago/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.MetodoPago$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al eliminar el metodo de pago", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  static {
    this.\u0275fac = function MetodoPagoFacadeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MetodoPagoFacadeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MetodoPagoFacadeService, factory: _MetodoPagoFacadeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MetodoPagoFacadeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/modules/administracion/metodo-pago/metodo-pago.component.ts
var _c02 = () => ["/dashboard"];
var _c12 = () => ["MetodoPago"];
function MetodoPagoComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "app-loading", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("data", 4);
  }
}
function MetodoPagoComponent_Conditional_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "mat-icon");
    \u0275\u0275text(2, "credit_card_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No hay m\xE9todos de pago para listar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 14);
    \u0275\u0275listener("click", function MetodoPagoComponent_Conditional_27_Conditional_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      const modal_r2 = \u0275\u0275reference(30);
      return \u0275\u0275resetView(ctx_r3.openDialog(modal_r2));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Agregar el primero ");
    \u0275\u0275elementEnd()();
  }
}
function MetodoPagoComponent_Conditional_27_Conditional_3_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 28)(1, "td", 30)(2, "div", 31)(3, "button", 32);
    \u0275\u0275listener("click", function MetodoPagoComponent_Conditional_27_Conditional_3_For_18_Template_button_click_3_listener() {
      const pago_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      const modal_r2 = \u0275\u0275reference(30);
      return \u0275\u0275resetView(ctx_r3.openDialog(modal_r2, pago_r7));
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 33);
    \u0275\u0275listener("click", function MetodoPagoComponent_Conditional_27_Conditional_3_For_18_Template_button_click_6_listener() {
      const pago_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.Eliminar(pago_r7));
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "delete");
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
    \u0275\u0275elementStart(15, "td", 37)(16, "span", 38);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pago_r7 = ctx.$implicit;
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(pago_r7.Id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pago_r7.MetodoPago);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pago_r7.Descripcion || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pill-activo", pago_r7.Estado === "Activo")("pill-inactivo", pago_r7.Estado !== "Activo");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pago_r7.Estado, " ");
  }
}
function MetodoPagoComponent_Conditional_27_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 18)(1, "mat-card-content")(2, "div", 19)(3, "table", 20)(4, "thead", 21)(5, "tr", 22)(6, "th", 23);
    \u0275\u0275text(7, "Acciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 24);
    \u0275\u0275text(9, "C\xF3digo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 25);
    \u0275\u0275text(11, "M\xE9todo de pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 25);
    \u0275\u0275text(13, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 26);
    \u0275\u0275text(15, "Estado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody", 27);
    \u0275\u0275repeaterCreate(17, MetodoPagoComponent_Conditional_27_Conditional_3_For_18_Template, 18, 8, "tr", 28, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275pipe(20, "search");
    \u0275\u0275pipe(21, "slice");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "mat-paginator", 29);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275listener("page", function MetodoPagoComponent_Conditional_27_Conditional_3_Template_mat_paginator_page_22_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.next($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(21, 8, \u0275\u0275pipeBind3(20, 4, \u0275\u0275pipeBind1(19, 2, ctx_r3.MetodoPagoFacade.responseMetodoPago$), ctx_r3.buscar == null ? null : ctx_r3.buscar.value, \u0275\u0275pureFunction0(14, _c12)), ctx_r3.desde, ctx_r3.hasta));
    \u0275\u0275advance(5);
    \u0275\u0275property("length", \u0275\u0275pipeBind1(23, 12, ctx_r3.MetodoPagoFacade.responseMetodoPago$).length)("pageSize", ctx_r3.pageSize);
  }
}
function MetodoPagoComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275conditionalCreate(1, MetodoPagoComponent_Conditional_27_Conditional_1_Template, 9, 0, "div", 17);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275conditionalCreate(3, MetodoPagoComponent_Conditional_27_Conditional_3_Template, 24, 15, "mat-card", 18);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275\u0275pipeBind1(2, 2, ctx_r3.MetodoPagoFacade.responseMetodoPago$).length === 0 ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(4, 4, ctx_r3.MetodoPagoFacade.responseMetodoPago$).length > 0 ? 3 : -1);
  }
}
function MetodoPagoComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "span", 41);
    \u0275\u0275text(3, "M\xE9todo de Pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 42)(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "mat-dialog-content", 43)(8, "form", 44)(9, "mat-form-field", 45)(10, "mat-label");
    \u0275\u0275text(11, "M\xE9todo de Pago");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 45)(14, "mat-label");
    \u0275\u0275text(15, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "textarea", 47);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 48)(18, "button", 49);
    \u0275\u0275text(19, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 14);
    \u0275\u0275listener("click", function MetodoPagoComponent_ng_template_29_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.Guardar());
    });
    \u0275\u0275text(21, "Guardar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx_r3.formMetodoPago);
  }
}
var MetodoPagoComponent = class _MetodoPagoComponent {
  constructor() {
    this.MetodoPagoFacade = inject(MetodoPagoFacadeService);
    this.dialog = inject(MatDialog);
    this.toast = inject(ToastrServiceLocal);
    this.buscar = new FormControl("");
    this.pageSize = 10;
    this.page = 0;
    this.pageIndex = 0;
    this.desde = 0;
    this.hasta = 10;
    this.MetodoPagoFacade.MostrarMetodoPago("0");
  }
  ngOnInit() {
  }
  openDialog(template, params) {
    this.formMetodoPago = new FormGroup({
      //Valores de front para insertar tipo de pedido
      id: new FormControl(params?.Id || "0"),
      metodoPago: new FormControl(params?.MetodoPago || "", [Validators.required]),
      descripcion: new FormControl(params?.Descripcion || ""),
      usuario: new FormControl("ymunoz"),
      idEstado: new FormControl(params?.IdEstado || "")
    });
    this.dialog.open(template, {
      panelClass: "app-full-bleed-dialog",
      //Agregar una clase ccs al dialogo
      disableClose: true
    });
  }
  Guardar() {
    if (this.formMetodoPago.invalid) {
      this.toast.mensajeWarning("Es requerido ingresar los campos validos", "");
      this.formMetodoPago.markAllAsTouched();
      return;
    }
    if (this.formMetodoPago.get("id").value === "0") {
      this.MetodoPagoFacade.InsertarMetodoPago(this.formMetodoPago.value, (respuesta) => {
        this.MetodoPagoFacade.MostrarMetodoPago("0");
        this.dialog.closeAll();
      });
    } else {
      this.MetodoPagoFacade.ActualizarMetodoPago(this.formMetodoPago.value, (respuesta) => {
        this.MetodoPagoFacade.MostrarMetodoPago("0");
        this.dialog.closeAll();
      });
    }
  }
  Eliminar(params) {
    import_sweetalert22.default.fire({
      title: "Confirmaci\xF3n",
      html: ` <p> \xBFEsta seguro quiere inhabilitar el metodo de pago <b>${params.MetodoPago}</b>? </p>`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#003399",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.MetodoPagoFacade.EliminarMetodoPago(params.Id, (respuesta) => {
          this.MetodoPagoFacade.MostrarMetodoPago("0");
        });
      }
    });
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
  static {
    this.\u0275fac = function MetodoPagoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MetodoPagoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MetodoPagoComponent, selectors: [["app-metodo-pago"]], standalone: false, decls: 31, vars: 9, consts: [["modal", ""], [1, "navigation"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "activo"], [1, "content"], [1, "titleNav"], [1, "subtitulo"], [1, "action"], ["appearance", "outline", 1, "buscador"], ["matInput", "", "type", "text", "placeholder", "Buscar m\xE9todo\u2026", "autocomplete", "off", 3, "formControl"], ["matPrefix", ""], ["mat-flat-button", "", 1, "button-principal", 3, "click"], [1, "contenedor-tabla"], [3, "data"], [1, "sin-datos"], [1, "matCardPersonalizada"], [1, "tabla-scroll"], ["role", "table", 1, "tablep"], [1, "theadp"], [1, "trp"], [1, "thp", "col-acciones"], [1, "thp", "col-numero"], [1, "thp"], [1, "thp", "col-estado"], ["role", "rowgroup", 1, "tbodyp"], ["role", "row", 1, "trp"], [3, "page", "length", "pageSize"], ["data-title", "Acciones", 1, "tdp", "col-acciones"], [1, "acciones"], ["mat-mini-fab", "", "matTooltip", "Editar", 1, "buttonSecundary", 3, "click"], ["mat-mini-fab", "", "matTooltip", "Eliminar", 1, "btnDelete", 3, "click"], ["data-title", "C\xF3digo", 1, "tdp", "col-numero"], ["data-title", "M\xE9todo de pago", 1, "tdp", "td-fuerte"], ["data-title", "Descripci\xF3n", 1, "tdp", "td-secundario"], ["data-title", "Estado", 1, "tdp", "col-estado"], [1, "pill"], [1, "modal-augajo"], [1, "modal-header"], [1, "modal-titulo"], ["mat-icon-button", "", "mat-dialog-close", "", "aria-label", "Cerrar", 1, "modal-cerrar"], [1, "mat-typography", "modal-body"], [1, "form-modal", 3, "formGroup"], ["appearance", "outline", 1, "campo-full"], ["matInput", "", "placeholder", "Ej. Transferencia bancaria", "formControlName", "metodoPago", "required", ""], ["matInput", "", "placeholder", "Describe el m\xE9todo de pago", "formControlName", "descripcion", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "3", "cdkAutosizeMaxRows", "6", "autocomplete", "off"], [1, "acciones-modal"], ["mat-stroked-button", "", "mat-dialog-close", ""]], template: function MetodoPagoComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "nav", 2)(2, "ol", 3)(3, "li", 4)(4, "a", 5);
        \u0275\u0275text(5, "Inicio");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "li", 6);
        \u0275\u0275text(7, "M\xE9todo de Pago");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "h2");
        \u0275\u0275text(11, "M\xE9todo de Pago");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 9);
        \u0275\u0275text(13, "Gesti\xF3n de los m\xE9todos de pago disponibles");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 10)(15, "mat-form-field", 11)(16, "mat-label");
        \u0275\u0275text(17, "Buscar");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 12);
        \u0275\u0275elementStart(19, "mat-icon", 13);
        \u0275\u0275text(20, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "button", 14);
        \u0275\u0275listener("click", function MetodoPagoComponent_Template_button_click_21_listener() {
          \u0275\u0275restoreView(_r1);
          const modal_r2 = \u0275\u0275reference(30);
          return \u0275\u0275resetView(ctx.openDialog(modal_r2));
        });
        \u0275\u0275elementStart(22, "mat-icon");
        \u0275\u0275text(23, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " Nuevo ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(25, MetodoPagoComponent_Conditional_25_Template, 2, 1, "div", 15);
        \u0275\u0275pipe(26, "async");
        \u0275\u0275conditionalCreate(27, MetodoPagoComponent_Conditional_27_Template, 5, 6, "div", 15);
        \u0275\u0275pipe(28, "async");
        \u0275\u0275template(29, MetodoPagoComponent_ng_template_29_Template, 22, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c02));
        \u0275\u0275advance(14);
        \u0275\u0275property("formControl", ctx.buscar);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(\u0275\u0275pipeBind1(26, 4, ctx.MetodoPagoFacade.responseCargando$) ? 25 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!\u0275\u0275pipeBind1(28, 6, ctx.MetodoPagoFacade.responseCargando$) ? 27 : -1);
      }
    }, dependencies: [RouterLink, MatFormField, MatLabel, MatPrefix, MatInput, CdkTextareaAutosize, MatIcon, MatButton, MatMiniFabButton, MatIconButton, MatDialogClose, MatDialogContent, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormControlDirective, FormGroupDirective, FormControlName, LoadingComponent, MatCard, MatCardContent, MatPaginator, MatTooltip, AsyncPipe, SlicePipe, SearchPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MetodoPagoComponent, [{
    type: Component,
    args: [{ selector: "app-metodo-pago", standalone: false, template: `<div class="navigation">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a [routerLink]="['/dashboard']">Inicio</a></li>
      <li class="breadcrumb-item activo">M\xE9todo de Pago</li>
    </ol>
  </nav>

  <div class="content">
    <div class="titleNav">
      <h2>M\xE9todo de Pago</h2>
      <div class="subtitulo">Gesti\xF3n de los m\xE9todos de pago disponibles</div>
    </div>

    <div class="action">
      <mat-form-field appearance="outline" class="buscador">
        <mat-label>Buscar</mat-label>
        <input matInput type="text" [formControl]="buscar" placeholder="Buscar m\xE9todo\u2026" autocomplete="off">
        <mat-icon matPrefix>search</mat-icon>
      </mat-form-field>
      <button class="button-principal" mat-flat-button (click)="openDialog(modal)">
        <mat-icon>add</mat-icon>
        Nuevo
      </button>
    </div>
  </div>
</div>

@if ((MetodoPagoFacade.responseCargando$ | async)) {
  <div class="contenedor-tabla">
    <app-loading [data]="4"></app-loading>
  </div>
}

@if (!(MetodoPagoFacade.responseCargando$ | async)) {
  <div class="contenedor-tabla">

    @if ((MetodoPagoFacade.responseMetodoPago$ | async).length === 0) {
      <div class="sin-datos">
        <mat-icon>credit_card_off</mat-icon>
        <p>No hay m\xE9todos de pago para listar</p>
        <button class="button-principal" mat-flat-button (click)="openDialog(modal)">
          <mat-icon>add</mat-icon>
          Agregar el primero
        </button>
      </div>
    }

    @if ((MetodoPagoFacade.responseMetodoPago$ | async).length > 0) {
      <mat-card class="matCardPersonalizada">
        <mat-card-content>
          <div class="tabla-scroll">
            <table class="tablep" role="table">
              <thead class="theadp">
                <tr class="trp">
                  <th class="thp col-acciones">Acciones</th>
                  <th class="thp col-numero">C\xF3digo</th>
                  <th class="thp">M\xE9todo de pago</th>
                  <th class="thp">Descripci\xF3n</th>
                  <th class="thp col-estado">Estado</th>
                </tr>
              </thead>
              <tbody role="rowgroup" class="tbodyp">
                @for (pago of (MetodoPagoFacade.responseMetodoPago$ | async) | search: this.buscar?.value: ['MetodoPago'] | slice: desde : hasta; track pago) {
                  <tr class="trp" role="row">
                    <td data-title="Acciones" class="tdp col-acciones">
                      <div class="acciones">
                        <button class="buttonSecundary" mat-mini-fab (click)="openDialog(modal, pago)" matTooltip="Editar">
                          <mat-icon>edit</mat-icon>
                        </button>
                        <button class="btnDelete" mat-mini-fab (click)="Eliminar(pago)" matTooltip="Eliminar">
                          <mat-icon>delete</mat-icon>
                        </button>
                      </div>
                    </td>
                    <td data-title="C\xF3digo" class="tdp col-numero">{{ pago.Id }}</td>
                    <td data-title="M\xE9todo de pago" class="tdp td-fuerte">{{ pago.MetodoPago }}</td>
                    <td data-title="Descripci\xF3n" class="tdp td-secundario">{{ pago.Descripcion || '\u2014' }}</td>
                    <td data-title="Estado" class="tdp col-estado">
                      <span class="pill" [class.pill-activo]="pago.Estado === 'Activo'" [class.pill-inactivo]="pago.Estado !== 'Activo'">
                        {{ pago.Estado }}
                      </span>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>

          <mat-paginator
            [length]="(MetodoPagoFacade.responseMetodoPago$ | async).length"
            [pageSize]="pageSize"
            (page)="next($event)">
          </mat-paginator>
        </mat-card-content>
      </mat-card>
    }

  </div>
}

<ng-template #modal>
  <div class="modal-augajo">
    <div class="modal-header">
      <span class="modal-titulo">M\xE9todo de Pago</span>
      <button mat-icon-button mat-dialog-close class="modal-cerrar" aria-label="Cerrar">
        <mat-icon>close</mat-icon>
      </button>
    </div>

    <mat-dialog-content class="mat-typography modal-body">
      <form [formGroup]="formMetodoPago" class="form-modal">
        <mat-form-field appearance="outline" class="campo-full">
          <mat-label>M\xE9todo de Pago</mat-label>
          <input matInput placeholder="Ej. Transferencia bancaria" formControlName="metodoPago" required>
        </mat-form-field>

        <mat-form-field appearance="outline" class="campo-full">
          <mat-label>Descripci\xF3n</mat-label>
          <textarea matInput placeholder="Describe el m\xE9todo de pago" formControlName="descripcion"
                    cdkTextareaAutosize cdkAutosizeMinRows="3" cdkAutosizeMaxRows="6" autocomplete="off"></textarea>
        </mat-form-field>
      </form>
    </mat-dialog-content>

    <div class="acciones-modal">
      <button mat-stroked-button mat-dialog-close>Cancelar</button>
      <button class="button-principal" mat-flat-button (click)="Guardar()">Guardar</button>
    </div>
  </div>
</ng-template>` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MetodoPagoComponent, { className: "MetodoPagoComponent", filePath: "src/app/modules/administracion/metodo-pago/metodo-pago.component.ts", lineNumber: 15 });
})();

// src/app/modules/administracion/pedidos/pedidos.component.ts
var import_sweetalert23 = __toESM(require_sweetalert2_all());

// src/app/modules/administracion/pedidos/pedidos-facade.service.ts
var PedidosFacadeService = class _PedidosFacadeService {
  constructor() {
    this.dataApi = inject(DataApiService);
    this._mensajesHttp = inject(MensajesHttpService);
    this.Cargando$ = new BehaviorSubject(false);
    this.responseCargando$ = this.Cargando$.asObservable();
    this.Pedidos$ = new BehaviorSubject([]);
    this.responsePedidos$ = this.Pedidos$.asObservable();
    this.TipoPedidos$ = new BehaviorSubject([]);
    this.responseTipoPedidos$ = this.TipoPedidos$.asObservable();
    this.MetodosPago$ = new BehaviorSubject([]);
    this.responseMetodosPago$ = this.MetodosPago$.asObservable();
    this.Reparto$ = new BehaviorSubject([]);
    this.responseReparto$ = this.Reparto$.asObservable();
    this.Usuario$ = new BehaviorSubject([]);
    this.responseUsuario$ = this.Usuario$.asObservable();
    this.EstadoProceso$ = new BehaviorSubject([]);
    this.responseEstadoProceso$ = this.EstadoProceso$.asObservable();
    this.ProductosConsigna$ = new BehaviorSubject(null);
    this.responseProductosConsigna$ = this.ProductosConsigna$.asObservable();
    this.TotalPedidos$ = new BehaviorSubject(0);
    this.responseTotalPedidos$ = this.TotalPedidos$.asObservable();
  }
  seg(valor, centinela = 0) {
    if (valor === null || valor === void 0 || valor === "") {
      return String(centinela);
    }
    return encodeURIComponent(String(valor));
  }
  MostrarPedido(f) {
    const url = `pedido/${this.seg(f.id)}/${this.seg(f.busqueda, "null")}/${this.seg(f.idEstado)}/${this.seg(f.fechaDesde, "null")}/${this.seg(f.fechaHasta, "null")}/${this.seg(f.pagina, 1)}/${this.seg(f.tamanoPagina, 10)}`;
    this.Cargando$.next(true);
    this.Pedidos$.next([]);
    const request$ = this.dataApi.GetDataApi(url, "").pipe(tap((result) => {
      this.Cargando$.next(false);
      this.Pedidos$.next(result.data.Table0 ?? []);
      this.TotalPedidos$.next(result.data.Table1?.[0]?.total ?? 0);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.Pedidos$.next([]);
      this.TotalPedidos$.next(0);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar los pedidos", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  InsertarPedido(params, respuesta) {
    this.Cargando$.next(true);
    this.Pedidos$.next([]);
    const request$ = this.dataApi.PostDataApi(`pedido/pedido/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.Pedidos$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al insertar el pedido", "");
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
  EliminarPedido(params, respuesta) {
    this.Cargando$.next(true);
    this.Pedidos$.next([]);
    const request$ = this.dataApi.DeleteDataApiUrl(`pedido/pedido/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.Pedidos$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al eliminar el pedido", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  MostrarTipoPedidos(params) {
    this.TipoPedidos$.next([]);
    const request$ = this.dataApi.GetDataApi(`mantenimiento/tipoPedido/`, params).pipe(tap((result) => {
      this.TipoPedidos$.next(result.data.Table0);
    }), catchError((error) => {
      this.TipoPedidos$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar los tipos de pedidos", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  MostrarMetodosPago(params) {
    this.MetodosPago$.next([]);
    const request$ = this.dataApi.GetDataApi(`mantenimiento/metodoPago/`, params).pipe(tap((result) => {
      this.MetodosPago$.next(result.data.Table0);
    }), catchError((error) => {
      this.MetodosPago$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar los metodos de pago", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  MostrarReparto(params) {
    this.Reparto$.next([]);
    const request$ = this.dataApi.GetDataApi(`mantenimiento/reparto/`, params).pipe(tap((result) => {
      this.Reparto$.next(result.data.Table0);
    }), catchError((error) => {
      this.Reparto$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar el reparto", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  MostrarUsuario(params) {
    this.Usuario$.next([]);
    const request$ = this.dataApi.GetDataApi(`seguridad/usuario/`, params).pipe(tap((result) => {
      this.Usuario$.next(result.data.Table0);
    }), catchError((error) => {
      this.Usuario$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar el usuario", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  MostrarEstadosProceso(params) {
    this.EstadoProceso$.next([]);
    const request$ = this.dataApi.GetDataApi(`mantenimiento/mostrarEstadoProceso`, params).pipe(tap((result) => {
      this.EstadoProceso$.next(result.data.Table0);
    }), catchError((error) => {
      this.EstadoProceso$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar los pedidos", "");
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
  static {
    this.\u0275fac = function PedidosFacadeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PedidosFacadeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PedidosFacadeService, factory: _PedidosFacadeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PedidosFacadeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/modules/administracion/pedidos/pedidos.component.ts
var _c03 = () => ["/dashboard"];
var _c13 = () => [10, 25, 50, 100];
var _forTrack0 = ($index, $item) => $item.id;
function PedidosComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r2 = ctx.$implicit;
    \u0275\u0275property("value", e_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r2.EstadoProceso);
  }
}
function PedidosComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "app-loading", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("data", 4);
  }
}
function PedidosComponent_Conditional_36_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "mat-icon");
    \u0275\u0275text(2, "credit_card_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No hay pedidos para listar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275listener("click", function PedidosComponent_Conditional_36_Conditional_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext(2);
      const modal_r3 = \u0275\u0275reference(39);
      return \u0275\u0275resetView(ctx_r4.openDialog(modal_r3));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Agregar el primero ");
    \u0275\u0275elementEnd()();
  }
}
function PedidosComponent_Conditional_36_Conditional_3_For_30_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function PedidosComponent_Conditional_36_Conditional_3_For_30_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const pedido_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(3);
      const modalEstado_r10 = \u0275\u0275reference(41);
      return \u0275\u0275resetView(ctx_r4.dialogEstadoPedido(modalEstado_r10, pedido_r8));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "change_circle");
    \u0275\u0275elementEnd()();
  }
}
function PedidosComponent_Conditional_36_Conditional_3_For_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 34)(1, "td", 36)(2, "div", 37)(3, "button", 38);
    \u0275\u0275listener("click", function PedidosComponent_Conditional_36_Conditional_3_For_30_Template_button_click_3_listener() {
      const pedido_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(3);
      const modal_r3 = \u0275\u0275reference(39);
      return \u0275\u0275resetView(ctx_r4.openDialog(modal_r3, pedido_r8));
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, PedidosComponent_Conditional_36_Conditional_3_For_30_Conditional_6_Template, 3, 0, "button", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 40);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 41);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 42);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 43);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 44);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "truncatePipe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 45);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 46);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 47);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 48);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td", 49)(28, "span", 50);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pedido_r8 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r4.puedeGuardarPedido(pedido_r8) ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pedido_r8.IdPedido);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pedido_r8.TipoPedido);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pedido_r8.MetodoPago || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pedido_r8.cantidad_productos);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 13, pedido_r8.DetallePedido, 100));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(pedido_r8.Observacion);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", pedido_r8.NombreReparto, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", pedido_r8.PrimerNombre, " ", pedido_r8.PrimerApellido);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(26, 16, pedido_r8.FechaInsercion, "yyyy-MM-dd"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r4.colorEstado(pedido_r8.IdEstado));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pedido_r8.EstadoProceso, " ");
  }
}
function PedidosComponent_Conditional_36_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 24)(1, "mat-card-content")(2, "div", 25)(3, "table", 26)(4, "thead", 27)(5, "tr", 28)(6, "th", 29);
    \u0275\u0275text(7, "Acciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 30);
    \u0275\u0275text(9, "C\xF3digo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 31);
    \u0275\u0275text(11, "Tipo Pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 31);
    \u0275\u0275text(13, "Metodo de Pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 31);
    \u0275\u0275text(15, "Cantidad Productos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 31);
    \u0275\u0275text(17, "Detalle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 31);
    \u0275\u0275text(19, "Observacion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 31);
    \u0275\u0275text(21, "Nombre Reparto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 31);
    \u0275\u0275text(23, "Usuario Ingreso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th", 31);
    \u0275\u0275text(25, "Fecha Ingreso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 32);
    \u0275\u0275text(27, "Estado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "tbody", 33);
    \u0275\u0275repeaterCreate(29, PedidosComponent_Conditional_36_Conditional_3_For_30_Template, 30, 19, "tr", 34, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(31, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "mat-paginator", 35);
    \u0275\u0275pipe(33, "async");
    \u0275\u0275listener("page", function PedidosComponent_Conditional_36_Conditional_3_Template_mat_paginator_page_32_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.next($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(29);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(31, 4, ctx_r4.pedidosFacade.responsePedidos$));
    \u0275\u0275advance(3);
    \u0275\u0275property("length", \u0275\u0275pipeBind1(33, 6, ctx_r4.pedidosFacade.responseTotalPedidos$))("pageSize", ctx_r4.pageSize)("pageIndex", ctx_r4.pageIndex)("pageSizeOptions", \u0275\u0275pureFunction0(8, _c13));
  }
}
function PedidosComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275conditionalCreate(1, PedidosComponent_Conditional_36_Conditional_1_Template, 9, 0, "div", 23);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275conditionalCreate(3, PedidosComponent_Conditional_36_Conditional_3_Template, 34, 9, "mat-card", 24);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275\u0275pipeBind1(2, 2, ctx_r4.pedidosFacade.responsePedidos$).length === 0 ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(4, 4, ctx_r4.pedidosFacade.responsePedidos$).length > 0 ? 3 : -1);
  }
}
function PedidosComponent_ng_template_38_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Actualizar Pedido ");
  }
}
function PedidosComponent_ng_template_38_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Nuevo Pedido ");
  }
}
function PedidosComponent_ng_template_38_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r11 = ctx.$implicit;
    \u0275\u0275property("value", t_r11.Id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r11.TipoPedido);
  }
}
function PedidosComponent_ng_template_38_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r12 = ctx.$implicit;
    \u0275\u0275property("value", m_r12.Id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r12.MetodoPago);
  }
}
function PedidosComponent_ng_template_38_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r13 = ctx.$implicit;
    \u0275\u0275property("value", r_r13.Id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r13.NombreReparto);
  }
}
function PedidosComponent_ng_template_38_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r14 = ctx.$implicit;
    \u0275\u0275property("value", u_r14.Id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r14.Usuario);
  }
}
function PedidosComponent_ng_template_38_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "button", 79);
    \u0275\u0275listener("click", function PedidosComponent_ng_template_38_Conditional_43_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.agregarProductoBodega());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "warehouse");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " De bodega ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 80);
    \u0275\u0275listener("click", function PedidosComponent_ng_template_38_Conditional_43_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.agregarProductoConsigna());
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "local_shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " De consigna ");
    \u0275\u0275elementEnd()();
  }
}
function PedidosComponent_ng_template_38_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "mat-icon");
    \u0275\u0275text(2, "shopping_cart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Agrega productos de bodega o de consigna");
    \u0275\u0275elementEnd()();
  }
}
function PedidosComponent_ng_template_38_Conditional_45_For_21_For_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", a_r17 == null ? null : a_r17.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r17 == null ? null : a_r17.nombre);
  }
}
function PedidosComponent_ng_template_38_Conditional_45_For_21_For_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", a_r17 == null ? null : a_r17.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r17 == null ? null : a_r17.nombre);
  }
}
function PedidosComponent_ng_template_38_Conditional_45_For_21_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PedidosComponent_ng_template_38_Conditional_45_For_21_For_8_Conditional_0_Template, 2, 2, "mat-option", 19);
    \u0275\u0275conditionalCreate(1, PedidosComponent_ng_template_38_Conditional_45_For_21_For_8_Conditional_1_Template, 2, 2, "mat-option", 19);
  }
  if (rf & 2) {
    let tmp_26_0;
    let tmp_27_0;
    const a_r17 = ctx.$implicit;
    const linea_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(((tmp_26_0 = linea_r18.get("esConsigna")) == null ? null : tmp_26_0.value) && (a_r17 == null ? null : a_r17.tipo) === "CONSIGNACION" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!((tmp_27_0 = linea_r18.get("esConsigna")) == null ? null : tmp_27_0.value) && (a_r17 == null ? null : a_r17.tipo) !== "CONSIGNACION" ? 1 : -1);
  }
}
function PedidosComponent_ng_template_38_Conditional_45_For_21_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r20 = ctx.$implicit;
    \u0275\u0275property("value", p_r20);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", p_r20 == null ? null : p_r20.sku, " - ", p_r20 == null ? null : p_r20.nombre, " (disp: ", p_r20 == null ? null : p_r20.stock_disponible, ")");
  }
}
function PedidosComponent_ng_template_38_Conditional_45_For_21_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_17_0;
    const linea_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(((tmp_17_0 = linea_r18.get("idLote")) == null ? null : tmp_17_0.value) ? "#" + ((tmp_17_0 = linea_r18.get("idLote")) == null ? null : tmp_17_0.value) : "FEFO");
  }
}
function PedidosComponent_ng_template_38_Conditional_45_For_21_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 98);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function PedidosComponent_ng_template_38_Conditional_45_For_21_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 103);
    \u0275\u0275listener("click", function PedidosComponent_ng_template_38_Conditional_45_For_21_Conditional_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const \u0275$index_324_r19 = \u0275\u0275nextContext().$index;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.eliminarProducto(\u0275$index_324_r19));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd()();
  }
}
function PedidosComponent_ng_template_38_Conditional_45_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 57)(1, "td", 82)(2, "span", 92);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 83)(5, "mat-form-field", 93)(6, "mat-select", 94);
    \u0275\u0275repeaterCreate(7, PedidosComponent_ng_template_38_Conditional_45_For_21_For_8_Template, 2, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td", 84)(11, "mat-form-field", 93)(12, "input", 95);
    \u0275\u0275listener("input", function PedidosComponent_ng_template_38_Conditional_45_For_21_Template_input_input_12_listener($event) {
      const \u0275$index_324_r19 = \u0275\u0275restoreView(_r16).$index;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.buscarProducto($event, \u0275$index_324_r19));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-autocomplete", 96, 2);
    \u0275\u0275listener("optionSelected", function PedidosComponent_ng_template_38_Conditional_45_For_21_Template_mat_autocomplete_optionSelected_13_listener($event) {
      const \u0275$index_324_r19 = \u0275\u0275restoreView(_r16).$index;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.selectProducto($event.option.value, \u0275$index_324_r19));
    });
    \u0275\u0275repeaterCreate(15, PedidosComponent_ng_template_38_Conditional_45_For_21_For_16_Template, 2, 4, "mat-option", 19, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "td", 85);
    \u0275\u0275conditionalCreate(18, PedidosComponent_ng_template_38_Conditional_45_For_21_Conditional_18_Template, 2, 1, "span", 97)(19, PedidosComponent_ng_template_38_Conditional_45_For_21_Conditional_19_Template, 2, 0, "span", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 86)(21, "mat-form-field", 93);
    \u0275\u0275element(22, "input", 99);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 86)(24, "mat-form-field", 93);
    \u0275\u0275element(25, "input", 100);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td", 87)(27, "span", 101);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "td", 88);
    \u0275\u0275conditionalCreate(31, PedidosComponent_ng_template_38_Conditional_45_For_21_Conditional_31_Template, 3, 0, "button", 102);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_17_0;
    let tmp_18_0;
    let tmp_19_0;
    let tmp_22_0;
    let tmp_24_0;
    const linea_r18 = ctx.$implicit;
    const \u0275$index_324_r19 = ctx.$index;
    const autoProd_r22 = \u0275\u0275reference(14);
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroup", linea_r18);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("origen-bodega", !((tmp_17_0 = linea_r18.get("esConsigna")) == null ? null : tmp_17_0.value))("origen-consigna", (tmp_18_0 = linea_r18.get("esConsigna")) == null ? null : tmp_18_0.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_19_0 = linea_r18.get("esConsigna")) == null ? null : tmp_19_0.value) ? "Consigna" : "Bodega", " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(9, 11, ctx_r4.almacenFacade.responseAlmacenes$));
    \u0275\u0275advance(5);
    \u0275\u0275property("matAutocomplete", autoProd_r22)("value", (tmp_22_0 = linea_r18.get("productoNombre")) == null ? null : tmp_22_0.value);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r4.productosPorLinea[\u0275$index_324_r19]);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_24_0 = linea_r18.get("requiereLote")) == null ? null : tmp_24_0.value) ? 18 : 19);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(29, 13, ctx_r4.subtotalProducto(\u0275$index_324_r19), "HNL", "L. ", "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r4.productos.enabled ? 31 : -1);
  }
}
function PedidosComponent_ng_template_38_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "table", 81)(2, "thead")(3, "tr")(4, "th", 82);
    \u0275\u0275text(5, "Origen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 83);
    \u0275\u0275text(7, "Almac\xE9n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 84);
    \u0275\u0275text(9, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 85);
    \u0275\u0275text(11, "Lote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 86);
    \u0275\u0275text(13, "Cant.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 86);
    \u0275\u0275text(15, "Precio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 87);
    \u0275\u0275text(17, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "th", 88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275repeaterCreate(20, PedidosComponent_ng_template_38_Conditional_45_For_21_Template, 32, 18, "tr", 57, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 89)(23, "span", 90);
    \u0275\u0275text(24, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 91);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r4.productos.controls);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(27, 1, ctx_r4.totalPedido(), "HNL", "L. ", "1.2-2"));
  }
}
function PedidosComponent_ng_template_38_Conditional_63_Conditional_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275element(1, "img", 108);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r4.cardImageBase64, \u0275\u0275sanitizeUrl);
  }
}
function PedidosComponent_ng_template_38_Conditional_63_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275listener("click", function PedidosComponent_ng_template_38_Conditional_63_Conditional_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const fileInput_r24 = \u0275\u0275reference(6);
      return \u0275\u0275resetView(fileInput_r24.click());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 106, 3);
    \u0275\u0275listener("change", function PedidosComponent_ng_template_38_Conditional_63_Conditional_3_Template_input_change_5_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.onFileSelect($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, PedidosComponent_ng_template_38_Conditional_63_Conditional_3_Conditional_7_Template, 2, 1, "div", 107);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r4.nombreArchivo || "Haz clic para seleccionar el comprobante");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r4.isImageSaved ? 7 : -1);
  }
}
function PedidosComponent_ng_template_38_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "mat-slide-toggle", 104);
    \u0275\u0275text(2, "\xBFPago realizado?");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, PedidosComponent_ng_template_38_Conditional_63_Conditional_3_Template, 8, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("formControl", ctx_r4.pagoRealizado);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r4.pagoRealizado.value ? 3 : -1);
  }
}
function PedidosComponent_ng_template_38_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275element(1, "img", 109);
    \u0275\u0275elementStart(2, "button", 20);
    \u0275\u0275listener("click", function PedidosComponent_ng_template_38_Conditional_64_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.descargarImagen());
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "file_download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Descargar comprobante ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r4.formPedido.get("url").value, \u0275\u0275sanitizeUrl);
  }
}
function PedidosComponent_ng_template_38_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function PedidosComponent_ng_template_38_Conditional_68_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.enviarPedido());
    });
    \u0275\u0275text(1, "Guardar");
    \u0275\u0275elementEnd();
  }
}
function PedidosComponent_ng_template_38_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 78);
  }
}
function PedidosComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "span", 54);
    \u0275\u0275conditionalCreate(3, PedidosComponent_ng_template_38_Conditional_3_Template, 1, 0)(4, PedidosComponent_ng_template_38_Conditional_4_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 55)(6, "mat-icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "mat-dialog-content", 56)(9, "form", 57)(10, "div", 58);
    \u0275\u0275text(11, "Configuraci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 59)(13, "mat-form-field", 60)(14, "mat-label");
    \u0275\u0275text(15, "Tipo Pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-select", 61);
    \u0275\u0275repeaterCreate(17, PedidosComponent_ng_template_38_For_18_Template, 2, 2, "mat-option", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "mat-form-field", 60)(21, "mat-label");
    \u0275\u0275text(22, "M\xE9todo Pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-select", 62);
    \u0275\u0275repeaterCreate(24, PedidosComponent_ng_template_38_For_25_Template, 2, 2, "mat-option", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(26, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "mat-form-field", 63)(28, "mat-label");
    \u0275\u0275text(29, "Reparto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "mat-select", 64);
    \u0275\u0275repeaterCreate(31, PedidosComponent_ng_template_38_For_32_Template, 2, 2, "mat-option", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(33, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "mat-form-field", 63)(35, "mat-label");
    \u0275\u0275text(36, "Usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-select", 65);
    \u0275\u0275repeaterCreate(38, PedidosComponent_ng_template_38_For_39_Template, 2, 2, "mat-option", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(40, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 66);
    \u0275\u0275text(42, " Productos ");
    \u0275\u0275conditionalCreate(43, PedidosComponent_ng_template_38_Conditional_43_Template, 9, 0, "div", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(44, PedidosComponent_ng_template_38_Conditional_44_Template, 5, 0, "div", 68);
    \u0275\u0275conditionalCreate(45, PedidosComponent_ng_template_38_Conditional_45_Template, 28, 6);
    \u0275\u0275elementStart(46, "div", 58);
    \u0275\u0275text(47, "Detalle y observaciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 59)(49, "mat-form-field", 69)(50, "mat-label");
    \u0275\u0275text(51, "Detalle Pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275element(52, "textarea", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "mat-form-field", 60)(54, "mat-label");
    \u0275\u0275text(55, "Observaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(56, "textarea", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "mat-form-field", 60)(58, "mat-label");
    \u0275\u0275text(59, "Observaci\xF3n Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275element(60, "textarea", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 58);
    \u0275\u0275text(62, "Comprobante de pago");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(63, PedidosComponent_ng_template_38_Conditional_63_Template, 4, 2, "div", 73);
    \u0275\u0275conditionalCreate(64, PedidosComponent_ng_template_38_Conditional_64_Template, 6, 1, "div", 74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 75)(66, "button", 76);
    \u0275\u0275text(67, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(68, PedidosComponent_ng_template_38_Conditional_68_Template, 2, 0, "button", 77);
    \u0275\u0275pipe(69, "async");
    \u0275\u0275conditionalCreate(70, PedidosComponent_ng_template_38_Conditional_70_Template, 1, 0, "mat-spinner", 78);
    \u0275\u0275pipe(71, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_3_0 = ctx_r4.formPedido.get("IdPedido")) == null ? null : tmp_3_0.value) !== "0" ? 3 : 4);
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r4.formPedido);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(19, 9, ctx_r4.pedidosFacade.responseTipoPedidos$));
    \u0275\u0275advance(7);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(26, 11, ctx_r4.pedidosFacade.responseMetodosPago$));
    \u0275\u0275advance(7);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(33, 13, ctx_r4.pedidosFacade.responseReparto$));
    \u0275\u0275advance(7);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(40, 15, ctx_r4.pedidosFacade.responseUsuario$));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r4.productos.enabled ? 43 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.productos.length === 0 ? 44 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.productos.length > 0 ? 45 : -1);
    \u0275\u0275advance(18);
    \u0275\u0275conditional(ctx_r4.formPedido.get("url").value == null ? 63 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.formPedido.get("url").value != null ? 64 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(69, 17, ctx_r4.pedidosFacade.responseCargando$) && ctx_r4.puedeGuardar ? 68 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(71, 19, ctx_r4.pedidosFacade.responseCargando$) ? 70 : -1);
  }
}
function PedidosComponent_ng_template_40_For_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r27 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", e_r27.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r27.EstadoProceso);
  }
}
function PedidosComponent_ng_template_40_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PedidosComponent_ng_template_40_For_13_Conditional_0_Template, 2, 2, "mat-option", 19);
  }
  if (rf & 2) {
    const e_r27 = ctx.$implicit;
    \u0275\u0275conditional(e_r27.id !== 6 ? 0 : -1);
  }
}
function PedidosComponent_ng_template_40_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function PedidosComponent_ng_template_40_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.actualizarEstadoPedido());
    });
    \u0275\u0275text(1, "Guardar");
    \u0275\u0275elementEnd();
  }
}
function PedidosComponent_ng_template_40_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 78);
  }
}
function PedidosComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "span", 54);
    \u0275\u0275text(3, " Actualizar Estado Pedido ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 55)(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "mat-dialog-content", 56)(8, "mat-form-field", 110)(9, "mat-label");
    \u0275\u0275text(10, "Estado Proceso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-select", 111);
    \u0275\u0275repeaterCreate(12, PedidosComponent_ng_template_40_For_13_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 75)(16, "button", 76);
    \u0275\u0275text(17, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, PedidosComponent_ng_template_40_Conditional_18_Template, 2, 0, "button", 77);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275conditionalCreate(20, PedidosComponent_ng_template_40_Conditional_20_Template, 1, 0, "mat-spinner", 78);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("formControl", ctx_r4.formEstado);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(14, 3, ctx_r4.pedidosFacade.responseEstadoProceso$));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(19, 5, ctx_r4.pedidosFacade.responseCargando$) ? 18 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(21, 7, ctx_r4.pedidosFacade.responseCargando$) ? 20 : -1);
  }
}
var PedidosComponent = class _PedidosComponent {
  constructor() {
    this.productosFacade = inject(ProductosFacadeService);
    this.almacenFacade = inject(AlmacenesFacadeService);
    this.pedidosFacade = inject(PedidosFacadeService);
    this.fb = inject(FormBuilder);
    this.dialog = inject(MatDialog);
    this.toast = inject(ToastrServiceLocal);
    this.buscar = new FormControl("");
    this.productos = new FormArray([]);
    this.productosPorLinea = [];
    this.pageSize = 10;
    this.pageIndex = 0;
    this.filtroEstado = 0;
    this.filtroFechaDesde = null;
    this.filtroFechaHasta = null;
    this.pagoRealizado = new FormControl(false);
    this.fileForm = new FormControl("", [Validators.required]);
    this.url = "";
    this.nombreArchivo = "";
    this.formEstado = new FormControl("", [Validators.required]);
    this.selectFile = null;
    this.informacionLocal = JSON.parse(localStorage.getItem("usuario_data") || "{}");
    this.pedidosFacade.MostrarEstadosProceso("");
    this.cargarPedidos();
  }
  ngOnInit() {
    this.buscar.valueChanges.pipe(debounceTime(400), distinctUntilChanged()).subscribe(() => {
      this.pageIndex = 0;
      this.cargarPedidos();
    });
  }
  cargarPedidos() {
    this.pedidosFacade.MostrarPedido({
      id: 0,
      busqueda: this.buscar.value && this.buscar.value.trim() !== "" ? this.buscar.value : "null",
      idEstado: this.filtroEstado || 0,
      fechaDesde: this.fechaStr(this.filtroFechaDesde),
      fechaHasta: this.fechaStr(this.filtroFechaHasta),
      pagina: this.pageIndex + 1,
      tamanoPagina: this.pageSize
    });
  }
  fechaStr(d) {
    if (!d) {
      return "null";
    }
    const f = new Date(d);
    const y = f.getFullYear();
    const m = String(f.getMonth() + 1).padStart(2, "0");
    const dia = String(f.getDate()).padStart(2, "0");
    return `${y}-${m}-${dia}`;
  }
  next(event) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.cargarPedidos();
  }
  aplicarFiltros() {
    this.pageIndex = 0;
    this.cargarPedidos();
  }
  openDialog(template, params) {
    this.pedidosFacade.MostrarTipoPedidos("0");
    this.pedidosFacade.MostrarMetodosPago("0");
    this.pedidosFacade.MostrarReparto("0");
    this.pedidosFacade.MostrarUsuario("0");
    this.almacenFacade.MostrarAlmacenes("0");
    this.isImageSaved = false;
    this.pagoRealizado.setValue(false);
    this.productos = new FormArray([]);
    this.productosPorLinea = [];
    this.formPedido = new FormGroup({
      IdPedido: new FormControl(params?.IdPedido || ""),
      IdTipoPedido: new FormControl(params?.IdTipoPedido || ""),
      IdMetodoPago: new FormControl(params?.IdMetodoPago || ""),
      IdReparto: new FormControl(params?.IdReparto || null),
      IdUsuario: new FormControl(params?.IdUsuario || ""),
      DetallePedido: new FormControl(params?.DetallePedido || "", [Validators.required]),
      Observacion: new FormControl(params?.Observacion || ""),
      ObservacionCliente: new FormControl(params?.observacionCliente || ""),
      DetalleProducto: new FormControl(""),
      usuario: new FormControl(""),
      idEstado: new FormControl(params?.IdEstado || 1),
      url: new FormControl(params?.Url || null)
    });
    if (params?.IdPedido && params.IdPedido !== "0") {
      this.formPedido.get("ObservacionCliente").disable();
      this.formPedido.get("ObservacionCliente").updateValueAndValidity();
      this.definirDetalle(params?.IdPedido);
    }
    this.dialog.open(template, {
      panelClass: "app-full-bleed-dialog",
      disableClose: true
    });
  }
  agregarProductoBodega() {
    this.productos.push(this.fb.group({
      idProducto: [null, Validators.required],
      productoNombre: [""],
      requiereLote: [false],
      idLote: [null],
      idAlmacen: [null, Validators.required],
      esConsigna: [false],
      cantidad: [null, [Validators.required, Validators.min(1)]],
      precioVenta: [null, [Validators.required, Validators.min(0)]]
    }));
    this.productosPorLinea.push([]);
  }
  agregarProductoConsigna() {
    this.productos.push(this.fb.group({
      idProducto: [null, Validators.required],
      productoNombre: [""],
      requiereLote: [false],
      idLote: [null],
      idAlmacen: [null, Validators.required],
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
  enviarPedido() {
    if (this.formPedido.invalid) {
      this.formPedido.markAllAsTouched();
      this.toast.mensajeWarning("", "Debe de ingresar los campos marcados como requeridos");
      return;
    }
    if (!this.validarProductos()) {
      return;
    }
    this.formPedido.get("DetalleProducto").setValue(this.construirDetalleProductos());
    this.formData = new FormData();
    if (this.formPedido.get("IdPedido").value === "0") {
      this.pedidosFacade.InsertarPedido(this.formPedido.value, (respuestaPedido) => {
        if (respuestaPedido.hasError === false) {
          this.procesarComprobante(respuestaPedido);
        }
      });
    } else {
      this.pedidosFacade.ActualizarPedido(this.formPedido.value, (respuestaPedido) => {
        if (respuestaPedido.hasError === false) {
          this.procesarComprobante(respuestaPedido);
        }
      });
    }
  }
  procesarComprobante(respuestaPedido) {
    if (this.pagoRealizado.value == true) {
      if (!this.fileForm.value) {
        this.toast.mensajeWarning("", "Es requerido cargar el voucher de pago");
        return;
      }
      this.formData.append("archivo", this.fileForm.value);
      this.pedidosFacade.cargarArchivo(this.formData, (respuestaArchivo) => {
        if (respuestaArchivo.hasError === false) {
          this.formAdjunto = new FormGroup({
            id: new FormControl(0),
            idPedido: new FormControl(respuestaPedido.data.Table0[0].IdPedido),
            nombreAdjunto: new FormControl(this.nombreArchivo || ""),
            url: new FormControl(respuestaArchivo.data.url),
            extension: new FormControl(this.nombreArchivo.substring(this.nombreArchivo.indexOf("."), this.nombreArchivo.length)),
            idEstado: new FormControl(null)
          });
          this.pedidosFacade.InsertarArchivoAdjunto(this.formAdjunto.value, (respuestAdjunto) => {
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
    this.cargarPedidos();
    this.dialog.closeAll();
  }
  Eliminar(params) {
    import_sweetalert23.default.fire({
      title: "Confirmaci\xF3n",
      html: ` <p> \xBFEsta seguro quiere inhabilitar el pedido ? </p>`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#003399",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.pedidosFacade.EliminarPedido(params.IdPedido, (respuesta) => {
          this.cargarPedidos();
        });
      }
    });
  }
  descargarImagen() {
    window.open(this.formPedido.value.url);
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
  definirDetalle(idPedido) {
    this.pedidosFacade.MostrarDetallePedido(idPedido, (detalle) => {
      this.productos.clear();
      this.productosPorLinea = [];
      detalle.forEach((d, i) => {
        this.productos.push(this.fb.group({
          idProducto: [d.id_producto, Validators.required],
          productoNombre: [`${d.sku} - ${d.producto}`],
          requiereLote: [d.requiere_lote === 1],
          idLote: [d.id_lote],
          idAlmacen: [d.id_almacen, Validators.required],
          esConsigna: [d.es_consigna === 1],
          cantidad: [d.cantidad, [Validators.required, Validators.min(1)]],
          precioVenta: [d.precio_venta, [Validators.required, Validators.min(0)]]
        }));
        this.productosPorLinea.push([]);
      });
      this.productos.disable();
    });
  }
  get puedeGuardar() {
    const estado = this.formPedido.get("idEstado")?.value;
    return ![6, 7, 8].includes(Number(estado));
  }
  puedeGuardarPedido(pedido) {
    const estado = pedido?.IdEstado;
    return ![6, 7, 8].includes(Number(estado));
  }
  dialogEstadoPedido(template, pedido) {
    this.pedido = pedido;
    this.formEstado.setValue("");
    this.dialog.open(template, {
      panelClass: "app-full-bleed-dialog",
      disableClose: true
    });
  }
  actualizarEstadoPedido() {
    if (this.formEstado.invalid) {
      this.formEstado.markAllAsTouched();
      this.toast.mensajeWarning("", "Debe de ingresar los campos marcados como requeridos");
      return;
    }
    let body = {
      idPedido: this.pedido.IdPedido,
      idEstado: this.formEstado.value,
      idUsuario: this.informacionLocal?.IdUsuario
    };
    this.pedidosFacade.ActualizarEstadoPedido(body, (result) => {
      if (result.hasError === false) {
        this.toast.mensajeSuccess("Se cancelo el pedido correctamente", "");
        this.dialog.closeAll();
        this.cargarPedidos();
      }
    });
  }
  static {
    this.\u0275fac = function PedidosComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PedidosComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PedidosComponent, selectors: [["app-pedidos"]], standalone: false, decls: 42, vars: 13, consts: [["modal", ""], ["modalEstado", ""], ["autoProd", "matAutocomplete"], ["fileInput", ""], [1, "navigation"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "activo"], [1, "content"], [1, "titleNav"], [1, "subtitulo"], [1, "action"], ["appearance", "outline", 1, "buscador"], ["matInput", "", "type", "text", "placeholder", "Buscar pedido\u2026", "autocomplete", "off", 3, "formControl"], ["matPrefix", ""], ["appearance", "outline", 1, "filtro-estado"], [3, "valueChange", "selectionChange", "value"], [3, "value"], ["mat-flat-button", "", 1, "button-principal", 3, "click"], [1, "contenedor-tabla"], [3, "data"], [1, "sin-datos"], [1, "matCardPersonalizada"], [1, "tabla-scroll"], ["role", "table", 1, "tablep"], [1, "theadp"], [1, "trp"], [1, "thp", "col-acciones"], [1, "thp", "col-numero"], [1, "thp"], [1, "thp", "col-estado"], ["role", "rowgroup", 1, "tbodyp"], ["role", "row", 1, "trp"], [3, "page", "length", "pageSize", "pageIndex", "pageSizeOptions"], ["data-title", "Acciones", 1, "tdp", "col-acciones"], [1, "acciones"], ["mat-mini-fab", "", "matTooltip", "Editar", 1, "buttonSecundary", 3, "click"], ["mat-mini-fab", "", "matTooltip", "Actualizar Estado", 1, "buttonView"], ["data-title", "C\xF3digo", 1, "tdp", "col-numero"], ["data-title", "Tipo Pedido", 1, "tdp", "td-secundario"], ["data-title", "Metodo de Pago", 1, "tdp", "td-secundario"], ["data-title", "Cantidad Productos", 1, "tdp", "col-numero"], ["data-title", "Detalle", 1, "tdp", "td-secundario"], ["data-title", "Observacion", 1, "tdp", "td-secundario"], ["data-title", "Nombre Reparto", 1, "tdp", "td-secundario"], ["data-title", "Usuario Ingreso", 1, "tdp", "td-secundario"], ["data-title", "Fecha Ingreso", 1, "tdp", "td-secundario"], ["data-title", "Estado", 1, "tdp", "col-estado"], [1, "pill", 3, "ngClass"], ["mat-mini-fab", "", "matTooltip", "Actualizar Estado", 1, "buttonView", 3, "click"], [1, "modal-augajo", "modal-xl"], [1, "modal-header"], [1, "modal-titulo"], ["mat-icon-button", "", "mat-dialog-close", "", "aria-label", "Cerrar", 1, "modal-cerrar"], [1, "mat-typography", "modal-body"], [3, "formGroup"], [1, "seccion-titulo"], [1, "form-grid"], ["appearance", "outline", 1, "campo-6"], ["formControlName", "IdTipoPedido", "required", ""], ["formControlName", "IdMetodoPago", "required", ""], ["appearance", "outline", 1, "campo-4"], ["formControlName", "IdReparto"], ["formControlName", "IdUsuario"], [1, "seccion-titulo", "seccion-productos"], [1, "botones-add"], [1, "sin-productos"], ["appearance", "outline", 1, "campo-12"], ["matInput", "", "placeholder", "Describe el pedido", "formControlName", "DetallePedido", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "2", "cdkAutosizeMaxRows", "5", "required", ""], ["matInput", "", "placeholder", "Observaci\xF3n interna", "formControlName", "Observacion", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "2", "cdkAutosizeMaxRows", "5"], ["matInput", "", "placeholder", "Observaci\xF3n del cliente", "formControlName", "ObservacionCliente", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "2", "cdkAutosizeMaxRows", "5"], [1, "pago-zona"], [1, "pago-existente"], [1, "acciones-modal"], ["mat-stroked-button", "", "mat-dialog-close", ""], ["mat-flat-button", "", 1, "button-principal"], ["diameter", "32"], ["type", "button", "mat-stroked-button", "", 1, "btn-add", "bodega", 3, "click"], ["type", "button", "mat-stroked-button", "", 1, "btn-add", "consigna", 3, "click"], [1, "tabla-prod"], [1, "col-origen"], [1, "col-alm"], [1, "col-prod"], [1, "col-lote"], [1, "col-num"], [1, "col-sub"], [1, "col-quitar"], [1, "total-productos"], [1, "total-prod-lbl"], [1, "total-prod-val"], [1, "origen-pill"], ["appearance", "outline", 1, "campo-prod"], ["formControlName", "idAlmacen", "required", ""], ["type", "text", "matInput", "", "placeholder", "Buscar producto", "required", "", 3, "input", "matAutocomplete", "value"], [3, "optionSelected"], [1, "lote-txt"], [1, "lote-na"], ["matInput", "", "type", "number", "min", "1", "formControlName", "cantidad", "placeholder", "0"], ["matInput", "", "type", "number", "min", "0", "step", "0.01", "formControlName", "precioVenta", "placeholder", "0.00"], [1, "subtotal-prod"], ["type", "button", "mat-mini-fab", "", 1, "btn-quitar-prod"], ["type", "button", "mat-mini-fab", "", 1, "btn-quitar-prod", 3, "click"], ["color", "warn", 3, "formControl"], [1, "uploadfilecontainer", 3, "click"], ["type", "file", "hidden", "", 3, "change"], [1, "preview-imagen"], ["alt", "Comprobante", 3, "src"], ["alt", "Comprobante", 1, "preview-imagen-grande", 3, "src"], ["appearance", "outline", 1, "campo-full"], [3, "formControl"]], template: function PedidosComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 4)(1, "nav", 5)(2, "ol", 6)(3, "li", 7)(4, "a", 8);
        \u0275\u0275text(5, "Inicio");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "li", 9);
        \u0275\u0275text(7, "Pedidos");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 10)(9, "div", 11)(10, "h2");
        \u0275\u0275text(11, "Pedidos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 12);
        \u0275\u0275text(13, "Gesti\xF3n del historico de pedidos");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 13)(15, "mat-form-field", 14)(16, "mat-label");
        \u0275\u0275text(17, "Buscar");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 15);
        \u0275\u0275elementStart(19, "mat-icon", 16);
        \u0275\u0275text(20, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "mat-form-field", 17)(22, "mat-label");
        \u0275\u0275text(23, "Estado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "mat-select", 18);
        \u0275\u0275twoWayListener("valueChange", function PedidosComponent_Template_mat_select_valueChange_24_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.filtroEstado, $event) || (ctx.filtroEstado = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("selectionChange", function PedidosComponent_Template_mat_select_selectionChange_24_listener() {
          return ctx.aplicarFiltros();
        });
        \u0275\u0275elementStart(25, "mat-option", 19);
        \u0275\u0275text(26, "Todos");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(27, PedidosComponent_For_28_Template, 2, 2, "mat-option", 19, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275pipe(29, "async");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "button", 20);
        \u0275\u0275listener("click", function PedidosComponent_Template_button_click_30_listener() {
          \u0275\u0275restoreView(_r1);
          const modal_r3 = \u0275\u0275reference(39);
          return \u0275\u0275resetView(ctx.openDialog(modal_r3));
        });
        \u0275\u0275elementStart(31, "mat-icon");
        \u0275\u0275text(32, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, " Nuevo ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(34, PedidosComponent_Conditional_34_Template, 2, 1, "div", 21);
        \u0275\u0275pipe(35, "async");
        \u0275\u0275conditionalCreate(36, PedidosComponent_Conditional_36_Template, 5, 6, "div", 21);
        \u0275\u0275pipe(37, "async");
        \u0275\u0275template(38, PedidosComponent_ng_template_38_Template, 72, 21, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(40, PedidosComponent_ng_template_40_Template, 22, 9, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c03));
        \u0275\u0275advance(14);
        \u0275\u0275property("formControl", ctx.buscar);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("value", ctx.filtroEstado);
        \u0275\u0275advance();
        \u0275\u0275property("value", 0);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(\u0275\u0275pipeBind1(29, 6, ctx.pedidosFacade.responseEstadoProceso$));
        \u0275\u0275advance(7);
        \u0275\u0275conditional(\u0275\u0275pipeBind1(35, 8, ctx.pedidosFacade.responseCargando$) ? 34 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!\u0275\u0275pipeBind1(37, 10, ctx.pedidosFacade.responseCargando$) ? 36 : -1);
      }
    }, dependencies: [NgClass, RouterLink, MatFormField, MatLabel, MatPrefix, MatInput, CdkTextareaAutosize, MatIcon, MatButton, MatMiniFabButton, MatIconButton, MatDialogClose, MatDialogContent, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, FormControlDirective, FormGroupDirective, FormControlName, LoadingComponent, MatCard, MatCardContent, MatPaginator, MatSelect, MatOption, MatSlideToggle, MatTooltip, MatAutocomplete, MatAutocompleteTrigger, AsyncPipe, CurrencyPipe, DatePipe, TruncatePipePipe], styles: ['@charset "UTF-8";\n\n\n.modal-augajo.modal-xl[_ngcontent-%COMP%] {\n  width: 960px;\n  max-width: 96vw;\n}\n.seccion-productos[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.botones-add[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-add[_ngcontent-%COMP%] {\n  height: 34px !important;\n  font-size: 12px !important;\n  border-radius: var(--radius-btn) !important;\n}\n.btn-add[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  height: 17px;\n  width: 17px;\n  margin-right: 4px;\n}\n.btn-add.bodega[_ngcontent-%COMP%] {\n  border-color: var(--color-primary) !important;\n  color: var(--color-primary) !important;\n}\n.btn-add.consigna[_ngcontent-%COMP%] {\n  border-color: var(--color-accent) !important;\n  color: var(--color-accent) !important;\n}\n.sin-productos[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  justify-content: center;\n  padding: 22px;\n  margin: 8px 0 4px;\n  color: var(--color-text-secondary);\n  background: #FAF9F7;\n  border: 1px dashed var(--color-border);\n  border-radius: var(--radius-card);\n  font-size: 13.5px;\n}\n.sin-productos[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n}\n.tabla-prod[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  margin-top: 4px;\n}\n.tabla-prod[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--color-text-secondary);\n  text-align: left;\n  padding: 8px 8px;\n  white-space: nowrap;\n  border-bottom: 1.5px solid var(--color-border);\n}\n.tabla-prod[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  vertical-align: middle;\n}\n.tabla-prod[_ngcontent-%COMP%]   .col-origen[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.tabla-prod[_ngcontent-%COMP%]   .col-alm[_ngcontent-%COMP%] {\n  min-width: 140px;\n}\n.tabla-prod[_ngcontent-%COMP%]   .col-prod[_ngcontent-%COMP%] {\n  min-width: 200px;\n  width: 28%;\n}\n.tabla-prod[_ngcontent-%COMP%]   .col-lote[_ngcontent-%COMP%] {\n  width: 70px;\n  text-align: center;\n}\n.tabla-prod[_ngcontent-%COMP%]   .col-num[_ngcontent-%COMP%] {\n  width: 85px;\n}\n.tabla-prod[_ngcontent-%COMP%]   .col-sub[_ngcontent-%COMP%] {\n  width: 110px;\n  text-align: right;\n}\n.tabla-prod[_ngcontent-%COMP%]   .col-quitar[_ngcontent-%COMP%] {\n  width: 46px;\n  text-align: center;\n}\n.tabla-prod[_ngcontent-%COMP%]   th.col-num[_ngcontent-%COMP%], \n.tabla-prod[_ngcontent-%COMP%]   th.col-sub[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.campo-prod[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.campo-prod[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.campo-prod[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper {\n  margin: 0;\n}\n.origen-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 12px;\n  white-space: nowrap;\n}\n.origen-bodega[_ngcontent-%COMP%] {\n  background: rgba(26, 26, 26, 0.08);\n  color: var(--color-primary);\n}\n.origen-consigna[_ngcontent-%COMP%] {\n  background: rgba(224, 26, 26, 0.09);\n  color: var(--color-accent);\n}\n.lote-txt[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  font-size: 12px;\n  color: var(--color-text-secondary);\n  font-variant-numeric: tabular-nums;\n}\n.lote-na[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  color: var(--color-text-muted);\n}\n.subtotal-prod[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n.btn-quitar-prod[_ngcontent-%COMP%] {\n  background: transparent !important;\n  color: var(--color-accent) !important;\n  box-shadow: none !important;\n  width: 32px !important;\n  height: 32px !important;\n}\n.btn-quitar-prod[_ngcontent-%COMP%]:hover {\n  background: rgba(224, 26, 26, 0.08) !important;\n}\n.total-productos[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: flex-end;\n  gap: 14px;\n  padding: 12px 8px 4px;\n  margin-top: 6px;\n  border-top: 1.5px solid var(--color-border);\n}\n.total-productos[_ngcontent-%COMP%]   .total-prod-lbl[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--color-text-secondary);\n}\n.total-productos[_ngcontent-%COMP%]   .total-prod-val[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--color-accent);\n  font-variant-numeric: tabular-nums;\n}\n.pago-zona[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 4px 0;\n}\n.uploadfilecontainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px;\n  border: 1.5px dashed var(--color-border);\n  border-radius: var(--radius-card);\n  cursor: pointer;\n  color: var(--color-text-secondary);\n  background: #FAF9F7;\n  transition: border-color 0.15s, background 0.15s;\n}\n.uploadfilecontainer[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-accent);\n  background: rgba(224, 26, 26, 0.03);\n}\n.uploadfilecontainer[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n}\n.preview-imagen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 220px;\n  border-radius: 10px;\n  border: 1px solid var(--color-border);\n}\n.pago-existente[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  align-items: flex-start;\n}\n.preview-imagen-grande[_ngcontent-%COMP%] {\n  max-width: 320px;\n  border-radius: 10px;\n  border: 1px solid var(--color-border);\n}\n.pill-apertura[_ngcontent-%COMP%] {\n  background: rgba(138, 138, 138, 0.14);\n  color: #6E6E6E;\n}\n.pill-apertura[_ngcontent-%COMP%]::before {\n  background: #8A8A8A;\n}\n.pill-preparacion[_ngcontent-%COMP%] {\n  background: rgba(217, 154, 28, 0.16);\n  color: #B8860B;\n}\n.pill-preparacion[_ngcontent-%COMP%]::before {\n  background: #D99A1C;\n}\n.pill-empacando[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.12);\n  color: #2563EB;\n}\n.pill-empacando[_ngcontent-%COMP%]::before {\n  background: #2563EB;\n}\n.pill-despachado[_ngcontent-%COMP%] {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n}\n.pill-despachado[_ngcontent-%COMP%]::before {\n  background: #7C3AED;\n}\n.pill-entregado[_ngcontent-%COMP%] {\n  background: rgba(46, 125, 91, 0.12);\n  color: var(--color-success);\n}\n.pill-entregado[_ngcontent-%COMP%]::before {\n  background: var(--color-success);\n}\n.pill-rechazado[_ngcontent-%COMP%] {\n  background: rgba(224, 26, 26, 0.09);\n  color: var(--color-accent);\n}\n.pill-rechazado[_ngcontent-%COMP%]::before {\n  background: var(--color-accent);\n}\n.pill-cancelado[_ngcontent-%COMP%] {\n  background: rgba(224, 168, 46, 0.16);\n  color: #B8860B;\n}\n.pill-cancelado[_ngcontent-%COMP%]::before {\n  background: var(--color-warning);\n}\n@media (max-width: 1000px) {\n  .modal-augajo.modal-xl[_ngcontent-%COMP%] {\n    width: 96vw;\n  }\n  .tabla-prod[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n.navigation[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .filtro-estado[_ngcontent-%COMP%] {\n  width: 180px;\n}\n.navigation[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .filtro-estado[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n@media (max-width: 1200px) {\n  .navigation[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .navigation[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .buscador[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 200px;\n  }\n  .navigation[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .filtro-estado[_ngcontent-%COMP%] {\n    width: 160px;\n  }\n}\n/*# sourceMappingURL=pedidos.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PedidosComponent, [{
    type: Component,
    args: [{ selector: "app-pedidos", standalone: false, template: `<div class="navigation">\r
  <nav aria-label="breadcrumb">\r
    <ol class="breadcrumb">\r
      <li class="breadcrumb-item"><a [routerLink]="['/dashboard']">Inicio</a></li>\r
      <li class="breadcrumb-item activo">Pedidos</li>\r
    </ol>\r
  </nav>\r
\r
  <div class="content">\r
    <div class="titleNav">\r
      <h2>Pedidos</h2>\r
      <div class="subtitulo">Gesti\xF3n del historico de pedidos</div>\r
    </div>\r
\r
    <div class="action">\r
      <mat-form-field appearance="outline" class="buscador">\r
        <mat-label>Buscar</mat-label>\r
        <input matInput type="text" [formControl]="buscar" placeholder="Buscar pedido\u2026" autocomplete="off">\r
        <mat-icon matPrefix>search</mat-icon>\r
      </mat-form-field>\r
\r
      <mat-form-field appearance="outline" class="filtro-estado">\r
        <mat-label>Estado</mat-label>\r
        <mat-select [(value)]="filtroEstado" (selectionChange)="aplicarFiltros()">\r
          <mat-option [value]="0">Todos</mat-option>\r
          @for (e of (pedidosFacade.responseEstadoProceso$ | async); track e) {\r
          <mat-option [value]="e.id">{{ e.EstadoProceso }}</mat-option>\r
          }\r
        </mat-select>\r
      </mat-form-field>\r
\r
      <button class="button-principal" mat-flat-button (click)="openDialog(modal)">\r
        <mat-icon>add</mat-icon>\r
        Nuevo\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
@if ((pedidosFacade.responseCargando$ | async)) {\r
<div class="contenedor-tabla">\r
  <app-loading [data]="4"></app-loading>\r
</div>\r
}\r
\r
@if (!(pedidosFacade.responseCargando$ | async)) {\r
<div class="contenedor-tabla">\r
\r
  @if ((pedidosFacade.responsePedidos$ | async).length === 0) {\r
  <div class="sin-datos">\r
    <mat-icon>credit_card_off</mat-icon>\r
    <p>No hay pedidos para listar</p>\r
    <button class="button-principal" mat-flat-button (click)="openDialog(modal)">\r
      <mat-icon>add</mat-icon>\r
      Agregar el primero\r
    </button>\r
  </div>\r
  }\r
\r
  @if ((pedidosFacade.responsePedidos$ | async).length > 0) {\r
  <mat-card class="matCardPersonalizada">\r
    <mat-card-content>\r
      <div class="tabla-scroll">\r
        <table class="tablep" role="table">\r
          <thead class="theadp">\r
            <tr class="trp">\r
              <th class="thp col-acciones">Acciones</th>\r
              <th class="thp col-numero">C\xF3digo</th>\r
              <th class="thp">Tipo Pedido</th>\r
              <th class="thp">Metodo de Pago</th>\r
              <th class="thp">Cantidad Productos</th>\r
              <th class="thp">Detalle</th>\r
              <th class="thp">Observacion</th>\r
              <th class="thp">Nombre Reparto</th>\r
              <th class="thp">Usuario Ingreso</th>\r
              <th class="thp">Fecha Ingreso</th>\r
              <th class="thp col-estado">Estado</th>\r
            </tr>\r
          </thead>\r
          <tbody role="rowgroup" class="tbodyp">\r
            @for (pedido of (pedidosFacade.responsePedidos$ | async); track pedido) {\r
            <tr class="trp" role="row">\r
              <td data-title="Acciones" class="tdp col-acciones">\r
                <div class="acciones">\r
                  <button class="buttonSecundary" mat-mini-fab (click)="openDialog(modal, pedido)" matTooltip="Editar">\r
                    <mat-icon>edit</mat-icon>\r
                  </button>\r
\r
                  @if(puedeGuardarPedido(pedido)){\r
                    <button class="buttonView" mat-mini-fab (click)="dialogEstadoPedido(modalEstado, pedido)" matTooltip="Actualizar Estado">\r
                      <mat-icon>change_circle</mat-icon>\r
                    </button>\r
                  }\r
                 \r
                </div>\r
              </td>\r
              <td data-title="C\xF3digo" class="tdp col-numero">{{ pedido.IdPedido }}</td>\r
              <td data-title="Tipo Pedido" class="tdp td-secundario">{{ pedido.TipoPedido }}</td>\r
              <td data-title="Metodo de Pago" class="tdp td-secundario">{{ pedido.MetodoPago || '\u2014' }}</td>\r
              <td data-title="Cantidad Productos" class="tdp col-numero">{{ pedido.cantidad_productos }}</td>\r
\r
              <td data-title="Detalle" class="tdp td-secundario">{{pedido.DetallePedido | truncatePipe:100}}</td>\r
              <td data-title="Observacion" class="tdp td-secundario">{{pedido.Observacion}}</td>\r
              <td data-title="Nombre Reparto" class="tdp td-secundario">{{pedido.NombreReparto}} </td>\r
              <td data-title="Usuario Ingreso" class="tdp td-secundario">{{pedido.PrimerNombre}}\r
                {{pedido.PrimerApellido}}</td>\r
              <td data-title="Fecha Ingreso" class="tdp td-secundario">{{pedido.FechaInsercion | date:'yyyy-MM-dd'}}\r
              </td>\r
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
      <mat-paginator [length]="pedidosFacade.responseTotalPedidos$ | async"\r
                     [pageSize]="pageSize"\r
                     [pageIndex]="pageIndex"\r
                     [pageSizeOptions]="[10, 25, 50, 100]"\r
                     (page)="next($event)">\r
      </mat-paginator>\r
    </mat-card-content>\r
  </mat-card>\r
  }\r
\r
</div>\r
}\r
\r
<ng-template #modal>\r
  <div class="modal-augajo modal-xl">\r
    <div class="modal-header">\r
      <span class="modal-titulo">\r
        @if (formPedido.get('IdPedido')?.value !== '0') { Actualizar Pedido } @else { Nuevo Pedido }\r
      </span>\r
      <button mat-icon-button mat-dialog-close class="modal-cerrar" aria-label="Cerrar">\r
        <mat-icon>close</mat-icon>\r
      </button>\r
    </div>\r
\r
    <mat-dialog-content class="mat-typography modal-body">\r
      <form [formGroup]="formPedido">\r
\r
        <!-- Configuraci\xF3n -->\r
        <div class="seccion-titulo">Configuraci\xF3n</div>\r
        <div class="form-grid">\r
          <mat-form-field appearance="outline" class="campo-6">\r
            <mat-label>Tipo Pedido</mat-label>\r
            <mat-select formControlName="IdTipoPedido" required>\r
              @for (t of (pedidosFacade.responseTipoPedidos$ | async); track t) {\r
                <mat-option [value]="t.Id">{{ t.TipoPedido }}</mat-option>\r
              }\r
            </mat-select>\r
          </mat-form-field>\r
\r
          <mat-form-field appearance="outline" class="campo-6">\r
            <mat-label>M\xE9todo Pago</mat-label>\r
            <mat-select formControlName="IdMetodoPago" required>\r
              @for (m of (pedidosFacade.responseMetodosPago$ | async); track m) {\r
                <mat-option [value]="m.Id">{{ m.MetodoPago }}</mat-option>\r
              }\r
            </mat-select>\r
          </mat-form-field>\r
\r
          <mat-form-field appearance="outline" class="campo-4">\r
            <mat-label>Reparto</mat-label>\r
            <mat-select formControlName="IdReparto">\r
              @for (r of (pedidosFacade.responseReparto$ | async); track r) {\r
                <mat-option [value]="r.Id">{{ r.NombreReparto }}</mat-option>\r
              }\r
            </mat-select>\r
          </mat-form-field>\r
\r
          <mat-form-field appearance="outline" class="campo-4">\r
            <mat-label>Usuario</mat-label>\r
            <mat-select formControlName="IdUsuario">\r
              @for (u of (pedidosFacade.responseUsuario$ | async); track u) {\r
                <mat-option [value]="u.Id">{{ u.Usuario }}</mat-option>\r
              }\r
            </mat-select>\r
          </mat-form-field>\r
\r
  \r
        </div>\r
\r
        <!-- Productos -->\r
        <div class="seccion-titulo seccion-productos">\r
          Productos\r
          @if(productos.enabled){\r
            <div class="botones-add" >\r
              <button type="button" class="btn-add bodega" mat-stroked-button (click)="agregarProductoBodega()">\r
                <mat-icon>warehouse</mat-icon> De bodega\r
              </button>\r
              <button type="button" class="btn-add consigna" mat-stroked-button (click)="agregarProductoConsigna()">\r
                <mat-icon>local_shipping</mat-icon> De consigna\r
              </button>\r
            </div>\r
          }\r
          \r
        </div>\r
\r
        @if (productos.length === 0) {\r
        <div class="sin-productos">\r
          <mat-icon>shopping_cart</mat-icon>\r
          <span>Agrega productos de bodega o de consigna</span>\r
        </div>\r
        }\r
\r
        @if (productos.length > 0) {\r
        <div class="tabla-scroll">\r
          <table class="tabla-prod">\r
            <thead>\r
              <tr>\r
                <th class="col-origen">Origen</th>\r
                <th class="col-alm">Almac\xE9n</th>\r
                <th class="col-prod">Producto</th>\r
                <th class="col-lote">Lote</th>\r
                <th class="col-num">Cant.</th>\r
                <th class="col-num">Precio</th>\r
                <th class="col-sub">Subtotal</th>\r
                <th class="col-quitar"></th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              @for (linea of productos.controls; track linea; let i = $index) {\r
              <tr [formGroup]="linea">\r
                <td class="col-origen">\r
                  <span class="origen-pill"\r
                    [class.origen-bodega]="!linea.get('esConsigna')?.value"\r
                    [class.origen-consigna]="linea.get('esConsigna')?.value">\r
                    {{ linea.get('esConsigna')?.value ? 'Consigna' : 'Bodega' }}\r
                  </span>\r
                </td>\r
\r
                <td class="col-alm">\r
                  <mat-form-field appearance="outline" class="campo-prod">\r
                    <mat-select formControlName="idAlmacen" required>\r
                      @for (a of (almacenFacade.responseAlmacenes$ | async); track a) {\r
                        @if (linea.get('esConsigna')?.value && a?.tipo === 'CONSIGNACION') {\r
                        <mat-option [value]="a?.id">{{ a?.nombre }}</mat-option>\r
                        }\r
                        @if (!linea.get('esConsigna')?.value && a?.tipo !== 'CONSIGNACION') {\r
                        <mat-option [value]="a?.id">{{ a?.nombre }}</mat-option>\r
                        }\r
                      }\r
                    </mat-select>\r
                  </mat-form-field>\r
                </td>\r
\r
                <td class="col-prod">\r
                  <mat-form-field appearance="outline" class="campo-prod">\r
                    <input type="text" matInput placeholder="Buscar producto"\r
                      [matAutocomplete]="autoProd"\r
                      [value]="linea.get('productoNombre')?.value"\r
                      (input)="buscarProducto($event, i)" required>\r
                    <mat-autocomplete #autoProd="matAutocomplete"\r
                      (optionSelected)="selectProducto($event.option.value, i)">\r
                      @for (p of productosPorLinea[i]; track p.id) {\r
                      <mat-option [value]="p">{{ p?.sku }} - {{ p?.nombre }} (disp: {{ p?.stock_disponible }})</mat-option>\r
                      }\r
                    </mat-autocomplete>\r
                  </mat-form-field>\r
                </td>\r
\r
                <td class="col-lote">\r
                  @if (linea.get('requiereLote')?.value) {\r
                  <span class="lote-txt">{{ linea.get('idLote')?.value ? '#' + linea.get('idLote')?.value : 'FEFO' }}</span>\r
                  } @else {\r
                  <span class="lote-na">\u2014</span>\r
                  }\r
                </td>\r
\r
                <td class="col-num">\r
                  <mat-form-field appearance="outline" class="campo-prod">\r
                    <input matInput type="number" min="1" formControlName="cantidad" placeholder="0">\r
                  </mat-form-field>\r
                </td>\r
\r
                <td class="col-num">\r
                  <mat-form-field appearance="outline" class="campo-prod">\r
                    <input matInput type="number" min="0" step="0.01" formControlName="precioVenta" placeholder="0.00">\r
                  </mat-form-field>\r
                </td>\r
\r
                <td class="col-sub">\r
                  <span class="subtotal-prod">{{ subtotalProducto(i) | currency:'HNL':'L. ':'1.2-2' }}</span>\r
                </td>\r
\r
                <td class="col-quitar">\r
                  @if(productos.enabled){\r
                    <button type="button" class="btn-quitar-prod" mat-mini-fab (click)="eliminarProducto(i)">\r
                      <mat-icon>delete</mat-icon>\r
                    </button>\r
                  }\r
                  \r
                </td>\r
              </tr>\r
              }\r
            </tbody>\r
          </table>\r
        </div>\r
\r
        <div class="total-productos">\r
          <span class="total-prod-lbl">Total</span>\r
          <span class="total-prod-val">{{ totalPedido() | currency:'HNL':'L. ':'1.2-2' }}</span>\r
        </div>\r
        }\r
\r
        <!-- Detalle y observaciones -->\r
        <div class="seccion-titulo">Detalle y observaciones</div>\r
        <div class="form-grid">\r
          <mat-form-field appearance="outline" class="campo-12">\r
            <mat-label>Detalle Pedido</mat-label>\r
            <textarea matInput placeholder="Describe el pedido" formControlName="DetallePedido"\r
                      cdkTextareaAutosize cdkAutosizeMinRows="2" cdkAutosizeMaxRows="5" required></textarea>\r
          </mat-form-field>\r
\r
          <mat-form-field appearance="outline" class="campo-6">\r
            <mat-label>Observaci\xF3n</mat-label>\r
            <textarea matInput placeholder="Observaci\xF3n interna" formControlName="Observacion"\r
                      cdkTextareaAutosize cdkAutosizeMinRows="2" cdkAutosizeMaxRows="5"></textarea>\r
          </mat-form-field>\r
\r
          <mat-form-field appearance="outline" class="campo-6">\r
            <mat-label>Observaci\xF3n Cliente</mat-label>\r
            <textarea matInput placeholder="Observaci\xF3n del cliente" formControlName="ObservacionCliente"\r
                      cdkTextareaAutosize cdkAutosizeMinRows="2" cdkAutosizeMaxRows="5"></textarea>\r
          </mat-form-field>\r
        </div>\r
\r
        <!-- Comprobante -->\r
        <div class="seccion-titulo">Comprobante de pago</div>\r
\r
        @if (formPedido.get('url').value == null) {\r
          <div class="pago-zona">\r
            <mat-slide-toggle [formControl]="pagoRealizado" color="warn">\xBFPago realizado?</mat-slide-toggle>\r
\r
            @if (pagoRealizado.value) {\r
              <div class="uploadfilecontainer" (click)="fileInput.click()">\r
                <mat-icon>cloud_upload</mat-icon>\r
                <span>{{ nombreArchivo || 'Haz clic para seleccionar el comprobante' }}</span>\r
                <input type="file" #fileInput hidden (change)="onFileSelect($event)">\r
              </div>\r
\r
              @if (isImageSaved) {\r
                <div class="preview-imagen">\r
                  <img [src]="cardImageBase64" alt="Comprobante">\r
                </div>\r
              }\r
            }\r
          </div>\r
        }\r
\r
        @if (formPedido.get('url').value != null) {\r
          <div class="pago-existente">\r
            <img [src]="formPedido.get('url').value" class="preview-imagen-grande" alt="Comprobante">\r
            <button mat-flat-button class="button-principal" (click)="descargarImagen()">\r
              <mat-icon>file_download</mat-icon> Descargar comprobante\r
            </button>\r
          </div>\r
        }\r
\r
      </form>\r
    </mat-dialog-content>\r
\r
    <div class="acciones-modal">\r
      <button mat-stroked-button mat-dialog-close>Cancelar</button>\r
      @if (!(pedidosFacade.responseCargando$ | async) && puedeGuardar) {\r
        <button class="button-principal" mat-flat-button (click)="enviarPedido()">Guardar</button>\r
      }\r
      @if ((pedidosFacade.responseCargando$ | async)) {\r
        <mat-spinner diameter="32"></mat-spinner>\r
      }\r
    </div>\r
  </div>\r
</ng-template>\r
\r
<ng-template #modalEstado>\r
  <div class="modal-augajo modal-xl">\r
    <div class="modal-header">\r
      <span class="modal-titulo">\r
        Actualizar Estado Pedido\r
      </span>\r
      <button mat-icon-button mat-dialog-close class="modal-cerrar" aria-label="Cerrar">\r
        <mat-icon>close</mat-icon>\r
      </button>\r
    </div>\r
\r
    <mat-dialog-content class="mat-typography modal-body">\r
      <mat-form-field appearance="outline" class="campo-full">\r
        <mat-label>Estado Proceso</mat-label>\r
        <mat-select [formControl]="formEstado">\r
          @for (e of (pedidosFacade.responseEstadoProceso$ | async); track e) {\r
            @if(e.id !== 6){\r
              <mat-option [value]="e.id">{{ e.EstadoProceso }}</mat-option>\r
            }\r
          }\r
        </mat-select>\r
      </mat-form-field>\r
    </mat-dialog-content>\r
\r
    <div class="acciones-modal">\r
      <button mat-stroked-button mat-dialog-close>Cancelar</button>\r
      @if (!(pedidosFacade.responseCargando$ | async)) {\r
        <button class="button-principal" mat-flat-button (click)="actualizarEstadoPedido()">Guardar</button>\r
      }\r
      @if ((pedidosFacade.responseCargando$ | async)) {\r
        <mat-spinner diameter="32"></mat-spinner>\r
      }\r
    </div>\r
  </div>\r
</ng-template>`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/administracion/pedidos/pedidos.component.scss */\n.modal-augajo.modal-xl {\n  width: 960px;\n  max-width: 96vw;\n}\n.seccion-productos {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.botones-add {\n  display: flex;\n  gap: 8px;\n}\n.btn-add {\n  height: 34px !important;\n  font-size: 12px !important;\n  border-radius: var(--radius-btn) !important;\n}\n.btn-add mat-icon {\n  font-size: 17px;\n  height: 17px;\n  width: 17px;\n  margin-right: 4px;\n}\n.btn-add.bodega {\n  border-color: var(--color-primary) !important;\n  color: var(--color-primary) !important;\n}\n.btn-add.consigna {\n  border-color: var(--color-accent) !important;\n  color: var(--color-accent) !important;\n}\n.sin-productos {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  justify-content: center;\n  padding: 22px;\n  margin: 8px 0 4px;\n  color: var(--color-text-secondary);\n  background: #FAF9F7;\n  border: 1px dashed var(--color-border);\n  border-radius: var(--radius-card);\n  font-size: 13.5px;\n}\n.sin-productos mat-icon {\n  color: var(--color-text-muted);\n}\n.tabla-prod {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  margin-top: 4px;\n}\n.tabla-prod thead th {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--color-text-secondary);\n  text-align: left;\n  padding: 8px 8px;\n  white-space: nowrap;\n  border-bottom: 1.5px solid var(--color-border);\n}\n.tabla-prod tbody td {\n  padding: 4px 8px;\n  vertical-align: middle;\n}\n.tabla-prod .col-origen {\n  width: 90px;\n}\n.tabla-prod .col-alm {\n  min-width: 140px;\n}\n.tabla-prod .col-prod {\n  min-width: 200px;\n  width: 28%;\n}\n.tabla-prod .col-lote {\n  width: 70px;\n  text-align: center;\n}\n.tabla-prod .col-num {\n  width: 85px;\n}\n.tabla-prod .col-sub {\n  width: 110px;\n  text-align: right;\n}\n.tabla-prod .col-quitar {\n  width: 46px;\n  text-align: center;\n}\n.tabla-prod th.col-num,\n.tabla-prod th.col-sub {\n  text-align: right;\n}\n.campo-prod {\n  width: 100%;\n}\n.campo-prod ::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n.campo-prod ::ng-deep .mat-mdc-text-field-wrapper {\n  margin: 0;\n}\n.origen-pill {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 12px;\n  white-space: nowrap;\n}\n.origen-bodega {\n  background: rgba(26, 26, 26, 0.08);\n  color: var(--color-primary);\n}\n.origen-consigna {\n  background: rgba(224, 26, 26, 0.09);\n  color: var(--color-accent);\n}\n.lote-txt {\n  display: block;\n  text-align: center;\n  font-size: 12px;\n  color: var(--color-text-secondary);\n  font-variant-numeric: tabular-nums;\n}\n.lote-na {\n  display: block;\n  text-align: center;\n  color: var(--color-text-muted);\n}\n.subtotal-prod {\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n.btn-quitar-prod {\n  background: transparent !important;\n  color: var(--color-accent) !important;\n  box-shadow: none !important;\n  width: 32px !important;\n  height: 32px !important;\n}\n.btn-quitar-prod:hover {\n  background: rgba(224, 26, 26, 0.08) !important;\n}\n.total-productos {\n  display: flex;\n  align-items: baseline;\n  justify-content: flex-end;\n  gap: 14px;\n  padding: 12px 8px 4px;\n  margin-top: 6px;\n  border-top: 1.5px solid var(--color-border);\n}\n.total-productos .total-prod-lbl {\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--color-text-secondary);\n}\n.total-productos .total-prod-val {\n  font-family: var(--font-serif);\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--color-accent);\n  font-variant-numeric: tabular-nums;\n}\n.pago-zona {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 4px 0;\n}\n.uploadfilecontainer {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px;\n  border: 1.5px dashed var(--color-border);\n  border-radius: var(--radius-card);\n  cursor: pointer;\n  color: var(--color-text-secondary);\n  background: #FAF9F7;\n  transition: border-color 0.15s, background 0.15s;\n}\n.uploadfilecontainer:hover {\n  border-color: var(--color-accent);\n  background: rgba(224, 26, 26, 0.03);\n}\n.uploadfilecontainer mat-icon {\n  color: var(--color-text-muted);\n}\n.preview-imagen img {\n  max-width: 220px;\n  border-radius: 10px;\n  border: 1px solid var(--color-border);\n}\n.pago-existente {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  align-items: flex-start;\n}\n.preview-imagen-grande {\n  max-width: 320px;\n  border-radius: 10px;\n  border: 1px solid var(--color-border);\n}\n.pill-apertura {\n  background: rgba(138, 138, 138, 0.14);\n  color: #6E6E6E;\n}\n.pill-apertura::before {\n  background: #8A8A8A;\n}\n.pill-preparacion {\n  background: rgba(217, 154, 28, 0.16);\n  color: #B8860B;\n}\n.pill-preparacion::before {\n  background: #D99A1C;\n}\n.pill-empacando {\n  background: rgba(37, 99, 235, 0.12);\n  color: #2563EB;\n}\n.pill-empacando::before {\n  background: #2563EB;\n}\n.pill-despachado {\n  background: rgba(124, 58, 237, 0.12);\n  color: #7C3AED;\n}\n.pill-despachado::before {\n  background: #7C3AED;\n}\n.pill-entregado {\n  background: rgba(46, 125, 91, 0.12);\n  color: var(--color-success);\n}\n.pill-entregado::before {\n  background: var(--color-success);\n}\n.pill-rechazado {\n  background: rgba(224, 26, 26, 0.09);\n  color: var(--color-accent);\n}\n.pill-rechazado::before {\n  background: var(--color-accent);\n}\n.pill-cancelado {\n  background: rgba(224, 168, 46, 0.16);\n  color: #B8860B;\n}\n.pill-cancelado::before {\n  background: var(--color-warning);\n}\n@media (max-width: 1000px) {\n  .modal-augajo.modal-xl {\n    width: 96vw;\n  }\n  .tabla-prod {\n    font-size: 12px;\n  }\n}\n.navigation .action .filtro-estado {\n  width: 180px;\n}\n.navigation .action .filtro-estado ::ng-deep .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n@media (max-width: 1200px) {\n  .navigation .action {\n    flex-wrap: wrap;\n  }\n  .navigation .action .buscador {\n    flex: 1;\n    min-width: 200px;\n  }\n  .navigation .action .filtro-estado {\n    width: 160px;\n  }\n}\n/*# sourceMappingURL=pedidos.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PedidosComponent, { className: "PedidosComponent", filePath: "src/app/modules/administracion/pedidos/pedidos.component.ts", lineNumber: 19 });
})();

// src/app/modules/administracion/reparto/reparto.component.ts
var import_sweetalert24 = __toESM(require_sweetalert2_all());

// src/app/modules/administracion/reparto/reparto-facade.service.ts
var RepartoFacadeService = class _RepartoFacadeService {
  constructor() {
    this.dataApi = inject(DataApiService);
    this._mensajesHttp = inject(MensajesHttpService);
    this.Cargando$ = new BehaviorSubject(false);
    this.responseCargando$ = this.Cargando$.asObservable();
    this.Reparto$ = new BehaviorSubject([]);
    this.responseReparto$ = this.Reparto$.asObservable();
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
  InsertarReparto(params, respuesta) {
    this.Cargando$.next(true);
    this.Reparto$.next([]);
    const request$ = this.dataApi.PostDataApi(`mantenimiento/reparto/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.Reparto$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al insertar el reparto", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  ActualizarReparto(params, respuesta) {
    this.Cargando$.next(true);
    this.Reparto$.next([]);
    const request$ = this.dataApi.PutDataApi(`mantenimiento/reparto/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.Reparto$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al actualizar el reparto", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  EliminarReparto(params, respuesta) {
    this.Cargando$.next(true);
    this.Reparto$.next([]);
    const request$ = this.dataApi.DeleteDataApiUrl(`mantenimiento/reparto/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.Reparto$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al eliminar el reparto", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  static {
    this.\u0275fac = function RepartoFacadeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RepartoFacadeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RepartoFacadeService, factory: _RepartoFacadeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RepartoFacadeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/modules/administracion/reparto/reparto.component.ts
var _c04 = () => ["/dashboard"];
var _c14 = () => ["Reparto"];
function RepartoComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "app-loading", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("data", 4);
  }
}
function RepartoComponent_Conditional_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "mat-icon");
    \u0275\u0275text(2, "credit_card_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No hay tipos de reparto para listar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 14);
    \u0275\u0275listener("click", function RepartoComponent_Conditional_27_Conditional_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      const modal_r2 = \u0275\u0275reference(30);
      return \u0275\u0275resetView(ctx_r3.openDialog(modal_r2));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Agregar el primero ");
    \u0275\u0275elementEnd()();
  }
}
function RepartoComponent_Conditional_27_Conditional_3_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 25)(1, "td", 27)(2, "div", 28)(3, "button", 29);
    \u0275\u0275listener("click", function RepartoComponent_Conditional_27_Conditional_3_For_19_Template_button_click_3_listener() {
      const pago_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      const modal_r2 = \u0275\u0275reference(30);
      return \u0275\u0275resetView(ctx_r3.openDialog(modal_r2, pago_r7));
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 30);
    \u0275\u0275listener("click", function RepartoComponent_Conditional_27_Conditional_3_For_19_Template_button_click_6_listener() {
      const pago_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.Eliminar(pago_r7));
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "td", 31);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 32);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 33);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 34);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 35)(18, "span", 36);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pago_r7 = ctx.$implicit;
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(pago_r7.Id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pago_r7.NombreReparto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pago_r7.Descripcion);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pago_r7.Telefono);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pill-activo", pago_r7.Estado === "Activo")("pill-inactivo", pago_r7.Estado !== "Activo");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pago_r7.Estado, " ");
  }
}
function RepartoComponent_Conditional_27_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 18)(1, "mat-card-content")(2, "div", 19)(3, "table", 20)(4, "thead", 21)(5, "tr", 22);
    \u0275\u0275element(6, "th", 23);
    \u0275\u0275elementStart(7, "th", 23);
    \u0275\u0275text(8, "C\xF3digo Reparto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 23);
    \u0275\u0275text(10, "Nombre Reparto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 23);
    \u0275\u0275text(12, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 23);
    \u0275\u0275text(14, "Telefono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 23);
    \u0275\u0275text(16, "Estado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody", 24);
    \u0275\u0275repeaterCreate(18, RepartoComponent_Conditional_27_Conditional_3_For_19_Template, 20, 9, "tr", 25, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275pipe(21, "search");
    \u0275\u0275pipe(22, "slice");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "mat-paginator", 26);
    \u0275\u0275pipe(24, "async");
    \u0275\u0275listener("page", function RepartoComponent_Conditional_27_Conditional_3_Template_mat_paginator_page_23_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.next($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(18);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(22, 8, \u0275\u0275pipeBind3(21, 4, \u0275\u0275pipeBind1(20, 2, ctx_r3.repartoFacade.responseReparto$), ctx_r3.buscar == null ? null : ctx_r3.buscar.value, \u0275\u0275pureFunction0(14, _c14)), ctx_r3.desde, ctx_r3.hasta));
    \u0275\u0275advance(5);
    \u0275\u0275property("length", \u0275\u0275pipeBind1(24, 12, ctx_r3.repartoFacade.responseReparto$).length)("pageSize", ctx_r3.pageSize);
  }
}
function RepartoComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275conditionalCreate(1, RepartoComponent_Conditional_27_Conditional_1_Template, 9, 0, "div", 17);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275conditionalCreate(3, RepartoComponent_Conditional_27_Conditional_3_Template, 25, 15, "mat-card", 18);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275\u0275pipeBind1(2, 2, ctx_r3.repartoFacade.responseReparto$).length === 0 ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(4, 4, ctx_r3.repartoFacade.responseReparto$).length > 0 ? 3 : -1);
  }
}
function RepartoComponent_ng_template_29_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "Agregar Tipo Reparto");
  }
}
function RepartoComponent_ng_template_29_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "Actualizar Tipo Reparto");
  }
}
function RepartoComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "span", 39);
    \u0275\u0275conditionalCreate(3, RepartoComponent_ng_template_29_Conditional_3_Template, 1, 0)(4, RepartoComponent_ng_template_29_Conditional_4_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 40)(6, "mat-icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "mat-dialog-content", 41)(9, "form", 42)(10, "div", 43)(11, "mat-form-field", 44)(12, "mat-label");
    \u0275\u0275text(13, "Nombre Reparto");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-form-field", 44)(16, "mat-label");
    \u0275\u0275text(17, "Telefono");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-form-field", 44)(20, "mat-label");
    \u0275\u0275text(21, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "textarea", 47);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 48)(24, "button", 49);
    \u0275\u0275text(25, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 14);
    \u0275\u0275listener("click", function RepartoComponent_ng_template_29_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.Guardar());
    });
    \u0275\u0275text(27, "Guardar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.formReparto.get("Id").value == 0 ? 3 : 4);
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r3.formReparto);
  }
}
var RepartoComponent = class _RepartoComponent {
  constructor() {
    this.repartoFacade = inject(RepartoFacadeService);
    this.dialog = inject(MatDialog);
    this.toast = inject(ToastrServiceLocal);
    this.buscar = new FormControl("");
    this.pageSize = 10;
    this.page = 0;
    this.pageIndex = 0;
    this.desde = 0;
    this.hasta = 10;
    this.repartoFacade.MostrarReparto("0");
  }
  ngOnInit() {
  }
  openDialog(template, params) {
    const dialogRef = this.dialog.open(template, {
      panelClass: "app-full-bleed-dialog",
      //Agregar una clase ccs al dialogo
      disableClose: true
    });
    this.formReparto = new FormGroup({
      //Valores de front para insertar tipo de pedido
      Id: new FormControl(params?.Id || "0"),
      NombreReparto: new FormControl(params?.NombreReparto || "", [Validators.required]),
      Descripcion: new FormControl(params?.Descripcion || ""),
      Telefono: new FormControl(params?.Telefono || ""),
      usuario: new FormControl("ymunoz"),
      idEstado: new FormControl(params?.IdEstado || "")
    });
  }
  Guardar() {
    if (this.formReparto.invalid) {
      this.toast.mensajeWarning("Es requerido ingresar los campos validos", "");
      this.formReparto.markAllAsTouched();
      return;
    }
    if (this.formReparto.get("Id").value === "0") {
      this.repartoFacade.InsertarReparto(this.formReparto.value, (respuesta) => {
        this.repartoFacade.MostrarReparto("0");
        this.dialog.closeAll();
      });
    } else {
      this.repartoFacade.ActualizarReparto(this.formReparto.value, (respuesta) => {
        this.repartoFacade.MostrarReparto("0");
        this.dialog.closeAll();
      });
    }
  }
  Eliminar(params) {
    import_sweetalert24.default.fire({
      title: "Confirmaci\xF3n",
      html: ` <p> \xBFEsta seguro quiere inhabilitar el metodo de pago <b>${params.Reparto}</b>? </p>`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#003399",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.repartoFacade.EliminarReparto(params.Id, (respuesta) => {
          this.repartoFacade.MostrarReparto("0");
        });
      }
    });
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
  static {
    this.\u0275fac = function RepartoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RepartoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RepartoComponent, selectors: [["app-reparto"]], standalone: false, decls: 31, vars: 9, consts: [["modal", ""], [1, "navigation"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "activo"], [1, "content"], [1, "titleNav"], [1, "subtitulo"], [1, "action"], ["appearance", "outline", 1, "buscador"], ["matInput", "", "type", "text", "placeholder", "Buscar reparto\u2026", "autocomplete", "off", 3, "formControl"], ["matPrefix", ""], ["mat-flat-button", "", 1, "button-principal", 3, "click"], [1, "contenedor-tabla"], [3, "data"], [1, "sin-datos"], [1, "matCardPersonalizada"], [1, "tabla-scroll"], ["role", "table", 1, "tablep"], [1, "theadp"], [1, "trp", "bg-success", "text-center"], ["scope", "col ", "role", "columnheader ", 1, "thp", "text-center"], ["role", "rowgroup", 1, "tbodyp"], ["role", "row", 1, "trp"], [3, "page", "length", "pageSize"], ["data-title", "Acciones", 1, "tdp", "col-acciones"], [1, "acciones"], ["mat-mini-fab", "", "matTooltip", "Editar", 1, "buttonSecundary", 3, "click"], ["mat-mini-fab", "", "matTooltip", "Eliminar", 1, "btnDelete", 3, "click"], ["data-title", "C\xF3digo", 1, "tdp", "col-numero"], ["data-title", "Reparto", 1, "tdp", "td-fuerte"], ["data-title", "Descripci\xF3n", 1, "tdp"], ["data-title", "Telefono", 1, "tdp"], ["data-title", "Estado", 1, "tdp", "col-estado"], [1, "pill"], [1, "modal-augajo"], [1, "modal-header"], [1, "modal-titulo"], ["mat-icon-button", "", "mat-dialog-close", "", "aria-label", "Cerrar", 1, "modal-cerrar"], [1, "mat-typography", "modal-body"], [3, "formGroup"], [1, "row"], ["appearance", "outline", 1, "col-md-12", "mt-2"], ["matInput", "", "placeholder", "Nombre Reparto", "formControlName", "NombreReparto", "required", ""], ["matInput", "", "placeholder", "Telefono", "formControlName", "Telefono", "required", "", "type", "number"], ["matInput", "", "placeholder", "Descripcion", "formControlName", "Descripcion", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "10", "autocomplete", "off"], [1, "acciones-modal"], ["mat-stroked-button", "", "mat-dialog-close", ""]], template: function RepartoComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "nav", 2)(2, "ol", 3)(3, "li", 4)(4, "a", 5);
        \u0275\u0275text(5, "Inicio");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "li", 6);
        \u0275\u0275text(7, "Reparto");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "h2");
        \u0275\u0275text(11, "Reparto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 9);
        \u0275\u0275text(13, "Gesti\xF3n de lo tipos de reparto para los pedidos");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 10)(15, "mat-form-field", 11)(16, "mat-label");
        \u0275\u0275text(17, "Buscar");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 12);
        \u0275\u0275elementStart(19, "mat-icon", 13);
        \u0275\u0275text(20, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "button", 14);
        \u0275\u0275listener("click", function RepartoComponent_Template_button_click_21_listener() {
          \u0275\u0275restoreView(_r1);
          const modal_r2 = \u0275\u0275reference(30);
          return \u0275\u0275resetView(ctx.openDialog(modal_r2));
        });
        \u0275\u0275elementStart(22, "mat-icon");
        \u0275\u0275text(23, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " Nuevo ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(25, RepartoComponent_Conditional_25_Template, 2, 1, "div", 15);
        \u0275\u0275pipe(26, "async");
        \u0275\u0275conditionalCreate(27, RepartoComponent_Conditional_27_Template, 5, 6, "div", 15);
        \u0275\u0275pipe(28, "async");
        \u0275\u0275template(29, RepartoComponent_ng_template_29_Template, 28, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c04));
        \u0275\u0275advance(14);
        \u0275\u0275property("formControl", ctx.buscar);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(\u0275\u0275pipeBind1(26, 4, ctx.repartoFacade.responseCargando$) ? 25 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!\u0275\u0275pipeBind1(28, 6, ctx.repartoFacade.responseCargando$) ? 27 : -1);
      }
    }, dependencies: [RouterLink, MatFormField, MatLabel, MatPrefix, MatInput, CdkTextareaAutosize, MatIcon, MatButton, MatMiniFabButton, MatIconButton, MatDialogClose, MatDialogContent, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormControlDirective, FormGroupDirective, FormControlName, LoadingComponent, MatCard, MatCardContent, MatPaginator, MatTooltip, AsyncPipe, SlicePipe, SearchPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RepartoComponent, [{
    type: Component,
    args: [{ selector: "app-reparto", standalone: false, template: `
<div class="navigation">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a [routerLink]="['/dashboard']">Inicio</a></li>
      <li class="breadcrumb-item activo">Reparto</li>
    </ol>
  </nav>

  <div class="content">
    <div class="titleNav">
      <h2>Reparto</h2>
      <div class="subtitulo">Gesti\xF3n de lo tipos de reparto para los pedidos</div>
    </div>

    <div class="action">
      <mat-form-field appearance="outline" class="buscador">
        <mat-label>Buscar</mat-label>
        <input matInput type="text" [formControl]="buscar" placeholder="Buscar reparto\u2026" autocomplete="off">
        <mat-icon matPrefix>search</mat-icon>
      </mat-form-field>
      <button class="button-principal" mat-flat-button (click)="openDialog(modal)">
        <mat-icon>add</mat-icon>
        Nuevo
      </button>
    </div>
  </div>
</div>

@if ((repartoFacade.responseCargando$ | async)) {
<div class="contenedor-tabla">
  <app-loading [data]="4"></app-loading>
</div>
}

@if (!(repartoFacade.responseCargando$ | async)) {
<div class="contenedor-tabla">

  @if ((repartoFacade.responseReparto$ | async).length === 0) {
  <div class="sin-datos">
    <mat-icon>credit_card_off</mat-icon>
    <p>No hay tipos de reparto para listar</p>
    <button class="button-principal" mat-flat-button (click)="openDialog(modal)">
      <mat-icon>add</mat-icon>
      Agregar el primero
    </button>
  </div>
  }

  @if ((repartoFacade.responseReparto$ | async).length > 0) {
  <mat-card class="matCardPersonalizada">
    <mat-card-content>
      <div class="tabla-scroll">
        <table class="tablep" role="table">
          <thead class="theadp">
            <tr class="trp bg-success text-center ">
              <th class="thp text-center" scope="col " role="columnheader "></th>
              <th class="thp text-center" scope="col " role="columnheader ">C\xF3digo Reparto</th>
              <th class="thp text-center " scope="col " role="columnheader ">Nombre Reparto</th>
              <th class="thp text-center " scope="col " role="columnheader ">Descripci\xF3n</th>
              <th class="thp text-center " scope="col " role="columnheader ">Telefono</th>
              <th class="thp text-center " scope="col " role="columnheader ">Estado</th>
            </tr>
          </thead>
          <tbody role="rowgroup" class="tbodyp">
            @for (pago of (repartoFacade.responseReparto$ | async) | search: this.buscar?.value: ['Reparto'] | slice:
            desde : hasta; track pago) {
            <tr class="trp" role="row">
              <td data-title="Acciones" class="tdp col-acciones">
                <div class="acciones">
                  <button class="buttonSecundary" mat-mini-fab (click)="openDialog(modal, pago)" matTooltip="Editar">
                    <mat-icon>edit</mat-icon>
                  </button>
                  <button class="btnDelete" mat-mini-fab (click)="Eliminar(pago)" matTooltip="Eliminar">
                    <mat-icon>delete</mat-icon>
                  </button>
                </div>
              </td>
              <td data-title="C\xF3digo" class="tdp col-numero">{{ pago.Id }}</td>
              <td data-title="Reparto" class="tdp td-fuerte">{{ pago.NombreReparto }}</td>
              <td data-title="Descripci\xF3n" class="tdp">{{ pago.Descripcion }}</td>
              <td data-title="Telefono" class="tdp">{{ pago.Telefono }}</td>
              <td data-title="Estado" class="tdp col-estado">
                <span class="pill" [class.pill-activo]="pago.Estado === 'Activo'"
                  [class.pill-inactivo]="pago.Estado !== 'Activo'">
                  {{ pago.Estado }}
                </span>
              </td>
            </tr>
            }
          </tbody>
        </table>
      </div>

      <mat-paginator [length]="(repartoFacade.responseReparto$ | async).length" [pageSize]="pageSize"
        (page)="next($event)">
      </mat-paginator>
    </mat-card-content>
  </mat-card>
  }

</div>
}
<ng-template #modal>
  <div class="modal-augajo">
    <div class="modal-header">
      <span class="modal-titulo">@if(formReparto.get('Id').value == 0){Agregar Tipo Reparto} @else{Actualizar Tipo Reparto}</span>
      <button mat-icon-button mat-dialog-close class="modal-cerrar" aria-label="Cerrar">
        <mat-icon>close</mat-icon>
      </button>
    </div>

    <mat-dialog-content class="mat-typography modal-body">
         <form [formGroup]="formReparto">
      <div class="row">
        <mat-form-field appearance="outline" class="col-md-12 mt-2">
          <mat-label>Nombre Reparto</mat-label>
          <input matInput placeholder="Nombre Reparto" formControlName="NombreReparto" required>
        </mat-form-field>
        <mat-form-field appearance="outline" class="col-md-12 mt-2">
          <mat-label>Telefono</mat-label>
          <input matInput placeholder="Telefono" formControlName="Telefono" required type="number">
        </mat-form-field>

        <mat-form-field appearance="outline" class="col-md-12 mt-2">
          <mat-label>Descripci\xF3n</mat-label>
          <textarea matInput placeholder="Descripcion" formControlName="Descripcion" cdkTextareaAutosize
            cdkAutosizeMinRows="10" autocomplete="off"></textarea>
        </mat-form-field>
      </div>
    </form>
    </mat-dialog-content>

    <div class="acciones-modal">
      <button mat-stroked-button mat-dialog-close>Cancelar</button>
      <button class="button-principal" mat-flat-button (click)="Guardar()">Guardar</button>
    </div>
  </div>
</ng-template>` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RepartoComponent, { className: "RepartoComponent", filePath: "src/app/modules/administracion/reparto/reparto.component.ts", lineNumber: 15 });
})();

// src/app/modules/administracion/tipo-contacto/tipo-contacto.component.ts
var import_sweetalert25 = __toESM(require_sweetalert2_all());

// src/app/modules/administracion/tipo-contacto/tipo-contacto-facade.service.ts
var TipoContactoFacadeService = class _TipoContactoFacadeService {
  constructor() {
    this.dataApi = inject(DataApiService);
    this._mensajesHttp = inject(MensajesHttpService);
    this.Cargando$ = new BehaviorSubject(false);
    this.responseCargando$ = this.Cargando$.asObservable();
    this.TipoContacto$ = new BehaviorSubject([]);
    this.responseTipoContacto$ = this.TipoContacto$.asObservable();
  }
  MostrarTipoContacto(params) {
    this.Cargando$.next(true);
    this.TipoContacto$.next([]);
    const request$ = this.dataApi.GetDataApi(`personas/tiposContacto/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      this.TipoContacto$.next(result.data.Table0);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.TipoContacto$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar los tipos de contacto", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  InsertarTipoContacto(params, respuesta) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.PostDataApi(`personas/tiposContacto/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al insertar el tipo contacto", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  ActualizarTipoContacto(params, respuesta) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.PutDataApi(`personas/tiposContacto/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al actualizar el tipo contacto", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  EliminarTipoContacto(params, respuesta) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.DeleteDataApiUrl(`personas/tiposContacto/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al eliminar el tipo de contacto", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  static {
    this.\u0275fac = function TipoContactoFacadeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TipoContactoFacadeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TipoContactoFacadeService, factory: _TipoContactoFacadeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TipoContactoFacadeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/modules/administracion/tipo-contacto/tipo-contacto.component.ts
var _c05 = () => ["/dashboard"];
var _c15 = () => ["TipoContacto"];
function TipoContactoComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-loading", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("data", 4);
  }
}
function TipoContactoComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, " No hay generos para listar ");
    \u0275\u0275elementEnd();
  }
}
function TipoContactoComponent_Conditional_28_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 24)(1, "td", 26)(2, "button", 27);
    \u0275\u0275listener("click", function TipoContactoComponent_Conditional_28_For_19_Template_button_click_2_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(2);
      const modal_r2 = \u0275\u0275reference(32);
      return \u0275\u0275resetView(ctx_r5.openDialog(modal_r2, item_r5));
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function TipoContactoComponent_Conditional_28_For_19_Template_button_click_5_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r5.Eliminar(item_r5));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "delete");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "td", 29);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 30);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 31);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 32);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 33);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", item_r5.Id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r5.TipoContacto, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r5.UsuarioInsercion);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(16, 5, item_r5.FechaInsercion, "yyyy-MM-dd"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r5.Estado);
  }
}
function TipoContactoComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 17)(1, "mat-card-content")(2, "div")(3, "table", 19)(4, "thead", 20)(5, "tr", 21);
    \u0275\u0275element(6, "th", 22);
    \u0275\u0275elementStart(7, "th", 22);
    \u0275\u0275text(8, "Codigo Tipo Contacto ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 22);
    \u0275\u0275text(10, "Tipo Contacto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 22);
    \u0275\u0275text(12, "Usuario Ingreso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 22);
    \u0275\u0275text(14, "Fecha Ingreso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 22);
    \u0275\u0275text(16, "Estado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "tbody", 23);
    \u0275\u0275repeaterCreate(18, TipoContactoComponent_Conditional_28_For_19_Template, 19, 8, "tr", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275pipe(21, "search");
    \u0275\u0275pipe(22, "slice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "mat-paginator", 25);
    \u0275\u0275pipe(24, "async");
    \u0275\u0275listener("page", function TipoContactoComponent_Conditional_28_Template_mat_paginator_page_23_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.next($event));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(22, 8, \u0275\u0275pipeBind3(21, 4, \u0275\u0275pipeBind1(20, 2, ctx_r5.tipoContactoFacade.responseTipoContacto$), ctx_r5.buscar == null ? null : ctx_r5.buscar.value, \u0275\u0275pureFunction0(14, _c15)), ctx_r5.desde, ctx_r5.hasta));
    \u0275\u0275advance(5);
    \u0275\u0275property("length", \u0275\u0275pipeBind1(24, 12, ctx_r5.tipoContactoFacade.responseTipoContacto$).length)("pageSize", ctx_r5.pageSize);
  }
}
function TipoContactoComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1, " Tipo Contacto ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-dialog-content", 35)(3, "form", 36)(4, "div", 37)(5, "mat-form-field", 38)(6, "mat-label");
    \u0275\u0275text(7, "Tipo Contacto");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 40)(10, "button", 41);
    \u0275\u0275text(11, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 42);
    \u0275\u0275listener("click", function TipoContactoComponent_ng_template_31_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.Guardar());
    });
    \u0275\u0275text(13, "Guardar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r5.formTipoContacto);
  }
}
var TipoContactoComponent = class _TipoContactoComponent {
  constructor() {
    this.tipoContactoFacade = inject(TipoContactoFacadeService);
    this.dialog = inject(MatDialog);
    this.toast = inject(ToastrServiceLocal);
    this.buscar = new FormControl("");
    this.pageSize = 10;
    this.page = 0;
    this.pageIndex = 0;
    this.desde = 0;
    this.hasta = 10;
    this.tipoContactoFacade.MostrarTipoContacto("0");
  }
  ngOnInit() {
  }
  openDialog(template, item) {
    this.formTipoContacto = new FormGroup({
      id: new FormControl(item?.Id || 0),
      tipoContacto: new FormControl(item?.TipoContacto || "", [Validators.required]),
      idEstado: new FormControl(item?.IdEstado || "")
    });
    const dialogRef = this.dialog.open(template, {
      panelClass: "app-full-bleed-dialog",
      //Agregar una clase ccs al dialogo,
      width: "40%",
      disableClose: true
    });
  }
  Guardar() {
    if (this.formTipoContacto.invalid) {
      this.toast.mensajeWarning("Es requerido ingresar los campos marcados como obligatorios", "");
      this.formTipoContacto.markAllAsTouched();
      return;
    }
    if (this.formTipoContacto.get("id").value === 0) {
      this.tipoContactoFacade.InsertarTipoContacto(this.formTipoContacto.value, (respuesta) => {
        if (respuesta.hasError === false) {
          this.tipoContactoFacade.MostrarTipoContacto("0");
          this.dialog.closeAll();
        }
      });
    } else {
      this.tipoContactoFacade.ActualizarTipoContacto(this.formTipoContacto.value, (respuesta) => {
        if (respuesta.hasError === false) {
          this.tipoContactoFacade.MostrarTipoContacto("0");
          this.dialog.closeAll();
        }
      });
    }
  }
  Eliminar(params) {
    import_sweetalert25.default.fire({
      title: "Confirmaci\xF3n",
      html: ` <p> \xBFEsta seguro quiere inhabilitar el tipo de contacto <b>${params.TipoContacto}</b>? </p>`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#003399",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.tipoContactoFacade.EliminarTipoContacto(params.Id, (respuesta) => {
          this.tipoContactoFacade.MostrarTipoContacto("0");
        });
      }
    });
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
  static {
    this.\u0275fac = function TipoContactoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TipoContactoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TipoContactoComponent, selectors: [["app-tipo-contacto"]], standalone: false, decls: 33, vars: 16, consts: [["modal", ""], [1, "navigation"], ["aria-label", "breadcrumb"], [1, "breadcrumb", 2, "background-color", "white !important"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "content"], [1, "titleNav"], [2, "font-size", "2rem", "font-weight", "800", "letter-spacing", "-.025em!important", "line-height", "2.5rem!important", "text-overflow", "ellipsis!important"], [1, "text-right", "action"], ["mat-mini-fab", "", 1, "button-principal", 2, "margin-right", "5px", 3, "click"], ["appearance", "outline", 2, "width", "100%"], ["matInput", "", "type", "text", "placeholder", "Buscar", "autocomplete", "off", 3, "formControl"], ["matPrefix", ""], [1, "col-md-12"], [2, "display", "flex", "justify-content", "center", "align-items", "center"], ["role", "alert", 1, "alert", "alert-primary", "text-center", "mt-4", 2, "width", "50%"], [1, "matCardPersonalizada", "mt-2"], [3, "data"], ["role", "table", 1, "table", "bordeTabla", "tablep"], [1, "theadp"], [1, "trp", "bg-success", "text-center"], ["scope", "col ", "role", "columnheader ", 1, "thp", "text-center"], ["role", "rowgroup ", 1, "tbodyp"], ["role", "row ", 1, "text-center", "trp"], ["tourAnchor", " pagination ", 3, "page", "length", "pageSize"], ["role", "cell ", "data-title", "", 1, "tdp", "text-center"], ["mat-mini-fab", "", 1, "buttonSecundary", 3, "click"], ["mat-mini-fab", "", 1, "btnDelete", 2, "margin-right", "5px", 3, "click"], ["role", "cell ", "data-title", "Codigo Tipo Contacto", 1, "tdp", "text-center"], ["role", "cell ", "data-title", "Tipo Contacto", 1, "tdp", "text-center"], ["role", "cell ", "data-title", "Usuario Ingreso ", 1, "tdp", "text-center"], ["role", "cell ", "data-title", "Fecha Ingreso", 1, "tdp", "text-center"], ["role", "cell ", "data-title", "Estado", 1, "tdp", "text-center"], [1, "matCardHeader"], [1, "mat-typography"], [3, "formGroup"], [1, "row"], ["appearance", "outline", 1, "col-md-12", "mt-2"], ["matInput", "", "placeholder", "Tipo Contacto", "formControlName", "tipoContacto", "required", ""], [1, "text-right"], ["mat-raised-button", "", "mat-dialog-close", "", 2, "margin-right", "5px"], ["mat-raised-button", "", 1, "button-principal", 3, "click"]], template: function TipoContactoComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "nav", 2)(2, "ol", 3)(3, "li", 4)(4, "a", 5);
        \u0275\u0275text(5, "Inicio");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "h2", 8);
        \u0275\u0275text(9, " Tipo Contactos ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 9)(11, "button", 10);
        \u0275\u0275listener("click", function TipoContactoComponent_Template_button_click_11_listener() {
          \u0275\u0275restoreView(_r1);
          const modal_r2 = \u0275\u0275reference(32);
          return \u0275\u0275resetView(ctx.openDialog(modal_r2));
        });
        \u0275\u0275elementStart(12, "mat-icon");
        \u0275\u0275text(13, "add_circle_outline");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "mat-form-field", 11)(15, "mat-label");
        \u0275\u0275text(16, "Buscar");
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "input", 12);
        \u0275\u0275elementStart(18, "span", 13)(19, "mat-icon");
        \u0275\u0275text(20, "search");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275conditionalCreate(21, TipoContactoComponent_Conditional_21_Template, 2, 1, "div");
        \u0275\u0275pipe(22, "async");
        \u0275\u0275elementStart(23, "div", 14)(24, "div", 15);
        \u0275\u0275conditionalCreate(25, TipoContactoComponent_Conditional_25_Template, 2, 0, "div", 16);
        \u0275\u0275pipe(26, "async");
        \u0275\u0275pipe(27, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(28, TipoContactoComponent_Conditional_28_Template, 25, 15, "mat-card", 17);
        \u0275\u0275pipe(29, "async");
        \u0275\u0275pipe(30, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275template(31, TipoContactoComponent_ng_template_31_Template, 14, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(15, _c05));
        \u0275\u0275advance(13);
        \u0275\u0275property("formControl", ctx.buscar);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(\u0275\u0275pipeBind1(22, 5, ctx.tipoContactoFacade.responseCargando$) ? 21 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(!\u0275\u0275pipeBind1(26, 7, ctx.tipoContactoFacade.responseCargando$) && \u0275\u0275pipeBind1(27, 9, ctx.tipoContactoFacade.responseTipoContacto$).length === 0 ? 25 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!\u0275\u0275pipeBind1(29, 11, ctx.tipoContactoFacade.responseCargando$) && \u0275\u0275pipeBind1(30, 13, ctx.tipoContactoFacade.responseTipoContacto$).length > 0 ? 28 : -1);
      }
    }, dependencies: [RouterLink, MatFormField, MatLabel, MatPrefix, MatInput, MatIcon, MatButton, MatMiniFabButton, MatDialogClose, MatDialogContent, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormControlDirective, FormGroupDirective, FormControlName, LoadingComponent, MatCard, MatCardContent, MatPaginator, AsyncPipe, SlicePipe, DatePipe, SearchPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TipoContactoComponent, [{
    type: Component,
    args: [{ selector: "app-tipo-contacto", standalone: false, template: `<div class="navigation">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb" style="background-color: white !important;">
      <li class="breadcrumb-item"><a [routerLink]="['/dashboard']">Inicio</a></li>
      <!-- <li class="breadcrumb-item cursorActivo" *ngIf="!busquedaEstudiante"><a (click)="busquedaEstudiante = true">Buscar estudiante</a></li> -->
    </ol>
  </nav>
  <div class="content">
    <div class="titleNav">
      <h2
        style="font-size: 2rem; font-weight: 800; letter-spacing: -.025em!important; line-height: 2.5rem!important;text-overflow: ellipsis!important; ">
        Tipo Contactos
      </h2>
      <!-- <h2
      style="font-size: 2rem; font-weight: 800; letter-spacing: -.025em!important; line-height: 2.5rem!important;text-overflow: ellipsis!important; " *ngIf="!busquedaEstudiante">
      Nombre Estudiante
    </h2> -->
  </div>
  <div class="text-right action">

    <button class="button-principal" mat-mini-fab (click)="openDialog(modal)" style="margin-right: 5px;">
      <mat-icon>add_circle_outline</mat-icon>
    </button>
    <mat-form-field appearance="outline" style="width: 100%;">
      <mat-label>Buscar</mat-label>
      <input matInput type="text" [formControl]="buscar" placeholder="Buscar" autocomplete="off">
      <span matPrefix>
        <mat-icon>search</mat-icon>
      </span>
    </mat-form-field>
  </div>

</div>
</div>

@if ((tipoContactoFacade.responseCargando$  | async)) {
  <div>
    <app-loading [data]="4"></app-loading>
  </div>
}

<div class="col-md-12">
  <div style="display: flex; justify-content: center; align-items: center;">
    @if (!(tipoContactoFacade.responseCargando$  | async) && (tipoContactoFacade.responseTipoContacto$ | async).length === 0) {
      <div class="alert alert-primary text-center mt-4" role="alert"
        style="width: 50%;">
        No hay generos para listar
      </div>
    }
  </div>
  @if (!(tipoContactoFacade.responseCargando$  | async) && (tipoContactoFacade.responseTipoContacto$ | async).length > 0) {
    <mat-card class="matCardPersonalizada mt-2"
      >
      <mat-card-content>
        <div>
          <table class="table  bordeTabla tablep" role="table">
            <thead class="theadp">
              <tr class="trp bg-success text-center ">
                <th class="thp text-center" scope="col " role="columnheader "></th>
                <th class="thp text-center" scope="col " role="columnheader ">Codigo Tipo Contacto </th>
                <th class="thp text-center" scope="col " role="columnheader ">Tipo Contacto</th>
                <th class="thp text-center " scope="col " role="columnheader ">Usuario Ingreso</th>
                <th class="thp text-center " scope="col " role="columnheader ">Fecha Ingreso</th>
                <th class="thp text-center " scope="col " role="columnheader ">Estado</th>
              </tr>
            </thead>
            <tbody role="rowgroup " class="tbodyp">
              @for (item of (tipoContactoFacade.responseTipoContacto$ | async) | search: this.buscar?.value: ['TipoContacto'] |  slice: desde :hasta; track item) {
                <tr class="text-center trp " role="row "
                  >
                  <td role="cell " data-title="" class="tdp text-center">
                    <button class="buttonSecundary" mat-mini-fab
                      (click)="openDialog(modal, item)"><!--Levanta el modal con los datos pre cargados-->
                      <mat-icon>edit</mat-icon>
                    </button>
                    <button class="btnDelete" mat-mini-fab (click)="Eliminar(item)"
                      style="margin-right: 5px;"><!--Eliminar-->
                      <mat-icon>delete</mat-icon>
                    </button>
                  </td>
                  <td role="cell " data-title="Codigo Tipo Contacto" class="tdp text-center">
                    {{item.Id}}
                  </td>
                  <td role="cell " data-title="Tipo Contacto" class="tdp text-center">
                    {{item.TipoContacto}}
                  </td>
                  <td role="cell " data-title="Usuario Ingreso " class="tdp text-center">
                  {{item.UsuarioInsercion}}</td>
                  <td role="cell " data-title="Fecha Ingreso" class="tdp text-center">
                  {{item.FechaInsercion | date:'yyyy-MM-dd'}}</td>
                  <td role="cell " data-title="Estado" class="tdp text-center"> {{item.Estado }}</td>
                </tr>
              }
            </tbody>
          </table>
          <mat-paginator tourAnchor=" pagination "
            [length]="(tipoContactoFacade.responseTipoContacto$ | async).length "
            [pageSize]="pageSize" (page)="next($event) ">
          </mat-paginator>
        </div>
      </mat-card-content>
    </mat-card>
  }
</div>
<ng-template #modal>
  <div class="matCardHeader">
    Tipo Contacto
  </div>
  <mat-dialog-content class="mat-typography">
    <form [formGroup]="formTipoContacto">
      <div class="row">
        <mat-form-field appearance="outline" class="col-md-12 mt-2">
          <mat-label>Tipo Contacto</mat-label>
          <input matInput placeholder="Tipo Contacto" formControlName="tipoContacto" required>
        </mat-form-field>
      </div>
    </form>
    <div class="text-right">
      <button style="margin-right: 5px;" mat-raised-button mat-dialog-close>Cancelar</button>
      <button class="button-principal" mat-raised-button (click)="Guardar()">Guardar</button>
    </div>
  </mat-dialog-content>
</ng-template>` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TipoContactoComponent, { className: "TipoContactoComponent", filePath: "src/app/modules/administracion/tipo-contacto/tipo-contacto.component.ts", lineNumber: 15 });
})();

// src/app/modules/administracion/tipo-identificacion/tipo-identificacion.component.ts
var import_sweetalert26 = __toESM(require_sweetalert2_all());

// src/app/modules/administracion/tipo-identificacion/tipo-identificacion-facade.service.ts
var TipoIdentificacionFacadeService = class _TipoIdentificacionFacadeService {
  constructor() {
    this.dataApi = inject(DataApiService);
    this._mensajesHttp = inject(MensajesHttpService);
    this.Cargando$ = new BehaviorSubject(false);
    this.responseCargando$ = this.Cargando$.asObservable();
    this.TipoIdentificacion$ = new BehaviorSubject([]);
    this.responseTipoIdentificacion$ = this.TipoIdentificacion$.asObservable();
  }
  MostrarTipoIdentificacion(params) {
    this.Cargando$.next(true);
    this.TipoIdentificacion$.next([]);
    const request$ = this.dataApi.GetDataApi(`personas/tipoIdentificacion/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      this.TipoIdentificacion$.next(result.data.Table0);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.TipoIdentificacion$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar los tipos de identificaci\xF3n", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  InsertarTipoIdentificacion(params, respuesta) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.PostDataApi(`personas/tipoIdentificacion/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al insertar el tipo de identificaci\xF3n", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  ActualizarTipoIdentificacion(params, respuesta) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.PutDataApi(`personas/tipoIdentificacion/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al actualizar el tipo de identificaci\xF3n", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  EliminarTipoIdentificacion(params, respuesta) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.DeleteDataApiUrl(`personas/tipoIdentificacion/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al eliminar el tipo de identificaci\xF3n", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  static {
    this.\u0275fac = function TipoIdentificacionFacadeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TipoIdentificacionFacadeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TipoIdentificacionFacadeService, factory: _TipoIdentificacionFacadeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TipoIdentificacionFacadeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/modules/administracion/tipo-identificacion/tipo-identificacion.component.ts
var _c06 = () => ["/dashboard"];
var _c16 = () => ["Reparto"];
function TipoIdentificacionComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "app-loading", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("data", 4);
  }
}
function TipoIdentificacionComponent_Conditional_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "mat-icon");
    \u0275\u0275text(2, "credit_card_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No hay tipos de identificaci\xF3n para listar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 14);
    \u0275\u0275listener("click", function TipoIdentificacionComponent_Conditional_27_Conditional_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      const modal_r2 = \u0275\u0275reference(30);
      return \u0275\u0275resetView(ctx_r3.openDialog(modal_r2));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Agregar el primero ");
    \u0275\u0275elementEnd()();
  }
}
function TipoIdentificacionComponent_Conditional_27_Conditional_3_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 28)(1, "td", 30)(2, "div", 31)(3, "button", 32);
    \u0275\u0275listener("click", function TipoIdentificacionComponent_Conditional_27_Conditional_3_For_16_Template_button_click_3_listener() {
      const pago_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      const modal_r2 = \u0275\u0275reference(30);
      return \u0275\u0275resetView(ctx_r3.openDialog(modal_r2, pago_r7));
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 33);
    \u0275\u0275listener("click", function TipoIdentificacionComponent_Conditional_27_Conditional_3_For_16_Template_button_click_6_listener() {
      const pago_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.Eliminar(pago_r7));
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "td", 34);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 35);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 36)(14, "span", 37);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pago_r7 = ctx.$implicit;
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(pago_r7.Id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pago_r7.TipoIdentificacion);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pill-activo", pago_r7.Estado === "Activo")("pill-inactivo", pago_r7.Estado !== "Activo");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pago_r7.Estado, " ");
  }
}
function TipoIdentificacionComponent_Conditional_27_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 18)(1, "mat-card-content")(2, "div", 19)(3, "table", 20)(4, "thead", 21)(5, "tr", 22)(6, "th", 23);
    \u0275\u0275text(7, "Acciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 24);
    \u0275\u0275text(9, "Codigo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 25);
    \u0275\u0275text(11, "Tipo Identificaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 26);
    \u0275\u0275text(13, "Estado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody", 27);
    \u0275\u0275repeaterCreate(15, TipoIdentificacionComponent_Conditional_27_Conditional_3_For_16_Template, 16, 7, "tr", 28, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275pipe(18, "search");
    \u0275\u0275pipe(19, "slice");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "mat-paginator", 29);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275listener("page", function TipoIdentificacionComponent_Conditional_27_Conditional_3_Template_mat_paginator_page_20_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.next($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(19, 8, \u0275\u0275pipeBind3(18, 4, \u0275\u0275pipeBind1(17, 2, ctx_r3.tipoIdentificacionFacade.responseTipoIdentificacion$), ctx_r3.buscar == null ? null : ctx_r3.buscar.value, \u0275\u0275pureFunction0(14, _c16)), ctx_r3.desde, ctx_r3.hasta));
    \u0275\u0275advance(5);
    \u0275\u0275property("length", \u0275\u0275pipeBind1(21, 12, ctx_r3.tipoIdentificacionFacade.responseTipoIdentificacion$).length)("pageSize", ctx_r3.pageSize);
  }
}
function TipoIdentificacionComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275conditionalCreate(1, TipoIdentificacionComponent_Conditional_27_Conditional_1_Template, 9, 0, "div", 17);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275conditionalCreate(3, TipoIdentificacionComponent_Conditional_27_Conditional_3_Template, 22, 15, "mat-card", 18);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275\u0275pipeBind1(2, 2, ctx_r3.tipoIdentificacionFacade.responseTipoIdentificacion$).length === 0 ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(4, 4, ctx_r3.tipoIdentificacionFacade.responseTipoIdentificacion$).length > 0 ? 3 : -1);
  }
}
function TipoIdentificacionComponent_ng_template_29_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "Agregar Tipo Identificaci\xF3n");
  }
}
function TipoIdentificacionComponent_ng_template_29_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "Actualizar Tipo Identificaci\xF3n");
  }
}
function TipoIdentificacionComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "span", 40);
    \u0275\u0275conditionalCreate(3, TipoIdentificacionComponent_ng_template_29_Conditional_3_Template, 1, 0)(4, TipoIdentificacionComponent_ng_template_29_Conditional_4_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 41)(6, "mat-icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "mat-dialog-content", 42)(9, "form", 43)(10, "div", 44)(11, "mat-form-field", 45)(12, "mat-label");
    \u0275\u0275text(13, "Tipo Identificaci\xF3n ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 46);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 47)(16, "button", 48);
    \u0275\u0275text(17, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 14);
    \u0275\u0275listener("click", function TipoIdentificacionComponent_ng_template_29_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.Guardar());
    });
    \u0275\u0275text(19, "Guardar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.formTipoIdentificacion.get("id").value == 0 ? 3 : 4);
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r3.formTipoIdentificacion);
  }
}
var TipoIdentificacionComponent = class _TipoIdentificacionComponent {
  constructor() {
    this.tipoIdentificacionFacade = inject(TipoIdentificacionFacadeService);
    this.dialog = inject(MatDialog);
    this.toast = inject(ToastrServiceLocal);
    this.buscar = new FormControl("");
    this.pageSize = 10;
    this.page = 0;
    this.pageIndex = 0;
    this.desde = 0;
    this.hasta = 10;
    this.tipoIdentificacionFacade.MostrarTipoIdentificacion("0");
  }
  ngOnInit() {
  }
  openDialog(template, item) {
    this.formTipoIdentificacion = new FormGroup({
      id: new FormControl(item?.Id || 0),
      tipoIdentificacion: new FormControl(item?.TipoIdentificacion || "", [Validators.required]),
      idEstado: new FormControl(item?.IdEstado || "")
    });
    const dialogRef = this.dialog.open(template, {
      panelClass: "app-full-bleed-dialog",
      //Agregar una clase ccs al dialogo,
      disableClose: true
    });
  }
  Guardar() {
    if (this.formTipoIdentificacion.invalid) {
      this.toast.mensajeWarning("Es requerido ingresar los campos marcados como obligatorios", "");
      this.formTipoIdentificacion.markAllAsTouched();
      return;
    }
    if (this.formTipoIdentificacion.get("id").value === 0) {
      this.tipoIdentificacionFacade.InsertarTipoIdentificacion(this.formTipoIdentificacion.value, (respuesta) => {
        if (respuesta.hasError === false) {
          this.tipoIdentificacionFacade.MostrarTipoIdentificacion("0");
          this.dialog.closeAll();
        }
      });
    } else {
      this.tipoIdentificacionFacade.ActualizarTipoIdentificacion(this.formTipoIdentificacion.value, (respuesta) => {
        if (respuesta.hasError === false) {
          this.tipoIdentificacionFacade.MostrarTipoIdentificacion("0");
          this.dialog.closeAll();
        }
      });
    }
  }
  Eliminar(params) {
    import_sweetalert26.default.fire({
      title: "Confirmaci\xF3n",
      html: ` <p> \xBFEsta seguro quiere inhabilitar el tipo identificaci\xF3n <b>${params.TipoIdentificacion}</b>? </p>`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#003399",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.tipoIdentificacionFacade.EliminarTipoIdentificacion(params.Id, (respuesta) => {
          this.tipoIdentificacionFacade.MostrarTipoIdentificacion("0");
        });
      }
    });
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
  static {
    this.\u0275fac = function TipoIdentificacionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TipoIdentificacionComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TipoIdentificacionComponent, selectors: [["app-tipo-identificacion"]], standalone: false, decls: 31, vars: 9, consts: [["modal", ""], [1, "navigation"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "activo"], [1, "content"], [1, "titleNav"], [1, "subtitulo"], [1, "action"], ["appearance", "outline", 1, "buscador"], ["matInput", "", "type", "text", "placeholder", "Buscar identificaci\xF3n\u2026", "autocomplete", "off", 3, "formControl"], ["matPrefix", ""], ["mat-flat-button", "", 1, "button-principal", 3, "click"], [1, "contenedor-tabla"], [3, "data"], [1, "sin-datos"], [1, "matCardPersonalizada"], [1, "tabla-scroll"], ["role", "table", 1, "tablep"], [1, "theadp"], [1, "trp"], [1, "thp", "col-acciones"], [1, "thp", "col-numero"], [1, "thp"], [1, "thp", "col-estado"], ["role", "rowgroup", 1, "tbodyp"], ["role", "row", 1, "trp"], [3, "page", "length", "pageSize"], ["data-title", "Acciones", 1, "tdp", "col-acciones"], [1, "acciones"], ["mat-mini-fab", "", "matTooltip", "Editar", 1, "buttonSecundary", 3, "click"], ["mat-mini-fab", "", "matTooltip", "Eliminar", 1, "btnDelete", 3, "click"], ["data-title", "C\xF3digo", 1, "tdp", "col-numero"], ["data-title", "Reparto", 1, "tdp", "td-fuerte"], ["data-title", "Estado", 1, "tdp", "col-estado"], [1, "pill"], [1, "modal-augajo"], [1, "modal-header"], [1, "modal-titulo"], ["mat-icon-button", "", "mat-dialog-close", "", "aria-label", "Cerrar", 1, "modal-cerrar"], [1, "mat-typography", "modal-body"], [3, "formGroup"], [1, "row"], ["appearance", "outline", 1, "col-md-12", "mt-2"], ["matInput", "", "placeholder", "Tipo Identificaci\xF3n", "formControlName", "tipoIdentificacion", "required", ""], [1, "acciones-modal"], ["mat-stroked-button", "", "mat-dialog-close", ""]], template: function TipoIdentificacionComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "nav", 2)(2, "ol", 3)(3, "li", 4)(4, "a", 5);
        \u0275\u0275text(5, "Inicio");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "li", 6);
        \u0275\u0275text(7, "Tipo Identificaci\xF3n");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "h2");
        \u0275\u0275text(11, "Tipo Identificacion");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 9);
        \u0275\u0275text(13, "Gesti\xF3n de lo tipos de identificaci\xF3n");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 10)(15, "mat-form-field", 11)(16, "mat-label");
        \u0275\u0275text(17, "Buscar");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 12);
        \u0275\u0275elementStart(19, "mat-icon", 13);
        \u0275\u0275text(20, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "button", 14);
        \u0275\u0275listener("click", function TipoIdentificacionComponent_Template_button_click_21_listener() {
          \u0275\u0275restoreView(_r1);
          const modal_r2 = \u0275\u0275reference(30);
          return \u0275\u0275resetView(ctx.openDialog(modal_r2));
        });
        \u0275\u0275elementStart(22, "mat-icon");
        \u0275\u0275text(23, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " Nuevo ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(25, TipoIdentificacionComponent_Conditional_25_Template, 2, 1, "div", 15);
        \u0275\u0275pipe(26, "async");
        \u0275\u0275conditionalCreate(27, TipoIdentificacionComponent_Conditional_27_Template, 5, 6, "div", 15);
        \u0275\u0275pipe(28, "async");
        \u0275\u0275template(29, TipoIdentificacionComponent_ng_template_29_Template, 20, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c06));
        \u0275\u0275advance(14);
        \u0275\u0275property("formControl", ctx.buscar);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(\u0275\u0275pipeBind1(26, 4, ctx.tipoIdentificacionFacade.responseCargando$) ? 25 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!\u0275\u0275pipeBind1(28, 6, ctx.tipoIdentificacionFacade.responseCargando$) ? 27 : -1);
      }
    }, dependencies: [RouterLink, MatFormField, MatLabel, MatPrefix, MatInput, MatIcon, MatButton, MatMiniFabButton, MatIconButton, MatDialogClose, MatDialogContent, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormControlDirective, FormGroupDirective, FormControlName, LoadingComponent, MatCard, MatCardContent, MatPaginator, MatTooltip, AsyncPipe, SlicePipe, SearchPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TipoIdentificacionComponent, [{
    type: Component,
    args: [{ selector: "app-tipo-identificacion", standalone: false, template: `<div class="navigation">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a [routerLink]="['/dashboard']">Inicio</a></li>
      <li class="breadcrumb-item activo">Tipo Identificaci\xF3n</li>
    </ol>
  </nav>

  <div class="content">
    <div class="titleNav">
      <h2>Tipo Identificacion</h2>
      <div class="subtitulo">Gesti\xF3n de lo tipos de identificaci\xF3n</div>
    </div>

    <div class="action">
      <mat-form-field appearance="outline" class="buscador">
        <mat-label>Buscar</mat-label>
        <input matInput type="text" [formControl]="buscar" placeholder="Buscar identificaci\xF3n\u2026" autocomplete="off">
        <mat-icon matPrefix>search</mat-icon>
      </mat-form-field>
      <button class="button-principal" mat-flat-button (click)="openDialog(modal)">
        <mat-icon>add</mat-icon>
        Nuevo
      </button>
    </div>
  </div>
</div>

@if ((tipoIdentificacionFacade.responseCargando$ | async)) {
<div class="contenedor-tabla">
  <app-loading [data]="4"></app-loading>
</div>
}

@if (!(tipoIdentificacionFacade.responseCargando$ | async)) {
<div class="contenedor-tabla">

  @if ((tipoIdentificacionFacade.responseTipoIdentificacion$ | async).length === 0) {
  <div class="sin-datos">
    <mat-icon>credit_card_off</mat-icon>
    <p>No hay tipos de identificaci\xF3n para listar</p>
    <button class="button-principal" mat-flat-button (click)="openDialog(modal)">
      <mat-icon>add</mat-icon>
      Agregar el primero
    </button>
  </div>
  }

  @if ((tipoIdentificacionFacade.responseTipoIdentificacion$ | async).length > 0) {
  <mat-card class="matCardPersonalizada">
    <mat-card-content>
      <div class="tabla-scroll">
        <table class="tablep" role="table">
          <thead class="theadp">
            <tr class="trp">

              <th class="thp col-acciones">Acciones</th>
              <th class="thp col-numero">Codigo</th>
              <th class="thp">Tipo Identificaci\xF3n</th>
              <th class="thp col-estado">Estado</th>
            </tr>
          </thead>
          <tbody role="rowgroup" class="tbodyp">
            @for (pago of (tipoIdentificacionFacade.responseTipoIdentificacion$ | async) | search: this.buscar?.value:
            ['Reparto'] | slice:
            desde : hasta; track pago) {
            <tr class="trp" role="row">
              <td data-title="Acciones" class="tdp col-acciones">
                <div class="acciones">
                  <button class="buttonSecundary" mat-mini-fab (click)="openDialog(modal, pago)" matTooltip="Editar">
                    <mat-icon>edit</mat-icon>
                  </button>
                  <button class="btnDelete" mat-mini-fab (click)="Eliminar(pago)" matTooltip="Eliminar">
                    <mat-icon>delete</mat-icon>
                  </button>
                </div>
              </td>
              <td data-title="C\xF3digo" class="tdp col-numero">{{ pago.Id }}</td>
              <td data-title="Reparto" class="tdp td-fuerte">{{ pago.TipoIdentificacion }}</td>
              <td data-title="Estado" class="tdp col-estado">
                <span class="pill" [class.pill-activo]="pago.Estado === 'Activo'"
                  [class.pill-inactivo]="pago.Estado !== 'Activo'">
                  {{ pago.Estado }}
                </span>
              </td>
            </tr>
            }
          </tbody>
        </table>
      </div>

      <mat-paginator [length]="(tipoIdentificacionFacade.responseTipoIdentificacion$ | async).length"
        [pageSize]="pageSize" (page)="next($event)">
      </mat-paginator>
    </mat-card-content>
  </mat-card>
  }

</div>
}
<ng-template #modal>
  <div class="modal-augajo">
    <div class="modal-header">
      <span class="modal-titulo">@if(formTipoIdentificacion.get('id').value == 0){Agregar Tipo Identificaci\xF3n}
        @else{Actualizar Tipo Identificaci\xF3n}</span>
      <button mat-icon-button mat-dialog-close class="modal-cerrar" aria-label="Cerrar">
        <mat-icon>close</mat-icon>
      </button>
    </div>

    <mat-dialog-content class="mat-typography modal-body">
      <form [formGroup]="formTipoIdentificacion">
        <div class="row">
          <mat-form-field appearance="outline" class="col-md-12 mt-2">
            <mat-label>Tipo Identificaci\xF3n </mat-label>
            <input matInput placeholder="Tipo Identificaci\xF3n" formControlName="tipoIdentificacion" required>
          </mat-form-field>
        </div>
      </form>
    </mat-dialog-content>

    <div class="acciones-modal">
      <button mat-stroked-button mat-dialog-close>Cancelar</button>
      <button class="button-principal" mat-flat-button (click)="Guardar()">Guardar</button>
    </div>
  </div>
</ng-template>` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TipoIdentificacionComponent, { className: "TipoIdentificacionComponent", filePath: "src/app/modules/administracion/tipo-identificacion/tipo-identificacion.component.ts", lineNumber: 15 });
})();

// src/app/modules/administracion/tipo-pedido/tipo-pedido.component.ts
var import_sweetalert27 = __toESM(require_sweetalert2_all());

// src/app/modules/administracion/tipo-pedido/tipo-pedido-facade.service.ts
var TipoPedidoFacadeService = class _TipoPedidoFacadeService {
  constructor() {
    this.dataApi = inject(DataApiService);
    this._mensajesHttp = inject(MensajesHttpService);
    this.Cargando$ = new BehaviorSubject(false);
    this.responseCargando$ = this.Cargando$.asObservable();
    this.TipoPedidos$ = new BehaviorSubject([]);
    this.responseTipoPedidos$ = this.TipoPedidos$.asObservable();
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
  InsertarTipoPedidos(params, respuesta) {
    this.Cargando$.next(true);
    this.TipoPedidos$.next([]);
    const request$ = this.dataApi.PostDataApi(`mantenimiento/tipoPedido/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.TipoPedidos$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al insertar el tipo de pedido", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  ActualizarTipoPedidos(params, respuesta) {
    this.Cargando$.next(true);
    this.TipoPedidos$.next([]);
    const request$ = this.dataApi.PutDataApi(`mantenimiento/tipoPedido/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.TipoPedidos$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al actualizar el tipo de pedido", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  EliminarTipoPedidos(params, respuesta) {
    this.Cargando$.next(true);
    this.TipoPedidos$.next([]);
    const request$ = this.dataApi.DeleteDataApiUrl(`mantenimiento/tipoPedido/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.TipoPedidos$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al eliminar el tipo de pedido", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  static {
    this.\u0275fac = function TipoPedidoFacadeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TipoPedidoFacadeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TipoPedidoFacadeService, factory: _TipoPedidoFacadeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TipoPedidoFacadeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/services/paginator.service.ts
var PaginatorService = class _PaginatorService {
  constructor() {
    this.pageSize = 10;
    this.page = 0;
    this.pageIndex = 0;
    this.desde = 0;
    this.hasta = 10;
    this.reiniciarVariables();
  }
  //Paginación de la tabla
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
  reiniciarVariables() {
    this.desde = 0;
    this.hasta = 10;
    this.pageIndex = 0;
  }
  static {
    this.\u0275fac = function PaginatorService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaginatorService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaginatorService, factory: _PaginatorService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginatorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/modules/administracion/tipo-pedido/tipo-pedido.component.ts
var _c07 = () => ["/dashboard"];
var _c17 = () => ["TipoPedido"];
function TipoPedidoComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "app-loading", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("data", 4);
  }
}
function TipoPedidoComponent_Conditional_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "mat-icon");
    \u0275\u0275text(2, "credit_card_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No hay tipos de pedidos para listar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 14);
    \u0275\u0275listener("click", function TipoPedidoComponent_Conditional_27_Conditional_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      const modal_r2 = \u0275\u0275reference(30);
      return \u0275\u0275resetView(ctx_r3.openDialog(modal_r2));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Agregar el primero ");
    \u0275\u0275elementEnd()();
  }
}
function TipoPedidoComponent_Conditional_27_Conditional_3_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 28)(1, "td", 30)(2, "div", 31)(3, "button", 32);
    \u0275\u0275listener("click", function TipoPedidoComponent_Conditional_27_Conditional_3_For_18_Template_button_click_3_listener() {
      const pedido_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      const modal_r2 = \u0275\u0275reference(30);
      return \u0275\u0275resetView(ctx_r3.openDialog(modal_r2, pedido_r7));
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 33);
    \u0275\u0275listener("click", function TipoPedidoComponent_Conditional_27_Conditional_3_For_18_Template_button_click_6_listener() {
      const pedido_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.Eliminar(pedido_r7));
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "delete");
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
    \u0275\u0275elementStart(15, "td", 37)(16, "span", 38);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pedido_r7 = ctx.$implicit;
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(pedido_r7.Id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pedido_r7.TipoPedido);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pedido_r7.Descripcion);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pill-activo", pedido_r7.Estado === "Activo")("pill-inactivo", pedido_r7.Estado !== "Activo");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pedido_r7.Estado, " ");
  }
}
function TipoPedidoComponent_Conditional_27_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 18)(1, "mat-card-content")(2, "div", 19)(3, "table", 20)(4, "thead", 21)(5, "tr", 22)(6, "th", 23);
    \u0275\u0275text(7, "Acciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 24);
    \u0275\u0275text(9, "Codigo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 25);
    \u0275\u0275text(11, "Tipo Pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 25);
    \u0275\u0275text(13, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 26);
    \u0275\u0275text(15, "Estado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody", 27);
    \u0275\u0275repeaterCreate(17, TipoPedidoComponent_Conditional_27_Conditional_3_For_18_Template, 18, 8, "tr", 28, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275pipe(20, "search");
    \u0275\u0275pipe(21, "slice");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "mat-paginator", 29);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275listener("page", function TipoPedidoComponent_Conditional_27_Conditional_3_Template_mat_paginator_page_22_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.next($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(21, 8, \u0275\u0275pipeBind3(20, 4, \u0275\u0275pipeBind1(19, 2, ctx_r3.tipoPedidoFacade.responseTipoPedidos$), ctx_r3.buscar == null ? null : ctx_r3.buscar.value, \u0275\u0275pureFunction0(14, _c17)), ctx_r3.desde, ctx_r3.hasta));
    \u0275\u0275advance(5);
    \u0275\u0275property("length", \u0275\u0275pipeBind1(23, 12, ctx_r3.tipoPedidoFacade.responseTipoPedidos$).length)("pageSize", ctx_r3.pageSize);
  }
}
function TipoPedidoComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275conditionalCreate(1, TipoPedidoComponent_Conditional_27_Conditional_1_Template, 9, 0, "div", 17);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275conditionalCreate(3, TipoPedidoComponent_Conditional_27_Conditional_3_Template, 24, 15, "mat-card", 18);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275\u0275pipeBind1(2, 2, ctx_r3.tipoPedidoFacade.responseTipoPedidos$).length === 0 ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(4, 4, ctx_r3.tipoPedidoFacade.responseTipoPedidos$).length > 0 ? 3 : -1);
  }
}
function TipoPedidoComponent_ng_template_29_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "Agregar Tipo de Pedido");
  }
}
function TipoPedidoComponent_ng_template_29_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "Actualizar Tipo de Pedido");
  }
}
function TipoPedidoComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40)(2, "span", 41);
    \u0275\u0275conditionalCreate(3, TipoPedidoComponent_ng_template_29_Conditional_3_Template, 1, 0)(4, TipoPedidoComponent_ng_template_29_Conditional_4_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 42)(6, "mat-icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "mat-dialog-content", 43)(9, "form", 44)(10, "div", 45)(11, "mat-form-field", 46)(12, "mat-label");
    \u0275\u0275text(13, "Tipo de pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-form-field", 46)(16, "mat-label");
    \u0275\u0275text(17, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "textarea", 48);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 49)(20, "button", 50);
    \u0275\u0275text(21, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 14);
    \u0275\u0275listener("click", function TipoPedidoComponent_ng_template_29_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.Guardar());
    });
    \u0275\u0275text(23, "Guardar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.formTipoPedido.get("id").value == 0 ? 3 : 4);
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r3.formTipoPedido);
  }
}
var TipoPedidoComponent = class _TipoPedidoComponent {
  //El alias del FACADE debe ir en el HTML 
  constructor(tipoPedidoFacade, paginatorService, dialog, toast) {
    this.tipoPedidoFacade = tipoPedidoFacade;
    this.paginatorService = paginatorService;
    this.dialog = dialog;
    this.toast = toast;
    this.buscar = new FormControl("");
    this.pageSize = 10;
    this.page = 0;
    this.pageIndex = 0;
    this.desde = 0;
    this.hasta = 10;
    this.tipoPedidoFacade.MostrarTipoPedidos("0");
  }
  ngOnInit() {
  }
  //Modal
  openDialog(template, params) {
    const dialogRef = this.dialog.open(template, {
      panelClass: "app-full-bleed-dialog",
      //Agregar una clase ccs al dialogo
      disableClose: true
    });
    this.formTipoPedido = new FormGroup({
      //Valores de front para insertar tipo de pedido
      id: new FormControl(params?.Id || "0"),
      tipoPedido: new FormControl(params?.TipoPedido || "", [Validators.required]),
      descripcion: new FormControl(params?.Descripcion || ""),
      usuario: new FormControl("ymunoz"),
      idEstado: new FormControl(params?.IdEstado || "")
    });
  }
  Guardar() {
    if (this.formTipoPedido.invalid) {
      this.toast.mensajeWarning("Es requerido ingresar los campos validos", "");
      this.formTipoPedido.markAllAsTouched();
      return;
    }
    if (this.formTipoPedido.get("id").value === "0") {
      this.tipoPedidoFacade.InsertarTipoPedidos(this.formTipoPedido.value, (respuesta) => {
        this.tipoPedidoFacade.MostrarTipoPedidos("0");
        this.dialog.closeAll();
      });
    } else {
      this.tipoPedidoFacade.ActualizarTipoPedidos(this.formTipoPedido.value, (respuesta) => {
        this.tipoPedidoFacade.MostrarTipoPedidos("0");
        this.dialog.closeAll();
      });
    }
  }
  Eliminar(params) {
    import_sweetalert27.default.fire({
      title: "Confirmaci\xF3n",
      html: ` <p> \xBFEsta seguro quiere inhabilitar el Tipo de Pedido <b>${params.TipoPedido}</b>? </p>`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#003399",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.tipoPedidoFacade.EliminarTipoPedidos(params.Id, (respuesta) => {
          this.tipoPedidoFacade.MostrarTipoPedidos("0");
        });
      }
    });
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
  static {
    this.\u0275fac = function TipoPedidoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TipoPedidoComponent)(\u0275\u0275directiveInject(TipoPedidoFacadeService), \u0275\u0275directiveInject(PaginatorService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(ToastrServiceLocal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TipoPedidoComponent, selectors: [["app-tipo-pedido"]], standalone: false, decls: 31, vars: 9, consts: [["modal", ""], [1, "navigation"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "activo"], [1, "content"], [1, "titleNav"], [1, "subtitulo"], [1, "action"], ["appearance", "outline", 1, "buscador"], ["matInput", "", "type", "text", "placeholder", "Buscar tipo pedido\u2026", "autocomplete", "off", 3, "formControl"], ["matPrefix", ""], ["mat-flat-button", "", 1, "button-principal", 3, "click"], [1, "contenedor-tabla"], [3, "data"], [1, "sin-datos"], [1, "matCardPersonalizada"], [1, "tabla-scroll"], ["role", "table", 1, "tablep"], [1, "theadp"], [1, "trp"], [1, "thp", "col-acciones"], [1, "thp", "col-numero"], [1, "thp"], [1, "thp", "col-estado"], ["role", "rowgroup", 1, "tbodyp"], ["role", "row", 1, "trp"], [3, "page", "length", "pageSize"], ["data-title", "Acciones", 1, "tdp", "col-acciones"], [1, "acciones"], ["mat-mini-fab", "", "matTooltip", "Editar", 1, "buttonSecundary", 3, "click"], ["mat-mini-fab", "", "matTooltip", "Eliminar", 1, "btnDelete", 3, "click"], ["data-title", "C\xF3digo", 1, "tdp", "col-numero"], ["data-title", "Tipo Pedido", 1, "tdp", "td-fuerte"], ["data-title", "Descripci\xF3n", 1, "tdp"], ["data-title", "Estado", 1, "tdp", "col-estado"], [1, "pill"], [1, "modal-augajo"], [1, "modal-header"], [1, "modal-titulo"], ["mat-icon-button", "", "mat-dialog-close", "", "aria-label", "Cerrar", 1, "modal-cerrar"], [1, "mat-typography", "modal-body"], [3, "formGroup"], [1, "row"], ["appearance", "outline", 1, "col-md-12", "mt-2"], ["matInput", "", "placeholder", "Tipo de pedido", "formControlName", "tipoPedido", "required", ""], ["matInput", "", "placeholder", "Descripcion", "formControlName", "descripcion", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "10", "autocomplete", "off"], [1, "acciones-modal"], ["mat-stroked-button", "", "mat-dialog-close", ""]], template: function TipoPedidoComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "nav", 2)(2, "ol", 3)(3, "li", 4)(4, "a", 5);
        \u0275\u0275text(5, "Inicio");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "li", 6);
        \u0275\u0275text(7, "Tipos Pedidos");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "h2");
        \u0275\u0275text(11, "Tipos Pedidos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 9);
        \u0275\u0275text(13, "Gesti\xF3n de lo tipos de pedidos");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 10)(15, "mat-form-field", 11)(16, "mat-label");
        \u0275\u0275text(17, "Buscar");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 12);
        \u0275\u0275elementStart(19, "mat-icon", 13);
        \u0275\u0275text(20, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "button", 14);
        \u0275\u0275listener("click", function TipoPedidoComponent_Template_button_click_21_listener() {
          \u0275\u0275restoreView(_r1);
          const modal_r2 = \u0275\u0275reference(30);
          return \u0275\u0275resetView(ctx.openDialog(modal_r2));
        });
        \u0275\u0275elementStart(22, "mat-icon");
        \u0275\u0275text(23, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " Nuevo ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(25, TipoPedidoComponent_Conditional_25_Template, 2, 1, "div", 15);
        \u0275\u0275pipe(26, "async");
        \u0275\u0275conditionalCreate(27, TipoPedidoComponent_Conditional_27_Template, 5, 6, "div", 15);
        \u0275\u0275pipe(28, "async");
        \u0275\u0275template(29, TipoPedidoComponent_ng_template_29_Template, 24, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c07));
        \u0275\u0275advance(14);
        \u0275\u0275property("formControl", ctx.buscar);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(\u0275\u0275pipeBind1(26, 4, ctx.tipoPedidoFacade.responseCargando$) ? 25 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!\u0275\u0275pipeBind1(28, 6, ctx.tipoPedidoFacade.responseCargando$) ? 27 : -1);
      }
    }, dependencies: [RouterLink, MatFormField, MatLabel, MatPrefix, MatInput, CdkTextareaAutosize, MatIcon, MatButton, MatMiniFabButton, MatIconButton, MatDialogClose, MatDialogContent, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormControlDirective, FormGroupDirective, FormControlName, LoadingComponent, MatCard, MatCardContent, MatPaginator, MatTooltip, AsyncPipe, SlicePipe, SearchPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TipoPedidoComponent, [{
    type: Component,
    args: [{ selector: "app-tipo-pedido", standalone: false, template: `
<div class="navigation">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a [routerLink]="['/dashboard']">Inicio</a></li>
      <li class="breadcrumb-item activo">Tipos Pedidos</li>
    </ol>
  </nav>

  <div class="content">
    <div class="titleNav">
      <h2>Tipos Pedidos</h2>
      <div class="subtitulo">Gesti\xF3n de lo tipos de pedidos</div>
    </div>

    <div class="action">
      <mat-form-field appearance="outline" class="buscador">
        <mat-label>Buscar</mat-label>
        <input matInput type="text" [formControl]="buscar" placeholder="Buscar tipo pedido\u2026" autocomplete="off">
        <mat-icon matPrefix>search</mat-icon>
      </mat-form-field>
      <button class="button-principal" mat-flat-button (click)="openDialog(modal)">
        <mat-icon>add</mat-icon>
        Nuevo
      </button>
    </div>
  </div>
</div>

@if ((tipoPedidoFacade.responseCargando$ | async)) {
<div class="contenedor-tabla">
  <app-loading [data]="4"></app-loading>
</div>
}

@if (!(tipoPedidoFacade.responseCargando$ | async)) {
<div class="contenedor-tabla">

  @if ((tipoPedidoFacade.responseTipoPedidos$ | async).length === 0) {
  <div class="sin-datos">
    <mat-icon>credit_card_off</mat-icon>
    <p>No hay tipos de pedidos para listar</p>
    <button class="button-principal" mat-flat-button (click)="openDialog(modal)">
      <mat-icon>add</mat-icon>
      Agregar el primero
    </button>
  </div>
  }

  @if ((tipoPedidoFacade.responseTipoPedidos$ | async).length > 0) {
  <mat-card class="matCardPersonalizada">
    <mat-card-content>
      <div class="tabla-scroll">
        <table class="tablep" role="table">
          <thead class="theadp">
            <tr class="trp">

              <th class="thp col-acciones">Acciones</th>
              <th class="thp col-numero">Codigo</th>
              <th class="thp">Tipo Pedido</th>
              <th class="thp">Descripci\xF3n</th>
              <th class="thp col-estado">Estado</th>
            </tr>
          </thead>
          <tbody role="rowgroup" class="tbodyp">
            @for (pedido of (tipoPedidoFacade.responseTipoPedidos$ | async) | search: this.buscar?.value:
            ['TipoPedido'] | slice:
            desde : hasta; track pedido) {
            <tr class="trp" role="row">
              <td data-title="Acciones" class="tdp col-acciones">
                <div class="acciones">
                  <button class="buttonSecundary" mat-mini-fab (click)="openDialog(modal, pedido)" matTooltip="Editar">
                    <mat-icon>edit</mat-icon>
                  </button>
                  <button class="btnDelete" mat-mini-fab (click)="Eliminar(pedido)" matTooltip="Eliminar">
                    <mat-icon>delete</mat-icon>
                  </button>
                </div>
              </td>
              <td data-title="C\xF3digo" class="tdp col-numero">{{ pedido.Id }}</td>
              <td data-title="Tipo Pedido" class="tdp td-fuerte">{{ pedido.TipoPedido }}</td>
              <td data-title="Descripci\xF3n" class="tdp">{{ pedido.Descripcion }}</td>

              <td data-title="Estado" class="tdp col-estado">
                <span class="pill" [class.pill-activo]="pedido.Estado === 'Activo'"
                  [class.pill-inactivo]="pedido.Estado !== 'Activo'">
                  {{ pedido.Estado }}
                </span>
              </td>
            </tr>
            }
          </tbody>
        </table>
      </div>

      <mat-paginator [length]="(tipoPedidoFacade.responseTipoPedidos$ | async).length" [pageSize]="pageSize"
        (page)="next($event)">
      </mat-paginator>
    </mat-card-content>
  </mat-card>
  }

</div>
}
<ng-template #modal>
  <div class="modal-augajo">
    <div class="modal-header">
      <span class="modal-titulo">@if(formTipoPedido.get('id').value == 0){Agregar Tipo de Pedido}
        @else{Actualizar Tipo de Pedido}</span>
      <button mat-icon-button mat-dialog-close class="modal-cerrar" aria-label="Cerrar">
        <mat-icon>close</mat-icon>
      </button>
    </div>

    <mat-dialog-content class="mat-typography modal-body">
      <form [formGroup]="formTipoPedido">
        <div class="row">
          <mat-form-field appearance="outline" class="col-md-12 mt-2">
            <mat-label>Tipo de pedido</mat-label>
            <input matInput placeholder="Tipo de pedido" formControlName="tipoPedido" required>
          </mat-form-field>

          <mat-form-field appearance="outline" class="col-md-12 mt-2">
            <mat-label>Descripci\xF3n</mat-label>
            <textarea matInput placeholder="Descripcion" formControlName="descripcion" cdkTextareaAutosize
              cdkAutosizeMinRows="10" autocomplete="off"></textarea>
          </mat-form-field>
        </div>
      </form>
    </mat-dialog-content>

    <div class="acciones-modal">
      <button mat-stroked-button mat-dialog-close>Cancelar</button>
      <button class="button-principal" mat-flat-button (click)="Guardar()">Guardar</button>
    </div>
  </div>
</ng-template>` }]
  }], () => [{ type: TipoPedidoFacadeService }, { type: PaginatorService }, { type: MatDialog }, { type: ToastrServiceLocal }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TipoPedidoComponent, { className: "TipoPedidoComponent", filePath: "src/app/modules/administracion/tipo-pedido/tipo-pedido.component.ts", lineNumber: 17 });
})();

// src/app/modules/administracion/clientes/clientes-facade.service.ts
var ClientesFacadeService = class _ClientesFacadeService {
  constructor() {
    this.dataApi = inject(DataApiService);
    this._mensajesHttp = inject(MensajesHttpService);
    this.Cargando$ = new BehaviorSubject(false);
    this.responseCargando$ = this.Cargando$.asObservable();
    this.Clientes$ = new BehaviorSubject([]);
    this.responseClientes$ = this.Clientes$.asObservable();
    this.TipoIdentificacion$ = new BehaviorSubject([]);
    this.responseTipoIdentificacion$ = this.TipoIdentificacion$.asObservable();
    this.TipoCliente$ = new BehaviorSubject([]);
    this.responseTipoCliente$ = this.TipoCliente$.asObservable();
    this.EstadoClientes$ = new BehaviorSubject([]);
    this.responseEstadoClientes$ = this.EstadoClientes$.asObservable();
  }
  MostrarClientes(params) {
    this.Cargando$.next(true);
    this.Clientes$.next([]);
    const request$ = this.dataApi.GetDataApi(`administracion/v1/clientes/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      this.Clientes$.next(result.data.Table0);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.Clientes$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar los Clientes", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  InsertarClientes(params, respuesta) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.PostDataApi(`administracion/v1/clientes/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al insertar el Cliente", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  ActualizarClientes(params, respuesta) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.PutDataApi(`administracion/v1/clientes/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al actualizar el Cliente", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  MostrarTipoIdentificacion(params) {
    this.Cargando$.next(true);
    this.TipoIdentificacion$.next([]);
    const request$ = this.dataApi.GetDataApi(`personas/tipoIdentificacion/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      this.TipoIdentificacion$.next(result.data.Table0);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.TipoIdentificacion$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar los tipos de identificaci\xF3n", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  MostrarTipoCliente(params) {
    this.Cargando$.next(true);
    this.TipoCliente$.next([]);
    const request$ = this.dataApi.GetDataApi(`administracion/v1/tipo-cliente/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      this.TipoCliente$.next(result.data.Table0);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.TipoCliente$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar los tipos de cliente", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  MostrarEstadoCliente(params) {
    this.Cargando$.next(true);
    this.EstadoClientes$.next([]);
    const request$ = this.dataApi.GetDataApi(`administracion/v1/estado-cliente/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      this.EstadoClientes$.next(result.data.Table0);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.EstadoClientes$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar los tipos de estados de clientes", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  static {
    this.\u0275fac = function ClientesFacadeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClientesFacadeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ClientesFacadeService, factory: _ClientesFacadeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientesFacadeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/modules/administracion/clientes/clientes.component.ts
var import_sweetalert28 = __toESM(require_sweetalert2_all());
var _c08 = () => ["/dashboard"];
var _c18 = () => ["id", "numero_documento", "TipoIdentificacion", "nombre_completo"];
function ClientesComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "app-loading", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("data", 4);
  }
}
function ClientesComponent_Conditional_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "mat-icon");
    \u0275\u0275text(2, "credit_card_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No hay clientes para listar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 15);
    \u0275\u0275listener("click", function ClientesComponent_Conditional_27_Conditional_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      const modal_r2 = \u0275\u0275reference(30);
      return \u0275\u0275resetView(ctx_r3.openDialog(modal_r2));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Agregar el primero ");
    \u0275\u0275elementEnd()();
  }
}
function ClientesComponent_Conditional_27_Conditional_3_For_24_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const cliente_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" Tel: ", cliente_r7 == null ? null : cliente_r7.telefono, " ");
  }
}
function ClientesComponent_Conditional_27_Conditional_3_For_24_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const cliente_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" Correo: ", cliente_r7 == null ? null : cliente_r7.correo, " ");
  }
}
function ClientesComponent_Conditional_27_Conditional_3_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 29)(1, "td", 31)(2, "div", 32)(3, "button", 33);
    \u0275\u0275listener("click", function ClientesComponent_Conditional_27_Conditional_3_For_24_Template_button_click_3_listener() {
      const cliente_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      const modal_r2 = \u0275\u0275reference(30);
      return \u0275\u0275resetView(ctx_r3.openDialog(modal_r2, cliente_r7));
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 34);
    \u0275\u0275listener("click", function ClientesComponent_Conditional_27_Conditional_3_For_24_Template_button_click_6_listener() {
      const cliente_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.Eliminar(cliente_r7));
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "td", 35);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 36);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 37);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 38);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 39);
    \u0275\u0275conditionalCreate(18, ClientesComponent_Conditional_27_Conditional_3_For_24_Conditional_18_Template, 1, 1);
    \u0275\u0275conditionalCreate(19, ClientesComponent_Conditional_27_Conditional_3_For_24_Conditional_19_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 40);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 41);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cliente_r7 = ctx.$implicit;
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(cliente_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cliente_r7.numero_documento);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", cliente_r7.TipoIdentificacion, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cliente_r7.nombre_completo);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((cliente_r7 == null ? null : cliente_r7.telefono) || cliente_r7.telefono != "" ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((cliente_r7 == null ? null : cliente_r7.correo) || cliente_r7.correo != "" ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cliente_r7.tipo_cliente);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", cliente_r7.estado_cliente, " ");
  }
}
function ClientesComponent_Conditional_27_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 19)(1, "mat-card-content")(2, "div", 20)(3, "table", 21)(4, "thead", 22)(5, "tr", 23)(6, "th", 24);
    \u0275\u0275text(7, "Acciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 25);
    \u0275\u0275text(9, "Codigo Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 26);
    \u0275\u0275text(11, "Identificaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 26);
    \u0275\u0275text(13, "Tipo Identificaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 26);
    \u0275\u0275text(15, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 26);
    \u0275\u0275text(17, "Contacto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 26);
    \u0275\u0275text(19, "Tipo CLiente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 27);
    \u0275\u0275text(21, "Estado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody", 28);
    \u0275\u0275repeaterCreate(23, ClientesComponent_Conditional_27_Conditional_3_For_24_Template, 24, 8, "tr", 29, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(25, "async");
    \u0275\u0275pipe(26, "search");
    \u0275\u0275pipe(27, "slice");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "mat-paginator", 30);
    \u0275\u0275pipe(29, "async");
    \u0275\u0275listener("page", function ClientesComponent_Conditional_27_Conditional_3_Template_mat_paginator_page_28_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.next($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(23);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(27, 8, \u0275\u0275pipeBind3(26, 4, \u0275\u0275pipeBind1(25, 2, ctx_r3.clientesFacade.responseClientes$), ctx_r3.buscar == null ? null : ctx_r3.buscar.value, \u0275\u0275pureFunction0(14, _c18)), ctx_r3.desde, ctx_r3.hasta));
    \u0275\u0275advance(5);
    \u0275\u0275property("length", \u0275\u0275pipeBind1(29, 12, ctx_r3.clientesFacade.responseClientes$).length)("pageSize", ctx_r3.pageSize);
  }
}
function ClientesComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275conditionalCreate(1, ClientesComponent_Conditional_27_Conditional_1_Template, 9, 0, "div", 18);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275conditionalCreate(3, ClientesComponent_Conditional_27_Conditional_3_Template, 30, 15, "mat-card", 19);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275\u0275pipeBind1(2, 2, ctx_r3.clientesFacade.responseClientes$).length === 0 ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(4, 4, ctx_r3.clientesFacade.responseClientes$).length > 0 ? 3 : -1);
  }
}
function ClientesComponent_ng_template_29_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Actualizar Cliente ");
  }
}
function ClientesComponent_ng_template_29_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Nuevo Cliente ");
  }
}
function ClientesComponent_ng_template_29_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r8 = ctx.$implicit;
    \u0275\u0275property("value", t_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r8.tipo_cliente);
  }
}
function ClientesComponent_ng_template_29_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r9 = ctx.$implicit;
    \u0275\u0275property("value", t_r9.Id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r9.TipoIdentificacion);
  }
}
function ClientesComponent_ng_template_29_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 57)(1, "mat-label");
    \u0275\u0275text(2, "Identificaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 50)(5, "mat-label");
    \u0275\u0275text(6, "Primer Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-form-field", 50)(9, "mat-label");
    \u0275\u0275text(10, "Segundo Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-form-field", 50)(13, "mat-label");
    \u0275\u0275text(14, "Primer Apellido");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-form-field", 50)(17, "mat-label");
    \u0275\u0275text(18, "Segundo Apellido");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-form-field", 50)(21, "mat-label");
    \u0275\u0275text(22, "Fecha Nacimiento");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 69);
    \u0275\u0275elementStart(24, "mat-hint");
    \u0275\u0275text(25, "MM/DD/YYYY");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "mat-datepicker-toggle", 70)(27, "mat-datepicker", null, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const picker_r10 = \u0275\u0275reference(28);
    \u0275\u0275advance(23);
    \u0275\u0275property("matDatepicker", picker_r10);
    \u0275\u0275advance(3);
    \u0275\u0275property("for", picker_r10);
  }
}
function ClientesComponent_ng_template_29_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 57)(1, "mat-label");
    \u0275\u0275text(2, "Numero Documento");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 57)(5, "mat-label");
    \u0275\u0275text(6, "Nombre Comercial");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-form-field", 57)(9, "mat-label");
    \u0275\u0275text(10, "Representante Legal");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-form-field", 57)(13, "mat-label");
    \u0275\u0275text(14, "Razon Social");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 74);
    \u0275\u0275elementEnd();
  }
}
function ClientesComponent_ng_template_29_For_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r11 = ctx.$implicit;
    \u0275\u0275property("value", t_r11.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r11.estado_cliente);
  }
}
function ClientesComponent_ng_template_29_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function ClientesComponent_ng_template_29_Conditional_59_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.Guardar());
    });
    \u0275\u0275text(1, "Guardar");
    \u0275\u0275elementEnd();
  }
}
function ClientesComponent_ng_template_29_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 63);
  }
}
function ClientesComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "span", 44);
    \u0275\u0275conditionalCreate(3, ClientesComponent_ng_template_29_Conditional_3_Template, 1, 0)(4, ClientesComponent_ng_template_29_Conditional_4_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 45)(6, "mat-icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "mat-dialog-content", 46)(9, "form", 47)(10, "div", 48);
    \u0275\u0275text(11, "Informaci\xF3n Personal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 49)(13, "mat-form-field", 50)(14, "mat-label");
    \u0275\u0275text(15, "Tipo Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-select", 51);
    \u0275\u0275repeaterCreate(17, ClientesComponent_ng_template_29_For_18_Template, 2, 2, "mat-option", 52, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "mat-form-field", 50)(21, "mat-label");
    \u0275\u0275text(22, "Tipo Identificaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-select", 53);
    \u0275\u0275repeaterCreate(24, ClientesComponent_ng_template_29_For_25_Template, 2, 2, "mat-option", 52, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(26, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(27, ClientesComponent_ng_template_29_Conditional_27_Template, 29, 2)(28, ClientesComponent_ng_template_29_Conditional_28_Template, 16, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 48);
    \u0275\u0275text(30, "Informaci\xF3n Contacto ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 49)(32, "mat-form-field", 50)(33, "mat-label");
    \u0275\u0275text(34, "Correo");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "mat-form-field", 50)(37, "mat-label");
    \u0275\u0275text(38, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "mat-form-field", 50)(41, "mat-label");
    \u0275\u0275text(42, "Ciudad");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "input", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "mat-form-field", 57)(45, "mat-label");
    \u0275\u0275text(46, "Direcci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "textarea", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 49)(49, "mat-form-field", 50)(50, "mat-label");
    \u0275\u0275text(51, "Estado Cliente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "mat-select", 59);
    \u0275\u0275repeaterCreate(53, ClientesComponent_ng_template_29_For_54_Template, 2, 2, "mat-option", 52, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(55, "async");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(56, "div", 60)(57, "button", 61);
    \u0275\u0275text(58, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(59, ClientesComponent_ng_template_29_Conditional_59_Template, 2, 0, "button", 62);
    \u0275\u0275pipe(60, "async");
    \u0275\u0275conditionalCreate(61, ClientesComponent_ng_template_29_Conditional_61_Template, 1, 0, "mat-spinner", 63);
    \u0275\u0275pipe(62, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(((tmp_2_0 = ctx_r3.formClientes.get("id")) == null ? null : tmp_2_0.value) != 0 ? 3 : 4);
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx_r3.formClientes);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(19, 5, ctx_r3.clientesFacade.responseTipoCliente$));
    \u0275\u0275advance(7);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(26, 7, ctx_r3.clientesFacade.responseTipoIdentificacion$));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.formClientes.get("idTipoCliente").value === 1 ? 27 : 28);
    \u0275\u0275advance(26);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(55, 9, ctx_r3.clientesFacade.responseEstadoClientes$));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(60, 11, ctx_r3.clientesFacade.responseCargando$) ? 59 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(62, 13, ctx_r3.clientesFacade.responseCargando$) ? 61 : -1);
  }
}
var ClientesComponent = class _ClientesComponent {
  constructor() {
    this.clientesFacade = inject(ClientesFacadeService);
    this.dialog = inject(MatDialog);
    this.toast = inject(ToastrServiceLocal);
    this.validateForm = inject(ValidateReactiveFormService);
    this.datePipe = inject(DatePipe);
    this.buscar = new FormControl("");
    this.pageSize = 10;
    this.page = 0;
    this.pageIndex = 0;
    this.desde = 0;
    this.hasta = 10;
    this.clientesFacade.MostrarClientes("0");
  }
  ngOnInit() {
  }
  openDialog(template, item) {
    this.clientesFacade.MostrarTipoIdentificacion("0");
    this.clientesFacade.MostrarTipoCliente("0");
    this.clientesFacade.MostrarEstadoCliente("");
    this.formClientes = new FormGroup({
      id: new FormControl(item?.id || 0),
      idTipoCliente: new FormControl(item?.id_tipo_cliente || "", [Validators.required]),
      idTipoIdentificacion: new FormControl(item?.id_tipo_identificacion || "", [Validators.required]),
      numeroDocumento: new FormControl(item?.numero_documento || "", [Validators.required]),
      correo: new FormControl(item?.correo || ""),
      telefono: new FormControl(item?.telefono || ""),
      direccion: new FormControl(item?.direccion || ""),
      ciudad: new FormControl(item?.ciudad || ""),
      primerNombre: new FormControl(item?.primer_nombre || ""),
      segundoNombre: new FormControl(item?.segundo_nombre || ""),
      primerApellido: new FormControl(item?.primer_apellido || ""),
      segundoApellido: new FormControl(item?.segundo_apellido || ""),
      fechaNacimiento: new FormControl(item?.fecha_nacimiento || ""),
      razonSocial: new FormControl(item?.razon_social || ""),
      nombreComercial: new FormControl(item?.nombre_comercial || ""),
      representanteLegal: new FormControl(item?.representante_legal || ""),
      idEstadoCliente: new FormControl(item?.id_estado_cliente || 1)
    });
    this.formClientes.get("idTipoCliente").valueChanges.subscribe((valor) => {
      if (valor) {
        if (valor === 1) {
          this.formClientes.get("primerNombre").setValidators([Validators.required, this.validateForm.validacionUnEspacioSinCaracteres]);
          this.formClientes.get("primerNombre").updateValueAndValidity();
          this.formClientes.get("primerApellido").setValidators([Validators.required, this.validateForm.validacionUnEspacioSinCaracteres]);
          this.formClientes.get("primerApellido").updateValueAndValidity();
        } else {
          this.formClientes.get("primerNombre").clearValidators();
          this.formClientes.get("primerNombre").updateValueAndValidity();
          this.formClientes.get("primerApellido").clearValidators();
          this.formClientes.get("primerApellido").updateValueAndValidity();
          this.formClientes.get("nombreComercial").setValidators([Validators.required, this.validateForm.validacionUnEspacioSinCaracteres]);
          this.formClientes.get("nombreComercial").updateValueAndValidity();
        }
      }
    });
    this.dialog.open(template, {
      panelClass: "app-full-bleed-dialog",
      disableClose: true
    });
  }
  Guardar() {
    console.log(this.formClientes);
    if (this.formClientes.invalid) {
      this.toast.mensajeWarning("Es requerido ingresar los campos marcados como obligatorios", "");
      this.formClientes.markAllAsTouched();
      return;
    }
    if (this.formClientes.get("id").value === 0) {
      this.clientesFacade.InsertarClientes(this.formClientes.value, (respuesta) => {
        if (respuesta.hasError === false) {
          this.toast.mensajeSuccess("Se guardo el cliente con \xE9xito", "");
          this.clientesFacade.MostrarClientes("0");
          this.dialog.closeAll();
        }
      });
    } else {
      this.clientesFacade.ActualizarClientes(this.formClientes.value, (respuesta) => {
        if (respuesta.hasError === false) {
          this.toast.mensajeSuccess("Se actualizo el cliente con \xE9xito", "");
          this.clientesFacade.MostrarClientes("0");
          this.dialog.closeAll();
        }
      });
    }
  }
  Eliminar(params) {
    import_sweetalert28.default.fire({
      title: "Confirmaci\xF3n",
      html: ` <p> \xBFEsta seguro quiere inhabilitar el cliente <b>${params.nombre}</b>? </p>`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#003399",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        params.idEstadoCliente = 2;
        this.clientesFacade.ActualizarClientes(params, () => {
          this.clientesFacade.MostrarClientes("0");
        });
      }
    });
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
  static {
    this.\u0275fac = function ClientesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClientesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientesComponent, selectors: [["app-clientes"]], standalone: false, decls: 31, vars: 9, consts: [["modal", ""], ["picker", ""], [1, "navigation"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "activo"], [1, "content"], [1, "titleNav"], [1, "subtitulo"], [1, "action"], ["appearance", "outline", 1, "buscador"], ["matInput", "", "type", "text", "placeholder", "Buscar cliente\u2026", "autocomplete", "off", 3, "formControl"], ["matPrefix", ""], ["mat-flat-button", "", 1, "button-principal", 3, "click"], [1, "contenedor-tabla"], [3, "data"], [1, "sin-datos"], [1, "matCardPersonalizada"], [1, "tabla-scroll"], ["role", "table", 1, "tablep"], [1, "theadp"], [1, "trp"], [1, "thp", "col-acciones"], [1, "thp", "col-numero"], [1, "thp"], [1, "thp", "col-estado"], ["role", "rowgroup", 1, "tbodyp"], ["role", "row", 1, "trp"], [3, "page", "length", "pageSize"], ["data-title", "Acciones", 1, "tdp", "col-acciones"], [1, "acciones"], ["mat-mini-fab", "", "matTooltip", "Editar", 1, "buttonSecundary", 3, "click"], ["mat-mini-fab", "", "matTooltip", "Eliminar", 1, "btnDelete", 3, "click"], ["data-title", "C\xF3digo", 1, "tdp", "col-numero"], ["data-title", "Identificaci\xF3n", 1, "tdp", "td-fuerte"], ["data-title", "Tipo Identificaci\xF3n", 1, "tdp"], ["data-title", "Nombre", 1, "tdp"], ["data-title", "Contacto", 1, "tdp"], ["data-title", "Tipo CLiente", 1, "tdp"], ["data-title", "Estado", 1, "tdp", "col-estado"], [1, "modal-augajo", "modal-lg"], [1, "modal-header"], [1, "modal-titulo"], ["mat-icon-button", "", "mat-dialog-close", "", "aria-label", "Cerrar", 1, "modal-cerrar"], [1, "mat-typography", "modal-body"], [3, "formGroup"], [1, "seccion-titulo"], [1, "form-grid"], ["appearance", "outline", 1, "campo-6"], ["formControlName", "idTipoCliente", "required", ""], [3, "value"], ["formControlName", "idTipoIdentificacion", "required", ""], ["matInput", "", "type", "email", "placeholder", "Correo", "formControlName", "correo"], ["matInput", "", "placeholder", "Tel\xE9fono", "formControlName", "telefono"], ["matInput", "", "placeholder", "Ciudad", "formControlName", "ciudad"], ["appearance", "outline", 1, "campo-12"], ["matInput", "", "placeholder", "Direcci\xF3n del cliente", "formControlName", "direccion", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "3", "cdkAutosizeMaxRows", "6"], ["formControlName", "idEstadoCliente", "required", ""], [1, "acciones-modal"], ["mat-stroked-button", "", "mat-dialog-close", ""], ["mat-flat-button", "", 1, "button-principal"], ["diameter", "32"], ["matInput", "", "placeholder", "Identificaci\xF3n", "formControlName", "numeroDocumento", "required", ""], ["matInput", "", "placeholder", "Primer Nombre", "formControlName", "primerNombre", "required", ""], ["matInput", "", "placeholder", "Segundo Nombre", "formControlName", "segundoNombre"], ["matInput", "", "placeholder", "Primer Apellido", "formControlName", "primerApellido", "required", ""], ["matInput", "", "placeholder", "Primer Apellido", "formControlName", "segundoApellido"], ["matInput", "", "formControlName", "fechaNacimiento", 3, "matDatepicker"], ["matIconSuffix", "", 3, "for"], ["matInput", "", "placeholder", "Numero Documento", "formControlName", "numeroDocumento", "required", ""], ["matInput", "", "placeholder", "Nombre Comercial", "formControlName", "nombreComercial", "required", ""], ["matInput", "", "placeholder", "Nombre Comercial", "formControlName", "representanteLegal"], ["matInput", "", "placeholder", "Nombre Comercial", "formControlName", "razonSocial"]], template: function ClientesComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "nav", 3)(2, "ol", 4)(3, "li", 5)(4, "a", 6);
        \u0275\u0275text(5, "Inicio");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "li", 7);
        \u0275\u0275text(7, "Clientes");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 8)(9, "div", 9)(10, "h2");
        \u0275\u0275text(11, "Clientes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 10);
        \u0275\u0275text(13, "Gesti\xF3n de los clientes");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 11)(15, "mat-form-field", 12)(16, "mat-label");
        \u0275\u0275text(17, "Buscar");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 13);
        \u0275\u0275elementStart(19, "mat-icon", 14);
        \u0275\u0275text(20, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "button", 15);
        \u0275\u0275listener("click", function ClientesComponent_Template_button_click_21_listener() {
          \u0275\u0275restoreView(_r1);
          const modal_r2 = \u0275\u0275reference(30);
          return \u0275\u0275resetView(ctx.openDialog(modal_r2));
        });
        \u0275\u0275elementStart(22, "mat-icon");
        \u0275\u0275text(23, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " Nuevo ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(25, ClientesComponent_Conditional_25_Template, 2, 1, "div", 16);
        \u0275\u0275pipe(26, "async");
        \u0275\u0275conditionalCreate(27, ClientesComponent_Conditional_27_Template, 5, 6, "div", 16);
        \u0275\u0275pipe(28, "async");
        \u0275\u0275template(29, ClientesComponent_ng_template_29_Template, 63, 15, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c08));
        \u0275\u0275advance(14);
        \u0275\u0275property("formControl", ctx.buscar);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(\u0275\u0275pipeBind1(26, 4, ctx.clientesFacade.responseCargando$) ? 25 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!\u0275\u0275pipeBind1(28, 6, ctx.clientesFacade.responseCargando$) ? 27 : -1);
      }
    }, dependencies: [RouterLink, MatFormField, MatLabel, MatHint, MatPrefix, MatSuffix, MatInput, CdkTextareaAutosize, MatIcon, MatButton, MatMiniFabButton, MatIconButton, MatDialogClose, MatDialogContent, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormControlDirective, FormGroupDirective, FormControlName, LoadingComponent, MatCard, MatCardContent, MatPaginator, MatSelect, MatOption, MatDatepicker, MatDatepickerInput, MatDatepickerToggle, MatTooltip, AsyncPipe, SlicePipe, SearchPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientesComponent, [{
    type: Component,
    args: [{ selector: "app-clientes", standalone: false, template: `<div class="navigation">\r
    <nav aria-label="breadcrumb">\r
        <ol class="breadcrumb">\r
            <li class="breadcrumb-item"><a [routerLink]="['/dashboard']">Inicio</a></li>\r
            <li class="breadcrumb-item activo">Clientes</li>\r
        </ol>\r
    </nav>\r
\r
    <div class="content">\r
        <div class="titleNav">\r
            <h2>Clientes</h2>\r
            <div class="subtitulo">Gesti\xF3n de los clientes</div>\r
        </div>\r
\r
        <div class="action">\r
            <mat-form-field appearance="outline" class="buscador">\r
                <mat-label>Buscar</mat-label>\r
                <input matInput type="text" [formControl]="buscar" placeholder="Buscar cliente\u2026" autocomplete="off">\r
                <mat-icon matPrefix>search</mat-icon>\r
            </mat-form-field>\r
            <button class="button-principal" mat-flat-button (click)="openDialog(modal)">\r
                <mat-icon>add</mat-icon>\r
                Nuevo\r
            </button>\r
        </div>\r
    </div>\r
</div>\r
\r
@if ((clientesFacade.responseCargando$ | async)) {\r
<div class="contenedor-tabla">\r
    <app-loading [data]="4"></app-loading>\r
</div>\r
}\r
\r
@if (!(clientesFacade.responseCargando$ | async)) {\r
<div class="contenedor-tabla">\r
\r
    @if ((clientesFacade.responseClientes$ | async).length === 0) {\r
    <div class="sin-datos">\r
        <mat-icon>credit_card_off</mat-icon>\r
        <p>No hay clientes para listar</p>\r
        <button class="button-principal" mat-flat-button (click)="openDialog(modal)">\r
            <mat-icon>add</mat-icon>\r
            Agregar el primero\r
        </button>\r
    </div>\r
    }\r
\r
    @if ((clientesFacade.responseClientes$ | async).length > 0) {\r
    <mat-card class="matCardPersonalizada">\r
        <mat-card-content>\r
            <div class="tabla-scroll">\r
                <table class="tablep" role="table">\r
                    <thead class="theadp">\r
                        <tr class="trp">\r
                            <th class="thp col-acciones">Acciones</th>\r
                            <th class="thp col-numero">Codigo Cliente</th>\r
                            <th class="thp">Identificaci\xF3n</th>\r
                            <th class="thp">Tipo Identificaci\xF3n</th>\r
                            <th class="thp">Nombre</th>\r
                            <th class="thp">Contacto</th>\r
                            <th class="thp">Tipo CLiente</th>\r
                            <th class="thp col-estado">Estado</th>\r
                        </tr>\r
                    </thead>\r
                    <tbody role="rowgroup" class="tbodyp">\r
                        @for (cliente of (clientesFacade.responseClientes$ | async) | search: this.buscar?.value: ['id',\r
                        'numero_documento', 'TipoIdentificacion', 'nombre_completo' ] | slice: desde : hasta; track\r
                        cliente) {\r
                        <tr class="trp" role="row">\r
                            <td data-title="Acciones" class="tdp col-acciones">\r
                                <div class="acciones">\r
                                    <button class="buttonSecundary" mat-mini-fab (click)="openDialog(modal, cliente)"\r
                                        matTooltip="Editar">\r
                                        <mat-icon>edit</mat-icon>\r
                                    </button>\r
                                    <button class="btnDelete" mat-mini-fab (click)="Eliminar(cliente)"\r
                                        matTooltip="Eliminar">\r
                                        <mat-icon>delete</mat-icon>\r
                                    </button>\r
                                </div>\r
                            </td>\r
                            <td data-title="C\xF3digo" class="tdp col-numero">{{ cliente.id }}</td>\r
                            <td data-title="Identificaci\xF3n" class="tdp td-fuerte">{{ cliente.numero_documento }}</td>\r
                            <td data-title="Tipo Identificaci\xF3n" class="tdp">{{ cliente.TipoIdentificacion }}\r
                            </td>\r
                            <td data-title="Nombre" class="tdp">{{ cliente.nombre_completo }}</td>\r
                            <td data-title="Contacto" class="tdp">\r
                                @if(cliente?.telefono || cliente.telefono != ""){\r
                                Tel: {{cliente?.telefono}}\r
                                }\r
                                @if(cliente?.correo || cliente.correo != ""){\r
                                Correo: {{cliente?.correo}}\r
                                }\r
                            </td>\r
                            <td data-title="Tipo CLiente" class="tdp">{{ cliente.tipo_cliente }}</td>\r
                            <td data-title="Estado" class="tdp col-estado">\r
                                {{ cliente.estado_cliente }}\r
                            </td>\r
                        </tr>\r
                        }\r
                    </tbody>\r
                </table>\r
            </div>\r
\r
            <mat-paginator [length]="(clientesFacade.responseClientes$ | async).length" [pageSize]="pageSize"\r
                (page)="next($event)">\r
            </mat-paginator>\r
        </mat-card-content>\r
    </mat-card>\r
    }\r
\r
</div>\r
}\r
\r
<ng-template #modal>\r
    <div class="modal-augajo modal-lg">\r
        <div class="modal-header">\r
            <span class="modal-titulo">\r
                @if (formClientes.get('id')?.value != 0) { Actualizar Cliente } @else { Nuevo Cliente }\r
            </span>\r
            <button mat-icon-button mat-dialog-close class="modal-cerrar" aria-label="Cerrar">\r
                <mat-icon>close</mat-icon>\r
            </button>\r
        </div>\r
\r
        <mat-dialog-content class="mat-typography modal-body">\r
            <form [formGroup]="formClientes">\r
\r
                <div class="seccion-titulo">Informaci\xF3n Personal</div>\r
\r
                <div class="form-grid">\r
                    <mat-form-field appearance="outline" class="campo-6">\r
                        <mat-label>Tipo Cliente</mat-label>\r
                        <mat-select formControlName="idTipoCliente" required>\r
                            @for (t of (clientesFacade.responseTipoCliente$ | async); track t) {\r
                            <mat-option [value]="t.id">{{ t.tipo_cliente }}</mat-option>\r
                            }\r
                        </mat-select>\r
                    </mat-form-field>\r
\r
                    <mat-form-field appearance="outline" class="campo-6">\r
                        <mat-label>Tipo Identificaci\xF3n</mat-label>\r
                        <mat-select formControlName="idTipoIdentificacion" required>\r
                            @for (t of (clientesFacade.responseTipoIdentificacion$ | async); track t) {\r
                            <mat-option [value]="t.Id">{{ t.TipoIdentificacion }}</mat-option>\r
                            }\r
                        </mat-select>\r
                    </mat-form-field>\r
\r
                    @if(formClientes.get('idTipoCliente').value === 1){\r
\r
                    <mat-form-field appearance="outline" class="campo-12">\r
                        <mat-label>Identificaci\xF3n</mat-label>\r
                        <input matInput placeholder="Identificaci\xF3n" formControlName="numeroDocumento" required>\r
                    </mat-form-field>\r
\r
                    <mat-form-field appearance="outline" class="campo-6">\r
                        <mat-label>Primer Nombre</mat-label>\r
                        <input matInput placeholder="Primer Nombre" formControlName="primerNombre" required>\r
                    </mat-form-field>\r
\r
                    <mat-form-field appearance="outline" class="campo-6">\r
                        <mat-label>Segundo Nombre</mat-label>\r
                        <input matInput placeholder="Segundo Nombre" formControlName="segundoNombre">\r
                    </mat-form-field>\r
\r
                    <mat-form-field appearance="outline" class="campo-6">\r
                        <mat-label>Primer Apellido</mat-label>\r
                        <input matInput placeholder="Primer Apellido" formControlName="primerApellido" required>\r
                    </mat-form-field>\r
\r
                    <mat-form-field appearance="outline" class="campo-6">\r
                        <mat-label>Segundo Apellido</mat-label>\r
                        <input matInput placeholder="Primer Apellido" formControlName="segundoApellido">\r
                    </mat-form-field>\r
\r
                    <mat-form-field appearance="outline" class="campo-6">\r
                        <mat-label>Fecha Nacimiento</mat-label>\r
                        <input matInput [matDatepicker]="picker" formControlName="fechaNacimiento">\r
                        <mat-hint>MM/DD/YYYY</mat-hint>\r
                        <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>\r
                        <mat-datepicker #picker></mat-datepicker>\r
                    </mat-form-field>\r
\r
                    }\r
                    @else {\r
                    <mat-form-field appearance="outline" class="campo-12">\r
                        <mat-label>Numero Documento</mat-label>\r
                        <input matInput placeholder="Numero Documento" formControlName="numeroDocumento" required>\r
                    </mat-form-field>\r
\r
                    <mat-form-field appearance="outline" class="campo-12">\r
                        <mat-label>Nombre Comercial</mat-label>\r
                        <input matInput placeholder="Nombre Comercial" formControlName="nombreComercial" required>\r
                    </mat-form-field>\r
\r
                    <mat-form-field appearance="outline" class="campo-12">\r
                        <mat-label>Representante Legal</mat-label>\r
                        <input matInput placeholder="Nombre Comercial" formControlName="representanteLegal">\r
                    </mat-form-field>\r
\r
                    <mat-form-field appearance="outline" class="campo-12">\r
                        <mat-label>Razon Social</mat-label>\r
                        <input matInput placeholder="Nombre Comercial" formControlName="razonSocial">\r
                    </mat-form-field>\r
\r
\r
                    }\r
\r
\r
                </div>\r
\r
                <!-- ===== Secci\xF3n 2: Detalle ===== -->\r
                <div class="seccion-titulo">Informaci\xF3n Contacto </div>\r
\r
                <div class="form-grid">\r
                    <mat-form-field appearance="outline" class="campo-6">\r
                        <mat-label>Correo</mat-label>\r
                        <input matInput type="email" placeholder="Correo" formControlName="correo">\r
                    </mat-form-field>\r
\r
                    <mat-form-field appearance="outline" class="campo-6">\r
                        <mat-label>Tel\xE9fono</mat-label>\r
                        <input matInput placeholder="Tel\xE9fono" formControlName="telefono">\r
                    </mat-form-field>\r
\r
                    <mat-form-field appearance="outline" class="campo-6">\r
                        <mat-label>Ciudad</mat-label>\r
                        <input matInput placeholder="Ciudad" formControlName="ciudad">\r
                    </mat-form-field>\r
\r
                    <mat-form-field appearance="outline" class="campo-12">\r
                        <mat-label>Direcci\xF3n</mat-label>\r
                        <textarea matInput placeholder="Direcci\xF3n del cliente" formControlName="direccion" cdkTextareaAutosize\r
                            cdkAutosizeMinRows="3" cdkAutosizeMaxRows="6"></textarea>\r
                    </mat-form-field>\r
\r
                </div>\r
\r
\r
                <div class="form-grid">\r
                    <mat-form-field appearance="outline" class="campo-6">\r
                        <mat-label>Estado Cliente</mat-label>\r
                        <mat-select formControlName="idEstadoCliente" required>\r
                            @for (t of (clientesFacade.responseEstadoClientes$ | async); track t) {\r
                            <mat-option [value]="t.id">{{ t.estado_cliente }}</mat-option>\r
                            }\r
                        </mat-select>\r
                    </mat-form-field>\r
\r
                </div>\r
\r
\r
\r
            </form>\r
        </mat-dialog-content>\r
\r
        <div class="acciones-modal">\r
            <button mat-stroked-button mat-dialog-close>Cancelar</button>\r
            @if (!(clientesFacade.responseCargando$ | async)) {\r
            <button class="button-principal" mat-flat-button (click)="Guardar()">Guardar</button>\r
            }\r
            @if ((clientesFacade.responseCargando$ | async)) {\r
            <mat-spinner diameter="32"></mat-spinner>\r
            }\r
        </div>\r
    </div>\r
</ng-template>` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientesComponent, { className: "ClientesComponent", filePath: "src/app/modules/administracion/clientes/clientes.component.ts", lineNumber: 17 });
})();

// src/app/modules/administracion/administracion-routing.module.ts
var routes = [
  {
    path: "tipoPedido",
    component: TipoPedidoComponent
  },
  {
    path: "metodoPago",
    component: MetodoPagoComponent
  },
  {
    path: "reparto",
    component: RepartoComponent
  },
  {
    path: "pedidos",
    component: PedidosComponent
  },
  {
    path: "tipoIdentificacion",
    component: TipoIdentificacionComponent
  },
  {
    path: "genero",
    component: GeneroComponent
  },
  {
    path: "tipoContacto",
    component: TipoContactoComponent
  },
  {
    path: "clientes",
    component: ClientesComponent
  }
];
var AdministracionRoutingModule = class _AdministracionRoutingModule {
  static {
    this.\u0275fac = function AdministracionRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdministracionRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdministracionRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdministracionRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/administracion/administracion.module.ts
var AdministracionModule = class _AdministracionModule {
  static {
    this.\u0275fac = function AdministracionModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdministracionModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AdministracionModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      AdministracionRoutingModule,
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
      MatAutocompleteModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdministracionModule, [{
    type: NgModule,
    args: [{
      declarations: [
        TipoPedidoComponent,
        MetodoPagoComponent,
        RepartoComponent,
        PedidosComponent,
        TipoIdentificacionComponent,
        GeneroComponent,
        TipoContactoComponent,
        ClientesComponent
      ],
      imports: [
        CommonModule,
        AdministracionRoutingModule,
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
        MatAutocompleteModule
      ],
      providers: []
    }]
  }], null, null);
})();
export {
  AdministracionModule
};
//# sourceMappingURL=administracion.module-XI4ASFSR.js.map

import {
  MatAccordion,
  MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "./chunk-KLR2CWWB.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-KOLAMMRU.js";
import {
  require_sweetalert2_all
} from "./chunk-EGNCYBTK.js";
import {
  MatAutocompleteModule,
  MatDialog,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule
} from "./chunk-NCXRX5VN.js";
import {
  CdkTextareaAutosize,
  DefaultValueAccessor,
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
  NgControlStatus,
  NgControlStatusGroup,
  PipeModule,
  ReactiveFormsModule,
  RequiredValidator,
  SearchPipe,
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
  NgModule,
  RouterLink,
  RouterModule,
  SharedModule,
  SlicePipe,
  ToastrServiceLocal,
  __toESM,
  catchError,
  inject,
  setClassMetadata,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
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
  ɵɵtextInterpolate4
} from "./chunk-SQPJPWK2.js";

// src/app/modules/seguridad/menus/menus.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());

// src/app/modules/seguridad/menus/menus-facade.service.ts
var MenusFacadeService = class _MenusFacadeService {
  constructor() {
    this.dataApi = inject(DataApiService);
    this._mensajesHttp = inject(MensajesHttpService);
    this.Cargando$ = new BehaviorSubject(false);
    this.responseCargando$ = this.Cargando$.asObservable();
    this.Menus$ = new BehaviorSubject([]);
    this.responseMenus$ = this.Menus$.asObservable();
  }
  MostrarMenus(params) {
    this.Cargando$.next(true);
    this.Menus$.next([]);
    const request$ = this.dataApi.GetDataApi(`seguridad/menu/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      this.Menus$.next(result.data);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.Menus$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar los menus", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  MostrarMenusAsignacion(params, callback) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.GetDataApi(`seguridad/menu/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      callback(result.data);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar los menus", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  InsertarMenus(params, respuesta) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.PostDataApi(`seguridad/menu/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al insertar el menu", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  ActualizarMenus(params, respuesta) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.PutDataApi(`seguridad/menu/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al actualizar el menu", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  EliminarMenus(params, respuesta) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.DeleteDataApiUrl(`seguridad/menu/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al eliminar el menu", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  static {
    this.\u0275fac = function MenusFacadeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MenusFacadeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MenusFacadeService, factory: _MenusFacadeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenusFacadeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/modules/seguridad/menus/menus.component.ts
var _c0 = () => ["/dashboard"];
function MenusComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-loading", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("data", 4);
  }
}
function MenusComponent_Conditional_23_For_4_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "mat-divider");
    \u0275\u0275elementStart(2, "div", 25)(3, "div", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 28)(8, "button", 23);
    \u0275\u0275listener("click", function MenusComponent_Conditional_23_For_4_For_18_Template_button_click_8_listener() {
      const hijo_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const padre_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      const MenuModal_r2 = \u0275\u0275reference(27);
      return \u0275\u0275resetView(ctx_r4.dialogMenuHijo(MenuModal_r2, padre_r6.Id, hijo_r8));
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "create");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 24)(12, "mat-icon");
    \u0275\u0275text(13, "delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const hijo_r8 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", hijo_r8.Menu, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", hijo_r8.Descripcion, " ");
  }
}
function MenusComponent_Conditional_23_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-expansion-panel", 19);
    \u0275\u0275listener("click", function MenusComponent_Conditional_23_For_4_Template_mat_expansion_panel_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.clickButton = false);
    });
    \u0275\u0275elementStart(1, "mat-expansion-panel-header")(2, "mat-panel-title");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-panel-description")(5, "div", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 21)(8, "button", 22);
    \u0275\u0275listener("click", function MenusComponent_Conditional_23_For_4_Template_button_click_8_listener() {
      const padre_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      const MenuModal_r2 = \u0275\u0275reference(27);
      return \u0275\u0275resetView(ctx_r4.dialogMenuHijo(MenuModal_r2, padre_r6.Id));
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 23);
    \u0275\u0275listener("click", function MenusComponent_Conditional_23_For_4_Template_button_click_11_listener() {
      const padre_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      const MenuModal_r2 = \u0275\u0275reference(27);
      return \u0275\u0275resetView(ctx_r4.dialogMenuPadre(MenuModal_r2, padre_r6));
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "create");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 24)(15, "mat-icon");
    \u0275\u0275text(16, "delete");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275repeaterCreate(17, MenusComponent_Conditional_23_For_4_For_18_Template, 14, 2, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const padre_r6 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r4.clickButton);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", padre_r6.Menu, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", padre_r6.Descripcion, " ");
    \u0275\u0275advance(11);
    \u0275\u0275repeater(padre_r6.hijos);
  }
}
function MenusComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 14)(1, "mat-card-content")(2, "mat-accordion", 16);
    \u0275\u0275repeaterCreate(3, MenusComponent_Conditional_23_For_4_Template, 19, 3, "mat-expansion-panel", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementStart(6, "mat-paginator", 18);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275listener("page", function MenusComponent_Conditional_23_Template_mat_paginator_page_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.next($event));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(5, 2, ctx_r4.menuFacade.responseMenus$));
    \u0275\u0275advance(3);
    \u0275\u0275property("length", \u0275\u0275pipeBind1(7, 4, ctx_r4.menuFacade.responseMenus$).length)("pageSize", ctx_r4.pageSize);
  }
}
function MenusComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, " Menu ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-dialog-content", 30)(3, "form", 31)(4, "div", 32)(5, "mat-form-field", 33)(6, "mat-label");
    \u0275\u0275text(7, "Menu");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-form-field", 35)(10, "mat-label");
    \u0275\u0275text(11, "Icono");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 36);
    \u0275\u0275elementStart(13, "span", 37);
    \u0275\u0275element(14, "i");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-form-field", 35)(16, "mat-label");
    \u0275\u0275text(17, "Url");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 39)(20, "mat-form-field", 40)(21, "mat-label");
    \u0275\u0275text(22, " Descripcion ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "textarea", 41);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 42)(25, "button", 43);
    \u0275\u0275text(26, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 44);
    \u0275\u0275listener("click", function MenusComponent_ng_template_26_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.guardar());
    });
    \u0275\u0275text(28, "Guardar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r4.formMenu);
    \u0275\u0275advance(11);
    \u0275\u0275classMap(ctx_r4.formMenu.get("icono").value);
  }
}
var MenusComponent = class _MenusComponent {
  constructor() {
    this.menuFacade = inject(MenusFacadeService);
    this.toast = inject(ToastrServiceLocal);
    this.dialog = inject(MatDialog);
    this.buscar = new FormControl("");
    this.pageSize = 10;
    this.page = 0;
    this.pageIndex = 0;
    this.desde = 0;
    this.hasta = 10;
    this.clickButton = false;
    this.menuFacade.MostrarMenus("0");
  }
  ngOnInit() {
  }
  dialogMenuPadre(template, params) {
    this.formMenu = new FormGroup({
      id: new FormControl(params?.Id || 0),
      idMenu: new FormControl(null),
      menu: new FormControl(params?.Menu || ""),
      descripcion: new FormControl(params?.Descripcion || ""),
      icono: new FormControl(params?.Icono || ""),
      url: new FormControl(params?.Url || ""),
      tablaPadre: new FormControl(true),
      usuario: new FormControl(params?.UsuarioInsercion || ""),
      estado: new FormControl(params?.Estado || "")
    });
    const dialogRef = this.dialog.open(template, {
      panelClass: "app-full-bleed-dialog",
      disableClose: true
    });
  }
  dialogMenuHijo(template, idMenu, params) {
    this.formMenu = new FormGroup({
      id: new FormControl(params?.Id || 0),
      idMenu: new FormControl(idMenu),
      menu: new FormControl(params?.Menu || ""),
      descripcion: new FormControl(params?.Descripcion || ""),
      icono: new FormControl(params?.Icono || ""),
      url: new FormControl(params?.Url || "", [Validators.required]),
      tablaPadre: new FormControl(false),
      usuario: new FormControl(params?.UsuarioInsercion || ""),
      estado: new FormControl(params?.Estado || "")
    });
    const dialogRef = this.dialog.open(template, {
      panelClass: "app-full-bleed-dialog",
      disableClose: true
    });
  }
  Eliminar(params) {
    import_sweetalert2.default.fire({
      title: "Confirmaci\xF3n",
      html: ` <p> \xBFEsta seguro quiere inhabilitar el menu <b>${params.Menu}</b>? </p>`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#003399",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.menuFacade.EliminarMenus(params.Id, (respuesta) => {
          if (respuesta.hasError === false) {
            this.menuFacade.MostrarMenus("0");
          }
        });
      }
    });
  }
  guardar() {
    if (this.formMenu.invalid) {
      this.toast.mensajeWarning("Es requerido ingresar los campos indicados como obligatorios", "");
      this.formMenu.markAllAsTouched();
      return;
    }
    if (this.formMenu.get("id").value === 0) {
      this.menuFacade.InsertarMenus(this.formMenu.value, (respuesta) => {
        if (respuesta.hasError === false) {
          this.menuFacade.MostrarMenus("0");
          this.dialog.closeAll();
        }
      });
    } else {
      this.menuFacade.ActualizarMenus(this.formMenu.value, (respuesta) => {
        if (respuesta.hasError === false) {
          this.menuFacade.MostrarMenus("0");
          this.dialog.closeAll();
        }
      });
    }
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
    this.\u0275fac = function MenusComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MenusComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenusComponent, selectors: [["app-menus"]], standalone: false, decls: 28, vars: 11, consts: [["MenuModal", ""], [1, "navigation"], ["aria-label", "breadcrumb"], [1, "breadcrumb", 2, "background-color", "white !important"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "content"], [1, "titleNav"], [2, "font-size", "2rem", "font-weight", "800", "letter-spacing", "-.025em!important", "line-height", "2.5rem!important", "text-overflow", "ellipsis!important"], [1, "text-right", "action"], ["mat-mini-fab", "", 1, "button-principal", 2, "margin-right", "5px", 3, "click"], ["appearance", "outline", 2, "width", "100%"], ["matInput", "", "type", "text", "placeholder", "Buscar", "autocomplete", "off", 3, "formControl"], ["matPrefix", ""], [1, "mt-2"], [3, "data"], ["multi", "", 1, "example-headers-align"], [1, "mat-expansion-panelPersonalizado", 3, "disabled"], [3, "page", "length", "pageSize"], [1, "mat-expansion-panelPersonalizado", 3, "click", "disabled"], [2, "width", "60%"], [1, "text-right", 2, "width", "40%"], ["mat-mini-fab", "", 1, "buttonPrincipal", 2, "box-shadow", "0px", 3, "click"], ["mat-mini-fab", "", 1, "buttonSecundary", 2, "margin-left", "5px", 3, "click"], ["mat-mini-fab", "", 1, "btnDelete", 2, "margin-left", "5px"], [1, "contentAccordion", 2, "display", "flex", "align-items", "center", "padding-left", "24px", "padding-right", "24px", "padding-top", "5px", "padding-bottom", "5px"], [2, "width", "30%"], [2, "width", "50%"], [1, "text-right", 2, "width", "20%"], [1, "matCardHeader"], [1, "mat-typography"], [3, "formGroup"], [1, "row"], ["appearance", "outline", 1, "col-md-12", "mt-2"], ["matInput", "", "placeholder", "Menu", "formControlName", "menu", "required", "", "autocomplete", "off"], ["appearance", "outline", 1, "col-md-6", "mt-2"], ["matInput", "", "placeholder", "Icono", "formControlName", "icono", "required", "", "autocomplete", "off"], ["matSuffix", ""], ["matInput", "", "placeholder", "Url", "formControlName", "url", "autocomplete", "off"], [1, "col-md-12", "mt-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "placeholder", "Descripcion", "formControlName", "descripcion", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "5", "autocomplete", "off"], [1, "text-right"], ["mat-raised-button", "", "mat-dialog-close", "", 2, "margin-right", "5px"], ["mat-raised-button", "", 1, "button-principal", 3, "click"]], template: function MenusComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "nav", 2)(2, "ol", 3)(3, "li", 4)(4, "a", 5);
        \u0275\u0275text(5, "Inicio");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "h2", 8);
        \u0275\u0275text(9, " Menus ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 9)(11, "button", 10);
        \u0275\u0275listener("click", function MenusComponent_Template_button_click_11_listener() {
          \u0275\u0275restoreView(_r1);
          const MenuModal_r2 = \u0275\u0275reference(27);
          return \u0275\u0275resetView(ctx.dialogMenuPadre(MenuModal_r2, true));
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
        \u0275\u0275conditionalCreate(21, MenusComponent_Conditional_21_Template, 2, 1, "div");
        \u0275\u0275pipe(22, "async");
        \u0275\u0275conditionalCreate(23, MenusComponent_Conditional_23_Template, 8, 6, "mat-card", 14);
        \u0275\u0275pipe(24, "async");
        \u0275\u0275pipe(25, "async");
        \u0275\u0275template(26, MenusComponent_ng_template_26_Template, 29, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c0));
        \u0275\u0275advance(13);
        \u0275\u0275property("formControl", ctx.buscar);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(\u0275\u0275pipeBind1(22, 4, ctx.menuFacade.responseCargando$) ? 21 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!\u0275\u0275pipeBind1(24, 6, ctx.menuFacade.responseCargando$) && \u0275\u0275pipeBind1(25, 8, ctx.menuFacade.responseMenus$).length > 0 ? 23 : -1);
      }
    }, dependencies: [RouterLink, MatFormField, MatLabel, MatPrefix, MatSuffix, MatInput, CdkTextareaAutosize, MatIcon, MatButton, MatMiniFabButton, MatDialogClose, MatDialogContent, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormControlDirective, FormGroupDirective, FormControlName, LoadingComponent, MatCard, MatCardContent, MatPaginator, MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatDivider, AsyncPipe], styles: ["\n.example-action-buttons[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], \n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.mat-expansion-panelPersonalizado[_ngcontent-%COMP%] {\n  background-color: rgb(255, 255, 255) !important;\n  margin-bottom: 5px !important;\n  align-items: center !important;\n}\n.mat-expansion-panelPersonalizado[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%] {\n  align-items: center !important;\n  display: flex !important;\n}\n.mat-expansion-panelPersonalizado[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%], \n.mat-expansion-panelPersonalizado[_ngcontent-%COMP%]   .mat-expansion-indicator[_ngcontent-%COMP%]::after {\n  color: black !important;\n}\n.mat-expansion-panelPersonalizado[_ngcontent-%COMP%]   .contentAccordion[_ngcontent-%COMP%] {\n  border-left-width: 5px !important;\n  border-color: #333a56 !important;\n  background-color: #f8fafc !important;\n  border-left-style: solid !important;\n}\n.mat-expansion-panelPersonalizado[_ngcontent-%COMP%]   .mat-mini-fab[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=menus.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenusComponent, [{
    type: Component,
    args: [{ selector: "app-menus", standalone: false, template: `<div class="navigation">
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
        Menus
      </h2>
      <!-- <h2
      style="font-size: 2rem; font-weight: 800; letter-spacing: -.025em!important; line-height: 2.5rem!important;text-overflow: ellipsis!important; " *ngIf="!busquedaEstudiante">
      Nombre Estudiante
    </h2> -->
  </div>
  <div class="text-right action">

    <button class="button-principal" mat-mini-fab (click)="dialogMenuPadre(MenuModal, true)" style="margin-right: 5px;">
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

@if ((menuFacade.responseCargando$  | async)) {
  <div>
    <app-loading [data]="4"></app-loading>
  </div>
}

@if (!(menuFacade.responseCargando$  | async) && (menuFacade.responseMenus$ | async).length > 0) {
  <mat-card class="mt-2"
    >
    <mat-card-content>
      <mat-accordion class="example-headers-align" multi>
        @for (padre of (menuFacade.responseMenus$ | async); track padre) {
          <mat-expansion-panel class="mat-expansion-panelPersonalizado"  [disabled]="clickButton" (click)="clickButton=false">
            <mat-expansion-panel-header>
              <mat-panel-title>
                {{padre.Menu}}
              </mat-panel-title>
              <mat-panel-description>
                <div style="width: 60%;">
                  {{padre.Descripcion}}
                </div>
                <div style="width: 40%;" class="text-right">
                  <button mat-mini-fab class="buttonPrincipal" style="box-shadow: 0px;" (click)="dialogMenuHijo(MenuModal, padre.Id)">
                    <mat-icon>add</mat-icon>
                  </button>
                  <button mat-mini-fab class="buttonSecundary" style="margin-left: 5px;" (click)="dialogMenuPadre(MenuModal, padre)">
                    <mat-icon>create</mat-icon>
                  </button>
                  <button mat-mini-fab class="btnDelete" style="margin-left: 5px;">
                    <mat-icon>delete</mat-icon>
                  </button>
                </div>
              </mat-panel-description>
            </mat-expansion-panel-header>
            @for (hijo of padre.hijos; track hijo) {
              <div>
                <mat-divider></mat-divider>
                <div class="contentAccordion"
                  style="display: flex; align-items: center; padding-left: 24px; padding-right: 24px; padding-top: 5px; padding-bottom: 5px;">
                  <div style="width: 30%;">
                    {{hijo.Menu}}
                  </div>
                  <div style="width: 50%;">
                    {{hijo.Descripcion}}
                  </div>
                  <div style="width: 20%;" class="text-right">
                    <button mat-mini-fab class="buttonSecundary" style="margin-left: 5px;" (click)="dialogMenuHijo(MenuModal, padre.Id, hijo)">
                      <mat-icon>create</mat-icon>
                    </button>
                    <button mat-mini-fab class="btnDelete" style="margin-left: 5px;">
                      <mat-icon>delete</mat-icon>
                    </button>
                  </div>
                </div>
              </div>
            }
          </mat-expansion-panel>
        }
        <mat-paginator [length]="(menuFacade.responseMenus$ | async).length " [pageSize]="pageSize"
          (page)="next($event) ">
        </mat-paginator>
      </mat-accordion>
    </mat-card-content>
  </mat-card>
}



<ng-template #MenuModal>
  <div class="matCardHeader">
    Menu
  </div>
  <mat-dialog-content class="mat-typography">
    <form [formGroup]="formMenu">
      <div class="row">
        <mat-form-field appearance="outline" class="col-md-12 mt-2">
          <mat-label>Menu</mat-label>
          <input matInput placeholder="Menu" formControlName="menu" required autocomplete="off">
        </mat-form-field>

        <mat-form-field appearance="outline" class="col-md-6 mt-2">
          <mat-label>Icono</mat-label>
          <input matInput placeholder="Icono" formControlName="icono" required autocomplete="off">
          <span matSuffix><i [class]="formMenu.get('icono').value"></i></span>
        </mat-form-field>

        <mat-form-field appearance="outline" class="col-md-6 mt-2">
          <mat-label>Url</mat-label>
          <input matInput placeholder="Url" formControlName="url" autocomplete="off">
        </mat-form-field>

        <div class="col-md-12 mt-2">
          <mat-form-field class="example-full-width" appearance="outline">
            <mat-label> Descripcion </mat-label>
            <textarea matInput placeholder="Descripcion" formControlName="descripcion" cdkTextareaAutosize
            cdkAutosizeMinRows="5" autocomplete="off"></textarea>
          </mat-form-field>
        </div>
      </div>
    </form>
    <div class="text-right">
      <button style="margin-right: 5px;" mat-raised-button mat-dialog-close>Cancelar</button>
      <button class="button-principal" mat-raised-button (click)="guardar()">Guardar</button>
    </div>
  </mat-dialog-content>
</ng-template>`, styles: ["/* src/app/modules/seguridad/menus/menus.component.scss */\n.example-action-buttons {\n  padding-bottom: 20px;\n}\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n.example-headers-align .mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n.mat-expansion-panelPersonalizado {\n  background-color: rgb(255, 255, 255) !important;\n  margin-bottom: 5px !important;\n  align-items: center !important;\n}\n.mat-expansion-panelPersonalizado .mat-expansion-panel-header-title {\n  align-items: center !important;\n  display: flex !important;\n}\n.mat-expansion-panelPersonalizado .mat-expansion-panel-header-description,\n.mat-expansion-panelPersonalizado .mat-expansion-indicator::after {\n  color: black !important;\n}\n.mat-expansion-panelPersonalizado .contentAccordion {\n  border-left-width: 5px !important;\n  border-color: #333a56 !important;\n  background-color: #f8fafc !important;\n  border-left-style: solid !important;\n}\n.mat-expansion-panelPersonalizado .mat-mini-fab {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=menus.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenusComponent, { className: "MenusComponent", filePath: "src/app/modules/seguridad/menus/menus.component.ts", lineNumber: 16 });
})();

// src/app/modules/seguridad/personas/personas.component.ts
var import_sweetalert22 = __toESM(require_sweetalert2_all());

// src/app/modules/seguridad/personas/personas-facade.service.ts
var PersonasFacadeService = class _PersonasFacadeService {
  constructor() {
    this.dataApi = inject(DataApiService);
    this._mensajesHttp = inject(MensajesHttpService);
    this.Cargando$ = new BehaviorSubject(false);
    this.responseCargando$ = this.Cargando$.asObservable();
    this.Personas$ = new BehaviorSubject([]);
    this.responsePersonas$ = this.Personas$.asObservable();
    this.TipoIdentificacion$ = new BehaviorSubject([]);
    this.responseTipoIdentificacion$ = this.TipoIdentificacion$.asObservable();
    this.Genero$ = new BehaviorSubject([]);
    this.responseGenero$ = this.Genero$.asObservable();
    this.Departamento$ = new BehaviorSubject([]);
    this.responseDepartamento$ = this.Departamento$.asObservable();
    this.Municipio$ = new BehaviorSubject([]);
    this.responseMunicipio$ = this.Municipio$.asObservable();
  }
  MostrarPersonas(params) {
    this.Cargando$.next(true);
    this.Personas$.next([]);
    const request$ = this.dataApi.GetDataApi(`personas/personas/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      this.Personas$.next(result.data.Table0);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.Personas$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar las personas", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  InsertarPersonas(params, callback) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.PostDataApi(`personas/personas/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      callback(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al insertar la persona", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  ActualizarPersonas(params, callback) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.PutDataApi(`personas/personas/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      callback(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al actualizar la persona", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  EliminarPersonas(params, callback) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.DeleteDataApiUrl(`personas/personas/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      callback(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al eliminar la persona", "");
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
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar los tipo de identificaci\xF3n", "");
      return EMPTY;
    }));
    return request$.subscribe();
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
  MostrarDepartamento(params) {
    this.Cargando$.next(true);
    this.Departamento$.next([]);
    const request$ = this.dataApi.GetDataApi(`personas/departamento/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      this.Departamento$.next(result.data.Table0);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.Departamento$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar los departamentos", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  MostrarMunicipio(params) {
    this.Cargando$.next(true);
    this.Municipio$.next([]);
    const request$ = this.dataApi.GetDataApi(`personas/municipio/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      this.Municipio$.next(result.data.Table0);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.Municipio$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar los municipio", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  InsertarDireccion(params, callback) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.PostDataApi(`personas/direccion/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      callback(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al insertar la direcci\xF3n", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  ActualizarDireccion(params, callback) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.PutDataApi(`personas/direccion/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      callback(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al actualizar la direcci\xF3n", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  EliminarDireccion(params, callback) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.DeleteDataApiUrl(`personas/direccion/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      callback(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al eliminar la direcci\xF3n", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  static {
    this.\u0275fac = function PersonasFacadeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PersonasFacadeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PersonasFacadeService, factory: _PersonasFacadeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonasFacadeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/modules/seguridad/personas/personas.component.ts
var _c02 = () => ["/dashboard"];
var _c1 = () => ["PrimerNombre", "PrimerApellido", "Identificacion"];
function PersonasComponent_Conditional_25_Template(rf, ctx) {
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
function PersonasComponent_Conditional_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "mat-icon");
    \u0275\u0275text(2, "credit_card_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No informaci\xF3n personal para listar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 14);
    \u0275\u0275listener("click", function PersonasComponent_Conditional_27_Conditional_1_Template_button_click_5_listener() {
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
function PersonasComponent_Conditional_27_Conditional_3_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 25)(1, "td", 27)(2, "div", 28)(3, "button", 29);
    \u0275\u0275listener("click", function PersonasComponent_Conditional_27_Conditional_3_For_21_Template_button_click_3_listener() {
      const persona_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.openDialog(ctx_r3.modalPersonas, persona_r7));
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 30);
    \u0275\u0275listener("click", function PersonasComponent_Conditional_27_Conditional_3_For_21_Template_button_click_6_listener() {
      const persona_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.Eliminar(persona_r7));
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
    \u0275\u0275elementStart(15, "td", 33);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 34);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 35)(21, "span", 36);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const persona_r7 = ctx.$implicit;
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(persona_r7.Id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4("", persona_r7.PrimerNombre, " ", persona_r7.SegundoNombre, " ", persona_r7.PrimerApellido, " ", persona_r7.SegundoApellido, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(persona_r7.TipoIdentificacion);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(persona_r7.Identificacion);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 13, persona_r7.FechaNacimiento, "yyyy-MM-dd"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("pill-activo", persona_r7.Estado === "Activo")("pill-inactivo", persona_r7.Estado !== "Activo");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", persona_r7.Estado, " ");
  }
}
function PersonasComponent_Conditional_27_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 18)(1, "mat-card-content")(2, "div", 19)(3, "table", 20)(4, "thead", 21)(5, "tr", 22);
    \u0275\u0275element(6, "th", 23);
    \u0275\u0275elementStart(7, "th", 23);
    \u0275\u0275text(8, "C\xF3digo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 23);
    \u0275\u0275text(10, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 23);
    \u0275\u0275text(12, "Tipo Identificaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 23);
    \u0275\u0275text(14, "Identificaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 23);
    \u0275\u0275text(16, "Fecha Nacimiento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 23);
    \u0275\u0275text(18, "Estado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody", 24);
    \u0275\u0275repeaterCreate(20, PersonasComponent_Conditional_27_Conditional_3_For_21_Template, 23, 16, "tr", 25, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(22, "async");
    \u0275\u0275pipe(23, "search");
    \u0275\u0275pipe(24, "slice");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "mat-paginator", 26);
    \u0275\u0275pipe(26, "async");
    \u0275\u0275listener("page", function PersonasComponent_Conditional_27_Conditional_3_Template_mat_paginator_page_25_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.next($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(20);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(24, 8, \u0275\u0275pipeBind3(23, 4, \u0275\u0275pipeBind1(22, 2, ctx_r3.personasFacade.responsePersonas$), ctx_r3.buscar == null ? null : ctx_r3.buscar.value, \u0275\u0275pureFunction0(14, _c1)), ctx_r3.desde, ctx_r3.hasta));
    \u0275\u0275advance(5);
    \u0275\u0275property("length", \u0275\u0275pipeBind1(26, 12, ctx_r3.personasFacade.responsePersonas$).length)("pageSize", ctx_r3.pageSize);
  }
}
function PersonasComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275conditionalCreate(1, PersonasComponent_Conditional_27_Conditional_1_Template, 9, 0, "div", 17);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275conditionalCreate(3, PersonasComponent_Conditional_27_Conditional_3_Template, 27, 15, "mat-card", 18);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275\u0275pipeBind1(2, 2, ctx_r3.personasFacade.responsePersonas$).length === 0 ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(4, 4, ctx_r3.personasFacade.responsePersonas$).length > 0 ? 3 : -1);
  }
}
function PersonasComponent_ng_template_29_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Agregar Persona ");
  }
}
function PersonasComponent_ng_template_29_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Actualizar Persona ");
  }
}
function PersonasComponent_ng_template_29_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 46);
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
function PersonasComponent_ng_template_29_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r10 = ctx.$implicit;
    \u0275\u0275property("value", g_r10.Id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(g_r10.Genero);
  }
}
function PersonasComponent_ng_template_29_For_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    \u0275\u0275property("value", item_r11.Id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r11.Departamento);
  }
}
function PersonasComponent_ng_template_29_For_65_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", item_r12.Id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r12.Municipio);
  }
}
function PersonasComponent_ng_template_29_For_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, PersonasComponent_ng_template_29_For_65_Conditional_0_Template, 2, 2, "mat-option", 46);
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r3.formDireccion.get("idDepartamento").value === item_r12.IdDepartamento ? 0 : -1);
  }
}
function PersonasComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "span", 39);
    \u0275\u0275conditionalCreate(3, PersonasComponent_ng_template_29_Conditional_3_Template, 1, 0)(4, PersonasComponent_ng_template_29_Conditional_4_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 40)(6, "mat-icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "mat-dialog-content", 41)(9, "div", 42);
    \u0275\u0275text(10, "Datos personales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "form", 43)(12, "mat-form-field", 44)(13, "mat-label");
    \u0275\u0275text(14, "Tipo Identificaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-select", 45);
    \u0275\u0275repeaterCreate(16, PersonasComponent_ng_template_29_For_17_Template, 2, 2, "mat-option", 46, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-form-field", 44)(20, "mat-label");
    \u0275\u0275text(21, "Identificaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-form-field", 44)(24, "mat-label");
    \u0275\u0275text(25, "Primer Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-form-field", 44)(28, "mat-label");
    \u0275\u0275text(29, "Segundo Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "mat-form-field", 44)(32, "mat-label");
    \u0275\u0275text(33, "Primer Apellido");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-form-field", 44)(36, "mat-label");
    \u0275\u0275text(37, "Segundo Apellido");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-form-field", 44)(40, "mat-label");
    \u0275\u0275text(41, "G\xE9nero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "mat-select", 52);
    \u0275\u0275repeaterCreate(43, PersonasComponent_ng_template_29_For_44_Template, 2, 2, "mat-option", 46, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(45, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "mat-form-field", 44)(47, "mat-label");
    \u0275\u0275text(48, "Fecha Nacimiento");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "input", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 42);
    \u0275\u0275text(51, "Informaci\xF3n de residencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "form", 43)(53, "mat-form-field", 44)(54, "mat-label");
    \u0275\u0275text(55, "Departamento");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "mat-select", 54);
    \u0275\u0275repeaterCreate(57, PersonasComponent_ng_template_29_For_58_Template, 2, 2, "mat-option", 46, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(59, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "mat-form-field", 44)(61, "mat-label");
    \u0275\u0275text(62, "Municipio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "mat-select", 55);
    \u0275\u0275repeaterCreate(64, PersonasComponent_ng_template_29_For_65_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(66, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "mat-form-field", 44)(68, "mat-label");
    \u0275\u0275text(69, "Ciudad");
    \u0275\u0275elementEnd();
    \u0275\u0275element(70, "input", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "mat-form-field", 57)(72, "mat-label");
    \u0275\u0275text(73, "Direcci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275element(74, "textarea", 58);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(75, "div", 59)(76, "button", 60);
    \u0275\u0275text(77, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "button", 14);
    \u0275\u0275listener("click", function PersonasComponent_ng_template_29_Template_button_click_78_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.Guardar());
    });
    \u0275\u0275text(79, "Guardar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.formPersonas.get("id").value == 0 ? 3 : 4);
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx_r3.formPersonas);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(18, 3, ctx_r3.personasFacade.responseTipoIdentificacion$));
    \u0275\u0275advance(27);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(45, 5, ctx_r3.personasFacade.responseGenero$));
    \u0275\u0275advance(9);
    \u0275\u0275property("formGroup", ctx_r3.formDireccion);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(59, 7, ctx_r3.personasFacade.responseDepartamento$));
    \u0275\u0275advance(7);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(66, 9, ctx_r3.personasFacade.responseMunicipio$));
  }
}
var PersonasComponent = class _PersonasComponent {
  constructor() {
    this.personasFacade = inject(PersonasFacadeService);
    this.dialog = inject(MatDialog);
    this.toast = inject(ToastrServiceLocal);
    this.datePipe = inject(DatePipe);
    this.buscar = new FormControl("");
    this.pageSize = 10;
    this.page = 0;
    this.pageIndex = 0;
    this.desde = 0;
    this.hasta = 10;
    this.personasFacade.MostrarPersonas("0");
  }
  ngOnInit() {
  }
  openDialog(template, params) {
    this.personasFacade.MostrarTipoIdentificacion("0");
    this.personasFacade.MostrarGenero("0");
    this.personasFacade.MostrarDepartamento("0");
    this.personasFacade.MostrarMunicipio("0");
    this.formPersonas = new FormGroup({
      id: new FormControl(params?.Id || "0"),
      primerNombre: new FormControl(params?.PrimerNombre || "", [
        Validators.required
      ]),
      segundoNombre: new FormControl(params?.SegundoNombre || ""),
      primerApellido: new FormControl(params?.PrimerApellido || "", [
        Validators.required
      ]),
      segundoApellido: new FormControl(params?.SegundoApellido || ""),
      nombreOrganizacion: new FormControl(params?.NombreOrganizacion || ""),
      idTipoIdentificacion: new FormControl(params?.IdTipoIdentificacion || "", [Validators.required]),
      identificacion: new FormControl(params?.Identificacion || "", [
        Validators.required
      ]),
      fechaNacimiento: new FormControl(params?.FechaNacimiento != "" && params?.FechaNacimiento != null ? this.datePipe.transform(params.FechaNacimiento, "yyyy-MM-dd") : ""),
      idDireccion: new FormControl(params?.IdDireccion || null),
      idGenero: new FormControl(params?.IdGenero || "", [Validators.required]),
      usuario: new FormControl(""),
      idEstado: new FormControl(params?.IdEstado || "")
    });
    this.formDireccion = new FormGroup({
      id: new FormControl(params?.IdDireccion || 0),
      idDepartamento: new FormControl(params?.IdDepartamento || "", [Validators.required]),
      idMunicipio: new FormControl(params?.IdMunicipio || "", [Validators.required]),
      ciudad: new FormControl(params?.Ciudad || "", [Validators.required]),
      direccion: new FormControl(params?.Direccion || "", [Validators.required]),
      idEstado: new FormControl(params?.IdEstado || "")
    });
    const dialogRef = this.dialog.open(template, {
      panelClass: "app-full-bleed-dialog",
      //Agregar una clase ccs al dialogo
      disableClose: true
    });
  }
  Guardar() {
    if (this.formPersonas.invalid) {
      this.toast.mensajeWarning("Es requerido ingresar los campos validos", "");
      this.formPersonas.markAllAsTouched();
      return;
    }
    if (this.formPersonas.get("id").value === "0") {
      this.personasFacade.InsertarDireccion(this.formDireccion.value, (respuesta) => {
        this.formPersonas.get("idDireccion").setValue(respuesta.data.Table0[0].Id);
        if (respuesta.hasError === false) {
          this.personasFacade.InsertarPersonas(this.formPersonas.value, (respuesta2) => {
            this.personasFacade.MostrarPersonas("0");
            this.dialog.closeAll();
          });
        }
      });
    } else {
      this.personasFacade.ActualizarDireccion(this.formDireccion.value, (respuesta) => {
        if (respuesta.hasError === false) {
          this.personasFacade.ActualizarPersonas(this.formPersonas.value, (respuesta2) => {
            this.personasFacade.MostrarPersonas("0");
            this.dialog.closeAll();
          });
        }
      });
    }
  }
  Eliminar(params) {
    import_sweetalert22.default.fire({
      title: "Confirmaci\xF3n",
      html: ` <p> \xBFEsta seguro quiere inhabilitar la persona <b>${params.PrimerNombre}</b>? </p>`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#003399",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.personasFacade.EliminarPersonas(params.Id, (respuesta) => {
          this.personasFacade.MostrarPersonas("0");
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
    this.\u0275fac = function PersonasComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PersonasComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PersonasComponent, selectors: [["app-personas"]], standalone: false, decls: 31, vars: 9, consts: [["modal", ""], [1, "navigation"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "activo"], [1, "content"], [1, "titleNav"], [1, "subtitulo"], [1, "action"], ["appearance", "outline", 1, "buscador"], ["matInput", "", "type", "text", "placeholder", "Buscar\u2026", "autocomplete", "off", 3, "formControl"], ["matPrefix", ""], ["mat-flat-button", "", 1, "button-principal", 3, "click"], [1, "contenedor-tabla"], [3, "data"], [1, "sin-datos"], [1, "matCardPersonalizada"], [1, "tabla-scroll"], ["role", "table", 1, "tablep"], [1, "theadp"], [1, "trp"], ["scope", "col ", "role", "columnheader ", 1, "thp"], ["role", "rowgroup", 1, "tbodyp"], ["role", "row", 1, "trp"], [3, "page", "length", "pageSize"], ["data-title", "Acciones", 1, "tdp", "col-acciones"], [1, "acciones"], ["mat-mini-fab", "", "matTooltip", "Editar", 1, "buttonSecundary", 3, "click"], ["mat-mini-fab", "", "matTooltip", "Eliminar", 1, "btnDelete", 3, "click"], ["data-title", "C\xF3digo", 1, "tdp", "col-numero"], ["data-title", "Nombre", 1, "tdp", "td-fuerte"], ["data-title", "Tipo Identificaci\xF3n", 1, "tdp"], ["data-title", "Telefono", 1, "tdp"], ["data-title", "Estado", 1, "tdp", "col-estado"], [1, "pill"], [1, "modal-augajo", "modal-lg"], [1, "modal-header"], [1, "modal-titulo"], ["mat-icon-button", "", "mat-dialog-close", "", "aria-label", "Cerrar", 1, "modal-cerrar"], [1, "mat-typography", "modal-body"], [1, "seccion-titulo"], [1, "form-grid", 3, "formGroup"], ["appearance", "fill", 1, "campo-6"], ["formControlName", "idTipoIdentificacion", "required", ""], [3, "value"], ["matInput", "", "placeholder", "Identificaci\xF3n", "formControlName", "identificacion", "required", ""], ["matInput", "", "placeholder", "Primer Nombre", "formControlName", "primerNombre", "required", ""], ["matInput", "", "placeholder", "Segundo Nombre", "formControlName", "segundoNombre"], ["matInput", "", "placeholder", "Primer Apellido", "formControlName", "primerApellido", "required", ""], ["matInput", "", "placeholder", "Segundo Apellido", "formControlName", "segundoApellido"], ["formControlName", "idGenero", "required", ""], ["matInput", "", "formControlName", "fechaNacimiento", "type", "date"], ["formControlName", "idDepartamento", "required", ""], ["formControlName", "idMunicipio", "required", ""], ["matInput", "", "placeholder", "Ciudad", "formControlName", "ciudad", "required", ""], ["appearance", "fill", 1, "campo-12"], ["matInput", "", "placeholder", "Direcci\xF3n", "formControlName", "direccion", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "3", "cdkAutosizeMaxRows", "5", "autocomplete", "off", "required", ""], [1, "acciones-modal"], ["mat-stroked-button", "", "mat-dialog-close", ""]], template: function PersonasComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "nav", 2)(2, "ol", 3)(3, "li", 4)(4, "a", 5);
        \u0275\u0275text(5, "Inicio");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "li", 6);
        \u0275\u0275text(7, "Personas");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "h2");
        \u0275\u0275text(11, "Personas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 9);
        \u0275\u0275text(13, "Gesti\xF3n de la informaci\xF3n personal de los usuarios del sistema");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 10)(15, "mat-form-field", 11)(16, "mat-label");
        \u0275\u0275text(17, "Buscar");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 12);
        \u0275\u0275elementStart(19, "mat-icon", 13);
        \u0275\u0275text(20, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "button", 14);
        \u0275\u0275listener("click", function PersonasComponent_Template_button_click_21_listener() {
          \u0275\u0275restoreView(_r1);
          const modal_r2 = \u0275\u0275reference(30);
          return \u0275\u0275resetView(ctx.openDialog(modal_r2));
        });
        \u0275\u0275elementStart(22, "mat-icon");
        \u0275\u0275text(23, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " Nuevo ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(25, PersonasComponent_Conditional_25_Template, 2, 1, "div", 15);
        \u0275\u0275pipe(26, "async");
        \u0275\u0275conditionalCreate(27, PersonasComponent_Conditional_27_Template, 5, 6, "div", 15);
        \u0275\u0275pipe(28, "async");
        \u0275\u0275template(29, PersonasComponent_ng_template_29_Template, 80, 11, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c02));
        \u0275\u0275advance(14);
        \u0275\u0275property("formControl", ctx.buscar);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(\u0275\u0275pipeBind1(26, 4, ctx.personasFacade.responseCargando$) ? 25 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!\u0275\u0275pipeBind1(28, 6, ctx.personasFacade.responseCargando$) ? 27 : -1);
      }
    }, dependencies: [RouterLink, MatFormField, MatLabel, MatPrefix, MatInput, CdkTextareaAutosize, MatIcon, MatButton, MatMiniFabButton, MatIconButton, MatDialogClose, MatDialogContent, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormControlDirective, FormGroupDirective, FormControlName, LoadingComponent, MatCard, MatCardContent, MatOption, MatPaginator, MatSelect, MatTooltip, AsyncPipe, SlicePipe, DatePipe, SearchPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonasComponent, [{
    type: Component,
    args: [{ selector: "app-personas", standalone: false, template: `<div class="navigation">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a [routerLink]="['/dashboard']">Inicio</a></li>
      <li class="breadcrumb-item activo">Personas</li>
    </ol>
  </nav>

  <div class="content">
    <div class="titleNav">
      <h2>Personas</h2>
      <div class="subtitulo">Gesti\xF3n de la informaci\xF3n personal de los usuarios del sistema</div>
    </div>

    <div class="action">
      <mat-form-field appearance="outline" class="buscador">
        <mat-label>Buscar</mat-label>
        <input matInput type="text" [formControl]="buscar" placeholder="Buscar\u2026" autocomplete="off">
        <mat-icon matPrefix>search</mat-icon>
      </mat-form-field>
      <button class="button-principal" mat-flat-button (click)="openDialog(modal)">
        <mat-icon>add</mat-icon>
        Nuevo
      </button>
    </div>
  </div>
</div>

@if ((personasFacade.responseCargando$ | async)) {
<div class="contenedor-tabla">
  <app-loading [data]="4"></app-loading>
</div>
}

@if (!(personasFacade.responseCargando$ | async)) {
<div class="contenedor-tabla">

  @if ((personasFacade.responsePersonas$ | async).length === 0) {
  <div class="sin-datos">
    <mat-icon>credit_card_off</mat-icon>
    <p>No informaci\xF3n personal para listar</p>
    <button class="button-principal" mat-flat-button (click)="openDialog(modal)">
      <mat-icon>add</mat-icon>
      Agregar el primero
    </button>
  </div>
  }

  @if ((personasFacade.responsePersonas$ | async).length > 0) {
  <mat-card class="matCardPersonalizada">
    <mat-card-content>
      <div class="tabla-scroll">
        <table class="tablep" role="table">
          <thead class="theadp">
            <tr class="trp">
              <th class="thp" scope="col " role="columnheader "></th>
              <th class="thp" scope="col " role="columnheader ">C\xF3digo</th>
              <th class="thp" scope="col " role="columnheader ">Nombre</th>
              <th class="thp" scope="col " role="columnheader ">Tipo Identificaci\xF3n</th>
              <th class="thp" scope="col " role="columnheader ">Identificaci\xF3n</th>
              <th class="thp" scope="col " role="columnheader ">Fecha Nacimiento</th>
              <th class="thp" scope="col " role="columnheader ">Estado</th>
            </tr>
          </thead>
          <tbody role="rowgroup" class="tbodyp">
            @for (persona of (personasFacade.responsePersonas$ | async) | search: this.buscar?.value: ['PrimerNombre', 'PrimerApellido', 'Identificacion'] | slice:
            desde : hasta; track persona) {
            <tr class="trp" role="row">
              <td data-title="Acciones" class="tdp col-acciones">
                <div class="acciones">
                  <button class="buttonSecundary" mat-mini-fab (click)="openDialog(modalPersonas, persona)" matTooltip="Editar">
                    <mat-icon>edit</mat-icon>
                  </button>
                  <button class="btnDelete" mat-mini-fab (click)="Eliminar(persona)" matTooltip="Eliminar">
                    <mat-icon>delete</mat-icon>
                  </button>
                </div>
              </td>
              <td data-title="C\xF3digo" class="tdp col-numero">{{ persona.Id }}</td>
              <td data-title="Nombre" class="tdp td-fuerte">{{ persona.PrimerNombre }} {{ persona.SegundoNombre }} {{ persona.PrimerApellido }} {{ persona.SegundoApellido }} </td>
              <td data-title="Tipo Identificaci\xF3n" class="tdp">{{ persona.TipoIdentificacion }}</td>
              <td data-title="Tipo Identificaci\xF3n" class="tdp">{{ persona.Identificacion }}</td>
              <td data-title="Telefono" class="tdp">{{persona.FechaNacimiento | date:'yyyy-MM-dd'}}</td>
              <td data-title="Estado" class="tdp col-estado">
                <span class="pill" [class.pill-activo]="persona.Estado === 'Activo'"
                  [class.pill-inactivo]="persona.Estado !== 'Activo'">
                  {{ persona.Estado }}
                </span>
              </td>
            </tr>
            }
          </tbody>
        </table>
      </div>

      <mat-paginator [length]="(personasFacade.responsePersonas$ | async).length" [pageSize]="pageSize"
        (page)="next($event)">
      </mat-paginator>
    </mat-card-content>
  </mat-card>
  }

</div>
}
<ng-template #modal>
  <div class="modal-augajo modal-lg">
    <div class="modal-header">
      <span class="modal-titulo">
        @if (formPersonas.get('id').value == 0) { Agregar Persona } @else { Actualizar Persona }
      </span>
      <button mat-icon-button mat-dialog-close class="modal-cerrar" aria-label="Cerrar">
        <mat-icon>close</mat-icon>
      </button>
    </div>

    <mat-dialog-content class="mat-typography modal-body">

      <!-- Datos personales -->
      <div class="seccion-titulo">Datos personales</div>
      <form [formGroup]="formPersonas" class="form-grid">

        <mat-form-field appearance="fill" class="campo-6">
          <mat-label>Tipo Identificaci\xF3n</mat-label>
          <mat-select formControlName="idTipoIdentificacion" required>
            @for (t of (personasFacade.responseTipoIdentificacion$ | async); track t) {
              <mat-option [value]="t.Id">{{ t.TipoIdentificacion }}</mat-option>
            }
          </mat-select>
        </mat-form-field>

        <mat-form-field appearance="fill" class="campo-6">
          <mat-label>Identificaci\xF3n</mat-label>
          <input matInput placeholder="Identificaci\xF3n" formControlName="identificacion" required>
        </mat-form-field>

        <mat-form-field appearance="fill" class="campo-6">
          <mat-label>Primer Nombre</mat-label>
          <input matInput placeholder="Primer Nombre" formControlName="primerNombre" required>
        </mat-form-field>

        <mat-form-field appearance="fill" class="campo-6">
          <mat-label>Segundo Nombre</mat-label>
          <input matInput placeholder="Segundo Nombre" formControlName="segundoNombre">
        </mat-form-field>

        <mat-form-field appearance="fill" class="campo-6">
          <mat-label>Primer Apellido</mat-label>
          <input matInput placeholder="Primer Apellido" formControlName="primerApellido" required>
        </mat-form-field>

        <mat-form-field appearance="fill" class="campo-6">
          <mat-label>Segundo Apellido</mat-label>
          <input matInput placeholder="Segundo Apellido" formControlName="segundoApellido">
        </mat-form-field>

        <mat-form-field appearance="fill" class="campo-6">
          <mat-label>G\xE9nero</mat-label>
          <mat-select formControlName="idGenero" required>
            @for (g of (personasFacade.responseGenero$ | async); track g) {
              <mat-option [value]="g.Id">{{ g.Genero }}</mat-option>
            }
          </mat-select>
        </mat-form-field>

        <mat-form-field appearance="fill" class="campo-6">
          <mat-label>Fecha Nacimiento</mat-label>
          <input matInput formControlName="fechaNacimiento" type="date">
        </mat-form-field>
      </form>

      <!-- Residencia -->
      <div class="seccion-titulo">Informaci\xF3n de residencia</div>
      <form [formGroup]="formDireccion" class="form-grid">

        <mat-form-field appearance="fill" class="campo-6">
          <mat-label>Departamento</mat-label>
          <mat-select formControlName="idDepartamento" required>
            @for (item of (personasFacade.responseDepartamento$ | async); track item) {
              <mat-option [value]="item.Id">{{ item.Departamento }}</mat-option>
            }
          </mat-select>
        </mat-form-field>

        <mat-form-field appearance="fill" class="campo-6">
          <mat-label>Municipio</mat-label>
          <mat-select formControlName="idMunicipio" required>
            @for (item of (personasFacade.responseMunicipio$ | async); track item) {
              @if (formDireccion.get('idDepartamento').value === item.IdDepartamento) {
                <mat-option [value]="item.Id">{{ item.Municipio }}</mat-option>
              }
            }
          </mat-select>
        </mat-form-field>

        <mat-form-field appearance="fill" class="campo-6">
          <mat-label>Ciudad</mat-label>
          <input matInput placeholder="Ciudad" formControlName="ciudad" required>
        </mat-form-field>

        <mat-form-field appearance="fill" class="campo-12">
          <mat-label>Direcci\xF3n</mat-label>
          <textarea matInput placeholder="Direcci\xF3n" formControlName="direccion"
                    cdkTextareaAutosize cdkAutosizeMinRows="3" cdkAutosizeMaxRows="5"
                    autocomplete="off" required></textarea>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PersonasComponent, { className: "PersonasComponent", filePath: "src/app/modules/seguridad/personas/personas.component.ts", lineNumber: 16 });
})();

// src/app/modules/seguridad/tipo-usuario/tipo-usuario.component.ts
var import_sweetalert23 = __toESM(require_sweetalert2_all());

// src/app/modules/seguridad/tipo-usuario/tipo-usuario-facade.service.ts
var TipoUsuarioFacadeService = class _TipoUsuarioFacadeService {
  constructor() {
    this.dataApi = inject(DataApiService);
    this._mensajesHttp = inject(MensajesHttpService);
    this.Cargando$ = new BehaviorSubject(false);
    this.responseCargando$ = this.Cargando$.asObservable();
    this.TipoUsuario$ = new BehaviorSubject([]);
    this.responseTipoUsuarios$ = this.TipoUsuario$.asObservable();
    this.RelacionTipoUsuarioMenu$ = new BehaviorSubject([]);
    this.responseRelacionTipoUsuarioMenu$ = this.RelacionTipoUsuarioMenu$.asObservable();
  }
  MostrarTipoUsuarios(params) {
    this.Cargando$.next(true);
    this.TipoUsuario$.next([]);
    const request$ = this.dataApi.GetDataApi(`seguridad/tipoUsuario/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      this.TipoUsuario$.next(result.data.Table0);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.TipoUsuario$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar los tipos de usuario", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  InsertarTipoUsuarios(params, respuesta) {
    this.Cargando$.next(true);
    this.TipoUsuario$.next([]);
    const request$ = this.dataApi.PostDataApi(`seguridad/tipoUsuario/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.TipoUsuario$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al insertar el tipo de usuario", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  ActualizarTipoUsuarios(params, respuesta) {
    this.Cargando$.next(true);
    this.TipoUsuario$.next([]);
    const request$ = this.dataApi.PutDataApi(`seguridad/tipoUsuario/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.TipoUsuario$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al actualizar el tipo de usuario", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  EliminarTipoUsuarios(params, respuesta) {
    this.Cargando$.next(true);
    this.TipoUsuario$.next([]);
    const request$ = this.dataApi.DeleteDataApiUrl(`seguridad/tipoUsuario/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.TipoUsuario$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al eliminar el tipo de usuario", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  MostrarRelacionTipoUsuarioMenu(params, callback) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.GetDataApi(`seguridad/relacionTipoUsr/tipoUsuario/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      callback(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar los menus del tipo usuario", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  insertarRelacionTipoUsuarioMenu(params, respuesta) {
    const request$ = this.dataApi.PostDataApi(`seguridad/relacionTipoUsr/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al asignar el menu al tipo de usuario", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  deleteRelacionTipoUsuarioMenu(params, respuesta) {
    this.Cargando$.next(true);
    const request$ = this.dataApi.DeleteDataApiUrl(`seguridad/relacionTipoUsr/tipoUsuario/`, params).pipe(tap((result) => {
      respuesta(result);
      this.Cargando$.next(false);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al remover el menu al tipo de usuario", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  static {
    this.\u0275fac = function TipoUsuarioFacadeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TipoUsuarioFacadeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TipoUsuarioFacadeService, factory: _TipoUsuarioFacadeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TipoUsuarioFacadeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/modules/seguridad/tipo-usuario/tipo-usuario.component.ts
var _c03 = () => ["/dashboard"];
var _c12 = () => ["tipoUsuario", "Descripcion"];
function TipoUsuarioComponent_Conditional_25_Template(rf, ctx) {
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
function TipoUsuarioComponent_Conditional_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "mat-icon");
    \u0275\u0275text(2, "credit_card_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No hay tipos de usuario para listar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 15);
    \u0275\u0275listener("click", function TipoUsuarioComponent_Conditional_27_Conditional_1_Template_button_click_5_listener() {
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
function TipoUsuarioComponent_Conditional_27_Conditional_3_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 29)(1, "td", 31)(2, "div", 32)(3, "button", 33);
    \u0275\u0275listener("click", function TipoUsuarioComponent_Conditional_27_Conditional_3_For_20_Template_button_click_3_listener() {
      const tipoUsuario_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      const modal_r2 = \u0275\u0275reference(30);
      return \u0275\u0275resetView(ctx_r3.openDialog(modal_r2, tipoUsuario_r7));
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 34);
    \u0275\u0275listener("click", function TipoUsuarioComponent_Conditional_27_Conditional_3_For_20_Template_button_click_6_listener() {
      const tipoUsuario_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.Eliminar(tipoUsuario_r7));
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 35);
    \u0275\u0275listener("click", function TipoUsuarioComponent_Conditional_27_Conditional_3_For_20_Template_button_click_9_listener() {
      const tipoUsuario_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      const modalTipoUsuarioMenu_r8 = \u0275\u0275reference(32);
      return \u0275\u0275resetView(ctx_r3.openDialogAsignacion(modalTipoUsuarioMenu_r8, tipoUsuario_r7));
    });
    \u0275\u0275elementStart(10, "mat-icon");
    \u0275\u0275text(11, "widgets");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "td", 36);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 37);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 38);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 38);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 39)(22, "span", 40);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tipoUsuario_r7 = ctx.$implicit;
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(tipoUsuario_r7.Id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tipoUsuario_r7.TipoUsuario);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tipoUsuario_r7.Descripcion);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 9, tipoUsuario_r7.FechaInsercion, "yyyy-MM-dd"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("pill-activo", tipoUsuario_r7.Estado === "Activo")("pill-inactivo", tipoUsuario_r7.Estado !== "Activo");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tipoUsuario_r7.Estado, " ");
  }
}
function TipoUsuarioComponent_Conditional_27_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 19)(1, "mat-card-content")(2, "div", 20)(3, "table", 21)(4, "thead", 22)(5, "tr", 23)(6, "th", 24);
    \u0275\u0275text(7, "Acciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 25);
    \u0275\u0275text(9, "Codigo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 26);
    \u0275\u0275text(11, "Tipo Usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 26);
    \u0275\u0275text(13, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 26);
    \u0275\u0275text(15, "Fecha Ingreso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 27);
    \u0275\u0275text(17, "Estado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody", 28);
    \u0275\u0275repeaterCreate(19, TipoUsuarioComponent_Conditional_27_Conditional_3_For_20_Template, 24, 12, "tr", 29, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275pipe(22, "search");
    \u0275\u0275pipe(23, "slice");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "mat-paginator", 30);
    \u0275\u0275pipe(25, "async");
    \u0275\u0275listener("page", function TipoUsuarioComponent_Conditional_27_Conditional_3_Template_mat_paginator_page_24_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.next($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(19);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(23, 8, \u0275\u0275pipeBind3(22, 4, \u0275\u0275pipeBind1(21, 2, ctx_r3.tipoUsuarioFacade.responseTipoUsuarios$), ctx_r3.buscar == null ? null : ctx_r3.buscar.value, \u0275\u0275pureFunction0(14, _c12)), ctx_r3.desde, ctx_r3.hasta));
    \u0275\u0275advance(5);
    \u0275\u0275property("length", \u0275\u0275pipeBind1(25, 12, ctx_r3.tipoUsuarioFacade.responseTipoUsuarios$).length)("pageSize", ctx_r3.pageSize);
  }
}
function TipoUsuarioComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275conditionalCreate(1, TipoUsuarioComponent_Conditional_27_Conditional_1_Template, 9, 0, "div", 18);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275conditionalCreate(3, TipoUsuarioComponent_Conditional_27_Conditional_3_Template, 26, 15, "mat-card", 19);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275\u0275pipeBind1(2, 2, ctx_r3.tipoUsuarioFacade.responseTipoUsuarios$).length === 0 ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(4, 4, ctx_r3.tipoUsuarioFacade.responseTipoUsuarios$).length > 0 ? 3 : -1);
  }
}
function TipoUsuarioComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1, " Tipos de Usuario ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-dialog-content", 42)(3, "form", 43)(4, "div", 44)(5, "mat-form-field", 45)(6, "mat-label");
    \u0275\u0275text(7, "Tipo de Usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 47)(10, "mat-form-field", 48)(11, "mat-label");
    \u0275\u0275text(12, " Descripcion ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "textarea", 49);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "div", 50)(15, "button", 51);
    \u0275\u0275text(16, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 52);
    \u0275\u0275listener("click", function TipoUsuarioComponent_ng_template_29_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.Guardar());
    });
    \u0275\u0275text(18, "Guardar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r3.formTipoUsuario);
  }
}
function TipoUsuarioComponent_ng_template_31_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-loading", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("data", 4);
  }
}
function TipoUsuarioComponent_ng_template_31_Conditional_6_For_2_For_9_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function TipoUsuarioComponent_ng_template_31_Conditional_6_For_2_For_9_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const hijo_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.asignarMenu(hijo_r13.Id));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd()();
  }
}
function TipoUsuarioComponent_ng_template_31_Conditional_6_For_2_For_9_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 66);
    \u0275\u0275listener("click", function TipoUsuarioComponent_ng_template_31_Conditional_6_For_2_For_9_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const hijo_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.quitarMenu(hijo_r13.Id));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "remove_circle_outline");
    \u0275\u0275elementEnd()();
  }
}
function TipoUsuarioComponent_ng_template_31_Conditional_6_For_2_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "mat-divider");
    \u0275\u0275elementStart(2, "div", 59)(3, "div", 60);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 61);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 62);
    \u0275\u0275conditionalCreate(8, TipoUsuarioComponent_ng_template_31_Conditional_6_For_2_For_9_Conditional_8_Template, 3, 0, "button", 63);
    \u0275\u0275conditionalCreate(9, TipoUsuarioComponent_ng_template_31_Conditional_6_For_2_For_9_Conditional_9_Template, 3, 0, "button", 64);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const hijo_r13 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", hijo_r13.Menu, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", hijo_r13.Descripcion, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!hijo_r13.asignado ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(hijo_r13.asignado ? 9 : -1);
  }
}
function TipoUsuarioComponent_ng_template_31_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-expansion-panel", 56);
    \u0275\u0275listener("click", function TipoUsuarioComponent_ng_template_31_Conditional_6_For_2_Template_mat_expansion_panel_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.clickButton = false);
    });
    \u0275\u0275elementStart(1, "mat-expansion-panel-header")(2, "mat-panel-title");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-panel-description")(5, "div", 57);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(8, TipoUsuarioComponent_ng_template_31_Conditional_6_For_2_For_9_Template, 10, 4, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const padre_r15 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r3.clickButton);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", padre_r15.Menu, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", padre_r15.Descripcion, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(padre_r15.hijos);
  }
}
function TipoUsuarioComponent_ng_template_31_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-accordion", 54);
    \u0275\u0275repeaterCreate(1, TipoUsuarioComponent_ng_template_31_Conditional_6_For_2_Template, 10, 3, "mat-expansion-panel", 55, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(3, "mat-paginator", 30);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275listener("page", function TipoUsuarioComponent_ng_template_31_Conditional_6_Template_mat_paginator_page_3_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.next($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.arrayMenusTipoUsuario);
    \u0275\u0275advance(2);
    \u0275\u0275property("length", \u0275\u0275pipeBind1(4, 2, ctx_r3.menuFacade.responseMenus$).length)("pageSize", ctx_r3.pageSize);
  }
}
function TipoUsuarioComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1, " Asignaci\xF3n de menus ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-dialog-content", 53);
    \u0275\u0275conditionalCreate(3, TipoUsuarioComponent_ng_template_31_Conditional_3_Template, 2, 1, "div");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275element(5, "div");
    \u0275\u0275conditionalCreate(6, TipoUsuarioComponent_ng_template_31_Conditional_6_Template, 5, 4, "mat-accordion", 54);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementStart(8, "div", 50)(9, "button", 51);
    \u0275\u0275text(10, "Cancelar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(4, 2, ctx_r3.menuFacade.responseCargando$) ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.arrayMenusTipoUsuario.length > 0 && !\u0275\u0275pipeBind1(7, 4, ctx_r3.tipoUsuarioFacade.responseCargando$) ? 6 : -1);
  }
}
var TipoUsuarioComponent = class _TipoUsuarioComponent {
  constructor() {
    this.tipoUsuarioFacade = inject(TipoUsuarioFacadeService);
    this.dialog = inject(MatDialog);
    this.toast = inject(ToastrServiceLocal);
    this.menuFacade = inject(MenusFacadeService);
    this.buscar = new FormControl("");
    this.pageSize = 10;
    this.page = 0;
    this.pageIndex = 0;
    this.desde = 0;
    this.hasta = 10;
    this.paramsAsignacion = { id: 0, idTipoUsuario: 0, idMenu: 0, idEstado: null };
    this.arrayMenusTipoUsuario = [];
    this.tipoUsuarioFacade.MostrarTipoUsuarios("0");
    this.menuFacade.MostrarMenus("0");
  }
  ngOnInit() {
  }
  openDialog(template, params) {
    const dialogRef = this.dialog.open(template, {
      panelClass: "app-full-bleed-dialog",
      //Agregar una clase ccs al dialogo
      disableClose: true
    });
    this.formTipoUsuario = new FormGroup({
      //Valores de front para insertar tipo de pedido
      Id: new FormControl(params?.Id || "0"),
      TipoUsuario: new FormControl(params?.TipoUsuario || "", [Validators.required]),
      Descripcion: new FormControl(params?.Descripcion || ""),
      usuario: new FormControl(""),
      idEstado: new FormControl(params?.IdEstado || 1)
    });
  }
  openDialogAsignacion(template, params) {
    this.paramsAsignacion.idTipoUsuario = params.Id;
    this.actualizarRelacionTipoUsuarioMenu(params.Id);
    const dialogRef = this.dialog.open(template, {
      panelClass: "app-full-bleed-dialog",
      //Agregar una clase ccs al dialogo
      width: "90%",
      disableClose: true
    });
  }
  actualizarRelacionTipoUsuarioMenu(id) {
    this.arrayMenusTipoUsuario = [];
    this.tipoUsuarioFacade.MostrarRelacionTipoUsuarioMenu(`${id}`, (respuesta) => {
      if (respuesta.hasError === false) {
        this.menuFacade.MostrarMenusAsignacion("0", (result) => {
          for (const menu of result) {
            for (const menuTipoUsuario of respuesta.data.Table0) {
              for (const hijos of menu.hijos) {
                if (hijos.Id === menuTipoUsuario.IdMenu) {
                  hijos.asignado = true;
                  break;
                }
              }
            }
            this.arrayMenusTipoUsuario.push(menu);
          }
        });
      }
    });
  }
  Guardar() {
    if (this.formTipoUsuario.invalid) {
      this.toast.mensajeWarning("Es requerido ingresar los campos validos", "");
      this.formTipoUsuario.markAllAsTouched();
      return;
    }
    if (this.formTipoUsuario.get("Id").value === "0") {
      this.tipoUsuarioFacade.InsertarTipoUsuarios(this.formTipoUsuario.value, (respuesta) => {
        this.tipoUsuarioFacade.MostrarTipoUsuarios("0");
        this.dialog.closeAll();
      });
    } else {
      this.tipoUsuarioFacade.ActualizarTipoUsuarios(this.formTipoUsuario.value, (respuesta) => {
        this.tipoUsuarioFacade.MostrarTipoUsuarios("0");
        this.dialog.closeAll();
      });
    }
  }
  Eliminar(params) {
    import_sweetalert23.default.fire({
      title: "Confirmaci\xF3n",
      html: ` <p> \xBFEsta seguro quiere inhabilitar el Tipo de Usuario <b>${params.TipoUsuario}</b>? </p>`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#003399",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.tipoUsuarioFacade.EliminarTipoUsuarios(params.Id, (respuesta) => {
          this.tipoUsuarioFacade.MostrarTipoUsuarios("0");
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
  asignarMenu(idMenu) {
    this.paramsAsignacion.idMenu = idMenu;
    this.tipoUsuarioFacade.insertarRelacionTipoUsuarioMenu(this.paramsAsignacion, (respuesta) => {
      if (respuesta.hasError === false) {
        this.actualizarRelacionTipoUsuarioMenu(this.paramsAsignacion.idTipoUsuario);
      }
    });
  }
  quitarMenu(idMenu) {
    this.paramsAsignacion.idMenu = idMenu;
    this.tipoUsuarioFacade.deleteRelacionTipoUsuarioMenu(`${this.paramsAsignacion.idTipoUsuario}/${this.paramsAsignacion.idMenu}`, (respuesta) => {
      if (respuesta.hasError === false) {
        this.actualizarRelacionTipoUsuarioMenu(this.paramsAsignacion.idTipoUsuario);
      }
    });
  }
  static {
    this.\u0275fac = function TipoUsuarioComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TipoUsuarioComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TipoUsuarioComponent, selectors: [["app-tipo-usuario"]], standalone: false, decls: 33, vars: 9, consts: [["modal", ""], ["modalTipoUsuarioMenu", ""], [1, "navigation"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "activo"], [1, "content"], [1, "titleNav"], [1, "subtitulo"], [1, "action"], ["appearance", "outline", 1, "buscador"], ["matInput", "", "type", "text", "placeholder", "Buscar\u2026", "autocomplete", "off", 3, "formControl"], ["matPrefix", ""], ["mat-flat-button", "", 1, "button-principal", 3, "click"], [1, "contenedor-tabla"], [3, "data"], [1, "sin-datos"], [1, "matCardPersonalizada"], [1, "tabla-scroll"], ["role", "table", 1, "tablep"], [1, "theadp"], [1, "trp"], [1, "thp", "col-acciones"], [1, "thp", "col-numero"], [1, "thp"], [1, "thp", "col-estado"], ["role", "rowgroup", 1, "tbodyp"], ["role", "row", 1, "trp"], [3, "page", "length", "pageSize"], ["data-title", "Acciones", 1, "tdp", "col-acciones"], [1, "acciones"], ["mat-mini-fab", "", 1, "buttonSecundary", 3, "click"], ["mat-mini-fab", "", 1, "btnDelete", 2, "margin-left", "5px", 3, "click"], ["mat-mini-fab", "", 1, "buttonView", 2, "margin-left", "5px", 3, "click"], ["data-title", "C\xF3digo", 1, "tdp", "col-numero"], ["data-title", "Genero", 1, "tdp", "td-fuerte"], ["data-title", "Genero", 1, "tdp"], ["data-title", "Estado", 1, "tdp", "col-estado"], [1, "pill"], [1, "matCardHeader"], [1, "mat-typography"], [3, "formGroup"], [1, "row"], ["appearance", "outline", 1, "col-md-12", "mt-2"], ["matInput", "", "placeholder", "Tipo de Usuario", "formControlName", "TipoUsuario", "required", ""], [1, "col-md-12", "mt-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "placeholder", "Descripcion", "formControlName", "Descripcion", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "10", "autocomplete", "off", "required", ""], [1, "text-right"], ["mat-raised-button", "", "mat-dialog-close", "", 2, "margin-right", "5px"], ["mat-raised-button", "", 1, "buttonPrincipal", 2, "margin-right", "5px", 3, "click"], [1, "mat-typography", 2, "height", "90%"], ["multi", "", 1, "example-headers-align"], [1, "mat-expansion-panelPersonalizado", 3, "disabled"], [1, "mat-expansion-panelPersonalizado", 3, "click", "disabled"], [2, "width", "60%"], [1, "text-right", 2, "width", "40%"], [1, "contentAccordion", 2, "display", "flex", "align-items", "center", "padding-left", "24px", "padding-right", "24px", "padding-top", "5px", "padding-bottom", "5px"], [2, "width", "30%"], [2, "width", "50%"], [1, "text-right", 2, "width", "20%"], ["mat-mini-fab", "", 1, "buttonPrincipal", 2, "box-shadow", "0px"], ["mat-mini-fab", "", 1, "btnDelete", 2, "box-shadow", "0px"], ["mat-mini-fab", "", 1, "buttonPrincipal", 2, "box-shadow", "0px", 3, "click"], ["mat-mini-fab", "", 1, "btnDelete", 2, "box-shadow", "0px", 3, "click"]], template: function TipoUsuarioComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "nav", 3)(2, "ol", 4)(3, "li", 5)(4, "a", 6);
        \u0275\u0275text(5, "Inicio");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "li", 7);
        \u0275\u0275text(7, "Tipos de Usuarios");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 8)(9, "div", 9)(10, "h2");
        \u0275\u0275text(11, "Tipos de Usuarios");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 10);
        \u0275\u0275text(13, "Gesti\xF3n de los tipos de usuarios");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 11)(15, "mat-form-field", 12)(16, "mat-label");
        \u0275\u0275text(17, "Buscar");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 13);
        \u0275\u0275elementStart(19, "mat-icon", 14);
        \u0275\u0275text(20, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "button", 15);
        \u0275\u0275listener("click", function TipoUsuarioComponent_Template_button_click_21_listener() {
          \u0275\u0275restoreView(_r1);
          const modal_r2 = \u0275\u0275reference(30);
          return \u0275\u0275resetView(ctx.openDialog(modal_r2));
        });
        \u0275\u0275elementStart(22, "mat-icon");
        \u0275\u0275text(23, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " Nuevo ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(25, TipoUsuarioComponent_Conditional_25_Template, 2, 1, "div", 16);
        \u0275\u0275pipe(26, "async");
        \u0275\u0275conditionalCreate(27, TipoUsuarioComponent_Conditional_27_Template, 5, 6, "div", 16);
        \u0275\u0275pipe(28, "async");
        \u0275\u0275template(29, TipoUsuarioComponent_ng_template_29_Template, 19, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(31, TipoUsuarioComponent_ng_template_31_Template, 11, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c03));
        \u0275\u0275advance(14);
        \u0275\u0275property("formControl", ctx.buscar);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(\u0275\u0275pipeBind1(26, 4, ctx.tipoUsuarioFacade.responseCargando$) ? 25 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!\u0275\u0275pipeBind1(28, 6, ctx.tipoUsuarioFacade.responseCargando$) ? 27 : -1);
      }
    }, dependencies: [RouterLink, MatFormField, MatLabel, MatPrefix, MatInput, CdkTextareaAutosize, MatIcon, MatButton, MatMiniFabButton, MatDialogClose, MatDialogContent, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormControlDirective, FormGroupDirective, FormControlName, LoadingComponent, MatCard, MatCardContent, MatPaginator, MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatDivider, AsyncPipe, SlicePipe, DatePipe, SearchPipe], styles: ["\n.example-action-buttons[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], \n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.mat-expansion-panelPersonalizado[_ngcontent-%COMP%] {\n  background-color: rgb(255, 255, 255) !important;\n  margin-bottom: 5px !important;\n  align-items: center !important;\n}\n.mat-expansion-panelPersonalizado[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%] {\n  align-items: center !important;\n  display: flex !important;\n}\n.mat-expansion-panelPersonalizado[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%], \n.mat-expansion-panelPersonalizado[_ngcontent-%COMP%]   .mat-expansion-indicator[_ngcontent-%COMP%]::after {\n  color: black !important;\n}\n.mat-expansion-panelPersonalizado[_ngcontent-%COMP%]   .contentAccordion[_ngcontent-%COMP%] {\n  border-left-width: 5px !important;\n  border-color: #333a56 !important;\n  background-color: #f8fafc !important;\n  border-left-style: solid !important;\n}\n.mat-expansion-panelPersonalizado[_ngcontent-%COMP%]   .mat-mini-fab[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n.cambioPrueba[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=tipo-usuario.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TipoUsuarioComponent, [{
    type: Component,
    args: [{ selector: "app-tipo-usuario", standalone: false, template: `<div class="navigation">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a [routerLink]="['/dashboard']">Inicio</a></li>
      <li class="breadcrumb-item activo">Tipos de Usuarios</li>
    </ol>
  </nav>

  <div class="content">
    <div class="titleNav">
      <h2>Tipos de Usuarios</h2>
      <div class="subtitulo">Gesti\xF3n de los tipos de usuarios</div>
    </div>

    <div class="action">
      <mat-form-field appearance="outline" class="buscador">
        <mat-label>Buscar</mat-label>
        <input matInput type="text" [formControl]="buscar" placeholder="Buscar\u2026" autocomplete="off">
        <mat-icon matPrefix>search</mat-icon>
      </mat-form-field>
      <button class="button-principal" mat-flat-button (click)="openDialog(modal)">
        <mat-icon>add</mat-icon>
        Nuevo
      </button>
    </div>
  </div>
</div>

@if ((tipoUsuarioFacade.responseCargando$ | async)) {
<div class="contenedor-tabla">
  <app-loading [data]="4"></app-loading>
</div>
}

@if (!(tipoUsuarioFacade.responseCargando$ | async)) {
<div class="contenedor-tabla">

  @if ((tipoUsuarioFacade.responseTipoUsuarios$ | async).length === 0) {
  <div class="sin-datos">
    <mat-icon>credit_card_off</mat-icon>
    <p>No hay tipos de usuario para listar</p>
    <button class="button-principal" mat-flat-button (click)="openDialog(modal)">
      <mat-icon>add</mat-icon>
      Agregar el primero
    </button>
  </div>
  }

  @if ((tipoUsuarioFacade.responseTipoUsuarios$ | async).length > 0) {
  <mat-card class="matCardPersonalizada">
    <mat-card-content>
      <div class="tabla-scroll">
        <table class="tablep" role="table">
          <thead class="theadp">
            <tr class="trp">
              <th class="thp col-acciones">Acciones</th>
              <th class="thp col-numero">Codigo</th>
              <th class="thp">Tipo Usuario</th>
              <th class="thp">Descripci\xF3n</th>
              <th class="thp">Fecha Ingreso</th>
              <th class="thp col-estado">Estado</th>
            </tr>
          </thead>
          <tbody role="rowgroup" class="tbodyp">
            @for (tipoUsuario of (tipoUsuarioFacade.responseTipoUsuarios$ | async) | search: this.buscar?.value:
            ['tipoUsuario' ,'Descripcion'] | slice: desde : hasta; track tipoUsuario) {
            <tr class="trp" role="row">
              <td data-title="Acciones" class="tdp col-acciones">
                <div class="acciones">
                  <button class="buttonSecundary" mat-mini-fab
                    (click)="openDialog(modal, tipoUsuario)"><!--Levanta el modal con los datos pre cargados-->
                    <mat-icon>edit</mat-icon>
                  </button>
                  <button class="btnDelete" mat-mini-fab (click)="Eliminar(tipoUsuario)"
                    style="margin-left: 5px;"><!--Eliminar-->
                    <mat-icon>delete</mat-icon>
                  </button>
                  <button class="buttonView" mat-mini-fab style="margin-left: 5px;"
                    (click)="openDialogAsignacion(modalTipoUsuarioMenu, tipoUsuario)"><!--Eliminar-->
                    <mat-icon>widgets</mat-icon>
                  </button>
                </div>
              </td>
              <td data-title="C\xF3digo" class="tdp col-numero">{{ tipoUsuario.Id }}</td>
              <td data-title="Genero" class="tdp td-fuerte">{{ tipoUsuario.TipoUsuario }}</td>
              <td data-title="Genero" class="tdp ">{{ tipoUsuario.Descripcion }}</td>
              <td data-title="Genero" class="tdp ">{{tipoUsuario.FechaInsercion | date:'yyyy-MM-dd'}}</td>
              <td data-title="Estado" class="tdp col-estado">
                <span class="pill" [class.pill-activo]="tipoUsuario.Estado === 'Activo'"
                  [class.pill-inactivo]="tipoUsuario.Estado !== 'Activo'">
                  {{ tipoUsuario.Estado }}
                </span>
              </td>
            </tr>
            }
          </tbody>
        </table>
      </div>

      <mat-paginator [length]="(tipoUsuarioFacade.responseTipoUsuarios$ | async).length" [pageSize]="pageSize"
        (page)="next($event)">
      </mat-paginator>
    </mat-card-content>
  </mat-card>
  }

</div>
}

<ng-template #modal>
  <div class="matCardHeader">
    Tipos de Usuario
  </div>
  <mat-dialog-content class="mat-typography">
    <form [formGroup]="formTipoUsuario">
      <div class="row">
        <mat-form-field appearance="outline" class="col-md-12 mt-2">
          <mat-label>Tipo de Usuario</mat-label>
          <input matInput placeholder="Tipo de Usuario" formControlName="TipoUsuario" required>
        </mat-form-field>

        <div class="col-md-12 mt-2">
          <mat-form-field class="example-full-width" appearance="outline">
            <mat-label> Descripcion </mat-label>
            <textarea matInput placeholder="Descripcion" formControlName="Descripcion" cdkTextareaAutosize
              cdkAutosizeMinRows="10" autocomplete="off" required></textarea>
          </mat-form-field>
        </div>
      </div>
    </form>
    <div class="text-right">

      <button style="margin-right: 5px;" mat-raised-button mat-dialog-close>Cancelar</button>

      <button class="buttonPrincipal" style="margin-right: 5px;" mat-raised-button (click)="Guardar()">Guardar</button>

    </div>
  </mat-dialog-content>
</ng-template>

<ng-template #modalTipoUsuarioMenu>
  <div class="matCardHeader">
    Asignaci\xF3n de menus
  </div>
  <mat-dialog-content class="mat-typography" style="height: 90%;">
    @if ((menuFacade.responseCargando$ | async)) {
    <div>
      <app-loading [data]="4"></app-loading>
    </div>
    }
    <div>

    </div>
    @if (arrayMenusTipoUsuario.length > 0 && !(tipoUsuarioFacade.responseCargando$ | async)) {
    <mat-accordion class="example-headers-align" multi>
      @for (padre of arrayMenusTipoUsuario; track padre) {
      <mat-expansion-panel class="mat-expansion-panelPersonalizado" [disabled]="clickButton"
        (click)="clickButton=false">
        <mat-expansion-panel-header>
          <mat-panel-title>
            {{padre.Menu}}
          </mat-panel-title>
          <mat-panel-description>
            <div style="width: 60%;">
              {{padre.Descripcion}}
            </div>
            <div style="width: 40%;" class="text-right">
              <!-- <button mat-mini-fab class="buttonPrincipal" style="box-shadow: 0px;" (click)="asignarMenu(padre.Id)">
                  <mat-icon>check_circle</mat-icon>
                </button>
                -->
            </div>
          </mat-panel-description>
        </mat-expansion-panel-header>
        @for (hijo of padre.hijos; track hijo) {
        <div>
          <mat-divider></mat-divider>
          <div class="contentAccordion"
            style="display: flex; align-items: center; padding-left: 24px; padding-right: 24px; padding-top: 5px; padding-bottom: 5px;">
            <div style="width: 30%;">
              {{hijo.Menu}}
            </div>
            <div style="width: 50%;">
              {{hijo.Descripcion}}
            </div>
            <div style="width: 20%;" class="text-right">
              @if (!hijo.asignado) {
              <button mat-mini-fab class="buttonPrincipal" style="box-shadow: 0px;" (click)="asignarMenu(hijo.Id)">
                <mat-icon>check_circle</mat-icon>
              </button>
              }
              @if (hijo.asignado) {
              <button mat-mini-fab class="btnDelete" style="box-shadow: 0px;" (click)="quitarMenu(hijo.Id)">
                <mat-icon>remove_circle_outline</mat-icon>
              </button>
              }
            </div>
          </div>
        </div>
        }
      </mat-expansion-panel>
      }
      <mat-paginator [length]="(menuFacade.responseMenus$ | async).length " [pageSize]="pageSize"
        (page)="next($event) ">
      </mat-paginator>
    </mat-accordion>
    }
    <div class="text-right">
      <button style="margin-right: 5px;" mat-raised-button mat-dialog-close>Cancelar</button>
    </div>
  </mat-dialog-content>
</ng-template>`, styles: ["/* src/app/modules/seguridad/tipo-usuario/tipo-usuario.component.scss */\n.example-action-buttons {\n  padding-bottom: 20px;\n}\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n.example-headers-align .mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n.mat-expansion-panelPersonalizado {\n  background-color: rgb(255, 255, 255) !important;\n  margin-bottom: 5px !important;\n  align-items: center !important;\n}\n.mat-expansion-panelPersonalizado .mat-expansion-panel-header-title {\n  align-items: center !important;\n  display: flex !important;\n}\n.mat-expansion-panelPersonalizado .mat-expansion-panel-header-description,\n.mat-expansion-panelPersonalizado .mat-expansion-indicator::after {\n  color: black !important;\n}\n.mat-expansion-panelPersonalizado .contentAccordion {\n  border-left-width: 5px !important;\n  border-color: #333a56 !important;\n  background-color: #f8fafc !important;\n  border-left-style: solid !important;\n}\n.mat-expansion-panelPersonalizado .mat-mini-fab {\n  box-shadow: none !important;\n}\n.cambioPrueba {\n  display: none;\n}\n/*# sourceMappingURL=tipo-usuario.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TipoUsuarioComponent, { className: "TipoUsuarioComponent", filePath: "src/app/modules/seguridad/tipo-usuario/tipo-usuario.component.ts", lineNumber: 17 });
})();

// src/app/modules/seguridad/usuarios/usuarios.component.ts
var import_sweetalert24 = __toESM(require_sweetalert2_all());

// src/app/modules/seguridad/usuarios/usuarios-facade.service.ts
var UsuariosFacadeService = class _UsuariosFacadeService {
  constructor() {
    this.dataApi = inject(DataApiService);
    this._mensajesHttp = inject(MensajesHttpService);
    this.Cargando$ = new BehaviorSubject(false);
    this.responseCargando$ = this.Cargando$.asObservable();
    this.usuario$ = new BehaviorSubject([]);
    this.responseUsuarios$ = this.usuario$.asObservable();
    this.TipoUsuario$ = new BehaviorSubject([]);
    this.responseTipoUsuarios$ = this.TipoUsuario$.asObservable();
    this.persona$ = new BehaviorSubject([]);
    this.responsePersonas$ = this.persona$.asObservable();
  }
  MostrarUsuario(params) {
    this.Cargando$.next(true);
    this.usuario$.next([]);
    const request$ = this.dataApi.GetDataApi(`seguridad/usuario/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      this.usuario$.next(result.data.Table0);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.usuario$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar los  usuarios", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  InsertarUsuario(params, respuesta) {
    this.Cargando$.next(true);
    this.usuario$.next([]);
    const request$ = this.dataApi.PostDataApi(`seguridad/usuario/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.usuario$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al insertar el usuario", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  ActualizarUsuario(params, respuesta) {
    this.Cargando$.next(true);
    this.usuario$.next([]);
    const request$ = this.dataApi.PutDataApi(`seguridad/usuario/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.usuario$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al actualizar el usuario", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  EliminarUsuario(params, respuesta) {
    this.Cargando$.next(true);
    this.usuario$.next([]);
    const request$ = this.dataApi.DeleteDataApiUrl(`seguridad/usuario/`, params).pipe(tap((result) => {
      respuesta(result);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.usuario$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al eliminar el usuario", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  MostrarTipoUsuarios(params) {
    this.Cargando$.next(true);
    this.TipoUsuario$.next([]);
    const request$ = this.dataApi.GetDataApi(`seguridad/tipoUsuario/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      this.TipoUsuario$.next(result.data.Table0);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.TipoUsuario$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar los tipos de usuario", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  MostrarPersona(params) {
    this.Cargando$.next(true);
    this.persona$.next([]);
    const request$ = this.dataApi.GetDataApi(`personas/personas/`, params).pipe(tap((result) => {
      this.Cargando$.next(false);
      this.persona$.next(result.data.Table0);
    }), catchError((error) => {
      this.Cargando$.next(false);
      this.persona$.next([]);
      this._mensajesHttp.mostrarErrorHttp(error, "Ocurrio un error al mostrar las personas", "");
      return EMPTY;
    }));
    return request$.subscribe();
  }
  static {
    this.\u0275fac = function UsuariosFacadeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UsuariosFacadeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UsuariosFacadeService, factory: _UsuariosFacadeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsuariosFacadeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/modules/seguridad/usuarios/usuarios.component.ts
var _c04 = () => ["/dashboard"];
var _c13 = () => ["Usuario", "TipoUsuario", "PrimerNombre", "NombrbeOrganizacion"];
function UsuariosComponent_Conditional_25_Template(rf, ctx) {
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
function UsuariosComponent_Conditional_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "mat-icon");
    \u0275\u0275text(2, "credit_card_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No hay usuarios para listar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 14);
    \u0275\u0275listener("click", function UsuariosComponent_Conditional_27_Conditional_1_Template_button_click_5_listener() {
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
function UsuariosComponent_Conditional_27_Conditional_3_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 28)(1, "td", 30)(2, "div", 31)(3, "button", 32);
    \u0275\u0275listener("click", function UsuariosComponent_Conditional_27_Conditional_3_For_24_Template_button_click_3_listener() {
      const usuario_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      const modal_r2 = \u0275\u0275reference(30);
      return \u0275\u0275resetView(ctx_r3.openDialog(modal_r2, usuario_r7));
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 33);
    \u0275\u0275listener("click", function UsuariosComponent_Conditional_27_Conditional_3_For_24_Template_button_click_6_listener() {
      const usuario_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.Eliminar(usuario_r7));
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
    \u0275\u0275elementStart(15, "td", 37);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 38);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 39);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 40)(23, "span", 41);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const usuario_r7 = ctx.$implicit;
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(usuario_r7.Id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(usuario_r7.Usuario);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(usuario_r7.TipoUsuario);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", usuario_r7.PrimerNombre, " ", usuario_r7.PrimerApellido);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(usuario_r7.UsuarioInsercion);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 12, usuario_r7.FechaInsercion, "yyyy-MM-dd"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("pill-activo", usuario_r7.Estado === "Activo")("pill-inactivo", usuario_r7.Estado !== "Activo");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", usuario_r7.Estado, " ");
  }
}
function UsuariosComponent_Conditional_27_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 18)(1, "mat-card-content")(2, "div", 19)(3, "table", 20)(4, "thead", 21)(5, "tr", 22)(6, "th", 23);
    \u0275\u0275text(7, "Acciones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 24);
    \u0275\u0275text(9, "Codigo Usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 25);
    \u0275\u0275text(11, "Usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 25);
    \u0275\u0275text(13, "Tipo de Usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 25);
    \u0275\u0275text(15, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 25);
    \u0275\u0275text(17, "Usuario Ingreso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 25);
    \u0275\u0275text(19, "Fecha Ingreso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 26);
    \u0275\u0275text(21, "Estado");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody", 27);
    \u0275\u0275repeaterCreate(23, UsuariosComponent_Conditional_27_Conditional_3_For_24_Template, 25, 15, "tr", 28, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(25, "async");
    \u0275\u0275pipe(26, "search");
    \u0275\u0275pipe(27, "slice");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "mat-paginator", 29);
    \u0275\u0275pipe(29, "async");
    \u0275\u0275listener("page", function UsuariosComponent_Conditional_27_Conditional_3_Template_mat_paginator_page_28_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.next($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(23);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(27, 8, \u0275\u0275pipeBind3(26, 4, \u0275\u0275pipeBind1(25, 2, ctx_r3.usuarioFacade.responseUsuarios$), ctx_r3.buscar == null ? null : ctx_r3.buscar.value, \u0275\u0275pureFunction0(14, _c13)), ctx_r3.desde, ctx_r3.hasta));
    \u0275\u0275advance(5);
    \u0275\u0275property("length", \u0275\u0275pipeBind1(29, 12, ctx_r3.usuarioFacade.responseUsuarios$).length)("pageSize", ctx_r3.pageSize);
  }
}
function UsuariosComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275conditionalCreate(1, UsuariosComponent_Conditional_27_Conditional_1_Template, 9, 0, "div", 17);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275conditionalCreate(3, UsuariosComponent_Conditional_27_Conditional_3_Template, 30, 15, "mat-card", 18);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275\u0275pipeBind1(2, 2, ctx_r3.usuarioFacade.responseUsuarios$).length === 0 ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(4, 4, ctx_r3.usuarioFacade.responseUsuarios$).length > 0 ? 3 : -1);
  }
}
function UsuariosComponent_ng_template_29_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const usuario_r9 = ctx.$implicit;
    \u0275\u0275property("value", usuario_r9.Id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", usuario_r9.PrimerNombre, " ", usuario_r9.PrimerApellido);
  }
}
function UsuariosComponent_ng_template_29_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const usuario_r10 = ctx.$implicit;
    \u0275\u0275property("value", usuario_r10.Id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(usuario_r10.TipoUsuario);
  }
}
function UsuariosComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1, " Usuario ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-dialog-content", 43)(3, "form", 44)(4, "div", 45)(5, "mat-form-field", 46)(6, "mat-label");
    \u0275\u0275text(7, "Persona");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-select", 47);
    \u0275\u0275repeaterCreate(9, UsuariosComponent_ng_template_29_For_10_Template, 2, 3, "mat-option", 48, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-hint");
    \u0275\u0275text(13, "Seleccionar la persona");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "mat-form-field", 46)(15, "mat-label");
    \u0275\u0275text(16, "Tipo de Usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-select", 49);
    \u0275\u0275repeaterCreate(18, UsuariosComponent_ng_template_29_For_19_Template, 2, 2, "mat-option", 48, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-hint");
    \u0275\u0275text(22, "Seleccionar el tipo de Usuario");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "mat-form-field", 50)(24, "mat-label");
    \u0275\u0275text(25, "Usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-form-field", 46)(28, "mat-label");
    \u0275\u0275text(29, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 52);
    \u0275\u0275elementStart(31, "button", 53);
    \u0275\u0275listener("click", function UsuariosComponent_ng_template_29_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.hide = !ctx_r3.hide);
    });
    \u0275\u0275elementStart(32, "mat-icon");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 54)(35, "button", 55);
    \u0275\u0275listener("click", function UsuariosComponent_ng_template_29_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.generarPassRandom());
    });
    \u0275\u0275elementStart(36, "mat-icon");
    \u0275\u0275text(37, " autorenew ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(38, "div", 56)(39, "button", 57);
    \u0275\u0275text(40, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 58);
    \u0275\u0275listener("click", function UsuariosComponent_ng_template_29_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.Guardar());
    });
    \u0275\u0275text(42, "Guardar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r3.formUsuario);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(11, 5, ctx_r3.usuarioFacade.responsePersonas$));
    \u0275\u0275advance(9);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(20, 7, ctx_r3.usuarioFacade.responseTipoUsuarios$));
    \u0275\u0275advance(12);
    \u0275\u0275property("type", ctx_r3.hide ? "password" : "text");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Hide password")("aria-pressed", ctx_r3.hide);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.hide ? "visibility_off" : "visibility");
  }
}
var UsuariosComponent = class _UsuariosComponent {
  constructor() {
    this.usuarioFacade = inject(UsuariosFacadeService);
    this.dialog = inject(MatDialog);
    this.toast = inject(ToastrServiceLocal);
    this.buscar = new FormControl("");
    this.pageSize = 10;
    this.page = 0;
    this.pageIndex = 0;
    this.desde = 0;
    this.hasta = 10;
    this.hide = true;
    this.usuarioFacade.MostrarUsuario("0");
    this.usuarioFacade.MostrarPersona("0");
    this.usuarioFacade.MostrarTipoUsuarios("0");
  }
  ngOnInit() {
  }
  openDialog(template, params) {
    const dialogRef = this.dialog.open(template, {
      panelClass: "app-full-bleed-dialog",
      //Agregar una clase ccs al dialogo
      disableClose: true
    });
    this.formUsuario = new FormGroup({
      //Valores de front para insertar tipo de pedido
      Id: new FormControl(params?.Id || "0"),
      IdPersona: new FormControl(params?.IdPersona || "0", [Validators.required]),
      TipoUsuario: new FormControl(params?.IdTipoUsuario || "", [Validators.required]),
      Usuario: new FormControl(params?.Usuario || "", [Validators.required]),
      Password: new FormControl(params?.Password || ""),
      UsuarioI: new FormControl(""),
      idEstado: new FormControl(params?.IdEstado || 1)
    });
  }
  Guardar() {
    if (this.formUsuario.invalid) {
      this.toast.mensajeWarning("Es requerido ingresar los campos validos", "");
      this.formUsuario.markAllAsTouched();
      return;
    }
    if (this.formUsuario.get("Id").value === "0") {
      this.usuarioFacade.InsertarUsuario(this.formUsuario.value, (respuesta) => {
        this.usuarioFacade.MostrarUsuario("0");
        this.dialog.closeAll();
      });
    } else {
      this.usuarioFacade.ActualizarUsuario(this.formUsuario.value, (respuesta) => {
        this.usuarioFacade.MostrarUsuario("0");
        this.dialog.closeAll();
      });
    }
  }
  Eliminar(params) {
    import_sweetalert24.default.fire({
      title: "Confirmaci\xF3n",
      html: ` <p> \xBFEsta seguro quiere inhabilitar el Tipo de Usuario <b>${params.usuario}</b>? </p>`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#003399",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioFacade.EliminarUsuario(params.Id, (respuesta) => {
          this.usuarioFacade.MostrarUsuario("0");
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
  generarPassRandom() {
    var randomstring = Math.random().toString(36).slice(-12);
    this.formUsuario.get("Password").setValue(randomstring);
  }
  static {
    this.\u0275fac = function UsuariosComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UsuariosComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsuariosComponent, selectors: [["app-usuarios"]], standalone: false, decls: 31, vars: 9, consts: [["modal", ""], [1, "navigation"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "activo"], [1, "content"], [1, "titleNav"], [1, "subtitulo"], [1, "action"], ["appearance", "outline", 1, "buscador"], ["matInput", "", "type", "text", "placeholder", "Buscar\u2026", "autocomplete", "off", 3, "formControl"], ["matPrefix", ""], ["mat-flat-button", "", 1, "button-principal", 3, "click"], [1, "contenedor-tabla"], [3, "data"], [1, "sin-datos"], [1, "matCardPersonalizada"], [1, "tabla-scroll"], ["role", "table", 1, "tablep"], [1, "theadp"], [1, "trp"], [1, "thp", "col-acciones"], [1, "thp", "col-numero"], [1, "thp"], [1, "thp", "col-estado"], ["role", "rowgroup", 1, "tbodyp"], ["role", "row", 1, "trp"], [3, "page", "length", "pageSize"], ["data-title", "Acciones", 1, "tdp", "col-acciones"], [1, "acciones"], ["mat-mini-fab", "", "matTooltip", "Editar", 1, "buttonSecundary", 3, "click"], ["mat-mini-fab", "", "matTooltip", "Eliminar", 1, "btnDelete", 3, "click"], ["data-title", "Codigo Usuario", 1, "tdp", "col-numero"], ["data-title", "Usuario", 1, "tdp", "td-fuerte"], ["data-title", "Tipo de Usuario", 1, "tdp"], ["data-title", "Nombre", 1, "tdp"], ["data-title", "Usuario Ingreso", 1, "tdp"], ["data-title", "Fecha Ingreso", 1, "tdp"], ["data-title", "Estado", 1, "tdp", "col-estado"], [1, "pill"], [1, "matCardHeader"], [1, "mat-typography"], [3, "formGroup"], [1, "row"], ["appearance", "outline", 1, "col-md-6", "mt-2"], ["formControlName", "IdPersona", "required", ""], [3, "value"], ["formControlName", "TipoUsuario", "required", ""], ["appearance", "outline", 1, "col-md-12", "mt-2"], ["matInput", "", "placeholder", "Usuario", "formControlName", "Usuario", "required", ""], ["matInput", "", "placeholder", "Password", "formControlName", "Password", "autocomplete", "off", 3, "type"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "mt-2", "col-md-1", "text-left"], ["type", "button", "mat-mini-fab", "", 1, "buttonView", 3, "click"], [1, "text-right"], ["mat-raised-button", "", "mat-dialog-close", "", 2, "margin-right", "5px"], ["mat-raised-button", "", 1, "button-principal", 3, "click"]], template: function UsuariosComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "nav", 2)(2, "ol", 3)(3, "li", 4)(4, "a", 5);
        \u0275\u0275text(5, "Inicio");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "li", 6);
        \u0275\u0275text(7, "Usuarios");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "h2");
        \u0275\u0275text(11, "Usuarios");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 9);
        \u0275\u0275text(13, "Gesti\xF3n de los usuarios del sistema");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 10)(15, "mat-form-field", 11)(16, "mat-label");
        \u0275\u0275text(17, "Buscar");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 12);
        \u0275\u0275elementStart(19, "mat-icon", 13);
        \u0275\u0275text(20, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "button", 14);
        \u0275\u0275listener("click", function UsuariosComponent_Template_button_click_21_listener() {
          \u0275\u0275restoreView(_r1);
          const modal_r2 = \u0275\u0275reference(30);
          return \u0275\u0275resetView(ctx.openDialog(modal_r2));
        });
        \u0275\u0275elementStart(22, "mat-icon");
        \u0275\u0275text(23, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " Nuevo ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(25, UsuariosComponent_Conditional_25_Template, 2, 1, "div", 15);
        \u0275\u0275pipe(26, "async");
        \u0275\u0275conditionalCreate(27, UsuariosComponent_Conditional_27_Template, 5, 6, "div", 15);
        \u0275\u0275pipe(28, "async");
        \u0275\u0275template(29, UsuariosComponent_ng_template_29_Template, 43, 9, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c04));
        \u0275\u0275advance(14);
        \u0275\u0275property("formControl", ctx.buscar);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(\u0275\u0275pipeBind1(26, 4, ctx.usuarioFacade.responseCargando$) ? 25 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!\u0275\u0275pipeBind1(28, 6, ctx.usuarioFacade.responseCargando$) ? 27 : -1);
      }
    }, dependencies: [RouterLink, MatFormField, MatLabel, MatHint, MatPrefix, MatSuffix, MatInput, MatIcon, MatButton, MatMiniFabButton, MatIconButton, MatDialogClose, MatDialogContent, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormControlDirective, FormGroupDirective, FormControlName, LoadingComponent, MatCard, MatCardContent, MatOption, MatPaginator, MatSelect, MatTooltip, AsyncPipe, SlicePipe, DatePipe, SearchPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsuariosComponent, [{
    type: Component,
    args: [{ selector: "app-usuarios", standalone: false, template: `
<div class="navigation">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a [routerLink]="['/dashboard']">Inicio</a></li>
      <li class="breadcrumb-item activo">Usuarios</li>
    </ol>
  </nav>

  <div class="content">
    <div class="titleNav">
      <h2>Usuarios</h2>
      <div class="subtitulo">Gesti\xF3n de los usuarios del sistema</div>
    </div>

    <div class="action">
      <mat-form-field appearance="outline" class="buscador">
        <mat-label>Buscar</mat-label>
        <input matInput type="text" [formControl]="buscar" placeholder="Buscar\u2026" autocomplete="off">
        <mat-icon matPrefix>search</mat-icon>
      </mat-form-field>
      <button class="button-principal" mat-flat-button (click)="openDialog(modal)">
        <mat-icon>add</mat-icon>
        Nuevo
      </button>
    </div>
  </div>
</div>

@if ((usuarioFacade.responseCargando$ | async)) {
<div class="contenedor-tabla">
  <app-loading [data]="4"></app-loading>
</div>
}

@if (!(usuarioFacade.responseCargando$ | async)) {
<div class="contenedor-tabla">

  @if ((usuarioFacade.responseUsuarios$ | async).length === 0) {
  <div class="sin-datos">
    <mat-icon>credit_card_off</mat-icon>
    <p>No hay usuarios para listar</p>
    <button class="button-principal" mat-flat-button (click)="openDialog(modal)">
      <mat-icon>add</mat-icon>
      Agregar el primero
    </button>
  </div>
  }

  @if ((usuarioFacade.responseUsuarios$ | async).length > 0) {
  <mat-card class="matCardPersonalizada">
    <mat-card-content>
      <div class="tabla-scroll">
        <table class="tablep" role="table">
          <thead class="theadp">
            <tr class="trp">
              <th class="thp col-acciones">Acciones</th>
              <th class="thp col-numero">Codigo Usuario</th>
              <th class="thp">Usuario</th>
              <th class="thp">Tipo de Usuario</th>
              <th class="thp">Nombre</th>
              <th class="thp">Usuario Ingreso</th>
              <th class="thp">Fecha Ingreso</th>
              <th class="thp col-estado">Estado</th>
            </tr>
          </thead>
          <tbody role="rowgroup" class="tbodyp">
            @for (usuario of (usuarioFacade.responseUsuarios$ | async) | search: this.buscar?.value:
            ['Usuario','TipoUsuario' ,'PrimerNombre', 'NombrbeOrganizacion'] | slice: desde : hasta; track usuario) {
            <tr class="trp" role="row">
              <td data-title="Acciones" class="tdp col-acciones">
                <div class="acciones">
                  <button class="buttonSecundary" mat-mini-fab (click)="openDialog(modal, usuario)" matTooltip="Editar">
                    <mat-icon>edit</mat-icon>
                  </button>
                  <button class="btnDelete" mat-mini-fab (click)="Eliminar(usuario)" matTooltip="Eliminar">
                    <mat-icon>delete</mat-icon>
                  </button>
                </div>
              </td>
              <td data-title="Codigo Usuario" class="tdp col-numero">{{ usuario.Id }}</td>
              <td data-title="Usuario" class="tdp td-fuerte">{{ usuario.Usuario }}</td>
              <td data-title="Tipo de Usuario" class="tdp">{{ usuario.TipoUsuario }}</td>
              <td data-title="Nombre" class="tdp">{{usuario.PrimerNombre}} {{usuario.PrimerApellido}}</td>
              <td data-title="Usuario Ingreso" class="tdp">{{ usuario.UsuarioInsercion }}</td>
              <td data-title="Fecha Ingreso" class="tdp">{{usuario.FechaInsercion | date:'yyyy-MM-dd'}}</td>


              <td data-title="Estado" class="tdp col-estado">
                <span class="pill" [class.pill-activo]="usuario.Estado === 'Activo'"
                  [class.pill-inactivo]="usuario.Estado !== 'Activo'">
                  {{ usuario.Estado }}
                </span>
              </td>
            </tr>
            }
          </tbody>
        </table>
      </div>

      <mat-paginator [length]="(usuarioFacade.responseUsuarios$ | async).length" [pageSize]="pageSize"
        (page)="next($event)">
      </mat-paginator>
    </mat-card-content>
  </mat-card>
  }

</div>
}
<ng-template #modal>
  <div class="matCardHeader">
    Usuario
  </div>
  <mat-dialog-content class="mat-typography">
    <form [formGroup]="formUsuario">
      <div class="row">
        <mat-form-field appearance="outline" class="col-md-6 mt-2">
          <mat-label>Persona</mat-label>
          <mat-select formControlName="IdPersona" required>
            @for (usuario of (usuarioFacade.responsePersonas$ | async); track usuario) {
            <mat-option [value]="usuario.Id">{{usuario.PrimerNombre}} {{usuario.PrimerApellido}}</mat-option>
            }
          </mat-select>
          <mat-hint>Seleccionar la persona</mat-hint>
        </mat-form-field>
        <mat-form-field appearance="outline" class="col-md-6 mt-2">
          <mat-label>Tipo de Usuario</mat-label>
          <mat-select formControlName="TipoUsuario" required>
            @for (usuario of (usuarioFacade.responseTipoUsuarios$ | async); track usuario) {
            <mat-option [value]="usuario.Id">{{usuario.TipoUsuario}}</mat-option>
            }
          </mat-select>
          <mat-hint>Seleccionar el tipo de Usuario</mat-hint>
        </mat-form-field>
        <mat-form-field appearance="outline" class="col-md-12 mt-2">
          <mat-label>Usuario</mat-label>
          <input matInput placeholder="Usuario" formControlName="Usuario" required>
        </mat-form-field>
        <mat-form-field appearance="outline" class="col-md-6 mt-2">
          <mat-label>Password</mat-label>
          <input matInput placeholder="Password" formControlName="Password" [type]="hide ? 'password' : 'text' "
            autocomplete="off">
          <button type="button" mat-icon-button matSuffix (click)="hide = !hide" [attr.aria-label]="'Hide password'"
            [attr.aria-pressed]="hide">
            <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
          </button>
        </mat-form-field>
        <div class="mt-2 col-md-1 text-left">
          <button type="button" class="buttonView" mat-mini-fab (click)="generarPassRandom()">
            <mat-icon>
              autorenew
            </mat-icon>
          </button>
        </div>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsuariosComponent, { className: "UsuariosComponent", filePath: "src/app/modules/seguridad/usuarios/usuarios.component.ts", lineNumber: 15 });
})();

// src/app/modules/seguridad/seguridad-routing.module.ts
var routes = [
  {
    path: "tipoUsuario",
    component: TipoUsuarioComponent
  },
  {
    path: "usuario",
    component: UsuariosComponent
  },
  {
    path: "personas",
    component: PersonasComponent
  },
  {
    path: "menu",
    component: MenusComponent
  }
];
var SeguridadRoutingModule = class _SeguridadRoutingModule {
  static {
    this.\u0275fac = function SeguridadRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SeguridadRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SeguridadRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeguridadRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/seguridad/seguridad.module.ts
var SeguridadModule = class _SeguridadModule {
  static {
    this.\u0275fac = function SeguridadModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SeguridadModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SeguridadModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
      DatePipe
    ], imports: [
      CommonModule,
      SeguridadRoutingModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatButtonModule,
      MatDialogModule,
      ReactiveFormsModule,
      PipeModule,
      SharedModule,
      MatCardModule,
      MatDialogModule,
      MatButtonModule,
      MatIconModule,
      MatAutocompleteModule,
      MatPaginatorModule,
      MatSelectModule,
      MatExpansionModule,
      MatDividerModule,
      MatTooltipModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeguridadModule, [{
    type: NgModule,
    args: [{
      declarations: [TipoUsuarioComponent, UsuariosComponent, PersonasComponent, MenusComponent],
      imports: [
        CommonModule,
        SeguridadRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        ReactiveFormsModule,
        PipeModule,
        SharedModule,
        MatCardModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatAutocompleteModule,
        MatPaginatorModule,
        MatSelectModule,
        MatExpansionModule,
        MatDividerModule,
        MatTooltipModule
      ],
      providers: [
        DatePipe
      ]
    }]
  }], null, null);
})();
export {
  SeguridadModule
};
//# sourceMappingURL=seguridad.module-6I7TXREH.js.map

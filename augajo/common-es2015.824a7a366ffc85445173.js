(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0fZQ":function(e,t,i){"use strict";i.d(t,"a",function(){return l});var a=i("8Y7J");let l=(()=>{class e{transform(e,t=20,i="..."){return e.length>t?e.substring(0,t).trim()+i:e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=a.Mb({name:"truncatePipe",type:e,pure:!0}),e})()},"1jcm":function(e,t,i){"use strict";i.d(t,"a",function(){return y}),i.d(t,"b",function(){return C});var a=i("GU7r"),l=i("8Y7J"),n=i("FKr1"),o=i("8LU1"),s=i("s7LF"),r=i("omvX"),d=i("u47x");const g=["thumbContainer"],c=["toggleBar"],h=["input"],b=function(){return{enterDuration:150}},m=["*"],p=new l.r("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1})});let u=0;const f={provide:s.i,useExisting:Object(l.V)(()=>y),multi:!0};class k{constructor(e,t){this.source=e,this.checked=t}}class x{constructor(e){this._elementRef=e}}const _=Object(n.y)(Object(n.t)(Object(n.u)(Object(n.v)(x)),"accent"));let y=(()=>{class e extends _{constructor(e,t,i,a,n,o){super(e),this._focusMonitor=t,this._changeDetectorRef=i,this.defaults=n,this._animationMode=o,this._onChange=e=>{},this._onTouched=()=>{},this._uniqueId="mat-slide-toggle-"+ ++u,this._required=!1,this._checked=!1,this.name=null,this.id=this._uniqueId,this.labelPosition="after",this.ariaLabel=null,this.ariaLabelledby=null,this.change=new l.o,this.toggleChange=new l.o,this.tabIndex=parseInt(a)||0}get required(){return this._required}set required(e){this._required=Object(o.c)(e)}get checked(){return this._checked}set checked(e){this._checked=Object(o.c)(e),this._changeDetectorRef.markForCheck()}get inputId(){return(this.id||this._uniqueId)+"-input"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{"keyboard"===e||"program"===e?this._inputElement.nativeElement.focus():e||Promise.resolve().then(()=>this._onTouched())})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}_onChangeEvent(e){e.stopPropagation(),this.toggleChange.emit(),this.defaults.disableToggleValue?this._inputElement.nativeElement.checked=this.checked:(this.checked=this._inputElement.nativeElement.checked,this._emitChangeEvent())}_onInputClick(e){e.stopPropagation()}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}focus(e){this._focusMonitor.focusVia(this._inputElement,"keyboard",e)}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(new k(this,this.checked))}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}}return e.\u0275fac=function(t){return new(t||e)(l.Nb(l.l),l.Nb(d.f),l.Nb(l.h),l.Yb("tabindex"),l.Nb(p),l.Nb(r.a,8))},e.\u0275cmp=l.Hb({type:e,selectors:[["mat-slide-toggle"]],viewQuery:function(e,t){if(1&e&&(l.Ic(g,!0),l.Ic(c,!0),l.Ic(h,!0)),2&e){let e;l.qc(e=l.cc())&&(t._thumbEl=e.first),l.qc(e=l.cc())&&(t._thumbBarEl=e.first),l.qc(e=l.cc())&&(t._inputElement=e.first)}},hostAttrs:[1,"mat-slide-toggle"],hostVars:12,hostBindings:function(e,t){2&e&&(l.Wb("id",t.id),l.Cb("tabindex",t.disabled?null:-1)("aria-label",null)("aria-labelledby",null),l.Fb("mat-checked",t.checked)("mat-disabled",t.disabled)("mat-slide-toggle-label-before","before"==t.labelPosition)("_mat-animation-noopable","NoopAnimations"===t._animationMode))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex",name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],required:"required",checked:"checked"},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[l.Ab([f]),l.yb],ngContentSelectors:m,decls:16,vars:18,consts:[[1,"mat-slide-toggle-label"],["label",""],[1,"mat-slide-toggle-bar"],["toggleBar",""],["type","checkbox","role","switch",1,"mat-slide-toggle-input","cdk-visually-hidden",3,"id","required","tabIndex","checked","disabled","change","click"],["input",""],[1,"mat-slide-toggle-thumb-container"],["thumbContainer",""],[1,"mat-slide-toggle-thumb"],["mat-ripple","",1,"mat-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered","matRippleRadius","matRippleAnimation"],[1,"mat-ripple-element","mat-slide-toggle-persistent-ripple"],[1,"mat-slide-toggle-content",3,"cdkObserveContent"],["labelContent",""],[2,"display","none"]],template:function(e,t){if(1&e&&(l.lc(),l.Tb(0,"label",0,1),l.Tb(2,"div",2,3),l.Tb(4,"input",4,5),l.bc("change",function(e){return t._onChangeEvent(e)})("click",function(e){return t._onInputClick(e)}),l.Sb(),l.Tb(6,"div",6,7),l.Ob(8,"div",8),l.Tb(9,"div",9),l.Ob(10,"div",10),l.Sb(),l.Sb(),l.Sb(),l.Tb(11,"span",11,12),l.bc("cdkObserveContent",function(){return t._onLabelTextChange()}),l.Tb(13,"span",13),l.Ec(14,"\xa0"),l.Sb(),l.kc(15),l.Sb(),l.Sb()),2&e){const e=l.rc(1),i=l.rc(12);l.Cb("for",t.inputId),l.Bb(2),l.Fb("mat-slide-toggle-bar-no-side-margin",!i.textContent||!i.textContent.trim()),l.Bb(2),l.mc("id",t.inputId)("required",t.required)("tabIndex",t.tabIndex)("checked",t.checked)("disabled",t.disabled),l.Cb("name",t.name)("aria-checked",t.checked.toString())("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledby),l.Bb(5),l.mc("matRippleTrigger",e)("matRippleDisabled",t.disableRipple||t.disabled)("matRippleCentered",!0)("matRippleRadius",20)("matRippleAnimation",l.nc(17,b))}},directives:[n.o,a.a],styles:[".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"],encapsulation:2,changeDetection:0}),e})(),v=(()=>{class e{}return e.\u0275mod=l.Lb({type:e}),e.\u0275inj=l.Kb({factory:function(t){return new(t||e)}}),e})(),C=(()=>{class e{}return e.\u0275mod=l.Lb({type:e}),e.\u0275inj=l.Kb({factory:function(t){return new(t||e)},imports:[[v,n.p,n.g,a.c],v,n.g]}),e})()}}]);
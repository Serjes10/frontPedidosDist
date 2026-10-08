import {
  ArcElement,
  BarElement,
  BaseChartDirective,
  Chart,
  PointElement,
  callback,
  defaults,
  each,
  isNullOrUndef,
  isObject,
  merge as merge2,
  registerables,
  resolve,
  toFont,
  toPadding,
  valueOrDefault
} from "./chunk-6GJ7LVVN.js";
import {
  DataApiService
} from "./chunk-JFTIAHKM.js";
import {
  AsyncPipe,
  BehaviorSubject,
  BidiModule,
  CDK_VIRTUAL_SCROLL_VIEWPORT,
  CdkMonitorFocus,
  CdkObserveContent,
  CdkPortal,
  CdkPortalOutlet,
  CdkScrollable,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  CurrencyPipe,
  DOCUMENT,
  DatePipe,
  DecimalPipe,
  Directionality,
  Directive,
  EMPTY,
  ENTER,
  ElementRef,
  EventEmitter,
  FocusKeyManager,
  FocusMonitor,
  HostAttributeToken,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  IterableDiffers,
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatButton,
  MatButtonModule,
  MatCardModule,
  MatIcon,
  MatIconModule,
  MatRipple,
  MensajesHttpService,
  NgModule,
  NgZone,
  Observable,
  Output,
  Platform,
  QueryList,
  Renderer2,
  RouterModule,
  SPACE,
  ScrollingModule,
  SharedModule,
  SharedResizeObserver,
  Subject,
  Subscription,
  TemplatePortal,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation,
  ViewportRuler,
  _CdkPrivateStyleLoader,
  _DisposeViewRepeaterStrategy,
  _IdGenerator,
  _RecycleViewRepeaterStrategy,
  _StructuralStylesLoader,
  _ViewRepeaterOperation,
  _animationsDisabled,
  afterNextRender,
  animationFrameScheduler,
  asapScheduler,
  auditTime,
  booleanAttribute,
  catchError,
  combineLatest,
  computed,
  debounceTime,
  filter,
  forwardRef,
  hasModifierKey,
  inject,
  isDataSource,
  isObservable,
  merge,
  numberAttribute,
  of,
  setClassMetadata,
  signal,
  skip,
  startWith,
  switchMap,
  takeUntil,
  tap,
  timer,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵariaProperty,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-NVT3INDU.js";

// node_modules/chart.js/dist/helpers.js
/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */

// node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.esm.js
/*!
 * chartjs-plugin-datalabels v2.2.0
 * https://chartjs-plugin-datalabels.netlify.app
 * (c) 2017-2022 chartjs-plugin-datalabels contributors
 * Released under the MIT license
 */
var devicePixelRatio = (function() {
  if (typeof window !== "undefined") {
    if (window.devicePixelRatio) {
      return window.devicePixelRatio;
    }
    var screen = window.screen;
    if (screen) {
      return (screen.deviceXDPI || 1) / (screen.logicalXDPI || 1);
    }
  }
  return 1;
})();
var utils = {
  // @todo move this in Chart.helpers.toTextLines
  toTextLines: function(inputs) {
    var lines = [];
    var input;
    inputs = [].concat(inputs);
    while (inputs.length) {
      input = inputs.pop();
      if (typeof input === "string") {
        lines.unshift.apply(lines, input.split("\n"));
      } else if (Array.isArray(input)) {
        inputs.push.apply(inputs, input);
      } else if (!isNullOrUndef(inputs)) {
        lines.unshift("" + input);
      }
    }
    return lines;
  },
  // @todo move this in Chart.helpers.canvas.textSize
  // @todo cache calls of measureText if font doesn't change?!
  textSize: function(ctx, lines, font) {
    var items = [].concat(lines);
    var ilen = items.length;
    var prev = ctx.font;
    var width = 0;
    var i;
    ctx.font = font.string;
    for (i = 0; i < ilen; ++i) {
      width = Math.max(ctx.measureText(items[i]).width, width);
    }
    ctx.font = prev;
    return {
      height: ilen * font.lineHeight,
      width
    };
  },
  /**
   * Returns value bounded by min and max. This is equivalent to max(min, min(value, max)).
   * @todo move this method in Chart.helpers.bound
   * https://doc.qt.io/qt-5/qtglobal.html#qBound
   */
  bound: function(min, value, max) {
    return Math.max(min, Math.min(value, max));
  },
  /**
   * Returns an array of pair [value, state] where state is:
   * * -1: value is only in a0 (removed)
   * *  1: value is only in a1 (added)
   */
  arrayDiff: function(a0, a1) {
    var prev = a0.slice();
    var updates = [];
    var i, j, ilen, v;
    for (i = 0, ilen = a1.length; i < ilen; ++i) {
      v = a1[i];
      j = prev.indexOf(v);
      if (j === -1) {
        updates.push([v, 1]);
      } else {
        prev.splice(j, 1);
      }
    }
    for (i = 0, ilen = prev.length; i < ilen; ++i) {
      updates.push([prev[i], -1]);
    }
    return updates;
  },
  /**
   * https://github.com/chartjs/chartjs-plugin-datalabels/issues/70
   */
  rasterize: function(v) {
    return Math.round(v * devicePixelRatio) / devicePixelRatio;
  }
};
function orient(point, origin) {
  var x0 = origin.x;
  var y0 = origin.y;
  if (x0 === null) {
    return { x: 0, y: -1 };
  }
  if (y0 === null) {
    return { x: 1, y: 0 };
  }
  var dx = point.x - x0;
  var dy = point.y - y0;
  var ln = Math.sqrt(dx * dx + dy * dy);
  return {
    x: ln ? dx / ln : 0,
    y: ln ? dy / ln : -1
  };
}
function aligned(x, y, vx, vy, align) {
  switch (align) {
    case "center":
      vx = vy = 0;
      break;
    case "bottom":
      vx = 0;
      vy = 1;
      break;
    case "right":
      vx = 1;
      vy = 0;
      break;
    case "left":
      vx = -1;
      vy = 0;
      break;
    case "top":
      vx = 0;
      vy = -1;
      break;
    case "start":
      vx = -vx;
      vy = -vy;
      break;
    case "end":
      break;
    default:
      align *= Math.PI / 180;
      vx = Math.cos(align);
      vy = Math.sin(align);
      break;
  }
  return {
    x,
    y,
    vx,
    vy
  };
}
var R_INSIDE = 0;
var R_LEFT = 1;
var R_RIGHT = 2;
var R_BOTTOM = 4;
var R_TOP = 8;
function region(x, y, rect) {
  var res = R_INSIDE;
  if (x < rect.left) {
    res |= R_LEFT;
  } else if (x > rect.right) {
    res |= R_RIGHT;
  }
  if (y < rect.top) {
    res |= R_TOP;
  } else if (y > rect.bottom) {
    res |= R_BOTTOM;
  }
  return res;
}
function clipped(segment, area) {
  var x0 = segment.x0;
  var y0 = segment.y0;
  var x1 = segment.x1;
  var y1 = segment.y1;
  var r0 = region(x0, y0, area);
  var r1 = region(x1, y1, area);
  var r, x, y;
  while (true) {
    if (!(r0 | r1) || r0 & r1) {
      break;
    }
    r = r0 || r1;
    if (r & R_TOP) {
      x = x0 + (x1 - x0) * (area.top - y0) / (y1 - y0);
      y = area.top;
    } else if (r & R_BOTTOM) {
      x = x0 + (x1 - x0) * (area.bottom - y0) / (y1 - y0);
      y = area.bottom;
    } else if (r & R_RIGHT) {
      y = y0 + (y1 - y0) * (area.right - x0) / (x1 - x0);
      x = area.right;
    } else if (r & R_LEFT) {
      y = y0 + (y1 - y0) * (area.left - x0) / (x1 - x0);
      x = area.left;
    }
    if (r === r0) {
      x0 = x;
      y0 = y;
      r0 = region(x0, y0, area);
    } else {
      x1 = x;
      y1 = y;
      r1 = region(x1, y1, area);
    }
  }
  return {
    x0,
    x1,
    y0,
    y1
  };
}
function compute$1(range, config) {
  var anchor = config.anchor;
  var segment = range;
  var x, y;
  if (config.clamp) {
    segment = clipped(segment, config.area);
  }
  if (anchor === "start") {
    x = segment.x0;
    y = segment.y0;
  } else if (anchor === "end") {
    x = segment.x1;
    y = segment.y1;
  } else {
    x = (segment.x0 + segment.x1) / 2;
    y = (segment.y0 + segment.y1) / 2;
  }
  return aligned(x, y, range.vx, range.vy, config.align);
}
var positioners = {
  arc: function(el, config) {
    var angle = (el.startAngle + el.endAngle) / 2;
    var vx = Math.cos(angle);
    var vy = Math.sin(angle);
    var r0 = el.innerRadius;
    var r1 = el.outerRadius;
    return compute$1({
      x0: el.x + vx * r0,
      y0: el.y + vy * r0,
      x1: el.x + vx * r1,
      y1: el.y + vy * r1,
      vx,
      vy
    }, config);
  },
  point: function(el, config) {
    var v = orient(el, config.origin);
    var rx = v.x * el.options.radius;
    var ry = v.y * el.options.radius;
    return compute$1({
      x0: el.x - rx,
      y0: el.y - ry,
      x1: el.x + rx,
      y1: el.y + ry,
      vx: v.x,
      vy: v.y
    }, config);
  },
  bar: function(el, config) {
    var v = orient(el, config.origin);
    var x = el.x;
    var y = el.y;
    var sx = 0;
    var sy = 0;
    if (el.horizontal) {
      x = Math.min(el.x, el.base);
      sx = Math.abs(el.base - el.x);
    } else {
      y = Math.min(el.y, el.base);
      sy = Math.abs(el.base - el.y);
    }
    return compute$1({
      x0: x,
      y0: y + sy,
      x1: x + sx,
      y1: y,
      vx: v.x,
      vy: v.y
    }, config);
  },
  fallback: function(el, config) {
    var v = orient(el, config.origin);
    return compute$1({
      x0: el.x,
      y0: el.y,
      x1: el.x + (el.width || 0),
      y1: el.y + (el.height || 0),
      vx: v.x,
      vy: v.y
    }, config);
  }
};
var rasterize = utils.rasterize;
function boundingRects(model) {
  var borderWidth = model.borderWidth || 0;
  var padding = model.padding;
  var th = model.size.height;
  var tw = model.size.width;
  var tx = -tw / 2;
  var ty = -th / 2;
  return {
    frame: {
      x: tx - padding.left - borderWidth,
      y: ty - padding.top - borderWidth,
      w: tw + padding.width + borderWidth * 2,
      h: th + padding.height + borderWidth * 2
    },
    text: {
      x: tx,
      y: ty,
      w: tw,
      h: th
    }
  };
}
function getScaleOrigin(el, context) {
  var scale = context.chart.getDatasetMeta(context.datasetIndex).vScale;
  if (!scale) {
    return null;
  }
  if (scale.xCenter !== void 0 && scale.yCenter !== void 0) {
    return { x: scale.xCenter, y: scale.yCenter };
  }
  var pixel = scale.getBasePixel();
  return el.horizontal ? { x: pixel, y: null } : { x: null, y: pixel };
}
function getPositioner(el) {
  if (el instanceof ArcElement) {
    return positioners.arc;
  }
  if (el instanceof PointElement) {
    return positioners.point;
  }
  if (el instanceof BarElement) {
    return positioners.bar;
  }
  return positioners.fallback;
}
function drawRoundedRect(ctx, x, y, w, h, radius) {
  var HALF_PI2 = Math.PI / 2;
  if (radius) {
    var r = Math.min(radius, h / 2, w / 2);
    var left = x + r;
    var top = y + r;
    var right = x + w - r;
    var bottom = y + h - r;
    ctx.moveTo(x, top);
    if (left < right && top < bottom) {
      ctx.arc(left, top, r, -Math.PI, -HALF_PI2);
      ctx.arc(right, top, r, -HALF_PI2, 0);
      ctx.arc(right, bottom, r, 0, HALF_PI2);
      ctx.arc(left, bottom, r, HALF_PI2, Math.PI);
    } else if (left < right) {
      ctx.moveTo(left, y);
      ctx.arc(right, top, r, -HALF_PI2, HALF_PI2);
      ctx.arc(left, top, r, HALF_PI2, Math.PI + HALF_PI2);
    } else if (top < bottom) {
      ctx.arc(left, top, r, -Math.PI, 0);
      ctx.arc(left, bottom, r, 0, Math.PI);
    } else {
      ctx.arc(left, top, r, -Math.PI, Math.PI);
    }
    ctx.closePath();
    ctx.moveTo(x, y);
  } else {
    ctx.rect(x, y, w, h);
  }
}
function drawFrame(ctx, rect, model) {
  var bgColor = model.backgroundColor;
  var borderColor = model.borderColor;
  var borderWidth = model.borderWidth;
  if (!bgColor && (!borderColor || !borderWidth)) {
    return;
  }
  ctx.beginPath();
  drawRoundedRect(
    ctx,
    rasterize(rect.x) + borderWidth / 2,
    rasterize(rect.y) + borderWidth / 2,
    rasterize(rect.w) - borderWidth,
    rasterize(rect.h) - borderWidth,
    model.borderRadius
  );
  ctx.closePath();
  if (bgColor) {
    ctx.fillStyle = bgColor;
    ctx.fill();
  }
  if (borderColor && borderWidth) {
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = borderWidth;
    ctx.lineJoin = "miter";
    ctx.stroke();
  }
}
function textGeometry(rect, align, font) {
  var h = font.lineHeight;
  var w = rect.w;
  var x = rect.x;
  var y = rect.y + h / 2;
  if (align === "center") {
    x += w / 2;
  } else if (align === "end" || align === "right") {
    x += w;
  }
  return {
    h,
    w,
    x,
    y
  };
}
function drawTextLine(ctx, text, cfg) {
  var shadow = ctx.shadowBlur;
  var stroked = cfg.stroked;
  var x = rasterize(cfg.x);
  var y = rasterize(cfg.y);
  var w = rasterize(cfg.w);
  if (stroked) {
    ctx.strokeText(text, x, y, w);
  }
  if (cfg.filled) {
    if (shadow && stroked) {
      ctx.shadowBlur = 0;
    }
    ctx.fillText(text, x, y, w);
    if (shadow && stroked) {
      ctx.shadowBlur = shadow;
    }
  }
}
function drawText(ctx, lines, rect, model) {
  var align = model.textAlign;
  var color2 = model.color;
  var filled = !!color2;
  var font = model.font;
  var ilen = lines.length;
  var strokeColor = model.textStrokeColor;
  var strokeWidth = model.textStrokeWidth;
  var stroked = strokeColor && strokeWidth;
  var i;
  if (!ilen || !filled && !stroked) {
    return;
  }
  rect = textGeometry(rect, align, font);
  ctx.font = font.string;
  ctx.textAlign = align;
  ctx.textBaseline = "middle";
  ctx.shadowBlur = model.textShadowBlur;
  ctx.shadowColor = model.textShadowColor;
  if (filled) {
    ctx.fillStyle = color2;
  }
  if (stroked) {
    ctx.lineJoin = "round";
    ctx.lineWidth = strokeWidth;
    ctx.strokeStyle = strokeColor;
  }
  for (i = 0, ilen = lines.length; i < ilen; ++i) {
    drawTextLine(ctx, lines[i], {
      stroked,
      filled,
      w: rect.w,
      x: rect.x,
      y: rect.y + rect.h * i
    });
  }
}
var Label = function(config, ctx, el, index) {
  var me = this;
  me._config = config;
  me._index = index;
  me._model = null;
  me._rects = null;
  me._ctx = ctx;
  me._el = el;
};
merge2(Label.prototype, {
  /**
   * @private
   */
  _modelize: function(display, lines, config, context) {
    var me = this;
    var index = me._index;
    var font = toFont(resolve([config.font, {}], context, index));
    var color2 = resolve([config.color, defaults.color], context, index);
    return {
      align: resolve([config.align, "center"], context, index),
      anchor: resolve([config.anchor, "center"], context, index),
      area: context.chart.chartArea,
      backgroundColor: resolve([config.backgroundColor, null], context, index),
      borderColor: resolve([config.borderColor, null], context, index),
      borderRadius: resolve([config.borderRadius, 0], context, index),
      borderWidth: resolve([config.borderWidth, 0], context, index),
      clamp: resolve([config.clamp, false], context, index),
      clip: resolve([config.clip, false], context, index),
      color: color2,
      display,
      font,
      lines,
      offset: resolve([config.offset, 4], context, index),
      opacity: resolve([config.opacity, 1], context, index),
      origin: getScaleOrigin(me._el, context),
      padding: toPadding(resolve([config.padding, 4], context, index)),
      positioner: getPositioner(me._el),
      rotation: resolve([config.rotation, 0], context, index) * (Math.PI / 180),
      size: utils.textSize(me._ctx, lines, font),
      textAlign: resolve([config.textAlign, "start"], context, index),
      textShadowBlur: resolve([config.textShadowBlur, 0], context, index),
      textShadowColor: resolve([config.textShadowColor, color2], context, index),
      textStrokeColor: resolve([config.textStrokeColor, color2], context, index),
      textStrokeWidth: resolve([config.textStrokeWidth, 0], context, index)
    };
  },
  update: function(context) {
    var me = this;
    var model = null;
    var rects = null;
    var index = me._index;
    var config = me._config;
    var value, label, lines;
    var display = resolve([config.display, true], context, index);
    if (display) {
      value = context.dataset.data[index];
      label = valueOrDefault(callback(config.formatter, [value, context]), value);
      lines = isNullOrUndef(label) ? [] : utils.toTextLines(label);
      if (lines.length) {
        model = me._modelize(display, lines, config, context);
        rects = boundingRects(model);
      }
    }
    me._model = model;
    me._rects = rects;
  },
  geometry: function() {
    return this._rects ? this._rects.frame : {};
  },
  rotation: function() {
    return this._model ? this._model.rotation : 0;
  },
  visible: function() {
    return this._model && this._model.opacity;
  },
  model: function() {
    return this._model;
  },
  draw: function(chart, center) {
    var me = this;
    var ctx = chart.ctx;
    var model = me._model;
    var rects = me._rects;
    var area;
    if (!this.visible()) {
      return;
    }
    ctx.save();
    if (model.clip) {
      area = model.area;
      ctx.beginPath();
      ctx.rect(
        area.left,
        area.top,
        area.right - area.left,
        area.bottom - area.top
      );
      ctx.clip();
    }
    ctx.globalAlpha = utils.bound(0, model.opacity, 1);
    ctx.translate(rasterize(center.x), rasterize(center.y));
    ctx.rotate(model.rotation);
    drawFrame(ctx, rects.frame, model);
    drawText(ctx, model.lines, rects.text, model);
    ctx.restore();
  }
});
var MIN_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991;
var MAX_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
function rotated(point, center, angle) {
  var cos = Math.cos(angle);
  var sin = Math.sin(angle);
  var cx = center.x;
  var cy = center.y;
  return {
    x: cx + cos * (point.x - cx) - sin * (point.y - cy),
    y: cy + sin * (point.x - cx) + cos * (point.y - cy)
  };
}
function projected(points, axis) {
  var min = MAX_INTEGER;
  var max = MIN_INTEGER;
  var origin = axis.origin;
  var i, pt, vx, vy, dp;
  for (i = 0; i < points.length; ++i) {
    pt = points[i];
    vx = pt.x - origin.x;
    vy = pt.y - origin.y;
    dp = axis.vx * vx + axis.vy * vy;
    min = Math.min(min, dp);
    max = Math.max(max, dp);
  }
  return {
    min,
    max
  };
}
function toAxis(p0, p1) {
  var vx = p1.x - p0.x;
  var vy = p1.y - p0.y;
  var ln = Math.sqrt(vx * vx + vy * vy);
  return {
    vx: (p1.x - p0.x) / ln,
    vy: (p1.y - p0.y) / ln,
    origin: p0,
    ln
  };
}
var HitBox = function() {
  this._rotation = 0;
  this._rect = {
    x: 0,
    y: 0,
    w: 0,
    h: 0
  };
};
merge2(HitBox.prototype, {
  center: function() {
    var r = this._rect;
    return {
      x: r.x + r.w / 2,
      y: r.y + r.h / 2
    };
  },
  update: function(center, rect, rotation) {
    this._rotation = rotation;
    this._rect = {
      x: rect.x + center.x,
      y: rect.y + center.y,
      w: rect.w,
      h: rect.h
    };
  },
  contains: function(point) {
    var me = this;
    var margin = 1;
    var rect = me._rect;
    point = rotated(point, me.center(), -me._rotation);
    return !(point.x < rect.x - margin || point.y < rect.y - margin || point.x > rect.x + rect.w + margin * 2 || point.y > rect.y + rect.h + margin * 2);
  },
  // Separating Axis Theorem
  // https://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169
  intersects: function(other) {
    var r0 = this._points();
    var r1 = other._points();
    var axes = [
      toAxis(r0[0], r0[1]),
      toAxis(r0[0], r0[3])
    ];
    var i, pr0, pr1;
    if (this._rotation !== other._rotation) {
      axes.push(
        toAxis(r1[0], r1[1]),
        toAxis(r1[0], r1[3])
      );
    }
    for (i = 0; i < axes.length; ++i) {
      pr0 = projected(r0, axes[i]);
      pr1 = projected(r1, axes[i]);
      if (pr0.max < pr1.min || pr1.max < pr0.min) {
        return false;
      }
    }
    return true;
  },
  /**
   * @private
   */
  _points: function() {
    var me = this;
    var rect = me._rect;
    var angle = me._rotation;
    var center = me.center();
    return [
      rotated({ x: rect.x, y: rect.y }, center, angle),
      rotated({ x: rect.x + rect.w, y: rect.y }, center, angle),
      rotated({ x: rect.x + rect.w, y: rect.y + rect.h }, center, angle),
      rotated({ x: rect.x, y: rect.y + rect.h }, center, angle)
    ];
  }
});
function coordinates(el, model, geometry) {
  var point = model.positioner(el, model);
  var vx = point.vx;
  var vy = point.vy;
  if (!vx && !vy) {
    return { x: point.x, y: point.y };
  }
  var w = geometry.w;
  var h = geometry.h;
  var rotation = model.rotation;
  var dx = Math.abs(w / 2 * Math.cos(rotation)) + Math.abs(h / 2 * Math.sin(rotation));
  var dy = Math.abs(w / 2 * Math.sin(rotation)) + Math.abs(h / 2 * Math.cos(rotation));
  var vs = 1 / Math.max(Math.abs(vx), Math.abs(vy));
  dx *= vx * vs;
  dy *= vy * vs;
  dx += model.offset * vx;
  dy += model.offset * vy;
  return {
    x: point.x + dx,
    y: point.y + dy
  };
}
function collide(labels, collider) {
  var i, j, s0, s1;
  for (i = labels.length - 1; i >= 0; --i) {
    s0 = labels[i].$layout;
    for (j = i - 1; j >= 0 && s0._visible; --j) {
      s1 = labels[j].$layout;
      if (s1._visible && s0._box.intersects(s1._box)) {
        collider(s0, s1);
      }
    }
  }
  return labels;
}
function compute(labels) {
  var i, ilen, label, state, geometry, center, proxy;
  for (i = 0, ilen = labels.length; i < ilen; ++i) {
    label = labels[i];
    state = label.$layout;
    if (state._visible) {
      proxy = new Proxy(label._el, { get: (el, p) => el.getProps([p], true)[p] });
      geometry = label.geometry();
      center = coordinates(proxy, label.model(), geometry);
      state._box.update(center, geometry, label.rotation());
    }
  }
  return collide(labels, function(s0, s1) {
    var h0 = s0._hidable;
    var h1 = s1._hidable;
    if (h0 && h1 || h1) {
      s1._visible = false;
    } else if (h0) {
      s0._visible = false;
    }
  });
}
var layout = {
  prepare: function(datasets) {
    var labels = [];
    var i, j, ilen, jlen, label;
    for (i = 0, ilen = datasets.length; i < ilen; ++i) {
      for (j = 0, jlen = datasets[i].length; j < jlen; ++j) {
        label = datasets[i][j];
        labels.push(label);
        label.$layout = {
          _box: new HitBox(),
          _hidable: false,
          _visible: true,
          _set: i,
          _idx: label._index
        };
      }
    }
    labels.sort(function(a, b) {
      var sa = a.$layout;
      var sb = b.$layout;
      return sa._idx === sb._idx ? sb._set - sa._set : sb._idx - sa._idx;
    });
    this.update(labels);
    return labels;
  },
  update: function(labels) {
    var dirty = false;
    var i, ilen, label, model, state;
    for (i = 0, ilen = labels.length; i < ilen; ++i) {
      label = labels[i];
      model = label.model();
      state = label.$layout;
      state._hidable = model && model.display === "auto";
      state._visible = label.visible();
      dirty |= state._hidable;
    }
    if (dirty) {
      compute(labels);
    }
  },
  lookup: function(labels, point) {
    var i, state;
    for (i = labels.length - 1; i >= 0; --i) {
      state = labels[i].$layout;
      if (state && state._visible && state._box.contains(point)) {
        return labels[i];
      }
    }
    return null;
  },
  draw: function(chart, labels) {
    var i, ilen, label, state, geometry, center;
    for (i = 0, ilen = labels.length; i < ilen; ++i) {
      label = labels[i];
      state = label.$layout;
      if (state._visible) {
        geometry = label.geometry();
        center = coordinates(label._el, label.model(), geometry);
        state._box.update(center, geometry, label.rotation());
        label.draw(chart, center);
      }
    }
  }
};
var formatter = function(value) {
  if (isNullOrUndef(value)) {
    return null;
  }
  var label = value;
  var keys, klen, k;
  if (isObject(value)) {
    if (!isNullOrUndef(value.label)) {
      label = value.label;
    } else if (!isNullOrUndef(value.r)) {
      label = value.r;
    } else {
      label = "";
      keys = Object.keys(value);
      for (k = 0, klen = keys.length; k < klen; ++k) {
        label += (k !== 0 ? ", " : "") + keys[k] + ": " + value[keys[k]];
      }
    }
  }
  return "" + label;
};
var defaults2 = {
  align: "center",
  anchor: "center",
  backgroundColor: null,
  borderColor: null,
  borderRadius: 0,
  borderWidth: 0,
  clamp: false,
  clip: false,
  color: void 0,
  display: true,
  font: {
    family: void 0,
    lineHeight: 1.2,
    size: void 0,
    style: void 0,
    weight: null
  },
  formatter,
  labels: void 0,
  listeners: {},
  offset: 4,
  opacity: 1,
  padding: {
    top: 4,
    right: 4,
    bottom: 4,
    left: 4
  },
  rotation: 0,
  textAlign: "start",
  textStrokeColor: void 0,
  textStrokeWidth: 0,
  textShadowBlur: 0,
  textShadowColor: void 0
};
var EXPANDO_KEY = "$datalabels";
var DEFAULT_KEY = "$default";
function configure(dataset, options) {
  var override = dataset.datalabels;
  var listeners = {};
  var configs = [];
  var labels, keys;
  if (override === false) {
    return null;
  }
  if (override === true) {
    override = {};
  }
  options = merge2({}, [options, override]);
  labels = options.labels || {};
  keys = Object.keys(labels);
  delete options.labels;
  if (keys.length) {
    keys.forEach(function(key) {
      if (labels[key]) {
        configs.push(merge2({}, [
          options,
          labels[key],
          { _key: key }
        ]));
      }
    });
  } else {
    configs.push(options);
  }
  listeners = configs.reduce(function(target, config) {
    each(config.listeners || {}, function(fn, event) {
      target[event] = target[event] || {};
      target[event][config._key || DEFAULT_KEY] = fn;
    });
    delete config.listeners;
    return target;
  }, {});
  return {
    labels: configs,
    listeners
  };
}
function dispatchEvent(chart, listeners, label, event) {
  if (!listeners) {
    return;
  }
  var context = label.$context;
  var groups = label.$groups;
  var callback$1;
  if (!listeners[groups._set]) {
    return;
  }
  callback$1 = listeners[groups._set][groups._key];
  if (!callback$1) {
    return;
  }
  if (callback(callback$1, [context, event]) === true) {
    chart[EXPANDO_KEY]._dirty = true;
    label.update(context);
  }
}
function dispatchMoveEvents(chart, listeners, previous, label, event) {
  var enter, leave;
  if (!previous && !label) {
    return;
  }
  if (!previous) {
    enter = true;
  } else if (!label) {
    leave = true;
  } else if (previous !== label) {
    leave = enter = true;
  }
  if (leave) {
    dispatchEvent(chart, listeners.leave, previous, event);
  }
  if (enter) {
    dispatchEvent(chart, listeners.enter, label, event);
  }
}
function handleMoveEvents(chart, event) {
  var expando = chart[EXPANDO_KEY];
  var listeners = expando._listeners;
  var previous, label;
  if (!listeners.enter && !listeners.leave) {
    return;
  }
  if (event.type === "mousemove") {
    label = layout.lookup(expando._labels, event);
  } else if (event.type !== "mouseout") {
    return;
  }
  previous = expando._hovered;
  expando._hovered = label;
  dispatchMoveEvents(chart, listeners, previous, label, event);
}
function handleClickEvents(chart, event) {
  var expando = chart[EXPANDO_KEY];
  var handlers = expando._listeners.click;
  var label = handlers && layout.lookup(expando._labels, event);
  if (label) {
    dispatchEvent(chart, handlers, label, event);
  }
}
var plugin = {
  id: "datalabels",
  defaults: defaults2,
  beforeInit: function(chart) {
    chart[EXPANDO_KEY] = {
      _actives: []
    };
  },
  beforeUpdate: function(chart) {
    var expando = chart[EXPANDO_KEY];
    expando._listened = false;
    expando._listeners = {};
    expando._datasets = [];
    expando._labels = [];
  },
  afterDatasetUpdate: function(chart, args, options) {
    var datasetIndex = args.index;
    var expando = chart[EXPANDO_KEY];
    var labels = expando._datasets[datasetIndex] = [];
    var visible = chart.isDatasetVisible(datasetIndex);
    var dataset = chart.data.datasets[datasetIndex];
    var config = configure(dataset, options);
    var elements = args.meta.data || [];
    var ctx = chart.ctx;
    var i, j, ilen, jlen, cfg, key, el, label;
    ctx.save();
    for (i = 0, ilen = elements.length; i < ilen; ++i) {
      el = elements[i];
      el[EXPANDO_KEY] = [];
      if (visible && el && chart.getDataVisibility(i) && !el.skip) {
        for (j = 0, jlen = config.labels.length; j < jlen; ++j) {
          cfg = config.labels[j];
          key = cfg._key;
          label = new Label(cfg, ctx, el, i);
          label.$groups = {
            _set: datasetIndex,
            _key: key || DEFAULT_KEY
          };
          label.$context = {
            active: false,
            chart,
            dataIndex: i,
            dataset,
            datasetIndex
          };
          label.update(label.$context);
          el[EXPANDO_KEY].push(label);
          labels.push(label);
        }
      }
    }
    ctx.restore();
    merge2(expando._listeners, config.listeners, {
      merger: function(event, target, source) {
        target[event] = target[event] || {};
        target[event][args.index] = source[event];
        expando._listened = true;
      }
    });
  },
  afterUpdate: function(chart) {
    chart[EXPANDO_KEY]._labels = layout.prepare(chart[EXPANDO_KEY]._datasets);
  },
  // Draw labels on top of all dataset elements
  // https://github.com/chartjs/chartjs-plugin-datalabels/issues/29
  // https://github.com/chartjs/chartjs-plugin-datalabels/issues/32
  afterDatasetsDraw: function(chart) {
    layout.draw(chart, chart[EXPANDO_KEY]._labels);
  },
  beforeEvent: function(chart, args) {
    if (chart[EXPANDO_KEY]._listened) {
      var event = args.event;
      switch (event.type) {
        case "mousemove":
        case "mouseout":
          handleMoveEvents(chart, event);
          break;
        case "click":
          handleClickEvents(chart, event);
          break;
      }
    }
  },
  afterEvent: function(chart) {
    var expando = chart[EXPANDO_KEY];
    var previous = expando._actives;
    var actives = expando._actives = chart.getActiveElements();
    var updates = utils.arrayDiff(previous, actives);
    var i, ilen, j, jlen, update, label, labels;
    for (i = 0, ilen = updates.length; i < ilen; ++i) {
      update = updates[i];
      if (update[1]) {
        labels = update[0].element[EXPANDO_KEY] || [];
        for (j = 0, jlen = labels.length; j < jlen; ++j) {
          label = labels[j];
          label.$context.active = update[1] === 1;
          label.update(label.$context);
        }
      }
    }
    if (expando._dirty || updates.length) {
      layout.update(expando._labels);
      chart.render();
    }
    delete expando._dirty;
  }
};

// src/app/modules/dashboard/dashboard/dashboard-facade.service.ts
var DashboardFacadeService = class _DashboardFacadeService {
  constructor() {
    this.dataApi = inject(DataApiService);
    this._mensajesHttp = inject(MensajesHttpService);
    this.InvKpis$ = new BehaviorSubject(null);
    this.responseInvKpis$ = this.InvKpis$.asObservable();
    this.TopProductos$ = new BehaviorSubject([]);
    this.responseTopProductos$ = this.TopProductos$.asObservable();
    this.InvCategoria$ = new BehaviorSubject([]);
    this.responseInvCategoria$ = this.InvCategoria$.asObservable();
    this.BajoMinimo$ = new BehaviorSubject([]);
    this.responseBajoMinimo$ = this.BajoMinimo$.asObservable();
    this.PorVencer$ = new BehaviorSubject([]);
    this.responsePorVencer$ = this.PorVencer$.asObservable();
    this.PedKpis$ = new BehaviorSubject(null);
    this.responsePedKpis$ = this.PedKpis$.asObservable();
    this.PedEstado$ = new BehaviorSubject([]);
    this.responsePedEstado$ = this.PedEstado$.asObservable();
    this.PedMes$ = new BehaviorSubject([]);
    this.responsePedMes$ = this.PedMes$.asObservable();
    this.PedDia$ = new BehaviorSubject([]);
    this.responsePedDia$ = this.PedDia$.asObservable();
    this.PedMetodoPago$ = new BehaviorSubject([]);
    this.responsePedMetodoPago$ = this.PedMetodoPago$.asObservable();
    this.IngKpis$ = new BehaviorSubject([]);
    this.responseIngKpis$ = this.IngKpis$.asObservable();
    this.IngMes$ = new BehaviorSubject([]);
    this.responseIngMes$ = this.IngMes$.asObservable();
    this.IngDia$ = new BehaviorSubject([]);
    this.responseIngDia$ = this.IngDia$.asObservable();
    this.IngOrigen$ = new BehaviorSubject([]);
    this.responseIngOrigen$ = this.IngOrigen$.asObservable();
    this.TopRevendedoras$ = new BehaviorSubject([]);
    this.responseTopRevendedoras$ = this.TopRevendedoras$.asObservable();
  }
  t(data, i) {
    return data?.[`Table${i}`] ?? [];
  }
  fila(data, i) {
    return data?.[`Table${i}`]?.[0] ?? null;
  }
  // rol: idTipoUsuario (1=Admin, 2=Vendedor, otro=operativo)
  CargarDashboard(idTipoUsuario, idUsuario, dias = 30, limite = 5) {
    const params = { idTipoUsuario, idUsuario, dias, limite };
    return this.dataApi.PostDataApi(`dashboard/v1/inventario-productos`, params).pipe(tap((result) => {
      const d = result?.data ?? {};
      if (idTipoUsuario === 1) {
        this.InvKpis$.next(this.fila(d, 0));
        this.PedKpis$.next(this.fila(d, 1));
        this.IngKpis$.next(this.fila(d, 2));
        this.PedMes$.next(this.t(d, 3));
        this.PedEstado$.next(this.t(d, 4));
        this.IngMes$.next(this.t(d, 5));
        this.IngDia$.next(this.t(d, 6));
        this.IngOrigen$.next(this.t(d, 7));
        this.TopProductos$.next(this.t(d, 8));
        this.TopRevendedoras$.next(this.t(d, 9));
        this.InvCategoria$.next(this.t(d, 10));
        this.BajoMinimo$.next(this.t(d, 11));
        this.PorVencer$.next(this.t(d, 12));
      } else if (idTipoUsuario === 2) {
        this.IngKpis$.next(this.fila(d, 0));
        this.IngDia$.next(this.t(d, 1));
        this.IngOrigen$.next(this.t(d, 2));
        this.TopProductos$.next(this.t(d, 3));
      } else {
        this.PedKpis$.next(this.fila(d, 0));
        this.PedEstado$.next(this.t(d, 1));
      }
    }), catchError((error) => {
      this._mensajesHttp.mostrarErrorHttp(error, "Error al cargar el dashboard", "");
      return EMPTY;
    })).subscribe();
  }
  static {
    this.\u0275fac = function DashboardFacadeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardFacadeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DashboardFacadeService, factory: _DashboardFacadeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardFacadeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/dashboard/dashboard/dashboard.component.ts
function DashboardComponent_Conditional_13_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30)(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r1 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("up", ctx_r1.variacionPedidos(k_r1) >= 0)("down", ctx_r1.variacionPedidos(k_r1) < 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.variacionPedidos(k_r1) >= 0 ? "trending_up" : "trending_down");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.variacionPedidos(k_r1), "% vs mes anterior ");
  }
}
function DashboardComponent_Conditional_13_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30)(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("up", ctx_r1.variacionIngresos(k_r3) >= 0)("down", ctx_r1.variacionIngresos(k_r3) < 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.variacionIngresos(k_r3) >= 0 ? "trending_up" : "trending_down");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.variacionIngresos(k_r3), "% vs mes anterior ");
  }
}
function DashboardComponent_Conditional_13_Conditional_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Todo con stock suficiente");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_13_Conditional_126_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "span", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 35)(7, "span", 36);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 37);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.producto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.sku);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 4, item_r4.stock_actual, "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("/ ", item_r4.punto_reorden ?? 0, " reorden");
  }
}
function DashboardComponent_Conditional_13_Conditional_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, DashboardComponent_Conditional_13_Conditional_126_For_1_Template, 12, 7, "div", 31, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(2, 0, ctx_r1.facade.responseBajoMinimo$));
  }
}
function DashboardComponent_Conditional_13_Conditional_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Sin lotes pr\xF3ximos a vencer");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_13_Conditional_136_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "span", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 34);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 38)(8, "span", 39);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 40);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.producto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Lote ", item_r5.numero_lote, " \xB7 ", \u0275\u0275pipeBind2(6, 11, item_r5.cantidad, "1.0-0"), " und");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 14, item_r5.fecha_vencimiento, "dd/MM/yy"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("venc-vencido", item_r5.estado === "VENCIDO")("venc-critico", item_r5.estado === "CRITICO")("venc-proximo", item_r5.estado === "PROXIMO");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r5.dias_para_vencer, " d\xEDas ");
  }
}
function DashboardComponent_Conditional_13_Conditional_136_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, DashboardComponent_Conditional_13_Conditional_136_For_1_Template, 13, 17, "div", 31, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(2, 0, ctx_r1.facade.responsePorVencer$));
  }
}
function DashboardComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "mat-icon");
    \u0275\u0275text(4, "receipt_long");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 10)(6, "span", 11);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 12);
    \u0275\u0275text(10, "Pedidos del mes");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, DashboardComponent_Conditional_13_Conditional_11_Template, 4, 6, "span", 13);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 8)(14, "div", 14)(15, "mat-icon");
    \u0275\u0275text(16, "payments");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 10)(18, "span", 11);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275pipe(21, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 12);
    \u0275\u0275text(23, "Ingresos del mes");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(24, DashboardComponent_Conditional_13_Conditional_24_Template, 4, 6, "span", 13);
    \u0275\u0275pipe(25, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 8)(27, "div", 14)(28, "mat-icon");
    \u0275\u0275text(29, "inventory_2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 10)(31, "span", 11);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "async");
    \u0275\u0275pipe(34, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 12);
    \u0275\u0275text(36, "Valor del inventario");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 8);
    \u0275\u0275pipe(38, "async");
    \u0275\u0275elementStart(39, "div", 15)(40, "mat-icon");
    \u0275\u0275text(41, "trending_down");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 10)(43, "span", 11);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 12);
    \u0275\u0275text(47, "Productos bajo m\xEDnimo");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(48, "div", 16)(49, "div", 17)(50, "div", 18)(51, "span", 19);
    \u0275\u0275text(52, "Ingresos por mes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 20);
    \u0275\u0275text(54, "\xDAltimos 12 meses");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 21);
    \u0275\u0275element(56, "canvas", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 17)(58, "div", 18)(59, "span", 19);
    \u0275\u0275text(60, "Pedidos por estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 20);
    \u0275\u0275text(62, "Distribuci\xF3n actual");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 21);
    \u0275\u0275element(64, "canvas", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "div", 16)(66, "div", 17)(67, "div", 18)(68, "span", 19);
    \u0275\u0275text(69, "Pedidos por mes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "span", 20);
    \u0275\u0275text(71, "\xDAltimos 12 meses");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 21);
    \u0275\u0275element(73, "canvas", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 17)(75, "div", 18)(76, "span", 19);
    \u0275\u0275text(77, "Bodega vs Consigna");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "span", 20);
    \u0275\u0275text(79, "Ingresos del mes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 21);
    \u0275\u0275element(81, "canvas", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(82, "div", 16)(83, "div", 17)(84, "div", 18)(85, "span", 19);
    \u0275\u0275text(86, "Top 10 productos m\xE1s vendidos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "span", 20);
    \u0275\u0275text(88, "\xDAltimos 30 d\xEDas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 23);
    \u0275\u0275element(90, "canvas", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div", 17)(92, "div", 18)(93, "span", 19);
    \u0275\u0275text(94, "Top revendedoras del mes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "span", 20);
    \u0275\u0275text(96, "Por ingresos generados");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(97, "div", 23);
    \u0275\u0275element(98, "canvas", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(99, "div", 16)(100, "div", 17)(101, "div", 18)(102, "span", 19);
    \u0275\u0275text(103, "Valor de inventario por categor\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "span", 20);
    \u0275\u0275text(105, "Capital invertido");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "div", 23);
    \u0275\u0275element(107, "canvas", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "div", 17)(109, "div", 18)(110, "span", 19);
    \u0275\u0275text(111, "Ingresos por d\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "span", 20);
    \u0275\u0275text(113, "\xDAltimos 30 d\xEDas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "div", 21);
    \u0275\u0275element(115, "canvas", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(116, "div", 16)(117, "div", 24)(118, "div", 25)(119, "mat-icon", 26);
    \u0275\u0275text(120, "production_quantity_limits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "span", 19);
    \u0275\u0275text(122, "Productos por reabastecer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(123, "div", 27);
    \u0275\u0275conditionalCreate(124, DashboardComponent_Conditional_13_Conditional_124_Template, 4, 0, "div", 28);
    \u0275\u0275pipe(125, "async");
    \u0275\u0275conditionalBranchCreate(126, DashboardComponent_Conditional_13_Conditional_126_Template, 3, 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(127, "div", 24)(128, "div", 25)(129, "mat-icon", 29);
    \u0275\u0275text(130, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "span", 19);
    \u0275\u0275text(132, "Lotes por vencer");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(133, "div", 27);
    \u0275\u0275conditionalCreate(134, DashboardComponent_Conditional_13_Conditional_134_Template, 4, 0, "div", 28);
    \u0275\u0275pipe(135, "async");
    \u0275\u0275conditionalBranchCreate(136, DashboardComponent_Conditional_13_Conditional_136_Template, 3, 2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_32_0;
    let tmp_33_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(((tmp_1_0 = \u0275\u0275pipeBind1(8, 34, ctx_r1.facade.responsePedKpis$)) == null ? null : tmp_1_0.pedidos_mes) ?? 0);
    \u0275\u0275advance(4);
    \u0275\u0275conditional((tmp_2_0 = \u0275\u0275pipeBind1(12, 36, ctx_r1.facade.responsePedKpis$)) ? 11 : -1, tmp_2_0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(21, 40, ((tmp_3_0 = \u0275\u0275pipeBind1(20, 38, ctx_r1.facade.responseIngKpis$)) == null ? null : tmp_3_0.ingresos_mes) ?? 0, "HNL", "L. ", "1.0-0"));
    \u0275\u0275advance(5);
    \u0275\u0275conditional((tmp_4_0 = \u0275\u0275pipeBind1(25, 45, ctx_r1.facade.responseIngKpis$)) ? 24 : -1, tmp_4_0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(34, 49, ((tmp_5_0 = \u0275\u0275pipeBind1(33, 47, ctx_r1.facade.responseInvKpis$)) == null ? null : tmp_5_0.valor_inventario) ?? 0, "HNL", "L. ", "1.0-0"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("alerta", (((tmp_6_0 = \u0275\u0275pipeBind1(38, 54, ctx_r1.facade.responseInvKpis$)) == null ? null : tmp_6_0.productos_bajo_minimo) ?? 0) > 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(((tmp_7_0 = \u0275\u0275pipeBind1(45, 56, ctx_r1.facade.responseInvKpis$)) == null ? null : tmp_7_0.productos_bajo_minimo) ?? 0);
    \u0275\u0275advance(12);
    \u0275\u0275property("type", "line")("data", ctx_r1.ingMesData)("options", ctx_r1.ingMesOptions);
    \u0275\u0275advance(8);
    \u0275\u0275property("type", "doughnut")("data", ctx_r1.pedEstadoData)("options", ctx_r1.pedEstadoOptions);
    \u0275\u0275advance(9);
    \u0275\u0275property("type", "line")("data", ctx_r1.pedMesData)("options", ctx_r1.pedMesOptions);
    \u0275\u0275advance(8);
    \u0275\u0275property("type", "doughnut")("data", ctx_r1.origenData)("options", ctx_r1.origenOptions);
    \u0275\u0275advance(9);
    \u0275\u0275property("type", "bar")("data", ctx_r1.topData)("options", ctx_r1.topOptions);
    \u0275\u0275advance(8);
    \u0275\u0275property("type", "bar")("data", ctx_r1.revendedorasData)("options", ctx_r1.revendedorasOptions);
    \u0275\u0275advance(9);
    \u0275\u0275property("type", "doughnut")("data", ctx_r1.categoriaData)("options", ctx_r1.categoriaOptions);
    \u0275\u0275advance(8);
    \u0275\u0275property("type", "line")("data", ctx_r1.ingDiaData)("options", ctx_r1.ingDiaOptions);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(((tmp_32_0 = \u0275\u0275pipeBind1(125, 58, ctx_r1.facade.responseBajoMinimo$)) == null ? null : tmp_32_0.length) === 0 ? 124 : 126);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(((tmp_33_0 = \u0275\u0275pipeBind1(135, 60, ctx_r1.facade.responsePorVencer$)) == null ? null : tmp_33_0.length) === 0 ? 134 : 136);
  }
}
function DashboardComponent_Conditional_14_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "span", 19);
    \u0275\u0275text(3, "Bodega vs Consigna");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 20);
    \u0275\u0275text(5, "Mis ingresos del mes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 21);
    \u0275\u0275element(7, "canvas", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("type", "doughnut")("data", ctx_r1.origenData)("options", ctx_r1.origenOptions);
  }
}
function DashboardComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "mat-icon");
    \u0275\u0275text(4, "receipt_long");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 10)(6, "span", 11);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 12);
    \u0275\u0275text(10, "Mis pedidos del mes");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 8)(12, "div", 41)(13, "mat-icon");
    \u0275\u0275text(14, "pending_actions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 10)(16, "span", 11);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 12);
    \u0275\u0275text(20, "Pedidos activos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 8)(22, "div", 14)(23, "mat-icon");
    \u0275\u0275text(24, "payments");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 10)(26, "span", 11);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "async");
    \u0275\u0275pipe(29, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 12);
    \u0275\u0275text(31, "Mis ingresos del mes");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 8)(33, "div", 14)(34, "mat-icon");
    \u0275\u0275text(35, "shopping_bag");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 10)(37, "span", 11);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "async");
    \u0275\u0275pipe(40, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 12);
    \u0275\u0275text(42, "Unidades vendidas");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 16)(44, "div", 17)(45, "div", 18)(46, "span", 19);
    \u0275\u0275text(47, "Mis ingresos por d\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 20);
    \u0275\u0275text(49, "\xDAltimos 30 d\xEDas");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 21);
    \u0275\u0275element(51, "canvas", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(52, DashboardComponent_Conditional_14_Conditional_52_Template, 8, 3, "div", 17);
    \u0275\u0275pipe(53, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 16)(55, "div", 17)(56, "div", 18)(57, "span", 19);
    \u0275\u0275text(58, "Mis productos m\xE1s vendidos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 20);
    \u0275\u0275text(60, "Mes actual");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 23);
    \u0275\u0275element(62, "canvas", 22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(((tmp_1_0 = \u0275\u0275pipeBind1(8, 11, ctx_r1.facade.responseIngKpis$)) == null ? null : tmp_1_0.pedidos_mes) ?? 0);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(((tmp_2_0 = \u0275\u0275pipeBind1(18, 13, ctx_r1.facade.responseIngKpis$)) == null ? null : tmp_2_0.pedidos_activos) ?? 0);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(29, 17, ((tmp_3_0 = \u0275\u0275pipeBind1(28, 15, ctx_r1.facade.responseIngKpis$)) == null ? null : tmp_3_0.ingresos_mes) ?? 0, "HNL", "L. ", "1.2-2"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 24, ((tmp_4_0 = \u0275\u0275pipeBind1(39, 22, ctx_r1.facade.responseIngKpis$)) == null ? null : tmp_4_0.unidades_mes) ?? 0, "1.0-0"));
    \u0275\u0275advance(13);
    \u0275\u0275property("type", "line")("data", ctx_r1.ingDiaData)("options", ctx_r1.ingDiaOptions);
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_8_0 = \u0275\u0275pipeBind1(53, 27, ctx_r1.facade.responseIngKpis$)) == null ? null : tmp_8_0.es_revendedora) ? 52 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275property("type", "bar")("data", ctx_r1.topData)("options", ctx_r1.topOptions);
  }
}
function DashboardComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 41)(3, "mat-icon");
    \u0275\u0275text(4, "pending_actions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 10)(6, "span", 11);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 12);
    \u0275\u0275text(10, "Pedidos activos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 8)(12, "div", 9)(13, "mat-icon");
    \u0275\u0275text(14, "receipt_long");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 10)(16, "span", 11);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 12);
    \u0275\u0275text(20, "Pedidos del mes");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 8)(22, "div", 14)(23, "mat-icon");
    \u0275\u0275text(24, "today");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 10)(26, "span", 11);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 12);
    \u0275\u0275text(30, "Pedidos de hoy");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 8)(32, "div", 14)(33, "mat-icon");
    \u0275\u0275text(34, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 10)(36, "span", 11);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 12);
    \u0275\u0275text(40, "Entregados este mes");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "div", 16)(42, "div", 17)(43, "div", 18)(44, "span", 19);
    \u0275\u0275text(45, "Pedidos por estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 20);
    \u0275\u0275text(47, "Distribuci\xF3n actual");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 21);
    \u0275\u0275element(49, "canvas", 22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(((tmp_1_0 = \u0275\u0275pipeBind1(8, 7, ctx_r1.facade.responsePedKpis$)) == null ? null : tmp_1_0.pedidos_activos) ?? 0);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(((tmp_2_0 = \u0275\u0275pipeBind1(18, 9, ctx_r1.facade.responsePedKpis$)) == null ? null : tmp_2_0.pedidos_mes) ?? 0);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(((tmp_3_0 = \u0275\u0275pipeBind1(28, 11, ctx_r1.facade.responsePedKpis$)) == null ? null : tmp_3_0.pedidos_hoy) ?? 0);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(((tmp_4_0 = \u0275\u0275pipeBind1(38, 13, ctx_r1.facade.responsePedKpis$)) == null ? null : tmp_4_0.entregados_mes) ?? 0);
    \u0275\u0275advance(12);
    \u0275\u0275property("type", "doughnut")("data", ctx_r1.pedEstadoData)("options", ctx_r1.pedEstadoOptions);
  }
}
Chart.register(...registerables, plugin);
var DashboardComponent = class _DashboardComponent {
  constructor() {
    this.facade = inject(DashboardFacadeService);
    this.sesion = null;
    this.idTipoUsuario = 0;
    this.esAdmin = false;
    this.esVendedor = false;
    this.esOperativo = false;
    this.rojo = "#E01A1A";
    this.negro = "#1A1A1A";
    this.verde = "#2E7D5B";
    this.ambar = "#E0A82E";
    this.gris = "#9A9A9A";
    this.paleta = ["#E01A1A", "#1A1A1A", "#2E7D5B", "#E0A82E", "#2563EB", "#7C3AED", "#8A8A8A"];
    this.L = (v) => "L. " + Number(v).toLocaleString("en-US", { minimumFractionDigits: 2 });
    this.L0 = (v) => "L. " + Number(v).toLocaleString("en-US", { maximumFractionDigits: 0 });
    this.pedMesData = { labels: [], datasets: [] };
    this.pedMesOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, datalabels: { display: false } },
      scales: { y: { beginAtZero: true, ticks: { precision: 0 } }, x: { grid: { display: false } } }
    };
    this.pedEstadoData = { labels: [], datasets: [] };
    this.pedEstadoOptions = {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "62%",
      plugins: {
        legend: { position: "right", labels: { boxWidth: 12, padding: 12 } },
        datalabels: { color: "#fff", font: { weight: "bold" } }
      }
    };
    this.topData = { labels: [], datasets: [] };
    this.topOptions = {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, datalabels: { anchor: "end", align: "end", color: "#1A1A1A" } },
      scales: { x: { beginAtZero: true, ticks: { precision: 0 } }, y: { grid: { display: false } } }
    };
    this.categoriaData = { labels: [], datasets: [] };
    this.categoriaOptions = {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "62%",
      plugins: {
        legend: { position: "right", labels: { boxWidth: 12, padding: 12 } },
        datalabels: { display: false }
      }
    };
    this.ingMesData = { labels: [], datasets: [] };
    this.ingMesOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        datalabels: { display: false },
        tooltip: { callbacks: { label: (c) => this.L(c.raw) } }
      },
      scales: { y: { beginAtZero: true, ticks: { callback: (v) => this.L0(v) } }, x: { grid: { display: false } } }
    };
    this.ingDiaData = { labels: [], datasets: [] };
    this.ingDiaOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        datalabels: { display: false },
        tooltip: { callbacks: { label: (c) => this.L(c.raw) } }
      },
      scales: { y: { beginAtZero: true, ticks: { callback: (v) => this.L0(v) } }, x: { grid: { display: false } } }
    };
    this.origenData = { labels: [], datasets: [] };
    this.origenOptions = {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "62%",
      plugins: {
        legend: { position: "right", labels: { boxWidth: 12, padding: 12 } },
        datalabels: { display: false },
        tooltip: { callbacks: { label: (c) => c.label + ": " + this.L(c.raw) } }
      }
    };
    this.revendedorasData = { labels: [], datasets: [] };
    this.revendedorasOptions = {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        datalabels: { anchor: "end", align: "end", color: "#1A1A1A", formatter: (v) => this.L0(v) }
      },
      scales: { x: { beginAtZero: true, ticks: { callback: (v) => this.L0(v) } }, y: { grid: { display: false } } }
    };
    this.topIngresoData = { labels: [], datasets: [] };
    this.topIngresoOptions = {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        datalabels: { anchor: "end", align: "end", color: "#1A1A1A", formatter: (v) => this.L0(v) }
      },
      scales: { x: { beginAtZero: true, ticks: { callback: (v) => this.L0(v) } }, y: { grid: { display: false } } }
    };
    this.cargarSesion();
  }
  ngOnInit() {
    this.suscribir();
    this.cargarTodo();
  }
  // ============================================================
  // Sesión / rol
  // ============================================================
  cargarSesion() {
    try {
      this.sesion = JSON.parse(localStorage.getItem("usuario_data") || localStorage.getItem("usuario") || "null");
    } catch (e) {
      this.sesion = null;
    }
    this.idTipoUsuario = Number(this.sesion?.IdTipoUsuario ?? 0);
    this.esAdmin = this.idTipoUsuario === 1;
    this.esVendedor = this.idTipoUsuario === 2;
    this.esOperativo = !this.esAdmin && !this.esVendedor;
  }
  cargarTodo() {
    this.facade.CargarDashboard(this.idTipoUsuario, this.sesion?.IdUsuario ?? 0, 30, 5);
  }
  suscribir() {
    this.facade.responsePedMes$.subscribe((rows) => this.armarPedMes(rows));
    this.facade.responsePedEstado$.subscribe((rows) => this.armarPedEstado(rows));
    this.facade.responseTopProductos$.subscribe((rows) => this.armarTop(rows));
    this.facade.responseInvCategoria$.subscribe((rows) => this.armarCategoria(rows));
    this.facade.responseIngMes$.subscribe((rows) => this.armarIngMes(rows));
    this.facade.responseIngDia$.subscribe((rows) => this.armarIngDia(rows));
    this.facade.responseIngOrigen$.subscribe((rows) => this.armarOrigen(rows));
    this.facade.responseTopRevendedoras$.subscribe((rows) => this.armarRevendedoras(rows));
  }
  armarPedMes(rows) {
    this.pedMesData = {
      labels: (rows || []).map((r) => r.periodo),
      datasets: [{
        data: (rows || []).map((r) => r.cantidad),
        label: "Pedidos",
        borderColor: this.rojo,
        backgroundColor: "rgba(224,26,26,0.08)",
        fill: true,
        tension: 0.35,
        pointBackgroundColor: this.rojo,
        pointRadius: 3
      }]
    };
  }
  armarPedEstado(rows) {
    this.pedEstadoData = {
      labels: (rows || []).map((r) => r.estado),
      datasets: [{
        data: (rows || []).map((r) => r.cantidad),
        backgroundColor: (rows || []).map((_, i) => this.paleta[i % this.paleta.length]),
        borderWidth: 0
      }]
    };
  }
  armarTop(rows) {
    this.topData = {
      labels: (rows || []).map((r) => r.producto),
      datasets: [{
        data: (rows || []).map((r) => r.unidades_vendidas ?? r.unidades),
        label: "Unidades",
        backgroundColor: this.negro,
        borderRadius: 6,
        maxBarThickness: 26
      }]
    };
  }
  armarCategoria(rows) {
    this.categoriaData = {
      labels: (rows || []).map((r) => r.categoria ?? "Sin categor\xEDa"),
      datasets: [{
        data: (rows || []).map((r) => r.valor),
        backgroundColor: (rows || []).map((_, i) => this.paleta[i % this.paleta.length]),
        borderWidth: 0
      }]
    };
  }
  armarIngMes(rows) {
    this.ingMesData = {
      labels: (rows || []).map((r) => r.periodo),
      datasets: [{
        data: (rows || []).map((r) => r.ingresos),
        label: "Ingresos",
        borderColor: this.rojo,
        backgroundColor: "rgba(224,26,26,0.08)",
        fill: true,
        tension: 0.35,
        pointBackgroundColor: this.rojo,
        pointRadius: 3
      }]
    };
  }
  armarIngDia(rows) {
    this.ingDiaData = {
      labels: (rows || []).map((r) => {
        const f = new Date(r.fecha);
        return `${f.getDate()}/${f.getMonth() + 1}`;
      }),
      datasets: [{
        data: (rows || []).map((r) => r.ingresos),
        label: "Ingresos",
        borderColor: this.negro,
        backgroundColor: "rgba(26,26,26,0.06)",
        fill: true,
        tension: 0.35,
        pointBackgroundColor: this.negro,
        pointRadius: 2
      }]
    };
  }
  armarOrigen(rows) {
    this.origenData = {
      labels: (rows || []).map((r) => r.origen),
      datasets: [{
        data: (rows || []).map((r) => r.ingresos),
        backgroundColor: (rows || []).map((r) => r.origen === "Consigna" ? this.rojo : this.negro),
        borderWidth: 0
      }]
    };
  }
  armarRevendedoras(rows) {
    this.revendedorasData = {
      labels: (rows || []).map((r) => r.revendedora),
      datasets: [{
        data: (rows || []).map((r) => r.ingresos),
        label: "Ingresos",
        backgroundColor: this.rojo,
        borderRadius: 6,
        maxBarThickness: 26
      }]
    };
  }
  variacionPedidos(kpi) {
    if (!kpi || !kpi.pedidos_mes_anterior) {
      return 0;
    }
    return Math.round((kpi.pedidos_mes - kpi.pedidos_mes_anterior) / kpi.pedidos_mes_anterior * 100);
  }
  variacionIngresos(kpi) {
    if (!kpi || !kpi.ingresos_mes_anterior) {
      return 0;
    }
    return Math.round((kpi.ingresos_mes - kpi.ingresos_mes_anterior) / kpi.ingresos_mes_anterior * 100);
  }
  ticketPromedio(kpi) {
    if (!kpi || !kpi.pedidos_mes) {
      return 0;
    }
    return kpi.ingresos_mes / kpi.pedidos_mes;
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: false, decls: 16, vars: 3, consts: [[1, "navigation"], [1, "content"], [1, "titleNav"], [1, "subtitulo"], [1, "action"], ["mat-flat-button", "", 1, "button-principal", 3, "click"], [1, "dash-wrap"], [1, "kpi-row"], [1, "kpi-card"], [1, "kpi-ico", "ico-ped"], [1, "kpi-txt"], [1, "kpi-num"], [1, "kpi-lbl"], [1, "kpi-var", 3, "up", "down"], [1, "kpi-ico", "ico-inv"], [1, "kpi-ico", "ico-alert"], [1, "grid-2"], [1, "chart-card"], [1, "chart-head"], [1, "chart-title"], [1, "chart-sub"], [1, "chart-body"], ["baseChart", "", 3, "type", "data", "options"], [1, "chart-body", "chart-tall"], [1, "alert-card"], [1, "alert-head"], [1, "ico-alert-red"], [1, "alert-body"], [1, "alert-empty"], [1, "ico-alert-amber"], [1, "kpi-var"], [1, "alert-row"], [1, "alert-info"], [1, "alert-nombre"], [1, "alert-sku"], [1, "alert-stock"], [1, "stock-actual"], [1, "stock-min"], [1, "alert-venc"], [1, "venc-fecha"], [1, "venc-pill"], [1, "kpi-ico", "ico-proc"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        \u0275\u0275text(4, "Panel de an\xE1lisis");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275text(6, "Monitoreo de m\xE9tricas, informes y desempe\xF1o");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
        \u0275\u0275listener("click", function DashboardComponent_Template_button_click_8_listener() {
          return ctx.cargarTodo();
        });
        \u0275\u0275elementStart(9, "mat-icon");
        \u0275\u0275text(10, "refresh");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " Actualizar ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(12, "div", 6);
        \u0275\u0275conditionalCreate(13, DashboardComponent_Conditional_13_Template, 137, 62);
        \u0275\u0275conditionalCreate(14, DashboardComponent_Conditional_14_Template, 63, 29);
        \u0275\u0275conditionalCreate(15, DashboardComponent_Conditional_15_Template, 50, 15);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275conditional(ctx.esAdmin ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.esVendedor ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.esOperativo ? 15 : -1);
      }
    }, dependencies: [MatIcon, MatButton, BaseChartDirective, AsyncPipe, DecimalPipe, CurrencyPipe, DatePipe], styles: ['@charset "UTF-8";\n\n\n.dash-wrap[_ngcontent-%COMP%] {\n  padding: 8px 24px 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-card);\n  padding: 18px 20px;\n  box-shadow: var(--shadow-soft);\n}\n.kpi-card.alerta[_ngcontent-%COMP%] {\n  border-color: rgba(224, 26, 26, 0.35);\n}\n.kpi-ico[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.kpi-ico[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.ico-ped[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n}\n.ico-proc[_ngcontent-%COMP%] {\n  background: #2563EB;\n}\n.ico-inv[_ngcontent-%COMP%] {\n  background: var(--color-success);\n}\n.ico-alert[_ngcontent-%COMP%] {\n  background: var(--color-accent);\n}\n.kpi-txt[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.kpi-num[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--color-text);\n  line-height: 1.1;\n}\n.kpi-lbl[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n  margin-top: 2px;\n}\n.kpi-var[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 11.5px;\n  font-weight: 600;\n  margin-top: 4px;\n}\n.kpi-var[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  height: 14px;\n  width: 14px;\n}\n.kpi-var.up[_ngcontent-%COMP%] {\n  color: var(--color-success);\n}\n.kpi-var.down[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n.grid-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.chart-card[_ngcontent-%COMP%], \n.alert-card[_ngcontent-%COMP%] {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-card);\n  box-shadow: var(--shadow-soft);\n  overflow: hidden;\n}\n.chart-head[_ngcontent-%COMP%] {\n  padding: 16px 20px 4px;\n  display: flex;\n  flex-direction: column;\n}\n.chart-head[_ngcontent-%COMP%]   .chart-title[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-weight: 600;\n  font-size: 16px;\n  color: var(--color-text);\n}\n.chart-head[_ngcontent-%COMP%]   .chart-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n  margin-top: 2px;\n}\n.chart-body[_ngcontent-%COMP%] {\n  padding: 12px 20px 20px;\n  height: 280px;\n  position: relative;\n}\n.chart-body.chart-tall[_ngcontent-%COMP%] {\n  height: 340px;\n}\n.alert-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--color-border);\n}\n.alert-head[_ngcontent-%COMP%]   .ico-alert-red[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n}\n.alert-head[_ngcontent-%COMP%]   .ico-alert-amber[_ngcontent-%COMP%] {\n  color: var(--color-warning);\n}\n.alert-head[_ngcontent-%COMP%]   .chart-title[_ngcontent-%COMP%] {\n  font-family: var(--font-serif);\n  font-weight: 600;\n  font-size: 16px;\n  color: var(--color-text);\n}\n.alert-body[_ngcontent-%COMP%] {\n  max-height: 320px;\n  overflow-y: auto;\n}\n.alert-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 20px;\n  border-bottom: 1px solid var(--color-border);\n}\n.alert-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.alert-row[_ngcontent-%COMP%]:hover {\n  background: #FAF9F7;\n}\n.alert-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.alert-nombre[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  color: var(--color-text);\n}\n.alert-sku[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n}\n.alert-stock[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.stock-actual[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--color-accent);\n  font-size: 15px;\n}\n.stock-min[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n}\n.alert-venc[_ngcontent-%COMP%] {\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  align-items: flex-end;\n}\n.venc-fecha[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--color-text);\n  font-weight: 500;\n}\n.venc-pill[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 12px;\n}\n.venc-vencido[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: #fff;\n}\n.venc-critico[_ngcontent-%COMP%] {\n  background: rgba(224, 26, 26, 0.1);\n  color: var(--color-accent);\n}\n.venc-proximo[_ngcontent-%COMP%] {\n  background: rgba(224, 168, 46, 0.16);\n  color: #B8860B;\n}\n.alert-empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  justify-content: center;\n  padding: 32px;\n  color: var(--color-success);\n  font-size: 14px;\n}\n.alert-empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--color-success);\n}\n.navigation[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 1100px) {\n  .kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 800px) {\n  .grid-2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 600px) {\n  .dash-wrap[_ngcontent-%COMP%] {\n    padding: 8px 14px 24px;\n  }\n  .kpi-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: false, template: `<div class="navigation">
  <div class="content">
    <div class="titleNav">
      <h2>Panel de an\xE1lisis</h2>
      <div class="subtitulo">Monitoreo de m\xE9tricas, informes y desempe\xF1o</div>
    </div>
    <div class="action">
      <button class="button-principal" mat-flat-button (click)="cargarTodo()">
        <mat-icon>refresh</mat-icon>
        Actualizar
      </button>
    </div>
  </div>
</div>

<div class="dash-wrap">

  <!-- ============================================================
       ADMINISTRADOR : dashboard completo
       ============================================================ -->
  @if (esAdmin) {

    <!-- KPIs -->
    <div class="kpi-row">
      <div class="kpi-card">
        <div class="kpi-ico ico-ped"><mat-icon>receipt_long</mat-icon></div>
        <div class="kpi-txt">
          <span class="kpi-num">{{ (facade.responsePedKpis$ | async)?.pedidos_mes ?? 0 }}</span>
          <span class="kpi-lbl">Pedidos del mes</span>
          @if (facade.responsePedKpis$ | async; as k) {
          <span class="kpi-var" [class.up]="variacionPedidos(k) >= 0" [class.down]="variacionPedidos(k) < 0">
            <mat-icon>{{ variacionPedidos(k) >= 0 ? 'trending_up' : 'trending_down' }}</mat-icon>
            {{ variacionPedidos(k) }}% vs mes anterior
          </span>
          }
        </div>
      </div>

      <div class="kpi-card">
        <div class="kpi-ico ico-inv"><mat-icon>payments</mat-icon></div>
        <div class="kpi-txt">
          <span class="kpi-num">{{ (facade.responseIngKpis$ | async)?.ingresos_mes ?? 0 | currency:'HNL':'L. ':'1.0-0' }}</span>
          <span class="kpi-lbl">Ingresos del mes</span>
          @if (facade.responseIngKpis$ | async; as k) {
          <span class="kpi-var" [class.up]="variacionIngresos(k) >= 0" [class.down]="variacionIngresos(k) < 0">
            <mat-icon>{{ variacionIngresos(k) >= 0 ? 'trending_up' : 'trending_down' }}</mat-icon>
            {{ variacionIngresos(k) }}% vs mes anterior
          </span>
          }
        </div>
      </div>

      <div class="kpi-card">
        <div class="kpi-ico ico-inv"><mat-icon>inventory_2</mat-icon></div>
        <div class="kpi-txt">
          <span class="kpi-num">{{ (facade.responseInvKpis$ | async)?.valor_inventario ?? 0 | currency:'HNL':'L. ':'1.0-0' }}</span>
          <span class="kpi-lbl">Valor del inventario</span>
        </div>
      </div>

      <div class="kpi-card" [class.alerta]="((facade.responseInvKpis$ | async)?.productos_bajo_minimo ?? 0) > 0">
        <div class="kpi-ico ico-alert"><mat-icon>trending_down</mat-icon></div>
        <div class="kpi-txt">
          <span class="kpi-num">{{ (facade.responseInvKpis$ | async)?.productos_bajo_minimo ?? 0 }}</span>
          <span class="kpi-lbl">Productos bajo m\xEDnimo</span>
        </div>
      </div>
    </div>

    <!-- Gr\xE1ficos fila 1 -->
    <div class="grid-2">
      <div class="chart-card">
        <div class="chart-head"><span class="chart-title">Ingresos por mes</span><span class="chart-sub">\xDAltimos 12 meses</span></div>
        <div class="chart-body"><canvas baseChart [type]="'line'" [data]="ingMesData" [options]="ingMesOptions"></canvas></div>
      </div>
      <div class="chart-card">
        <div class="chart-head"><span class="chart-title">Pedidos por estado</span><span class="chart-sub">Distribuci\xF3n actual</span></div>
        <div class="chart-body"><canvas baseChart [type]="'doughnut'" [data]="pedEstadoData" [options]="pedEstadoOptions"></canvas></div>
      </div>
    </div>

    <!-- Gr\xE1ficos fila 2 -->
    <div class="grid-2">
      <div class="chart-card">
        <div class="chart-head"><span class="chart-title">Pedidos por mes</span><span class="chart-sub">\xDAltimos 12 meses</span></div>
        <div class="chart-body"><canvas baseChart [type]="'line'" [data]="pedMesData" [options]="pedMesOptions"></canvas></div>
      </div>
      <div class="chart-card">
        <div class="chart-head"><span class="chart-title">Bodega vs Consigna</span><span class="chart-sub">Ingresos del mes</span></div>
        <div class="chart-body"><canvas baseChart [type]="'doughnut'" [data]="origenData" [options]="origenOptions"></canvas></div>
      </div>
    </div>

    <!-- Gr\xE1ficos fila 3 -->
    <div class="grid-2">
      <div class="chart-card">
        <div class="chart-head"><span class="chart-title">Top 10 productos m\xE1s vendidos</span><span class="chart-sub">\xDAltimos 30 d\xEDas</span></div>
        <div class="chart-body chart-tall"><canvas baseChart [type]="'bar'" [data]="topData" [options]="topOptions"></canvas></div>
      </div>
      <div class="chart-card">
        <div class="chart-head"><span class="chart-title">Top revendedoras del mes</span><span class="chart-sub">Por ingresos generados</span></div>
        <div class="chart-body chart-tall"><canvas baseChart [type]="'bar'" [data]="revendedorasData" [options]="revendedorasOptions"></canvas></div>
      </div>
    </div>

    <!-- Gr\xE1ficos fila 4 -->
    <div class="grid-2">
      <div class="chart-card">
        <div class="chart-head"><span class="chart-title">Valor de inventario por categor\xEDa</span><span class="chart-sub">Capital invertido</span></div>
        <div class="chart-body chart-tall"><canvas baseChart [type]="'doughnut'" [data]="categoriaData" [options]="categoriaOptions"></canvas></div>
      </div>
      <div class="chart-card">
        <div class="chart-head"><span class="chart-title">Ingresos por d\xEDa</span><span class="chart-sub">\xDAltimos 30 d\xEDas</span></div>
        <div class="chart-body"><canvas baseChart [type]="'line'" [data]="ingDiaData" [options]="ingDiaOptions"></canvas></div>
      </div>
    </div>

    <!-- Alertas -->
    <div class="grid-2">
      <div class="alert-card">
        <div class="alert-head">
          <mat-icon class="ico-alert-red">production_quantity_limits</mat-icon>
          <span class="chart-title">Productos por reabastecer</span>
        </div>
        <div class="alert-body">
          @if ((facade.responseBajoMinimo$ | async)?.length === 0) {
          <div class="alert-empty"><mat-icon>check_circle</mat-icon> Todo con stock suficiente</div>
          } @else {
          @for (item of (facade.responseBajoMinimo$ | async); track item) {
          <div class="alert-row">
            <div class="alert-info">
              <span class="alert-nombre">{{ item.producto }}</span>
              <span class="alert-sku">{{ item.sku }}</span>
            </div>
            <div class="alert-stock">
              <span class="stock-actual">{{ item.stock_actual | number:'1.0-0' }}</span>
              <span class="stock-min">/ {{ item.punto_reorden ?? 0 }} reorden</span>
            </div>
          </div>
          }
          }
        </div>
      </div>

      <div class="alert-card">
        <div class="alert-head">
          <mat-icon class="ico-alert-amber">schedule</mat-icon>
          <span class="chart-title">Lotes por vencer</span>
        </div>
        <div class="alert-body">
          @if ((facade.responsePorVencer$ | async)?.length === 0) {
          <div class="alert-empty"><mat-icon>check_circle</mat-icon> Sin lotes pr\xF3ximos a vencer</div>
          } @else {
          @for (item of (facade.responsePorVencer$ | async); track item) {
          <div class="alert-row">
            <div class="alert-info">
              <span class="alert-nombre">{{ item.producto }}</span>
              <span class="alert-sku">Lote {{ item.numero_lote }} \xB7 {{ item.cantidad | number:'1.0-0' }} und</span>
            </div>
            <div class="alert-venc">
              <span class="venc-fecha">{{ item.fecha_vencimiento | date:'dd/MM/yy' }}</span>
              <span class="venc-pill" [class.venc-vencido]="item.estado === 'VENCIDO'"
                [class.venc-critico]="item.estado === 'CRITICO'" [class.venc-proximo]="item.estado === 'PROXIMO'">
                {{ item.dias_para_vencer }} d\xEDas
              </span>
            </div>
          </div>
          }
          }
        </div>
      </div>
    </div>
  }

  <!-- ============================================================
       VENDEDOR : solo lo suyo (con montos)
       ============================================================ -->
  @if (esVendedor) {
    <div class="kpi-row">
      <div class="kpi-card">
        <div class="kpi-ico ico-ped"><mat-icon>receipt_long</mat-icon></div>
        <div class="kpi-txt">
          <span class="kpi-num">{{ (facade.responseIngKpis$ | async)?.pedidos_mes ?? 0 }}</span>
          <span class="kpi-lbl">Mis pedidos del mes</span>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-ico ico-proc"><mat-icon>pending_actions</mat-icon></div>
        <div class="kpi-txt">
          <span class="kpi-num">{{ (facade.responseIngKpis$ | async)?.pedidos_activos ?? 0 }}</span>
          <span class="kpi-lbl">Pedidos activos</span>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-ico ico-inv"><mat-icon>payments</mat-icon></div>
        <div class="kpi-txt">
          <span class="kpi-num">{{ (facade.responseIngKpis$ | async)?.ingresos_mes ?? 0 | currency:'HNL':'L. ':'1.2-2' }}</span>
          <span class="kpi-lbl">Mis ingresos del mes</span>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-ico ico-inv"><mat-icon>shopping_bag</mat-icon></div>
        <div class="kpi-txt">
          <span class="kpi-num">{{ (facade.responseIngKpis$ | async)?.unidades_mes ?? 0 | number:'1.0-0' }}</span>
          <span class="kpi-lbl">Unidades vendidas</span>
        </div>
      </div>
    </div>

    <div class="grid-2">
      <div class="chart-card">
        <div class="chart-head"><span class="chart-title">Mis ingresos por d\xEDa</span><span class="chart-sub">\xDAltimos 30 d\xEDas</span></div>
        <div class="chart-body"><canvas baseChart [type]="'line'" [data]="ingDiaData" [options]="ingDiaOptions"></canvas></div>
      </div>

      @if ((facade.responseIngKpis$ | async)?.es_revendedora) {
        <div class="chart-card">
          <div class="chart-head"><span class="chart-title">Bodega vs Consigna</span><span class="chart-sub">Mis ingresos del mes</span></div>
          <div class="chart-body"><canvas baseChart [type]="'doughnut'" [data]="origenData" [options]="origenOptions"></canvas></div>
        </div>
      }
    </div>

    <div class="grid-2">
      <div class="chart-card">
        <div class="chart-head"><span class="chart-title">Mis productos m\xE1s vendidos</span><span class="chart-sub">Mes actual</span></div>
        <div class="chart-body chart-tall"><canvas baseChart [type]="'bar'" [data]="topData" [options]="topOptions"></canvas></div>
      </div>
    </div>
  }

  <!-- ============================================================
       BODEGA / TEMPORAL / TIENDA : solo conteos (sin dinero)
       ============================================================ -->
  @if (esOperativo) {
    <div class="kpi-row">
      <div class="kpi-card">
        <div class="kpi-ico ico-proc"><mat-icon>pending_actions</mat-icon></div>
        <div class="kpi-txt">
          <span class="kpi-num">{{ (facade.responsePedKpis$ | async)?.pedidos_activos ?? 0 }}</span>
          <span class="kpi-lbl">Pedidos activos</span>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-ico ico-ped"><mat-icon>receipt_long</mat-icon></div>
        <div class="kpi-txt">
          <span class="kpi-num">{{ (facade.responsePedKpis$ | async)?.pedidos_mes ?? 0 }}</span>
          <span class="kpi-lbl">Pedidos del mes</span>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-ico ico-inv"><mat-icon>today</mat-icon></div>
        <div class="kpi-txt">
          <span class="kpi-num">{{ (facade.responsePedKpis$ | async)?.pedidos_hoy ?? 0 }}</span>
          <span class="kpi-lbl">Pedidos de hoy</span>
        </div>
      </div>
      <div class="kpi-card">
        <div class="kpi-ico ico-inv"><mat-icon>check_circle</mat-icon></div>
        <div class="kpi-txt">
          <span class="kpi-num">{{ (facade.responsePedKpis$ | async)?.entregados_mes ?? 0 }}</span>
          <span class="kpi-lbl">Entregados este mes</span>
        </div>
      </div>
    </div>

    <div class="grid-2">
      <div class="chart-card">
        <div class="chart-head"><span class="chart-title">Pedidos por estado</span><span class="chart-sub">Distribuci\xF3n actual</span></div>
        <div class="chart-body"><canvas baseChart [type]="'doughnut'" [data]="pedEstadoData" [options]="pedEstadoOptions"></canvas></div>
      </div>
    </div>
  }

</div>`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/dashboard/dashboard/dashboard.component.scss */\n.dash-wrap {\n  padding: 8px 24px 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.kpi-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.kpi-card {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-card);\n  padding: 18px 20px;\n  box-shadow: var(--shadow-soft);\n}\n.kpi-card.alerta {\n  border-color: rgba(224, 26, 26, 0.35);\n}\n.kpi-ico {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.kpi-ico mat-icon {\n  color: #fff;\n}\n.ico-ped {\n  background: var(--color-primary);\n}\n.ico-proc {\n  background: #2563EB;\n}\n.ico-inv {\n  background: var(--color-success);\n}\n.ico-alert {\n  background: var(--color-accent);\n}\n.kpi-txt {\n  display: flex;\n  flex-direction: column;\n}\n.kpi-num {\n  font-family: var(--font-serif);\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--color-text);\n  line-height: 1.1;\n}\n.kpi-lbl {\n  font-size: 12.5px;\n  color: var(--color-text-secondary);\n  margin-top: 2px;\n}\n.kpi-var {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 11.5px;\n  font-weight: 600;\n  margin-top: 4px;\n}\n.kpi-var mat-icon {\n  font-size: 14px;\n  height: 14px;\n  width: 14px;\n}\n.kpi-var.up {\n  color: var(--color-success);\n}\n.kpi-var.down {\n  color: var(--color-accent);\n}\n.grid-2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.chart-card,\n.alert-card {\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-card);\n  box-shadow: var(--shadow-soft);\n  overflow: hidden;\n}\n.chart-head {\n  padding: 16px 20px 4px;\n  display: flex;\n  flex-direction: column;\n}\n.chart-head .chart-title {\n  font-family: var(--font-serif);\n  font-weight: 600;\n  font-size: 16px;\n  color: var(--color-text);\n}\n.chart-head .chart-sub {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n  margin-top: 2px;\n}\n.chart-body {\n  padding: 12px 20px 20px;\n  height: 280px;\n  position: relative;\n}\n.chart-body.chart-tall {\n  height: 340px;\n}\n.alert-head {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--color-border);\n}\n.alert-head .ico-alert-red {\n  color: var(--color-accent);\n}\n.alert-head .ico-alert-amber {\n  color: var(--color-warning);\n}\n.alert-head .chart-title {\n  font-family: var(--font-serif);\n  font-weight: 600;\n  font-size: 16px;\n  color: var(--color-text);\n}\n.alert-body {\n  max-height: 320px;\n  overflow-y: auto;\n}\n.alert-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 20px;\n  border-bottom: 1px solid var(--color-border);\n}\n.alert-row:last-child {\n  border-bottom: none;\n}\n.alert-row:hover {\n  background: #FAF9F7;\n}\n.alert-info {\n  display: flex;\n  flex-direction: column;\n}\n.alert-nombre {\n  font-weight: 600;\n  font-size: 14px;\n  color: var(--color-text);\n}\n.alert-sku {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n}\n.alert-stock {\n  text-align: right;\n}\n.stock-actual {\n  font-weight: 700;\n  color: var(--color-accent);\n  font-size: 15px;\n}\n.stock-min {\n  font-size: 12px;\n  color: var(--color-text-secondary);\n}\n.alert-venc {\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  align-items: flex-end;\n}\n.venc-fecha {\n  font-size: 13px;\n  color: var(--color-text);\n  font-weight: 500;\n}\n.venc-pill {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 12px;\n}\n.venc-vencido {\n  background: var(--color-primary);\n  color: #fff;\n}\n.venc-critico {\n  background: rgba(224, 26, 26, 0.1);\n  color: var(--color-accent);\n}\n.venc-proximo {\n  background: rgba(224, 168, 46, 0.16);\n  color: #B8860B;\n}\n.alert-empty {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  justify-content: center;\n  padding: 32px;\n  color: var(--color-success);\n  font-size: 14px;\n}\n.alert-empty mat-icon {\n  color: var(--color-success);\n}\n.navigation .action {\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 1100px) {\n  .kpi-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 800px) {\n  .grid-2 {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 600px) {\n  .dash-wrap {\n    padding: 8px 14px 24px;\n  }\n  .kpi-row {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/modules/dashboard/dashboard/dashboard.component.ts", lineNumber: 14 });
})();

// src/app/modules/dashboard/dashboard-routing.module.ts
var routes = [
  {
    path: "",
    component: DashboardComponent
  }
];
var DashboardRoutingModule = class _DashboardRoutingModule {
  static {
    this.\u0275fac = function DashboardRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DashboardRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/tabs.mjs
var _c0 = ["*"];
function MatTab_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
var _c1 = ["tabListContainer"];
var _c2 = ["tabList"];
var _c3 = ["tabListInner"];
var _c4 = ["nextPaginator"];
var _c5 = ["previousPaginator"];
var _c6 = ["content"];
function MatTabBody_ng_template_2_Template(rf, ctx) {
}
var _c7 = ["tabBodyWrapper"];
var _c8 = ["tabHeader"];
function MatTabGroup_For_3_Conditional_6_ng_template_0_Template(rf, ctx) {
}
function MatTabGroup_For_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MatTabGroup_For_3_Conditional_6_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const tab_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("cdkPortalOutlet", tab_r3.templateLabel);
  }
}
function MatTabGroup_For_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const tab_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(tab_r3.textLabel);
  }
}
function MatTabGroup_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7, 2);
    \u0275\u0275listener("click", function MatTabGroup_For_3_Template_div_click_0_listener() {
      const ctx_r1 = \u0275\u0275restoreView(_r1);
      const tab_r3 = ctx_r1.$implicit;
      const $index_r4 = ctx_r1.$index;
      const ctx_r4 = \u0275\u0275nextContext();
      const tabHeader_r6 = \u0275\u0275reference(1);
      return \u0275\u0275resetView(ctx_r4._handleClick(tab_r3, tabHeader_r6, $index_r4));
    })("cdkFocusChange", function MatTabGroup_For_3_Template_div_cdkFocusChange_0_listener($event) {
      const $index_r4 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4._tabFocusChanged($event, $index_r4));
    });
    \u0275\u0275element(2, "span", 8)(3, "div", 9);
    \u0275\u0275elementStart(4, "span", 10)(5, "span", 11);
    \u0275\u0275conditionalCreate(6, MatTabGroup_For_3_Conditional_6_Template, 1, 1, null, 12)(7, MatTabGroup_For_3_Conditional_7_Template, 1, 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    const tabNode_r7 = \u0275\u0275reference(1);
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap(tab_r3.labelClass);
    \u0275\u0275classProp("mdc-tab--active", ctx_r4.selectedIndex === $index_r4);
    \u0275\u0275property("id", ctx_r4._getTabLabelId(tab_r3, $index_r4))("disabled", tab_r3.disabled)("fitInkBarToContent", ctx_r4.fitInkBarToContent);
    \u0275\u0275attribute("tabIndex", ctx_r4._getTabIndex($index_r4))("aria-posinset", $index_r4 + 1)("aria-setsize", ctx_r4._tabs.length)("aria-controls", ctx_r4._getTabContentId($index_r4))("aria-selected", ctx_r4.selectedIndex === $index_r4)("aria-label", tab_r3.ariaLabel || null)("aria-labelledby", !tab_r3.ariaLabel && tab_r3.ariaLabelledby ? tab_r3.ariaLabelledby : null);
    \u0275\u0275advance(3);
    \u0275\u0275property("matRippleTrigger", tabNode_r7)("matRippleDisabled", tab_r3.disabled || ctx_r4.disableRipple);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(tab_r3.templateLabel ? 6 : 7);
  }
}
function MatTabGroup_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function MatTabGroup_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-tab-body", 13);
    \u0275\u0275listener("_onCentered", function MatTabGroup_For_8_Template_mat_tab_body__onCentered_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4._removeTabBodyWrapperHeight());
    })("_onCentering", function MatTabGroup_For_8_Template_mat_tab_body__onCentering_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4._setTabBodyWrapperHeight($event));
    })("_beforeCentering", function MatTabGroup_For_8_Template_mat_tab_body__beforeCentering_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4._bodyCentered($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r9 = ctx.$implicit;
    const $index_r10 = ctx.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap(tab_r9.bodyClass);
    \u0275\u0275property("id", ctx_r4._getTabContentId($index_r10))("content", tab_r9.content)("position", tab_r9.position)("animationDuration", ctx_r4.animationDuration)("preserveContent", ctx_r4.preserveContent);
    \u0275\u0275attribute("tabindex", ctx_r4.contentTabIndex != null && ctx_r4.selectedIndex === $index_r10 ? ctx_r4.contentTabIndex : null)("aria-labelledby", ctx_r4._getTabLabelId(tab_r9, $index_r10))("aria-hidden", ctx_r4.selectedIndex !== $index_r10);
  }
}
var _c9 = ["mat-tab-nav-bar", ""];
var _c10 = ["mat-tab-link", ""];
var MAT_TAB_CONTENT = new InjectionToken("MatTabContent");
var MatTabContent = class _MatTabContent {
  template = inject(TemplateRef);
  constructor() {
  }
  static \u0275fac = function MatTabContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTabContent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatTabContent,
    selectors: [["", "matTabContent", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_TAB_CONTENT,
      useExisting: _MatTabContent
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabContent, [{
    type: Directive,
    args: [{
      selector: "[matTabContent]",
      providers: [{
        provide: MAT_TAB_CONTENT,
        useExisting: MatTabContent
      }]
    }]
  }], () => [], null);
})();
var MAT_TAB_LABEL = new InjectionToken("MatTabLabel");
var MAT_TAB = new InjectionToken("MAT_TAB");
var MatTabLabel = class _MatTabLabel extends CdkPortal {
  _closestTab = inject(MAT_TAB, {
    optional: true
  });
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatTabLabel_BaseFactory;
    return function MatTabLabel_Factory(__ngFactoryType__) {
      return (\u0275MatTabLabel_BaseFactory || (\u0275MatTabLabel_BaseFactory = \u0275\u0275getInheritedFactory(_MatTabLabel)))(__ngFactoryType__ || _MatTabLabel);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatTabLabel,
    selectors: [["", "mat-tab-label", ""], ["", "matTabLabel", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_TAB_LABEL,
      useExisting: _MatTabLabel
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabLabel, [{
    type: Directive,
    args: [{
      selector: "[mat-tab-label], [matTabLabel]",
      providers: [{
        provide: MAT_TAB_LABEL,
        useExisting: MatTabLabel
      }]
    }]
  }], null, null);
})();
var MAT_TAB_GROUP = new InjectionToken("MAT_TAB_GROUP");
var MatTab = class _MatTab {
  _viewContainerRef = inject(ViewContainerRef);
  _closestTabGroup = inject(MAT_TAB_GROUP, {
    optional: true
  });
  disabled = false;
  get templateLabel() {
    return this._templateLabel;
  }
  set templateLabel(value) {
    this._setTemplateLabelInput(value);
  }
  _templateLabel;
  _explicitContent = void 0;
  _implicitContent;
  textLabel = "";
  ariaLabel;
  ariaLabelledby;
  labelClass;
  bodyClass;
  id = null;
  _contentPortal = null;
  get content() {
    return this._contentPortal;
  }
  _stateChanges = new Subject();
  position = null;
  origin = null;
  isActive = false;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
  }
  ngOnChanges(changes) {
    if (changes.hasOwnProperty("textLabel") || changes.hasOwnProperty("disabled")) {
      this._stateChanges.next();
    }
  }
  ngOnDestroy() {
    this._stateChanges.complete();
  }
  ngOnInit() {
    this._contentPortal = new TemplatePortal(this._explicitContent || this._implicitContent, this._viewContainerRef);
  }
  _setTemplateLabelInput(value) {
    if (value && value._closestTab === this) {
      this._templateLabel = value;
    }
  }
  static \u0275fac = function MatTab_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTab)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatTab,
    selectors: [["mat-tab"]],
    contentQueries: function MatTab_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatTabLabel, 5)(dirIndex, MatTabContent, 7, TemplateRef);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templateLabel = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._explicitContent = _t.first);
      }
    },
    viewQuery: function MatTab_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(TemplateRef, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._implicitContent = _t.first);
      }
    },
    hostAttrs: ["hidden", ""],
    hostVars: 1,
    hostBindings: function MatTab_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("id", null);
      }
    },
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute],
      textLabel: [0, "label", "textLabel"],
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      labelClass: "labelClass",
      bodyClass: "bodyClass",
      id: "id"
    },
    exportAs: ["matTab"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_TAB,
      useExisting: _MatTab
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatTab_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domTemplate(0, MatTab_ng_template_0_Template, 1, 0, "ng-template");
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTab, [{
    type: Component,
    args: [{
      selector: "mat-tab",
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      exportAs: "matTab",
      providers: [{
        provide: MAT_TAB,
        useExisting: MatTab
      }],
      host: {
        "hidden": "",
        "[attr.id]": "null"
      },
      template: "<!-- Create a template for the content of the <mat-tab> so that we can grab a reference to this\n    TemplateRef and use it in a Portal to render the tab content in the appropriate place in the\n    tab-group. -->\n<ng-template><ng-content></ng-content></ng-template>\n"
    }]
  }], () => [], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    templateLabel: [{
      type: ContentChild,
      args: [MatTabLabel]
    }],
    _explicitContent: [{
      type: ContentChild,
      args: [MatTabContent, {
        read: TemplateRef,
        static: true
      }]
    }],
    _implicitContent: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }],
    textLabel: [{
      type: Input,
      args: ["label"]
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    labelClass: [{
      type: Input
    }],
    bodyClass: [{
      type: Input
    }],
    id: [{
      type: Input
    }]
  });
})();
var ACTIVE_CLASS = "mdc-tab-indicator--active";
var NO_TRANSITION_CLASS = "mdc-tab-indicator--no-transition";
var MatInkBar = class {
  _items;
  _currentItem;
  constructor(_items) {
    this._items = _items;
  }
  hide() {
    this._items.forEach((item) => item.deactivateInkBar());
    this._currentItem = void 0;
  }
  alignToElement(element) {
    const correspondingItem = this._items.find((item) => item.elementRef.nativeElement === element);
    const currentItem = this._currentItem;
    if (correspondingItem === currentItem) {
      return;
    }
    currentItem?.deactivateInkBar();
    if (correspondingItem) {
      const domRect = currentItem?.elementRef.nativeElement.getBoundingClientRect?.();
      correspondingItem.activateInkBar(domRect);
      this._currentItem = correspondingItem;
    }
  }
};
var InkBarItem = class _InkBarItem {
  _elementRef = inject(ElementRef);
  _inkBarElement = null;
  _inkBarContentElement = null;
  _fitToContent = false;
  get fitInkBarToContent() {
    return this._fitToContent;
  }
  set fitInkBarToContent(newValue) {
    if (this._fitToContent !== newValue) {
      this._fitToContent = newValue;
      if (this._inkBarElement) {
        this._appendInkBarElement();
      }
    }
  }
  activateInkBar(previousIndicatorClientRect) {
    const element = this._elementRef.nativeElement;
    if (!previousIndicatorClientRect || !element.getBoundingClientRect || !this._inkBarContentElement) {
      element.classList.add(ACTIVE_CLASS);
      return;
    }
    const currentClientRect = element.getBoundingClientRect();
    const widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
    const xPosition = previousIndicatorClientRect.left - currentClientRect.left;
    element.classList.add(NO_TRANSITION_CLASS);
    this._inkBarContentElement.style.setProperty("transform", `translateX(${xPosition}px) scaleX(${widthDelta})`);
    element.getBoundingClientRect();
    element.classList.remove(NO_TRANSITION_CLASS);
    element.classList.add(ACTIVE_CLASS);
    this._inkBarContentElement.style.setProperty("transform", "");
  }
  deactivateInkBar() {
    this._elementRef.nativeElement.classList.remove(ACTIVE_CLASS);
  }
  ngOnInit() {
    this._createInkBarElement();
  }
  ngOnDestroy() {
    this._inkBarElement?.remove();
    this._inkBarElement = this._inkBarContentElement = null;
  }
  _createInkBarElement() {
    const documentNode = this._elementRef.nativeElement.ownerDocument || document;
    const inkBarElement = this._inkBarElement = documentNode.createElement("span");
    const inkBarContentElement = this._inkBarContentElement = documentNode.createElement("span");
    inkBarElement.className = "mdc-tab-indicator";
    inkBarContentElement.className = "mdc-tab-indicator__content mdc-tab-indicator__content--underline";
    inkBarElement.appendChild(this._inkBarContentElement);
    this._appendInkBarElement();
  }
  _appendInkBarElement() {
    if (!this._inkBarElement && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("Ink bar element has not been created and cannot be appended");
    }
    const parentElement = this._fitToContent ? this._elementRef.nativeElement.querySelector(".mdc-tab__content") : this._elementRef.nativeElement;
    if (!parentElement && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("Missing element to host the ink bar");
    }
    parentElement.appendChild(this._inkBarElement);
  }
  static \u0275fac = function InkBarItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InkBarItem)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _InkBarItem,
    inputs: {
      fitInkBarToContent: [2, "fitInkBarToContent", "fitInkBarToContent", booleanAttribute]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InkBarItem, [{
    type: Directive
  }], null, {
    fitInkBarToContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _MAT_INK_BAR_POSITIONER = new InjectionToken("MatInkBarPositioner", {
  providedIn: "root",
  factory: () => {
    const method = (element) => ({
      left: element ? (element.offsetLeft || 0) + "px" : "0",
      width: element ? (element.offsetWidth || 0) + "px" : "0"
    });
    return method;
  }
});
var MatTabLabelWrapper = class _MatTabLabelWrapper extends InkBarItem {
  elementRef = inject(ElementRef);
  disabled = false;
  focus() {
    this.elementRef.nativeElement.focus();
  }
  getOffsetLeft() {
    return this.elementRef.nativeElement.offsetLeft;
  }
  getOffsetWidth() {
    return this.elementRef.nativeElement.offsetWidth;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatTabLabelWrapper_BaseFactory;
    return function MatTabLabelWrapper_Factory(__ngFactoryType__) {
      return (\u0275MatTabLabelWrapper_BaseFactory || (\u0275MatTabLabelWrapper_BaseFactory = \u0275\u0275getInheritedFactory(_MatTabLabelWrapper)))(__ngFactoryType__ || _MatTabLabelWrapper);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatTabLabelWrapper,
    selectors: [["", "matTabLabelWrapper", ""]],
    hostVars: 3,
    hostBindings: function MatTabLabelWrapper_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-disabled", !!ctx.disabled);
        \u0275\u0275classProp("mat-mdc-tab-disabled", ctx.disabled);
      }
    },
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute]
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabLabelWrapper, [{
    type: Directive,
    args: [{
      selector: "[matTabLabelWrapper]",
      host: {
        "[class.mat-mdc-tab-disabled]": "disabled",
        "[attr.aria-disabled]": "!!disabled"
      }
    }]
  }], null, {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var passiveEventListenerOptions = {
  passive: true
};
var HEADER_SCROLL_DELAY = 650;
var HEADER_SCROLL_INTERVAL = 100;
var MatPaginatedTabHeader = class _MatPaginatedTabHeader {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _viewportRuler = inject(ViewportRuler);
  _dir = inject(Directionality, {
    optional: true
  });
  _ngZone = inject(NgZone);
  _platform = inject(Platform);
  _sharedResizeObserver = inject(SharedResizeObserver);
  _injector = inject(Injector);
  _renderer = inject(Renderer2);
  _animationsDisabled = _animationsDisabled();
  _eventCleanups;
  _scrollDistance = 0;
  _selectedIndexChanged = false;
  _destroyed = new Subject();
  _showPaginationControls = false;
  _disableScrollAfter = true;
  _disableScrollBefore = true;
  _tabLabelCount;
  _scrollDistanceChanged = false;
  _keyManager;
  _currentTextContent;
  _stopScrolling = new Subject();
  disablePagination = false;
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(v) {
    const value = isNaN(v) ? 0 : v;
    if (this._selectedIndex != value) {
      this._selectedIndexChanged = true;
      this._selectedIndex = value;
      if (this._keyManager) {
        this._keyManager.updateActiveItem(value);
      }
    }
  }
  _selectedIndex = 0;
  selectFocusedIndex = new EventEmitter();
  indexFocused = new EventEmitter();
  constructor() {
    this._eventCleanups = this._ngZone.runOutsideAngular(() => [this._renderer.listen(this._elementRef.nativeElement, "mouseleave", () => this._stopInterval())]);
  }
  ngAfterViewInit() {
    this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement, "touchstart", () => this._handlePaginatorPress("before"), passiveEventListenerOptions), this._renderer.listen(this._nextPaginator.nativeElement, "touchstart", () => this._handlePaginatorPress("after"), passiveEventListenerOptions));
  }
  ngAfterContentInit() {
    const dirChange = this._dir ? this._dir.change : of("ltr");
    const resize = this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(debounceTime(32), takeUntil(this._destroyed));
    const viewportResize = this._viewportRuler.change(150).pipe(takeUntil(this._destroyed));
    const realign = () => {
      this.updatePagination();
      this._alignInkBarToSelectedTab();
    };
    this._keyManager = new FocusKeyManager(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(() => false);
    this._keyManager.updateActiveItem(Math.max(this._selectedIndex, 0));
    afterNextRender(realign, {
      injector: this._injector
    });
    merge(dirChange, viewportResize, resize, this._items.changes, this._itemsResized()).pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._ngZone.run(() => {
        Promise.resolve().then(() => {
          this._scrollDistance = Math.max(0, Math.min(this._getMaxScrollDistance(), this._scrollDistance));
          realign();
        });
      });
      this._keyManager?.withHorizontalOrientation(this._getLayoutDirection());
    });
    this._keyManager.change.subscribe((newFocusIndex) => {
      this.indexFocused.emit(newFocusIndex);
      this._setTabFocus(newFocusIndex);
    });
  }
  _itemsResized() {
    if (typeof ResizeObserver !== "function") {
      return EMPTY;
    }
    return this._items.changes.pipe(startWith(this._items), switchMap((tabItems) => new Observable((observer) => this._ngZone.runOutsideAngular(() => {
      const resizeObserver = new ResizeObserver((entries) => observer.next(entries));
      tabItems.forEach((item) => resizeObserver.observe(item.elementRef.nativeElement));
      return () => {
        resizeObserver.disconnect();
      };
    }))), skip(1), filter((entries) => entries.some((e) => e.contentRect.width > 0 && e.contentRect.height > 0)));
  }
  ngAfterContentChecked() {
    if (this._tabLabelCount != this._items.length) {
      this.updatePagination();
      this._tabLabelCount = this._items.length;
      this._changeDetectorRef.markForCheck();
    }
    if (this._selectedIndexChanged) {
      this._scrollToLabel(this._selectedIndex);
      this._checkScrollingControls();
      this._alignInkBarToSelectedTab();
      this._selectedIndexChanged = false;
      this._changeDetectorRef.markForCheck();
    }
    if (this._scrollDistanceChanged) {
      this._updateTabScrollPosition();
      this._scrollDistanceChanged = false;
      this._changeDetectorRef.markForCheck();
    }
  }
  ngOnDestroy() {
    this._eventCleanups.forEach((cleanup) => cleanup());
    this._keyManager?.destroy();
    this._destroyed.next();
    this._destroyed.complete();
    this._stopScrolling.complete();
  }
  _handleKeydown(event) {
    if (hasModifierKey(event)) {
      return;
    }
    switch (event.keyCode) {
      case ENTER:
      case SPACE:
        if (this.focusIndex !== this.selectedIndex) {
          const item = this._items.get(this.focusIndex);
          if (item && !item.disabled) {
            this.selectFocusedIndex.emit(this.focusIndex);
            this._itemSelected(event);
          }
        }
        break;
      default:
        this._keyManager?.onKeydown(event);
    }
  }
  _onContentChanges() {
    const textContent = this._elementRef.nativeElement.textContent;
    if (textContent !== this._currentTextContent) {
      this._currentTextContent = textContent || "";
      this._ngZone.run(() => {
        this.updatePagination();
        this._alignInkBarToSelectedTab();
        this._changeDetectorRef.markForCheck();
      });
    }
  }
  updatePagination() {
    this._checkPaginationEnabled();
    this._checkScrollingControls();
    this._updateTabScrollPosition();
  }
  get focusIndex() {
    return this._keyManager ? this._keyManager.activeItemIndex : 0;
  }
  set focusIndex(value) {
    if (!this._isValidIndex(value) || this.focusIndex === value || !this._keyManager) {
      return;
    }
    this._keyManager.setActiveItem(value);
  }
  _isValidIndex(index) {
    return this._items ? !!this._items.toArray()[index] : true;
  }
  _setTabFocus(tabIndex) {
    if (this._showPaginationControls) {
      this._scrollToLabel(tabIndex);
    }
    if (this._items && this._items.length) {
      this._items.toArray()[tabIndex].focus();
      const containerEl = this._tabListContainer.nativeElement;
      const dir = this._getLayoutDirection();
      if (dir == "ltr") {
        containerEl.scrollLeft = 0;
      } else {
        containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
      }
    }
  }
  _getLayoutDirection() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  _updateTabScrollPosition() {
    if (this.disablePagination) {
      return;
    }
    const scrollDistance = this.scrollDistance;
    const translateX = this._getLayoutDirection() === "ltr" ? -scrollDistance : scrollDistance;
    this._tabList.nativeElement.style.transform = `translateX(${Math.round(translateX)}px)`;
    if (this._platform.TRIDENT || this._platform.EDGE) {
      this._tabListContainer.nativeElement.scrollLeft = 0;
    }
  }
  get scrollDistance() {
    return this._scrollDistance;
  }
  set scrollDistance(value) {
    this._scrollTo(value);
  }
  _scrollHeader(direction) {
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    const scrollAmount = (direction == "before" ? -1 : 1) * viewLength / 3;
    return this._scrollTo(this._scrollDistance + scrollAmount);
  }
  _handlePaginatorClick(direction) {
    this._stopInterval();
    this._scrollHeader(direction);
  }
  _scrollToLabel(labelIndex) {
    if (this.disablePagination) {
      return;
    }
    const selectedLabel = this._items ? this._items.toArray()[labelIndex] : null;
    if (!selectedLabel) {
      return;
    }
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    const {
      offsetLeft,
      offsetWidth
    } = selectedLabel.elementRef.nativeElement;
    let labelBeforePos, labelAfterPos;
    if (this._getLayoutDirection() == "ltr") {
      labelBeforePos = offsetLeft;
      labelAfterPos = labelBeforePos + offsetWidth;
    } else {
      labelAfterPos = this._tabListInner.nativeElement.offsetWidth - offsetLeft;
      labelBeforePos = labelAfterPos - offsetWidth;
    }
    const beforeVisiblePos = this.scrollDistance;
    const afterVisiblePos = this.scrollDistance + viewLength;
    if (labelBeforePos < beforeVisiblePos) {
      this.scrollDistance -= beforeVisiblePos - labelBeforePos;
    } else if (labelAfterPos > afterVisiblePos) {
      this.scrollDistance += Math.min(labelAfterPos - afterVisiblePos, labelBeforePos - beforeVisiblePos);
    }
  }
  _checkPaginationEnabled() {
    if (this.disablePagination) {
      this._showPaginationControls = false;
    } else {
      const scrollWidth = this._tabListInner.nativeElement.scrollWidth;
      const containerWidth = this._elementRef.nativeElement.offsetWidth;
      const isEnabled = scrollWidth - containerWidth >= 5;
      if (!isEnabled) {
        this.scrollDistance = 0;
      }
      if (isEnabled !== this._showPaginationControls) {
        this._showPaginationControls = isEnabled;
        this._changeDetectorRef.markForCheck();
      }
    }
  }
  _checkScrollingControls() {
    if (this.disablePagination) {
      this._disableScrollAfter = this._disableScrollBefore = true;
    } else {
      this._disableScrollBefore = this.scrollDistance == 0;
      this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance();
      this._changeDetectorRef.markForCheck();
    }
  }
  _getMaxScrollDistance() {
    const lengthOfTabList = this._tabListInner.nativeElement.scrollWidth;
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    return lengthOfTabList - viewLength || 0;
  }
  _alignInkBarToSelectedTab() {
    const selectedItem = this._items && this._items.length ? this._items.toArray()[this.selectedIndex] : null;
    const selectedLabelWrapper = selectedItem ? selectedItem.elementRef.nativeElement : null;
    if (selectedLabelWrapper) {
      this._inkBar.alignToElement(selectedLabelWrapper);
    } else {
      this._inkBar.hide();
    }
  }
  _stopInterval() {
    this._stopScrolling.next();
  }
  _handlePaginatorPress(direction, mouseEvent) {
    if (mouseEvent && mouseEvent.button != null && mouseEvent.button !== 0) {
      return;
    }
    this._stopInterval();
    timer(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL).pipe(takeUntil(merge(this._stopScrolling, this._destroyed))).subscribe(() => {
      const {
        maxScrollDistance,
        distance
      } = this._scrollHeader(direction);
      if (distance === 0 || distance >= maxScrollDistance) {
        this._stopInterval();
      }
    });
  }
  _scrollTo(position) {
    if (this.disablePagination) {
      return {
        maxScrollDistance: 0,
        distance: 0
      };
    }
    const maxScrollDistance = this._getMaxScrollDistance();
    this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position));
    this._scrollDistanceChanged = true;
    this._checkScrollingControls();
    return {
      maxScrollDistance,
      distance: this._scrollDistance
    };
  }
  static \u0275fac = function MatPaginatedTabHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatPaginatedTabHeader)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatPaginatedTabHeader,
    inputs: {
      disablePagination: [2, "disablePagination", "disablePagination", booleanAttribute],
      selectedIndex: [2, "selectedIndex", "selectedIndex", numberAttribute]
    },
    outputs: {
      selectFocusedIndex: "selectFocusedIndex",
      indexFocused: "indexFocused"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginatedTabHeader, [{
    type: Directive
  }], () => [], {
    disablePagination: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectedIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    selectFocusedIndex: [{
      type: Output
    }],
    indexFocused: [{
      type: Output
    }]
  });
})();
var MatTabHeader = class _MatTabHeader extends MatPaginatedTabHeader {
  _items;
  _tabListContainer;
  _tabList;
  _tabListInner;
  _nextPaginator;
  _previousPaginator;
  _inkBar;
  ariaLabel;
  ariaLabelledby;
  disableRipple = false;
  ngAfterContentInit() {
    this._inkBar = new MatInkBar(this._items);
    super.ngAfterContentInit();
  }
  _itemSelected(event) {
    event.preventDefault();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatTabHeader_BaseFactory;
    return function MatTabHeader_Factory(__ngFactoryType__) {
      return (\u0275MatTabHeader_BaseFactory || (\u0275MatTabHeader_BaseFactory = \u0275\u0275getInheritedFactory(_MatTabHeader)))(__ngFactoryType__ || _MatTabHeader);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatTabHeader,
    selectors: [["mat-tab-header"]],
    contentQueries: function MatTabHeader_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatTabLabelWrapper, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._items = _t);
      }
    },
    viewQuery: function MatTabHeader_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c1, 7)(_c2, 7)(_c3, 7)(_c4, 5)(_c5, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabListContainer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabList = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabListInner = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._nextPaginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._previousPaginator = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-tab-header"],
    hostVars: 4,
    hostBindings: function MatTabHeader_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-mdc-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-mdc-tab-header-rtl", ctx._getLayoutDirection() == "rtl");
      }
    },
    inputs: {
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute]
    },
    features: [\u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 13,
    vars: 10,
    consts: [["previousPaginator", ""], ["tabListContainer", ""], ["tabList", ""], ["tabListInner", ""], ["nextPaginator", ""], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-before", 3, "click", "mousedown", "touchend", "matRippleDisabled"], [1, "mat-mdc-tab-header-pagination-chevron"], [1, "mat-mdc-tab-label-container", 3, "keydown"], ["role", "tablist", 1, "mat-mdc-tab-list", 3, "cdkObserveContent"], [1, "mat-mdc-tab-labels"], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-after", 3, "mousedown", "click", "touchend", "matRippleDisabled"]],
    template: function MatTabHeader_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 5, 0);
        \u0275\u0275listener("click", function MatTabHeader_Template_div_click_0_listener() {
          return ctx._handlePaginatorClick("before");
        })("mousedown", function MatTabHeader_Template_div_mousedown_0_listener($event) {
          return ctx._handlePaginatorPress("before", $event);
        })("touchend", function MatTabHeader_Template_div_touchend_0_listener() {
          return ctx._stopInterval();
        });
        \u0275\u0275element(2, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 7, 1);
        \u0275\u0275listener("keydown", function MatTabHeader_Template_div_keydown_3_listener($event) {
          return ctx._handleKeydown($event);
        });
        \u0275\u0275elementStart(5, "div", 8, 2);
        \u0275\u0275listener("cdkObserveContent", function MatTabHeader_Template_div_cdkObserveContent_5_listener() {
          return ctx._onContentChanges();
        });
        \u0275\u0275elementStart(7, "div", 9, 3);
        \u0275\u0275projection(9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 10, 4);
        \u0275\u0275listener("mousedown", function MatTabHeader_Template_div_mousedown_10_listener($event) {
          return ctx._handlePaginatorPress("after", $event);
        })("click", function MatTabHeader_Template_div_click_10_listener() {
          return ctx._handlePaginatorClick("after");
        })("touchend", function MatTabHeader_Template_div_touchend_10_listener() {
          return ctx._stopInterval();
        });
        \u0275\u0275element(12, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollBefore);
        \u0275\u0275property("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("_mat-animation-noopable", ctx._animationsDisabled);
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby || null);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollAfter);
        \u0275\u0275property("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
      }
    },
    dependencies: [MatRipple, CdkObserveContent],
    styles: [".mat-mdc-tab-header {\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  flex-shrink: 0;\n}\n\n.mdc-tab-indicator .mdc-tab-indicator__content {\n  transition-duration: var(--mat-tab-animation-duration, 250ms);\n}\n\n.mat-mdc-tab-header-pagination {\n  -webkit-user-select: none;\n  user-select: none;\n  position: relative;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  min-width: 32px;\n  cursor: pointer;\n  z-index: 2;\n  -webkit-tap-highlight-color: transparent;\n  touch-action: none;\n  box-sizing: content-box;\n  outline: 0;\n}\n.mat-mdc-tab-header-pagination::-moz-focus-inner {\n  border: 0;\n}\n.mat-mdc-tab-header-pagination .mat-ripple-element {\n  opacity: 0.12;\n  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {\n  display: flex;\n}\n\n.mat-mdc-tab-header-pagination-before,\n.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {\n  padding-left: 4px;\n}\n.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,\n.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {\n  transform: rotate(-135deg);\n}\n\n.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,\n.mat-mdc-tab-header-pagination-after {\n  padding-right: 4px;\n}\n.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,\n.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {\n  transform: rotate(45deg);\n}\n\n.mat-mdc-tab-header-pagination-chevron {\n  border-style: solid;\n  border-width: 2px 2px 0 0;\n  height: 8px;\n  width: 8px;\n  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));\n}\n\n.mat-mdc-tab-header-pagination-disabled {\n  box-shadow: none;\n  cursor: default;\n  pointer-events: none;\n}\n.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {\n  opacity: 0.4;\n}\n\n.mat-mdc-tab-list {\n  flex-grow: 1;\n  position: relative;\n  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);\n}\n._mat-animation-noopable .mat-mdc-tab-list {\n  transition: none;\n}\n\n.mat-mdc-tab-label-container {\n  display: flex;\n  flex-grow: 1;\n  overflow: hidden;\n  z-index: 1;\n  border-bottom-style: solid;\n  border-bottom-width: var(--mat-tab-divider-height, 1px);\n  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));\n}\n.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {\n  border-bottom: none;\n  border-top-style: solid;\n  border-top-width: var(--mat-tab-divider-height, 1px);\n  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));\n}\n\n.mat-mdc-tab-labels {\n  display: flex;\n  flex: 1 0 auto;\n}\n[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {\n  justify-content: center;\n}\n[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {\n  justify-content: flex-end;\n}\n.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {\n  min-height: var(--mat-tab-container-height, 48px);\n}\n\n.mat-mdc-tab::before {\n  margin: 5px;\n}\n@media (forced-colors: active) {\n  .mat-mdc-tab[aria-disabled=true] {\n    color: GrayText;\n  }\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabHeader, [{
    type: Component,
    args: [{
      selector: "mat-tab-header",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      host: {
        "class": "mat-mdc-tab-header",
        "[class.mat-mdc-tab-header-pagination-controls-enabled]": "_showPaginationControls",
        "[class.mat-mdc-tab-header-rtl]": "_getLayoutDirection() == 'rtl'"
      },
      imports: [MatRipple, CdkObserveContent],
      template: `<!--
 Note that this intentionally uses a \`div\` instead of a \`button\`, because it's not part of
 the regular tabs flow and is only here to support mouse users. It should also not be focusable.
-->
<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before"
     #previousPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollBefore || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollBefore"
     (click)="_handlePaginatorClick('before')"
     (mousedown)="_handlePaginatorPress('before', $event)"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>

<div
  class="mat-mdc-tab-label-container"
  #tabListContainer
  (keydown)="_handleKeydown($event)"
  [class._mat-animation-noopable]="_animationsDisabled">
  <div
    #tabList
    class="mat-mdc-tab-list"
    role="tablist"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="ariaLabelledby || null"
    (cdkObserveContent)="_onContentChanges()">
    <div class="mat-mdc-tab-labels" #tabListInner>
      <ng-content></ng-content>
    </div>
  </div>
</div>

<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after"
     #nextPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollAfter || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollAfter"
     (mousedown)="_handlePaginatorPress('after', $event)"
     (click)="_handlePaginatorClick('after')"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>
`,
      styles: [".mat-mdc-tab-header {\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  flex-shrink: 0;\n}\n\n.mdc-tab-indicator .mdc-tab-indicator__content {\n  transition-duration: var(--mat-tab-animation-duration, 250ms);\n}\n\n.mat-mdc-tab-header-pagination {\n  -webkit-user-select: none;\n  user-select: none;\n  position: relative;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  min-width: 32px;\n  cursor: pointer;\n  z-index: 2;\n  -webkit-tap-highlight-color: transparent;\n  touch-action: none;\n  box-sizing: content-box;\n  outline: 0;\n}\n.mat-mdc-tab-header-pagination::-moz-focus-inner {\n  border: 0;\n}\n.mat-mdc-tab-header-pagination .mat-ripple-element {\n  opacity: 0.12;\n  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {\n  display: flex;\n}\n\n.mat-mdc-tab-header-pagination-before,\n.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {\n  padding-left: 4px;\n}\n.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,\n.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {\n  transform: rotate(-135deg);\n}\n\n.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,\n.mat-mdc-tab-header-pagination-after {\n  padding-right: 4px;\n}\n.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,\n.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {\n  transform: rotate(45deg);\n}\n\n.mat-mdc-tab-header-pagination-chevron {\n  border-style: solid;\n  border-width: 2px 2px 0 0;\n  height: 8px;\n  width: 8px;\n  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));\n}\n\n.mat-mdc-tab-header-pagination-disabled {\n  box-shadow: none;\n  cursor: default;\n  pointer-events: none;\n}\n.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {\n  opacity: 0.4;\n}\n\n.mat-mdc-tab-list {\n  flex-grow: 1;\n  position: relative;\n  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);\n}\n._mat-animation-noopable .mat-mdc-tab-list {\n  transition: none;\n}\n\n.mat-mdc-tab-label-container {\n  display: flex;\n  flex-grow: 1;\n  overflow: hidden;\n  z-index: 1;\n  border-bottom-style: solid;\n  border-bottom-width: var(--mat-tab-divider-height, 1px);\n  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));\n}\n.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {\n  border-bottom: none;\n  border-top-style: solid;\n  border-top-width: var(--mat-tab-divider-height, 1px);\n  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));\n}\n\n.mat-mdc-tab-labels {\n  display: flex;\n  flex: 1 0 auto;\n}\n[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {\n  justify-content: center;\n}\n[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {\n  justify-content: flex-end;\n}\n.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {\n  min-height: var(--mat-tab-container-height, 48px);\n}\n\n.mat-mdc-tab::before {\n  margin: 5px;\n}\n@media (forced-colors: active) {\n  .mat-mdc-tab[aria-disabled=true] {\n    color: GrayText;\n  }\n}\n"]
    }]
  }], null, {
    _items: [{
      type: ContentChildren,
      args: [MatTabLabelWrapper, {
        descendants: false
      }]
    }],
    _tabListContainer: [{
      type: ViewChild,
      args: ["tabListContainer", {
        static: true
      }]
    }],
    _tabList: [{
      type: ViewChild,
      args: ["tabList", {
        static: true
      }]
    }],
    _tabListInner: [{
      type: ViewChild,
      args: ["tabListInner", {
        static: true
      }]
    }],
    _nextPaginator: [{
      type: ViewChild,
      args: ["nextPaginator"]
    }],
    _previousPaginator: [{
      type: ViewChild,
      args: ["previousPaginator"]
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MAT_TABS_CONFIG = new InjectionToken("MAT_TABS_CONFIG");
var MatTabBodyPortal = class _MatTabBodyPortal extends CdkPortalOutlet {
  _host = inject(MatTabBody);
  _ngZone = inject(NgZone);
  _centeringSub = Subscription.EMPTY;
  _leavingSub = Subscription.EMPTY;
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
    this._centeringSub = this._host._beforeCentering.pipe(startWith(this._host._isCenterPosition())).subscribe((isCentering) => {
      if (this._host._content && isCentering && !this.hasAttached()) {
        this._ngZone.run(() => {
          Promise.resolve().then();
          this.attach(this._host._content);
        });
      }
    });
    this._leavingSub = this._host._afterLeavingCenter.subscribe(() => {
      if (!this._host.preserveContent) {
        this._ngZone.run(() => this.detach());
      }
    });
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._centeringSub.unsubscribe();
    this._leavingSub.unsubscribe();
  }
  static \u0275fac = function MatTabBodyPortal_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTabBodyPortal)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatTabBodyPortal,
    selectors: [["", "matTabBodyHost", ""]],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabBodyPortal, [{
    type: Directive,
    args: [{
      selector: "[matTabBodyHost]"
    }]
  }], () => [], null);
})();
var MatTabBody = class _MatTabBody {
  _elementRef = inject(ElementRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _ngZone = inject(NgZone);
  _injector = inject(Injector);
  _renderer = inject(Renderer2);
  _diAnimationsDisabled = _animationsDisabled();
  _eventCleanups;
  _initialized = false;
  _fallbackTimer;
  _positionIndex;
  _dirChangeSubscription = Subscription.EMPTY;
  _position;
  _previousPosition;
  _onCentering = new EventEmitter();
  _beforeCentering = new EventEmitter();
  _afterLeavingCenter = new EventEmitter();
  _onCentered = new EventEmitter(true);
  _portalHost;
  _contentElement;
  _content;
  animationDuration = "500ms";
  preserveContent = false;
  set position(position) {
    this._positionIndex = position;
    this._computePositionAnimationState();
  }
  constructor() {
    if (this._dir) {
      const changeDetectorRef = inject(ChangeDetectorRef);
      this._dirChangeSubscription = this._dir.change.subscribe((dir) => {
        this._computePositionAnimationState(dir);
        changeDetectorRef.markForCheck();
      });
    }
  }
  ngOnInit() {
    this._bindTransitionEvents();
    if (this._position === "center") {
      this._setActiveClass(true);
      afterNextRender(() => this._onCentering.emit(this._elementRef.nativeElement.clientHeight), {
        injector: this._injector
      });
    }
    this._initialized = true;
  }
  ngOnDestroy() {
    clearTimeout(this._fallbackTimer);
    this._eventCleanups?.forEach((cleanup) => cleanup());
    this._dirChangeSubscription.unsubscribe();
  }
  _bindTransitionEvents() {
    this._ngZone.runOutsideAngular(() => {
      const element = this._elementRef.nativeElement;
      const transitionDone = (event) => {
        if (event.target === this._contentElement?.nativeElement) {
          this._elementRef.nativeElement.classList.remove("mat-tab-body-animating");
          if (event.type === "transitionend") {
            this._transitionDone();
          }
        }
      };
      this._eventCleanups = [this._renderer.listen(element, "transitionstart", (event) => {
        if (event.target === this._contentElement?.nativeElement) {
          this._elementRef.nativeElement.classList.add("mat-tab-body-animating");
          this._transitionStarted();
        }
      }), this._renderer.listen(element, "transitionend", transitionDone), this._renderer.listen(element, "transitioncancel", transitionDone)];
    });
  }
  _transitionStarted() {
    clearTimeout(this._fallbackTimer);
    const isCentering = this._position === "center";
    this._beforeCentering.emit(isCentering);
    if (isCentering) {
      this._onCentering.emit(this._elementRef.nativeElement.clientHeight);
    }
  }
  _transitionDone() {
    if (this._position === "center") {
      this._onCentered.emit();
    } else if (this._previousPosition === "center") {
      this._afterLeavingCenter.emit();
    }
  }
  _setActiveClass(isActive) {
    this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active", isActive);
  }
  _getLayoutDirection() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  _isCenterPosition() {
    return this._positionIndex === 0;
  }
  _computePositionAnimationState(dir = this._getLayoutDirection()) {
    this._previousPosition = this._position;
    if (this._positionIndex < 0) {
      this._position = dir == "ltr" ? "left" : "right";
    } else if (this._positionIndex > 0) {
      this._position = dir == "ltr" ? "right" : "left";
    } else {
      this._position = "center";
    }
    if (this._animationsDisabled()) {
      this._simulateTransitionEvents();
    } else if (this._initialized && (this._position === "center" || this._previousPosition === "center")) {
      clearTimeout(this._fallbackTimer);
      this._fallbackTimer = this._ngZone.runOutsideAngular(() => setTimeout(() => this._simulateTransitionEvents(), 100));
    }
  }
  _simulateTransitionEvents() {
    this._transitionStarted();
    afterNextRender(() => this._transitionDone(), {
      injector: this._injector
    });
  }
  _animationsDisabled() {
    return this._diAnimationsDisabled || this.animationDuration === "0ms" || this.animationDuration === "0s";
  }
  static \u0275fac = function MatTabBody_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTabBody)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatTabBody,
    selectors: [["mat-tab-body"]],
    viewQuery: function MatTabBody_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatTabBodyPortal, 5)(_c6, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._portalHost = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentElement = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-tab-body"],
    hostVars: 1,
    hostBindings: function MatTabBody_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("inert", ctx._position === "center" ? null : "");
      }
    },
    inputs: {
      _content: [0, "content", "_content"],
      animationDuration: "animationDuration",
      preserveContent: "preserveContent",
      position: "position"
    },
    outputs: {
      _onCentering: "_onCentering",
      _beforeCentering: "_beforeCentering",
      _onCentered: "_onCentered"
    },
    decls: 3,
    vars: 6,
    consts: [["content", ""], ["cdkScrollable", "", 1, "mat-mdc-tab-body-content"], ["matTabBodyHost", ""]],
    template: function MatTabBody_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275template(2, MatTabBody_ng_template_2_Template, 0, 0, "ng-template", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("mat-tab-body-content-left", ctx._position === "left")("mat-tab-body-content-right", ctx._position === "right")("mat-tab-body-content-can-animate", ctx._position === "center" || ctx._previousPosition === "center");
      }
    },
    dependencies: [MatTabBodyPortal, CdkScrollable],
    styles: [".mat-mdc-tab-body {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  display: block;\n  overflow: hidden;\n  outline: 0;\n  flex-basis: 100%;\n}\n.mat-mdc-tab-body.mat-mdc-tab-body-active {\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: auto;\n  z-index: 1;\n  flex-grow: 1;\n}\n.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {\n  overflow-y: hidden;\n}\n\n.mat-mdc-tab-body-content {\n  height: 100%;\n  overflow: auto;\n  transform: none;\n  visibility: hidden;\n}\n.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {\n  visibility: visible;\n}\n.mat-tab-body-animating > .mat-mdc-tab-body-content {\n  min-height: 1px;\n}\n.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {\n  overflow: hidden;\n}\n\n.mat-tab-body-content-can-animate {\n  transition: transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);\n}\n.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {\n  transition: none;\n}\n\n.mat-tab-body-content-left {\n  transform: translate3d(-100%, 0, 0);\n}\n\n.mat-tab-body-content-right {\n  transform: translate3d(100%, 0, 0);\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabBody, [{
    type: Component,
    args: [{
      selector: "mat-tab-body",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      host: {
        "class": "mat-mdc-tab-body",
        "[attr.inert]": '_position === "center" ? null : ""'
      },
      imports: [MatTabBodyPortal, CdkScrollable],
      template: `<div
   class="mat-mdc-tab-body-content"
   #content
   cdkScrollable
   [class.mat-tab-body-content-left]="_position === 'left'"
   [class.mat-tab-body-content-right]="_position === 'right'"
   [class.mat-tab-body-content-can-animate]="_position === 'center' || _previousPosition === 'center'">
  <ng-template matTabBodyHost></ng-template>
</div>
`,
      styles: [".mat-mdc-tab-body {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  display: block;\n  overflow: hidden;\n  outline: 0;\n  flex-basis: 100%;\n}\n.mat-mdc-tab-body.mat-mdc-tab-body-active {\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: auto;\n  z-index: 1;\n  flex-grow: 1;\n}\n.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {\n  overflow-y: hidden;\n}\n\n.mat-mdc-tab-body-content {\n  height: 100%;\n  overflow: auto;\n  transform: none;\n  visibility: hidden;\n}\n.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {\n  visibility: visible;\n}\n.mat-tab-body-animating > .mat-mdc-tab-body-content {\n  min-height: 1px;\n}\n.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {\n  overflow: hidden;\n}\n\n.mat-tab-body-content-can-animate {\n  transition: transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);\n}\n.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {\n  transition: none;\n}\n\n.mat-tab-body-content-left {\n  transform: translate3d(-100%, 0, 0);\n}\n\n.mat-tab-body-content-right {\n  transform: translate3d(100%, 0, 0);\n}\n"]
    }]
  }], () => [], {
    _onCentering: [{
      type: Output
    }],
    _beforeCentering: [{
      type: Output
    }],
    _onCentered: [{
      type: Output
    }],
    _portalHost: [{
      type: ViewChild,
      args: [MatTabBodyPortal]
    }],
    _contentElement: [{
      type: ViewChild,
      args: ["content"]
    }],
    _content: [{
      type: Input,
      args: ["content"]
    }],
    animationDuration: [{
      type: Input
    }],
    preserveContent: [{
      type: Input
    }],
    position: [{
      type: Input
    }]
  });
})();
var MatTabGroup = class _MatTabGroup {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _ngZone = inject(NgZone);
  _tabsSubscription = Subscription.EMPTY;
  _tabLabelSubscription = Subscription.EMPTY;
  _tabBodySubscription = Subscription.EMPTY;
  _diAnimationsDisabled = _animationsDisabled();
  _allTabs;
  _tabBodies;
  _tabBodyWrapper;
  _tabHeader;
  _tabs = new QueryList();
  _indexToSelect = 0;
  _lastFocusedTabIndex = null;
  _tabBodyWrapperHeight = 0;
  color;
  get fitInkBarToContent() {
    return this._fitInkBarToContent;
  }
  set fitInkBarToContent(value) {
    this._fitInkBarToContent = value;
    this._changeDetectorRef.markForCheck();
  }
  _fitInkBarToContent = false;
  stretchTabs = true;
  alignTabs = null;
  dynamicHeight = false;
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(value) {
    this._indexToSelect = isNaN(value) ? null : value;
  }
  _selectedIndex = null;
  headerPosition = "above";
  get animationDuration() {
    return this._animationDuration;
  }
  set animationDuration(value) {
    const stringValue = value + "";
    this._animationDuration = /^\d+$/.test(stringValue) ? value + "ms" : stringValue;
  }
  _animationDuration;
  get contentTabIndex() {
    return this._contentTabIndex;
  }
  set contentTabIndex(value) {
    this._contentTabIndex = isNaN(value) ? null : value;
  }
  _contentTabIndex = null;
  disablePagination = false;
  disableRipple = false;
  preserveContent = false;
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(value) {
    const classList = this._elementRef.nativeElement.classList;
    classList.remove("mat-tabs-with-background", `mat-background-${this.backgroundColor}`);
    if (value) {
      classList.add("mat-tabs-with-background", `mat-background-${value}`);
    }
    this._backgroundColor = value;
  }
  _backgroundColor;
  ariaLabel;
  ariaLabelledby;
  selectedIndexChange = new EventEmitter();
  focusChange = new EventEmitter();
  animationDone = new EventEmitter();
  selectedTabChange = new EventEmitter(true);
  _groupId;
  _isServer = !inject(Platform).isBrowser;
  constructor() {
    const defaultConfig = inject(MAT_TABS_CONFIG, {
      optional: true
    });
    this._groupId = inject(_IdGenerator).getId("mat-tab-group-");
    this.animationDuration = defaultConfig && defaultConfig.animationDuration ? defaultConfig.animationDuration : "500ms";
    this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
    this.dynamicHeight = defaultConfig && defaultConfig.dynamicHeight != null ? defaultConfig.dynamicHeight : false;
    if (defaultConfig?.contentTabIndex != null) {
      this.contentTabIndex = defaultConfig.contentTabIndex;
    }
    this.preserveContent = !!defaultConfig?.preserveContent;
    this.fitInkBarToContent = defaultConfig && defaultConfig.fitInkBarToContent != null ? defaultConfig.fitInkBarToContent : false;
    this.stretchTabs = defaultConfig && defaultConfig.stretchTabs != null ? defaultConfig.stretchTabs : true;
    this.alignTabs = defaultConfig && defaultConfig.alignTabs != null ? defaultConfig.alignTabs : null;
  }
  ngAfterContentChecked() {
    const indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect);
    if (this._selectedIndex != indexToSelect) {
      const isFirstRun = this._selectedIndex == null;
      if (!isFirstRun) {
        this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
        const wrapper = this._tabBodyWrapper.nativeElement;
        wrapper.style.minHeight = wrapper.clientHeight + "px";
      }
      Promise.resolve().then(() => {
        this._tabs.forEach((tab, index) => tab.isActive = index === indexToSelect);
        if (!isFirstRun) {
          this.selectedIndexChange.emit(indexToSelect);
          this._tabBodyWrapper.nativeElement.style.minHeight = "";
        }
      });
    }
    this._tabs.forEach((tab, index) => {
      tab.position = index - indexToSelect;
      if (this._selectedIndex != null && tab.position == 0 && !tab.origin) {
        tab.origin = indexToSelect - this._selectedIndex;
      }
    });
    if (this._selectedIndex !== indexToSelect) {
      this._selectedIndex = indexToSelect;
      this._lastFocusedTabIndex = null;
      this._changeDetectorRef.markForCheck();
    }
  }
  ngAfterContentInit() {
    this._subscribeToAllTabChanges();
    this._subscribeToTabLabels();
    this._tabsSubscription = this._tabs.changes.subscribe(() => {
      const indexToSelect = this._clampTabIndex(this._indexToSelect);
      if (indexToSelect === this._selectedIndex) {
        const tabs = this._tabs.toArray();
        let selectedTab;
        for (let i = 0; i < tabs.length; i++) {
          if (tabs[i].isActive) {
            this._indexToSelect = this._selectedIndex = i;
            this._lastFocusedTabIndex = null;
            selectedTab = tabs[i];
            break;
          }
        }
        if (!selectedTab && tabs[indexToSelect]) {
          Promise.resolve().then(() => {
            tabs[indexToSelect].isActive = true;
            this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
          });
        }
      }
      this._changeDetectorRef.markForCheck();
    });
  }
  ngAfterViewInit() {
    this._tabBodySubscription = this._tabBodies.changes.subscribe(() => this._bodyCentered(true));
  }
  _subscribeToAllTabChanges() {
    this._allTabs.changes.pipe(startWith(this._allTabs)).subscribe((tabs) => {
      this._tabs.reset(tabs.filter((tab) => {
        return tab._closestTabGroup === this || !tab._closestTabGroup;
      }));
      this._tabs.notifyOnChanges();
    });
  }
  ngOnDestroy() {
    this._tabs.destroy();
    this._tabsSubscription.unsubscribe();
    this._tabLabelSubscription.unsubscribe();
    this._tabBodySubscription.unsubscribe();
  }
  realignInkBar() {
    if (this._tabHeader) {
      this._tabHeader._alignInkBarToSelectedTab();
    }
  }
  updatePagination() {
    if (this._tabHeader) {
      this._tabHeader.updatePagination();
    }
  }
  focusTab(index) {
    const header = this._tabHeader;
    if (header) {
      header.focusIndex = index;
    }
  }
  _focusChanged(index) {
    this._lastFocusedTabIndex = index;
    this.focusChange.emit(this._createChangeEvent(index));
  }
  _createChangeEvent(index) {
    const event = new MatTabChangeEvent();
    event.index = index;
    if (this._tabs && this._tabs.length) {
      event.tab = this._tabs.toArray()[index];
    }
    return event;
  }
  _subscribeToTabLabels() {
    if (this._tabLabelSubscription) {
      this._tabLabelSubscription.unsubscribe();
    }
    this._tabLabelSubscription = merge(...this._tabs.map((tab) => tab._stateChanges)).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  _clampTabIndex(index) {
    return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
  }
  _getTabLabelId(tab, index) {
    return tab.id || `${this._groupId}-label-${index}`;
  }
  _getTabContentId(index) {
    return `${this._groupId}-content-${index}`;
  }
  _setTabBodyWrapperHeight(tabHeight) {
    if (!this.dynamicHeight || !this._tabBodyWrapperHeight) {
      this._tabBodyWrapperHeight = tabHeight;
      return;
    }
    const wrapper = this._tabBodyWrapper.nativeElement;
    wrapper.style.height = this._tabBodyWrapperHeight + "px";
    if (this._tabBodyWrapper.nativeElement.offsetHeight) {
      wrapper.style.height = tabHeight + "px";
    }
  }
  _removeTabBodyWrapperHeight() {
    const wrapper = this._tabBodyWrapper.nativeElement;
    this._tabBodyWrapperHeight = wrapper.clientHeight;
    wrapper.style.height = "";
    this._ngZone.run(() => this.animationDone.emit());
  }
  _handleClick(tab, tabHeader, index) {
    tabHeader.focusIndex = index;
    if (!tab.disabled) {
      this.selectedIndex = index;
    }
  }
  _getTabIndex(index) {
    const targetIndex = this._lastFocusedTabIndex ?? this.selectedIndex;
    return index === targetIndex ? 0 : -1;
  }
  _tabFocusChanged(focusOrigin, index) {
    if (focusOrigin && focusOrigin !== "mouse" && focusOrigin !== "touch") {
      this._tabHeader.focusIndex = index;
    }
  }
  _bodyCentered(isCenter) {
    if (isCenter) {
      this._tabBodies?.forEach((body, i) => body._setActiveClass(i === this._selectedIndex));
    }
  }
  _animationsDisabled() {
    return this._diAnimationsDisabled || this.animationDuration === "0" || this.animationDuration === "0ms";
  }
  static \u0275fac = function MatTabGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTabGroup)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatTabGroup,
    selectors: [["mat-tab-group"]],
    contentQueries: function MatTabGroup_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatTab, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allTabs = _t);
      }
    },
    viewQuery: function MatTabGroup_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c7, 5)(_c8, 5)(MatTabBody, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabBodyWrapper = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabHeader = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabBodies = _t);
      }
    },
    hostAttrs: [1, "mat-mdc-tab-group"],
    hostVars: 11,
    hostBindings: function MatTabGroup_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("mat-align-tabs", ctx.alignTabs);
        \u0275\u0275classMap("mat-" + (ctx.color || "primary"));
        \u0275\u0275styleProp("--mat-tab-animation-duration", ctx.animationDuration);
        \u0275\u0275classProp("mat-mdc-tab-group-dynamic-height", ctx.dynamicHeight)("mat-mdc-tab-group-inverted-header", ctx.headerPosition === "below")("mat-mdc-tab-group-stretch-tabs", ctx.stretchTabs);
      }
    },
    inputs: {
      color: "color",
      fitInkBarToContent: [2, "fitInkBarToContent", "fitInkBarToContent", booleanAttribute],
      stretchTabs: [2, "mat-stretch-tabs", "stretchTabs", booleanAttribute],
      alignTabs: [0, "mat-align-tabs", "alignTabs"],
      dynamicHeight: [2, "dynamicHeight", "dynamicHeight", booleanAttribute],
      selectedIndex: [2, "selectedIndex", "selectedIndex", numberAttribute],
      headerPosition: "headerPosition",
      animationDuration: "animationDuration",
      contentTabIndex: [2, "contentTabIndex", "contentTabIndex", numberAttribute],
      disablePagination: [2, "disablePagination", "disablePagination", booleanAttribute],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      preserveContent: [2, "preserveContent", "preserveContent", booleanAttribute],
      backgroundColor: "backgroundColor",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"]
    },
    outputs: {
      selectedIndexChange: "selectedIndexChange",
      focusChange: "focusChange",
      animationDone: "animationDone",
      selectedTabChange: "selectedTabChange"
    },
    exportAs: ["matTabGroup"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_TAB_GROUP,
      useExisting: _MatTabGroup
    }])],
    ngContentSelectors: _c0,
    decls: 9,
    vars: 8,
    consts: [["tabHeader", ""], ["tabBodyWrapper", ""], ["tabNode", ""], [3, "indexFocused", "selectFocusedIndex", "selectedIndex", "disableRipple", "disablePagination", "aria-label", "aria-labelledby"], ["role", "tab", "matTabLabelWrapper", "", "cdkMonitorElementFocus", "", 1, "mdc-tab", "mat-mdc-tab", "mat-focus-indicator", 3, "id", "mdc-tab--active", "class", "disabled", "fitInkBarToContent"], [1, "mat-mdc-tab-body-wrapper"], ["role", "tabpanel", 3, "id", "class", "content", "position", "animationDuration", "preserveContent"], ["role", "tab", "matTabLabelWrapper", "", "cdkMonitorElementFocus", "", 1, "mdc-tab", "mat-mdc-tab", "mat-focus-indicator", 3, "click", "cdkFocusChange", "id", "disabled", "fitInkBarToContent"], [1, "mdc-tab__ripple"], ["mat-ripple", "", 1, "mat-mdc-tab-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mdc-tab__content"], [1, "mdc-tab__text-label"], [3, "cdkPortalOutlet"], ["role", "tabpanel", 3, "_onCentered", "_onCentering", "_beforeCentering", "id", "content", "position", "animationDuration", "preserveContent"]],
    template: function MatTabGroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "mat-tab-header", 3, 0);
        \u0275\u0275listener("indexFocused", function MatTabGroup_Template_mat_tab_header_indexFocused_0_listener($event) {
          return ctx._focusChanged($event);
        })("selectFocusedIndex", function MatTabGroup_Template_mat_tab_header_selectFocusedIndex_0_listener($event) {
          return ctx.selectedIndex = $event;
        });
        \u0275\u0275repeaterCreate(2, MatTabGroup_For_3_Template, 8, 17, "div", 4, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, MatTabGroup_Conditional_4_Template, 1, 0);
        \u0275\u0275elementStart(5, "div", 5, 1);
        \u0275\u0275repeaterCreate(7, MatTabGroup_For_8_Template, 1, 10, "mat-tab-body", 6, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("selectedIndex", ctx.selectedIndex || 0)("disableRipple", ctx.disableRipple)("disablePagination", ctx.disablePagination);
        \u0275\u0275ariaProperty("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx._tabs);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx._isServer ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("_mat-animation-noopable", ctx._animationsDisabled());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx._tabs);
      }
    },
    dependencies: [MatTabHeader, MatTabLabelWrapper, CdkMonitorFocus, MatRipple, CdkPortalOutlet, MatTabBody],
    styles: ['.mdc-tab {\n  min-width: 90px;\n  padding: 0 24px;\n  display: flex;\n  flex: 1 0 auto;\n  justify-content: center;\n  box-sizing: border-box;\n  border: none;\n  outline: none;\n  text-align: center;\n  white-space: nowrap;\n  cursor: pointer;\n  z-index: 1;\n  touch-action: manipulation;\n}\n\n.mdc-tab__content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: inherit;\n  pointer-events: none;\n}\n\n.mdc-tab__text-label {\n  transition: 150ms color linear;\n  display: inline-block;\n  line-height: 1;\n  z-index: 2;\n}\n\n.mdc-tab--active .mdc-tab__text-label {\n  transition-delay: 100ms;\n}\n\n._mat-animation-noopable .mdc-tab__text-label {\n  transition: none;\n}\n\n.mdc-tab-indicator {\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 1;\n}\n\n.mdc-tab-indicator__content {\n  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);\n  transform-origin: left;\n  opacity: 0;\n}\n\n.mdc-tab-indicator__content--underline {\n  align-self: flex-end;\n  box-sizing: border-box;\n  width: 100%;\n  border-top-style: solid;\n}\n\n.mdc-tab-indicator--active .mdc-tab-indicator__content {\n  opacity: 1;\n}\n\n._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {\n  transition: none;\n}\n\n.mat-mdc-tab-ripple.mat-mdc-tab-ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  pointer-events: none;\n}\n\n.mat-mdc-tab {\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-decoration: none;\n  background: none;\n  height: var(--mat-tab-container-height, 48px);\n  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));\n  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));\n  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));\n  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));\n  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));\n}\n.mat-mdc-tab.mdc-tab {\n  flex-grow: 0;\n}\n.mat-mdc-tab .mdc-tab-indicator__content--underline {\n  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));\n  border-top-width: var(--mat-tab-active-indicator-height, 2px);\n  border-radius: var(--mat-tab-active-indicator-shape, 0);\n}\n.mat-mdc-tab:hover .mdc-tab__text-label {\n  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab:focus .mdc-tab__text-label {\n  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {\n  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,\n.mat-mdc-tab.mdc-tab--active .mat-ripple-element {\n  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {\n  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {\n  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));\n}\n.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {\n  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {\n  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));\n}\n.mat-mdc-tab.mat-mdc-tab-disabled {\n  opacity: 0.4;\n  pointer-events: none;\n}\n.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {\n  pointer-events: none;\n}\n.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,\n.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {\n  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-tab .mdc-tab__ripple::before {\n  content: "";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0;\n  pointer-events: none;\n  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab .mdc-tab__text-label {\n  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));\n  display: inline-flex;\n  align-items: center;\n}\n.mat-mdc-tab .mdc-tab__content {\n  position: relative;\n  pointer-events: auto;\n}\n.mat-mdc-tab:hover .mdc-tab__ripple::before {\n  opacity: 0.04;\n}\n.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {\n  opacity: 0.12;\n}\n.mat-mdc-tab .mat-ripple-element {\n  opacity: 0.12;\n  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {\n  flex-grow: 1;\n}\n\n.mat-mdc-tab-group {\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n}\n.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {\n  background-color: var(--mat-tab-background-color);\n}\n.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {\n  color: var(--mat-tab-foreground-color);\n}\n.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {\n  border-color: var(--mat-tab-foreground-color);\n}\n.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {\n  color: var(--mat-tab-foreground-color);\n}\n.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {\n  border-color: var(--mat-tab-foreground-color);\n}\n.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,\n.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,\n.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {\n  border-color: var(--mat-tab-foreground-color);\n}\n.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {\n  background-color: var(--mat-tab-foreground-color);\n}\n.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {\n  color: var(--mat-tab-foreground-color);\n}\n.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {\n  flex-direction: column-reverse;\n}\n.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {\n  align-self: flex-start;\n}\n\n.mat-mdc-tab-body-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);\n}\n.mat-mdc-tab-body-wrapper._mat-animation-noopable {\n  transition: none !important;\n  animation: none !important;\n}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabGroup, [{
    type: Component,
    args: [{
      selector: "mat-tab-group",
      exportAs: "matTabGroup",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [{
        provide: MAT_TAB_GROUP,
        useExisting: MatTabGroup
      }],
      host: {
        "class": "mat-mdc-tab-group",
        "[class]": '"mat-" + (color || "primary")',
        "[class.mat-mdc-tab-group-dynamic-height]": "dynamicHeight",
        "[class.mat-mdc-tab-group-inverted-header]": 'headerPosition === "below"',
        "[class.mat-mdc-tab-group-stretch-tabs]": "stretchTabs",
        "[attr.mat-align-tabs]": "alignTabs",
        "[style.--mat-tab-animation-duration]": "animationDuration"
      },
      imports: [MatTabHeader, MatTabLabelWrapper, CdkMonitorFocus, MatRipple, CdkPortalOutlet, MatTabBody],
      template: '<mat-tab-header #tabHeader\n                [selectedIndex]="selectedIndex || 0"\n                [disableRipple]="disableRipple"\n                [disablePagination]="disablePagination"\n                [aria-label]="ariaLabel"\n                [aria-labelledby]="ariaLabelledby"\n                (indexFocused)="_focusChanged($event)"\n                (selectFocusedIndex)="selectedIndex = $event">\n\n  @for (tab of _tabs; track tab) {\n    <div class="mdc-tab mat-mdc-tab mat-focus-indicator"\n        #tabNode\n        role="tab"\n        matTabLabelWrapper\n        cdkMonitorElementFocus\n        [id]="_getTabLabelId(tab, $index)"\n        [attr.tabIndex]="_getTabIndex($index)"\n        [attr.aria-posinset]="$index + 1"\n        [attr.aria-setsize]="_tabs.length"\n        [attr.aria-controls]="_getTabContentId($index)"\n        [attr.aria-selected]="selectedIndex === $index"\n        [attr.aria-label]="tab.ariaLabel || null"\n        [attr.aria-labelledby]="(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null"\n        [class.mdc-tab--active]="selectedIndex === $index"\n        [class]="tab.labelClass"\n        [disabled]="tab.disabled"\n        [fitInkBarToContent]="fitInkBarToContent"\n        (click)="_handleClick(tab, tabHeader, $index)"\n        (cdkFocusChange)="_tabFocusChanged($event, $index)">\n      <span class="mdc-tab__ripple"></span>\n\n      <!-- Needs to be a separate element, because we can\'t put\n          `overflow: hidden` on tab due to the ink bar. -->\n      <div\n        class="mat-mdc-tab-ripple"\n        mat-ripple\n        [matRippleTrigger]="tabNode"\n        [matRippleDisabled]="tab.disabled || disableRipple"></div>\n\n      <span class="mdc-tab__content">\n        <span class="mdc-tab__text-label">\n          <!--\n            If there is a label template, use it, otherwise fall back to the text label.\n            Note that we don\'t have indentation around the text label, because it adds\n            whitespace around the text which breaks some internal tests.\n          -->\n          @if (tab.templateLabel) {\n            <ng-template [cdkPortalOutlet]="tab.templateLabel"></ng-template>\n          } @else {{{tab.textLabel}}}\n        </span>\n      </span>\n    </div>\n  }\n</mat-tab-header>\n\n<!--\n  We need to project the content somewhere to avoid hydration errors. Some observations:\n  1. This is only necessary on the server.\n  2. We get a hydration error if there aren\'t any nodes after the `ng-content`.\n  3. We get a hydration error if `ng-content` is wrapped in another element.\n-->\n@if (_isServer) {\n  <ng-content/>\n}\n\n<div\n  class="mat-mdc-tab-body-wrapper"\n  [class._mat-animation-noopable]="_animationsDisabled()"\n  #tabBodyWrapper>\n  @for (tab of _tabs; track tab;) {\n    <mat-tab-body role="tabpanel"\n                 [id]="_getTabContentId($index)"\n                 [attr.tabindex]="(contentTabIndex != null && selectedIndex === $index) ? contentTabIndex : null"\n                 [attr.aria-labelledby]="_getTabLabelId(tab, $index)"\n                 [attr.aria-hidden]="selectedIndex !== $index"\n                 [class]="tab.bodyClass"\n                 [content]="tab.content!"\n                 [position]="tab.position!"\n                 [animationDuration]="animationDuration"\n                 [preserveContent]="preserveContent"\n                 (_onCentered)="_removeTabBodyWrapperHeight()"\n                 (_onCentering)="_setTabBodyWrapperHeight($event)"\n                 (_beforeCentering)="_bodyCentered($event)"/>\n  }\n</div>\n',
      styles: ['.mdc-tab {\n  min-width: 90px;\n  padding: 0 24px;\n  display: flex;\n  flex: 1 0 auto;\n  justify-content: center;\n  box-sizing: border-box;\n  border: none;\n  outline: none;\n  text-align: center;\n  white-space: nowrap;\n  cursor: pointer;\n  z-index: 1;\n  touch-action: manipulation;\n}\n\n.mdc-tab__content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: inherit;\n  pointer-events: none;\n}\n\n.mdc-tab__text-label {\n  transition: 150ms color linear;\n  display: inline-block;\n  line-height: 1;\n  z-index: 2;\n}\n\n.mdc-tab--active .mdc-tab__text-label {\n  transition-delay: 100ms;\n}\n\n._mat-animation-noopable .mdc-tab__text-label {\n  transition: none;\n}\n\n.mdc-tab-indicator {\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 1;\n}\n\n.mdc-tab-indicator__content {\n  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);\n  transform-origin: left;\n  opacity: 0;\n}\n\n.mdc-tab-indicator__content--underline {\n  align-self: flex-end;\n  box-sizing: border-box;\n  width: 100%;\n  border-top-style: solid;\n}\n\n.mdc-tab-indicator--active .mdc-tab-indicator__content {\n  opacity: 1;\n}\n\n._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {\n  transition: none;\n}\n\n.mat-mdc-tab-ripple.mat-mdc-tab-ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  pointer-events: none;\n}\n\n.mat-mdc-tab {\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-decoration: none;\n  background: none;\n  height: var(--mat-tab-container-height, 48px);\n  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));\n  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));\n  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));\n  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));\n  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));\n}\n.mat-mdc-tab.mdc-tab {\n  flex-grow: 0;\n}\n.mat-mdc-tab .mdc-tab-indicator__content--underline {\n  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));\n  border-top-width: var(--mat-tab-active-indicator-height, 2px);\n  border-radius: var(--mat-tab-active-indicator-shape, 0);\n}\n.mat-mdc-tab:hover .mdc-tab__text-label {\n  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab:focus .mdc-tab__text-label {\n  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {\n  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,\n.mat-mdc-tab.mdc-tab--active .mat-ripple-element {\n  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {\n  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {\n  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));\n}\n.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {\n  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {\n  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));\n}\n.mat-mdc-tab.mat-mdc-tab-disabled {\n  opacity: 0.4;\n  pointer-events: none;\n}\n.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {\n  pointer-events: none;\n}\n.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,\n.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {\n  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-tab .mdc-tab__ripple::before {\n  content: "";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0;\n  pointer-events: none;\n  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab .mdc-tab__text-label {\n  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));\n  display: inline-flex;\n  align-items: center;\n}\n.mat-mdc-tab .mdc-tab__content {\n  position: relative;\n  pointer-events: auto;\n}\n.mat-mdc-tab:hover .mdc-tab__ripple::before {\n  opacity: 0.04;\n}\n.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {\n  opacity: 0.12;\n}\n.mat-mdc-tab .mat-ripple-element {\n  opacity: 0.12;\n  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {\n  flex-grow: 1;\n}\n\n.mat-mdc-tab-group {\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n}\n.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {\n  background-color: var(--mat-tab-background-color);\n}\n.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {\n  color: var(--mat-tab-foreground-color);\n}\n.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {\n  border-color: var(--mat-tab-foreground-color);\n}\n.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {\n  color: var(--mat-tab-foreground-color);\n}\n.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {\n  border-color: var(--mat-tab-foreground-color);\n}\n.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,\n.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,\n.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {\n  border-color: var(--mat-tab-foreground-color);\n}\n.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {\n  background-color: var(--mat-tab-foreground-color);\n}\n.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {\n  color: var(--mat-tab-foreground-color);\n}\n.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {\n  flex-direction: column-reverse;\n}\n.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {\n  align-self: flex-start;\n}\n\n.mat-mdc-tab-body-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);\n}\n.mat-mdc-tab-body-wrapper._mat-animation-noopable {\n  transition: none !important;\n  animation: none !important;\n}\n']
    }]
  }], () => [], {
    _allTabs: [{
      type: ContentChildren,
      args: [MatTab, {
        descendants: true
      }]
    }],
    _tabBodies: [{
      type: ViewChildren,
      args: [MatTabBody]
    }],
    _tabBodyWrapper: [{
      type: ViewChild,
      args: ["tabBodyWrapper"]
    }],
    _tabHeader: [{
      type: ViewChild,
      args: ["tabHeader"]
    }],
    color: [{
      type: Input
    }],
    fitInkBarToContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stretchTabs: [{
      type: Input,
      args: [{
        alias: "mat-stretch-tabs",
        transform: booleanAttribute
      }]
    }],
    alignTabs: [{
      type: Input,
      args: [{
        alias: "mat-align-tabs"
      }]
    }],
    dynamicHeight: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectedIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    headerPosition: [{
      type: Input
    }],
    animationDuration: [{
      type: Input
    }],
    contentTabIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    disablePagination: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    preserveContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    backgroundColor: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    selectedIndexChange: [{
      type: Output
    }],
    focusChange: [{
      type: Output
    }],
    animationDone: [{
      type: Output
    }],
    selectedTabChange: [{
      type: Output
    }]
  });
})();
var MatTabChangeEvent = class {
  index;
  tab;
};
var MatTabNav = class _MatTabNav extends MatPaginatedTabHeader {
  _focusedItem = signal(null, ...ngDevMode ? [{
    debugName: "_focusedItem"
  }] : []);
  get fitInkBarToContent() {
    return this._fitInkBarToContent.value;
  }
  set fitInkBarToContent(value) {
    this._fitInkBarToContent.next(value);
    this._changeDetectorRef.markForCheck();
  }
  _fitInkBarToContent = new BehaviorSubject(false);
  stretchTabs = true;
  get animationDuration() {
    return this._animationDuration;
  }
  set animationDuration(value) {
    const stringValue = value + "";
    this._animationDuration = /^\d+$/.test(stringValue) ? value + "ms" : stringValue;
  }
  _animationDuration;
  _items;
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(value) {
    const classList = this._elementRef.nativeElement.classList;
    classList.remove("mat-tabs-with-background", `mat-background-${this.backgroundColor}`);
    if (value) {
      classList.add("mat-tabs-with-background", `mat-background-${value}`);
    }
    this._backgroundColor = value;
  }
  _backgroundColor;
  get disableRipple() {
    return this._disableRipple();
  }
  set disableRipple(value) {
    this._disableRipple.set(value);
  }
  _disableRipple = signal(false, ...ngDevMode ? [{
    debugName: "_disableRipple"
  }] : []);
  color = "primary";
  tabPanel;
  _tabListContainer;
  _tabList;
  _tabListInner;
  _nextPaginator;
  _previousPaginator;
  _inkBar;
  constructor() {
    const defaultConfig = inject(MAT_TABS_CONFIG, {
      optional: true
    });
    super();
    this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
    this.fitInkBarToContent = defaultConfig && defaultConfig.fitInkBarToContent != null ? defaultConfig.fitInkBarToContent : false;
    this.stretchTabs = defaultConfig && defaultConfig.stretchTabs != null ? defaultConfig.stretchTabs : true;
  }
  _itemSelected() {
  }
  ngAfterContentInit() {
    this._inkBar = new MatInkBar(this._items);
    this._items.changes.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => this.updateActiveLink());
    super.ngAfterContentInit();
    this._keyManager.change.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => this._focusedItem.set(this._keyManager?.activeItem || null));
  }
  ngAfterViewInit() {
    if (!this.tabPanel && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new Error("A mat-tab-nav-panel must be specified via [tabPanel].");
    }
    super.ngAfterViewInit();
  }
  updateActiveLink() {
    if (!this._items) {
      return;
    }
    const items = this._items.toArray();
    for (let i = 0; i < items.length; i++) {
      if (items[i].active) {
        this.selectedIndex = i;
        if (this.tabPanel) {
          this.tabPanel._activeTabId = items[i].id;
        }
        this._focusedItem.set(items[i]);
        this._changeDetectorRef.markForCheck();
        return;
      }
    }
    this.selectedIndex = -1;
  }
  _getRole() {
    return this.tabPanel ? "tablist" : this._elementRef.nativeElement.getAttribute("role");
  }
  _hasFocus(link) {
    return this._keyManager?.activeItem === link;
  }
  static \u0275fac = function MatTabNav_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTabNav)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatTabNav,
    selectors: [["", "mat-tab-nav-bar", ""]],
    contentQueries: function MatTabNav_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatTabLink, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._items = _t);
      }
    },
    viewQuery: function MatTabNav_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c1, 7)(_c2, 7)(_c3, 7)(_c4, 5)(_c5, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabListContainer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabList = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabListInner = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._nextPaginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._previousPaginator = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-tab-nav-bar", "mat-mdc-tab-header"],
    hostVars: 17,
    hostBindings: function MatTabNav_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx._getRole());
        \u0275\u0275styleProp("--mat-tab-animation-duration", ctx.animationDuration);
        \u0275\u0275classProp("mat-mdc-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-mdc-tab-header-rtl", ctx._getLayoutDirection() == "rtl")("mat-mdc-tab-nav-bar-stretch-tabs", ctx.stretchTabs)("mat-primary", ctx.color !== "warn" && ctx.color !== "accent")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn")("_mat-animation-noopable", ctx._animationsDisabled);
      }
    },
    inputs: {
      fitInkBarToContent: [2, "fitInkBarToContent", "fitInkBarToContent", booleanAttribute],
      stretchTabs: [2, "mat-stretch-tabs", "stretchTabs", booleanAttribute],
      animationDuration: "animationDuration",
      backgroundColor: "backgroundColor",
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      color: "color",
      tabPanel: "tabPanel"
    },
    exportAs: ["matTabNavBar", "matTabNav"],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c9,
    ngContentSelectors: _c0,
    decls: 13,
    vars: 6,
    consts: [["previousPaginator", ""], ["tabListContainer", ""], ["tabList", ""], ["tabListInner", ""], ["nextPaginator", ""], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-before", 3, "click", "mousedown", "touchend", "matRippleDisabled"], [1, "mat-mdc-tab-header-pagination-chevron"], [1, "mat-mdc-tab-link-container", 3, "keydown"], [1, "mat-mdc-tab-list", 3, "cdkObserveContent"], [1, "mat-mdc-tab-links"], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-after", 3, "mousedown", "click", "touchend", "matRippleDisabled"]],
    template: function MatTabNav_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 5, 0);
        \u0275\u0275listener("click", function MatTabNav_Template_div_click_0_listener() {
          return ctx._handlePaginatorClick("before");
        })("mousedown", function MatTabNav_Template_div_mousedown_0_listener($event) {
          return ctx._handlePaginatorPress("before", $event);
        })("touchend", function MatTabNav_Template_div_touchend_0_listener() {
          return ctx._stopInterval();
        });
        \u0275\u0275element(2, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 7, 1);
        \u0275\u0275listener("keydown", function MatTabNav_Template_div_keydown_3_listener($event) {
          return ctx._handleKeydown($event);
        });
        \u0275\u0275elementStart(5, "div", 8, 2);
        \u0275\u0275listener("cdkObserveContent", function MatTabNav_Template_div_cdkObserveContent_5_listener() {
          return ctx._onContentChanges();
        });
        \u0275\u0275elementStart(7, "div", 9, 3);
        \u0275\u0275projection(9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 10, 4);
        \u0275\u0275listener("mousedown", function MatTabNav_Template_div_mousedown_10_listener($event) {
          return ctx._handlePaginatorPress("after", $event);
        })("click", function MatTabNav_Template_div_click_10_listener() {
          return ctx._handlePaginatorClick("after");
        })("touchend", function MatTabNav_Template_div_touchend_10_listener() {
          return ctx._stopInterval();
        });
        \u0275\u0275element(12, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollBefore);
        \u0275\u0275property("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);
        \u0275\u0275advance(10);
        \u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollAfter);
        \u0275\u0275property("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
      }
    },
    dependencies: [MatRipple, CdkObserveContent],
    styles: [".mdc-tab {\n  min-width: 90px;\n  padding: 0 24px;\n  display: flex;\n  flex: 1 0 auto;\n  justify-content: center;\n  box-sizing: border-box;\n  border: none;\n  outline: none;\n  text-align: center;\n  white-space: nowrap;\n  cursor: pointer;\n  z-index: 1;\n  touch-action: manipulation;\n}\n\n.mdc-tab__content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: inherit;\n  pointer-events: none;\n}\n\n.mdc-tab__text-label {\n  transition: 150ms color linear;\n  display: inline-block;\n  line-height: 1;\n  z-index: 2;\n}\n\n.mdc-tab--active .mdc-tab__text-label {\n  transition-delay: 100ms;\n}\n\n._mat-animation-noopable .mdc-tab__text-label {\n  transition: none;\n}\n\n.mdc-tab-indicator {\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 1;\n}\n\n.mdc-tab-indicator__content {\n  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);\n  transform-origin: left;\n  opacity: 0;\n}\n\n.mdc-tab-indicator__content--underline {\n  align-self: flex-end;\n  box-sizing: border-box;\n  width: 100%;\n  border-top-style: solid;\n}\n\n.mdc-tab-indicator--active .mdc-tab-indicator__content {\n  opacity: 1;\n}\n\n._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {\n  transition: none;\n}\n\n.mat-mdc-tab-ripple.mat-mdc-tab-ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  pointer-events: none;\n}\n\n.mat-mdc-tab-header {\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  flex-shrink: 0;\n}\n\n.mdc-tab-indicator .mdc-tab-indicator__content {\n  transition-duration: var(--mat-tab-animation-duration, 250ms);\n}\n\n.mat-mdc-tab-header-pagination {\n  -webkit-user-select: none;\n  user-select: none;\n  position: relative;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  min-width: 32px;\n  cursor: pointer;\n  z-index: 2;\n  -webkit-tap-highlight-color: transparent;\n  touch-action: none;\n  box-sizing: content-box;\n  outline: 0;\n}\n.mat-mdc-tab-header-pagination::-moz-focus-inner {\n  border: 0;\n}\n.mat-mdc-tab-header-pagination .mat-ripple-element {\n  opacity: 0.12;\n  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {\n  display: flex;\n}\n\n.mat-mdc-tab-header-pagination-before,\n.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {\n  padding-left: 4px;\n}\n.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,\n.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {\n  transform: rotate(-135deg);\n}\n\n.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,\n.mat-mdc-tab-header-pagination-after {\n  padding-right: 4px;\n}\n.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,\n.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {\n  transform: rotate(45deg);\n}\n\n.mat-mdc-tab-header-pagination-chevron {\n  border-style: solid;\n  border-width: 2px 2px 0 0;\n  height: 8px;\n  width: 8px;\n  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));\n}\n\n.mat-mdc-tab-header-pagination-disabled {\n  box-shadow: none;\n  cursor: default;\n  pointer-events: none;\n}\n.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {\n  opacity: 0.4;\n}\n\n.mat-mdc-tab-list {\n  flex-grow: 1;\n  position: relative;\n  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);\n}\n._mat-animation-noopable .mat-mdc-tab-list {\n  transition: none;\n}\n\n.mat-mdc-tab-links {\n  display: flex;\n  flex: 1 0 auto;\n}\n[mat-align-tabs=center] > .mat-mdc-tab-link-container .mat-mdc-tab-links {\n  justify-content: center;\n}\n[mat-align-tabs=end] > .mat-mdc-tab-link-container .mat-mdc-tab-links {\n  justify-content: flex-end;\n}\n.cdk-drop-list .mat-mdc-tab-links, .mat-mdc-tab-links.cdk-drop-list {\n  min-height: var(--mat-tab-container-height, 48px);\n}\n\n.mat-mdc-tab-link-container {\n  display: flex;\n  flex-grow: 1;\n  overflow: hidden;\n  z-index: 1;\n  border-bottom-style: solid;\n  border-bottom-width: var(--mat-tab-divider-height, 1px);\n  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));\n}\n\n.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination {\n  background-color: var(--mat-tab-background-color);\n}\n.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label {\n  color: var(--mat-tab-foreground-color);\n}\n.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mdc-tab-indicator__content--underline {\n  border-color: var(--mat-tab-foreground-color);\n}\n.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label {\n  color: var(--mat-tab-foreground-color);\n}\n.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {\n  border-color: var(--mat-tab-foreground-color);\n}\n.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,\n.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-focus-indicator::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,\n.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {\n  border-color: var(--mat-tab-foreground-color);\n}\n.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mdc-tab__ripple::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {\n  background-color: var(--mat-tab-foreground-color);\n}\n.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {\n  color: var(--mat-tab-foreground-color);\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabNav, [{
    type: Component,
    args: [{
      selector: "[mat-tab-nav-bar]",
      exportAs: "matTabNavBar, matTabNav",
      host: {
        "[attr.role]": "_getRole()",
        "class": "mat-mdc-tab-nav-bar mat-mdc-tab-header",
        "[class.mat-mdc-tab-header-pagination-controls-enabled]": "_showPaginationControls",
        "[class.mat-mdc-tab-header-rtl]": "_getLayoutDirection() == 'rtl'",
        "[class.mat-mdc-tab-nav-bar-stretch-tabs]": "stretchTabs",
        "[class.mat-primary]": 'color !== "warn" && color !== "accent"',
        "[class.mat-accent]": 'color === "accent"',
        "[class.mat-warn]": 'color === "warn"',
        "[class._mat-animation-noopable]": "_animationsDisabled",
        "[style.--mat-tab-animation-duration]": "animationDuration"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      imports: [MatRipple, CdkObserveContent],
      template: `<!--
 Note that this intentionally uses a \`div\` instead of a \`button\`, because it's not part of
 the regular tabs flow and is only here to support mouse users. It should also not be focusable.
-->
<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before"
     #previousPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollBefore || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollBefore"
     (click)="_handlePaginatorClick('before')"
     (mousedown)="_handlePaginatorPress('before', $event)"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>

<div class="mat-mdc-tab-link-container" #tabListContainer (keydown)="_handleKeydown($event)">
  <div class="mat-mdc-tab-list" #tabList (cdkObserveContent)="_onContentChanges()">
    <div class="mat-mdc-tab-links" #tabListInner>
      <ng-content></ng-content>
    </div>
  </div>
</div>

<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after"
     #nextPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollAfter || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollAfter"
     (mousedown)="_handlePaginatorPress('after', $event)"
     (click)="_handlePaginatorClick('after')"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>
`,
      styles: [".mdc-tab {\n  min-width: 90px;\n  padding: 0 24px;\n  display: flex;\n  flex: 1 0 auto;\n  justify-content: center;\n  box-sizing: border-box;\n  border: none;\n  outline: none;\n  text-align: center;\n  white-space: nowrap;\n  cursor: pointer;\n  z-index: 1;\n  touch-action: manipulation;\n}\n\n.mdc-tab__content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: inherit;\n  pointer-events: none;\n}\n\n.mdc-tab__text-label {\n  transition: 150ms color linear;\n  display: inline-block;\n  line-height: 1;\n  z-index: 2;\n}\n\n.mdc-tab--active .mdc-tab__text-label {\n  transition-delay: 100ms;\n}\n\n._mat-animation-noopable .mdc-tab__text-label {\n  transition: none;\n}\n\n.mdc-tab-indicator {\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 1;\n}\n\n.mdc-tab-indicator__content {\n  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);\n  transform-origin: left;\n  opacity: 0;\n}\n\n.mdc-tab-indicator__content--underline {\n  align-self: flex-end;\n  box-sizing: border-box;\n  width: 100%;\n  border-top-style: solid;\n}\n\n.mdc-tab-indicator--active .mdc-tab-indicator__content {\n  opacity: 1;\n}\n\n._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {\n  transition: none;\n}\n\n.mat-mdc-tab-ripple.mat-mdc-tab-ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  pointer-events: none;\n}\n\n.mat-mdc-tab-header {\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  flex-shrink: 0;\n}\n\n.mdc-tab-indicator .mdc-tab-indicator__content {\n  transition-duration: var(--mat-tab-animation-duration, 250ms);\n}\n\n.mat-mdc-tab-header-pagination {\n  -webkit-user-select: none;\n  user-select: none;\n  position: relative;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  min-width: 32px;\n  cursor: pointer;\n  z-index: 2;\n  -webkit-tap-highlight-color: transparent;\n  touch-action: none;\n  box-sizing: content-box;\n  outline: 0;\n}\n.mat-mdc-tab-header-pagination::-moz-focus-inner {\n  border: 0;\n}\n.mat-mdc-tab-header-pagination .mat-ripple-element {\n  opacity: 0.12;\n  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {\n  display: flex;\n}\n\n.mat-mdc-tab-header-pagination-before,\n.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {\n  padding-left: 4px;\n}\n.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,\n.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {\n  transform: rotate(-135deg);\n}\n\n.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,\n.mat-mdc-tab-header-pagination-after {\n  padding-right: 4px;\n}\n.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,\n.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {\n  transform: rotate(45deg);\n}\n\n.mat-mdc-tab-header-pagination-chevron {\n  border-style: solid;\n  border-width: 2px 2px 0 0;\n  height: 8px;\n  width: 8px;\n  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));\n}\n\n.mat-mdc-tab-header-pagination-disabled {\n  box-shadow: none;\n  cursor: default;\n  pointer-events: none;\n}\n.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {\n  opacity: 0.4;\n}\n\n.mat-mdc-tab-list {\n  flex-grow: 1;\n  position: relative;\n  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);\n}\n._mat-animation-noopable .mat-mdc-tab-list {\n  transition: none;\n}\n\n.mat-mdc-tab-links {\n  display: flex;\n  flex: 1 0 auto;\n}\n[mat-align-tabs=center] > .mat-mdc-tab-link-container .mat-mdc-tab-links {\n  justify-content: center;\n}\n[mat-align-tabs=end] > .mat-mdc-tab-link-container .mat-mdc-tab-links {\n  justify-content: flex-end;\n}\n.cdk-drop-list .mat-mdc-tab-links, .mat-mdc-tab-links.cdk-drop-list {\n  min-height: var(--mat-tab-container-height, 48px);\n}\n\n.mat-mdc-tab-link-container {\n  display: flex;\n  flex-grow: 1;\n  overflow: hidden;\n  z-index: 1;\n  border-bottom-style: solid;\n  border-bottom-width: var(--mat-tab-divider-height, 1px);\n  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));\n}\n\n.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination {\n  background-color: var(--mat-tab-background-color);\n}\n.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label {\n  color: var(--mat-tab-foreground-color);\n}\n.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mdc-tab-indicator__content--underline {\n  border-color: var(--mat-tab-foreground-color);\n}\n.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label {\n  color: var(--mat-tab-foreground-color);\n}\n.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {\n  border-color: var(--mat-tab-foreground-color);\n}\n.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,\n.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-focus-indicator::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,\n.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {\n  border-color: var(--mat-tab-foreground-color);\n}\n.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mdc-tab__ripple::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {\n  background-color: var(--mat-tab-foreground-color);\n}\n.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {\n  color: var(--mat-tab-foreground-color);\n}\n"]
    }]
  }], () => [], {
    fitInkBarToContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stretchTabs: [{
      type: Input,
      args: [{
        alias: "mat-stretch-tabs",
        transform: booleanAttribute
      }]
    }],
    animationDuration: [{
      type: Input
    }],
    _items: [{
      type: ContentChildren,
      args: [forwardRef(() => MatTabLink), {
        descendants: true
      }]
    }],
    backgroundColor: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    tabPanel: [{
      type: Input
    }],
    _tabListContainer: [{
      type: ViewChild,
      args: ["tabListContainer", {
        static: true
      }]
    }],
    _tabList: [{
      type: ViewChild,
      args: ["tabList", {
        static: true
      }]
    }],
    _tabListInner: [{
      type: ViewChild,
      args: ["tabListInner", {
        static: true
      }]
    }],
    _nextPaginator: [{
      type: ViewChild,
      args: ["nextPaginator"]
    }],
    _previousPaginator: [{
      type: ViewChild,
      args: ["previousPaginator"]
    }]
  });
})();
var MatTabLink = class _MatTabLink extends InkBarItem {
  _tabNavBar = inject(MatTabNav);
  elementRef = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _destroyed = new Subject();
  _isActive = false;
  _tabIndex = computed(() => this._tabNavBar._focusedItem() === this ? this.tabIndex : -1, ...ngDevMode ? [{
    debugName: "_tabIndex"
  }] : []);
  get active() {
    return this._isActive;
  }
  set active(value) {
    if (value !== this._isActive) {
      this._isActive = value;
      this._tabNavBar.updateActiveLink();
    }
  }
  disabled = false;
  get disableRipple() {
    return this._disableRipple();
  }
  set disableRipple(value) {
    this._disableRipple.set(value);
  }
  _disableRipple = signal(false, ...ngDevMode ? [{
    debugName: "_disableRipple"
  }] : []);
  tabIndex = 0;
  rippleConfig;
  get rippleDisabled() {
    return this.disabled || this.disableRipple || this._tabNavBar.disableRipple || !!this.rippleConfig.disabled;
  }
  id = inject(_IdGenerator).getId("mat-tab-link-");
  constructor() {
    super();
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const globalRippleOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
      optional: true
    });
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    this.rippleConfig = globalRippleOptions || {};
    this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
    if (_animationsDisabled()) {
      this.rippleConfig.animation = {
        enterDuration: 0,
        exitDuration: 0
      };
    }
    this._tabNavBar._fitInkBarToContent.pipe(takeUntil(this._destroyed)).subscribe((fitInkBarToContent) => {
      this.fitInkBarToContent = fitInkBarToContent;
    });
  }
  focus() {
    this.elementRef.nativeElement.focus();
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this.elementRef);
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
    super.ngOnDestroy();
    this._focusMonitor.stopMonitoring(this.elementRef);
  }
  _handleFocus() {
    this._tabNavBar.focusIndex = this._tabNavBar._items.toArray().indexOf(this);
  }
  _handleKeydown(event) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      if (this.disabled) {
        event.preventDefault();
      } else if (this._tabNavBar.tabPanel) {
        if (event.keyCode === SPACE) {
          event.preventDefault();
        }
        this.elementRef.nativeElement.click();
      }
    }
  }
  _getAriaControls() {
    return this._tabNavBar.tabPanel ? this._tabNavBar.tabPanel?.id : this.elementRef.nativeElement.getAttribute("aria-controls");
  }
  _getAriaSelected() {
    if (this._tabNavBar.tabPanel) {
      return this.active ? "true" : "false";
    } else {
      return this.elementRef.nativeElement.getAttribute("aria-selected");
    }
  }
  _getAriaCurrent() {
    return this.active && !this._tabNavBar.tabPanel ? "page" : null;
  }
  _getRole() {
    return this._tabNavBar.tabPanel ? "tab" : this.elementRef.nativeElement.getAttribute("role");
  }
  static \u0275fac = function MatTabLink_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTabLink)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatTabLink,
    selectors: [["", "mat-tab-link", ""], ["", "matTabLink", ""]],
    hostAttrs: [1, "mdc-tab", "mat-mdc-tab-link", "mat-focus-indicator"],
    hostVars: 11,
    hostBindings: function MatTabLink_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focus", function MatTabLink_focus_HostBindingHandler() {
          return ctx._handleFocus();
        })("keydown", function MatTabLink_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-controls", ctx._getAriaControls())("aria-current", ctx._getAriaCurrent())("aria-disabled", ctx.disabled)("aria-selected", ctx._getAriaSelected())("id", ctx.id)("tabIndex", ctx._tabIndex())("role", ctx._getRole());
        \u0275\u0275classProp("mat-mdc-tab-disabled", ctx.disabled)("mdc-tab--active", ctx.active);
      }
    },
    inputs: {
      active: [2, "active", "active", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
      id: "id"
    },
    exportAs: ["matTabLink"],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c10,
    ngContentSelectors: _c0,
    decls: 5,
    vars: 2,
    consts: [[1, "mdc-tab__ripple"], ["mat-ripple", "", 1, "mat-mdc-tab-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mdc-tab__content"], [1, "mdc-tab__text-label"]],
    template: function MatTabLink_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275element(0, "span", 0)(1, "div", 1);
        \u0275\u0275elementStart(2, "span", 2)(3, "span", 3);
        \u0275\u0275projection(4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("matRippleTrigger", ctx.elementRef.nativeElement)("matRippleDisabled", ctx.rippleDisabled);
      }
    },
    dependencies: [MatRipple],
    styles: ['.mat-mdc-tab-link {\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-decoration: none;\n  background: none;\n  height: var(--mat-tab-container-height, 48px);\n  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));\n  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));\n  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));\n  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));\n  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));\n}\n.mat-mdc-tab-link.mdc-tab {\n  flex-grow: 0;\n}\n.mat-mdc-tab-link .mdc-tab-indicator__content--underline {\n  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));\n  border-top-width: var(--mat-tab-active-indicator-height, 2px);\n  border-radius: var(--mat-tab-active-indicator-shape, 0);\n}\n.mat-mdc-tab-link:hover .mdc-tab__text-label {\n  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab-link:focus .mdc-tab__text-label {\n  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label {\n  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,\n.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element {\n  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab__text-label {\n  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab-indicator__content--underline {\n  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));\n}\n.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab__text-label {\n  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab-indicator__content--underline {\n  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));\n}\n.mat-mdc-tab-link.mat-mdc-tab-disabled {\n  opacity: 0.4;\n  pointer-events: none;\n}\n.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content {\n  pointer-events: none;\n}\n.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,\n.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element {\n  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-tab-link .mdc-tab__ripple::before {\n  content: "";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0;\n  pointer-events: none;\n  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab-link .mdc-tab__text-label {\n  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));\n  display: inline-flex;\n  align-items: center;\n}\n.mat-mdc-tab-link .mdc-tab__content {\n  position: relative;\n  pointer-events: auto;\n}\n.mat-mdc-tab-link:hover .mdc-tab__ripple::before {\n  opacity: 0.04;\n}\n.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before {\n  opacity: 0.12;\n}\n.mat-mdc-tab-link .mat-ripple-element {\n  opacity: 0.12;\n  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link {\n  flex-grow: 1;\n}\n.mat-mdc-tab-link::before {\n  margin: 5px;\n}\n\n@media (max-width: 599px) {\n  .mat-mdc-tab-link {\n    min-width: 72px;\n  }\n}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabLink, [{
    type: Component,
    args: [{
      selector: "[mat-tab-link], [matTabLink]",
      exportAs: "matTabLink",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "class": "mdc-tab mat-mdc-tab-link mat-focus-indicator",
        "[attr.aria-controls]": "_getAriaControls()",
        "[attr.aria-current]": "_getAriaCurrent()",
        "[attr.aria-disabled]": "disabled",
        "[attr.aria-selected]": "_getAriaSelected()",
        "[attr.id]": "id",
        "[attr.tabIndex]": "_tabIndex()",
        "[attr.role]": "_getRole()",
        "[class.mat-mdc-tab-disabled]": "disabled",
        "[class.mdc-tab--active]": "active",
        "(focus)": "_handleFocus()",
        "(keydown)": "_handleKeydown($event)"
      },
      imports: [MatRipple],
      template: '<span class="mdc-tab__ripple"></span>\n\n<div\n  class="mat-mdc-tab-ripple"\n  mat-ripple\n  [matRippleTrigger]="elementRef.nativeElement"\n  [matRippleDisabled]="rippleDisabled"></div>\n\n<span class="mdc-tab__content">\n  <span class="mdc-tab__text-label">\n    <ng-content></ng-content>\n  </span>\n</span>\n\n',
      styles: ['.mat-mdc-tab-link {\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-decoration: none;\n  background: none;\n  height: var(--mat-tab-container-height, 48px);\n  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));\n  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));\n  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));\n  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));\n  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));\n}\n.mat-mdc-tab-link.mdc-tab {\n  flex-grow: 0;\n}\n.mat-mdc-tab-link .mdc-tab-indicator__content--underline {\n  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));\n  border-top-width: var(--mat-tab-active-indicator-height, 2px);\n  border-radius: var(--mat-tab-active-indicator-shape, 0);\n}\n.mat-mdc-tab-link:hover .mdc-tab__text-label {\n  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab-link:focus .mdc-tab__text-label {\n  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label {\n  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,\n.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element {\n  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab__text-label {\n  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab-indicator__content--underline {\n  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));\n}\n.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab__text-label {\n  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab-indicator__content--underline {\n  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));\n}\n.mat-mdc-tab-link.mat-mdc-tab-disabled {\n  opacity: 0.4;\n  pointer-events: none;\n}\n.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content {\n  pointer-events: none;\n}\n.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,\n.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element {\n  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));\n}\n.mat-mdc-tab-link .mdc-tab__ripple::before {\n  content: "";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0;\n  pointer-events: none;\n  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab-link .mdc-tab__text-label {\n  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));\n  display: inline-flex;\n  align-items: center;\n}\n.mat-mdc-tab-link .mdc-tab__content {\n  position: relative;\n  pointer-events: auto;\n}\n.mat-mdc-tab-link:hover .mdc-tab__ripple::before {\n  opacity: 0.04;\n}\n.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before {\n  opacity: 0.12;\n}\n.mat-mdc-tab-link .mat-ripple-element {\n  opacity: 0.12;\n  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link {\n  flex-grow: 1;\n}\n.mat-mdc-tab-link::before {\n  margin: 5px;\n}\n\n@media (max-width: 599px) {\n  .mat-mdc-tab-link {\n    min-width: 72px;\n  }\n}\n']
    }]
  }], () => [], {
    active: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    id: [{
      type: Input
    }]
  });
})();
var MatTabNavPanel = class _MatTabNavPanel {
  id = inject(_IdGenerator).getId("mat-tab-nav-panel-");
  _activeTabId;
  static \u0275fac = function MatTabNavPanel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTabNavPanel)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatTabNavPanel,
    selectors: [["mat-tab-nav-panel"]],
    hostAttrs: ["role", "tabpanel", 1, "mat-mdc-tab-nav-panel"],
    hostVars: 2,
    hostBindings: function MatTabNavPanel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-labelledby", ctx._activeTabId)("id", ctx.id);
      }
    },
    inputs: {
      id: "id"
    },
    exportAs: ["matTabNavPanel"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatTabNavPanel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabNavPanel, [{
    type: Component,
    args: [{
      selector: "mat-tab-nav-panel",
      exportAs: "matTabNavPanel",
      template: "<ng-content></ng-content>",
      host: {
        "[attr.aria-labelledby]": "_activeTabId",
        "[attr.id]": "id",
        "class": "mat-mdc-tab-nav-panel",
        "role": "tabpanel"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    id: [{
      type: Input
    }]
  });
})();
var MatTabsModule = class _MatTabsModule {
  static \u0275fac = function MatTabsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTabsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatTabsModule,
    imports: [MatTabContent, MatTabLabel, MatTab, MatTabGroup, MatTabNav, MatTabNavPanel, MatTabLink],
    exports: [BidiModule, MatTabContent, MatTabLabel, MatTab, MatTabGroup, MatTabNav, MatTabNavPanel, MatTabLink]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabsModule, [{
    type: NgModule,
    args: [{
      imports: [MatTabContent, MatTabLabel, MatTab, MatTabGroup, MatTabNav, MatTabNavPanel, MatTabLink],
      exports: [BidiModule, MatTabContent, MatTabLabel, MatTab, MatTabGroup, MatTabNav, MatTabNavPanel, MatTabLink]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/table.mjs
var _c02 = [[["caption"]], [["colgroup"], ["col"]], "*"];
var _c12 = ["caption", "colgroup, col", "*"];
function CdkTable_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 2);
  }
}
function CdkTable_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "thead", 0);
    \u0275\u0275elementContainer(1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "tbody", 0);
    \u0275\u0275elementContainer(3, 2)(4, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "tfoot", 0);
    \u0275\u0275elementContainer(6, 4);
    \u0275\u0275elementEnd();
  }
}
function CdkTable_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 1)(1, 2)(2, 3)(3, 4);
  }
}
function CdkTextColumn_th_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", ctx_r0.justify);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.headerText, " ");
  }
}
function CdkTextColumn_td_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", ctx_r0.justify);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.dataAccessor(data_r2, ctx_r0.name), " ");
  }
}
var CDK_TABLE = new InjectionToken("CDK_TABLE");
var TEXT_COLUMN_OPTIONS = new InjectionToken("text-column-options");
var CdkCellDef = class _CdkCellDef {
  template = inject(TemplateRef);
  constructor() {
  }
  static \u0275fac = function CdkCellDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkCellDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkCellDef,
    selectors: [["", "cdkCellDef", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCellDef, [{
    type: Directive,
    args: [{
      selector: "[cdkCellDef]"
    }]
  }], () => [], null);
})();
var CdkHeaderCellDef = class _CdkHeaderCellDef {
  template = inject(TemplateRef);
  constructor() {
  }
  static \u0275fac = function CdkHeaderCellDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkHeaderCellDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkHeaderCellDef,
    selectors: [["", "cdkHeaderCellDef", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderCellDef, [{
    type: Directive,
    args: [{
      selector: "[cdkHeaderCellDef]"
    }]
  }], () => [], null);
})();
var CdkFooterCellDef = class _CdkFooterCellDef {
  template = inject(TemplateRef);
  constructor() {
  }
  static \u0275fac = function CdkFooterCellDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkFooterCellDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkFooterCellDef,
    selectors: [["", "cdkFooterCellDef", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterCellDef, [{
    type: Directive,
    args: [{
      selector: "[cdkFooterCellDef]"
    }]
  }], () => [], null);
})();
var CdkColumnDef = class _CdkColumnDef {
  _table = inject(CDK_TABLE, {
    optional: true
  });
  _hasStickyChanged = false;
  get name() {
    return this._name;
  }
  set name(name) {
    this._setNameInput(name);
  }
  _name;
  get sticky() {
    return this._sticky;
  }
  set sticky(value) {
    if (value !== this._sticky) {
      this._sticky = value;
      this._hasStickyChanged = true;
    }
  }
  _sticky = false;
  get stickyEnd() {
    return this._stickyEnd;
  }
  set stickyEnd(value) {
    if (value !== this._stickyEnd) {
      this._stickyEnd = value;
      this._hasStickyChanged = true;
    }
  }
  _stickyEnd = false;
  cell;
  headerCell;
  footerCell;
  cssClassFriendlyName;
  _columnCssClassName;
  constructor() {
  }
  hasStickyChanged() {
    const hasStickyChanged = this._hasStickyChanged;
    this.resetStickyChanged();
    return hasStickyChanged;
  }
  resetStickyChanged() {
    this._hasStickyChanged = false;
  }
  _updateColumnCssClassName() {
    this._columnCssClassName = [`cdk-column-${this.cssClassFriendlyName}`];
  }
  _setNameInput(value) {
    if (value) {
      this._name = value;
      this.cssClassFriendlyName = value.replace(/[^a-z0-9_-]/gi, "-");
      this._updateColumnCssClassName();
    }
  }
  static \u0275fac = function CdkColumnDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkColumnDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkColumnDef,
    selectors: [["", "cdkColumnDef", ""]],
    contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, CdkCellDef, 5)(dirIndex, CdkHeaderCellDef, 5)(dirIndex, CdkFooterCellDef, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cell = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerCell = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerCell = _t.first);
      }
    },
    inputs: {
      name: [0, "cdkColumnDef", "name"],
      sticky: [2, "sticky", "sticky", booleanAttribute],
      stickyEnd: [2, "stickyEnd", "stickyEnd", booleanAttribute]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkColumnDef, [{
    type: Directive,
    args: [{
      selector: "[cdkColumnDef]"
    }]
  }], () => [], {
    name: [{
      type: Input,
      args: ["cdkColumnDef"]
    }],
    sticky: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stickyEnd: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    cell: [{
      type: ContentChild,
      args: [CdkCellDef]
    }],
    headerCell: [{
      type: ContentChild,
      args: [CdkHeaderCellDef]
    }],
    footerCell: [{
      type: ContentChild,
      args: [CdkFooterCellDef]
    }]
  });
})();
var BaseCdkCell = class {
  constructor(columnDef, elementRef) {
    elementRef.nativeElement.classList.add(...columnDef._columnCssClassName);
  }
};
var CdkHeaderCell = class _CdkHeaderCell extends BaseCdkCell {
  constructor() {
    super(inject(CdkColumnDef), inject(ElementRef));
  }
  static \u0275fac = function CdkHeaderCell_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkHeaderCell)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkHeaderCell,
    selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]],
    hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderCell, [{
    type: Directive,
    args: [{
      selector: "cdk-header-cell, th[cdk-header-cell]",
      host: {
        "class": "cdk-header-cell",
        "role": "columnheader"
      }
    }]
  }], () => [], null);
})();
var CdkFooterCell = class _CdkFooterCell extends BaseCdkCell {
  constructor() {
    const columnDef = inject(CdkColumnDef);
    const elementRef = inject(ElementRef);
    super(columnDef, elementRef);
    const role = columnDef._table?._getCellRole();
    if (role) {
      elementRef.nativeElement.setAttribute("role", role);
    }
  }
  static \u0275fac = function CdkFooterCell_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkFooterCell)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkFooterCell,
    selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]],
    hostAttrs: [1, "cdk-footer-cell"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterCell, [{
    type: Directive,
    args: [{
      selector: "cdk-footer-cell, td[cdk-footer-cell]",
      host: {
        "class": "cdk-footer-cell"
      }
    }]
  }], () => [], null);
})();
var CdkCell = class _CdkCell extends BaseCdkCell {
  constructor() {
    const columnDef = inject(CdkColumnDef);
    const elementRef = inject(ElementRef);
    super(columnDef, elementRef);
    const role = columnDef._table?._getCellRole();
    if (role) {
      elementRef.nativeElement.setAttribute("role", role);
    }
  }
  static \u0275fac = function CdkCell_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkCell)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkCell,
    selectors: [["cdk-cell"], ["td", "cdk-cell", ""]],
    hostAttrs: [1, "cdk-cell"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCell, [{
    type: Directive,
    args: [{
      selector: "cdk-cell, td[cdk-cell]",
      host: {
        "class": "cdk-cell"
      }
    }]
  }], () => [], null);
})();
var CDK_ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
var BaseRowDef = class _BaseRowDef {
  template = inject(TemplateRef);
  _differs = inject(IterableDiffers);
  columns;
  _columnsDiffer;
  constructor() {
  }
  ngOnChanges(changes) {
    if (!this._columnsDiffer) {
      const columns = changes["columns"] && changes["columns"].currentValue || [];
      this._columnsDiffer = this._differs.find(columns).create();
      this._columnsDiffer.diff(columns);
    }
  }
  getColumnsDiff() {
    return this._columnsDiffer.diff(this.columns);
  }
  extractCellTemplate(column) {
    if (this instanceof CdkHeaderRowDef) {
      return column.headerCell.template;
    }
    if (this instanceof CdkFooterRowDef) {
      return column.footerCell.template;
    } else {
      return column.cell.template;
    }
  }
  static \u0275fac = function BaseRowDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseRowDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseRowDef,
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseRowDef, [{
    type: Directive
  }], () => [], null);
})();
var CdkHeaderRowDef = class _CdkHeaderRowDef extends BaseRowDef {
  _table = inject(CDK_TABLE, {
    optional: true
  });
  _hasStickyChanged = false;
  get sticky() {
    return this._sticky;
  }
  set sticky(value) {
    if (value !== this._sticky) {
      this._sticky = value;
      this._hasStickyChanged = true;
    }
  }
  _sticky = false;
  constructor() {
    super(inject(TemplateRef), inject(IterableDiffers));
  }
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
  }
  hasStickyChanged() {
    const hasStickyChanged = this._hasStickyChanged;
    this.resetStickyChanged();
    return hasStickyChanged;
  }
  resetStickyChanged() {
    this._hasStickyChanged = false;
  }
  static \u0275fac = function CdkHeaderRowDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkHeaderRowDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkHeaderRowDef,
    selectors: [["", "cdkHeaderRowDef", ""]],
    inputs: {
      columns: [0, "cdkHeaderRowDef", "columns"],
      sticky: [2, "cdkHeaderRowDefSticky", "sticky", booleanAttribute]
    },
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderRowDef, [{
    type: Directive,
    args: [{
      selector: "[cdkHeaderRowDef]",
      inputs: [{
        name: "columns",
        alias: "cdkHeaderRowDef"
      }]
    }]
  }], () => [], {
    sticky: [{
      type: Input,
      args: [{
        alias: "cdkHeaderRowDefSticky",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkFooterRowDef = class _CdkFooterRowDef extends BaseRowDef {
  _table = inject(CDK_TABLE, {
    optional: true
  });
  _hasStickyChanged = false;
  get sticky() {
    return this._sticky;
  }
  set sticky(value) {
    if (value !== this._sticky) {
      this._sticky = value;
      this._hasStickyChanged = true;
    }
  }
  _sticky = false;
  constructor() {
    super(inject(TemplateRef), inject(IterableDiffers));
  }
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
  }
  hasStickyChanged() {
    const hasStickyChanged = this._hasStickyChanged;
    this.resetStickyChanged();
    return hasStickyChanged;
  }
  resetStickyChanged() {
    this._hasStickyChanged = false;
  }
  static \u0275fac = function CdkFooterRowDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkFooterRowDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkFooterRowDef,
    selectors: [["", "cdkFooterRowDef", ""]],
    inputs: {
      columns: [0, "cdkFooterRowDef", "columns"],
      sticky: [2, "cdkFooterRowDefSticky", "sticky", booleanAttribute]
    },
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterRowDef, [{
    type: Directive,
    args: [{
      selector: "[cdkFooterRowDef]",
      inputs: [{
        name: "columns",
        alias: "cdkFooterRowDef"
      }]
    }]
  }], () => [], {
    sticky: [{
      type: Input,
      args: [{
        alias: "cdkFooterRowDefSticky",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkRowDef = class _CdkRowDef extends BaseRowDef {
  _table = inject(CDK_TABLE, {
    optional: true
  });
  when;
  constructor() {
    super(inject(TemplateRef), inject(IterableDiffers));
  }
  static \u0275fac = function CdkRowDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkRowDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkRowDef,
    selectors: [["", "cdkRowDef", ""]],
    inputs: {
      columns: [0, "cdkRowDefColumns", "columns"],
      when: [0, "cdkRowDefWhen", "when"]
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkRowDef, [{
    type: Directive,
    args: [{
      selector: "[cdkRowDef]",
      inputs: [{
        name: "columns",
        alias: "cdkRowDefColumns"
      }, {
        name: "when",
        alias: "cdkRowDefWhen"
      }]
    }]
  }], () => [], null);
})();
var CdkCellOutlet = class _CdkCellOutlet {
  _viewContainer = inject(ViewContainerRef);
  cells;
  context;
  static mostRecentCellOutlet = null;
  constructor() {
    _CdkCellOutlet.mostRecentCellOutlet = this;
  }
  ngOnDestroy() {
    if (_CdkCellOutlet.mostRecentCellOutlet === this) {
      _CdkCellOutlet.mostRecentCellOutlet = null;
    }
  }
  static \u0275fac = function CdkCellOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkCellOutlet)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkCellOutlet,
    selectors: [["", "cdkCellOutlet", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCellOutlet, [{
    type: Directive,
    args: [{
      selector: "[cdkCellOutlet]"
    }]
  }], () => [], null);
})();
var CdkHeaderRow = class _CdkHeaderRow {
  static \u0275fac = function CdkHeaderRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkHeaderRow)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkHeaderRow,
    selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]],
    hostAttrs: ["role", "row", 1, "cdk-header-row"],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function CdkHeaderRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 0);
      }
    },
    dependencies: [CdkCellOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderRow, [{
    type: Component,
    args: [{
      selector: "cdk-header-row, tr[cdk-header-row]",
      template: CDK_ROW_TEMPLATE,
      host: {
        "class": "cdk-header-row",
        "role": "row"
      },
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var CdkFooterRow = class _CdkFooterRow {
  static \u0275fac = function CdkFooterRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkFooterRow)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkFooterRow,
    selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]],
    hostAttrs: ["role", "row", 1, "cdk-footer-row"],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function CdkFooterRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 0);
      }
    },
    dependencies: [CdkCellOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterRow, [{
    type: Component,
    args: [{
      selector: "cdk-footer-row, tr[cdk-footer-row]",
      template: CDK_ROW_TEMPLATE,
      host: {
        "class": "cdk-footer-row",
        "role": "row"
      },
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var CdkRow = class _CdkRow {
  static \u0275fac = function CdkRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkRow)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkRow,
    selectors: [["cdk-row"], ["tr", "cdk-row", ""]],
    hostAttrs: ["role", "row", 1, "cdk-row"],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function CdkRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 0);
      }
    },
    dependencies: [CdkCellOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkRow, [{
    type: Component,
    args: [{
      selector: "cdk-row, tr[cdk-row]",
      template: CDK_ROW_TEMPLATE,
      host: {
        "class": "cdk-row",
        "role": "row"
      },
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var CdkNoDataRow = class _CdkNoDataRow {
  templateRef = inject(TemplateRef);
  _contentClassNames = ["cdk-no-data-row", "cdk-row"];
  _cellClassNames = ["cdk-cell", "cdk-no-data-cell"];
  _cellSelector = "td, cdk-cell, [cdk-cell], .cdk-cell";
  constructor() {
  }
  static \u0275fac = function CdkNoDataRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkNoDataRow)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkNoDataRow,
    selectors: [["ng-template", "cdkNoDataRow", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkNoDataRow, [{
    type: Directive,
    args: [{
      selector: "ng-template[cdkNoDataRow]"
    }]
  }], () => [], null);
})();
var STICKY_DIRECTIONS = ["top", "bottom", "left", "right"];
var StickyStyler = class {
  _isNativeHtmlTable;
  _stickCellCss;
  _isBrowser;
  _needsPositionStickyOnElement;
  direction;
  _positionListener;
  _tableInjector;
  _elemSizeCache = /* @__PURE__ */ new WeakMap();
  _resizeObserver = globalThis?.ResizeObserver ? new globalThis.ResizeObserver((entries) => this._updateCachedSizes(entries)) : null;
  _updatedStickyColumnsParamsToReplay = [];
  _stickyColumnsReplayTimeout = null;
  _cachedCellWidths = [];
  _borderCellCss;
  _destroyed = false;
  constructor(_isNativeHtmlTable, _stickCellCss, _isBrowser = true, _needsPositionStickyOnElement = true, direction, _positionListener, _tableInjector) {
    this._isNativeHtmlTable = _isNativeHtmlTable;
    this._stickCellCss = _stickCellCss;
    this._isBrowser = _isBrowser;
    this._needsPositionStickyOnElement = _needsPositionStickyOnElement;
    this.direction = direction;
    this._positionListener = _positionListener;
    this._tableInjector = _tableInjector;
    this._borderCellCss = {
      "top": `${_stickCellCss}-border-elem-top`,
      "bottom": `${_stickCellCss}-border-elem-bottom`,
      "left": `${_stickCellCss}-border-elem-left`,
      "right": `${_stickCellCss}-border-elem-right`
    };
  }
  clearStickyPositioning(rows, stickyDirections) {
    if (stickyDirections.includes("left") || stickyDirections.includes("right")) {
      this._removeFromStickyColumnReplayQueue(rows);
    }
    const elementsToClear = [];
    for (const row of rows) {
      if (row.nodeType !== row.ELEMENT_NODE) {
        continue;
      }
      elementsToClear.push(row, ...Array.from(row.children));
    }
    afterNextRender({
      write: () => {
        for (const element of elementsToClear) {
          this._removeStickyStyle(element, stickyDirections);
        }
      }
    }, {
      injector: this._tableInjector
    });
  }
  updateStickyColumns(rows, stickyStartStates, stickyEndStates, recalculateCellWidths = true, replay = true) {
    if (!rows.length || !this._isBrowser || !(stickyStartStates.some((state) => state) || stickyEndStates.some((state) => state))) {
      this._positionListener?.stickyColumnsUpdated({
        sizes: []
      });
      this._positionListener?.stickyEndColumnsUpdated({
        sizes: []
      });
      return;
    }
    const firstRow = rows[0];
    const numCells = firstRow.children.length;
    const isRtl = this.direction === "rtl";
    const start = isRtl ? "right" : "left";
    const end = isRtl ? "left" : "right";
    const lastStickyStart = stickyStartStates.lastIndexOf(true);
    const firstStickyEnd = stickyEndStates.indexOf(true);
    let cellWidths;
    let startPositions;
    let endPositions;
    if (replay) {
      this._updateStickyColumnReplayQueue({
        rows: [...rows],
        stickyStartStates: [...stickyStartStates],
        stickyEndStates: [...stickyEndStates]
      });
    }
    afterNextRender({
      earlyRead: () => {
        cellWidths = this._getCellWidths(firstRow, recalculateCellWidths);
        startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);
        endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);
      },
      write: () => {
        for (const row of rows) {
          for (let i = 0; i < numCells; i++) {
            const cell = row.children[i];
            if (stickyStartStates[i]) {
              this._addStickyStyle(cell, start, startPositions[i], i === lastStickyStart);
            }
            if (stickyEndStates[i]) {
              this._addStickyStyle(cell, end, endPositions[i], i === firstStickyEnd);
            }
          }
        }
        if (this._positionListener && cellWidths.some((w) => !!w)) {
          this._positionListener.stickyColumnsUpdated({
            sizes: lastStickyStart === -1 ? [] : cellWidths.slice(0, lastStickyStart + 1).map((width, index) => stickyStartStates[index] ? width : null)
          });
          this._positionListener.stickyEndColumnsUpdated({
            sizes: firstStickyEnd === -1 ? [] : cellWidths.slice(firstStickyEnd).map((width, index) => stickyEndStates[index + firstStickyEnd] ? width : null).reverse()
          });
        }
      }
    }, {
      injector: this._tableInjector
    });
  }
  stickRows(rowsToStick, stickyStates, position) {
    if (!this._isBrowser) {
      return;
    }
    const rows = position === "bottom" ? rowsToStick.slice().reverse() : rowsToStick;
    const states = position === "bottom" ? stickyStates.slice().reverse() : stickyStates;
    const stickyOffsets = [];
    const stickyCellHeights = [];
    const elementsToStick = [];
    afterNextRender({
      earlyRead: () => {
        for (let rowIndex = 0, stickyOffset = 0; rowIndex < rows.length; rowIndex++) {
          if (!states[rowIndex]) {
            continue;
          }
          stickyOffsets[rowIndex] = stickyOffset;
          const row = rows[rowIndex];
          elementsToStick[rowIndex] = this._isNativeHtmlTable ? Array.from(row.children) : [row];
          const height = this._retrieveElementSize(row).height;
          stickyOffset += height;
          stickyCellHeights[rowIndex] = height;
        }
      },
      write: () => {
        const borderedRowIndex = states.lastIndexOf(true);
        for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
          if (!states[rowIndex]) {
            continue;
          }
          const offset = stickyOffsets[rowIndex];
          const isBorderedRowIndex = rowIndex === borderedRowIndex;
          for (const element of elementsToStick[rowIndex]) {
            this._addStickyStyle(element, position, offset, isBorderedRowIndex);
          }
        }
        if (position === "top") {
          this._positionListener?.stickyHeaderRowsUpdated({
            sizes: stickyCellHeights,
            offsets: stickyOffsets,
            elements: elementsToStick
          });
        } else {
          this._positionListener?.stickyFooterRowsUpdated({
            sizes: stickyCellHeights,
            offsets: stickyOffsets,
            elements: elementsToStick
          });
        }
      }
    }, {
      injector: this._tableInjector
    });
  }
  updateStickyFooterContainer(tableElement, stickyStates) {
    if (!this._isNativeHtmlTable) {
      return;
    }
    afterNextRender({
      write: () => {
        const tfoot = tableElement.querySelector("tfoot");
        if (tfoot) {
          if (stickyStates.some((state) => !state)) {
            this._removeStickyStyle(tfoot, ["bottom"]);
          } else {
            this._addStickyStyle(tfoot, "bottom", 0, false);
          }
        }
      }
    }, {
      injector: this._tableInjector
    });
  }
  destroy() {
    if (this._stickyColumnsReplayTimeout) {
      clearTimeout(this._stickyColumnsReplayTimeout);
    }
    this._resizeObserver?.disconnect();
    this._destroyed = true;
  }
  _removeStickyStyle(element, stickyDirections) {
    if (!element.classList.contains(this._stickCellCss)) {
      return;
    }
    for (const dir of stickyDirections) {
      element.style[dir] = "";
      element.classList.remove(this._borderCellCss[dir]);
    }
    const hasDirection = STICKY_DIRECTIONS.some((dir) => stickyDirections.indexOf(dir) === -1 && element.style[dir]);
    if (hasDirection) {
      element.style.zIndex = this._getCalculatedZIndex(element);
    } else {
      element.style.zIndex = "";
      if (this._needsPositionStickyOnElement) {
        element.style.position = "";
      }
      element.classList.remove(this._stickCellCss);
    }
  }
  _addStickyStyle(element, dir, dirValue, isBorderElement) {
    element.classList.add(this._stickCellCss);
    if (isBorderElement) {
      element.classList.add(this._borderCellCss[dir]);
    }
    element.style[dir] = `${dirValue}px`;
    element.style.zIndex = this._getCalculatedZIndex(element);
    if (this._needsPositionStickyOnElement) {
      element.style.cssText += "position: -webkit-sticky; position: sticky; ";
    }
  }
  _getCalculatedZIndex(element) {
    const zIndexIncrements = {
      top: 100,
      bottom: 10,
      left: 1,
      right: 1
    };
    let zIndex = 0;
    for (const dir of STICKY_DIRECTIONS) {
      if (element.style[dir]) {
        zIndex += zIndexIncrements[dir];
      }
    }
    return zIndex ? `${zIndex}` : "";
  }
  _getCellWidths(row, recalculateCellWidths = true) {
    if (!recalculateCellWidths && this._cachedCellWidths.length) {
      return this._cachedCellWidths;
    }
    const cellWidths = [];
    const firstRowCells = row.children;
    for (let i = 0; i < firstRowCells.length; i++) {
      const cell = firstRowCells[i];
      cellWidths.push(this._retrieveElementSize(cell).width);
    }
    this._cachedCellWidths = cellWidths;
    return cellWidths;
  }
  _getStickyStartColumnPositions(widths, stickyStates) {
    const positions = [];
    let nextPosition = 0;
    for (let i = 0; i < widths.length; i++) {
      if (stickyStates[i]) {
        positions[i] = nextPosition;
        nextPosition += widths[i];
      }
    }
    return positions;
  }
  _getStickyEndColumnPositions(widths, stickyStates) {
    const positions = [];
    let nextPosition = 0;
    for (let i = widths.length; i > 0; i--) {
      if (stickyStates[i]) {
        positions[i] = nextPosition;
        nextPosition += widths[i];
      }
    }
    return positions;
  }
  _retrieveElementSize(element) {
    const cachedSize = this._elemSizeCache.get(element);
    if (cachedSize) {
      return cachedSize;
    }
    const clientRect = element.getBoundingClientRect();
    const size = {
      width: clientRect.width,
      height: clientRect.height
    };
    if (!this._resizeObserver) {
      return size;
    }
    this._elemSizeCache.set(element, size);
    this._resizeObserver.observe(element, {
      box: "border-box"
    });
    return size;
  }
  _updateStickyColumnReplayQueue(params) {
    this._removeFromStickyColumnReplayQueue(params.rows);
    if (!this._stickyColumnsReplayTimeout) {
      this._updatedStickyColumnsParamsToReplay.push(params);
    }
  }
  _removeFromStickyColumnReplayQueue(rows) {
    const rowsSet = new Set(rows);
    for (const update of this._updatedStickyColumnsParamsToReplay) {
      update.rows = update.rows.filter((row) => !rowsSet.has(row));
    }
    this._updatedStickyColumnsParamsToReplay = this._updatedStickyColumnsParamsToReplay.filter((update) => !!update.rows.length);
  }
  _updateCachedSizes(entries) {
    let needsColumnUpdate = false;
    for (const entry of entries) {
      const newEntry = entry.borderBoxSize?.length ? {
        width: entry.borderBoxSize[0].inlineSize,
        height: entry.borderBoxSize[0].blockSize
      } : {
        width: entry.contentRect.width,
        height: entry.contentRect.height
      };
      if (newEntry.width !== this._elemSizeCache.get(entry.target)?.width && isCell(entry.target)) {
        needsColumnUpdate = true;
      }
      this._elemSizeCache.set(entry.target, newEntry);
    }
    if (needsColumnUpdate && this._updatedStickyColumnsParamsToReplay.length) {
      if (this._stickyColumnsReplayTimeout) {
        clearTimeout(this._stickyColumnsReplayTimeout);
      }
      this._stickyColumnsReplayTimeout = setTimeout(() => {
        if (this._destroyed) {
          return;
        }
        for (const update of this._updatedStickyColumnsParamsToReplay) {
          this.updateStickyColumns(update.rows, update.stickyStartStates, update.stickyEndStates, true, false);
        }
        this._updatedStickyColumnsParamsToReplay = [];
        this._stickyColumnsReplayTimeout = null;
      }, 0);
    }
  }
};
function isCell(element) {
  return ["cdk-cell", "cdk-header-cell", "cdk-footer-cell"].some((klass) => element.classList.contains(klass));
}
function getTableUnknownColumnError(id) {
  return Error(`Could not find column with id "${id}".`);
}
function getTableDuplicateColumnNameError(name) {
  return Error(`Duplicate column definition name provided: "${name}".`);
}
function getTableMultipleDefaultRowDefsError() {
  return Error(`There can only be one default row without a when predicate function. Or set \`multiTemplateDataRows\`.`);
}
function getTableMissingMatchingRowDefError(data) {
  return Error(`Could not find a matching row definition for the provided row data: ${JSON.stringify(data)}`);
}
function getTableMissingRowDefsError() {
  return Error("Missing definitions for header, footer, and row; cannot determine which columns should be rendered.");
}
function getTableUnknownDataSourceError() {
  return Error(`Provided data source did not match an array, Observable, or DataSource`);
}
function getTableTextColumnMissingParentTableError() {
  return Error(`Text column could not find a parent table for registration.`);
}
function getTableTextColumnMissingNameError() {
  return Error(`Table text column must have a name.`);
}
var STICKY_POSITIONING_LISTENER = new InjectionToken("STICKY_POSITIONING_LISTENER");
var CdkRecycleRows = class _CdkRecycleRows {
  static \u0275fac = function CdkRecycleRows_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkRecycleRows)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkRecycleRows,
    selectors: [["cdk-table", "recycleRows", ""], ["table", "cdk-table", "", "recycleRows", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkRecycleRows, [{
    type: Directive,
    args: [{
      selector: "cdk-table[recycleRows], table[cdk-table][recycleRows]"
    }]
  }], null, null);
})();
var DataRowOutlet = class _DataRowOutlet {
  viewContainer = inject(ViewContainerRef);
  elementRef = inject(ElementRef);
  constructor() {
    const table = inject(CDK_TABLE);
    table._rowOutlet = this;
    table._outletAssigned();
  }
  static \u0275fac = function DataRowOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DataRowOutlet)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _DataRowOutlet,
    selectors: [["", "rowOutlet", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[rowOutlet]"
    }]
  }], () => [], null);
})();
var HeaderRowOutlet = class _HeaderRowOutlet {
  viewContainer = inject(ViewContainerRef);
  elementRef = inject(ElementRef);
  constructor() {
    const table = inject(CDK_TABLE);
    table._headerRowOutlet = this;
    table._outletAssigned();
  }
  static \u0275fac = function HeaderRowOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderRowOutlet)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _HeaderRowOutlet,
    selectors: [["", "headerRowOutlet", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[headerRowOutlet]"
    }]
  }], () => [], null);
})();
var FooterRowOutlet = class _FooterRowOutlet {
  viewContainer = inject(ViewContainerRef);
  elementRef = inject(ElementRef);
  constructor() {
    const table = inject(CDK_TABLE);
    table._footerRowOutlet = this;
    table._outletAssigned();
  }
  static \u0275fac = function FooterRowOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterRowOutlet)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FooterRowOutlet,
    selectors: [["", "footerRowOutlet", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[footerRowOutlet]"
    }]
  }], () => [], null);
})();
var NoDataRowOutlet = class _NoDataRowOutlet {
  viewContainer = inject(ViewContainerRef);
  elementRef = inject(ElementRef);
  constructor() {
    const table = inject(CDK_TABLE);
    table._noDataRowOutlet = this;
    table._outletAssigned();
  }
  static \u0275fac = function NoDataRowOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoDataRowOutlet)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NoDataRowOutlet,
    selectors: [["", "noDataRowOutlet", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoDataRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[noDataRowOutlet]"
    }]
  }], () => [], null);
})();
var CdkTable = class _CdkTable {
  _differs = inject(IterableDiffers);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _platform = inject(Platform);
  _viewRepeater;
  _viewportRuler = inject(ViewportRuler);
  _injector = inject(Injector);
  _virtualScrollViewport = inject(CDK_VIRTUAL_SCROLL_VIEWPORT, {
    optional: true,
    host: true
  });
  _positionListener = inject(STICKY_POSITIONING_LISTENER, {
    optional: true
  }) || inject(STICKY_POSITIONING_LISTENER, {
    optional: true,
    skipSelf: true
  });
  _document = inject(DOCUMENT);
  _data;
  _renderedRange;
  _onDestroy = new Subject();
  _renderRows;
  _renderChangeSubscription = null;
  _columnDefsByName = /* @__PURE__ */ new Map();
  _rowDefs;
  _headerRowDefs;
  _footerRowDefs;
  _dataDiffer;
  _defaultRowDef = null;
  _customColumnDefs = /* @__PURE__ */ new Set();
  _customRowDefs = /* @__PURE__ */ new Set();
  _customHeaderRowDefs = /* @__PURE__ */ new Set();
  _customFooterRowDefs = /* @__PURE__ */ new Set();
  _customNoDataRow = null;
  _headerRowDefChanged = true;
  _footerRowDefChanged = true;
  _stickyColumnStylesNeedReset = true;
  _forceRecalculateCellWidths = true;
  _cachedRenderRowsMap = /* @__PURE__ */ new Map();
  _isNativeHtmlTable;
  _stickyStyler;
  stickyCssClass = "cdk-table-sticky";
  needsPositionStickyOnElement = true;
  _isServer;
  _isShowingNoDataRow = false;
  _hasAllOutlets = false;
  _hasInitialized = false;
  _headerRowStickyUpdates = new Subject();
  _footerRowStickyUpdates = new Subject();
  _disableVirtualScrolling = false;
  _getCellRole() {
    if (this._cellRoleInternal === void 0) {
      const tableRole = this._elementRef.nativeElement.getAttribute("role");
      return tableRole === "grid" || tableRole === "treegrid" ? "gridcell" : "cell";
    }
    return this._cellRoleInternal;
  }
  _cellRoleInternal = void 0;
  get trackBy() {
    return this._trackByFn;
  }
  set trackBy(fn) {
    if ((typeof ngDevMode === "undefined" || ngDevMode) && fn != null && typeof fn !== "function") {
      console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
    }
    this._trackByFn = fn;
  }
  _trackByFn;
  get dataSource() {
    return this._dataSource;
  }
  set dataSource(dataSource) {
    if (this._dataSource !== dataSource) {
      this._switchDataSource(dataSource);
      this._changeDetectorRef.markForCheck();
    }
  }
  _dataSource;
  _dataSourceChanges = new Subject();
  _dataStream = new Subject();
  get multiTemplateDataRows() {
    return this._multiTemplateDataRows;
  }
  set multiTemplateDataRows(value) {
    this._multiTemplateDataRows = value;
    if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
      this._forceRenderDataRows();
      this.updateStickyColumnStyles();
    }
  }
  _multiTemplateDataRows = false;
  get fixedLayout() {
    return this._virtualScrollEnabled() ? true : this._fixedLayout;
  }
  set fixedLayout(value) {
    this._fixedLayout = value;
    this._forceRecalculateCellWidths = true;
    this._stickyColumnStylesNeedReset = true;
  }
  _fixedLayout = false;
  recycleRows = false;
  contentChanged = new EventEmitter();
  viewChange = new BehaviorSubject({
    start: 0,
    end: Number.MAX_VALUE
  });
  _rowOutlet;
  _headerRowOutlet;
  _footerRowOutlet;
  _noDataRowOutlet;
  _contentColumnDefs;
  _contentRowDefs;
  _contentHeaderRowDefs;
  _contentFooterRowDefs;
  _noDataRow;
  constructor() {
    const role = inject(new HostAttributeToken("role"), {
      optional: true
    });
    if (!role) {
      this._elementRef.nativeElement.setAttribute("role", "table");
    }
    this._isServer = !this._platform.isBrowser;
    this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === "TABLE";
    this._dataDiffer = this._differs.find([]).create((_i, dataRow) => {
      return this.trackBy ? this.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
    });
  }
  ngOnInit() {
    this._setupStickyStyler();
    this._viewportRuler.change().pipe(takeUntil(this._onDestroy)).subscribe(() => {
      this._forceRecalculateCellWidths = true;
    });
  }
  ngAfterContentInit() {
    this._viewRepeater = this.recycleRows || this._virtualScrollEnabled() ? new _RecycleViewRepeaterStrategy() : new _DisposeViewRepeaterStrategy();
    if (this._virtualScrollEnabled()) {
      this._setupVirtualScrolling(this._virtualScrollViewport);
    }
    this._hasInitialized = true;
  }
  ngAfterContentChecked() {
    if (this._canRender()) {
      this._render();
    }
  }
  ngOnDestroy() {
    this._stickyStyler?.destroy();
    [this._rowOutlet?.viewContainer, this._headerRowOutlet?.viewContainer, this._footerRowOutlet?.viewContainer, this._cachedRenderRowsMap, this._customColumnDefs, this._customRowDefs, this._customHeaderRowDefs, this._customFooterRowDefs, this._columnDefsByName].forEach((def) => {
      def?.clear();
    });
    this._headerRowDefs = [];
    this._footerRowDefs = [];
    this._defaultRowDef = null;
    this._headerRowStickyUpdates.complete();
    this._footerRowStickyUpdates.complete();
    this._onDestroy.next();
    this._onDestroy.complete();
    if (isDataSource(this.dataSource)) {
      this.dataSource.disconnect(this);
    }
  }
  renderRows() {
    this._renderRows = this._getAllRenderRows();
    const changes = this._dataDiffer.diff(this._renderRows);
    if (!changes) {
      this._updateNoDataRow();
      this.contentChanged.next();
      return;
    }
    const viewContainer = this._rowOutlet.viewContainer;
    this._viewRepeater.applyChanges(changes, viewContainer, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record.item, currentIndex), (record) => record.item.data, (change) => {
      if (change.operation === _ViewRepeaterOperation.INSERTED && change.context) {
        this._renderCellTemplateForItem(change.record.item.rowDef, change.context);
      }
    });
    this._updateRowIndexContext();
    changes.forEachIdentityChange((record) => {
      const rowView = viewContainer.get(record.currentIndex);
      rowView.context.$implicit = record.item.data;
    });
    this._updateNoDataRow();
    this.contentChanged.next();
    this.updateStickyColumnStyles();
  }
  addColumnDef(columnDef) {
    this._customColumnDefs.add(columnDef);
  }
  removeColumnDef(columnDef) {
    this._customColumnDefs.delete(columnDef);
  }
  addRowDef(rowDef) {
    this._customRowDefs.add(rowDef);
  }
  removeRowDef(rowDef) {
    this._customRowDefs.delete(rowDef);
  }
  addHeaderRowDef(headerRowDef) {
    this._customHeaderRowDefs.add(headerRowDef);
    this._headerRowDefChanged = true;
  }
  removeHeaderRowDef(headerRowDef) {
    this._customHeaderRowDefs.delete(headerRowDef);
    this._headerRowDefChanged = true;
  }
  addFooterRowDef(footerRowDef) {
    this._customFooterRowDefs.add(footerRowDef);
    this._footerRowDefChanged = true;
  }
  removeFooterRowDef(footerRowDef) {
    this._customFooterRowDefs.delete(footerRowDef);
    this._footerRowDefChanged = true;
  }
  setNoDataRow(noDataRow) {
    this._customNoDataRow = noDataRow;
  }
  updateStickyHeaderRowStyles() {
    const headerRows = this._getRenderedRows(this._headerRowOutlet);
    if (this._isNativeHtmlTable) {
      const thead = closestTableSection(this._headerRowOutlet, "thead");
      if (thead) {
        thead.style.display = headerRows.length ? "" : "none";
      }
    }
    const stickyStates = this._headerRowDefs.map((def) => def.sticky);
    this._stickyStyler.clearStickyPositioning(headerRows, ["top"]);
    this._stickyStyler.stickRows(headerRows, stickyStates, "top");
    this._headerRowDefs.forEach((def) => def.resetStickyChanged());
  }
  updateStickyFooterRowStyles() {
    const footerRows = this._getRenderedRows(this._footerRowOutlet);
    if (this._isNativeHtmlTable) {
      const tfoot = closestTableSection(this._footerRowOutlet, "tfoot");
      if (tfoot) {
        tfoot.style.display = footerRows.length ? "" : "none";
      }
    }
    const stickyStates = this._footerRowDefs.map((def) => def.sticky);
    this._stickyStyler.clearStickyPositioning(footerRows, ["bottom"]);
    this._stickyStyler.stickRows(footerRows, stickyStates, "bottom");
    this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates);
    this._footerRowDefs.forEach((def) => def.resetStickyChanged());
  }
  updateStickyColumnStyles() {
    const headerRows = this._getRenderedRows(this._headerRowOutlet);
    const dataRows = this._getRenderedRows(this._rowOutlet);
    const footerRows = this._getRenderedRows(this._footerRowOutlet);
    if (this._isNativeHtmlTable && !this.fixedLayout || this._stickyColumnStylesNeedReset) {
      this._stickyStyler.clearStickyPositioning([...headerRows, ...dataRows, ...footerRows], ["left", "right"]);
      this._stickyColumnStylesNeedReset = false;
    }
    headerRows.forEach((headerRow, i) => {
      this._addStickyColumnStyles([headerRow], this._headerRowDefs[i]);
    });
    this._rowDefs.forEach((rowDef) => {
      const rows = [];
      for (let i = 0; i < dataRows.length; i++) {
        if (this._renderRows[i].rowDef === rowDef) {
          rows.push(dataRows[i]);
        }
      }
      this._addStickyColumnStyles(rows, rowDef);
    });
    footerRows.forEach((footerRow, i) => {
      this._addStickyColumnStyles([footerRow], this._footerRowDefs[i]);
    });
    Array.from(this._columnDefsByName.values()).forEach((def) => def.resetStickyChanged());
  }
  stickyColumnsUpdated(update) {
    this._positionListener?.stickyColumnsUpdated(update);
  }
  stickyEndColumnsUpdated(update) {
    this._positionListener?.stickyEndColumnsUpdated(update);
  }
  stickyHeaderRowsUpdated(update) {
    this._headerRowStickyUpdates.next(update);
    this._positionListener?.stickyHeaderRowsUpdated(update);
  }
  stickyFooterRowsUpdated(update) {
    this._footerRowStickyUpdates.next(update);
    this._positionListener?.stickyFooterRowsUpdated(update);
  }
  _outletAssigned() {
    if (!this._hasAllOutlets && this._rowOutlet && this._headerRowOutlet && this._footerRowOutlet && this._noDataRowOutlet) {
      this._hasAllOutlets = true;
      if (this._canRender()) {
        this._render();
      }
    }
  }
  _canRender() {
    return this._hasAllOutlets && this._hasInitialized;
  }
  _render() {
    this._cacheRowDefs();
    this._cacheColumnDefs();
    if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableMissingRowDefsError();
    }
    const columnsChanged = this._renderUpdatedColumns();
    const rowDefsChanged = columnsChanged || this._headerRowDefChanged || this._footerRowDefChanged;
    this._stickyColumnStylesNeedReset = this._stickyColumnStylesNeedReset || rowDefsChanged;
    this._forceRecalculateCellWidths = rowDefsChanged;
    if (this._headerRowDefChanged) {
      this._forceRenderHeaderRows();
      this._headerRowDefChanged = false;
    }
    if (this._footerRowDefChanged) {
      this._forceRenderFooterRows();
      this._footerRowDefChanged = false;
    }
    if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
      this._observeRenderChanges();
    } else if (this._stickyColumnStylesNeedReset) {
      this.updateStickyColumnStyles();
    }
    this._checkStickyStates();
  }
  _getAllRenderRows() {
    if (!Array.isArray(this._data) || !this._renderedRange) {
      return [];
    }
    const renderRows = [];
    const end = Math.min(this._data.length, this._renderedRange.end);
    const prevCachedRenderRows = this._cachedRenderRowsMap;
    this._cachedRenderRowsMap = /* @__PURE__ */ new Map();
    for (let i = this._renderedRange.start; i < end; i++) {
      const data = this._data[i];
      const renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));
      if (!this._cachedRenderRowsMap.has(data)) {
        this._cachedRenderRowsMap.set(data, /* @__PURE__ */ new WeakMap());
      }
      for (let j = 0; j < renderRowsForData.length; j++) {
        let renderRow = renderRowsForData[j];
        const cache = this._cachedRenderRowsMap.get(renderRow.data);
        if (cache.has(renderRow.rowDef)) {
          cache.get(renderRow.rowDef).push(renderRow);
        } else {
          cache.set(renderRow.rowDef, [renderRow]);
        }
        renderRows.push(renderRow);
      }
    }
    return renderRows;
  }
  _getRenderRowsForData(data, dataIndex, cache) {
    const rowDefs = this._getRowDefs(data, dataIndex);
    return rowDefs.map((rowDef) => {
      const cachedRenderRows = cache && cache.has(rowDef) ? cache.get(rowDef) : [];
      if (cachedRenderRows.length) {
        const dataRow = cachedRenderRows.shift();
        dataRow.dataIndex = dataIndex;
        return dataRow;
      } else {
        return {
          data,
          rowDef,
          dataIndex
        };
      }
    });
  }
  _cacheColumnDefs() {
    this._columnDefsByName.clear();
    const columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
    columnDefs.forEach((columnDef) => {
      if (this._columnDefsByName.has(columnDef.name) && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw getTableDuplicateColumnNameError(columnDef.name);
      }
      this._columnDefsByName.set(columnDef.name, columnDef);
    });
  }
  _cacheRowDefs() {
    this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
    this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
    this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs);
    const defaultRowDefs = this._rowDefs.filter((def) => !def.when);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (this._virtualScrollEnabled() && this._rowDefs.some((def) => def.when)) {
        throw new Error("Conditional row definitions via the `when` input are not supported when virtual scrolling is enabled, at the moment.");
      }
      if (!this.multiTemplateDataRows && defaultRowDefs.length > 1) {
        throw getTableMultipleDefaultRowDefsError();
      }
    }
    this._defaultRowDef = defaultRowDefs[0];
  }
  _renderUpdatedColumns() {
    const columnsDiffReducer = (acc, def) => {
      const diff = !!def.getColumnsDiff();
      return acc || diff;
    };
    const dataColumnsChanged = this._rowDefs.reduce(columnsDiffReducer, false);
    if (dataColumnsChanged) {
      this._forceRenderDataRows();
    }
    const headerColumnsChanged = this._headerRowDefs.reduce(columnsDiffReducer, false);
    if (headerColumnsChanged) {
      this._forceRenderHeaderRows();
    }
    const footerColumnsChanged = this._footerRowDefs.reduce(columnsDiffReducer, false);
    if (footerColumnsChanged) {
      this._forceRenderFooterRows();
    }
    return dataColumnsChanged || headerColumnsChanged || footerColumnsChanged;
  }
  _switchDataSource(dataSource) {
    this._data = [];
    if (isDataSource(this.dataSource)) {
      this.dataSource.disconnect(this);
    }
    if (this._renderChangeSubscription) {
      this._renderChangeSubscription.unsubscribe();
      this._renderChangeSubscription = null;
    }
    if (!dataSource) {
      if (this._dataDiffer) {
        this._dataDiffer.diff([]);
      }
      if (this._rowOutlet) {
        this._rowOutlet.viewContainer.clear();
      }
    }
    this._dataSource = dataSource;
  }
  _observeRenderChanges() {
    if (!this.dataSource) {
      return;
    }
    let dataStream;
    if (isDataSource(this.dataSource)) {
      dataStream = this.dataSource.connect(this);
    } else if (isObservable(this.dataSource)) {
      dataStream = this.dataSource;
    } else if (Array.isArray(this.dataSource)) {
      dataStream = of(this.dataSource);
    }
    if (dataStream === void 0 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableUnknownDataSourceError();
    }
    this._renderChangeSubscription = combineLatest([dataStream, this.viewChange]).pipe(takeUntil(this._onDestroy)).subscribe(([data, range]) => {
      this._data = data || [];
      this._renderedRange = range;
      this._dataStream.next(data);
      this.renderRows();
    });
  }
  _forceRenderHeaderRows() {
    if (this._headerRowOutlet.viewContainer.length > 0) {
      this._headerRowOutlet.viewContainer.clear();
    }
    this._headerRowDefs.forEach((def, i) => this._renderRow(this._headerRowOutlet, def, i));
    this.updateStickyHeaderRowStyles();
  }
  _forceRenderFooterRows() {
    if (this._footerRowOutlet.viewContainer.length > 0) {
      this._footerRowOutlet.viewContainer.clear();
    }
    this._footerRowDefs.forEach((def, i) => this._renderRow(this._footerRowOutlet, def, i));
    this.updateStickyFooterRowStyles();
  }
  _addStickyColumnStyles(rows, rowDef) {
    const columnDefs = Array.from(rowDef?.columns || []).map((columnName) => {
      const columnDef = this._columnDefsByName.get(columnName);
      if (!columnDef && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw getTableUnknownColumnError(columnName);
      }
      return columnDef;
    });
    const stickyStartStates = columnDefs.map((columnDef) => columnDef.sticky);
    const stickyEndStates = columnDefs.map((columnDef) => columnDef.stickyEnd);
    this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates, !this.fixedLayout || this._forceRecalculateCellWidths);
  }
  _getRenderedRows(rowOutlet) {
    const renderedRows = [];
    for (let i = 0; i < rowOutlet.viewContainer.length; i++) {
      const viewRef = rowOutlet.viewContainer.get(i);
      renderedRows.push(viewRef.rootNodes[0]);
    }
    return renderedRows;
  }
  _getRowDefs(data, dataIndex) {
    if (this._rowDefs.length === 1) {
      return [this._rowDefs[0]];
    }
    let rowDefs = [];
    if (this.multiTemplateDataRows) {
      rowDefs = this._rowDefs.filter((def) => !def.when || def.when(dataIndex, data));
    } else {
      let rowDef = this._rowDefs.find((def) => def.when && def.when(dataIndex, data)) || this._defaultRowDef;
      if (rowDef) {
        rowDefs.push(rowDef);
      }
    }
    if (!rowDefs.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableMissingMatchingRowDefError(data);
    }
    return rowDefs;
  }
  _getEmbeddedViewArgs(renderRow, index) {
    const rowDef = renderRow.rowDef;
    const context = {
      $implicit: renderRow.data
    };
    return {
      templateRef: rowDef.template,
      context,
      index
    };
  }
  _renderRow(outlet, rowDef, index, context = {}) {
    const view = outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);
    this._renderCellTemplateForItem(rowDef, context);
    return view;
  }
  _renderCellTemplateForItem(rowDef, context) {
    for (let cellTemplate of this._getCellTemplates(rowDef)) {
      if (CdkCellOutlet.mostRecentCellOutlet) {
        CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
      }
    }
    this._changeDetectorRef.markForCheck();
  }
  _updateRowIndexContext() {
    const viewContainer = this._rowOutlet.viewContainer;
    for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
      const viewRef = viewContainer.get(renderIndex);
      const context = viewRef.context;
      context.count = count;
      context.first = renderIndex === 0;
      context.last = renderIndex === count - 1;
      context.even = renderIndex % 2 === 0;
      context.odd = !context.even;
      if (this.multiTemplateDataRows) {
        context.dataIndex = this._renderRows[renderIndex].dataIndex;
        context.renderIndex = renderIndex;
      } else {
        context.index = this._renderRows[renderIndex].dataIndex;
      }
    }
  }
  _getCellTemplates(rowDef) {
    if (!rowDef || !rowDef.columns) {
      return [];
    }
    return Array.from(rowDef.columns, (columnId) => {
      const column = this._columnDefsByName.get(columnId);
      if (!column && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw getTableUnknownColumnError(columnId);
      }
      return rowDef.extractCellTemplate(column);
    });
  }
  _forceRenderDataRows() {
    this._dataDiffer.diff([]);
    this._rowOutlet.viewContainer.clear();
    this.renderRows();
  }
  _checkStickyStates() {
    const stickyCheckReducer = (acc, d) => {
      return acc || d.hasStickyChanged();
    };
    if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
      this.updateStickyHeaderRowStyles();
    }
    if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
      this.updateStickyFooterRowStyles();
    }
    if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
      this._stickyColumnStylesNeedReset = true;
      this.updateStickyColumnStyles();
    }
  }
  _setupStickyStyler() {
    const direction = this._dir ? this._dir.value : "ltr";
    const injector = this._injector;
    this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, this._platform.isBrowser, this.needsPositionStickyOnElement, direction, this, injector);
    (this._dir ? this._dir.change : of()).pipe(takeUntil(this._onDestroy)).subscribe((value) => {
      this._stickyStyler.direction = value;
      this.updateStickyColumnStyles();
    });
  }
  _setupVirtualScrolling(viewport) {
    const virtualScrollScheduler = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
    this.viewChange.next({
      start: 0,
      end: 0
    });
    viewport.renderedRangeStream.pipe(auditTime(0, virtualScrollScheduler), takeUntil(this._onDestroy)).subscribe(this.viewChange);
    viewport.attach({
      dataStream: this._dataStream,
      measureRangeSize: (range, orientation) => this._measureRangeSize(range, orientation)
    });
    combineLatest([viewport.renderedContentOffset, this._headerRowStickyUpdates]).pipe(takeUntil(this._onDestroy)).subscribe(([offsetFromTop, update]) => {
      if (!update.sizes || !update.offsets || !update.elements) {
        return;
      }
      for (let i = 0; i < update.elements.length; i++) {
        const cells = update.elements[i];
        if (cells) {
          const current = update.offsets[i];
          const offset = offsetFromTop !== 0 ? Math.max(offsetFromTop - current, current) : -current;
          for (const cell of cells) {
            cell.style.top = `${-offset}px`;
          }
        }
      }
    });
    combineLatest([viewport.renderedContentOffset, this._footerRowStickyUpdates]).pipe(takeUntil(this._onDestroy)).subscribe(([offsetFromTop, update]) => {
      if (!update.sizes || !update.offsets || !update.elements) {
        return;
      }
      for (let i = 0; i < update.elements.length; i++) {
        const cells = update.elements[i];
        if (cells) {
          for (const cell of cells) {
            cell.style.bottom = `${offsetFromTop + update.offsets[i]}px`;
          }
        }
      }
    });
  }
  _getOwnDefs(items) {
    return items.filter((item) => !item._table || item._table === this);
  }
  _updateNoDataRow() {
    const noDataRow = this._customNoDataRow || this._noDataRow;
    if (!noDataRow) {
      return;
    }
    const shouldShow = this._rowOutlet.viewContainer.length === 0;
    if (shouldShow === this._isShowingNoDataRow) {
      return;
    }
    const container = this._noDataRowOutlet.viewContainer;
    if (shouldShow) {
      const view = container.createEmbeddedView(noDataRow.templateRef);
      const rootNode = view.rootNodes[0];
      if (view.rootNodes.length === 1 && rootNode?.nodeType === this._document.ELEMENT_NODE) {
        rootNode.setAttribute("role", "row");
        rootNode.classList.add(...noDataRow._contentClassNames);
        const cells = rootNode.querySelectorAll(noDataRow._cellSelector);
        for (let i = 0; i < cells.length; i++) {
          cells[i].classList.add(...noDataRow._cellClassNames);
        }
      }
    } else {
      container.clear();
    }
    this._isShowingNoDataRow = shouldShow;
    this._changeDetectorRef.markForCheck();
  }
  _measureRangeSize(range, orientation) {
    if (range.start >= range.end || orientation !== "vertical") {
      return 0;
    }
    const renderedRange = this.viewChange.value;
    const viewContainerRef = this._rowOutlet.viewContainer;
    if ((range.start < renderedRange.start || range.end > renderedRange.end) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Error: attempted to measure an item that isn't rendered.`);
    }
    const renderedStartIndex = range.start - renderedRange.start;
    const rangeLen = range.end - range.start;
    let firstNode;
    let lastNode;
    for (let i = 0; i < rangeLen; i++) {
      const view = viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        firstNode = lastNode = view.rootNodes[0];
        break;
      }
    }
    for (let i = rangeLen - 1; i > -1; i--) {
      const view = viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        lastNode = view.rootNodes[view.rootNodes.length - 1];
        break;
      }
    }
    const startRect = firstNode?.getBoundingClientRect?.();
    const endRect = lastNode?.getBoundingClientRect?.();
    return startRect && endRect ? endRect.bottom - startRect.top : 0;
  }
  _virtualScrollEnabled() {
    return !this._disableVirtualScrolling && this._virtualScrollViewport != null;
  }
  static \u0275fac = function CdkTable_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTable)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkTable,
    selectors: [["cdk-table"], ["table", "cdk-table", ""]],
    contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, CdkNoDataRow, 5)(dirIndex, CdkColumnDef, 5)(dirIndex, CdkRowDef, 5)(dirIndex, CdkHeaderRowDef, 5)(dirIndex, CdkFooterRowDef, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._noDataRow = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentColumnDefs = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentRowDefs = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentHeaderRowDefs = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentFooterRowDefs = _t);
      }
    },
    hostAttrs: [1, "cdk-table"],
    hostVars: 2,
    hostBindings: function CdkTable_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("cdk-table-fixed-layout", ctx.fixedLayout);
      }
    },
    inputs: {
      trackBy: "trackBy",
      dataSource: "dataSource",
      multiTemplateDataRows: [2, "multiTemplateDataRows", "multiTemplateDataRows", booleanAttribute],
      fixedLayout: [2, "fixedLayout", "fixedLayout", booleanAttribute],
      recycleRows: [2, "recycleRows", "recycleRows", booleanAttribute]
    },
    outputs: {
      contentChanged: "contentChanged"
    },
    exportAs: ["cdkTable"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_TABLE,
      useExisting: _CdkTable
    }, {
      provide: STICKY_POSITIONING_LISTENER,
      useValue: null
    }])],
    ngContentSelectors: _c12,
    decls: 5,
    vars: 2,
    consts: [["role", "rowgroup"], ["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
    template: function CdkTable_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c02);
        \u0275\u0275projection(0);
        \u0275\u0275projection(1, 1);
        \u0275\u0275conditionalCreate(2, CdkTable_Conditional_2_Template, 1, 0);
        \u0275\u0275conditionalCreate(3, CdkTable_Conditional_3_Template, 7, 0)(4, CdkTable_Conditional_4_Template, 4, 0);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx._isServer ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._isNativeHtmlTable ? 3 : 4);
      }
    },
    dependencies: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
    styles: [".cdk-table-fixed-layout {\n  table-layout: fixed;\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTable, [{
    type: Component,
    args: [{
      selector: "cdk-table, table[cdk-table]",
      exportAs: "cdkTable",
      template: `
    <ng-content select="caption"/>
    <ng-content select="colgroup, col"/>

    <!--
      Unprojected content throws a hydration error so we need this to capture it.
      It gets removed on the client so it doesn't affect the layout.
    -->
    @if (_isServer) {
      <ng-content/>
    }

    @if (_isNativeHtmlTable) {
      <thead role="rowgroup">
        <ng-container headerRowOutlet/>
      </thead>
      <tbody role="rowgroup">
        <ng-container rowOutlet/>
        <ng-container noDataRowOutlet/>
      </tbody>
      <tfoot role="rowgroup">
        <ng-container footerRowOutlet/>
      </tfoot>
    } @else {
      <ng-container headerRowOutlet/>
      <ng-container rowOutlet/>
      <ng-container noDataRowOutlet/>
      <ng-container footerRowOutlet/>
    }
  `,
      host: {
        "class": "cdk-table",
        "[class.cdk-table-fixed-layout]": "fixedLayout"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [{
        provide: CDK_TABLE,
        useExisting: CdkTable
      }, {
        provide: STICKY_POSITIONING_LISTENER,
        useValue: null
      }],
      imports: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
      styles: [".cdk-table-fixed-layout {\n  table-layout: fixed;\n}\n"]
    }]
  }], () => [], {
    trackBy: [{
      type: Input
    }],
    dataSource: [{
      type: Input
    }],
    multiTemplateDataRows: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fixedLayout: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    recycleRows: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    contentChanged: [{
      type: Output
    }],
    _contentColumnDefs: [{
      type: ContentChildren,
      args: [CdkColumnDef, {
        descendants: true
      }]
    }],
    _contentRowDefs: [{
      type: ContentChildren,
      args: [CdkRowDef, {
        descendants: true
      }]
    }],
    _contentHeaderRowDefs: [{
      type: ContentChildren,
      args: [CdkHeaderRowDef, {
        descendants: true
      }]
    }],
    _contentFooterRowDefs: [{
      type: ContentChildren,
      args: [CdkFooterRowDef, {
        descendants: true
      }]
    }],
    _noDataRow: [{
      type: ContentChild,
      args: [CdkNoDataRow]
    }]
  });
})();
function mergeArrayAndSet(array, set) {
  return array.concat(Array.from(set));
}
function closestTableSection(outlet, section) {
  const uppercaseSection = section.toUpperCase();
  let current = outlet.viewContainer.element.nativeElement;
  while (current) {
    const nodeName = current.nodeType === 1 ? current.nodeName : null;
    if (nodeName === uppercaseSection) {
      return current;
    } else if (nodeName === "TABLE") {
      break;
    }
    current = current.parentNode;
  }
  return null;
}
var CdkTextColumn = class _CdkTextColumn {
  _table = inject(CdkTable, {
    optional: true
  });
  _options = inject(TEXT_COLUMN_OPTIONS, {
    optional: true
  });
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
    this._syncColumnDefName();
  }
  _name;
  headerText;
  dataAccessor;
  justify = "start";
  columnDef;
  cell;
  headerCell;
  constructor() {
    this._options = this._options || {};
  }
  ngOnInit() {
    this._syncColumnDefName();
    if (this.headerText === void 0) {
      this.headerText = this._createDefaultHeaderText();
    }
    if (!this.dataAccessor) {
      this.dataAccessor = this._options.defaultDataAccessor || ((data, name) => data[name]);
    }
    if (this._table) {
      this.columnDef.cell = this.cell;
      this.columnDef.headerCell = this.headerCell;
      this._table.addColumnDef(this.columnDef);
    } else if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw getTableTextColumnMissingParentTableError();
    }
  }
  ngOnDestroy() {
    if (this._table) {
      this._table.removeColumnDef(this.columnDef);
    }
  }
  _createDefaultHeaderText() {
    const name = this.name;
    if (!name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableTextColumnMissingNameError();
    }
    if (this._options && this._options.defaultHeaderTextTransform) {
      return this._options.defaultHeaderTextTransform(name);
    }
    return name[0].toUpperCase() + name.slice(1);
  }
  _syncColumnDefName() {
    if (this.columnDef) {
      this.columnDef.name = this.name;
    }
  }
  static \u0275fac = function CdkTextColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTextColumn)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkTextColumn,
    selectors: [["cdk-text-column"]],
    viewQuery: function CdkTextColumn_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(CdkColumnDef, 7)(CdkCellDef, 7)(CdkHeaderCellDef, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.columnDef = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cell = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerCell = _t.first);
      }
    },
    inputs: {
      name: "name",
      headerText: "headerText",
      dataAccessor: "dataAccessor",
      justify: "justify"
    },
    decls: 3,
    vars: 0,
    consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]],
    template: function CdkTextColumn_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainerStart(0, 0);
        \u0275\u0275template(1, CdkTextColumn_th_1_Template, 2, 3, "th", 1)(2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);
        \u0275\u0275elementContainerEnd();
      }
    },
    dependencies: [CdkColumnDef, CdkHeaderCellDef, CdkHeaderCell, CdkCellDef, CdkCell],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTextColumn, [{
    type: Component,
    args: [{
      selector: "cdk-text-column",
      template: `
    <ng-container cdkColumnDef>
      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td cdk-cell *cdkCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      imports: [CdkColumnDef, CdkHeaderCellDef, CdkHeaderCell, CdkCellDef, CdkCell]
    }]
  }], () => [], {
    name: [{
      type: Input
    }],
    headerText: [{
      type: Input
    }],
    dataAccessor: [{
      type: Input
    }],
    justify: [{
      type: Input
    }],
    columnDef: [{
      type: ViewChild,
      args: [CdkColumnDef, {
        static: true
      }]
    }],
    cell: [{
      type: ViewChild,
      args: [CdkCellDef, {
        static: true
      }]
    }],
    headerCell: [{
      type: ViewChild,
      args: [CdkHeaderCellDef, {
        static: true
      }]
    }]
  });
})();
var EXPORTED_DECLARATIONS = [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, CdkRecycleRows, NoDataRowOutlet];
var CdkTableModule = class _CdkTableModule {
  static \u0275fac = function CdkTableModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTableModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CdkTableModule,
    imports: [ScrollingModule, CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, CdkRecycleRows, NoDataRowOutlet],
    exports: [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, CdkRecycleRows, NoDataRowOutlet]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ScrollingModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTableModule, [{
    type: NgModule,
    args: [{
      exports: EXPORTED_DECLARATIONS,
      imports: [ScrollingModule, ...EXPORTED_DECLARATIONS]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/table.mjs
var _c03 = [[["caption"]], [["colgroup"], ["col"]], "*"];
var _c13 = ["caption", "colgroup, col", "*"];
function MatTable_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 2);
  }
}
function MatTable_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "thead", 0);
    \u0275\u0275elementContainer(1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "tbody", 2);
    \u0275\u0275elementContainer(3, 3)(4, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "tfoot", 0);
    \u0275\u0275elementContainer(6, 5);
    \u0275\u0275elementEnd();
  }
}
function MatTable_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 1)(1, 3)(2, 4)(3, 5);
  }
}
function MatTextColumn_th_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", ctx_r0.justify);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.headerText, " ");
  }
}
function MatTextColumn_td_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", ctx_r0.justify);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.dataAccessor(data_r2, ctx_r0.name), " ");
  }
}
var MatRecycleRows = class _MatRecycleRows {
  static \u0275fac = function MatRecycleRows_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatRecycleRows)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatRecycleRows,
    selectors: [["mat-table", "recycleRows", ""], ["table", "mat-table", "", "recycleRows", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRecycleRows, [{
    type: Directive,
    args: [{
      selector: "mat-table[recycleRows], table[mat-table][recycleRows]"
    }]
  }], null, null);
})();
var MatTable = class _MatTable extends CdkTable {
  stickyCssClass = "mat-mdc-table-sticky";
  needsPositionStickyOnElement = false;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatTable_BaseFactory;
    return function MatTable_Factory(__ngFactoryType__) {
      return (\u0275MatTable_BaseFactory || (\u0275MatTable_BaseFactory = \u0275\u0275getInheritedFactory(_MatTable)))(__ngFactoryType__ || _MatTable);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatTable,
    selectors: [["mat-table"], ["table", "mat-table", ""]],
    hostAttrs: [1, "mat-mdc-table", "mdc-data-table__table"],
    hostVars: 2,
    hostBindings: function MatTable_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-table-fixed-layout", ctx.fixedLayout);
      }
    },
    exportAs: ["matTable"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkTable,
      useExisting: _MatTable
    }, {
      provide: CDK_TABLE,
      useExisting: _MatTable
    }, {
      provide: STICKY_POSITIONING_LISTENER,
      useValue: null
    }]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c13,
    decls: 5,
    vars: 2,
    consts: [["role", "rowgroup"], ["headerRowOutlet", ""], ["role", "rowgroup", 1, "mdc-data-table__content"], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
    template: function MatTable_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c03);
        \u0275\u0275projection(0);
        \u0275\u0275projection(1, 1);
        \u0275\u0275conditionalCreate(2, MatTable_Conditional_2_Template, 1, 0);
        \u0275\u0275conditionalCreate(3, MatTable_Conditional_3_Template, 7, 0)(4, MatTable_Conditional_4_Template, 4, 0);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx._isServer ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._isNativeHtmlTable ? 3 : 4);
      }
    },
    dependencies: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
    styles: [".mat-mdc-table-sticky {\n  position: sticky !important;\n}\n\nmat-table {\n  display: block;\n}\n\nmat-header-row {\n  min-height: var(--mat-table-header-container-height, 56px);\n}\n\nmat-row {\n  min-height: var(--mat-table-row-item-container-height, 52px);\n}\n\nmat-footer-row {\n  min-height: var(--mat-table-footer-container-height, 52px);\n}\n\nmat-row, mat-header-row, mat-footer-row {\n  display: flex;\n  border-width: 0;\n  border-bottom-width: 1px;\n  border-style: solid;\n  align-items: center;\n  box-sizing: border-box;\n}\n\nmat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {\n  padding-left: 24px;\n}\n[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {\n  padding-left: 0;\n  padding-right: 24px;\n}\nmat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {\n  padding-right: 24px;\n}\n[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {\n  padding-right: 0;\n  padding-left: 24px;\n}\n\nmat-cell, mat-header-cell, mat-footer-cell {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  word-wrap: break-word;\n  min-height: inherit;\n}\n\n.mat-mdc-table {\n  min-width: 100%;\n  border: 0;\n  border-spacing: 0;\n  table-layout: auto;\n  white-space: normal;\n  background-color: var(--mat-table-background-color, var(--mat-sys-surface));\n}\n\n.mat-table-fixed-layout {\n  table-layout: fixed;\n}\n\n.mdc-data-table__cell {\n  box-sizing: border-box;\n  overflow: hidden;\n  text-align: start;\n  text-overflow: ellipsis;\n}\n\n.mdc-data-table__cell,\n.mdc-data-table__header-cell {\n  padding: 0 16px;\n}\n\n.mat-mdc-header-row {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  height: var(--mat-table-header-container-height, 56px);\n  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));\n  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));\n  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));\n  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));\n  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));\n}\n\n.mat-mdc-row {\n  height: var(--mat-table-row-item-container-height, 52px);\n  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));\n}\n\n.mat-mdc-row,\n.mdc-data-table__content {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));\n  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));\n  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));\n  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));\n}\n\n.mat-mdc-footer-row {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  height: var(--mat-table-footer-container-height, 52px);\n  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));\n  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));\n  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));\n  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));\n  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));\n  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));\n}\n\n.mat-mdc-header-cell {\n  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));\n  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);\n  border-bottom-style: solid;\n  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));\n  font-weight: inherit;\n  line-height: inherit;\n  box-sizing: border-box;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  outline: none;\n  text-align: start;\n}\n.mdc-data-table__row:last-child > .mat-mdc-header-cell {\n  border-bottom: none;\n}\n\n.mat-mdc-cell {\n  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));\n  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);\n  border-bottom-style: solid;\n  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));\n  line-height: inherit;\n}\n.mdc-data-table__row:last-child > .mat-mdc-cell {\n  border-bottom: none;\n}\n\n.mat-mdc-footer-cell {\n  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));\n}\n\nmat-row.mat-mdc-row,\nmat-header-row.mat-mdc-header-row,\nmat-footer-row.mat-mdc-footer-row {\n  border-bottom: none;\n}\n\n.mat-mdc-table tbody,\n.mat-mdc-table tfoot,\n.mat-mdc-table thead,\n.mat-mdc-cell,\n.mat-mdc-footer-cell,\n.mat-mdc-header-row,\n.mat-mdc-row,\n.mat-mdc-footer-row,\n.mat-mdc-table .mat-mdc-header-cell {\n  background: inherit;\n}\n\n.mat-mdc-table mat-header-row.mat-mdc-header-row,\n.mat-mdc-table mat-row.mat-mdc-row,\n.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {\n  height: unset;\n}\n\nmat-header-cell.mat-mdc-header-cell,\nmat-cell.mat-mdc-cell,\nmat-footer-cell.mat-mdc-footer-cell {\n  align-self: stretch;\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTable, [{
    type: Component,
    args: [{
      selector: "mat-table, table[mat-table]",
      exportAs: "matTable",
      template: `
    <ng-content select="caption"/>
    <ng-content select="colgroup, col"/>

    <!--
      Unprojected content throws a hydration error so we need this to capture it.
      It gets removed on the client so it doesn't affect the layout.
    -->
    @if (_isServer) {
      <ng-content/>
    }

    @if (_isNativeHtmlTable) {
      <thead role="rowgroup">
        <ng-container headerRowOutlet/>
      </thead>
      <tbody class="mdc-data-table__content" role="rowgroup">
        <ng-container rowOutlet/>
        <ng-container noDataRowOutlet/>
      </tbody>
      <tfoot role="rowgroup">
        <ng-container footerRowOutlet/>
      </tfoot>
    } @else {
      <ng-container headerRowOutlet/>
      <ng-container rowOutlet/>
      <ng-container noDataRowOutlet/>
      <ng-container footerRowOutlet/>
    }
  `,
      host: {
        "class": "mat-mdc-table mdc-data-table__table",
        "[class.mat-table-fixed-layout]": "fixedLayout"
      },
      providers: [{
        provide: CdkTable,
        useExisting: MatTable
      }, {
        provide: CDK_TABLE,
        useExisting: MatTable
      }, {
        provide: STICKY_POSITIONING_LISTENER,
        useValue: null
      }],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      imports: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
      styles: [".mat-mdc-table-sticky {\n  position: sticky !important;\n}\n\nmat-table {\n  display: block;\n}\n\nmat-header-row {\n  min-height: var(--mat-table-header-container-height, 56px);\n}\n\nmat-row {\n  min-height: var(--mat-table-row-item-container-height, 52px);\n}\n\nmat-footer-row {\n  min-height: var(--mat-table-footer-container-height, 52px);\n}\n\nmat-row, mat-header-row, mat-footer-row {\n  display: flex;\n  border-width: 0;\n  border-bottom-width: 1px;\n  border-style: solid;\n  align-items: center;\n  box-sizing: border-box;\n}\n\nmat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {\n  padding-left: 24px;\n}\n[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {\n  padding-left: 0;\n  padding-right: 24px;\n}\nmat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {\n  padding-right: 24px;\n}\n[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {\n  padding-right: 0;\n  padding-left: 24px;\n}\n\nmat-cell, mat-header-cell, mat-footer-cell {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  word-wrap: break-word;\n  min-height: inherit;\n}\n\n.mat-mdc-table {\n  min-width: 100%;\n  border: 0;\n  border-spacing: 0;\n  table-layout: auto;\n  white-space: normal;\n  background-color: var(--mat-table-background-color, var(--mat-sys-surface));\n}\n\n.mat-table-fixed-layout {\n  table-layout: fixed;\n}\n\n.mdc-data-table__cell {\n  box-sizing: border-box;\n  overflow: hidden;\n  text-align: start;\n  text-overflow: ellipsis;\n}\n\n.mdc-data-table__cell,\n.mdc-data-table__header-cell {\n  padding: 0 16px;\n}\n\n.mat-mdc-header-row {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  height: var(--mat-table-header-container-height, 56px);\n  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));\n  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));\n  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));\n  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));\n  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));\n}\n\n.mat-mdc-row {\n  height: var(--mat-table-row-item-container-height, 52px);\n  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));\n}\n\n.mat-mdc-row,\n.mdc-data-table__content {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));\n  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));\n  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));\n  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));\n}\n\n.mat-mdc-footer-row {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  height: var(--mat-table-footer-container-height, 52px);\n  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));\n  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));\n  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));\n  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));\n  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));\n  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));\n}\n\n.mat-mdc-header-cell {\n  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));\n  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);\n  border-bottom-style: solid;\n  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));\n  font-weight: inherit;\n  line-height: inherit;\n  box-sizing: border-box;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  outline: none;\n  text-align: start;\n}\n.mdc-data-table__row:last-child > .mat-mdc-header-cell {\n  border-bottom: none;\n}\n\n.mat-mdc-cell {\n  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));\n  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);\n  border-bottom-style: solid;\n  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));\n  line-height: inherit;\n}\n.mdc-data-table__row:last-child > .mat-mdc-cell {\n  border-bottom: none;\n}\n\n.mat-mdc-footer-cell {\n  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));\n}\n\nmat-row.mat-mdc-row,\nmat-header-row.mat-mdc-header-row,\nmat-footer-row.mat-mdc-footer-row {\n  border-bottom: none;\n}\n\n.mat-mdc-table tbody,\n.mat-mdc-table tfoot,\n.mat-mdc-table thead,\n.mat-mdc-cell,\n.mat-mdc-footer-cell,\n.mat-mdc-header-row,\n.mat-mdc-row,\n.mat-mdc-footer-row,\n.mat-mdc-table .mat-mdc-header-cell {\n  background: inherit;\n}\n\n.mat-mdc-table mat-header-row.mat-mdc-header-row,\n.mat-mdc-table mat-row.mat-mdc-row,\n.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {\n  height: unset;\n}\n\nmat-header-cell.mat-mdc-header-cell,\nmat-cell.mat-mdc-cell,\nmat-footer-cell.mat-mdc-footer-cell {\n  align-self: stretch;\n}\n"]
    }]
  }], null, null);
})();
var MatCellDef = class _MatCellDef extends CdkCellDef {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatCellDef_BaseFactory;
    return function MatCellDef_Factory(__ngFactoryType__) {
      return (\u0275MatCellDef_BaseFactory || (\u0275MatCellDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatCellDef)))(__ngFactoryType__ || _MatCellDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatCellDef,
    selectors: [["", "matCellDef", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkCellDef,
      useExisting: _MatCellDef
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCellDef, [{
    type: Directive,
    args: [{
      selector: "[matCellDef]",
      providers: [{
        provide: CdkCellDef,
        useExisting: MatCellDef
      }]
    }]
  }], null, null);
})();
var MatHeaderCellDef = class _MatHeaderCellDef extends CdkHeaderCellDef {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatHeaderCellDef_BaseFactory;
    return function MatHeaderCellDef_Factory(__ngFactoryType__) {
      return (\u0275MatHeaderCellDef_BaseFactory || (\u0275MatHeaderCellDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatHeaderCellDef)))(__ngFactoryType__ || _MatHeaderCellDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatHeaderCellDef,
    selectors: [["", "matHeaderCellDef", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkHeaderCellDef,
      useExisting: _MatHeaderCellDef
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderCellDef, [{
    type: Directive,
    args: [{
      selector: "[matHeaderCellDef]",
      providers: [{
        provide: CdkHeaderCellDef,
        useExisting: MatHeaderCellDef
      }]
    }]
  }], null, null);
})();
var MatFooterCellDef = class _MatFooterCellDef extends CdkFooterCellDef {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatFooterCellDef_BaseFactory;
    return function MatFooterCellDef_Factory(__ngFactoryType__) {
      return (\u0275MatFooterCellDef_BaseFactory || (\u0275MatFooterCellDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatFooterCellDef)))(__ngFactoryType__ || _MatFooterCellDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatFooterCellDef,
    selectors: [["", "matFooterCellDef", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkFooterCellDef,
      useExisting: _MatFooterCellDef
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterCellDef, [{
    type: Directive,
    args: [{
      selector: "[matFooterCellDef]",
      providers: [{
        provide: CdkFooterCellDef,
        useExisting: MatFooterCellDef
      }]
    }]
  }], null, null);
})();
var MatColumnDef = class _MatColumnDef extends CdkColumnDef {
  get name() {
    return this._name;
  }
  set name(name) {
    this._setNameInput(name);
  }
  _updateColumnCssClassName() {
    super._updateColumnCssClassName();
    this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatColumnDef_BaseFactory;
    return function MatColumnDef_Factory(__ngFactoryType__) {
      return (\u0275MatColumnDef_BaseFactory || (\u0275MatColumnDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatColumnDef)))(__ngFactoryType__ || _MatColumnDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatColumnDef,
    selectors: [["", "matColumnDef", ""]],
    inputs: {
      name: [0, "matColumnDef", "name"]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkColumnDef,
      useExisting: _MatColumnDef
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatColumnDef, [{
    type: Directive,
    args: [{
      selector: "[matColumnDef]",
      providers: [{
        provide: CdkColumnDef,
        useExisting: MatColumnDef
      }]
    }]
  }], null, {
    name: [{
      type: Input,
      args: ["matColumnDef"]
    }]
  });
})();
var MatHeaderCell = class _MatHeaderCell extends CdkHeaderCell {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatHeaderCell_BaseFactory;
    return function MatHeaderCell_Factory(__ngFactoryType__) {
      return (\u0275MatHeaderCell_BaseFactory || (\u0275MatHeaderCell_BaseFactory = \u0275\u0275getInheritedFactory(_MatHeaderCell)))(__ngFactoryType__ || _MatHeaderCell);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatHeaderCell,
    selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]],
    hostAttrs: ["role", "columnheader", 1, "mat-mdc-header-cell", "mdc-data-table__header-cell"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderCell, [{
    type: Directive,
    args: [{
      selector: "mat-header-cell, th[mat-header-cell]",
      host: {
        "class": "mat-mdc-header-cell mdc-data-table__header-cell",
        "role": "columnheader"
      }
    }]
  }], null, null);
})();
var MatFooterCell = class _MatFooterCell extends CdkFooterCell {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatFooterCell_BaseFactory;
    return function MatFooterCell_Factory(__ngFactoryType__) {
      return (\u0275MatFooterCell_BaseFactory || (\u0275MatFooterCell_BaseFactory = \u0275\u0275getInheritedFactory(_MatFooterCell)))(__ngFactoryType__ || _MatFooterCell);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatFooterCell,
    selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]],
    hostAttrs: [1, "mat-mdc-footer-cell", "mdc-data-table__cell"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterCell, [{
    type: Directive,
    args: [{
      selector: "mat-footer-cell, td[mat-footer-cell]",
      host: {
        "class": "mat-mdc-footer-cell mdc-data-table__cell"
      }
    }]
  }], null, null);
})();
var MatCell = class _MatCell extends CdkCell {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatCell_BaseFactory;
    return function MatCell_Factory(__ngFactoryType__) {
      return (\u0275MatCell_BaseFactory || (\u0275MatCell_BaseFactory = \u0275\u0275getInheritedFactory(_MatCell)))(__ngFactoryType__ || _MatCell);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatCell,
    selectors: [["mat-cell"], ["td", "mat-cell", ""]],
    hostAttrs: [1, "mat-mdc-cell", "mdc-data-table__cell"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCell, [{
    type: Directive,
    args: [{
      selector: "mat-cell, td[mat-cell]",
      host: {
        "class": "mat-mdc-cell mdc-data-table__cell"
      }
    }]
  }], null, null);
})();
var ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
var MatHeaderRowDef = class _MatHeaderRowDef extends CdkHeaderRowDef {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatHeaderRowDef_BaseFactory;
    return function MatHeaderRowDef_Factory(__ngFactoryType__) {
      return (\u0275MatHeaderRowDef_BaseFactory || (\u0275MatHeaderRowDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatHeaderRowDef)))(__ngFactoryType__ || _MatHeaderRowDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatHeaderRowDef,
    selectors: [["", "matHeaderRowDef", ""]],
    inputs: {
      columns: [0, "matHeaderRowDef", "columns"],
      sticky: [2, "matHeaderRowDefSticky", "sticky", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkHeaderRowDef,
      useExisting: _MatHeaderRowDef
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderRowDef, [{
    type: Directive,
    args: [{
      selector: "[matHeaderRowDef]",
      providers: [{
        provide: CdkHeaderRowDef,
        useExisting: MatHeaderRowDef
      }],
      inputs: [{
        name: "columns",
        alias: "matHeaderRowDef"
      }, {
        name: "sticky",
        alias: "matHeaderRowDefSticky",
        transform: booleanAttribute
      }]
    }]
  }], null, null);
})();
var MatFooterRowDef = class _MatFooterRowDef extends CdkFooterRowDef {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatFooterRowDef_BaseFactory;
    return function MatFooterRowDef_Factory(__ngFactoryType__) {
      return (\u0275MatFooterRowDef_BaseFactory || (\u0275MatFooterRowDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatFooterRowDef)))(__ngFactoryType__ || _MatFooterRowDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatFooterRowDef,
    selectors: [["", "matFooterRowDef", ""]],
    inputs: {
      columns: [0, "matFooterRowDef", "columns"],
      sticky: [2, "matFooterRowDefSticky", "sticky", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkFooterRowDef,
      useExisting: _MatFooterRowDef
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterRowDef, [{
    type: Directive,
    args: [{
      selector: "[matFooterRowDef]",
      providers: [{
        provide: CdkFooterRowDef,
        useExisting: MatFooterRowDef
      }],
      inputs: [{
        name: "columns",
        alias: "matFooterRowDef"
      }, {
        name: "sticky",
        alias: "matFooterRowDefSticky",
        transform: booleanAttribute
      }]
    }]
  }], null, null);
})();
var MatRowDef = class _MatRowDef extends CdkRowDef {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatRowDef_BaseFactory;
    return function MatRowDef_Factory(__ngFactoryType__) {
      return (\u0275MatRowDef_BaseFactory || (\u0275MatRowDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatRowDef)))(__ngFactoryType__ || _MatRowDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatRowDef,
    selectors: [["", "matRowDef", ""]],
    inputs: {
      columns: [0, "matRowDefColumns", "columns"],
      when: [0, "matRowDefWhen", "when"]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkRowDef,
      useExisting: _MatRowDef
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRowDef, [{
    type: Directive,
    args: [{
      selector: "[matRowDef]",
      providers: [{
        provide: CdkRowDef,
        useExisting: MatRowDef
      }],
      inputs: [{
        name: "columns",
        alias: "matRowDefColumns"
      }, {
        name: "when",
        alias: "matRowDefWhen"
      }]
    }]
  }], null, null);
})();
var MatHeaderRow = class _MatHeaderRow extends CdkHeaderRow {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatHeaderRow_BaseFactory;
    return function MatHeaderRow_Factory(__ngFactoryType__) {
      return (\u0275MatHeaderRow_BaseFactory || (\u0275MatHeaderRow_BaseFactory = \u0275\u0275getInheritedFactory(_MatHeaderRow)))(__ngFactoryType__ || _MatHeaderRow);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatHeaderRow,
    selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]],
    hostAttrs: ["role", "row", 1, "mat-mdc-header-row", "mdc-data-table__header-row"],
    exportAs: ["matHeaderRow"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkHeaderRow,
      useExisting: _MatHeaderRow
    }]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function MatHeaderRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 0);
      }
    },
    dependencies: [CdkCellOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderRow, [{
    type: Component,
    args: [{
      selector: "mat-header-row, tr[mat-header-row]",
      template: ROW_TEMPLATE,
      host: {
        "class": "mat-mdc-header-row mdc-data-table__header-row",
        "role": "row"
      },
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      exportAs: "matHeaderRow",
      providers: [{
        provide: CdkHeaderRow,
        useExisting: MatHeaderRow
      }],
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var MatFooterRow = class _MatFooterRow extends CdkFooterRow {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatFooterRow_BaseFactory;
    return function MatFooterRow_Factory(__ngFactoryType__) {
      return (\u0275MatFooterRow_BaseFactory || (\u0275MatFooterRow_BaseFactory = \u0275\u0275getInheritedFactory(_MatFooterRow)))(__ngFactoryType__ || _MatFooterRow);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatFooterRow,
    selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]],
    hostAttrs: ["role", "row", 1, "mat-mdc-footer-row", "mdc-data-table__row"],
    exportAs: ["matFooterRow"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkFooterRow,
      useExisting: _MatFooterRow
    }]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function MatFooterRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 0);
      }
    },
    dependencies: [CdkCellOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterRow, [{
    type: Component,
    args: [{
      selector: "mat-footer-row, tr[mat-footer-row]",
      template: ROW_TEMPLATE,
      host: {
        "class": "mat-mdc-footer-row mdc-data-table__row",
        "role": "row"
      },
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      exportAs: "matFooterRow",
      providers: [{
        provide: CdkFooterRow,
        useExisting: MatFooterRow
      }],
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var MatRow = class _MatRow extends CdkRow {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatRow_BaseFactory;
    return function MatRow_Factory(__ngFactoryType__) {
      return (\u0275MatRow_BaseFactory || (\u0275MatRow_BaseFactory = \u0275\u0275getInheritedFactory(_MatRow)))(__ngFactoryType__ || _MatRow);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatRow,
    selectors: [["mat-row"], ["tr", "mat-row", ""]],
    hostAttrs: ["role", "row", 1, "mat-mdc-row", "mdc-data-table__row"],
    exportAs: ["matRow"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkRow,
      useExisting: _MatRow
    }]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function MatRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 0);
      }
    },
    dependencies: [CdkCellOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRow, [{
    type: Component,
    args: [{
      selector: "mat-row, tr[mat-row]",
      template: ROW_TEMPLATE,
      host: {
        "class": "mat-mdc-row mdc-data-table__row",
        "role": "row"
      },
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      exportAs: "matRow",
      providers: [{
        provide: CdkRow,
        useExisting: MatRow
      }],
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var MatNoDataRow = class _MatNoDataRow extends CdkNoDataRow {
  _cellSelector = "td, mat-cell, [mat-cell], .mat-cell";
  constructor() {
    super();
    this._contentClassNames.push("mat-mdc-no-data-row", "mat-mdc-row", "mdc-data-table__row");
    this._cellClassNames.push("mat-mdc-cell", "mdc-data-table__cell", "mat-no-data-cell");
  }
  static \u0275fac = function MatNoDataRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatNoDataRow)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatNoDataRow,
    selectors: [["ng-template", "matNoDataRow", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkNoDataRow,
      useExisting: _MatNoDataRow
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatNoDataRow, [{
    type: Directive,
    args: [{
      selector: "ng-template[matNoDataRow]",
      providers: [{
        provide: CdkNoDataRow,
        useExisting: MatNoDataRow
      }]
    }]
  }], () => [], null);
})();
var MatTextColumn = class _MatTextColumn extends CdkTextColumn {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatTextColumn_BaseFactory;
    return function MatTextColumn_Factory(__ngFactoryType__) {
      return (\u0275MatTextColumn_BaseFactory || (\u0275MatTextColumn_BaseFactory = \u0275\u0275getInheritedFactory(_MatTextColumn)))(__ngFactoryType__ || _MatTextColumn);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatTextColumn,
    selectors: [["mat-text-column"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 3,
    vars: 0,
    consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]],
    template: function MatTextColumn_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainerStart(0, 0);
        \u0275\u0275template(1, MatTextColumn_th_1_Template, 2, 3, "th", 1)(2, MatTextColumn_td_2_Template, 2, 3, "td", 2);
        \u0275\u0275elementContainerEnd();
      }
    },
    dependencies: [MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTextColumn, [{
    type: Component,
    args: [{
      selector: "mat-text-column",
      template: `
    <ng-container matColumnDef>
      <th mat-header-cell *matHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td mat-cell *matCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      imports: [MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell]
    }]
  }], null, null);
})();
var EXPORTED_DECLARATIONS2 = [MatTable, MatRecycleRows, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn];
var MatTableModule = class _MatTableModule {
  static \u0275fac = function MatTableModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTableModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatTableModule,
    imports: [CdkTableModule, MatTable, MatRecycleRows, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn],
    exports: [BidiModule, MatTable, MatRecycleRows, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CdkTableModule, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTableModule, [{
    type: NgModule,
    args: [{
      imports: [CdkTableModule, ...EXPORTED_DECLARATIONS2],
      exports: [BidiModule, EXPORTED_DECLARATIONS2]
    }]
  }], null, null);
})();

// src/app/modules/dashboard/dashboard.module.ts
var DashboardModule = class _DashboardModule {
  static {
    this.\u0275fac = function DashboardModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DashboardModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      DashboardRoutingModule,
      MatCardModule,
      MatIconModule,
      MatTabsModule,
      MatTableModule,
      SharedModule,
      MatButtonModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardModule, [{
    type: NgModule,
    args: [{
      declarations: [DashboardComponent],
      imports: [
        CommonModule,
        DashboardRoutingModule,
        MatCardModule,
        MatIconModule,
        MatTabsModule,
        MatTableModule,
        SharedModule,
        MatButtonModule,
        BaseChartDirective
      ]
    }]
  }], null, null);
})();
export {
  DashboardModule
};
//# sourceMappingURL=dashboard.module-F6YXPZRX.js.map

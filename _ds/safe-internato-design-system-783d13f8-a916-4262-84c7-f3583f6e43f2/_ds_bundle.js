/* @ds-bundle: {"format":3,"namespace":"SafeInternatoDesignSystem_783d13","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Symbol","sourcePath":"components/core/Logo.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"MedalIcon","sourcePath":"components/core/MedalIcon.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Avatar","sourcePath":"components/layout/Avatar.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"ProgressDots","sourcePath":"components/layout/ProgressDots.jsx"},{"name":"Tabs","sourcePath":"components/layout/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"d24f06fec977","components/core/Button.jsx":"4f709b583841","components/core/IconButton.jsx":"1cdb3ca90341","components/core/Logo.jsx":"cb7f859f23f4","components/core/MedalIcon.jsx":"2f22f636946f","components/core/Tag.jsx":"61df8ed20069","components/forms/Checkbox.jsx":"3d85907254de","components/forms/Input.jsx":"78960507b7cc","components/forms/Switch.jsx":"4bbdfa9ee39a","components/layout/Avatar.jsx":"b169c8c727b4","components/layout/Card.jsx":"c534aee241c8","components/layout/ProgressDots.jsx":"18541d4236e5","components/layout/Tabs.jsx":"4deb2f415ad6","ui_kits/app/ContentScreen.jsx":"5b18c086aa8a","ui_kits/app/DecisionScreen.jsx":"50e6aa1d237e","ui_kits/app/FeedScreen.jsx":"f269f1492d4a","ui_kits/site/Sections.jsx":"fcc17f5fb1d1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SafeInternatoDesignSystem_783d13 = window.SafeInternatoDesignSystem_783d13 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Safe Internato — Badge
 * Small status / category pill. Numbered variant powers step counters.
 */
function Badge({
  children,
  tone = "brand",
  // brand | neutral | success | warning | danger | info | rose
  variant = "soft",
  // soft | solid | outline
  size = "md",
  // sm | md
  style = {},
  ...rest
}) {
  const tones = {
    brand: {
      solid: "var(--bordo)",
      soft: "var(--rose-300)",
      on: "var(--bordo)"
    },
    neutral: {
      solid: "var(--grafite)",
      soft: "var(--surface-sunken)",
      on: "var(--text-body)"
    },
    success: {
      solid: "var(--success)",
      soft: "var(--success-soft)",
      on: "var(--success)"
    },
    warning: {
      solid: "var(--warning)",
      soft: "var(--warning-soft)",
      on: "var(--warning)"
    },
    danger: {
      solid: "var(--danger)",
      soft: "var(--danger-soft)",
      on: "var(--danger)"
    },
    info: {
      solid: "var(--info)",
      soft: "var(--info-soft)",
      on: "var(--info)"
    },
    rose: {
      solid: "var(--rose)",
      soft: "var(--rose-300)",
      on: "var(--bordo-deep)"
    }
  };
  const t = tones[tone] || tones.brand;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "5px",
    fontFamily: "var(--font-text)",
    fontWeight: "var(--fw-semibold)",
    fontSize: size === "sm" ? "var(--fs-caption)" : "var(--fs-label)",
    lineHeight: 1,
    padding: size === "sm" ? "4px 9px" : "5px 11px",
    borderRadius: "var(--radius-pill)",
    whiteSpace: "nowrap"
  };
  const styles = variant === "solid" ? {
    background: t.solid,
    color: "var(--white)",
    border: "var(--bw) solid transparent"
  } : variant === "outline" ? {
    background: "transparent",
    color: t.on,
    border: `var(--bw) solid ${t.solid}`
  } : {
    background: t.soft,
    color: t.on,
    border: "var(--bw) solid transparent"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...styles,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Safe Internato — Button
 * Primary actions lighten bordô→vermelho on hover, deepen on press.
 */
function Button({
  children,
  variant = "primary",
  // primary | secondary | ghost | dark
  size = "md",
  // sm | md | lg
  full = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  onClick,
  type = "button",
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const sizes = {
    sm: {
      padding: "8px 16px",
      font: "var(--fs-sm)",
      gap: "6px",
      h: "36px"
    },
    md: {
      padding: "11px 22px",
      font: "var(--fs-body)",
      gap: "8px",
      h: "44px"
    },
    lg: {
      padding: "15px 30px",
      font: "var(--fs-body-lg)",
      gap: "10px",
      h: "54px"
    }
  };
  const s = sizes[size] || sizes.md;
  const palettes = {
    primary: {
      bg: hover ? "var(--action-hover)" : "var(--action)",
      color: "var(--text-on-brand)",
      border: "transparent"
    },
    secondary: {
      bg: hover ? "var(--rose-300)" : "transparent",
      color: "var(--bordo)",
      border: "var(--bordo)"
    },
    ghost: {
      bg: hover ? "var(--rose-300)" : "transparent",
      color: "var(--bordo)",
      border: "transparent"
    },
    dark: {
      bg: hover ? "var(--grafite-800)" : "var(--grafite)",
      color: "var(--text-on-dark)",
      border: "transparent"
    }
  };
  const p = palettes[variant] || palettes.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      minHeight: s.h,
      width: full ? "100%" : "auto",
      padding: s.padding,
      font: `var(--fw-semibold) ${s.font}/1 var(--font-text)`,
      letterSpacing: "0.005em",
      color: p.color,
      background: p.bg,
      border: `var(--bw) solid ${p.border}`,
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transform: press && !disabled ? "scale(0.98)" : "scale(1)",
      transition: `background var(--dur) var(--ease-out), transform var(--dur-fast) var(--ease-out)`,
      boxShadow: variant === "primary" && !disabled ? "var(--shadow-sm)" : "none",
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Safe Internato — IconButton
 * Circular/pill control wrapping a single line icon. Pass the icon as children.
 */
function IconButton({
  children,
  variant = "soft",
  // soft | solid | ghost | dark
  size = "md",
  // sm | md | lg
  label,
  // accessible label (required)
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const dims = {
    sm: 36,
    md: 44,
    lg: 52
  }[size] || 44;
  const palettes = {
    soft: {
      bg: hover ? "var(--rose)" : "var(--rose-300)",
      color: "var(--bordo)",
      border: "transparent"
    },
    solid: {
      bg: hover ? "var(--action-hover)" : "var(--action)",
      color: "var(--text-on-brand)",
      border: "transparent"
    },
    ghost: {
      bg: hover ? "var(--rose-300)" : "transparent",
      color: "var(--bordo)",
      border: "transparent"
    },
    dark: {
      bg: hover ? "var(--grafite-800)" : "var(--grafite)",
      color: "var(--text-on-dark)",
      border: "transparent"
    }
  };
  const p = palettes[variant] || palettes.soft;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dims,
      height: dims,
      color: p.color,
      background: p.bg,
      border: `var(--bw) solid ${p.border}`,
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transform: press && !disabled ? "scale(0.94)" : "scale(1)",
      transition: "background var(--dur) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PATHS = ["M 50.00 42.62 L 25.81 34.01 L 29.50 9.41 L 47.34 18.02 L 50.00 42.62 L 52.66 18.02 L 70.50 9.41 L 74.19 34.01 Z", "M 43.61 53.69 L 48.25 78.94 L 25.10 88.05 L 23.64 68.30 L 43.61 53.69 L 20.97 63.68 L 4.60 52.54 L 24.06 37.05 Z", "M 56.39 53.69 L 75.94 37.05 L 95.40 52.54 L 79.03 63.68 L 56.39 53.69 L 76.36 68.30 L 74.90 88.05 L 51.75 78.94 Z"];

/** The radial three-book symbol. */
function Symbol({
  color = "currentColor",
  size = 40,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    width: size,
    height: size,
    fill: "none",
    style: {
      display: "block",
      flex: "none",
      ...style
    },
    "aria-hidden": "true"
  }, PATHS.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: d,
    fill: color
  })));
}

/**
 * Safe Internato — Logo
 * Symbol + "SAFE / INTERNATO" wordmark. Lockups: horizontal | vertical | symbol.
 */
function Logo({
  variant = "horizontal",
  // horizontal | vertical | symbol
  tone = "bordo",
  // bordo | white | grafite
  size = 40,
  // symbol size in px
  style = {},
  ...rest
}) {
  const colors = {
    bordo: {
      sym: "var(--bordo)",
      word: "var(--bordo)",
      sub: "var(--bordo)"
    },
    white: {
      sym: "var(--pergaminho)",
      word: "var(--pergaminho)",
      sub: "var(--pergaminho)"
    },
    grafite: {
      sym: "var(--grafite)",
      word: "var(--grafite)",
      sub: "var(--grafite)"
    }
  };
  const c = colors[tone] || colors.bordo;
  const Wordmark = ({
    center
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: center ? "center" : "flex-start",
      lineHeight: 0.96
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-black)",
      fontSize: size * 0.62,
      letterSpacing: "0.01em",
      color: c.word
    }
  }, "SAFE"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontWeight: "var(--fw-semibold)",
      fontSize: size * 0.20,
      letterSpacing: "var(--ls-wordmark)",
      textIndent: "0.34em",
      color: c.sub,
      marginTop: size * 0.06
    }
  }, "INTERNATO"));
  if (variant === "symbol") {
    return /*#__PURE__*/React.createElement(Symbol, _extends({
      color: c.sym,
      size: size,
      style: style
    }, rest));
  }
  if (variant === "vertical") {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: size * 0.28,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement(Symbol, {
      color: c.sym,
      size: size * 1.5
    }), /*#__PURE__*/React.createElement(Wordmark, {
      center: true
    }));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: size * 0.42,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Symbol, {
    color: c.sym,
    size: size
  }), /*#__PURE__*/React.createElement(Wordmark, null));
}
Object.assign(__ds_scope, { Symbol, Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/MedalIcon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Safe Internato — MedalIcon
 * Line icon inside a circle with a rosé ring. Anchors the theme of a piece.
 */
function MedalIcon({
  children,
  tone = "rose",
  // rose | brand | dark | light
  size = 56,
  style = {},
  ...rest
}) {
  const tones = {
    rose: {
      bg: "var(--rose-300)",
      ring: "var(--rose)",
      icon: "var(--bordo)"
    },
    brand: {
      bg: "var(--bordo)",
      ring: "var(--vermelho)",
      icon: "var(--pergaminho)"
    },
    dark: {
      bg: "var(--grafite)",
      ring: "var(--grafite-600)",
      icon: "var(--pergaminho)"
    },
    light: {
      bg: "var(--pergaminho)",
      ring: "var(--rose)",
      icon: "var(--bordo)"
    }
  };
  const t = tones[tone] || tones.rose;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: "var(--radius-pill)",
      background: t.bg,
      border: `var(--bw-ring) solid ${t.ring}`,
      color: t.icon,
      flex: "none",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { MedalIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/MedalIcon.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Safe Internato — Tag
 * Selectable filter chip. Outline by default; fills bordô when selected.
 */
function Tag({
  children,
  selected = false,
  iconLeft = null,
  onClick,
  disabled = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const clickable = !!onClick;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "aria-pressed": clickable ? selected : undefined,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-text)",
      fontWeight: "var(--fw-medium)",
      fontSize: "var(--fs-sm)",
      lineHeight: 1,
      padding: "8px 14px",
      borderRadius: "var(--radius-pill)",
      cursor: clickable && !disabled ? "pointer" : "default",
      color: selected ? "var(--text-on-brand)" : "var(--text-body)",
      background: selected ? "var(--bordo)" : hover && clickable ? "var(--rose-300)" : "var(--surface-card)",
      border: `var(--bw) solid ${selected ? "var(--bordo)" : "var(--border)"}`,
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--dur) var(--ease-out), color var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out)",
      ...style
    }
  }, rest), iconLeft, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Safe Internato — Checkbox
 * Square check with bordô fill when checked. Pairs with study-checklist items.
 */
function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  label,
  id,
  style = {},
  ...rest
}) {
  const autoId = React.useId();
  const cid = id || autoId;
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cid,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-text)",
      fontSize: "var(--fs-body)",
      color: "var(--text-body)",
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "checkbox",
    id: cid,
    "aria-checked": checked,
    disabled: disabled,
    onClick: toggle,
    style: {
      width: 22,
      height: 22,
      flex: "none",
      padding: 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-xs)",
      border: `var(--bw) solid ${checked ? "var(--bordo)" : "var(--border-strong)"}`,
      background: checked ? "var(--bordo)" : "var(--surface-card)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out)"
    }
  }, rest), checked && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--pergaminho)",
    strokeWidth: "3.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Safe Internato — Input
 * Text field with optional label, leading icon, hint and error.
 */
function Input({
  label,
  hint,
  error,
  iconLeft = null,
  size = "md",
  // sm | md | lg
  type = "text",
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const autoId = React.useId();
  const fid = id || autoId;
  const pads = {
    sm: "9px 12px",
    md: "12px 14px",
    lg: "15px 16px"
  }[size] || "12px 14px";
  const fs = {
    sm: "var(--fs-sm)",
    md: "var(--fs-body)",
    lg: "var(--fs-body-lg)"
  }[size] || "var(--fs-body)";
  const borderColor = error ? "var(--danger)" : focus ? "var(--bordo)" : "var(--border-strong)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontFamily: "var(--font-text)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-sm)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "9px",
      background: "var(--surface-card)",
      border: `var(--bw) solid ${borderColor}`,
      borderRadius: "var(--radius-sm)",
      padding: pads,
      boxShadow: focus ? `0 0 0 var(--focus-width) var(--focus-color)` : "none",
      transition: "border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)"
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--text-muted)",
      flex: "none"
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      font: `var(--fw-regular) ${fs}/1.3 var(--font-text)`,
      color: "var(--text-strong)",
      width: "100%",
      minWidth: 0
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: error ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Safe Internato — Switch
 * On/off toggle. Bordô track when on.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  id,
  style = {},
  ...rest
}) {
  const autoId = React.useId();
  const sid = id || autoId;
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  const track = /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    id: sid,
    "aria-checked": checked,
    disabled: disabled,
    onClick: toggle,
    style: {
      position: "relative",
      width: 46,
      height: 28,
      flex: "none",
      borderRadius: "var(--radius-pill)",
      border: "none",
      background: checked ? "var(--bordo)" : "var(--border-strong)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--dur) var(--ease-out)",
      padding: 0
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: 3,
      width: 22,
      height: 22,
      borderRadius: "var(--radius-pill)",
      background: "var(--white)",
      boxShadow: "var(--shadow-sm)",
      transform: checked ? "translateX(18px)" : "translateX(0)",
      transition: "transform var(--dur) var(--ease-out)"
    }
  }));
  if (!label) return /*#__PURE__*/React.createElement("span", {
    style: style
  }, track);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: sid,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-text)",
      fontSize: "var(--fs-body)",
      color: "var(--text-body)",
      ...style
    }
  }, track, /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/layout/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Safe Internato — Avatar
 * Circular avatar with image or initials. Rosé ring optional.
 */
function Avatar({
  src,
  name = "",
  size = 44,
  ring = false,
  tone = "rose",
  // rose | brand | dark  (initials background)
  style = {},
  ...rest
}) {
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  const tones = {
    rose: {
      bg: "var(--rose-300)",
      color: "var(--bordo)"
    },
    brand: {
      bg: "var(--bordo)",
      color: "var(--pergaminho)"
    },
    dark: {
      bg: "var(--grafite)",
      color: "var(--pergaminho)"
    }
  };
  const t = tones[tone] || tones.rose;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      flex: "none",
      borderRadius: "var(--radius-pill)",
      overflow: "hidden",
      background: t.bg,
      color: t.color,
      fontFamily: "var(--font-text)",
      fontWeight: "var(--fw-semibold)",
      fontSize: size * 0.38,
      border: ring ? `var(--bw-ring) solid var(--rose)` : "none",
      boxShadow: ring ? "0 0 0 2px var(--surface-card)" : "none",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || "·");
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Safe Internato — Card
 * Rounded surface (12–18px), soft warm shadow. The brand's primary container.
 */
function Card({
  children,
  tone = "light",
  // light | parchment | dark | brand
  pad = "md",
  // none | sm | md | lg
  interactive = false,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    light: {
      bg: "var(--surface-card)",
      color: "var(--text-body)",
      border: "var(--border)"
    },
    parchment: {
      bg: "var(--surface-page)",
      color: "var(--text-body)",
      border: "var(--border)"
    },
    dark: {
      bg: "var(--surface-dark)",
      color: "var(--text-on-dark)",
      border: "var(--border-dark)"
    },
    brand: {
      bg: "var(--surface-brand)",
      color: "var(--text-on-brand)",
      border: "transparent"
    }
  };
  const t = tones[tone] || tones.light;
  const pads = {
    none: 0,
    sm: "var(--space-4)",
    md: "var(--space-5)",
    lg: "var(--space-6)"
  }[pad];
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: t.bg,
      color: t.color,
      border: `var(--bw-hair) solid ${t.border}`,
      borderRadius: "var(--radius-lg)",
      padding: pads,
      boxShadow: tone === "dark" ? "var(--shadow-dark)" : "var(--shadow-sm)",
      cursor: interactive ? "pointer" : "default",
      transform: interactive && hover ? "translateY(-2px)" : "none",
      transition: "transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)",
      ...(interactive && hover ? {
        boxShadow: tone === "dark" ? "var(--shadow-dark)" : "var(--shadow-md)"
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/layout/ProgressDots.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Safe Internato — ProgressDots
 * Carousel / passo-a-passo position indicator ("x/10"). Active dot = vermelho bar.
 */
function ProgressDots({
  total = 5,
  current = 0,
  showCount = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "6px"
    }
  }, Array.from({
    length: total
  }).map((_, i) => {
    const on = i === current;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        height: 6,
        width: on ? 22 : 6,
        borderRadius: "var(--radius-pill)",
        background: on ? "var(--vermelho)" : "var(--rose)",
        transition: "width var(--dur) var(--ease-out), background var(--dur) var(--ease-out)"
      }
    });
  })), showCount && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--fs-sm)",
      color: "var(--text-muted)"
    }
  }, current + 1, "/", total));
}
Object.assign(__ds_scope, { ProgressDots });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/ProgressDots.jsx", error: String((e && e.message) || e) }); }

// components/layout/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Safe Internato — Tabs
 * Underline tabs. Active tab is bordô with a vermelho indicator.
 */
function Tabs({
  items = [],
  // [{ id, label }]
  value,
  onChange,
  style = {},
  ...rest
}) {
  const active = value != null ? value : items[0] && items[0].id;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-5)",
      borderBottom: `var(--bw-hair) solid var(--border)`,
      ...style
    }
  }, rest), items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(it.id),
      style: {
        position: "relative",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        padding: "10px 2px 14px",
        fontFamily: "var(--font-text)",
        fontWeight: on ? "var(--fw-semibold)" : "var(--fw-medium)",
        fontSize: "var(--fs-body)",
        color: on ? "var(--bordo)" : "var(--text-muted)",
        transition: "color var(--dur) var(--ease-out)"
      }
    }, it.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -1,
        height: 3,
        borderRadius: "var(--radius-pill)",
        background: on ? "var(--vermelho)" : "transparent",
        transition: "background var(--dur) var(--ease-out)"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ContentScreen.jsx
try { (() => {
/* global React */
// Safe Internato — App · Conteúdo (post / artigo detail)
// A clinical topic read: passo a passo, key concept, evidence note, save CTA.

const {
  Card,
  Badge,
  Button,
  IconButton,
  MedalIcon
} = window.SafeInternatoDesignSystem_783d13;
const Icn = (n, s) => /*#__PURE__*/React.createElement("i", {
  "data-lucide": n,
  style: s
});
const STEPS = ["Pergunte: há sinais de baixo débito ou congestão agora?", "Classifique o perfil hemodinâmico (quente/frio · seco/úmido).", "Ajuste diurético e avalie resposta em 24–48h.", "Revise medicação de base e fatores descompensantes."];
function ContentScreen({
  item,
  onBack,
  onDecision
}) {
  const data = item || {
    spec: "Cardiologia",
    icon: "heart-pulse",
    read: "4 min",
    title: "ICFEp em idosos: como não passar batido"
  };
  const [saved, setSaved] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 90
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "si-arcs",
    style: {
      background: "var(--grad-brand)",
      color: "var(--pergaminho)",
      padding: "50px 18px 22px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Voltar",
    variant: "soft",
    size: "sm",
    onClick: onBack
  }, Icn("arrow-left", {
    width: 18,
    height: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Compartilhar",
    variant: "soft",
    size: "sm"
  }, Icn("share-2", {
    width: 18,
    height: 18
  })))), /*#__PURE__*/React.createElement(Badge, {
    tone: "rose",
    style: {
      marginBottom: 12
    }
  }, data.spec), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 26,
      lineHeight: 1.08,
      margin: "0 0 12px",
      letterSpacing: "var(--ls-display)"
    }
  }, data.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--rose)",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, Icn("clock", {
    width: 14,
    height: 14
  }), data.read, " de leitura \xB7 baseado em evid\xEAncias")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 18px 0",
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--fs-body-lg)",
      lineHeight: 1.6,
      color: "var(--text-strong)",
      fontWeight: 500
    }
  }, "A insufici\xEAncia card\xEDaca de fra\xE7\xE3o de eje\xE7\xE3o preservada (ICFEp) \xE9 a forma mais comum em idosos \u2014 e uma das mais dif\xEDceis de diagnosticar."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--fs-body)",
      lineHeight: 1.65,
      color: "var(--text-body)"
    }
  }, "\xC0 beira do leito, o segredo est\xE1 em integrar a cl\xEDnica com exames simples. Vamos ao passo a passo da conduta segura."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "si-overline"
  }, "Conduta \xB7 passo a passo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      marginTop: 12
    }
  }, STEPS.map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    tone: "parchment",
    pad: "sm"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      flex: "none",
      borderRadius: "var(--radius-pill)",
      background: "var(--bordo)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 13
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-sm)",
      lineHeight: 1.5,
      color: "var(--text-body)",
      paddingTop: 4
    }
  }, s)))))), /*#__PURE__*/React.createElement(Card, {
    tone: "light",
    pad: "md",
    style: {
      borderColor: "var(--rose)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(MedalIcon, {
    tone: "rose",
    size: 42
  }, Icn("flask-conical", {
    width: 20,
    height: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: "var(--fs-sm)",
      color: "var(--text-strong)",
      marginBottom: 3
    }
  }, "Nota de evid\xEAncia"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--fs-sm)",
      lineHeight: 1.5,
      color: "var(--text-muted)"
    }
  }, "Diur\xE9ticos aliviam congest\xE3o, mas n\xE3o reduzem mortalidade na ICFEp \u2014 ajuste \xE0 cl\xEDnica.")))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    full: true,
    iconLeft: Icn("git-branch", {
      width: 18,
      height: 18
    }),
    onClick: onDecision
  }, "Abrir apoio \xE0 decis\xE3o cl\xEDnica")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      padding: "18px 18px 26px",
      background: "linear-gradient(180deg, rgba(251,247,242,0) 0%, var(--pergaminho) 38%)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    full: true,
    iconLeft: Icn(saved ? "check" : "bookmark", {
      width: 18,
      height: 18
    }),
    onClick: () => setSaved(!saved)
  }, saved ? "Salvo para o pré-prova" : "Salvar este conteúdo")));
}
window.ContentScreen = ContentScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ContentScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/DecisionScreen.jsx
try { (() => {
/* global React */
// Safe Internato — App · Apoio à decisão clínica
// Interactive checklist that resolves to a suggested conduct.

const {
  Card,
  Badge,
  Button,
  IconButton,
  Checkbox,
  ProgressDots
} = window.SafeInternatoDesignSystem_783d13;
const Ico = (n, s) => /*#__PURE__*/React.createElement("i", {
  "data-lucide": n,
  style: s
});
const CRITERIA = [{
  id: "a",
  label: "Dispneia aos esforços ou ortopneia"
}, {
  id: "b",
  label: "Edema de membros inferiores"
}, {
  id: "c",
  label: "Estertores crepitantes na ausculta"
}, {
  id: "d",
  label: "BNP / NT-proBNP elevado"
}];
function DecisionScreen({
  onBack
}) {
  const [checked, setChecked] = React.useState({});
  const count = Object.values(checked).filter(Boolean).length;
  const toggle = id => setChecked(c => ({
    ...c,
    [id]: !c[id]
  }));
  const verdict = count >= 3 ? {
    tone: "danger",
    icon: "alert-triangle",
    title: "Congestão provável",
    text: "Inicie diurético, monitore resposta em 24–48h e reavalie o perfil hemodinâmico."
  } : count >= 1 ? {
    tone: "warning",
    icon: "search",
    title: "Investigar mais",
    text: "Sinais parciais. Complemente com ECG, RX de tórax e dosagem de peptídeos natriuréticos."
  } : {
    tone: "success",
    icon: "shield-check",
    title: "Baixa probabilidade agora",
    text: "Sem critérios marcados. Reavalie se houver mudança clínica."
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--grafite)",
      color: "var(--pergaminho)",
      padding: "50px 18px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Voltar",
    variant: "dark",
    size: "sm",
    onClick: onBack
  }, Ico("arrow-left", {
    width: 18,
    height: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 17
    }
  }, "Apoio \xE0 decis\xE3o")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-sm)",
      color: "var(--rose)"
    }
  }, "Suspeita de descompensa\xE7\xE3o de IC \u2014 marque o que se aplica.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 18px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "si-overline"
  }, "Crit\xE9rios cl\xEDnicos"), /*#__PURE__*/React.createElement(ProgressDots, {
    total: CRITERIA.length,
    current: Math.max(0, count - 1),
    showCount: true
  })), /*#__PURE__*/React.createElement(Card, {
    tone: "light",
    pad: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, CRITERIA.map(c => /*#__PURE__*/React.createElement(Checkbox, {
    key: c.id,
    checked: !!checked[c.id],
    onChange: () => toggle(c.id),
    label: c.label
  })))), /*#__PURE__*/React.createElement(Card, {
    tone: verdict.tone === "danger" ? "brand" : "parchment",
    pad: "md",
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      flex: "none",
      borderRadius: "var(--radius-pill)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: verdict.tone === "danger" ? "rgba(251,247,242,.16)" : "var(--rose-300)",
      color: verdict.tone === "danger" ? "var(--pergaminho)" : "var(--bordo)"
    }
  }, Ico(verdict.icon, {
    width: 22,
    height: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 17,
      marginBottom: 4,
      color: verdict.tone === "danger" ? "var(--pergaminho)" : "var(--text-strong)"
    }
  }, verdict.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--fs-sm)",
      lineHeight: 1.5,
      color: verdict.tone === "danger" ? "var(--rose)" : "var(--text-muted)"
    }
  }, verdict.text)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-faint)",
      lineHeight: 1.5,
      margin: "14px 2px 0"
    }
  }, "Ferramenta de apoio \u2014 n\xE3o substitui o julgamento cl\xEDnico nem protocolos da institui\xE7\xE3o.")));
}
window.DecisionScreen = DecisionScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/DecisionScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/FeedScreen.jsx
try { (() => {
/* global React */
// Safe Internato — App · Feed (Início)
// Practical content feed with specialty filters and an ECG header motif.

const {
  Card,
  Badge,
  Tag,
  IconButton,
  MedalIcon,
  Avatar
} = window.SafeInternatoDesignSystem_783d13;
const I = (n, s) => /*#__PURE__*/React.createElement("i", {
  "data-lucide": n,
  style: s
});
const FEED = [{
  id: 1,
  spec: "Cardiologia",
  icon: "heart-pulse",
  title: "ICFEp em idosos: como não passar batido",
  excerpt: "A forma mais comum de insuficiência cardíaca em idosos — e uma das mais difíceis de diagnosticar.",
  read: "4 min",
  saves: 312,
  featured: true
}, {
  id: 2,
  spec: "Emergência",
  icon: "siren",
  title: "7 sinais de choque para revisar antes do plantão",
  excerpt: "Salve para consultar depois. Conduta segura começa com a pergunta certa.",
  read: "3 min",
  saves: 540
}, {
  id: 3,
  spec: "Farmacologia",
  icon: "pill",
  title: "Antibióticos na prática: escolha empírica passo a passo",
  excerpt: "Baseado em evidências, direto ao ponto, com as doses que você usa de verdade.",
  read: "6 min",
  saves: 188
}];
function FeedHeader() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--grafite)",
      padding: "50px 18px 18px",
      color: "var(--pergaminho)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/symbol-white.svg",
    width: "28",
    height: "28",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 18,
      letterSpacing: ".01em"
    }
  }, "SAFE ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: "var(--ls-wordmark)"
    }
  }, "INTERNATO"))), /*#__PURE__*/React.createElement(Avatar, {
    name: "Marina Alves",
    size: 34,
    ring: true
  })), /*#__PURE__*/React.createElement("span", {
    className: "si-ecg",
    style: {
      color: "var(--rose)",
      height: 18,
      marginTop: 14,
      opacity: .8
    }
  }));
}
function FeedSearch() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      background: "var(--surface-card)",
      border: "1.5px solid var(--border)",
      borderRadius: "var(--radius-pill)",
      padding: "11px 16px",
      color: "var(--text-muted)",
      margin: "16px 18px 0"
    }
  }, I("search", {
    width: 18,
    height: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-sm)"
    }
  }, "Buscar conte\xFAdo, conduta, tema\u2026"));
}
function FeedCard({
  item
}) {
  if (item.featured) {
    return /*#__PURE__*/React.createElement(Card, {
      tone: "brand",
      pad: "none",
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "si-arcs",
      style: {
        padding: "18px 18px 20px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(MedalIcon, {
      tone: "light",
      size: 44
    }, I(item.icon, {
      width: 22,
      height: 22
    })), /*#__PURE__*/React.createElement(Badge, {
      tone: "rose"
    }, item.spec)), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: 21,
        lineHeight: 1.12,
        margin: "0 0 8px",
        color: "var(--pergaminho)"
      }
    }, item.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "var(--fs-sm)",
        lineHeight: 1.5,
        color: "var(--rose)"
      }
    }, item.excerpt), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--fs-caption)",
        color: "var(--rose)",
        display: "flex",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5
      }
    }, I("clock", {
      width: 14,
      height: 14
    }), item.read), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5
      }
    }, I("bookmark", {
      width: 14,
      height: 14
    }), item.saves)), /*#__PURE__*/React.createElement(IconButton, {
      label: "Salvar",
      variant: "soft",
      size: "sm"
    }, I("bookmark", {
      width: 16,
      height: 16
    })))));
  }
  return /*#__PURE__*/React.createElement(Card, {
    tone: "light",
    pad: "md",
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(MedalIcon, {
    tone: "rose",
    size: 46
  }, I(item.icon, {
    width: 22,
    height: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    size: "sm",
    style: {
      marginBottom: 7
    }
  }, item.spec), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 16,
      lineHeight: 1.18,
      margin: "0 0 5px",
      color: "var(--text-strong)"
    }
  }, item.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--fs-sm)",
      lineHeight: 1.45,
      color: "var(--text-muted)"
    }
  }, item.excerpt), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 10,
      fontSize: "var(--fs-caption)",
      color: "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5
    }
  }, I("clock", {
    width: 13,
    height: 13
  }), item.read), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5
    }
  }, I("bookmark", {
    width: 13,
    height: 13
  }), item.saves)))));
}
function FeedScreen({
  onOpen
}) {
  const [filter, setFilter] = React.useState("Todos");
  const specs = ["Todos", "Cardiologia", "Emergência", "Farmacologia", "Clínica"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 16
    }
  }, /*#__PURE__*/React.createElement(FeedHeader, null), /*#__PURE__*/React.createElement(FeedSearch, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      overflowX: "auto",
      padding: "16px 18px 4px"
    }
  }, specs.map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s,
    selected: filter === s,
    onClick: () => setFilter(s)
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "12px 18px 0"
    }
  }, FEED.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    onClick: () => onOpen && onOpen(it)
  }, /*#__PURE__*/React.createElement(FeedCard, {
    item: it
  })))));
}
window.FeedScreen = FeedScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/FeedScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Sections.jsx
try { (() => {
/* global React */
// Safe Internato — Marketing site sections. Institutional, confiável, conversion-focused.

const {
  Logo,
  Button,
  Card,
  Badge,
  MedalIcon
} = window.SafeInternatoDesignSystem_783d13;
const Ik = (n, s) => /*#__PURE__*/React.createElement("i", {
  "data-lucide": n,
  style: s
});
function SiteHeader() {
  const links = ["Conteúdo", "Trilhas", "Decisão clínica", "Planos"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 10,
      background: "var(--grafite)",
      color: "var(--pergaminho)",
      borderBottom: "1px solid var(--grafite-600)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "16px 40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "horizontal",
    tone: "white",
    size: 30
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 30
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: "var(--pergaminho)",
      textDecoration: "none",
      fontSize: "var(--fs-sm)",
      fontWeight: 500,
      opacity: .85
    }
  }, l)), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "sm",
    style: {
      background: "var(--bordo)"
    }
  }, "Entrar"))));
}
function SiteHero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "si-arcs",
    style: {
      background: "var(--grad-brand)",
      color: "var(--pergaminho)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "92px 40px 84px",
      display: "grid",
      gridTemplateColumns: "1.15fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "rose",
    style: {
      marginBottom: 22
    }
  }, "Medicina de alta performance"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 56,
      lineHeight: 1.02,
      letterSpacing: "var(--ls-display)",
      margin: "0 0 20px"
    }
  }, "Tudo o que o interno precisa, em um s\xF3 lugar."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-lg)",
      lineHeight: 1.6,
      color: "var(--rose)",
      margin: "0 0 30px",
      maxWidth: 460
    }
  }, "Conte\xFAdo pr\xE1tico, organiza\xE7\xE3o de estudos e apoio \xE0 decis\xE3o cl\xEDnica \xE0 beira do leito \u2014 com rigor cient\xEDfico e linguagem acess\xEDvel."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: {
      background: "var(--pergaminho)",
      color: "var(--bordo)"
    }
  }, "Come\xE7ar gratuitamente"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    iconLeft: Ik("play", {
      width: 18,
      height: 18
    }),
    style: {
      color: "var(--pergaminho)",
      borderColor: "var(--rose)"
    }
  }, "Ver como funciona")), /*#__PURE__*/React.createElement("span", {
    className: "si-ecg",
    style: {
      color: "var(--rose)",
      height: 22,
      marginTop: 40,
      maxWidth: 360,
      opacity: .7
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 270,
      height: 480,
      background: "var(--grafite)",
      borderRadius: 38,
      boxShadow: "0 30px 70px rgba(0,0,0,.4), 0 0 0 9px #15181d",
      padding: "26px 20px",
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/symbol-white.svg",
    width: "22",
    height: "22",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--pergaminho)",
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 13
    }
  }, "SAFE")), /*#__PURE__*/React.createElement(Card, {
    tone: "brand",
    pad: "sm"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "rose",
    size: "sm",
    style: {
      marginBottom: 6
    }
  }, "Emerg\xEAncia"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 14,
      color: "var(--pergaminho)",
      lineHeight: 1.2
    }
  }, "7 sinais de choque para revisar antes do plant\xE3o")), /*#__PURE__*/React.createElement(Card, {
    tone: "light",
    pad: "sm"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 9,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(MedalIcon, {
    tone: "rose",
    size: 34
  }, Ik("heart-pulse", {
    width: 16,
    height: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: "var(--text-strong)",
      lineHeight: 1.2
    }
  }, "ICFEp em idosos"))), /*#__PURE__*/React.createElement(Card, {
    tone: "light",
    pad: "sm"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 9,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(MedalIcon, {
    tone: "light",
    size: 34
  }, Ik("pill", {
    width: 16,
    height: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: "var(--text-strong)",
      lineHeight: 1.2
    }
  }, "Antibi\xF3ticos na pr\xE1tica")))))));
}
const FEATURES = [{
  icon: "book-open-text",
  title: "Conteúdo prático",
  text: "Escaneável e aplicável entre tarefas — direto ao ponto, com as condutas que você usa de verdade."
}, {
  icon: "git-branch",
  title: "Decisão segura",
  text: "Apoio à conduta baseado em evidências, no momento em que você precisa decidir."
}, {
  icon: "layout-list",
  title: "Organização",
  text: "Estudos, trilhas e salvos reunidos em um só lugar — pronto para o pré-prova."
}];
function SiteFeatures() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "84px 40px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "si-overline"
  }, "Por que o Safe Internato"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 40,
      letterSpacing: "var(--ls-display)",
      color: "var(--text-strong)",
      margin: "10px 0 44px",
      maxWidth: 620,
      lineHeight: 1.05
    }
  }, "O conhecimento s\xE9rio da faculdade, com a praticidade do plant\xE3o."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 22
    }
  }, FEATURES.map(f => /*#__PURE__*/React.createElement(Card, {
    key: f.title,
    tone: "light",
    pad: "lg"
  }, /*#__PURE__*/React.createElement(MedalIcon, {
    tone: "rose",
    size: 58,
    style: {
      marginBottom: 18
    }
  }, Ik(f.icon, {
    width: 26,
    height: 26
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 21,
      color: "var(--text-strong)",
      margin: "0 0 8px"
    }
  }, f.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--fs-body)",
      lineHeight: 1.6,
      color: "var(--text-muted)"
    }
  }, f.text))))));
}
function SiteCTA() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bordo-deep)",
      color: "var(--pergaminho)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 980,
      margin: "0 auto",
      padding: "76px 40px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 40,
      letterSpacing: "var(--ls-display)",
      margin: "0 0 14px",
      lineHeight: 1.05
    }
  }, "Conduta segura come\xE7a com a pergunta certa."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--rose)",
      fontSize: "var(--fs-body-lg)",
      margin: "0 0 28px"
    }
  }, "Junte-se a milhares de internos. Comece hoje, sem custo."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: {
      background: "var(--pergaminho)",
      color: "var(--bordo)"
    }
  }, "Criar conta gratuita")));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--grafite)",
      color: "var(--pergaminho)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "horizontal",
    tone: "white",
    size: 26
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--ink-300)"
    }
  }, "medsafebrasil.com.br/education \xB7 Educa\xE7\xE3o M\xE9dica de Alta Performance")));
}
Object.assign(window, {
  SiteHeader,
  SiteHero,
  SiteFeatures,
  SiteCTA,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Symbol = __ds_scope.Symbol;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.MedalIcon = __ds_scope.MedalIcon;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ProgressDots = __ds_scope.ProgressDots;

__ds_ns.Tabs = __ds_scope.Tabs;

})();

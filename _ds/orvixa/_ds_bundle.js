/* @ds-bundle: {"format":4,"namespace":"OrvixaDesignSystem_e60482","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"BiomarkerRow","sourcePath":"components/data/BiomarkerRow.jsx"},{"name":"RangeBar","sourcePath":"components/data/RangeBar.jsx"},{"name":"Stat","sourcePath":"components/data/Stat.jsx"},{"name":"StatusIndicator","sourcePath":"components/data/StatusIndicator.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Pager","sourcePath":"components/navigation/Pager.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"PhotoCard","sourcePath":"components/surfaces/PhotoCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"5c64da171c77","components/core/Button.jsx":"bfb976bc8680","components/core/Icon.jsx":"832e0832c5fe","components/core/IconButton.jsx":"2afbbc03a9dd","components/core/SectionLabel.jsx":"6ac656f9d427","components/core/Tag.jsx":"1f0ac8198c30","components/data/BiomarkerRow.jsx":"178db9e2aabd","components/data/RangeBar.jsx":"480ba4d7cb50","components/data/Stat.jsx":"7913a7ed0b2a","components/data/StatusIndicator.jsx":"5f497de6cf22","components/feedback/Dialog.jsx":"0b992627b1bc","components/feedback/Toast.jsx":"3dfdced9d5f2","components/feedback/Tooltip.jsx":"67f8406d80b2","components/forms/Checkbox.jsx":"3d3d419d3183","components/forms/Input.jsx":"4ea279d0b41c","components/forms/Radio.jsx":"baaec1c3d32e","components/forms/Select.jsx":"95f08ecb1962","components/forms/Switch.jsx":"5137c876c686","components/navigation/NavBar.jsx":"70035a116ab0","components/navigation/Pager.jsx":"a13e306377a7","components/navigation/Tabs.jsx":"a26bf7095113","components/surfaces/Card.jsx":"9243d50529e0","components/surfaces/PhotoCard.jsx":"5c5dc57f3c84","ui_kits/website/About.jsx":"8067121f6fa9","ui_kits/website/Blog.jsx":"c57455b2bb34","ui_kits/website/Book.jsx":"ea48e9707e19","ui_kits/website/Hero.jsx":"ab56f8c9a4e1","ui_kits/website/OwnHealth.jsx":"95445016b63e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OrvixaDesignSystem_e60482 = window.OrvixaDesignSystem_e60482 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
const CDN = 'https://unpkg.com/lucide-static@0.460.0/icons/';
function Icon({
  name,
  size = 16,
  color = 'currentColor',
  style
}) {
  const url = 'url(' + CDN + name + '.svg)';
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      flex: 'none',
      width: size,
      height: size,
      background: color,
      WebkitMask: url + ' center/contain no-repeat',
      mask: url + ' center/contain no-repeat',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  icon,
  tone = 'outline',
  children,
  style
}) {
  const t = {
    outline: {
      bg: '#fff',
      bd: 'var(--border-default)',
      fg: 'var(--text-strong)'
    },
    glass: {
      bg: 'var(--glass-bg)',
      bd: 'transparent',
      fg: 'var(--text-strong)'
    },
    dark: {
      bg: 'var(--black)',
      bd: 'var(--black)',
      fg: '#fff'
    },
    muted: {
      bg: 'var(--gray-100)',
      bd: 'transparent',
      fg: 'var(--text-strong)'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 24,
      padding: '0 10px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + t.bd,
      background: t.bg,
      color: t.fg,
      font: '400 11px/1 var(--font-sans)',
      backdropFilter: tone === 'glass' ? 'blur(var(--blur-glass))' : undefined,
      whiteSpace: 'nowrap',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const SIZES = {
  sm: {
    h: 28,
    px: 14,
    fs: 12
  },
  md: {
    h: 36,
    px: 20,
    fs: 13
  },
  lg: {
    h: 44,
    px: 26,
    fs: 14
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  disabled,
  fullWidth,
  onClick,
  children,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = {
    primary: {
      bg: hover ? 'var(--gray-700)' : 'var(--black)',
      fg: 'var(--text-inverse)',
      bd: 'var(--black)'
    },
    secondary: {
      bg: hover ? 'var(--gray-50)' : 'var(--white)',
      fg: 'var(--text-strong)',
      bd: 'var(--border-strong)'
    },
    ghost: {
      bg: hover ? 'var(--gray-100)' : 'transparent',
      fg: 'var(--text-strong)',
      bd: 'transparent'
    },
    soft: {
      bg: hover ? 'var(--gray-200)' : 'var(--gray-100)',
      fg: 'var(--text-strong)',
      bd: 'transparent'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", {
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
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: s.h,
      padding: '0 ' + s.px + 'px',
      width: fullWidth ? '100%' : undefined,
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + v.bd,
      background: v.bg,
      color: v.fg,
      font: '500 ' + s.fs + 'px/1 var(--font-sans)',
      letterSpacing: '-0.005em',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transform: press ? 'scale(0.98)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.fs + 2
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.fs + 2
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  variant = 'outline',
  size = 32,
  disabled,
  onClick,
  label,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const v = {
    solid: {
      bg: hover ? 'var(--gray-700)' : 'var(--black)',
      fg: '#fff',
      bd: 'var(--black)'
    },
    outline: {
      bg: hover ? 'var(--gray-50)' : '#fff',
      fg: 'var(--text-strong)',
      bd: 'var(--border-default)'
    },
    ghost: {
      bg: hover ? 'var(--gray-100)' : 'transparent',
      fg: 'var(--text-strong)',
      bd: 'transparent'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      border: '1px solid ' + v.bd,
      background: v.bg,
      color: v.fg,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.35 : 1,
      padding: 0,
      transition: 'background var(--dur-fast)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.45)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function SectionLabel({
  variant = 'dot',
  children,
  style
}) {
  if (variant === 'eyebrow') return /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 var(--text-eyebrow)/1 var(--font-label)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-strong)',
      ...style
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      font: '400 11px/1 var(--font-sans)',
      color: 'var(--text-strong)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'var(--black)'
    }
  }), children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  dot,
  selected,
  onClick,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 24,
      padding: '0 10px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + (selected ? 'var(--black)' : 'var(--border-default)'),
      background: selected ? 'var(--black)' : '#fff',
      color: selected ? '#fff' : 'var(--text-body)',
      font: '400 11px/1 var(--font-sans)',
      cursor: onClick ? 'pointer' : 'default',
      whiteSpace: 'nowrap',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("i", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: dot
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/RangeBar.jsx
try { (() => {
const SEG = ['var(--rose-300)', 'var(--status-warn)', '#9fb5a3', 'var(--status-info)'];
function RangeBar({
  variant = 'segments',
  value = 50,
  segments = SEG,
  lowLabel,
  highLabel,
  style
}) {
  if (variant === 'slider') return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 4,
      borderRadius: 2,
      background: 'linear-gradient(90deg,var(--status-out) 0%,var(--status-warn) 25%,var(--status-optimal) 45%,var(--status-optimal) 70%,var(--status-warn) 85%,var(--status-out) 100%)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      position: 'absolute',
      top: -4,
      left: 'calc(' + value + '% - 6px)',
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: '#fff',
      border: '2px solid var(--black)',
      boxSizing: 'border-box'
    }
  })), (lowLabel || highLabel) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 6,
      font: '400 9px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, lowLabel), /*#__PURE__*/React.createElement("span", null, highLabel)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, (lowLabel || highLabel) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 6,
      font: '400 9px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, lowLabel), /*#__PURE__*/React.createElement("span", null, highLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3
    }
  }, segments.map((c, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    style: {
      flex: 1,
      height: 3,
      borderRadius: 2,
      background: c
    }
  }))));
}
Object.assign(__ds_scope, { RangeBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/RangeBar.jsx", error: String((e && e.message) || e) }); }

// components/data/Stat.jsx
try { (() => {
function Stat({
  value,
  label,
  size = 'lg',
  style
}) {
  const fs = size === 'lg' ? 'var(--text-stat)' : '28px';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 ' + fs + '/1 var(--font-heading)',
      letterSpacing: '-0.03em',
      color: 'var(--text-strong)'
    }
  }, value), label && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 9px var(--font-sans)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Stat.jsx", error: String((e && e.message) || e) }); }

// components/data/StatusIndicator.jsx
try { (() => {
const MAP = {
  optimal: ['var(--status-optimal)', 'Optimal'],
  'in-range': ['var(--status-in-range)', 'In Range'],
  out: ['var(--status-out)', 'Out of Range'],
  borderline: ['var(--status-warn)', 'Borderline']
};
function StatusIndicator({
  status = 'optimal',
  label,
  size = 'sm',
  style
}) {
  const [c, def] = MAP[status] || MAP.optimal;
  const fs = size === 'md' ? 12 : 10;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      font: '400 ' + fs + 'px/1 var(--font-sans)',
      color: status === 'out' ? 'var(--status-out)' : 'var(--text-strong)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: c
    }
  }), label ?? def);
}
Object.assign(__ds_scope, { StatusIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatusIndicator.jsx", error: String((e && e.message) || e) }); }

// components/data/BiomarkerRow.jsx
try { (() => {
const TINT = {
  mint: ['var(--mint-100)', 'var(--mint-500)'],
  peach: ['var(--peach-100)', 'var(--peach-500)'],
  blue: ['var(--periwinkle-100)', 'var(--periwinkle-600)'],
  rose: ['var(--rose-100)', 'var(--status-out)']
};
function BiomarkerRow({
  icon = 'activity',
  tint = 'mint',
  name,
  detail,
  status,
  statusLabel,
  elevated,
  style
}) {
  const [bg, fg] = TINT[tint] || TINT.mint;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 10px',
      background: '#fff',
      borderRadius: 'var(--radius-widget)',
      border: elevated ? '0' : '1px solid var(--border-subtle)',
      boxShadow: elevated ? 'var(--shadow-widget)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      flex: 'none',
      borderRadius: 6,
      background: bg,
      color: fg,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px/1.25 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, name), detail && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 10px/1.3 var(--font-sans)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, detail)), status && /*#__PURE__*/React.createElement(__ds_scope.StatusIndicator, {
    status: status,
    label: statusLabel
  }));
}
Object.assign(__ds_scope, { BiomarkerRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/BiomarkerRow.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  onClose,
  children,
  footer,
  width = 420,
  inline
}) {
  if (!open) return null;
  const panel = /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    style: {
      width,
      maxWidth: '100%',
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 20px/1.25 var(--font-heading)',
      letterSpacing: '-0.012em',
      color: 'var(--text-strong)'
    }
  }, title), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    size: 28,
    variant: "ghost",
    onClick: onClose,
    label: "Close"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.5 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      marginTop: 20
    }
  }, footer));
  if (inline) return panel;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(20,20,30,.28)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation()
  }, panel));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = 'default',
  title,
  message,
  icon,
  onClose,
  style
}) {
  const ic = icon || {
    default: 'info',
    success: 'circle-check',
    error: 'circle-alert'
  }[tone];
  const c = {
    default: 'var(--text-strong)',
    success: 'var(--status-optimal)',
    error: 'var(--status-out)'
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      width: 340,
      padding: '12px 14px',
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ic,
    size: 16,
    color: c,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 13px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 12px/1.45 var(--font-sans)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, message)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      border: 0,
      background: 'none',
      padding: 0,
      cursor: 'pointer',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  children,
  placement = 'top',
  open
}) {
  const [hover, setHover] = React.useState(false);
  const show = open ?? hover;
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 6px)'
  } : {
    bottom: 'calc(100% + 6px)'
  };
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      ...pos,
      background: 'var(--black)',
      color: '#fff',
      font: '400 11px/1.35 var(--font-sans)',
      padding: '6px 9px',
      borderRadius: 6,
      whiteSpace: 'nowrap',
      zIndex: 50
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled,
  style
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked ?? inner;
  const toggle = () => {
    if (disabled) return;
    setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: toggle,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      font: '400 13px var(--font-sans)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      border: '1px solid ' + (on ? 'var(--black)' : 'var(--gray-300)'),
      background: on ? 'var(--black)' : '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 10,
    color: "#fff"
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  hint,
  error,
  icon,
  placeholder,
  value,
  defaultValue,
  onChange,
  type = 'text',
  disabled,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const bd = error ? 'var(--status-out)' : focus ? 'var(--border-strong)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 40,
      padding: '0 14px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid ' + bd,
      background: disabled ? 'var(--gray-50)' : '#fff',
      boxShadow: focus && !error ? 'var(--ring-focus)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 0,
      background: 'transparent',
      font: '400 13px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  })), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: error ? 'var(--status-out)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  options = [],
  value,
  defaultValue,
  onChange,
  name,
  style
}) {
  const [inner, setInner] = React.useState(defaultValue);
  const cur = value ?? inner;
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }, options.map(o => {
    const v = typeof o === 'string' ? o : o.value,
      l = typeof o === 'string' ? o : o.label,
      on = cur === v;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      onClick: () => {
        setInner(v);
        onChange && onChange(v);
      },
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        cursor: 'pointer',
        font: '400 13px var(--font-sans)',
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 16,
        height: 16,
        borderRadius: '50%',
        border: '1px solid ' + (on ? 'var(--black)' : 'var(--gray-300)'),
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, on && /*#__PURE__*/React.createElement("i", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--black)'
      }
    })), l);
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  defaultValue,
  onChange,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    style: {
      appearance: 'none',
      width: '100%',
      height: 40,
      padding: '0 36px 0 14px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-default)',
      background: disabled ? 'var(--gray-50)' : '#fff',
      font: '400 13px var(--font-sans)',
      color: 'var(--text-strong)',
      outline: 0
    }
  }, options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 14,
    color: "var(--text-muted)",
    style: {
      position: 'absolute',
      right: 14,
      top: 13,
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled,
  style
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked ?? inner;
  return /*#__PURE__*/React.createElement("label", {
    onClick: () => {
      if (disabled) return;
      setInner(!on);
      onChange && onChange(!on);
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      font: '400 13px var(--font-sans)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 20,
      borderRadius: 999,
      background: on ? 'var(--black)' : 'var(--gray-200)',
      position: 'relative',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? 16 : 2,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-xs)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  brand = 'Orvixa',
  links = [],
  onLogin,
  onCta,
  ctaLabel = 'Get Started',
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 64,
      padding: '0 32px',
      background: '#fff',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 17px var(--font-sans)',
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)'
    }
  }, brand), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28
    }
  }, links.map(l => {
    const lab = l.label ?? l;
    return /*#__PURE__*/React.createElement("a", {
      key: lab,
      href: l.href || '#',
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        font: '400 12px var(--font-sans)',
        color: 'var(--text-strong)'
      }
    }, lab, l.menu && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-down",
      size: 12
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onLogin && onLogin();
    },
    style: {
      font: '400 12px var(--font-sans)'
    }
  }, "Login"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    onClick: onCta
  }, ctaLabel)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pager.jsx
try { (() => {
function Pager({
  index = 0,
  count = 3,
  onChange,
  arrows = false,
  style
}) {
  const go = i => onChange && onChange(Math.max(0, Math.min(count - 1, i)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 36,
      height: 2,
      background: 'var(--gray-200)',
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      height: 2,
      width: (index + 1) / count * 100 + '%',
      background: 'var(--black)',
      borderRadius: 2,
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })), !arrows && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 10px var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, index + 1, "/", count), arrows && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "arrow-left",
    size: 28,
    variant: "ghost",
    disabled: index === 0,
    onClick: () => go(index - 1),
    label: "Previous"
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "arrow-right",
    size: 28,
    variant: "solid",
    disabled: index === count - 1,
    onClick: () => go(index + 1),
    label: "Next"
  })));
}
Object.assign(__ds_scope, { Pager });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pager.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style
}) {
  const [inner, setInner] = React.useState(defaultValue ?? (items[0] && (items[0].value ?? items[0])));
  const cur = value ?? inner;
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: 6,
      flexWrap: 'wrap',
      ...style
    }
  }, items.map(it => {
    const v = it.value ?? it,
      l = it.label ?? it,
      on = v === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => {
        setInner(v);
        onChange && onChange(v);
      },
      style: {
        height: 28,
        padding: '0 12px',
        borderRadius: 999,
        border: '1px solid ' + (on ? 'var(--black)' : 'var(--border-default)'),
        background: on ? 'var(--black)' : '#fff',
        color: on ? '#fff' : 'var(--text-strong)',
        font: '400 11px/1 var(--font-sans)',
        cursor: 'pointer',
        transition: 'background var(--dur-fast)'
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
const TONES = {
  white: 'var(--surface-card)',
  muted: 'var(--surface-muted)',
  blue: 'var(--surface-panel-blue)',
  mint: 'var(--surface-panel-mint)',
  peach: 'var(--surface-panel-peach)',
  dark: 'var(--surface-inverse)'
};
function Card({
  tone = 'white',
  padding = 16,
  elevated,
  bordered,
  radius = 'var(--radius-card)',
  children,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      background: TONES[tone] || TONES.white,
      color: tone === 'dark' ? '#fff' : undefined,
      borderRadius: radius,
      padding,
      border: bordered ? '1px solid var(--border-subtle)' : '0',
      boxShadow: elevated ? 'var(--shadow-md)' : 'none',
      cursor: onClick ? 'pointer' : undefined,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/PhotoCard.jsx
try { (() => {
function PhotoCard({
  src,
  alt = '',
  height = 240,
  overlay,
  topLeft,
  radius = 'var(--radius-photo)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      borderRadius: radius,
      overflow: 'hidden',
      background: 'var(--gray-100)',
      ...style
    }
  }, src && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), topLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10
    }
  }, topLeft), overlay && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 10,
      right: 10,
      bottom: 10,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, overlay));
}
Object.assign(__ds_scope, { PhotoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/PhotoCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
(() => {
  const {
    SectionLabel,
    Card,
    Icon,
    Button,
    PhotoCard,
    BiomarkerRow,
    Tag,
    Stat
  } = window.OrvixaDesignSystem_e60482;
  function WhoWeAre() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '48px 32px 72px',
        maxWidth: 1200,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(SectionLabel, null, "Who We Are"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'var(--text-h2)',
        lineHeight: 1.2,
        letterSpacing: 'var(--ls-h2)',
        maxWidth: 760,
        marginTop: 20
      }
    }, "From daily choices to long-term longevity, our science-driven system helps you stay informed, track change, healthier \u2014 right at home."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 4,
        marginTop: 32
      }
    }, ['Our Story', 'Our Solutions'].map(t => /*#__PURE__*/React.createElement(Card, {
      key: t,
      tone: "muted",
      padding: 10,
      onClick: () => {},
      style: {
        width: 180,
        height: 96,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        fontSize: 11,
        color: 'var(--text-strong)'
      }
    }, t, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 12
    })))), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 11,
        color: 'var(--text-muted)',
        maxWidth: 260,
        marginTop: 14
      }
    }, "Analysing key metabolic, hormonal, and preventive health indicators before symptoms appear."));
  }
  function Insights({
    onStart
  }) {
    const cats = [['DNA', 'dna'], ['Heart', 'heart'], ['Liver', 'liver'], ['Thyroid', 'thyroid'], ['Immunity', 'immunity'], ['Kidney', 'kidney']];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '48px 32px',
        maxWidth: 1200,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr)',
        gap: 28
      }
    }, /*#__PURE__*/React.createElement(PhotoCard, {
      src: "../../assets/imagery/clinician-patient.png",
      height: 300,
      topLeft: /*#__PURE__*/React.createElement("span", {
        style: {
          background: '#fff',
          borderRadius: 999,
          padding: '4px 9px',
          fontSize: 9
        }
      }, "Rated 5.0"),
      overlay: /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 4,
          flexWrap: 'wrap'
        }
      }, cats.map(([n, k]) => /*#__PURE__*/React.createElement(Tag, {
        key: k,
        dot: 'var(--cat-' + k + ')'
      }, n)))
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'var(--text-h3)',
        lineHeight: 1.25
      }
    }, "One health test.", /*#__PURE__*/React.createElement("br", null), "800+ health insights"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 11,
        color: 'var(--text-muted)',
        margin: '10px 0 16px',
        maxWidth: 280
      }
    }, "100+ advanced biomarkers \u2014 measuring everything from metabolic and hormonal imbalances to early indicators."), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: onStart
    }, "Start Testing")), /*#__PURE__*/React.createElement(Stat, {
      value: "100+",
      label: "Advanced biomarkers"
    })));
  }
  function GoldStandard({
    onStart
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '80px 32px',
        maxWidth: 1200,
        margin: '0 auto',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'var(--text-h2)',
        lineHeight: 1.2,
        maxWidth: 420,
        margin: '0 auto'
      }
    }, "The gold standard in health improvement"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 10,
        color: 'var(--text-muted)',
        margin: '10px 0 16px'
      }
    }, "No Unproven Labs. No Unreliable At-Home Blood Draws."), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: onStart
    }, "Get Started"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 32
      }
    }, /*#__PURE__*/React.createElement(PhotoCard, {
      src: "../../assets/imagery/beach-man.png",
      height: 260,
      style: {
        width: 200
      }
    }), /*#__PURE__*/React.createElement(PhotoCard, {
      src: "../../assets/imagery/portrait-curly.png",
      height: 320,
      style: {
        width: 250
      },
      topLeft: /*#__PURE__*/React.createElement("span", {
        style: {
          font: '300 34px var(--font-sans)',
          color: '#fff'
        }
      }, "90"),
      overlay: /*#__PURE__*/React.createElement(BiomarkerRow, {
        elevated: true,
        icon: "heart",
        name: "HDL Cholesterol",
        detail: "Serum Cobalamin",
        status: "optimal"
      })
    }), /*#__PURE__*/React.createElement(PhotoCard, {
      src: "../../assets/imagery/beach-man-stretch.png",
      height: 260,
      style: {
        width: 200
      }
    })));
  }
  Object.assign(window, {
    WhoWeAre,
    Insights,
    GoldStandard
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Blog.jsx
try { (() => {
(() => {
  const {
    Icon,
    PhotoCard
  } = window.OrvixaDesignSystem_e60482;
  const POSTS = [['Magnesium Glycinate vs. Threonate: Which is Best for Sleep?', 'blog-1', 'November 10, 2025'], ['High Folate Levels: How Much Folic Acid Is Too Much?', 'blog-2', 'October 8, 2025']];
  function Blog() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '64px 32px 96px',
        maxWidth: 1200,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'var(--text-h2)',
        lineHeight: 1.2,
        marginBottom: 28
      }
    }, "Blog & Medical Insights"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
        gap: 20
      }
    }, POSTS.map(([t, img, d]) => /*#__PURE__*/React.createElement("a", {
      key: t,
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-strong)',
        lineHeight: 1.35,
        minHeight: 36
      }
    }, t), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 10,
        color: 'var(--text-strong)'
      }
    }, "Read More ", /*#__PURE__*/React.createElement("span", {
      style: {
        width: 14,
        height: 14,
        borderRadius: '50%',
        background: 'var(--black)',
        color: '#fff',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 8
    }))), /*#__PURE__*/React.createElement(PhotoCard, {
      src: '../../assets/imagery/' + img + '.png',
      height: 180
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 10,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        width: 4,
        height: 4,
        borderRadius: '50%',
        background: 'var(--black)'
      }
    }), d)))));
  }
  Object.assign(window, {
    Blog
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Blog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Book.jsx
try { (() => {
(() => {
  const {
    Button,
    Checkbox,
    PhotoCard,
    BiomarkerRow,
    Icon,
    Card,
    IconButton,
    Pager,
    Badge,
    RangeBar
  } = window.OrvixaDesignSystem_e60482;
  const BOOK = [['calendar', 'Easily book your lab test', 'Book your annual blood test in the app—at home or at a Quest Diagnostics lab any time.'], ['file-text', 'Review results of the test', 'Your results are reviewed by clinicians who look at your health history to surface what matters.'], ['refresh-cw', 'Take the test again', 'Health is not one test—it\'s a pattern. Recheck key markers every 6–12 months to see what\'s changing.']];
  function BookTest({
    onStart
  }) {
    const [a, setA] = React.useState(0);
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '72px 32px',
        maxWidth: 1200,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
        gap: 40,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(PhotoCard, {
      src: "../../assets/imagery/remote-consult.png",
      height: 280,
      overlay: /*#__PURE__*/React.createElement("div", {
        style: {
          width: 220,
          display: 'flex',
          flexDirection: 'column',
          gap: 6
        }
      }, /*#__PURE__*/React.createElement(BiomarkerRow, {
        elevated: true,
        icon: "flask-conical",
        name: "Apolipoprotein B (ApoB)",
        detail: "97 mg/dL",
        status: "optimal"
      }), /*#__PURE__*/React.createElement(BiomarkerRow, {
        elevated: true,
        icon: "activity",
        tint: "peach",
        name: "Blood Sugar Level",
        detail: "152 mg/dL",
        status: "out"
      }))
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'var(--text-h2)',
        lineHeight: 1.2
      }
    }, "Easily book your", /*#__PURE__*/React.createElement("br", null), "lab test today"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 10,
        color: 'var(--text-muted)',
        margin: '10px 0 20px'
      }
    }, "You've Seen The Specialists. But No One Connected The Dots\u2014Until Now."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, ['100+ biomarkers in1 blood draw', 'All in one lab testing for all', 'Test completed in in less than 15 min'].map(t => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        padding: '10px 0',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      checked: true,
      label: /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 12,
          color: 'var(--text-strong)'
        }
      }, t)
    })))), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      style: {
        marginTop: 24
      },
      onClick: onStart
    }, "Start Testing"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
        gap: 24,
        marginTop: 40
      }
    }, BOOK.map(([ic, t, d], i) => /*#__PURE__*/React.createElement("div", {
      key: t,
      onClick: () => setA(i),
      style: {
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 2,
        background: i === a ? 'var(--black)' : 'var(--gray-200)',
        marginBottom: 18,
        transition: 'background var(--dur-base)'
      }
    }), /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 14
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-strong)',
        margin: '10px 0 6px'
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 10,
        color: 'var(--text-muted)',
        maxWidth: 260
      }
    }, d)))));
  }
  const SLIDES = [{
    k: 'Health Dashboard',
    t: 'Your health story, simplified',
    tone: 'muted'
  }, {
    k: 'Biomarkers',
    t: 'Real answers, not just data',
    tone: 'blue'
  }, {
    k: 'Care Plan',
    t: 'Your unique blueprint for health',
    tone: 'mint'
  }];
  function MoreInsights() {
    const [i, setI] = React.useState(0);
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '48px 32px 72px',
        maxWidth: 1200,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'var(--text-h2)',
        lineHeight: 1.2,
        maxWidth: 380
      }
    }, "3x more insights than a routine physical"), /*#__PURE__*/React.createElement(Pager, {
      index: i,
      count: 3,
      arrows: true,
      onChange: setI
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Card, {
      tone: "muted",
      padding: 0,
      style: {
        height: 320,
        overflow: 'hidden',
        position: 'relative',
        outline: i === 0 ? '1px solid var(--black)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/imagery/portrait-braids.png",
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        padding: 14
      }
    }, /*#__PURE__*/React.createElement(Badge, null, "Health Dashboard"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--text-strong)',
        marginTop: 8
      }
    }, "Your health story, simplified")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 12,
        bottom: 12,
        width: 170
      }
    }, /*#__PURE__*/React.createElement(Card, {
      elevated: true,
      padding: 10
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--text-strong)'
      }
    }, "Hormone & Female Health"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: 'var(--text-muted)',
        margin: '4px 0 8px'
      }
    }, "2 Optimal \xB7 2 Out of Range"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      style: {
        height: 22,
        fontSize: 10,
        padding: '0 10px'
      }
    }, "Explore Results")))), /*#__PURE__*/React.createElement(Card, {
      tone: "blue",
      padding: 14,
      style: {
        height: 320,
        outline: i === 1 ? '1px solid var(--black)' : 'none'
      }
    }, /*#__PURE__*/React.createElement(Badge, null, "Biomarkers"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--text-strong)',
        margin: '8px 0 14px'
      }
    }, "Real answers, not just data"), /*#__PURE__*/React.createElement(Card, {
      elevated: true,
      padding: 12,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        textAlign: 'center',
        color: 'var(--text-strong)'
      }
    }, "You're Doing Great!"), [['Total Cholesterol', 62], ['Glucose', 48], ['HDL Cholesterol', 70]].map(([n, v]) => /*#__PURE__*/React.createElement("div", {
      key: n
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 10,
        color: 'var(--text-strong)',
        marginBottom: 6
      }
    }, n, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--status-optimal)'
      }
    }, "\u25CF In Range")), /*#__PURE__*/React.createElement(RangeBar, {
      variant: "slider",
      value: v
    }))))), /*#__PURE__*/React.createElement(Card, {
      tone: "mint",
      padding: 14,
      style: {
        height: 320,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        outline: i === 2 ? '1px solid var(--black)' : 'none'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      style: {
        alignSelf: 'flex-start'
      }
    }, "Care Plan"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--text-strong)',
        marginBottom: 6
      }
    }, "Your unique blueprint for health"), /*#__PURE__*/React.createElement(BiomarkerRow, {
      elevated: true,
      icon: "user",
      tint: "blue",
      name: "Shannon",
      detail: "Age 30, Colorado"
    }), /*#__PURE__*/React.createElement(BiomarkerRow, {
      elevated: true,
      icon: "leaf",
      name: "Psyllium Husk",
      detail: "Soluble fiber"
    }), /*#__PURE__*/React.createElement(BiomarkerRow, {
      elevated: true,
      icon: "fish",
      tint: "blue",
      name: "Omega-3 fatty acids",
      detail: "Triglycerides"
    }), /*#__PURE__*/React.createElement(BiomarkerRow, {
      elevated: true,
      icon: "heart-pulse",
      tint: "peach",
      name: "Cardio & Running",
      detail: "30 min \xB7 moderate intensity"
    }))));
  }
  Object.assign(window, {
    BookTest,
    MoreInsights
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Book.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
(() => {
  const {
    Button,
    Badge,
    BiomarkerRow,
    RangeBar,
    Card,
    PhotoCard,
    SectionLabel
  } = window.OrvixaDesignSystem_e60482;
  function Hero({
    onStart
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '56px 32px 0',
        maxWidth: 1200,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      icon: "badge-check"
    }, "HSA/FSA Eligible"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'var(--text-display)',
        lineHeight: 'var(--lh-display)',
        letterSpacing: 'var(--ls-display)',
        maxWidth: 680
      }
    }, "Long-Term Health Starts With Knowing Your Body."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        maxWidth: 440
      }
    }, "Get a full picture of your health with 100+ biomarkers, expert doctor insights, and clear action steps \u2014 all from the comfort of your home."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: onStart
    }, "Start Testing"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: onStart
    }, "Start Testing"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,2fr)',
        gap: 10,
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement(PhotoCard, {
      src: "../../assets/imagery/hero-senior-man.png",
      height: 340,
      overlay: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BiomarkerRow, {
        elevated: true,
        icon: "leaf",
        name: "Gut Health",
        status: "optimal",
        statusLabel: "Microbiome"
      }), /*#__PURE__*/React.createElement(BiomarkerRow, {
        elevated: true,
        icon: "pill",
        tint: "peach",
        name: "Vitamin B12",
        status: "borderline",
        statusLabel: "Serum Cobalamin"
      }))
    }), /*#__PURE__*/React.createElement(Card, {
      tone: "blue",
      padding: 0,
      style: {
        position: 'relative',
        height: 340,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      elevated: true,
      padding: 18,
      radius: "12px 12px 0 0",
      style: {
        width: 260,
        height: 290
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 17,
        color: 'var(--text-strong)',
        marginBottom: 14
      }
    }, "Your Health Profile"), /*#__PURE__*/React.createElement(RangeBar, {
      lowLabel: "UC - 2VL",
      highLabel: "RX - YCL"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--text-strong)',
        margin: '18px 0 8px'
      }
    }, "Optimal"), /*#__PURE__*/React.createElement(BiomarkerRow, {
      icon: "heart-pulse",
      name: "Heart Health",
      detail: "LDL Cholesterol: 88 mg/dL",
      status: "optimal"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--text-strong)',
        margin: '16px 0 8px'
      }
    }, "Need Care"), /*#__PURE__*/React.createElement(BiomarkerRow, {
      icon: "droplet",
      tint: "rose",
      name: "Blood Health",
      detail: "Ferritin: 30 ng/mL",
      status: "out"
    })), /*#__PURE__*/React.createElement(Card, {
      elevated: true,
      padding: 12,
      style: {
        position: 'absolute',
        right: '14%',
        top: '44%',
        width: 150
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--text-strong)'
      }
    }, "Vitamin D"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        fontSize: 9,
        margin: '4px 0 6px'
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        width: 6,
        height: 6,
        borderRadius: 2,
        background: 'var(--status-optimal)'
      }
    }), "Optimal"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 24,
        letterSpacing: '-0.02em',
        color: 'var(--text-strong)'
      }
    }, "60.4 ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: 'var(--text-muted)'
      }
    }, "mg/dL"))))));
  }
  function Press() {
    const names = ['SCX', 'BuzzFeed', 'Men’s Health', 'Forbes', 'GQ'];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '48px 32px',
        maxWidth: 1200,
        margin: '0 auto',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(SectionLabel, {
      variant: "eyebrow"
    }, "Featured in press"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5,minmax(0,1fr))',
        gap: 10,
        marginTop: 20
      }
    }, names.map(n => /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        height: 72,
        borderRadius: 8,
        background: 'var(--gray-50)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        font: '600 18px var(--font-sans)',
        color: 'var(--gray-500)',
        letterSpacing: '-0.02em'
      }
    }, n))));
  }
  Object.assign(window, {
    Hero,
    Press
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/OwnHealth.jsx
try { (() => {
(() => {
  const {
    Tabs,
    Pager,
    Card,
    Badge,
    Checkbox,
    PhotoCard,
    BiomarkerRow,
    RangeBar,
    IconButton
  } = window.OrvixaDesignSystem_e60482;
  const STEPS = [{
    tab: 'Schedule Tests',
    title: 'Schedule 100+ lab tests every year',
    img: 'senior-woman-screening',
    items: ['Complete testing in one lab visit', '100+ lab tests included', 'No insurance needed', '2,000+ Quest lab locations']
  }, {
    tab: 'Get 100+ Results',
    title: 'Get results for 100+ biomarkers',
    img: 'senior-bp',
    items: ['Results in about a week', 'Clinician-reviewed', 'Clear optimal ranges', 'Tracked over time']
  }, {
    tab: 'Take Action',
    title: 'Take action with a personal plan',
    img: 'family-care',
    items: ['Personalised care plan', 'Nutrition & supplement guidance', 'Retest every 6 months', 'Doctor follow-ups']
  }];
  function OwnHealth() {
    const [i, setI] = React.useState(0);
    const s = STEPS[i];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--bg-section)',
        padding: '64px 32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1200,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'var(--text-h2)',
        lineHeight: 1.2
      }
    }, "It's time you own", /*#__PURE__*/React.createElement("br", null), "your health."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 10,
        color: 'var(--text-muted)',
        marginTop: 8
      }
    }, "Starting With 100+ Lab Tests And Insights From Top Doctors."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '24px 0 16px'
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      items: STEPS.map(x => x.tab),
      value: s.tab,
      onChange: v => setI(STEPS.findIndex(x => x.tab === v))
    }), /*#__PURE__*/React.createElement(Pager, {
      index: i,
      count: 3
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr) minmax(0,0.8fr)',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: 20,
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: 300
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
      tone: "muted"
    }, "Step ", i + 1), /*#__PURE__*/React.createElement("h4", {
      style: {
        fontSize: 'var(--text-h4)',
        marginTop: 12,
        maxWidth: 220
      }
    }, s.title)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, s.items.map(t => /*#__PURE__*/React.createElement(Checkbox, {
      key: t,
      checked: true,
      label: /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 11
        }
      }, t)
    })))), /*#__PURE__*/React.createElement(PhotoCard, {
      src: '../../assets/imagery/' + s.img + '.png',
      height: 300,
      overlay: /*#__PURE__*/React.createElement(BiomarkerRow, {
        elevated: true,
        icon: "user",
        tint: "blue",
        name: "Sharnon",
        detail: "Diabetes Screening"
      })
    }), /*#__PURE__*/React.createElement(Card, {
      tone: "blue",
      padding: 14,
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Card, {
      elevated: true,
      padding: 12
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--text-muted)'
      }
    }, "Serva Health Score"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 26,
        color: 'var(--text-strong)',
        margin: '4px 0 8px'
      }
    }, "72"), /*#__PURE__*/React.createElement(RangeBar, {
      variant: "slider",
      value: 70
    })), /*#__PURE__*/React.createElement(BiomarkerRow, {
      elevated: true,
      icon: "flask-conical",
      name: "Apolipoprotein B (ApoB)",
      detail: "97 mg/dL",
      status: "optimal"
    }), /*#__PURE__*/React.createElement(BiomarkerRow, {
      elevated: true,
      icon: "activity",
      tint: "peach",
      name: "Blood Sugar Level",
      detail: "152 mg/dL",
      status: "out"
    })))));
  }
  Object.assign(window, {
    OwnHealth
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/OwnHealth.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.BiomarkerRow = __ds_scope.BiomarkerRow;

__ds_ns.RangeBar = __ds_scope.RangeBar;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.StatusIndicator = __ds_scope.StatusIndicator;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Pager = __ds_scope.Pager;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.PhotoCard = __ds_scope.PhotoCard;

})();

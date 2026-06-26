/* @ds-bundle: {"format":3,"namespace":"SetaDesignSystem_4f3422","components":[{"name":"ChatComposer","sourcePath":"components/agent/ChatComposer.jsx"},{"name":"ChatMessage","sourcePath":"components/agent/ChatMessage.jsx"},{"name":"ChatToolCall","sourcePath":"components/agent/ChatToolCall.jsx"},{"name":"HitlCard","sourcePath":"components/agent/HitlCard.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardTitle","sourcePath":"components/core/Card.jsx"},{"name":"CardDescription","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"KbdHint","sourcePath":"components/core/KbdHint.jsx"},{"name":"SegmentedControl","sourcePath":"components/core/SegmentedControl.jsx"},{"name":"StatusPill","sourcePath":"components/core/StatusPill.jsx"},{"name":"KanbanCard","sourcePath":"components/planner/KanbanCard.jsx"},{"name":"LabelChip","sourcePath":"components/planner/LabelChip.jsx"},{"name":"PriorityIcon","sourcePath":"components/planner/PriorityIcon.jsx"}],"sourceHashes":{"components/agent/ChatComposer.jsx":"5e1a018be97a","components/agent/ChatMessage.jsx":"153a9aa7daf5","components/agent/ChatToolCall.jsx":"21732867dc23","components/agent/HitlCard.jsx":"23bf6dffc283","components/core/Avatar.jsx":"dff02e70d335","components/core/Badge.jsx":"399ea3082c71","components/core/Button.jsx":"243b0ce9adca","components/core/Card.jsx":"e568c3b145bd","components/core/Input.jsx":"1328e0e834c4","components/core/KbdHint.jsx":"a7d6a22a340c","components/core/SegmentedControl.jsx":"69e00db42875","components/core/StatusPill.jsx":"f3a31d0754f7","components/planner/KanbanCard.jsx":"3cb76cca859b","components/planner/LabelChip.jsx":"f9cd6fc3911f","components/planner/PriorityIcon.jsx":"101f7ed36e8b","ui_kits/agent-platform/app.jsx":"4bd819c69120","ui_kits/agent-platform/login.jsx":"81645997b0a7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SetaDesignSystem_4f3422 = window.SetaDesignSystem_4f3422 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/agent/ChatComposer.jsx
try { (() => {
/** Seta ChatComposer — rounded-xl message box with attach + send. */
function ChatComposer({
  value = '',
  onChange,
  onSubmit,
  placeholder = 'Message your assistant…',
  pending = false,
  disabled = false,
  permissionHint,
  onAttach,
  className,
  style
}) {
  const ref = React.useRef(null);
  const [focus, setFocus] = React.useState(false);
  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 160) + 'px';
  }, [value]);
  const canSend = !disabled && !pending && value.trim().length > 0;
  const submit = () => {
    if (canSend) onSubmit?.();
  };
  const onKey = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      borderTop: '1px solid var(--color-hairline)',
      background: 'var(--color-canvas)',
      padding: '14px 16px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 auto',
      maxWidth: 'var(--max-width-conversation)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      padding: '10px 12px 8px',
      background: focus ? 'var(--color-surface-1)' : 'var(--color-canvas)',
      border: `1px solid ${focus ? 'var(--color-primary-border)' : 'var(--color-hairline)'}`,
      boxShadow: focus ? '0 0 0 3px var(--color-primary-tint)' : 'var(--shadow-sm)',
      transition: 'border-color 150ms, background-color 150ms, box-shadow 150ms'
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    ref: ref,
    rows: 1,
    value: value,
    placeholder: placeholder,
    disabled: disabled || pending,
    onChange: e => onChange?.(e.target.value),
    onKeyDown: onKey,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      display: 'block',
      width: '100%',
      resize: 'none',
      overflowY: 'auto',
      background: 'transparent',
      border: 'none',
      outline: 'none',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-body-sm)',
      lineHeight: 1.45,
      color: 'var(--color-ink)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 'var(--text-caption)',
      color: 'var(--color-ink-subtle)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAttach,
    "aria-label": "Attach file",
    style: {
      width: 28,
      height: 28,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-md)',
      border: 'none',
      background: 'transparent',
      color: 'var(--color-ink-subtle)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
  }))), permissionHint && /*#__PURE__*/React.createElement("span", null, permissionHint)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: submit,
    disabled: !canSend,
    "aria-label": "Send",
    style: {
      width: 28,
      height: 28,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-md)',
      border: 'none',
      cursor: canSend ? 'pointer' : 'not-allowed',
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)',
      opacity: canSend ? 1 : 0.4
    }
  }, pending ? /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    style: {
      animation: 'seta-spin 0.8s linear infinite'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 12a9 9 0 1 1-6.219-8.56"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m22 2-7 20-4-9-9-4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 2 11 13"
  })))))), /*#__PURE__*/React.createElement("style", null, `@keyframes seta-spin { to { transform: rotate(360deg) } }`));
}
Object.assign(__ds_scope, { ChatComposer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/agent/ChatComposer.jsx", error: String((e && e.message) || e) }); }

// components/agent/ChatMessage.jsx
try { (() => {
/** Seta ChatMessage — user bubble (right) or agent rail (left, primary line). */
function ChatMessage({
  variant = 'agent',
  author,
  timestamp,
  dim = false,
  className,
  style,
  children
}) {
  const clock = timestamp instanceof Date ? timestamp.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  }) : timestamp || null;
  if (variant === 'user') {
    return /*#__PURE__*/React.createElement("div", {
      className: className,
      style: {
        display: 'flex',
        justifyContent: 'flex-end',
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--max-width-message-bubble)',
        background: 'var(--color-surface-2)',
        color: 'var(--color-ink)',
        borderRadius: 16,
        borderTopRightRadius: 8,
        padding: '8px 14px',
        fontFamily: 'var(--font-text)',
        fontSize: 'var(--text-body-sm)',
        lineHeight: 1.5
      }
    }, children));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      position: 'relative',
      paddingLeft: 14,
      opacity: dim ? 0.7 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 4,
      bottom: 4,
      width: 1,
      borderRadius: 9999,
      background: 'var(--color-primary)'
    }
  }), (author || clock) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 4,
      fontSize: 10,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: 'var(--color-ink-subtle)'
    }
  }, author, author && clock ? ' · ' : '', clock), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-body-sm)',
      lineHeight: 1.5,
      color: 'var(--color-ink)'
    }
  }, children));
}
Object.assign(__ds_scope, { ChatMessage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/agent/ChatMessage.jsx", error: String((e && e.message) || e) }); }

// components/agent/ChatToolCall.jsx
try { (() => {
/** Seta ChatToolCall — collapsible tool-invocation chip with a status dot. */
const DOT = {
  running: 'var(--color-primary)',
  ok: 'var(--color-semantic-success)',
  error: 'var(--color-destructive)'
};
const FALLBACK = {
  running: 'running…',
  ok: null,
  error: 'failed'
};
function ChatToolCall({
  name,
  status = 'ok',
  summary,
  duration,
  payload,
  className,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const expandable = payload != null;
  const trailing = summary ?? FALLBACK[status];
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      margin: '4px 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => expandable && setOpen(v => !v),
    disabled: !expandable,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      width: 'fit-content',
      maxWidth: '100%',
      whiteSpace: 'nowrap',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${status === 'error' ? 'color-mix(in oklch, var(--color-destructive) 40%, transparent)' : 'var(--color-hairline)'}`,
      background: 'var(--color-surface-1)',
      padding: '4px 8px',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-caption)',
      color: 'var(--color-ink-muted)',
      cursor: expandable ? 'pointer' : 'default'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      flexShrink: 0,
      background: DOT[status],
      animation: status === 'running' ? 'seta-pulse 1.2s ease-in-out infinite' : 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--color-ink)'
    }
  }, name), trailing && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-ink-tertiary)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: status === 'error' ? 'var(--color-destructive)' : 'var(--color-ink-muted)'
    }
  }, trailing)), duration && status !== 'running' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-ink-tertiary)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--color-ink-subtle)'
    }
  }, duration)), expandable && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      color: 'var(--color-ink-tertiary)',
      transform: open ? 'rotate(90deg)' : 'none',
      transition: 'transform 120ms ease'
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "9 18 15 12 9 6"
  }))), open && payload != null && /*#__PURE__*/React.createElement("pre", {
    style: {
      maxHeight: 240,
      overflow: 'auto',
      margin: 0,
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--color-hairline)',
      background: 'var(--color-surface-2)',
      padding: '8px 10px',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      lineHeight: 1.6,
      color: 'var(--color-ink-muted)'
    }
  }, typeof payload === 'string' ? payload : JSON.stringify(payload, null, 2)), /*#__PURE__*/React.createElement("style", null, `@keyframes seta-pulse { 0%,100% { opacity: 1 } 50% { opacity: 0.35 } }`));
}
Object.assign(__ds_scope, { ChatToolCall });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/agent/ChatToolCall.jsx", error: String((e && e.message) || e) }); }

// components/agent/HitlCard.jsx
try { (() => {
const RISK_LABEL = {
  write: 'Write',
  destructive: 'Destructive',
  external: 'External'
};
const RISK_CLASS = {
  write: {
    background: 'var(--color-primary-tint)',
    color: 'var(--color-primary-ink)'
  },
  destructive: {
    background: 'var(--color-danger-tint)',
    color: 'var(--color-danger-ink)'
  },
  external: {
    background: 'var(--color-warning-tint)',
    color: 'var(--color-warning-ink)'
  }
};

/**
 * Seta HitlCard — the human-in-the-loop approval surface. A primary-bordered
 * card with a tinted header (Sparkles + intent + risk + countdown), a summary,
 * the proposed change as children, and approve / decline actions.
 */
function HitlCard({
  intent = 'Your input needed',
  riskBadge,
  summary,
  countdown,
  countdownTier = 'ok',
  primaryLabel = 'Approve',
  declineLabel = 'Decline',
  pending = false,
  disabled = false,
  onApprove,
  onDecline,
  children,
  className,
  style
}) {
  const [rejectOpen, setRejectOpen] = React.useState(false);
  const [note, setNote] = React.useState('');
  const countdownColor = countdownTier === 'urgent' ? 'var(--color-danger-ink)' : countdownTier === 'soon' ? 'var(--color-warning-ink)' : 'var(--color-primary-ink)';
  return /*#__PURE__*/React.createElement("section", {
    "aria-label": intent,
    className: className,
    style: {
      overflow: 'hidden',
      borderRadius: 'var(--radius-xl)',
      border: '1.5px solid var(--color-primary-border)',
      background: 'var(--color-canvas)',
      boxShadow: '0 0 0 4px var(--color-primary-tint), 0 10px 24px -14px rgb(0 0 0 / 0.25)',
      fontFamily: 'var(--font-text)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      borderBottom: '1px solid var(--color-primary-border)',
      background: 'var(--color-primary-tint)',
      padding: '8px 14px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--color-primary)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      marginTop: 3,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 3v4M3 5h4M6 17v4M4 19h4M13 3l2.5 6.5L22 12l-6.5 2.5L13 21l-2.5-6.5L4 12l6.5-2.5z"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      flex: 1,
      margin: 0,
      fontSize: 'var(--text-body-sm)',
      fontWeight: 600,
      color: 'var(--color-primary-ink)'
    }
  }, intent), riskBadge && /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      borderRadius: 4,
      padding: '1px 5px',
      fontSize: 10,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.03em',
      ...RISK_CLASS[riskBadge]
    }
  }, RISK_LABEL[riskBadge] || riskBadge), countdown && /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-caption)',
      fontVariantNumeric: 'tabular-nums',
      color: countdownColor
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 6 12 12 16 14"
  })), countdown)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px'
    }
  }, summary && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 10px',
      fontSize: 'var(--text-caption)',
      color: 'var(--color-ink-subtle)'
    }
  }, summary), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      opacity: disabled ? 0.6 : 1
    }
  }, children), !rejectOpen ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: onApprove,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      borderRadius: 'var(--radius-md)',
      border: 'none',
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)',
      padding: '7px 14px',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 600,
      cursor: disabled ? 'not-allowed' : 'pointer',
      boxShadow: 'var(--shadow-sm)',
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })), pending ? 'Working…' : primaryLabel), /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: () => setRejectOpen(true),
    style: {
      marginLeft: 'auto',
      borderRadius: 'var(--radius-md)',
      border: 'none',
      background: 'transparent',
      color: 'var(--color-danger-ink)',
      padding: '7px 14px',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-body-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, declineLabel)) : /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--color-hairline-strong)',
      background: 'var(--color-surface-1)',
      padding: 10
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 'var(--text-caption)',
      color: 'var(--color-ink-subtle)'
    }
  }, "Reason (optional)", /*#__PURE__*/React.createElement("textarea", {
    value: note,
    onChange: e => setNote(e.target.value),
    rows: 2,
    style: {
      marginTop: 4,
      width: '100%',
      resize: 'none',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--color-hairline-strong)',
      background: 'var(--color-canvas)',
      padding: '6px 10px',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--color-ink)',
      boxSizing: 'border-box',
      outline: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setRejectOpen(false);
      setNote('');
    },
    style: {
      borderRadius: 'var(--radius-md)',
      border: 'none',
      background: 'transparent',
      color: 'var(--color-ink-subtle)',
      padding: '6px 10px',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-body-sm)',
      cursor: 'pointer'
    }
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onDecline?.(note.trim() || undefined),
    style: {
      borderRadius: 'var(--radius-md)',
      border: 'none',
      background: 'var(--color-danger)',
      color: '#fff',
      padding: '6px 12px',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, "Confirm decline")))));
}
Object.assign(__ds_scope, { HitlCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/agent/HitlCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Deterministic avatar — initials on a hashed pastel from the Seta palette. */
const PALETTE = [['#f3d5d0', '#7a3a30'], ['#d8e7d3', '#2f5a2a'], ['#d4e0f3', '#2a4778'], ['#f3e6c8', '#7a5a1f'], ['#e7d4ef', '#5a2f78'], ['#d0e5e7', '#1f5a60'], ['#f0d8e2', '#7a2f4d']];
function hash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = h * 31 + s.charCodeAt(i) | 0;
  return Math.abs(h);
}
function Avatar({
  name = '?',
  size = 28,
  src,
  className,
  style,
  ...props
}) {
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('') || '?';
  const [bg, fg] = PALETTE[hash(name) % PALETTE.length];
  const common = {
    width: size,
    height: size,
    borderRadius: '50%',
    flexShrink: 0,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-text)',
    fontWeight: 600,
    fontSize: Math.round(size * 0.4),
    overflow: 'hidden',
    ...style
  };
  if (src) {
    return /*#__PURE__*/React.createElement("img", _extends({
      className: className,
      src: src,
      alt: name,
      style: {
        ...common,
        objectFit: 'cover'
      }
    }, props));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    "aria-label": name,
    style: {
      ...common,
      background: bg,
      color: fg
    }
  }, props), initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Seta Badge — pill label, 18px tall, eyebrow type. Primary-tint by default. */
const VARIANTS = {
  default: {
    background: 'var(--color-primary-tint)',
    color: 'var(--color-primary-ink)',
    border: '1px solid transparent'
  },
  secondary: {
    background: 'var(--color-surface-1)',
    color: 'var(--color-ink-muted)',
    border: '1px solid var(--color-hairline)'
  },
  destructive: {
    background: 'var(--color-destructive-tint)',
    color: 'var(--color-destructive)',
    border: '1px solid transparent'
  },
  success: {
    background: 'var(--color-semantic-success-tint)',
    color: 'var(--color-semantic-success)',
    border: '1px solid transparent'
  },
  warning: {
    background: 'var(--color-semantic-warning-tint)',
    color: 'var(--color-semantic-warning)',
    border: '1px solid transparent'
  },
  outline: {
    background: 'transparent',
    color: 'var(--color-ink)',
    border: '1px solid var(--color-hairline)'
  }
};
function Badge({
  variant = 'default',
  className,
  style,
  children,
  ...props
}) {
  const v = VARIANTS[variant] || VARIANTS.default;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      height: 18,
      padding: '0 6px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--text-eyebrow)',
      fontWeight: 500,
      lineHeight: 1,
      ...v,
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Seta Button — compact, keyboard-first. 8px radius, 13px/500 label.
 * Variants mirror the product's button.tsx; all colors come from CSS tokens.
 */
const SIZES = {
  default: {
    height: 32,
    padding: '0 10px',
    fontSize: 13
  },
  sm: {
    height: 28,
    padding: '0 8px',
    fontSize: 12
  },
  lg: {
    height: 36,
    padding: '0 16px',
    fontSize: 13
  },
  icon: {
    height: 32,
    width: 32,
    padding: 0,
    fontSize: 13
  }
};
const VARIANTS = {
  default: {
    background: 'var(--color-primary)',
    color: 'var(--color-on-primary)',
    border: '1px solid transparent',
    '--hover-bg': 'var(--color-primary-hover)'
  },
  primary: {
    background: 'var(--color-primary)',
    color: 'var(--color-on-primary)',
    border: '1px solid transparent',
    '--hover-bg': 'var(--color-primary-hover)'
  },
  secondary: {
    background: 'var(--color-surface-1)',
    color: 'var(--color-ink)',
    border: '1px solid var(--color-hairline)',
    '--hover-bg': 'var(--color-surface-2)'
  },
  tertiary: {
    background: 'var(--color-canvas)',
    color: 'var(--color-ink)',
    border: '1px solid transparent',
    '--hover-bg': 'var(--color-surface-1)'
  },
  inverse: {
    background: 'var(--color-inverse-canvas)',
    color: 'var(--color-inverse-ink)',
    border: '1px solid transparent',
    '--hover-bg': 'var(--color-inverse-surface-1)'
  },
  destructive: {
    background: 'var(--color-destructive)',
    color: 'var(--color-on-destructive)',
    border: '1px solid transparent',
    '--hover-bg': 'var(--color-destructive)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-ink-muted)',
    border: '1px solid transparent',
    '--hover-bg': 'var(--color-surface-2)'
  },
  link: {
    background: 'transparent',
    color: 'var(--color-primary)',
    border: '1px solid transparent',
    '--hover-bg': 'transparent'
  }
};
function Button({
  variant = 'default',
  size = 'default',
  disabled = false,
  className,
  style,
  children,
  ...props
}) {
  const s = SIZES[size] || SIZES.default;
  const v = VARIANTS[variant] || VARIANTS.default;
  const [hover, setHover] = React.useState(false);
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    whiteSpace: 'nowrap',
    borderRadius: 'var(--radius-md)',
    fontFamily: 'var(--font-text)',
    fontWeight: 500,
    fontSize: s.fontSize,
    lineHeight: 1.2,
    height: s.height,
    width: s.width,
    padding: s.padding,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background-color 120ms ease, color 120ms ease, opacity 120ms ease',
    background: hover && !disabled ? v['--hover-bg'] : v.background,
    color: v.color,
    border: v.border,
    textDecoration: variant === 'link' && hover ? 'underline' : 'none',
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: className,
    style: base,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, props), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Seta Card — surface-1 panel, 1px hairline, no shadow on dark. */
const VARIANTS = {
  default: {
    borderRadius: 'var(--radius-md)',
    padding: 'var(--spacing-lg)'
  },
  product: {
    borderRadius: 'var(--radius-lg)',
    padding: 'var(--spacing-lg)'
  },
  testimonial: {
    borderRadius: 'var(--radius-md)',
    padding: 'var(--spacing-xl)',
    fontSize: 'var(--text-body-lg)'
  }
};
function Card({
  variant = 'default',
  className,
  style,
  children,
  ...props
}) {
  const v = VARIANTS[variant] || VARIANTS.default;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      background: 'var(--color-surface-1)',
      border: '1px solid var(--color-hairline)',
      color: 'var(--color-ink)',
      fontFamily: 'var(--font-text)',
      ...v,
      ...style
    }
  }, props), children);
}
function CardTitle({
  className,
  style,
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-card-title)',
      fontWeight: 500,
      letterSpacing: '-0.4px',
      lineHeight: 1.2,
      color: 'var(--color-ink)',
      ...style
    }
  }, props), children);
}
function CardDescription({
  className,
  style,
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--color-ink-subtle)',
      marginTop: 4,
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Card, CardTitle, CardDescription });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Seta Input — hairline field on canvas; focus = primary border + tint ring. */
const SIZES = {
  default: {
    height: 32,
    padding: '0 10px',
    fontSize: 13
  },
  sm: {
    height: 28,
    padding: '0 8px',
    fontSize: 12
  },
  lg: {
    height: 40,
    padding: '0 12px',
    fontSize: 16
  }
};
function Input({
  size = 'default',
  disabled = false,
  className,
  style,
  ...props
}) {
  const s = SIZES[size] || SIZES.default;
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("input", _extends({
    className: className,
    disabled: disabled,
    onFocus: e => {
      setFocus(true);
      props.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      props.onBlur?.(e);
    },
    style: {
      width: '100%',
      height: s.height,
      padding: s.padding,
      fontFamily: 'var(--font-text)',
      fontSize: s.fontSize,
      color: 'var(--color-ink)',
      background: 'var(--color-canvas)',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${focus ? 'var(--color-primary)' : 'var(--color-hairline-strong)'}`,
      boxShadow: focus ? '0 0 0 3px var(--color-primary-tint)' : 'none',
      outline: 'none',
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? 'not-allowed' : 'text',
      transition: 'border-color 120ms ease, box-shadow 120ms ease',
      boxSizing: 'border-box',
      ...style
    }
  }, props));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/KbdHint.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Seta KbdHint — mono keycap chips for keyboard shortcuts. */
function KbdHint({
  keys = [],
  className,
  style,
  ...props
}) {
  const list = Array.isArray(keys) ? keys : [keys];
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      ...style
    }
  }, props), list.map((k, i) => /*#__PURE__*/React.createElement("kbd", {
    key: i,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      lineHeight: 1,
      color: 'var(--color-ink-subtle)',
      background: 'var(--color-surface-2)',
      border: '1px solid var(--color-hairline)',
      borderRadius: 4,
      padding: '2px 5px',
      minWidth: 16,
      textAlign: 'center'
    }
  }, k)));
}
Object.assign(__ds_scope, { KbdHint });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/KbdHint.jsx", error: String((e && e.message) || e) }); }

// components/core/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Seta SegmentedControl — surface-1 track, lifted active segment. */
function SegmentedControl({
  value,
  onValueChange,
  options = [],
  size = 'sm',
  className,
  style,
  ...props
}) {
  const pad = size === 'md' ? '6px 12px' : '4px 8px';
  const fs = size === 'md' ? 13 : 12;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 2,
      padding: 2,
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--color-hairline)',
      background: 'var(--color-surface-1)',
      ...style
    }
  }, props), options.map(opt => {
    const active = opt.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: opt.value,
      type: "button",
      role: "tab",
      "aria-selected": active,
      onClick: () => !active && onValueChange?.(opt.value),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: pad,
        fontFamily: 'var(--font-text)',
        fontSize: fs,
        fontWeight: 500,
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-sm)',
        background: active ? 'var(--color-surface-3)' : 'transparent',
        color: active ? 'var(--color-ink)' : 'var(--color-ink-subtle)',
        boxShadow: active ? 'var(--shadow-sm)' : 'none',
        transition: 'background-color 120ms ease, color 120ms ease'
      }
    }, opt.icon, opt.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Seta StatusPill — dot+label semantic pill at low saturation. */
const CONFIG = {
  'on-track': {
    text: 'On track',
    bg: 'var(--color-success-tint)',
    color: 'var(--color-success-ink)',
    dot: 'var(--color-success)'
  },
  'at-risk': {
    text: 'At risk',
    bg: 'var(--color-warning-tint)',
    color: 'var(--color-warning-ink)',
    dot: 'var(--color-warning)'
  },
  'off-track': {
    text: 'Off track',
    bg: 'var(--color-danger-tint)',
    color: 'var(--color-danger-ink)',
    dot: 'var(--color-danger)'
  },
  active: {
    text: 'Active',
    bg: 'var(--color-info-tint)',
    color: 'var(--color-info-ink)',
    dot: 'var(--color-info)'
  },
  pending: {
    text: 'Pending',
    bg: 'var(--color-warning-tint)',
    color: 'var(--color-warning-ink)',
    dot: 'var(--color-warning)'
  },
  blocked: {
    text: 'Blocked',
    bg: 'var(--color-danger-tint)',
    color: 'var(--color-danger-ink)',
    dot: 'var(--color-danger)'
  }
};
function StatusPill({
  kind = 'active',
  label,
  className,
  style,
  ...props
}) {
  const c = CONFIG[kind] || CONFIG.active;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '2px 9px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-text)',
      fontSize: 12,
      fontWeight: 500,
      background: c.bg,
      color: c.color,
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: c.dot
    }
  }), label || c.text);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/planner/LabelChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Seta LabelChip — small tinted tag; color hashes from the name unless given. */
const COLORS = {
  blue: ['var(--color-info-tint)', 'var(--color-info-ink)'],
  green: ['var(--color-success-tint)', 'var(--color-success-ink)'],
  amber: ['var(--color-warning-tint)', 'var(--color-warning-ink)'],
  red: ['var(--color-danger-tint)', 'var(--color-danger-ink)'],
  purple: ['rgba(168,85,247,0.14)', 'rgb(196,154,255)'],
  teal: ['rgba(20,184,166,0.14)', 'rgb(94,222,205)']
};
const ORDER = ['blue', 'green', 'amber', 'red', 'purple', 'teal'];
function hash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i) | 0;
  return Math.abs(h);
}
function LabelChip({
  name,
  color,
  className,
  style,
  ...props
}) {
  const key = color && COLORS[color] ? color : ORDER[hash(name || '') % ORDER.length];
  const [bg, fg] = COLORS[key];
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '1px 6px',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--font-size-xs)',
      fontWeight: 500,
      background: bg,
      color: fg,
      ...style
    }
  }, props), name);
}
Object.assign(__ds_scope, { LabelChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/planner/LabelChip.jsx", error: String((e && e.message) || e) }); }

// components/planner/PriorityIcon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Seta PriorityIcon — small rounded square in the priority color. */
const LABEL = {
  urgent: 'Urgent priority',
  important: 'Important priority',
  medium: 'Medium priority',
  low: 'Low priority'
};
function PriorityIcon({
  level = 'medium',
  size = 12,
  className,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": LABEL[level] || LABEL.medium,
    className: className,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      borderRadius: 3,
      flexShrink: 0,
      background: `var(--color-priority-${level})`,
      ...style
    }
  }, props));
}
Object.assign(__ds_scope, { PriorityIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/planner/PriorityIcon.jsx", error: String((e && e.message) || e) }); }

// components/planner/KanbanCard.jsx
try { (() => {
const AV_PALETTE = [['#f3d5d0', '#7a3a30'], ['#d8e7d3', '#2f5a2a'], ['#d4e0f3', '#2a4778'], ['#f3e6c8', '#7a5a1f'], ['#e7d4ef', '#5a2f78'], ['#d0e5e7', '#1f5a60']];
function hash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = h * 31 + s.charCodeAt(i) | 0;
  return Math.abs(h);
}
function AvatarStack({
  assignees = [],
  max = 3
}) {
  const shown = assignees.slice(0, max);
  const extra = assignees.length - shown.length;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      marginLeft: 'auto'
    }
  }, shown.map((a, i) => {
    const [bg, fg] = AV_PALETTE[hash(a.display_name) % AV_PALETTE.length];
    const init = a.display_name.split(/\s+/).slice(0, 2).map(w => w[0]?.toUpperCase()).join('');
    return /*#__PURE__*/React.createElement("span", {
      key: a.user_id || i,
      title: a.display_name,
      style: {
        width: 22,
        height: 22,
        borderRadius: '50%',
        fontSize: 10,
        fontWeight: 600,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: bg,
        color: fg,
        boxShadow: '0 0 0 2px var(--color-canvas)',
        marginLeft: i === 0 ? 0 : -6
      }
    }, init);
  }), extra > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      fontSize: 10,
      fontWeight: 600,
      marginLeft: -6,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color-surface-2)',
      color: 'var(--color-ink-subtle)',
      border: '1px solid var(--color-hairline)',
      boxShadow: '0 0 0 2px var(--color-canvas)'
    }
  }, "+", extra));
}

/**
 * Seta KanbanCard — the planner board card. Title + blocked dot, then a meta
 * row of priority icon, label chip, date range, checklist progress, assignees.
 */
function KanbanCard({
  task,
  selected = false,
  onOpen,
  className,
  style
}) {
  const t = task || {};
  const [hover, setHover] = React.useState(false);
  const range = t.start_label && t.due_label ? `${t.start_label} → ${t.due_label}` : t.start_label || t.due_label;
  const cl = t.checklist_summary;
  return /*#__PURE__*/React.createElement("div", {
    role: "button",
    tabIndex: 0,
    onClick: onOpen,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    className: className,
    style: {
      position: 'relative',
      width: '100%',
      textAlign: 'left',
      cursor: 'pointer',
      background: 'var(--color-canvas)',
      border: `1px solid ${selected ? 'var(--color-primary)' : hover ? 'var(--color-hairline-strong)' : 'var(--color-hairline)'}`,
      borderRadius: 6,
      padding: '10px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      boxShadow: selected ? '0 0 0 1px var(--color-primary), var(--shadow-sm)' : 'var(--shadow-sm)',
      transition: 'border-color 80ms ease, box-shadow 80ms ease',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500,
      fontSize: 'var(--text-body-sm)',
      lineHeight: 1.4,
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      color: 'var(--color-ink)'
    }
  }, t.blocked && /*#__PURE__*/React.createElement("span", {
    title: "Blocked",
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--color-danger)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: t.isCompleted ? {
      textDecoration: 'line-through',
      opacity: 0.5
    } : undefined
  }, t.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 'var(--font-size-xs)',
      color: 'var(--color-ink-muted)'
    }
  }, t.priority && /*#__PURE__*/React.createElement(__ds_scope.PriorityIcon, {
    level: t.priority
  }), t.label && /*#__PURE__*/React.createElement(__ds_scope.LabelChip, {
    name: t.label.name,
    color: t.label.color
  }), range && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-ink-subtle)'
    }
  }, range), cl && cl.total > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      padding: '1px 6px',
      borderRadius: 999,
      background: 'var(--color-surface-2)',
      color: cl.checked >= cl.total ? 'var(--color-success)' : 'var(--color-ink-muted)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "9 11 12 14 22 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
  })), cl.checked, "/", cl.total), t.assignees && t.assignees.length > 0 && /*#__PURE__*/React.createElement(AvatarStack, {
    assignees: t.assignees
  })));
}
Object.assign(__ds_scope, { KanbanCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/planner/KanbanCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/agent-platform/app.jsx
try { (() => {
/* Seta Agent Platform — app shell, planner board, agent panel. Mounts window.SetaApp. */
const {
  useState: useS
} = React;
const SDS = window.SetaDesignSystem_4f3422;
const {
  Button: Btn,
  Input: Inp,
  StatusPill: SP,
  SegmentedControl: Seg,
  KbdHint: Kbd,
  Avatar: Av,
  KanbanCard: KCard,
  ChatMessage: CMsg,
  ChatToolCall: CTool,
  HitlCard: HCard,
  ChatComposer: CComp
} = SDS;
const X = window.SetaIcons;

/* ----------------------------- Top bar ----------------------------- */
function TopBar({
  agentOpen,
  onToggleAgent
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 48,
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px',
      borderBottom: '1px solid var(--color-hairline)',
      background: 'var(--color-canvas)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(X.SetaMark, {
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 13px var(--font-text)',
      letterSpacing: '-0.2px',
      color: 'var(--color-ink)'
    }
  }, "Seta"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 18,
      background: 'var(--color-hairline)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: btnGhost()
  }, /*#__PURE__*/React.createElement(X.IconBuilding, {
    size: 14,
    color: "var(--color-ink-subtle)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-ink)'
    }
  }, "SETA International"), /*#__PURE__*/React.createElement(X.IconChevDown, {
    size: 12,
    color: "var(--color-ink-subtle)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      ...btnGhost(),
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(X.IconSearch, {
    size: 14,
    color: "var(--color-ink-subtle)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-ink-subtle)'
    }
  }, "Search or jump to\u2026"), /*#__PURE__*/React.createElement(Kbd, {
    keys: ['⌘', 'K']
  })), /*#__PURE__*/React.createElement("button", {
    style: iconBtn()
  }, /*#__PURE__*/React.createElement(X.IconSun, {
    size: 14,
    color: "var(--color-ink-muted)"
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      ...iconBtn(),
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(X.IconBell, {
    size: 14,
    color: "var(--color-ink-muted)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 4,
      right: 5,
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--color-semantic-warning)',
      boxShadow: '0 0 0 2px var(--color-canvas)'
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onToggleAgent,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 28,
      padding: '0 10px',
      borderRadius: 8,
      cursor: 'pointer',
      font: '500 13px var(--font-text)',
      border: `1px solid ${agentOpen ? 'var(--color-primary-border)' : 'transparent'}`,
      background: agentOpen ? 'var(--color-primary-tint)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement(X.IconSparkle, {
    size: 14,
    color: "#8b5cf6"
  }), /*#__PURE__*/React.createElement("span", {
    className: "agent-gradient"
  }, "Agent"), /*#__PURE__*/React.createElement(Kbd, {
    keys: ['⌘', '\\']
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 18,
      background: 'var(--color-hairline)',
      margin: '0 4px'
    }
  }), /*#__PURE__*/React.createElement(Av, {
    name: "Mai Tran",
    size: 24
  })));
}

/* ----------------------------- Left nav ----------------------------- */
const NAV = [{
  id: 'planner',
  label: 'Planner',
  icon: X.IconLayout,
  open: true,
  items: [{
    label: 'My tasks',
    icon: X.IconList,
    badge: '7'
  }, {
    label: 'Plans',
    icon: X.IconLayout,
    active: true
  }, {
    label: 'Groups',
    icon: X.IconUsers
  }, {
    label: 'Calendar',
    icon: X.IconCalendar
  }]
}, {
  id: 'agent',
  label: 'Agent',
  icon: X.IconSparkle,
  agent: true,
  items: [{
    label: 'Workflow runs',
    icon: X.IconList
  }, {
    label: 'Approvals',
    icon: X.IconCheck,
    badge: '2'
  }]
}, {
  id: 'knowledge',
  label: 'Knowledge',
  icon: X.IconBook,
  items: [{
    label: 'Documents',
    icon: X.IconBook
  }]
}, {
  id: 'admin',
  label: 'Admin',
  icon: X.IconShield,
  items: [{
    label: 'Members',
    icon: X.IconUsers
  }, {
    label: 'Roles',
    icon: X.IconShield
  }]
}];
function LeftNav() {
  const [open, setOpen] = useS({
    planner: true,
    agent: false,
    knowledge: false,
    admin: false
  });
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: 240,
      flex: 'none',
      display: 'flex',
      flexDirection: 'column',
      borderRight: '1px solid var(--color-hairline)',
      background: 'var(--color-surface-1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 8px 0 14px',
      borderBottom: '1px solid var(--color-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 11px var(--font-text)',
      textTransform: 'uppercase',
      letterSpacing: '0.66px',
      color: 'var(--color-ink-subtle)'
    }
  }, "Workspace"), /*#__PURE__*/React.createElement("button", {
    style: iconBtn(24)
  }, /*#__PURE__*/React.createElement(X.IconChevLeft, {
    size: 14,
    color: "var(--color-ink-muted)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '6px 0'
    }
  }, NAV.map(m => {
    const isOpen = open[m.id];
    return /*#__PURE__*/React.createElement("div", {
      key: m.id,
      style: {
        marginBottom: 2
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen({
        ...open,
        [m.id]: !isOpen
      }),
      style: {
        margin: '0 6px',
        width: 'calc(100% - 12px)',
        height: 30,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '0 8px',
        borderRadius: 6,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        textAlign: 'left',
        font: '600 13px var(--font-text)'
      }
    }, /*#__PURE__*/React.createElement(X.IconChevRight, {
      size: 12,
      color: "var(--color-ink-subtle)",
      style: {
        transform: isOpen ? 'rotate(90deg)' : 'none',
        transition: 'transform .1s'
      }
    }), /*#__PURE__*/React.createElement(m.icon, {
      size: 14,
      color: m.agent ? '#8b5cf6' : 'var(--color-ink-muted)'
    }), m.agent ? /*#__PURE__*/React.createElement("span", {
      className: "agent-gradient",
      style: {
        flex: 1
      }
    }, m.label) : /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        color: 'var(--color-ink-muted)'
      }
    }, m.label)), isOpen && m.items.map(it => /*#__PURE__*/React.createElement("div", {
      key: it.label,
      style: {
        position: 'relative',
        margin: '1px 6px',
        height: 28,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        paddingLeft: 28,
        paddingRight: 10,
        borderRadius: 6,
        font: `${it.active ? 500 : 400} 13px var(--font-text)`,
        color: it.active ? 'var(--color-ink)' : 'var(--color-ink-muted)',
        background: it.active ? 'var(--color-surface-3)' : 'transparent',
        cursor: 'pointer'
      }
    }, it.active && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        top: 6,
        bottom: 6,
        width: 2,
        borderRadius: 2,
        background: 'var(--color-primary)'
      }
    }), /*#__PURE__*/React.createElement(it.icon, {
      size: 14,
      color: it.active ? 'var(--color-ink)' : 'var(--color-ink-muted)'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.label), it.badge && /*#__PURE__*/React.createElement("span", {
      style: {
        font: '11px var(--font-text)',
        color: 'var(--color-ink-subtle)'
      }
    }, it.badge))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      borderTop: '1px solid var(--color-hairline)',
      padding: 10,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Av, {
    name: "Mai Tran",
    size: 26
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px var(--font-text)',
      color: 'var(--color-ink)'
    }
  }, "Mai Tran"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '11px var(--font-text)',
      color: 'var(--color-ink-subtle)',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, "Workspace admin"))));
}

/* ----------------------------- Planner board ----------------------------- */
const COLS = [{
  name: 'Backlog',
  tasks: [{
    id: 't1',
    title: 'Spec the staffing allocation API',
    priority: 'medium',
    label: {
      name: 'Planning'
    },
    due_label: 'Aug 12',
    assignees: [X.A('Linh Pham')]
  }, {
    id: 't2',
    title: 'Audit RBAC coverage across modules',
    priority: 'low',
    label: {
      name: 'Security',
      color: 'red'
    },
    assignees: [X.A('Duc Nguyen')]
  }]
}, {
  name: 'In progress',
  tasks: [{
    id: 't3',
    title: 'Wire HITL approval into the worker queue',
    priority: 'urgent',
    blocked: true,
    label: {
      name: 'Backend',
      color: 'red'
    },
    due_label: 'Today',
    checklist_summary: {
      total: 4,
      checked: 1
    },
    assignees: [X.A('Duc Nguyen'), X.A('Mai Tran')]
  }, {
    id: 't4',
    title: 'Embeddings reindex for the knowledge base',
    priority: 'important',
    label: {
      name: 'Infra',
      color: 'teal'
    },
    start_label: 'Aug 6',
    due_label: 'Aug 9',
    assignees: [X.A('Sam Vo')]
  }, {
    id: 't5',
    title: 'Draft Q3 launch comms',
    priority: 'medium',
    label: {
      name: 'Marketing',
      color: 'purple'
    },
    assignees: [X.A('Linh Pham'), X.A('Mai Tran')]
  }]
}, {
  name: 'In review',
  tasks: [{
    id: 't6',
    title: 'Microsoft 365 calendar two-way sync',
    priority: 'important',
    label: {
      name: 'Sync',
      color: 'green'
    },
    due_label: 'Aug 8',
    checklist_summary: {
      total: 6,
      checked: 5
    },
    assignees: [X.A('Sam Vo')]
  }]
}, {
  name: 'Done',
  tasks: [{
    id: 't7',
    title: 'Tenant bootstrap CLI',
    priority: 'low',
    isCompleted: true,
    label: {
      name: 'CLI'
    },
    due_label: 'Aug 1',
    assignees: [X.A('Duc Nguyen')]
  }, {
    id: 't8',
    title: 'pgvector HNSW index migration',
    priority: 'medium',
    isCompleted: true,
    label: {
      name: 'Infra',
      color: 'teal'
    },
    assignees: [X.A('Sam Vo')]
  }]
}];
function PlannerBoard() {
  const [view, setView] = useS('board');
  const [sel, setSel] = useS('t3');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 24px 8px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      font: '11px var(--font-text)',
      color: 'var(--color-ink-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Planner"), /*#__PURE__*/React.createElement(X.IconChevRight, {
    size: 11
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-ink)'
    }
  }, "Q3 Launch")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '600 18px var(--font-display)',
      letterSpacing: '-0.3px',
      color: 'var(--color-ink)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, "Q3 Launch ", /*#__PURE__*/React.createElement(SP, {
    kind: "on-track"
  })), /*#__PURE__*/React.createElement(Av, {
    name: "Mai Tran",
    size: 24
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 24px',
      borderBottom: '1px solid var(--color-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Seg, {
    value: view,
    onValueChange: setView,
    options: [{
      value: 'board',
      label: 'Board',
      icon: /*#__PURE__*/React.createElement(X.IconLayout, {
        size: 13
      })
    }, {
      value: 'grid',
      label: 'Grid',
      icon: /*#__PURE__*/React.createElement(X.IconList, {
        size: 13
      })
    }, {
      value: 'calendar',
      label: 'Calendar',
      icon: /*#__PURE__*/React.createElement(X.IconCalendar, {
        size: 13
      })
    }]
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      ...btnGhost(),
      border: '1px solid var(--color-hairline)'
    }
  }, /*#__PURE__*/React.createElement(X.IconFilter, {
    size: 13,
    color: "var(--color-ink-subtle)"
  }), "Filter")), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    variant: "primary"
  }, /*#__PURE__*/React.createElement(X.IconPlus, {
    size: 13
  }), "New task")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowX: 'auto',
      overflowY: 'hidden',
      display: 'flex',
      gap: 14,
      padding: '16px 24px',
      background: 'var(--color-surface-1)',
      alignItems: 'flex-start'
    }
  }, COLS.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.name,
    style: {
      flex: '0 0 270px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '2px 4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 13px var(--font-text)',
      color: 'var(--color-ink)'
    }
  }, c.name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '11px var(--font-text)',
      color: 'var(--color-ink-subtle)'
    }
  }, c.tasks.length), /*#__PURE__*/React.createElement("button", {
    style: {
      ...iconBtn(22),
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(X.IconPlus, {
    size: 13,
    color: "var(--color-ink-subtle)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, c.tasks.map(t => /*#__PURE__*/React.createElement(KCard, {
    key: t.id,
    task: t,
    selected: sel === t.id,
    onOpen: () => setSel(t.id)
  })))))));
}

/* ----------------------------- Agent panel ----------------------------- */
function AgentPanel() {
  const [draft, setDraft] = useS('');
  const [decided, setDecided] = useS(null);
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 380,
      flex: 'none',
      display: 'flex',
      flexDirection: 'column',
      borderLeft: '1px solid var(--color-hairline)',
      background: 'var(--color-canvas)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 16px',
      borderBottom: '1px solid var(--color-hairline)'
    }
  }, /*#__PURE__*/React.createElement(X.IconSparkle, {
    size: 15,
    color: "#8b5cf6"
  }), /*#__PURE__*/React.createElement("span", {
    className: "agent-gradient",
    style: {
      font: '600 14px var(--font-display)',
      letterSpacing: '-0.3px'
    }
  }, "Planner Agent")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '18px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(CMsg, {
    variant: "user"
  }, "The Q3 launch plan has overdue tasks. Can you clean it up?"), /*#__PURE__*/React.createElement(CMsg, {
    variant: "agent",
    author: "Seta",
    timestamp: new Date()
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", null, "Let me look at the plan and find what's overdue."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CTool, {
    name: "planner.get_plan",
    status: "ok",
    summary: "Q3 Launch \xB7 28 tasks",
    duration: "120ms",
    payload: {
      plan_id: 'PLAN-07'
    }
  }), /*#__PURE__*/React.createElement(CTool, {
    name: "planner.find_overdue",
    status: "ok",
    summary: "3 overdue, 1 unassigned",
    duration: "86ms",
    payload: {
      overdue: ['TASK-4821', 'TASK-4830', 'TASK-4844']
    }
  }), /*#__PURE__*/React.createElement(CTool, {
    name: "staffing.suggest_assignee",
    status: "running"
  })), /*#__PURE__*/React.createElement("div", null, "I found ", /*#__PURE__*/React.createElement("b", null, "3 overdue tasks"), ". I'd reassign the unassigned one to Mai Tran and push two due dates. Approve to apply:"))), decided !== 'reject' && /*#__PURE__*/React.createElement(HCard, {
    intent: "Reassign 1 task and reschedule 2 in Q3 Launch",
    riskBadge: "write",
    summary: "These changes write to the live plan and notify assignees.",
    countdown: "1m 48s left",
    countdownTier: "soon",
    primaryLabel: decided === 'approve' ? 'Approved' : 'Approve & apply',
    disabled: decided === 'approve',
    onApprove: () => setDecided('approve'),
    onDecline: () => setDecided('reject')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr',
      gap: '6px 12px',
      font: '12px var(--font-text)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-ink-subtle)'
    }
  }, "TASK-4821"), /*#__PURE__*/React.createElement("span", null, "Assignee ", /*#__PURE__*/React.createElement("s", {
    style: {
      color: 'var(--color-ink-tertiary)'
    }
  }, "Unassigned"), " \u2192 Mai Tran"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-ink-subtle)'
    }
  }, "TASK-4830"), /*#__PURE__*/React.createElement("span", null, "Due ", /*#__PURE__*/React.createElement("s", {
    style: {
      color: 'var(--color-ink-tertiary)'
    }
  }, "Aug 2"), " \u2192 Aug 9"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-ink-subtle)'
    }
  }, "TASK-4844"), /*#__PURE__*/React.createElement("span", null, "Due ", /*#__PURE__*/React.createElement("s", {
    style: {
      color: 'var(--color-ink-tertiary)'
    }
  }, "Aug 3"), " \u2192 Aug 10"))), decided === 'approve' && /*#__PURE__*/React.createElement(CMsg, {
    variant: "agent",
    author: "Seta",
    timestamp: new Date()
  }, "Done \u2014 reassigned TASK-4821 and rescheduled two tasks. Assignees were notified."), decided === 'reject' && /*#__PURE__*/React.createElement(CMsg, {
    variant: "agent",
    author: "Seta",
    timestamp: new Date()
  }, "No problem \u2014 I left the plan unchanged.")), /*#__PURE__*/React.createElement(CComp, {
    value: draft,
    onChange: setDraft,
    onSubmit: () => setDraft(''),
    permissionHint: "Acts as you \xB7 read-only until approved"
  }));
}

/* ----------------------------- App ----------------------------- */
function btnGhost() {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    height: 26,
    padding: '0 8px',
    borderRadius: 6,
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    font: '12px var(--font-text)',
    color: 'var(--color-ink-muted)'
  };
}
function iconBtn(s = 26) {
  return {
    width: s,
    height: s,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    border: 'none',
    background: 'transparent',
    cursor: 'pointer'
  };
}
function App() {
  const [signedIn, setSignedIn] = useS(false);
  const [agentOpen, setAgentOpen] = useS(true);
  if (!signedIn) return /*#__PURE__*/React.createElement(window.SetaLogin, {
    onSignIn: () => setSignedIn(true)
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflow: 'hidden',
      background: 'var(--color-canvas)',
      color: 'var(--color-ink)'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    agentOpen: agentOpen,
    onToggleAgent: () => setAgentOpen(!agentOpen)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(LeftNav, null), /*#__PURE__*/React.createElement("main", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      flex: 1,
      overflow: 'hidden',
      background: 'var(--color-canvas)'
    }
  }, /*#__PURE__*/React.createElement(PlannerBoard, null)), agentOpen && /*#__PURE__*/React.createElement(AgentPanel, null)));
}
window.SetaApp = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agent-platform/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/agent-platform/login.jsx
try { (() => {
/* Seta Agent Platform — UI kit screens. Mounts window.SetaApp. */
const {
  useState
} = React;
const DS = window.SetaDesignSystem_4f3422;
const {
  Button,
  Input,
  Badge,
  StatusPill,
  SegmentedControl,
  KbdHint,
  Avatar,
  KanbanCard,
  ChatMessage,
  ChatToolCall,
  HitlCard,
  ChatComposer
} = DS;

/* ---------------- tiny lucide-style icon set ---------------- */
const I = (p, vb = '0 0 24 24') => ({
  size = 16,
  color = 'currentColor',
  ...r
}) => React.createElement('svg', {
  width: size,
  height: size,
  viewBox: vb,
  fill: 'none',
  stroke: color,
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  ...r
}, p.map((d, i) => React.createElement('path', {
  key: i,
  d
})));
const IconSearch = I(['m21 21-4.3-4.3', 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z']);
const IconBuilding = I(['M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z', 'M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2', 'M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2', 'M10 6h4', 'M10 10h4', 'M10 14h4', 'M10 18h4']);
const IconChevDown = I(['m6 9 6 6 6-6']);
const IconChevRight = I(['m9 18 6-6-6-6']);
const IconChevLeft = I(['m15 18-6-6 6-6']);
const IconSun = I(['M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z', 'M12 1v2', 'M12 21v2', 'M4.2 4.2l1.4 1.4', 'M18.4 18.4l1.4 1.4', 'M1 12h2', 'M21 12h2', 'M4.2 19.8l1.4-1.4', 'M18.4 5.6l1.4-1.4']);
const IconBell = I(['M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9', 'M10.3 21a1.94 1.94 0 0 0 3.4 0']);
const IconPlus = I(['M5 12h14', 'M12 5v14']);
const IconLayout = I(['M3 3h18v18H3z', 'M9 3v18', 'M3 9h6']);
const IconList = I(['M8 6h13', 'M8 12h13', 'M8 18h13', 'M3 6h.01', 'M3 12h.01', 'M3 18h.01']);
const IconCalendar = I(['M8 2v4', 'M16 2v4', 'M3 10h18', 'M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z']);
const IconUsers = I(['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z', 'M22 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75']);
const IconBook = I(['M4 19.5A2.5 2.5 0 0 1 6.5 17H20', 'M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z']);
const IconShield = I(['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z']);
const IconSparkle = I(['M5 3v4', 'M3 5h4', 'M6 17v4', 'M4 19h4', 'M13 3l2.5 6.5L22 12l-6.5 2.5L13 21l-2.5-6.5L4 12l6.5-2.5z']);
const IconArrow = I(['M3 8h10', 'M9 4l4 4-4 4'], '0 0 16 16');
const IconFilter = I(['M22 3H2l8 9.46V19l4 2v-8.54L22 3z']);
const IconCheck = I(['M20 6 9 17l-5-5']);
const A = n => ({
  user_id: n,
  display_name: n
});
const SetaMark = ({
  size = 20
}) => React.createElement('img', {
  src: '../../assets/seta-mark.svg',
  width: size,
  height: size,
  alt: 'Seta'
});

/* ============================== Login ============================== */
function LoginScreen({
  onSignIn
}) {
  const [step, setStep] = useState('email');
  const [email, setEmail] = useState('mai.tran@seta-international.vn');
  const [pw, setPw] = useState('');
  return /*#__PURE__*/React.createElement("div", {
    className: "theme-light",
    style: {
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--color-surface-1)',
      color: 'var(--color-ink)'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '24px 32px'
    }
  }, /*#__PURE__*/React.createElement(SetaMark, {
    size: 22
  })), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 400,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(SetaMark, {
    size: 36
  })), step === 'email' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    style: {
      textAlign: 'center',
      font: '600 22px var(--font-display)',
      letterSpacing: '-0.4px',
      margin: 0
    }
  }, "Sign in"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      font: '13px var(--font-text)',
      color: 'var(--color-ink-muted)',
      margin: '6px 0 18px'
    }
  }, "Enter your work email to continue."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setStep('password');
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      borderRadius: 12,
      border: '1px solid var(--color-hairline)',
      background: 'var(--color-canvas)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      font: '500 12px var(--font-text)',
      color: 'var(--color-ink-muted)'
    }
  }, "Work email"), /*#__PURE__*/React.createElement(Input, {
    size: "lg",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "you@company.com"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "primary",
    style: {
      width: '100%'
    },
    onClick: () => setStep('password')
  }, "Continue ", /*#__PURE__*/React.createElement(IconArrow, {
    size: 13
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      font: '12px var(--font-text)',
      color: 'var(--color-ink-subtle)',
      marginTop: 16
    }
  }, "Don't have access yet? Ask your admin to invite you.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    style: {
      textAlign: 'center',
      font: '600 22px var(--font-display)',
      letterSpacing: '-0.4px',
      margin: '0 0 18px'
    }
  }, "Enter your password"), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSignIn();
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      borderRadius: 12,
      border: '1px solid var(--color-hairline)',
      background: 'var(--color-canvas)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      borderRadius: 8,
      border: '1px solid var(--color-hairline)',
      background: 'var(--color-surface-1)',
      padding: '8px 12px'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: email,
    size: 20
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '10px var(--font-text)',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      color: 'var(--color-ink-subtle)'
    }
  }, "Signed in as"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px var(--font-mono)',
      color: 'var(--color-ink)',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, email)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setStep('email'),
    style: {
      font: '12px var(--font-text)',
      color: 'var(--color-ink-subtle)',
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    }
  }, "Change")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      font: '500 12px var(--font-text)',
      color: 'var(--color-ink-muted)'
    }
  }, "Password"), /*#__PURE__*/React.createElement("a", {
    style: {
      font: '500 12px var(--font-text)',
      color: 'var(--color-primary)',
      cursor: 'pointer'
    }
  }, "Reset")), /*#__PURE__*/React.createElement(Input, {
    size: "lg",
    type: "password",
    value: pw,
    onChange: e => setPw(e.target.value),
    autoFocus: true
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "primary",
    style: {
      width: '100%'
    },
    onClick: onSignIn
  }, "Sign in"))))), /*#__PURE__*/React.createElement("footer", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '16px 32px',
      font: '12px var(--font-text)',
      color: 'var(--color-ink-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--color-semantic-success)'
    }
  }), "All systems operational")));
}
window.SetaLogin = LoginScreen;
window.SetaIcons = {
  IconSearch,
  IconBuilding,
  IconChevDown,
  IconChevRight,
  IconChevLeft,
  IconSun,
  IconBell,
  IconPlus,
  IconLayout,
  IconList,
  IconCalendar,
  IconUsers,
  IconBook,
  IconShield,
  IconSparkle,
  IconFilter,
  IconCheck,
  SetaMark,
  A
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agent-platform/login.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ChatComposer = __ds_scope.ChatComposer;

__ds_ns.ChatMessage = __ds_scope.ChatMessage;

__ds_ns.ChatToolCall = __ds_scope.ChatToolCall;

__ds_ns.HitlCard = __ds_scope.HitlCard;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardTitle = __ds_scope.CardTitle;

__ds_ns.CardDescription = __ds_scope.CardDescription;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.KbdHint = __ds_scope.KbdHint;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.KanbanCard = __ds_scope.KanbanCard;

__ds_ns.LabelChip = __ds_scope.LabelChip;

__ds_ns.PriorityIcon = __ds_scope.PriorityIcon;

})();

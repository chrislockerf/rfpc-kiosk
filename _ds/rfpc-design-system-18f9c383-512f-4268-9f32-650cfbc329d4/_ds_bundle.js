/* @ds-bundle: {"format":4,"namespace":"RFPCDesignSystem_18f9c3","components":[{"name":"Chip","sourcePath":"components/signage/Chip.jsx"},{"name":"FilmTile","sourcePath":"components/signage/FilmTile.jsx"},{"name":"KioskShow","sourcePath":"components/signage/KioskShow.jsx"},{"name":"MarqueeHeader","sourcePath":"components/signage/MarqueeHeader.jsx"},{"name":"SectionPanel","sourcePath":"components/signage/SectionPanel.jsx"},{"name":"ShotRow","sourcePath":"components/signage/ShotRow.jsx"},{"name":"ShowReel","sourcePath":"components/signage/ShowReel.jsx"},{"name":"SignageFooter","sourcePath":"components/signage/SignageFooter.jsx"},{"name":"StageFrame","sourcePath":"components/signage/StageFrame.jsx"}],"sourceHashes":{"components/signage/Chip.jsx":"783057644789","components/signage/FilmTile.jsx":"1f77a4d84f26","components/signage/KioskShow.jsx":"fab479039e7c","components/signage/MarqueeHeader.jsx":"65bd64868c57","components/signage/SectionPanel.jsx":"1e768bddd0d2","components/signage/ShotRow.jsx":"bf39054fbbc5","components/signage/ShowReel.jsx":"5f1a84f46518","components/signage/SignageFooter.jsx":"177d744e75bb","components/signage/StageFrame.jsx":"cf264674b8bc","ui_kits/signage/JamesBond.jsx":"a7486de65368","ui_kits/signage/Kiosk.jsx":"0e068682686a","ui_kits/signage/KioskScenes.jsx":"05843da1a383","ui_kits/signage/tweaks-panel.jsx":"6591467622ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RFPCDesignSystem_18f9c3 = window.RFPCDesignSystem_18f9c3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/signage/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chip — a small labeled pill for tags, targets, and legends.
 * tone: "accent" (default) | "brass" | "ghost".
 */
function Chip({
  children,
  tone = "accent",
  icon = null,
  style,
  ...rest
}) {
  const tones = {
    accent: {
      color: "var(--accent-bright)",
      background: "color-mix(in srgb, var(--accent) 16%, transparent)",
      border: "var(--hair) solid color-mix(in srgb, var(--accent) 42%, transparent)"
    },
    brass: {
      color: "var(--brass-100)",
      background: "color-mix(in srgb, var(--brass-300) 15%, transparent)",
      border: "var(--hair) solid color-mix(in srgb, var(--brass-300) 42%, transparent)"
    },
    ghost: {
      color: "var(--text-muted)",
      background: "transparent",
      border: "var(--hair) solid var(--border-panel)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--sp-1)",
      fontFamily: "var(--font-marquee)",
      fontSize: "var(--t-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      borderRadius: "var(--r-pill)",
      padding: "6px 16px",
      lineHeight: 1,
      whiteSpace: "nowrap",
      ...tones[tone],
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/signage/Chip.jsx", error: String((e && e.message) || e) }); }

// components/signage/FilmTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FilmTile — a compact marquee "poster" cell: an ordinal, a title, and a
 * year. Built for the row of six Bond films but works for any ordered set
 * of named items on a game page.
 */
function FilmTile({
  ordinal,
  title,
  meta,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: "var(--sp-2)",
      padding: "var(--sp-3)",
      minHeight: 0,
      borderRadius: "var(--r-md)",
      background: "linear-gradient(165deg, var(--surface-raised), color-mix(in srgb, var(--forest-700) 90%, transparent))",
      border: "var(--hair) solid var(--border-panel)",
      boxShadow: "0 10px 26px -16px rgba(0,0,0,0.7)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: "0 0 auto 0",
      height: 3,
      background: "var(--accent)",
      opacity: 0.9
    }
  }), ordinal && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: "var(--t-label)",
      color: "var(--accent-bright)"
    }
  }, ordinal), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-marquee)",
      fontWeight: "var(--w-bold)",
      fontSize: "var(--t-h2)",
      lineHeight: "var(--lh-snug)",
      textTransform: "uppercase",
      color: "var(--text-strong)",
      textWrap: "balance"
    }
  }, title), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--t-label)",
      color: "var(--text-muted)"
    }
  }, meta)));
}
Object.assign(__ds_scope, { FilmTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/signage/FilmTile.jsx", error: String((e && e.message) || e) }); }

// components/signage/KioskShow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KioskShow — the auto-advancing "spotlight" engine for RFPC signage.
 *
 * Renders an overview grid of section titles, then cycles: each section's card
 * expands to fill the stage, holds its full detail for a beat, collapses back,
 * and the next takes over — looping forever with no user interaction. This is
 * the reusable foundation for any auto-playing page (game summary, multiball
 * rules, tournament ladder, …).
 *
 * Each section: { index, kicker, title, teaser?, detail } where `detail` is the
 * rich node shown when expanded (it has the whole stage to breathe, so use
 * generous type — the component bumps the type scale automatically).
 */
function KioskShow({
  sections = [],
  columns = 3,
  introMs = 3200,
  holdMs = 10000,
  expandMs = 760,
  gapMs = 5000,
  storageKey = "rfpc-kiosk",
  renderDetail,
  ...rest
}) {
  const [active, setActive] = React.useState(-1);
  const [expanded, setExpanded] = React.useState(false);
  // box = {left,top,width,height,animate}. animate=false suppresses the CSS
  // transition so the FIRST frame lands silently on the section's own cell —
  // every expand/collapse then grows and shrinks from that card, not from 01.
  const [box, setBox] = React.useState(null);
  const wrapRef = React.useRef(null);
  const cellRefs = React.useRef([]);
  const timers = React.useRef([]);
  const placedRef = React.useRef(false);
  const rows = Math.max(1, Math.ceil(sections.length / columns));

  // resume roughly from where the kiosk last was
  const startAt = React.useRef(0);
  React.useEffect(() => {
    const s = parseInt(window.localStorage.getItem(storageKey), 10);
    if (!Number.isNaN(s)) startAt.current = (s % sections.length + sections.length) % sections.length;
  }, [storageKey, sections.length]);
  React.useEffect(() => {
    let cancelled = false;
    const clearAll = () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
    const at = (delay, fn) => {
      const id = setTimeout(() => {
        if (!cancelled) fn();
      }, delay);
      timers.current.push(id);
    };
    function cycle(firstStart) {
      clearAll();
      setActive(-1);
      setExpanded(false);
      let acc = introMs;
      const order = [];
      for (let k = 0; k < sections.length; k++) order.push((firstStart + k) % sections.length);
      order.forEach(i => {
        at(acc, () => {
          setActive(i);
          setExpanded(false);
          window.localStorage.setItem(storageKey, String(i));
        });
        at(acc + 40, () => setExpanded(true));
        acc += expandMs + holdMs;
        at(acc, () => setExpanded(false));
        acc += expandMs;
        at(acc, () => setActive(-1));
        acc += gapMs;
      });
      at(acc, () => cycle(0));
    }
    cycle(startAt.current);
    return () => {
      cancelled = true;
      clearAll();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sections.length, introMs, holdMs, expandMs, gapMs]);

  // a new section starts un-placed, so its first (collapsed) frame won't animate
  React.useLayoutEffect(() => {
    placedRef.current = false;
  }, [active]);

  // position the spotlight overlay: at its own cell when collapsed, full-stage
  // when expanded. The initial cell placement is silent (animate:false); every
  // change after that animates — so it grows/shrinks from and back into itself.
  React.useLayoutEffect(() => {
    if (active < 0) return;
    const cell = cellRefs.current[active];
    const wrap = wrapRef.current;
    if (!cell || !wrap) return;
    if (expanded) {
      setBox({
        left: 0,
        top: 0,
        width: wrap.clientWidth,
        height: wrap.clientHeight,
        animate: true
      });
    } else {
      setBox({
        left: cell.offsetLeft,
        top: cell.offsetTop,
        width: cell.offsetWidth,
        height: cell.offsetHeight,
        animate: placedRef.current
      });
      placedRef.current = true;
    }
  }, [active, expanded]);
  const cardBase = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minHeight: 0,
    padding: "var(--sp-4)",
    borderRadius: "var(--r-lg)",
    background: "linear-gradient(160deg, color-mix(in srgb, var(--surface-panel) 92%, transparent), color-mix(in srgb, var(--forest-700) 88%, transparent))",
    border: "var(--hair) solid var(--border-panel)",
    boxShadow: "var(--shadow-panel)",
    overflow: "hidden"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: wrapRef,
    style: {
      position: "relative",
      flex: 1,
      minHeight: 0
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gridTemplateRows: `repeat(${rows}, 1fr)`,
      gap: "var(--sp-4)"
    }
  }, sections.map((s, i) => {
    const dim = active >= 0 && active !== i;
    const isSource = active === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      ref: el => cellRefs.current[i] = el,
      style: {
        ...cardBase,
        justifyContent: "flex-start",
        opacity: dim ? 0.32 : 1,
        transform: dim ? "scale(0.985)" : "none",
        visibility: isSource && expanded ? "hidden" : "visible",
        transition: `opacity ${expandMs}ms var(--ease-cinema), transform ${expandMs}ms var(--ease-cinema)`
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: "0 0 auto 0",
        height: 3,
        background: "var(--accent)",
        opacity: 0.9
      }
    }), /*#__PURE__*/React.createElement(OverviewHead, {
      s: s
    }), s.teaser && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "var(--sp-3) 0 0",
        fontSize: "var(--t-body)",
        lineHeight: 1.34,
        color: "var(--text-muted)",
        maxWidth: "34ch"
      }
    }, s.teaser));
  })), active >= 0 && box && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: box.left,
      top: box.top,
      width: box.width,
      height: box.height,
      zIndex: 6,
      transition: box.animate ? `left ${expandMs}ms var(--ease-cinema), top ${expandMs}ms var(--ease-cinema), width ${expandMs}ms var(--ease-cinema), height ${expandMs}ms var(--ease-cinema)` : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...cardBase,
      height: "100%",
      padding: "var(--sp-6)",
      background: "linear-gradient(155deg, var(--surface-raised), var(--surface-panel))",
      boxShadow: "var(--shadow-lift), var(--glow-accent-sm)",
      // bigger type when expanded — content finally has room to breathe
      "--t-h1": "56px",
      "--t-h2": "30px",
      "--t-lead": "34px",
      "--t-body": "27px",
      "--t-label": "20px",
      "--sp-2": "12px",
      "--sp-3": "20px",
      "--sp-4": "30px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: "0 0 auto 0",
      height: 3,
      background: "var(--accent)",
      opacity: 0.9,
      boxShadow: "var(--glow-accent-sm)"
    }
  }), /*#__PURE__*/React.createElement(OverviewHead, {
    s: sections[active],
    big: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      marginTop: "var(--sp-4)",
      opacity: expanded ? 1 : 0,
      transition: `opacity ${Math.round(expandMs * 0.7)}ms var(--ease-cinema) ${expanded ? Math.round(expandMs * 0.45) : 0}ms`,
      display: "flex",
      flexDirection: "column"
    }
  }, renderDetail ? renderDetail(sections[active], active) : sections[active].detail), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 4,
      background: "color-mix(in srgb, var(--accent) 18%, transparent)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    key: active + "-" + expanded,
    style: {
      height: "100%",
      width: expanded ? "100%" : "0%",
      background: "var(--accent)",
      boxShadow: "var(--glow-accent-sm)",
      transition: expanded ? `width ${holdMs}ms linear` : "none"
    }
  })))));
}
function OverviewHead({
  s,
  big
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 0
    }
  }, s.kicker && /*#__PURE__*/React.createElement("div", {
    className: "rfpc-eyebrow",
    style: {
      color: "var(--text-faint)",
      marginBottom: 4
    }
  }, s.kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-marquee)",
      fontWeight: "var(--w-bold)",
      fontSize: big ? "var(--t-h1)" : "32px",
      lineHeight: "var(--lh-snug)",
      letterSpacing: "0.01em",
      textTransform: "uppercase",
      color: "var(--text-strong)"
    }
  }, s.title));
}
Object.assign(__ds_scope, { KioskShow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/signage/KioskShow.jsx", error: String((e && e.message) || e) }); }

// components/signage/MarqueeHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MarqueeHeader — RFPC page header. A wide-set marquee eyebrow, the game
 * title in cream marquee caps, a right-aligned meta stack, and a brass
 * accent rule beneath. Sits in the header slot of <StageFrame/>.
 */
function MarqueeHeader({
  eyebrow,
  title,
  meta = [],
  badge = null,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: "relative",
      flex: "none",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--sp-5)",
      paddingBottom: "var(--sp-3)",
      borderBottom: "var(--marquee-rule) solid transparent",
      borderImage: "linear-gradient(90deg, var(--accent) 0%, var(--brass-300) 42%, transparent 88%) 1",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: "var(--sp-4)",
      minWidth: 0
    }
  }, badge, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "rfpc-eyebrow",
    style: {
      marginBottom: "var(--sp-2)",
      display: "flex",
      alignItems: "center",
      gap: "var(--sp-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 34,
      height: 3,
      background: "var(--accent)",
      boxShadow: "var(--glow-accent-sm)",
      display: "inline-block"
    }
  }), eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "rfpc-marquee",
    style: {
      margin: 0,
      textShadow: "0 2px 30px rgba(0,0,0,0.5)"
    }
  }, title))), meta.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none",
      textAlign: "right",
      fontFamily: "var(--font-marquee)",
      textTransform: "uppercase",
      letterSpacing: "var(--track-label)",
      lineHeight: 1.5,
      paddingBottom: 6
    }
  }, meta.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontSize: i === 0 ? "var(--t-h2)" : "var(--t-label)",
      fontWeight: i === 0 ? "var(--w-semibold)" : "var(--w-regular)",
      color: i === 0 ? "var(--text-strong)" : "var(--text-muted)"
    }
  }, m))));
}
Object.assign(__ds_scope, { MarqueeHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/signage/MarqueeHeader.jsx", error: String((e && e.message) || e) }); }

// components/signage/SectionPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionPanel — the repeatable content block of a game-summary page.
 * A numbered marquee header, accent tick, optional lead, and a body region.
 * Designed to tile in a CSS grid; pass `style={{ gridColumn / gridRow }}`.
 */
function SectionPanel({
  index,
  kicker,
  title,
  lead = null,
  children,
  emphasis = false,
  underline = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      minHeight: 0,
      padding: "var(--sp-4) var(--sp-4) var(--sp-4)",
      borderRadius: "var(--r-lg)",
      background: emphasis ? "linear-gradient(155deg, var(--surface-raised), var(--surface-panel))" : "linear-gradient(160deg, color-mix(in srgb, var(--surface-panel) 92%, transparent), color-mix(in srgb, var(--forest-700) 88%, transparent))",
      border: "var(--hair) solid var(--border-panel)",
      boxShadow: emphasis ? "var(--shadow-lift), var(--glow-accent-sm)" : "var(--shadow-panel)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: "0 0 auto 0",
      height: 3,
      background: "var(--accent)",
      opacity: 0.9
    }
  }), emphasis && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: 4,
      background: "var(--accent)",
      boxShadow: "var(--glow-accent-md)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--sp-3)",
      marginBottom: "var(--sp-3)"
    }
  }, index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: "var(--t-h2)",
      color: "var(--accent-bright)",
      letterSpacing: "-0.02em",
      flex: "none",
      lineHeight: 1
    }
  }, String(index).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      position: "relative"
    }
  }, kicker && /*#__PURE__*/React.createElement("div", {
    className: "rfpc-eyebrow",
    style: {
      color: "var(--text-faint)",
      marginBottom: 4
    }
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-marquee)",
      fontWeight: "var(--w-bold)",
      fontSize: "var(--t-h1)",
      lineHeight: "var(--lh-snug)",
      letterSpacing: "0.01em",
      textTransform: "uppercase",
      color: "var(--text-strong)"
    }
  }, title), underline && /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 54 19",
    preserveAspectRatio: "none",
    style: {
      position: "absolute",
      left: -3,
      top: "100%",
      width: "104%",
      height: 12,
      overflow: "visible",
      fill: "none",
      stroke: "var(--accent)",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M54 10 L52 10 L50 10 L48 10 L46 10 L44 10 L42 10 L40 10 L38 9 L36 9 L34 9 L32 9 L30 9 L27 9 L24 9 L22 9 L20 9 L18 9 L16 10 L14 10 L12 11 L10 11 L8 11 L6 12 L4 12 L2 12"
  })))), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 var(--sp-3)",
      fontSize: "var(--t-lead)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)",
      maxWidth: "62ch"
    }
  }, lead), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start"
    }
  }, children));
}
Object.assign(__ds_scope, { SectionPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/signage/SectionPanel.jsx", error: String((e && e.message) || e) }); }

// components/signage/ShotRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ShotRow — one rule/shot line: a name + an accent target chip on the top
 * line (name left, target right), with an optional description flowing on
 * its own line beneath. Stacking avoids horizontal collisions inside the
 * narrow signage panels. The core content unit inside SectionPanels.
 */
function ShotRow({
  label,
  target,
  children,
  marker = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: "var(--sp-2) 0",
      borderTop: "var(--hair) solid var(--border-hair)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: "var(--sp-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--sp-2)",
      minWidth: 0
    }
  }, marker && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 8,
      height: 8,
      flex: "none",
      transform: "rotate(45deg)",
      background: "var(--accent)",
      boxShadow: "var(--glow-accent-sm)",
      alignSelf: "center"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-marquee)",
      fontWeight: "var(--w-semibold)",
      fontSize: "var(--t-h2)",
      letterSpacing: "0.01em",
      lineHeight: 1.1,
      textTransform: "uppercase",
      color: "var(--text-strong)"
    }
  }, label)), target && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--t-label)",
      letterSpacing: "0.02em",
      color: "var(--accent-bright)",
      background: "color-mix(in srgb, var(--accent) 16%, transparent)",
      border: "var(--hair) solid color-mix(in srgb, var(--accent) 40%, transparent)",
      borderRadius: "var(--r-sm)",
      padding: "3px 10px",
      whiteSpace: "nowrap",
      flex: "none"
    }
  }, target)), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 3,
      marginLeft: marker ? "calc(8px + var(--sp-2))" : 0,
      fontSize: "var(--t-body)",
      lineHeight: 1.28,
      color: "var(--text-body)"
    }
  }, children));
}
Object.assign(__ds_scope, { ShotRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/signage/ShotRow.jsx", error: String((e && e.message) || e) }); }

// components/signage/SignageFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SignageFooter — persistent RFPC footer bar.
 * Left: RFPC club mark + wordmark. Center: game name (or logo slot).
 * Right: one italic serif "pro tip". Present on every page.
 */
function SignageFooter({
  proTip,
  proTipLabel = "Pro Tip",
  gameName,
  gameLogo = null,
  rfpcBadge = "assets/rfpc-mark-cream.png",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      position: "relative",
      flex: "none",
      height: "var(--footer-h)",
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      alignItems: "center",
      gap: "var(--sp-5)",
      marginTop: "var(--sp-3)",
      paddingTop: "var(--sp-3)",
      borderTop: "var(--hair) solid var(--border-panel)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sp-3)"
    }
  }, rfpcBadge && /*#__PURE__*/React.createElement("img", {
    src: rfpcBadge,
    alt: "River Forest Pinball Club",
    style: {
      height: 84,
      width: "auto",
      flex: "none",
      filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.4))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.15,
      borderLeft: "var(--hair) solid var(--border-panel)",
      paddingLeft: "var(--sp-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-marquee)",
      fontWeight: "var(--w-semibold)",
      fontSize: "var(--t-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-body)"
    }
  }, "River Forest"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-marquee)",
      fontSize: "var(--t-micro)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, "Pinball Club"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, gameLogo || /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-marquee)",
      fontWeight: "var(--w-medium)",
      fontSize: "var(--t-label)",
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent-bright)"
    }
  }, "\u25C6"), "\xA0\xA0", gameName, "\xA0\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent-bright)"
    }
  }, "\u25C6"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right",
      display: "flex",
      alignItems: "baseline",
      justifyContent: "flex-end",
      gap: "var(--sp-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rfpc-eyebrow",
    style: {
      fontSize: "var(--t-micro)",
      color: "var(--text-accent)",
      flex: "none"
    }
  }, proTipLabel), /*#__PURE__*/React.createElement("p", {
    className: "rfpc-serif-italic",
    style: {
      margin: 0,
      fontSize: "var(--t-body)",
      color: "var(--text-body)",
      maxWidth: 560,
      lineHeight: 1.28
    }
  }, proTip)));
}
Object.assign(__ds_scope, { SignageFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/signage/SignageFooter.jsx", error: String((e && e.message) || e) }); }

// components/signage/ShowReel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ShowReel — the RFPC unattended KIOSK show-runner.
 *
 * Where KioskShow spotlights the sections of ONE page, ShowReel sequences a
 * whole run of full-stage SCENES — a machine overview, a game's feature cards,
 * a funny recap, general tips, a glossary, a quip — auto-advancing forever with
 * no interaction. It is the top-level attract loop for the TV.
 *
 * The brand chrome (RFPC header + footer) is PERSISTENT so the frame never
 * jumps; only the main content transitions, and the transition CHARACTER is
 * chosen by each incoming scene's `kind`:
 *   • "machine"  — cinematic: content rises + settles with an accent bloom.
 *   • "general"  — palate-cleanser: a quick lateral push with a brass sweep.
 *   • "overview" — a gentle scale-fade.
 * The per-scene `game` swaps the accent (machines get their color; general
 * scenes fall back to the brass/cream family). Resumes near where it left off
 * after a refresh via `storageKey`.
 *
 * scene = {
 *   id, kind: "machine"|"general"|"overview", game?,
 *   eyebrow, title, meta?: string[], proTip?, gameName?,
 *   holdMs?,               // override the default hold for this scene
 *   render: () => ReactNode // the main stage content
 * }
 */

const MOTION = {
  machine: {
    dur: 820,
    from: {
      opacity: 0,
      transform: "translateY(44px) scale(0.972)"
    },
    in: {
      opacity: 1,
      transform: "translateY(0) scale(1)"
    },
    out: {
      opacity: 0,
      transform: "translateY(-30px) scale(0.99)"
    }
  },
  general: {
    dur: 540,
    from: {
      opacity: 0,
      transform: "translateX(104px)"
    },
    in: {
      opacity: 1,
      transform: "translateX(0)"
    },
    out: {
      opacity: 0,
      transform: "translateX(-78px)"
    }
  },
  overview: {
    dur: 720,
    from: {
      opacity: 0,
      transform: "scale(1.035)"
    },
    in: {
      opacity: 1,
      transform: "scale(1)"
    },
    out: {
      opacity: 0,
      transform: "scale(0.99)"
    }
  }
};
const motionFor = kind => MOTION[kind] || MOTION.overview;
function usePrefersReduced() {
  const [r, setR] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setR(mq.matches);
    on();
    mq.addEventListener?.("change", on);
    return () => mq.removeEventListener?.("change", on);
  }, []);
  return r;
}

/** One transitioning content layer. `phase`: "enter" (from→in) or "leave" (in→out). */
function SceneLayer({
  scene,
  kind,
  phase,
  reduced
}) {
  const m = motionFor(kind);
  const enter = phase !== "leave";
  const [active, setActive] = React.useState(false);
  React.useLayoutEffect(() => {
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setActive(true)));
    return () => cancelAnimationFrame(id);
  }, []);
  const start = enter ? m.from : m.in;
  const end = enter ? m.in : m.out;
  const pose = active ? end : start;
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": phase === "leave" ? "true" : undefined,
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      minHeight: 0,
      willChange: "transform, opacity",
      transition: reduced ? "opacity 200ms linear" : `transform ${m.dur}ms var(--ease-cinema), opacity ${m.dur}ms var(--ease-cinema)`,
      ...(reduced ? {
        opacity: pose.opacity,
        transform: "none"
      } : pose)
    }
  }, scene.render());
}
function ShowReel({
  scenes = [],
  holdMs = 10000,
  storageKey = "rfpc-showreel",
  rfpcBadge = "assets/rfpc-mark-cream.png",
  fit = true,
  style,
  ...rest
}) {
  const reduced = usePrefersReduced();
  const n = scenes.length;
  const [idx, setIdx] = React.useState(0);
  // the outgoing layer, kept mounted only through the transition window
  const [leaving, setLeaving] = React.useState(null); // { scene }
  const advanceTimer = React.useRef(null);
  const clearTimer = React.useRef(null);

  // resume near where we left off
  React.useEffect(() => {
    const s = parseInt(window.localStorage.getItem(storageKey), 10);
    if (!Number.isNaN(s) && n) setIdx((s % n + n) % n);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey, n]);

  // schedule the next advance whenever the active scene changes
  React.useEffect(() => {
    if (!n) return;
    window.localStorage.setItem(storageKey, String(idx));
    const hold = scenes[idx]?.holdMs ?? holdMs;
    advanceTimer.current = setTimeout(() => {
      setLeaving({
        scene: scenes[idx]
      });
      setIdx(i => (i + 1) % n);
    }, hold);
    return () => clearTimeout(advanceTimer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, n, holdMs]);

  // retire the outgoing layer once its transition completes
  React.useEffect(() => {
    if (!leaving) return;
    const dur = reduced ? 220 : motionFor(scenes[idx]?.kind).dur + 60;
    clearTimer.current = setTimeout(() => setLeaving(null), dur);
    return () => clearTimeout(clearTimer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leaving, idx, reduced]);
  if (!n) return null;
  const cur = scenes[idx];
  const incomingKind = cur.kind;
  const stage = /*#__PURE__*/React.createElement("div", _extends({
    "data-game": cur.game,
    style: {
      position: "relative",
      width: "var(--stage-w)",
      height: "var(--stage-h)",
      background: "var(--stage-vignette)",
      color: "var(--text-body)",
      fontFamily: "var(--font-body)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      padding: "var(--safe-top) var(--safe-x) var(--safe-bottom)",
      boxSizing: "border-box",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      background: "radial-gradient(150% 120% at 50% 45%, transparent 58%, rgba(0,0,0,0.55) 100%)",
      mixBlendMode: "multiply"
    }
  }), /*#__PURE__*/React.createElement("div", {
    key: "h" + idx,
    style: {
      flex: "none",
      animation: reduced ? undefined : "rfpc-fade var(--dur-med) var(--ease-cinema) both"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.MarqueeHeader, {
    eyebrow: cur.eyebrow,
    title: cur.title,
    meta: cur.meta || []
  })), /*#__PURE__*/React.createElement("main", {
    style: {
      position: "relative",
      flex: 1,
      minHeight: 0,
      marginTop: "var(--sp-4)"
    }
  }, leaving && /*#__PURE__*/React.createElement(SceneLayer, {
    key: "leave-" + (leaving.scene.id ?? "x"),
    scene: leaving.scene,
    kind: incomingKind,
    phase: "leave",
    reduced: reduced
  }), /*#__PURE__*/React.createElement(SceneLayer, {
    key: "enter-" + (cur.id ?? idx),
    scene: cur,
    kind: incomingKind,
    phase: "enter",
    reduced: reduced
  })), /*#__PURE__*/React.createElement("div", {
    key: "f" + idx,
    style: {
      flex: "none",
      animation: reduced ? undefined : "rfpc-fade var(--dur-med) var(--ease-cinema) both"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SignageFooter, {
    proTip: cur.proTip,
    gameName: cur.gameName || "The Lockedown",
    rfpcBadge: rfpcBadge
  })), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 4,
      background: "color-mix(in srgb, var(--accent) 16%, transparent)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    key: idx,
    style: {
      height: "100%",
      width: "100%",
      transformOrigin: "left",
      transform: "scaleX(1)",
      background: "var(--accent)",
      boxShadow: "var(--glow-accent-sm)",
      animation: reduced ? undefined : `rfpc-holdbar ${cur.holdMs ?? holdMs}ms linear both`
    }
  })));
  if (!fit) return stage;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "var(--forest-900)",
      display: "grid",
      placeItems: "center",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: holder => {
      if (!holder) return;
      const inner = holder.firstElementChild;
      const scale = () => {
        const vw = holder.parentElement.clientWidth;
        const vh = holder.parentElement.clientHeight;
        const s = Math.min(vw / 1920, vh / 1080);
        holder.style.width = 1920 * s + "px";
        holder.style.height = 1080 * s + "px";
        inner.style.transform = `scale(${s})`;
      };
      scale();
      if (!holder.__rfpcScaled) {
        holder.__rfpcScaled = true;
        window.addEventListener("resize", scale);
      }
    },
    style: {
      position: "relative",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1920,
      height: 1080,
      transformOrigin: "top left",
      flex: "none"
    }
  }, stage)));
}
Object.assign(__ds_scope, { ShowReel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/signage/ShowReel.jsx", error: String((e && e.message) || e) }); }

// components/signage/StageFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StageFrame — the fixed 1920×1080 signage canvas + brand atmosphere.
 * Sets the per-game accent scope, paints the velvet-green stage vignette,
 * and lays out a header / main / footer column inside the TV safe area.
 * Auto-scales to fit any viewport (letterboxed on the deepest green).
 */
function StageFrame({
  game,
  header = null,
  footer = null,
  children,
  fit = true,
  style,
  ...rest
}) {
  const stage = /*#__PURE__*/React.createElement("div", _extends({
    "data-game": game,
    style: {
      position: "relative",
      width: "var(--stage-w)",
      height: "var(--stage-h)",
      background: "var(--stage-vignette)",
      color: "var(--text-body)",
      fontFamily: "var(--font-body)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      padding: "var(--safe-top) var(--safe-x) var(--safe-bottom)",
      boxSizing: "border-box",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      background: "radial-gradient(150% 120% at 50% 45%, transparent 58%, rgba(0,0,0,0.55) 100%)",
      mixBlendMode: "multiply"
    }
  }), header, /*#__PURE__*/React.createElement("main", {
    style: {
      position: "relative",
      flex: 1,
      minHeight: 0,
      display: "flex",
      flexDirection: "column",
      paddingTop: "var(--sp-5)",
      paddingBottom: "var(--sp-4)"
    }
  }, children), footer);
  if (!fit) return stage;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "var(--forest-900)",
      display: "grid",
      placeItems: "center",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: holder => {
      if (!holder) return;
      const inner = holder.firstElementChild;
      const scale = () => {
        const vw = holder.parentElement.clientWidth;
        const vh = holder.parentElement.clientHeight;
        const s = Math.min(vw / 1920, vh / 1080);
        holder.style.width = 1920 * s + "px";
        holder.style.height = 1080 * s + "px";
        inner.style.transform = `scale(${s})`;
      };
      scale();
      if (!holder.__rfpcScaled) {
        holder.__rfpcScaled = true;
        window.addEventListener("resize", scale);
      }
    },
    style: {
      position: "relative",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1920,
      height: 1080,
      transformOrigin: "top left",
      flex: "none"
    }
  }, stage)));
}
Object.assign(__ds_scope, { StageFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/signage/StageFrame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/signage/JamesBond.jsx
try { (() => {
/* global React, window */

const FILMS = [["01", "Dr. No", "1962"], ["02", "From Russia With Love", "1963"], ["03", "Goldfinger", "1964"], ["04", "Thunderball", "1965"], ["05", "You Only Live Twice", "1967"], ["06", "Diamonds Are Forever", "1971"]];

/* Color-coded key line for the Action Button section. */
function Swatch({
  color,
  glow,
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-3)",
      padding: "var(--sp-5)",
      borderRadius: "var(--r-lg)",
      background: "color-mix(in srgb, var(--forest-700) 70%, transparent)",
      border: "var(--hair) solid var(--border-panel)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 8,
      background: color,
      boxShadow: `0 0 26px -4px ${glow}`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-marquee)",
      fontWeight: 700,
      fontSize: "var(--t-h2)",
      textTransform: "uppercase",
      color: "var(--text-strong)",
      lineHeight: 1.05
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-body)",
      color: "var(--text-body)",
      lineHeight: 1.32
    }
  }, children));
}

/* Built lazily at render time (below) so the DS bundle is guaranteed loaded
   before any of its components are referenced in JSX. */
function buildSections({
  ShotRow,
  FilmTile,
  Chip
}) {
  return [{
    index: 1,
    kicker: "Clear the Set",
    title: "The Six Films",
    teaser: "Six films. Clear all four mode types in each to complete it.",
    detail: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        gap: "var(--sp-4)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: "var(--sp-3)",
        flex: 1,
        minHeight: 0
      }
    }, FILMS.map(([ord, title, year]) => /*#__PURE__*/React.createElement(FilmTile, {
      key: ord,
      title: title,
      meta: year
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--sp-3)"
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      tone: "brass"
    }, "4 mode types per film"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--t-body)",
        color: "var(--text-muted)"
      }
    }, "Villains \xB7 Henchmen \xB7 SPECTRE Weapon \xB7 Q Branch")))
  }, {
    index: 2,
    kicker: "Per Film",
    title: "Film Mode Types",
    teaser: "The four shots that clear a film.",
    detail: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "0 var(--sp-8)",
        alignContent: "center",
        height: "100%"
      }
    }, /*#__PURE__*/React.createElement(ShotRow, {
      label: "Villains",
      target: "Right Ramp"
    }, "Battle the film's villain."), /*#__PURE__*/React.createElement(ShotRow, {
      label: "Henchmen",
      target: "Side Ramp"
    }, "Take down the henchman."), /*#__PURE__*/React.createElement(ShotRow, {
      label: "SPECTRE Weapon",
      target: "Spell SPECTRE @ Rocket"
    }, "Qualify the weapon multiball."), /*#__PURE__*/React.createElement(ShotRow, {
      label: "Q Branch",
      target: "Scoop when qualified"
    }, "Shoot the scoop to collect gear."))
  }, {
    index: 3,
    kicker: "Stack Them",
    title: "Key Multiballs",
    teaser: "Three multiballs — and the one that needs both.",
    detail: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "var(--sp-2)",
        height: "100%"
      }
    }, /*#__PURE__*/React.createElement(ShotRow, {
      label: "Bird One",
      target: "Center Orbit"
    }, "Rocket drop targets light lock; lock via the center orbit."), /*#__PURE__*/React.createElement(ShotRow, {
      label: "Jetpack",
      target: "Left Orbit"
    }, "Qualify at the scuba area, then start at the left orbit."), /*#__PURE__*/React.createElement(ShotRow, {
      label: "Bond\u2026 James Bond",
      target: "Villain + Henchman"
    }, "Battle a villain and a henchman, then play Bird One and Jetpack."))
  }, {
    index: 4,
    kicker: "Wizard Mode",
    title: "OHMSS",
    teaser: "Complete all six films to reach the ultimate goal.",
    detail: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "var(--sp-2)",
        height: "100%"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 var(--sp-3)",
        fontSize: "var(--t-lead)",
        lineHeight: 1.4,
        color: "var(--text-body)",
        maxWidth: "44ch"
      }
    }, "On Her Majesty's Secret Service. Flip-count based \u2014 you get a limited number of flips to replay all six film stages."), /*#__PURE__*/React.createElement(ShotRow, {
      label: "Replay All Six Films",
      target: "Flip-Count"
    }), /*#__PURE__*/React.createElement(ShotRow, {
      label: "Ends in MI6 Multiball",
      target: "The Ultimate Goal"
    }))
  }, {
    index: 5,
    kicker: "At the Plunge",
    title: "Skill Shot",
    teaser: "Hold the left flipper and vary your shots.",
    detail: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "var(--sp-2)",
        height: "100%"
      }
    }, /*#__PURE__*/React.createElement(ShotRow, {
      label: "Hold Left Flipper",
      target: "During Plunge"
    }, "Sets up the skill shot as the ball launches."), /*#__PURE__*/React.createElement(ShotRow, {
      label: "Hit Purple Lit Shots",
      target: "Points + Smart Missile"
    }, "Each lit purple shot scores and awards a smart missile."), /*#__PURE__*/React.createElement(ShotRow, {
      label: "Vary Your Shots",
      target: "Repeats = Points Only"
    }, "Repeating a shot only scores points \u2014 keep moving."))
  }, {
    index: 6,
    kicker: "#1 Scoring Tool",
    title: "Action Button",
    teaser: "The most valuable button on the machine.",
    detail: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--sp-5)",
        height: "100%",
        alignItems: "stretch"
      }
    }, /*#__PURE__*/React.createElement(Swatch, {
      color: "#4d93ea",
      glow: "rgba(77,147,234,0.75)",
      label: "Blue \xB7 Smart Missiles"
    }, "Collects the most valuable shot currently on the playfield."), /*#__PURE__*/React.createElement(Swatch, {
      color: "#e04d9c",
      glow: "rgba(224,77,156,0.75)",
      label: "Pink \xB7 Playfield Multipliers"
    }, "Earned by qualifying Bond Girls \u2014 the machine's biggest scores."))
  }];
}
function JamesBondSummary() {
  const ns = window.RFPCDesignSystem_18f9c3;
  const {
    StageFrame,
    MarqueeHeader,
    SignageFooter,
    KioskShow
  } = ns;
  const SECTIONS = buildSections(ns);
  return /*#__PURE__*/React.createElement(StageFrame, {
    game: "james-bond",
    header: /*#__PURE__*/React.createElement(MarqueeHeader, {
      eyebrow: "Stern \xB7 Premium \xB7 2022",
      title: "James Bond 007",
      meta: ["Game Summary", "The Lockedown · Machine 3 of 8"]
    }),
    footer: /*#__PURE__*/React.createElement(SignageFooter, {
      rfpcBadge: "../../assets/rfpc-mark-cream.png",
      gameLogo: /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: "../../assets/lockedown-mark-cream.png",
        alt: "The Lockedown",
        style: {
          height: 58,
          width: "auto",
          opacity: 0.92
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "var(--font-mono)",
          fontSize: "var(--t-micro)",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--text-faint)"
        }
      }, "Machine 3 of 8")),
      proTip: "Master the Action Button before you chase films \u2014 it is the machine's #1 scoring tool."
    })
  }, /*#__PURE__*/React.createElement(KioskShow, {
    sections: SECTIONS,
    columns: 3,
    holdMs: 10000,
    storageKey: "rfpc-bond"
  }));
}
window.JamesBondSummary = JamesBondSummary;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/signage/JamesBond.jsx", error: String((e && e.message) || e) }); }

// ui_kits/signage/Kiosk.jsx
try { (() => {
/* global React */
// RFPC Kiosk — the running attract loop: Overview → Bond (3 detail cards → funny
// recap) → general palate-cleansers (Tips, Glossary, Quip) → loop.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "holdSec": 10,
  "overviewStyle": "grid",
  "recapStyle": "dossier"
} /*EDITMODE-END*/;
function KioskApp() {
  // Resolve globals at render time — the DS bundle, scene, and tweaks-panel
  // scripts all finish loading before first paint, so referencing them here
  // (rather than at module top-level) avoids a load-order race.
  const {
    ShowReel
  } = window.RFPCDesignSystem_18f9c3;
  const {
    RfpcLineup,
    RfpcBondMission,
    RfpcBondVillains,
    RfpcBondBirdOne,
    RfpcBondRecap,
    RfpcTips,
    RfpcGlossary,
    RfpcQuip,
    useTweaks,
    TweaksPanel,
    TweakSection,
    TweakSlider,
    TweakRadio
  } = window;
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const hold = Math.round(t.holdSec * 1000);
  const scenes = [{
    id: "lineup",
    kind: "overview",
    eyebrow: "The Lockedown",
    title: "On The Floor",
    meta: ["8 Machines", "River Forest Pinball Club"],
    gameName: "The Lockedown",
    proTip: "Eight machines, one basement. Tonight we're on Bond.",
    render: () => /*#__PURE__*/React.createElement(RfpcLineup, {
      style: t.overviewStyle
    })
  }, {
    id: "bond-mission",
    kind: "machine",
    game: "james-bond",
    eyebrow: "Stern Premium · 2022",
    title: "James Bond 007",
    meta: ["The Mission", "1 of 8 · The Lockedown"],
    gameName: "James Bond 007",
    proTip: "Master the Action Button before you chase films — it's the #1 scoring tool.",
    render: () => /*#__PURE__*/React.createElement(RfpcBondMission, null)
  }, {
    id: "bond-villains",
    kind: "machine",
    game: "james-bond",
    eyebrow: "James Bond 007 · Modes",
    title: "Villain Modes",
    meta: ["Six Films, Six Villains", "1 of 8 · The Lockedown"],
    gameName: "James Bond 007",
    proTip: "Complete all six villain modes to unlock the OHMSS wizard mode.",
    render: () => /*#__PURE__*/React.createElement(RfpcBondVillains, null)
  }, {
    id: "bond-birdone",
    kind: "machine",
    game: "james-bond",
    eyebrow: "James Bond 007 · Multiball",
    title: "Bird One",
    meta: ["The Rocket · 3-Ball", "1 of 8 · The Lockedown"],
    gameName: "James Bond 007",
    proTip: "Complete SPECTRE targets before you start Bird One to max your jackpots.",
    render: () => /*#__PURE__*/React.createElement(RfpcBondBirdOne, null)
  }, {
    id: "bond-recap",
    kind: "machine",
    game: "james-bond",
    eyebrow: "James Bond 007 · In Short",
    title: "Bond, Honestly",
    meta: ["The Recap", "1 of 8 · The Lockedown"],
    gameName: "James Bond 007",
    proTip: "It's a great table. You are the problem.",
    holdMs: hold + 2000,
    render: () => /*#__PURE__*/React.createElement(RfpcBondRecap, {
      style: t.recapStyle
    })
  }, {
    id: "tips",
    kind: "general",
    eyebrow: "House Rules",
    title: "House Tips",
    meta: ["Play Better Tonight"],
    gameName: "The Lockedown",
    proTip: "A still flipper is a save. A panicked flipper is a drain.",
    render: () => /*#__PURE__*/React.createElement(RfpcTips, null)
  }, {
    id: "glossary",
    kind: "general",
    eyebrow: "Speak The Language",
    title: "Pinball Lingo",
    meta: ["The Words on the Floor"],
    gameName: "The Lockedown",
    proTip: "If you can say SDTM out loud, you've officially lost a ball to it.",
    render: () => /*#__PURE__*/React.createElement(RfpcGlossary, null)
  }, {
    id: "quip",
    kind: "general",
    eyebrow: "Real Talk",
    title: "Overheard",
    meta: ["The Lockedown"],
    gameName: "The Lockedown",
    proTip: "You're not mad at the machine. You're mad at yourself. The machine knows.",
    holdMs: hold + 1500,
    render: () => /*#__PURE__*/React.createElement(RfpcQuip, null)
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ShowReel, {
    scenes: scenes,
    holdMs: hold,
    storageKey: "rfpc-lockedown-kiosk",
    rfpcBadge: "../../assets/rfpc-mark-cream.png"
  }), /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Pacing"
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "Hold per card",
    value: t.holdSec,
    min: 5,
    max: 20,
    step: 1,
    unit: "s",
    onChange: v => setTweak("holdSec", v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Overview screen"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Style",
    value: t.overviewStyle,
    options: ["grid", "marquee"],
    onChange: v => setTweak("overviewStyle", v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Funny recap"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Treatment",
    value: t.recapStyle,
    options: ["dossier", "monologue", "scoreboard"],
    onChange: v => setTweak("recapStyle", v)
  })));
}
window.RfpcKioskApp = KioskApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/signage/Kiosk.jsx", error: String((e && e.message) || e) }); }

// ui_kits/signage/KioskScenes.jsx
try { (() => {
/* global React */
// RFPC Kiosk — scene content (Bond feature cards, funny recaps, general sections).
// Reads the design-system components off the compiled bundle namespace.
const {
  SectionPanel,
  ShotRow,
  Chip,
  FilmTile
} = window.RFPCDesignSystem_18f9c3;

/* ---------- small shared building blocks ---------- */

const sceneRoot = {
  position: "absolute",
  inset: 0,
  display: "flex",
  flexDirection: "column",
  minHeight: 0
};
function Board({
  cols,
  rows = 1,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: "grid",
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gridTemplateRows: `repeat(${rows}, 1fr)`,
      gap: "var(--sp-4)",
      ...style
    }
  }, children);
}

// a plain velvet cabinet card (no numbered header) for grids
function Cell({
  children,
  accentTop = true,
  glow = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      minHeight: 0,
      overflow: "hidden",
      padding: "var(--sp-4)",
      borderRadius: "var(--r-lg)",
      background: "linear-gradient(160deg, color-mix(in srgb, var(--surface-panel) 92%, transparent), color-mix(in srgb, var(--forest-700) 88%, transparent))",
      border: "var(--hair) solid var(--border-panel)",
      boxShadow: glow ? "var(--shadow-lift), var(--glow-accent-sm)" : "var(--shadow-panel)",
      ...style
    }
  }, accentTop && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: "0 0 auto 0",
      height: 3,
      background: "var(--accent)",
      opacity: 0.9
    }
  }), children);
}
function CellHead({
  kicker,
  title,
  size = "var(--t-h1)"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--sp-3)"
    }
  }, kicker && /*#__PURE__*/React.createElement("div", {
    className: "rfpc-eyebrow",
    style: {
      color: "var(--text-faint)",
      marginBottom: 6
    }
  }, kicker), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-marquee)",
      fontWeight: "var(--w-bold)",
      fontSize: size,
      lineHeight: "var(--lh-snug)",
      textTransform: "uppercase",
      color: "var(--text-strong)"
    }
  }, title));
}
function Lead({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 var(--sp-3)",
      fontSize: "var(--t-lead)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)",
      maxWidth: "78ch",
      ...style
    }
  }, children);
}

/* =====================================================================
   OVERVIEW — the lineup screen (two variants)
   ===================================================================== */

const LINEUP = [{
  game: "james-bond",
  name: "James Bond 007",
  maker: "Stern · 2022",
  featured: true
}, {
  game: "stranger-things",
  name: "Stranger Things",
  maker: "Stern · 2019"
}, {
  game: "godzilla",
  name: "Godzilla",
  maker: "Stern · 2021"
}, {
  game: "deadpool",
  name: "Deadpool",
  maker: "Stern · 2018"
}, {
  game: "foo-fighters",
  name: "Foo Fighters",
  maker: "Stern · 2023"
}, {
  game: "jurassic-park",
  name: "Jurassic Park",
  maker: "Stern · 2019"
}, {
  game: "monster-bash",
  name: "Monster Bash",
  maker: "Williams · 1998"
}, {
  game: "john-wick",
  name: "John Wick",
  maker: "Stern · 2024"
}];
function LineupGrid() {
  return /*#__PURE__*/React.createElement("div", {
    style: sceneRoot
  }, /*#__PURE__*/React.createElement(Board, {
    cols: 4,
    rows: 2
  }, LINEUP.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.game,
    "data-game": m.game,
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      overflow: "hidden",
      padding: "var(--sp-4)",
      borderRadius: "var(--r-lg)",
      background: m.featured ? "linear-gradient(155deg, var(--surface-raised), var(--surface-panel))" : "linear-gradient(160deg, color-mix(in srgb, var(--surface-panel) 90%, transparent), color-mix(in srgb, var(--forest-800) 92%, transparent))",
      border: "var(--hair) solid var(--border-panel)",
      boxShadow: m.featured ? "var(--shadow-lift), var(--glow-accent-md)" : "var(--shadow-panel)",
      opacity: m.featured ? 1 : 0.9
    }
  }, m.featured && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: 5,
      background: "var(--accent)",
      boxShadow: "var(--glow-accent-md)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 16,
      height: 16,
      borderRadius: 999,
      background: "var(--accent)",
      boxShadow: "var(--glow-accent-sm)"
    }
  }), m.featured ? /*#__PURE__*/React.createElement(Chip, {
    tone: "accent"
  }, "Now Featured") : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--t-label)",
      color: "var(--text-faint)",
      letterSpacing: "0.08em"
    }
  }, "ON THE FLOOR")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-marquee)",
      fontWeight: "var(--w-bold)",
      fontSize: "34px",
      lineHeight: 1.02,
      textTransform: "uppercase",
      color: "var(--text-strong)",
      textWrap: "balance"
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--t-label)",
      color: "var(--text-muted)"
    }
  }, m.maker))))));
}
function LineupMarquee() {
  return /*#__PURE__*/React.createElement("div", {
    style: sceneRoot
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: "grid",
      gridTemplateColumns: "1.15fr 1fr",
      gap: "var(--sp-6)",
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-game": "james-bond",
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "var(--r-lg)",
      padding: "var(--sp-6)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "var(--sp-3)",
      background: "linear-gradient(150deg, var(--surface-raised), var(--surface-panel))",
      border: "var(--hair) solid var(--border-panel)",
      boxShadow: "var(--shadow-lift), var(--glow-accent-md)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: 6,
      background: "var(--accent)",
      boxShadow: "var(--glow-accent-md)"
    }
  }), /*#__PURE__*/React.createElement(Chip, {
    tone: "accent"
  }, "Now Featured"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-marquee)",
      fontWeight: "var(--w-bold)",
      fontSize: "78px",
      lineHeight: 0.96,
      textTransform: "uppercase",
      color: "var(--text-strong)"
    }
  }, "James", /*#__PURE__*/React.createElement("br", null), "Bond 007"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--t-lead)",
      color: "var(--accent-bright)"
    }
  }, "Stern Premium \xB7 2022"), /*#__PURE__*/React.createElement("p", {
    className: "rfpc-serif-italic",
    style: {
      margin: 0,
      fontSize: "var(--t-lead)",
      color: "var(--text-body)",
      maxWidth: "34ch"
    }
  }, "Six Connery films, one rocket, one very smug tuxedo.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: "var(--sp-2)"
    }
  }, LINEUP.filter(m => !m.featured).map(m => /*#__PURE__*/React.createElement("div", {
    key: m.game,
    "data-game": m.game,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--sp-3)",
      padding: "var(--sp-2) var(--sp-3)",
      borderRadius: "var(--r-md)",
      background: "color-mix(in srgb, var(--surface-panel) 70%, transparent)",
      border: "var(--hair) solid var(--border-hair)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 14,
      height: 14,
      borderRadius: 999,
      background: "var(--accent)",
      boxShadow: "var(--glow-accent-sm)",
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-marquee)",
      fontWeight: "var(--w-semibold)",
      fontSize: "28px",
      textTransform: "uppercase",
      color: "var(--text-strong)",
      flex: 1
    }
  }, m.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--t-label)",
      color: "var(--text-faint)"
    }
  }, m.maker))))));
}
function Lineup({
  style
}) {
  return style === "marquee" ? /*#__PURE__*/React.createElement(LineupMarquee, null) : /*#__PURE__*/React.createElement(LineupGrid, null);
}

/* =====================================================================
   BOND — feature cards (machine · detailed)
   ===================================================================== */

const FILMS = [{
  ord: "01",
  title: "Dr. No",
  meta: "1962"
}, {
  ord: "02",
  title: "From Russia With Love",
  meta: "1963"
}, {
  ord: "03",
  title: "Goldfinger",
  meta: "1964"
}, {
  ord: "04",
  title: "Thunderball",
  meta: "1965"
}, {
  ord: "05",
  title: "You Only Live Twice",
  meta: "1967"
}, {
  ord: "06",
  title: "Diamonds Are Forever",
  meta: "1971"
}];
function BondMission() {
  return /*#__PURE__*/React.createElement("div", {
    style: sceneRoot
  }, /*#__PURE__*/React.createElement(Lead, null, "Play through six classic Connery films. Finish all four mode types on a film to complete it \u2014 clear all six to unlock ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-strong)"
    }
  }, "On Her Majesty's Secret Service"), ", the ultimate wizard mode."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateRows: "auto 1fr",
      gap: "var(--sp-4)",
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: "var(--sp-3)"
    }
  }, FILMS.map(f => /*#__PURE__*/React.createElement(FilmTile, {
    key: f.ord,
    ordinal: f.ord,
    title: f.title,
    meta: f.meta
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr 1fr",
      gap: "var(--sp-4)",
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(Cell, {
    glow: true
  }, /*#__PURE__*/React.createElement(CellHead, {
    kicker: "Per Film \xB7 Clear all four",
    title: "Mode Types"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "-6px"
    }
  }, /*#__PURE__*/React.createElement(ShotRow, {
    label: "Villains",
    target: "Right Ramp"
  }, "Battle each film's villain."), /*#__PURE__*/React.createElement(ShotRow, {
    label: "Henchmen",
    target: "Side Ramp"
  }, "Take out the muscle."), /*#__PURE__*/React.createElement(ShotRow, {
    label: "SPECTRE Weapon",
    target: "Spell SPECTRE"
  }, "Light the rocket's weapon modes."), /*#__PURE__*/React.createElement(ShotRow, {
    label: "Q Branch",
    target: "Scoop"
  }, "Once lit, use Q's toys."))), /*#__PURE__*/React.createElement(Cell, null, /*#__PURE__*/React.createElement(CellHead, {
    kicker: "The #1 scoring tool",
    title: "Action Button"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--sp-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 14,
      height: 14,
      borderRadius: 4,
      background: "#4d93ea",
      flex: "none",
      alignSelf: "center"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: "var(--font-marquee)",
      textTransform: "uppercase",
      color: "var(--text-strong)"
    }
  }, "Smart Missiles"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-body)",
      color: "var(--text-body)",
      lineHeight: 1.28
    }
  }, "Fire the most valuable lit shot."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--sp-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 14,
      height: 14,
      borderRadius: 4,
      background: "#e26fb0",
      flex: "none",
      alignSelf: "center"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: "var(--font-marquee)",
      textTransform: "uppercase",
      color: "var(--text-strong)"
    }
  }, "Multipliers"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-body)",
      color: "var(--text-body)",
      lineHeight: 1.28
    }
  }, "Stack 2\xD7, 3\xD7\u2026 on the playfield."))))), /*#__PURE__*/React.createElement(Cell, null, /*#__PURE__*/React.createElement(CellHead, {
    kicker: "Wizard Mode",
    title: "OHMSS"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--t-body)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)"
    }
  }, "Complete all six films to open ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-strong)"
    }
  }, "On Her Majesty's Secret Service"), " \u2014 a flip-count showdown that ends in ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--accent-bright)"
    }
  }, "MI6 Multiball"), ", the goal of the whole game."), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Chip, {
    tone: "brass",
    style: {
      alignSelf: "flex-start"
    }
  }, "\u25C6 Finish all 6 films")))));
}
const VILLAINS = [{
  name: "Dr. No",
  film: "Dr. No · 1962",
  target: "Right Orbit",
  beat: "Alternate right orbit and the dragon-tank target. Hit the lit tank 3×."
}, {
  name: "Rosa Klebb",
  film: "From Russia With Love · 1963",
  target: "Right Orbit",
  beat: "Light all shots for combos. Make 5 lit right-orbit shots."
}, {
  name: "Goldfinger",
  film: "Goldfinger · 1964",
  target: "Goldfinger Target",
  beat: "Hit the target to light gold shots; hit it again to collect. 6×."
}, {
  name: "Largo",
  film: "Thunderball · 1965",
  target: "Left Scoop",
  beat: "Light roving shots, relight the scoop. Make 4 lit scoops."
}, {
  name: "Blofeld",
  film: "You Only Live Twice · 1967",
  target: "Rocket Lane",
  beat: "Shoot the rocket behind the drops. Make 4 rocket shots."
}, {
  name: "Mr. Henderson",
  film: "Diamonds Are Forever · 1971",
  target: "Spinner",
  beat: "Rip the spinner to light shots white. Make 5 spinner rips."
}];
function BondVillains() {
  return /*#__PURE__*/React.createElement("div", {
    style: sceneRoot
  }, /*#__PURE__*/React.createElement(Lead, null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-strong)"
    }
  }, "Shoot the Right Ramp"), " to start a villain mode. Swap the target villain with the pop bumpers. Stack with a multiball for max points."), /*#__PURE__*/React.createElement(Board, {
    cols: 6
  }, VILLAINS.map(v => /*#__PURE__*/React.createElement(Cell, {
    key: v.name,
    style: {
      padding: "var(--sp-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-marquee)",
      fontWeight: "var(--w-bold)",
      fontSize: "26px",
      lineHeight: 1.0,
      textTransform: "uppercase",
      color: "var(--text-strong)",
      textWrap: "balance"
    }
  }, v.name), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "6px 0 var(--sp-2)",
      fontFamily: "var(--font-mono)",
      fontSize: "14px",
      color: "var(--text-faint)"
    }
  }, v.film), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "20px",
      lineHeight: 1.32,
      color: "var(--text-body)",
      flex: 1
    }
  }, v.beat), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--sp-2)",
      fontFamily: "var(--font-mono)",
      fontSize: "14px",
      letterSpacing: "0.02em",
      color: "var(--accent-bright)",
      background: "color-mix(in srgb, var(--accent) 16%, transparent)",
      border: "var(--hair) solid color-mix(in srgb, var(--accent) 40%, transparent)",
      borderRadius: "var(--r-sm)",
      padding: "4px 9px",
      alignSelf: "flex-start"
    }
  }, v.target)))));
}
const BIRD_STEPS = [{
  n: "01",
  title: "Light the Locks",
  target: "Center Loop",
  body: "Knock down the Osato drop targets to light the lock, then shoot the center loop to lock three balls in the rocket."
}, {
  n: "02",
  title: "Extension",
  target: "Upper Flippers",
  body: "At launch, the two upper-flipper shots flash for double jackpots. Collect three to qualify a multiball extension — a near-free restart."
}, {
  n: "03",
  title: "Score Jackpots",
  target: "The Rocket",
  body: "Every shot lights green (1M + 25k per SPECTRE target). Collect three, then blast the Rocket for a Super Jackpot worth the running total."
}];
function BondBirdOne() {
  return /*#__PURE__*/React.createElement("div", {
    style: sceneRoot
  }, /*#__PURE__*/React.createElement(Lead, null, "The game's primary 3-ball multiball, themed on SPECTRE's rocket from ", /*#__PURE__*/React.createElement("em", null, "You Only Live Twice"), ". Build jackpots by completing SPECTRE targets before you launch."), /*#__PURE__*/React.createElement(Board, {
    cols: 3
  }, BIRD_STEPS.map((s, i) => /*#__PURE__*/React.createElement(Cell, {
    key: s.n,
    glow: i === 2
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--sp-3)",
      marginBottom: "var(--sp-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: "44px",
      lineHeight: 1,
      color: "var(--accent-bright)"
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-marquee)",
      fontWeight: "var(--w-bold)",
      fontSize: "34px",
      lineHeight: 1.02,
      textTransform: "uppercase",
      color: "var(--text-strong)"
    }
  }, s.title)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--t-lead)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)",
      flex: 1
    }
  }, s.body), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--sp-3)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--t-label)",
      color: "var(--accent-bright)",
      background: "color-mix(in srgb, var(--accent) 16%, transparent)",
      border: "var(--hair) solid color-mix(in srgb, var(--accent) 40%, transparent)",
      borderRadius: "var(--r-sm)",
      padding: "5px 12px",
      alignSelf: "flex-start"
    }
  }, s.target)))));
}

/* =====================================================================
   BOND — funny recap (machine · punchline). Three treatments.
   ===================================================================== */

function RecapDossier() {
  const Redact = ({
    w
  }) => /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      height: "0.82em",
      width: w,
      background: "var(--text-strong)",
      opacity: 0.82,
      borderRadius: 2,
      transform: "translateY(2px)",
      margin: "0 4px"
    }
  });
  const line = {
    fontSize: "26px",
    lineHeight: 1.5,
    color: "var(--text-body)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: sceneRoot
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Cell, {
    glow: true,
    style: {
      maxWidth: 1180,
      width: "100%",
      padding: "var(--sp-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "var(--sp-4)",
      paddingBottom: "var(--sp-3)",
      borderBottom: "var(--hair) solid var(--border-panel)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rfpc-eyebrow",
    style: {
      color: "var(--accent-bright)"
    }
  }, "MI6 \xB7 Field Assessment"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--t-label)",
      color: "var(--text-faint)"
    }
  }, "SUBJECT: YOU")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--sp-3)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...line,
      margin: 0
    }
  }, "Located the right ramp exactly once. It was ", /*#__PURE__*/React.createElement(Redact, {
    w: 90
  }), " an accident."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...line,
      margin: 0
    }
  }, "Spelled ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--text-strong)"
    }
  }, "S-P-E-C-T-R"), "\u2026 and then drained straight down the middle."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...line,
      margin: 0
    }
  }, "Bird One locked ", /*#__PURE__*/React.createElement(Redact, {
    w: 40
  }), " zero balls. Rocket status: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--accent-bright)"
    }
  }, "untouched, deeply offended.")), /*#__PURE__*/React.createElement("p", {
    style: {
      ...line,
      margin: 0
    }
  }, "Never once found the action button. The ", /*#__PURE__*/React.createElement("em", null, "#1 scoring tool."), " The one thing we ", /*#__PURE__*/React.createElement(Redact, {
    w: 70
  }), " begged you to press.")), /*#__PURE__*/React.createElement("p", {
    className: "rfpc-serif-italic",
    style: {
      margin: "var(--sp-4) 0 0",
      fontSize: "30px",
      color: "var(--text-strong)"
    }
  }, "Recommendation: reassign agent to skee-ball. This is bullshit."))));
}
function RecapMonologue() {
  return /*#__PURE__*/React.createElement("div", {
    style: sceneRoot
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: "grid",
      placeItems: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rfpc-eyebrow",
    style: {
      color: "var(--accent-bright)",
      marginBottom: "var(--sp-4)"
    }
  }, "Blofeld, unimpressed"), /*#__PURE__*/React.createElement("p", {
    className: "rfpc-serif-italic",
    style: {
      margin: 0,
      fontSize: "54px",
      lineHeight: 1.24,
      color: "var(--text-strong)",
      textWrap: "balance"
    }
  }, "\u201CAhh, Mr. Bond. Six films. Three multiballs. One tuxedo. And you drained on the ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent-bright)"
    }
  }, "plunge"), ".\u201D"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--sp-5) 0 0",
      fontSize: "28px",
      color: "var(--text-muted)"
    }
  }, "He didn't even get up from the chair. Nobody did. That's the shameful part."))));
}
function RecapScoreboard() {
  const rows = [{
    i: "BND",
    s: "412,000,000",
    note: "the machine, playing itself in attract mode"
  }, {
    i: "GUY",
    s: "38,400,000",
    note: "actually pressed the action button once"
  }, {
    i: "YOU",
    s: "1,240,000",
    note: "found the flippers eventually"
  }, {
    i: "SDT",
    s: "0",
    note: "straight down the middle. every ball. sad."
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: sceneRoot
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Cell, {
    glow: true,
    style: {
      maxWidth: 1120,
      width: "100%",
      padding: "var(--sp-6)"
    }
  }, /*#__PURE__*/React.createElement(CellHead, {
    kicker: "Tonight's Standings",
    title: "High Scores (Relative)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.i,
    style: {
      display: "grid",
      gridTemplateColumns: "auto 300px 1fr",
      alignItems: "baseline",
      gap: "var(--sp-4)",
      padding: "var(--sp-2) 0",
      borderTop: i ? "var(--hair) solid var(--border-hair)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: "40px",
      color: "var(--accent-bright)"
    }
  }, r.i), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "36px",
      color: "var(--text-strong)"
    }
  }, r.s), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "23px",
      color: "var(--text-muted)",
      lineHeight: 1.25
    }
  }, r.note)))), /*#__PURE__*/React.createElement("p", {
    className: "rfpc-serif-italic",
    style: {
      margin: "var(--sp-4) 0 0",
      fontSize: "26px",
      color: "var(--text-strong)"
    }
  }, "Free advice: press the damn button."))));
}
function BondRecap({
  style
}) {
  if (style === "monologue") return /*#__PURE__*/React.createElement(RecapMonologue, null);
  if (style === "scoreboard") return /*#__PURE__*/React.createElement(RecapScoreboard, null);
  return /*#__PURE__*/React.createElement(RecapDossier, null);
}

/* =====================================================================
   GENERAL — palate cleansers (brass/cream family)
   ===================================================================== */

const TIPS = [{
  name: "Dead Bounce",
  body: "Hold both flippers DOWN and let the ball bounce off a still flipper back into play. Flipping at the wrong instant is how you drain."
}, {
  name: "Cradle",
  body: "Trap the ball against a raised flipper. Reset, breathe, aim your next shot — then release. The whole game slows down."
}, {
  name: "Nudge, Don't Tilt",
  body: "Bump the machine to nudge the ball off a drain. Shove it three times in a row and the game bites back: TILT kills your ball."
}, {
  name: "Drop Catch",
  body: "The instant the ball lands on a raised flipper, drop the flipper to kill the bounce — then re-cradle. Kills all momentum dead."
}, {
  name: "Post Pass",
  body: "Tap the flipper to slide a cradled ball across to the other flipper, so you can take the shot you actually wanted."
}];
function Tips() {
  return /*#__PURE__*/React.createElement("div", {
    style: sceneRoot
  }, /*#__PURE__*/React.createElement(Lead, null, "Nobody's a natural. These five habits separate a 90-second ball from a five-minute one."), /*#__PURE__*/React.createElement(Board, {
    cols: 5
  }, TIPS.map((t, i) => /*#__PURE__*/React.createElement(Cell, {
    key: t.name,
    style: {
      padding: "var(--sp-4) var(--sp-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 700,
      fontSize: "var(--t-label)",
      color: "var(--accent-bright)"
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "var(--sp-2) 0 var(--sp-3)",
      fontFamily: "var(--font-marquee)",
      fontWeight: "var(--w-bold)",
      fontSize: "27px",
      lineHeight: 1.04,
      textTransform: "uppercase",
      color: "var(--text-strong)",
      textWrap: "balance"
    }
  }, t.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "20px",
      lineHeight: 1.36,
      color: "var(--text-body)"
    }
  }, t.body)))));
}
const GLOSSARY = [{
  term: "SDTM",
  def: "Straight Down The Middle. Drains between the flippers, unsaveable. Nothing you can do. Sad."
}, {
  term: "Drain",
  def: "Losing the ball down an outlane or the center. The end of your turn."
}, {
  term: "Cradle",
  def: "Holding the ball still against a raised flipper to reset and aim."
}, {
  term: "Dead Bounce",
  def: "Letting the ball bounce off a still flipper instead of risking a flip."
}, {
  term: "Multiball",
  def: "Two or more balls in play at once. Chaos, and a lot of points."
}, {
  term: "Wizard Mode",
  def: "The hidden end-game mode you unlock after finishing everything."
}, {
  term: "Nudge / Tilt",
  def: "Bumping the machine to steer the ball — vs. over-bumping and getting punished."
}, {
  term: "Slap Save",
  def: "A two-flipper panic swat at a draining ball. Sometimes it even works."
}];
function Glossary() {
  return /*#__PURE__*/React.createElement("div", {
    style: sceneRoot
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "repeat(4, 1fr)",
      gap: "var(--sp-3) var(--sp-6)",
      gridAutoFlow: "column"
    }
  }, GLOSSARY.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.term,
    style: {
      display: "grid",
      gridTemplateColumns: "230px 1fr",
      alignItems: "baseline",
      gap: "var(--sp-4)",
      padding: "var(--sp-2) 0",
      borderTop: "var(--hair) solid var(--border-hair)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--sp-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 9,
      height: 9,
      transform: "rotate(45deg)",
      background: "var(--accent)",
      boxShadow: "var(--glow-accent-sm)",
      flex: "none",
      alignSelf: "center"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-marquee)",
      fontWeight: "var(--w-bold)",
      fontSize: "30px",
      textTransform: "uppercase",
      color: "var(--text-strong)"
    }
  }, g.term)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "22px",
      lineHeight: 1.32,
      color: "var(--text-body)"
    }
  }, g.def)))));
}
const QUIPS = [{
  setup: "I mean, come on. That's not fair.",
  punch: "The right ramp on Monster Bash feeds the ball straight down the middle.",
  tag: "That's bullshit.",
  by: "— every regular, eventually"
}];
function Quip() {
  const q = QUIPS[0];
  return /*#__PURE__*/React.createElement("div", {
    style: sceneRoot
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: "grid",
      placeItems: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1300
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 var(--sp-4)",
      fontFamily: "var(--font-marquee)",
      fontSize: "30px",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, q.setup), /*#__PURE__*/React.createElement("p", {
    className: "rfpc-serif-italic",
    style: {
      margin: 0,
      fontSize: "56px",
      lineHeight: 1.2,
      color: "var(--text-strong)",
      textWrap: "balance"
    }
  }, q.punch), /*#__PURE__*/React.createElement("p", {
    className: "rfpc-serif-italic",
    style: {
      margin: "var(--sp-3) 0 0",
      fontSize: "72px",
      lineHeight: 1.05,
      color: "var(--brass-100)"
    }
  }, q.tag), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--sp-5) 0 0",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--t-label)",
      color: "var(--text-faint)"
    }
  }, q.by))));
}
Object.assign(window, {
  RfpcLineup: Lineup,
  RfpcBondMission: BondMission,
  RfpcBondVillains: BondVillains,
  RfpcBondBirdOne: BondBirdOne,
  RfpcBondRecap: BondRecap,
  RfpcTips: Tips,
  RfpcGlossary: Glossary,
  RfpcQuip: Quip
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/signage/KioskScenes.jsx", error: String((e && e.message) || e) }); }

// ui_kits/signage/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/signage/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.FilmTile = __ds_scope.FilmTile;

__ds_ns.KioskShow = __ds_scope.KioskShow;

__ds_ns.MarqueeHeader = __ds_scope.MarqueeHeader;

__ds_ns.SectionPanel = __ds_scope.SectionPanel;

__ds_ns.ShotRow = __ds_scope.ShotRow;

__ds_ns.ShowReel = __ds_scope.ShowReel;

__ds_ns.SignageFooter = __ds_scope.SignageFooter;

__ds_ns.StageFrame = __ds_scope.StageFrame;

})();

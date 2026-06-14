(function () {
  const {
    Stage,
    Sprite,
    Scene,
    FX,
    Hud,
    C
  } = window;
  function Movie() {
    const scenes = window.SCENES_A.concat(window.SCENES_B);
    const OV = 0.5; // crossfade overlap (s)
    let cursor = 0;
    const placed = scenes.map((s, i) => {
      const dur = window.VO && window.VO[i] && window.VO[i].dur ? window.VO[i].dur : s.dur; // retime to voice-over length
      const start = cursor;
      const end = start + dur;
      cursor = end - OV;
      return {
        ...s,
        dur,
        start,
        end
      };
    });
    const total = placed.length ? placed[placed.length - 1].end : 10;
    return /*#__PURE__*/React.createElement(Stage, {
      width: 1920,
      height: 1080,
      duration: total,
      background: C.navy,
      persistKey: "tibokfilm",
      loop: true
    }, placed.map((s, i) => /*#__PURE__*/React.createElement(Sprite, {
      key: i,
      start: s.start,
      end: s.end
    }, /*#__PURE__*/React.createElement(Scene, null, /*#__PURE__*/React.createElement(FX, {
      hue: s.hue,
      intensity: 0.55
    }), s.node))), /*#__PURE__*/React.createElement(Hud, null), /*#__PURE__*/React.createElement(Seeker, null), /*#__PURE__*/React.createElement(VoiceOver, {
      placed: placed
    }));
  }
  function Seeker() {
    const {
      setTime,
      setPlaying
    } = window.useTimeline();
    React.useEffect(() => {
      window.__seek = t => {
        setPlaying(false);
        setTime(t);
      };
      window.__play = () => setPlaying(true);
    }, [setTime, setPlaying]);
    return null;
  }

  // Voice-over: plays the per-scene narration clip (window.VO) in sync with the
  // timeline; follows play/pause and the scrubber. Press M to mute/unmute.
  function VoiceOver({
    placed
  }) {
    const {
      time,
      playing
    } = window.useTimeline();
    const [muted, setMuted] = React.useState(false);
    const st = React.useRef({
      audio: null,
      idx: -1
    });
    React.useEffect(() => {
      const a = typeof Audio !== 'undefined' ? new Audio() : null;
      if (a) {
        a.preload = 'auto';
      }
      st.current.audio = a;
      const onKey = e => {
        if (e.key === 'm' || e.key === 'M') setMuted(m => !m);
      };
      window.addEventListener('keydown', onKey);
      return () => {
        window.removeEventListener('keydown', onKey);
        if (a) a.pause();
      };
    }, []);
    React.useEffect(() => {
      const s = st.current,
        a = s.audio;
      if (!a) return;
      if (muted) {
        if (!a.paused) a.pause();
        return;
      }
      let idx = -1;
      for (let i = 0; i < placed.length; i++) {
        if (time >= placed[i].start) idx = i;else break;
      }
      const vo = idx >= 0 && window.VO ? window.VO[idx] : null;
      if (!playing || !vo) {
        if (!a.paused) a.pause();
        return;
      }
      if (s.idx !== idx) {
        s.idx = idx;
        a.src = vo.file;
        try {
          a.currentTime = 0;
        } catch (e) {}
      }
      const off = time - placed[idx].start;
      // audio is the master: only resync on a real jump (scrubber seek), not on small frame-drop drift, to avoid clipping words
      if (Math.abs((a.currentTime || 0) - off) > 1.5) {
        try {
          a.currentTime = Math.max(0, off);
        } catch (e) {}
      }
      if (a.paused) {
        a.play().catch(() => {});
      }
    });
    const FD = window.FD;
    return /*#__PURE__*/React.createElement("div", {
      onClick: () => setMuted(m => !m),
      title: "Activer / couper la voix off (M)",
      style: {
        position: 'absolute',
        right: 48,
        bottom: 128,
        zIndex: 60,
        pointerEvents: 'auto',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '11px 18px',
        borderRadius: 999,
        background: 'rgba(16,30,56,0.85)',
        border: '1px solid ' + (muted ? 'rgba(255,255,255,0.18)' : C.blue),
        boxShadow: muted ? 'none' : '0 0 18px ' + C.blue + '66',
        backdropFilter: 'blur(4px)',
        fontFamily: FD,
        fontWeight: 600,
        fontSize: 18,
        color: muted ? 'rgba(220,230,245,0.7)' : '#fff',
        userSelect: 'none'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 9v6h4l5 4V5L8 9H4z",
      fill: "currentColor",
      stroke: "none"
    }), muted ? /*#__PURE__*/React.createElement("path", {
      d: "M16 9l5 6M21 9l-5 6"
    }) : /*#__PURE__*/React.createElement("path", {
      d: "M16.5 8.5a5 5 0 0 1 0 7M19 6a8 8 0 0 1 0 12"
    })), muted ? 'Voix coupée' : 'Voix activée');
  }
  ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(Movie, null));
})();
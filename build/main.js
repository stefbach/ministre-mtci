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
    const OV = 0.5;
    let cursor = 0;
    const placed = scenes.map((s, i) => {
      const start = cursor;
      const end = start + s.dur;
      cursor = end - OV;
      return {
        ...s,
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
    }), s.node))), /*#__PURE__*/React.createElement(Hud, null), /*#__PURE__*/React.createElement(Seeker, null));
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
  ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(Movie, null));
})();
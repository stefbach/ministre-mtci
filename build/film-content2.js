/* film-content2.jsx — Acts 3–8. Loads after film-content.jsx.
   Exposes window.SCENES_B. */

(function () {
  const {
    Scene,
    FX,
    ActTag,
    Narration,
    Statement,
    Photo,
    Stat,
    Chip,
    Bar,
    Panel,
    Card3D,
    Logo,
    Swan,
    C,
    FD,
    FS,
    Easing,
    ev,
    fr,
    clamp,
    useScene,
    Flux,
    Modules,
    AfricaArc,
    EcosystemLive,
    Phone,
    FlowSvg,
    FlowLink,
    NodeChip,
    PhotoTile
  } = window;
  const SCENES_B = [/* ---------- ACT 3 ---------- */
  {
    dur: 24,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Acte 3",
      title: "DDS, le producteur IA"
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 250,
      size: 70,
      weight: 700,
      lines: ['DDS n’est pas une agence.', 'C’est un fabricant', 'de logiciels IA.'],
      accentIdx: [1, 2],
      accentColor: C.blue
    }), /*#__PURE__*/React.createElement(Narration, {
      lines: ['« Beaucoup disent : AI agency. Ils prennent ChatGPT,', 'ils mettent vos données dedans. C’est inutile,', 'et ça crée de la dépendance.', 'Nous, on fabrique des logiciels — qui tournent', 'en production, avec des clients réels qui payent. »'],
      x: 960,
      width: 1500,
      align: "center",
      y: 780,
      size: 38,
      italic: true,
      accent: "#EDEFF4",
      dim: "rgba(206,219,240,0.22)",
      lead: 1.4,
      tail: 1.2
    }))
  }, {
    dur: 28,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Acte 3",
      title: "Structure & portefeuille"
    }), /*#__PURE__*/React.createElement(DDSOrg, null), /*#__PURE__*/React.createElement(Narration, {
      lines: ['« DDS est une holding. Trois produits IA en production —', 'TIBOK, Lexora, Axon. Chacun a des clients réels.', 'Et à côté : des activités connexes —', 'Obesity Care Clinic, et CVMI, le tourisme médical au Cap-Vert.', 'Un écosystème — pas une agence. »'],
      x: 960,
      width: 1500,
      align: "center",
      y: 888,
      size: 32,
      italic: true,
      accent: "#EDEFF4",
      dim: "rgba(206,219,240,0.22)",
      lead: 1.4,
      tail: 1.2
    }))
  }, /* ---------- ACT 4 ---------- */
  {
    dur: 30,
    hue: 'teal',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Acte 4",
      title: "Produit 1 \u2014 Lexora",
      color: C.teal
    }), /*#__PURE__*/React.createElement(Logo, {
      name: "lexora",
      w: 300,
      x: 120,
      y: 150,
      at: 0.2
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 300,
      size: 54,
      weight: 700,
      lines: ['On scanne. On photographie.', 'La comptabilité se fait seule.'],
      accentIdx: [1],
      accentColor: C.teal
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 560,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: 22
      }
    }, [['Piloté par des agents IA', 'Un justificatif scanné ou photographié — et c’est saisi', C.teal], ['Paie & social simplifiés', 'La paie, le social — sans effort', C.blue], ['Le temps, pas la paperasse', 'Des heures gagnées chaque semaine', C.gold]].map((p, i) => /*#__PURE__*/React.createElement(DimCard, {
      key: i,
      p: p,
      i: i
    }))), /*#__PURE__*/React.createElement(Narration, {
      lines: ['« Je l’ai créé pour moi d’abord.', 'RH en interne, comptabilité en retard,', 'pas toujours rigoureuse — je connais le problème.', 'Alors j’ai développé des outils pour mes propres entreprises.', 'Puis je les ai rendus simples — pour en faire profiter', 'le plus grand nombre. C’est ça, Lexora. »'],
      x: 960,
      width: 1560,
      align: "center",
      y: 905,
      size: 29,
      italic: true,
      accent: "#D8F2F4",
      dim: "rgba(200,230,236,0.2)",
      lead: 1.6,
      tail: 1.1
    }))
  }, {
    dur: 32,
    hue: 'teal',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Acte 4",
      title: "Produit 2 \u2014 Axon AI",
      color: C.teal
    }), /*#__PURE__*/React.createElement(Logo, {
      name: "axon",
      w: 210,
      x: 120,
      y: 150,
      at: 0.2
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 250,
      size: 52,
      weight: 700,
      lines: ['Une équipe d’agents IA.', 'Vocal, secrétariat, back-office.'],
      accentIdx: [1],
      accentColor: C.teal
    }), /*#__PURE__*/React.createElement(Waveform, null), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 500,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: 24
      }
    }, [['Agent vocal', 'Appelle & répond — FR · EN · toutes les langues, testé en médical', C.teal], ['Agent administratif', 'Secrétariat : courriers, emails, agenda', C.blue], ['Tout le back-office', 'Une équipe d’agents IA multi-service', C.gold]].map((p, i) => /*#__PURE__*/React.createElement(DimCard, {
      key: i,
      p: p,
      i: i
    }))), /*#__PURE__*/React.createElement(Narration, {
      lines: ['« Axon, ce n’est pas qu’un agent vocal.', 'Il appelle et répond, dans toutes les langues.', 'Mais aussi un agent administratif : secrétariat,', 'courriers, emails, agenda — toute la gestion du back-office.', 'Une véritable équipe d’agents IA multi-service —', 'médical, hôtellerie, tourisme, administratif. »'],
      x: 960,
      width: 1540,
      align: "center",
      y: 880,
      size: 31,
      italic: true,
      accent: "#D8F2F4",
      dim: "rgba(200,230,236,0.2)",
      lead: 1.6,
      tail: 1.2
    }))
  }, {
    dur: 30,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Acte 4",
      title: "Produit phare \u2014 TIBOK"
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 190,
      size: 50,
      weight: 700,
      lines: ['L’intelligence médicale', 'qui relie tout.'],
      accentIdx: [1],
      accentColor: C.blue
    }), /*#__PURE__*/React.createElement(TibokHub, null), /*#__PURE__*/React.createElement(Narration, {
      lines: ['« TIBOK n’est pas une app de téléconsultation.', 'C’est une intelligence médicale qui tourne', 'autour de chaque dispositif — distanciel, présentiel,', 'pharmacie, labo, radio, urgence, soins primaires.', '60 000 références. En production chez Swan. »'],
      x: 960,
      width: 1560,
      align: "center",
      y: 918,
      size: 31,
      italic: true,
      accent: "#EDEFF4",
      dim: "rgba(206,219,240,0.2)",
      lead: 1.6,
      tail: 1.2
    }))
  }, {
    dur: 26,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Acte 4",
      title: "TIBOK \u2014 trois dimensions"
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 150,
      size: 48,
      weight: 700,
      lines: ['Plus qu’une intelligence médicale.'],
      accentColor: C.blue
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 340,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: 26
      }
    }, [['Intelligence médicale', 'Décision augmentée · 60 000 références · distance + présentiel', C.blue], ['Prévention — SilentCheck', 'Dépistage silencieux & détection précoce des risques', C.teal], ['Pilotage — tableau de bord', 'Temps réel pour le pilote · pilotage RH pour les entreprises', C.gold]].map((p, i) => /*#__PURE__*/React.createElement(DimCard, {
      key: i,
      p: p,
      i: i
    }))), /*#__PURE__*/React.createElement(Narration, {
      lines: ['« TIBOK, ce n’est pas que de l’intelligence médicale.', 'C’est aussi de la prévention, avec SilentCheck.', 'Et un tableau de bord de pilotage —', 'en temps réel pour le projet pilote,', 'et en pilotage RH pour les entreprises. »'],
      x: 960,
      width: 1540,
      align: "center",
      y: 845,
      size: 32,
      italic: true,
      accent: "#EDEFF4",
      dim: "rgba(206,219,240,0.2)",
      lead: 1.6,
      tail: 1.2
    }))
  }, {
    dur: 32,
    hue: 'coral',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Acte 4",
      title: "Le probl\xE8me africain",
      color: C.coral
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 170,
      size: 50,
      weight: 700,
      lines: ['On ne peut pas créer 50 000 médecins en 5 ans.', 'On peut augmenter 600 auxiliaires avec l’IA.'],
      accentIdx: [1],
      accentColor: C.gold
    }), /*#__PURE__*/React.createElement(Ratios, null), /*#__PURE__*/React.createElement(Narration, {
      lines: ['« À Maurice, le ratio médical est l’un des meilleurs d’Afrique.', 'Mais l’accès reste inégal — et 600 auxiliaires de santé', 'sont sans outils pour décider.', 'Ailleurs, c’est un médecin pour 25 000 au Sahel.', 'TIBOK augmente l’auxiliaire — il devient praticien. »'],
      x: 960,
      width: 1500,
      align: "center",
      y: 870,
      size: 34,
      italic: true,
      accent: "#F6DED7",
      dim: "rgba(230,200,192,0.24)",
      lead: 1.6,
      tail: 1.2
    }))
  }, {
    dur: 32,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Acte 4",
      title: "Comment \xE7a marche"
    }), /*#__PURE__*/React.createElement(EcosystemLive, null), /*#__PURE__*/React.createElement(Narration, {
      lines: ['« L’auxiliaire rentre les données.', 'TIBOK traite avec 60 000 références médicales,', 'ses guidelines, ses algorithmes propriétaires.', 'Une recommandation fondée sur la science.', 'Et chaque cas qu’on traite, le système apprend.', 'Année 1, c’est bon. Année 3, c’est meilleur', 'que beaucoup de médecins. »'],
      x: 960,
      width: 1500,
      align: "center",
      y: 860,
      size: 34,
      italic: true,
      accent: "#EDEFF4",
      dim: "rgba(206,219,240,0.2)",
      lead: 1.6,
      tail: 1.4
    }))
  }, {
    dur: 34,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Acte 4",
      title: "Les modules"
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 150,
      size: 46,
      weight: 700,
      lines: ['11 modules.', 'Un seul système connecté.'],
      accentIdx: [1],
      accentColor: C.blue
    }), /*#__PURE__*/React.createElement(Modules, null), /*#__PURE__*/React.createElement(Narration, {
      lines: ['« La consultation — à distance, en présentiel, normale,', 'chronique, dermato. Les connexions — labo, radio, pharmacie.', 'Le suivi des maladies chroniques par WhatsApp :', 'tension, diabète, poids. La prévention avec SilentCheck.', 'L’urgence, et le tableau de bord RH pour les entreprises. »'],
      x: 960,
      width: 1540,
      align: "center",
      y: 912,
      size: 29,
      italic: true,
      accent: "#EDEFF4",
      dim: "rgba(206,219,240,0.2)",
      lead: 1.6,
      tail: 1.1
    }))
  }, {
    dur: 34,
    hue: 'green',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Acte 4",
      title: "Swan Assurance \u2014 accord sign\xE9",
      color: C.green
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 150,
      size: 52,
      weight: 700,
      lines: ['Nous venons de signer', 'avec Swan.'],
      accentIdx: [1],
      accentColor: C.green
    }), /*#__PURE__*/React.createElement(Swan, {
      h: 70,
      x: 1360,
      y: 150,
      at: 0.5
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 320,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      at: 0.4,
      style: {
        maxWidth: 1360
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 600,
        fontSize: 30,
        color: '#fff',
        lineHeight: 1.4,
        textAlign: 'center'
      }
    }, "Swan accepte de ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: C.green,
        fontWeight: 800
      }
    }, "rembourser"), " les consultations et prescriptions faites sur TIBOK."))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 486,
        left: 0,
        right: 0,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 600,
        fontSize: 18,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: C.dim,
        marginBottom: 16
      }
    }, "Pr\xEAts \xE0 int\xE9grer le service pour leurs collaborateurs & familles"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        gap: 14,
        flexWrap: 'wrap',
        maxWidth: 1200,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      at: 0.8,
      color: C.blue
    }, "ER Group"), /*#__PURE__*/React.createElement(Chip, {
      at: 0.92,
      color: C.blue
    }, "Taylor Smith"), /*#__PURE__*/React.createElement(Chip, {
      at: 1.04,
      color: C.blue
    }, "Alteo"), /*#__PURE__*/React.createElement(Chip, {
      at: 1.16,
      color: C.blue
    }, "Bank One"))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 636,
        left: 0,
        right: 0,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 600,
        fontSize: 18,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: C.dim,
        marginBottom: 16
      }
    }, "En attente de r\xE9ponse"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        gap: 14,
        flexWrap: 'wrap',
        maxWidth: 1000,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      at: 1.3,
      color: C.gold
    }, "SICOM"), /*#__PURE__*/React.createElement(Chip, {
      at: 1.42,
      color: C.gold
    }, "NIC"), /*#__PURE__*/React.createElement(Chip, {
      at: 1.54,
      color: C.gold
    }, "MedSchem"), /*#__PURE__*/React.createElement(Chip, {
      at: 1.66,
      color: C.gold
    }, "\u2026 et bien d\u2019autres"))), /*#__PURE__*/React.createElement(Narration, {
      lines: ['« Nous venons de signer avec Swan.', 'Et surtout : Swan accepte de rembourser', 'les consultations et prescriptions faites sur TIBOK.', 'ER Group, Taylor Smith, Alteo, Bank One attendaient ce feu vert.', 'Et nous attendons les réponses de la SICOM, du NIC,', 'de MedSchem — et de bien d’autres encore. »'],
      x: 960,
      width: 1560,
      align: "center",
      y: 912,
      size: 29,
      italic: true,
      accent: "#DDF2E8",
      dim: "rgba(200,230,216,0.2)",
      lead: 1.6,
      tail: 1.1
    }))
  }, /* ---------- ACT 5 ---------- */
  {
    dur: 30,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Acte 5",
      title: "Vision r\xE9gionale africaine"
    }), /*#__PURE__*/React.createElement(AfricaArc, null), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 602,
        left: 0,
        right: 0,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 700,
        fontSize: 56,
        letterSpacing: '-0.025em',
        color: '#fff'
      }
    }, "Bien plus qu\u2019un march\xE9."), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 600,
        fontSize: 30,
        color: C.blue,
        marginTop: 12
      }
    }, "Une infrastructure de sant\xE9 souveraine pour l\u2019Afrique.")), /*#__PURE__*/React.createElement(Narration, {
      lines: ['« Maurice est le proof-of-concept.', 'Ça marche ici — donc ça marche partout en Afrique.', 'Le même problème, partout : pas assez de médecins.', 'On n’a pas encore lancé, et je ne vous parlerai pas de chiffres.', 'Parce que c’est bien plus que ça : une infrastructure', 'de santé souveraine, pour tout un continent. »'],
      x: 960,
      width: 1560,
      align: "center",
      y: 912,
      size: 29,
      italic: true,
      accent: "#EDEFF4",
      dim: "rgba(206,219,240,0.2)",
      lead: 1.6,
      tail: 1.1
    }))
  }, {
    dur: 24,
    hue: 'gold',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Acte 5",
      title: "Soft power & rayonnement",
      color: C.gold
    }), /*#__PURE__*/React.createElement(Statement, {
      align: "center",
      y: 250,
      size: 64,
      weight: 700,
      lines: ['Maurice, hub health-tech africain.', 'Pas touristique — technologique.'],
      accentIdx: [1],
      accentColor: C.gold
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 470,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: 24
      }
    }, [['Soft power', 'Leader de l’innovation africaine'], ['Producteur IA', 'Algorithmes locaux = propriété africaine'], ['Emplois & talents', 'Tech à haute valeur — le talent reste à Maurice']].map((p, i) => /*#__PURE__*/React.createElement(MiniPanel, {
      key: i,
      p: p,
      i: i,
      color: C.gold
    }))), /*#__PURE__*/React.createElement(Narration, {
      lines: ['« Ce n’est pas juste un produit de santé.', 'C’est une stratégie pour que Maurice soit visible —', 'comme leader technologique. La preuve qu’investir', 'en ses gens, ça paie. »'],
      x: 960,
      width: 1500,
      align: "center",
      y: 840,
      size: 34,
      italic: true,
      accent: "#F2E6CF",
      dim: "rgba(224,210,180,0.22)",
      lead: 1.6,
      tail: 1.2
    }))
  }, /* ---------- ACT 6 ---------- */
  {
    dur: 28,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Acte 6",
      title: "La preuve de concept \u2014 Flacq"
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 200,
      size: 62,
      weight: 700,
      lines: ['Si ça marche à Flacq,', 'ça marche au national.'],
      accentIdx: [1],
      accentColor: C.blue
    }), /*#__PURE__*/React.createElement(PhotoTile, {
      src: "assets/people/flacq-centre.jpg",
      x: 1150,
      y: 150,
      w: 620,
      h: 250,
      at: 0.4,
      color: C.blue,
      objPos: "50% 58%",
      label: "Flacq \xB7 centre de sant\xE9 public",
      sub: "4 AHC + 24 CHC + 1 h\xF4pital r\xE9gional \u2014 z\xE9ro capex"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 430,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: 24
      }
    }, [['01', 'Représentativité', '170 000 habitants · 13,5 % de Maurice · mix rural/urbain'], ['02', 'Infrastructure existante', '4 AHC + 24 CHC + 1 hôpital régional · zéro capex'], ['03', 'Gestion simple', 'Ni Port-Louis, ni Rodrigues · pilotable']].map((p, i) => /*#__PURE__*/React.createElement(NumPanel, {
      key: i,
      p: p,
      i: i
    }))), /*#__PURE__*/React.createElement(Narration, {
      lines: ['« On fait la preuve de concept à Flacq.', '170 000 habitants, représentatifs.', 'L’infrastructure existe déjà. Zéro capex.', 'Si ça marche à Flacq, ça marche au national —', 'c’est exactement ce qu’on veut prouver. »'],
      x: 960,
      width: 1500,
      align: "center",
      y: 840,
      size: 34,
      italic: true,
      accent: "#EDEFF4",
      dim: "rgba(206,219,240,0.22)",
      lead: 1.6,
      tail: 1.2
    }))
  }, {
    dur: 28,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Acte 6",
      title: "P\xE9rim\xE8tre & budget \u2014 pilote 6 mois"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 198,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: 80,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Stat, {
      to: 5,
      prefix: "Rs ",
      suffix: "M",
      size: 120,
      color: "#fff",
      label: "Budget demand\xE9",
      align: "center"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 52,
        color: C.dim
      }
    }, "\u2192"), /*#__PURE__*/React.createElement(Stat, {
      to: 500000,
      prefix: "",
      suffix: "+",
      size: 120,
      color: C.blue,
      label: "Consultations couvertes",
      align: "center",
      at: 0.5
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 410,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      at: 0.5,
      color: C.gold
    }, "Pilote 6 mois"), /*#__PURE__*/React.createElement(Chip, {
      at: 0.62,
      color: C.blue
    }, "Zone de Flacq \u2014 170 000 habitants"), /*#__PURE__*/React.createElement(Chip, {
      at: 0.74,
      color: C.teal
    }, "Mix rural & ville \u2014 repr\xE9sentatif")), /*#__PURE__*/React.createElement(PhotoTile, {
      src: "assets/people/patient-app.jpg",
      x: 1228,
      y: 538,
      w: 562,
      h: 296,
      at: 0.7,
      color: C.blue,
      objPos: "50% 42%",
      label: "Dossier patient \xB7 application",
      sub: "Sur le mobile du patient, aux couleurs de l\u2019\xC9tat"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 546,
        left: 120,
        width: 1040,
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, [['Besoins minimes', 'Une connexion internet · un ordinateur connecté', C.teal], ['Dossier patient', 'Accessible via l’application, sur le mobile du patient', C.blue], ['Aux couleurs de l’État', 'TIBOK brandé aux couleurs du gouvernement', C.gold]].map((p, i) => /*#__PURE__*/React.createElement(Card3D, {
      key: i,
      at: 0.5 + i * 0.15,
      i: i,
      accent: p[2],
      accentSide: "left",
      pad: "16px 26px",
      radius: 14
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 700,
        fontSize: 24,
        color: p[2]
      }
    }, p[0]), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 400,
        fontSize: 18,
        color: C.dim,
        marginTop: 6,
        lineHeight: 1.35
      }
    }, p[1])))), /*#__PURE__*/React.createElement(Narration, {
      lines: ['« Le pilote, c’est 6 mois — sur toute la zone de Flacq.', '170 000 habitants : rural et ville, un vrai mix représentatif.', 'Cinq millions de roupies — pour plus de 500 000 consultations.', 'Une connexion internet, un ordinateur connecté.', 'Le patient accède à son dossier via l’application.', 'Et TIBOK est brandé aux couleurs du gouvernement. »'],
      x: 960,
      width: 1560,
      align: "center",
      y: 905,
      size: 29,
      italic: true,
      accent: "#EDEFF4",
      dim: "rgba(206,219,240,0.2)",
      lead: 1.6,
      tail: 1.1
    }))
  }, {
    dur: 30,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Acte 6",
      title: "Les gains potentiels"
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 150,
      size: 48,
      weight: 700,
      lines: ['Pas encore de recul.', 'Mais des gains potentiels clairs.'],
      accentIdx: [1],
      accentColor: C.blue
    }), /*#__PURE__*/React.createElement(Benefits, null), /*#__PURE__*/React.createElement(Narration, {
      lines: ['« On vient de démarrer — pas encore de chiffres.', 'Mais les gains potentiels sont clairs : avec la medical', 'intelligence de TIBOK, le médecin est augmenté,', 'chaque prescription sourcée et justifiée.', 'Fin de la redondance des examens, moins d’hospitalisations', 'inutiles, des flux maîtrisés — en partie à distance.', 'Le recueil structuré avec les auxiliaires de santé —', 'du temps médecin gagné. Plus rapide, plus efficace. »'],
      x: 960,
      width: 1560,
      align: "center",
      y: 912,
      size: 28,
      italic: true,
      accent: "#EDEFF4",
      dim: "rgba(206,219,240,0.2)",
      lead: 1.6,
      tail: 1.0
    }))
  }, {
    dur: 24,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Acte 6",
      title: "Financement & gouvernance"
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 210,
      size: 54,
      weight: 700,
      lines: ['Un grant, pas un appel d’offres.', 'Quatre semaines, pas douze mois.'],
      accentIdx: [1],
      accentColor: C.blue
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 440,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: 18,
        flexWrap: 'wrap',
        maxWidth: 1400,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      at: 0.3,
      color: C.blue
    }, "MRIC \xB7 Rs 3M"), /*#__PURE__*/React.createElement(Chip, {
      at: 0.5,
      color: C.blue
    }, "MITCI \xB7 Rs 2M"), /*#__PURE__*/React.createElement(Chip, {
      at: 0.7,
      color: C.teal
    }, "Sant\xE9 \xB7 h\xE9berge & mesure"), /*#__PURE__*/React.createElement(Chip, {
      at: 0.9,
      color: C.gold
    }, "MRIC \xB7 audit & go/no-go M3")), /*#__PURE__*/React.createElement(Narration, {
      lines: ['« Un appel d’offres, c’est 12 mois de bureaucratie.', 'Un grant, c’est quatre semaines.', 'Chacun a un rôle. Dashboard public. Transparence totale.', 'Et un go/no-go à mois 3. »'],
      x: 960,
      width: 1500,
      align: "center",
      y: 780,
      size: 34,
      italic: true,
      accent: "#EDEFF4",
      dim: "rgba(206,219,240,0.22)",
      lead: 1.4,
      tail: 1.2
    }))
  }, {
    dur: 24,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Acte 6",
      title: "M\xE9triques de succ\xE8s"
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 210,
      size: 54,
      weight: 700,
      lines: ['Si on atteint les objectifs, on scale.', 'Sinon, on pivote. Pas de drame.'],
      accentIdx: [1],
      accentColor: C.blue
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 440,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: 22
      }
    }, [['Adoption', '>70 % centres actifs · >5 000 cs/mois'], ['Clinique', 'Urgences −10 % · e-prescription >40 %'], ['Satisfaction', 'NPS >65 · uptime >99,5 %'], ['Coût', '<Rs 10 / consultation']].map((p, i) => /*#__PURE__*/React.createElement(MiniPanel, {
      key: i,
      p: p,
      i: i,
      color: C.blue
    }))), /*#__PURE__*/React.createElement(Narration, {
      lines: ['« Les métriques sont claires et mesurables.', 'Si on les atteint, on scale au national.', 'Sinon, on pivote ou on arrête. Pas de drame.', 'Mais Swan le prouve déjà. »'],
      x: 960,
      width: 1500,
      align: "center",
      y: 780,
      size: 34,
      italic: true,
      accent: "#EDEFF4",
      dim: "rgba(206,219,240,0.22)",
      lead: 1.4,
      tail: 1.2
    }))
  }, /* ---------- ACT 7 ---------- */
  {
    dur: 24,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Acte 6",
      title: "S\xE9curit\xE9 & conformit\xE9"
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 188,
      size: 56,
      weight: 700,
      lines: ['Une infrastructure', 'de confiance.'],
      accentIdx: [1],
      accentColor: C.green
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 430,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: 18,
        flexWrap: 'wrap',
        maxWidth: 1440,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Chip, {
      at: 0.4,
      color: C.green
    }, "Conforme GDPR"), /*#__PURE__*/React.createElement(Chip, {
      at: 0.54,
      color: C.green
    }, "Certifi\xE9 SOC 2"), /*#__PURE__*/React.createElement(Chip, {
      at: 0.68,
      color: C.blue
    }, "H\xE9bergement AWS"), /*#__PURE__*/React.createElement(Chip, {
      at: 0.82,
      color: C.blue
    }, "Supabase"), /*#__PURE__*/React.createElement(Chip, {
      at: 0.96,
      color: C.teal
    }, "Chiffrement de bout en bout"), /*#__PURE__*/React.createElement(Chip, {
      at: 1.1,
      color: C.gold
    }, "Donn\xE9es 100 % propri\xE9t\xE9 de l\u2019\xC9tat")), /*#__PURE__*/React.createElement(Narration, {
      lines: ['« La sécurité n’est pas une option.', 'À ce jour, notre système est conforme GDPR,', 'certifié SOC 2, hébergé sur AWS, avec Supabase.', 'Chiffré, traçable. Et les données restent', 'la propriété de l’État — souveraines. »'],
      x: 960,
      width: 1540,
      align: "center",
      y: 820,
      size: 32,
      italic: true,
      accent: "#EDEFF4",
      dim: "rgba(206,219,240,0.2)",
      lead: 1.6,
      tail: 1.2
    }))
  }, {
    dur: 32,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ActTag, {
      act: "Acte 7",
      title: "L\u2019ask cristallin"
    }), /*#__PURE__*/React.createElement(Statement, {
      x: 120,
      y: 150,
      size: 52,
      weight: 700,
      lines: ['Deux demandes. Deux partenaires.', 'Zéro ambiguïté.'],
      accentIdx: [1],
      accentColor: C.blue
    }), /*#__PURE__*/React.createElement(AskCards, null), /*#__PURE__*/React.createElement(Narration, {
      lines: ['« Deux demandes claires, mesurables, avec timeline.', 'MITCI approuve le grant. Santé héberge et mesure.', 'Zéro dépendance externe —', 'tout repose sur une équipe mauricienne. »'],
      x: 960,
      width: 1500,
      align: "center",
      y: 870,
      size: 32,
      italic: true,
      accent: "#EDEFF4",
      dim: "rgba(206,219,240,0.2)",
      lead: 1.6,
      tail: 1.2
    }))
  }, /* ---------- ACT 8 ---------- */
  {
    dur: 28,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Statement, {
      align: "center",
      y: 250,
      size: 84,
      weight: 700,
      lines: ['La technologie existe.', 'L’équipe existe.', 'La vision existe.'],
      accentIdx: [2],
      accentColor: C.blue
    }), /*#__PURE__*/React.createElement(Narration, {
      lines: ['« Ce qui manque : la permission de l’État.', 'Et cinq millions de roupies pour 6 mois.', 'Allez-vous permettre à une équipe mauricienne', 'de montrer au monde comment on fabrique', 'une infrastructure de santé souveraine pour l’Afrique ? »'],
      x: 960,
      width: 1560,
      align: "center",
      y: 730,
      size: 38,
      italic: true,
      accent: "#CFE0FA",
      dim: "rgba(206,219,240,0.22)",
      lead: 1.6,
      tail: 1.4
    }))
  }, {
    dur: 30,
    hue: 'blue',
    node: /*#__PURE__*/React.createElement(FinalScene, null)
  }];

  /* ===== components for acts 3–8 ===== */
  function DDSOrg() {
    const {
      localTime
    } = useScene();
    const root = ev(localTime, 0.2, 0.6, Easing.easeOutCubic);
    const products = [['tibok', 'Health OS · présentiel + distance'], ['lexora', 'ERP IA-native · compta & paie'], ['axon', 'Agents vocaux · service client']];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: '50%',
        top: 178,
        transform: `translate(-50%,0) scale(${0.92 + 0.08 * root})`,
        opacity: root,
        background: 'rgba(59,131,232,0.12)',
        border: '1px solid rgba(59,131,232,0.4)',
        borderRadius: 16,
        padding: '16px 36px',
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      name: "dds",
      w: 300,
      intro: false,
      style: {
        position: 'static'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 100,
        top: 348,
        width: 1090,
        opacity: ev(localTime, 0.55, 0.6)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 700,
        fontSize: 18,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: C.blue,
        marginBottom: 18
      }
    }, "Produits IA"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 22
      }
    }, products.map((p, i) => /*#__PURE__*/React.createElement(Card3D, {
      key: i,
      at: 0.7 + i * 0.16,
      i: i,
      minHeight: 206,
      pad: "28px 22px",
      radius: 16,
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 52,
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      name: p[0],
      w: p[0] === 'axon' ? 170 : p[0] === 'tibok' ? 150 : 210,
      intro: false,
      style: {
        position: 'static'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 400,
        fontSize: 18,
        color: C.dim,
        textAlign: 'center',
        lineHeight: 1.35
      }
    }, p[1]))))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 1240,
        top: 348,
        width: 580,
        opacity: ev(localTime, 1.05, 0.6)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 700,
        fontSize: 18,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: C.gold,
        marginBottom: 18
      }
    }, "Activit\xE9s connexes"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Card3D, {
      at: 1.1,
      i: 1,
      minHeight: 96,
      pad: "16px 24px",
      radius: 16,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      name: "obesity",
      w: 200,
      intro: false,
      style: {
        position: 'static'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 400,
        fontSize: 16,
        color: C.dim,
        lineHeight: 1.3
      }
    }, "Chirurgie bariatrique \xB7 NHS S2")), /*#__PURE__*/React.createElement(Card3D, {
      at: 1.25,
      i: 3,
      accent: C.gold,
      minHeight: 96,
      pad: "18px 24px",
      radius: 16,
      style: {
        background: 'rgba(224,169,59,0.08)',
        border: '1px solid rgba(224,169,59,0.3)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 800,
        fontSize: 24,
        color: C.gold
      }
    }, "CVMI \xB7 Cap-Vert"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 400,
        fontSize: 16,
        color: C.dim,
        marginTop: 6,
        lineHeight: 1.3
      }
    }, "Tourisme m\xE9dical \u2014 pr\xE9vention des maladies chroniques + tourisme")))));
  }
  function Waveform() {
    const {
      localTime
    } = useScene();
    const bars = 46;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 400,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        height: 120
      }
    }, Array.from({
      length: bars
    }).map((_, i) => {
      const amp = ev(localTime, 0.3, 0.8) * (0.4 + 0.6 * Math.abs(Math.sin(i * 0.5)));
      const h = 14 + Math.abs(Math.sin(localTime * 4 + i * 0.55)) * amp * 90;
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          width: 7,
          height: h,
          borderRadius: 4,
          background: i % 3 == 0 ? C.teal : 'rgba(39,176,190,0.5)'
        }
      });
    }));
  }
  function ModuleNames() {
    const {
      localTime
    } = useScene();
    const m = ['AI Doctor', 'Suivi WhatsApp', 'Cabinet présentiel', 'Intégration labo', 'Pharmacie'];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 560,
        left: 1080,
        right: 120,
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, m.map((x, i) => {
      const p = ev(localTime, 0.5 + i * 0.18, 0.5, Easing.easeOutBack);
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          opacity: p,
          transform: `translateX(${(1 - p) * 24}px)`
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 34,
          height: 34,
          borderRadius: 8,
          background: 'rgba(59,131,232,0.18)',
          border: '1px solid rgba(59,131,232,0.5)',
          color: C.blue,
          display: 'grid',
          placeItems: 'center',
          fontFamily: FD,
          fontWeight: 700,
          fontSize: 16
        }
      }, i + 1), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: FD,
          fontWeight: 600,
          fontSize: 28,
          color: '#fff'
        }
      }, x));
    }));
  }
  function Ratios() {
    const {
      localTime
    } = useScene();
    const r = [['Maurice', '≈ 1 : 500', 500, C.green], ['Sénégal', '1 : 7 000', 7000, C.blue], ['Mali', '1 : 15 000', 15000, C.gold], ['Sahel', '1 : 25 000', 25000, C.coral]];
    const maxR = 25000;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 400,
        left: 300,
        right: 300,
        display: 'flex',
        flexDirection: 'column',
        gap: 22
      }
    }, r.map((x, i) => {
      const p = ev(localTime, 0.4 + i * 0.25, 0.8, Easing.easeOutCubic);
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 24
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 140,
          fontFamily: FD,
          fontWeight: 600,
          fontSize: 24,
          color: '#fff',
          textAlign: 'right'
        }
      }, x[0]), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          height: 30,
          background: 'rgba(255,255,255,0.06)',
          borderRadius: 15,
          overflow: 'hidden'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          height: '100%',
          width: `${x[2] / maxR * 100 * p}%`,
          background: x[3],
          borderRadius: 15,
          boxShadow: `0 0 24px ${x[3]}55`
        }
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          width: 150,
          fontFamily: FD,
          fontWeight: 700,
          fontSize: 24,
          color: x[3]
        }
      }, x[1]));
    }));
  }
  function MiniPanel({
    p,
    i,
    color
  }) {
    return /*#__PURE__*/React.createElement(Card3D, {
      w: 400,
      at: 0.4 + i * 0.18,
      i: i,
      minHeight: 180,
      pad: "26px 28px",
      radius: 16
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 700,
        fontSize: 28,
        color: color || '#fff'
      }
    }, p[0]), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 400,
        fontSize: 21,
        color: C.dim,
        marginTop: 14,
        lineHeight: 1.4
      }
    }, p[1]));
  }
  function NumPanel({
    p,
    i
  }) {
    return /*#__PURE__*/React.createElement(Card3D, {
      w: 430,
      at: 0.4 + i * 0.2,
      i: i,
      accent: C.blue,
      minHeight: 210,
      pad: "28px 30px",
      radius: 16
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 700,
        fontSize: 40,
        color: C.blue
      }
    }, p[0]), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 700,
        fontSize: 26,
        color: '#fff',
        marginTop: 12
      }
    }, p[1]), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 400,
        fontSize: 19,
        color: C.dim,
        marginTop: 10,
        lineHeight: 1.4
      }
    }, p[2]));
  }
  function AskCards() {
    const {
      localTime
    } = useScene();
    const a = [['MITCI', 'Sponsor & financement', 'Approuver le grant de Rs 5M pour le pilote Flacq', ['Risque nul, réversible', 'Un grant — 4 semaines, pas 12 mois', 'Leader health-tech africain'], C.blue], ['Santé', 'Hébergeur & terrain', 'Accepter TIBOK dans le pilote Flacq', ['4 AHC + 24 CHC · ~500 soignants', 'KPI baseline puis post-pilote', 'Données 100 % propriété de l’État'], C.teal]];
    const W = 520,
      gap = 30,
      total = a.length * W + (a.length - 1) * gap,
      sx = (1920 - total) / 2;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0
      }
    }, a.map((c, i) => {
      const x = sx + i * (W + gap);
      return /*#__PURE__*/React.createElement(Card3D, {
        key: i,
        w: W,
        at: 0.5 + i * 0.3,
        i: i,
        accent: c[4],
        pad: "28px 32px",
        style: {
          position: 'absolute',
          left: x,
          top: 330
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: FD,
          fontWeight: 800,
          fontSize: 38,
          color: '#fff'
        }
      }, c[0]), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: FD,
          fontWeight: 600,
          fontSize: 16,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: C.dim,
          marginTop: 4
        }
      }, c[1]), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: FD,
          fontWeight: 500,
          fontSize: 22,
          color: C.txt,
          marginTop: 18,
          lineHeight: 1.35
        }
      }, c[2]), /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 18,
          display: 'flex',
          flexDirection: 'column',
          gap: 11
        }
      }, c[3].map((li, j) => /*#__PURE__*/React.createElement("div", {
        key: j,
        style: {
          display: 'flex',
          gap: 12,
          fontFamily: FD,
          fontSize: 18,
          color: C.dim,
          lineHeight: 1.3
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 7,
          height: 7,
          borderRadius: 4,
          background: c[4],
          marginTop: 9,
          flex: 'none'
        }
      }), li))));
    }));
  }
  function FinalScene() {
    const {
      localTime
    } = useScene();
    const w = ev(localTime, 0.3, 0.8, Easing.easeOutExpo);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 120,
        top: 300
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/logos/tibok.png",
      alt: "TIBOK",
      style: {
        height: 120,
        opacity: ev(localTime, 0.2, 0.7),
        transform: `translateY(${(1 - ev(localTime, 0.2, 0.7)) * 20}px)`
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        height: 8,
        width: 260 * w,
        borderRadius: 3,
        overflow: 'hidden',
        margin: '28px 0 28px'
      }
    }, /*#__PURE__*/React.createElement("i", {
      style: {
        flex: 1,
        background: '#EA2839'
      }
    }), /*#__PURE__*/React.createElement("i", {
      style: {
        flex: 1,
        background: '#1A206D'
      }
    }), /*#__PURE__*/React.createElement("i", {
      style: {
        flex: 1,
        background: '#F4C300'
      }
    }), /*#__PURE__*/React.createElement("i", {
      style: {
        flex: 1,
        background: '#00A551'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 500,
        fontSize: 34,
        color: '#D6E0F0',
        lineHeight: 1.25,
        opacity: ev(localTime, 0.7, 0.7),
        maxWidth: '18ch'
      }
    }, "Construit par Maurice.", /*#__PURE__*/React.createElement("br", null), "Pour Maurice. Pour l\u2019Afrique.")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        right: 120,
        top: 300,
        width: 680,
        opacity: ev(localTime, 1.0, 0.7),
        transform: `translateY(${(1 - ev(localTime, 1.0, 0.7)) * 18}px)`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 12,
        justifyContent: 'flex-start'
      }
    }, ['Système prouvé — Swan', 'Équipe 100 % mauricienne', 'Infrastructure souveraine — MRIC'].map((c, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        padding: '11px 20px',
        border: '1px solid rgba(255,255,255,0.16)',
        background: 'rgba(255,255,255,0.05)',
        borderRadius: 999,
        fontFamily: FD,
        fontWeight: 500,
        fontSize: 20,
        color: C.txt,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        borderRadius: 10,
        background: C.green,
        color: C.navy,
        display: 'grid',
        placeItems: 'center',
        fontSize: 12,
        fontWeight: 800
      }
    }, "\u2713"), c))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 34,
        paddingTop: 26,
        borderTop: '1px solid rgba(255,255,255,0.14)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 700,
        fontSize: 26,
        color: '#fff'
      }
    }, "Dr St\xE9phane Bach"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 400,
        fontSize: 20,
        color: C.dim,
        marginTop: 4
      }
    }, "Fondateur & CEO, Digital Data Solutions Ltd"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 500,
        fontSize: 20,
        color: C.blue,
        marginTop: 4
      }
    }, "stephane.bach@digital-data-solutions.net")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24,
        fontFamily: FD,
        fontWeight: 400,
        fontSize: 19,
        color: '#D6E0F0',
        lineHeight: 1.6
      }
    }, "M\xE9gane \xB7 Stephano \xB7 Adi \xB7 Rain \xB7 Baydon \xB7 Suzelle \xB7 Summer")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 120,
        right: 120,
        bottom: 90,
        opacity: ev(localTime, 1.6, 0.8)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FS,
        fontStyle: 'italic',
        fontWeight: 400,
        fontSize: 30,
        color: '#9DB0CE',
        textAlign: 'center',
        lineHeight: 1.4
      }
    }, "\xAB On ne peut pas cr\xE9er 50 000 m\xE9decins en 5 ans. Mais on peut augmenter nos auxiliaires de sant\xE9 avec l\u2019IA. \xBB")));
  }
  function Benefits() {
    const {
      localTime
    } = useScene();
    const b = [['Médecin augmenté', 'Sourcé pour chaque prescription', C.blue], ['Zéro redondance', 'Fini les examens en double', C.teal], ['Prescriptions justifiées', 'Adéquates, traçables', C.teal], ['Flux maîtrisés', 'Avec une partie à distance', C.blue], ['Moins d’hospitalisations', 'Les cas évitables, évités', C.gold], ['Temps médecin gagné', 'Recueil structuré avec les auxiliaires — plus rapide, plus efficace', C.green]];
    const gap = 20,
      W = 460;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 336,
        left: 0,
        right: 0,
        display: 'flex',
        flexWrap: 'wrap',
        gap: gap,
        justifyContent: 'center',
        maxWidth: 1480,
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    }, b.map((m, i) => /*#__PURE__*/React.createElement(Card3D, {
      key: i,
      w: W,
      at: 0.3 + i * 0.12,
      i: i,
      accent: m[2],
      accentSide: "left",
      minHeight: 148,
      pad: "24px 28px",
      radius: 16,
      style: {
        display: 'flex',
        gap: 18,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: 15,
        background: m[2],
        color: C.navy,
        display: 'grid',
        placeItems: 'center',
        fontSize: 15,
        fontWeight: 800,
        flex: 'none',
        marginTop: 2
      }
    }, "\u2713"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 700,
        fontSize: 25,
        color: '#fff'
      }
    }, m[0]), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 400,
        fontSize: 18,
        color: C.dim,
        marginTop: 7,
        lineHeight: 1.35
      }
    }, m[1])))));
  }
  function TibokHub() {
    const {
      localTime
    } = useScene();
    const nodes = [['Distanciel', C.blue], ['Présentiel', C.blue], ['Pharmacie', C.gold], ['Labo', C.teal], ['Radio', C.blue], ['Urgence', C.coral], ['Soins primaires', C.teal]];
    const cx = 960,
      cy = 560,
      rx = 600,
      ry = 178;
    const pts = nodes.map((n, i) => {
      const ang = (-90 + i * (360 / nodes.length)) * Math.PI / 180;
      return {
        n: n[0],
        c: n[1],
        x: cx + Math.cos(ang) * rx,
        y: cy + Math.sin(ang) * ry
      };
    });
    const pulse = 0.5 + 0.5 * Math.sin(localTime * 1.6);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0
      }
    }, /*#__PURE__*/React.createElement(FlowSvg, null, pts.map((pt, i) => /*#__PURE__*/React.createElement(FlowLink, {
      key: i,
      x1: cx,
      y1: cy,
      x2: pt.x,
      y2: pt.y,
      color: pt.c,
      at: 0.6 + i * 0.1
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: cx,
        top: cy,
        transform: 'translate(-50%,-50%)',
        width: 250,
        height: 250,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${C.blue}3a, ${C.blue}08)`,
        border: `2px solid ${C.blue}88`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 9,
        opacity: ev(localTime, 0.2, 0.6),
        boxShadow: `0 0 ${70 + 34 * pulse}px ${C.blue}55, inset 0 0 40px ${C.blue}22`
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      name: "tibok",
      w: 150,
      intro: false,
      style: {
        position: 'static'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 700,
        fontSize: 15,
        color: '#fff'
      }
    }, "Intelligence m\xE9dicale"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 700,
        fontSize: 15,
        color: C.teal
      }
    }, "60 000 r\xE9f\xE9rences")), pts.map((pt, i) => /*#__PURE__*/React.createElement(NodeChip, {
      key: i,
      label: pt.n,
      icon: "\u25C6",
      x: pt.x,
      y: pt.y,
      color: pt.c,
      at: 0.9 + i * 0.11
    })));
  }
  function DimCard({
    p,
    i
  }) {
    return /*#__PURE__*/React.createElement(Card3D, {
      w: 470,
      at: 0.4 + i * 0.2,
      i: i,
      accent: p[2],
      minHeight: 236,
      pad: "30px 32px"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 800,
        fontSize: 29,
        color: p[2]
      }
    }, p[0]), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FD,
        fontWeight: 400,
        fontSize: 22,
        color: C.dim,
        marginTop: 16,
        lineHeight: 1.42
      }
    }, p[1]));
  }
  window.SCENES_B = SCENES_B;
  window.DDSOrg = DDSOrg;
  window.Waveform = Waveform;
  window.ModuleNames = ModuleNames;
  window.Ratios = Ratios;
  window.TibokHub = TibokHub;
  window.DimCard = DimCard;
  window.MiniPanel = MiniPanel;
  window.NumPanel = NumPanel;
  window.AskCards = AskCards;
  window.FinalScene = FinalScene;
})();
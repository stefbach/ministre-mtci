# TIBOK — Film stratégique · Pilote Flacq

Film animé cinématique (≈ 16–17 min) présentant le projet **TIBOK** et l'écosystème
**Digital Data Solutions** au Ministry of Information Technology, Communication and
Innovation (MITCI). Le script défile à l'écran (téléprompteur) pendant que les visuels
s'animent : photos en Ken Burns, chiffres animés, diagrammes qui se construisent.

C'est un site statique : React 18 + Babel standalone chargés depuis un CDN, sans étape
de build.

## Structure

| Fichier | Rôle |
| --- | --- |
| `index.html` / `Film TIBOK - Pilote Flacq.html` | Page d'entrée — monte le film et le moteur de timeline |
| `animations.jsx` | Moteur d'animation réutilisable (`Stage`, `Sprite`, timeline, scrubber, easing) |
| `film-lib.jsx` | Primitives cinématiques (`Scene`, `FX`, `Narration`, `Photo`, `Stat`, `Logo`, `Hud`…) |
| `film-content.jsx` | Actes 1–2 → `window.SCENES_A` |
| `film-content2.jsx` | Actes 3–8 → `window.SCENES_B` |
| `assets/team/` | Photos détourées des 8 collaborateurs |
| `assets/logos/` | Logos (TIBOK, Lexora, Axon, DDS, Obesity Care Clinic, La Turbine, MRIC, armoiries Maurice) |

Les fichiers `.jsx` sont récupérés par Babel via `fetch`, ils doivent donc être servis
en HTTP (pas en `file://`).

## Lancer en local

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000/
```

## Commandes du lecteur

- **Espace** : lecture / pause
- **← / →** : naviguer
- **0** : revenir au début
- Barre de progression cliquable en bas

# Music Force: Rhythm Shooter

Music Force is a neon-soaked vertical scrolling shoot-'em-up where every hit drops a musical note. Pilot unlockable instruments, partner with rhythm companions, and build harmonic barrages while dodging bullet patterns across adaptive stages.

## Features
- **20 playable instruments** with bespoke shot patterns, supers, colors, and sample-ready sound design.
- **Rhythm-forward combat** featuring auto-fire scale notes, ricochets, beams, and resonance-powered companion bursts.
- **Multiple modes**: Campaign, Boss Raid, Daily Mission with rotating modifiers, and asynchronous PvP score chases.
- **Progression system** using coins, diamonds, and sheet music to unlock loadouts, with persistent storage in the browser.
- **Dynamic encounters** via tuned wave cadence, boss theming, adaptive combo multipliers, and music-infused power-ups.
- **Onboarding tutorial** that teaches movement, dash, Super Solo timing, and resonance management on first launch.

## Controls
- **Drag / mouse move**: steer your instrument.
- **Auto-fire**: enabled constantly; hits cycle through the C-major scale.
- **Horizontal swipe**: short dash with invulnerability frames.
- **Double tap / Space**: trigger Super Solo once the Skill bar is full.
- **`R` key**: manually fire companion resonance burst (optional shortcut).

## Audio Samples
The game supports sample playback per instrument. Place short, percussive clips recorded near middle C inside `assets/audio/` with the naming convention:

```
assets/audio/<instrument-id>_hit.wav
```

Example: `assets/audio/guitar_hit.wav`. If a sample is missing, Music Force falls back to synthesized waveforms. See `assets/audio/README.md` for more guidance.

## Getting Started
1. Install any lightweight static server (examples below) or use one already available on your machine.
2. From the project root (`music-force/`), run one of:
   - `python -m http.server 3000`
   - `npx serve`
3. Open your browser to the served address (e.g., <http://localhost:3000>). Interact with the page once to unlock audio playback.
4. Choose a mode, instrument, and optional companion. If the loadout is locked, use earned currency to unlock it.
5. Complete the tutorial overlay if prompted, then dive into a stage.

## Playtesting Tips
- **Balance**: each mode applies tuned spawn cadence, enemy health, and reward bonuses. Use Campaign for vanilla pacing, Daily for tighter waves, and Raid for boss-centric runs.
- **Rewards**: cleared runs award bonus currency scaled by mode. Failures still return a portion of campaign earnings to encourage retry.
- **Power-ups**: chord, melody, reverb, echo, and bass drop cores now have clearer cadence—log observations about their drop rates and adjust the balance constants in `script.js` if needed.

## Testing & Development
- Quick syntax check: `node --check script.js`.
- Run in the browser for full feature validation (audio, pointer gestures, localStorage). Desktop Chrome/Firefox + a mobile simulator (or physical device) cover most input paths.
- When tweaking balance, inspect `MODE_BALANCE` and related enemy/boss helpers in `script.js`.
- Tutorial progress persists via `localStorage`. To re-run, clear site data in developer tools.

## Project Structure
- `index.html` – UI shell, overlays, canvas.
- `style.css` – neon-retro presentation, HUD, tutorial styling.
- `script.js` – gameplay systems, audio manager, progression, tutorial flow.
- `assets/audio/` – drop-in location for optional instrument samples.

Enjoy weaving harmonies while dodging the beat!

const NOTES = [
  { name: "C4", freq: 261.63 },
  { name: "D4", freq: 293.66 },
  { name: "E4", freq: 329.63 },
  { name: "F4", freq: 349.23 },
  { name: "G4", freq: 392.0 },
  { name: "A4", freq: 440.0 },
  { name: "B4", freq: 493.88 },
  { name: "C5", freq: 523.25 }
];

const INSTRUMENTS = [
  {
    id: "guitar",
    name: "Firestorm Guitar",
    description: "Spread riff rock riffles with crunchy overdrive.",
    color: "#ff6f91",
    bulletColor: "rgba(255,111,145,0.75)",
    trailColor: "rgba(255,111,145,0.25)",
    fireInterval: 160,
    projectileSpeed: 720,
    pattern: "spread",
    super: "Overdrive Solo"
  },
  {
    id: "piano",
    name: "Aurora Piano",
    description: "Twin arpeggio beams with sustained harmonics.",
    color: "#9af7ff",
    bulletColor: "rgba(154,247,255,0.85)",
    trailColor: "rgba(154,247,255,0.3)",
    fireInterval: 180,
    projectileSpeed: 660,
    pattern: "twin",
    super: "Grand Crescendo"
  },
  {
    id: "drum",
    name: "Pulse Drum Machine",
    description: "EDM bursts with punchy kick pulses.",
    color: "#ffce5c",
    bulletColor: "rgba(255,206,92,0.85)",
    trailColor: "rgba(255,206,92,0.25)",
    fireInterval: 120,
    projectileSpeed: 820,
    pattern: "burst",
    super: "Bass Drop"
  },
  {
    id: "turntable",
    name: "Flux Turntable",
    description: "Scratch sprays that bend trajectories mid-air.",
    color: "#d775ff",
    bulletColor: "rgba(215,117,255,0.85)",
    trailColor: "rgba(215,117,255,0.25)",
    fireInterval: 200,
    projectileSpeed: 700,
    pattern: "arc",
    super: "Ultimate Drop"
  },
  {
    id: "violin",
    name: "Nova Violin",
    description: "Glissando lances that pierce lines of foes.",
    color: "#ff9ad6",
    bulletColor: "rgba(255,154,214,0.8)",
    trailColor: "rgba(255,154,214,0.24)",
    fireInterval: 190,
    projectileSpeed: 760,
    pattern: "pierce",
    super: "Stellar Vibrato"
  },
  {
    id: "sax",
    name: "Breeze Saxophone",
    description: "Cone swing shots with jazzy flair.",
    color: "#ffb86c",
    bulletColor: "rgba(255,184,108,0.85)",
    trailColor: "rgba(255,184,108,0.24)",
    fireInterval: 170,
    projectileSpeed: 660,
    pattern: "swing",
    super: "Blue Note"
  },
  {
    id: "harp",
    name: "Celestia Harp",
    description: "Homing chord clusters that seek harmony.",
    color: "#b6f7bd",
    bulletColor: "rgba(182,247,189,0.8)",
    trailColor: "rgba(182,247,189,0.3)",
    fireInterval: 240,
    projectileSpeed: 540,
    pattern: "homing",
    super: "Celestial Gliss"
  },
  {
    id: "bass",
    name: "Abyss Bass Synth",
    description: "Low-end beam that cleaves through waves.",
    color: "#7cf0ff",
    bulletColor: "rgba(124,240,255,0.85)",
    trailColor: "rgba(124,240,255,0.24)",
    fireInterval: 260,
    projectileSpeed: 880,
    pattern: "beam",
    super: "Subquake"
  },
  {
    id: "flute",
    name: "Zephyr Flute",
    description: "Arpeggio spiral of airy notes.",
    color: "#a2ffcf",
    bulletColor: "rgba(162,255,207,0.8)",
    trailColor: "rgba(162,255,207,0.24)",
    fireInterval: 150,
    projectileSpeed: 600,
    pattern: "spiral",
    super: "Skyline Trill"
  },
  {
    id: "trumpet",
    name: "Blaze Trumpet",
    description: "Burst staccato, high critical chance.",
    color: "#ffd36c",
    bulletColor: "rgba(255,211,108,0.84)",
    trailColor: "rgba(255,211,108,0.24)",
    fireInterval: 140,
    projectileSpeed: 740,
    pattern: "burst",
    super: "Fanfarion"
  },
  {
    id: "kalimba",
    name: "Prism Kalimba",
    description: "Ricochet notes bounce between foes.",
    color: "#85ffe1",
    bulletColor: "rgba(133,255,225,0.78)",
    trailColor: "rgba(133,255,225,0.24)",
    fireInterval: 220,
    projectileSpeed: 640,
    pattern: "ricochet",
    super: "Prismatic Loop"
  },
  {
    id: "accordion",
    name: "Carnival Accordion",
    description: "Wave pulses expand horizontally.",
    color: "#ff9f68",
    bulletColor: "rgba(255,159,104,0.82)",
    trailColor: "rgba(255,159,104,0.28)",
    fireInterval: 210,
    projectileSpeed: 600,
    pattern: "wave",
    super: "Festival Squeeze"
  },
  {
    id: "shamisen",
    name: "Thunder Shamisen",
    description: "Plucked arcs chaining lightning.",
    color: "#9d8dff",
    bulletColor: "rgba(157,141,255,0.82)",
    trailColor: "rgba(157,141,255,0.32)",
    fireInterval: 200,
    projectileSpeed: 720,
    pattern: "chain",
    super: "Storm Run"
  },
  {
    id: "bagpipe",
    name: "Vanguard Bagpipe",
    description: "Sustained walls slow incoming shots.",
    color: "#66ffc7",
    bulletColor: "rgba(102,255,199,0.78)",
    trailColor: "rgba(102,255,199,0.28)",
    fireInterval: 280,
    projectileSpeed: 520,
    pattern: "wall",
    super: "Highland Roar"
  },
  {
    id: "theremin",
    name: "Halo Theremin",
    description: "Pitch bending ray locks on targets.",
    color: "#f8a9ff",
    bulletColor: "rgba(248,169,255,0.84)",
    trailColor: "rgba(248,169,255,0.28)",
    fireInterval: 230,
    projectileSpeed: 580,
    pattern: "curve",
    super: "Spectral Sweep"
  },
  {
    id: "ocarina",
    name: "Tide Ocarina",
    description: "Spiral pairs swirl outward.",
    color: "#7cffd5",
    bulletColor: "rgba(124,255,213,0.8)",
    trailColor: "rgba(124,255,213,0.28)",
    fireInterval: 190,
    projectileSpeed: 560,
    pattern: "spiral",
    super: "Oceanic Breath"
  },
  {
    id: "organ",
    name: "Cathedral Organ",
    description: "Column barrages clear lanes.",
    color: "#ffd9a0",
    bulletColor: "rgba(255,217,160,0.82)",
    trailColor: "rgba(255,217,160,0.26)",
    fireInterval: 260,
    projectileSpeed: 780,
    pattern: "column",
    super: "Choir Nova"
  },
  {
    id: "steelpan",
    name: "Vibe Steelpan",
    description: "Bouncy rhythm notes ricochet floor.",
    color: "#7fe0ff",
    bulletColor: "rgba(127,224,255,0.82)",
    trailColor: "rgba(127,224,255,0.24)",
    fireInterval: 210,
    projectileSpeed: 640,
    pattern: "bounce",
    super: "Carnival Pulse"
  },
  {
    id: "koto",
    name: "Mirage Koto",
    description: "Twin streams phasing through foes.",
    color: "#ffc3ff",
    bulletColor: "rgba(255,195,255,0.82)",
    trailColor: "rgba(255,195,255,0.3)",
    fireInterval: 170,
    projectileSpeed: 700,
    pattern: "phase",
    super: "Illusion Echo"
  },
  {
    id: "keytar",
    name: "Photon Keytar",
    description: "Hybrid rapid-fire with mini missiles.",
    color: "#9af7ff",
    bulletColor: "rgba(154,247,255,0.84)",
    trailColor: "rgba(154,247,255,0.28)",
    fireInterval: 120,
    projectileSpeed: 760,
    pattern: "hybrid",
    super: "Photon Storm"
  }
];

const COMPANIONS = [
  {
    id: "noteling",
    name: "Noteling",
    description: "Balanced support with steady tempo.",
    color: "#6c5cff",
    fireInterval: 420,
    projectileSpeed: 520,
    pattern: "beam",
    passive: "+5% combo duration",
    ultimate: "Tempo Surge"
  },
  {
    id: "snare",
    name: "Mini Snare Drone",
    description: "Rapid pellets add percussive hits.",
    color: "#ff9f68",
    fireInterval: 360,
    projectileSpeed: 560,
    pattern: "burst",
    passive: "+4% critical tempo",
    ultimate: "Beat Cascade"
  },
  {
    id: "choir",
    name: "Micro Choir",
    description: "Homing echoes keep combo alive.",
    color: "#9d8dff",
    fireInterval: 500,
    projectileSpeed: 480,
    pattern: "homing",
    passive: "Combo decay shield",
    ultimate: "Harmony Bloom"
  },
  {
    id: "synthpup",
    name: "Synth Pup",
    description: "Pulse lasers align rhythmic columns.",
    color: "#7fe0ff",
    fireInterval: 380,
    projectileSpeed: 600,
    pattern: "column",
    passive: "+6% resonance gain",
    ultimate: "Resonant Bark"
  }
];

INSTRUMENTS.forEach((instrument, index) => {
  if (!instrument.unlock) {
    if (index < 4) {
      instrument.unlock = { coin: 0, sheet: 0, diamond: 0 };
    } else {
      instrument.unlock = {
        coin: 1500 + (index - 4) * 450,
        sheet: Math.max(0, Math.floor((index - 3) / 3)),
        diamond: index > 12 ? 1 : 0
      };
    }
  }
});

COMPANIONS.forEach((companion, index) => {
  if (!companion.unlock) {
    companion.unlock = {
      coin: index === 0 ? 0 : 900 + index * 350,
      sheet: Math.max(0, index - 1),
      diamond: index === 3 ? 1 : 0
    };
  }
});

const MODES = [
  {
    id: "campaign",
    name: "Campaign",
    description: "Stage-based setlist 3-5 minutes with progressive waves.",
    stageDuration: 180,
    difficulty: 1.0,
    rewards: { coin: 400, diamond: 2, sheet: 1 }
  },
  {
    id: "raid",
    name: "Boss Raid",
    description: "Extended showdown against a music monstrosity.",
    stageDuration: 240,
    difficulty: 1.5,
    rewards: { coin: 650, diamond: 4, sheet: 2 }
  },
  {
    id: "daily",
    name: "Daily Mission",
    description: "Beat-synced challenge with modifier twists.",
    stageDuration: 120,
    difficulty: 1.2,
    rewards: { coin: 300, diamond: 1, sheet: 1 }
  },
  {
    id: "pvp",
    name: "PvP Score",
    description: "Chase high score ghost battles asynchronously.",
    stageDuration: 150,
    difficulty: 1.3,
    rewards: { coin: 350, diamond: 3, sheet: 1 }
  }
];

const POWERUPS = [
  {
    id: "chord",
    name: "Chord Orb",
    color: "#9d8dff",
    duration: 10,
    description: "Adds chord triads expanding your spread.",
    apply(player) {
      player.modifiers.chord = true;
    },
    expire(player) {
      player.modifiers.chord = false;
    }
  },
  {
    id: "melody",
    name: "Melody Loop",
    color: "#ff9f68",
    duration: 8,
    description: "Summons a melodic drone doubling combo gain.",
    apply(player) {
      player.modifiers.melody = true;
    },
    expire(player) {
      player.modifiers.melody = false;
    }
  },
  {
    id: "reverb",
    name: "Reverb Field",
    color: "#7fe0ff",
    duration: 6,
    description: "Shield bubble reflecting bullets as echoes.",
    apply(player) {
      player.modifiers.reverb = true;
    },
    expire(player) {
      player.modifiers.reverb = false;
    }
  },
  {
    id: "echo",
    name: "Echo Trail",
    color: "#ffc3ff",
    duration: 9,
    description: "Phantom copy fires delayed shots.",
    apply(player) {
      player.modifiers.echo = true;
    },
    expire(player) {
      player.modifiers.echo = false;
    }
  },
  {
    id: "bassdrop",
    name: "Bass Drop Core",
    color: "#ff6f91",
    duration: 0,
    description: "Instant screen clear synced to the beat.",
    apply(player, game) {
      game.screenClear();
    },
    expire() {}
  }
];

const BOSS_THEMES = [
  { id: "speaker-drake", label: "Naga Speaker", color: "#ff4f81", pattern: "sine" },
  { id: "amp-titan", label: "Robot Amplifier", color: "#6c5cff", pattern: "dash" },
  { id: "synth-leviathan", label: "Leviathan Synth", color: "#ffce5c", pattern: "spiral" },
  { id: "choir-eclipse", label: "Choir Eclipse", color: "#9d8dff", pattern: "base" }
];

const DAILY_MODIFIERS = [
  {
    id: "tempo-rush",
    label: "Tempo Rush",
    description: "Drag response quicker; enemy volleys intensify.",
    apply(game) {
      game.playerMoveFactor = 0.26;
      game.difficultyMultiplier += 0.2;
    }
  },
  {
    id: "echo-flex",
    label: "Echo Flex",
    description: "Permanent echo trails but combo drains faster.",
    apply(game) {
      game.comboDecayRate = 1.4;
      game.permanentBuffs.echo = true;
    },
    onStart(game) {
      if (game.player) game.player.modifiers.echo = true;
    }
  },
  {
    id: "resonant-ward",
    label: "Resonant Ward",
    description: "Reverb shield sustained; extra power-up drops.",
    apply(game) {
      game.permanentBuffs.reverb = true;
      game.extraPowerupChance = 0.12;
    },
    onStart(game) {
      if (game.player) game.player.modifiers.reverb = true;
    }
  }
];

const STORAGE_KEY = "music-force-progress-v1";
const DEFAULT_PROGRESS = {
  coin: 1800,
  diamond: 5,
  sheet: 2,
  unlockedInstruments: INSTRUMENTS.filter((_, idx) => idx < 4).map(inst => inst.id),
  unlockedCompanions: COMPANIONS.length ? [COMPANIONS[0].id] : []
};

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadProgress() {
  if (typeof localStorage === "undefined") {
    return deepClone(DEFAULT_PROGRESS);
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return deepClone(DEFAULT_PROGRESS);
    const parsed = JSON.parse(raw);
    return {
      coin: Math.max(0, parsed.coin ?? DEFAULT_PROGRESS.coin),
      diamond: Math.max(0, parsed.diamond ?? DEFAULT_PROGRESS.diamond),
      sheet: Math.max(0, parsed.sheet ?? DEFAULT_PROGRESS.sheet),
      unlockedInstruments: Array.isArray(parsed.unlockedInstruments) && parsed.unlockedInstruments.length
        ? [...new Set(parsed.unlockedInstruments)]
        : deepClone(DEFAULT_PROGRESS.unlockedInstruments),
      unlockedCompanions: Array.isArray(parsed.unlockedCompanions) && parsed.unlockedCompanions.length
        ? [...new Set(parsed.unlockedCompanions)]
        : deepClone(DEFAULT_PROGRESS.unlockedCompanions)
    };
  } catch (error) {
    console.warn("Failed to load progress", error);
    return deepClone(DEFAULT_PROGRESS);
  }
}

function saveProgress() {
  if (typeof localStorage === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.warn("Failed to save progress", error);
  }
}

let progress = loadProgress();

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const hpBar = document.getElementById("hpBar");
const skillBar = document.getElementById("skillBar");
const resonanceBar = document.getElementById("resonanceBar");
const scoreLabel = document.getElementById("scoreLabel");
const comboLabel = document.getElementById("comboLabel");
const startButton = document.getElementById("startButton");
const continueButton = document.getElementById("continueButton");
const menuOverlay = document.getElementById("menuOverlay");
const summaryOverlay = document.getElementById("stageSummary");
const summaryTitle = document.getElementById("summaryTitle");
const summaryStats = document.getElementById("summaryStats");
const instrumentSelect = document.getElementById("instrumentSelect");
const companionSelect = document.getElementById("companionSelect");
const modeSelect = document.getElementById("modeSelect");
const loadoutDescription = document.getElementById("loadoutDescription");
const unlockButton = document.getElementById("unlockButton");
const menuNotice = document.getElementById("menuNotice");
const coinLabel = document.getElementById("coinCount");
const diamondLabel = document.getElementById("diamondCount");
const sheetLabel = document.getElementById("sheetCount");

let audioContext = null;
let masterGain = null;
let noticeTimer = null;

function formatNumber(value) {
  return value.toLocaleString();
}

function updateInventoryUI() {
  if (!coinLabel) return;
  coinLabel.textContent = `Coin ${formatNumber(progress.coin)}`;
  diamondLabel.textContent = `Diamond ${formatNumber(progress.diamond)}`;
  sheetLabel.textContent = `Sheet ${formatNumber(progress.sheet)}`;
}

function isInstrumentUnlocked(id) {
  return progress.unlockedInstruments.includes(id);
}

function isCompanionUnlocked(id) {
  return progress.unlockedCompanions.includes(id);
}

function hasCost(cost) {
  if (!cost) return true;
  const { coin = 0, diamond = 0, sheet = 0 } = cost;
  return progress.coin >= coin && progress.diamond >= diamond && progress.sheet >= sheet;
}

function spendCost(cost) {
  if (!cost) return;
  progress.coin -= cost.coin || 0;
  progress.diamond -= cost.diamond || 0;
  progress.sheet -= cost.sheet || 0;
}

function showNotice(message, tone = "info") {
  if (!menuNotice) return;
  menuNotice.textContent = message;
  menuNotice.dataset.tone = tone;
  menuNotice.classList.remove("hidden");
  if (noticeTimer) {
    clearTimeout(noticeTimer);
  }
  noticeTimer = setTimeout(() => {
    menuNotice.classList.add("hidden");
  }, 2400);
}

function applyRewards(reward) {
  progress.coin += reward.coin || 0;
  progress.diamond += reward.diamond || 0;
  progress.sheet += reward.sheet || 0;
  saveProgress();
  updateInventoryUI();
}

function attemptUnlockInstrument(id) {
  const instrument = INSTRUMENTS.find(inst => inst.id === id);
  if (!instrument) return;
  if (isInstrumentUnlocked(id)) {
    showNotice(`${instrument.name} already unlocked`, "info");
    return;
  }
  const cost = instrument.unlock || { coin: 0, diamond: 0, sheet: 0 };
  if (!hasCost(cost)) {
    showNotice(`Need Coin ${cost.coin}, Diamond ${cost.diamond}, Sheet ${cost.sheet}`, "warn");
    return;
  }
  spendCost(cost);
  progress.unlockedInstruments.push(id);
  saveProgress();
  updateInventoryUI();
  refreshInstrumentSelect();
  showNotice(`${instrument.name} unlocked!`, "success");
  updateLoadoutDescription();
}

function attemptUnlockCompanion(id) {
  const companion = COMPANIONS.find(comp => comp.id === id);
  if (!companion) return;
  if (isCompanionUnlocked(id)) {
    showNotice(`${companion.name} already unlocked`, "info");
    return;
  }
  const cost = companion.unlock || { coin: 0, diamond: 0, sheet: 0 };
  if (!hasCost(cost)) {
    showNotice(`Need Coin ${cost.coin}, Diamond ${cost.diamond}, Sheet ${cost.sheet}`, "warn");
    return;
  }
  spendCost(cost);
  progress.unlockedCompanions.push(id);
  saveProgress();
  updateInventoryUI();
  refreshCompanionSelect();
  showNotice(`${companion.name} unlocked!`, "success");
  updateLoadoutDescription();
}

function refreshInstrumentSelect() {
  const current = instrumentSelect.value;
  instrumentSelect.innerHTML = "";
  INSTRUMENTS.forEach(instrument => {
    const option = document.createElement("option");
    option.value = instrument.id;
    const unlocked = isInstrumentUnlocked(instrument.id);
    option.textContent = unlocked ? instrument.name : `${instrument.name} (Locked)`;
    option.dataset.locked = unlocked ? "0" : "1";
    instrumentSelect.appendChild(option);
  });
  const preferred = INSTRUMENTS.find(inst => inst.id === current && isInstrumentUnlocked(inst.id));
  if (preferred) {
    instrumentSelect.value = preferred.id;
  } else {
    const firstUnlocked = INSTRUMENTS.find(inst => isInstrumentUnlocked(inst.id));
    if (firstUnlocked) {
      instrumentSelect.value = firstUnlocked.id;
    }
  }
}

function refreshCompanionSelect() {
  const current = companionSelect.value;
  companionSelect.innerHTML = "";
  const noneOption = document.createElement("option");
  noneOption.value = "none";
  noneOption.textContent = "None";
  companionSelect.appendChild(noneOption);
  COMPANIONS.forEach(companion => {
    const option = document.createElement("option");
    option.value = companion.id;
    const unlocked = isCompanionUnlocked(companion.id);
    option.textContent = unlocked ? companion.name : `${companion.name} (Locked)`;
    option.dataset.locked = unlocked ? "0" : "1";
    companionSelect.appendChild(option);
  });
  if (current && [...companionSelect.options].some(opt => opt.value === current)) {
    companionSelect.value = current;
  } else {
    companionSelect.value = "none";
  }
}

function refreshStartState() {
  const instrumentUnlocked = isInstrumentUnlocked(instrumentSelect.value);
  const companionUnlocked = companionSelect.value === "none" || isCompanionUnlocked(companionSelect.value);
  const canStart = instrumentUnlocked && companionUnlocked;
  startButton.disabled = !canStart;
  startButton.textContent = canStart ? "Start Stage" : "Loadout Locked";
  return canStart;
}

function initAudio() {
  if (audioContext) return;
  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  masterGain = audioContext.createGain();
  masterGain.gain.value = 0.13;
  masterGain.connect(audioContext.destination);
}

function playNote(freq, duration = 0.25, type = "sine") {
  if (!audioContext) return;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = type;
  oscillator.frequency.value = freq;
  oscillator.connect(gain);
  gain.connect(masterGain);
  gain.gain.setValueAtTime(0.001, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(1.0, audioContext.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + duration + 0.05);
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function pick(array) {
  return array[Math.floor(Math.random() * array.length)];
}

class Timer {
  constructor() {
    this.elapsed = 0;
  }
  update(dt) {
    this.elapsed += dt;
  }
  reset() {
    this.elapsed = 0;
  }
}

class Entity {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dead = false;
  }
}

class Player extends Entity {
  constructor(instrument, companion) {
    super(canvas.width / 2, canvas.height * 0.8);
    this.instrument = instrument;
    this.width = 42;
    this.height = 56;
    this.hp = 100;
    this.maxHp = 100;
    this.skill = 0;
    this.skillMax = 100;
    this.resonance = 0;
    this.resonanceMax = 100;
    this.combo = 0;
    this.comboTimer = 0;
    this.score = 0;
    this.fireTimer = 0;
    this.modifiers = { chord: false, melody: false, reverb: false, echo: false };
    this.activePowerups = [];
    this.speed = 720;
    this.targetX = this.x;
    this.targetY = this.y;
    this.pointerId = null;
    this.dashCooldown = 0;
    this.dashTimer = 0;
    this.companion = companion ? new Companion(companion, this) : null;
    this.superReady = false;
  }

  update(dt, game) {
    this.fireTimer += dt;
    const decay = game ? game.comboDecayRate : 1;
    this.comboTimer -= dt * decay;
    this.dashCooldown = Math.max(0, this.dashCooldown - dt);
    this.dashTimer = Math.max(0, this.dashTimer - dt);

    // move toward target for smoothness
    const moveFactor = game ? clamp(game.playerMoveFactor, 0.08, 0.35) : 0.18;
    this.x = lerp(this.x, this.targetX, moveFactor);
    this.y = lerp(this.y, this.targetY, moveFactor);

    this.x = clamp(this.x, this.width / 2, canvas.width - this.width / 2);
    this.y = clamp(this.y, this.height / 2, canvas.height - this.height / 2);

    if (this.fireTimer * 1000 >= this.instrument.fireInterval) {
      this.fireTimer = 0;
      game.spawnPlayerProjectiles(this);
    }

    if (this.companion) {
      if (this.resonance >= this.resonanceMax && this.companion.ultimateReady) {
        this.companion.triggerUltimate(game);
      }
      this.companion.update(dt, game);
    }

    this.activePowerups = this.activePowerups.filter(p => {
      p.time -= dt;
      if (p.time <= 0) {
        p.power.expire(this);
        return false;
      }
      return true;
    });

    if (this.comboTimer <= 0) {
      this.combo = 0;
      this.comboTimer = 0;
    }

    if (game && game.permanentBuffs) {
      if (game.permanentBuffs.echo) this.modifiers.echo = true;
      if (game.permanentBuffs.reverb) this.modifiers.reverb = true;
    }
  }

  moveTo(x, y) {
    this.targetX = x;
    this.targetY = y;
  }

  takeDamage(amount) {
    if (this.modifiers.reverb) {
      amount *= 0.5;
    }
    this.hp = Math.max(0, this.hp - amount);
    this.combo = 0;
    this.comboTimer = 0;
    if (this.hp <= 0) {
      this.dead = true;
    }
  }

  addCombo(increase) {
    this.combo += increase;
    this.comboTimer = Math.min(4.5, 2 + this.combo * 0.08);
  }

  addScore(base) {
    const multiplier = 1 + this.combo * 0.05;
    this.score += Math.floor(base * multiplier);
  }

  chargeSkill(amount) {
    this.skill = clamp(this.skill + amount, 0, this.skillMax);
    this.superReady = this.skill >= this.skillMax;
  }

  chargeResonance(amount) {
    this.resonance = clamp(this.resonance + amount, 0, this.resonanceMax);
  }

  triggerSuper(game) {
    if (!this.superReady) return;
    this.superReady = false;
    this.skill = 0;
    game.superSolo(this);
  }

  triggerDash() {
    if (this.dashCooldown > 0) return false;
    this.dashCooldown = 2.25;
    this.dashTimer = 0.35;
    return true;
  }

  applyPowerup(power, game) {
    if (power.duration > 0) {
      power.apply(this, game);
      this.activePowerups.push({ power, time: power.duration });
    } else {
      power.apply(this, game);
    }
  }
}

class Companion extends Entity {
  constructor(data, player) {
    super(player.x, player.y - 60);
    this.data = data;
    this.player = player;
    this.fireTimer = 0;
    this.ultimateMeter = 0;
    this.ultimateReady = false;
  }

  update(dt, game) {
    this.x = lerp(this.x, this.player.x, 0.2);
    this.y = lerp(this.y, this.player.y - 80, 0.2);
    this.fireTimer += dt;
    this.ultimateMeter = clamp(this.ultimateMeter + dt * 12, 0, 100);
    this.ultimateReady = this.ultimateMeter >= 100;
    if (this.fireTimer * 1000 >= this.data.fireInterval) {
      this.fireTimer = 0;
      game.spawnCompanionProjectiles(this);
    }
  }

  triggerUltimate(game) {
    if (!this.ultimateReady) return;
    this.ultimateReady = false;
    this.ultimateMeter = 0;
    this.player.resonance = 0;
    game.resonanceBurst(this);
  }
}

class Projectile extends Entity {
  constructor({
    x,
    y,
    vx,
    vy,
    friendly,
    color,
    damage,
    noteIndex,
    radius = 6,
    life = 3,
    pierce = 0,
    homing = false,
    target = null,
    oscillate = null,
    ricochet = 0,
    bounce = 0,
    chain = 0,
    ghost = false
  }) {
    super(x, y);
    this.vx = vx;
    this.vy = vy;
    this.friendly = friendly;
    this.color = color;
    this.damage = damage;
    this.noteIndex = noteIndex;
    this.radius = radius;
    this.life = life;
    this.pierce = pierce;
    this.homing = homing;
    this.target = target;
    this.oscillate = oscillate;
    if (this.oscillate) this.oscillate.lastOffset = 0;
    this.ricochet = ricochet;
    this.bounce = bounce;
    this.chain = chain;
    this.ghost = ghost;
  }

  update(dt, game) {
    if (this.homing && this.target && !this.target.dead) {
      const dx = this.target.x - this.x;
      const dy = this.target.y - this.y;
      const len = Math.hypot(dx, dy) || 1;
      const speed = Math.hypot(this.vx, this.vy);
      this.vx = lerp(this.vx, (dx / len) * speed, 0.08);
      this.vy = lerp(this.vy, (dy / len) * speed, 0.08);
    }

    if (this.oscillate) {
      this.oscillate.phase += dt * this.oscillate.speed;
      const offset = Math.sin(this.oscillate.phase) * this.oscillate.magnitude;
      const delta = offset - (this.oscillate.lastOffset || 0);
      this.x += delta;
      this.oscillate.lastOffset = offset;
    }

    this.x += this.vx * dt;
    this.y += this.vy * dt;

    if (this.ricochet > 0) {
      if (this.x < this.radius || this.x > canvas.width - this.radius) {
        this.vx *= -1;
        this.ricochet -= 1;
        this.x = clamp(this.x, this.radius, canvas.width - this.radius);
      }
    }

    if (this.bounce > 0) {
      if (this.y < this.radius) {
        this.vy = Math.abs(this.vy);
        this.bounce -= 1;
      }
      if (this.y > canvas.height - this.radius) {
        this.vy = -Math.abs(this.vy);
        this.bounce -= 1;
      }
    }

    this.life -= dt;
    if (this.life <= 0) {
      this.dead = true;
    }

    if (this.x < -40 || this.x > canvas.width + 40 || this.y < -80 || this.y > canvas.height + 80) {
      this.dead = true;
    }
  }
}

class Enemy extends Entity {
  constructor(config) {
    super(config.x, config.y);
    this.radius = config.radius || 28;
    this.hp = config.hp;
    this.maxHp = config.hp;
    this.speed = config.speed;
    this.pattern = config.pattern;
    this.fireInterval = config.fireInterval || 1.8;
    this.fireTimer = rand(0, this.fireInterval);
    this.value = config.value || 50;
    this.color = config.color || "#ff4f81";
    this.boss = !!config.boss;
    this.phase = 0;
    this.label = config.label || null;
  }

  update(dt, game) {
    this.phase += dt;
    if (this.pattern === "sine") {
      this.x += Math.sin(this.phase * 2.5) * 60 * dt;
      this.y += this.speed * dt;
    } else if (this.pattern === "spiral") {
      this.x += Math.sin(this.phase * 4) * 80 * dt;
      this.y += this.speed * dt;
    } else if (this.pattern === "dash") {
      this.y += this.speed * dt;
      this.x += Math.sin(this.phase * 6) * 40 * dt;
    } else {
      this.y += this.speed * dt;
    }

    if (this.y > canvas.height + 80) {
      this.dead = true;
    }

    this.fireTimer -= dt;
    if (this.fireTimer <= 0 && !this.dead) {
      this.fireTimer = this.fireInterval;
      game.spawnEnemyProjectiles(this);
    }
  }

  hit(damage, game) {
    this.hp -= damage;
    if (this.hp <= 0) {
      this.dead = true;
      game.handleEnemyDestroyed(this);
    }
  }
}

class PowerUpDrop extends Entity {
  constructor(power, x, y) {
    super(x, y);
    this.power = power;
    this.radius = 18;
    this.vy = 80;
    this.pulse = 0;
  }

  update(dt) {
    this.pulse += dt * 4;
    this.y += this.vy * dt;
    if (this.y > canvas.height + this.radius) {
      this.dead = true;
    }
  }
}

class Particle extends Entity {
  constructor(x, y, color) {
    super(x, y);
    this.color = color;
    this.life = rand(0.3, 0.7);
    this.vx = rand(-120, 120);
    this.vy = rand(-180, -60);
  }

  update(dt) {
    this.x += this.vx * dt;
    this.y += this.vy * dt;
    this.life -= dt;
    if (this.life <= 0) {
      this.dead = true;
    }
  }
}

class Game {
  constructor() {
    this.player = null;
    this.projectiles = [];
    this.enemies = [];
    this.particles = [];
    this.powerups = [];
    this.lastTimestamp = 0;
    this.running = false;
    this.mode = MODES[0];
    this.noteCursor = 0;
    this.elapsed = 0;
    this.spawnTimer = 0;
    this.backgroundPhase = 0;
    this.difficultyMultiplier = 1;
    this.stageDuration = 180;
    this.summary = null;
    this.comboDecayRate = 1;
    this.lastTap = 0;
    this.lastPointerX = null;
    this.permanentBuffs = { echo: false, reverb: false };
    this.playerMoveFactor = 0.18;
    this.extraPowerupChance = 0;
    this.activeModifier = null;
    this.targetScore = null;
    this.bossSpawned = false;
    this.currentBoss = null;
  }

  start(instrumentId, companionId, modeId) {
    initAudio();
    this.mode = MODES.find(m => m.id === modeId) || MODES[0];
    this.permanentBuffs = { echo: false, reverb: false };
    this.comboDecayRate = 1;
    this.playerMoveFactor = 0.18;
    this.extraPowerupChance = 0;
    this.activeModifier = null;
    this.targetScore = null;
    this.bossSpawned = false;
    this.currentBoss = null;
    const instrument = INSTRUMENTS.find(i => i.id === instrumentId) || INSTRUMENTS[0];
    const companion = COMPANIONS.find(c => c.id === companionId) || null;
    this.player = new Player(instrument, companion);
    this.projectiles = [];
    this.enemies = [];
    this.particles = [];
    this.powerups = [];
    this.elapsed = 0;
    this.spawnTimer = 0;
    this.backgroundPhase = 0;
    this.stageDuration = this.mode.stageDuration;
    this.difficultyMultiplier = this.mode.difficulty;
    this.running = true;
    this.summary = null;
    this.noteCursor = 0;
    this.player.combo = 0;
    this.player.score = 0;
    this.player.hp = this.player.maxHp;
    this.player.skill = 0;
    this.player.resonance = 0;
    this.player.activePowerups = [];
    if (this.player.companion) {
      this.player.companion.ultimateMeter = 0;
      this.player.companion.ultimateReady = false;
    }
    if (this.mode.id === "daily") {
      this.activeModifier = pick(DAILY_MODIFIERS);
    }
    if (this.mode.id === "pvp") {
      this.targetScore = Math.floor(rand(48000, 120000) * this.difficultyMultiplier);
    }
    if (this.activeModifier) {
      this.activeModifier.apply(this);
    }
    if (this.mode.id === "raid") {
      const boss = new Enemy(this.createBossConfig());
      this.enemies.push(boss);
      this.bossSpawned = true;
    }
    if (this.activeModifier && this.activeModifier.onStart) {
      this.activeModifier.onStart(this);
    }
    if (this.permanentBuffs.echo) {
      this.player.modifiers.echo = true;
    }
    if (this.permanentBuffs.reverb) {
      this.player.modifiers.reverb = true;
    }
    this.lastTap = 0;
  }

  update(dt) {
    if (!this.running) return;
    this.elapsed += dt;
    this.backgroundPhase += dt * 0.2;

    this.player.update(dt, this);

    this.projectiles.forEach(p => p.update(dt, this));
    this.enemies.forEach(e => e.update(dt, this));
    this.particles.forEach(p => p.update(dt));
    this.powerups.forEach(p => p.update(dt));

    this.handleCollisions();

    this.projectiles = this.projectiles.filter(p => !p.dead);
    this.enemies = this.enemies.filter(e => !e.dead);
    this.particles = this.particles.filter(p => !p.dead);
    this.powerups = this.powerups.filter(p => !p.dead);

    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      this.spawnWave();
    }

    if (this.elapsed >= this.stageDuration || this.player.dead) {
      this.finishStage();
    }

    if (this.player.comboTimer > 0 && this.player.modifiers.melody) {
      this.player.comboTimer += dt * 0.5;
    }
  }

  draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.drawBackground();

    this.powerups.forEach(p => this.drawPowerUp(p));
    this.enemies.forEach(e => this.drawEnemy(e));
    this.projectiles.forEach(p => this.drawProjectile(p));
    this.particles.forEach(p => this.drawParticle(p));
    if (this.player && !this.player.dead) {
      this.drawPlayer(this.player);
      if (this.player.companion) {
        this.drawCompanion(this.player.companion);
      }
    }

    if (this.activeModifier) {
      ctx.save();
      ctx.fillStyle = "rgba(225,221,255,0.9)";
      ctx.font = "18px 'Segoe UI', sans-serif";
      ctx.textAlign = "left";
      ctx.fillText(`${this.activeModifier.label}`, 18, 32);
      ctx.fillStyle = "rgba(154,247,255,0.65)";
      ctx.font = "14px 'Segoe UI', sans-serif";
      ctx.fillText(this.activeModifier.description, 18, 52);
      ctx.restore();
    }

    if (this.mode.id === "pvp" && this.targetScore) {
      ctx.save();
      ctx.fillStyle = "rgba(255,206,92,0.9)";
      ctx.font = "16px 'Segoe UI', sans-serif";
      ctx.textAlign = "right";
      ctx.fillText(`Ghost Score ${this.targetScore.toLocaleString()}`, canvas.width - 18, 32);
      ctx.restore();
    }
  }

  drawBackground() {
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "rgba(20,9,40,0.95)");
    gradient.addColorStop(1, "rgba(4,2,20,0.95)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    for (let i = 0; i < 40; i++) {
      const angle = (i / 40) * Math.PI * 2 + this.backgroundPhase;
      const radius = 240 + Math.sin(this.backgroundPhase * 4 + i) * 60;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius * 0.4;
      ctx.fillStyle = `rgba(108, 92, 255, ${0.05 + (i % 5) * 0.01})`;
      ctx.fillRect(x - 2, y - canvas.height, 4, canvas.height * 2);
    }
    ctx.restore();

    ctx.save();
    for (let i = 0; i < 16; i++) {
      const y = (i / 16) * canvas.height;
      ctx.strokeStyle = `rgba(108, 92, 255, ${0.12})`;
      ctx.beginPath();
      ctx.moveTo(0, (y + (Math.sin(this.backgroundPhase * 6 + i) * 18)));
      ctx.lineTo(canvas.width, (y + (Math.sin(this.backgroundPhase * 6 + i) * 18)));
      ctx.stroke();
    }
    ctx.restore();
  }

  drawPlayer(player) {
    ctx.save();
    ctx.translate(player.x, player.y);
    if (player.dashTimer > 0) {
      ctx.globalAlpha = 0.7;
    }

    ctx.fillStyle = player.instrument.color;
    ctx.beginPath();
    ctx.moveTo(0, -player.height / 2);
    ctx.lineTo(player.width / 2, player.height / 2);
    ctx.lineTo(-player.width / 2, player.height / 2);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    ctx.beginPath();
    ctx.ellipse(0, player.height / 2, player.width / 2.2, 10, 0, 0, Math.PI * 2);
    ctx.fill();

    if (player.modifiers.reverb) {
      ctx.strokeStyle = "rgba(180,255,255,0.5)";
      ctx.lineWidth = 4;
      ctx.strokeRect(-player.width / 1.2, -player.height / 1.2, player.width * 1.6, player.height * 1.7);
    }

    ctx.restore();
  }

  drawCompanion(companion) {
    ctx.save();
    ctx.translate(companion.x, companion.y);
    ctx.fillStyle = companion.data.color;
    ctx.beginPath();
    ctx.arc(0, 0, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.fillRect(-6, -10, 12, 20);
    ctx.restore();
  }

  drawProjectile(projectile) {
    ctx.save();
    ctx.translate(projectile.x, projectile.y);
    ctx.fillStyle = projectile.color;
    ctx.beginPath();
    ctx.arc(0, 0, projectile.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  drawEnemy(enemy) {
    ctx.save();
    ctx.translate(enemy.x, enemy.y);
    const gradient = ctx.createRadialGradient(0, 0, enemy.radius * 0.2, 0, 0, enemy.radius);
    gradient.addColorStop(0, "rgba(255,255,255,0.2)");
    gradient.addColorStop(1, enemy.color);
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(0, 0, enemy.radius, 0, Math.PI * 2);
    ctx.fill();
    if (enemy.boss) {
      ctx.strokeStyle = "rgba(255,255,255,0.4)";
      ctx.lineWidth = 4;
      ctx.stroke();
    }

    if (enemy.boss && enemy.label) {
      ctx.fillStyle = "rgba(234,231,255,0.9)";
      ctx.font = "20px 'Segoe UI', sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";
      ctx.fillText(enemy.label, 0, -enemy.radius - 12);
    }

    const hpRatio = enemy.hp / enemy.maxHp;
    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.fillRect(-enemy.radius, enemy.radius + 6, enemy.radius * 2, 6);
    ctx.fillStyle = "#6c5cff";
    ctx.fillRect(-enemy.radius, enemy.radius + 6, enemy.radius * 2 * hpRatio, 6);
    ctx.restore();
  }

  drawPowerUp(drop) {
    ctx.save();
    ctx.translate(drop.x, drop.y);
    ctx.fillStyle = drop.power.color;
    ctx.beginPath();
    ctx.arc(0, 0, drop.radius + Math.sin(drop.pulse) * 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "rgba(0,0,0,0.3)";
    ctx.fillRect(-10, -2, 20, 4);
    ctx.restore();
  }

  drawParticle(particle) {
    ctx.save();
    ctx.globalAlpha = clamp(particle.life, 0, 1);
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  spawnPlayerProjectiles(player) {
    const baseSpeed = player.instrument.projectileSpeed;
    const pattern = player.instrument.pattern;
    const bullets = [];

    const addBullet = (vx, vy, overrides = {}) => {
      bullets.push(new Projectile({
        x: player.x,
        y: player.y - player.height / 2,
        vx,
        vy,
        friendly: true,
        color: player.instrument.bulletColor,
        damage: 12,
        noteIndex: this.noteCursor,
        ...overrides
      }));
      this.advanceNote();
    };

    if (pattern === "spread" || (player.modifiers.chord && pattern !== "beam")) {
      const spreadAngles = [-0.3, 0, 0.3];
      spreadAngles.forEach(angle => {
        const speed = baseSpeed;
        addBullet(Math.sin(angle) * speed, -Math.cos(angle) * speed);
      });
    } else if (pattern === "twin") {
      addBullet(-120, -baseSpeed);
      addBullet(120, -baseSpeed);
    } else if (pattern === "burst") {
      for (let i = -1; i <= 1; i++) {
        const offset = i * 140;
        addBullet(offset, -baseSpeed * (0.9 + Math.abs(i) * 0.06));
      }
    } else if (pattern === "arc") {
      for (let i = 0; i < 4; i++) {
        const angle = -Math.PI / 2 + (i - 1.5) * 0.2;
        addBullet(Math.cos(angle) * baseSpeed, Math.sin(angle) * baseSpeed, { oscillate: { phase: i * 0.4, speed: 8, magnitude: 12 } });
      }
    } else if (pattern === "pierce") {
      addBullet(0, -baseSpeed, { radius: 10, damage: 18, life: 4, pierce: 2 });
    } else if (pattern === "swing") {
      for (let i = 0; i < 5; i++) {
        const angle = -Math.PI / 2 + (i - 2) * 0.25;
        addBullet(Math.sin(angle) * baseSpeed, Math.cos(angle) * -baseSpeed, { life: 2.6 });
      }
    } else if (pattern === "homing") {
      const target = this.pickNearestEnemy(player.x, player.y - 100);
      addBullet(0, -baseSpeed * 0.8, { homing: true, target, life: 6 });
    } else if (pattern === "beam") {
      addBullet(0, -baseSpeed, { radius: 16, damage: 24, life: 1.2, pierce: 6 });
    } else if (pattern === "spiral") {
      for (let i = 0; i < 3; i++) {
        const angle = -Math.PI / 2 + (this.elapsed * 2 + i) * 0.3;
        addBullet(Math.sin(angle) * baseSpeed, Math.cos(angle) * -baseSpeed, { life: 3.2 });
      }
    } else if (pattern === "ricochet") {
      addBullet(0, -baseSpeed, { radius: 8, life: 4, pierce: 1, ricochet: 2 });
    } else if (pattern === "wave") {
      for (let i = -2; i <= 2; i++) {
        addBullet(i * 120, -baseSpeed * 0.9, { oscillate: { phase: i * 0.2, speed: 12, magnitude: 24 } });
      }
    } else if (pattern === "chain") {
      addBullet(0, -baseSpeed, { damage: 14, chain: 3, life: 3 });
    } else if (pattern === "wall") {
      for (let i = -2; i <= 2; i++) {
        addBullet(i * 160, -baseSpeed * 0.5, { radius: 14, damage: 10, life: 1.8 });
      }
    } else if (pattern === "curve") {
      for (let i = 0; i < 3; i++) {
        addBullet((i - 1) * 80, -baseSpeed * 0.8, { oscillate: { phase: this.elapsed * 2 + i * 0.4, speed: 10, magnitude: 40 } });
      }
    } else if (pattern === "column") {
      addBullet(0, -baseSpeed);
      addBullet(-200, -baseSpeed, { life: 2.2 });
      addBullet(200, -baseSpeed, { life: 2.2 });
    } else if (pattern === "bounce") {
      for (let i = -1; i <= 1; i++) {
        addBullet(i * 120, -baseSpeed * 0.8, { bounce: 3 });
      }
    } else if (pattern === "phase") {
      addBullet(-140, -baseSpeed, { ghost: true, life: 3, pierce: 4 });
      addBullet(140, -baseSpeed, { ghost: true, life: 3, pierce: 4 });
    } else if (pattern === "hybrid") {
      addBullet(0, -baseSpeed);
      addBullet(-220, -baseSpeed * 0.7, { radius: 4, damage: 8 });
      addBullet(220, -baseSpeed * 0.7, { radius: 4, damage: 8 });
    } else {
      addBullet(0, -baseSpeed);
    }

    if (player.modifiers.chord) {
      const extra = new Projectile({
        x: player.x,
        y: player.y - player.height / 2,
        vx: rand(-60, 60),
        vy: -baseSpeed,
        friendly: true,
        color: player.instrument.bulletColor,
        damage: 10,
        noteIndex: this.noteCursor,
        life: 2.6
      });
      this.projectiles.push(extra);
      this.advanceNote();
    }

    if (player.modifiers.echo) {
      bullets.forEach(bullet => {
        const delayed = new Projectile({ ...bullet, life: bullet.life + 0.5 });
        delayed.x += rand(-10, 10);
        delayed.y += 12;
        this.projectiles.push(delayed);
      });
    }

    bullets.forEach(b => this.projectiles.push(b));
  }

  spawnCompanionProjectiles(companion) {
    const baseSpeed = companion.data.projectileSpeed;
    const pattern = companion.data.pattern;
    const bullets = [];

    const addBullet = (vx, vy) => {
      bullets.push(new Projectile({
        x: companion.x,
        y: companion.y,
        vx,
        vy,
        friendly: true,
        color: companion.data.color,
        damage: 8,
        noteIndex: this.noteCursor
      }));
      this.advanceNote();
    };

    if (pattern === "burst") {
      for (let i = -1; i <= 1; i++) {
        addBullet(i * 100, -baseSpeed);
      }
    } else if (pattern === "homing") {
      const target = this.pickNearestEnemy(companion.x, companion.y - 120);
      bullets.push(new Projectile({
        x: companion.x,
        y: companion.y,
        vx: 0,
        vy: -baseSpeed * 0.7,
        friendly: true,
        color: companion.data.color,
        damage: 10,
        noteIndex: this.noteCursor,
        life: 5,
        homing: true,
        target
      }));
      this.advanceNote();
    } else if (pattern === "column") {
      addBullet(0, -baseSpeed);
    } else {
      addBullet(0, -baseSpeed * 0.9);
    }

    bullets.forEach(b => this.projectiles.push(b));
  }

  spawnEnemyProjectiles(enemy) {
    if (!this.player || this.player.dead) return;
    const targetAngle = Math.atan2(this.player.y - enemy.y, this.player.x - enemy.x);
    const speed = 260 + 60 * this.difficultyMultiplier;
    const count = enemy.boss ? 9 : 3;
    for (let i = 0; i < count; i++) {
      const angle = targetAngle + (i - (count - 1) / 2) * 0.12;
      this.projectiles.push(new Projectile({
        x: enemy.x,
        y: enemy.y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        friendly: false,
        color: "rgba(255,79,129,0.7)",
        damage: enemy.boss ? 26 : 12,
        noteIndex: null,
        radius: enemy.boss ? 12 : 8,
        life: 4
      }));
    }
  }

  spawnWave() {
    const difficulty = this.difficultyMultiplier + this.elapsed / 90;
    const spawnCount = Math.ceil(rand(1, 2 + difficulty));
    for (let i = 0; i < spawnCount; i++) {
      const typeRoll = Math.random();
      let config;
      if (this.elapsed > this.stageDuration * 0.7 && typeRoll > 0.5) {
        config = this.createEnemyConfig("dash");
      } else if (typeRoll > 0.7) {
        config = this.createEnemyConfig("spiral");
      } else if (typeRoll > 0.4) {
        config = this.createEnemyConfig("sine");
      } else {
        config = this.createEnemyConfig("base");
      }
      this.enemies.push(new Enemy(config));
    }

    if (!this.bossSpawned && (this.elapsed > this.stageDuration * 0.8)) {
      const boss = new Enemy(this.createBossConfig());
      this.enemies.push(boss);
      this.bossSpawned = true;
    }

    this.spawnTimer = rand(2, 4) / difficulty;
  }

  createEnemyConfig(pattern) {
    return {
      x: rand(60, canvas.width - 60),
      y: -40,
      radius: pattern === "dash" ? 32 : 26,
      hp: (pattern === "spiral" ? 80 : 60) * this.difficultyMultiplier,
      speed: (pattern === "base" ? 160 : pattern === "dash" ? 220 : 140) * 0.6,
      pattern,
      fireInterval: pattern === "dash" ? 1.5 : rand(1.6, 2.4),
      color: pattern === "spiral" ? "#9d8dff" : pattern === "dash" ? "#ff9f68" : "#ff4f81",
      value: pattern === "spiral" ? 90 : 60
    };
  }

  createBossConfig() {
    const theme = pick(BOSS_THEMES);
    this.currentBoss = theme.label;
    const baseHp = this.mode.id === "raid" ? 5200 : 3200;
    return {
      x: canvas.width / 2,
      y: -120,
      radius: 120,
      hp: baseHp * this.difficultyMultiplier,
      speed: 24,
      pattern: theme.pattern,
      fireInterval: this.mode.id === "raid" ? 0.9 : 1.1,
      color: theme.color,
      value: 1500,
      boss: true,
      label: theme.label
    };
  }

  pickNearestEnemy(x, y, exclude = null) {
    let nearest = null;
    let closest = Infinity;
    this.enemies.forEach(enemy => {
      if (enemy.dead || enemy === exclude) return;
      const dist = Math.hypot(enemy.x - x, enemy.y - y);
      if (dist < closest) {
        closest = dist;
        nearest = enemy;
      }
    });
    return nearest;
  }

  handleCollisions() {
    this.projectiles.forEach(projectile => {
      if (projectile.friendly) {
    this.enemies.forEach(enemy => {
      if (!enemy.dead && this.circleCollision(projectile, enemy)) {
        enemy.hit(projectile.damage, this);
        const comboGain = this.player.modifiers.melody ? 2 : 1;
        this.player.addCombo(comboGain);
        this.player.addScore(enemy.boss ? 35 : 15);
        this.player.chargeSkill(3);
        this.player.chargeResonance(1.6);
        if (projectile.noteIndex != null) {
          playNote(NOTES[projectile.noteIndex % NOTES.length].freq, 0.22, "sawtooth");
        }
        this.emitParticles(enemy.x, enemy.y, enemy.color);

        let shouldDestroy = true;
        if (projectile.pierce > 0) {
          projectile.pierce -= 1;
          shouldDestroy = false;
        }

        if (projectile.chain > 0) {
          const next = this.pickNearestEnemy(enemy.x, enemy.y, enemy);
          if (next) {
            projectile.chain -= 1;
            projectile.homing = true;
            projectile.target = next;
            projectile.life += 0.4;
            shouldDestroy = false;
          }
        }

        if (shouldDestroy && !projectile.ghost) {
          projectile.dead = true;
        }
      }
    });
      } else {
        if (!this.player.dead && this.circleCollision(projectile, this.player)) {
          projectile.dead = true;
          if (this.player.dashTimer <= 0) {
            this.player.takeDamage(projectile.damage);
          }
        }
      }
    });

    this.powerups.forEach(drop => {
      if (this.circleCollision(drop, this.player)) {
        drop.dead = true;
        this.player.applyPowerup(drop.power, this);
      }
    });

    this.enemies.forEach(enemy => {
      if (!enemy.dead && this.circleCollision(enemy, this.player)) {
        if (this.player.dashTimer <= 0) {
          this.player.takeDamage(enemy.boss ? 24 : 16);
        }
        if (!enemy.boss) {
          enemy.dead = true;
          this.emitParticles(enemy.x, enemy.y, enemy.color);
        }
      }
    });
  }

  circleCollision(a, b) {
    const radiusA = a.radius || 24;
    const radiusB = b.radius || 24;
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return dx * dx + dy * dy <= (radiusA + radiusB) * (radiusA + radiusB);
  }

  emitParticles(x, y, color) {
    for (let i = 0; i < 12; i++) {
      this.particles.push(new Particle(x, y, color));
    }
  }

  handleEnemyDestroyed(enemy) {
    this.player.addScore(enemy.value);
    const majorDropChance = 0.15 + this.extraPowerupChance;
    if (Math.random() < majorDropChance) {
      const power = pick(POWERUPS.filter(p => p.id !== "bassdrop"));
      this.powerups.push(new PowerUpDrop(power, enemy.x, enemy.y));
    }
    const bassChance = 0.05 + this.extraPowerupChance * 0.5;
    if (Math.random() < bassChance) {
      const power = POWERUPS.find(p => p.id === "bassdrop");
      this.powerups.push(new PowerUpDrop(power, enemy.x, enemy.y));
    }
  }

  advanceNote() {
    this.noteCursor = (this.noteCursor + 1) % NOTES.length;
  }

  screenClear() {
    this.enemies.forEach(enemy => {
      if (!enemy.boss) {
        enemy.hit(enemy.hp, this);
      } else {
        enemy.hit(enemy.hp * 0.15, this);
      }
    });
    this.projectiles.forEach(p => {
      if (!p.friendly) {
        p.dead = true;
      }
    });
    playNote(98, 0.6, "triangle");
  }

  superSolo(player) {
    this.screenClear();
    this.player.addScore(1000);
    player.chargeResonance(25);
    playNote(880, 0.8, "square");
  }

  resonanceBurst(companion) {
    this.enemies.forEach(enemy => {
      const dist = Math.hypot(enemy.x - companion.x, enemy.y - companion.y);
      if (dist < 260) {
        enemy.hit(65, this);
      }
    });
    playNote(392, 0.4, "sine");
  }

  finishStage() {
    this.running = false;
    const cleared = !this.player.dead;
    const rewards = cleared ? this.mode.rewards : { coin: Math.floor(this.mode.rewards.coin * 0.3), diamond: 0, sheet: 0 };
    applyRewards(rewards);
    this.summary = {
      cleared,
      score: this.player.score,
      combo: this.player.combo,
      time: Math.min(this.elapsed, this.stageDuration),
      rewards,
      ghostScore: this.mode.id === "pvp" ? this.targetScore : null,
      ghostBeaten: this.mode.id === "pvp" ? this.player.score >= (this.targetScore || 0) : null,
      modifierLabel: this.activeModifier ? this.activeModifier.label : null,
      modifierDescription: this.activeModifier ? this.activeModifier.description : null,
      bossName: this.currentBoss
    };
    showSummary(this.summary);
  }
}

const game = new Game();
let lastTime = performance.now();

function gameLoop(timestamp) {
  const dt = Math.min(0.033, (timestamp - lastTime) / 1000);
  lastTime = timestamp;
  if (game.running) {
    game.update(dt);
  }
  game.draw();
  updateHud();
  requestAnimationFrame(gameLoop);
}

function updateHud() {
  if (!game.player) return;
  const hpRatio = game.player.hp / game.player.maxHp;
  const skillRatio = game.player.skill / game.player.skillMax;
  const resonanceRatio = game.player.resonance / game.player.resonanceMax;
  if (!hpBar.dataset.setup) {
    hpBar.dataset.setup = "1";
    const hpFill = document.createElement("div");
    hpFill.className = "bar-fill hp";
    hpBar.appendChild(hpFill);
    const skillFill = document.createElement("div");
    skillFill.className = "bar-fill skill";
    skillBar.appendChild(skillFill);
    const resFill = document.createElement("div");
    resFill.className = "bar-fill res";
    resonanceBar.appendChild(resFill);
  }
  const hpFill = hpBar.querySelector(".bar-fill.hp");
  const skillFill = skillBar.querySelector(".bar-fill.skill");
  const resFill = resonanceBar.querySelector(".bar-fill.res");
  if (hpFill) {
    hpFill.style.width = `${hpRatio * 100}%`;
    hpFill.style.background = hpRatio < 0.45 ? "linear-gradient(90deg,#ff4f81,#ff9f68)" : "linear-gradient(90deg,#3dffb1,#9af7ff)";
  }
  if (skillFill) {
    skillFill.style.width = `${skillRatio * 100}%`;
    skillFill.style.background = game.player.superReady ? "linear-gradient(90deg,#ffd36c,#ff9f68)" : "linear-gradient(90deg,#6c5cff,#9af7ff)";
  }
  if (resFill) {
    resFill.style.width = `${resonanceRatio * 100}%`;
    resFill.style.background = "linear-gradient(90deg,#6c5cff,#ff9f68)";
  }

  scoreLabel.textContent = `Score: ${game.player.score.toLocaleString()}`;
  comboLabel.textContent = `Combo: ${Math.floor(game.player.combo)}`;
}

function populateSelect(select, list) {
  select.innerHTML = "";
  list.forEach(item => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.name;
    select.appendChild(option);
  });
}

function updateLoadoutDescription() {
  const instrument = INSTRUMENTS.find(i => i.id === instrumentSelect.value);
  const companion = COMPANIONS.find(c => c.id === companionSelect.value);
  const mode = MODES.find(m => m.id === modeSelect.value);
  const lines = [];
  let unlockTarget = null;
  if (instrument) {
    lines.push(`<strong>${instrument.name}</strong>: ${instrument.description}`);
    lines.push(`Super: ${instrument.super}`);
    if (!isInstrumentUnlocked(instrument.id)) {
      const cost = instrument.unlock || { coin: 0, diamond: 0, sheet: 0 };
      lines.push(`<span class="locked">Locked · Requires Coin ${cost.coin}, Diamond ${cost.diamond}, Sheet ${cost.sheet}</span>`);
      unlockTarget = { type: "instrument", id: instrument.id, label: instrument.name };
    }
  }
  if (companion) {
    lines.push(`<strong>${companion.name}</strong>: ${companion.description}`);
    lines.push(`Passive: ${companion.passive}`);
    lines.push(`Ultimate: ${companion.ultimate}`);
    if (!isCompanionUnlocked(companion.id)) {
      const cost = companion.unlock || { coin: 0, diamond: 0, sheet: 0 };
      lines.push(`<span class="locked">Locked · Requires Coin ${cost.coin}, Diamond ${cost.diamond}, Sheet ${cost.sheet}</span>`);
      if (!unlockTarget) {
        unlockTarget = { type: "companion", id: companion.id, label: companion.name };
      }
    }
  }
  if (mode) {
    lines.push(`<strong>${mode.name}</strong>: ${mode.description}`);
    lines.push(`Rewards → Coin ${mode.rewards.coin}, Diamond ${mode.rewards.diamond}, Sheet ${mode.rewards.sheet}`);
  }
  const canStart = refreshStartState();
  if (unlockTarget && unlockButton) {
    unlockButton.textContent = `Unlock ${unlockTarget.label}`;
    unlockButton.dataset.targetType = unlockTarget.type;
    unlockButton.dataset.targetId = unlockTarget.id;
    unlockButton.classList.remove("hidden");
  } else if (unlockButton) {
    unlockButton.classList.add("hidden");
    delete unlockButton.dataset.targetType;
    delete unlockButton.dataset.targetId;
  }
  if (!lines.length) {
    lines.push("Select a mode and instrument to begin your setlist.");
  }
  loadoutDescription.innerHTML = lines.join("<br>");
}

refreshInstrumentSelect();
refreshCompanionSelect();
populateSelect(modeSelect, MODES);
updateInventoryUI();
updateLoadoutDescription();

instrumentSelect.addEventListener("change", updateLoadoutDescription);
companionSelect.addEventListener("change", updateLoadoutDescription);
modeSelect.addEventListener("change", updateLoadoutDescription);

startButton.addEventListener("click", () => {
  if (!refreshStartState()) {
    showNotice("Unlock loadout first", "warn");
    return;
  }
  const companionId = companionSelect.value === "none" ? null : companionSelect.value;
  menuOverlay.classList.add("hidden");
  summaryOverlay.classList.add("hidden");
  if (menuNotice) {
    menuNotice.classList.add("hidden");
  }
  game.start(instrumentSelect.value, companionId, modeSelect.value);
});

if (unlockButton) {
  unlockButton.addEventListener("click", () => {
    const type = unlockButton.dataset.targetType;
    const id = unlockButton.dataset.targetId;
    if (!type || !id) return;
    if (type === "instrument") {
      attemptUnlockInstrument(id);
    } else if (type === "companion") {
      attemptUnlockCompanion(id);
    }
  });
}

continueButton.addEventListener("click", () => {
  summaryOverlay.classList.add("hidden");
  menuOverlay.classList.remove("hidden");
  if (menuNotice) {
    menuNotice.classList.add("hidden");
  }
  refreshInstrumentSelect();
  refreshCompanionSelect();
  updateLoadoutDescription();
});

function showSummary(summary) {
  summaryOverlay.classList.remove("hidden");
  summaryTitle.textContent = summary.cleared ? "Stage Cleared" : "Stage Failed";
  let html = `Score: ${summary.score.toLocaleString()}<br>` +
    `Best Combo: ${summary.combo}<br>` +
    `Time: ${summary.time.toFixed(1)}s`;
  if (summary.bossName) {
    html += `<br>Boss: ${summary.bossName}`;
  }
  if (summary.ghostScore) {
    html += `<br>Ghost Score: ${summary.ghostScore.toLocaleString()}`;
    html += `<br>${summary.ghostBeaten ? "PvP Victory" : "PvP Defeat"}`;
  }
  if (summary.modifierLabel) {
    html += `<br>Daily Modifier: ${summary.modifierLabel}`;
    if (summary.modifierDescription) {
      html += `<br><span class="summary-note">${summary.modifierDescription}</span>`;
    }
  }
  html += `<br>Rewards → Coin ${summary.rewards.coin}, Diamond ${summary.rewards.diamond}, Sheet ${summary.rewards.sheet}`;
  summaryStats.innerHTML = html;
}

canvas.addEventListener("pointerdown", pointerStart);
canvas.addEventListener("pointermove", pointerMove);
canvas.addEventListener("pointerup", pointerEnd);
canvas.addEventListener("pointercancel", pointerEnd);
canvas.addEventListener("pointerleave", pointerEnd);

let swipeBuffer = [];

function pointerStart(event) {
  canvas.setPointerCapture(event.pointerId);
  if (!game.player) return;
  const now = performance.now();
  if (now - game.lastTap < 300 && game.player.superReady) {
    game.player.triggerSuper(game);
  }
  game.lastTap = now;
  game.player.pointerId = event.pointerId;
  const rect = canvas.getBoundingClientRect();
  const x = (event.clientX - rect.left) * (canvas.width / rect.width);
  const y = (event.clientY - rect.top) * (canvas.height / rect.height);
  game.player.moveTo(x, y);
  game.lastPointerX = x;
  swipeBuffer = [{ time: now, x }];
}

function pointerMove(event) {
  if (!game.player || game.player.pointerId !== event.pointerId) return;
  const rect = canvas.getBoundingClientRect();
  const x = (event.clientX - rect.left) * (canvas.width / rect.width);
  const y = (event.clientY - rect.top) * (canvas.height / rect.height);
  game.player.moveTo(x, y);

  const now = performance.now();
  swipeBuffer.push({ time: now, x });
  swipeBuffer = swipeBuffer.filter(entry => now - entry.time < 160);
  if (swipeBuffer.length >= 2) {
    const delta = x - swipeBuffer[0].x;
    if (Math.abs(delta) > 120 && game.player.triggerDash()) {
      game.player.moveTo(game.player.x + Math.sign(delta) * 160, game.player.y);
    }
  }
}

function pointerEnd(event) {
  if (!game.player || game.player.pointerId !== event.pointerId) return;
  canvas.releasePointerCapture(event.pointerId);
  game.player.pointerId = null;
}

window.addEventListener("keydown", event => {
  if (!game.player) return;
  if (event.code === "Space") {
    game.player.triggerSuper(game);
  }
  if (event.code === "KeyR" && game.player.companion) {
    game.player.companion.triggerUltimate(game);
  }
});

requestAnimationFrame(gameLoop);

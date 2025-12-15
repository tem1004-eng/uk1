import { ChordData } from './types';

export const ROOTS = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'Bb'];
export const SUFFIXES = ['Major', 'Minor', '7', 'm7', 'maj7', 'sus4', 'dim', 'aug', '2', '6', '9', '11', 'High', 'Easy'];

// Ukulele Standard Tuning: G4, C4, E4, A4
// positions: [G, C, E, A]. -1 = x (mute)
export const CHORD_DB: Record<string, ChordData> = {
  // === C ===
  'C-Major': { key: 'C', suffix: 'Major', positions: [0, 0, 0, 3], fingers: [0, 0, 0, 3] },
  'C-Minor': { key: 'C', suffix: 'Minor', positions: [0, 3, 3, 3], fingers: [0, 1, 1, 1], barre: { fret: 3, fromString: 3, toString: 1 } },
  'C-7': { key: 'C', suffix: '7', positions: [0, 0, 0, 1], fingers: [0, 0, 0, 1] },
  'C-m7': { key: 'C', suffix: 'm7', positions: [3, 3, 3, 3], fingers: [1, 1, 1, 1], barre: { fret: 3, fromString: 4, toString: 1 } },
  'C-maj7': { key: 'C', suffix: 'maj7', positions: [0, 0, 0, 2], fingers: [0, 0, 0, 2] },
  'C-sus4': { key: 'C', suffix: 'sus4', positions: [0, 0, 1, 3], fingers: [0, 0, 1, 3] },
  'C-dim': { key: 'C', suffix: 'dim', positions: [2, 3, 2, 3], fingers: [1, 3, 2, 4] },
  'C-aug': { key: 'C', suffix: 'aug', positions: [1, 0, 0, 3], fingers: [1, 0, 0, 4] },
  'C-2': { key: 'C', suffix: '2', positions: [0, 2, 3, 3], fingers: [0, 1, 2, 3] }, // Csus2 (C-D-G-C) or 0003 is C add2? Standard Csus2: 0233
  'C-6': { key: 'C', suffix: '6', positions: [0, 0, 0, 0], fingers: [0, 0, 0, 0] }, // Am7 same
  'C-9': { key: 'C', suffix: '9', positions: [0, 2, 0, 1], fingers: [0, 2, 0, 1] },
  'C-11': { key: 'C', suffix: '11', positions: [0, 0, 1, 1], fingers: [0, 0, 1, 1] },
  'C-High': { key: 'C', suffix: 'High', positions: [5, 4, 3, 3], fingers: [3, 2, 1, 1], barre: { fret: 3, fromString: 2, toString: 1 } },
  'C-Easy': { key: 'C', suffix: 'Easy', positions: [0, 0, 0, 3], fingers: [0, 0, 0, 3] },

  // === C# (Db) ===
  'C#-Major': { key: 'C#', suffix: 'Major', positions: [1, 1, 1, 4], fingers: [1, 1, 1, 4], barre: { fret: 1, fromString: 4, toString: 2 } },
  'C#-Minor': { key: 'C#', suffix: 'Minor', positions: [1, 4, 4, 4], fingers: [1, 3, 3, 3], barre: { fret: 4, fromString: 3, toString: 1 } }, // or 6444
  'C#-7': { key: 'C#', suffix: '7', positions: [1, 1, 1, 2], fingers: [1, 1, 1, 2], barre: { fret: 1, fromString: 4, toString: 2 } },
  'C#-m7': { key: 'C#', suffix: 'm7', positions: [4, 4, 4, 4], fingers: [1, 1, 1, 1], barre: { fret: 4, fromString: 4, toString: 1 } },
  'C#-Easy': { key: 'C#', suffix: 'Easy', positions: [1, 1, 1, 4], fingers: [1, 1, 1, 4] },

  // === D ===
  'D-Major': { key: 'D', suffix: 'Major', positions: [2, 2, 2, 0], fingers: [1, 2, 3, 0] },
  'D-Minor': { key: 'D', suffix: 'Minor', positions: [2, 2, 1, 0], fingers: [2, 3, 1, 0] },
  'D-7': { key: 'D', suffix: '7', positions: [2, 2, 2, 3], fingers: [1, 1, 1, 2], barre: { fret: 2, fromString: 4, toString: 2 } }, // or 2020
  'D-m7': { key: 'D', suffix: 'm7', positions: [2, 2, 1, 3], fingers: [2, 3, 1, 4] },
  'D-maj7': { key: 'D', suffix: 'maj7', positions: [2, 2, 2, 4], fingers: [1, 1, 1, 3], barre: { fret: 2, fromString: 4, toString: 2 } },
  'D-sus4': { key: 'D', suffix: 'sus4', positions: [0, 2, 3, 0], fingers: [0, 1, 2, 0] },
  'D-dim': { key: 'D', suffix: 'dim', positions: [1, 2, 1, 2], fingers: [1, 3, 2, 4] },
  'D-aug': { key: 'D', suffix: 'aug', positions: [3, 2, 2, 1], fingers: [3, 2, 2, 1] },
  'D-2': { key: 'D', suffix: '2', positions: [2, 2, 0, 0], fingers: [1, 2, 0, 0] },
  'D-6': { key: 'D', suffix: '6', positions: [2, 2, 2, 2], fingers: [1, 1, 1, 1], barre: { fret: 2, fromString: 4, toString: 1 } },
  'D-9': { key: 'D', suffix: '9', positions: [2, 4, 2, 3], fingers: [1, 3, 1, 2], barre: { fret: 2, fromString: 4, toString: 1 } },
  'D-11': { key: 'D', suffix: '11', positions: [0, 0, 0, 0], fingers: [0, 0, 0, 0] }, // C/D
  'D-High': { key: 'D', suffix: 'High', positions: [7, 6, 5, 5], fingers: [3, 2, 1, 1], barre: { fret: 5, fromString: 2, toString: 1 } },
  'D-Easy': { key: 'D', suffix: 'Easy', positions: [2, 2, 2, 0], fingers: [1, 2, 3, 0] },

  // === D# (Eb) ===
  'D#-Major': { key: 'D#', suffix: 'Major', positions: [0, 3, 3, 1], fingers: [0, 2, 3, 1] }, // or 3336
  'D#-Minor': { key: 'D#', suffix: 'Minor', positions: [3, 3, 2, 1], fingers: [3, 4, 2, 1] },
  'D#-7': { key: 'D#', suffix: '7', positions: [3, 3, 3, 4], fingers: [1, 1, 1, 2], barre: { fret: 3, fromString: 4, toString: 2 } },
  'D#-Easy': { key: 'D#', suffix: 'Easy', positions: [0, 3, 3, 1], fingers: [0, 2, 3, 1] },

  // === E ===
  // Updated E-Major to 4442 (Standard "D shape shifted up").
  // This uses the 2nd fret on the A string, and 4th fret on others.
  'E-Major': { key: 'E', suffix: 'Major', positions: [4, 4, 4, 2], fingers: [2, 3, 4, 1] }, 
  'E-Minor': { key: 'E', suffix: 'Minor', positions: [0, 4, 3, 2], fingers: [0, 3, 2, 1] },
  'E-7': { key: 'E', suffix: '7', positions: [1, 2, 0, 2], fingers: [1, 2, 0, 3] },
  'E-m7': { key: 'E', suffix: 'm7', positions: [0, 2, 0, 2], fingers: [0, 1, 0, 2] },
  'E-maj7': { key: 'E', suffix: 'maj7', positions: [1, 3, 0, 2], fingers: [1, 3, 0, 2] },
  'E-sus4': { key: 'E', suffix: 'sus4', positions: [2, 4, 0, 2], fingers: [1, 4, 0, 2] }, // or 4452
  'E-dim': { key: 'E', suffix: 'dim', positions: [0, 1, 0, 1], fingers: [0, 1, 0, 2] },
  'E-aug': { key: 'E', suffix: 'aug', positions: [1, 0, 0, 3], fingers: [1, 0, 0, 4] },
  'E-2': { key: 'E', suffix: '2', positions: [4, 4, 2, 2], fingers: [3, 4, 1, 1] },
  'E-6': { key: 'E', suffix: '6', positions: [1, 1, 0, 2], fingers: [1, 2, 0, 3] }, // C#m7
  'E-9': { key: 'E', suffix: '9', positions: [1, 2, 2, 2], fingers: [1, 2, 2, 2] },
  'E-11': { key: 'E', suffix: '11', positions: [2, 2, 0, 0], fingers: [1, 2, 0, 0] },
  'E-High': { key: 'E', suffix: 'High', positions: [4, 4, 4, 7], fingers: [1, 1, 1, 4], barre: { fret: 4, fromString: 4, toString: 2 } },
  'E-Easy': { key: 'E', suffix: 'Easy', positions: [1, 4, 0, 2], fingers: [1, 4, 0, 2] },

  // === F ===
  'F-Major': { key: 'F', suffix: 'Major', positions: [2, 0, 1, 0], fingers: [2, 0, 1, 0] },
  'F-Minor': { key: 'F', suffix: 'Minor', positions: [1, 0, 1, 3], fingers: [1, 0, 2, 4] },
  'F-7': { key: 'F', suffix: '7', positions: [2, 3, 1, 0], fingers: [2, 3, 1, 0] }, // or 2313
  'F-maj7': { key: 'F', suffix: 'maj7', positions: [2, 4, 1, 3], fingers: [2, 4, 1, 3] }, // or 5500
  'F-sus4': { key: 'F', suffix: 'sus4', positions: [3, 0, 1, 1], fingers: [3, 0, 1, 1] },
  'F-dim': { key: 'F', suffix: 'dim', positions: [1, 2, 1, 2], fingers: [1, 3, 2, 4] },
  'F-aug': { key: 'F', suffix: 'aug', positions: [2, 1, 1, 0], fingers: [2, 1, 1, 0] },
  'F-2': { key: 'F', suffix: '2', positions: [0, 0, 1, 3], fingers: [0, 0, 1, 3] }, // Fsus2
  'F-6': { key: 'F', suffix: '6', positions: [2, 2, 1, 3], fingers: [2, 1, 1, 3] }, // Dm7
  'F-9': { key: 'F', suffix: '9', positions: [2, 3, 1, 3], fingers: [2, 3, 1, 4] },
  'F-11': { key: 'F', suffix: '11', positions: [3, 3, 1, 1], fingers: [3, 4, 1, 1] },
  'F-High': { key: 'F', suffix: 'High', positions: [5, 5, 5, 8], fingers: [1, 1, 1, 4], barre: { fret: 5, fromString: 4, toString: 2 } },
  'F-Easy': { key: 'F', suffix: 'Easy', positions: [2, 0, 1, 0], fingers: [2, 0, 1, 0] },

  // === F# (Gb) ===
  'F#-Major': { key: 'F#', suffix: 'Major', positions: [3, 1, 2, 1], fingers: [3, 1, 2, 1] },
  'F#-Minor': { key: 'F#', suffix: 'Minor', positions: [2, 1, 2, 0], fingers: [2, 1, 3, 0] },
  'F#-7': { key: 'F#', suffix: '7', positions: [3, 4, 2, 1], fingers: [3, 4, 2, 1] },
  'F#-Easy': { key: 'F#', suffix: 'Easy', positions: [3, 1, 2, 1], fingers: [3, 1, 2, 1] },

  // === G ===
  'G-Major': { key: 'G', suffix: 'Major', positions: [0, 2, 3, 2], fingers: [0, 1, 3, 2] },
  'G-Minor': { key: 'G', suffix: 'Minor', positions: [0, 2, 3, 1], fingers: [0, 2, 3, 1] },
  'G-7': { key: 'G', suffix: '7', positions: [0, 2, 1, 2], fingers: [0, 2, 1, 3] },
  'G-m7': { key: 'G', suffix: 'm7', positions: [0, 2, 1, 1], fingers: [0, 2, 1, 1] },
  'G-maj7': { key: 'G', suffix: 'maj7', positions: [0, 2, 2, 2], fingers: [0, 1, 1, 1] },
  'G-sus4': { key: 'G', suffix: 'sus4', positions: [0, 2, 3, 3], fingers: [0, 1, 2, 3] },
  'G-dim': { key: 'G', suffix: 'dim', positions: [0, 1, 0, 1], fingers: [0, 1, 0, 2] },
  'G-aug': { key: 'G', suffix: 'aug', positions: [0, 3, 3, 2], fingers: [0, 2, 3, 1] },
  'G-2': { key: 'G', suffix: '2', positions: [0, 2, 3, 0], fingers: [0, 2, 3, 0] },
  'G-6': { key: 'G', suffix: '6', positions: [0, 2, 0, 2], fingers: [0, 1, 0, 2] },
  'G-9': { key: 'G', suffix: '9', positions: [2, 2, 1, 2], fingers: [2, 3, 1, 4] },
  'G-11': { key: 'G', suffix: '11', positions: [0, 2, 1, 3], fingers: [0, 2, 1, 3] }, // F/G
  'G-High': { key: 'G', suffix: 'High', positions: [4, 2, 3, 2], fingers: [3, 1, 2, 1], barre: { fret: 2, fromString: 3, toString: 1 } },
  'G-Easy': { key: 'G', suffix: 'Easy', positions: [0, 2, 3, 2], fingers: [0, 1, 3, 2] },

  // === G# (Ab) ===
  'G#-Major': { key: 'G#', suffix: 'Major', positions: [5, 3, 4, 3], fingers: [3, 1, 2, 1], barre: { fret: 3, fromString: 3, toString: 1 } }, // or 1343? 5343 is standard movable G
  'G#-Minor': { key: 'G#', suffix: 'Minor', positions: [4, 3, 4, 2], fingers: [3, 2, 4, 1] },
  'G#-7': { key: 'G#', suffix: '7', positions: [1, 3, 2, 3], fingers: [1, 3, 2, 4] },
  'G#-Easy': { key: 'G#', suffix: 'Easy', positions: [5, 3, 4, 3], fingers: [3, 1, 2, 1] },

  // === A ===
  'A-Major': { key: 'A', suffix: 'Major', positions: [2, 1, 0, 0], fingers: [2, 1, 0, 0] },
  'A-Minor': { key: 'A', suffix: 'Minor', positions: [2, 0, 0, 0], fingers: [2, 0, 0, 0] },
  'A-7': { key: 'A', suffix: '7', positions: [0, 1, 0, 0], fingers: [0, 1, 0, 0] },
  'A-m7': { key: 'A', suffix: 'm7', positions: [0, 0, 0, 0], fingers: [0, 0, 0, 0] }, // All open!
  'A-maj7': { key: 'A', suffix: 'maj7', positions: [1, 1, 0, 0], fingers: [1, 2, 0, 0] },
  'A-sus4': { key: 'A', suffix: 'sus4', positions: [2, 2, 0, 0], fingers: [2, 3, 0, 0] },
  'A-dim': { key: 'A', suffix: 'dim', positions: [2, 3, 2, 3], fingers: [1, 3, 2, 4] },
  'A-aug': { key: 'A', suffix: 'aug', positions: [2, 1, 1, 0], fingers: [2, 1, 1, 0] }, // Faug is same
  'A-2': { key: 'A', suffix: '2', positions: [2, 1, 0, 0], fingers: [2, 1, 0, 0] }, // Same as A major usually in uke context (add9), or 2452 for true sus2
  'A-6': { key: 'A', suffix: '6', positions: [2, 1, 2, 0], fingers: [2, 1, 3, 0] }, // F#m7
  'A-9': { key: 'A', suffix: '9', positions: [2, 1, 0, 2], fingers: [2, 1, 0, 3] },
  'A-11': { key: 'A', suffix: '11', positions: [0, 2, 0, 0], fingers: [0, 1, 0, 0] },
  'A-High': { key: 'A', suffix: 'High', positions: [6, 4, 5, 4], fingers: [3, 1, 2, 1], barre: { fret: 4, fromString: 3, toString: 1 } },
  'A-Easy': { key: 'A', suffix: 'Easy', positions: [2, 1, 0, 0], fingers: [2, 1, 0, 0] },

  // === A# (Bb) ===
  'A#-Major': { key: 'A#', suffix: 'Major', positions: [3, 2, 1, 1], fingers: [3, 2, 1, 1], barre: { fret: 1, fromString: 2, toString: 1 } },
  'A#-Minor': { key: 'A#', suffix: 'Minor', positions: [3, 1, 1, 1], fingers: [3, 1, 1, 1], barre: { fret: 1, fromString: 3, toString: 1 } },
  'A#-7': { key: 'A#', suffix: '7', positions: [1, 2, 1, 1], fingers: [1, 2, 1, 1], barre: { fret: 1, fromString: 2, toString: 1 } },
  'A#-Easy': { key: 'A#', suffix: 'Easy', positions: [3, 2, 1, 1], fingers: [3, 2, 1, 1] },

  // === B ===
  'B-Major': { key: 'B', suffix: 'Major', positions: [4, 3, 2, 2], fingers: [3, 2, 1, 1], barre: { fret: 2, fromString: 2, toString: 1 } },
  'B-Minor': { key: 'B', suffix: 'Minor', positions: [4, 2, 2, 2], fingers: [3, 1, 1, 1], barre: { fret: 2, fromString: 3, toString: 1 } },
  'B-7': { key: 'B', suffix: '7', positions: [2, 3, 2, 2], fingers: [1, 2, 1, 1], barre: { fret: 2, fromString: 4, toString: 1 } }, // or 4320
  'B-sus4': { key: 'B', suffix: 'sus4', positions: [4, 4, 2, 2], fingers: [3, 4, 1, 1] },
  'B-dim': { key: 'B', suffix: 'dim', positions: [1, 2, 1, 2], fingers: [1, 3, 2, 4] },
  'B-aug': { key: 'B', suffix: 'aug', positions: [0, 3, 3, 2], fingers: [0, 2, 3, 1] }, // Same as Gaug
  'B-2': { key: 'B', suffix: '2', positions: [4, 3, 2, 2], fingers: [3, 2, 1, 1] }, // similar to major
  'B-6': { key: 'B', suffix: '6', positions: [1, 3, 2, 2], fingers: [1, 3, 2, 2] },
  'B-9': { key: 'B', suffix: '9', positions: [2, 3, 2, 4], fingers: [1, 2, 1, 4] },
  'B-11': { key: 'B', suffix: '11', positions: [2, 4, 2, 2], fingers: [1, 3, 1, 1] },
  'B-High': { key: 'B', suffix: 'High', positions: [8, 6, 7, 6], fingers: [3, 1, 2, 1], barre: { fret: 6, fromString: 3, toString: 1 } },
  'B-Easy': { key: 'B', suffix: 'Easy', positions: [4, 3, 2, 2], fingers: [3, 2, 1, 1] }, // Standard is the way

  // === Bb (Same as A#) ===
  'Bb-Major': { key: 'Bb', suffix: 'Major', positions: [3, 2, 1, 1], fingers: [3, 2, 1, 1], barre: { fret: 1, fromString: 2, toString: 1 } },
  'Bb-Minor': { key: 'Bb', suffix: 'Minor', positions: [3, 1, 1, 1], fingers: [3, 1, 1, 1], barre: { fret: 1, fromString: 3, toString: 1 } },
  'Bb-7': { key: 'Bb', suffix: '7', positions: [1, 2, 1, 1], fingers: [1, 2, 1, 1], barre: { fret: 1, fromString: 2, toString: 1 } },
  'Bb-Easy': { key: 'Bb', suffix: 'Easy', positions: [3, 2, 1, 1], fingers: [3, 2, 1, 1] },
};

// Ukulele Standard High-G Tuning Frequencies
export const STRING_FREQUENCIES = [
  392.00, // G4 (High)
  261.63, // C4
  329.63, // E4
  440.00  // A4
];
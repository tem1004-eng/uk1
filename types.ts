export interface ChordData {
  key: string;
  suffix: string;
  positions: (number | -1)[]; // -1 for muted (x), 0 for open, 1+ for frets. Order: E A D G B e
  fingers: (number | 0)[]; // 0 for no finger, 1-4 for index to pinky
  barre?: {
    fret: number;
    fromString: number; // 6 (Low E) to 1 (High e)
    toString: number;
  };
}

export enum Tab {
  CHART = 'CHART',
  AI_ASSISTANT = 'AI_ASSISTANT'
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}
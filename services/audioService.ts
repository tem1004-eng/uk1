import { STRING_FREQUENCIES } from '../constants';

class AudioService {
  private audioContext: AudioContext | null = null;
  private masterGain: GainNode | null = null;

  private init() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      this.masterGain = this.audioContext.createGain();
      this.masterGain.gain.value = 0.3; // Master volume
      this.masterGain.connect(this.audioContext.destination);
    }
    if (this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
  }

  // Calculate frequency based on open string freq and fret number
  // f = f0 * 2^(n/12)
  private getFrequency(openFreq: number, fret: number): number {
    return openFreq * Math.pow(2, fret / 12);
  }

  public strumChord(positions: (number | -1)[]) {
    this.init();
    if (!this.audioContext || !this.masterGain) return;

    const now = this.audioContext.currentTime;
    
    // Strum delay (in seconds) between strings to simulate realistic picking
    const strumSpeed = 0.05;

    positions.forEach((fret, stringIndex) => {
      // If fret is -1, it's muted, don't play
      if (fret === -1) return;

      const oscillator = this.audioContext!.createOscillator();
      const gainNode = this.audioContext!.createGain();

      // Use a triangle wave for a somewhat string-like sound (or sawtooth with filter)
      oscillator.type = 'triangle';
      
      const freq = this.getFrequency(STRING_FREQUENCIES[stringIndex], fret);
      oscillator.frequency.value = freq;

      // Envelope for pluck sound
      // Attack
      gainNode.gain.setValueAtTime(0, now + (stringIndex * strumSpeed));
      gainNode.gain.linearRampToValueAtTime(1, now + (stringIndex * strumSpeed) + 0.01);
      // Decay/Sustain
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + (stringIndex * strumSpeed) + 2.0);

      oscillator.connect(gainNode);
      gainNode.connect(this.masterGain!);

      oscillator.start(now + (stringIndex * strumSpeed));
      oscillator.stop(now + (stringIndex * strumSpeed) + 2.5); // Stop after 2.5s
    });
  }
}

export const audioService = new AudioService();
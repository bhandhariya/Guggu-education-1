export const playAudio = (text: string, lang: 'en-US' | 'hi-IN' = 'en-US') => {
  if (!window.speechSynthesis) return;

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.9; // Slightly slower for kids
  utterance.pitch = 1.2; // Slightly higher pitch for friendliness

  // Try to find a good voice
  const voices = window.speechSynthesis.getVoices();
  const preferredVoice = voices.find(v => v.lang.startsWith(lang.split('-')[0]) && (v.name.includes('Google') || v.name.includes('Female')));
  
  if (preferredVoice) {
    utterance.voice = preferredVoice;
  }

  window.speechSynthesis.speak(utterance);
};

export const playCorrectSound = () => {
  // A simple beep or we can just fall back to speech if we don't have audio files.
  // Using speech for now
  playAudio('Great job!');
};

export const playIncorrectSound = () => {
  playAudio('Oops! Try again.');
};

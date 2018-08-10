function theBeatlesPlay(musicians, instruments) {
  musiciansAndInstruments = [];
  for (i = 0; i < musicians.length; i++) {
    musiciansAndInstruments.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return musiciansAndInstruments;
}
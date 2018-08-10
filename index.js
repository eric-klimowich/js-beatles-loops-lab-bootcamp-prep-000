function theBeatlesPlay(musicians, instruments) {
  musiciansAndInstruments = [];
  for (i = 0; i < musicians.length; i++) {
    for (j = 0; j < instruments; j++) {
      musiciansAndInstruments.push(musicians[i] + ' plays ' + instruments[j]);
    }
  }
  return musiciansAndInstruments;
}
$.datepicker.regional['sv'] = {
    closeText: 'Stäng',
      prevText: '< Föregående',
      nextText: 'Nästa >',
      currentText: 'Nu',
      monthNames: ['Januari','Februari','Mars','April','Maj','Juni','Juli','Augusti','September','Oktober','November','December'],
      monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun','Jul','Aug','Sep','Okt','Nov','Dec'],
      dayNamesShort: ['Sön','Mån','Tis','Ons','Tor','Fre','Lör'],
      dayNames: ['Söndag','Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag'],
      dayNamesMin: ['Sö','Må','Ti','On','To','Fr','Lö'],
      weekHeader: 'Не',
      dateFormat: 'yy-mm-dd',
      firstDay: 1,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: ''
  };
  $.datepicker.setDefaults($.datepicker.regional['sv']);
  
  
  $.timepicker.regional['sv'] = {
      timeOnlyTitle: 'Välj klockslag',
      timeText: 'Tid',
      hourText: 'Timma',
      minuteText: 'Minut',
      secondText: 'Sekund',
      millisecText: 'Millisekund',
      timezoneText: 'Tidszon',
      currentText: 'Nu',
      closeText: 'Stäng',
      timeFormat: 'HH:mm',
      amNames: ['AM', 'A'],
      pmNames: ['PM', 'P'],
      isRTL: false
  };
  $.timepicker.setDefaults($.timepicker.regional['sv']);
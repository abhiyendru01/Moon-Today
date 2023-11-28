document.addEventListener("DOMContentLoaded", function() {
    var currentDate = new Date();
    var moonIllumination = SunCalc.getMoonIllumination(currentDate);
    var phase = getMoonPhase(moonIllumination.phase);
    var illuminationPercentage = (moonIllumination.fraction * 100).toFixed(2);
  
    document.getElementById("moon-phase").innerHTML = "Phase: " + phase;
    document.getElementById("illumination").innerHTML = "Illumination: " + illuminationPercentage + "%";
  
    var moonIcon = getMoonIcon(phase);
    document.getElementById("moon-icon").src = moonIcon;
  
    var nextPhase = getNextMoonPhase(currentDate);
    document.getElementById("next-phase").innerHTML = "Next Phase: " + nextPhase;
  });
  /*made by rahul(https://github.com/abhiyendru01)*/
  function getMoonPhase(phase) {
    if (phase < 0.03 || phase >= 0.97) {
      return "New Moon";
    } else if (phase < 0.23) {
      return "Waxing Crescent";
    } else if (phase < 0.27) {
      return "First Quarter";
    } else if (phase < 0.47) {
      return "Waxing Gibbous";
    } else if (phase < 0.53) {
      return "Full Moon";
    } else if (phase < 0.73) {
      return "Waning Gibbous";
    } else if (phase < 0.77) {
      return "Last Quarter";
    } else {
      return "Waning Crescent";
    }
  }
  
  function getMoonIcon(phase) {
     if (phase === "New Moon") {
      return "new_moon_icon.png";
    } else if (phase === "Full Moon") {
       return "full_moon_icon.png";
     }else if (phase === "Waning Gibbous") {
        return "waning-gibbous.png";
      }
  
    return "placeholder_moon_icon.png";
  }
  function getNextMoonPhase(currentDate) {
    var moonCycles = 29.53; // Average length of lunar phases in days
    var currentTime = currentDate.getTime();
    var nextPhaseTime = currentTime + (moonCycles - (currentTime / (1000 * 60 * 60 * 24) % moonCycles)) * (1000 * 60 * 60 * 24);
    var nextPhaseDate = new Date(nextPhaseTime);
    var nextPhase = getMoonPhase(SunCalc.getMoonIllumination(nextPhaseDate).phase);
    return nextPhase + " on " + nextPhaseDate.toDateString();
  }
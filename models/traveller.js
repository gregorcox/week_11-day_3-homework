const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation);
};

Traveller.prototype.getModesOfTransport = function () {
  return this.journeys.map(journey => journey.transport);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance >= minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let distances = this.journeys.map(journey => journey.distance);
 return distances.reduce((total, journey) => {
    return total + journey;
  });
};

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   const transportTypes = this.journeys.map(journey => journey.transport);
//   const uniqueResults = []
//   for (type of transportTypes){
//     uniqueResults.push(type);
//   }
//   }
// };


module.exports = Traveller;

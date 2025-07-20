const Recommand = (city, airport) => {
  let result = [];
  city.map((val) => {
    if (result.length == 0) {
      val.Airports.map((val2) => {
        const obj = {};
        obj.cityId = val.cityId;
        obj.city = val.name;
        obj.airportId = val2.airportId;
        obj.airport = val2.name;
        result.push(obj);
      });
    } else if (!result.find((e) => e.cityId == val.cityId)) {
      val.Airports.map((val2) => {
        const obj = {};
        obj.cityId = val.cityId;
        obj.city = val.city;
        obj.airportId = val2.airportId;
        obj.airport = val2.name;
        result.push(obj);
      });
    }
  });
  airport.map((val) => {
    if (result.length == 0) {
      const obj = {};

      obj.cityId = val.cityId;
      obj.city = val.City.name;
      obj.airportId = val.airportId;
      obj.airport = val.name;
      result.push(obj);
    } else if (!result.find((e) => e.cityId == val.cityId)) {
      const obj = {};

      obj.cityId = val.cityId;
      obj.city = val.City.name;
      obj.airport = val.name;
      obj.airportId = val.airportId;
      result.push(obj);
    }
  });

  return result;
};


module.exports = { Recommand };

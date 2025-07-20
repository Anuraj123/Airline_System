const express = require("express");

const cityController=require('../../controllers/city-controller')
const airportController=require('../../controllers/airport-controller')
const airlineController=require('../../controllers/airline-controller')
const flightController=require('../../controllers/flight-controller')
const router=express.Router();


router.post("/city",cityController.create);
router.post("/airport",airportController.create);
router.put("/airport",airportController.update);
router.get("/airport/:id",airportController.get);
router.get("/airport",airportController.getAll);

router.post("/airline",airlineController.create);
router.put("/airline",airlineController.update);
router.get("/airline/:pnr",airlineController.getByPK);
router.get("/airline/:refId",airlineController.getByRefId);
router.delete("/airline/:pnr",airlineController.remove)

router.get("/arrival",flightController.searchArrival)
router.get("/departure",flightController.searchDeparture)
router.get("/createFlight",flightController.createFlight)

module.exports=router;


Airline Reservation System


User 

	User will register and login to the site.
	User will search for flights.
	User will book flights.
	User will cancel the flight.
	User will get all booking details after login.
	

Airport

	One airport will belong to one city only
	Many airports can belong to one city
	Airport Id required during flight creation(which will get select when user will select city).
	Array of ID's of airlines for given airport. (work as foreign key for airline primary key).
	We are assuming that these planes are available every day.
		

City

	City will have city name.
	City can have many airports.


Airlines

	Airline will have their PNR.(Primary key)
	Airline name.
	Airline with same name will have same reference id.
	Airplane have cities it can travel. (2 cols from and to)
	Available time from Time.
	Capacity of plane.
	No. of seats booked.
	No. of seats available for booking. 

	

Flight

	
	Need available airline from selected airport.(also PNR)
	Need city name. 
	Need arrival and departure airport Id
	Need available seats from selected airplane/airline.
	Need date of travel.
 	Price will get calculated from timings and no of seats available. 

Booking 

	Book flight from given flight Id.
	We need booking Id as foreign key reference for user. 
	Need user(s) details. 
	Update seats booking details of plane (using airline PNR get from flight table). 
	
	
	



	
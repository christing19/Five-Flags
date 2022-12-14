const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");

app.use(cors());
app.use(express.json());

// GUEST VIEW
app.get("/shop", routes.getShop);
app.get("/restaurant/:id/:att1", routes.getRestaurant);
app.get("/fastfood/:id/:att1", routes.getFastfood);
app.get("/hours/:id", routes.getHours);
app.get("/ticketinfo", routes.getTicketInfo);
app.get("/hotel", routes.getHotel);


// STAFF VIEW
app.get("/staff", routes.getStaff);
app.get("/rides", routes.getRides);
app.get("/parks", routes.getParks);
app.get("/food", routes.getFood);

// complex queries
app.get("/ticketsales", routes.getTicketSales);
app.get("/loyalty", routes.getLoyal);
app.get("/thrillingride", routes.getThrillingRide);
app.get("/relaxingride", routes.getRelaxingRide);
app.get("/averagethrill", routes.getAverageThrill);
app.get("/globalist", routes.getGlobalist);

app.post("/staff", routes.addStaff);
app.post("/rides", routes.addRide);
app.post("/food", routes.addFood);

app.put("/food/:name", routes.updateFood);
app.put("/rides/:parkid/:name", routes.updateRide);

app.delete("/parks/:id", routes.deletePark);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});
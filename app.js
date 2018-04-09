var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Salmon Creek", image: "https://www.nps.gov/zion/planyourvisit/south-campground.htm"},
        {name: "Zions ", image: "https://www.allzion.com/rv_camping/"},
        {name: "Yosemite", image: "https://jameskaiser.com/yosemite-guide/camping-near-yosemite/"},
]
        
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
     res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    res.send("YOU HIT THE POST ROUTE!")
    // get data form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function (){
    console.log("The Campout Server Has Started");
});
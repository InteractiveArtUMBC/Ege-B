// Examples use USGS Earthquake API:
//   https://earthquake.usgs.gov/fdsnws/event/1/#methods
var weather;
function preload() {
  // Get the most recent earthquake in the database
  var url =
   'http://api.openweathermap.org/data/2.5/weather?q=Baltimore&APPID=569330567deac54bf69bba6cc00f4a60';
   //http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22
  weather = loadJSON(url);
}
function setup() {
  createCanvas(600,600);
  console.log(weather);
}
function draw() {
  background('lightGrey');
  // Get the magnitude and name of the earthquake out of the loaded JSON
  var weathertemp = weather.main.temp;
  var weathertemp= Math.floor(Math.trunc((weather.main.temp)*9/5-459.67));
  var cityname = weather.name;
  var windspeed = weather.wind.speed;
  var humidity = weather.main.humidity;
  var X = windspeed * 50;
  //var coord = weather.coord;
  //var pressure = weather.main.pressure;
  //var clouds = weather.clouds.all;
  //var earthquakeName = earthquakes.features[0].properties.place;
  //ellipse(width / 2, height / 2, earthquakeMag * 10, earthquakeMag * 10);
  ellipse(490,50,windspeed*100,windspeed*100);
  

  ellipse(0,20,windspeed*100,windspeed*100);
  ellipse(300,20,windspeed*20,windspeed*20);
  ellipse(100,570,windspeed*20,windspeed*20);




  fill('lightBlue');
  strokeWeight(4);
  stroke('black');
  textSize(60);
  text(cityname, 300, 75);

  fill('lightGreen');
  strokeWeight(3);
  //textAlign(CENTER);
  text('Hows it feelin out?', 0, 290);
  fill('lightBlue');
  textSize(70);
  text(weathertemp,170, 380);
  fill('lightPink');
  
  push();
  textSize(40);
  text('Is it Icky?', 345, 350);
  fill('lightyellow');
  textSize(40);
  text(humidity, 390, 410);
  pop();

 
  
  pop(); 

}


let albums = [
  
  {album: "Let It Be", artist: "The Beatles", year: 1970, genre: "rock", type: "LP"},
  {album: "Car Wheels on a Gravel Road", artist: "Lucinda Williams", year: 1998, genre: "rock", type: "LP"},
  {album: "Hell Hath No Fury", artist: "Clipse", year: 2006, genre: "rap", type: "LP"},
  {album: "The Disintegration Loops", artist: "William Basinski", year: 2002, genre: "experimental", type: "box-set"},
  {album: "John Wesley Harding", artist: "Bob Dylan", year: 1967, genre: "folk", type: "LP"},
  {album: "Disintegration", artist: "The Cure", year: 1989, genre: "rock", type: "LP"},
  {album: `Printer's Devil`, artist: "Ratboys", year: 2020, genre: "rock", type: "LP"},
  {album: `Some Rap Songs`, artist: "Earl Sweatshirt", year: 2019, genre: "rap", type: "LP"},
  {album: "Beyond", artist: "Dinosaur Jr.", year: 2007, genre: "rock", type: "LP"},
  {album: "Zen Arcade", artist: "Hüsker Dü", year: 1984, genre: "rock", type: "double-LP"},
  {album: "Sandinista", artist: "The Clash", year: 1980, genre: "rock", type: "triple-LP"},
  {album: "The Shape of Jazz to Come", artist: "Ornette Coleman", year: 1959, genre: "jazz", type: "LP"},
  {album: "Otis Blue", artist: "Otis Redding", year: 1965, genre: "soul", type: "LP"},
  {album: "Head Hunters", artist: "Herbie Hancock", year: 1973, genre: "jazz", type: "LP"},
  {album: "Happiness Hours", artist: "The Sidekicks", year: 2018, genre: "rock", type: "LP"},
  {album: "Lando", artist: "Kudrow", year: 2009, genre: "rock", type: "EP"},
  {album: "Ambient 1 (Music for Airports", artist: "Brian Eno", year: 1979, genre: "ambient", type: "LP"},
  {album: "Complete Discography", artist: "Minor Threat", year: 1989, genre: "rock", type: "compilation"},
  {album: "Abbey Road", artist: "The Beatles", year: 1969, genre: "rock", type: "LP"},
  {album: "Get Disowned", artist: "Hop Along", year: 2011, genre: "rock", type: "LP"},
  {album: "Tenement", artist: "Tenement", year: 2015, genre: "rock", type: "tape"},
  {album: "Middle Brother", artist: "Middle Brother", year: 2011, genre: "rock", type: "LP"},
  {album: "Laura Stevenson", artist: "Laura Stevenson", year: 2021, genre: "rock", type: "LP"},
  {album: "Third", artist: "Big Star", year: 1975, genre: "rock", type: "LP"},
  {album: "Let It Be", artist: "The Replacements", year: 1984, genre: "rock", type: "LP"},
  {album: "Low", artist: "David Bowie", year: 1977, genre: "rock", type: "LP"},
  {album: "Pretenders", artist: "Pretenders", year: 1980, genre: "rock", type: "LP"},
  {album: "Purple Rain", artist: "Prince", year: 1984, genre: "rock", type: "soundtrack"},
  {album: "Odelay", artist: "Beck", year: 1996, genre: "rock", type: "LP"},
  {album: "AM", artist: "Ovlov", year: 2013, genre: "rock", type: "LP"},
  {album: "Black Sabbath", artist: "Black Sabbath", year: 1970, genre: "rock", type: "LP"},
  {album: `Summertime '06`, artist: "Vince Staples", year: 2015, genre: "rap", type: "double-LP"},
  {album: "Tom Petty", artist: "Full Moon Fever", year: 1989, genre: "rock", type: "LP"},
  {album: "Singles Going Steady", artist: "Buzzcocks", year: 1979, genre: "rock", type: "compilation"},
  {album: "Lucinda Williams", artist: "Lucinda Williams", year: 1989, genre: "country", type: "LP"}

]

let html = "<table border='1|1'>";


for (var i = 0; i < albums.length; i++) {
    html+="<tr>";
    html+="<td>"+albums[i].album+"</td>";
    html+="<td>"+albums[i].artist+"</td>";
    html+="<td>"+albums[i].year+"</td>";
    html+="<td>"+albums[i].genre+"</td>";
    html+="<td>"+albums[i].type+"</td>";
    
    html+="</tr>";

}
html+="</table>";
document.getElementById("box").innerHTML = html;


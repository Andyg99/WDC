function searchHotels() {
  var searchTerm, upper, hotels, rows, cell, i;
  searchTerm = document.getElementById("hotelSearch");
  upper = searchTerm.value.toUpperCase();
  hotels = document.getElementById("resultsTable");
  rows = hotels.getElementsByTagName("tr");
  for (i = 0; i < rows.length; i++) {
    cell = rows[i].getElementsByTagName("td")[1];
    if (cell) {
      if (cell.innerHTML.toUpperCase().indexOf(upper) > -1) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  }
}

var slideIndex = 0;
function showSlides() {

    var i;
    var slides = document.getElementsByClassName("theSlides");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1;}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 8000);
}

var hotel1 = {
  id: "hotel1",
  name: "Mayfair Hotel",
  description: "A high-end hotel in a 19th-century building is a 3-minute walk from Rundle Mall. Chic, polished rooms and suites feature free Wi-Fi and 55-inch flat-screens, plus room service, minibars and rainfall showerheads. Amenities include a refined restaurant/bar, a French cafe and a rooftop cocktail lounge with a terrace.",
  location: "45 King William St Adelaide SA 5000",
  phone: "(08) 8210 8888",
  site: "https://www.mayfairhotel.com.au/",
  roomtypes: ["Superior Queen", "Deluxe Twin Queen", "Deluxe King", "Luxury King", "Mayfair King Suite" ],
  prices: [200, 216, 220, 243, 300],
  guests: [2, 2, 2, 2, 2],
  wifi: true,
  parking: true,
  pool: false,
  gym: true,
  images: ["https://www.mayfairhotel.com.au/images/Mayfair-Hotel-exterior.jpg", "https://www.mayfairhotel.com.au/Mayfair%20HotelHennessyBarLR.jpg", "https://www.mayfairhotel.com.au/images/mayfair-king-suite-bathroom.jpg", "http://adelaidewestend.com.au/wp-content/uploads/2015/02/luxurious-one-bedroom-rooms-adelaide.jpg", "https://www.mayfairhotel.com.au/images/superior-queen-room.jpg"]
};

var hotel2 = {
  id: "hotel2",
  name: "Istay Precint",
  description: "Set in Adelaide's Central Business District, these modern apartments in an industrial-chic building are a 10-minute walk from Adelaide's renowned Central Market. The relaxed, contemporary apartments come with balconies, TVs, and full kitchens with washer/dryers. Wi-Fi is available for a fee. The property has a heated indoor pool and a spa area with a whirlpool bath, a sauna and a steam room. ",
  location: "185 Morphett St Adelaide SA 5000",
  phone: "1300 665 591",
  site: "https://www.oakshotels.com/istay-precinct",
  roomtypes: ["1 Bedroom", "1 Bedroom Sky View", "2 Bedroom", "2 Bedroom Sky View", "Apartment"],
  prices: [300, 316, 320, 343, 400],
  guests: [2, 2, 3, 4, 6],
  wifi: true,
  parking: true,
  pool: true,
  gym: false,
  images: ["http://www.toursa.com.au/wp-content/uploads/place/ATDW_Extra_Large_Landscape__9038462_AQ26_pre_2_bed_sky_view_1602_balcony_out_HR.jpg",	"https://q-ec.bstatic.com/images/hotel/max1280x900/541/54149407.jpg",	"https://r-ec.bstatic.com/images/hotel/max1280x900/541/54149416.jpg",	"https://q-ec.bstatic.com/images/hotel/max1280x900/541/54149209.jpg",	"https://q-ec.bstatic.com/images/hotel/max1280x900/743/74356141.jpg"]
};

var hotel3 = {
  id: "hotel3",
  name: "Majestic Old Lion Apartments",
  description: "This classic redbrick, extended-stay hotel and annex lies a 1-minute walk from the Melbourne Street bus stop. The bright, contemporary apartments feature free Wi-Fi and flat-screen TVs, as well as kitchens, living areas and washer/dryers.The property offers complimentary parking and a landscaped courtyard.",
  location: "9 Jerningham Street North Adelaide, 5006 Adelaide, Australia ",
  phone: "(08) 8334 7799",
  site: "http://www.majestichotels.com.au/",
  roomtypes: ["One Bedroom Apartment", "Two Bedroom Apartment", "Three Bedroom Apartment", "One Bedroom Apartment Annex"],
  prices: [257, 322, 407, 272],
  guests: [2, 4, 6, 2],
  wifi: true,
  parking: true,
  pool: false,
  gym: false,
  images: ["https://q-ec.bstatic.com/images/hotel/max1280x900/100/100962079.jpg", "https://r-ec.bstatic.com/images/hotel/max1280x900/100/100845586.jpg",	"https://r-ec.bstatic.com/images/hotel/max1280x900/100/100844382.jpg",	"https://r-ec.bstatic.com/images/hotel/max1280x900/100/100844216.jpg",	"https://q-ec.bstatic.com/images/hotel/max1280x900/103/103698584.jpg"]
};

var hotel4 = {
  id: "hotel4",
  name: "The Watson",
  description: "This upscale hotel has sleek rooms and suites with trendy decor and modern art pieces include free Wi-Fi and flat-screen TVs, plus dining areas and sofas. The hotel features a laid-back restaurant, a bar and a coffee shop, plus a fitness room and an outdoor pool. Other amenities include a collection of original art, as well as car, scooter and bike rentals (fees may apply). Parking is free.",
  location: "33 Warwick St, Walkerville SA 5081",
  phone: "(08) 7087 9666",
  site: "http://www.artserieshotels.com.au/watson/",
  roomtypes: ["King Studio", "Deluxe King Studio", "One Bedroom Balcony Suite", "Deluxe Twin Room", "Two Bedroom Apartment"],
  prices: [159, 179, 189, 359, 359],
  guests: [2, 2, 2, 4, 4],
  wifi: true,
  parking: true,
  pool: true,
  gym: true,
  images: ["https://q-ec.bstatic.com/images/hotel/max1280x900/539/53928753.jpg",	"https://r-ec.bstatic.com/images/hotel/max1280x900/539/53928922.jpg",	"https://r-ec.bstatic.com/images/hotel/max1280x900/539/53928627.jpg",	"https://r-ec.bstatic.com/images/hotel/max1280x900/539/53928434.jpg",	"https://r-ec.bstatic.com/images/hotel/max1280x900/539/53928122.jpg"]
};


var hotels = [hotel1, hotel2, hotel3, hotel4];

function listHotels(){
  var htab = document.getElementById("resultsTable");

  for (var i = 0; i < hotels.length; i++) {
    var hotel = hotels[i];
    var row = htab.insertRow(0);
    var imgcell = row.insertCell(0);
    var textcell = row.insertCell(1);
    row.id = hotel.id;

    //create image of hotel
    imgcell.classList.add("searchCell");
    imgcell.setAttribute("overflow", "hidden");
    var hotelimage = document.createElement("IMG");
    hotelimage.setAttribute("src", hotel.images[1]);
    hotelimage.setAttribute("width", "400px");
    hotelimage.setAttribute("alt", hotel.name);
    imgcell.append(hotelimage);

    //create text area of hotel
    textcell.classList.add("searchCell");
    var info = '<b><font size = "5px"><a href = "listing.html?id=' + hotel.id + '" style = "color: black; text-decoration: none;">' + hotel.name.toUpperCase() + '</a></font></b><br><br>' + hotel.description + '<br><br><b>Address: </b>' + hotel.location + '<br><b>Minimum Price: </b>$' + hotel.prices[0] + '<br><b>Website: </b> <a href="' + hotel.site +'">' + hotel.site + '</a>';
    textcell.innerHTML = info;
  }
}

function initialSearch(){
  var url = window.location.href;

  if(url.indexOf("=") > -1){
    var searchTerm = url.substring(url.indexOf("=") + 1);
    searchTerm = searchTerm.replace(/\+/g, " ");

    var searchBox = document.getElementById("hotelSearch");
    searchBox.value = searchTerm;

    searchHotels();
  }
}

function startUpSearch(){
  listHotels();
  initialSearch();
}

function startUpListing(){
  var url = window.location.href;

  if(url.indexOf("=") > -1){
    var listID = url.substring(url.indexOf("=") + 1);
    loadListing(listID);
    showSlides();
  }
}



function loadListing(id){
  var htl = -1;
  for (var i = 0; i < hotels.length; i++) {
    if(hotels[i].id == id){
      htl = hotels[i];
    }
  }
  if(htl != -1){
    var a = document.getElementById("hmainname");
    a.innerHTML = htl.name.toUpperCase();

    for (var n = 0; n < htl.images.length; n++) {
      var x = document.getElementById("images");
      var picdiv = document.createElement("DIV");
      picdiv.classList.add("theSlides");
      picdiv.classList.add("fade");
      x.append(picdiv);
      var newpic = document.createElement("IMG");
      newpic.setAttribute("width", "100%");
      newpic.setAttribute("src", htl.images[n]);
      picdiv.append(newpic);
    }

    var imgs = document.getElementById("images");
    imgs.scrollTop = imgs.scrollHeight;


    console.log(htl.name);
    document.getElementById("hname").innerHTML = htl.name;
    document.getElementById("hlocation").innerHTML = htl.location;
    document.getElementById("hphone").innerHTML = htl.phone;
    document.getElementById("hdesc").innerHTML = htl.description;
    document.getElementById("hsite").innerHTML = htl.site;
    document.getElementById("hsite").href = htl.site;

    if(htl.wifi === true){
      document.getElementById("hwifi").innerHTML = "Wifi: Yes";
    }else{
      document.getElementById("hwifi").innerHTML = "Wifi: No";
    }
    if(htl.parking === true){
      document.getElementById("hparking").innerHTML = "Parking: Yes";
    }else{
      document.getElementById("hparking").innerHTML = "Parking: No";
    }
    if(htl.pool === true){
      document.getElementById("hpool").innerHTML = "Pool: Yes";
    }else{
      document.getElementById("hpool").innerHTML = "Pool: No";
    }
    if(htl.gym === true){
      document.getElementById("hgym").innerHTML = "Gym: Yes";
    }else{
      document.getElementById("hgym").innerHTML = "Gym: No";
    }

    for (var q = 0; q < htl.roomtypes.length; q++) {
      var y = document.getElementById("hroomtype");
      var option = document.createElement("OPTION");
      option.value = q;
      option.innerHTML = htl.roomtypes[q] + " - $" + htl.prices[q];
      y.append(option);
    }
  }
}


/*andy's functions*/

function login(){
	// var popup = document.getElementById("login_id");
	// popup.classList.toggle("show");
	document.getElementById('login_id').style.display='grid';
	cancelsignup();
}

function cancellogin(){
	document.getElementById('login_id').style.display='none';
}

function signup(){
	document.getElementById('signup_id').style.display='grid';
	cancellogin();
}
function cancelsignup(){
	document.getElementById('signup_id').style.display='none';
}

function privacy(){
document.getElementById('privacy_id').style.display='block';
}

function cancelprivacy(){
document.getElementById('privacy_id').style.display='none';
}

function tacs(){
document.getElementById('tacs_id').style.display='block';
}

function canceltacs(){
document.getElementById('tacs_id').style.display='none';
}

function support(){
document.getElementById('support_id').style.display='block';
}

function cancelsupport(){
document.getElementById('support_id').style.display='none';
}
/* end of andys functions */

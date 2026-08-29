const destinations = [
{ name: "Goa", duration: "5 Days / 4 Nights", price: "₹39,999", style: "Beach & Leisure",
categories: ["beach"],
tiers: { standard: "₹39,999", deluxe: "₹46,999", premium: "₹54,999" },
image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85",
days: [
["Day 1 — North Goa","You will explore Arambol, Keri Beach, Mandrem and Ashwem along North Goa's laid-back coastline"],
["Day 2 — North Goa","You will visit Chapora Fort, Vagator, Anjuna and Ozran Beach"],
["Day 3 — Central Goa","You will discover Old Goa, the Basilica of Bom Jesus, Panjim and the colourful streets of Fontainhas"],
["Day 4 — South Goa","You will relax at Palolem, Patnem, Butterfly Beach and Cola Beach"],
["Day 5 — South Goa & Departure","You will visit Arossim, Cansaulim, Velsao and Betalbatim before your transfer for departure"]
]},
{ name: "Kerala Adventure", duration: "7 Days / 6 Nights", price: "₹59,999", style: "Trekking & Nature",
categories: ["mountain", "beach"],
tiers: { standard: "₹59,999", deluxe: "₹69,999", premium: "₹81,999" },
image: "munnar.png",
days: [
["Day 1 — Kochi","You will explore Fort Kochi, the Chinese Fishing Nets, Mattancherry and Jew Town"],
["Day 2 — Kochi to Munnar","We will travel to Munnar, stopping at tea gardens and Cheeyappara Waterfalls before reaching Munnar town"],
["Day 3 — Munnar","You will visit Eravikulam National Park, Mattupetty Dam, Echo Point and the Tea Museum"],
["Day 4 — Munnar to Wayanad","You will enjoy a scenic drive to Wayanad, taking in viewpoints and local sights along the way"],
["Day 5 — Wayanad","You will explore Edakkal Caves, Soochipara Falls and Banasura Sagar Dam"],
["Day 6 — Wayanad to Cherai","We will travel to Cherai and unwind at Cherai Beach, watching the sunset by the coast"],
["Day 7 — Cherai to Marari Beach & Departure","You will relax at Marari Beach before your transfer for departure"]
]},
{ name: "Kerala Escape", duration: "8 Days / 7 Nights", price: "₹59,999", style: "Nature & Relaxation",
categories: ["mountain", "beach"],
tiers: { standard: "₹59,999", deluxe: "₹69,999", premium: "₹81,999" },
mealNote: "Lunch and dinner are not included, except during the Alleppey houseboat stay, where breakfast, lunch and dinner are provided.",
image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85",
days: [
["Day 1 — Kochi","You will explore Fort Kochi, the Chinese Fishing Nets, Mattancherry and Jew Town"],
["Day 2 — Kochi to Thrissur","We will travel to Thrissur and visit the Vadakkunnathan Temple and other heritage and cultural attractions"],
["Day 3 — Thrissur to Athirappilly","You will visit Athirappilly Waterfalls and Vazhachal Waterfalls, set amid lush rainforest scenery"],
["Day 4 — Athirappilly to Kozhikode","You will enjoy a scenic journey to Kozhikode, with time at Kozhikode Beach and SM Street"],
["Day 5 — Kozhikode to Wayanad","We will travel to Wayanad via Lakkidi View Point and Pookode Lake"],
["Day 6 — Wayanad","You will explore Edakkal Caves, Soochipara Falls and Banasura Sagar Dam"],
["Day 7 — Wayanad to Kannur","We will drive to Kannur and visit St. Angelo Fort and Muzhappilangad Drive-in Beach"],
["Day 8 — Kannur to Alleppey & Departure","We will travel towards Alleppey for a backwaters houseboat experience before your transfer for departure"]
]},
{ name: "Darjeeling", duration: "5 Days / 4 Nights", price: "₹44,999", style: "Himalayan Escape",
categories: ["mountain"],
tiers: { standard: "₹44,999", deluxe: "₹52,999", premium: "₹61,999" },
image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85",
days: [
["Day 1 — Darjeeling","You will explore Mall Road, Chowrasta, the Peace Pagoda and the local market"],
["Day 2 — Darjeeling","You will wake early for sunrise at Tiger Hill, then visit Ghoom Monastery, Batasia Loop and the Himalayan Mountaineering Institute"],
["Day 3 — Darjeeling to Mirik","You will visit Mirik Lake and its tea gardens, enjoying scenic mountain views before returning to Darjeeling"],
["Day 4 — Darjeeling","You will explore Happy Valley Tea Estate, the Rock Garden and enjoy the Himalayan views around the town"],
["Day 5 — Departure","You will enjoy a relaxed morning and some local shopping before your transfer for departure"]
]},
{ name: "Ooty, Coonoor & Kodaikanal", duration: "6 Days / 5 Nights", price: "₹49,999", style: "South Indian Hills",
categories: ["mountain"],
tiers: { standard: "₹49,999", deluxe: "₹57,999", premium: "₹67,999" },
image: "ooty-tea-garden.png",
days: [
["Day 1 — Ooty","You will visit Ooty Lake, the Botanical Gardens, Rose Garden and explore Ooty town"],
["Day 2 — Ooty","You will explore Doddabetta Peak, a tea factory and tea gardens, and Avalanche Lake"],
["Day 3 — Ooty to Coonoor","You will enjoy a toy train ride to Coonoor, then visit Sim's Park, Lamb's Rock and Dolphin's Nose"],
["Day 4 — Coonoor to Kodaikanal","You will take a scenic mountain drive to Kodaikanal, with time at Kodaikanal Lake and Coaker's Walk"],
["Day 5 — Kodaikanal","You will explore Pillar Rocks, Guna Caves, the Pine Forest, Moir Point and Bryant Park"],
["Day 6 — Departure","You will enjoy a leisurely morning and some local shopping before your transfer for departure"]
]},
{ name: "Himachal", duration: "7 Days / 6 Nights", price: "₹59,999", style: "Mountain Journey",
categories: ["mountain"],
tiers: { standard: "₹59,999", deluxe: "₹69,999", premium: "₹81,999" },
image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=85",
days: [
["Day 1 — Shimla","You will arrive in Shimla and explore the Mall Road and colonial heart of the city"],
["Day 2 — Shimla","You will visit Kufri and enjoy panoramic Himalayan views"],
["Day 3 — Shimla to Manali","We will travel through spectacular mountain landscapes towards Manali"],
["Day 4 — Manali","You will explore Solang Valley and the beautiful surroundings of Manali"],
["Day 5 — Manali to Dharamshala","We will travel towards Dharamshala through scenic Himalayan roads"],
["Day 6 — Dharamshala to Dalhousie","You will explore Dharamshala before continuing towards Dalhousie"],
["Day 7 — Dalhousie & Departure","You will enjoy the morning in Dalhousie before your return journey"]
]},
{ name: "North East & Sikkim", duration: "12 Days / 11 Nights", price: "₹74,999", style: "Grand Himalayan Expedition",
categories: ["mountain"],
tiers: { standard: "₹74,999", deluxe: "₹87,999", premium: "₹102,999" },
image: "northeast-waterfall.png",
days: [
["Day 1 — Assam","You will arrive in Assam and begin your journey through India's magnificent Northeast"],
["Day 2 — Arunachal Pradesh","We will travel towards Arunachal Pradesh and experience its spectacular mountain landscapes"],
["Day 3 — Arunachal Pradesh","You will explore valleys, monasteries and the breathtaking Himalayan scenery"],
["Day 4 — Nagaland","We will continue to Nagaland and discover its unique culture, traditions and landscapes"],
["Day 5 — Manipur","You will explore Manipur's natural beauty, vibrant culture and scenic surroundings"],
["Day 6 — Mizoram","We will travel through scenic hills and winding roads towards Mizoram"],
["Day 7 — Tripura","You will discover Tripura's rich heritage, historic landmarks and beautiful surroundings"],
["Day 8 — Meghalaya","We will travel to Meghalaya and explore its lush hills, waterfalls and unique landscapes"],
["Day 9 — Meghalaya","We will continue exploring Meghalaya's spectacular caves, waterfalls and natural wonders"],
["Day 10 — Sikkim","We will travel towards Sikkim and enjoy stunning views of the Eastern Himalayas"],
["Day 11 — Sikkim","You will explore Gangtok, Himalayan viewpoints, monasteries and the surrounding mountain scenery"],
["Day 12 — Departure","You will complete your Northeast and Sikkim adventure with your return transfer"]
]},
{ name: "Uttarakhand Char Dham", duration: "8 Days / 7 Nights", price: "₹69,999", style: "Spiritual Himalayan Journey",
categories: ["mountain", "heritage"],
tiers: { standard: "₹69,999", deluxe: "₹81,999", premium: "₹95,999" },
image: "badrinath-temple.png",
days: [
["Day 1 — Haridwar","You will arrive in Haridwar and experience the spiritual atmosphere of the Ganges"],
["Day 2 — Yamunotri","We will begin your journey towards Yamunotri and experience the Himalayan landscape"],
["Day 3 — Gangotri","We will travel towards Gangotri and visit the sacred temple"],
["Day 4 — Kedarnath","We will continue towards the sacred Kedarnath region"],
["Day 5 — Kedarnath","You will spend the day experiencing the spiritual and natural beauty of Kedarnath"],
["Day 6 — Badrinath","We will travel towards Badrinath through breathtaking Himalayan scenery"],
["Day 7 — Badrinath","You will visit the sacred Badrinath temple and explore the surrounding region"],
["Day 8 — Departure","You will complete your Char Dham journey and begin your return journey"]
]},
{ name: "Major Char Dham", duration: "16 Days / 15 Nights", price: "₹109,999", style: "Pan-India Spiritual Journey",
categories: ["heritage"],
tiers: { standard: "₹109,999", deluxe: "₹128,999", premium: "₹150,999" },
image: "jagannath-puri.png",
days: [
["Day 1 — Delhi","You will arrive in Delhi and begin your spiritual journey"],
["Day 2 — Yamunotri","We will travel towards Yamunotri"],
["Day 3 — Gangotri","You will visit the sacred Gangotri region"],
["Day 4 — Kedarnath","We will continue towards Kedarnath"],
["Day 5 — Kedarnath","You will explore the sacred surroundings"],
["Day 6 — Badrinath","We will travel towards Badrinath"],
["Day 7 — Badrinath","You will visit the sacred temple and surrounding region"],
["Day 8 — Return Journey","We will begin your journey towards the next destination"],
["Day 9 — Puri","You will arrive in Puri and visit the famous Jagannath Temple"],
["Day 10 — Puri","You will explore Puri and its spiritual heritage"],
["Day 11 — Rameswaram","We will travel towards the southern spiritual destination of Rameswaram"],
["Day 12 — Rameswaram","You will visit the famous Ramanathaswamy Temple"],
["Day 13 — Madurai","You will explore the cultural and spiritual heritage of Madurai"],
["Day 14 — Dwarka","We will continue towards Dwarka"],
["Day 15 — Dwarka","You will visit Dwarkadhish Temple and explore the sacred city"],
["Day 16 — Departure","You will complete your Major Char Dham journey"]
]},
{ name: "Royal Rajasthan", duration: "8 Days / 7 Nights", price: "₹62,999", style: "Heritage & Luxury",
categories: ["heritage"],
tiers: { standard: "₹62,999", deluxe: "₹73,999", premium: "₹86,999" },
image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=85",
days: [
["Day 1 — Jaipur","You will arrive in Jaipur and explore the Pink City's vibrant streets and royal heritage"],
["Day 2 — Jaipur","You will visit Amber Fort, City Palace, Hawa Mahal and explore Jaipur's colourful markets"],
["Day 3 — Jodhpur","We will travel to Jodhpur and discover the Blue City's historic streets and magnificent Mehrangarh Fort"],
["Day 4 — Jodhpur","You will explore Mehrangarh Fort, Jaswant Thada and the vibrant old city of Jodhpur"],
["Day 5 — Jaisalmer","We will travel to Jaisalmer and experience the golden architecture of the historic desert city"],
["Day 6 — Jaisalmer","You will explore Jaisalmer Fort, Patwon Ki Haveli and enjoy a desert experience with sunset views"],
["Day 7 — Udaipur","We will travel to Udaipur and discover the romantic City of Lakes and its beautiful surroundings"],
["Day 8 — Udaipur & Departure","You will explore City Palace, Lake Pichola and Jagdish Temple before your transfer for departure"]
]},
{ name: "Ladakh", duration: "7 Days / 6 Nights", price: "₹64,999", style: "High-Altitude Adventure",
categories: ["mountain"],
tiers: { standard: "₹64,999", deluxe: "₹75,999", premium: "₹88,999" },
image: "ladakh.png",
days: [
["Day 1 — Leh","You will arrive in Leh and spend the day acclimatising to the high altitude. You will explore Leh Market in the evening"],
["Day 2 — Leh","You will visit Shanti Stupa, Leh Palace, Thiksey Monastery and Shey Palace"],
["Day 3 — Nubra Valley","We will travel through Khardung La towards Nubra Valley and explore Diskit Monastery, the Hunder sand dunes and surrounding villages"],
["Day 4 — Nubra Valley to Pangong Lake","We will travel through spectacular Himalayan landscapes to Pangong Lake and take in the breathtaking scenery"],
["Day 5 — Pangong Lake to Leh","You will enjoy the morning at Pangong Lake before returning to Leh through scenic mountain routes"],
["Day 6 — Leh","You will explore Sham Valley, including Magnetic Hill, Gurudwara Pathar Sahib and the confluence of the Indus and Zanskar rivers"],
["Day 7 — Departure","You will enjoy a relaxed morning in Leh before your return transfer and departure"]
]},
{ name: "Kashmir", duration: "6 Days / 5 Nights", price: "₹54,999", style: "Valleys & Meadows",
categories: ["mountain"],
tiers: { standard: "₹54,999", deluxe: "₹63,999", premium: "₹74,999" },
image: "kashmir.png",
days: [
["Day 1 — Srinagar","You will arrive in Srinagar and enjoy a peaceful shikara ride on Dal Lake. You will explore the local markets and Mughal gardens"],
["Day 2 — Srinagar to Gulmarg","We will travel to Gulmarg and take in the spectacular Himalayan scenery, with an optional gondola ride and time to explore the meadows"],
["Day 3 — Gulmarg to Pahalgam","We will travel towards Pahalgam through scenic valleys and mountain landscapes, and explore the town and surrounding countryside"],
["Day 4 — Pahalgam","You will discover Pahalgam's beautiful valleys and rivers, with optional visits to Betaab Valley and Aru Valley"],
["Day 5 — Pahalgam to Srinagar","We will return to Srinagar and explore the city's historic landmarks, gardens and local markets"],
["Day 6 — Departure","You will enjoy a relaxed morning in Srinagar before your return transfer and departure"]
]},
{ name: "Andaman", duration: "6 Days / 5 Nights", price: "₹59,999", style: "Island & Beach",
categories: ["beach"],
tiers: { standard: "₹59,999", deluxe: "₹69,999", premium: "₹81,999" },
image: "andaman.png",
days: [
["Day 1 — Port Blair","You will arrive in Port Blair and explore Cellular Jail, followed by the evening Light & Sound Show"],
["Day 2 — Port Blair to Havelock Island","We will travel to Havelock Island and relax at Radhanagar Beach, one of the island's most beautiful beaches"],
["Day 3 — Havelock Island","You will explore Elephant Beach and enjoy water activities such as snorkelling and glass-bottom boat rides"],
["Day 4 — Havelock to Neil Island","We will travel to Neil Island and discover Bharatpur Beach, the Natural Bridge and Laxmanpur Beach"],
["Day 5 — Neil Island to Port Blair","We will return to Port Blair and enjoy a relaxed afternoon exploring the city and local markets"],
["Day 6 — Departure","You will enjoy a relaxed morning before your return transfer and departure from Port Blair"]
]},
{ name: "Karnataka", duration: "10 Days / 9 Nights", price: "₹68,999", style: "Coast, Heritage & Hills",
categories: ["beach", "mountain", "heritage"],
tiers: { standard: "₹68,999", deluxe: "₹80,999", premium: "₹94,999" },
image: "karnataka.png",
days: [
["Day 1 — Bangalore Arrival","You will arrive in Bangalore and explore the city's gardens, markets and vibrant urban culture"],
["Day 2 — Bangalore to Mysuru","We will travel to Mysuru, the City of Palaces, and explore its royal heritage"],
["Day 3 — Mysuru Exploration","You will visit Mysuru Palace, Chamundi Hills and the colourful local bazaars"],
["Day 4 — Mysuru to Coorg","We will travel into the misty hills of Coorg, known for its coffee plantations and scenic landscapes"],
["Day 5 — Coorg","You will explore waterfalls, coffee estates, viewpoints and the beautiful countryside of Coorg"],
["Day 6 — Coorg to Hampi","We will travel towards Hampi, the historic ruins of the magnificent Vijayanagara Empire"],
["Day 7 — Hampi Exploration","You will discover ancient temples, royal ruins, stone monuments, boulder landscapes and historic bazaars"],
["Day 8 — Hampi to Jog Falls","We will travel towards Jog Falls, one of India's spectacular waterfalls, surrounded by the lush Western Ghats"],
["Day 9 — Jog Falls to Gokarna","You will enjoy the scenic surroundings of Jog Falls before continuing towards the beaches of Gokarna"],
["Day 10 — Gokarna to Udupi & Departure","You will explore Gokarna's coastal beauty before travelling towards Udupi and completing your Karnataka journey with your departure"]
]},
{ name: "Madhya Pradesh", duration: "7 Days / 6 Nights", price: "₹57,999", style: "Heritage & Temples",
categories: ["heritage"],
tiers: { standard: "₹57,999", deluxe: "₹67,999", premium: "₹79,999" },
image: "madhya-pradesh.png",
days: [
["Day 1 — Bhopal","You will arrive in Bhopal and explore the City of Lakes, including Upper Lake and the old city"],
["Day 2 — Bhopal to Sanchi","We will travel to Sanchi and discover the magnificent Sanchi Stupa and its ancient Buddhist heritage"],
["Day 3 — Sanchi to Ujjain","We will continue to Ujjain and explore Mahakaleshwar Temple, the ghats and the spiritual heritage of the city"],
["Day 4 — Ujjain to Indore","We will travel to Indore and explore Rajwada Palace, Lal Bagh Palace and the vibrant local markets"],
["Day 5 — Indore","You will discover Indore's rich food culture, heritage landmarks and bustling streets"],
["Day 6 — Indore to Mandu","We will travel to Mandu and explore its magnificent forts, palaces, mosques and romantic ruins"],
["Day 7 — Departure","You will enjoy Mandu's historic architecture and scenic surroundings before your return transfer and departure"]
]},
{ name: "Lakshadweep", duration: "6 Days / 5 Nights", price: "₹64,999", style: "Island & Lagoon",
categories: ["beach"],
tiers: { standard: "₹64,999", deluxe: "₹75,999", premium: "₹88,999" },
image: "lakshadweep.png",
days: [
["Day 1 — Arrival in Lakshadweep","You will arrive in Lakshadweep and settle into your island stay. You will enjoy the pristine beaches and turquoise waters"],
["Day 2 — Kavaratti","You will explore Kavaratti Island, its beautiful lagoons, beaches and local culture"],
["Day 3 — Kavaratti","You will enjoy water activities such as snorkelling, kayaking and swimming in the clear lagoon waters"],
["Day 4 — Bangaram Island","We will travel to Bangaram and experience its secluded beaches, coral reefs and spectacular island scenery"],
["Day 5 — Bangaram","You will spend a relaxing day exploring the island, with opportunities for snorkelling, kayaking and enjoying the surrounding marine life"],
["Day 6 — Departure","You will enjoy a relaxed morning by the beach before your return transfer and departure"]
]},
{ name: "Maharashtra Spiritual Trail", duration: "6 Days / 5 Nights", price: "₹52,999", style: "Spiritual Heritage",
categories: ["heritage"],
tiers: { standard: "₹52,999", deluxe: "₹61,999", premium: "₹72,999" },
image: "maharashtra.png",
days: [
["Day 1 — Arrival in Nashik","You will arrive in Nashik and settle in near Trimbakeshwar. Evening at leisure"],
["Day 2 — Trimbakeshwar","You will visit the Trimbakeshwar Jyotirlinga Temple, one of the twelve sacred Jyotirlingas"],
["Day 3 — Nashik to Shirdi","We will travel to Shirdi and visit the Sai Baba Temple"],
["Day 4 — Shirdi to Pandharpur","We will travel to Pandharpur and visit the Vitthal-Rukmini Temple on the banks of the Chandrabhaga River"],
["Day 5 — Pandharpur to Kolhapur","We will travel to Kolhapur, visit the Mahalakshmi Temple and explore the city"],
["Day 6 — Departure","You will enjoy breakfast followed by your transfer for the return journey"]
]}
];

const grid = document.getElementById("destinationGrid");

function renderDestinations(filter) {
grid.innerHTML = "";
destinations.forEach((destination, index) => {
if (filter !== "all" && !destination.categories.includes(filter)) {
return;
}
const card = document.createElement("div");
card.className = "destination-card reveal";
card.innerHTML = `
<div class="destination-image">
<span class="style-badge">${destination.style}</span>
<img src="${destination.image}" alt="${destination.name}" loading="lazy" onerror="this.onerror=null; this.style.display='none';">
</div>
<div class="destination-info">
<h3>${destination.name}</h3>
<p>${destination.style} · ${destination.duration}</p>
<div class="card-bottom" style="justify-content:flex-end;">
<button class="view-btn" onclick="openItinerary(${index})">View Journey</button>
</div>
</div>
`;
grid.appendChild(card);
});
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
}

renderDestinations("all");

document.querySelectorAll(".filter-btn").forEach(btn => {
btn.addEventListener("click", () => {
document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
btn.classList.add("active");
renderDestinations(btn.dataset.filter);
});
});

let selectedDestination = null;

const airportAdjustments = {
mumbai: 0,
delhi: 1500,
hyderabad: 1000,
chennai: 1200,
bangalore: 1000,
pune: 500,
kolkata: 1800,
ahmedabad: 800,
kochi: 1200,
lucknow: 1600,
jaipur: 900
};

function openItinerary(index) {
selectedDestination = destinations[index];
document.getElementById("modalTitle").textContent = selectedDestination.name;
document.getElementById("modalDuration").textContent = selectedDestination.duration;
document.getElementById("modalStyle").textContent = selectedDestination.style;
document.getElementById("modalHeader").style.backgroundImage = `url("${selectedDestination.image}")`;
document.getElementById("mealNote").textContent = selectedDestination.mealNote || "Lunch and dinner are not included";
document.getElementById("itineraryDays").innerHTML = "";
selectedDestination.days.forEach(day => {
const div = document.createElement("div");
div.className = "itinerary-day";
div.innerHTML = `<h4>${day[0]}</h4><p>${day[1]}</p>`;
document.getElementById("itineraryDays").appendChild(div);
});

// Reset the selection state for the new destination
document.querySelectorAll('input[name="packageTier"]').forEach(el => el.checked = false);
document.getElementById("departureAirport").value = "";
document.getElementById("totalPriceBox").style.display = "none";
document.getElementById("finalPrice").textContent = "₹0";

document.getElementById("itineraryModal").classList.add("active");
document.body.style.overflow = "hidden";
}

function calculateTotalPrice() {
const tierInput = document.querySelector('input[name="packageTier"]:checked');
const airport = document.getElementById("departureAirport").value;
const box = document.getElementById("totalPriceBox");

if (!tierInput || !airport || !selectedDestination) {
box.style.display = "none";
return;
}

const tierPriceStr = selectedDestination.tiers[tierInput.value];
const basePrice = parseInt(tierPriceStr.replace(/[₹,]/g, ""), 10);
const total = basePrice + airportAdjustments[airport];

document.getElementById("finalPrice").textContent = "₹" + total.toLocaleString("en-IN");
box.style.display = "block";
}

function closeItinerary() {
document.getElementById("itineraryModal").classList.remove("active");
document.body.style.overflow = "auto";
}

function openBooking() {
const tierInput = document.querySelector('input[name="packageTier"]:checked');
const airport = document.getElementById("departureAirport").value;

if (!tierInput || !airport) {
alert("Please select a stay option and departure airport first.");
return;
}

const tierLabel = tierInput.value.charAt(0).toUpperCase() + tierInput.value.slice(1);
const airportLabel = document.getElementById("departureAirport").selectedOptions[0].textContent;
const finalPrice = document.getElementById("finalPrice").textContent;

document.getElementById("bookingDestination").value = `${selectedDestination.name} — ${tierLabel} — from ${airportLabel} (${finalPrice})`;
document.getElementById("bookingModal").classList.add("active");
}

function closeBooking() {
document.getElementById("bookingModal").classList.remove("active");
}

function prepareBooking() {
// The Selected Destination field is already filled in by openBooking().
// This just confirms the form is ready before the real submit to Formspree happens.
return true;
}

window.onclick = function(event) {
const itineraryModal = document.getElementById("itineraryModal");
const bookingModal = document.getElementById("bookingModal");
if(event.target === itineraryModal) { closeItinerary(); }
if(event.target === bookingModal) { closeBooking(); }
};

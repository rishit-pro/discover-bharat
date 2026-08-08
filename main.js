const destinations = [
{ name: "Goa", duration: "5 Days / 4 Nights", price: "₹39,999", style: "Beach & Leisure",
categories: ["beach"],
tiers: { standard: "₹39,999", deluxe: "₹46,999", luxury: "₹54,999" },
image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85",
days: [
["Day 1 — Arrival in Goa","Arrive in Goa and transfer to your hotel. Spend the evening relaxing by the beach and enjoy a beautiful sunset."],
["Day 2 — North Goa","Explore Fort Aguada, Candolim, Calangute, Baga and Anjuna. Experience the vibrant side of Goa."],
["Day 3 — Madgaon & South Goa","Visit Old Goa, Basilica of Bom Jesus, Panjim and the beautiful beaches around Madgaon."],
["Day 4 — South Goa","Discover Cola Beach, Kakolem Beach and Agonda Beach. Enjoy a relaxed coastal experience."],
["Day 5 — Departure","Enjoy breakfast and some free time before your transfer for your return journey."]
]},
{ name: "Kerala Adventure", duration: "7 Days / 6 Nights", price: "₹59,999", style: "Trekking & Nature",
categories: ["mountain", "beach"],
tiers: { standard: "₹59,999", deluxe: "₹69,999", luxury: "₹81,999" },
image: "munnar.png",
days: [
["Day 1 — Kochi Arrival","Arrive in Kochi and spend the day exploring Fort Kochi's colonial streets, the Chinese fishing nets and Jew Town."],
["Day 2 — Kochi to Munnar","Travel through scenic mountain roads to Munnar. Explore tea gardens and enjoy the cool mountain climate."],
["Day 3 — Munnar Trek & Exploration","Experience a guided nature walk through tea plantations and explore Munnar's beautiful mountain landscapes."],
["Day 4 — Munnar to Wayanad","Travel towards Wayanad through lush forests and mountain scenery."],
["Day 5 — Wayanad Adventure","Explore Wayanad's natural beauty with a trek, waterfall visit and scenic viewpoints."],
["Day 6 — Cherai Beach","Travel back towards the coast and unwind at Cherai Beach, a quiet stretch just outside Kochi."],
["Day 7 — Marari Beach & Departure","Visit the palm-lined shores of Marari Beach for a relaxed final morning before your transfer for departure."]
]},
{ name: "Kerala Escape", duration: "6 Days / 5 Nights", price: "₹49,999", style: "Nature & Relaxation",
categories: ["mountain", "beach"],
tiers: { standard: "₹49,999", deluxe: "₹57,999", luxury: "₹67,999" },
image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85",
days: [
["Day 1 — Arrival in Kerala","Arrive in Kerala and transfer to your destination. Relax and enjoy the beautiful surroundings."],
["Day 2 — Kannur","Explore Kannur's beaches, cultural heritage and scenic coastal landscapes."],
["Day 3 — Kannur to Wayanad","Travel through the Western Ghats towards Wayanad and enjoy the lush green scenery."],
["Day 4 — Wayanad","Explore waterfalls, viewpoints and the peaceful natural beauty of Wayanad."],
["Day 5 — Varkala","Travel to Varkala and relax along the famous cliffside beach."],
["Day 6 — Departure","Breakfast followed by your transfer for the return journey."]
]},
{ name: "Darjeeling", duration: "5 Days / 4 Nights", price: "₹44,999", style: "Himalayan Escape",
categories: ["mountain"],
tiers: { standard: "₹44,999", deluxe: "₹52,999", luxury: "₹61,999" },
image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85",
days: [
["Day 1 — Arrival in Darjeeling","Arrive in Darjeeling and settle into your hotel surrounded by Himalayan landscapes."],
["Day 2 — Tiger Hill & Darjeeling","Wake early for a spectacular sunrise over Mount Kanchenjunga. Explore Darjeeling Mall Road and local attractions."],
["Day 3 — Himalayan Exploration","Visit the Himalayan Railway area, monasteries and scenic viewpoints across Darjeeling."],
["Day 4 — Tea Gardens","Explore Darjeeling's famous tea estates and enjoy breathtaking mountain views."],
["Day 5 — Departure","Breakfast followed by your transfer for the return journey."]
]},
{ name: "Ooty, Coonoor & Kodaikanal", duration: "6 Days / 5 Nights", price: "₹49,999", style: "South Indian Hills",
categories: ["mountain"],
tiers: { standard: "₹49,999", deluxe: "₹57,999", luxury: "₹67,999" },
image: "ooty-tea-garden.png",
days: [
["Day 1 — Arrival in Ooty","Arrive in Ooty and explore the peaceful hill station surrounded by eucalyptus forests."],
["Day 2 — Ooty Exploration","Visit Ooty Lake, Botanical Gardens and enjoy the charming mountain atmosphere."],
["Day 3 — Coonoor","Travel to Coonoor and explore tea plantations, viewpoints and the beautiful Nilgiri landscapes."],
["Day 4 — Travel to Kodaikanal","Journey towards Kodaikanal through scenic Tamil Nadu landscapes."],
["Day 5 — Kodaikanal & Coaker's Walk","Explore Coaker's Walk, Kodaikanal Lake and the spectacular viewpoints around the hill station."],
["Day 6 — Departure","Breakfast followed by your transfer for the return journey."]
]},
{ name: "Himachal", duration: "7 Days / 6 Nights", price: "₹59,999", style: "Mountain Journey",
categories: ["mountain"],
tiers: { standard: "₹59,999", deluxe: "₹69,999", luxury: "₹81,999" },
image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=85",
days: [
["Day 1 — Shimla","Arrive in Shimla and explore the Mall Road and colonial heart of the city."],
["Day 2 — Shimla","Visit Kufri and enjoy panoramic Himalayan views."],
["Day 3 — Shimla to Manali","Travel through spectacular mountain landscapes towards Manali."],
["Day 4 — Manali","Explore Solang Valley and the beautiful surroundings of Manali."],
["Day 5 — Manali to Dharamshala","Travel towards Dharamshala through scenic Himalayan roads."],
["Day 6 — Dharamshala to Dalhousie","Explore Dharamshala before continuing towards Dalhousie."],
["Day 7 — Dalhousie & Departure","Enjoy the morning in Dalhousie before your return journey."]
]},
{ name: "North East & Sikkim", duration: "12 Days / 11 Nights", price: "₹74,999", style: "Grand Himalayan Expedition",
categories: ["mountain"],
tiers: { standard: "₹74,999", deluxe: "₹87,999", luxury: "₹102,999" },
image: "northeast-waterfall.png",
days: [
["Day 1 — Assam","Arrive in Assam and begin your journey through India's magnificent Northeast."],
["Day 2 — Arunachal Pradesh","Travel towards the mountains and experience the spectacular landscapes of Arunachal Pradesh."],
["Day 3 — Arunachal Pradesh","Explore the region's valleys, monasteries and mountain scenery."],
["Day 4 — Nagaland","Continue to Nagaland and discover its unique culture and landscapes."],
["Day 5 — Manipur","Explore the natural beauty and cultural heritage of Manipur."],
["Day 6 — Mizoram","Travel through scenic landscapes towards Mizoram."],
["Day 7 — Tripura","Discover Tripura's heritage and beautiful surroundings."],
["Day 8 — Meghalaya","Explore waterfalls, caves and the lush landscapes of Meghalaya."],
["Day 9 — Meghalaya","Continue exploring the spectacular natural beauty of the region."],
["Day 10 — Sikkim","Travel towards Sikkim and enjoy stunning Himalayan scenery."],
["Day 11 — Sikkim","Explore Gangtok and surrounding Himalayan viewpoints."],
["Day 12 — Departure","Complete your Northeast and Sikkim journey with your return transfer."]
]},
{ name: "Uttarakhand Char Dham", duration: "8 Days / 7 Nights", price: "₹69,999", style: "Spiritual Himalayan Journey",
categories: ["mountain", "heritage"],
tiers: { standard: "₹69,999", deluxe: "₹81,999", luxury: "₹95,999" },
image: "badrinath-temple.png",
days: [
["Day 1 — Haridwar","Arrive in Haridwar and experience the spiritual atmosphere of the Ganges."],
["Day 2 — Yamunotri","Begin your journey towards Yamunotri and experience the Himalayan landscape."],
["Day 3 — Gangotri","Travel towards Gangotri and visit the sacred temple."],
["Day 4 — Kedarnath","Continue towards the sacred Kedarnath region."],
["Day 5 — Kedarnath","Spend the day experiencing the spiritual and natural beauty of Kedarnath."],
["Day 6 — Badrinath","Travel towards Badrinath through breathtaking Himalayan scenery."],
["Day 7 — Badrinath","Visit the sacred Badrinath temple and explore the surrounding region."],
["Day 8 — Departure","Complete your Char Dham journey and begin your return journey."]
]},
{ name: "Major Char Dham", duration: "16 Days / 15 Nights", price: "₹109,999", style: "Pan-India Spiritual Journey",
categories: ["heritage"],
tiers: { standard: "₹109,999", deluxe: "₹128,999", luxury: "₹150,999" },
image: "jagannath-puri.png",
days: [
["Day 1 — Delhi","Arrive in Delhi and begin your spiritual journey."],
["Day 2 — Yamunotri","Travel towards Yamunotri."],
["Day 3 — Gangotri","Visit the sacred Gangotri region."],
["Day 4 — Kedarnath","Continue towards Kedarnath."],
["Day 5 — Kedarnath","Explore the sacred surroundings."],
["Day 6 — Badrinath","Travel towards Badrinath."],
["Day 7 — Badrinath","Visit the sacred temple and surrounding region."],
["Day 8 — Return Journey","Begin your journey towards the next destination."],
["Day 9 — Puri","Arrive in Puri and visit the famous Jagannath Temple."],
["Day 10 — Puri","Explore Puri and its spiritual heritage."],
["Day 11 — Rameswaram","Travel towards the southern spiritual destination of Rameswaram."],
["Day 12 — Rameswaram","Visit the famous Ramanathaswamy Temple."],
["Day 13 — Madurai","Explore the cultural and spiritual heritage of Madurai."],
["Day 14 — Dwarka","Continue towards Dwarka."],
["Day 15 — Dwarka","Visit Dwarkadhish Temple and explore the sacred city."],
["Day 16 — Departure","Complete your Major Char Dham journey."]
]},
{ name: "Royal Rajasthan", duration: "6 Days / 5 Nights", price: "₹54,999", style: "Heritage & Luxury",
categories: ["heritage"],
tiers: { standard: "₹54,999", deluxe: "₹63,999", luxury: "₹74,999" },
image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=85",
days: [
["Day 1 — Jaipur","Arrive in Jaipur and explore the Pink City's royal heritage."],
["Day 2 — Jaipur","Visit Amber Fort, City Palace and Hawa Mahal."],
["Day 3 — Jodhpur","Travel towards Jodhpur and explore the Blue City."],
["Day 4 — Jodhpur","Visit Mehrangarh Fort and discover Rajasthan's royal history."],
["Day 5 — Udaipur","Travel to Udaipur and experience the romantic City of Lakes."],
["Day 6 — Departure","Enjoy your final morning before your return journey."]
]},
{ name: "Ladakh", duration: "7 Days / 6 Nights", price: "₹64,999", style: "High-Altitude Adventure",
categories: ["mountain"],
tiers: { standard: "₹64,999", deluxe: "₹75,999", luxury: "₹88,999" },
image: "ladakh.png",
days: [
["Day 1 — Leh Arrival","Arrive in Leh and spend the day acclimatizing to the high altitude."],
["Day 2 — Leh Local Sightseeing","Explore Leh Palace, Shanti Stupa and the local markets."],
["Day 3 — Nubra Valley via Khardung La","Cross the famous Khardung La pass and descend into the dramatic Nubra Valley."],
["Day 4 — Nubra Valley","Visit the sand dunes of Hunder and the Diskit Monastery."],
["Day 5 — Pangong Lake","Travel along winding mountain roads to the shimmering Pangong Tso."],
["Day 6 — Return to Leh","Drive back to Leh, taking in the vast Himalayan landscape along the way."],
["Day 7 — Departure","Enjoy breakfast before your transfer for the return journey."]
]},
{ name: "Kashmir", duration: "6 Days / 5 Nights", price: "₹54,999", style: "Valleys & Meadows",
categories: ["mountain"],
tiers: { standard: "₹54,999", deluxe: "₹63,999", luxury: "₹74,999" },
image: "kashmir.png",
days: [
["Day 1 — Srinagar Arrival","Arrive in Srinagar and settle into a houseboat on Dal Lake."],
["Day 2 — Srinagar","Take a shikara ride and explore the Mughal Gardens."],
["Day 3 — Gulmarg","Travel to Gulmarg for meadow views and a gondola ride up the mountain."],
["Day 4 — Pahalgam","Continue to Pahalgam and enjoy the pine forests and riverside meadows."],
["Day 5 — Sonmarg","Visit Sonmarg, with its glaciers and grazing pastures against snow-capped peaks."],
["Day 6 — Departure","Breakfast in Srinagar followed by your transfer for the return journey."]
]},
{ name: "Andaman", duration: "6 Days / 5 Nights", price: "₹59,999", style: "Island & Beach",
categories: ["beach"],
tiers: { standard: "₹59,999", deluxe: "₹69,999", luxury: "₹81,999" },
image: "andaman.png",
days: [
["Day 1 — Port Blair Arrival","Arrive in Port Blair and visit the Cellular Jail for its evening light show."],
["Day 2 — Havelock Island","Ferry to Havelock Island and relax on Radhanagar Beach."],
["Day 3 — Havelock Island","Enjoy snorkeling and water activities along the island's coral reefs."],
["Day 4 — Neil Island","Explore the quieter beaches and natural bridge of Neil Island."],
["Day 5 — Port Blair","Return to Port Blair for a final day of beach time and local sightseeing."],
["Day 6 — Departure","Enjoy breakfast before your transfer for the return journey."]
]},
{ name: "Karnataka", duration: "10 Days / 9 Nights", price: "₹68,999", style: "Coast, Heritage & Hills",
categories: ["beach", "mountain", "heritage"],
tiers: { standard: "₹68,999", deluxe: "₹80,999", luxury: "₹94,999" },
image: "karnataka.png",
days: [
["Day 1 — Bangalore Arrival","Arrive in Bangalore and explore the city's gardens and markets."],
["Day 2 — Bangalore to Mysuru","Travel to Mysuru, the City of Palaces."],
["Day 3 — Mysuru Exploration","Visit Mysuru Palace, Chamundi Hills and the local bazaars."],
["Day 4 — Mysuru to Coorg","Travel into the misty hills of Coorg, known for its coffee plantations."],
["Day 5 — Coorg","Explore waterfalls, coffee estates and viewpoints across Coorg."],
["Day 6 — Coorg to Hampi","Travel towards Hampi, home to the ruins of the Vijayanagara Empire."],
["Day 7 — Hampi Exploration","Discover the temples, boulders and ancient bazaars of Hampi."],
["Day 8 — Hampi to Jog Falls","Travel towards Jog Falls, one of India's tallest waterfalls, cascading through the Western Ghats."],
["Day 9 — Jog Falls to Gokarna","Enjoy the viewpoints around Jog Falls before continuing to the coast at Gokarna."],
["Day 10 — Udupi & Departure","Visit Udupi's famous temple and enjoy local cuisine before your return journey."]
]},
{ name: "Madhya Pradesh", duration: "7 Days / 6 Nights", price: "₹57,999", style: "Heritage & Temples",
categories: ["heritage"],
tiers: { standard: "₹57,999", deluxe: "₹67,999", luxury: "₹79,999" },
image: "madhya-pradesh.png",
days: [
["Day 1 — Arrival in Bhopal","Arrive in Bhopal and explore Upper Lake, the old city and local markets. Evening at leisure."],
["Day 2 — Bhopal & Sanchi","Explore the State Museum and historic sites of Bhopal. Later travel to Sanchi and visit the famous Buddhist Stupas before returning to Bhopal."],
["Day 3 — Bhopal to Ujjain","Travel to Ujjain. Visit Mahakaleshwar Temple, Mahakal Lok and the ghats of the Shipra River. Evening at leisure."],
["Day 4 — Ujjain to Indore","Morning in Ujjain, then travel to Indore. Explore Rajwada Palace, Sarafa Bazaar and the city's famous food scene."],
["Day 5 — Indore to Mandu","Travel to the historic city of Mandu. Explore Jahaz Mahal, Hindola Mahal, Hoshang Shah's Tomb and the romantic ruins overlooking the Malwa landscape."],
["Day 6 — Mandu to Indore","Enjoy a relaxed morning in Mandu before returning to Indore. Evening free for shopping and local food."],
["Day 7 — Departure","Breakfast and transfer for your onward journey."]
]},
{ name: "Lakshadweep", duration: "6 Days / 5 Nights", price: "₹64,999", style: "Island & Lagoon",
categories: ["beach"],
tiers: { standard: "₹64,999", deluxe: "₹75,999", luxury: "₹88,999" },
image: "lakshadweep.png",
days: [
["Day 1 — Arrival in Agatti","Arrive in Agatti and transfer to your stay. Spend the afternoon relaxing on the beach and enjoy the turquoise lagoon at sunset."],
["Day 2 — Agatti Island","Explore Agatti's beaches and lagoon. Enjoy swimming, snorkeling and other water activities. Evening at leisure."],
["Day 3 — Bangaram Island","Travel to Bangaram and spend the day exploring one of Lakshadweep's most beautiful tropical islands. Relax on the beach and enjoy the clear lagoon waters."],
["Day 4 — Kavaratti Island","Visit Kavaratti, the administrative capital of Lakshadweep. Explore the island, beaches and local surroundings, with time for snorkeling or a glass-bottom boat experience."],
["Day 5 — Return to Agatti","Return to Agatti and keep the day relaxed — beach time, water activities, photography and sunset by the lagoon."],
["Day 6 — Departure","Breakfast and transfer to Agatti Airport for your onward journey."]
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
<div class="card-bottom">
<div class="price">Starting ${destination.price}</div>
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
let selectedTier = "standard";

function openItinerary(index) {
selectedDestination = destinations[index];
document.getElementById("modalTitle").textContent = selectedDestination.name;
document.getElementById("modalDuration").textContent = selectedDestination.duration;
document.getElementById("modalPrice").textContent = selectedDestination.price;
document.getElementById("modalStyle").textContent = selectedDestination.style;
document.getElementById("modalHeader").style.backgroundImage = `url("${selectedDestination.image}")`;
document.getElementById("itineraryDays").innerHTML = "";
selectedDestination.days.forEach(day => {
const div = document.createElement("div");
div.className = "itinerary-day";
div.innerHTML = `<h4>${day[0]}</h4><p>${day[1]}</p>`;
document.getElementById("itineraryDays").appendChild(div);
});

selectedTier = "standard";
renderPricingTiers();

document.getElementById("itineraryModal").classList.add("active");
document.body.style.overflow = "hidden";
}

function renderPricingTiers() {
const tierLabels = [
["standard", "Standard"],
["deluxe", "Deluxe"],
["luxury", "Luxury"]
];
const container = document.getElementById("pricingTiers");
container.innerHTML = "";
tierLabels.forEach(([key, label]) => {
const card = document.createElement("div");
card.className = "tier-card" + (selectedTier === key ? " active" : "");
card.innerHTML = `<span class="tier-name">${label}</span><span class="tier-price">${selectedDestination.tiers[key]}</span>`;
card.onclick = () => {
selectedTier = key;
renderPricingTiers();
};
container.appendChild(card);
});
}

function closeItinerary() {
document.getElementById("itineraryModal").classList.remove("active");
document.body.style.overflow = "auto";
}

function openBooking() {
const tierLabel = selectedTier.charAt(0).toUpperCase() + selectedTier.slice(1);
document.getElementById("bookingDestination").value = `${selectedDestination.name} — ${tierLabel} (${selectedDestination.tiers[selectedTier]})`;
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

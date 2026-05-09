// ১. ম্যাপ সেটআপ (বরিশাল সেন্টার কোঅর্ডিনেট)
const map = L.map('map', { 
    zoomControl: false, 
    attributionControl: false 
}).setView([22.7010, 90.3535], 14);

// ২. বাংলা হাইব্রিড স্যাটেলাইট লেয়ার যুক্ত করা
// hl=bn প্যারামিটারটি বাংলাকে ডিফল্ট ভাষা হিসেবে সেট করে
L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&hl=bn&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(map);

/**
 * ম্যাপ নির্দিষ্ট জায়গায় নেওয়ার ফাংশন
 * @param {number} lat - অক্ষাংশ
 * @param {number} lng - দ্রাঘিমাংশ
 * @param {number} zoom - জুম লেভেল
 */
function goto(lat, lng, zoom) {
    map.flyTo([lat, lng], zoom, {
        duration: 2.5, // এনিমেশনের সময়কাল
        easeLinearity: 0.25
    });
}

// ৩. ম্যাপে ক্লিক করলে অটোমেটিক মার্কার বা পিন পরা
map.on('click', function(e) {
    L.marker(e.latlng).addTo(map)
        .bindPopup("লোকেশন চিহ্নিত করা হয়েছে।")
        .openPopup();
});

// কনসোল লগ (ডেভেলপারদের বুঝার জন্য)
console.log("System Active: Developed by MD Mehedi Hasan");
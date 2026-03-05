const fs = require('fs');
const path = require('path');

function createSvg(text, color1, color2, w, h) {
  w = w || 800;
  h = h || 600;
  return '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h + '">' +
    '<defs>' +
    '<linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">' +
    '<stop offset="0%" style="stop-color:' + color1 + '"/>' +
    '<stop offset="100%" style="stop-color:' + color2 + '"/>' +
    '</linearGradient>' +
    '</defs>' +
    '<rect width="' + w + '" height="' + h + '" fill="url(#bg)"/>' +
    '<text x="50%" y="50%" font-family="Arial,sans-serif" font-size="24" fill="rgba(255,255,255,0.8)" text-anchor="middle" dominant-baseline="middle">' + text + '</text>' +
    '</svg>';
}

// Activity images
var activities = [
  ['kayaking', 'Bay of Kotor Kayaking', '#1a5276', '#2e86c1'],
  ['lovcen', 'Lovcen Mountain Hiking', '#1b4332', '#2d6a4f'],
  ['budva', 'Budva Old Town Rally', '#7b2d26', '#c0392b'],
  ['tara-rafting', 'Tara River Rafting', '#1a5276', '#148f77'],
  ['kotor-fortress', 'Kotor Fortress Hunt', '#4a235a', '#7d3c98'],
  ['wine-tasting', 'Wine Tasting Crmnica', '#6e2c00', '#b7950b'],
  ['sailing', 'Sailing Regatta Boka', '#1b2631', '#2e86c1'],
  ['beach-games', 'Beach Games Jaz', '#b9770e', '#f39c12'],
  ['speedboat', 'Speed Boat Challenge', '#1a5276', '#1abc9c'],
  ['offroad', 'Durmitor Off-Road', '#2c3e50', '#27ae60'],
  ['sup-race', 'Giant SUP Race', '#0e6655', '#1abc9c'],
  ['cooking', 'Cooking Competition', '#6e2c00', '#e74c3c'],
];

activities.forEach(function(a) {
  fs.writeFileSync(path.join('public/images/activities', a[0] + '.jpg'), createSvg(a[1], a[2], a[3]));
});

// Gallery images
for (var i = 1; i <= 12; i++) {
  var num = String(i).padStart(2, '0');
  var hue1 = (i * 30) % 360;
  var hue2 = (hue1 + 40) % 360;
  fs.writeFileSync(
    path.join('public/images/gallery', 'gallery-' + num + '.jpg'),
    createSvg('Gallery Photo ' + i, 'hsl(' + hue1 + ',40%,30%)', 'hsl(' + hue2 + ',50%,40%)')
  );
}

// Team images
var teamNames = ['marko', 'ana', 'nikola'];
var teamColors = [['#2c3e50','#34495e'], ['#5b2c6f','#7d3c98'], ['#1a5276','#2e86c1']];
teamNames.forEach(function(name, i) {
  fs.writeFileSync(
    path.join('public/images/team', name + '.jpg'),
    createSvg(name.charAt(0).toUpperCase() + name.slice(1), teamColors[i][0], teamColors[i][1], 400, 400)
  );
});

// Hero image
fs.writeFileSync(
  path.join('public/images', 'hero.jpg'),
  createSvg('Montenegro - Bay of Kotor', '#0c2461', '#1e3799', 1920, 1080)
);

console.log('All placeholder images created!');

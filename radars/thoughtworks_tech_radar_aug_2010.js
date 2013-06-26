var radar_data = [
//techiniques
{"name":"TDD", "pc":{"r":50,"t":125},"movement":"c"},
{"name":"Usege of Mocks on Domain Classes", "pc":{"r":350,"t":120},"movement":"t"},
{"name":"Continuos delivery", "pc":{"r":120,"t":165},"movement":"c"},
{"name":"Microframeworks", "pc":{"r":180,"t":100},"movement":"t"},
//tools
{"name":"Maven", "pc":{"r":390,"t": 55},"movement":"c"},   
{"name":"Play Framework", "pc":{"r":210,"t":70},"movement":"t"},
//languages
{"name":"Scala", "pc":{"r":70,"t":290},"movement":"c"},
{"name":"Javascript", "pc":{"r":120,"t":320},"movement":"c"},
{"name":"Ruby", "pc":{"r":110,"t":340},"movement":"c"},
{"name":"Objective-C", "pc":{"r":220,"t":350},"movement":"t"},
//Plataforms
{"name":"Javascript as a plataform", "pc":{"r":275,"t":250},"movement":"c"},
{"name":"Rails", "pc":{"r":350,"t":260},"movement":"c"}
];

//left to right -> top to bottom
var radar_quadrants = [
{"name":"Techniques", "start":0, "end":4},
{"name":"Tools", "start":4, "end":6},
{"name":"Platforms", "start":10, "end":13},
{"name":"Languages", "start":6, "end":10}
];
//
var radar_arcs = [{'r':100,'name':'Adopt'},{'r':200,'name':'Trial'},{'r':300,'name':'Assess'},{'r':400,'name':'Hold'}];

var radar_title = "Ronualdo's Tech Radar";

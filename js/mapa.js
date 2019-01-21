var map;
var mapLat = -33.449725110186826;
var mapLng = -70.68698197603226;
var mapDefaultZoom = 18;
function initialize_map() {
    map = new ol.Map({
        controls: [],
        target: "map",
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM({
                    url: "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                })
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([mapLng, mapLat]),
            zoom: mapDefaultZoom
        })
    });
}

function add_map_point(lat, lng) {
    var vectorLayer = new ol.layer.Vector({
        source:new ol.source.Vector({
            features: [new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.transform([parseFloat(lng), parseFloat(lat)], 'EPSG:4326', 'EPSG:3857')),
            })]
        }),
        style: new ol.style.Style({
                image: new ol.style.Icon({
                anchor: [0.5, 0.5],
                anchorXUnits: "fraction",
                anchorYUnits: "fraction",
                src: "https://img.icons8.com/ultraviolet/48/000000/marker.png"
            })
        })
    });
    map.addLayer(vectorLayer);
}
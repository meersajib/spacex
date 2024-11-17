<script>
import {
    onMount
} from "svelte";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import Style from "ol/style/Style";
import CircleStyle from "ol/style/Circle";
import Fill from "ol/style/Fill";
import {
    fromLonLat
} from "ol/proj";
import {
    boundingExtent
} from "ol/extent";

const {
    pads
} = $props();

const generateMarker = (status) => {
    let color;
    switch (status) {
        case "active":
            color = "#91F652";
            break;
        case "retired":
            color = "#9B1C1C";
            break;
        case "under construction":
            color = "#1E429F";
            break;
        default:
            color = "#CCCCCC";
            break;
    }

    return new Style({
        image: new CircleStyle({
            radius: 14,
            fill: new Fill({
                color
            }),
        }),
    });
};

let map;
let vectorLayer;

// Function to fit the map view to display all markers
const fitMapToMarkers = (coordinates) => {
    if (coordinates.length > 0) {
        const extent = boundingExtent(coordinates);
        map.getView().fit(extent, {
            padding: [20, 20, 20, 20],
            maxZoom: 8
        });
    }
};

// Function to update features on the map
const updateMap = () => {
    if (!vectorLayer) return;

    const vectorSource = new VectorSource();
    const coordinates = [];

    // Add features for each pad
    pads.forEach((pad) => {
        if (pad.lon !== undefined && pad.lat !== undefined) {
            const feature = new Feature({
                geometry: new Point(fromLonLat([pad.lon, pad.lat])),
            });

            feature.setStyle(generateMarker(pad.status));
            vectorSource.addFeature(feature);

            coordinates.push(fromLonLat([pad.lon, pad.lat]));
        }
    });

    // Update the vector layer's source
    vectorLayer.setSource(vectorSource);

    // Fit the map to the markers
    fitMapToMarkers(coordinates);
};

onMount(() => {
    // Base OSM layer
    const tileLayer = new TileLayer({
        source: new OSM(),
    });

    // Initialize the vector layer
    vectorLayer = new VectorLayer({
        source: new VectorSource(),
    });

    // Initialize the map
    map = new Map({
        target: "map",
        layers: [tileLayer, vectorLayer],
        view: new View({
            center: fromLonLat([0, 0]),
            zoom: 2,
        }),
    });

    // Add pads to the map
    updateMap();
});

// React to changes in pads and update the map
$effect(() => {
    if (pads.length) {
        updateMap();
    }
});
</script>
    
    <style>
#map {
    width: 100%;
    height: 300px;
    border: 1px solid #E5E7EB;
    border-radius: 8px;
}
</style>

<!-- Map container -->
<div id="map"></div>

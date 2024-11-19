import Style from "ol/style/Style";
import CircleStyle from "ol/style/Circle";
import Fill from "ol/style/Fill";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { boundingExtent } from "ol/extent";
import { fromLonLat } from "ol/proj";
import VectorSource from "ol/source/Vector";

// Function to get the marker color based on the pad status
export const getMarkerColor = (status) => {
  const colors = {
    active: "#91F652",
    retired: "#9B1C1C",
    "under construction": "#1E429F",
  };
  return colors[status] || "#CCCCCC";
};

// Function to create a marker style for the map
export const createMarkerStyle = (status) =>
  new Style({
    image: new CircleStyle({
      radius: 14,
      fill: new Fill({ color: getMarkerColor(status) }),
    }),
  });

// Function to generate OpenLayers features from the pads data
export const generateFeatures = (pads) => {
  const vectorSource = new VectorSource();
  const coordinates = [];

  pads.forEach((pad) => {
    if (pad.lon !== undefined && pad.lat !== undefined) {
      const coord = fromLonLat([pad.lon, pad.lat]);
      const feature = new Feature({ geometry: new Point(coord) });
      feature.setStyle(createMarkerStyle(pad.status));
      vectorSource.addFeature(feature);
      coordinates.push(coord);
    }
  });

  return { vectorSource, coordinates };
};

// Function to fit the map view to the markers
export const fitMapToMarkers = (map, coordinates) => {
  if (coordinates.length > 0) {
    const extent = boundingExtent(coordinates);
    map.getView().fit(extent, { padding: [20, 20, 20, 20], maxZoom: 8 });
  }
};

// Function to update the map with new pad data
export const updateMap = (map, vectorLayer, pads) => {
  if (!vectorLayer) return;

  const { vectorSource, coordinates } = generateFeatures(pads);
  vectorLayer.setSource(vectorSource);
  fitMapToMarkers(map, coordinates);
};

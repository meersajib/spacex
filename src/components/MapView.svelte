<script>
    import { onMount } from "svelte";
    import "ol/ol.css"; // Import OpenLayers styles
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
    import Stroke from "ol/style/Stroke";
    import { fromLonLat } from "ol/proj";
  
    // Pads array passed from parent component
    export let pads = [];
    // Function to generate style for markers based on pad status
    const generateMarker = (status) => {
      let color; // Default fill color
      let strokeColor = "black"; // Stroke color for better visibility
  
      switch (status) {
        case "active":
          color = "#91F652"; // Green for active
          break;
        case "retired":
          color = "#9B1C1C"; // Red for retired
          break;
        case "under construction":
          color = "#F6F552"; // Yellow for under construction
          break;
        default:
          color = "#FFFFFF"; // Default white
          break;
      }
  
      return new Style({
        image: new CircleStyle({
          radius: 8, // Marker size
          fill: new Fill({ color }), // Fill color based on status
        //   stroke: new Stroke({ color: strokeColor, width: 1 }), // Optional border
        }),
      });
    };
  
    let map; // Map reference
    let vectorLayer; // Reference to the vector layer for markers
  
    // Function to update features on the map
    const updateMap = () => {
      if (vectorLayer) {
        const vectorSource = new VectorSource();
  
        // Add features for each pad
        pads.forEach((pad) => {
          const feature = new Feature({
            geometry: new Point(fromLonLat([pad.lon, pad.lat])), // Convert lat/lon to map coordinates
          });
  
          // Apply style to the feature based on its status
          feature.setStyle(generateMarker(pad.status));
          vectorSource.addFeature(feature);
        });
  
        // Update the vector layer's source
        vectorLayer.setSource(vectorSource);
      }
    };
  
    onMount(() => {
      // Base OSM layer
      const tileLayer = new TileLayer({
        source: new OSM(),
      });
  
      // Initialize the vector layer (empty initially)
      vectorLayer = new VectorLayer({
        source: new VectorSource(),
      });
  
      // Initialize the map
      map = new Map({
        target: "map", // The container ID
        layers: [tileLayer, vectorLayer], // Add layers
        view: new View({
          center: fromLonLat([0, 0]), // Default center
          zoom: 2, // Default zoom level
        }),
      });
  
      // Add pads to the map
      updateMap();
    });
  
    // Watch for changes in pads and update the map
    $: if (pads.length) {
      updateMap();
    }
  </script>
  
  <style>
    #map {
      width: 100%;
      height: 400px; /* Adjust the height based on your layout */
      border: 1px solid #ccc; /* Optional styling */
    }
  </style>
  
  <!-- Map container -->
  <div class="shadow-[0px_4px_6px_-1px_#0000001A] border-1 border-gray-default">
    <p class="p-4  text-sm text-gray-900 font-semibold">Map View</p>
    <div id="map"></div>
</div>  

  
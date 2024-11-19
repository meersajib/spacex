<script>
  import { onMount } from "svelte";
  import "ol/ol.css";
  import Map from "ol/Map";
  import View from "ol/View";
  import TileLayer from "ol/layer/Tile";
  import OSM from "ol/source/OSM";
  import VectorLayer from "ol/layer/Vector";
  import VectorSource from "ol/source/Vector";
  import { updateMap } from "$lib/utils/map";

  export let pads = [];

  let map;
  let vectorLayer;

  // Initialize the map when component is mounted
  onMount(() => {
    const tileLayer = new TileLayer({
      source: new OSM(),
    });

    vectorLayer = new VectorLayer({
      source: new VectorSource(),
    });

    map = new Map({
      target: "map",
      layers: [tileLayer, vectorLayer],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });

    if (pads.length) {
      updateMap(map, vectorLayer, pads);
    }
  });

  $: if (pads.length) {
    updateMap(map, vectorLayer, pads);
  }
</script>

<!-- Map container -->
<div id="map"></div>

<style>
  #map {
    width: 100%;
    height: 300px;
  }
</style>

import SceneView from '@arcgis/core/views/SceneView';
import Map from '@arcgis/core/Map';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import LayerList from '@arcgis/core/widgets/LayerList';
import Compass from '@arcgis/core/widgets/Compass';
import Measurement from '@arcgis/core/widgets/Measurement';
import {
  stationLayer,
  constructionBoundaryLayer,
  depotBuildingStructureLayer,
  lotLayer,
  buildingSpotLayer,
} from './layers';

export const map = new Map({
  basemap: 'dark-gray-vector', // "streets-night-vector", basemap
  ground: 'world-elevation',
});

map.add(depotBuildingStructureLayer);
map.add(constructionBoundaryLayer);
map.add(lotLayer);
map.add(stationLayer);
map.add(buildingSpotLayer);

export const view = new SceneView({
  container: undefined,
  map,
  zoom: 19,
  viewingMode: 'local',
  camera: {
    position: {
      x: 121.019,
      y: 14.6800462,
      z: 1000,
    },
    tilt: 65,
  },
  environment: {
    background: {
      type: 'color', // autocasts as new ColorBackground()
      color: [0, 0, 0, 1],
    },
    starsEnabled: false,
    atmosphereEnabled: false,
  },
});

export const basemaps = new BasemapGallery({
  view,
  container: undefined,
});

export const layerList = new LayerList({
  view: view,
  selectionMode: 'multiple',
  visibilityAppearance: 'checkbox',
  container: undefined,
  listItemCreatedFunction: (event) => {
    const item = event.item;
    if (item.layer.type !== 'group') {
      item.panel = {
        content: 'legend',
        open: true,
      };
    }
    item.title === 'Land Acquisition' ? (item.visible = false) : (item.visible = true);
  },
});

// TBM Tunnel Segment
// Compass
var compass = new Compass({
  view: view,
});

// Measurement Tool
export const measurement = new Measurement({
  view: view,
  activeTool: undefined,
  container: undefined,
});
view.ui.add(compass, 'top-right');

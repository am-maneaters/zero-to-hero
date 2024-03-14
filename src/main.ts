import './style.css'
import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";

defineMapElements();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div style="height: 500px; width:500px">
    <h1>Zero to Hero</h1>
    <arcgis-map item-id="e691172598f04ea8881cd2a4adaa45ba" zoom="4">
      <arcgis-layer-list position="top-right" />
    </arcgis-map>
  </div>
`


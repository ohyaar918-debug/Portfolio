# GeoVista portfolio map section

## Implementation

- Reuse the supplied `geomap.js` dashboard prototype rather than duplicating map logic.
- Load the map script after `script.js` so it can use the portfolio data, modal, IndexedDB helpers, and navigation constants already defined there.
- Let `geomap.js` inject the new `#map` section immediately before `#projects`; this keeps it between section 03 Skills and section 04 Projects and allows the existing renumbering logic to update later section labels.
- Keep the root and nested portfolio copies synchronized because the archive contains identical versions of the site.
- Add Leaflet, NASA GIBS, Sentinel-2 cloudless, Chart.js, and shpjs loading through the existing prototype. Support project markers, sample extents, comparison charts, layer toggles, hover tooltips, project-note popups, and browser-persisted shapefile/GeoJSON uploads.

## Design

- **Design movement:** editorial geospatial dashboard / field-notes interface.
- **Core principles:** data-forward, calm, high-contrast, map-first, and progressively disclosed.
- **Color philosophy:** retain the existing navy, mineral green, cyan, and sand palette so live imagery and research overlays feel native to the portfolio.
- **Layout paradigm:** split map-and-inspector workspace with the map as the primary canvas and a responsive layer panel beside it.
- **Signature elements:** dashed study extents, satellite-layer controls, and comparison cards/charts.
- **Interaction philosophy:** click a project to focus the map and compare epochs; hover markers for concise research context; open the full project note only when needed.
- **Animation:** preserve the portfolio's restrained reveal and reduced-motion behavior; map movement uses Leaflet's native transitions.
- **Typography:** keep Space Grotesk for dashboard headings, IBM Plex Sans for readable UI text, and IBM Plex Mono for layer/status metadata.
- **Brand essence:** geospatial evidence made legible for research and environmental decisions. Personality: precise, exploratory, grounded.
- **Brand voice:** concise and observant. Example lines: “Projects on live satellite imagery.” and “Toggle layers, compare change, then open the research note.”
- **Signature brand color:** lime green, used for active states, outlines, and the selected project.

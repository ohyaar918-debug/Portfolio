/* GeoVista Portfolio — script.js
   EDIT the DATA block with your real details. Everything else renders automatically. */
const DATA = {
  profile: {
    name: 'Muhammad Dawood', brand: 'GEOVISTA', role: 'Remote Sensing & GIS Professional',
    roles: ['Remote Sensing', 'GIS & Cartography', 'Earth Observation', 'Environmental Analysis', 'WebGIS Development'],
    intro: 'I work at the intersection of Remote Sensing, Geographic Information Systems, Earth Observation, and Environmental Analysis to transform geospatial data into meaningful insights for research, planning, agriculture, climate, and environmental management.',
    location: 'Faisalabad, Pakistan · Open to remote collaboration',
    email: 'dawood.6509@gmail.com',   // contact-form messages are delivered to this address
     cvPath: '',   // cvPath e.g. 'assets/cv.pdf'
    photo: 'assets/Professional Formal Headshot.png',    // ← YOUR PICTURE: the only line you need. Put your photo at this path (or change the path). Shown in the hero and in About.
    photo2: '',   // picture under the quote on the left of About, e.g. 'assets/field.jpg'  — leave '' to hide it
    availability: 'Available for research collaborations and geospatial projects',
    links: { linkedin: '', github: '', scholar: '' },
    focus: ['Earth observation', 'Spatial analysis', 'Environmental monitoring'],
    philosophy: 'Good geospatial work makes complex landscapes easier to understand, compare, and act on.',
    objectives: 'Build reliable, open, and decision-ready geospatial workflows for environmental resilience, agriculture, and climate adaptation.'
  },
  tools: ['Sentinel-1', 'Sentinel-2', 'Landsat', 'MODIS', 'Google Earth Engine', 'QGIS', 'ArcGIS Pro', 'Python', 'PostGIS', 'Leaflet', 'NDVI', 'LST', 'SAR'],
  /* CV — everything the downloaded PDF contains. Edit here; "Download CV" rebuilds the PDF in the template format.
     Strings in `items` are bullets; ['Label', 'text'] gives a bold label. */
  cv: {
    contact: [['Phone', '(+92) 03027699865'], ['Email', 'dawood.6509@gmail.com'], ['Location', 'Faisalabad, Pakistan']],
    summary: 'Highly motivated and results-oriented Space Science graduate with a robust foundation in remote sensing, GIS, and geospatial analysis. Proven leader and technical trainer with experience coordinating field operations, ensuring data quality, and enhancing team proficiency in GIS software and methodologies. Adept at leveraging geospatial tools for environmental monitoring, land digitization, and strategic planning. Seeking to apply advanced technical skills and leadership capabilities to contribute to innovative projects in aerospace engineering, space technologies, or geospatial solutions.',
    experience: [
      { title: 'District Manager (GIS Manager) & Team Lead | The Spatio: Engineering & Geo-Spatial Consultant, Toba Tek Singh, Pakistan', dates: 'June 2025 – June 2026', items: [
        'Led field and GIS teams, coordinating workflows and ensuring timely completion of land digitization tasks for the World Bank Project (Pulse Punjab).',
        'Planned and structured field survey operations by preparing routes, activity maps, and resource assignments to maximize operational efficiency.',
        'Conducted detailed quality checks on spatial and attribute data, ensuring strict adherence to industry standards and project specifications.'] },
      { title: 'GIS Trainer | The Spatio: Engineering & Geo-Spatial Consultant, Jhang, Pakistan', dates: 'June 2026', items: [
        'Spearheaded the training and technical onboarding for "Team Jhang," enhancing their proficiency in GIS software, field data collection methodologies, and quality standards for the World Bank Project (Pulse Punjab).'] },
      { title: 'GIS Trainer | The Spatio: Engineering & Geo-Spatial Consultant, Toba Tek Singh, Pakistan', dates: 'June 2026', items: [
        'Expertly trained and mentored GIS field teams in advanced spatial data collection and quality control, fostering a culture of technical excellence and operational precision for the World Bank Project (Pulse Punjab).'] },
      { title: 'GIS Trainer | The Spatio: Engineering & Geo-Spatial Consultant, Chiniot, Pakistan', dates: 'May 2026', items: [
        'Spearheaded the technical capacity-building for Team Chiniot, standardizing GIS workflows and field survey protocols to ensure 100% compliance with project quality standards for the World Bank Project (Pulse Punjab).'] },
      { title: 'GIS Intern | The Spatio: Engineering & Geo-Spatial Consultant', dates: 'June 2024 – August 2024', items: [
        'Assisted in GIS mapping and geospatial data processing, gaining hands-on experience with modern geospatial tools and workflows.'] }
    ],
    education: [
      { title: 'Bachelor of Space Science | University of the Punjab, Lahore, Pakistan', dates: 'December 2021 – June 2025', items: [
        ['GPA', '3.59/4.00'],
        ['Thesis', '"Simulating Space Debris Collision Risk and Mitigation Strategies Using STK: A Study on Orbital Debris Avoidance and Removal Techniques"'],
        ['Key coursework', 'Remote Sensing, GIS, Climatology, Meteorology, Aerospace Systems, Rocket Fundamentals.']] }
    ],
    certifications: [
      ['Getting Started with Spatial Analysis', 'ESRI'],
      ['The NASA Applied Remote Sensing Training (ARSET) Program', 'NASA'],
      ['Getting Started with Mapping and Visualization', 'ESRI'],
      ['ArcGIS Pro Basics', 'ESRI'],
      ['GIS Basics', 'ESRI']
    ],
    skills: [
      ['GIS Software', 'ArcGIS Pro, ArcGIS, QGIS, Google Earth Engine'],
      ['Space Science Tools', 'System Tool Kit (STK) AGI (satellite modeling and mission analysis)'],
      ['Programming/Development', 'Visual Studio Code'],
      ['Geospatial Analysis', 'Spatial analysis, geoprocessing, satellite data processing, remote sensing, land digitization, quality control (QC).']
    ],
    projects: [
      { title: 'Simulating Space Debris Collision Risk and Mitigation Strategies Using STK', dates: 'February 2025 – June 2025', desc: 'Modeled orbital debris threats in STK and analyzed mitigation techniques to enhance satellite safety and mission longevity.' },
      { title: 'A Study on Time Series Analysis of Land Surface Temperature of Faisalabad', dates: 'April 2023 – June 2023', desc: 'Evaluated long-term trends and seasonal variations in land surface temperature across Faisalabad using time-series analysis.' }
    ],
    awards: [
      { title: 'Emerging Professional of the Year 2025', org: 'The Spatio', date: 'December 2025', desc: 'Recognized for outstanding contributions, leadership, and innovation, demonstrating exceptional impact early in career.' }
    ],
    languages: [['Urdu', 'Native'], ['Punjabi', 'Native'], ['English', 'C1 (Listening, Reading, Writing), B2 (Spoken Interaction), C1 (Spoken Production)']],
    training: [
      ['1-Training on GBV, SEA, SH for Contractors and Firms', '(PULSE) - December 2025'],
      ['Soft Skills Training', '(OEC) - December 2025']
    ],
    interests: 'Fitness & sports, Reading, Traveling, Gardening, Politics.'
  },

  certifications: [
  {
    name: 'Earth Observation Embeddings:From Pixels to Vectors',
    org: 'GEO University',
    date: '30 September2026',
    issuer: 'GEO University',
    description: 'Certificate in Earth observation and satellite data analysis.',
    image: 'C:/Users/dawoo/Downloads/Portfolio/Certificate/Certificate on Earth Observation Embedding_From Pixel to Vector.jpg',
  },

  {
    name: 'Earth Observation for Sustainable Development:Harnessing the Power of Chinese Satellites',
    org: 'United Nations University',
    date: '28 September 2026',
    issuer: 'UNU INWEH',
    description: 'Explored the capabilities of Chinese Earth Observation satellites and their potential for sustainable development applications. Developed an understanding of how satellite-derived data can support environmental monitoring, natural resource management, disaster assessment, and geospatial analysis.',
    file: 'C:/Users/dawoo/Downloads/Portfolio/Certificate/EOFD HPCS UN Certificate.pdf',
  },

   {
    name: 'Getting Started with Mapping and Visualization',
    org: 'ESRI',
    date: '05 Nov 2025',
    issuer: 'ESRI',
    description: 'Getting Started with Mapping and Visualization teaches how to create, interpret, and present geographic data using maps and visual tools to reveal patterns and insights effectively.',
    link: 'C:/Users/dawoo/Downloads/Portfolio/Certificate/Getting Started with Mapping and Visualization_Certificate_11052025.pdf',
  },

  {
    name: 'Fundamentals of Remote Sensing',
    org: 'NASA',
    date: '09 November 2025',
    issuer: 'NASA ARSET',
    description: 'Completed Esri online training in GIS data management, covering data organization, editing, quality, and efficient geospatial dataset maintenance.',
    link: 'C:/Users/dawoo/Downloads/Portfolio/Certificate/0565808579MD.pdf',
  },

  {
    name: 'Soft Skills Training for GIS Professionals',
    org: 'OEC & ICMPD',
    date: '01 January 2026',
    issuer: 'OEC & ICMPD',
    link: 'C:/Users/dawoo/Downloads/Portfolio/Certificate/certificate_softskill_2c3c0f1c.pdf',
  },

   {
    name: 'Getting Started with Spatial Analysis',
    org: 'ESRI',
    date: '12 Nov 2025',
    issuer: 'ESRI',
    description: 'Getting Started with Spatial Analysis teaches how to explore and interpret geographic data using GIS tools to identify patterns, relationships, and trends for informed decision-making.',
    link: 'C:/Users/dawoo/Downloads/Portfolio/Certificate/Getting Started with Spatial Analysis_Certificate_11122025.pdf',
  },

   {
    name: 'Getting Started with Data Management',
    org: 'ESRI',
    date: '19 June 2026',
    issuer: 'ESRI',
    description: 'Completed Esri online training in GIS data management, covering data organization, editing, quality, and efficient geospatial dataset maintenance.',
    link: 'C:/Users/dawoo/Downloads/Portfolio/Certificate/Getting Started with Data Management_Certificate_06192026.pdf',
  },

   {
    name: 'ArcGIS Pro Basics',
    org: 'ESRI',
    date: '05 November 2025',
    issuer: 'ESRI',
    description: 'ArcGIS Pro Basics introduces the core features of ArcGIS Pro for creating, analyzing, and visualizing spatial data using modern GIS tools.',
    link: 'C:/Users/dawoo/Downloads/Portfolio/Certificate/ArcGIS Pro Basics_Certificate_11052025.pdf',
  },

  {
    name: 'GIS Basics',
    org: 'ESRI',
    date: '05 November 2025',
    issuer: 'ESRI',
    description: 'GIS Basics covers the fundamentals of Geographic Information Systems, including mapping, spatial data management, and basic spatial analysis.',
    link: 'C:/Users/dawoo/Downloads/Portfolio/Certificate/GIS Basics_Certificate_11052025.pdf',
  },


],

  /* EXPERIENCE — one string in `items` = one line (bullet). Add as many lines as you like. */
  experience: [
    {
      title: 'GIS District Manager / Analyst',
      org: 'The Spatio: Geo-Spatial Engineering and Consultancy',
      loc: 'Full time · Lahore, Pakistan',
      dates: '2025 — Present',
      desc: 'Trained and mentored multiple GIS teams in spatial data collection, field operations, and QC.',
      items: [
        'Standardized RTK/DGPS workflows, data validation, and quality-control procedures.',
        'Led field and GIS teams for large-scale land digitization.',
        'Planned and coordinated field surveys, routes, and resources.',
        'Public Map Display Division Faisalabad(Pulse Project)',
        'Tateema Cutting (Pulse Project)',
        'Manhole Digitization (WASA/Suthra Punjab)'
      ],
      tools: ['QGIS', 'ArcGIS Pro', 'Google Earth Engine', 'R-Studio']
    },
    {
      title: 'GIS Intern',
      org: 'The Spatio: Geo-Spatial Engineering and Consultancy',
      loc: 'Lahore, Pakistan',
      dates: 'Jun 2024 — Aug 2024',
      desc: 'Digitization of Land Parcels in Punjab.',
      items: [
        'Digitization of Parcels on Satellite Imagery in Punjab.',
        'Digitization of Parcels on Drone Imagery in Punjab'
      ],
      tools: ['ArcGIS', 'ArcGIS Pro', 'Excel / CSV']
    }
  ],
  skills: [
    ['Remote Sensing', 'RS', [['Sentinel-1 / SAR', 72], ['Sentinel-2 / multispectral', 78], ['Landsat / MODIS', 82], ['NDVI / NDWI / LST', 80], ['Change detection', 68]]],
    ['GIS & Cartography', 'GIS', [['QGIS / ArcGIS Pro', 84], ['Spatial analysis', 82], ['Geoprocessing', 78], ['Geodatabases / cartography', 76]]],
    ['Programming', 'DEV', [['Python', 74], ['JavaScript / React', 64], ['SQL', 58], ['HTML / CSS', 70]]],
    ['Geospatial Python', 'PY', [['GeoPandas / Shapely', 72], ['Rasterio / GDAL', 66], ['NumPy / Pandas', 72], ['Folium / Matplotlib', 68]]],
    ['Google Earth Engine', 'GEE', [['JavaScript API', 76], ['Image processing', 78], ['Time-series analysis', 70], ['Classification', 66]]],
    ['Data & Web Mapping', 'WEB', [['PostgreSQL / PostGIS', 52], ['Leaflet / WebGIS', 68], ['Chart.js / dashboards', 62], ['GeoJSON / REST APIs', 64]]]
  ],
  filters: ['All', 'Remote Sensing', 'GIS', 'WebGIS', 'Environmental', 'Agriculture', 'Climate', 'Research', 'Programming'],
  /* PROJECTS — add new portfolio work here. Required: title, summary, problem, method, data, result, tech.
     Optional: cover, images, location, comparison, compare, links. The map, slider, cards and detail page use the same record.
     compare: { before: 'images/x-2019.jpg', after: 'images/x-2024.jpg', legend: [['#d7191c','Hot'], ['#1a9641','Cool']] }  → slider + project page images */
  projects: [
   /* { title: 'Time Series Analysis of Land Surface Temperature — Faisalabad District', cats: ['Remote Sensing', 'Climate', 'Research'], date: 'Sample study · 2024', color: 'blue', summary: 'A MODIS workflow to explore seasonal thermal patterns, heat islands, and environmental exposure across Faisalabad District.', problem: 'How does land surface temperature change across seasons and land-cover contexts?', method: 'Cloud-masked MODIS composites, seasonal aggregation, zonal statistics, and cartographic interpretation.', data: ['MODIS LST', 'Administrative boundaries', 'Land-cover context'], result: 'A reproducible thermal baseline for comparing urban, agricultural and peri-urban zones.', tech: ['MODIS', 'GEE', 'ArcGIS', 'Time series'], location: [31.42, 73.08], images: [], comparison: { title: 'Mean LST by season', unit: '°C', labels: ['Winter', 'Spring', 'Summer', 'Autumn'], beforeLabel: '2019', afterLabel: '2024', before: [15.2, 29.8, 41.5, 28.1], after: [16.1, 31.4, 43.2, 29.0] }, links: {} },
    { title: 'Land Use / Land Cover Change Detection', cats: ['GIS', 'Environmental', 'Research'], date: 'Sample study · 2023', color: 'sand', summary: 'A classification and change-detection blueprint for tracking built-up growth, vegetation, water, and bare soil.', problem: 'Which land-cover transitions are shaping the study area over time?', method: 'Preprocessing, training-sample design, supervised classification, accuracy assessment, and change matrix analysis.', data: ['Landsat scenes', 'Reference samples', 'Boundary layers'], result: 'A change matrix and map series designed for transparent land-management discussion.', tech: ['Landsat', 'ArcGIS', 'Classification', 'Cartography'], location: [31.45, 73.14], images: [], comparison: { title: 'Land cover share', unit: '% area', labels: ['Built-up', 'Vegetation', 'Water', 'Bare soil'], beforeLabel: '2015', afterLabel: '2024', before: [18, 56, 2, 24], after: [27, 50, 2, 21] }, links: {} },
    { title: 'Forest Change Detection Using Sentinel-1 SAR', cats: ['Remote Sensing', 'Environmental', 'Research'], date: 'Sample study · 2024', color: 'green', summary: 'A radar-based monitoring concept for detecting forest disturbance in cloudy or seasonally variable environments.', problem: 'Can SAR backscatter reveal forest change when optical imagery is limited?', method: 'Sentinel-1 preprocessing, temporal composites, backscatter difference, threshold exploration, and visual validation.', data: ['Sentinel-1 GRD', 'Forest masks', 'Reference observations'], result: 'A cloud-independent monitoring workflow that can be extended into an alerting system.', tech: ['Sentinel-1', 'SAR', 'GEE', 'Change detection'], location: [33.90, 73.40], images: [], comparison: { title: 'Mean VV backscatter', unit: 'dB', labels: ['Dense canopy', 'Open canopy', 'Disturbed edge'], beforeLabel: '2022', afterLabel: '2024', before: [-7.8, -9.4, -12.1], after: [-8.1, -10.2, -14.3] }, links: {} },
    { title: 'Satellite Data Analytics for Agriculture & Climate Change', cats: ['Agriculture', 'Climate', 'Remote Sensing'], date: 'Sample study · 2025', color: 'lime', summary: 'A decision-support concept combining crop health, irrigation signals, drought indicators, and climate risk layers.', problem: 'How can satellite time series make agricultural stress easier to see and act on?', method: 'NDVI trends, moisture proxies, rainfall context, anomaly detection, and spatial prioritization.', data: ['Sentinel-2', 'Rainfall grids', 'Temperature series', 'Agricultural boundaries'], result: 'A monitoring dashboard concept for field-level prioritization and climate-risk communication.', tech: ['NDVI', 'Drought', 'Python', 'Climate risk'], location: [30.97, 72.48], images: [], comparison: { title: 'Monthly mean NDVI', unit: 'NDVI', labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], beforeLabel: '2023', afterLabel: '2024', before: [.35, .48, .62, .45, .30, .28, .42, .55, .52, .40, .33, .34], after: [.33, .46, .57, .40, .27, .25, .38, .50, .49, .38, .31, .32] }, links: {} },
    { title: 'Interactive WebGIS / Geospatial Field Notes', cats: ['WebGIS', 'GIS', 'Programming'], date: 'Ongoing demo', color: 'purple', summary: 'A browser-based map interface for exploring project locations, sample environmental sites, and GeoJSON layers.', problem: 'How can geospatial evidence become more accessible beyond desktop GIS software?', method: 'Leaflet layers, responsive controls, popup context, lightweight GeoJSON, and mobile-first map layout.', data: ['OpenStreetMap', 'Sample GeoJSON', 'Project locations'], result: 'A reusable WebGIS foundation for publishing focused spatial stories.', tech: ['Leaflet', 'GeoJSON', 'JavaScript', 'Web mapping'], location: [31.52, 74.36], images: [], comparison: { title: 'Mapped content', unit: 'count', labels: ['Sites', 'Layers', 'Popups'], beforeLabel: '2023', afterLabel: '2025', before: [12, 3, 12], after: [36, 8, 36] }, links: {} }*/
  
    // ===== YOUR NEW PROJECT =====
   {
    title: 'GeoTIFF Map Maker',
  cats: ['GIS', 'WebGIS', 'Remote Sensing', 'Programming'],   // must match names in DATA.filters
  date: 'Project · 2026',
  color: 'blue',                             // blue | sand | green | lime | purple
  link: 'https://geotiff-map-maker.netlify.app/',   // add the live tool link here once it is hosted (for example GitHub Pages)

  summary: 'GeoTIFF Map Maker is a browser-based tool that turns GeoTIFF rasters and shapefiles into print-ready map layouts. Users load their own data, arrange map frames, legends, grids, scale bars and charts on an A1–A4 sheet, and export the finished map as PDF, PNG or JPG at any resolution. It runs entirely in the browser, so no data is uploaded anywhere.',

  problem: [
    'Producing a finished study-area or results map normally needs desktop GIS software, and layouts often have to be rebuilt by hand for every report, with the coordinate grid, legend and scale all set up again.',
    'The goal was a single, free web tool where anyone can drop in a raster and a boundary shapefile and get a clean, correctly projected map layout without installing software.'
  ],

  method: [
    'GeoTIFFs are read in the browser with geotiff.js, and their coordinate systems are converted to lat/long with proj4. Shapefiles are read with shpjs and drawn on the map, and rasters can be clipped to the study-area boundary.',
    'Layers can be styled with colour ramps, classified colours, unique values or RGB composites. Layouts support several independent map frames, each with its own grid, basemap, legend, north arrow and scale bar, plus text boxes, images, charts, rulers, snap-to guides, and area and distance measurement.',
    'Maps are drawn on an HTML canvas and exported with jsPDF. Large sheets are built in strips, so high-resolution exports are not limited by the browser canvas size.'
  ],

  result: [
    'The tool produces complete map layouts, including a coordinate grid, legend, scale bar, north arrow, charts built from the raster values, and optional satellite, OpenStreetMap, topographic or terrain basemaps.',
    'Users can build their own maps from their own files and export them for reports, theses and presentations.'
  ],

  tech: ['JavaScript', 'HTML5 Canvas', 'geotiff.js', 'proj4', 'shpjs', 'jsPDF'],
  location: [31.17, 72.70],                  // [latitude, longitude]; optional, change it or remove it if the tool isn't tied to a place
  cover: 'C:/Users/dawoo/Downloads/Portfolio/Gallery/Geotiff map maker tool.png'   // a screenshot of the tool or one of its finished maps
},

    {
  title: 'GeoVista: Punjab Satellite Analytics Dashboard',
  cats: ['GIS', 'Environmental','WebGIS', 'Programming'],            // must match names in DATA.filters
  date: 'Project · 2026',
  color: 'green',                            // blue | sand | green | lime | purple
  link: 'https://dawood918.pythonanywhere.com',   // opens the live dashboard

  summary: 'GeoVista is a live web dashboard that turns satellite and weather data into crop health, drought, irrigation and pest-risk information for any division, district or tehsil of Punjab, Pakistan. Analyses run on Google Earth Engine and produce statistics, maps, PDF reports and downloadable GeoTIFF files.',

  problem: [
    'Farmers, planners and researchers in Punjab need up-to-date information on crop condition, water stress and drought, but satellite data is hard to access and process without specialist GIS skills.',
    'The goal was a single, easy-to-use website that brings these indicators together and lets anyone analyse a chosen area without installing software.'
  ],

  method: [
    'Satellite and climate data (including Sentinel-2, Landsat, MODIS and ERA5) are processed in Google Earth Engine to calculate vegetation indices such as NDVI, EVI, VCI and VHI, along with soil moisture, drought and weather indicators.',
    'A Python and Flask backend runs each analysis for the selected division, district or tehsil, and the JavaScript front end shows the results on an interactive map with selectable base maps and legend colour schemes.',
    'The site includes user accounts, a comments page and a contact form, and each analysis can produce a PNG map, PDF report, CSV values and a GeoTIFF prepared on request.'
  ],

  result: [
    'The dashboard is live and covers crop health, irrigation advisory, yield forecasting, drought alerts, pest risk and weather integration for Punjab.',
    'Users can run their own analysis for any area and download the map, report and data files.'
  ],

  tech: ['Google Earth Engine', 'Python', 'Flask', 'JavaScript', 'Leaflet'],
  location: [31.17, 72.70],                  // [latitude, longitude], roughly central Punjab
  cover: 'C:/Users/dawoo/Pictures/Screenshots/cover.png'         // optional: a screenshot of the dashboard
},
    {
      title: 'Temporal Dynamics and Spatial Patterns of Land Surface Temperature in Faisalabad District Using Satellite Remote Sensing',
      cats: ['GIS', 'Environmental', 'Research', 'Remote Sensing'],   // must match names in DATA.filters
      date: 'Project · 2023',
      color: 'blue',                                // blue | sand | green | lime | purple
           summary: 'This study analyzed daytime land surface temperature (LST) across Faisalabad District for 2000, 2005, 2011, 2017, and 2023 using MODIS MOD11A2 imagery processed in Google Earth Engine and mapped in ArcGIS. It examined seasonal cycles, annual temperature extremes, and spatial hotspots to understand thermal patterns relevant to urban heat island effects and urban planning.',

      problem: [
        'How did land surface temperature in Faisalabad District vary across seasons and across space in 2000, 2005, 2011, 2017, and 2023, and do the annual extremes and mean values show a warming trend over this period?',
        'Faisalabad is one of the fastest-growing cities in Pakistan, and rapid urbanization can intensify the urban heat island effect. Establishing a satellite-based thermal baseline is therefore a necessary first step for identifying heat-prone areas and supporting climate-resilient planning.'
      ],

      method: [
        'Daytime LST was obtained from the MODIS MOD11A2 product (8-day composite, 1 km resolution, LST_Day_1km band), accessed through Google Earth Engine (GEE). The Faisalabad District boundary shapefile was imported to define the study area, and the image collection was filtered separately for each of five study years: 2000, 2005, 2011, 2017, and 2023.',
        'A custom GEE script handled preprocessing. It selected the daytime LST band, scaled the values to Kelvin, converted them to degrees Celsius, and retained the acquisition date of each image so that temporal patterns could be preserved.',
        'The analysis combined time series and spatial methods. A time series chart of mean LST per 8-day composite was generated for each year, and the annual minimum and maximum values and their dates were extracted. The processed images were exported as GeoTIFF files, then mapped in ArcGIS, where classified LST maps were cross-checked using visual image interpretation and compared across years to identify cool and hot zones and changes over time.'
      ],

      result: [
        'LST followed a clear seasonal cycle in every study year. Annual maxima occurred between April and June (27 April 2000, 2 June 2005, 17 May 2011, 2 June 2017, and 9 May 2023), and annual minima occurred in late December or January (26 December 2000, 1 January 2005, and 9 January in 2011, 2017, and 2023). The report attributes the spring and early-summer peaks to stronger solar radiation, reduced vegetation cover, and heat released by industrial activity, and the winter lows to less direct solar radiation and reduced factory operation.',
        'Annual maximum LST was 43.5 °C in 2000, 43.5 °C in 2005, 41.08 °C in 2011, 40.31 °C in 2017, and 39.07 °C in 2023, a decline of 4.43 °C between 2000 and 2023. Annual minimum LST was 22.5 °C, 16.53 °C, 15.91 °C, 16.91 °C, and 15.34 °C, respectively. Mean minimum LST from the classified maps was 29.5 °C in 2000, 27.54 °C in 2005, 27.67 °C in 2011, 27.79 °C in 2017, and 28.16 °C in 2023, and mean maximum LST was 35.66 °C, 32.52 °C, 32.35 °C, 33.83 °C, and 33.64 °C. Both mean values fell after 2000 and then rose from 2005 or 2011 onward.',
        'The spatial pattern was consistent across all five years. The coolest areas were located in the upper eastern and upper western parts of the district, and the hottest areas were concentrated in the upper-middle western and lower eastern sections. This stable hotspot pattern identifies zones that may warrant priority attention for heat mitigation, such as added green space, cool roofing, and managed urban expansion.',
        'Overall, the five sampled years show strong seasonality and persistent spatial hotspots, but they do not show a steady increase in annual extreme temperatures. Several limitations apply. Only five individual years were analyzed, the 1 km resolution cannot resolve neighborhood-scale heat islands, and MODIS thermal data can be affected by cloud cover and calibration artifacts. Land cover change and other external drivers were not modeled. Future work should therefore use a continuous annual series, finer-resolution thermal imagery, and land cover data to test the link between urban growth and LST.'
      ],
      tech: ['ArcGIS Pro', 'R', 'GEE'],
      location: [31.42, 73.08],                     // [latitude, longitude]
      cover: 'C:/Users/dawoo/Downloads/Portfolio/Projects/LST Images/Study Area.png',        // optional card cover image
      images: [                                     // optional, shown on the project page
        'C:/Users/dawoo/Downloads/Portfolio/Projects/LST Images/Study Area.png',
        'C:/Users/dawoo/Downloads/Portfolio/Projects/LST Images/Year 2000.png',
        'C:/Users/dawoo/Downloads/Portfolio/Projects/LST Images/Graph 2000.png',
        'C:/Users/dawoo/Downloads/Portfolio/Projects/LST Images/Year 2005.png',
        'C:/Users/dawoo/Downloads/Portfolio/Projects/LST Images/Graph 2005.png',
        'C:/Users/dawoo/Downloads/Portfolio/Projects/LST Images/year 2011.png',
        'C:/Users/dawoo/Downloads/Portfolio/Projects/LST Images/graph 2011.png',
        'C:/Users/dawoo/Downloads/Portfolio/Projects/LST Images/Year 2017.png',
        'C:/Users/dawoo/Downloads/Portfolio/Projects/LST Images/graph 2017.png',
        'C:/Users/dawoo/Downloads/Portfolio/Projects/LST Images/Year 2023.png',
        'C:/Users/dawoo/Downloads/Portfolio/Projects/LST Images/Graph 2023.png',
        'C:/Users/dawoo/Downloads/Portfolio/Projects/LST Images/graph Analysis.png',
        'C:/Users/dawoo/Downloads/Portfolio/Projects/LST Images/Mean Maximum LST.png',
        'C:/Users/dawoo/Downloads/Portfolio/Projects/LST Images/Mean Min LST.png'
      ],
      compare: {                                    // optional before/after image pair
        before: 'C:/Users/dawoo/Downloads/Portfolio/Projects/LST Images/Year 2000.png',
        after: 'C:/Users/dawoo/Downloads/Portfolio/Projects/LST Images/Year 2023.png'
      },
        comparison: {
        title: 'Land Surface Temperature by year',
        unit: '°C',
        type: 'line',
        labels: ['2000', '2005', '2011', '2017', '2023'],
        series: [
          { label: 'Minimum LST', data: [22.5, 16.53, 15.91, 16.91, 15.34] },
          { label: 'Maximum LST', data: [43.5, 43.5, 41.08, 40.31, 39.07] },
          { label: 'Mean min LST', data: [29.5, 27.54, 27.67, 27.79, 28.16] },
          { label: 'Mean max LST', data: [35.66, 32.52, 32.35, 33.83, 33.64] }
        ]
      },    
      /*   comparison: {
        title: 'Classification accuracy assessment',
        unit: 'score (0–1)',
        type: 'bar',
        labels: ['Overall accuracy', 'Kappa coefficient'],
        series: [
          { label: '2014', data: [0.84, 0.6429] },
          { label: '2023', data: [0.86, 0.7861] }
        ]
      }*/
    },
    {
      title: 'Multitemporal Land Use/Land Cover Change Detection in Lahore District, Pakistan, Using Landsat 8 and Landsat 9 Satellite Imagery (2014–2023)',
      cats: ['GIS', 'Environmental', 'Research'],   // must match names in DATA.filters
      date: 'Project · 2024',
      color: 'blue',                                // blue | sand | green | lime | purple
      summary: 'This project investigated land use and land cover (LULC) changes in Lahore District, Punjab, Pakistan, between 2014 and 2023 using Landsat 8 and Landsat 9 satellite imagery. Supervised classification using the Maximum Likelihood algorithm and post-classification change detection were applied to identify spatial transitions among water bodies, vegetation, barren land, and urban areas..',
      problem: 'How did land use and land cover patterns in Lahore District change between 2014 and 2023, and to what extent did urban expansion contribute to the conversion of barren land and vegetated areas into built-up areas? The study also evaluated the reliability of the classified satellite imagery using accuracy assessment metrics, including the Kappa coefficient, to support the interpretation of detected changes.',
      method: 'Data preprocessing, analysis steps, tools and techniques used.',
      data: ['Landsat 8 and 9 OLI Sensor', 'Lahore Boundary Layers'],
            result: [
        'Landsat 8 and Landsat 9 OLI imagery for 2014 and 2023 was classified using the maximum likelihood algorithm with spectral bands 2–7, which allowed the major land cover classes (water bodies, vegetation, barren land, and urban areas) to be distinguished by their spectral characteristics. Post-classification change detection was then applied to produce land cover maps for both years, transition statistics, and accuracy assessments.',
        'The results indicated substantial urban expansion between 2014 and 2023. Approximately 450.07 area units of barren land and 167.43 area units of vegetation were converted to urban land. In contrast, 578.74 area units of urban land and 156.44 area units of vegetation remained unchanged across both observation dates. The transition matrix covered a total of approximately 1,727.93 area units.',
        'Classification accuracy improved over the study period, with Cohen’s kappa increasing from .64 in 2014 to .79 in 2023, indicating stronger agreement between the classified results and the reference data in the later assessment.',
        'These findings demonstrate the value of satellite remote sensing and GIS for monitoring urban growth and identifying land cover transitions, and they support evidence-based urban and environmental planning. The results underscore the importance of sustainable land management, the protection of vegetation and green spaces, and further investigation of the drivers of urban expansion in Lahore District.'
      ],
      tech: ['ArcGIS Pro', 'R', 'GEE'],
      location: [31.54972, 74.34361],                     // [latitude, longitude]
      cover: 'C:/Users/dawoo/Downloads/Portfolio/Projects/Change Detection Images/R-2023.png',        // optional card cover image
      images: [                                     // optional, shown on the project page
        'C:/Users/dawoo/Downloads/Portfolio/Projects/Change Detection Images/ML-2014.png',
        'C:/Users/dawoo/Downloads/Portfolio/Projects/Change Detection Images/R-2014.png',
        'C:/Users/dawoo/Downloads/Portfolio/Projects/Change Detection Images/D-2014.png',
        'C:/Users/dawoo/Downloads/Portfolio/Projects/Change Detection Images/Kappa Constant 2014.png',
        'C:/Users/dawoo/Downloads/Portfolio/Projects/Change Detection Images/ML-2023.png',
        'C:/Users/dawoo/Downloads/Portfolio/Projects/Change Detection Images/R-2023.png',
        'C:/Users/dawoo/Downloads/Portfolio/Projects/Change Detection Images/d-2023.png',
        'C:/Users/dawoo/Downloads/Portfolio/Projects/Change Detection Images/Kappa Constant 2023.png',
        'C:/Users/dawoo/Downloads/Portfolio/Projects/Change Detection Images/C-C CD.png',
        'C:/Users/dawoo/Downloads/Portfolio/Projects/Change Detection Images/CD by FM.png',
        'C:/Users/dawoo/Downloads/Portfolio/Projects/Change Detection Images/AC .png',
        'C:/Users/dawoo/Downloads/Portfolio/Projects/Change Detection Images/T-AC.png',
        'C:/Users/dawoo/Downloads/Portfolio/Projects/Change Detection Images/Transition Area change.png',
        'C:/Users/dawoo/Downloads/Portfolio/Projects/Change Detection Images/AC-Graph.png'
      ],
      compare: {                                    // optional before/after image pair
        before: 'C:/Users/dawoo/Downloads/Portfolio/Projects/Change Detection Images/C-C CD.png',
        after: 'C:/Users/dawoo/Downloads/Portfolio/Projects/Change Detection Images/CD by FM.png'
      },
      comparison: {
        title: 'Land cover transition area, 2014–2023',
        unit: 'area units',
        type: 'bar',
        labels: [
          'Barren→Barren', 'Barren→Urban', 'Barren→Vegetation', 'Barren→Water',
          'Urban→Barren', 'Urban→Urban', 'Urban→Vegetation', 'Urban→Water',
          'Vegetation→Barren', 'Vegetation→Urban', 'Vegetation→Vegetation', 'Vegetation→Water',
          'Water→Barren', 'Water→Urban', 'Water→Vegetation', 'Water→Water'
        ],
        series: [
          { label: 'Area changed', data: [
            65.86, 450.07, 129.58, 9.86,
            17.40, 578.74, 120.49, 7.39,
            4.42, 167.43, 156.44, 6.10,
            0.15, 5.33, 2.35, 6.33
          ] }
        ]
      }
      
    }
  ],

  research: [
    ['Urban heat and land surface temperature', 'How do land-cover patterns and seasonal weather shape thermal exposure?', 'MODIS / Landsat time series, zonal statistics, spatial comparison', 'MODIS LST, Landsat, administrative boundaries', 'A clear thermal baseline for urban and peri-urban planning', 'Exploring'],
    ['Agricultural remote sensing for crop resilience', 'Which satellite indicators help identify crop stress early?', 'NDVI, moisture proxies, rainfall context, anomaly detection', 'Sentinel-2, rainfall, crop boundaries', 'Decision-ready monitoring signals for field prioritization', 'Research interest'],
    ['Forest monitoring with SAR and optical data', 'Can complementary sensors improve forest-change detection?', 'Sentinel-1 backscatter change plus optical validation', 'Sentinel-1, Sentinel-2, forest masks', 'Cloud-resilient monitoring workflows for environmental management', 'Prototyping'],
    ['Geospatial AI for environmental change', 'Where can machine learning improve repeatable spatial analysis?', 'Feature engineering, classification, uncertainty-aware evaluation', 'Satellite imagery and field/reference samples', 'Transparent models that support — not replace — expert interpretation', 'Future direction']
  ],
  /* GALLERY — [category, title, caption, art class (g1–g6), icon, optional image path]
     To use a real photo/map, put it in an "images" folder and add its path as the 6th value, e.g. 'images/lst-map.jpg' */
  galleryFilters: ['All', 'Maps', 'Field', 'Dashboards'],
  gallery: [
    ['Field', 'Drone survey', 'Drone imagery from field operations.', 'g1', '🚁', "C:/Users/dawoo/Downloads/Portfolio/Gallery/Drone.png"],
    ['Field', 'Drone imagery survey', 'Aerial drone imagery captured during field operations.', 'g5', '🚁', "C:/Users/dawoo/Downloads/Portfolio/Gallery/Drone Imagery.jpg"],
    ['Maps', 'GeoTiff map maker tool', 'A simple tool that turns GeoTIFF files into clean, ready-to-use maps.', 'g2', '🗺', 'C:/Users/dawoo/Downloads/Portfolio/Gallery/Geotiff map maker tool.PNG'],
    ['Office', 'Award', 'Emerging Profesional of the year 2025.', 'g3', '📡', 'C:/Users/dawoo/Downloads/Portfolio/Gallery/Talented Award.jpeg'],
    ['Field', 'Geospatial Visualization', 'Field Map Display Activity in the Pulse project visualizes field locations and operational activities on an interactive map for efficient monitoring and decision-making.', 'g6', '📍', 'C:/Users/dawoo/Downloads/Portfolio/Gallery/Field.jpeg'],
    ['Dashboards', 'Climate indicator dashboard', 'Rainfall, temperature and NDVI at a glance (sample).', 'g4', '📊', "C:/Users/dawoo/Downloads/Portfolio/Gallery/Dashboard.png"],
    ['Maps', 'Geospatial Monitoring', 'It provides a clear geographical overview of field operations, helping users track activities and analyze spatial data efficiently.', 'g1', '🏙', 'C:/Users/dawoo/Downloads/Portfolio/Gallery/Field2.jpeg'],
    ['Field', 'Fieldwork notes', 'Observations and photos linked to map layers (sample).', 'g5', '🥾', "C:/Users/dawoo/Downloads/Portfolio/Gallery/RTK DGPS.jpg"]
  ]
};

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const P = DATA.profile, cap = s => s[0].toUpperCase() + s.slice(1);
const NAV = ['about', 'experience', 'skills', 'projects', 'research', 'certifications', 'gallery', 'contact'];

function render() {
  document.title = `${P.name === 'Your Name' ? 'GeoVista' : P.name} — Remote Sensing | GIS | Environmental Science`;
  $('#brandName').textContent = $('#footBrand').textContent = P.brand;
  $('#heroLead').textContent = P.intro; $('#avail').textContent = P.availability;
  $('#copy').textContent = `© ${new Date().getFullYear()} ${P.name}. All rights reserved.`;
  $('#menu').innerHTML = NAV.map(id => `<a href="#${id}" data-id="${id}">${cap(id)}</a>`).join('');
  const t = [...DATA.tools, ...DATA.tools].map(x => `<span>${x}</span>`).join(''); $('#ticker').innerHTML = t;
  $('#aboutBody').innerHTML = `<div><p>${P.intro}</p><p>${P.objectives}</p><div class="quote"><p>“${P.philosophy}”</p></div>
    <div class="tags">${P.focus.map(f => `<span class="tag">${f}</span>`).join('')}</div>${P.photo2 ? `<figure class="about-pic"><img src="${esc(P.photo2)}" alt="${esc(P.name)}"></figure>` : ''}</div>
    <div>${P.photo ? '<div class="avatar has-photo" id="avatar"></div>' : ''}<div class="stats">${[['RS', 'Remote sensing'], ['GIS', 'Spatial analysis'], ['EO', 'Earth observation'], ['ENV', 'Environmental analysis']].map(s => `<div class="stat"><strong>${s[0]}</strong><span>${s[1]}</span></div>`).join('')}</div>
    <div class="meta"><span>BASE LOCATION</span>${P.location}</div></div>`;
  const skillCount = DATA.skills.reduce((n, s) => n + s[2].length, 0);
  $('#counters').innerHTML = [[DATA.projects.length, 'Projects'], [DATA.skills.length, 'Skill areas'], [skillCount, 'Tools & methods'], [DATA.research.length, 'Research themes']]
    .map(c => `<div class="counter"><b data-n="${c[0]}">0</b><span>${c[1]}</span></div>`).join('');
  $('#skillGrid').innerHTML = DATA.skills.map(([n, c, rows]) => `<article class="skill"><div class="skill-top"><h3>${n}</h3><span>${c}</span></div>
    ${rows.map(([r, l]) => `<div class="row"><div class="row-h"><span>${r}</span><b>${l}%</b></div><div class="bar"><i data-w="${l}"></i></div></div>`).join('')}</article>`).join('');
  $('#researchGrid').innerHTML = DATA.research.map((r, i) => `<article class="r-card"><div class="card-head"><span class="tag">${r[5]}</span><small>0${i + 1}</small></div><h3>${r[0]}</h3><p>${r[1]}</p>
    ${[['Method', r[2]], ['Data', r[3]], ['Outcome', r[4]]].map(f => `<div class="field"><span>${f[0]}</span><p>${f[1]}</p></div>`).join('')}</article>`).join('');
  const L = P.links, cl = [];
  if (P.email) cl.push(`<a class="c-link" href="mailto:${P.email}">✉ ${P.email}</a>`);
  cl.push(`<span class="c-link">📍 ${P.location}</span>`);
  [['linkedin', 'in LinkedIn'], ['github', '⌥ GitHub'], ['scholar', '🎓 Scholar']].forEach(([k, l]) => L[k] && cl.push(`<a class="c-link" href="${L[k]}" target="_blank" rel="noopener">${l}</a>`));
  $('#contactLinks').innerHTML = cl.join('');
  renderExtra();
}

/* projects + modal */
let filter = 'All', lastFocus;

/* change chips: after − before for each project's `comparison` data (green = increase, red = decrease) */
function changeChips(p) {
  const c = p.comparison; if (!c || !c.before || !c.after || !c.labels) return '';
  const avg = a => a.reduce((s, x) => s + x, 0) / a.length;
  const d = c.labels.length > 6 ? [['Mean', avg(c.after) - avg(c.before)]] : c.labels.slice(0, 3).map((l, k) => [l, c.after[k] - c.before[k]]);
  return `<div class="p-change"><small>${esc(c.beforeLabel)} → ${esc(c.afterLabel)}</small>${d.map(([l, v]) => `<span class="${v >= 0 ? 'up' : 'dn'}">${esc(l)} ${v > 0 ? '+' : ''}${+v.toFixed(2)} ${esc(c.unit)}</span>`).join('')}</div>`;
}

function renderProjects() {
  $('#filters').innerHTML = DATA.filters.map(f => `<button type="button" class="fbtn${f === filter ? ' on' : ''}" data-f="${f}">${f}</button>`).join('');
  const rows = DATA.projects.map((p, i) => [p, i]).filter(([p]) => filter === 'All' || p.cats.includes(filter));
  $('#projectGrid').innerHTML = rows.length ? rows.map(([p, i], n) => `<article class="proj"${p.link ? ` data-ext="${esc(p.link)}" tabindex="0" role="link"` : ''} style="${p.link ? 'cursor:pointer;' : ''}animation-delay:${n * 70}ms"><div class="cover ${p.color}${p.cover ? ' has-img' : ''}">${p.cover ? `<img class="cover-img" src="${esc(p.cover)}" alt="">` : ''}<span>PROJECT / 0${i + 1}</span></div>
    <div class="p-body"><div class="t-meta"><span>${p.cats[0]}</span><span>·</span><span>${p.date}</span></div><h3>${p.title}</h3><p>${p.summary}</p>
    <div class="tags">${p.tech.map(t => `<span class="tag">${t}</span>`).join('')}</div>${changeChips(p)}<a class="link-btn" href="?project=${i}">Open full project page ↗</a></div></article>`).join('')
    : '<div class="empty"><strong>No projects in this category yet.</strong></div>';
}

function openModal(i) {
  const p = DATA.projects[i]; lastFocus = document.activeElement;
  $('#mEye').textContent = `PROJECT / 0${i + 1}`; $('#mTitle').textContent = p.title;
  const links = Object.entries(p.links).filter(([, h]) => h).map(([k, h]) => `<a class="btn primary" style="margin:1.2rem .5rem 0 0" href="${h}" target="_blank" rel="noopener">${cap(k)} ↗</a>`).join('');
  $('#mBody').innerHTML = [['Problem', p.problem], ['Methodology', p.method], ['Data sources', p.data.join(' · ')], ['Results', p.result]].map(x => `<h4>${x[0]}</h4><p>${x[1]}</p>`).join('') + (links || '<p class="note">Add real URLs to <code>links</code> in script.js to show them here.</p>');
  $('#backdrop').classList.add('open'); document.body.style.overflow = 'hidden'; $('#mClose').focus();
}
function closeModal() { $('#backdrop').classList.remove('open'); document.body.style.overflow = ''; lastFocus && lastFocus.focus(); }



function certViewer(c) {
  const src = c.file || c.image || c.link;
  if (!src) return '<p class="note">Add a <code>file</code> path (PDF or image) to this certificate.</p>';
  const url = encodeURI(src);
  const isPdf = /\.pdf($|[?#])/i.test(src);
  return isPdf
    ? `<iframe class="cert-frame" src="${esc(url)}#toolbar=0&navpanes=0&scrollbar=0&view=Fit" title="${esc(c.name)} certificate"></iframe>`
    : `<img class="cert-img" src="${esc(url)}" alt="${esc(c.name)} certificate">`;
}

function renderCertificatePage() {
  const id = Number(new URLSearchParams(location.search).get('certificate'));
  const c = DATA.certifications[id];
  if (!c) return false;
  document.title = `${c.name} — ${P.brand}`;
  document.body.innerHTML = `<main class="project-page"><div class="shell project-page-shell">
    <a class="back-link" href="index.html#certifications">← Back to certifications</a>
    <p class="eyebrow">CERTIFICATION / ${String(id + 1).padStart(2, '0')}</p>
    <h1 class="cert-title">${esc(c.name)}</h1>
    <p class="project-page-summary">${esc(c.description || 'Verified professional credential.')}</p>
    <div class="project-page-grid cert-page-grid">
      <article><h2>Issued by</h2><p>${esc(c.org || '—')}</p><h2>Date</h2><p>${esc(c.date || '—')}</p>${c.issuer ? `<h2>Credential area</h2><p>${esc(c.issuer)}</p>` : ''}</article>
      <aside class="project-page-aside cert-viewer">${certViewer(c)}</aside>
    </div>
   </div></main>`;
  return true;
}

function renderProjectPage() {
  const id = Number(new URLSearchParams(location.search).get('project'));
  const p = DATA.projects[id];
  if (!p) return false;
  if (p.link) { location.replace(p.link); return true; }
  const images = (p.images || []).filter(Boolean);
  const cp = p.compare || {}, cm = p.comparison || {};
  const pair = [['before', cp.before, cp.beforeLabel || cm.beforeLabel], ['after', cp.after, cp.afterLabel || cm.afterLabel]].filter(x => x[1]);
  document.title = `${p.title} — ${P.brand}`;
  document.body.innerHTML = `<main class="project-page">
    <div class="shell project-page-shell cert-shell">
      <a class="back-link" href="index.html#projects">← Back to projects</a>
      <p class="eyebrow">PROJECT / ${String(id + 1).padStart(2, '0')}</p>
      <h1>${esc(p.title)}</h1>
      <p class="project-page-summary">${esc(p.summary)}</p>
      <div class="tags">${p.cats.map(x => `<span class="tag">${esc(x)}</span>`).join('')}</div>
      <div class="project-page-grid">
        <article><h2>Project question</h2>${paras(p.problem)}<h2>Methodology</h2>${paras(p.method)}${(p.data || []).length ? `<h2>Data sources</h2><p>${esc(p.data.join(' · '))}</p>` : ''}</article>
        <aside class="project-page-aside"><h2>Tools</h2><div class="tags">${p.tech.map(x => `<span class="tag">${esc(x)}</span>`).join('')}</div><h2>Location</h2><p>${p.location ? `${p.location[0]}, ${p.location[1]}` : 'Add location: [latitude, longitude]'}</p></aside>
      </div>
    <section class="project-result"><h2>Result</h2>${paras(p.result)}</section>
    ${pair.length ? `<section class="project-images"><h2>Change over time</h2>${changeChips(p)}<div class="project-image-grid two">${pair.map(x => `<figure><img src="${esc(x[1])}" alt="${esc(p.title)} ${x[0]}" loading="lazy"><figcaption>${esc(x[2] || x[0])}</figcaption></figure>`).join('')}</div></section>` : ''}
    <section class="project-images"><h2>Project images</h2>${images.length ? `<div class="project-image-grid">${images.map((src, i) => `<figure class="proj-img" data-img="${i}" tabindex="0" role="button" aria-label="Open image ${i + 1}"><img src="${esc(src)}" alt="${esc(p.title)} image ${i + 1}" loading="lazy"></figure>`).join('')}</div>` : '<p class="note">Add image paths to this project’s <code>images</code> array in script.js to show them here.</p>'}</section>
    </div></main>`;
  return true;
}


/* gallery + lightbox */
let gf = 'All', visible = [], cur = 0;
function renderGallery() {
  const fl = DATA.galleryFilters; if (!fl.includes(gf)) gf = 'All';
  $('#gFilters').innerHTML = fl.map(f => `<button type="button" class="fbtn${f === gf ? ' on' : ''}" data-g="${f}">${f}</button>`).join('');
  visible = DATA.gallery.filter(g => gf === 'All' || g[0] === gf);
  $('#galleryGrid').innerHTML = visible.map((g, i) => `<figure class="g-item g-art ${g[3]}" tabindex="0" data-i="${i}" style="animation-delay:${i * 60}ms" role="button" aria-label="Open ${g[1]}">
    ${g[5] ? `<img src="${g[5]}" alt="${g[1]}" loading="lazy">` : `<span class="g-ico">${g[4]}</span>`}<figcaption class="g-cap"><small>${g[0]}</small><b>${g[1]}</b></figcaption></figure>`).join('');
function renderGallery() {
  // ... your existing lines stay as they are ...
  $('#galleryGrid').innerHTML = visible.map((g, i) => `...`).join('');

  // NEW: if an image can't load, show the path it tried on the tile
  $$('#galleryGrid img').forEach(img => img.addEventListener('error', () => {
    const s = document.createElement('span');
    s.className = 'g-ico';
    s.textContent = '⚠ Not found: ' + img.getAttribute('src');
    s.style.cssText = 'font-size:.8rem;padding:1rem;text-align:center;word-break:break-all';
    img.replaceWith(s);
  }));
}
  }
function showLb(i) {
  cur = (i + visible.length) % visible.length; const g = visible[cur];
  const a = $('#lbArt'); a.className = `lb-art g-art ${g[3]}`;
  a.innerHTML = g[5] ? `<img src="${g[5]}" alt="${g[1]}">` : `<span>${g[4]}</span>`;
  $('#lbCap').innerHTML = `<b>${g[1]}</b><span>${g[2]} · ${cur + 1} / ${visible.length}</span>`;
  $('#lb').classList.add('open'); document.body.style.overflow = 'hidden';
}
function closeLb() { $('#lb').classList.remove('open'); document.body.style.overflow = ''; }

/* theme, typing, scroll effects */
function setTheme(t) { document.documentElement.dataset.theme = t; $('#themeBtn').textContent = t === 'dark' ? '☀' : '☾'; try { localStorage.setItem('gv-theme', t); } catch (e) {} }
function typing() {
  const el = $('#typed'); let r = 0, c = 0, del = false;
  if (matchMedia('(prefers-reduced-motion:reduce)').matches) { el.textContent = P.roles[0]; return; }
  (function tick() {
    const w = P.roles[r]; c += del ? -1 : 1; el.textContent = w.slice(0, c); let d = del ? 35 : 75;
    if (!del && c === w.length) { del = true; d = 1500; } else if (del && c === 0) { del = false; r = (r + 1) % P.roles.length; d = 350; }
    setTimeout(tick, d);
  })();
}
function count(el) {
  const to = +el.dataset.n, t0 = performance.now();
  (function f(t) { const k = Math.min((t - t0) / 1200, 1); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(f); })(t0);
}
function scrollFx() {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; e.target.classList.add('in');
    $$('.bar i', e.target).forEach(b => b.style.width = b.dataset.w + '%'); $$('[data-n]', e.target).forEach(count); io.unobserve(e.target);
  }), { threshold: .12 });
  $$('.reveal').forEach(el => io.observe(el));
  const spy = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) $$('.menu a').forEach(a => a.classList.toggle('on', a.dataset.id === e.target.id)); }), { rootMargin: '-35% 0px -55% 0px' });
  $$('main section[id]').forEach(s => spy.observe(s));
  const onScroll = () => {
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    $('#progress').style.width = (max > 0 ? y / max * 100 : 0) + '%';
    $('#header').classList.toggle('scrolled', y > 20); $('#top').classList.toggle('show', y > 700);
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
}

/* contact form */
function initForm() {
  $('#form').addEventListener('submit', e => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.target)); Object.keys(d).forEach(k => d[k] = d[k].trim());
    const er = {};
    if (d.name.length < 2) er.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(d.email)) er.email = 'Please enter a valid email.';
    if (d.subject.length < 4) er.subject = 'Please add a short subject.';
    if (d.message.length < 20) er.message = 'Please share at least 20 characters.';
    $$('.err').forEach(s => s.textContent = er[s.dataset.for] || '');
    const note = $('#formNote'); note.className = 'note';
    if (Object.keys(er).length) { note.textContent = 'Please fix the highlighted fields.'; $('#' + Object.keys(er)[0]).focus(); return; }
    if (!P.email) { console.warn('Set DATA.profile.email in script.js to enable the contact form.'); note.textContent = 'Sending is not available right now. Please try again later.'; return; }
    const btn = e.target.querySelector('button[type=submit]'), form = e.target, mail = () => { location.href = `mailto:${P.email}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(d.message + '\n\n— ' + d.name + ' (' + d.email + ')')}`; };
    btn.disabled = true; note.textContent = 'Sending…';
    fetch(`https://formsubmit.co/ajax/${encodeURIComponent(P.email)}`, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ name: d.name, email: d.email, _replyto: d.email, subject: d.subject, message: d.message, _subject: `Portfolio message: ${d.subject}`, _template: 'table', _captcha: 'false', _honey: d._honey || '' }) })
      .then(r => r.json().catch(() => ({})).then(j => { if (!r.ok || String(j.success) === 'false') throw new Error(j.message || `HTTP ${r.status}`); }))
      .then(() => { note.textContent = `Thank you — your message was sent. I will reply to ${d.email}.`; note.classList.add('ok'); form.reset(); })
      .catch(err => {
        console.error('Contact form: send failed ->', err);
        const m = String(err && err.message || err), local = location.protocol === 'file:';
        const why = local ? 'sending only works on the published website, not from a file on this computer'
          : /activat/i.test(m) ? 'the form needs a one-time activation (check the inbox of ' + P.email + ')'
          : 'the mail service did not accept it';
        note.textContent = `The message could not be sent (${why}). Your email app is opening instead — or write to ${P.email}.`; mail();
      })
      .finally(() => { btn.disabled = false; });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const query = new URLSearchParams(location.search);
  if (query.has('project')) { renderProjectPage(); return; }
  if (query.has('certificate')) { renderCertificatePage(); return; }
  render(); renderProjects(); renderGallery(); initForm(); initUploads(); initMore(); initOutlines(); typing(); scrollFx(); heroFx();
  let t = 'dark'; try { t = localStorage.getItem('gv-theme') || (matchMedia('(prefers-color-scheme:light)').matches ? 'light' : 'dark'); } catch (e) {}
  setTheme(t);
  $('#themeBtn').onclick = () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
  $('#burger').onclick = () => { const o = $('#menu').classList.toggle('open'); $('#burger').setAttribute('aria-expanded', o); $('#burger').textContent = o ? '✕' : '☰'; };
  $('#menu').onclick = e => { if (e.target.matches('a')) { $('#menu').classList.remove('open'); $('#burger').textContent = '☰'; } };
  $('#filters').onclick = e => { const b = e.target.closest('[data-f]'); if (b) { filter = b.dataset.f; renderProjects(); } };
  $('#projectGrid').onclick = e => {
  if (e.target.closest('a')) return;                 // the button link opens by itself
  const x = e.target.closest('[data-ext]');
  if (x) { window.open(x.dataset.ext, '_blank', 'noopener,noreferrer'); return; }
  const b = e.target.closest('[data-p]'); if (b) openModal(+b.dataset.p);
};
$('#projectGrid').onkeydown = e => {
  const x = e.target.closest('[data-ext]');
  if (x && e.target === x && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); window.open(x.dataset.ext, '_blank', 'noopener,noreferrer'); }
};
  $('#gFilters').onclick = e => { const b = e.target.closest('[data-g]'); if (b) { gf = b.dataset.g; renderGallery(); } };
  $('#galleryGrid').onclick = e => { const f = e.target.closest('[data-i]'); if (f) showLb(+f.dataset.i); };
  $('#galleryGrid').onkeydown = e => { const f = e.target.closest('[data-i]'); if (f && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); showLb(+f.dataset.i); } };
  $('#mClose').onclick = closeModal; $('#lbClose').onclick = closeLb;
  $('#lbPrev').onclick = () => showLb(cur - 1); $('#lbNext').onclick = () => showLb(cur + 1);
  $('#backdrop').onmousedown = e => { if (e.target.id === 'backdrop') closeModal(); };
  $('#lb').onmousedown = e => { if (e.target.id === 'lb') closeLb(); };
  addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); closeLb(); }
    if ($('#lb').classList.contains('open')) { if (e.key === 'ArrowLeft') showLb(cur - 1); if (e.key === 'ArrowRight') showLb(cur + 1); }
  });
  $('#top').onclick = () => scrollTo({ top: 0, behavior: 'smooth' });
});

/* one bullet per line: accepts an array of strings, or a string with new lines (use backticks) */
const lines = v => [].concat(v || []).flatMap(x => String(x).split('\n')).map(x => x.trim()).filter(Boolean);
/* splits text into paragraphs: accepts an array of strings, or one string with a blank line between paragraphs */
const paras = v => [].concat(v || []).flatMap(x => String(x).split(/\n\s*\n/)).map(x => x.trim()).filter(Boolean).map(x => `<p>${esc(x)}</p>`).join('');

/* ---------- experience, certifications, renumbering ---------- */
function renderExtra() {
  $('#expList').innerHTML = DATA.experience.map(i => `<article class="t-item"><span class="t-dot"></span><div class="t-card"><div class="t-meta"><span>${i.dates}</span><span>·</span><span>${i.loc}</span></div><h3>${i.title}</h3><h4>${i.org}</h4><p>${i.desc}</p>
    <ul class="chips arrow">${lines(i.items).map(x => `<li>${x}</li>`).join('')}</ul><ul class="chips">${(i.tools || []).map(t => `<li class="tag">${t}</li>`).join('')}</ul></div></article>`).join('');
  const C = allCerts();
  $('#certList').innerHTML = C.length ? certSection(C) : '<div class="empty"><strong>No certifications added yet.</strong>Add verified records to <code>DATA.certifications</code> in script.js.</div>';
  $$('main section:not(.hero)').forEach((sec, i) => { const e = $('.eyebrow', sec); if (e) e.textContent = e.textContent.replace(/^\d+/, String(i + 1).padStart(2, '0')); });
}

/* ---------- uploads (kept in this browser with IndexedDB) ---------- */
const U = { photo: null, photoUrl: null, cv: null, cvUrl: null, gallery: [] }, mem = {};
const note = t => { const n = $('#upNote'); if (n) n.textContent = t; };
const idb = () => new Promise((ok, no) => { const r = indexedDB.open('gv-uploads', 1); r.onupgradeneeded = () => r.result.createObjectStore('kv'); r.onsuccess = () => ok(r.result); r.onerror = () => no(r.error); });
async function kv(op, key, val) {
  try {
    const db = await idb();
    return await new Promise((ok, no) => { const tx = db.transaction('kv', op === 'get' ? 'readonly' : 'readwrite'), st = tx.objectStore('kv'), q = op === 'get' ? st.get(key) : op === 'set' ? st.put(val, key) : st.delete(key); tx.oncomplete = () => ok(q.result); tx.onerror = () => no(tx.error); });
  } catch (e) {
    note('Browser storage is blocked here — uploads will last only until you close this tab.');
    if (op === 'get') return mem[key]; if (op === 'set') mem[key] = val; else delete mem[key];
  }
}
function shrink(file, max = 1600) {
  return new Promise((ok, no) => {
    const img = new Image(), u = URL.createObjectURL(file);
    img.onload = () => { const k = Math.min(1, max / Math.max(img.width, img.height)), c = document.createElement('canvas'); c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height); URL.revokeObjectURL(u); c.toBlob(b => b ? ok(b) : no(new Error('encode')), 'image/jpeg', .82); };
    img.onerror = () => { URL.revokeObjectURL(u); no(new Error('bad image')); }; img.src = u;
  });
}
function renderAvatar() {
  const a = $('#avatar'); if (!a || !P.photo) return;      // the picture comes from DATA.profile.photo (no upload box)
  a.setAttribute('role', 'img'); a.setAttribute('aria-label', `${P.name} — profile photo`);
  a.innerHTML = `<img src="${esc(P.photo)}" alt="${esc(P.name)}">`;
}



function initUploads() {
  const photo = $('#upPhoto');
  $('#aboutBody').addEventListener('click', async e => {
    if (e.target.closest('[data-rm]')) { e.stopPropagation(); U.photoUrl && URL.revokeObjectURL(U.photoUrl); U.photo = U.photoUrl = null; await kv('del', 'photo'); renderAvatar(); }
    else if (!P.photo && e.target.closest('#avatar')) photo.click();
  });
  $('#aboutBody').addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.id === 'avatar') photo.click(); });
  photo.onchange = async () => {
    const f = photo.files[0]; photo.value = ''; if (!f || !f.type.startsWith('image/')) return;
    try { U.photo = await shrink(f, 600); U.photoUrl && URL.revokeObjectURL(U.photoUrl); U.photoUrl = null; await kv('set', 'photo', U.photo); renderAvatar(); } catch (e) { alert('That image could not be read.'); }
  };
  (async () => { U.photo = await kv('get', 'photo') || null; kv('del', 'gallery'); renderAvatar(); })();
}

/* ---------- certificates + project covers (kept in this browser) ---------- */
Object.assign(U, {});
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));


/* Certificates are maintained in DATA.certifications above. No browser upload state is used. */
function allCerts() { return DATA.certifications.map((c, i) => ({ ...c, id: `data-${i}` })); }
/* 3 featured boxes in a row, then a "Professional Certificates" button that reveals the full list */
function certSection(C) {
  return `<div class="cert-row">${C.slice(0, 3).map((c, i) => certCard(c, i)).join('')}</div>
  <div class="cert-more"><button type="button" class="btn primary" id="certToggle" aria-expanded="false" aria-controls="certAll">Professional Certificates (${C.length}) <span class="cert-arrow">▾</span></button></div>
  <div class="cert-all" id="certAll" hidden><ul class="cert-list">${C.map((c, i) => `<li><button type="button" class="cert-item" data-cert="${i}">
    <b>${esc(c.name)}</b><small>${esc(c.org || '')}${c.date ? ' · ' + esc(c.date) : ''}</small><span>View ↗</span></button></li>`).join('')}</ul></div>`;
}
function certCard(c, i) {
  return `<article class="r-card cert-card"><button type="button" class="cert-open" data-cert="${i}">
    <h3>${esc(c.name)}</h3><p class="cert-meta">${c.org ? `<span>${esc(c.org)}</span>` : ''}${c.date ? `<span>${esc(c.date)}</span>` : ''}</p><span class="cert-cta">View certificate ↗</span>
  </button></article>`;
}

/* certificate popup (image or PDF) */
let certFocus;
function openCert(i) {
  const c = DATA.certifications[i]; if (!c) return;
  certFocus = document.activeElement;
  let m = $('#certModal');
  if (!m) {
    m = document.createElement('div'); m.id = 'certModal'; m.className = 'backdrop';
    m.innerHTML = `<div class="modal cert-box" role="dialog" aria-modal="true" aria-labelledby="cmTitle">
      <div class="modal-h"><h2 id="cmTitle"></h2><button class="icon-btn" type="button" id="cmClose" aria-label="Close">✕</button></div>
      <p class="cert-sub" id="cmSub"></p><div id="cmView"></div></div>`;
    document.body.appendChild(m);
    m.onmousedown = e => { if (e.target === m) closeCert(); };
    $('#cmClose').onclick = closeCert;
    addEventListener('keydown', e => { if (e.key === 'Escape') closeCert(); });
  }
  $('#cmTitle').textContent = c.name;
  $('#cmSub').textContent = [c.org, c.date].filter(Boolean).join(' · ');
  $('#cmView').innerHTML = certViewer(c);
  m.classList.add('open'); document.body.style.overflow = 'hidden'; $('#cmClose').focus();
}
function closeCert() {
  const m = $('#certModal'); if (!m || !m.classList.contains('open')) return;
  m.classList.remove('open'); $('#cmView').innerHTML = ''; document.body.style.overflow = '';
  certFocus && certFocus.focus();
}

/* Project and certificate media are code-managed through DATA.projects and DATA.certifications. */
function initMore() {
  renderExtra();
  $('#certList').addEventListener('click', e => {
    const t = e.target.closest('#certToggle');
    if (t) {
      const box = $('#certAll'), open = box.hidden;
      box.hidden = !open; t.setAttribute('aria-expanded', open);
      t.classList.toggle('open', open);
      if (open) box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      return;
    }
    const b = e.target.closest('[data-cert]'); if (b) openCert(+b.dataset.cert);
  });
}

/* ---------- dynamic section outlines ---------- */
/* Visible sections get class "live" (colour drifts); moving the mouse across a section shifts its hue. */
function initOutlines() {
  if (matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  const io = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle('live', e.isIntersecting)));
  $$('main > section').forEach(sec => {
    io.observe(sec);
    sec.addEventListener('pointermove', e => { const r = sec.getBoundingClientRect(); sec.style.setProperty('--ol-ptr', Math.round((e.clientX - r.left) / r.width * 120)); }, { passive: true });
    sec.addEventListener('pointerleave', () => sec.style.setProperty('--ol-ptr', 0));
  });
}
/* Project image popup: works for every .proj-img on the project page */
(() => {
  let box, img, count, list = [], cur = 0;

  const build = () => {
    box = document.createElement('div');
    box.className = 'pimg-lb'; box.hidden = true;
    box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true');
    box.innerHTML = `<button type="button" class="pimg-x" aria-label="Close">✕</button>
      <button type="button" class="pimg-n pimg-p" aria-label="Previous">‹</button>
      <div class="pimg-stage"><img alt=""></div>
      <button type="button" class="pimg-n pimg-nx" aria-label="Next">›</button>
      <div class="pimg-count"></div>`;
    document.body.appendChild(box);
    img = box.querySelector('img'); count = box.querySelector('.pimg-count');
    box.querySelector('.pimg-x').onclick = close;
    box.querySelector('.pimg-p').onclick = () => show(cur - 1);
    box.querySelector('.pimg-nx').onclick = () => show(cur + 1);
    box.onmousedown = e => { if (e.target === box || e.target.classList.contains('pimg-stage')) close(); };
  };

  function show(i) {
    if (!box) build();
    cur = (i + list.length) % list.length;
    img.src = list[cur].src; img.alt = list[cur].alt;
    count.textContent = `${cur + 1} / ${list.length}`;
    box.hidden = false; document.body.style.overflow = 'hidden';
  }
  function close() {
    if (!box) return;
    box.hidden = true; img.removeAttribute('src'); document.body.style.overflow = '';
  }

  const open = f => {
    list = [...document.querySelectorAll('.proj-img img')];
    show(+f.dataset.img);
  };

  document.addEventListener('click', e => {
    const f = e.target.closest('.proj-img');
    if (f) open(f);
  });

  document.addEventListener('keydown', e => {
    if (box && !box.hidden) {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(cur - 1);
      if (e.key === 'ArrowRight') show(cur + 1);
      return;
    }
    const f = e.target.closest && e.target.closest('.proj-img');
    if (f && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); open(f); }
  });
})();

/* ---------- hero background: Earth video + satellite scan over an NDVI-coloured raster ---------- */
function heroFx() {
  const cv = $('#heroCanvas'); if (!cv) return;
  const hero = cv.parentElement, ctx = cv.getContext('2d'), hud = $('#hudCoord'), vid = $('#heroVideo');
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const CELL = 30, TAU = Math.PI * 2, t0 = performance.now();
  let W = 0, H = 0, mx = -999, my = -999, on = true, looping = false;

  /* video: fade around the loop point, pause for reduced motion, rotate a portrait file to landscape */
  const fitVid = () => {
    if (!vid || !vid.videoWidth) return;
    const portrait = vid.videoHeight > vid.videoWidth;
    vid.classList.toggle('rot', portrait);
    vid.style.width = portrait ? hero.clientHeight + 'px' : '';
    vid.style.height = portrait ? hero.clientWidth + 'px' : '';
  };
  if (vid) {
    if (reduce) { vid.removeAttribute('autoplay'); vid.pause(); }
    else vid.addEventListener('timeupdate', () => vid.classList.toggle('fade', vid.duration - vid.currentTime < .7));
    vid.addEventListener('loadedmetadata', fitVid); if (vid.readyState >= 1) fitVid();
  }

  const size = () => { const d = Math.min(devicePixelRatio || 1, 2); W = hero.clientWidth; H = hero.clientHeight; cv.width = W * d; cv.height = H * d; ctx.setTransform(d, 0, 0, d, 0, 0); };
  const field = (x, y, t) => Math.max(0, Math.min(1, .5 + .27 * Math.sin(x * .011 + t * .0002) + .23 * Math.sin(y * .014 - x * .006 + t * .00015)));

  function draw(now) {
    const t = now - t0, sweep = reduce ? W * .62 : ((t * .09) % (W + 500)) - 100;
    ctx.clearRect(0, 0, W, H);
    for (let x = 0; x < W; x += CELL) for (let y = 0; y < H; y += CELL) {
      const cx = x + CELL / 2, cy = y + CELL / 2, v = field(cx, cy, t), dx = sweep - cx;
      let a = .02;                                                         // translucent so the video shows through
      if (dx >= 0) a += .13 * Math.exp(-dx / 300);                         // pixels already scanned fade out behind the sensor
      const dm = Math.hypot(cx - mx, cy - my); if (dm < 150) a += .15 * (1 - dm / 150);   // cursor highlight
      ctx.fillStyle = `hsla(${28 + v * 115},62%,${34 + v * 22}%,${a})`;      // brown → green, like an NDVI ramp
      ctx.fillRect(x + 1, y + 1, CELL - 2, CELL - 2);
    }
    const g = ctx.createLinearGradient(sweep - 60, 0, sweep, 0);
    g.addColorStop(0, 'rgba(183,227,94,0)'); g.addColorStop(1, 'rgba(183,227,94,.16)');
    ctx.fillStyle = g; ctx.fillRect(sweep - 60, 0, 60, H);
    ctx.fillStyle = 'rgba(183,227,94,.55)'; ctx.fillRect(sweep - 1, 0, 2, H);

    const trackY = x => H * .5 + Math.sin(x / W * TAU * 1.4 + t * .0003) * H * .26;   // satellite ground track
    ctx.beginPath(); for (let x = 0; x <= W; x += 12) x ? ctx.lineTo(x, trackY(x)) : ctx.moveTo(x, trackY(x));
    ctx.setLineDash([6, 8]); ctx.strokeStyle = 'rgba(90,200,216,.35)'; ctx.lineWidth = 1.2; ctx.stroke(); ctx.setLineDash([]);
    const sy = trackY(sweep);
    ctx.beginPath(); ctx.arc(sweep, sy, 5, 0, TAU); ctx.fillStyle = '#b7e35e'; ctx.fill();
    ctx.beginPath(); ctx.arc(sweep, sy, 14, 0, TAU); ctx.strokeStyle = 'rgba(183,227,94,.5)'; ctx.stroke();
  }

  function loop(now) { if (!on) { looping = false; return; } draw(now); requestAnimationFrame(loop); }
  const start = () => { if (!looping && !reduce) { looping = true; requestAnimationFrame(loop); } };

  size(); draw(performance.now());
  addEventListener('resize', () => { size(); fitVid(); if (reduce) draw(performance.now()); });
  new IntersectionObserver(e => {                                          // pause everything when the hero is off-screen
    on = e[0].isIntersecting;
    if (on) start();
    if (vid && !reduce) on ? vid.play().catch(() => {}) : vid.pause();
  }).observe(hero);
  hero.addEventListener('pointermove', e => {
    const r = hero.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top;
    if (hud) hud.textContent = `${(32.2 - my / H * 2.4).toFixed(4)}°N · ${(72 + mx / W * 2.4).toFixed(4)}°E`;
  }, { passive: true });
  hero.addEventListener('pointerleave', () => { mx = my = -999; });
}

/* ---------- CV download: builds a PDF in the template format from DATA.cv (jsPDF is loaded on demand) ---------- */
const loadJsPdf = () => window.jspdf ? Promise.resolve(window.jspdf) : new Promise((ok, no) => {
  const s = document.createElement('script');
  s.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
  s.onload = () => ok(window.jspdf); s.onerror = () => no(new Error('jsPDF failed to load')); document.head.append(s);
});

async function downloadCvPdf() {
  const C = DATA.cv; if (!C) return;
  let lib; try { lib = await loadJsPdf(); } catch (e) { alert('The PDF library could not load — check your internet connection and try again.'); return; }
  const doc = new lib.jsPDF({ unit: 'pt', format: 'a4' });
  doc.setProperties({ title: `${P.name} — CV` });
  const PW = 595.28, PH = 841.89, ML = 42, MT = 58, MB = 56, CW = PW - ML * 2, LH = 1.45, TOP = { baseline: 'top' };
  const INK = [42, 42, 42], MUTE = [68, 68, 68];
  const clean = s => String(s == null ? '' : s).replace(/[–—]/g, '-').replace(/[“”]/g, '"').replace(/[‘’]/g, "'");
  let y = MT;

  const font = (f, s, st = 'normal', col = INK) => { doc.setFont(f, st); doc.setFontSize(s); doc.setTextColor(col[0], col[1], col[2]); };
  const room = h => { if (y + h > PH - MB) { doc.addPage(); y = MT; return true; } return false; };
  const W = t => doc.getTextWidth(t);

  /* word-wrap: first line may be narrower (w1) because of a bold label in front of it */
  const wrap = (text, w1, w2) => {
    const words = clean(text).split(/\s+/).filter(Boolean), lines = [], sp = W(' ');
    let cur = [], cw = 0, lim = w1;
    for (const w of words) {
      const ww = W(w);
      if (cur.length && cw + sp + ww > lim) { lines.push(cur); cur = [w]; cw = ww; lim = w2; }
      else { cw += (cur.length ? sp : 0) + ww; cur.push(w); }
    }
    if (cur.length) lines.push(cur);
    return lines.length ? lines : [[]];
  };
  const drawLine = (words, x, w, justify) => {
    if (justify && words.length > 1) {
      const gap = (w - words.reduce((s, t) => s + W(t), 0)) / (words.length - 1); let cx = x;
      words.forEach(t => { doc.text(t, cx, y, TOP); cx += W(t) + gap; });
    } else doc.text(words.join(' '), x, y, TOP);
  };

  /* paragraph / bullet with an optional bold label, justified like the template */
  function block({ label, text = '', size = 10, bullet = null, justify = true, style = 'normal', col = INK, x0 = ML, gap = 2 }) {
    const lh = size * LH, x = x0 + (bullet ? 15 : 0), w = ML + CW - x, lab = label ? clean(label) + ' ' : '';
    font('helvetica', size, 'bold'); const lw = lab ? W(lab) : 0;
    font('helvetica', size, style, col);
    const lines = wrap(text, w - lw, w);
    lines.forEach((ws, i) => {
      if (room(lh)) font('helvetica', size, style, col);
      if (i === 0 && bullet) {
        doc.setDrawColor(INK[0], INK[1], INK[2]); doc.setFillColor(INK[0], INK[1], INK[2]); doc.setLineWidth(.7);
        doc.circle(x0 + 4.5, y + size * .55, bullet === 'o' ? 1.8 : 1.6, bullet === 'o' ? 'S' : 'F');
      }
      if (i === 0 && lab) { font('helvetica', size, 'bold'); doc.text(lab, x, y, TOP); font('helvetica', size, style, col); }
      drawLine(ws, i === 0 ? x + lw : x, i === 0 ? w - lw : w, justify && i < lines.length - 1);
      y += lh;
    });
    y += gap;
  }
  const h2 = t => { room(46); y += 16; font('times', 17, 'bold'); doc.text(clean(t), ML, y, TOP); y += 17 * 1.25 + 4; };
  const sub = t => {                                                   // job / degree heading (serif bold, wraps)
    font('times', 12.5, 'bold'); const ls = doc.splitTextToSize(clean(t), CW);
    room(ls.length * 16 + 22); y += 6; font('times', 12.5, 'bold');
    ls.forEach(l => { doc.text(l, ML, y, TOP); y += 16; });
  };
  const dates = t => { font('helvetica', 10, 'italic', MUTE); doc.text(clean(t), ML, y, TOP); y += 10 * LH + 5; };
  const item = (it, o = {}) => Array.isArray(it) ? block({ label: it[0] + ':', text: it[1], bullet: '•', ...o }) : block({ text: it, bullet: '•', ...o });

  /* header */
  font('times', 24, 'bold'); doc.text(clean(P.name), ML, y, TOP); y += 24 * 1.25 + 6;
  font('helvetica', 10, 'bold'); doc.text('Contact Information:', ML, y, TOP); y += 10 * LH + 6;
  C.contact.forEach(c => block({ label: c[0] + ':', text: c[1], bullet: '•', justify: false, gap: 4 }));

  h2('Professional Summary'); block({ text: C.summary, size: 10, gap: 0 });

  h2('Work Experience');
  C.experience.forEach(e => { sub(e.title); dates(e.dates); e.items.forEach(t => item(t)); });

  h2('Education');
  C.education.forEach(e => { sub(e.title); dates(e.dates); e.items.forEach(t => item(t)); });

  h2('Certifications');
  C.certifications.forEach(c => block({ label: c[0], text: `(${c[1]})`, bullet: '•', justify: false, gap: 4 }));

  h2('Technical Skills');
  C.skills.forEach(s => item(s, { gap: 4 }));

  h2('Projects');
  C.projects.forEach(p => { block({ label: p.title, text: p.dates, style: 'italic', bullet: '•', justify: false, gap: 2 }); block({ text: p.desc, bullet: 'o', x0: ML + 16, gap: 8 }); });

  h2('Awards & Honors');
  C.awards.forEach(a => { block({ label: a.title, text: `| ${a.org}  ${a.date}`, bullet: '•', justify: false, gap: 2 }); block({ text: a.desc, bullet: 'o', x0: ML + 16, gap: 6 }); });

  h2('Language Skills');
  C.languages.forEach(l => item(l, { gap: 4 }));

  h2('Additional Training');
  C.training.forEach(t => block({ label: t[0], text: t[1], bullet: '•', justify: false, gap: 4 }));

  h2('Interests'); block({ text: C.interests, justify: false });

  doc.save(`${P.name.replace(/\s+/g, '_')}_CV.pdf`);
}


/* ======================================================================
   GeoVista polish layer (theme, hero portrait, evidence strip, side rail,
   cursor-lit cards) + owner-only photo studio (open the site with ?edit).
   Runs once the page and ALL scripts (geomap.js, compare.js) have loaded.
   ====================================================================== */
(run => { document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', run) : run(); })(() => {
/* GeoVista — wow.js v2. Load LAST (after compare.js). */
(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches, fine = matchMedia('(hover:hover)').matches;
  const secs = () => $$('main section:not(.hero)');

  // 0. First-time visitors get the dark observatory theme; anyone who toggled the theme keeps their choice.
  try { if (!localStorage.getItem('gv-theme') && typeof setTheme === 'function') setTheme('dark'); } catch (e) {}

  // 1. Renumber (map/compare are injected late) and stamp each heading with a big numeral.
  secs().forEach((s, i) => { const n = String(i + 1).padStart(2, '0'), e = $('.eyebrow', s);
    if (e) e.textContent = e.textContent.replace(/^\d+/, n); });

  // 2. Hero: orbiting satellites + cursor light.
  const hero = $('#home'), hud = hero && $('.hero-hud', hero);
  if (hero && hud) {
    hud.insertAdjacentHTML('beforebegin', '<div class="orbits" aria-hidden="true"><i></i><i></i><i></i></div>');
    if (!calm && fine) { const s = document.createElement('div'); s.className = 'wow-spot'; hud.before(s);
      hero.addEventListener('pointermove', e => { const r = hero.getBoundingClientRect(); s.style.setProperty('--mx', e.clientX - r.left + 'px'); s.style.setProperty('--my', e.clientY - r.top + 'px'); }, { passive: true }); }
  }

  // 2b. Portrait above the name (hidden automatically if the file is missing).
  try { const src = DATA.profile.photo, c = $('.hero-center'); if (src && c) c.insertAdjacentHTML('afterbegin', `<img class="hero-photo" src="${src}" alt="${DATA.profile.name}">`); } catch (e) {}
  document.addEventListener('error', e => { const t = e.target; if (t.tagName === 'IMG' && (t.closest('.avatar') || t.classList.contains('hero-photo'))) (t.closest('.avatar') || t).style.display = 'none'; }, true);

  // 3. At-a-glance strip from real DATA counts.
  try {
    const len = a => Array.isArray(a) ? a.length : 0, certs = typeof allCerts === 'function' ? allCerts().length : 0;
    const facts = [[len(DATA.projects), 'Research projects'], [certs, 'Certificates on record'], [len(DATA.experience), 'Professional roles'], ['Collaboration', 'Open to']].filter(f => f[0] !== 0);
    hero.insertAdjacentHTML('afterend', `<div class="glance"><div class="shell glance-grid">${facts.map(([v, l]) => `<div>${typeof v === 'number' ? `<b data-to="${v}">0</b>` : `<b class="txt">${v}</b>`}<span>${l}</span></div>`).join('')}</div></div>`);
    const io = new IntersectionObserver(es => es.forEach(e => { if (!e.isIntersecting) return; io.unobserve(e.target);
      $$('b[data-to]', e.target).forEach(b => { const to = +b.dataset.to, t0 = performance.now();''
        const step = t => { const k = Math.min(1, (t - t0) / 1200); b.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); };
        calm ? b.textContent = to : requestAnimationFrame(step); }); }), { threshold: .4 });
    io.observe($('.glance'));
  } catch (e) { console.warn('glance skipped', e); }

  // 4. Scroll-spy menu + side rail.
  const ids = ['home', ...secs().map(s => s.id)].filter(Boolean), label = id => { const e = $('.eyebrow', $('#' + id)); return id === 'home' ? 'Home' : (e && e.textContent.split('/')[1] || id).trim(); };
  document.body.insertAdjacentHTML('beforeend', `<nav class="rail" aria-label="Page sections">${ids.map(id => `<a href="#${id}" aria-label="${label(id)}"><span>${label(id)}</span></a>`).join('')}</nav>`);
  const mark = id => $$('.rail a').forEach(a => a.getAttribute('href') === '#' + id ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current'));
  const spy = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && mark(e.target.id)), { rootMargin: '-45% 0px -50% 0px' });
  ids.forEach(id => spy.observe($('#' + id)));

  // 5. Cursor-lit cards, 3D tilt on project cards, magnetic primary buttons (re-scanned because cards render late).
  const wire = () => $$('.proj,.stat,.t-card,.cv-card,.cmp-card,.counters,.research article').forEach(c => {
    if (c.dataset.wow) return; c.dataset.wow = 1; c.classList.add('glow'); c.insertAdjacentHTML('afterbegin', '<i class="gl" aria-hidden="true"></i>');
    if (calm || !fine) return;
    c.addEventListener('pointermove', e => { const r = c.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      c.style.setProperty('--cx', x + 'px'); c.style.setProperty('--cy', y + 'px');
      if (c.classList.contains('proj')) c.style.transform = `perspective(900px) rotateX(${((y / r.height) - .5) * -7}deg) rotateY(${((x / r.width) - .5) * 9}deg) translateY(-6px)`; });
    c.addEventListener('pointerleave', () => { c.style.transform = ''; });
  });
  wire(); new MutationObserver(wire).observe($('main'), { childList: true, subtree: true });
  if (!calm && fine) $$('.btn.primary').forEach(b => { b.addEventListener('pointermove', e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .18}px,${(e.clientY - r.top - r.height / 2) * .28}px)`; }); b.addEventListener('pointerleave', () => b.style.transform = ''); });
})();

/* GeoVista — photo.js: photo studio for the site owner. Load AFTER wow.js.
   Open your site with  ?edit  at the end of the address (e.g. https://yoursite.com/?edit) to show the "My photo" button.
   Visitors never see it. Use  ?edit=off  to hide it again. */
(() => {
  const $ = (s, r = document) => r.querySelector(s), q = new URLSearchParams(location.search);
  try { if (q.has('edit')) q.get('edit') === 'off' ? localStorage.removeItem('gv-owner') : localStorage.setItem('gv-owner', '1'); } catch (e) {}
  let owner = false; try { owner = localStorage.getItem('gv-owner') === '1'; } catch (e) {}
  if (!owner) return;

  const P = DATA.profile, KEY = 'gv-photo', OUT = 900, S = 320;
  const load = () => { try { return localStorage.getItem(KEY); } catch (e) { return null; } };
  const save = v => { try { v ? localStorage.setItem(KEY, v) : localStorage.removeItem(KEY); return true; } catch (e) { return false; } };

  // Show a photo in the hero portrait and the About picture.
  function apply(src) {
    src = src || P.photo; if (!src) return;
    let h = $('.hero-photo'); const c = $('.hero-center');
    if (!h && c) { c.insertAdjacentHTML('afterbegin', `<img class="hero-photo" alt="${P.name}">`); h = $('.hero-photo'); }
    if (h) { h.style.display = ''; h.src = src; }
    const a = $('.avatar'); if (a) { a.style.display = ''; let i = $('img', a); if (!i) { a.innerHTML = `<img alt="${P.name}">`; i = $('img', a); } i.src = src; }
  }

  document.body.insertAdjacentHTML('beforeend', `<button class="ps-fab" id="psOpen" type="button">📷 My photo</button>
  <div class="ps-back" id="psBack" hidden><div class="ps" role="dialog" aria-modal="true" aria-labelledby="psT">
    <div class="ps-h"><h3 id="psT">Photo studio</h3><button class="icon-btn" id="psX" type="button" aria-label="Close">✕</button></div>
    <p class="ps-note">Pick a clear head-and-shoulders photo, then drag to position it and zoom to fit. Keep your face in the upper half.</p>
    <div class="ps-stage" id="psStage"><canvas id="psC" width="${S}" height="${S}"></canvas><i class="ps-ring"></i></div>
    <label class="ps-zoom">Zoom<input type="range" id="psZ" min="1" max="3" step="0.01" value="1" aria-label="Zoom" disabled></label>
    <div class="ps-row"><button class="ps-btn main" id="psPick" type="button">Choose photo…</button><button class="ps-btn" id="psDl" type="button" disabled>⬇ Download profile.jpg</button><button class="ps-btn" id="psRm" type="button">Remove preview</button></div>
    <p class="ps-status" id="psS" role="status"></p><p class="ps-pub" id="psP"></p>
    <input type="file" id="psF" accept="image/*" hidden>
  </div></div>`);

  const back = $('#psBack'), cv = $('#psC'), cx = cv.getContext('2d'), zoom = $('#psZ'), status = $('#psS');
  let im = null, z = 1, ox = 0, oy = 0, base = 1;

  const paint = (ctx, size) => { const k = size / S; ctx.fillStyle = '#0b1720'; ctx.fillRect(0, 0, size, size);
    if (!im) return; const w = im.width * base * z * k, h = im.height * base * z * k; ctx.drawImage(im, size / 2 - w / 2 + ox * k, size / 2 - h / 2 + oy * k, w, h); };
  const clamp = () => { const w = im.width * base * z, h = im.height * base * z, mx = (w - S) / 2, my = (h - S) / 2; ox = Math.max(-mx, Math.min(mx, ox)); oy = Math.max(-my, Math.min(my, oy)); };
  const draw = () => paint(cx, S);
  const result = () => { const o = document.createElement('canvas'); o.width = o.height = OUT; paint(o.getContext('2d'), OUT); return o; };
  const commit = () => { if (!im) return; const url = result().toDataURL('image/jpeg', .88); apply(url);
    status.textContent = save(url) ? 'Preview applied on this browser. To show it to visitors, download the file and add it to your site (see below).' : 'Preview applied (this browser could not store it, but you can still download it).'; };

  const published = () => { const t = new Image(), p = $('#psP'); p.className = 'ps-pub'; p.textContent = 'Checking your published photo…';
    t.onload = () => { p.className = 'ps-pub ok'; p.textContent = `✓ ${P.photo} is on your site — visitors can see a photo.`; };
    t.onerror = () => { p.className = 'ps-pub no'; p.textContent = `✗ ${P.photo} is not on your site yet, so visitors see no photo. Download the file below, save it as that name inside your site's "assets" folder, and upload the site again.`; };
    t.src = P.photo + (P.photo.includes('?') ? '&' : '?') + 'v=' + Date.now(); };

  const open = () => { back.hidden = false; published(); $('#psX').focus(); }, close = () => { back.hidden = true; $('#psOpen').focus(); };
  $('#psOpen').onclick = open; $('#psX').onclick = close; back.addEventListener('pointerdown', e => { if (e.target === back) close(); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && !back.hidden) close(); });

  $('#psPick').onclick = () => $('#psF').click();
  $('#psF').onchange = async e => {
    const f = e.target.files[0]; e.target.value = ''; if (!f) return;
    if (!/^image\/(jpe?g|png|webp|gif|bmp|avif)$/i.test(f.type)) { status.textContent = 'Please choose a JPG, PNG or WebP photo (iPhone HEIC photos: export as JPG first).'; return; }
    if (f.size > 25 * 1024 * 1024) { status.textContent = 'That photo is over 25 MB — please choose a smaller one.'; return; }
    try { im = await createImageBitmap(f, { imageOrientation: 'from-image' }); } catch (err) { status.textContent = 'That image could not be read. Try another file.'; return; }
    base = Math.max(S / im.width, S / im.height); z = 1; ox = 0; oy = -S * .08; clamp(); zoom.value = 1; zoom.disabled = false; $('#psDl').disabled = false; draw(); commit();
  };
  zoom.oninput = () => { if (!im) return; z = +zoom.value; clamp(); draw(); }; zoom.onchange = commit;

  const stage = $('#psStage'); let drag = null;
  stage.addEventListener('pointerdown', e => { if (!im) return; drag = { x: e.clientX, y: e.clientY }; stage.setPointerCapture(e.pointerId); stage.style.cursor = 'grabbing'; });
  stage.addEventListener('pointermove', e => { if (!drag) return; const k = S / stage.getBoundingClientRect().width; ox += (e.clientX - drag.x) * k; oy += (e.clientY - drag.y) * k; drag = { x: e.clientX, y: e.clientY }; clamp(); draw(); });
  ['pointerup', 'pointercancel'].forEach(t => stage.addEventListener(t, () => { if (drag) { drag = null; stage.style.cursor = ''; commit(); } }));
  stage.addEventListener('wheel', e => { if (!im) return; e.preventDefault(); z = Math.max(1, Math.min(3, z - e.deltaY * .0015)); zoom.value = z; clamp(); draw(); clearTimeout(stage._t); stage._t = setTimeout(commit, 250); }, { passive: false });

  $('#psDl').onclick = () => result().toBlob(b => { const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = (P.photo || 'assets/profile.jpg').split('/').pop(); a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 4000); }, 'image/jpeg', .9);
  $('#psRm').onclick = () => { save(null); im = null; zoom.disabled = true; $('#psDl').disabled = true; zoom.value = 1; draw(); apply(null); status.textContent = 'Preview removed. The site now shows the published photo (if any).'; };

  draw(); const saved = load(); if (saved) apply(saved);
})();

});

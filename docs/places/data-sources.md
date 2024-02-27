---
sidebar_position: 6
---

# Data sources with supported importers

Places is built with a mostly data-agnostic architecture: any datasource that can be converted into the Elasticsearch document format used by Pelias can be imported and geocoded against. Of course, building a good importer takes time. Pelias currently has official support for five importers from four different open data projects. We owe a tremendous debt of gratitude to the individuals and communities which produced these datasets.

Attribution is required for many of data providers. Some license information is listed here, but you are responsible for researching each project to follow their license terms.

## Admin Boundaries

administrative places:

- Countries
- Macroregions (for example, England is a Macroregion within the United Kingdom)
- Regions (for example, states, provinces)
- Macro-counties
- Counties
- Localities (cities, towns, hamlets)
- Neighbourhoods

Additionally, for addresses, venues, and points of interest coming from Place, we use to provide standardized fields for the country, region, locality, and neighbourhood.


## OpenStreetMap

[OpenStreetMap](https://www.openstreetmap.org/) is a community-driven, editable map of the world. It prioritizes local knowledge and individual contributions over bulk imports, which often means it has excellent coverage even in remote areas where no large-scale mapping efforts have been attempted. OpenStreetMap contains information on landmarks, buildings, roads, and natural features.

With its coverage of roads as well as rich metadata, OpenStreetMap is arguably the most valuable dataset used by Pelias for general usage.

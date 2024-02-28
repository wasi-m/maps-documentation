---
sidebar_position: 1
---

# Routing

## Directions API for routing

Directions API is routing software using source data (primarily Open Street Map). Key features of the routing engine: the core route engine is called THOR (Tiled, Hierarchical Open Routing), generation of trip information for the path is called ODIN (Open Directions and Improved Narrative) and the service component is called TYR (Take Your Route).

There are other key features that we hope distinguish Directions API from other systems and encourage developers to build systems around the service and contribute back to the project. These features include:

## Multimodal and time-based routing

Supports mixing auto, pedestrian, bike and public transportation in the same route. Support for public transit requires time and schedule dependent routing and must support tracking time along a path and can potentially support setting a time by which one must arrive at a location.

## Tiled, hierarchical data

Lets face it, building routing data sets from OSM is not easy. We wondered why routing data couldn’t be treated like vector map data - use a tiled data structure to allow easy downloading and updating of regions. Graph (the route data structure) tiles can be downloaded for use by client-side routing applications or by hosted services that don’t want to go through the pain of data creation. A structured graph hierarchy (e.g., highways, arterials, local, transit) along with shortcut edges will ensure high performance. `THOR` should allow for smaller memory footprints on memory constrained devices and provide a means for regional extracts and partial updates.

## Take your route (TYR)

`Tyr` signifies another fitting theme both from Norse mythology and from our open approach. Initially, Tyr will be our routing service where users can generate routes for mobile or web use. We plan to build methods to download tiled route data to allow unconnected, client-side features like off-line routing where users can "take your route" on the road or download graph tiles for a region and be able to use their device in places they might not have connectivity. Features like client-side “return to route” and off-line routing are possible.

## Flexibility and extensibility

We want to encourage others to contribute their expertise and local knowledge to routing and guidance/narrative. What makes a good route in one country/region may not hold true in another country. Having the ability to create dynamic and extensible “plug-in” code to perform costing/weighting may encourage others to use and extend Directions API. Dynamic costing will also help create alternate route paths (at run time - without generating different data sets) and allow new costing methods for specialized use cases: truck routing, green/eco routing, and perhaps least cost routing. Within narrative and guidance generation software we want to provide means of adding custom narrative phrases and perhaps other means of extending or adding custom plug-ins to tailor the output to a user’s need.

## Open directions and improved narrative (ODIN)

A quality route result is more than just a path shape and long list of road names with simple turns and dreaded "continue" instructions. ODIN will be responsible for transforming path information into guidance and narrative directions that are easy to understand, useful, and assist users during their trip. Exit information and directional information on highways will help remove ambiguity at key decision points along the route. For example:
- Take exit **51B** on the **right** onto **I 81 North** toward **I 78/Hazleton/Allentown**

ODIN collapses maneuvers using common base street names and simplifies transitions at complex intersections. Landmarks and other related information are also planned. Guidance and route explication must also be able to be tailored to different languages and potential uses - so extensibility and contributions from others are key.

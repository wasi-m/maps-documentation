---
sidebar_position: 1
---

# Places

### A modular, open-source search engine for our world.


<details open>
<summary>What is Places?</summary>

Places is a search engine for places worldwide, powered by open data. It turns addresses and place names into geographic coordinates, and turns geographic coordinates into places and addresses. With Places, you’re able to turn your users’ place searches into actionable geodata and transform your geodata into real places.

We think open data, open source, and open strategy win over proprietary solutions at any part of the stack and we want to ensure the services we offer are in line with that vision. We believe that an open geocoder improves over the long-term only if the community can incorporate truly representative local knowledge.
</details>


## Table of Contents

### Core Features and API Documentation

#### Endpoint descriptions
- [Forward geocoding](search.md) (**/v1/search**) to find a place by searching for an address or name
- [Reverse geocoding](reverse.md) (**/v1/reverse**) to find what is located at a certain coordinate location
- [Autocomplete](autocomplete.md) (**/v1/autocomplete**) to give real-time result suggestions without having to type the whole location
- [Place endpoint](place.md) (**/v1/place**) for details on a place returned from a previous query

_Not sure which Endpoint to use? We have a [page](search-workflows.md) for that_

#### Query parameters and options
- [Global coverage with prioritized local results](search.md#prioritize-results-by-proximity)
- [Language support](language-codes.md) for seeing results in different languages

#### Response Properties

- [Full list of response properties](response.md)
- [Confidence scores, match\_types and other tools for determining result quality](result_quality.md)

### Data Sources
- [Places data sources](data-sources.md)

### Running your own Places
- [Getting started](getting_started_install.md) Start here if you're looking to install Places
- [Places from scratch](places_from_scratch.md) More in-depth instructions for installing Places
- [Full planet build considerations](full_planet_considerations.md) Special information on running a full planet Places build
- [Service descriptions](services.md) A description of all the Places services, and when they are used
- [Software Requirements](requirements.md) A list of all software requirements for Places

### Misc
- [Glossary of common terms](glossary.md)

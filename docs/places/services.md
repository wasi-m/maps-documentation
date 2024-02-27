# Places services

A running Places installation is composed of several different services. Each service is well suited
to a particular task.

## Service Use Cases

Here's a list of which services provide which features in Places. If you don't need everything Places
does, you may be able to get by without installing and running all the Places services

| Service       | /v1/search   | /v1/autocomplete | /v1/reverse  | /v1/reverse (coarse) | Changing the display language of results (any endpoint) |
| ------        | -----        | -----            | ---------    | -------              | ----- |
| API           | **required** | **required**     | **required** | **required**         | **required** |
| Placeholder   | **required** |                  |              |                      | **required** |
| Libpostal     | **required** |                  |              |                      | |
| PIP           |              |                  | recommended  | **required**         | |

## Descriptions

### API

This is the core of Places. It talks to all other services (if available), Elasticsearch, and
provides the interface for all queries to Places.

### Placeholder

Placeholder is used specifically to handle the relational component of geocoding. Placeholder
understands, for example, that Paris is a city in a country called France, but that there is another
city called Paris in the state of Texas, USA.

Placeholder also stores the translations of administrative areas in multiple languages. Therefore it
is required if any support for multiple languages is desired.

Currently, Placeholder is used only for forward geocoding on the `/v1/search` endpoint. In the
future, it will also be used for autocomplete.

### Libpostal

Libpostal is a library that provides an address parser using a statistical natural language processing
model trained on OpenStreetMap, OpenAddresses, and other open data. It is quite good at parsing
fully specified input, but cannot handle autocomplete very well.

The data required for Libpostal to run is around 3GB, and has to be loaded into memory, so this
service is fairly expensive to run, even for small installations.

Unlike the other Places services, we didn't actually write a Places Libpostal service.

## Point-in-Polygon (PIP)

The PIP service loads polygon data representing the boundaries of cities, states, regions, countries
etc into memory, and can perform calculations on that geometric data. Its used to determine if a
given point lies in a particular polygon. Thus, it's highly recommended for reverse geocoding.

---
sidebar_position: 5
---

# Places Software requirements

This is the list of all software requirements for Places. We highly recommend using our
Docker images to avoid having to even attempt to correctly install all our dependencies yourself.

## Node.js

Version 12

Most Places code is written in Node.js, so this is one of the most core dependencies of the project.

Places generally only adds support for even numbered [LTS](https://github.com/nodejs/Release#release-schedule) Node.js versions.

We recommend you always use the _latest_ minor and patch release of whichever major release line you
choose.

## Elasticsearch

Version 7.5+

We recommend the latest in the Elasticsearch 7 release line.

The core data storage for Places is Elasticsearch, and Elasticsearch makes major breaking changes
from release to release, so it's important to track these versions carefully.

We generally strive to support the newest and second newest version of Elasticsearch. Due to the way Elasticsearch manages breaking changes, it's usually only possible to fully support two Elasticsearch versions at a time.

## SQLite

Version 3.11 or newer

Some components of Places need a relational database, and Elasticsearch does not provide good
relational support. We use SQLite in these cases since it's simple to manage and quite performant.

## Libpostal

Places relies heavily on the [Libpostal](https://github.com/openvenues/libpostal#installation)
address parser. Libpostal requires about 4GB of disk space to download all the required data.

## Windows Support

Places is not well tested on Windows, but we do wish to support it, and will accept patches to fix
any issues with Windows support.

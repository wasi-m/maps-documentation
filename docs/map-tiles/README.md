
# Map Tiles

Installation
============

Docker
======

When running docker image, no special installation is needed -- the docker will automatically download the image if not present.

Download test_data.zip from ``https://github.com/aplog1c/tiles-api/releases/tag/v1.0.0`` unzip the folder and just run ``docker run --rm -it -v $(pwd):/data -p 8080:8080 ghcr.io/aplog1c/tiles-api``.

Additional options (see :doc:`/usage`) can be passed to the TileServer GL by appending them to the end of this command. You can, for example, do the following:

Download test zurich_switzerland.mbtiles from ``https://github.com/aplog1c/tiles-api/releases/tag/v1.0.0``

* ``docker run ... ghcr.io/aplog1c/tiles-api --file zurich_switzerland.mbtiles`` -- explicitly specify which mbtiles to use (if you have more in the folder)
* ``docker run ... ghcr.io/aplog1c/tiles-api --verbose`` -- to see the default config created automatically

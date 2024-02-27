=====
Usage
=====

Getting started
======

```
  Usage: main.js tileserver-gl [file] [options]

  Options:
    --file <file>             MBTiles or PMTiles file
                                ignored if the configuration file is also specified
    --mbtiles <file>          (DEPRECIATED) MBTiles file
                                ignored if file is also specified
                                ignored if the configuration file is also specified
    -c, --config <file>       Configuration file [config.json] (default: "config.json")
    -b, --bind <address>      Bind address
    -p, --port <port>         Port [8080] (default: 8080)
    -C|--no-cors              Disable Cross-origin resource sharing headers
    -u|--public_url <url>     Enable exposing the server on subpaths, not necessarily the root of the domain
    -V, --verbose             More verbose output
    -s, --silent              Less verbose output
    -l|--log_file <file>      output log file (defaults to standard out)
    -f|--log_format <format>  define the log format:  https://github.com/expressjs/morgan#morganformat-options
    -v, --version             output the version number
    -h, --help                display help for command
```

Default preview style and configuration
======

- If no configuration file is specified, a default preview style (compatible with openmaptiles) is used.
- If no data file is specified (and is not found in the current working directory), a sample file is downloaded (showing the Zurich area)

Reloading the configuration
======

It is possible to reload the configuration file without restarting the whole process by sending a SIGHUP signal to the node process.

- The `docker kill -s HUP tileserver-gl` command can be used when running the tileserver-gl docker container.
- The `docker-compose kill -s HUP tileserver-gl-service-name` can be used when tileserver-gl is run as a docker-compose service.

Docker and `--port`
======

When running tileserver-gl in a Docker container, using the `--port` option would make the container incorrectly seem unhealthy.
Instead, it is advised to use Docker's port mapping and map the default port 8080 to the desired external port.

---
sidebar_position: 2
---

# Getting started with Places

Looking to install and set up Places? You've come to the right place. We have several different
tools and pieces of documentation to help you.

### Installing for the first time?

We _strongly_ recommend using our Docker based installation for your first install.
It removes the need to deal with most of the complexity and dependencies of Places.
On a fast internet connection you should be able to get a small city like Portland, Oregon
installed in under 30 minutes.

### Want to go more in depth?

The Places docker installation should work great for any small area, and is great for managing the
different Places services during development. However, we understand not everyone can or wants to
use Docker, and that people want more details on how things work.

For this, we have our [from scratch installation guide](places_from_scratch.md)

### Installing in production?

By far the most well tested way to install Places is to use Kubernetes.
Kubernetes is perfect for managing systems that have many different components, like Places.

We would love to add additional, well tested ways to install Places in production. Reach out to us
if you have something to share or want to get started.

### Doing a full planet build?

Running Places for a city or small country is pretty easy. However, due to the amount of data
involved, a full planet build is harder to pull off.

See our [full planet build guide](full_planet_considerations.md) for some recommendations on how to
make it easier and more performant.

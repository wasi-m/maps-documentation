---
sidebar_position: 12
---

# Common geocoding workflows

Places provides several API endpoints, and each is best suited for a particular geocoding workflow. Match your use case to these common scenarios to determine which endpoint to use for tasks in your app.

## You have a single address field that needs geographic coordinates (`/search`)

In this scenario, your data might have customer records, for example, with a single field provided for the address information. The address field might also have a variety of data in it, and is not guaranteed to be formatted in any specific way.

|id|name|address|occupation|
|---|---|---|---|
|321|Jane Banks|17 Cherry Tree Lane, London|student|
|654|Paddington Bear|32 Windsor Gardens, London|bear|
|987|Sherlock Holmes|221B Baker St, London|private investigator|

If your data is free-form like those entries, try forward search with the `/search` endpoint. It requires a single `text` input to be specified, which is set to the individual string for each of your records.

## You have latitude and longitude data and want the corresponding address (`/reverse`)

When you use a mapping app, it is common to click a location to find out the address there. Similarly, when you use your phone to request assistance from the police, for example, your location is often automatically translated to an address where the officers can be routed. In these cases, reverse geocoding is happening behind the scenes.

You use the `/reverse` endpoint when you know the coordinates of your location, and want to learn the address or information about nearest point of interest, such as the name of a business, restaurant, or park.

## You have latitude and longitude data and want the administrative area it falls within (`/reverse` with `layers`)

Sometimes, when you click on a map, you want information about the region containing that location. This is a variation of a reverse search, known as coarse reverse geocoding, where you can look up administrative hierarchy information for a given set of coordinates. This can be very useful when you have linked the administrative boundary with other datasets--for example, allowing you to click a house to find out its local government representative or which fire department serves it.

For coarse reverse, use the `/reverse` endpoint and `layers=coarse` or include any of the administrative area types, such as `locality`, `region`, or `country`. If you only want the administrative information, using coarse reverse can improve performance because there are far fewer administrative regions globally than there are individual addresses to query.

## You have users typing into a search box or address input field in real time (`/autocomplete` or `/search`)

When you have live users who type things into input fields or search boxes, their activity falls into two scenarios, depending on when your app assumes they are ready to search.

The distinction in the results is visible when you consider the behavior with the text of `lond`. [Autocomplete for `lond`, returns `london` `/v1/autocomplete%3Ftext=lond` because the user is still typing, but `/search` assumes the user is done entering text and returns the city of `Lond` in Pakistan `/v1/search%3Ftext=lond`.

### ...and want to show feedback as they type (`/autocomplete`)

When you are searching for a hotel in a particular city, for example, you often see a list of matching results appear after each character as you type. In your own app, if you want your users to enter text and see real-time results as they type, use `/autocomplete`. This type-ahead functionality helps users find what they are looking for, without requiring them to fully specify their search term. Typically, your users start typing and a drop-down list appears where they can choose the term from the list.

### ...and want to search only when they finish typing (`/search`)

If you want the search to occur only when specifically executed, such as when your users press Enter, use `/search`. A search operates under the assumption that the input text is complete. A common design pattern is for an app to use autocomplete for the initial type-ahead behavior, and then switch to a `/search` when the user presses Enter or clicks an entry from the list.

The `/search` endpoint offers some functionality that is not currently available for `/autocomplete`. This includes structured searching and address interpolation for locations where data is incomplete.

/*
Homework 3 - JavaScript Fundamentals
COMP420 - Spring 2017

J. Wangsadinata
*/

/****************
**** OBJECTS ****
*****************/




var flight = {
  airline: "Oceanic",
  number: 815,
  departure: {
    IATA: "SYD",
    time: "2004-09-22 22:36",
    city: "Sydney"
  },
  arrival: {
    IATA: "LAX",
    time: "2004-09-23 10:42",
    city: "Los Angeles"
  }
};

var facebook = {
  "data": [
    {
      "id": "X999_Y999",
      "from": {
        "name": "Tom Brady", "id": "X12"
      },
      "message": "Looking forward to 2017!",
      "actions": [
        {
          "name": "Comment",
          "link": "http://www.facebook.com/X999/posts/Y999"
        },
        {
          "name": "Like",
          "link": "http://www.facebook.com/X999/posts/Y999"
        }
      ],
      "type": "status",
      "created_time": "2016-12-26T21:27:44+0000",
      "updated_time": "2016-12-26T21:27:44+0000"
    },
    {
      "id": "X998_Y998",
      "from": {
        "name": "Peyton Manning", "id": "X18"
      },
      "message": "Where's my contract?",
      "actions": [
        {
          "name": "Comment",
          "link": "http://www.facebook.com/X998/posts/Y998"
        },
        {
          "name": "Like",
          "link": "http://www.facebook.com/X998/posts/Y998"
        }
      ],
      "type": "status",
      "created_time": "2016-08-02T21:27:44+0000",
      "updated_time": "2016-08-02T21:27:44+0000"
    }
  ]
};

var youtube = {
  "apiVersion": "2.0",
  "data": {
    "updated": "2010-01-07T19:58:42.949Z",
    "totalItems": 800,
    "startIndex": 1,
    "itemsPerPage": 1,
    "items": [
      {
        "id": "hYB0mn5zh2c",
        "uploaded": "2007-06-05T22:07:03.000Z",
        "updated": "2010-01-07T13:26:50.000Z",
        "uploader": "GoogleDeveloperDay",
        "category": "News",
        "title": "Google Developers Day US - Maps API Introduction",
        "description": "Google Maps API Introduction ...",
        "tags": [
            "GDD07","GDD07US","Maps"
        ],
        "thumbnail": {
          "default":"http://i.ytimg.com/vi/hYB0mn5zh2c/default.jpg",
          "hqDefault":"http://i.ytimg.com/vi/hYB0mn5zh2c/hqdefault.jpg"
        },
        "player": {
          "default":"http://www.youtube.com/watch?vu003dhYB0mn5zh2c"
        },
        "content": {
          "1":"rtsp://v5.cache3.c.youtube.com/CiILENy.../0/0/0/video.3gp",
          "5":"http://www.youtube.com/v/hYB0mn5zh2c?f...",
          "6":"rtsp://v1.cache1.c.youtube.com/CiILENy.../0/0/0/video.3gp"
        },
        "duration":2840,
        "aspectRatio":"widescreen",
        "rating":4.63,
        "ratingCount":68,
        "viewCount":220101,
        "favoriteCount":201,
        "commentCount":22,
        "status": {
          "value":"restricted",
          "reason":"limitedSyndication"
        },
        "accessControl": {
          "syndicate":"allowed",
          "commentVote":"allowed",
          "rate":"allowed",
          "list":"allowed",
          "comment":"allowed",
          "embed":"allowed",
          "videoRespond":"moderated"
        }
      }
    ]
  }
};

/******************
**** QUESTIONS ****
*******************/

/* FLIGHTS */

/*
Task 1. Return the flight number
In the object above, your function should return 815.
(Use return statements instead of console.log(...))
*/

function flight_number(flight) {
  return flight.number;
}

/*
Task 2. Return a string of the flight origin and destination separated by '-'
In the object above, your function should return 'Sydney-Los Angeles'
*/
function flight_destination(flight) {
  return flight.departure.IATA + "-" + flight.arrival.IATA /* YOUR CODE GOES HERE */
}

/*
BONUS. Return the duration of the flight (you can assume they are in the same time zone)
In the object above, your function should return '12 hours 6 minutes', or some variant of this.
*/
function flight_duration(flight) {
  return 'flight_duration unimplemented' /* YOUR CODE GOES HERE */
}


/* FACEBOOK */

/*
Task 1. Return a list of usernames on the object
In the object above, your function should return ['Tom Brady', 'Peyton Manning']
*/
function facebook_usernames(facebook) {
  return [facebook.data[0].from.name + "," + facebook.data[1].from.name] /* YOUR CODE GOES HERE */
}

/*
Task 2. Return an object indexed by the username, that has the status as its values.
In the object above, your function should return
{ Tom Brady: "Looking forward to 2017!", Peyton Manning: "Where's my contract?" }
*/
function facebook_statuses(facebook) {
       var obj = {};
       obj[facebook.data[0].from.name] = facebook.data[0].message;
       obj[facebook.data[1].from.name] = facebook.data[1].message;
      return obj
}

/*
Task 3. Create a function that takes in the output of your task 2, and
returns a string of the following form. "<username> says <status>".

Using the printing suite provided below, it will print out the following:
Tom Brady says Looking forward to 2017!
Peyton Manning says Where's my Contract?
*/
function facebook_what_people_say(statuses) {
  return Object.keys(facebook_statuses(facebook))[0] + " says " + facebook_statuses(facebook)[Object.keys(facebook_statuses(facebook))[0]] + "\n" + Object.keys(facebook_statuses(facebook))[1] + " says " + facebook_statuses(facebook)[Object.keys(facebook_statuses(facebook))[1]] /* YOUR CODE GOES HERE */
}



/* YOUTUBE */

/*
Task 1. Return the title of the Youtube video.
In the object above, your function should return
'Google Developers Day US - Maps API Introduction'
*/
function youtube_video_title(youtube) {
  return youtube.data.items[0].title /* YOUR CODE GOES HERE */
}

/*
Task 2. Return the URL of the Youtube video.
In the object above, your function should return
'http://www.youtube.com/watch?vu003dhYB0mn5zh2c'
*/
function youtube_video_url(youtube) {
  return youtube.data.items[0].player.default /* YOUR CODE GOES HERE */
}

/*
Task 3. Given the object, return the duration of the Youtube video in minutes and seconds.
In the object above, your function should return
'47 minutes 50 seconds'
*/
function youtube_video_duration(youtube) {
  return Math.floor(youtube.data.items[0].duration / 60) + " minutes " + (youtube.data.items[0].duration -  Math.floor(youtube.data.items[0].duration / 60) * 60 )+ " seconds" /* YOUR CODE GOES HERE */
}



/***********************
**** PRINTING SUITE ****
************************/

/* FLIGHTS */
console.log("### FLIGHTS ###")
console.log(flight_number(flight));
console.log(flight_destination(flight));
console.log(flight_duration(flight));
console.log("")

/* FACEBOOK */
console.log("### FACEBOOK ###")
console.log(facebook_usernames(facebook));
console.log(facebook_statuses(facebook));
console.log(facebook_what_people_say(facebook_statuses(facebook)));
console.log("")

/* YOUTUBE */
console.log("### YOUTUBE ###")
console.log(youtube_video_title(youtube));
console.log(youtube_video_url(youtube));
console.log(youtube_video_duration(youtube));



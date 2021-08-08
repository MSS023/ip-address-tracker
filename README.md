# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Links

- Solution URL: https://github.com/MSS023/ip-address-tracker
- Live Site URL: https://ip-address-tracker-mss.herokuapp.com

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Leaflet](https://leafletjs.com/) - For map component
- [IP Geolocation API by IPify](https://geo.ipify.org/) - For IP Address Location

### What I learned

I learned how to use different types of APIs in React. The most important thing is to google search the correct keywords for relevant results or otherwise you will be stuck for hours or even days on the same query. There are many different modules provided by npm for React like React-Leaflet to make API integration easy. The one thing that I found most intriguing was that sometimes native React hooks don't work on other modules so you have to use hooks provided in those modules, for instance in React-Leaflet the hooks I used was useMap() (which I admit was very difficult to google because of my wrong choice of search keywords). Here is a code snipet

function MyComponent({center,zoom}) {
      const map=useMap()
      map.setView(center,zoom);
      return null;
}

<MapContainer center={[lat,lng]} zoom={13} scrollWheelZoom={false}>
    <MyComponent center={[lat,lng]} zoom={13} />
    <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Marker position={[lat,lng]} icon={icon}>
    </Marker>
</MapContainer>  

It was quite an experience making this project.

### Continued development

I am looking forward to learn new topics on React and React hooks and perfecting this project

## Author

- Frontend Mentor - [@MSS023](https://www.frontendmentor.io/profile/MSS023)
- LinkedIn - [Manan Sahni](https://www.linkedin.com/in/manan-sahni-9207271a1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjZFxey%2FORjK1QS3zKKc7dw%3D%3D)

## Acknowledgments

I want to thank all my friends and mentors who've actively helped me in learning new things. Moreover I want to acknowledge the help provided by websites like https://www.stackoverflow.com and https://www.geeksforgeeks.org . It won't be possible for me to complete any project were it not for these websites.

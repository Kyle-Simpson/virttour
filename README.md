# General Information
This website was created by request of Tamara Long to replace the old Guidebook application that previously hosted UW's virtual campus tour.

This website, created by Kyle Simpson (a UW Informatics student and one of the 2018-2019 Student Directors of the Office of Admissions' Campus Visit Program), takes visitors around the University of Washington's Seattle campus to see the highlights of campus.  

The tour is narrated by two former tour guides, with quotes from various guests.  




# Technical Documentation
## Javascript and HTML
In test, the website was built using React, React Router, and Firebase.  Firebase is/will be phased out when the application is transitioned onto the Admissions server.  The application was developed using mobile-first design principles and is optimized for smaller screen sizes.

The .js files are relatively flat and are relatively technically simple.  There are 3 types of .js files found
1. Introduction & Conclusion pages that bookend the application
    - HomePage.js
    - Fin.js
2. Audio content pages that present the tour
    - Den.js (Denny Hall) (fully documented) 
    - Drum.js (Drumheller Fountain)
    - GW.js (George Washington Statue [the first time])
    - GW2.js (George Washington Statue [the second time])
    - Hub.js (Husky Union Building)
    - MGH.js (Mary Gates Hall)
    - Quad.js (Liberal Arts Quadrangle)
    - RS.js (Red Square)
    - RV.js (Rainier Vista)
    - Suzz.js (Suzzalo Library)
    - WC.js (West Campus)
    - Wet.js (Wǝɫǝbʔaltxʷ)
3. Connecting pages that display maps
    - DENtoGW2.js (Denny Hall to George Washington Statue [the second time]) (fully documented)
    - DRUMtoRV.js (Drumheller Fountain to Rainier Vista)
    - GW2toWC.js (George Washington [the second time] to West Campus)
    - GWtoRS.js (George Washington Statue [the first time] to Red Square)
    - HUBtoWET.js (Husky Union Building to Wǝɫǝbʔaltxʷ)
    - MGHtoDRUM.js (Mary Gates Hall to Drumheller Fountain)
    - QUADtoDEN.js (Liberal Arts Quadrangle to Denny Hall)
    - RStoSUZZ.js (Red Square to Suzzalo Library)
    - RVtoHUB.js (Rainier Vista to Husky Union Building)
    - SUZZtoMGH.js (Suzzalo Library to Mary Gates Hall)
    - WETtoQUAD.js (Wǝɫǝbʔaltxʷ to Liberal Arts Quadrangle)

The App.js file sets the endpoints and initializes the webpage instance.

The intro and conclusion pages have been fully documented, and one of each of the content and connection pages have been fully documented.  Each other .js file is identical to those with similar purposes (except for slightly different source urls).

### Logical Flow Through JS Files
Since the JS files are so flat it is easy to trace the path through the files.  This section will map the connection between each file (assuming linear navigation through the application).

HomePage.js -> GW.js -> GWtoRS.js -> RS.js -> RStoSUZZ.js -> SUZZ.js -> SUZZtoMGH.js -> MGH.js -> MGHtoDRUM.js -> DRUM.js -> DRUMtoRV.js -> RV.js -> RVtoHUB.js -> HUB.js -> HUBtoWET.js -> WET.js -> WETtoQUAD.js -> QUAD.js -> QUADtoDEN.js -> DEN.js -> DENtoGW2.js -> GW2.jsGW2toWC.js -> WC.js -> FIN.js


## CSS
The primary function of .css files in this application is to load the maps.  Each stop-connector component has its own .css file that almost exclusively serves to place the map images and reposition the buttons at the bottom of the window.  CSS is used minimally throughout the application since there are so many variants of mobile screen sizes, so a certain degree of imperfection is expected on some pages depending on the screen size of the viewing device.


## Potential Future Features
As a full-time student, there are some features that I do not have the time to implement.  These features and edits would add to the aesthetic and overall functionality of the application, but the application is completely functional and usable without these features.  
    - Perfectly sized images that are responsive to every possible screen size.  
    - Location services that let a visitor know when they have reached a destination.  
    - A "Learn More" feature that would allow visitors to view more information about a stop or topic.  

Again, all of these are "nice to have's" and not "need to have's" and could be implemented in the future by a contracted or full-time developer.


# Notes from the Author
One large note I want to make is about the technical complexity of this website.  The choice to introduce large amounts of redundancy into the component classes was an intentional design choice made specifically for the workspace I was developing for.  I was creating this application for an office that does not employ any trained developers, and thus I significantly decreased the reusability and refactoring of individual components.  I very easily could have written half a dozen components that would dynamically source all audio files, stop titles and locations, and produce the maps based on the last visited stop, but chose not to in order to make future maintenance easier for my non-developer coworkers.

To see a higher complexity project of mine, see the following repo: https://github.com/KSJI/alpha/tree/dev/src.

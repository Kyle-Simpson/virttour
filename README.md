# General Information
This website was created by request of Tamara Long to replace the old Guidebook application that previously hosted UW's virtual campus tour.

This website, created by Kyle Simpson (a UW Informatics student and one of the 2018-2019 Student Directors of the Office of Admissions' Campus Visit Program), takes visitors around the University of Washington's Seattle campus to see the highlights of campus.  

The tour is narrated by two former tour guides, with quotes from various guests.  




# Technical Documentation
In test, the website was built using React, React Router, and Firebase.  Firebase is/will be phased out when the application is transitioned onto the Admissions server.

The .js files are relatively flat and are relatively technically simple.  There are 3 types of .js files found
1. Introduction & Conclusion pages that bookend the application
    - HomePage.js
    - Fin.js
2. Audio content pages that present the tour
    - Den.js (fully documented)
    - Drum.js
    - GW.js
    - GW2.js
    - Hub.js
    - MGH.js
    - Quad.js
    - RS.js
    - RV.js
    - Suzz.js
    - WC.js
    - Wet.js
3. Connecting pages that display maps
    - DENtoGW2.js (fully documented)
    - DRUMtoRV.js
    - GW2toWC.js
    - GWtoRS.js
    - HUBtoWET.js
    - MGHtoDRUM.js
    - QUADtoDEN.js
    - RStoSUZZ.js
    - RVtoHUB.js
    - SUZZtoMGH.js
    - WETtoQUAD.js

The App.js file sets the endpoints and initializes the webpage instance.

The intro and conclusion pages have been fully documented, and one of each of the content and connection pages have been fully documented.  Each other .js file is identical to those with similar purposes (except for slightly different source urls).


# Notes from the Author
One large note I want to make is about the technical complexity of this website.  The choice to introduce large amounts of redundancy into the component classes was an intentional design choice made specifically for the workspace I was developing for.  I was creating this application for an office that does not employ any trained developers, and thus I significantly decreased the reusability and refactoring of individual components.  I very easily could have written half a dozen components that would dynamically source all audio files, stop titles and locations, and produce the maps based on the last visited stop, but chose not to in order to make future maintenance easier for my non-developer coworkers.

To see a higher complexity project of mine, see the following repo: https://github.com/KSJI/alpha/tree/dev/src.

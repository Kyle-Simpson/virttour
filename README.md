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
  - Den.js
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
  - DENtoGW2.js
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

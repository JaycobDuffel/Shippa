# Shippa
## Smoother shipping, smoother sales. 
Getting cars from one dealer to another. Facilitating easier vehicle sales across dealer networks. 

## Project Overview
The cost to ship a vehicle is high, is painful and time-consuming to negotiate and setup. Shippa is a seamless interface to submit a request for shipping a vehicle from one city to another. Get an instant quote, and let the transporters come to you. Shippa acts as the middleman between car dealers and carriers, allows car dealers to post shipments on a map for carriers to see. Carriers can then click the shipment pin on the map to view the details and chat directly with the car dealer to finalize shipment details.

### User Stories: 
- A shipper can see their transportation history
- A shipper can chat with carrier via instant messenger
- A shipper can approve/deny a ‘shipment pickup’ (through websockets chat) -- shipper goes to shipments list and changes status according to chat discussion. (boolean)
- When a shipment is picked up, pin leaves the map and is on its way to its destination
- A shipper can register/login to their account
- Anyone can see the ‘about us’ page
- Anyone can view homepage to check map for shipments
- A shipper can log in to find price for shipping
- Anyone can view a FAQ’s
- A shipper can pay for services through the website

### Future Development
In the future, the carrier login and database will be set up (no timeline at the time of this writing), allowing carriers to see their history, control their shipments in progress. In addition, performance improvements will be made to ensure speed and efficiency. 

## Video Walkthrough of Shippa

(https://streamable.com/ilaoh1)

## Contributors:
Ali Al Shaikly (https://github.com/Alshaikhly/)

Aubrey Blair-Pattison (https://github.com/TheMagicalAubster)

Jaycob Duffel (https://github.com/JaycobDuffel)

## Screenshots

![Home Page](https://github.com/Alshaikhly/Shippa/blob/master/public/images/Screen%20Shot%202020-08-11%20at%209.12.04%20PM.png?raw=true)
![Adding Shipment](https://github.com/Alshaikhly/Shippa/blob/master/public/images/Screen%20Shot%202020-08-12%20at%206.52.49%20PM.png?raw=true)
![Showing Map](https://github.com/Alshaikhly/Shippa/blob/master/public/images/Screen%20Shot%202020-08-12%20at%206.53.35%20PM.png?raw=true)

## Getting Started
- Install dependencies for client by using the "npm install" command.
- use command "cd server" and run "npm install" to install server dependencies.

## Starting React server

- Run "npm start" in the root directory to start the server for the client
- Open http://localhost:3000 to view application

## Starting database server

- Run "cd server" and then run "npm start" to start database

## Starting websockets

- Run "cd sockets" from the server folder and then run "node chatServer.js"

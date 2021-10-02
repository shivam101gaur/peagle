# **Peagle** 
## Control your bot from anywhere !!

**Overview**

Peagle is a webapp that uses socket.io. to implement **web sockets** for live communication between user and robot. A Server running the web app acts as mediator between the two. 

**[The Robot](https://github.com/shivam101gaur/peagle-rpi/tree/master#readme)**

The robot here is a raspberry pi operated car robot. The wheels (motors) were controlled via L298N H-Bridge. It had sensors like GPS and Distance Sensors which sent required information to server and ultimately to user and was backed up by a 27V battery. 

**Peagle Web App**

User can login by using thier creditionals and then access control panel page. User can send instructions to car through that page in webapp. The web app uses HTML, CSS, JS, PHP, NODE JS. Though this project was based on a car robot but this app could be extended to other robots and gadgets and modified accordingly. More features and technologies (google action and others) could be added to project and make it more featured and user-friendly

## Usage
- **Step 1** : Run server.js


  ```
   node server.js
  ```
- **Step 2** : Switch on  raspberry pi  and then
    [run index.js in Raspberry-Pi ](https://github.com/shivam101gaur/peagle-rpi/tree/master#readme)
    ```
     sudo node index.js
    ```
 - **Step 3** : Open webapp on web browser 

## Published Paper
  - http://www.ijirt.org/Article?manuscript=149689


## **Project Design**
  ![control panel](./style/screen-shots/projectarchitecture.png)

  ![control panel](./style/screen-shots/botdesign.png)

  ![control panel](./style/screen-shots/connection.png)

  ![control panel](./style/screen-shots/bot.png)


## **Screen Shots**
  ### **Welcome Page**
  ![control panel](./style/screen-shots/welcome.png)
  ### **Login Page**
![control panel](./style/screen-shots/login.png)
  ### **Control Page**
![control panel](./style/screen-shots/control.png)

## Developer
- [Shivam Gaur](https://github.com/shivam101gaur)

# Lizuvia

Lizuvia, an e-commerce platform, is a website for users/companies to list their home furnitures and decoration products, receive feedback on improvements on the products and services, for users/customers to place order for the products.

**Live Site:** [Lizuvia](https://lizuvia.herokuapp.com/)

## Wiki Links
- [Database Schema and Backend Routes](https://github.com/fangruz114/Lizuvia/wiki/Database-Schema-and-Backend-Routes)
- [Feature List](https://github.com/fangruz114/Lizuvia/wiki/Feature-List)
- [User Stories](https://github.com/fangruz114/Lizuvia/wiki/User-Stories)
- [Wireframes and Front End Routes](https://github.com/fangruz114/Lizuvia/wiki/Wireframes-and-Front-End-Routes)

## Tech Stack

### Frameworks, Platforms, and Libraries:

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white) ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
 ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

### Database:

![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

### Hosting:

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## Landing Page

<img width="2560" alt="Screen Shot 2022-09-06 at 11 41 36 PM" src="https://user-images.githubusercontent.com/101694480/188808721-c5fef52c-87cf-4199-9f69-75d1d0afe3ec.png">

## Product List Page

<img width="2560" alt="Screen Shot 2022-09-06 at 11 51 25 PM" src="https://user-images.githubusercontent.com/101694480/188809511-54b72d56-7842-4363-b333-d651aa234900.png">

## Product Details Page

<img width="2560" alt="Screen Shot 2022-09-06 at 11 51 45 PM" src="https://user-images.githubusercontent.com/101694480/188809608-652760c4-a398-4a91-97b6-3d84d4b39114.png">

## Shopping Cart Page

<img width="2560" alt="Screen Shot 2022-09-06 at 11 52 33 PM" src="https://user-images.githubusercontent.com/101694480/188809670-d0456bab-8a57-4313-bce8-118283b22946.png">

## Manage Product Listing Page

<img width="2560" alt="Screen Shot 2022-09-06 at 11 53 01 PM" src="https://user-images.githubusercontent.com/101694480/188809826-ccef8702-7aba-4c02-8503-919b35201ce5.png">


## Manage Orders Page

<img width="2560" alt="Screen Shot 2022-09-06 at 11 53 25 PM" src="https://user-images.githubusercontent.com/101694480/188809960-9a906f6c-6054-4356-97c0-b54eb51e3269.png">

## Order Detail Page

<img width="2560" alt="Screen Shot 2022-09-06 at 11 53 42 PM" src="https://user-images.githubusercontent.com/101694480/188810057-07ca4663-1c9b-45d8-b05b-3a08a7334ef3.png">

## 404 Page

<img width="2560" alt="Screen Shot 2022-09-06 at 11 58 07 PM" src="https://user-images.githubusercontent.com/101694480/188810267-e8349331-9dd3-4725-9fb0-a1ce5009ab05.png">

## Run Locally

- Clone the repo
- Open up two terminals, one for the backend, and one for the frontend
- In the back-end terminal, in the root folder, run pipenv install to install the necessary dependencies, and then run pipenv run flask run
- In the front-end terminal, cd into the react-app folder, run npm install to install the necessary dependencies, and then run npm start

### Environment Variables

To run this project, you need to add the following enviroment variables to your .env file in your root folder.

```
DATABASE_URL=sqlite:///dev.db
SECRET_KEY=«generate_strong_secret_here»

REACT_APP_BASE_URL=http://localhost:5000
```

## To-do-list

- Search, Sort feature
- Product Review CRUD
- Favorite Products
- Image Hosting on AWS

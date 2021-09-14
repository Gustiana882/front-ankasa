<h1 align="center">
  App Ticketing
</h1>

<p align="center"><img src="https://www.arkademy.com/img/logo%20arkademy.1c82cf5c.svg" width="200px" alt="Arkademylogo.svg" /></p>

<p align="center">
    <a href="https://www.arkademy.com/" target="blank">Our Website</a>
    ·
    <a href="https://www.arkademy.com/auth/signup">Join With Us</a>
    ·
</p>
<hr/>

<p align="center"><img src="https://user-images.githubusercontent.com/55304067/132936029-85c866dc-8249-4f8a-a61e-e87f5ad27036.png" width="500px" alt="Arkademylogo.svg" /></p>
<h3 align="center">
  Home pages
</h3>
<p align="center"><img src="https://user-images.githubusercontent.com/55304067/132936087-7fe9612c-8e82-43f4-8f45-9fae3536f15e.png" width="500px" alt="Arkademylogo.svg" /></p>
<h3 align="center">
  Login pages
</h3>
<p align="center"><img src="https://user-images.githubusercontent.com/55304067/133192629-28fd3a55-fd10-48da-96cd-9a4f9f6173f6.png" width="500px" alt="Arkademylogo.svg" /></p>
<h3 align="center">
  Register pages
</h3>
<p align="center"><img src="https://user-images.githubusercontent.com/55304067/132936103-3389b590-16e2-47bd-9123-88200d17e03f.png" width="500px" alt="Arkademylogo.svg" /></p>
<h3 align="center">
  Search pages
</h3>
<p align="center"><img src="https://user-images.githubusercontent.com/55304067/132936118-c576d560-8eac-4f54-8049-9297e5116033.png" width="500px" alt="Arkademylogo.svg" /></p>
<h3 align="center">
  Profile pages
</h3>
<p align="center">
    <a href="http://www.ankasa.online/" target="blank">View Demo</a>
  · <a href="https://github.com/Gustiana882/front-ticketing/issues">Report Bug</a>
  · <a href="https://github.com/Gustiana882/front-ticketing/pulls">Request Feature</a>
</p>


## Built With

[![Express.js](https://img.shields.io/badge/Express.js-4.x-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.12.13-green.svg?style=rounded-square)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-v.13.3-blue.svg?style=rounded-square)](https://www.postgresql.org/)
[![Redis](https://img.shields.io/badge/Redis-v.6.2-red.svg?style=rounded-square)](https://redis.io/)


### Clone The Repository

```bash

  git clone https://github.com/Gustiana882/front-ticketing.git
  
```

### Install Dependencies
```bash

  yarn install
  
```

### Run App
```bash

  cd front-ticketing

  yarn start
  
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

```bash

  yarn run build
  
```
## for Developer

### standar request login 
```bash
  {
    "email": "user",
    "password":"user1234"
  }
```

### standar request register
```bash
  {
    "name": "user",
    "email": "user@mail.com",
    "password": "user1234"
```

### standar response ticket API
```bash
  [
    { 
      "id" : "1",
      "uuid": "AB-221",
      "image": "img.jpg",
      "maskapai" : "Garuda Indonesia",
      "from": "Indonesi",
      "to": "Tokyo",
      "time": [
          {
            "depature": "00:00",
            "arrived": "04:00",
            "transit": "1",
          },
          {
            "depature": "06:00",
            "arrived": "10:00",
            "transit": "2",
          }
        ],
       "price": [
          {
            "idclass": 3,
            "class": "Economy",
            "adult": 1200000,
            "child": 800000,
          },
          {
            "idclass": 2,
            "class": "Business",
            "adult": 1800000,
            "child": 1200000,
          },
          {
            "idclass": 1,
            "class": "FirstClass",
            "adult": 2300000,
            "child": 1500000,
          }
        ],
       "date": "Monday, 20 july 20",
       "chairsAmount": 108,
       "gate": 221,
       "terminal": "A",
    }
  ]
```

### standar request booking ticket
```bash
{
  "title": "Mr.",
  "name": "Budi",
  "nationallity": "Indonesia",
  "userId": 1,
  "idTicket": "AB-221",
  "Price": 3000000,
  "statusPay": false,
}
  
```

### standar response destination
```bash
[
  {
    "id": 1,
    "city": "Jakarta",
    "country": "Indonesia",
    "image": "image"
   }
]
```

### `Backend Ticketing Repository`
 <a href="https://github.com/Gustiana882/back-ticketing" target="blank">https://github.com/Gustiana882/back-ticketing</a>

```bash
   git clone https://github.com/Gustiana882/back-ticketing.git
```

### Contributors
<a href = "https://github.com/Gustiana882/front-ticketing/graphs/contributors">
  <img src="https://avatars.githubusercontent.com/u/83713045?s=60&amp;v=4" class="avatar avatar-user" alt="calvinrahmat" width="38" height="38">
  <img src="https://avatars.githubusercontent.com/u/55304067?s=60&amp;v=4" class="avatar avatar-user" alt="Gustiana882" width="38" height="38">
  <img src="https://avatars.githubusercontent.com/u/53255114?s=60&amp;v=4" class="avatar avatar-user" alt="firyal-salsa" width="38" height="38">
  <img src="https://avatars.githubusercontent.com/u/70585701?s=60&amp;v=4" class="avatar avatar-user" alt="rizkazn" width="38" height="38">
  <img src="https://avatars.githubusercontent.com/u/79564390?s=60&amp;v=4" class="avatar avatar-user" alt="wsaefulloh" width="38" height="38">
</a>


<h1 align="center">
  App Ticketing
</h1>

<p align="center"><img src="https://www.arkademy.com/img/logo%20arkademy.1c82cf5c.svg" width="500px" alt="Arkademylogo.svg" /></p>

<p align="center">
    <a href="https://www.arkademy.com/" target="blank">Our Website</a>
    ·
    <a href="https://www.arkademy.com/auth/signup">Join With Us</a>
    ·
</p>

## Clone the repository

```bash

  git clone https://github.com/Gustiana882/front-ticketing.git
  
```

### Install dependencies
```bash

  yarn install
  
```

### run app
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
## for developer

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

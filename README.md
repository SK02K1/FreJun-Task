# FreJun-Task

## How to run app locally

```
git clone https://github.com/SK02K1/FreJun-Task.git
cd FreJun-Task
yarn
yarn start
```

## Features

- Login Page
  - login only for **Username: admin@frejun** | **Password: 12345678**
  - redirect to users page after login
  - error message for incorrect credentials
  - disabled submit button for empty fields
  - prevent login page to open once user is logged in
  - responsive

- Users Page
  - private route
  - fetch users from the API
  - show loader when the API is in progress
  - MUI table for displaying users list
  - search functionality based on **firstName** | **lastName** | **email**
  - debounced search with a delay of **600ms**
  - show all users for empty query
  - show relevant users when there is a search query
  - show relevant message when no user found based on search query
  - keep me logged in
  - responsive

## Test credentials
- Username: admin@frejun
- Password: 12345678

## Preview

<img width="1383" alt="Screenshot 2023-02-11 at 9 20 42 AM" src="https://user-images.githubusercontent.com/55895224/218238301-a88edbc9-526c-48f1-9b06-187a3c5d1b5b.png">

<img width="1383" alt="Screenshot 2023-02-11 at 9 20 54 AM" src="https://user-images.githubusercontent.com/55895224/218238303-3c0f017d-183c-45dc-a35b-180c4ea7186f.png">

  

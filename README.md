# GloodAi-task

Backend Api made with Django and SQLite.

Frontend made with React and Tailwind.

## Backend API

1. To View all subscribers details (GET request).  
      
    ```/subscribers```
    
2. To add a new Subscriber (POST request).  
     
   ```/addsub```
    
    Json body to send to POST request.  
    ```
    {
      name: "Name of user",
      email: "Email of user",
    }
    ```
    
### To run backend

```
cd backend/

pip3 install -r requirements.txt

cd mailsub/

python3 manage.py runserver
```

## Frontend

A simple Form Card that takes Name and Email as Input and sends the POST request to add subscription to the Django Server.

### To run frontend:

```
cd frontend/formui/

npm install

npm start
```

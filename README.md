# 🌐 Book Store API

A RESTful backend for managing users, role, permissions, books and orders for Book Store and Book Store Dashboard. 


## 🚀 Features

- User authentication && roles
- Role-based access control
- Book catalog && invetory
- Orders
- Filtering for users, books, orders
- RESTful API
- Basket, Favorites
- Payments

 
## 🛠️ Techincal stack
- **Node.js**
- **Express.js**
- **Drizzle ORM**
- **MySQL**
- **Websocket/Socket.io**
- **Zod**

## 📂 Folder Structure

```bash
/book-store-server
|- src/
    |- db/
        |- schema.ts
        |- realtions.ts
    |- controllers/
    |- middleware/
    |- errors/
    |- routes/
    |- static/
|- docs/
    |- v1/
        |- er-diagram.drawio
        |- er-diagram.png
    |- v2/...
|- package.json
|- README.md
```

## 🔐 Authorization
Role-based access:
- Admin: Full access
- Employee: Partial access
- User: Browse books, place orders


## 🧩 ER Diagram

<img width="1201" height="1031" alt="pet-project-er-diagram" src="https://github.com/user-attachments/assets/3c1304c2-d72f-4f8e-84b0-044541621240" />

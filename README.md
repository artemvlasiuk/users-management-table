# User Management Table

This project is a simple web application that displays user data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) in a table format with advanced filtering options. The application uses **Redux** for state management and is fully typed with **TypeScript**.

[DEMO LINK](https://users-management-table-seven.vercel.app/)

## Features

1. **Fetch All Users:**

   - Data is retrieved from the `/users` endpoint of the JSONPlaceholder API.

2. **Display Users in a Table:**

   - The table includes the following columns:
     - Name
     - Username
     - Email
     - Phone
   - Data is displayed in a structured table format.

3. **Advanced Filtering:**

   - Search fields are available for each column (Name, Username, Email, Phone).
   - The table dynamically updates as users type into the search fields.

4. **State Management with Redux:**

   - **Redux Toolkit** is used to manage the global state of the application, including user data and filter states.

5. **TypeScript for Type Safety:**

   - The entire project is written in **TypeScript**, ensuring type safety and reducing potential runtime errors.

## Technologies Used

- **React**: For building UI components.
- **Redux Toolkit**: For managing global state.
- **TypeScript**: To ensure type safety.
- **Fetch**: For making API requests.
- **Tailwind CSS**: For designing the layout and styling.
- **Tanstack Table**: For implementing the table with advanced features.
- **Shadcn**: For table styling and design.

## Getting Started

1. Download the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open `http://localhost:5173/`

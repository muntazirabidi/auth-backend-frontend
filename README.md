# Django-React-Tutorial

This project demonstrates a full-stack application using Django for the backend and React for the frontend. The primary goal is to create a user authentication system with features such as login, registration, and token-based authentication.

## Project Structure

### Backend (Django)
The backend is built using Django, which serves as the API provider and handles user authentication.

- **api**: Contains the Django app responsible for managing the APIs and the core logic of the application.
  - `migrations/`: Database migration files.
  - `admin.py`: Django admin configuration for the app.
  - `apps.py`: Application configuration.
  - `models.py`: Defines the data models for the application.
  - `serializers.py`: Serializers to convert complex data types to JSON for API responses.
  - `tests.py`: Unit tests for the Django app.
  - `urls.py`: URL routing for the Django app.
  - `views.py`: API views to handle the HTTP requests.

- **backend**: The core Django project folder.
  - `__init__.py`: Project initialization.
  - `asgi.py`: ASGI configuration for asynchronous support.
  - `settings.py`: Project settings, including database configuration, installed apps, middleware, etc.
  - `urls.py`: Main URL routing for the Django project.
  - `wsgi.py`: WSGI configuration for deployment.

- **db.sqlite3**: The SQLite database used for development purposes.
- **manage.py**: Command-line utility for administrative tasks.

### Frontend (React)
The frontend is built using React and connects to the Django backend to provide a seamless user experience.

- **src**: Contains the main source code for the React application.
  - **assets**: Static assets like images or styles.
  - **components**: Reusable components used throughout the application.
    - `Form.jsx`: Form component for user input.
    - `LoadingIndicator.jsx`: Component to show loading state.
    - `Note.jsx`: Component to display notes.
    - `ProtectedRoute.jsx`: Higher-order component to protect routes based on user authentication.
  - **pages**: Components representing different pages in the application.
    - `Home.jsx`: The homepage component.
    - `Login.jsx`: Component for the login page.
    - `NotFound.jsx`: Component to display when a page is not found.
    - `Register.jsx`: Component for the registration page.
  - **styles**: Contains CSS/SCSS files for styling components.
  - `api.js`: JavaScript file to manage API calls to the backend.
  - `App.jsx`: The main application component.
  - `constants.js`: Configuration and constants used across the application.
  - `main.jsx`: Entry point for the React application.
  - `.env`: Environment variables for the React application.

- **public**: Contains the public assets for the React app, including `index.html`.

- **node_modules**: Directory containing all the npm dependencies.

### Project Setup

#### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/muntazirabidi/Django-React-Tutorial.git
    cd Django-React-Tutorial/backend
    ```

2. Install the required Python packages:
    ```bash
    pip install -r requirements.txt
    ```

3. Apply the database migrations:
    ```bash
    python manage.py migrate
    ```

4. Run the Django development server:
    ```bash
    python manage.py runserver
    ```

#### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```

2. Install the required npm packages:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm start
    ```

## Features

- **User Registration**: Users can sign up for a new account.
- **User Login**: Users can log in with their credentials.
- **JWT Authentication**: Secure token-based authentication for API endpoints.
- **Protected Routes**: Certain pages are accessible only when the user is authenticated.
- **Responsive Design**: The frontend is designed to be responsive and user-friendly.

## Contributing

If you wish to contribute to this project, please fork the repository and create a pull request with your changes. Ensure that you follow the coding standards and include appropriate tests for your changes.


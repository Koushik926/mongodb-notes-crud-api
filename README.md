# MongoDB Notes CRUD API

## Overview
A complete RESTful API for managing notes built with Node.js, Express, and MongoDB/Mongoose.

## Features
- ✅ Create, Read, Update, Delete (CRUD) operations
- ✅ MongoDB database with Mongoose ODM
- ✅ RESTful API endpoints
- ✅ Error handling
- ✅ Input validation

## Tech Stack
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

## Project Structure
```
mondb-notes-crud-api/
├── models/
│   └── note.js          # Mongoose Note model
├── routes/
│   └── notes.js         # Notes API routes
├── server.js            # Main application file
├── package.json         # Dependencies
├── sample_requests.http # Sample API requests
└── README.md
```

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Koushik926/mongodb-notes-crud-api.git
   cd mongodb-notes-crud-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up MongoDB**
   - Install MongoDB locally OR use MongoDB Atlas (cloud)
   - Update connection string in `.env` file (optional)

4. **Run the server**
   ```bash
   npm start
   # Or for development with auto-reload:
   npm run dev
   ```

## API Endpoints

### Base URL: `http://localhost:5000`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Welcome message |
| POST | `/notes` | Create new note |
| GET | `/notes` | Get all notes |
| GET | `/notes/:id` | Get single note |
| PUT | `/notes/:id` | Update note |
| DELETE | `/notes/:id` | Delete note |

## Usage Examples

See `sample_requests.http` for detailed examples or use these curl commands:

**Create a note:**
```bash
curl -X POST http://localhost:5000/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"My Note","content":"Content here","tags":["test"]}'
```

**Get all notes:**
```bash
curl http://localhost:5000/notes
```

## Notes
- MongoDB must be running before starting the server
- Default port is 5000 (configurable via PORT environment variable)
- All endpoints return JSON responses

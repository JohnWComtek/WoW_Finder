# WoW Community Hub

A comprehensive World of Warcraft community platform for finding players, managing rosters, and tracking progress.

![WoW Community Hub Logo](client/public/logo192.png)

## Features

- **Find Players**: Connect with other players for raids, Mythic+, PvP, or social activities
- **Track Progress**: Monitor Raider.IO scores and Warcraft Logs performance
- **Manage Rosters**: Create and manage teams with detailed player information
- **Schedule Events**: Organize raids, dungeons, and PvP events

## Tech Stack

### Frontend
- React 18
- Material-UI v5
- Redux Toolkit
- React Router v6

### Backend
- Node.js
- Express
- MongoDB
- JWT Authentication

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/JohnWComtek/WoW_Finder.git
cd WoW_Finder
```

2. Install dependencies:
```bash
# Install server dependencies
npm install

# Install client dependencies
cd client
npm install
```

3. Create a `.env` file in the root directory:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

4. Start the development server:
```bash
# Run backend and frontend concurrently
npm run dev:full

# Or run separately:
npm run server # Backend only
npm run client # Frontend only
```

## Project Structure

```
wow-community-hub/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   └── src/
│       ├── components/    # Reusable components
│       ├── pages/        # Page components
│       ├── store/        # Redux store configuration
│       └── App.js        # Main application component
├── server/                # Backend Node.js/Express application
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   └── index.js          # Server entry point
└── package.json          # Project dependencies and scripts
```

## Available Scripts

- `npm run dev:full` - Run both frontend and backend in development mode
- `npm run client` - Run frontend only
- `npm run server` - Run backend only
- `npm run build` - Build the frontend for production
- `npm run deploy` - Deploy to GitHub Pages

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- World of Warcraft® and Blizzard Entertainment® are registered trademarks of Blizzard Entertainment, Inc.
- Raider.IO integration for player statistics
- Warcraft Logs integration for performance tracking 
# Chef Claude 👨‍🍳

A modern React web application that helps you organize your ingredients and generate custom recipes based on what you have on hand. Built with React, Vite, and Tailwind CSS.

![Chef Claude Logo](src/assets/images/chef-claude-logo.png)

## Features

- **Ingredient Management**: Add and track ingredients you have available
- **Smart Validation**: Prevents duplicate ingredients with user-friendly error messages
- **Recipe Generation**: Get custom recipes when you have 4+ ingredients (feature in development)
- **Responsive Design**: Clean, modern UI built with Tailwind CSS
- **Real-time Updates**: Instant feedback and updates as you manage your ingredient list

## Tech Stack

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 4.1.12
- **Linting**: ESLint with React hooks support
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TheFatPanda-Dev/chef-claude.git
   cd chef-claude
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code quality issues

## Project Structure

```
chef-claude/
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── chef-claude-logo.png
│   ├── components/
│   │   ├── Form.jsx          # Main ingredient input form
│   │   └── Header.jsx        # Application header with logo
│   ├── App.jsx               # Main application component
│   ├── App.css               # Application styles
│   └── main.jsx              # Application entry point
├── public/                   # Static assets
├── index.html               # HTML template
├── package.json             # Project dependencies and scripts
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
└── README.md                # Project documentation
```

## How to Use

1. **Add Ingredients**: Type an ingredient name in the input field and click "Add ingredient" or press Enter
2. **View Your List**: See all your added ingredients displayed below the input form
3. **Generate Recipes**: Once you have 4 or more ingredients, you'll see a "Get a recipe" button to generate custom recipes
4. **Error Handling**: The app prevents duplicate ingredients and shows helpful error messages

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Development Notes

- Built with React 19 using modern hooks (useState, useRef)
- Uses form actions for handling ingredient submission
- Implements proper error handling with auto-dismissing messages
- Responsive design that works on desktop and mobile devices
- ESLint configuration ensures code quality and consistency

## Future Enhancements

- [ ] Recipe generation API integration
- [ ] Ingredient categorization and filtering
- [ ] Save favorite recipes
- [ ] Dietary restriction filters
- [ ] Shopping list generation
- [ ] User accounts and preferences

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by [TheFatPanda-Dev](https://github.com/TheFatPanda-Dev)

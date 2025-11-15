# Contributing to MongoDB Notes CRUD API

Thank you for your interest in contributing! We welcome contributions from the community.

## How to Contribute

### Reporting Bugs
- Check if the bug has already been reported in Issues
- Create a new issue with:
  - Clear description
  - Steps to reproduce
  - Expected vs actual behavior
  - Your environment (Node version, OS, etc.)

### Suggesting Features
- Open an issue with the `enhancement` label
- Describe the feature and its benefits
- Provide use cases

### Pull Requests
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Test your changes thoroughly
5. Commit with clear messages
6. Push to your fork
7. Open a Pull Request

### Code Style
- Follow existing code patterns
- Use ESLint and Prettier
- Write meaningful names
- Add comments for complex logic
- Keep functions small and focused

### Testing
- Write tests for new features
- Ensure existing tests pass
- Run `npm test` before submitting PR

### Commit Messages
- Use present tense
- Be descriptive but concise
- Reference issues: "Fix #123"

## Development Setup

```bash
git clone https://github.com/YOUR-USERNAME/mongodb-notes-crud-api.git
cd mongodb-notes-crud-api
npm install
cp .env.example .env
# Configure your MongoDB connection in .env
npm run dev
```

Thank you for contributing! 🎉

# MDME - Mark Down Made Easy 📝

![MDME Banner](https://img.shields.io/badge/MDME-Mark%20Down%20Made%20Easy-blue?style=for-the-badge)
![Open Source](https://img.shields.io/badge/Open%20Source-Yes-green?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)
![Contributions](https://img.shields.io/badge/Contributions-Welcome-orange?style=for-the-badge)

> **Once you try, it's addictive like mdma, but it's mdme.**

A modern, open-source markdown editor with AI integration capabilities. MDME (Mark Down Made Easy) provides a clean, intuitive interface for writing and editing markdown with real-time preview functionality.

## 🌐 Live Demo

**[Try MDME →](https://mdme.vercel.app/)**

## 📂 Repositories

- **Frontend**: [mdme-frontend](https://github.com/sayeedmunees/mdme-frontend) (This Repository)
- **Backend**: [mdme-backend](https://github.com/sayeedmunees/mdme-backend)

## 🎯 Project Vision

MDME aims to revolutionize the markdown editing experience by combining simplicity with powerful AI-driven features. Our goal is to create an editor that makes markdown accessible to everyone while providing advanced capabilities for power users.

## ✨ Current Features

- **Live Preview**: See your markdown render in real-time as you type
- **Clean Interface**: Distraction-free writing with minimal design focused on your content
- **Responsive Design**: Write anywhere on desktop, tablet, or mobile devices seamlessly
- **Document Management**: Save, edit, and manage your markdown documents
- **Document History**: Track and access your previously saved documents
- **Copy & Export**: Easy content management with copy functionality
- **GitHub Flavored Markdown**: Full support for enhanced markdown syntax including code blocks, tables, and more

## 🚀 Upcoming AI Features

We're actively working on integrating AI capabilities to enhance your markdown writing experience:

- **AI Writing Assistant**: Smart writing suggestions and improvements
- **Content Enhancement**: AI-powered grammar and style suggestions
- **Auto-completion**: Intelligent markdown syntax completion
- **Content Optimization**: SEO and readability improvements
- **Smart Formatting**: Automatic formatting suggestions
- **Content Generation**: AI-powered content creation assistance

## 🛠️ Tech Stack

### Frontend
- **React** with Vite for fast development
- **Modern JavaScript/ES6+**
- **CSS3** with responsive design
- **@uiw/react-markdown-editor** for enhanced markdown editing experience

### Backend
- **Node.js** with Express-like architecture
- **JSON Server** for RESTful API (current implementation)
- **CORS** enabled for cross-origin requests
- **File-based storage** with JSON database (db.json)

### Current API Endpoints
```
GET    /markdown     - Retrieve all documents
POST   /markdown     - Create new document
PUT    /markdown/:id - Update existing document
DELETE /markdown/:id - Delete document
```

## 🏗️ Project Structure

### Frontend Structure
```
mdme-frontend/
├── src/
│   ├── components/
│   │   ├── Editor/
│   │   ├── Preview/
│   │   ├── Navigation/
│   │   └── History/
│   ├── pages/
│   │   ├── Home/
│   │   ├── Editor/
│   │   └── History/
│   ├── styles/
│   └── utils/
├── public/
└── README.md
```

### Backend Structure
```
mdme-backend/
├── index.js          # Main server file
├── db.json           # JSON database
├── package.json      # Dependencies
└── node_modules/     # Installed packages
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- Git

### Setup Frontend

1. **Clone the frontend repository**
   ```bash
   git clone https://github.com/sayeedmunees/mdme-frontend.git
   cd mdme-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Setup Backend

1. **Clone the backend repository**
   ```bash
   git clone https://github.com/sayeedmunees/mdme-backend.git
   cd mdme-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the backend server**
   ```bash
   npm start
   ```

4. **Backend will be running on**
   ```
   http://localhost:3000
   ```

### Full Stack Development

For full stack development, run both frontend and backend servers simultaneously:

```bash
# Terminal 1 - Backend
cd mdme-backend
npm start

# Terminal 2 - Frontend  
cd mdme-frontend
npm run dev
```

## 🤝 Contributing

We welcome contributions from developers of all skill levels! MDME is completely open source, and we encourage the community to help shape its future.

### Ways to Contribute

- **Frontend Development**: Improve UI/UX, add new features, enhance editor functionality
- **Backend Development**: Improve API design, add database integration, enhance performance
- **AI Integration**: Implement intelligent writing features, content suggestions
- **Documentation**: Help improve our docs, guides, and tutorials
- **Bug Reports**: Report issues and suggest improvements
- **Feature Requests**: Propose new functionality
- **Testing**: Help test new features and report bugs
- **Design**: Contribute to UI/UX improvements

### Priority Areas for Contribution

1. **AI Integration**: Implement OpenAI/GPT integration for writing assistance
2. **Database Migration**: Replace JSON Server with proper database (MongoDB/PostgreSQL)
3. **User Authentication**: Add user accounts and document ownership
4. **Real-time Collaboration**: Enable collaborative editing features
5. **Enhanced Editor**: Add more markdown editing features (tables, math equations)
6. **Export Options**: PDF, HTML, and other format exports
7. **Themes**: Dark/light mode and custom themes

### Getting Started with Contributions

1. **Fork both repositories** (frontend and backend)
2. **Create your feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes and commit**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request** on the respective repository

### Development Guidelines

- Follow existing code style and conventions
- Write clear, descriptive commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed
- Ensure both frontend and backend work together seamlessly

## 📋 Roadmap

### Phase 1 (Current) - Core Foundation ✅
- [x] Basic markdown editor with live preview
- [x] Document saving and history
- [x] Responsive design
- [x] RESTful API with JSON Server
- [x] CORS enabled backend
- [ ] Theme switching (dark/light)
- [ ] Enhanced export functionality

### Phase 2 - AI Integration 🚧
- [ ] OpenAI/GPT integration
- [ ] AI writing assistant
- [ ] Smart auto-completion
- [ ] Grammar and style suggestions
- [ ] Content optimization
- [ ] Intelligent formatting

### Phase 3 - Enhanced Backend 📋
- [ ] Database migration (MongoDB/PostgreSQL)
- [ ] User authentication system
- [ ] Document ownership and sharing
- [ ] Advanced API features
- [ ] Cloud storage integration

### Phase 4 - Advanced Features 🔮
- [ ] Real-time collaborative editing
- [ ] Plugin system architecture
- [ ] Advanced export options (PDF, HTML, LaTeX)
- [ ] Version control integration
- [ ] Template system

### Phase 5 - Enterprise Features 🏢
- [ ] Team workspaces
- [ ] Advanced analytics
- [ ] Custom AI models
- [ ] Enterprise security features
- [ ] On-premise deployment options

## 🐛 Issues & Support

Found a bug or have a feature request? We'd love to hear from you!

- **Bug Reports**: [Frontend Issues](https://github.com/sayeedmunees/mdme-frontend/issues) | [Backend Issues](https://github.com/sayeedmunees/mdme-backend/issues)
- **Feature Requests**: Open an issue in the relevant repository
- **General Discussion**: Start a discussion in either repository
- **Questions**: Feel free to open an issue with the "question" label

## 📊 Current Architecture

```
┌─────────────────┐       ┌─────────────────┐
│                 │       │                 │
│   React Frontend│◄─────►│  JSON Server    │
│   (Port 5173)   │       │  Backend        │
│                 │       │  (Port 3000)    │
└─────────────────┘       └─────────────────┘
                                   │
                          ┌─────────────────┐
                          │                 │
                          │   db.json       │
                          │   (File DB)     │
                          │                 │
                          └─────────────────┘
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sayeed Munees**
- GitHub: [@sayeedmunees](https://github.com/sayeedmunees)
- LinkedIn: [Connect with me](https://linkedin.com/in/sayeedmunees)
- Project: [MDME Live Demo](https://mdme.vercel.app/)

## 🙏 Acknowledgments

- Thanks to all contributors who help make MDME better
- Inspired by popular markdown editors and modern development practices
- Built with love for the open-source community
- Special thanks to the React and Node.js communities

## 🌟 Show Your Support

If you find MDME useful, please consider:
- ⭐ Starring both repositories ([Frontend](https://github.com/sayeedmunees/mdme-frontend) & [Backend](https://github.com/sayeedmunees/mdme-backend))
- 🍴 Forking and contributing to the project
- 📢 Sharing with your network and fellow developers
- 💬 Providing feedback and feature suggestions
- 🐛 Reporting bugs to help us improve

## 🔗 Quick Links

- 🌐 **Live Demo**: [mdme.vercel.app](https://mdme.vercel.app/)
- 📂 **Frontend Repo**: [mdme-frontend](https://github.com/sayeedmunees/mdme-frontend)
- 🔧 **Backend Repo**: [mdme-backend](https://github.com/sayeedmunees/mdme-backend)
- 📝 **Try Editor**: [mdme.vercel.app/editor](https://mdme.vercel.app/editor)
- 📚 **Document History**: [mdme.vercel.app/history](https://mdme.vercel.app/history)

---

**Ready to make markdown easy? [Start editing now →](https://mdme.vercel.app)**

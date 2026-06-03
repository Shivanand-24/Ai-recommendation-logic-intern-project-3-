# GitHub Setup Guide

## 📦 Push to GitHub

### Prerequisites
- Git installed on your computer
- GitHub account
- SSH key or GitHub token configured

### Step 1: Initialize Git Repository
```bash
cd "c:\Users\shiva\OneDrive\Documents\Ai recommendation logic"
git init
```

### Step 2: Add All Files
```bash
git add .
```

### Step 3: Create First Commit
```bash
git commit -m "Initial commit: AI Recommendation System Flask application"
```

### Step 4: Create Repository on GitHub
1. Go to [https://github.com/new](https://github.com/new)
2. Repository name: `AI-Recommendation-System`
3. Description: "Intelligent recommendation system using Flask with personalized learning paths"
4. Click "Create repository"

### Step 5: Add Remote and Push
```bash
# Using HTTPS (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/AI-Recommendation-System.git
git branch -M main
git push -u origin main
```

OR (Using SSH)
```bash
git remote add origin git@github.com:YOUR_USERNAME/AI-Recommendation-System.git
git branch -M main
git push -u origin main
```

### Step 6: Verify on GitHub
Visit: `https://github.com/YOUR_USERNAME/AI-Recommendation-System`

---

## 📋 Files for GitHub

### Project Files
- ✅ `app.py` - Flask application
- ✅ `requirements.txt` - Python dependencies
- ✅ `recommendations.json` - Recommendation database
- ✅ `README.md` - Documentation
- ✅ `.gitignore` - Git ignore rules

### Directories
- ✅ `templates/` - HTML templates
- ✅ `static/` - CSS and JavaScript

---

## 🔄 Common Git Commands

### Check Status
```bash
git status
```

### Make Changes
```bash
# Edit files...
git add .
git commit -m "Description of changes"
git push
```

### View History
```bash
git log
```

### Create New Branch
```bash
git checkout -b feature/new-feature
```

---

## 📝 Recommended GitHub Settings

### Branch Protection (Optional)
1. Go to Settings → Branches
2. Add rule for `main` branch
3. Require pull requests before merging

### Topics (Add in Settings)
- flask
- recommendation-engine
- python
- web-application
- machine-learning
- education

### About Section
**Description**: Intelligent recommendation system using Flask that provides personalized learning recommendations based on user preferences, experience level, and learning style.

**Add topics**: flask, python, recommendation-engine, web-app

---

## 🚀 Future GitHub Features

### 1. GitHub Actions (CI/CD)
Create `.github/workflows/test.yml`:
```yaml
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-python@v2
        with:
          python-version: 3.9
      - run: pip install -r requirements.txt
      - run: python -m pytest
```

### 2. GitHub Pages
- Enable in Settings
- Deploy documentation
- Showcase features

### 3. Releases
```bash
git tag -a v1.0.0 -m "Version 1.0.0 - Initial Release"
git push origin v1.0.0
```

### 4. Contributing Guide
Create `CONTRIBUTING.md`:
```markdown
# Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
```

### 5. License
Add `LICENSE` file (MIT License)

---

## 📊 GitHub Statistics

Once pushed, you'll see:
- Code frequency
- Contributors
- Commits
- Forks
- Stars
- Watchers

---

## 🎯 README Badge Ideas

Add to your README:

```markdown
![Flask](https://img.shields.io/badge/Flask-3.0.0-green)
![Python](https://img.shields.io/badge/Python-3.8+-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)
```

---

## 💡 Tips

✅ Keep commits descriptive
✅ Use meaningful branch names
✅ Add .gitignore early
✅ Update README with changes
✅ Tag important releases
✅ Enable branch protection
✅ Use GitHub Issues for bugs
✅ Use GitHub Projects for planning

---

## ❓ Need Help?

- [GitHub Docs](https://docs.github.com)
- [Git Tutorial](https://git-scm.com/book)
- [GitHub Guides](https://guides.github.com)

**Happy coding! 🚀**

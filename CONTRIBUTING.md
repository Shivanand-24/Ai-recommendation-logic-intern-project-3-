# Contributing to AI Recommendation System

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing.

## 🤝 Code of Conduct

- Be respectful and inclusive
- Welcome diverse perspectives
- Report issues responsibly
- Help maintain a positive community

## 🐛 Reporting Bugs

### Before Submitting
- Check existing issues
- Test on latest version
- Provide clear description
- Include steps to reproduce

### Bug Report Template
```
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What should happen?

**Screenshots**
If applicable, add screenshots.

**Environment**
- OS: [e.g. Windows 10]
- Python: [e.g. 3.9]
- Browser: [e.g. Chrome]
```

## 💡 Suggesting Enhancements

### Before Suggesting
- Check existing issues
- Provide clear use case
- Explain benefits

### Enhancement Template
```
**Is your feature request related to a problem?**
Describe the problem.

**Describe the solution you'd like**
Clear description of what you want.

**Describe alternatives you've considered**
Other solutions or features.

**Additional context**
Any other context.
```

## 🔧 Development Setup

### 1. Fork the Repository
Click the "Fork" button on GitHub

### 2. Clone Your Fork
```bash
git clone https://github.com/YOUR_USERNAME/AI-Recommendation-System.git
cd AI-Recommendation-System
```

### 3. Create Virtual Environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 4. Install Dependencies
```bash
pip install -r requirements.txt
pip install pytest black pylint
```

### 5. Create Feature Branch
```bash
git checkout -b feature/your-feature-name
```

## 📝 Making Changes

### Code Style
- Follow PEP 8 for Python
- Use meaningful variable names
- Add docstrings to functions
- Keep functions focused

### Format Code
```bash
black app.py
```

### Lint Code
```bash
pylint app.py
```

### Write Tests
```bash
# Create tests in test_app.py
pytest
```

## 🚀 Submitting Changes

### 1. Commit Your Changes
```bash
git add .
git commit -m "feat: add amazing feature"
```

### Commit Message Format
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Code style
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance

### 2. Push to Your Fork
```bash
git push origin feature/your-feature-name
```

### 3. Create Pull Request
- Go to GitHub
- Click "New Pull Request"
- Select your branch
- Fill in PR template
- Submit

### Pull Request Template
```
**What type of change is this?**
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

**Description**
Clear description of changes.

**Testing**
How was this tested?

**Screenshots** (if applicable)
Include relevant screenshots.

**Checklist**
- [ ] Code follows style guidelines
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated
- [ ] All tests pass
```

## 📚 Documentation

### Update README
- Document new features
- Add examples
- Update screenshots

### Add Comments
- Explain complex logic
- Use clear language
- Keep current

### Update Docstrings
```python
def calculate_score(category, experience, learning_style):
    """
    Calculate recommendation score based on user preferences.
    
    Args:
        category (str): User's category of interest
        experience (str): User's experience level
        learning_style (str): User's preferred learning style
    
    Returns:
        int: Recommendation score (0-100)
    """
```

## 🧪 Testing

### Run Tests
```bash
pytest
pytest -v  # Verbose
pytest --cov  # With coverage
```

### Write Tests
```python
def test_calculate_score_beginner():
    score = calculate_score("Technology", "Beginner", "Video Courses")
    assert 75 <= score <= 100
```

## 📋 Review Process

1. **Automated Checks**
   - GitHub Actions tests
   - Code style checks
   - Security scans

2. **Code Review**
   - Maintainers review code
   - Feedback provided
   - Discussions held

3. **Approval**
   - Minimum 1 approval
   - All tests passing
   - Merge conflicts resolved

4. **Merge**
   - PR merged to main
   - Branch deleted
   - Release notes updated

## 🏆 Recognition

Contributors will be:
- Listed in README
- Added to CONTRIBUTORS.md
- Mentioned in releases
- Credited on GitHub

## 📞 Questions?

- Check existing discussions
- Open an issue
- Ask in PRs
- Start a discussion

## 📜 License

By contributing, you agree that your contributions will be licensed under its MIT License.

---

## 🎯 Areas for Contribution

- **Backend**: Flask improvements, API enhancements
- **Frontend**: UI/UX improvements, new designs
- **Database**: SQL integration, optimization
- **Testing**: Unit tests, integration tests
- **Documentation**: README, guides, tutorials
- **Features**: New recommendation algorithms
- **Performance**: Speed optimizations
- **Accessibility**: WCAG compliance

---

**Thank you for contributing! 🚀**

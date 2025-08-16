# Contributing to Vibely

Thank you for your interest in contributing to Vibely! Vibely is an open-source, self-hosted collaboration platform. We welcome contributions of all kinds—code, documentation, design, testing, and more.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Branching & Workflow](#branching--workflow)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting](#issue-reporting)
- [Style Guides](#style-guides)
- [License](#license)

---

## Code of Conduct
By participating in this project, you agree to abide by our [Code of Conduct](code_of_conduct.md). Please treat everyone with respect and help us maintain a welcoming community.

## How to Contribute
- **Bug Reports:** Use [GitHub Issues](../../issues) to report bugs. Please include steps to reproduce, expected behavior, and screenshots/logs if possible.
- **Feature Requests:** Suggest new features or enhancements via [GitHub Issues](../../issues).
- **Pull Requests:** See below for the process.
- **Documentation:** Improvements to documentation are highly appreciated.
- **Translations:** Help us localize Vibely for more users.
- **Testing:** Report issues or help with test coverage.

## Development Setup
1. **Clone the repository:**
	 ```sh
	 git clone https://github.com/codesteller/vibely.git
	 cd vibely
	 ```
2. **Install dependencies:**
	 - Backend (NestJS):
		 ```sh
		 cd backend
		 npm install
		 ```
	 - AI Service (FastAPI):
		 ```sh
		 cd ai-service
		 pip install -r requirements.txt
		 ```
	 - Frontend (React):
		 ```sh
		 cd frontend
		 npm install
		 ```
	 - Mobile (React Native):
		 ```sh
		 cd mobile
		 npm install
		 ```
3. **Start development servers:**
	 - See the README.md for detailed instructions on running each service.

## Branching & Workflow
- **Default branch:** `master`
- **Feature branches:** Use `feature/<short-description>`
- **Bugfix branches:** Use `bugfix/<short-description>`
- **Release branches:** Use `release/<version>`
- **Pull Requests:** Always create a PR to `master` or the appropriate release branch. Do not push directly to `master`.

## Commit Messages
Follow [Conventional Commits](https://www.conventionalcommits.org/) for clear commit history. Example:
```
feat(auth): add Google SSO integration
fix(api): correct pagination bug in project service
docs: update contribution guidelines
```

## Pull Request Process
1. Fork the repository and create your branch from `master`.
2. Ensure your code builds and passes all tests.
3. Add/Update documentation as needed.
4. Ensure your code follows the style guides.
5. Submit a pull request with a clear description of your changes.
6. Participate in the code review process and address feedback.

## Issue Reporting
- Search existing issues before opening a new one.
- Provide as much detail as possible.
- Label your issue appropriately (bug, feature, documentation, etc.).

## Style Guides
- **Backend (NestJS):** Follow [NestJS best practices](https://docs.nestjs.com/)
- **Frontend (React/React Native):** Use [Airbnb JavaScript/TypeScript Style Guide](https://github.com/airbnb/javascript)
- **Python (AI Service):** Follow [PEP8](https://www.python.org/dev/peps/pep-0008/)
- **Markdown:** Use clear, concise language and proper formatting.

## License
By contributing, you agree that your contributions will be licensed under the [MIT License](../LICENSE).

---

*Thank you for helping make Vibely better!*
<!-- Contribution Guidelines -->

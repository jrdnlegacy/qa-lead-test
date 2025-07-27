# QA Lead Test – Activity Ranking API

## ✅ Overview
This repository contains the QA test suite for the Activity Ranking API feature. It includes:

- Manual test cases for UI and API validation
- Gherkin-based BDD test scenarios
- Automated tests using:
  - Cypress for E2E UI behavior
  - Jest + Supertest for backend API verification

## 🧠 AI Usage
ChatGPT was used for:
- Structuring edge case ideas
- Formatting the initial Gherkin syntax
- Code generation for faster boilerplate setup

I validated, edited, and structured all AI-generated output to match project needs and maintain real-world applicability.

## ⚖️ Trade-offs and Omissions
- UI selectors assume specific classnames; these may need adjustments for a real codebase
- Backend test uses a mocked Express server (`server.js`) as a placeholder
- Autocomplete suggestions were assumed to be dynamic from an API or fuzzy-matched

## 📁 Structure

```
📁 manual-test-script.md
📁 bdd-scenarios.feature
📁 tests/
 ┣ 📜 activity_ranking.spec.js (Cypress)
 ┗ 📜 activityApi.test.js (Jest)
📄 README.md
```

## 🚀 Running Tests

```bash
# Frontend E2E with Cypress
npx cypress open

# Backend API with Jest
npm test
```

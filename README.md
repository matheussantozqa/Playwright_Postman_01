# 💻 Automated Testing Project with Playwright and Postman

This repository contains an automated testing suite for the **Sauce Demo** web application (UI) using **Playwright** and for the **Restful-Booker** API using **Postman/Newman**. The project aims to ensure the quality and functionality of the main flows of both applications, with continuous integration via GitHub Actions and detailed reports with Allure Report.

---

## 🧱 Project Structure

```
.
├── .github/                 # CI/CD Configurations (GitHub Actions)
├── documentacao/            # Project documentation (test plans, test cases, bug reports, improvements)
├── playwright_web/          # Web automation project with Playwright (contains tests and configurations)
├── postman_api/             # API automation project with Postman/Newman (contains collections, environments, and scripts)
├── .gitignore               # Files and directories ignored by Git
└── README.md                # This file
```

---

## 🎯 Key Practices and Standards

### 📌 Test Automation

- **Playwright:** Used for UI test automation on the Sauce Demo application, covering authentication, product management, cart, and checkout flows.
- **Postman/Newman:** Employed for API test automation on Restful-Booker, including CRUD for bookings, authentication, and endpoint validations. Postman collections and environments are available in JSON format in the `postman_api/` folder.

### 📌 Manual Tests

- **Performance and Security:** Basic performance and security tests were manually executed for the Restful-Booker API, focusing on response time and access validation without a token.
- **Responsiveness:** Responsiveness tests for the Sauce Demo UI were performed manually, using browser developer tools.
- **Accessibility:** Due to time constraints, accessibility tests were not performed in this project.

---

## 🚀 Running Tests Locally

### Web Tests (Playwright)

To run Playwright tests, follow the steps below:

```bash
# Navigate to the Playwright directory
cd playwright_web

# Install dependencies
npm install

# Run all tests in headless mode
npx playwright test

# Run individual tests
example: npx playwright test tests/login.spec.ts (file name)

# Run tests in UI mode (with visible browser)
npx playwright test --ui

# Generate and open the Allure report
npx playwright test --reporter=line,allure-playwright
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

### API Tests (Postman/Newman)

To run API tests, you have two options:

#### 1. Via Postman App (Recommended for manual execution and development)

1.  **Import collections and environments:** In the `postman_api/` folder, you will find the `restful-booker.postman_collection.json` and `restful-booker.postman_environment.json` files. Import them into your Postman application.
2.  **Run tests:** Select the `Restful-Booker` collection in Postman, choose the `Restful-Booker` environment, and run the tests directly from the Postman interface. You can use the Collection Runner for a more organized execution.

#### 2. Via Newman (Command Line and CI/CD)

For command-line execution (useful for CI/CD integration), follow these steps:

```bash
# Navigate to the Postman directory
cd postman_api

# Install dependencies (Newman and Allure Reporter)
npm install

# Run the Postman collection and generate the Allure report
npx newman run restful-booker.postman_collection.json -e restful-booker.postman_environment.json -r cli,htmlextra,allure --reporter-allure-export allure-results

# Open the Allure report
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

---

## 🌐 Continuous Integration (CI/CD) with GitHub Actions and Allure Report

This project uses **GitHub Actions** to automate the execution of UI and API tests. With each `push` to the `main` branch, CI/CD workflows are triggered, running Playwright and Postman tests.

The test results are processed by **Allure Report**, which generates a detailed HTML report. This report is then automatically published via **GitHub Pages**, allowing for easy and centralized viewing of the results of both test suites (UI and API) in a single HTML.

You can access the latest Allure report via the link:
[https://matheussantozqa.github.io/Be_Talent_TestTec_Web-API/](https://matheussantozqa.github.io/Be_Talent_TestTec_Web-API/)

---

## 🔧 Tools Used

- **Playwright:** Framework for End-to-End (E2E) test automation for web applications.
- **Postman:** Tool for API testing and development.
- **Newman:** Command-line runner for Postman collections.
- **Allure Report:** Framework for generating interactive and detailed test reports.
- **GitHub Actions:** CI/CD platform for workflow automation.
- **GitHub Pages:** Hosting service for static websites, used to publish Allure reports.

---

## 📌 Notes

- Complete documentation, including detailed test cases and bug reports with evidence, can be found in the `documentacao/` folder.
- Selectors and page elements for Playwright tests are organized to facilitate maintenance.
- Postman collections and environments are in JSON format in the `postman_api/` folder for easy access and import.

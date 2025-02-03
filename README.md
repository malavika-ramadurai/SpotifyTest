# Spotify Automation E2E Testing Suite

### Overview

This project is an **End-to-End (E2E) testing suite** for automating key workflows in Spotify, such as creating playlists, adding songs, deleting songs, and playing songs. It is built using [Microsoft Playwright](https://playwright.dev/) for modern, fast, and reliable browser automation.

### Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Project Structure](#project-structure)
5. [Running Tests](#running-tests)
6. [Scripts](#scripts)
7. [License](#license)

---

### Features

This project automates the following Spotify workflows:

- **Login and Playlist Management:**
    - Create playlists.
    - Add songs to a playlist.
    - Play a random song from a playlist.
- **Playlist Modifications:**
    - Delete a song from a playlist.
- **Reusable Setup and Teardown:**
    - Leverages Playwright hooks (`beforeAll`, `afterAll`) for efficient test setup and cleanup.

---

### Prerequisites

Before running the tests, ensure you have the following installed:

- **Node.js** (LTS version or higher)  
  Download from: [Node.js Official Website](https://nodejs.org/)

- **Playwright CLI**  
  Install Playwright via npm command (instructions included below).

- **Spotify Account** with necessary permissions (to test playlist operations).

---

### Installation

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/your-username/spotify-automation.git

# Navigate to the project directory
cd spotify-automation

# Install dependencies
npm install
```

Setup Playwright:

```bash
# Install Playwright browsers
npx playwright install
```

---

### Project Structure

The project has the following structure:

```plaintext
spotify-automation/
│
├── fixtures/                # Custom fixtures for Playwright (shared setup logic)
│   └── fixtures.js          # Defines test-specific fixtures (e.g., loginPage, dashboardPage, etc.)
├── tests/                   # Test files for each workflow
│   ├── TC1_LoginCreatePlayListAndPlayASong.spec.js
│   ├── TC2_LoginAndDeleteSong.spec.js
│
├── config/                  # Configuration files for test settings
│   └── config.js            # Base URL, environment-specific config
├── package.json             # Node.js project metadata and scripts
├── README.md                # Project documentation
├── playwright.config.js     # Playwright configuration (timeouts, parallelism, etc.)
└── ...
```

---

### Running Tests

#### Run All Tests

You can run the entire suite of tests using the following command:

```bash
npx playwright test
```

#### Run Tests in Parallel

By default, tests in this project are configured to run in parallel. You can override the behavior by using Playwright's CLI options.

```bash
# Run all tests in parallel
npx playwright test --parallel
```

#### Run Individual Test File

To run a specific test file:

```bash
npx playwright test tests/TC1_LoginCreatePlayListAndPlayASong.spec.js
```

#### Debug Tests

To debug tests with UI rendering:

```bash
npx playwright test --headed
```

---

### Scripts

The following scripts are defined in `package.json`:

- **Run All Tests:**

  ```bash
  npm test
  ```

- **Run Tests in Debug Mode:**

  ```bash
  npm run test:debug
  ```

- **Format Code:**

  This project also uses `Prettier` for formatting the code.

  ```bash
  npm run format
  ```

---

### Playwright Hooks Used

#### `test.beforeAll` and `test.afterAll`
- **`test.beforeAll:`**  
  Handles application launch and login, ensuring these steps occur only once before the test suite runs.

- **`test.afterAll:`**  
  Ensures cleanup and logout after all test cases in the suite have been executed.

#### `test.step`
- Provides detailed logging by breaking each test into smaller sub-steps.

---

### Adding New Tests

To add a new test:

1. Create a new `.spec.js` file inside the `tests` folder.
2. Use the following structure:
   ```javascript
   import test from '../fixtures/fixtures';
   import { baseurl, loginTitle } from '../config';

   test.describe('Test Description', () => {
       test.beforeAll(async ({ loginPage }) => {
           // Setup steps (e.g., login)
       });

       test('Test Case Title', async ({ somePage }) => {
           // Test steps
       });

       test.afterAll(async () => {
           // Cleanup steps (e.g., logout)
       });
   });
   ```
3. Run and debug the new test using `npx playwright test <filename>`.

---

### License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to modify and use the code for your own purposes.
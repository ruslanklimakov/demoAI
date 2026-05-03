--Install

npm install
npx playwright install

--Run all tests

npm test

--Run one test file

npx playwright test tests/textBox.spec.ts
npx playwright test tests/textBoxNegative.spec.ts
npx playwright test tests/checkBox.spec.ts

--Run in headed mode

npm run test:headed

--Run in one browser

npx playwright test --project=chromium

--Parallel run

npx playwright test --workers=3

--Reporting

npm run test:report

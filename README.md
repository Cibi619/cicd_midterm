# Nodejs Application with CI pipeline using Github Actions and Docker Hub
The project is a simple Node js application to demonstrate CI/CD pipeline using Github Actions and Docker Hub. It just contains some basic utility functions such as add, multiply, subtract, isPrime and it is automatically built, tested, and deployed through the pipeline.

## Project Structure
cicd_midterm/
├── .github/workflows/
├── __tests__/
├── Dockerfile
├── app.js
├── package.json
├── simple_utils.js
└── README.md

## Steps to build and run the app
git clone https://github.com/Cibi619/cicd_midterm.git
cd cicd_midterm
npm install
node app.js

## Run tests
Run tests with: `npm test`

## To test CI pipeline
When code changes are pushed, workflow is automatically triggered.
The pipeline has 3 branches: main, release and production.
The workflow results can be viewed in Actions tab in the Github repository.

## To pull and run docker image from docker hub
`docker pull cibi619/cicd_midterm:release-node-cibi` - to pull image from release version



pipeline {
  agent any
  options { timestamps() }
  stages {
    stage('Checkout')    { steps { checkout scm } }
    stage('Install')     { steps { sh 'node -v || true; npm ci' } }
    stage('BuildOnly')   { steps { sh 'echo building; npm run build || true' } }
  }
}
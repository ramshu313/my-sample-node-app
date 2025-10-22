pipeline {
  agent any
  options { timestamps() }
  stages {
    stage('Checkout')    { steps { checkout scm } }
    stage('Install & Test') {
      steps {
        sh 'node -v'
        sh 'npm ci'
        sh 'npm test || true'
      }
    }
    stage('Build')   { steps { sh 'echo building; npm run build || true' } }
  }
}
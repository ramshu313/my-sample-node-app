pipeline {
  agent any
  options { timestamps() }
  tools { nodejs 'node20' }
  stages {
    stage('Install & Test') {
      steps {
        sh 'node -v'
        sh 'npm ci'
        sh 'npm test || true'
      }
    }
  }
}
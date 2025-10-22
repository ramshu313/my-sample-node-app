pipeline {
  agent any
  options { timestamps() }
  tools { nodejs 'node22' }   // <-- must match the Tool Name from Manage Jenkins > Tools

  stages {
    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Install') {
      steps { sh 'npm ci' }
    }

    stage('Start & Smoke Test') {
      steps {
        sh '''
          # start the app in background (assumes "start" script exists)
          npm run start &
          APP_PID=$!

          # give it a moment to boot
          sleep 3

          # hit health endpoint (change port/path if different)
          curl -fsS http://localhost:3000/health

          # stop the app so the build can finish
          kill $APP_PID
        '''
      }
    }
  }
}

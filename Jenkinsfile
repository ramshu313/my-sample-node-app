// // Jenkinsfile — Node.js sample (no Docker required)
// pipeline {
//   agent any
//   options { timestamps(); ansiColor('xterm') }
//   environment { CI = 'true' }

//   stages {
//     stage('Checkout') {
//       steps { checkout scm }
//     }

//     stage('Setup Node') {
//       steps {
//         // If you installed the "NodeJS" plugin & configured a tool named "node20":
//         // tools { nodejs 'node20' }
//         // Otherwise, just use system Node or run inside a container (see alternative below).
//         sh 'node -v || true'
//       }
//     }

//     stage('Install') { steps { sh 'npm ci' } }

//     // stage('Test') {
//     //   steps { sh 'npm test' } // replace with your real tests
//     //   post {
//     //     always {
//     //       // publish junit if you have: junit 'reports/junit/*.xml'
//     //     }
//     //   }
//     // }

//     // stage('Build (optional)') {
//     //   when { anyOf { fileExists('build'); fileExists('vite.config.ts'); fileExists('webpack.config.js') } }
//     //   steps { sh 'npm run build' }
//     // }
//   }

//   post {
//     success { echo '✅ Build passed!' }
//     failure { echo '❌ Build failed!' }
//     always  { archiveArtifacts allowEmptyArchive: true, artifacts: 'build/**' }
//   }
// }
pipeline {
  agent any
  options { timestamps() }   // no ansiColor here
  stages {
    stage('Install')  { steps { sh 'npm ci' } }

    post {
    success { echo '✅ Build passed!' }
    failure { echo '❌ Build failed!' }
    always  { archiveArtifacts allowEmptyArchive: true, artifacts: 'build/**' }
  }
  }
}
pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/abhishekbhonde/githubrscoeacm.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Deploy') {
            steps {
                sh 'docker build -t github:latest .'
                sh 'docker run -d -p 5000:5000 github:latest'
            }
        }
    }
}

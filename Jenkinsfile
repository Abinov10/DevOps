pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/Abinov10/DevOps.git'
            }
        }
        stage('Build') {
            steps {
                echo 'Building DevOps App...'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying DevOps App...'
            }
        }
    }
}

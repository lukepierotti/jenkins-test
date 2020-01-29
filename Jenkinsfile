pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'rm -r node_modules'
                sh 'npm i --production'
                sh 'npm run build'
                echo 'finished install node modules..'
                sh 'zip -r node_modules.zip /node_modules'
                sh 'cp -avr node_modules.zip /dist'
                echo 'node modules zipped and copied'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh 'cp -avr dist ../test-deploy'
                sh 'cd ../test-deploy/dist'
                sh 'unzip node_modules.zip'
                sh 'cd server'
                sh 'node server.js'
            }
        }
    }
}
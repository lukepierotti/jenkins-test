pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'npm i'
                sh 'npm run build'
                sh 'rm -r node_modules'
                sh 'npm i --production'
                echo 'finished install node modules..'
                sh 'zip -r node_modules.zip node_modules'
                sh 'sudo cp -av node_modules.zip /dist'
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
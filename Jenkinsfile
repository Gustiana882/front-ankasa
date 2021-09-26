def builderImage
def imageName = "gustiana/front-ankasa:latest"

pipeline {
    agent any

    // parameters {
    //     booleanParam(name: "RUNTEST", defaultValue: "true", description: "Running testing")
    // }

    stages {
        stage('Installing package') {
            steps {
                nodejs("node14"){
                    sh 'yarn install'
                }
            }
        }

        stage('Running Test') {

            // when {
            //     expression {
            //         params.RUNTEST
            //     }
            // }

            steps {
                sh "echo 'pass'"
            }
        }

        stage('Build Image') {
            steps {
                script{
                    builderImage = docker.build("${imageName}")
                }
            }
        }

        stage('Test Image') {
            steps {
                script{
                    builderImage.inside {
                        sh "echo 'pass'"
                    }
                }
            }
        }

        stage('Push Image') {
            steps {
                script{
                    builderImage.push()
                }
                sh "docker image prune -f"
            }
        }

        // stage('Deployment') {
        //     steps {
        //         script {
        //             sshPublisher(
        //                 publishers: [
        //                     sshPublisherDesc(
        //                         configName: 'prod',
        //                         verbose: false,
        //                         transfers: [
        //                             sshTransfer(
        //                                 execCommand: "cd /home/ubuntu/prod/front; docker-compose up -d",
        //                                 execTimeout: 120000,
        //                             )
        //                         ]
        //                     )
        //                 ]
        //             )
        //         }
        //     }
        // }

        // stage('Deployment') {
        //     steps {
        //         sh "docker-compose up -d"
        //     }
        // }

    }
}
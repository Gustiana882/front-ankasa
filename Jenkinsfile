def builderImage
def imageName = "wsaefulloh/frontend_ankasa:devs"

pipeline {
    agent any

    // parameters {
    //     booleanParam(name: "CLEAN", defaultValue: "true", description: "Clean")
    // }

    stages {
        // stage('Installing package') {
        //     steps {
        //         nodejs("node14"){
        //             sh 'yarn install'
        //         }
        //     }
        // }

        // stage('Running Test') {

        //     // when {
        //     //     expression {
        //     //         params.RUNTEST
        //     //     }
        //     // }

        //     steps {
        //         sh "echo 'pass'"
        //     }
        // }

        // // stage('Clean Image') {
        // //     steps {
        // //         sh "docker rm \$(docker ps -aq) -f"
        // //         sh "docker rmi \$(docker images -aq)"
        // //     }
        // // }

        // stage('Build Image') {
        //     steps {
        //         script{
        //             builderImage = docker.build("${imageName}")
        //         }
        //     }
        // }

        // stage('Test Image') {
        //     steps {
        //         script{
        //             builderImage.inside {
        //                 sh "echo 'pass'"
        //             }
        //         }
        //     }
        // }

        // stage('Push Image') {
        //     steps {
        //         script{
        //             builderImage.push()
        //         }
        //         sh "docker image prune -f"
        //     }
        // }

        stage('Deployment') {
            steps {
                script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'devops',
                                verbose: false,
                                transfers: [
                                    sshTransfer(
                                        sourceFiles: "run.sh ; deploy.yaml",
                                        execCommand: "cd /home/devops/frontend; sudo kubectl apply -f deploy.yaml",
                                        execTimeout: 120000,
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }
    }
}

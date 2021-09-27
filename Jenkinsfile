def builderImage
def imageName = "wsaefulloh/frontend_ankasa:devs"

pipeline {
    agent any
    environment{}

    // parameters {
    //     booleanParam(name: "RUNTEST", defaultValue: "true", description: "Running testing")
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

         stage('Running Test') {
            when {
                expression { BRANCH_NAME ==~ /(production|staging)/ }
                anyOf {
                    environment name: 'DEPLOY_TO', value: 'production'
                    environment name: 'DEPLOY_TO', value: 'development'
                }
                steps {
                sh "echo 'pass'"
            }
            

           
        }


         

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
                                        execCommand: "cd /home/devops/frontend; touch test1; bash run.sh",
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
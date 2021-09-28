#!bin/bash

# kops create secret --name $NAME sshpublickey admin -i ~/.ssh/id_rsa.pub
# kops update cluster --name $NAME --yes --admin
# cd /home/devops/frontend
# sudo kubectl apply -f deploy.yaml
# expect 'abcd1234'
sudo kubectl apply -f /home/devops/frontend/deploy.yaml
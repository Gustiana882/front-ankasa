#!bin/bash

cd /home/devops/frontend
sudo kubectl apply -f deploy.yaml
expect 'abcd1234'
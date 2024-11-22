# react-demo


npm install react-countup


```shell
docker buildx build --platform linux/amd64 -t dscacr.azurecr.io/dt-front:v0.1.1 .
docker push dscacr.azurecr.io/dt-front:v0.1.1

kubectl apply -f dev.yaml
```
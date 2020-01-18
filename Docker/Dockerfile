FROM node:latest

ENV github=https://github.com/MedoffSergey/ rep=Svechi-Store domain=svechi.store

RUN mkdir -p /var/www/html ;\
    cd /var/www/html ;\
    apt-get update ;\
    git clone $github$rep ;\
    cd $rep ;\
    npm i -g @vue/cli-service ;\
    npm i ;\
    npm i -g serve ;\
    npm i -g json-server ;\
    sed -i 's/localhost:3000/'$domain'/g' src/vuex/actions/api-requests.js ;\
    sed -i 's/http/'https'/g' src/vuex/actions/api-requests.js ;\
    cp src/db.json /var/www/html ;\
    npm run build ;\
    cd ../ ;\
    mv $rep/dist/* ./ ;\
    rm -rf $rep ;\
    ls -la ;\
    echo "json-server --host 0.0.0.0 --watch db.json &" >> /entrypoint.sh ;\
    echo "serve" >> /entrypoint.sh; chmod +x /entrypoint.sh

WORKDIR /var/www/html
ENTRYPOINT /entrypoint.sh

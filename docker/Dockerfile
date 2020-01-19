FROM node:latest

ENV github=https://github.com/MedoffSergey/ rep=Svechi-Store domain=svechi.store

RUN mkdir -p /var/www/html ;\
    cd /var/www/html ;\
    apt-get update ;\
    apt-get install -y nginx ;\
    git clone $github$rep ;\
    cd $rep ;\
    npm i -g @vue/cli-service ;\
    npm i ;\
    npm i -g json-server ;\
    sed -i 's/localhost:3000/'$domain'/g' src/vuex/actions/api-requests.js ;\
    sed -i 's/http/'https'/g' src/vuex/actions/api-requests.js ;\
    sed -i 's/localhost/'$domain'/g' docker/default.conf ;\
    mv docker/default.conf /etc/nginx/conf.d/ ;\
    mv docker/nginx.conf /etc/nginx/nginx.conf ;\
    cp src/db.json /var/www/html ;\
    npm run build ;\
    cd ../ ;\
    mv $rep/dist/* ./ ;\
    rm -rf $rep ;\
    pwd ;\
    ls -la ;\
    echo "json-server --host 0.0.0.0 --watch db.json &" >> /entrypoint.sh ;\
    echo "nginx -g 'daemon off;'" >> /entrypoint.sh; chmod +x /entrypoint.sh

WORKDIR /var/www/html
ENTRYPOINT /entrypoint.sh

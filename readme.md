Personal Site
[https://www.jefflowy.com](https://www.jefflowy.com)

### Environment Settings
PORT=XXXX
NODE_ENV=PRODUCTION

### SSL Cert
Add cron and nginx info from [here](https://code.lengstorf.com/deploy-nodejs-ssl-digitalocean/)
- service nginx restart
- pm2 show index
- pm2 start index.js
- curl http://localhost:3000
- sudo crontab -e
- ./certbot-auto certonly --standalone
- dig +short jeffreylowy.com



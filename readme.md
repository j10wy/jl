# [www.jefflowy.com](https://www.jefflowy.com)

### Environment Settings
```
PORT=XXXX
NODE_ENV=PRODUCTION
```

### Updating the site

```bash
# From local terminal
ssh username@xxx.xxx.xxx.xxx

# Once logged into server
# Pull latest changes from Github
git fetch && git pull origin master

# Restart the Node server
pm2 restart index.js
```

### [SSL Cert](https://code.lengstorf.com/deploy-nodejs-ssl-digitalocean/)

#### Auto certificate renewal

```bash
# View the crontab (CRON TABle) file to view the scheduled cron entries.
sudo crontab -e

# You should see lines similar to the following:
00 1 * * 1 ../letsencrypt/certbot-auto renew >> /var/log/letsencrypt-renewal.log
30 1 * * 1 ../systemctl reload nginx

# Test if the server is running locally, where XXXX is the port the Node server is running on.
curl http://localhost:XXXX

# Use dig (domain information groper) to query DNS information.
dig +short jefflowy.com
```

#### Manual certificate renewal

``` bash
# From the app directory, stop the Node server
pm2 stop index.js

# Temporarily stop and restart nginx
service nginx stop

# First, CD into the letsencrypt directory (ex: cd ../letsencrypt)
# Then run the following command:
./certbot-auto certonly --standalone

# Navigate back to the app folder. Restart nginx and the Node app
service nginx restart
pm2 {restart|start} index.js

# View the status of pm2
pm2 show index
```

_As of certbot v0.21, you can change the authentication method to something other than --standalone (for example --nginx)._
# Personal Site

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

### SSL Cert
Add cron and nginx info from [here](https://code.lengstorf.com/deploy-nodejs-ssl-digitalocean/)
- service nginx restart
- pm2 show index
- pm2 start index.js
- curl http://localhost:3000
- sudo crontab -e
- ./certbot-auto certonly --standalone
- dig +short jeffreylowy.com

### SSL Renewal

#### Manual certificate renewal

There are basically two solutions available:

1. You can temporarily stop and restart nginx when doing certificate renewals. There is a way to get Certbot to remember to do this for you with hooks, so that certbot renew will still work and will temporarily stop nginx for the duration of the renewal authentication. In this case, you can keep using --standalone because port 80 will become free temporarily during the renewal.

2. You can change the authentication method to something other than --standalone (for example --nginx as of 0.21 should be fine, or --webroot if your configuration serves static files rather than proxying requests to a web app… which it looks like would be a problem for you in this configuration unless you configured an exception to the proxy_pass for the /.well-known/acme-challenge URL path).



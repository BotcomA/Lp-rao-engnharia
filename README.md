// fluxo para atualizar o site na vps: 
cd ~/Lp-rao-engnharia
git pull
npm install
npm run build
rsync -av --delete ~/Lp-rao-engnharia/dist/ /var/www/raoengenharia/
systemctl reload nginx

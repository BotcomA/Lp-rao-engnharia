// fluxo para atualizar o site na vps: 

cd ~/Lp-rao-engnharia

git pull

npm install

npm run build

rm -rf /var/www/raoengenharia/*

cp -r ~/Lp-rao-engnharia/dist/* /var/www/raoengenharia/

systemctl reload nginx

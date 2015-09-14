cd /var/www/rede-cultura-viva
git pull origin master
npm install
NODE_PATH=./node_modules/:./src/js/ ./node_modules/gulp/bin/gulp.js build

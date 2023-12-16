This is a starter template for [Learn Next.js](https://nextjs.org/learn).






1. meta tags
2. ratings & code on store page or offers
3. http://localhost:3000/categories/food-nutrition - done
4. redesign page cat parent - http://localhost:3000/categories
5. flipkart
6. cat prod page link to be work
7. product/cat-prod1



tset commit

//todo searchbox debounce

scp -r ofccode/main couponswebsite:/home/ubuntu/couponswebsite/
rsync -av --exclude=node_modules --exclude=.next --exclude=build ofccode/ couponswebsite:/home/ubuntu/couponswebsite/


https://vmleon.medium.com/how-to-run-nginx-on-ubuntu-in-the-cloud-for-free-1b34d7269418


scp -r ofccode/ couponswebsite:/home/ubuntu/couponswebsite/
ignore node_modules, .next, build folders


On server
npm run build

kill port
sudo lsof -i :3000
kill -9 process_id

nohup npm start &



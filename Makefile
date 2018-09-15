install: 
		npm install

start: 
		npm run start

dev:
		rm -rf dist
		npm run dev

build:
		rm -rf dist
		npm run build

lint: 
		npm run eslint .

watch: 
		npm run watch

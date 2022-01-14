all:
	npm install
	npx webpack --mode=production --config webpack.config.js

run:
	python3 -m http.server

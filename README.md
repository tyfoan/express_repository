-- Flow running project

1. Build the docker images from Dockerfile
	
	$ docker build -t megan .

2. If you use windows you should share drive
	
	docker settings > shard drives

3. Run the image

	$ docker run -p 3000:3001 -d -v path/to/your/host/project/:/app <your username>/node-web-app

Check result localhost:3000
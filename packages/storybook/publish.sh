docker stop storybook
docker rm storybook
docker build -t storybook .
docker run -d -p 6006:80 --name storybook storybook
		

	

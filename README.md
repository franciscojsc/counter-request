# Counter Request

At each request, increase the number value to +1 and show the server name.

## Main Technologies Used

![Node](https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png "Node.js")
![Express](https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png "Express")

## Use the Docker

![Docker](https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png "Docker")

To run this project in a Docker container, use the command below:
```bash
docker run -d -p 8080:8080 franciscojsc/counter-request
```

### Use Dockerfile file of this [project](https://github.com/franciscojsc/counter-request)

Clone the repository:
```git
git clone https://github.com/franciscojsc/counter-request.git
```

Enter the folder:
```bash
cd counter-request
```

Build the image:
```bash
docker build -t counter-request .
```

Run the container:
```bash
docker run -d -p 8080:8080 counter-request
```


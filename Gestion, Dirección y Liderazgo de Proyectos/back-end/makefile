back:
	docker build -t back .

run:
    docker run -d -p 8080:8080 --network=host back

clean:
	docker stop $(docker ps -q --filter ancestor=back )

push:
	sh script.sh

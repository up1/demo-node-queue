# Demo to use work queue with 
* bull library  
* redis
* Nodejs library 

## Run
```
$docker compose up -d --build
$docker compose ps        
NAME                 IMAGE            COMMAND                  SERVICE   CREATED         STATUS                            PORTS
demo-queue-app-1     demo-queue-app   "docker-entrypoint.s…"   app       7 seconds ago   Up 6 seconds (health: starting)   0.0.0.0:3000->3000/tcp
demo-queue-redis-1   redis:alpine     "docker-entrypoint.s…"   redis     5 minutes ago   Up 5 minutes (healthy)            6379/tcp

$docker compose logs --follow
```

Send task to queue
* http://localhost:3000/sendOrderToSocket
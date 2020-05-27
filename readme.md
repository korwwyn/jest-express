
docker run -d -p 5433:5433 --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword postgres

Необходимо запускать docker с настройками локальной сети, чтобы все получилось.

https://www.rithmschool.com/courses/intermediate-node-express/api-tests-with-jest
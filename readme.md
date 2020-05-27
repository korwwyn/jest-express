https://www.rithmschool.com/courses/intermediate-node-express/api-tests-with-jest

### Prepare database
```
docker run -d -p 5433:5433 --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword postgres
docker exec -it my-postgres bash
psql -U postgres
CREATE DATABASE students;
CREATE DATABASE students_test;
\q
psql -h 172.17.0.3 -p 5432 -U postgres -W
```

### Run server app and tests
```
npm run test
```

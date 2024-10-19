# Guides

## Run without building
```bash
./mvnw spring-boot:run
```

## Build and run
```bash
./mvnw clean package
java -jar target/filim_server-0.0.1.jar
```

## Update dependency only
```bash
./mvnw dependency:resolve
```

## Clean and rebuid the project
```bash
./mvnw clean install
```
FROM golang:1.19.1-alpine as builder

RUN apk add --no-cache make

WORKDIR /app

COPY . .

RUN go build -o ./bin/main .

# ---

FROM scratch

COPY --from=builder /app/bin/main /usr/bin/main

ENTRYPOINT ["main"]

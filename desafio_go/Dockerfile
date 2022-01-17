FROM golang:latest as builder

COPY ./hello.go /go/hello.go 

RUN go build hello.go

CMD [ "/go/hello" ]

FROM scratch

COPY --from=builder /go/hello /go/bin/hello

CMD ["/go/bin/hello"]
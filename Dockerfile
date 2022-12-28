FROM golang:1.19
WORKDIR /src

RUN apt-get update && apt-get install -y unzip gcc-multilib

# Install nanopb
ARG NANOPB_VERSION=0.4.6
RUN wget https://jpa.kapsi.fi/nanopb/download/nanopb-${NANOPB_VERSION}-linux-x86.tar.gz && \
    tar -xvf nanopb-${NANOPB_VERSION}-linux-x86.tar.gz -C /opt

# Install protoc generator for Go.
ARG PROTOC_GEN_GO_VERSION=1.28.1
RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@v${PROTOC_GEN_GO_VERSION}

# Install protoc
ARG PROTOC_VERSION=21.9
RUN PROTOC_ZIP=protoc-${PROTOC_VERSION}-linux-x86_64.zip && \
    curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v${PROTOC_VERSION}/$PROTOC_ZIP && \
    unzip -o $PROTOC_ZIP -d /usr/local bin/protoc && \
    unzip -o $PROTOC_ZIP -d /usr/local 'include/*'  && \
    rm -f $PROTOC_ZIP

# Copy src code.
COPY . .

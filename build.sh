NANOPB_VERSION=0.4.6
NANOPB_ROOT_DIR=/opt/nanopb-$NANOPB_VERSION-linux-x86

PROTO_PATH=./proto
C_OUT_DIR=../c
GO_OUT_DIR=../go
PYTHON_OUT_DIR=../python
GO_MODULE=github.com/gkstretton/asol-protos/go

cd $PROTO_PATH

mkdir -p $C_OUT_DIR
mkdir -p $GO_OUT_DIR
mkdir -p $PYTHON_OUT_DIR

###### C  ######

# Copy nanopb library files 
mkdir -p $C_OUT_DIR/nanopb
cp $NANOPB_ROOT_DIR/pb* $C_OUT_DIR/nanopb

# Build protos for nanopb
mkdir -p $C_OUT_DIR/machinepb
$NANOPB_ROOT_DIR/generator-bin/protoc \
	--nanopb_out $C_OUT_DIR/machinepb \
	machine.proto

###### GO ######

# Build protos for go
mkdir -p $GO_OUT_DIR/machinepb
protoc --go_out $GO_OUT_DIR/machinepb --go_opt=module=$GO_MODULE/machinepb ./machine.proto

cd $GO_OUT_DIR
go mod init $GO_MODULE
go mod tidy

cd ..
cd $PROTO_PATH

###### PYTHON ######
mkdir -p $PYTHON_OUT_DIR/machinepb
protoc --python_out $PYTHON_OUT_DIR/machinepb ./machine.proto
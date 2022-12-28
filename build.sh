NANOPB_VERSION=0.4.6

cd proto

/opt/nanopb-$NANOPB_VERSION-linux-x86/generator-bin/protoc \
	--nanopb_out ../c/ \
	machine.proto

sleep infinity
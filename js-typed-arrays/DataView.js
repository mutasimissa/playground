// lets create a buffer that has "room" of 8 bytes
const buffer = new ArrayBuffer(8);

// let's create a DataView of that buffer
const data = new DataView(buffer)

// let's add to the dataview int32 which mean it will occupy the first 4 bytes
// btw, obviously; in16 is made of 2 bytes and int8 is made of a single byte

data.setInt32(0, 123456789, true);

// now offsets 0,1,2,3 are representing 123456789 in  4 bytes 
// we have "room" for another int32 because our buffer is 8 byteLength
// we have to start the offset from 4

data.setInt32(4, 987654321, true);

// what will happen if we try to set another int32 on position 8 ?
// it will throw an error saying that Offset is outside the bounds of the DataView

// now we have two int32 in our DataView
//loop, we will start from 0
// in your code maybe you have to ask whoever you integrate the ble service from about the offset of the start
// because sometimes the first bytes are reserved for some ACK or similar signals
//in our case we will start from offset 0 and will set our iterator to i += 4
//because we know that each 4 bytes are occupied by int32 

for (let i = 0; i < data.byteLength; i += 4) {
    console.log(data.getInt32(i, true))
}
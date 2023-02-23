// 创建一个大小为10的空buffer
// 这个buffer只能承载10个字节的内容
const buf1 = Buffer.alloc(10)
// the toJSON() 方法可以将数据进行Unicode编码并展示
console.info(buf1.toJSON()) // { type: 'Buffer', data: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] }

// 根据内容直接创建buffer
const buf2 = Buffer.from('hello world')
console.info(buf2.toJSON()) // { type: 'Buffer',data: [ 104, 101, 108, 108, 111, 32, 98, 117, 102, 102, 101, 114 ] }

// 根据十六进制字符串直接创建buffer
const buf3 = Buffer.from('e7bc91', 'hex')
{/* <Buffer e7 bc 91> */}
console.log(buf3.toString()) // 缑


// 检查buffer的大小

console.info(buf1.length) // 10

console.info(buf2.length) //12 根据数据自动盛满并创建

//写入数据到buffer
buf1.write("Buffer really rocks!")

//解码buffer

console.info(buf1.toString()) // 'Buffer rea'
console.info(buf2.toString()) // 'Buffer rea'

//因为buf1只能承载10个字节的内容，所有多处的东西会被截断





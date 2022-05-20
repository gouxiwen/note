// 一些ts内置类型的实现源码
type myPartial<T> = {
    [k in keyof T]?: T[k]
}

type myRequire<T> = {
    [k in keyof T] -?: T[k]
}

type myReadonly<T> = {
    readonly [k in keyof T]: T[k]
}


type myRecord<K extends keyof any, T> = {
    [p in K]: T
}

type myExclude<T, U> = T extends U ? never : T // 从T类型中剔除U类型
type myExtract<T, U> = T extends U ? T : never // 从T类型中提取U类型，也就是T和U的交集
// exclude和extract是一对功能相反的类型函数，一个取差集，一个取交集，一般T形如：'a'| 'b' | 'c'，U形如 'b' | 'c'

type myPick<T, K extends keyof T> = { // 从T中选出key为K类型的的子集
    [p in K]: T[p]
}
type myQmit<T, K extends keyof any> = myPick<T, myExclude<keyof T, K>> // 从T类型中剔除key为K的类型
// qmit和pick是一对功能相反的类型函数，一般T形如：{a: string; b: number}，K形如 'a' | 'b'

type myNonNullable<T> = T extends null | undefined ? never : T // 从T 中剔除null ，underfined 类型

type myParameters<T extends (...arg: any) => any> = T extends (...arg: infer P) => any ? P : never

type myReturnType<T extends (...arg: any) => any> = T extends (...arg: any) => infer P ? P : never

type myConstructorParamters<T extends new (...arg: any) => any> = T extends new (...arg: infer P) => any ? P : never

type myInstanceType<T extends new (...arg: any) => any> = T extends new (...arg: any) => infer P ? P : never

type Person = {
    name: string
    password: string
    id?: string
}

const p1: myRequire<myPartial<Person>> = {
    name: 'hill',
    password: '123',
    id: 'dadfl'
}

const p2: myReadonly<Person> = {
    name: 'hill',
    password: '123',
    id: 'dadfl'
}

p1.name = 'hill1'

type IType = {
    left:string
    right: string
    top: string
    bottom: string
}

interface Iinter {
    left:string
    right: string
    top: string
    bottom: string
}

interface iType extends IType {
    center: string
}

type resType = myPick<IType, 'left'|'right'>

const res: resType = {
    left: '20',
    right: '30',
}

type methodType = myRecord<'get'|'post', {url: string, type: string}>

const method: methodType = {
    get: {
        url: 'xxx',
        type: 'xxx'
    },
    post: {
        url: 'xxx',
        type: 'xxx'
    }
}

type excludeType = myExclude<"a"|"b"|"c", 'c'>
type extractType = myExtract<"a"|"b"|"c", 'c'>
type qmitType = myQmit<{a: string, b: string, c: string}, 'c'>
type nonenull = myNonNullable<string | number | null | undefined>


type fnType = (name: string, age: number) => string | number
type getParameters = myParameters<fnType> // 获取函数的参数类型

function fn(name:string): string|number{
    return name
}
type getReturnType = myReturnType<typeof fn> // 获取函数的返回值类型

class Y {
    constructor(name: string, age: number) {}
}
type getConstructorParamters = myConstructorParamters<typeof Y> // 获取构造函数的参数类型

class X {
    ID:number|undefined
    GET(){}
    constructor(name:string,age:number){}
}

type getMyInstanceType = myInstanceType<typeof X> // 获取构造函数类型的实例类型(获取一个类的返回类型)

const instance: getMyInstanceType = {
    ID: 123,
    GET() {}
}
// 这和直接使用构造函数做类型一个效果？

const instance2: X = {
    ID: 123,
    GET() {}
}


const exclude: excludeType = 'b'
const extract: extractType = 'c'
const qmit: qmitType = {
    a: '111',
    b: 'ddd',
}

console.log(method)

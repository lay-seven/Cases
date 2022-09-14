class Promise {
    // 构造方法
    constructor(executor) {
        // 添加属性
        this.PromiseState = 'pending';
        this.PromiseResult = null;
        // 声明属性 
        this.callbacks = [];
        const self = this;
        // resolve函数
        function resolve(data) {
            // 判断是否是pending状态
            if (self.PromiseState !== 'pending') return;
            // 修改对象状态(promiseState)
            self.PromiseState = 'fulfilled';
            // 设置对象结果值(promiseResult)
            self.PromiseResult = data;
            // 调用成功的回调函数
            setTimeout(() => {
                self.callbacks.forEach(item => {
                    item.onResolved(data);
                })
            })
        };
        // reject函数 
        function reject(data) {
            // 判断是否是pending状态
            if (self.PromiseState !== 'pending') return;
            // 修改对象状态(promiseState)
            self.PromiseState = 'rejected';
            // 设置对象结果值(promiseResult)
            self.PromiseResult = data;
            // 调用失败的回调函数
            setTimeout(() => {
                self.callbacks.forEach(item => {
                    item.onRejected(data);
                })
            })
        };
        try {
            // 在内部同步调用
            executor(resolve, reject);
        } catch (e) {
            // 修改Promise状态为失败
            reject(e);
        }
    }
    // then方法
    then(onResolved, onRejected) {
        const self = this;
        // 判断回调函数参数
        if (typeof onRejected !== 'function') {
            onRejected = reason => {
                throw reason;
            }
        }
        if (typeof onResolved !== 'function') {
            onResolved = value => value;

        }
        return new Promise((resolve, reject) => {
            // 封装函数
            function callback(type) {
                try {
                    // 获取回调函数的执行结果
                    let result = type(self.PromiseResult);
                    if (result instanceof Promise) {
                        // 如果是一个Promise对象
                        result.then(v => {
                            resolve(v);
                        }, r => {
                            reject(r)
                        })
                    } else {
                        // 结果的对象状态为成功
                        resolve(result);
                    }
                } catch (e) {
                    reject(e)
                }
            }
            // 调用回调函数
            if (this.PromiseState === 'fulfilled') {
                setTimeout(() => {
                    callback(onResolved);
                })
            }
            if (this.PromiseState === 'rejected') {
                setTimeout(() => {
                    callback(onRejected);
                })
            }
            if (this.PromiseState === 'pending') {
                // 保存回调函数
                this.callbacks.push({
                    onResolved: function () {
                        callback(onResolved)
                    },
                    onRejected: function () {
                        callback(onRejected)
                    }
                })
            }
        })
    }
    // 添加catch 方法
    catch(onRejected) {
        return this.then(undefined, onRejected);
    }
    // 添加 resolve 方法
    static resolve(value) {
        // 返回一个Promise对象
        return new Promise((resolve, reject) => {
            if (value instanceof Promise) {
                value.then(v => {
                    resolve(v);
                }, r => {
                    reject(r);
                })
            } else {
                resolve(value);
            }
        })
    }
    // 添加reject方法
    static reject(reason) {
        return new Promise((resolve, reject) => {
            reject(reason);
        })
    }
    // 添加all方法
    static all(promises) {
        let count = 0;
        let arr = [];
        // 返回Promise对象
        return new Promise((resolve, reject) => {
            // 遍历
            for (let i = 0; i < promises.length; i++) {
                // 
                promises[i].then(v => {
                    // 对象状态为成功，但不能直接写resolve
                    arr[i] = v;
                    count++;
                    if (count === promises.length) {
                        resolve(arr)
                    }
                }, r => {
                    reject(r);
                })
            }

        })
    }
    static race = function (promises) {
        return new Promise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(v => {
                    resolve(v)
                }, r => {
                    reject(r)
                })
            }
        })
    }
}
// // 添加then方法
// Promise.prototype.then = function (onResolved, onRejected) {
// }
// 添加catch 方法
// Promise.prototype.catch = function (onRejected) {
//     return this.then(undefined, onRejected);
// }

// // 添加 resolve 方法
// Promise.resolve = function (value) {
//     // 返回一个Promise对象
//     return new Promise((resolve, reject) => {
//         if (value instanceof Promise) {
//             value.then(v => {
//                 resolve(v);
//             }, r => {
//                 reject(r);
//             })
//         } else {
//             resolve(value);
//         }
//     })
// }
// 添加reject方法
// Promise.reject = function (reason) {
//     return new Promise((resolve, reject) => {
//         reject(reason);
//     })
// }
// 添加all方法
// Promise.all = function (promises) {
//     let count = 0;
//     let arr = [];
//     // 返回Promise对象
//     return new Promise((resolve, reject) => {
//         // 遍历
//         for (let i = 0; i < promises.length; i++) {
//             // 
//             promises[i].then(v => {
//                 // 对象状态为成功，但不能直接写resolve
//                 arr[i] = v;
//                 count++;
//                 if (count === promises.length) {
//                     resolve(arr)
//                 }
//             }, r => {
//                 reject(r);
//             })
//         }

//     })
// }
// // 添加race方法
// Promise.race = function (promises) {
//     return new Promise((resolve, reject) => {
//         for (let i = 0; i < promises.length; i++) {
//             promises[i].then(v => {
//                 resolve(v)
//             }, r => {
//                 reject(r)
//             })
//         }
//     })
// }
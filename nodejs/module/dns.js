var dns = require('dns');
dns.lookup('www.github.com',function (err,addr,family) {
    console.log('ip:'+addr)
    dns.reverse(addr,function (err, hostnames) {
        console.log("反向解析："+hostnames)
    })
})
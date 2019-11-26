const getUrl = "http://news.baidu.com";
const getTimeout = 10;//获取数据时间间隔 单位秒
const toFileTime = 10;//生成文件时间间隔 单位秒 注意toFileTime为getTimeout的整数倍

const express = require('express');
const fs = require('fs');
const app = express();
let server = app.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Your App is running at http://%s:%s', host, port);
});
// 引入所需要的第三方包
const superagent= require('superagent');
let hotNews = [];                                // 热点新闻
let getNum = 0;
let newsObj = {};

// 引入所需要的第三方包
const cheerio = require('cheerio');

let getHotNews = (res) => {
    let hotNews = [];
    // 访问成功，请求http://news.baidu.com/页面所返回的数据会包含在res.text中。
    /* 使用cheerio模块的cherrio.load()方法，将HTMLdocument作为参数传入函数
       以后就可以使用类似jQuery的$(selectior)的方式来获取页面元素
     */
    let $ = cheerio.load(res.text);
    // 找到目标数据所在的页面元素，获取数据
    $('div#pane-news ul li a').each((idx, ele) => {
        // cherrio中$('selector').each()用来遍历所有匹配到的DOM元素
        // 参数idx是当前遍历的元素的索引，ele就是当前便利的DOM元素
        let news = {
            title: $(ele).text(),        // 获取新闻标题
            href: $(ele).attr('href')    // 获取新闻网页链接
        };
        hotNews.push(news)              // 存入最终结果数组
    });
    return hotNews
};
let getTime =  (isSecond)=>{
    let now = new Date();
    let year = now.getFullYear();
    let mouth = now.getMonth();
    let day = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let noSecond = `${year}-${mouth}-${day}-${hour}-${minute}`;
    return isSecond ?`${noSecond}-${second}`:noSecond;
};
let getFilePath = ()=>{
    let time = getTime(false);
    return `./saveData/${time}.txt`;
};
const getBaiduNews = ()=>{
    /**
     * 使用superagent.get()方法来访问百度新闻首页
     */
    superagent.get(getUrl).end((err, res) => {
        if (err) {
            // 如果访问失败或者出错，会这行这里
            console.log(`热点新闻抓取失败 - ${err}`)
        } else {
            // 访问成功，请求http://news.baidu.com/页面所返回的数据会包含在res
            // 抓取热点新闻数据
            hotNews = getHotNews(res);
            getNum++;
            newsObj[getTime(true)] = hotNews;
            let timeNum = toFileTime/getTimeout;
            if(getNum&&Number(getNum%timeNum)===0){
                console.log('文件生成次数',getNum/timeNum);
                let filePath = getFilePath();
                fs.writeFile(filePath, JSON.stringify(newsObj), { 'flag': 'a' }, function(err) {
                    if (err) {
                        throw err;
                    }
                });
                newsObj = {};
            }
            console.log('获取次数',getNum);
        }
    });

};
getBaiduNews();
//循环调用
let inv = setInterval(()=>{
    getBaiduNews();
},getTimeout*1000);

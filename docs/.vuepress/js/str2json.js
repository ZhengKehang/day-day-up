let origin = "奴隶社会,非洲,古埃及文明,金字塔\n" +
    ",亚洲,两河流域文明,汉谟拉比法典\n" +
    ",,古印度,种姓制度\n" +
    ",,,佛教的创立\n" +
    ",欧洲,希腊,希腊城邦\n" +
    ",,,雅典民主\n" +
    ",,罗马,城邦\n" +
    ",,,帝国的征服与扩展\n" +
    ",,希腊罗马古典文化,建筑艺术\n" +
    ",,,公历";
/**
 * 思路将问题分解为形成跟随链和将后面的链路放入规定的上一级
 * 第一步将每一层各自形成数组//生成数组
 * 标记每一层放置到上n层的规则//规则记录和使用函数
 * 将每一层形成链路//需要形成链路函数
 */

function str2json(str) {
    //根据/n先切分数组 originA[]
    let originA = str.split('\n');
    //根据逗号切分数组 originAs[[]]
    let originAs = originA.map(item=>{
        return item.split(',')
    });
    //根据n个","生成的空项生成个数的数组 numberA[]以及去除空项的二维数组dealAs[[]];
    let numberA = [],dealAs=[];
    originAs.forEach(item=>{
        let dealA = [],num=0;
        item.forEach(key=>{
            if(key){
                let dealKey = {[key]:[]};
                dealA.push(dealKey)
            }else{
                num++
            }
        });
        dealAs.push(dealA);
        numberA.push(num)
    });
    //倒序将二维数组的每个项整合getA
    let getA = dealAs.map(item=>{
        for (let i = item.length-1;i>0;i--){
            let dealObj = item[i];
            let preObj = item[i-1];
            toKeyArray(preObj,dealObj,1);
        }
        return item[0]
    });
    //根据numberA倒叙找到比自己小的上一级number将其放入对应的数组中
    for (let i = numberA.length-1;i>1;i--){
        let num = numberA[i];
        let j = getNearNumber(num,numberA.slice(0,i));
        toKeyArray(getA[j],getA[i],num-numberA[j]);
    }
    console.log('getA[0]',getA[0]);
    return getA[0];
}
//倒叙获取数组中最近的比自己小项
function getNearNumber(num,array) {
    let j = 0;
    for (let i = array.length-1;i>0;i--){
        let next = array[i];
        if(num>next){
            j = i;
            break
        }
    }
    return j;
}
//将内容根据层级放置到正确位置
function toKeyArray(to,from,distance) {
    let firstKey = getFirstKey(to);
    if(distance===1){
        to[firstKey].push(from)
    }else{
        distance--;
        toKeyArray(to[firstKey][0],from,distance)
    }
}
//获取对象的第一项
function getFirstKey(obj) {
    if(typeof obj==='object'){
        return  Object.keys(obj)[0]
    }
}
str2json(origin);
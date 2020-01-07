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
function str2json(str) {
    //根据/n先切分数组 endArray[]
    let originA = str.split('/n')
    //根据逗号切分数组 originAs[[]]
    let originAs = originA.map(item=>{
        return item.split(',')
    });
    //根据n个，生成的空项生成数字 对应数组 numberArray[],dealNumberArray[[]];
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
    //倒序将每个项整合
    let getA = dealAs.map(item=>{
        for (let i = item.length;i>1;i--){
            let dealKey = item[i];
            let preObj = item[i-1];
            Object.keys(preObj).forEach(preKey=>{
                preObj[preKey].push(dealKey);
            });
        }
        return item[0]
    });
    //根据numberArray倒叙将每一项放到对应位置
    for (let i = numberA.length;i>1;i--){
        let num = numberA[i];
        //找到比自己小的上一级number将其放入
    }
}
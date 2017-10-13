/**
 * Created by 殷宇 on 2017/9/23.
 */
//封装animate函数
//把timeId作为对象的属性，那个div要移动，那个div的计时器id就保存在自己的属性里
function animate(obj,target){
    clearInterval(obj.timeId);
    obj.timeId=setInterval(function () {
        var temp=obj.offsetLeft;
        var num=temp>target?-2:2;
        temp+=num;
        //如果目标位置和当前位置之间的距离，小于一个步长，就直接赋目标值。
        //如果目标位置和当前位置之间的距离，大于等于一个步长，就走一步。
        if(Math.abs(target-temp)<Math.abs(num)){
            clearInterval(obj.timeId);
            obj.style.left=target+'px';
        }else{
            obj.style.left=temp+'px';
        }
    },1);
}
//封装函数
function id(id){
    return document.getElementById(id);
}
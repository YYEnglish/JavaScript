/**
 * Created by ���� on 2017/9/23.
 */
//��װanimate����
//��timeId��Ϊ��������ԣ��Ǹ�divҪ�ƶ����Ǹ�div�ļ�ʱ��id�ͱ������Լ���������
function animate(obj,target){
    clearInterval(obj.timeId);
    obj.timeId=setInterval(function () {
        var temp=obj.offsetLeft;
        var num=temp>target?-2:2;
        temp+=num;
        //���Ŀ��λ�ú͵�ǰλ��֮��ľ��룬С��һ����������ֱ�Ӹ�Ŀ��ֵ��
        //���Ŀ��λ�ú͵�ǰλ��֮��ľ��룬���ڵ���һ������������һ����
        if(Math.abs(target-temp)<Math.abs(num)){
            clearInterval(obj.timeId);
            obj.style.left=target+'px';
        }else{
            obj.style.left=temp+'px';
        }
    },1);
}
//��װ����
function id(id){
    return document.getElementById(id);
}
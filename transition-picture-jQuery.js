//获取图片数组
// var $picArr=['img/p1.jpg','img/p2.jpg','img/p3.jpg','img/p4.jpg','img/5.jpg','img/6.jpg','img/7.png','img/8.jpeg','img/9.jpg','img/10.jpg','img/11.jpg','img/12.jpg','img/13.jpg','img/14.jpg','img/15.jpg','img/16.jpg'];
var $imgList=$('img');
var origin=['100px','100px'];//重心点的改变,可以改变图片旋转的样式
//点击向前或向后按钮,依次替换相应的图片
// $('#goToPre').click(function () {
//     //先找到当前显示的照片是第几组数
//     console.log(number);
//     // $('#img1').each(function (i) {
//     //    if(picArr[i]===number){
//     //        var index=i-4;
//     //        alert(index);
//     //    }
//     // })
//     for(var i=0;i<$picArr.length;i++){
//         if($picArr[i]===number){
//                    var index=i-4;
//                    alert(index);
//                }
//     }
//     //点击向前按钮 则组数-1
//     //组数-1找到对应的照片进行更换 定时
// });

//设置照片旋转样式
function configer(){
    var ang=8,
        aint=-8;
    $imgList.transform({origin:origin});
    $imgList.each(function(i){
        var $this=$(this);
        $this.transform({rotate:aint+(ang*i)+'deg'});
    })
}
configer();
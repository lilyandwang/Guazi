// function Banner(){}
// $.extend(Banner.prototype,{
// // 写法是兼容的;
//     init : function(options){
//         /*
//             {
//                 item_list : "#wrap li",
//                 left_btn : "#left",
//                 right_btn : "#right",
//                 btn_list : "#btn_list button"    
//             }
//         */ 
//         // 所有的图片;
//         this.item_list = $(options.item_list);
//         // 左按钮 ;
//         this.left_btn = $(options.left_btn);
//         // 右按钮 ;
//         this.right_btn = $(options.right_btn);
//         // 按钮列表;
//         this.btn_list = $(options.btn_list);
//         this.nowIndex = 0;
//         // console.log(nowIndex);
//         // 有多少元素;
//         this.item_num = this.item_list.length;
//         this.ul = $(".buyCarShow ul");
//         // 获取列表中第一个元素的宽度值;
//         this.item_width = this.item_list.width();
        
//         this.wrap = $(".wrap2-top");
//         if(this.left_btn.length == 0 && this.right_btn.length == 0 && this.btn_list.length == 0){
//             this.autoPlay();
//             return 0;
//         }
//         this.bindEvent();
//     },
//     bindEvent : function(){
//         this.left_btn.click($.proxy(this.prev , this));
//         this.right_btn.click($.proxy(this.next , this));
//         this.btn_list.click($.proxy(this.toIndex , this));

//         this.wrap.mouseenter($.proxy(this.stopPlay, this ));
//         this.wrap.mouseleave($.proxy(this.autoPlay, this ));
//         // this.autoPlay();
//     },
//     next:function(){
//         if( this.nowIndex == this.item_num - 1){
//             this.nowIndex = 1;
//             this.ul.css({
//                 left : 0
//             })
//         }else{
//             this.nowIndex ++;
//         }
//         this.animate();
//     },
//     prev:function(){
//         // console.log(this);
//         if( this.nowIndex == 0){
//             this.nowIndex = this.item_num - 2;
//             this.ul.css({
//                 left : -(this.item_num - 1) * this.item_width
//             })
//         }else{
//             this.nowIndex --;
//         }
//         this.animate();
//     },
//     toIndex:function(event){
//         // 要获取当前元素的下标么;
//         var target = event.target || event.srcElement;
//         // console.log(event);
//         // console.log($(target).index());
//         // index();
//         this.nowIndex = $(target).index();
//         this.animate();
       
//     },
//     animate:function(){
//         // console.log(this.nowIndex);
//         this.ul.stop().animate({
//             left : -this.item_width * this.nowIndex
//         })
//         var index = this.nowIndex == this.item_num - 1 ? 0 : this.nowIndex; 
//         this.btn_list.eq(index).addClass("active")
//         .siblings("button").removeClass("active");
//     },
//     autoPlay:function(){
//         // 自动执行;
//         this.autoPlay_timer = setInterval(function(){
//             // this.right_btn.trigger("click");
//             this.right_btn.triggerHandler("click");
//         }.bind(this),2000)
//         // console.log("自动播放")
//     },
//     stopPlay:function(){
//         clearInterval(this.autoPlay_timer);
//         // console.log("停止播放")
//     }
// })
// var banner = new Banner();
// banner.init({
//     item_list : ".wrap2-buyCar li",
//     left_btn : "#left",
//     right_btn : "#right",
//     btn_list : ".wrap2-buyCarList button" 
// })
// banner.autoPlay();
var aItem = document.querySelectorAll(".buyCarShow li");
var oLeft = document.getElementById("left");
var oRight = document.getElementById("right");
var aSpan = document.querySelectorAll(".wrap2-buyCarList button");

var oWrap = document.getElementById("wrap2");

var nowIndex = 0; // 当前显示的下标;

oRight.onclick = function(){
    //                 4;
    if(nowIndex == aItem.length - 1){
        nowIndex = 0;
    }else{
        nowIndex ++;
    }
    // console.log(nowIndex);// 1 2 3 4 0  
    animate()
   
}
oLeft.onclick = function(){
    // nowIndex --;
    // console.log(nowIndex);
    if(nowIndex == 0){
        nowIndex = aItem.length - 1;
    }else{
        nowIndex --;
    }
    animate()
}

for(let i = 0 ; i < aSpan.length ; i ++){
    aSpan[i].onmouseover = function(){
        nowIndex = i;
        animate();
    }
}


function animate(){
    // 核心就是 nowIndex;
    // 
    // 动画效果;
    for(var i = 0 ; i < aItem.length ; i ++){
        aItem[i].className = "";
        aSpan[i].className = "";
    }
    aItem[nowIndex].className = "active4";
    // span效果;
    aSpan[nowIndex].className = "active";
}

oWrap.onmouseenter = function(){
    clearInterval(autoPlayTimer);
}
oWrap.onmouseleave = function(){
    clearInterval(autoPlayTimer);
    autoPlayTimer = setInterval(oRight.onclick, 3000)
}
// 2. 动画; css3 凑合;

var autoPlayTimer = setInterval(oRight.onclick, 3000)

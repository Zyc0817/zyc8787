/**
 * Created by jingdian on 2017/5/5.
 */
function defaultEvent(e) {
    e.preventDefault() || event.preventDefault();
}
function touchMove(){
	//获取需要拖拽的元素
    var Add = document.getElementById("move");
    Add.addEventListener("touchstart", function(){
        var finger = event.touches[0];
        var x1 = finger.pageX;
        var y1 = finger.pageY;
        var l = Add.offsetLeft;
        var t = Add.offsetTop;
        document.addEventListener("touchmove",defaultEvent,false);
        function move(){
            var f2 = event.touches[0];
            var x2 = f2.pageX;
            var y2 = f2.pageY;
            var left = l + x2 - x1;
            var top = t + y2 - y1;
            if(left <= 0){
                left = 0;
            }else if(left >= document.documentElement.clientWidth - Add.offsetWidth){
                left = document.documentElement.clientWidth - Add.offsetWidth;
            }
            if(top <= 44){
                top = 44;
            }else if(top >= document.documentElement.clientHeight - Add.offsetHeight){
                top = document.documentElement.clientHeight - Add.offsetHeight;
            }
            Add.style.left = left + "px";
            Add.style.top = top + "px";
        }
        Add.addEventListener("touchmove", move, false);
        Add.addEventListener("touchend", function(){
            Add.removeEventListener("touchmove", move, false);
            document.removeEventListener("touchmove",defaultEvent,false);
        }, false);
    }, true);

}
touchMove();

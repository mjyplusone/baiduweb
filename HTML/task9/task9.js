//一级菜单显示
var list1 = document.getElementsByClassName("list1")[0];
for(var i = 0; i < list1.children.length; i++)
{
    (function(i){
        list1.children[i].onclick = function(){
            //清除下级菜单上的样式
            if(document.getElementsByClassName("list2")[0]){
                var list2 = document.getElementsByClassName("list2")[0];
                for(var j = 0; j < list2.children.length; j++){
                    list2.children[j].setAttribute("class", "");
                }
            }  

            //先清除selected样式(除了本次点击且已选中的之外)
            for(var j = 0; j < list1.children.length; j++){
                if(!(list1.children[j].getAttribute("class") == "selected" && j==i))
                    list1.children[j].setAttribute("class", "");
            }

            if(list1.children[i].getAttribute("class") != "selected"){
                list1.children[i].setAttribute("class", "selected");
                displayList2();
            }
            else{
                list1.children[i].setAttribute("class", "");
            }     

            return false;
        }
    })(i);
}

//二级菜单显示
function displayList2()
{
    var list2 = document.getElementsByClassName("list2")[0];
    for(var i = 0; i < list2.children.length; i++)
    {
        (function(i){
            list2.children[i].onclick = function(event){
                //清除下级菜单上的样式
                if(document.getElementsByClassName("list3")[0]){
                    var list3 = document.getElementsByClassName("list3")[0];
                    for(var j = 0; j < list3.children.length; j++){
                        list3.children[j].setAttribute("class", "");
                    }
                }               

                //先清除selected样式(除了本次点击且已选中的之外)
                for(var j = 0; j < list2.children.length; j++){
                    if(!(list2.children[j].getAttribute("class") == "selected" && j==i))
                        list2.children[j].setAttribute("class", "");
                }
    
                if(list2.children[i].getAttribute("class") != "selected"){
                    list2.children[i].setAttribute("class", "selected");
                    displayList3();
                }
                else{
                    list2.children[i].setAttribute("class", "");
                }        
                
                //阻止事件冒泡!!!
                if(event && event.stopPropagation){
                    event.stopPropagation();
                } 
                else{ 
                    //兼容IE
                    window.event.cancelBubble = true;
                }
                
                return false;
            }
        })(i);
    }
}

function displayList3()
{
    var list3 = document.getElementsByClassName("list3")[0];
    for(var i = 0; i < list3.children.length; i++)
    {
        (function(i){
            list3.children[i].onclick = function(event){
                //先清除selected样式(除了本次点击且已选中的之外)
                for(var j = 0; j < list3.children.length; j++){
                    if(!(list3.children[j].getAttribute("class") == "selected" && j==i))
                        list3.children[j].setAttribute("class", "");
                }
    
                if(list3.children[i].getAttribute("class") != "selected"){
                    list3.children[i].setAttribute("class", "selected");
                }
                else{
                    list3.children[i].setAttribute("class", "");
                }        
                
                //阻止事件冒泡!!!
                if(event && event.stopPropagation){
                    event.stopPropagation();
                } 
                else{ 
                    //兼容IE
                    window.event.cancelBubble = true;
                }
                
                return false;
            }
        })(i);
    }
}

//change
var change = document.getElementById("change");
change.onclick = changecontent;
var huan = document.getElementById("huan");
huan.onclick = changecontent;

function changecontent()
{
    var mf1 = document.getElementById("mf1in");
    var mf2 = document.getElementById("mf2in");
    var value = mf1.options[mf1.selectedIndex].text;
    mf1.options[mf1.selectedIndex].text = mf2.options[mf2.selectedIndex].text;
    mf2.options[mf2.selectedIndex].text = value;
}

//time select
var timecost = document.getElementsByClassName("timecost");
for(var i = 0; i < timecost.length; i++)
{
    (function(i){
        timecost[i].onclick = function(){
            for(var j = 0; j < timecost.length; j++){
                timecost[j].setAttribute("class", "timecost");
            }

            timecost[i].className += " selected";
        }
    })(i);
}

//tab label
var proLeft = document.getElementsByClassName("proLeft")[0];
var label = proLeft.getElementsByTagName("label");
for(var i = 0; i < label.length; i++)
{
    (function(i){
        label[i].onclick = function(){
            for(var j = 0; j < label.length; j++){
                label[j].setAttribute("class", "");
            }

            label[i].setAttribute("class", "selected");
        }
    })(i);
}

//保密协议onclick
var proRight = document.getElementsByClassName("proRight")[0];
var choose = proRight.getElementsByClassName("choose")[0];
choose.onclick = function(){
    if(choose.getAttribute("class").indexOf("clicked") == -1){
        choose.className += " clicked";
    }
    else{
        choose.className = "choose";
    }
}

//hottable selected hand
var rank = document.getElementsByClassName("rank")[0];
var tr = rank.getElementsByTagName("tr");
for(var i = 0; i < tr.length; i++)
{
    (function(i){
        tr[i].onclick = function(){
            for(var j = 0; j < tr.length; j++){
                tr[j].setAttribute("class", "");
            }

            tr[i].setAttribute("class", "selected");
        }
    })(i);
}

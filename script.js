var active = 0;
var code_combined;
var html, css, js;
var isFullscreen = false;
var focusTextArea = true;

function run_code(){
    change(active);
    var iframe = $("#html_display").contents().find('body');
    html = document.getElementById("code0").innerHTML;
    css = document.getElementById("code1").innerHTML;
    js = document.getElementById("code2").innerHTML;
    code_combined = "<html>"+html+"</html>"+"<style>"+css+"</style>"+"<script>"+js+"</script>";
    iframe.html(code_combined);

}

var code;
function change(number){
    console.log("huhhh");
    document.getElementById("code" + active).innerHTML =  document.getElementById("textarea").value; //save that value into its respective storage paragraph

    document.getElementById("option"+active).style.backgroundColor = "cadetblue"; //change old tab's bg color
    active = number; //change active tab
    document.getElementById("option"+active).style.backgroundColor = "lightskyblue"; //change color of current tab's bg color
    console.log("test")
    document.getElementById("textarea").value = document.getElementById("code"+number).innerHTML; //open new code
}

function fullscreen(){
    if(isFullscreen == true){
        $("#html_display").animate({width: '600px'});
        isFullscreen = false; 
        document.getElementById("fullscreen_option").style.backgroundColor = "cadetblue";
        document.getElementById("iframe_title").style.display = "inline";
    }else{
        $("#html_display").animate({width: '99%'});
        isFullscreen = true;
        document.getElementById("fullscreen_option").style.backgroundColor = "lightskyblue";
        document.getElementById("iframe_title").style.display = "none";
    }
}

var textarea;
function enterTab(event){
    var button = event.keyCode;
    textarea = document.getElementById("textarea");
    focusTextArea = true;
    if(button == 9){
        var content = textarea.value;
        var start = textarea.selectionStart;
        var end = textarea.selectionEnd;
        textarea.value = content.substring(0, start) + '\t' + content.substring(end);

        textarea.selectionStart = textarea.selectionEnd = start + 1;
        refocus();
        return true;
    }
    
}

function refocus(){
    if(focusTextArea == true){}
    setTimeout(function () {
        document.getElementById("textarea").focus();
    }, 0);
    
}

function codeFocus(){
    focusTextArea = false;
}
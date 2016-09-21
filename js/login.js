/**
 * Created by Hello on 2016/9/20.
 */
$(function () {

    /*检查是否是微信*/
/*    var ua = navigator.userAgent.toLowerCase();
    var isWeixin = ua.indexOf('micromessenger') != -1;
    if (!isWeixin) {
        document.head.innerHTML = '<title>抱歉，出错了</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0"><link rel="stylesheet" type="text/css" href="https://res.wx.qq.com/connect/zh_CN/htmledition/style/wap_err1a9853.css">';
        document.body.innerHTML = '<div class="page_msg"><div class="inner"><span class="msg_icon_wrp"><i class="icon80_smile"></i></span><div class="msg_content">请在微信客户端打开链接</div></div></div>';
    }*/

   $('#login-btn a').on('click', function () {
       hiToast("Hi Toast! You are so handsome",{thems:'Info',position:'center',duration: 5000});
   });
});
































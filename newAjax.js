function ajax(url, fnSucc, fnFaild){
		var oAjax = null;
			if(window.XMLHttpRequest){	//直接判断XMLHttpRequest会出错，需加上window
				oAjax = new XMLHttpRequest();
			} else {
				oAjax = new ActiveXObject("Microsoft.XMLHTTP");
			}
			//2.连接服务器
			oAjax.open('GET', 'abc.txt', true);
			//3.发送请求
			oAjax.send();
			//4.接收服务器的返回信息
			oAjax.onreadystatechange=function(){
				if(oAjax.readyState==4){
					if(oAjax.status==200){
						fnSucc(oAjax.responseText);
					} else {
						if(fnFaild){
							fnFaild();
						}
					}
				}
			}
}
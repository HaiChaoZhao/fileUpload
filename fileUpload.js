function fileUpload(fileInputId,fileSize) {
   //文件上传处理
    //传入文件input控件的ID,创建FormData实例用于ajax传输,创建参数对象,创建当前日期对象
    //设置默认限制上传大于20M的文件
    var $file=$('#'+fileInputId),normalSize=fileSize||20971520;
    var files=$file.prop('files');
    if (files[0].size<normalSize){
        var formdata=new FormData(),
        urlSet='',
        nowDate=new Date(),
        parameter={
            //设置参数值
            argappname:"test",
            argtenantid:"10000",
            arguserid:"testusetid",
            argyear:nowDate.getFullYear().toString(),
            argmonth:(nowDate.getMonth()+1).toString(),
            argday:nowDate.getDate().toString()
        };
        //将上传的文件添加到formdata中
        formdata.append('file',files[0]);
        $.each(parameter,function (keyname,value) {
            //处理URL
            urlSet+=keyname+'='+value+'&';
        });
        urlSet=urlSet.slice(0,-1);
        /*$.ajax(
            {
                url:urlSet,
                type:'POST',
                data:formdata,
                cache:false,
                processData:false,
                cotentType:false
            }
        );*/
        var fileAjax=new XMLHttpRequest();
        fileAjax.open('post',urlSet,true);
        fileAjax.send(formdata);
    }
    else {
        alert("上传文件超过20M,请压缩文件");
    }
}
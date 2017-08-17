<template>
	<div class="wraper mt20">
            <span class="top-banner"><img src="../assets/images/baojia.jpg" width="100%"></span>
            <p class="today">
                已有<em>1586</em>人参与报价
            </p>
            <form method="post" action="" enctype="multipart/form-data" class="commentfrom">
                <div class="apply">
                    <ul style="padding-bottom:10px">
                        <li><input class="input" maxlength="20" name="adr" type="text" id="message" placeholder="楼盘信息"></li>
                        <li class="num"><input type="text" name="m2" datatype="*" placeholder="装修面积"><label>㎡</label></li>
                        <li>
                        <select name="hx" id="hx">
                            <option value="三室两厅">三室两厅（户型可选）</option>
                            <option value="一室一">一室一厅</option>
                            <option value="两室一厅">两室一厅</option>
                            <option value="两室两厅">两室两厅</option>
                            <option value="四室两厅">四室两厅</option>
                            <option value="复式楼">复式楼</option>
                            <option value="别墅">别墅</option>
                        </select>
                        </li>
                        <li><input class="txt" datatype="z2-6" id="kehu" name="kehu" type="text" value="" placeholder="您的称呼" errormsg="请输入您的正确称呼！"></li>
                        <li><input class="input" maxlength="20" name="tel" type="tel" placeholder="联系电话" datatype="m" errormsg="请输入您的手机号码！"></li>
                        <li><input class="btn-sub" type="submit" name="button" value="立即申请"></li>
                    </ul>
                </div>
            </form>
            <div class="b-banner"><img src="../assets/images/newapp.jpg" width="100%"></div>
        </div> 
</template>
<script>
	export default{
		name:"price",
		mounted(){
			this.commentfrom();
		},
		methods:{
			commentfrom(){
				$(function (){
					$(".commentfrom").Validform(
				        { 
						  btnSubmit:".btn_sub",
						  datatype:{"z2-6" : /^[\u4E00-\u9FA5\uf900-\ufa2d]{2,6}$/}
						}
				    );
				});
			}
		}
	}
</script>
<style>
	
</style>
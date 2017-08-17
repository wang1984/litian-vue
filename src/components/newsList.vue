<template>
	<div>
		<div id="fake-search" class="index_search">
            <div class="index_search_mid">
               <span><img src="../assets/images/icosousuo.png"></span>
               <input type="text" id="search_text" class="search_text" value="输入关键词搜索相关新闻">
            </div>
        </div>
        <div class="list">
            <ul class="news">
                <li>
                    <a href=""><img src="http://www.liti.cn/images/defaultpic.gif" alt=""></a>
                    <div class="content">
                        <a href="">世茂玲珑台550</a>
                        <p>很多业主在装修办公室公室前满怀希望，信心百倍...</p>
                        <div class="tips mt10">
                            <span class="view fl">385</span>
                            <span class="time fr">2015-06-07</span>
                        </div>
                    </div>
                </li>
                <li>
                     <a href=""><img src="http://www.liti.cn/images/defaultpic.gif" alt=""></a>
                    <div class="content">
                        <a href="">世茂玲珑台550</a>
                        <p>很多业主在装修办公室公室前满怀希望，信心百倍公室前满怀希望，信心百倍公室前满怀希望，信心百倍前满怀希望，信心百倍认为自己可以...</p>
                        <div class="tips mt10">
                            <span class="view fl">385</span>
                            <span class="time fr">2015-06-07</span>
                        </div>
                    </div>
                </li>
                <li>
                    <a href=""><img src="http://www.liti.cn/images/defaultpic.gif" alt=""></a>
                    <div class="content">
                        <a href="">世茂玲珑台世茂玲珑台世茂玲珑台世茂玲珑台</a>
                        <div class="xq">
                            <span>时间：</span>2015年5月1日—5月31日<br>
                            <span>地点：</span>公司总部及各店面<br>
                            <span>电话：</span>022-27816252
                        </div>
                    </div>
                </li>
                <li>
                    <a href=""><img src="http://www.liti.cn/images/defaultpic.gif" alt=""></a>
                    <div class="content">
                        <a href="">世茂玲珑台世茂玲珑台世茂玲珑台世茂玲珑台</a>
                        <p>很多业主在装修办公室公室前满怀希望，信心百倍公室前满怀希望，信心百倍公室前满怀希望，信心百倍前满怀希望，信心百倍认为自己可以...</p>
                        <div class="tips mt10">
                            <span class="view fl">385</span>
                            <span class="time fr">2015-06-07</span>
                        </div>
                    </div>
                </li>
                <li>
                    <a href=""><img src="http://www.liti.cn/images/defaultpic.gif" alt=""></a>
                    <div class="content">
                        <a href="">世茂玲珑台550</a>
                        <p>很多业主在装修办公室公室前满怀希望，信心百倍公室前满怀希望，信心百倍公室前满怀希望，信心百倍前满怀希望，信心百倍认为自己可以...</p>
                        <div class="tips mt10">
                            <span class="view fl">385</span>
                            <span class="time fr">2015-06-07</span>
                        </div>
                    </div>
                </li>
                <li>
                    <a href=""><img src="http://www.liti.cn/images/defaultpic.gif" alt=""></a>
                    <div class="content">
                        <a href="">世茂玲珑台550</a>
                        <p>很多业主在装修办公室公室前满怀希望，信心百倍公室前满怀希望，信心百倍公室前满怀希望，信心百倍前满怀希望，信心百倍认为自己可以...</p>
                        <div class="tips mt10">
                            <span class="view fl">385</span>
                            <span class="time fr">2015-06-07</span>
                        </div>
                    </div>
                </li>
                <li>
                    <a href=""><img src="http://www.liti.cn/images/defaultpic.gif" alt=""></a>
                    <div class="content">
                        <a href="">世茂玲珑台550</a>
                        <p>很多业主在装修办公室公室前满怀希望，信心百倍公室前满怀希望，信心百倍公室前满怀希望，信心百倍前满怀希望，信心百倍认为自己可以...</p>
                        <div class="tips mt10">
                            <span class="view fl">385</span>
                            <span class="time fr">2015-06-07</span>
                        </div>
                    </div>
                </li>
                <li>
                    <a href=""><img src="http://www.liti.cn/images/defaultpic.gif" alt=""></a>
                    <div class="content">
                        <a href="">世茂玲珑台550</a>
                        <p>很多业主在装修办公室公室前满怀希望，信心百倍公室前满怀希望，信心百倍公室前满怀希望，信心百倍前满怀希望，信心百倍认为自己可以...</p>
                        <div class="tips mt10">
                            <span class="view fl">385</span>
                            <span class="time fr">2015-06-07</span>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="clear"></div>
            <div class="pagination-wrapper">
                <div class="pagination">
                    <li>首页</li>
                    <li><a href="">上一页</a></li>
                    <li><a href="">下一页</a></li>
                    <li><a href="">末页</a></li>
                </div>
            </div>
        </div> 
        <div id="search_hide" class="search_hide" >
            <h2><span class="closea"><img src="../assets/images/close.png"/></span>关键搜索</h2>
            <div id="mallSearch" class="search_mid">
            <div id="search_tips" style="display:none;"></div>
            <ul class="search-type">
                <li class="cur" num="0">新闻</li>
                <li num="1" class="">活动</li>
            </ul>
            <div class="searchdotm">
                <form class="mallSearch-form" method="get" name="searchForm" id="searchForm" action="search.php" onsubmit="return checkSearchForm()">
                    <input type="hidden" name="type" id="searchtype" value="0"/>
                    <div class="mallSearch-input">
                        <div id="s-combobox-135">
                            <input aria-haspopup="true" role="combobox" class="s-combobox-input" name="keywords" id="keyword" tabindex="9" accesskey="s" onkeyup="STip(this.value, event);" autocomplete="off" value="请输入关键词" onfocus="if(this.value=='请输入关键词'){this.value='';}else{this.value=this.value;}" onblur="if(this.value=='')this.value='请输入关键词'" type="text"/>
                        </div>
                        <input type="submit" value="" class="button"/>
                    </div>
                </form>
            </div>
            </div>
            <section class="mix_recently_search">
            <h3>热门搜索</h3>
            <ul>
                <li><a href="#">阳光力天</a></li>
                <li><a href="#">家具新发现</a></li>
                <li><a href="#">视频节目</a></li>
                <li><a href="#">天津电视台</a></li>
            </ul>
            </section>
        </div>

        
	</div>
</template>
<script>
	export default{
		name:"newslist"
	}
</script>
<style>
	
</style>
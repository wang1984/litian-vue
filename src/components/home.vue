<template>
	<div>
		<slider></slider>
		<div class="nav">
            <nav>
                <ul>
                    <li><a href="#"><img alt="案例" src="../assets/images/nav_01.png"><span>案例</span></a></li>
                    <li><a href="#"><img alt="设计师" src="../assets/images/nav_02.png"><span>设计师</span></a></li>
                    <li><a href="#"><img alt="实景工地" src="../assets/images/nav_03.png"><span>实景工地</span></a></li>
                    <li><a href="#"><img alt="在线报价" src="../assets/images/nav_04.png"><span>在线报价</span></a></li>
                    <li><a href="#"><img alt="店面地图" src="../assets/images/nav_05.png"><span>店面地图</span></a></li>
                    <li><a href="#"><img alt="大事记" src="../assets/images/nav_06.png"><span>大事记</span></a></li>
                </ul>
            </nav>
        </div>
        
        <div class="menu">
            <ul>
                <li><a href="#"><img alt="公司介绍" src="../assets/images/menu01.png"><span>公司介绍</span></a></li>
                <li><a href="#"><img alt="新闻" src="../assets/images/menu02.png"><span>新闻</span></a></li>
                <li><a href="#"><img alt="视频" src="../assets/images/menu03.png"><span>视频</span></a></li>
                <li><a href="#" class="last"><img alt="客户感言" src="../assets/images/menu04.png"><span>客户感言</span></a></li>
            </ul>
        </div>
        
        <div class="salebox">
            <div class="sale">
                <h2><em></em>促销信息<a href="" class="more" title="更多"></a></h2>
                <div class="activity">
                    <a href="">
                        <img src="../assets/images/banner.jpg" width="100%" alt="">
                        <h3>双十一提前购</h3>
                    </a>
                </div>
            </div>
        </div>
	</div>
</template>
<script>
    import slider from './slider.vue'
	export default{
		name:"home",
		components:{
            slider
        }
	}
</script>
<style>
	
</style>
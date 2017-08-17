<template>
    <div class="piblicHead">
        <header>
            <h1><a href="/" class="logo" title="力天装饰">力天装饰</a></h1>
            <div class="drawer-toggle drawer-hamberger"><span></span></div>
            <div class="drawer-main drawer-default">
                <nav class="drawer-nav" role="navigation">
                    <ul class=" panel-menu" id="panel-menu">
                        <li class="current"><router-link :to="'/'" tag="a" class="drawer-toggle ">首  页</router-link></li>
                        <li class="son">
                            <a href="#">新闻动态<span>></span></a>
                            <ol> 
                                <li><router-link :to="'/newslist'" tag="a" class="drawer-toggle ">+ 力天新动向</router-link></li>
                                <li><router-link :to="'/newslist'" tag="a" class="drawer-toggle ">+ 力天新活动</router-link></li>
                                <li><router-link :to="'/newslist'" tag="a" class="drawer-toggle ">+ 行业新资讯</router-link></li>
                            </ol>
                        </li>
                        <li class="son">
                            <a href="#">关于力天<span>></span></a>
                            <ol>
                                <li><router-link :to="'/events'" tag="a" class="drawer-toggle ">+ 公司介绍</router-link></li>
                                <li><router-link :to="'/events'" tag="a" class="drawer-toggle ">+ 力天大事记</router-link></li>
                            </ol>
                        </li>
                        <li><router-link class="drawer-toggle" :to="'/designList'" tag="a">优秀设计师<span>></span></router-link></li>
                        <li><router-link class="drawer-toggle" :to="'/caseList'" tag="a">力天案例库<span>></span></router-link></li>
                        <li><router-link class="drawer-toggle" :to="'/price'" tag="a">在线报价<span>></span></router-link></li>
                    </ul>
                </nav>
            </div>
        </header>  
    </div>
         
</template>
<script>
    
	 export default{
	 	name:"headnav"
        
        
	 }
</script>
<style scoped>
	.piblicHead{
       height: 45px;
    }
</style>
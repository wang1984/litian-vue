<template>
	<footer>
            <div class="copyright">
                <p>&#169; 2016 <strong>www.liti.cn.</strong> All Rights Reserved.</p>
            </div>
            <div style="height:50px; line-height:50px; clear:both;"></div>
            <div class="foot">
                <div class="footnav">
                    <ul>
                        <li><router-link :to="'/home'" tag="a"><i class="foot1"></i><span>首页</span></router-link></li>
                        <li><router-link :to="'/events'" tag="a"><i class="foot2"></i><span>公司</span></router-link></li>
                        <li><router-link :to="'/caseList'" tag="a"><i class="foot3"></i><span>案例</span></router-link></li>
                        <li><router-link :to="'/designList'" tag="a"><i class="foot4"></i><span>设计师</span></router-link></li>
                    </ul>
                </div>
            </div>
        </footer>
</template>
<script>
	export default{
        name:"headnav"
     }
</script>
<style scoped>
.footnav ul li a.router-link-active span{ color: #f6ab00; }
.footnav ul li a.router-link-active i.foot1{ background-position:0 -135px; }
.footnav ul li a.router-link-active i.foot2{ background-position:0 -170px; }
.footnav ul li a.router-link-active i.foot3{ background-position:0 -208px; }
.footnav ul li a.router-link-active i.foot4{ background-position:0 -235px; }
</style>
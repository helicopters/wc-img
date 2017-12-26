<style>
@-webkit-keyframes fadeIn {
from {
    opacity: 0;
}
to {
    opacity: 1;
}
}
@keyframes fadeIn {
from {
    opacity: 0;
}
to {
    opacity: 1;
}
}
.wc-img-box {
	background: #f5f5f5;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
}	
.lazy-img-fadein {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: fadeIn;
}
.wc-img-box__loading {
	height: 50px;
	width: 50px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.pre-load-img {
	height: 0;
	width: 0;
}
</style>
<template>
	<div class="wc-img-box" :style="{'backgroundImage': 'url(' + url + ')'}" ref="box" @click.stop="clickHandler($event)">
		<!-- 这个用来做加载成功或者失败的函数 -->
		<img class="pre-load-img" :src="url" alt="" v-if="url&&isShowImg" @load="load" @error="errorHandler">
		<!-- 这个是 loading  -->
		<img :src="loading" alt="" class="wc-img-box__loading" v-if="loading&&isLoadingImg">
		<!-- 这个是 加载失败时候 -->
		<img :src="error" alt="" class="wc-img-box__loading" v-if="error&&isError">
		<slot/>
	</div>
</template>
<script>
	export default {
		name: 'wcImg',
		props: ['url','error', 'loading'],
		data () {
			return {
				isShowImg: true,
				isLoadingImg: true,
				isError: false
			}
		},
		methods: {
			/* 成功加载 */
			load () {
				this.isShowImg = false;
				this.isLoadingImg = false;
				this.$refs.box.classList.add('lazy-img-fadein');
			},
			/* 加载失败*/
			errorHandler () {
				/* 不显示 loading */
				this.isShowImg = false;
				this.isLoadingImg = false;
				this.isError = true;
			},
			/* 加这个玩意主要是为了防止父亲元素点击的时候有问题, 所以先把这个给扔出去*/
			clickHandler (e) {
				this.$emit('click', e);
			}
		}
	}
</script>
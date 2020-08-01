<!-- 首页的中间的输入框 -->
<template>
  <div class="app-conntent-middle">
    <section class="content-nav">
        <section v-for="item,index in arr" @mouseenter="" :key="index" >{{item}}</section>
     </section>
     <textarea name="" id="" cols="30" rows="10"></textarea>
     <section class="content-footer">
          <span> 图片</span>
          <span>😀表情</span>
    </section>
 
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      arr: ["发微头条", "写文章", "提问题", "发视频"],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less' scoped>
 .app-conntent-middle {
      padding: 10px 20px;
   .content-nav {
        height: 40px;
        padding: 10px;
        display: flex;
        border: 1px solid #dddddd;
        line-height: 30px;
        align-items: center;
        font-size:14px;
    section {
         display: inline;
        margin-left: 20px;
         .active{
              border-bottom: 2px solid rgb(237, 64, 64);
         }
    }
  }

  textarea {
       display: block;
     box-sizing: border-box;
     width: 100%;
     height: 100px;
     padding: 5px;
     resize:none;
     border: 1px solid #dddddd;
     background-color:rgb( 244, 245, 246);

  }

   .content-footer {
        box-sizing: border-box;
        height: 40px;
        line-height: 40px;
        display: flex;
         border: 1px solid #dddddd;
    span {
       margin-left: 15px; 
    }
  }
}
</style>
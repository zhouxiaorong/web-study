<template>
  <div class="hello">
    <div id="myChart" :style="{width: '500px', height: '500px'}"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            width: '300',
            height: '500',
            color: 'red',
            xAxis: {
              show: false
            },
            yAxis: {
              show: false
            },
            series: [{
                type: "scatter",
                symbolSize: 100,
                color: '#cb7878',
                label: {
                  formatter: ['红色','100'].join('\n'),
                  lineHeight: 20,
                  color: '#fff',
                  show: true
                },
                data: [[100, 65.6]]
              }, {
                type: "scatter",
                symbolSize: 80,
                color: '#85c385',
                label: {
                  formatter: ['绿色','50'].join('\n'),
                  lineHeight: 20,
                  color: '#fff',
                  show: true
                },
                data: [[160.3, 83.2]]
              }, {
                type: "scatter",
                symbolSize: 80,
                color: '#85c385',
                label: {
                  formatter: ['绿色','50'].join('\n'),
                  lineHeight: 20,
                  color: '#fff',
                  show: true
                },
                data: [[160.3, 83.2]]
              }, {
                type: "scatter",
                symbolSize: 80,
                color: '#85c385',
                label: {
                  formatter: ['绿色','50'].join('\n'),
                  lineHeight: 20,
                  color: '#fff',
                  show: true
                },
                data: [[160.3, 83.2]]
              }]
            });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#myChart {
  background: #c9d2f1;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

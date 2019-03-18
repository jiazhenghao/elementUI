import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//import App from './App.vue';
//import TreeTable from './TreeGrid.vue';
import AiButton from "./AiButton.vue";
Vue.use(ElementUI);

new Vue({
    el: "#center",
    components: {
        AiButton,
    },
    name: "center-Content",
    data() {
        return {
            btnlist: {
                btnId: "1001",
                type: "primary",
                size: "",
                buttonName: "点击",
                afterIcon: true,
                iconName: "el-icon-arrow-right",
            }
        }
    }
    // components: {
    //     TreeTable
    // },
    // data: {
    // },
    // data(){
    //     return {
    //         'tableA': {}
    //     }
    // },
    // data() {
    //     return {
    //         data: [{
    //             poolName: "流量池-2018-09",
    //             poolUsers: "1192",
    //             workTime: "2018-09",
    //             outTime: "2019-09"
    //         }, {
    //             poolName: "流量池-2018-07",
    //             poolUsers: "2192",
    //             workTime: "2018-07",
    //             outTime: "2019-09"
    //         }, {
    //             poolName: "流量池-2017-07",
    //             poolUsers: "2292",
    //             workTime: "2018-07",
    //             outTime: "2019-09"
    //         }]
    //     }
    // },
    // data: {
    //     parentMsg:['aa', 'bb', 'cc', 'dd']
    //     // "data": ['aa', 'bb', 'cc', 'dd'],
    //     // columns: ['aa', 'bb', 'cc', 'dd'],
    //     // expandAll: true,
    //     // table: {
    //     //     loading: false, //是否显示加载
    //     //     border: false, //是否带有边框
    //     //     hasSelect: false, //是否有选中的功能
    //     //     hasOperation: false, //是否有操作功能
    //     //     hasOperationTemplate: false, //父组件是否传递了模板
    //     //     columns: [], //表头数据
    //     //     data: [], //表中的数据
    //     //     operation: { //操作中的按钮
    //     //         label: '操作',
    //     //         width: '200',
    //     //     }
    //     // }
    //     //}
    // },
    //render: h => h(center-Content)
});
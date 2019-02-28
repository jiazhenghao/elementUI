import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//import App from './App.vue';
import TreeTable from './TreeGrid.vue';


Vue.use(ElementUI);
//Vue.use(TreeTable);
//console.log("456");

new Vue({
    el: '#appElmentUI',
    components: {
        TreeTable
    },
    data() {
        return {
            table: [{
                label: '一级 1',
                children: [{
                    label: '二级 1-1',
                    children: [{
                        label: '三级 1-1-1'
                    }]
                }]
            }, {
                label: '一级 2',
                children: [{
                    label: '二级 2-1',
                    children: [{
                        label: '三级 2-1-1'
                    }]
                }, {
                    label: '二级 2-2',
                    children: [{
                        label: '三级 2-2-1'
                    }]
                }]
            }, {
                label: '一级 3',
                children: [{
                    label: '二级 3-1',
                    children: [{
                        label: '三级 3-1-1'
                    }]
                }, {
                    label: '二级 3-2',
                    children: [{
                        label: '三级 3-2-1'
                    }]
                }]
            }]
            // defaultProps: {
            //     children: 'children',
            //     label: 'label'
            // }
        }
    
    // columns: ['aa', 'bb', 'cc', 'dd'],
    // //evalFunc: Function,
    // //evalArgs: Array,
    // expandAll: true,
    // table: {
    //     loading: false, //是否显示加载
    //     border: false, //是否带有边框
    //     hasSelect: false, //是否有选中的功能
    //     hasOperation: false, //是否有操作功能
    //     hasOperationTemplate: false, //父组件是否传递了模板
    //     columns: [], //表头数据
    //     data: [], //表中的数据
    //     operation: { //操作中的按钮
    //         label: '操作',
    //         width: '200',
    //     }
    // }
    // }
},
// data() {
//     return {
//         data: ['a', 'b', 'c', 'd'],
//         columns: ['aa', 'bb', 'cc', 'dd'],
//         //evalFunc: Function,
//         //evalArgs: Array,
//         expandAll: true,
//         table: {
//             loading: false, //是否显示加载
//             border: false, //是否带有边框
//             hasSelect: false, //是否有选中的功能
//             hasOperation: false, //是否有操作功能
//             hasOperationTemplate: false, //父组件是否传递了模板
//             columns: [], //表头数据
//             data: [], //表中的数据
//             operation: { //操作中的按钮
//                 label: '操作',
//                 width: '200',
//             }
//         }
//     }
// },
// created: function(){
//  console.log("78");
// },
//render: h => h(App),
render: h => h(TreeTable)
});


//console.log("123");
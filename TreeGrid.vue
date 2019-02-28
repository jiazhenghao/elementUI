<template>
    <el-table :data="formatData" :row-style="showRow" v-bind="$attrs" highlight-current-row @row-click="handleSelectChange" :border="table.border">
        <el-table-column v-if="table.hasSelect===true" type="selection" width="30">
        </el-table-column>
        <el-table-column v-if="columns.length===0" width="150">
            <template slot-scope="scope">
                <span v-for="space in scope.row._level" :key="space" class="ms-tree-space"/>
        <span v-if="iconShow(0,scope.row)" class="tree-ctrl" @click="toggleExpanded(scope.$index)">
          <i v-if="!scope.row._expanded" class="el-icon-circle-plus-outline"/>
          <i v-else class="el-icon-remove-outline"/>
        </span>
                {{ scope.$index }}
            </template>
        </el-table-column>
        <el-table-column v-for="(column, index) in columns" v-else :key="column.value" :label="column.text" :width="column.width">
            <template slot-scope="scope">
                <span v-for="space in scope.row._level" v-if="index === 0" :key="space" class="ms-tree-space"/>
        <span v-if="iconShow(index,scope.row)" class="tree-ctrl" @click="toggleExpanded(scope.$index)">
          <i v-if="!scope.row._expanded" class="el-icon-circle-plus-outline"/>
          <i v-else class="el-icon-remove-outline"/>
        </span>
                {{ scope.row[column.value] }}
            </template>
        </el-table-column>
        <el-table-column v-if="table.hasOperation === true" column-key="operation" :label="table.operation.label" :width="table.operation.width ? table.operation.width : ''">
            <template v-if="isShow(scope.row)" slot-scope="scope">
                <slot name="button-operation" :obj="scope"></slot>
            </template>
        </el-table-column>
    </el-table>
</template>
<script>
import treeToArray from "./eval";
export default {
    name: "TreeTable",
    props: {
        /* eslint-disable */
        data: {
            type: [Array, Object],
            required: true
        },
        columns: {
            type: Array,
            default: () => []
        },
        evalFunc: Function,
        evalArgs: Array,
        expandAll: {
            type: Boolean,
            default: true
        },
        table: {
            type: Object,
            default () {
                return {
                    loading: false, //是否显示加载
                    border: false, //是否带有边框
                    hasSelect: false, //是否有选中的功能
                    hasOperation: false, //是否有操作功能
                    hasOperationTemplate: false, //父组件是否传递了模板
                    columns: [], //表头数据
                    data: [], //表中的数据
                    operation: { //操作中的按钮
                        label: '操作',
                        width: '200',
                    }
                }
            }
        }
    },
    computed: {
        // 格式化数据源
        formatData: function() {
            let tmp;
            if (!Array.isArray(this.data)) {
                tmp = [this.data];
            } else {
                tmp = this.data;
            }
            const func = this.evalFunc || treeToArray;
            const args = this.evalArgs ?
                Array.concat([tmp, this.expandAll], this.evalArgs) :
                [tmp, this.expandAll];
            return func.apply(null, args);
        }
    },
    methods: {
        showRow: function(row) {
            const show = row.row.parent ? row.row.parent._expanded && row.row.parent._show : true;
            row.row._show = show;
            return show ? "animation:treeTableShow 1s;-webkit-animation:treeTableShow 1s;" : "display:none;";
        },
        // 切换下级是否展开
        toggleExpanded: function(trIndex) {
            const record = this.formatData[trIndex];
            record._expanded = !record._expanded;
        },
        // 图标显示
        iconShow(index, record) {
            return index === 0 && record.children && record.children.length > 0;
        },
        isShow(row) {
            if (row.offerType == "套餐") {
                return true;
            } else {
                return false;
            }
        },
        //处理多选的情况，父组件需要监听这个事件
        handleSelectChange(row, event, column) {
            this.$emit('onHandleSelectChange', row, event, column);
        }
    }
};
</script>
<style rel="stylesheet/css">
@keyframes treeTableShow {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@-webkit-keyframes treeTableShow {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>
<style scoped>
.ms-tree-space {
    position: relative;
    top: 1px;
    display: inline-block;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    width: 18px;
    height: 14px;
}

.ms-tree-space::before {
    content: "";
}

table td {
    line-height: 26px;
}

.tree-ctrl {
    position: relative;
    cursor: pointer;
    color: #2196f3;
    margin-left: -18px;
}
</style>
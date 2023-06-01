<template>
    <div class="usertag">
      <div class="tagNav">
        <ul>
          <li>
            <div>
              <i class="bi bi-bar-chart"></i>
              <span>所有</span>
            </div>
          </li>
          <li>
            <div>
              <i class="bi bi-tag"></i>
              <span>今天</span>
            </div>
          </li>
          <li>
            <div>
              <i class="bi bi-tags"></i>
              <span>最近7天</span>
            </div>
          </li>
        </ul>
      </div>
      <p>全部标签</p>
      <div class="tagtree">
        <el-tree :data="data" node-key="id" default-expand-all @node-drag-start="handleDragStart"
            @node-drag-enter="handleDragEnter" @node-drag-leave="handleDragLeave" @node-drag-over="handleDragOver"
            @node-drag-end="handleDragEnd" @node-drop="handleDrop" draggable :allow-drop="allowDrop"
            :allow-drag="allowDrag">
        </el-tree>
      </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        data: [{
          id: 1,
          label: '🏞️ 编程',
          children: [{
            id: 4,
            label: '🧑‍💻 IOS',
            children: [{
              id: 9,
              label: '🤖 Swift'
            },
          ],
          }]
        }, {
          id: 2,
          label: '🦀 产品',
          children: [{
            id: 5,
            label: '🌍 问禅App'
          }, {
            id: 6,
            label: '📚 Books'
          }, {
            id: 11,
            label: '✨ 灵感'
          }]
        }, {
          id: 3,
          label: '🌈 设计',
          children: [{
            id: 7,
            label: '🏠 工业设计'
          }, {
            id: 8,
            label: '📱 产品设计',
            children: [{
             id: 11,
              label: '🖼️ 网页UI设计'
            }, {
              id: 12,
              label: '🍟 动画设计'
            }, {
              id: 13,
              label: ''
            }]
          }]
        },{
          id: 4,
          label: '📝 写作',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2',
            children: [{
             id: 11,
              label: '三级 3-2-1'
            }, {
              id: 12,
              label: '三级 3-2-2'
            }, {
              id: 13,
              label: '三级 3-2-3'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleDragStart(node, ev) {
        console.log('drag start', node);
      },
      handleDragEnter(draggingNode, dropNode, ev) {
        console.log('tree drag enter: ', dropNode.label);
      },
      handleDragLeave(draggingNode, dropNode, ev) {
        console.log('tree drag leave: ', dropNode.label);
      },
      handleDragOver(draggingNode, dropNode, ev) {
        console.log('tree drag over: ', dropNode.label);
      },
      handleDragEnd(draggingNode, dropNode, dropType, ev) {
        console.log('tree drag end: ', dropNode && dropNode.label, dropType);
      },
      handleDrop(draggingNode, dropNode, dropType, ev) {
        console.log('tree drop: ', dropNode.label, dropType);
      },
      allowDrop(draggingNode, dropNode, type) {
        if (dropNode.data.label === '二级 3-1') {
          return type !== 'inner';
        } else {
          return true;
        }
      },
      allowDrag(draggingNode) {
        return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
      }
    }
  };
</script>
<style>
  .usertag p {
    font-size: 12px;
    color: #ded1b7;
  }
  .tagNav ul{
    padding: 10px 0;
    margin-top: 10px;
  }
  .tagNav ul li {
    list-style: none;
    width: 100%;
    height: 35px;
    line-height: 35pX;
    padding-left: 10px;
  }

  .tagNav ul li:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }

  .tagNav ul li span {
    font-size: 14px;
    color: #9d9d9d;
    margin-left: 10px;

  }

  .usertag {
    margin-top: 10px;
  }
  .el-tree {
    width: 100%;
  }
</style>

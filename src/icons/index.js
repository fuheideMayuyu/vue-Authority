/**
 * require.context函数接受三个参数
 * directory {String} -读取文件的路径
 * useSubdirectories {Boolean} -是否遍历文件的子目录
 * regExp {RegExp} -匹配文件的正则
 * 
 * require.context函数执行后返回的是一个函数,并且这个函数有3个属性
 * resolve {Function} -接受一个参数request,request为test文件夹下面匹配文件的相对路径,返回这个匹配文件相对于整个工程的相对路径
 * keys {Function} -返回匹配成功模块的名字组成的数组
 * id {String} -执行环境的id,返回的是一个字符串,主要用在module.hot.accept,应该是热加载?
 */
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'

// 全局引入SvgIcon组件
Vue.component('svg-icon', SvgIcon)

// require.context
const req = require.context('./svg', false, /\.svg$/);
// ['qq.svg','wx.svg']
req.keys().map(req);
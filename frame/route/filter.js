/**
 * Brightness 
 * 简单路由拦截
 */
/*
使用方法
import {routeFilters,filterPage} from '../../route/filter'
 filterPage({
  data:{}
  ...
},[routeFilters.checkLogin,routeFilters.checkPermission])
*/
import {filterFuns}  from './filterFuns'
// const app = getApp()
// export const routeFilters = {
//   'CheckLogin' : 'checkLogin',
//   'CheckPermission' : 'checkPermission',
// }
 const routeFilters = Object.keys(filterFuns).reduce((prev,curr)=>{
  prev[curr] = curr;
  return prev;
},{});

 const filterPage = (pageobj,filters=[])=>{
  let _onLoad = pageobj.onLoad;

  pageobj.onLoad = function(options) {
    console.log('拦截');
    try {
      filters.forEach(filter => {
        filterFuns[filter]&&filterFuns[filter].call(this);
      });
      
    } catch (error) {
      return;
    } 
    let pages = getCurrentPages();
    _onLoad&&_onLoad.call(pages[pages.length-1],options);
  }
  return Page(pageobj);
}

module.exports = {
  routeFilters,
  filterPage
}
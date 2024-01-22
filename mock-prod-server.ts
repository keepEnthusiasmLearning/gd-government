import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
//https://cn.vitejs.dev/guide/features.html#glob-import
//import.meta.glob 读取目录文件, 读取src/mock目录下得所有,以.js文件结尾的文件到modulesFiles中
const modulesFiles = import.meta.glob('../mock/*', { eager: true })
let modules = []
for (const filePath in modulesFiles) {
  //读取文件内容到modules
  modules = modules.concat(modulesFiles[filePath].default)
}
export function setupProdMockServer() {
  //创建prod mock server
  createProdMockServer([...modules])
}
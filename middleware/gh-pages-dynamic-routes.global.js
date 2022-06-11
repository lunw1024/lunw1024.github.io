export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to, from)
  if (to.fullPath.includes("#!")) {
    const path = to.fullPath.replace('#!', '')
    console.log(path)
    return navigateTo(path)
  }
  return
})
export default defineNuxtRouteMiddleware((to, from) => {
  // --- Case "auth.global.ts" ---
  // const isLoggedIn = false;
  // if (isLoggedIn) {
  //   return navigateTo(to.fullPath);
  // }
  // return navigateTo("/login");

  // --- Case "auth.ts" ---
  console.log("Hello from middleware auth");
});
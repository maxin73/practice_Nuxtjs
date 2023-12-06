<script>
//--- Using plugins ---
const { $sayHello } = useNuxtApp();
$sayHello("Nami");

//--- Using useUtils ---
// const { sayHello } = useUtils();
// sayHello();

//--- Using simple structure ---
// const sayHello = () => console.log("Hello");
// sayHello();
</script>

<template>
  <div class="container py-3 mx-auto Main">
    <!-- <Alert />
    <Profile /> -->
    <h1 class="text-teal-500">Main Page</h1>
    <!-- <img src="~/assets/apple.png" alt="" /> -->
  </div>
</template>
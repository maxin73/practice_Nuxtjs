<script setup lang="ts">
// --- useHead ---
useHead({
    title: 'My App',
    meta: [
      { name: 'description', content: 'My amazing site.' }
    ],
    bodyAttrs: {
      class: 'test'
    },
    script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
  })

// --- useAsyncData ---
const { data: productCount, pending } = await useAsyncData("products", () => 
  $fetch("/api/products")
)
const refresh = () => refreshNuxtData("products");
// --- useFetch ---
// const { data: product, pending } = await useLazyFetch("/api/product");
  // transform: (_product) => _product.data
// console.log(toRaw(product.value));

// --- server/api ---
// const response = await $fetch('/api/hello')
// console.log(response);

// --- useState ---
// const counter = useCounter();

// --- Practice Middlewares ---
// definePageMeta({
//   middleware: "auth"
// })

//--- Using plugins ---
// const { $sayHello } = useNuxtApp();
// $sayHello("Nami");

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
    <!-- <ContentDoc /> -->
    <!-- <div id="main">
      Counter: {{ counter }}
      <button @click="counter++">
        +
      </button>
      <button @click="counter--">
        -
      </button>
    </div>
    <Counter id="counter" /> -->
    <p>{{ pending ? "Loading" : productCount }}</p>
      <button @click="refresh">Refresh</button>
    <!-- <p>{{ product }}</p> -->
  </div>
</template>



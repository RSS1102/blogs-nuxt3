<template>
  <div>
    <NuxtLayout>
      <NuxtPage :key="$route.fullPath" />
    </NuxtLayout>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow: hidden;
}
</style>

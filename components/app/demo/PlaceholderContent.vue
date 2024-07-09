<script setup lang="ts">

</script>

<template>
  <Card class="rounded-lg border-none mt-6">
    <CardContent class="p-6">
      <div class="flex justify-center items-center min-h-[calc(100vh-56px-64px-20px-24px-56px-48px)]">
        <div class="flex flex-col relative">
          <NuxtImg
            src="/placeholder.png"
            width="500"
            height="500"
            alt="Placeholder Image"
            priority
          />
          <div class="absolute -bottom-8 right-0">
            <NuxtLink
              href="https://www.freepik.com"
              target="_blank"
              rel="noopener noreferrer"
              class="text-xs text-muted-foreground"
            >
              Designed by Freepik
            </NuxtLink>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<style scoped>

</style>

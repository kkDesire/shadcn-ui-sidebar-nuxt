<script setup lang="ts">
// const { pageTitle } = useAppSate()
</script>

<template>
  <header class="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
    <div class="mx-4 sm:mx-8 flex h-14 items-center">
      <div class="flex items-center space-x-4 lg:space-x-0">
        <AppPanelSheeMenu />
        <h1 class="font-bold">
          <!-- {{ pageTitle }} -->
        </h1>
      </div>
      <div class="flex flex-1 items-center space-x-2 justify-end">
        <AppColorModeToggle />
        <ClientOnly>
          <AppPanelUserDropdown />
        </ClientOnly>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>

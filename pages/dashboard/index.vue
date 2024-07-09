<script setup lang="ts">
const { pageTitle } = useAppSate()
pageTitle.value = 'Dashboard'
</script>

<template>
  <div>
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink as-child>
            <NuxtLink href="/">
              Home
            </NuxtLink>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Dashboard</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
    <AppDemoPlaceholderContent />
  </div>
</template>

<style scoped></style>

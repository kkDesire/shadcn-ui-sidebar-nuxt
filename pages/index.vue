<script setup lang="ts">
definePageMeta({
  layout: false,
})
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header class="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
      <div class="container h-14 flex items-center">
        <NuxtLink
          href="/"
          class="flex justify-start items-center hover:opacity-85 transition-opacity duration-300"
        >
          <Icon name="lucide:panels-top-left" class="w-6 h-6 mr-3" />
          <span class="font-bold">shadcn/ui sidebar</span>
          <span class="sr-only">shadcn/ui sidebar</span>
        </NuxtLink>
        <nav class="ml-auto flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            class="rounded-full w-8 h-8 bg-background"
            as-child
          >
            <NuxtLink href="https://github.com/kkDesire/shadcn-ui-sidebar-nuxt">
              <Icon name="lucide:github" class="h-[1.2rem] w-[1.2rem]" />
            </NuxtLink>
          </Button>
          <AppColorModeToggle />
        </nav>
      </div>
    </header>
    <main class="min-h-[calc(100vh-57px-97px)] flex-1">
      <div class="container relative pb-10">
        <section class="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-6">
          <h1 class="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
            Sidebar example built on top of shadcn/ui
          </h1>
          <span class="max-w-[750px] text-center text-lg font-light text-foreground">
            A stunning and functional retractable sidebar for Next.js using
            shadcn/ui complete with desktop and mobile responsiveness.
          </span>
          <div class="flex w-full items-center justify-center space-x-4 py-4 md:pb-6">
            <Button variant="default" as-child>
              <NuxtLink href="/dashboard">
                Demo
                <Icon name="lucide:arrow-right" class="ml-2" />
              </NuxtLink>
            </Button>
            <Button variant="outline" as-child>
              <NuxtLink
                href="https://ui.shadcn.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn shadcn/ui
              </NuxtLink>
            </Button>
          </div>
        </section>
        <div class="w-full flex justify-center relative">
          <NuxtImg
            src="/demo-light-min.png"
            width="1080"
            height="608"
            alt="demo"
            class="border rounded-xl shadow-sm dark:hidden"
            priority
          />
          <NuxtImg
            src="/demo-dark-min.png"
            width="1080"
            height="608"
            alt="demo-dark"
            priority
            class="border border-zinc-600 rounded-xl shadow-sm hidden dark:block dark:shadow-gray-500/5"
          />
          <NuxtImg
            src="/demo-mobile-light-min.png"
            width="228"
            height="494"
            alt="demo-mobile"
            class="border rounded-xl absolute bottom-0 right-0 hidden lg:block dark:hidden"
          />
          <NuxtImg
            src="/demo-mobile-dark-min.png"
            width="228"
            height="494"
            alt="demo-mobile"
            class="border border-zinc-600 rounded-xl absolute bottom-0 right-0 hidden dark:lg:block"
          />
        </div>
      </div>
    </main>
    <footer class="py-6 md:py-0 border-t border-border/40">
      <div class="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <p class="text-balance text-center text-sm leading-loose text-muted-foreground">
          Built on top of
          <NuxtLink
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noopener noreferrer"
            class="font-medium underline underline-offset-4"
          >
            shadcn/ui
          </NuxtLink>
          . The source code is available on
          <NuxtLink
            href="https://github.com/kkDesire/shadcn-ui-sidebar-nuxt"
            target="_blank"
            rel="noopener noreferrer"
            class-name="font-medium underline underline-offset-4"
          >
            GitHub
          </NuxtLink>
          .
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>

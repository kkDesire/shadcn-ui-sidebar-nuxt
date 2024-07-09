<script setup lang="ts">

</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        variant="outline"
        class="relative h-8 w-8 rounded-full"
      >
        <Avatar class="h-8 w-8">
          <AvatarImage src="#" alt="Avatar" />
          <AvatarFallback class="bg-transparent">
            KD
          </AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>
    <!-- <TooltipProvider>
      <Tooltip>
        <TooltipTrigger as-child>

        </TooltipTrigger>
        <TooltipContent side="bottom">
          Profile
        </TooltipContent>
      </Tooltip>
    </TooltipProvider> -->
    <DropdownMenuContent class="w-56" align="end">
      <DropdownMenuLabel class="font-normal">
        <div class="flex flex-col space-y-1">
          <p class="text-sm font-medium leading-none">
            John Doe
          </p>
          <p class="text-xs leading-none text-muted-foreground">
            johndoe@example.com
          </p>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem class="hover:cursor-pointer" as-child>
          <NuxtLink href="/">
            <Icon name="lucide:layout-grid" class="w-4 h-4 mr-3 text-muted-foreground" />
            Dashboard
          </NuxtLink>
        </DropdownMenuItem>
        <DropdownMenuItem class="hover:cursor-pointer" as-child>
          <NuxtLink href="/">
            <Icon name="lucide:user" class="w-4 h-4 mr-3 text-muted-foreground" />
            Account
          </NuxtLink>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem class="hover:cursor-pointer">
        <Icon name="lucide:log-out" class="w-4 h-4 mr-3 text-muted-foreground" />
        Sign out
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import LookbookTable from "./lookbookTable.svelte";

  let showForm: boolean = false;
</script>

<div class="m-3 bg-background text-foreground rounded-md p-4 px-6 border">
  <div class="flex items-center">
    <h4
      class="text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-200 flex-1"
    >
      Lookbook
    </h4>
    <div class="glow-border mr-4">
      <Button variant="outline" class="glow-border-content">Export</Button>
    </div>
  </div>
  <LookbookTable {showForm} />
</div>

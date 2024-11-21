<script setup lang="ts">
import TreeViewModal from "./components/TreeViewModal.vue";
import mockFolders from "./mock/mockFolders";
import { Folder } from "./types/Folder";
import { computed, ref } from "vue";

const isModalOpened = ref<boolean>(false);

const selectedFolder = ref<Folder | undefined>(undefined);

const path = computed(() => dfs(mockFolders[0], selectedFolder.value?.id ?? ""));

function dfs(folder: Folder, id: string | number): string {
    if (!id) {
        return "";
    }

    if (folder.id === id) {
        return folder.name;
    }

    if (folder.children) {
        for (const child of folder.children) {
            const result = dfs(child, id);
            if (result) {
                return folder.name + "/" + result;
            }
        }
    }
    return "";
}
</script>

<template>
    <div class="selected-folder">
        <p v-if="!!path">Выбрана папка {{ path }}</p>
        <p v-else>Папка не выбрана</p>
    </div>

    <button @click="isModalOpened = true">Открыть</button>

    <TreeViewModal
        v-model="isModalOpened"
        :folders="mockFolders"
        :selected-folder="selectedFolder"
        @update:selected-folder="selectedFolder = $event"
    />
</template>

<style lang="scss" src="./style.scss" />
<style lang="scss">
.selected-folder {
    margin-bottom: 20px;
}
</style>

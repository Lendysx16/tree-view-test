<script setup lang="ts">
import { Folder } from "../types/Folder";
import TreeViewItem from "./TreeViewItem.vue";
import { onMounted, ref } from "vue";

type Props = {
    folders: Folder[];
};

const props = defineProps<Props>();
const selectedFolder = defineModel<Folder | undefined>("selectedFolder", { required: false });

const foldersAreOpened = ref<Record<string, boolean>>({});
const foldersWithUUID = ref<Folder[]>();

onMounted(() => {
    foldersWithUUID.value = props.folders.map((folder) => setIsOpen(folder));
});

function setIsOpen(folder: Folder): Folder {
    if (folder.children?.length) {
        folder.children = folder.children.map((child) => setIsOpen(child));
    }

    foldersAreOpened.value![folder.id] = false;

    return folder;
}

function toggleFolder(id: string | number) {
    foldersAreOpened.value![id] = !foldersAreOpened.value![id];
}
</script>

<template>
    <div class="tree-view">
        <TreeViewItem
            v-for="folder in foldersWithUUID"
            :key="folder.id"
            :folder="folder"
            :selected-folder="selectedFolder"
            :folders-are-opened="foldersAreOpened"
            :open-folders="foldersAreOpened"
            @toggle="toggleFolder"
            @select="selectedFolder = $event.id === selectedFolder?.id ? undefined : $event"
        />
    </div>
</template>

<style lang="scss">
.tree-view {
    display: flex;
    flex-direction: column;
    gap: 10px;
    place-items: flex-start flex-start;
}
</style>

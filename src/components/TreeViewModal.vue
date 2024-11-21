<script setup lang="ts">
import { Folder } from "../types/Folder";
import Modal from "./Modal.vue";
import TreeView from "./TreeView.vue";
import { ref } from "vue";

type Emits = { (e: "update:selected-folder", folder?: Folder): void };

type Props = {
    title?: string;
    folders?: Folder[];
    selectedFolder?: Folder;
};

const props = withDefaults(defineProps<Props>(), {
    title: "Выбор папки",
    folders: () => [],
    selectedFolder: undefined,
});

const emits = defineEmits<Emits>();

const isModalOpened = defineModel<boolean>("modelValue", { required: true, default: false });
const draftSelectedFolder = ref<Folder | undefined>(props.selectedFolder);

function updateSelectedFolder() {
    if (!draftSelectedFolder.value) {
        emits("update:selected-folder", undefined);
        isModalOpened.value = false;
        return;
    }

    emits("update:selected-folder", draftSelectedFolder.value);
    isModalOpened.value = false;
}

function close() {
    draftSelectedFolder.value = props.selectedFolder;
    isModalOpened.value = false;
}
</script>

<template>
    <Modal v-model="isModalOpened" title="Выбор папки">
        <template #content> <TreeView v-model:selected-folder="draftSelectedFolder" :folders="folders" /> </template>
        <template #buttons>
            <button @click="updateSelectedFolder">Ок</button>
            <button @click="close">Закрыть</button>
        </template>
    </Modal>
</template>

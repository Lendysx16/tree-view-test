<script setup lang="ts">
import { Folder } from "../types/Folder";
import { computed } from "vue";

type Props = {
    folder: Folder;
    foldersAreOpened: Record<string, boolean>;
    selectedFolder?: Folder;
};

type Emits = {
    (e: "toggle", id: string | number): void;
    (e: "select", folder: Folder): void;
};

const props = defineProps<Props>();
defineEmits<Emits>();

const isOpened = computed(() => props.foldersAreOpened[props.folder.id]);
</script>

<template>
    <div class="tree-view-item">
        <div class="tree-view-item__group">
            <span
                :class="{
                    'tree-view-item__folder-name': true,
                    'tree-view-item__folder-name--selected': selectedFolder?.id === folder.id,
                }"
                @click="$emit('select', folder)"
            >
                {{ folder.name }}
            </span>
            <button v-if="folder.children?.length" class="tree-view-item__button" @click="$emit('toggle', folder.id)">
                {{ isOpened ? "-" : "+" }}
            </button>
        </div>
        <ul v-show="isOpened">
            <TreeViewItem
                v-for="child in folder.children"
                :key="child.id"
                :selected-folder="selectedFolder"
                class="tree-view-item__list"
                :folder="child"
                :folders-are-opened="foldersAreOpened"
                @toggle="$emit('toggle', $event)"
                @select="$emit('select', $event)"
            />
        </ul>
    </div>
</template>

<style lang="scss">
.tree-view-item {
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;

    margin-left: 20px;
}

.tree-view-item__list {
    display: flex;
    margin-left: 20px;
}

.tree-view-item__folder-name {
    cursor: pointer;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }

    &--selected {
        color: blue;
    }
}

.tree-view-item__button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 35px;
    height: 20px;
    padding: 0;

    color: #1a1a1a;

    background-color: transparent;

    &:hover {
        background-color: #f0f0f0;
    }
}

.tree-view-item__group {
    display: flex;
    gap: 10px;
    align-items: center;
}
</style>

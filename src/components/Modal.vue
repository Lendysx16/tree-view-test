<script setup lang="ts">
type Props = {
    title: string;
};

defineProps<Props>();

const modelValue = defineModel<boolean>("modelValue", { required: true, default: false });
</script>

<template>
    <Teleport to="body">
        <div v-show="modelValue" class="modal" @click="modelValue = false">
            <div class="modal__content" @click.stop>
                <h3 class="modal__title">{{ title }}</h3>
                <div class="modal__slot">
                    <slot name="content" />
                </div>
                <div class="modal__buttons">
                    <slot name="buttons">
                        <button @click="modelValue = false">Закрыть</button>
                    </slot>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style lang="scss">
.modal {
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    background-color: rgb(0 0 0 / 50%);
}

.modal__content {
    display: flex;
    flex-direction: column;
    gap: 20px;

    width: 50%;
    height: 80%;
    padding: 20px;

    color: rgb(0 0 0);

    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 10px rgb(0 0 0 / 50%);
}

.modal__title {
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 600;
}

.modal__buttons {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
}

.modal__slot {
    overflow-y: auto;
    flex: 1;
}
</style>

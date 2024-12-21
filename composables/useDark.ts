import { type Ref } from 'vue';

export const useDark = (): Ref<boolean> => {
    const colorMode = useColorMode();
    const isDark = computed({
        get() {
            return colorMode.value === 'dark';
        },
        set() {
            colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
        },
    });
    return isDark;
};

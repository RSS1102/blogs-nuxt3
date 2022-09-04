<template>
    <div class="blogs">
        <div class="side-menu">
            <div class="blogs-logo ">
                RSS1102
            </div>
            <NLayout has-sider>
                <NLayoutSider :width="240">
                    <NScrollbar style="max-height: 100vh">
                        <n-menu :options="menuOptions" @update:value="handleValue" />
                    </NScrollbar>
                </NLayoutSider>
            </NLayout>
        </div>
        <div class="blogs-main">
            <NLayout>
                <NScrollbar style="max-height: 100vh">

                </NScrollbar>
            </NLayout>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { NLayout, NLayoutSider, NScrollbar, NEllipsis, NMenu, MenuOption } from 'naive-ui';

interface dataItemType {
    id: number,
    name: string
}
interface dataType {
    id: number,
    name: string,
    children: Array<dataItemType> | null

}
const menuOptions: MenuOption[] = reactive([])
const menuItem: Array<dataType> = [
    { id: 1, name: "导航栏导航栏导航栏导航栏1", children: null },
    {
        id: 2, name: "导航栏2", children: [
            { id: 21, name: "内容1", },
            { id: 22, name: "内容2", },
            { id: 23, name: "内容3", },
            { id: 24, name: "内容4", },
            { id: 25, name: "内容1", },
            { id: 26, name: "内容2", },
            { id: 27, name: "内容3", },
            { id: 28, name: "内容4", },
        ]
    },
    {
        id: 3, name: "导航栏3", children: [
            { id: 21, name: "内容1", },
            { id: 122, name: "内容2", },
            { id: 123, name: "内容3", },
            { id: 124, name: "内容4", },
            { id: 125, name: "内容1", },
            { id: 126, name: "内容2", },
            { id: 127, name: "内容3", },
            { id: 128, name: "内容4", },
        ]
    },
]

/**
 * @de 筛选导航栏
 * @de 后端筛选isShow=true;
 */
menuItem.forEach(item => {
    let firstItems: MenuOption = {
        key: item.id,
        label: () => h(NEllipsis, null, { default: () => item.name }),
        children: [],
        disabled: false
    }
    menuOptions.push(firstItems)
    item.children?.length ?
        item.children.forEach(item => {
            let secondItems = {
                key: item.id,
                label: () => h(NEllipsis, null, { default: () => item.name }),
            }
            firstItems.children?.push(secondItems)
        }) : firstItems.disabled = true
})
const handleValue = (key: string, item: MenuOption) => {
    console.log(key)
}
</script>

<style lang="scss" scoped>
.blogs {
    display: flex;
}

.side-menu {
    width: 240px;

    .n-scrollbar {
        max-height: 120px;
    }

    .blogs-logo {
        padding: 20px 0 10px 0;
        font-size: 28px;
        text-align: center;
        font-family: "fontone";
        font-weight: bolder;
        background: linear-gradient(90deg, #261b8c 5%, #9f3a1c 80%, #d64e24 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}


.blogs-main {
    width: 100%;
}
</style>
